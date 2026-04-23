'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Search, ShieldCheck, BarChart3, Star, CheckCircle2, ArrowRight, Smartphone, Globe, Cloud, Layout, MousePointer2, Code2, AppWindow } from 'lucide-react';
import { Button } from '@/components/buttons';
import Image from "next/image";
import { CTASection } from "@/components/cta";

export default function CarKasaClient() {
    return (
        <main className="min-h-screen bg-white text-black pt-24">
            {/* 1. Header with Title & Stats */}
            <div className="bg-[#f8f9fa] border-b border-gray-200 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
                    <div className="max-w-2xl">
                        <nav className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
                            Portfolio / CarKasa
                        </nav>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-4">
                            CarKasa
                        </h1>
                        <p className="text-lg text-gray-500 font-medium">
                            The ultimate ecosystem for vehicle history, listings, and auto loans.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-8 lg:gap-16">
                        {[
                            { value: '150%', label: 'Increased Sales' },
                            { value: '85%', label: 'Data Accuracy' },
                            { value: '20K+', label: 'Active Users' },
                            { value: '5M+', label: 'Reports' },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-2xl md:text-3xl font-black text-black mb-1">{stat.value}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Main Content & Info Sidebar */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left: Info Sidebar */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold border-b-2 border-black pb-4 inline-block">The Challenge</h2>
                            <p className="text-gray-600 leading-relaxed">
                                CarKasa is a multi-sided marketplace platform with the prospect of becoming the cutting-edge for automotive consumer services worldwide. However, they needed to directly and openly dedicate new motion graphics and a unified UI to market their various services so as to engage their audience and better achieve great business results.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold border-b-2 border-black pb-4 inline-block">Product Scope</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We collaborated with CarKasa to understand how their business functions, developed an easy-to-understand UI flow for their mobile and web apps, and connected their brand story, visuals, and sound to reflect their business goals.
                            </p>
                            <ul className="grid grid-cols-1 gap-3">
                                {[
                                    'Platform architecture & design',
                                    'Mobile application development (iOS/Android)',
                                    'VIN & Plate Checker integration',
                                    'Listing optimization engine',
                                    'Auto Loan API orchestration',
                                    'Internal CRM for dealers'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a 
                            href="https://carkasa.com" 
                            target="_blank" 
                            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-black border-b-2 border-black pb-1 hover:gap-4 transition-all"
                        >
                            See Live Project <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Right: Main Story & Process */}
                    <div className="lg:col-span-8 space-y-24">
                        {/* Big Hero Visual */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-[#f0f2f5] p-12 rounded-3xl"
                        >
                            <div className="relative aspect-video w-full">
                                <Image 
                                    src="/projects/carkasa_full.jpg" 
                                    alt="CarKasa Interface"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 01</div>
                                <h3 className="text-2xl font-bold">UX Flow</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Based on research and building the architecture of the platform, we designed an interface focused on usability and conversion for both car buyers and sellers.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 02</div>
                                <h3 className="text-2xl font-bold">Design Systems</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    We built a prototype easy to translate into high-level design concepts, followed by an interactive and pleasing HiFi design taking all usability factors into account.
                                </p>
                            </div>
                        </div>

                        {/* Mid Visual */}
                        <div className="bg-black p-12 lg:p-20 rounded-3xl overflow-hidden relative text-white group">
                            <div className="absolute top-0 right-0 w-[50%] h-full bg-logo-gradient opacity-20 blur-[100px] pointer-events-none" />
                            <div className="relative z-10 space-y-8">
                                <h3 className="text-4xl font-bold">App Development</h3>
                                <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                                    We brought everything together into a cross-platform application supported by both the Apple App Store and Google Play Store, ensuring a unified experience.
                                </p>
                                <div className="flex gap-4">
                                    <div className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">iOS Integration</div>
                                    <div className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">Android Integration</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 03</div>
                                <h3 className="text-2xl font-bold">Front End</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    We developed the graphical user interface using React and Flutter, creating a smooth, high-fidelity responsive environment for all devices.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 04</div>
                                <h3 className="text-2xl font-bold">QA Process</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Before going live, we executed exhaustive quality assurance tests to ensure the platform delivered the absolute best final production product for our customers.
                                </p>
                            </div>
                        </div>

                        {/* Final Visual */}
                        <div className="bg-[#f0f2f5] p-12 rounded-3xl group">
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900 border border-black/5 animate-pulse-slow">
                                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10" />
                                <Image 
                                    src="/projects/carkasa_real.png" 
                                    alt="CarKasa Live Environment"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[3s]"
                                />
                            </div>
                            <div className="mt-8 text-center uppercase tracking-[0.4em] font-black text-xs text-gray-300">Live Project Environment</div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-black py-20">
                <CTASection />
            </div>
        </main>
    );
}
