'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ServicesGrid = () => {
    // Custom substantial icons instead of thin outline lines
    const SolidGlobeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M12 2C6.48 2 2 6.48 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2ZM11 19.93A8.04 8.04 0 0 1 4.26 13H11V19.93ZM11 11H4.26A8.04 8.04 0 0 1 11 4.07V11ZM13 4.07A8.04 8.04 0 0 1 19.74 11H13V4.07ZM13 19.93V13H19.74A8.04 8.04 0 0 1 13 19.93Z" />
        </svg>
    );

    const SolidDatabaseIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M12 3C7.58 3 4 4.79 4 7C4 9.21 7.58 11 12 11C16.42 11 20 9.21 20 7C20 4.79 16.42 3 12 3ZM12 9C8.36 9 5.86 7.69 5.15 7C5.86 6.31 8.36 5 12 5C15.64 5 18.14 6.31 18.85 7C18.14 7.69 15.64 9 12 9ZM4 10.42V13C4 15.21 7.58 17 12 17C16.42 17 20 15.21 20 13V10.42C19.1 11.39 16.14 12.5 12 12.5C7.86 12.5 4.9 11.39 4 10.42ZM20 16.42V19C20 21.21 16.42 23 12 23C7.58 23 4 21.21 4 19V16.42C4.9 17.39 7.86 18.5 12 18.5C16.14 18.5 19.1 17.39 20 16.42Z" />
        </svg>
    );

    const SolidShieldIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
        </svg>
    );

    const technologies = [
        {
            icon: <SolidGlobeIcon />,
            title: 'Geo-Distributed API Gateways',
            description: 'Ultra-low-latency REST and GraphQL delivery networks. We deploy globally distributed microservices utilizing advanced edge-caching and predictive load-balancing to ensure zero query jitter across cross-continental infrastructures.',
            details: ['Sub-10ms Routing', 'Intelligent Caching', 'Horizontal Sync'],
            colSpan: 'md:col-span-2',
        },
        {
            icon: <SolidDatabaseIcon />,
            title: 'Deep Aggregation Engines',
            description: 'Massive-scale, distributed schema architectures engineered for complex vector charting and multi-dimensional querying across billions of unified asset rows asynchronously.',
            details: ['Distributed SQL', 'Vector Indexing', 'Streaming Sync'],
            colSpan: 'md:col-span-1',
        },
        {
            icon: <SolidShieldIcon />,
            title: 'Zero-Trust Enterprise Security',
            description: 'Institutional-grade cryptographic compliance, end-to-end payload encryption, and strictly isolated Virtual Private Clouds guaranteeing tamper-proof platform integrity under intense enterprise threat vectors.',
            details: ['AES-256 Transit', 'Zero-Trust Auth', 'Automated Fallbacks'],
            colSpan: 'md:col-span-3',
        }
    ];

    return (
        <section id="technologies" className="py-32 relative bg-[#060913] overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-white text-sm font-bold tracking-wider uppercase mb-4 block"
                        >
                            Infrastructure Foundation
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-white leading-tight"
                        >
                            Architected for <br/> Absolute Scale.
                        </motion.h2>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed border-l-4 border-logo-gradient pl-6 lg:pl-10 h-full flex flex-col justify-end"
                    >
                        Our portfolio operates exclusively on a proprietary, optimized technology stack engineered for mission-critical velocity. By fully integrating our foundational layers, from geo-distributed API gateways to underlying vector data lakes, we eliminate fragile external dependencies and guarantee unprecedented uptime and query performance.
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${tech.colSpan} relative overflow-hidden bg-background border-t-2 border-logo-gradient p-10 pt-12 group transition-all duration-300 hover:bg-white/[0.02]`}
                        >
                            <div className="flex flex-col h-full relative z-10">
                                <div className="mb-8 text-logo-gradient text-4xl font-black opacity-20 group-hover:opacity-100 transition-opacity">
                                    0{index + 1}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-lg mb-8 max-w-3xl">
                                    {tech.description}
                                </p>
                                
                                <div className="mt-auto pt-8 border-t border-white/5 flex flex-wrap gap-4">
                                   {tech.details.map((detail, idx) => (
                                       <span key={idx} className="flex items-center text-sm font-bold text-white uppercase tracking-wider gap-2">
                                           <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                           {detail}
                                       </span>
                                   ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;