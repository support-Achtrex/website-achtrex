'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

export const AboutSection = () => {
    const router = useRouter();
    return (
        <section id="why-achtrex" className="py-16 px-6 relative overflow-hidden bg-transparent">
            <div className="max-w-[1440px] mx-auto relative z-10">

                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 space-y-4">

                    <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-gradient tracking-tight leading-[1.1]">
                        Powering the future of<br />automotive intelligence
                    </h2>
                    <p className="text-[16px] text-slate-500 leading-[1.6] max-w-3xl font-medium">
                        Achtrex is a global automotive technology company delivering scalable data APIs, enterprise VIN intelligence, and LUMI AI — a cognitive automotive reasoning engine. We operate live platforms, active integrations, and growing client engagements worldwide.
                    </p>
                </motion.div>

                {/* Stats Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-5xl mx-auto">
                    {[
                        { value: '3', label: 'Live Platforms', sub: 'AutomotiveDataset · LUMI · Core' },
                        { value: '4+', label: 'Industries', sub: 'Auto · AI · SaaS · Enterprise' },
                        { value: 'Global', label: 'Operations', sub: 'Remote-first worldwide' },
                    ].map((stat, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                            className="text-center p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#1A8B8C]/50 hover:bg-slate-50 transition-all">
                            <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                            <div className="text-sm font-bold text-slate-600 mb-1">{stat.label}</div>
                            <div className="text-[11px] text-slate-400 font-medium">{stat.sub}</div>
                        </motion.div>
                    ))}
                </div>


                {/* Infrastructure Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative h-[240px] md:h-[380px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-10">
                    <Image
                        src="/server_infrastructure.png"
                        alt="Achtrex Scalable Automotive Data Infrastructure"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA]/30 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                        {['AutomotiveDataset.com', 'LUMI AI', 'Achtrex Core', 'Enterprise APIs'].map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[12px] font-bold text-slate-900 border border-slate-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="text-center flex justify-center">
                    <Link href="/about-us" className="relative group overflow-hidden rounded-full p-[2px] transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(59,130,246,0.15)] inline-flex">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-full h-full bg-[#F8F9FA] hover:bg-[#0c1222] text-slate-900 font-bold text-[14px] px-8 py-3.5 rounded-full transition-colors duration-500 flex items-center justify-center gap-2">
                            Learn about Achtrex
                            <ArrowRight weight="bold" className="w-4 h-4" />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};