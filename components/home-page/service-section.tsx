'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MoveLeft, MoveRight, Code2, Palette, TrendingUp, Cpu, Video, Printer } from 'lucide-react';
import { cn } from '@/lib/utils';

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

export function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="group relative h-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
            <div className="relative h-full glass-card hover:bg-slate-800/80 p-6 md:p-8 rounded-2xl transition-all duration-300 flex flex-col items-start justify-between border border-white/5 group-hover:border-primary/20">
                <div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300">
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export const ServicesGrid = () => {
    const services = [
        {
            icon: <Cpu size={24} />,
            title: 'Product Engineering',
            description: 'End-to-end software development transforming complex requirements into scalable solutions.'
        },
        {
            icon: <Palette size={24} />,
            title: 'UI/UX Design',
            description: 'Crafting immersive user experiences that blend aesthetics with intuitive functionality.'
        },
        {
            icon: <TrendingUp size={24} />,
            title: 'Growth Strategy',
            description: 'Data-driven digital marketing campaigns designed to maximize ROI and market presence.'
        },
        {
            icon: <Code2 size={24} />,
            title: 'Tech Consulting',
            description: 'Strategic guidance on architecture, stack selection, and digital transformation roadmaps.'
        },
        {
            icon: <Video size={24} />,
            title: 'Multimedia Production',
            description: 'High-fidelity video and visual content that tells your brand story with cinematic quality.'
        },
        {
            icon: <Printer size={24} />,
            title: 'Physical Branding',
            description: 'Premium print and physical assets that extend your digital identity into the real world.'
        }
    ];

    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = React.useState(0);
    const [barWidth, setBarWidth] = React.useState(0);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        setScrollProgress(progress);

        const widthPercentage = (clientWidth / scrollWidth) * 100;
        setBarWidth(widthPercentage);
    };

    React.useEffect(() => {
        handleScroll();
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('resize', handleScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth / 2;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <section id="services" className="py-20 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                    <div>
                        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">Our Expertise</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">Comprehensive Digital Solutions</h2>
                    </div>

                    <div className="flex flex-col md:items-end gap-4">
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-md md:text-right">
                            Grounded in technical excellence, defined by creative innovation.
                        </p>

                        {/* Navigation - Desktop */}
                        <div className="hidden md:flex gap-4">
                            <button
                                onClick={() => scroll('left')}
                                disabled={scrollProgress <= 0}
                                className="p-3 rounded-full border border-white/10 hover:bg-white/5 disabled:opacity-30 transition-colors text-white"
                            >
                                <MoveLeft size={18} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                disabled={scrollProgress >= 0.99}
                                className="p-3 rounded-full border border-white/10 hover:bg-white/5 disabled:opacity-30 transition-colors text-white"
                            >
                                <MoveRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none md:hidden" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none md:hidden" />

                    <motion.div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide px-1"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="snap-center shrink-0 w-[85vw] md:w-[320px]"
                            >
                                <FeatureCard {...service} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-[2px] bg-white/10 w-full max-w-xs mx-auto relative rounded-full overflow-hidden md:hidden">
                    <div
                        className="absolute h-full bg-primary transition-all duration-300"
                        style={{ width: `${barWidth}%`, left: `${scrollProgress * (100 - barWidth)}%` }}
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;