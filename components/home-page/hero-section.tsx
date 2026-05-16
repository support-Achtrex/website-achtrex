'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const IMAGES = [
    "/projects/automotive_ui_new.jpg",
    "/projects/lumi_ui_v2.jpg",
    "/projects/carkasa_full.jpg",
    "/projects/vehiclereport_full.jpg"
];

export const Hero = () => {
    const router = useRouter();
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative">
            <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-[500px] lg:min-h-[650px] flex items-center bg-slate-50 overflow-hidden">
                {/* Section Borders (Top & Bottom) with White to Logo Gradient */}
                <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-white via-[#10b981] to-[#3b82f6] z-30" />
                <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-white via-[#10b981] to-[#3b82f6] z-30 opacity-90" />
                
                {/* Full Height Blended Image Box (Right Side) */}
                <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0">
                    <div className="relative w-full h-full">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={currentImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.95 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={IMAGES[currentImage]}
                                    alt="Achtrex Platforms"
                                    fill
                                    priority={currentImage === 0}
                                    className="object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                        {/* Gradient Mask for Blending (Less aggressive to make image more visible) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/10 to-transparent z-10" />
                    </div>
                </div>

                <div className="container mx-auto px-6 lg:px-20 z-20 flex items-center justify-start pointer-events-none">
                    <div className="w-full xl:max-w-2xl pointer-events-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6 text-slate-900 tracking-tight">
                            Enterprise Data & AI <br className="hidden xl:block" /> <span className="text-gradient">Platforms at Scale.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 font-normal max-w-lg">
                            We build high-performance infrastructure for modern businesses. From global automotive data APIs to LUMI, our autonomous AI agent framework, we deliver fast, secure, and scalable solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => router.push('/products')}
                                className="bg-logo-gradient hover:opacity-90 text-white px-8 py-3.5 font-bold text-sm transition-all inline-block tracking-wide shadow-xl text-center"
                            >
                                Get Started
                            </button>
                            <button
                                onClick={() => router.push('/about-us')}
                                className="bg-transparent hover:bg-slate-100 text-slate-900 border border-slate-300 px-8 py-3.5 font-bold text-sm transition-colors inline-block tracking-wide text-center"
                            >
                                Our Company
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};