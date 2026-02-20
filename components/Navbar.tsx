"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Rashid", path: "/" },
    { name: "Projects", path: "/projects" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
            <div className="flex items-center bg-black/90 backdrop-blur-sm p-1 md:p-1.5 rounded-full border border-white/10 shadow-lg relative">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`
                relative px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-300
                ${isActive ? "text-black" : "text-white/70"}
                z-10
              `}
                        >
                            <span className="relative z-10">{item.name}</span>
                            {isActive && (
                                <div className="absolute inset-0 bg-[#E8E8E3] rounded-full -z-0" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}