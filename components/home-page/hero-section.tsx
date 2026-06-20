'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight, MessageSquare } from 'lucide-react';

const slides = [
    {
        id: '01',
        category: 'AUTOMOTIVE TECHNOLOGY PARTNER',
        title: (
            <>
                We build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 font-extrabold">data</span>, the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600 font-extrabold">intelligence</span>, and the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-600 font-extrabold">platforms</span> behind automotive businesses.
            </>
        ),
        description: 'Achtrex provides the foundation for the next generation of connected mobility. Scalable APIs, conversational AI, and enterprise-grade custom software built for performance.',
        bgImage: '/images/slide2_bg.jpg', // Sunset Data Nodes
        primaryCta: 'Explore what we build',
        primaryLink: '/products/automotive',
        secondaryCta: 'Talk to us',
        secondaryLink: '/contact-us',
        accent: '#0ea5e9' // sky-500
    },
    {
        id: '02',
        category: 'GLOBAL SCALE & PERFORMANCE',
        title: (
            <>
                Powering the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 font-extrabold">connected mobility</span> with enterprise-grade infrastructure.
            </>
        ),
        description: 'From hyper-accurate VIN decoding datasets to complex dealer platforms. We give you the high-performance tools to dominate your market globally.',
        bgImage: '/images/slide3_bg.jpg', // Futuristic Cityscape
        primaryCta: 'Explore what we build',
        primaryLink: '/products/automotive',
        secondaryCta: 'Talk to us',
        secondaryLink: '/contact-us',
        accent: '#10b981' // emerald-500
    }
];

export const Hero = () => {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000); // Slower for reading the massive text
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];

    return (
        <section className="relative w-full h-[85vh] min-h-[600px] bg-[#001a22] overflow-hidden z-20 flex flex-col font-sans">
            
            {/* Background Image Layer with Cinematic Zoom */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0 overflow-hidden"
                >
                    <Image
                        src={slide.bgImage}
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-80"
                        priority
                        unoptimized
                    />
                    {/* Dark gradient overlay for extreme readability */}
                    <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-[#F8F9FA]"></div>
                </motion.div>
            </AnimatePresence>

            {/* Main Content Layout (Centered Cinematic) */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto px-6 pt-32 text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.id}
                        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center max-w-5xl"
                    >
                        {/* Massive Title */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] md:leading-[1.15] mb-8 drop-shadow-2xl"
                        >
                            {slide.title}
                        </motion.h1>
                        
                        {/* Description */}
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-sm md:text-lg text-slate-200 font-medium leading-relaxed max-w-3xl mb-12 drop-shadow-lg"
                        >
                            {slide.description}
                        </motion.p>
                        
                        {/* Dual CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center gap-6"
                        >
                            {/* Primary CTA */}
                            <button
                                onClick={() => router.push(slide.primaryLink)}
                                className="group relative inline-flex items-center justify-center gap-3 text-white text-base md:text-lg font-semibold tracking-wide px-10 py-4 transition-all hover:scale-105 rounded-sm overflow-hidden"
                                style={{ backgroundColor: slide.accent }}
                            >
                                <span className="relative z-10">{slide.primaryCta}</span>
                                <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                {/* Gloss effect */}
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>

                            {/* Secondary CTA */}
                            <button
                                onClick={() => router.push(slide.secondaryLink)}
                                className="group inline-flex items-center justify-center gap-3 text-white text-base md:text-lg font-semibold tracking-wide px-10 py-4 transition-all hover:bg-white/10 rounded-sm border-2 border-white/30 backdrop-blur-sm"
                            >
                                <span>{slide.secondaryCta}</span>
                                <MessageSquare className="w-5 h-5 transition-colors text-slate-300 group-hover:text-white" />
                            </button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Bottom Dots Pagination */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
                {slides.map((s, i) => {
                    const isActive = currentSlide === i;
                    return (
                        <button
                            key={s.id}
                            onClick={() => setCurrentSlide(i)}
                            className="relative group p-2"
                            aria-label={`Go to slide ${i + 1}`}
                        >
                            <div className={cn(
                                "w-3 h-3 rounded-full transition-all duration-500",
                                isActive ? "w-10 bg-white" : "bg-white/40 group-hover:bg-white/70"
                            )} />
                            {isActive && (
                                <motion.div 
                                    layoutId="active-dot"
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-5 rounded-full border border-white/30"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>

        </section>
    );
};