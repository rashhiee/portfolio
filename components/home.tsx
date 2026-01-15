'use client';

import { useState } from 'react';
import Link from 'next/link'
import Clock from './Clock'
import Image from 'next/image'
import imageone from '../public/imageone.jpg'
import imagetwo from '../public/imagetwo.jpg'
import imagethree from '../public/image3.jpg'
import Shuffle from '../components/Shuffle';
import CurtainFooter from './Footer'
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiJavascript, SiExpress, SiNodedotjs } from 'react-icons/si';
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

];


const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

const projects = [
    {
        id: 1,
        title: "Harmony Mixed-Use Complex",
        category: "Mixed-Use Urban Development",
        image: imageone,
        description: "A mixed-use development seamlessly integrating residential, commercial, and recreational spaces. The design focuses on sustainability and community living, creating a vibrant ecosystem for residents and visitors.",
        location: "Dubai, UAE",
        date: "Apr 11, 2022",
        tags: ["450,000 SQ.FT", "SUSTAINABLE DESIGN", "SMART BUILDING", "URBAN LANDMARK"],
        link: "#",
        visuals: "3 visuals"
    },
    {
        id: 2,
        title: "Urban Oasis",
        category: "Residential Architecture",
        image: imagethree,
        description: "Sustainable living spaces designed for modern urban lifestyles with a focus on community and nature. Featuring green roofs, solar energy integration, and open communal areas.",
        location: "London, UK",
        date: "Dec 10, 2023",
        tags: ["200,000 SQ.FT", "GREEN LIVING", "COMMUNITY"],
        link: "#",
        visuals: "5 visuals"
    },
    {
        id: 3,
        title: "Skyline Tower",
        category: "Commercial High-rise",
        image: imagetwo,
        description: "A modern skyscraper redefining the city skyline. Features smart office spaces, a luxury hotel, and a rooftop observation deck.",
        location: "New York, USA",
        date: "Jan 15, 2024",
        tags: ["500,000 SQ.FT", "MODERN ARCHITECTURE", "LUXURY"],
        link: "#",
        visuals: "4 visuals"
    }
];

import Particles from './Particles'; // Import Particles

// ... existing imports

const HomePage = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);
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


                        <div className="h-[50%] w-full flex flex-col  md:px-5 justify-center pointer-events-auto">
                            <h1 className="w-full text-black font-bold leading-none fontTitle
                        text-[90px] xs:text-[110px] sm:text-[130px] md:text-[168px] ">
                                MUHD <span className="md:hidden block "></span> RASHID
                            </h1>
                            {/* <h2 className='md:px-5 text-2xl font-bold fontTitle '>Web Developer</h2> */}
                            <div className='text-2xl  fontCode pl-5'>

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
                                <Link
                                    href="/"
                                    className="
        relative inline-block w-fit font-bold text-xl fontHeading 
        text-black underline px-1  hover:no-underline z-0
        transition-colors duration-300
        hover:text-white 
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-full after:h-full after:bg-black after:origin-bottom
        after:scale-y-0 after:block after:transition-transform after:duration-600
        after:z-[-1]
        hover:after:scale-y-100
    "
                                >
                                    <span className="relative z-10">More about me</span>
                                </Link>








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
                                    href="/"
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


                <section className='w-full h-auto bg-white rounded-t-[30px] pt-10 pb-0'>
                    <div className='flex flex-col px-6 md:px-10 gap-2'>
                        <div className='relative flex justify-center mt-10 '>
                            <div className="absolute top-3/4 left-0 w-full border-t border-black"></div>
                        </div>
                        <p className='text-5xl font-bold my-8 fontHeading'>Projects</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-black">
                            {visibleProjects.map((project) => (
                                <div
                                    key={project.id}
                                    onClick={() => setSelectedProject(project)}
                                    className="
                                        relative
                                        bg-white
                                        border-r border-b border-black
                                        p-8
                                        flex flex-col items-center justify-center
                                        min-h-[450px]
                                        cursor-pointer
                                        group
                                        transition-all duration-300
                                        hover:rounded-[40px]
                                        hover:shadow-2xl
                                        hover:z-10
                                        hover:border-transparent
                                    "
                                >
                                    <div className="w-full max-w-[320px] aspect-square mb-8 overflow-hidden relative">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-bold text-center mb-2">{project.title}</h3>
                                    <p className="text-gray-500 text-sm mb-6">{project.visuals}</p>

                                    <div className="px-6 py-2 border border-black rounded-full uppercase text-sm font-bold tracking-wide transition-colors group-hover:bg-black group-hover:text-white">
                                        View Project
                                    </div>
                                </div>
                            ))}
                        </div>

                        {hasMore && (
                            <div className="flex justify-center my-12">
                                <button
                                    onClick={handleLoadMore}
                                    className="px-8 py-3 bg-white border border-black rounded-full font-bold hover:bg-black hover:text-white transition-colors"
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Project Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
                        <div className="bg-[#f2f2f2] w-full max-w-6xl h-[85vh] md:h-[80vh] rounded-[20px] overflow-hidden flex flex-col md:flex-row shadow-2xl relative animate-in fade-in zoom-in duration-300">

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold hover:scale-105 transition-transform shadow-md"
                            >
                                ✕
                            </button>

                            {/* Left: Image */}
                            <div className="w-full md:w-[60%] h-[40%] md:h-full relative bg-gray-200">
                                <Image
                                    src={(selectedProject as any).image}
                                    alt={(selectedProject as any).title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Right: Details */}
                            <div className="w-full md:w-[40%] h-full p-8 md:p-12 flex flex-col overflow-y-auto bg-[#F4F4F4]">
                                <h2 className="text-4xl md:text-5xl font-bold fontTitle mb-6 leading-tight">
                                    {(selectedProject as any).title}
                                </h2>

                                <div className="space-y-6 flex-grow">
                                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed fontPara">
                                        {(selectedProject as any).description}
                                    </p>

                                    <div className="py-6 border-t border-gray-300">
                                        <div className="flex justify-between py-2 border-b border-gray-200">
                                            <span className="font-bold text-sm uppercase text-gray-500">Location</span>
                                            <span className="font-medium">{(selectedProject as any).location}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-200">
                                            <span className="font-bold text-sm uppercase text-gray-500">Type</span>
                                            <span className="font-medium text-right">{(selectedProject as any).category}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-200">
                                            <span className="font-bold text-sm uppercase text-gray-500">Date</span>
                                            <span className="font-medium">{(selectedProject as any).date}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {(selectedProject as any).tags.map((tag: string, i: number) => (
                                            <span key={i} className="px-4 py-1.5 border border-black rounded-full text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 pt-6">
                                    <button className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors w-full md:w-auto">
                                        LEARN MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </CurtainFooter >
    )
}

export default HomePage
