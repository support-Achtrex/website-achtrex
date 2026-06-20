'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700', '800', '900'] });

interface InnerPageHeaderProps {
    title: string;
    subtitle?: string;
}

export const InnerPageHeader = ({ title, subtitle }: InnerPageHeaderProps) => {
    return (
        <div className="relative bg-[#081622] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            {/* Geometric Pattern Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00a9ce" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Diagonal Slash Decor */}
            <div className="absolute top-0 right-[-10%] w-[50%] h-[200%] bg-[#001a22] transform -skew-x-12 opacity-50 z-0"></div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl"
                >
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${montserrat.className}`}>
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-slate-300 font-medium">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Bottom Diagonal Cut */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#f4f4f4] transform skew-y-2 origin-bottom-right scale-x-110"></div>
        </div>
    );
};
