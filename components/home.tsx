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
    const footerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const sections = [aboutRef.current, footerRef.current];

        sections.forEach((section) => {
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
        });
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

            {/* Editorial About Section */}
            <section ref={aboutRef} className="max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full text-black">
                <div className="w-full border-t border-black mb-8 animate-text"></div>

                <div className="flex flex-col md:flex-row justify-between items-start mb-16 animate-text">
                    <h2 className="text-xl font-bold fontHeading uppercase tracking-widest">About</h2>
                    <h2 className="hidden md:block text-xl font-bold fontHeading uppercase tracking-widest">MUHD RASHID</h2>
                </div>

                <div className="mb-24 animate-text">
                    <p className="text-4xl md:text-6xl font-light leading-[1.1] tracking-tight fontHeading max-w-5xl">
                        I am a Full Stack Developer building scalable, performance-first applications for the modern web. I craft digital experiences that act as the bridge between robust engineering and intuitive design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 fontPara">
                    <div className="flex flex-col gap-4 animate-text">
                        <h3 className="text-lg font-bold border-b border-gray-300 pb-2 mb-2 w-fit">Background</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            My journey is rooted in full-stack development with a strong focus on backend architecture, microservices, and system scalability. I thrive in complex environments where performance and reliability are paramount.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 animate-text">
                        <h3 className="text-lg font-bold border-b border-gray-300 pb-2 mb-2 w-fit">Technical Focus</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            I specialize in the JavaScript ecosystem, leveraging Next.js, Node.js, and TypeScript. My stack includes PostgreSQL, Redis, and AWS services, ensuring every application is built on a solid, future-proof foundation.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 animate-text">
                        <h3 className="text-lg font-bold border-b border-gray-300 pb-2 mb-2 w-fit">Philosophy</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            I believe in clean architecture and the art of code. For me, development isn't just about making things work—it's about creating systems that are maintainable, efficient, and a joy to use.
                        </p>
                    </div>
                </div>

                <div className="mt-20 animate-text">
                    <button className="
                        flex items-center gap-3 px-8 py-4 
                        bg-black text-white font-bold text-lg rounded-full
                        transition-transform duration-300 hover:scale-105
                    ">
                        Download Resume
                        <FiDownload className="text-xl" />
                    </button>
                </div>
            </section>

            {/* Editorial Footer */}
            <footer ref={footerRef} className="max-w-7xl mx-auto px-6 md:px-10 pb-10 w-full text-black">
                <div className="w-full border-t border-black mb-12 animate-text"></div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 fontHeading animate-text">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
                        <Link href="mailto:rashiee973@gmail.com" className="text-xl hover:underline decoration-1 block mb-2 w-fit">
                            rashiee973@gmail.com
                        </Link>
                        <p className="text-gray-500 mt-4 max-w-xs fontPara">
                            Open for opportunities and collaborations. Feel free to reach out.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Social</h4>
                        <Link href="https://www.linkedin.com/in/rashidpalathingal/" className="text-lg hover:underline w-fit">LinkedIn</Link>
                        <Link href="https://github.com/rashhiee" className="text-lg hover:underline w-fit">GitHub</Link>
                        <Link href="https://www.instagram.com/mhd.rashiee/" className="text-lg hover:underline w-fit">Instagram</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Menu</h4>
                        <Link href="/" className="text-lg hover:underline w-fit">Home</Link>
                        <Link href="/projects" className="text-lg hover:underline w-fit">Projects</Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end mt-20 pt-8 border-t border-gray-200 text-sm text-gray-500 fontPara animate-text">
                    <p>&copy; {new Date().getFullYear()} Muhd Rashid. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed & Built by Rashid</p>
                </div>
            </footer>
        </main>
    )
}

export default HomePage
