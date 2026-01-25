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
        category: "Automotive Technology",
        image: imageone,
        slug: "autospace",
        description:
            "A multi-tenant car parking management platform with role-based workflows for owners, managers, and valets.",
        location: "San Francisco, USA",
        date: "2024",
        tags: ["UI/UX", "IoT", "React"],
        visuals: "3 visuals",
    },
    {
        id: 2,
        title: "Shoebox",
        category: "E-commerce Experience",
        image: imagetwo,
        slug: "shoebox",
        description:
            "A niche e-commerce platform focused on footwear discovery, catalog management, and seamless checkout experiences.",
        location: "Berlin, Germany",
        date: "2024",
        tags: ["E-Commerce", "Next.js", "Stripe"],
        visuals: "5 visuals",
    },
    {
        id: 3,
        title: "Zanpad",
        category: "Productivity",
        image: imagethree,
        slug: "zanpad",
        description:
            "A lightweight Next.js note-taking application for creating, organizing, and persisting personal notes.",
        location: "Remote",
        date: "2025",
        tags: ["SaaS", "Productivity", "Minimalism"],
        visuals: "4 visuals",
    },
];

export default function ProjectsPage() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Floating Image Preview - Positioned Absolute */}
            <div className="hidden lg:block absolute top-[20%] right-[10%] z-0 h-[55%] w-[30%] pointer-events-none">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`
                        absolute inset-0 w-full h-full transition-all duration-700 ease-out
                        ${hoveredProject === project.id ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}
                    `}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover rounded-xl shadow-2xl"
                            priority
                        />
                    </div>
                ))}
            </div>

            <div className="flex flex-col px-6 md:px-10 gap-2 relative z-10 max-w-7xl mx-auto">
                <p className="text-5xl font-bold my-8 fontHeading">Projects</p>

                <div className="flex flex-col border-t border-black text-black">
                    {projects.map((project) => (
                        <Link href={`/projects/${project.slug}`} key={project.id}>
                            <div
                                className="group w-full lg:w-[55%] py-12 md:py-20 border-b border-black cursor-pointer transition-all duration-300"
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div className="flex flex-col">
                                    <h3
                                        className={`
                        text-5xl md:text-8xl font-bold uppercase transition-all duration-500 fontTitle
                        ${hoveredProject && hoveredProject !== project.id
                                                ? "blur-[3px] opacity-40"
                                                : "opacity-100"
                                            }
                        group-hover:translate-x-4
                    `}
                                    >
                                        {project.title}
                                    </h3>
                                    <div
                                        className={`
                        mt-4 flex flex-col md:flex-row gap-4 md:items-center text-lg text-gray-500 fontPara transition-all duration-500
                        ${hoveredProject && hoveredProject !== project.id
                                                ? "opacity-0 blur-[2px]"
                                                : "opacity-100"
                                            }
                            group-hover:translate-x-4
                    `}
                                    >
                                        <span className="text-black font-medium">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
