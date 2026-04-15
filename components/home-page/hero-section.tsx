'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
                            <motion.img
                                key={currentImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.6 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5 }}
                                src={IMAGES[currentImage]}
                                alt="Achtrex Platforms"
                                className="w-full h-full object-cover"
                            />
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

            {/* Expanded Bottom Banner Area (Broadcom Style) */}
            <div className="w-full bg-[#f4f4f4] py-10 px-6 border-b border-gray-300">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6">
                        <div>
                            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] to-[#3b82f6] text-2xl font-bold mb-2 tracking-tight">Global SaaS Infrastructure</h2>
                            <p className="text-[#333] text-sm md:text-base font-medium max-w-2xl leading-relaxed mb-4">
                                <span className="font-bold">Achtrex is building a scalable ecosystem of data and AI platforms designed for global use.</span> Discover how we securely process millions of actionable data signals daily. We architect highly proprietary API engines and data aggregators that scale globally.
                            </p>
                            <div className="flex flex-wrap gap-2 md:gap-3 mt-1">
                                <span className="text-[10px] sm:text-xs font-bold bg-[#10b981]/10 text-[#10b981] px-2 py-1.5 rounded-md border border-[#10b981]/20 uppercase tracking-wider">Platform in active development</span>
                                <span className="text-[10px] sm:text-xs font-bold bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-1.5 rounded-md border border-[#3b82f6]/20 uppercase tracking-wider">Expanding dataset coverage</span>
                                <span className="text-[10px] sm:text-xs font-bold bg-[#8b5cf6]/10 text-[#8b5cf6] px-2 py-1.5 rounded-md border border-[#8b5cf6]/20 uppercase tracking-wider">Early-stage product rollout</span>
                            </div>
                        </div>
                        <button className="bg-gradient-to-r from-white via-[#10b981] to-[#3b82f6] hover:opacity-90 text-black px-8 py-3 font-bold text-sm transition-all shrink-0 shadow-md">
                            Learn more
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 border border-gray-200 shadow-sm flex flex-col justify-center hover:shadow-md transition-shadow">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#10b981] mb-2">Headquarters</h3>
                            <div className="text-xs text-gray-900 font-bold leading-relaxed">
                                1111B S Governors Ave STE 48362<br />
                                Dover, DE 19904<br />
                                United States
                            </div>
                        </div>
                        <div className="bg-white p-4 border border-gray-200 shadow-sm flex gap-4 hover:shadow-md transition-shadow items-center">
                            <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-br from-[#10b981] to-[#3b82f6]">
                                <span className="text-white font-bold text-4xl">A</span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#3b82f6] mb-1">Achtrex Brand</h3>
                                <p className="text-xs text-gray-600 leading-relaxed font-medium">Building a scalable ecosystem of data and AI platforms designed for global use.</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 border border-gray-200 shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                            <div className="relative w-20 h-20 shrink-0 rounded overflow-hidden border border-gray-100 flex items-center justify-center bg-black">
                                <img src="/projects/immutable_ledger_icon.png" alt="Immutable Ledgers" className="object-cover w-full h-full rounded" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#3b82f6] mb-1">Immutable Ledgers</h3>
                                <p className="text-xs text-gray-600 leading-relaxed font-medium">Cross-border extraction securely normalizing fragmented international records natively.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};