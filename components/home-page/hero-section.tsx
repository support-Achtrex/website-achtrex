'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const Hero = () => {
    const router = useRouter();

    return (
        <section className="relative w-full h-[85vh] min-h-[600px] bg-[#001a22] overflow-hidden z-20 flex flex-col font-sans">
            
            {/* Background Image Layer */}
            <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0 overflow-hidden"
            >
                <Image
                    src="/hero-bg.jpg"
                    alt="Futuristic Connected Car"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                {/* Dark gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a22] via-transparent to-transparent"></div>
            </motion.div>

            {/* Main Content Layout */}
            <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-[1200px] mx-auto px-6 pt-24 md:pt-32">
                <motion.div
                    initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col items-start max-w-3xl text-left"
                >
                    {/* Category Label */}
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-[#0ea5e9] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 flex items-center gap-3"
                    >
                        <span className="w-12 h-px bg-[#0ea5e9]"></span>
                        Automotive Technology Partner
                    </motion.span>

                    {/* Massive Title */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] md:leading-[1.15] mb-8 drop-shadow-2xl"
                    >
                        We build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 font-extrabold">data</span>,<br/> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600 font-extrabold">intelligence</span>, and the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-600 font-extrabold">platforms</span> behind automotive businesses.
                    </motion.h1>
                    
                    {/* Description */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-base md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-12 drop-shadow-lg"
                    >
                        Achtrex provides the foundation for the next generation of connected mobility. Scalable APIs, conversational AI, and enterprise-grade custom software built for performance.
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
                            onClick={() => router.push('/products/automotive')}
                            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white text-base md:text-lg font-semibold tracking-wide px-10 py-4 transition-all hover:scale-105 rounded-sm overflow-hidden bg-[#0ea5e9]"
                        >
                            <span className="relative z-10">Explore what we build</span>
                            <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            {/* Gloss effect */}
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>

                        {/* Secondary CTA */}
                        <button
                            onClick={() => router.push('/contact-us')}
                            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white text-base md:text-lg font-semibold tracking-wide px-10 py-4 transition-all hover:bg-white/10 rounded-sm border-2 border-white/30 backdrop-blur-sm"
                        >
                            <span>Talk to us</span>
                            <MessageSquare className="w-5 h-5 transition-colors text-slate-300 group-hover:text-white" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};