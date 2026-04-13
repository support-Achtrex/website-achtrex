'use client'

import { motion } from 'framer-motion';

const technologies = [
    "Next.js", "React", "TypeScript", "Node.js", "Supabase", "AWS", "Framer Motion", "Tailwind CSS", "PostgreSQL", "Docker", "GraphQL", "Python", "Flutter", "React Native"
];

export const TechPartners = () => {
    return (
        <section className="py-16 overflow-hidden bg-background border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Powered By Modern Tech Stack</h2>
            </div>

            <div className="relative flex overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap py-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className="mx-8 text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/30 hover:from-primary hover:to-secondary transition-all duration-300 font-display">
                            {tech}
                        </span>
                    ))}
                    {technologies.map((tech, index) => (
                        <span key={`clone-${index}`} className="mx-8 text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/30 hover:from-primary hover:to-secondary transition-all duration-300 font-display">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            </div>
        </section>
    );
};