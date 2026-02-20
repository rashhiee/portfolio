'use client';

import Link from 'next/link';

export default function CurtainFooter({ children }: { children: React.ReactNode }) {
    return (
        <div className='relative min-h-screen'>
            {/* 
        Main Content Wrapper 
        - z-10 to stay above footer
        - bg-black (or whatever main bg is) to hide footer until scroll
        - mb-[50vh] to create space for reveal
      */}
            <div
                className='relative z-10 bg-black min-h-screen'
                style={{ marginBottom: '60vh' }}
            >
                {children}
            </div>

            {/* 
        Fixed Footer 
        - Fixed at bottom
        - z-0 to stay behind content
        - Height must match the margin-bottom above
      */}
            <footer
                className="fixed bottom-0 left-0 w-full h-[60vh] bg-black text-white flex items-center justify-center z-0"
            >
                <div className="max-w-6xl mx-auto text-center px-6 md:px-8 py-10 md:py-0">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 fontTitle leading-tight px-4">
                        READY TO COLLAB?<br />
                        REACH ME OUT!
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12 text-sm sm:text-base md:text-lg fontHeading">
                        <Link
                            href="https://www.linkedin.com/in/rashidpalathingal/"
                            className="
                relative inline-block font-bold text-lg sm:text-xl fontHeading px-1
                text-white underline hover:no-underline z-0
                transition-colors duration-300
                hover:text-black
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:w-full after:h-full after:bg-white after:origin-bottom
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
                relative inline-block font-bold text-lg sm:text-xl fontHeading px-1
                text-white underline hover:no-underline z-0
                transition-colors duration-300
                hover:text-black
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:w-full after:h-full after:bg-white after:origin-bottom
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
                relative inline-block font-bold text-lg sm:text-xl fontHeading px-1
                text-white underline hover:no-underline z-0
                transition-colors duration-300
                hover:text-black
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:w-full after:h-full after:bg-white after:origin-bottom
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
                relative inline-block font-bold text-lg sm:text-xl fontHeading px-1
                text-white underline hover:no-underline z-0
                transition-colors duration-300
                hover:text-black
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:w-full after:h-full after:bg-white after:origin-bottom
                after:scale-y-0 after:block after:transition-transform after:duration-300
                after:z-[-1]
                hover:after:scale-y-100
              "
                        >
                            <span className="relative z-10">Github</span>
                        </Link>
                    </div>

                    <p className="text-[10px] md:text-sm text-gray-400 fontPara">© MUHD RASHID, 2025</p>
                </div>
            </footer>
        </div>
    );
}