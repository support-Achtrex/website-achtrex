'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Search, ShieldCheck, BarChart3, Star, CheckCircle2, ArrowRight, Smartphone, Globe, Cloud, Layout, MousePointer2, Code2, AppWindow, Database, Server, Cpu } from 'lucide-react';
import { Button } from '@/components/buttons';
import Image from "next/image";
import { CTASection } from "@/components/cta";

export default function AutomotiveDatasetPage() {
    return (
        <main className="min-h-screen bg-white text-black pt-24">
            {/* 1. Header with Title & Stats */}
            <div className="bg-[#fcf8f0] border-b border-gray-200 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
                    <div className="max-w-2xl">
                        <nav className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
                            Portfolio / Automotive Dataset
                        </nav>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-4">
                            Automotive Dataset
                        </h1>
                        <p className="text-lg text-gray-500 font-medium">
                            The backbone of mobility intelligence, delivering 2.5M+ records at scale.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-8 lg:gap-16">
                        {[
                            { value: '2.5M+', label: 'Vehicle Records' },
                            { value: '100M+', label: 'Data Points' },
                            { value: '99.9%', label: 'API Uptime' },
                            { value: '500ms', label: 'Response Time' },
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
                                The Automotive Dataset is an enterprise-grade vehicle data API with the prospect of becoming the cutting-edge for high-frequency mobility services worldwide. However, they needed to directly and openly dedicate deep technical documentation and a high-performance dashboard to market their various data services so as to engage their developer audience and better achieve great business results.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold border-b-2 border-black pb-4 inline-block">Product Scope</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We collaborated with the Automotive Dataset team to architect a low-latency API engine capable of serving complex VIN queries and technical specifications in sub-second intervals.
                            </p>
                            <ul className="grid grid-cols-1 gap-3">
                                {[
                                    'High-availability API architecture',
                                    'VIN-to-Build-Sheet mapping engine',
                                    'Real-time specs & recall database',
                                    'Global stock imagery API',
                                    'Developer documentation portal',
                                    'Live query dashboard & analytics'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a 
                            href="https://automotivedataset.com" 
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
                                    src="/projects/automotive_ui_new.jpg" 
                                    alt="Automotive API Interface"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 01</div>
                                <h3 className="text-2xl font-bold">Data Architecture</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    We designed a distributed database architecture that handles billions of data points with near-instant retrieval, taking into consideration the extreme reliability needed for production mobility applications.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 02</div>
                                <h3 className="text-2xl font-bold">Interface design</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    We built of an interactive and pleasing to the eye developer dashboard, focused on making complex data easy to visualize and test for API consumers.
                                </p>
                            </div>
                        </div>

                        {/* Mid Visual */}
                        <div className="bg-orange-500 p-12 lg:p-20 rounded-3xl overflow-hidden relative text-white group">
                            <div className="absolute top-0 right-0 w-[50%] h-full bg-black/20 blur-[80px] pointer-events-none" />
                            <div className="relative z-10 space-y-8">
                                <h3 className="text-4xl font-bold">API Development</h3>
                                <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                                    The core system was developed to support massive concurrent lookups while maintaining a 500ms average response time for global clients.
                                </p>
                                <div className="flex gap-4">
                                    <div className="px-6 py-2 border border-white/40 rounded-full text-xs font-bold uppercase tracking-widest">RESTful API Integration</div>
                                    <div className="px-6 py-2 border border-white/40 rounded-full text-xs font-bold uppercase tracking-widest">GraphQL Support</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 03</div>
                                <h3 className="text-2xl font-bold">LoFi Design</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Initially, we built of a prototype easy to translate into high-level design concepts, forming tangible and testable artifacts for our technical stakeholders.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 04</div>
                                <h3 className="text-2xl font-bold">QA Process</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Before going live, we executed a rigorous quality assurance test and stress review to ensure the API provides the best final product for mission-critical apps.
                                </p>
                            </div>
                        </div>

                        {/* Final Visual */}
                        <div className="bg-[#f0f2f5] p-12 rounded-3xl group">
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#111] border border-black/5">
                                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10" />
                                <Image 
                                    src="/projects/automotive_real.png" 
                                    alt="Real-time API Monitor"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[4s]"
                                />
                            </div>
                            <div className="mt-8 text-center uppercase tracking-[0.4em] font-black text-xs text-gray-400 italic">Enterprise Dashboard Environment</div>
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
