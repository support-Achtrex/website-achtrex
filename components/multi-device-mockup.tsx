'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MultiDeviceMockupProps {
    desktopImage: string;
    tabletImage?: string;
    mobileImage?: string;
    accentColor?: string;
}

export const MultiDeviceMockup: React.FC<MultiDeviceMockupProps> = ({
    desktopImage,
    tabletImage,
    mobileImage,
    accentColor = '#3b82f6'
}) => {
    return (
        <div className="relative w-full h-full min-h-[500px] flex items-center justify-center py-12 px-6 overflow-visible">
            {/* Background Decorative Chevron/Slash */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60%] -rotate-[20deg] opacity-10 pointer-events-none"
                style={{ backgroundColor: accentColor }}
            />

            <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center h-full">
                
                {/* 1. Desktop Mockup (Back Layer) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 w-[80%] pr-12"
                >
                    <div className="rounded-xl overflow-hidden border border-white/20 bg-[#0f172a] shadow-2xl">
                        {/* Browser Top Bar */}
                        <div className="bg-[#1e293b] border-b border-white/10 px-4 py-2.5 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                        </div>
                        <div className="relative aspect-[16/10] bg-white overflow-hidden">
                            <Image
                                src={desktopImage}
                                alt="Desktop Platform Preview"
                                fill
                                className="object-cover object-top"
                                unoptimized
                            />
                        </div>
                    </div>
                </motion.div>

                {/* 2. Tablet Mockup (Middle Layer - Angled) */}
                <motion.div
                    initial={{ opacity: 0, x: -40, rotateY: 10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{ perspective: '1200px' }}
                    className="absolute z-20 left-0 bottom-4 w-[45%]"
                >
                    <div className="rounded-[2.5rem] p-3 border-[6px] border-[#1e293b] bg-black shadow-2xl shadow-black/50 overflow-hidden transform rotate-[-5deg]">
                        <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-white">
                             <Image
                                src={tabletImage || desktopImage}
                                alt="Tablet view"
                                fill
                                className="object-cover object-top"
                                unoptimized
                            />
                        </div>
                        {/* Home button stripe for tablet feel */}
                        <div className="h-1 w-12 bg-gray-800 mx-auto mt-2 rounded-full" />
                    </div>
                </motion.div>

                {/* 3. Mobile Mockup (Front Layer) */}
                <motion.div
                    initial={{ opacity: 0, x: 40, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute z-30 bottom-[-20px] right-[5%] w-[22%]"
                >
                    <div className="rounded-[3rem] p-2.5 border-[8px] border-[#1e293b] bg-black shadow-2xl shadow-black/60 overflow-hidden">
                        {/* Speaker cutout */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black z-10 rounded-full" />
                        <div className="relative aspect-[9/19.5] rounded-[2.5rem] overflow-hidden bg-[#0a0f1c]">
                             <Image
                                src={mobileImage || tabletImage || desktopImage}
                                alt="Mobile view"
                                fill
                                className="object-cover object-top"
                                unoptimized
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
