'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function CurtainFooter({ children }: { children: React.ReactNode }) {
    const [isLifted, setIsLifted] = useState(false);
    const scrollTriggerRef = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Lift curtain when trigger is visible
                        setIsLifted(true);
                    } else {
                        // Lower curtain when scrolling back up
                        setIsLifted(false);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (scrollTriggerRef.current) {
            observer.observe(scrollTriggerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Main Content Wrapper - lifts by 60vh */}
            <div
                className={`relative z-10 bg-black transition-transform duration-[1500ms] ease-out ${isLifted ? '-translate-y-[50vh]' : ''
                    }`}
            >
                {children}

                {/* Scroll trigger */}
                <div ref={scrollTriggerRef} className="h-[1px] "></div>
            </div>

            {/* Fixed Footer - 60vh height */}
            <footer className="fixed bottom-0 left-0 right-0 h-[50vh] bg-black text-white flex items-center justify-center z-0">

                <div className="max-w-6xl mx-auto text-center px-8">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 fontTitle leading-tight">
                        READY TO COLLAB?<br />
                        REACH ME OUT!
                    </h2>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 text-lg fontHeading">
                        <Link
                            href="https://www.linkedin.com/in/rashidpalathingal/"
                            className="
    relative inline-block font-bold text-xl fontHeading px-1
    text-white underline hover:no-underline
    transition-colors duration-300
    hover:text-black

    after:content-[''] after:absolute after:left-0 after:bottom-0
    after:w-full after:h-full after:bg-white
    after:origin-bottom after:scale-y-0 after:transition-transform after:duration-500
    after:z-0

    hover:after:scale-y-100
  "
                        >
                            <span className="relative z-10">Linkedin</span>
                        </Link>

                        <Link
                            href="mailto:rashiee973@gmail.com"
                            className="
                     relative inline-block font-bold text-xl fontHeading px-1
                    text-white underline hover:no-underline
                     transition-colors duration-300
                    hover:text-black

                    after:content-[''] after:absolute after:left-0 after:bottom-0
                     after:w-full after:h-full after:bg-white
                    after:origin-bottom after:scale-y-0 after:transition-transform after:duration-500
                     after:z-0

                     hover:after:scale-y-100
                       "
                        >
                            <span className="relative z-10">Email</span>
                        </Link>

                        <Link
                            href="https://www.instagram.com/mhd.rashiee/"
                            className="
    relative inline-block font-bold text-xl fontHeading px-1
    text-white underline hover:no-underline
    transition-colors duration-300
    hover:text-black

    after:content-[''] after:absolute after:left-0 after:bottom-0
    after:w-full after:h-full after:bg-white
    after:origin-bottom after:scale-y-0 after:transition-transform after:duration-500
    after:z-0

    hover:after:scale-y-100
  "
                        >
                            <span className="relative z-10">Instagram</span>
                        </Link>
                        <Link
                            href="https://github.com/rashhiee"
                            className="
    relative inline-block font-bold text-xl fontHeading px-1
    text-white underline hover:no-underline
    transition-colors duration-300
    hover:text-black

    after:content-[''] after:absolute after:left-0 after:bottom-0
    after:w-full after:h-full after:bg-white
    after:origin-bottom after:scale-y-0 after:transition-transform after:duration-500
    after:z-0

    hover:after:scale-y-100
  "
                        >
                            <span className="relative z-10">Github</span>
                        </Link>
                    </div>

                    <p className="text-sm text-gray-400 fontPara">© MUHD RASHID, 2025</p>
                </div>
            </footer>
        </>
    );
}