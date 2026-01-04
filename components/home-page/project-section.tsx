'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, ChevronRight, ChevronLeft, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '@/components/section-title';

const projects = [
    {
        title: 'Carkasa',
        subtitle: 'Detailed Vehicle History',
        description: 'We worked for Carkasa to redesign their website and build a high-engaging application, optimized their front and back end development, UX/UI design and applied SEO techniques to drive traffic and sales to their website.',
        image: '/projects/carkasa-mockup-blue.png',
        link: 'https://carkasa.com',
        color: '#38bdf8', // Sky Blue
        tags: ['UX/UI', 'React', 'SEO']
    },
    {
        title: 'Automotive Dataset',
        subtitle: 'Global Automotive Intelligence',
        description: 'We engineered a high-performance data solution providing accurate vehicle specifications and real-time market values. Trusted by industry leaders for data-driven decision-making and effortless API integration.',
        image: '/projects/automotive-mockup-blue.png',
        link: 'https://automotivedataset.com',
        color: '#818cf8', // Indigo
        tags: ['Data Engineering', 'API', 'Cloud']
    },
    {
        title: 'Yach Telemedicine',
        subtitle: 'Accessible Healthcare',
        description: 'Democratizing healthcare access with a secure telemedicine platform. The solution provides encrypted video consultations and digital prescriptions, making expert care accessible from anywhere.',
        image: '/projects/yach-telemedicine.png', // Fallback to existing if available, or placeholder
        link: '/portfolio',
        color: '#34d399', // Emerald
        tags: ['Telehealth', 'Security', 'WebRTC']
    }
];

export const ProjectsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="py-32 bg-[#030014] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20 text-center">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">Selected Works</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Built for Impact</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We partner with visionary companies to build products that define industries.
                    </p>
                </div>

                {/* Main Carousel Card */}
                <div className="relative">

                    {/* Navigation Buttons (Outside on Large Screens) */}
                    <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-30 hidden md:block">
                        <button onClick={prevSlide} className="p-4 rounded-full border border-white/10 bg-black/50 hover:bg-white/10 text-white transition-all backdrop-blur-md group">
                            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-30 hidden md:block">
                        <button onClick={nextSlide} className="p-4 rounded-full border border-white/10 bg-black/50 hover:bg-white/10 text-white transition-all backdrop-blur-md group">
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>


                    <div className="relative bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden min-h-[600px] backdrop-blur-xl">
                        <div className="w-full h-full">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px]"
                                >
                                    {/* Left Content */}
                                    <div className="p-8 md:p-16 flex flex-col justify-center h-full order-2 lg:order-1 relative z-10">

                                        {/* Project Tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {projects[currentIndex].tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full text-xs font-mono border border-white/10 bg-white/5 text-gray-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-4xl md:text-5xl font-bold text-white mb-2"
                                        >
                                            {projects[currentIndex].title}
                                        </motion.h3>

                                        <motion.span
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-xl text-primary font-medium mb-8 block"
                                            style={{ color: projects[currentIndex].color }}
                                        >
                                            {projects[currentIndex].subtitle}
                                        </motion.span>

                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg"
                                        >
                                            {projects[currentIndex].description}
                                        </motion.p>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="flex items-center gap-6"
                                        >
                                            <Link
                                                href={projects[currentIndex].link}
                                                target="_blank"
                                                className="group flex items-center gap-2 text-white font-bold text-lg hover:text-primary transition-colors"
                                            >
                                                <span>View Case Study</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </motion.div>
                                    </div>

                                    {/* Right Image area with gradient */}
                                    <div className="relative h-[300px] lg:h-full w-full order-1 lg:order-2 bg-gradient-to-br from-black/20 to-black/60 flex items-center justify-center p-8 lg:p-0 overflow-hidden">
                                        {/* Background Glow */}
                                        <div
                                            className="absolute inset-0 opacity-30"
                                            style={{ background: `radial-gradient(circle at center, ${projects[currentIndex].color} 0%, transparent 70%)` }}
                                        />

                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
                                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="relative z-10 w-full max-w-md lg:max-w-full lg:absolute lg:right-[-5%] lg:w-[120%]"
                                        >
                                            <Image
                                                src={projects[currentIndex].image}
                                                alt={projects[currentIndex].title}
                                                width={1000}
                                                height={800}
                                                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-[1.02] transition-transform duration-500"
                                                priority
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex justify-center gap-4 mt-8 md:hidden">
                        <button onClick={prevSlide} className="p-3 rounded-full border border-white/10 bg-white/5 text-white">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={nextSlide} className="p-3 rounded-full border border-white/10 bg-white/5 text-white">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};