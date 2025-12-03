
import Link from 'next/link'
import Clock from './Clock'
import Image from 'next/image'
import imageone from '../../public/imageone.jpg'
import imagetwo from '../../public/imagetwo.jpg'
import imagethree from '../../public/image3.jpg'

const HomePage = () => {
    return (
        <main className='bg-black flex flex-col gap-2  '>
            <div className="h-auto w-full rounded-[30px]  bg-gradient-to-br from-[#D2F3FF] via-[#DAFAD8] to-[#F7FAD2] px-6 flex flex-col gap-2">


                <div className="h-[50%] w-full flex flex-col  md:px-5 justify-center">
                    <h1 className="w-full text-black font-bold leading-none fontTitle
                        text-[90px] xs:text-[110px] sm:text-[130px] md:text-[168px] ">
                        MUHD <span className="md:hidden block "></span> RASHID
                    </h1>
                    <h2 className='md:px-5 text-2xl font-bold fontTitle '>Web Developer</h2>
                </div>

                <div className="h-[50%] w-full flex justify-between 
                      md:flex-row flex-col gap-6">


                    <div className="h-[300px] md:h-[240px] flex flex-col gap-2 justify-end 
                        w-full md:w-[30%]">
                        <p className="fontPara  text-gray-600">
                            Hi, I'm Rashid, a passionate Web Developer focused on building fast, clean,
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
        after:scale-y-0 after:block after:transition-transform after:duration-300
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
                            <span className="relative z-10">Instagram</span>
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
                            <span className="relative z-10">Whatsapp</span>
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
                            <span className="inline-block fontTitle text-2xl transition-transform duration-300 rotate-5 hover:rotate-30">
                                Hire me
                            </span>
                        </button>
                    </div>

                </div>


            </div>
            <section className='w-full h-auto p-10 bg-white rounded-[30px]'>
                <div className='flex flex-col gap-2'>
                    <div className='relative flex justify-center mt-25 '>
                        <div className="absolute top-3/4 left-0 w-full border-t  border-black"></div>
                    </div>
                    <p className='text-4xl font-bold fontHeading'>Projects</p>
                    <div className="w-full min-h-screen bg-gray-50 p-8">
                        <div className="max-w-7xl lg:max-w-8xl mx-auto">

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
                                        The Skyborne Islands
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
                                        The Skyborne Islands
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
                                        The Skyborne Islands
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
    )
}

export default HomePage
