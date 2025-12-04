
import Link from 'next/link'
import Clock from './Clock'
import Image from 'next/image'
import imageone from '../public/imageone.jpg'
import imagetwo from '../public/imagetwo.jpg'
import imagethree from '../public/image3.jpg'
import Shuffle from '../components/Shuffle';
import CurtainFooter from './Footer'
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss ,SiMongodb ,SiJavascript,SiExpress,SiNodedotjs } from 'react-icons/si';

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

// Alternative with image sources
const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];


const HomePage = () => {
    return (
        <CurtainFooter>
            <main className='bg-black flex flex-col gap-1 relative '>
                <div className="h-auto w-full rounded-b-[30px]  bg-gradient-to-br from-[#D2F3FF] via-[#DAFAD8] to-[#F7FAD2] px-6 flex flex-col gap-2">


                    <div className="h-[50%] w-full flex flex-col  md:px-5 justify-center">
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
                      md:flex-row flex-col p-10 gap-6">


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

                    <div className="w-full p-10 mt-20 relative ">


                        {/* <div className="flex justify-between">
                    <div className="text-sm font-heading tracking-wide translate-y-1">
                        NYC 08:00
                    </div>

                    <div className="text-sm font-heading tracking-wide translate-y-1">
                        BORN TO CREATIVE
                    </div>
                </div> */}


                        <div className="relative flex justify-center mt-1">

                          

                            <div className="absolute top-3/4 left-0 w-full border-1 border-black"></div>


                            <button
                                className="
        relative z-10
        w-38 h-38 
        bg-[#FFB47D] 
        hover:bg-[#f69e60]
        rounded-full 
        flex items-center justify-center 
        font-heading text-xl font-bold
        transition-all duration-300 
        hover:scale-110
      "
                            >
                                <span className="inline-block fontTitle text-2xl transition-transform duration-300 rotate-15 hover:rotate-[-10deg]">
                                    Hire me
                                </span>
                            </button>
                        </div>

                    </div>


                </div>

                <div className="relative w-full h-[100px] flex items-center overflow-hidden bg-black z-10">
                    <LogoLoop
                        logos={techLogos}
                        speed={120}
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


                <section className='w-full h-auto  bg-white rounded-t-[30px]'>
                    <div className='flex flex-col p-10 gap-2'>
                        <div className='relative flex justify-center  mt-20 '>
                            <div className="absolute top-3/4 left-0 w-full border-t  border-black"></div>
                        </div>
                        <p className='text-5xl font-bold my-8 fontHeading'>Projects</p>
                        <div className="w-full min-h-auto bg-black ">
                            <div className="w-full mx-auto">

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">


                                    <div
                                        className="
          relative
          border border-black
          bg-white
          p-8
          flex flex-col items-center justify-center
          min-h-[400px]
          transition-all duration-500
          hover:rounded-[40px]
          hover:shadow-xl
          hover:z-10
          group
          cursor-pointer
        "
                                    >

                                        <div className="w-full max-w-[280px] aspect-square mb-6 overflow-hidden">
                                            <Image
                                                src={imageone}
                                                alt="Project Name"
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>


                                        <h3 className="text-xl font-bold text-center mb-2 transition-opacity duration-300 group-hover:opacity-0">
                                            Project 1
                                        </h3>


                                        <p className="text-gray-500 text-sm transition-opacity duration-300 group-hover:opacity-0">
                                            3 visuals
                                        </p>


                                        <p className="absolute bottom-8 text-gray-500 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            Show project
                                        </p>
                                    </div>
                                    <div
                                        className="
          relative
          border border-black
          bg-white
          p-8
          flex flex-col items-center justify-center
          min-h-[400px]
          transition-all duration-500
          hover:rounded-[40px]
          hover:shadow-xl
          hover:z-10
          group
          cursor-pointer
        "
                                    >

                                        <div className="w-full max-w-[280px] aspect-square mb-6 overflow-hidden">
                                            <Image
                                                src={imagethree}
                                                alt="Project Name"
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>


                                        <h3 className="text-xl font-bold text-center mb-2 transition-opacity duration-300 group-hover:opacity-0">
                                            Project 2
                                        </h3>


                                        <p className="text-gray-500 text-sm transition-opacity duration-300 group-hover:opacity-0">
                                            3 visuals
                                        </p>


                                        <p className="absolute bottom-8 text-gray-500 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            Show project
                                        </p>
                                    </div>
                                    <div
                                        className="
          relative
          border border-black
          bg-white
          p-8
          flex flex-col items-center justify-center
          min-h-[400px]
          transition-all duration-500
          hover:rounded-[40px]
          hover:shadow-xl
          hover:z-10
          group
          cursor-pointer
        "
                                    >

                                        <div className="w-full max-w-[280px] aspect-square mb-6 overflow-hidden">
                                            <Image
                                                src={imagetwo}
                                                alt="Project Name"
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>


                                        <h3 className="text-xl font-bold text-center mb-2 transition-opacity duration-300 group-hover:opacity-0">
                                            Project 3
                                        </h3>


                                        <p className="text-gray-500 text-sm transition-opacity duration-300 group-hover:opacity-0">
                                            3 visuals
                                        </p>


                                        <p className="absolute bottom-8 text-gray-500 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            Show project
                                        </p>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>

                </section >


            </main>
        </CurtainFooter >
    )
}

export default HomePage
