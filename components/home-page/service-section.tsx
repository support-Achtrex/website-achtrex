'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, TrendingUp, Cpu, Video, Printer, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Keep this assumption or remove if not needed, likely exists

export const ServicesGrid = () => {
    const services = [
        {
            icon: <Cpu size={32} />,
            title: 'Product Engineering',
            description: 'We build the engines that power your business. From complex backends to scalable microservices.',
            colSpan: 'md:col-span-2',
            bgGradient: 'from-blue-500/20 to-cyan-500/20'
        },
        {
            icon: <Palette size={32} />,
            title: 'UI/UX Design',
            description: 'Award-winning designs that captivate and convert.',
            colSpan: 'md:col-span-1',
            bgGradient: 'from-purple-500/20 to-pink-500/20'
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'Growth Strategy',
            description: 'Data-driven marketing that scales your revenue.',
            colSpan: 'md:col-span-1',
            bgGradient: 'from-orange-500/20 to-red-500/20'
        },
        {
            icon: <Code2 size={32} />,
            title: 'Tech Consulting',
            description: 'Expert guidance on stack, architecture, and roadmap.',
            colSpan: 'md:col-span-2',
            bgGradient: 'from-emerald-500/20 to-green-500/20'
        },
        {
            icon: <Video size={32} />,
            title: 'Multimedia',
            description: 'Cinematic storytelling for the digital age.',
            colSpan: 'md:col-span-1',
            bgGradient: 'from-indigo-500/20 to-violet-500/20'
        },
        {
            icon: <Printer size={32} />,
            title: 'Physical Branding',
            description: 'Tangible assets that leave a lasting impression.',
            colSpan: 'md:col-span-2 md:col-start-2',
            bgGradient: 'from-yellow-500/20 to-amber-500/20'
        }
    ];

    return (
        <section id="services" className="py-24 relative bg-[#030014] overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
                    >
                        Beyond Standard Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        We don't just build software; we engineer digital dominance.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${service.colSpan} group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300`}
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Content */}
                            <div className="relative p-8 h-full flex flex-col justify-between z-10">
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <ArrowUpRight className="text-white w-6 h-6" />
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