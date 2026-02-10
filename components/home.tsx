'use client';
import Link from 'next/link'



import Shuffle from '../components/Shuffle';


import { FiDownload, FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);




const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];





// ... existing imports

const HomePage = () => {


    const containerRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const section = aboutRef.current;
        if (!section) return;

        gsap.fromTo(section.querySelectorAll('.animate-text'),
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <main ref={containerRef} className='bg-[#E8E8E3] flex flex-col gap-1 relative'>
            {/* Hero Section */}
            <div className="h-[90vh] w-full relative px-6 flex flex-col gap-2">
                {/* Content */}
                <div className="relative z-10 w-full h-full flex flex-col pointer-events-none">
                    <div className="h-[50%] w-full flex flex-col items-center md:px-5 justify-center pointer-events-auto">
                        <h1 className="w-full text-center text-black font-bold leading-none fontTitle
                        text-[90px] xs:text-[110px] sm:text-[130px] md:text-[168px] ">
                            MUHD <span className="md:hidden block "></span> RASHID
                        </h1>
                        <div className='text-2xl fontCode text-center mt-2'>
                            <Shuffle
                                text="Full Stack Developer"
                                shuffleDirection="right"
                                duration={0.35}
                                animationMode="evenodd"
                                shuffleTimes={1}
                                loop={true}
                                loopDelay={0.8}
                                ease="power3.out"
                                stagger={0.03}
                                threshold={0.1}
                                triggerOnce={true}
                                triggerOnHover={true}
                                respectReducedMotion={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Editorial Section (About + Footer) */}
            <section ref={aboutRef} className="max-w-[1600px] mx-auto px-6 md:px-12 pb-10 text-black w-full">
                <div className="w-full border-t border-black mb-8 animate-text"></div>

                {/* Large Headline */}
                <div className="mb-20 animate-text">
                    <h2 className="text-4xl md:text-7xl font-medium leading-[1.05] tracking-tight fontHeading w-full">
                        Hello world, I&apos;m Muhd Rashid. I&apos;m a full stack developer building scalable, performance-first applications for the modern web.
                    </h2>
                </div>

                <div className="w-full border-t border-black/10 mb-8 animate-text"></div>

                {/* Three Column Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 fontPara mb-20">
                    <div className="flex flex-col gap-4 animate-text">
                        <p className="text-black/80 leading-relaxed text-lg">
                            My journey is rooted in full-stack development with a strong focus on backend architecture, microservices, and system scalability. I thrive in complex environments where performance and reliability are paramount.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 animate-text">
                        <p className="text-black/80 leading-relaxed text-lg">
                            I specialize in the JavaScript ecosystem, leveraging Next.js, Node.js, and TypeScript. My stack includes PostgreSQL, Redis, and AWS services, ensuring every application is built on a solid, future-proof foundation.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 animate-text">
                        <p className="text-black/80 leading-relaxed text-lg">
                            I believe in clean architecture and the art of code. For me, development isn&apos;t just about making things work—it&apos;s about creating systems that are maintainable, efficient, and a joy to use. Speaking of communications, if you&apos;d like to get in touch regarding a project, or if you just want to talk shop, don&apos;t be shy.
                        </p>
                    </div>
                </div>

                <div className="w-full border-t border-black mb-10 animate-text"></div>

                {/* Bottom Metadata & Socials */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start animate-text">
                    {/* Social Pills */}
                    <div className="md:col-span-4 flex flex-wrap gap-2">
                        <Link href="https://www.instagram.com/mhd.rashiee/" className="px-5 py-2 bg-black text-white rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-black/80 transition-colors">
                            Instagram
                        </Link>
                        <Link href="https://github.com/rashhiee" className="px-5 py-2 bg-black text-white rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-black/80 transition-colors">
                            GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/rashidpalathingal/" className="px-5 py-2 bg-black text-white rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-black/80 transition-colors">
                            LinkedIn
                        </Link>
                    </div>

                    {/* Metadata */}
                    <div className="md:col-span-4 text-[10px] leading-relaxed tracking-tighter fontHeading">
                        <span className="font-bold uppercase">Design •</span> This portfolio features a minimal, editorial aesthetic focused on typography and white space. The primary font is a clean sans-serif for readability and impact.
                    </div>

                    <div className="md:col-span-4 text-[10px] leading-relaxed tracking-tighter fontHeading">
                        <span className="font-bold uppercase">Technology •</span> Built with Next.js, Tailwind CSS, and Framer Motion. Hosted on Vercel with automated CI/CD workflows for seamless deployment.
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-20 pt-8 text-[10px] font-bold uppercase tracking-widest text-black/40 animate-text">
                    © COPYRIGHT 2018–{new Date().getFullYear()}
                </div>
            </section>
        </main>
    )
}

export default HomePage
