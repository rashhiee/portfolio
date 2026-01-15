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
                style={{ marginBottom: '50vh' }}
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
                className="fixed bottom-0 left-0 w-full h-[50vh] bg-black text-white flex items-center justify-center z-0"
            >
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
                hover:text-gray-300
              "
                        >
                            <span>Linkedin</span>
                        </Link>

                        <Link
                            href="mailto:rashiee973@gmail.com"
                            className="
                relative inline-block font-bold text-xl fontHeading px-1
                text-white underline hover:no-underline
                transition-colors duration-300
                hover:text-gray-300
              "
                        >
                            <span>Email</span>
                        </Link>

                        <Link
                            href="https://www.instagram.com/mhd.rashiee/"
                            className="
                relative inline-block font-bold text-xl fontHeading px-1
                text-white underline hover:no-underline
                transition-colors duration-300
                hover:text-gray-300
              "
                        >
                            <span>Instagram</span>
                        </Link>
                        <Link
                            href="https://github.com/rashhiee"
                            className="
                relative inline-block font-bold text-xl fontHeading px-1
                text-white underline hover:no-underline
                transition-colors duration-300
                hover:text-gray-300
              "
                        >
                            <span>Github</span>
                        </Link>
                    </div>

                    <p className="text-sm text-gray-400 fontPara">© MUHD RASHID, 2025</p>
                </div>
            </footer>
        </div>
    );
}