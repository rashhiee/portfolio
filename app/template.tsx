"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        gsap.fromTo(containerRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power4.out",
                clearProps: "all"
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="w-full">
            {children}
        </div>
    );
}
