'use client';

import React, { useEffect, useRef } from 'react';
import { Renderer, Camera, Geometry, Program, Mesh } from 'ogl';

interface ParticlesProps {
    particleCount?: number;
    particleSpread?: number;
    speed?: number;
    particleColors?: string[];
    moveParticlesOnHover?: boolean;
    particleHoverFactor?: number;
    alphaParticles?: boolean;
    particleBaseSize?: number;
    sizeRandomness?: number;
    cameraDistance?: number;
    disableRotation?: boolean;
    pixelRatio?: number;
    className?: string;
}

const defaultColors: string[] = ['#ffffff', '#ffffff', '#ffffff'];

const hexToRgb = (hex: string): [number, number, number] => {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex
            .split('')
            .map(c => c + c)
            .join('');
    }
    const int = parseInt(hex, 16);
    const r = ((int >> 16) & 255) / 255;
    const g = ((int >> 8) & 255) / 255;
    const b = (int & 255) / 255;
    return [r, g, b];
};

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vRandom = random;
    vColor = color;
    
    // Position is already updated in JS, just apply model/view/proj
    vec4 mPos = modelMatrix * vec4(position, 1.0);
    vec4 mvPos = viewMatrix * mPos;

    if (uSizeRandomness == 0.0) {
      gl_PointSize = uBaseSize;
    } else {
      gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    }
    
    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  
  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor, 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      // gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
       gl_FragColor = vec4(vColor, circle);

    }
  }
`;

const Particles: React.FC<ParticlesProps> = ({
    particleCount = 200,
    particleSpread = 10,
    speed = 0.1,
    particleColors,
    moveParticlesOnHover = false,
    particleHoverFactor = 3,
    alphaParticles = false,
    particleBaseSize = 100,
    sizeRandomness = 1,
    cameraDistance = 20,
    disableRotation = false,
    pixelRatio = 1,
    className
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef<{ x: number; y: number }>({ x: 9999, y: 9999 });
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const renderer = new Renderer({ dpr: pixelRatio, depth: false, alpha: true });
        const gl = renderer.gl;
        canvasRef.current = gl.canvas;
        container.appendChild(gl.canvas);
        gl.clearColor(0, 0, 0, 0);

        gl.canvas.style.width = '100%';
        gl.canvas.style.height = '100%';
        gl.canvas.style.display = 'block';
        gl.canvas.style.pointerEvents = 'auto';

        const camera = new Camera(gl, { fov: 15 });
        camera.position.set(0, 0, cameraDistance);

        const resize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
        };
        window.addEventListener('resize', resize, false);
        resize();

        const handleMouseMove = (e: MouseEvent) => {
            if (!container) return;
            const rect = container.getBoundingClientRect();
            const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

            // Convert to world coordinates
            const fovRad = (15 * Math.PI) / 180;
            const height = 2 * cameraDistance * Math.tan(fovRad / 2);
            const width = height * (rect.width / rect.height);

            mouseRef.current = {
                x: nx * (width / 2),
                y: ny * (height / 2)
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: 9999, y: 9999 };
        };

        if (moveParticlesOnHover) {
            container.addEventListener('mousemove', handleMouseMove, { passive: true });
            container.addEventListener('mouseleave', handleMouseLeave);
        }

        const count = particleCount;

        // Data arrays for physics
        const dataPositions = new Float32Array(count * 3);
        const originPositions = new Float32Array(count * 3);
        const velocities = new Float32Array(count * 3);

        const randoms = new Float32Array(count * 4);
        const colors = new Float32Array(count * 3);
        const palette = particleColors && particleColors.length > 0 ? particleColors : defaultColors;

        for (let i = 0; i < count; i++) {
            const x = (Math.random() * 2 - 1) * particleSpread;
            const y = (Math.random() * 2 - 1) * particleSpread;
            const z = (Math.random() * 2 - 1) * particleSpread * 10.0; // matches shader spread logic

            // Position & Origin
            dataPositions.set([x, y, z], i * 3);
            originPositions.set([x, y, z], i * 3);
            velocities.set([0, 0, 0], i * 3);

            randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
            const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
            colors.set(col, i * 3);
        }

        const geometry = new Geometry(gl, {
            position: { size: 3, data: dataPositions },
            random: { size: 4, data: randoms },
            color: { size: 3, data: colors }
        });

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                uBaseSize: { value: particleBaseSize * pixelRatio },
                uSizeRandomness: { value: sizeRandomness },
                uAlphaParticles: { value: alphaParticles ? 1 : 0 },
            },
            transparent: true,
            depthTest: false
        });

        const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

        let animationFrameId: number;
        let lastTime = performance.now();
        let elapsed = 0;

        const update = (t: number) => {
            animationFrameId = requestAnimationFrame(update);
            const delta = t - lastTime;
            lastTime = t;
            elapsed += delta * speed;

            program.uniforms.uTime.value = elapsed * 0.001;

            // CPU Physics
            const mouseX = mouseRef.current.x;
            const mouseY = mouseRef.current.y;
            // Radius of influence in world units
            const radius = 4.0;
            const radiusSq = radius * radius;

            // Physics Params
            const stiffness = 0.05;  // Force to return to origin
            const damping = 0.90;    // Friction (0.9 = slow down, 0.95 = bouncy)
            const attractStrength = particleHoverFactor * 0.05; // Mouse force

            for (let i = 0; i < count; i++) {
                const idx = i * 3;
                let px = dataPositions[idx];
                let py = dataPositions[idx + 1];
                let pz = dataPositions[idx + 2];

                const ox = originPositions[idx];
                const oy = originPositions[idx + 1];
                const oz = originPositions[idx + 2];

                let vx = velocities[idx];
                let vy = velocities[idx + 1];
                let vz = velocities[idx + 2];

                // 1. Spring force to origin
                const dxCurrent = px - ox;
                const dyCurrent = py - oy;
                const dzCurrent = pz - oz;

                vx -= dxCurrent * stiffness;
                vy -= dyCurrent * stiffness;
                vz -= dzCurrent * stiffness;

                // 2. Mouse Attraction
                if (moveParticlesOnHover && mouseX < 9000) {
                    const dxMouse = mouseX - px;
                    const dyMouse = mouseY - py;
                    const distSq = dxMouse * dxMouse + dyMouse * dyMouse;

                    if (distSq < radiusSq) {
                        const dist = Math.sqrt(distSq);
                        const force = (radius - dist) / radius; // 1 at center

                        // Direction * force * strength
                        vx += (dxMouse / dist) * force * attractStrength;
                        vy += (dyMouse / dist) * force * attractStrength;
                    }
                }

                // Apply velocity
                vx *= damping;
                vy *= damping;
                vz *= damping;

                px += vx;
                py += vy;
                pz += vz;

                // Store back
                dataPositions[idx] = px;
                dataPositions[idx + 1] = py;
                dataPositions[idx + 2] = pz;

                velocities[idx] = vx;
                velocities[idx + 1] = vy;
                velocities[idx + 2] = vz;
            }

            // Update GPU buffer
            geometry.attributes.position.data = dataPositions;
            geometry.attributes.position.needsUpdate = true;

            // Rotation
            if (!disableRotation) {
                particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
                particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
                particles.rotation.z += 0.01 * speed;
            }

            renderer.render({ scene: particles, camera });
        };

        animationFrameId = requestAnimationFrame(update);

        return () => {
            window.removeEventListener('resize', resize);
            if (moveParticlesOnHover) {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseleave', handleMouseLeave);
            }
            cancelAnimationFrame(animationFrameId);
            if (container.contains(gl.canvas)) {
                container.removeChild(gl.canvas);
            }
        };
    }, [
        particleCount,
        particleSpread,
        speed,
        particleColors,
        moveParticlesOnHover,
        particleHoverFactor,
        alphaParticles,
        particleBaseSize,
        sizeRandomness,
        cameraDistance,
        disableRotation,
        pixelRatio
    ]);

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-full ${className}`}
            style={{
                minHeight: '400px',
                cursor: moveParticlesOnHover ? 'pointer' : 'default'
            }}
        />
    );
};

export default Particles;