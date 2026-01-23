'use client';

import { useState } from 'react';
import Link from 'next/link'
import Clock from './Clock'
import Image from 'next/image'
import imageone from '../public/autospaceprtf.png'
import imagetwo from '../public/shoeboxprtf.jpg'
import imagethree from '../public/zanpadprtf.jpg'
import Shuffle from '../components/Shuffle';
import CurtainFooter from './Footer'
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiJavascript, SiExpress, SiNodedotjs, SiPostgresql, SiRabbitmq, SiRedis } from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';

const techLogos = [


    { node: <SiReact color='#ffffff' />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs color='#ffffff' />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript color='#ffffff' />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss color='#ffffff' />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiMongodb color='#ffffff' />, title: "Mongodb", href: "https://www.mongodb.com/" },
    { node: <SiJavascript color='#ffffff' />, title: "Javascript", href: "https://www.javascript.com/" },
    { node: <SiExpress color='#ffffff' />, title: "exoress", href: "https://expressjs.com/" },
    { node: <SiNodedotjs color='#ffffff' />, title: "Nodejs", href: "https://nodejs.org/en" },
    { node: <SiPostgresql color='#ffffff' />, title: "PostgreSQL", href: "https://www.postgresql.org/" },
    { node: <SiRabbitmq color='#ffffff' />, title: "RabbitMQ", href: "https://www.rabbitmq.com/" },
    { node: <SiRedis color='#ffffff' />, title: "Redis", href: "https://redis.io/" },

];


const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

const projects = [
    {
        id: 1,
        title: "Autospace",
        category: "Automotive Technology",
        image: imageone,
        slug: "autospace",
        description: "A multi-tenant car parking management platform with role-based workflows for owners, managers, and valets.",
        location: "San Francisco, USA",
        date: "2024",
        tags: ["UI/UX", "IoT", "React"],
        visuals: "3 visuals"
    },
    {
        id: 2,
        title: "Shoebox",
        category: "E-commerce Experience",
        image: imagetwo,
        slug: "shoebox",
        description: "A niche e-commerce platform focused on footwear discovery, catalog management, and seamless checkout experiences.",
        location: "Berlin, Germany",
        date: "2024",
        tags: ["E-Commerce", "Next.js", "Stripe"],
        visuals: "5 visuals"
    },
    {
        id: 3,
        title: "Zanpad",
        category: "Productivity",
        image: imagethree,
        slug: "zanpad",
        description: "A lightweight Next.js note-taking application for creating, organizing, and persisting personal notes.",
        location: "Remote",
        date: "2025",
        tags: ["SaaS", "Productivity", "Minimalism"],
        visuals: "4 visuals"
    }
];

import Particles from './Particles'; // Import Particles

// ... existing imports

const HomePage = () => {
    // const [selectedProject, setSelectedProject] = useState<any>(null); // Removed modal state
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [visibleCount, setVisibleCount] = useState(6);

    const visibleProjects = projects.slice(0, visibleCount);
    const hasMore = projects.length > visibleCount;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    return (
        <CurtainFooter>
            <main className='bg-black flex flex-col gap-1 relative '>
                {/* Hero Section with Particles */}
                <div className="h-[90vh] w-full rounded-b-[30px] relative  px-6 flex flex-col gap-2 bg-white">

                    {/* Particles Background */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <Particles
                            particleColors={['#000000', '#000000']}
                            particleCount={500}
                            particleSpread={5}
                            speed={0.1}
                            particleBaseSize={100}
                            moveParticlesOnHover={true}
                            particleHoverFactor={5}
                            alphaParticles={false}
                            disableRotation={false}
                            className="pointer-events-auto"
                        />
                    </div>

                    {/* Content (z-10 to stay above particles) */}
                    <div className="relative z-10 w-full h-full flex flex-col pointer-events-none">


                        <div className="h-[50%] w-full flex flex-col items-center md:px-5 justify-center pointer-events-auto">
                            <h1 className="w-full text-center text-black font-bold leading-none fontTitle
                        text-[90px] xs:text-[110px] sm:text-[130px] md:text-[168px] ">
                                MUHD <span className="md:hidden block "></span> RASHID
                            </h1>
                            {/* <h2 className='md:px-5 text-2xl font-bold fontTitle '>Web Developer</h2> */}
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

                            {/* <Link
                                href="/"
                                className="
                                    relative inline-block w-fit font-bold text-xl fontHeading 
                                    text-black underline px-1  hover:no-underline z-0
                                    transition-colors duration-300
                                    hover:text-white 
                                    mt-8
                                    after:content-[''] after:absolute after:left-0 after:bottom-0
                                    after:w-full after:h-full after:bg-black after:origin-bottom
                                    after:scale-y-0 after:block after:transition-transform after:duration-600
                                    after:z-[-1]
                                    hover:after:scale-y-100
                                "
                            >
                                <span className="relative z-10">More about me</span>
                            </Link> */}
                        </div>

                        <div className="h-[50%] w-full flex justify-between 
                      md:flex-row flex-col p-10 gap-6 pointer-events-auto">


                            <div className="h-[300px] md:h-[240px]  flex flex-col gap-2 justify-end 
                        w-full md:w-[30%]">
                                <p className="fontPara  text-gray-600">
                                    Hi, I'm Rashid, a passionate Full Stack Web Developer focused on building fast, clean,
                                    and user-friendly digital experiences. I specialize in creating modern web
                                    applications using the latest technologies, with strong attention to detail
                                    and performance. I love turning ideas into real, functional products and
                                    continuously improving my craft through learning and building.
                                </p>








                            </div>

                            <div className="h-[30px] md:h-[240px] fontHeading flex gap-4 items-end justify-center md:justify-end 
                        w-full md:w-[30%]
                        flex-row flex-nowrap overflow-x-auto">

                                <Link
                                    href="https://www.linkedin.com/in/rashidpalathingal/"
                                    className="
        relative inline-block w-fit font-bold text-xl fontHeading 
        text-black underline px-1  hover:no-underline z-0
        transition-colors duration-300
        hover:text-white 
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-full after:h-full after:bg-black after:origin-bottom
        after:scale-y-0 after:block after:transition-transform after:duration-300
        after:z-[-1]
        hover:after:scale-y-100
    "
                                >
                                    <span className="relative z-10">Linkedin</span>
                                </Link>

                                <Link
                                    href="mailto:rashiee973@gmail.com"
                                    className="
        relative inline-block w-fit font-bold text-xl fontHeading 
        text-black underline px-1  hover:no-underline z-0
        transition-colors duration-300
        hover:text-white 
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-full after:h-full after:bg-black after:origin-bottom
        after:scale-y-0 after:block after:transition-transform after:duration-300
        after:z-[-1]
        hover:after:scale-y-100
    "
                                >
                                    <span className="relative z-10">Email</span>
                                </Link>

                                <Link
                                    href="https://www.instagram.com/mhd.rashiee/"
                                    className="
        relative inline-block w-fit font-bold text-xl fontHeading 
        text-black underline px-1  hover:no-underline z-0
        transition-colors duration-300
        hover:text-white 
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-full after:h-full after:bg-black after:origin-bottom
        after:scale-y-0 after:block after:transition-transform after:duration-300
        after:z-[-1]
        hover:after:scale-y-100
    "
                                >
                                    <span className="relative z-10">Instagram</span>
                                </Link>

                                <Link
                                    href="https://github.com/rashhiee"
                                    className="
        relative inline-block w-fit font-bold text-xl fontHeading 
        text-black underline px-1  hover:no-underline z-0
        transition-colors duration-300
        hover:text-white 
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-full after:h-full after:bg-black after:origin-bottom
        after:scale-y-0 after:block after:transition-transform after:duration-300
        after:z-[-1]
        hover:after:scale-y-100
    "
                                >
                                    <span className="relative z-10">Github</span>
                                </Link>

                            </div>

                        </div>

                        <div className="w-full p-10 mt-20 relative pointer-events-auto">


                            {/* <div className="flex justify-between">
                    <div className="text-sm font-heading tracking-wide translate-y-1">
                        NYC 08:00
                    </div>

                    <div className="text-sm font-heading tracking-wide translate-y-1">
                        BORN TO CREATIVE
                    </div>
                </div> */}


                            <div className="relative flex justify-center mt-1">



                                <div className="absolute top-3/4 left-0 w-full border-t border-black"></div>


                                <button
                                    className="
        relative z-10
        w-38 h-38 
        bg-[#FFB47D] 
        hover:bg-[#f69e60]
        rounded-full 
        flex items-center justify-center 
         text-xl font-bold
        transition-all duration-300 
        hover:scale-110
      "
                                >
                                    <span className="flex flex-col items-center justify-center gap-1 fontPara font-medium transition-transform duration-300 rotate-15 hover:rotate-[-10deg]">
                                        {/* <FiDownload className="text-2xl" /> */}
                                        <span className="text-lg leading-tight">Download<br />CV</span>
                                    </span>
                                </button>
                            </div>

                        </div>



                    </div>
                </div>

                <div className="relative w-full h-[100px] flex items-center overflow-hidden bg-black z-10">
                    <LogoLoop
                        logos={techLogos}
                        speed={40}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        hoverSpeed={0}
                        scaleOnHover={true}
                        fadeOut={true}
                        fadeOutColor="#000000"
                        ariaLabel="Technology partners"
                    />
                </div>


                <section className='w-full min-h-screen bg-white rounded-t-[30px] pt-20 pb-20 relative overflow-hidden'>

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

                    <div className='flex flex-col px-6 md:px-10 gap-2 relative z-10'>
                        <div className='relative flex justify-center mt-10 '>
                            <div className="absolute top-3/4 left-0 w-full border-t border-black"></div>
                        </div>
                        <p className='text-5xl font-bold my-8 fontHeading'>Projects</p>

                        <div className="flex flex-col border-t border-black">
                            {projects.map((project) => (
                                <Link href={`/projects/${project.slug}`} key={project.id}>
                                    <div
                                        className="group w-full lg:w-[55%] py-12 md:py-20 border-b border-black cursor-pointer transition-all duration-300"
                                        onMouseEnter={() => setHoveredProject(project.id)}
                                        onMouseLeave={() => setHoveredProject(null)}
                                    >
                                        <div className="flex flex-col">
                                            <h3 className={`
                                                text-5xl md:text-8xl font-bold uppercase transition-all duration-500 fontTitle
                                                ${hoveredProject && hoveredProject !== project.id ? 'blur-[3px] opacity-40' : 'opacity-100'}
                                                group-hover:translate-x-4
                                            `}>
                                                {project.title}
                                            </h3>
                                            <div className={`
                                                mt-4 flex flex-col md:flex-row gap-4 md:items-center text-lg text-gray-500 fontPara transition-all duration-500
                                                ${hoveredProject && hoveredProject !== project.id ? 'opacity-0 blur-[2px]' : 'opacity-100'}
                                                 group-hover:translate-x-4
                                            `}>
                                                <span className="text-black font-medium">{project.category}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </CurtainFooter >
    )
}

export default HomePage
