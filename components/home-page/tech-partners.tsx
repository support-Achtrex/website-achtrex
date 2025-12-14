'use client'

import { SectionTitle } from '@/components/section-title';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const TechPartners = () => {
    const logos = [
        { name: 'GitHub', icon: <Image src="/logos/github.png" alt="GitHub" width={120} height={40} className="h-10 w-auto object-contain" /> },
        { name: 'Google Cloud', icon: <Image src="/logos/google-cloud.png" alt="Google Cloud" width={120} height={40} className="h-10 w-auto object-contain" /> },
        { name: 'Jira', icon: <Image src="/logos/Jira Logo.png" alt="Jira" width={120} height={40} className="h-10 w-auto object-contain" /> },
        { name: 'Python', icon: <Image src="/logos/python.png" alt="Python" width={120} height={40} className="h-10 w-auto object-contain" /> },
        { name: 'Node.js', icon: <Image src="/logos/node.png" alt="Node.js" width={120} height={40} className="h-10 w-auto object-contain" /> },
        { name: 'Partner', icon: <Image src="/logos/image 12.png" alt="Partner" width={120} height={40} className="h-10 w-auto object-contain" /> },
        { name: 'Partner', icon: <Image src="/logos/image 6.png" alt="Partner" width={120} height={40} className="h-10 w-auto object-contain" /> },
        { name: 'Partner', icon: <Image src="/logos/image 9.png" alt="Partner" width={120} height={40} className="h-10 w-auto object-contain" /> },
    ];

    // Duplicate logos to ensure seamless loop for marquee
    const marqueeLogos = [...logos, ...logos];

    return (
        <section id="technology" className="py-24 px-0 md:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-0">
                <SectionTitle className='font-red-hat-display font-black'>Our Technology and Partners</SectionTitle>
            </div>

            {/* Mobile Marquee */}
            <div className="relative w-full mt-10 md:hidden">
                {/* Gradient Masks for "Blurred" Ends */}
                <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Marquee Track */}
                <div className="overflow-hidden w-full">
                    <div 
                        className="flex items-center gap-16 animate-marquee"
                        style={{
                            width: 'max-content',
                        }}
                    >
                        {/* First set of logos */}
                        {marqueeLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110 cursor-pointer"
                            >
                                {logo.icon}
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {marqueeLogos.map((logo, index) => (
                            <div
                                key={`clone-${index}`}
                                className="shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110 cursor-pointer"
                                aria-hidden="true"
                            >
                                {logo.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-4 gap-12 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity max-w-6xl mx-auto mt-10">
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer grayscale hover:grayscale-0"
                    >
                        {logo.icon}
                    </div>
                ))}
            </div>
        </section>
    );
};