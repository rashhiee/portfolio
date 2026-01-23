import Image from 'next/image';
import Link from 'next/link';

// You would typically fetch this data based on the slug
// For now, I'll hardcode the data here to match the home page
const projectsData = [
    {
        slug: 'autospace',
        title: "Autospace",
        category: "Automotive Technology",
        image: "/autospaceprtf.png",
        description: "A multi-tenant car parking management platform with role-based workflows for owners, managers, and valets.",
        location: "San Francisco, USA",
        date: "2024",
        tags: ["UI/UX", "IoT", "React"],
        role: "Lead Frontend Engineer",
        tech: ["React", "TypeScript", "WebSocket", "Node.js"]
    },
    {
        slug: 'shoebox',
        title: "Shoebox",
        category: "E-commerce Experience",
        image: "/shoeboxprtf.jpg",
        description: "A niche e-commerce platform focused on footwear discovery, catalog management, and seamless checkout experiences.",
        location: "Berlin, Germany",
        date: "2024",
        tags: ["E-Commerce", "Next.js", "Stripe"],
        role: "Full Stack Developer",
        tech: ["Next.js", "TailwindCSS", "PostgreSQL", "Stripe"]
    },
    {
        slug: 'zanpad',
        title: "Zanpad",
        category: "Productivity",
        image: "/zanpadprtf.jpg",
        description: "A lightweight Next.js note-taking application for creating, organizing, and persisting personal notes.",
        location: "Remote",
        date: "2025",
        tags: ["SaaS", "Productivity", "Minimalism"],
        role: "Product Designer & Developer",
        tech: ["React", "Electron", "Firebase", "Redux"]
    }
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projectsData.find(p => p.slug === params.slug);

    if (!project) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <h1 className="text-4xl font-bold">Project not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F4F4F4] text-black font-sans">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-white">
                <Link href="/" className="text-xl font-bold uppercase tracking-wider hover:opacity-70 transition-opacity">
                    Back
                </Link>
                <div className="text-sm font-light tracking-widest uppercase">Project Detail</div>
            </nav>

            {/* Hero Image */}
            <div className="relative w-full h-[70vh] md:h-[80vh]">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-12 left-6 md:left-12">
                    <h1 className="text-6xl md:text-9xl font-bold text-white leading-none fontTitle">{project.title}</h1>
                    <p className="text-white/80 text-xl mt-4 fontHeading max-w-xl">{project.category}</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Left Column: Details */}
                <div className="md:col-span-4 space-y-12">
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Role</h3>
                        <p className="text-xl font-medium">{project.role}</p>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="px-3 py-1 border border-gray-300 rounded-full text-sm">{t}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Date</h3>
                        <p className="text-xl font-medium">{project.date}</p>
                    </div>
                </div>

                {/* Right Column: Description */}
                <div className="md:col-span-8">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">About the project</h3>
                    <p className="text-2xl md:text-4xl leading-tight fontHeading font-light">
                        {project.description}
                    </p>
                </div>
            </div>

            {/* Next Project (Simple footer or loop) */}
            <div className="border-t border-gray-300 py-20 text-center">
                <Link href="/" className="inline-block text-8xl font-bold hover:italic transition-all fontTitle">
                    Next Project
                </Link>
            </div>
        </div>
    );
}
