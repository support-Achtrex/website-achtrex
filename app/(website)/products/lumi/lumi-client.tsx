'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Search, Layout, ShieldCheck, MessageSquare, Workflow, Zap, Car, BrainCircuit } from 'lucide-react';
import Image from "next/image";

export default function LumiClient() {
    return (
        <main className="min-h-screen bg-[#070b14] text-white selection:bg-[#861F80] selection:text-white pt-24 pb-20">
            {/* 1. Header */}
            <div className="bg-gradient-to-br from-[#0c1222] to-[#861F80]/20 border-b border-[#861F80]/10 py-12 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <nav className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c2fce3]/60 mb-6 flex items-center gap-2">
                        <span>Portfolio</span>
                        <span className="text-[#c2fce3]/30">/</span>
                        <span className="text-[#c2fce3]">LUMI AI Platform</span>
                    </nav>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
                        <div className="relative w-48 md:w-64 aspect-[3/2]">
                            <Image 
                                src="/projects/lumi-logo.png" 
                                alt="LUMI Platform Logo" 
                                fill 
                                className="object-contain" 
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#174395] via-[#861F80] to-[#F2147A] mb-1">
                                LUMI AI Platform
                            </h1>
                            <a href="https://lumi.achtrex.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#489EE6] hover:text-[#c2fce3] font-bold text-lg mb-4 transition-colors">
                                lumi.achtrex.com <ArrowRight size={16} className="ml-1.5" />
                            </a>
                            <p className="text-xl text-gray-300 font-bold max-w-2xl">The cognitive automotive platform delivering AI-driven vehicle intelligence, predictive analytics, and conversational diagnostics.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span className="px-4 py-1.5 rounded-full bg-[#070b14] border border-[#c2fce3]/20 text-[#c2fce3] text-sm font-semibold shadow-sm">Cognitive Platform</span>
                        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1A8B8C] to-[#157172] text-white text-sm font-semibold shadow-sm">● Live</span>
                    </div>
                </div>
            </div>

            {/* 2. Main Content Grid */}
            <section className="py-12 lg:py-16 px-6">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
                    
                    {/* Left: Info Sidebar */}
                    <div className="lg:col-span-4 space-y-16">
                        {/* The Challenge */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#F2147A] pb-4 inline-block text-[#c2fce3]">The Challenge</h2>
                            <p className="text-lg text-gray-300 leading-relaxed font-medium">
                                LUMI is being engineered to bridge the gap between static vehicle data and actionable intelligence. Traditional automotive analytics lack true contextual understanding, leading to reactive maintenance and frustrating diagnostic workflows. The challenge is to architect an autonomous reasoning engine that understands the complex language of mobility.
                            </p>
                        </div>

                        {/* Product Scope */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#489EE6] pb-4 inline-block text-[#c2fce3]">Product Scope</h2>
                            <p className="text-lg text-gray-300 leading-relaxed font-medium">
                                We are developing a unified intelligent layer utilizing state-of-the-art cognitive capabilities and proprietary LLM architectures. The platform features conversational vehicle analytics, predictive maintenance alerts, intelligent repair recommendations, and real-time automotive reasoning tailored for enterprise fleets.
                            </p>
                        </div>

                        {/* CTA Group */}
                        <div className="space-y-3">
                            <a href="https://lumi.achtrex.com" className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#174395] via-[#861F80] to-[#F2147A] text-white font-bold py-4 rounded-lg hover:opacity-90 transition-all shadow-lg shadow-[#861F80]/20">
                                Launch LUMI <ArrowRight size={18} />
                            </a>
                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <button className="inline-flex items-center justify-center w-full bg-[#111112] text-[#c2fce3] border border-white/10 font-semibold py-3 rounded-lg hover:bg-[#070b14] hover:border-[#c2fce3] hover:shadow-sm transition-all text-sm">
                                    Platform Architecture
                                </button>
                                <button className="inline-flex items-center justify-center w-full bg-[#111112] text-[#c2fce3] border border-white/10 font-semibold py-3 rounded-lg hover:bg-[#070b14] hover:border-[#c2fce3] hover:shadow-sm transition-all text-sm">
                                    AI Model Docs
                                </button>
                                <button className="inline-flex items-center justify-center w-full bg-[#111112] text-[#F2147A] border border-white/10 font-semibold py-3 rounded-lg hover:bg-[#070b14] hover:border-[#F2147A] hover:shadow-sm transition-all text-sm">
                                    Developer Beta
                                </button>
                                <button className="inline-flex items-center justify-center w-full bg-[#111112] text-[#489EE6] border border-white/10 font-semibold py-3 rounded-lg hover:bg-[#070b14] hover:border-[#489EE6] hover:shadow-sm transition-all text-sm">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Process & Execution */}
                    <div className="lg:col-span-8 space-y-24">
                        
                        {/* Big Hero Visual */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[#174395] via-[#861F80] to-[#F2147A] p-1 md:p-2 rounded-3xl shadow-2xl"
                        >
                            <div className="relative aspect-[16/10] w-full rounded-[1.3rem] overflow-hidden bg-[#f4f7fc]">
                                <Image 
                                    src="/projects/lumi_hero_new.png" 
                                    alt="LUMI AI Vehicle Intelligence Platform"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* Process Grid (Roadmap) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            
                            {/* Reasoning Core */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                        <BrainCircuit size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">Phase 01: Engine Core</h3>
                                </div>
                                <ul className="space-y-3">
                                    {['Developing predictive vehicle logic models', 'Integrating state-of-the-art LLM endpoints', 'Building automotive natural language processors', 'Structuring high-speed diagnostic paths'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#174395] shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Integrations */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                                        <MessageSquare size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">Phase 02: Conversational Analytics</h3>
                                </div>
                                <p className="text-lg text-gray-300 leading-relaxed font-medium">
                                    Mapping complex OBD2 telemetry and historical repair data into intuitive, natural language dialogues, allowing users to literally "chat" with their vehicles.
                                </p>
                            </div>

                            {/* UI Design */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600">
                                        <Car size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">Phase 03: Intelligent Recommendations</h3>
                                </div>
                                <p className="text-lg text-gray-300 leading-relaxed font-medium">
                                    Designing the diagnostic reasoning node editor. Focused on translating mechanical symptoms into actionable, step-by-step repair guides and parts lists.
                                </p>
                            </div>

                            {/* Testing */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">Phase 04: Alpha Testing</h3>
                                </div>
                                <p className="text-lg text-gray-300 leading-relaxed font-medium">
                                    Conducting fleet-wide audits and stress tests. LUMI is currently analyzing millions of historical service records to refine its automotive reasoning accuracy.
                                </p>
                            </div>

                        </div>

                        {/* Ecosystem Preview */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 pt-16 mt-16 border-t border-white/10">
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-[#c2fce3] mb-2">Cognitive Capabilities</h3>
                                    <p className="text-sm text-gray-300 font-medium">Upcoming features within the LUMI core engine.</p>
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        { name: 'Predictive Maintenance Alerts', color: 'text-[#c2fce3]' },
                                        { name: 'Conversational Diagnostics', color: 'text-[#c2fce3]' },
                                        { name: 'Component Failure Probability', color: 'text-[#c2fce3]' },
                                        { name: 'Smart Repair Recommendations', color: 'text-[#c2fce3]' },
                                        { name: 'Multi-Model Logic Routing', color: 'text-[#c2fce3]' },
                                        { name: 'Automated Service Scheduling', color: 'text-[#F2147A]' },
                                        { name: 'Real-time Fleet Sentiment', color: 'text-[#F2147A]' },
                                        { name: 'Voice-to-Diagnostic Translation', color: 'text-[#489EE6]' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-[#111112] hover:bg-[#070b14] hover:border-gray-300 hover:shadow-md transition-all group cursor-default">
                                            <Zap className={`w-4 h-4 shrink-0 ${item.color}`} />
                                            <span className={`font-bold text-sm text-gray-200`}>{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-[#c2fce3] mb-2">Target Integrations</h3>
                                    <p className="text-sm text-gray-300 font-medium">Platforms LUMI will natively orchestrate at launch.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {[
                                        'AutomotiveDataset API', 'Geotab Telematics', 'Samsara Fleet Management', 'Salesforce Automotive', 
                                        'Mitchell 1', 'ALLDATA', 'Tekmetric', 'Shopmonkey', 
                                        'Dealer Management Systems (DMS)', 'OEM Connected Car APIs', 'ArkAuto E-Commerce', 'Fleetio'
                                    ].map((api, i) => (
                                        <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg border border-white/10 bg-[#070b14]">
                                            <span className="font-semibold text-xs text-gray-700">{api}</span>
                                            <Workflow size={12} className="text-gray-300" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
