'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
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
        color: '#0EA5E9', // Brand Blue
        appStore: true,
        googlePlay: true
    },
    {
        title: 'Automotive Dataset',
        subtitle: 'Global Automotive Intelligence',
        description: 'We engineered a high-performance data solution providing accurate vehicle specifications and real-time market values. Trusted by industry leaders for data-driven decision-making and effortless API integration.',
        image: '/projects/automotive-mockup-blue.png',
        link: 'https://automotivedataset.com',
        color: '#0EA5E9', // Brand Blue
        appStore: false,
        googlePlay: false
    },
    {
        title: 'Yach Telemedicine',
        subtitle: 'Accessible Healthcare',
        description: 'Democratizing healthcare access with a secure telemedicine platform. The solution provides encrypted video consultations and digital prescriptions, making expert care accessible from anywhere.',
        image: '/projects/yach-telemedicine.png', // Fallback to existing if available, or placeholder
        link: '/portfolio',
        color: '#10B981', // Green/Teal
        appStore: true,
        googlePlay: true
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
        <section id="projects" className="py-24 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <SectionTitle className='text-3xl md:text-5xl text-white mb-6'>Selected Works</SectionTitle>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        We partner with visionary companies to build products that define industries. Here are a few of our success stories.
                    </p>
                </div>

                {/* Main Carousel Card */}
                <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[600px] md:h-[650px] flex items-center">

                    {/* Navigation Arrows (Absolute on standard view) */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                        aria-label="Previous Project"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                        aria-label="Next Project"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="w-full h-full">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="grid grid-cols-1 lg:grid-cols-2 h-full"
                            >
                                {/* Left Content */}
                                <div className="p-8 md:p-16 lg:pl-24 flex flex-col justify-center h-full order-2 lg:order-1 relative z-10">
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-lg md:text-2xl font-bold mb-6 block"
                                        style={{ color: projects[currentIndex].color }}
                                    >
                                        {projects[currentIndex].subtitle}
                                    </motion.span>

                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
                                    >
                                        {projects[currentIndex].description}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                                    >
                                        <Link
                                            href={projects[currentIndex].link}
                                            target="_blank"
                                            className="bg-[#1a44c4] hover:bg-[#153aa3] text-white px-8 py-3.5 rounded-lg font-semibold shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2"
                                        >
                                            View Live Site
                                        </Link>
                                    </motion.div>

                                    {/* App Store Badges (Optional/Mockup) */}
                                    {(projects[currentIndex].appStore || projects[currentIndex].googlePlay) && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="flex gap-4 mt-8"
                                        >
                                            {/* Using a simple text representation or placeholders if standard assets aren't available immediately. 
                                               For high fidelity, ideally use SVGs/Images. I'll use simple stylish buttons for now or placeholders. */}
                                            {projects[currentIndex].googlePlay && (
                                                <div className="h-10 px-4 bg-black text-white rounded border border-gray-800 flex items-center gap-2 text-xs">
                                                    <span>Available on</span> <span className="font-bold text-sm">Google Play</span>
                                                </div>
                                            )}
                                            {projects[currentIndex].appStore && (
                                                <div className="h-10 px-4 bg-black text-white rounded border border-gray-800 flex items-center gap-2 text-xs">
                                                    <span>Download on the</span> <span className="font-bold text-sm">App Store</span>
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </div>

                                {/* Right Image */}
                                <div className="relative h-[300px] md:h-[400px] lg:h-auto w-full order-1 lg:order-2 flex items-center justify-center p-8 bg-gray-50/50">
                                    {/* Decorative background element (Chevron) - simulated with CSS or part of image */}
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={projects[currentIndex].image}
                                            alt={projects[currentIndex].title}
                                            width={800} // Increased size
                                            height={600}
                                            className="object-contain w-full h-full drop-shadow-2xl"
                                            priority
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? `w-8 bg-[${projects[currentIndex].color}]` // Brand color
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                style={{ backgroundColor: idx === currentIndex ? projects[currentIndex].color : undefined }}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};