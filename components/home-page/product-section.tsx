'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Bot, ArrowRight, ExternalLink, Code2 } from 'lucide-react';
import { Button } from '@/components/buttons';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export const ProductSection = () => {
    const router = useRouter();

    return (
        <section id="products" className="py-24 relative bg-background overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-gradient text-sm font-bold tracking-widest uppercase mb-4 block"
                    >
                        Our Internal Products
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Market-Ready Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl"
                    >
                        Achtrex builds and operates specialized digital platforms designed for high-performance API access, unified communications, and global data scale.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Automotive Data Platform */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group flex flex-col h-full bg-[#0a0f1c] border border-white/10 rounded-2xl overflow-hidden hover:border-r-logo-gradient transition-all duration-300 shadow-xl relative"
                    >
                        {/* Status Badge */}
                        <div className="absolute top-6 right-6 z-20">
                            <span className="flex items-center gap-2 bg-green-500/90 text-white shadow-lg border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                Live Product
                            </span>
                        </div>

                        {/* Card Hero Image */}
                        <div className="relative h-72 w-full bg-slate-900 border-b border-white/10 overflow-hidden">
                            <Image
                                src="/projects/automotive_ui_v2.jpg"
                                alt="Automotive Data Engine"
                                fill
                                className="object-cover object-top opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/10 to-transparent" />
                        </div>

                        <div className="p-8 md:p-10 flex-grow relative z-10 pt-4">
                            <h3 className="text-3xl font-display font-bold text-white mb-3">Automotive Dataset</h3>
                            <p className="text-gradient text-sm font-bold uppercase tracking-widest mb-6">Deep Vehicle Intelligence</p>
                            
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Power your business with the industry’s most extensive data catalog. Access over 50 specialized APIs and full database downloads, including Premium VIN, Window Stickers, Valuation, Auction Data, Plate OCR, vehicle media, YMM specs, Repair Estimates, Parts Catalogs, and detailed Technical Specs.
                            </p>
                        </div>
                        
                        <div className="p-8 md:p-10 pt-0 mt-auto">
                            <a 
                                href="https://automotivedataset.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-logo-gradient text-white py-4 rounded-xl font-bold transition-all hover:scale-[1.02] shadow-lg"
                            >
                                Visit Automotivedataset.com
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* AI Platform */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group flex flex-col h-full bg-[#0a0f1c] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 relative"
                    >
                        {/* Status Badge */}
                        <div className="absolute top-6 right-6 z-20">
                            <span className="flex items-center gap-2 bg-[#111827]/90 text-secondary border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                                Architecture Phase
                            </span>
                        </div>

                        {/* Card Hero Image */}
                        <div className="relative h-72 w-full bg-slate-900 border-b border-white/10 overflow-hidden">
                            <Image
                                src="/projects/lumi_ui_v2.jpg"
                                alt="LUMI Logic Framework"
                                fill
                                className="object-cover object-top opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/10 to-transparent" />
                        </div>

                        <div className="p-8 md:p-10 flex-grow relative z-10 pt-4">
                            <h3 className="text-3xl font-display font-bold text-white mb-3">LUMI</h3>
                            <p className="text-gradient text-sm font-bold uppercase tracking-widest mb-6">Intelligent AI Platform</p>
                            
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                LUMI is an intelligent AI platform that allows businesses and developers to create smart agents that can understand, respond, automate tasks, and interact with data in real time.
                            </p>
                        </div>
                    </motion.div>

                    {/* CarKasa */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group flex flex-col h-full bg-[#0a0f1c] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 relative"
                    >
                        {/* Status Badge */}
                        <div className="absolute top-6 right-6 z-20">
                            <span className="flex items-center gap-2 bg-blue-500/90 text-white shadow-lg border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                                Live Platform
                            </span>
                        </div>

                        {/* Card Hero Image */}
                        <div className="relative h-72 w-full bg-slate-900 border-b border-white/10 overflow-hidden">
                            <Image
                                src="/projects/carkasa_full.jpg"
                                alt="CarKasa"
                                fill
                                className="object-cover object-top opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/10 to-transparent" />
                        </div>

                        <div className="p-8 md:p-10 flex-grow relative z-10 pt-4">
                            <h3 className="text-3xl font-display font-bold text-white mb-3">CarKasa</h3>
                            <p className="text-gradient text-sm font-bold uppercase tracking-widest mb-6">Modern Vehicle Solutions</p>
                            
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                A comprehensive vehicle history report, vehicle listing, and auto loan platform. Streamlining automotive transactions through unified digital services.
                            </p>
                        </div>
                        
                        <div className="p-8 md:p-10 pt-0 mt-auto">
                            <a 
                                href="https://carkasa.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-logo-gradient text-white py-4 rounded-xl font-bold transition-all hover:scale-[1.02] shadow-lg"
                            >
                                Visit Carkasa.com
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Vehicle Report Check */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group flex flex-col h-full bg-[#0a0f1c] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 relative"
                    >
                        {/* Status Badge */}
                        <div className="absolute top-6 right-6 z-20">
                            <span className="flex items-center gap-2 bg-orange-500/90 text-white shadow-lg border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                                Global Reach
                            </span>
                        </div>

                        {/* Card Hero Image */}
                        <div className="relative h-72 w-full bg-slate-900 border-b border-white/10 overflow-hidden">
                            <Image
                                src="/projects/vehiclereport_full.jpg"
                                alt="Vehicle Report Check"
                                fill
                                className="object-cover object-top opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/10 to-transparent" />
                        </div>

                        <div className="p-8 md:p-10 flex-grow relative z-10 pt-4">
                            <h3 className="text-3xl font-display font-bold text-white mb-3">Vehicle Report Check</h3>
                            <p className="text-gradient text-sm font-bold uppercase tracking-widest mb-6">Global History Data</p>
                            
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Providing comprehensive vehicle reports and history verification across global markets for any vehicle in the world.
                            </p>
                        </div>
                        
                        <div className="p-8 md:p-10 pt-0 mt-auto">
                            <a 
                                href="https://vehiclereportcheck.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 rounded-xl font-bold transition-all hover:scale-[1.02] shadow-lg"
                            >
                                Visit VehicleReportCheck.com
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Database Icon wrapper
function Database(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    );
}
