'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const PillarsSection = () => {
    const pillars = [
        {
            image: '/projects/automotive_ui_new.jpg',
            title: 'Automotive Intelligence',
            description: 'Massive-scale datasets and high-performance APIs powering the next generation of global mobility platforms.',
            color: 'from-blue-600 to-indigo-700'
        },
        {
            image: '/projects/lumi_ui_v2.jpg',
            title: 'LUMI AI Platform',
            description: 'Intelligent AI agents and reasoning frameworks designed to automate workflows and deliver real-time insights.',
            color: 'from-purple-600 to-pink-700'
        },
        {
            image: '/projects/vehiclereport_full.jpg',
            title: 'Global Data Reports',
            description: 'High-fidelity vehicle history verification, normalizing fragmented records into a single source of truth.',
            color: 'from-orange-500 to-red-600'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="flex flex-col group cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] w-full mb-8 overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-xl">
                                <Image
                                    src={pillar.image}
                                    alt={pillar.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-[#005a9e] mb-4 tracking-tight group-hover:text-blue-700 transition-colors">
                                {pillar.title}
                            </h3>
                            
                            <p className="text-[#4b5563] text-lg leading-relaxed font-medium">
                                {pillar.description}
                            </p>
                            
                            <div className="mt-6 flex items-center text-sm font-black uppercase tracking-[0.2em] text-blue-600 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                                Learn More →
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
