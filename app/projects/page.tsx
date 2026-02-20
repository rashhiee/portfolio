"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import imageone from "../../public/autospaceprtf.png";
import imagetwo from "../../public/shoeboxprtf.jpg";
import imagethree from "../../public/zanpadprtf.jpg";

const projects = [
    {
        id: 1,
        title: "Autospace",
        slug: "autospace",
        image: imageone,
        number: "#01–03"
    },
    {
        id: 2,
        title: "Shoebox",
        slug: "shoebox",
        image: imagetwo,
        number: "#04–06"
    },
    {
        id: 3,
        title: "Zanpad",
        slug: "zanpad",
        image: imagethree,
        number: "#07–09"
    },
    {
        id: 4,
        title: "Portfolio",
        slug: "portfolio",
        image: imageone, // Using imageone as a placeholder for the 4th
        number: "#10–12"
    }
];

export default function ProjectsPage() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <main className="bg-[#E8E8E3] lg:h-screen lg:overflow-hidden text-black fontPara selection:bg-black selection:text-white pt-20 md:pt-24 pb-8 flex flex-col justify-center">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start lg:items-center">

                {/* Left Side: Sticky Panel */}
                <aside className="w-full md:w-1/4 h-fit md:sticky md:top-32 flex flex-col gap-4 md:gap-8 py-2 md:py-4">
                    <h1 className="text-xl md:text-2xl font-bold tracking-widest fontHeading">WORK</h1>

                    <nav className="flex flex-row md:flex-col gap-4 md:gap-2 overflow-x-auto md:overflow-visible no-scrollbar pb-2 md:pb-0">
                        {projects.map((project) => (
                            <Link
                                href={`/projects/${project.slug}`}
                                key={project.id}
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`
                                    text-xs md:text-base transition-all duration-300 w-fit font-medium whitespace-nowrap md:whitespace-normal px-2 py-1 bg-black/5 rounded-md md:bg-transparent md:p-0
                                    ${hoveredId === project.id ? "text-black md:translate-x-2" : "text-black/30"}
                                `}
                            >
                                {project.title}
                            </Link>
                        ))}
                    </nav>
                </aside>

                {/* Right Side: Grid */}
                <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-10 md:gap-y-8 items-center">
                    {projects.map((project) => (
                        <Link
                            href={`/projects/${project.slug}`}
                            key={project.id}
                            className="group relative flex flex-col gap-1.5"
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Metadata */}
                            <div className="flex justify-between text-[9px] font-bold text-black/50 uppercase tracking-widest px-1">
                                <span>{project.number}</span>
                                <span>{project.title.slice(0, 3)}</span>
                            </div>

                            {/* Image Card */}
                            <div className={`
                                relative aspect-[3/2] w-full overflow-hidden transition-all duration-700 ease-in-out
                                ${hoveredId && hoveredId !== project.id ? "opacity-40 grayscale-[0.3]" : "opacity-100"}
                            `}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={`
                                        object-cover transition-all duration-700 ease-in-out
                                        ${hoveredId === project.id ? "scale-105 blur-sm brightness-75" : "scale-100"}
                                    `}
                                />

                                {/* Hover Overlay Text */}
                                <div className={`
                                    absolute inset-0 flex items-center justify-start p-6 md:p-8 transition-opacity duration-500
                                    ${hoveredId === project.id ? "opacity-100" : "opacity-0 md:opacity-0"}
                                    md:group-hover:opacity-100
                                `}>
                                    <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-medium fontHeading leading-tight">
                                        {project.title}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Background Texture/Noise Overlay (Subtle) */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </main>
    );
}
