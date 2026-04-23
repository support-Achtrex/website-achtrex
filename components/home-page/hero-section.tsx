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
            <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-[500px] lg:min-h-[650px] flex items-center bg-[#0a0f1c] overflow-hidden">
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
                                animate={{ opacity: 0.6 }}
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
                        {/* Gradient Mask for Blending */}
                        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#0a0f1c] via-[#0a0f1c]/60 lg:via-[#0a0f1c]/40 to-transparent z-10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-[#0a0f1c] z-10" />
                    </div>
                </div>

                <div className="container mx-auto px-6 lg:px-20 z-20 flex items-center justify-start pointer-events-none">
                    {/* Content (Broadcom Style) - Left Aligned */}
                    <div className="w-full xl:max-w-2xl pointer-events-auto">
                        <h1 className="text-3xl md:text-4xl lg:text-[50px] font-bold leading-[1.1] mb-5 text-white tracking-tight">
                            Architecting High-Velocity Data <br className="hidden xl:block" /> & Cognitive AI Platforms
                        </h1>
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 font-normal max-w-lg">
                            Achtrex engineers mission-critical infrastructure for modern enterprises. From zero-latency Automotive Telemetry APIs to LUMI, our autonomous AI agent framework, we deploy resilient architectures that process massive datasets at scale.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => router.push('/products')}
                                className="bg-gradient-to-r from-white via-[#10b981] to-[#3b82f6] hover:opacity-90 text-black px-8 py-3.5 font-bold text-sm transition-all inline-block tracking-wide shadow-xl text-center"
                            >
                                Get Started
                            </button>
                            <button
                                onClick={() => router.push('/about-us')}
                                className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-8 py-3.5 font-bold text-sm transition-colors inline-block tracking-wide text-center"
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