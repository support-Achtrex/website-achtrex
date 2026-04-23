'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Search, ShieldCheck, BarChart3, Star, CheckCircle2, ArrowRight, Smartphone, Globe, Cloud, Layout, MousePointer2, Code2, AppWindow, Database, Bot, Zap, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/buttons';
import Image from "next/image";
import { CTASection } from "@/components/cta";

export default function LumiClient() {
    return (
        <main className="min-h-screen bg-white text-black pt-24">
            {/* 1. Header with Title & Stats */}
            <div className="bg-[#f0f9ff] border-b border-gray-200 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
                    <div className="max-w-2xl">
                        <nav className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
                            Portfolio / LUMI Platform
                        </nav>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-4">
                            LUMI Platform
                        </h1>
                        <p className="text-lg text-gray-500 font-medium">
                            The intelligent AI logic layer for unified enterprise communications.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-8 lg:gap-16">
                        {[
                            { value: '0ms', label: 'Human Latency' },
                            { value: '100+', label: 'Workflows' },
                            { value: '10K+', label: 'Auto Actions' },
                            { value: 'Alpha', label: 'Phase Status' },
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
                                LUMI is an AI-driven unified communications platform with the prospect of becoming the cutting-edge for intelligent agency workflows worldwide. However, the client needed to directly and openly dedicate new AI reasoning motion graphics to market their various platform services so as to engage their audience and better achieve great business results.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold border-b-2 border-black pb-4 inline-block">Product Scope</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We collaborated with the LUMI team to architect a unified intelligent layer that sits between fragmented communication tools and automated business logic.
                            </p>
                            <ul className="grid grid-cols-1 gap-3">
                                {[
                                    'AI reasoning engine design',
                                    'Multi-channel messaging integration',
                                    'Automated task orchestration',
                                    'Real-time voice-to-logic translation',
                                    'Interactive developer playground',
                                    'Enterprise-grade security audits'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gray-300 border-b-2 border-gray-100 pb-1 cursor-default">
                            Alpha Phase - Coming Soon
                        </div>
                    </div>

                    {/* Right: Main Story & Process */}
                    <div className="lg:col-span-8 space-y-24">
                        {/* Big Hero Visual */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-[#f0f7ff] p-12 rounded-3xl"
                        >
                            <div className="relative aspect-video w-full">
                                <Image 
                                    src="/projects/lumi_ui_new.jpg" 
                                    alt="LUMI Logic Interface"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 01</div>
                                <h3 className="text-2xl font-bold">Reasoning Engine</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    We developed the graphical user interface of LUMI using advanced logic mapping, ensuring high-speed reasoning and automated response accuracy.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 02</div>
                                <h3 className="text-2xl font-bold">UX Design</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Based on the prototype, we built an interactive and pleasing to the eye design, taking into consideration the extreme speed needed for AI-human interaction.
                                </p>
                            </div>
                        </div>

                        {/* Mid Visual */}
                        <div className="bg-[#000] p-12 lg:p-20 rounded-3xl overflow-hidden relative text-white group">
                            <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-500/20 blur-[100px] pointer-events-none" />
                            <div className="relative z-10 space-y-8">
                                <h3 className="text-4xl font-bold">Platform Intelligence</h3>
                                <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                                    We built of a prototype easy to translate to high-level design concepts into tangible and testable artifacts for automated workflows across social media and web.
                                </p>
                                <div className="flex gap-4">
                                    <div className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">Natural Language Processing</div>
                                    <div className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">Logic Flow Orchestration</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 03</div>
                                <h3 className="text-2xl font-bold">LoFi Design</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Before going live, we did a quality assurance test and review, to give our customers the best final product for their automated communication infrastructure.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 04</div>
                                <h3 className="text-2xl font-bold">Project Success</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    LUMI has successfully automated over 10,000 internal actions during the alpha phase, proving the scalability of our reasoning architecture.
                                </p>
                            </div>
                        </div>

                        {/* Final Visual */}
                        <div className="bg-[#f0f2f5] p-12 rounded-3xl group">
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900 border border-black/5">
                                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10" />
                                <Image 
                                    src="/projects/lumi_ui_v2.jpg" 
                                    alt="LUMI Network Monitor"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[4s]"
                                />
                            </div>
                            <div className="mt-8 text-center uppercase tracking-[0.4em] font-black text-xs text-gray-400 opacity-50 italic">AI Reasoning Environment Monitor</div>
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
