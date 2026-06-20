'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, MessageSquare, Car, ShieldCheck, Zap, Workflow, Sparkles, Binary, Mic, Network } from 'lucide-react';
import Image from "next/image";
import { InnerPageHeader } from "@/components/inner-page-header";

export default function LumiClient() {
    return (
        <main className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-[#00a9ce]/20 selection:text-slate-900 pb-20">
            {/* 1. Header */}
            <InnerPageHeader title="LUMI AI Platform" subtitle="The cognitive automotive platform delivering AI-driven vehicle intelligence, predictive analytics, and conversational diagnostics powered by large language models." />

            {/* 2. Main Content Grid */}
            <section className="py-16 lg:py-24 px-6">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
                    
                    {/* Left: Info Sidebar */}
                    <div className="lg:col-span-4 space-y-16">
                        {/* The Challenge */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-black tracking-tight border-b-4 border-[#00a9ce] pb-4 inline-block text-[#11243b]">The Challenge</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                LUMI was engineered to bridge the gap between static vehicle data and actionable intelligence. Traditional automotive analytics lack true contextual understanding, leading to reactive maintenance and frustrating diagnostic workflows. The challenge was to architect an autonomous reasoning engine that truly understands the complex, nuanced language of mobility.
                            </p>
                        </div>

                        {/* Product Scope */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-black tracking-tight border-b-4 border-[#76bc1d] pb-4 inline-block text-[#11243b]">Product Scope</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                We developed a unified intelligent layer utilizing state-of-the-art cognitive capabilities and proprietary LLM architectures. The platform features conversational vehicle analytics, predictive maintenance alerts, intelligent repair recommendations, and real-time automotive reasoning tailored for enterprise fleets and repair networks.
                            </p>
                        </div>

                        {/* CTA Group */}
                        <div className="space-y-3 sticky top-32">
                            <a href="https://lumi.achtrex.com" className="inline-flex items-center justify-center gap-2 w-full bg-[#00a9ce] text-white font-bold py-4 rounded-xl hover:bg-[#008cb0] hover:-translate-y-1 transition-all shadow-[0_8px_20px_rgba(0,169,206,0.2)]">
                                Launch LUMI <ArrowRight size={18} />
                            </a>
                            <div className="grid grid-cols-2 gap-3 pt-4">
                                <button className="inline-flex items-center justify-center w-full bg-white text-[#11243b] border-2 border-slate-200 font-bold py-3 rounded-xl hover:border-[#00a9ce] hover:text-[#00a9ce] transition-all text-sm shadow-sm">
                                    Platform Architecture
                                </button>
                                <button className="inline-flex items-center justify-center w-full bg-white text-[#11243b] border-2 border-slate-200 font-bold py-3 rounded-xl hover:border-[#00a9ce] hover:text-[#00a9ce] transition-all text-sm shadow-sm">
                                    AI Model Docs
                                </button>
                                <button className="inline-flex items-center justify-center w-full bg-white text-[#11243b] border-2 border-slate-200 font-bold py-3 rounded-xl hover:border-[#76bc1d] hover:text-[#76bc1d] transition-all text-sm shadow-sm">
                                    Developer Beta
                                </button>
                                <button className="inline-flex items-center justify-center w-full bg-white text-[#11243b] border-2 border-slate-200 font-bold py-3 rounded-xl hover:border-[#00a9ce] hover:text-[#00a9ce] transition-all text-sm shadow-sm">
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
                            className="bg-white p-2 rounded-2xl border border-slate-200 shadow-xl"
                        >
                            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#001a22]">
                                <Image 
                                    src="/projects/lumi_hero_new.png" 
                                    alt="LUMI AI Vehicle Intelligence Platform"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* NEW SECTION: Conversational UX */}
                        <div className="space-y-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-black text-[#11243b] mb-4">Conversational Vehicle Interface</h2>
                                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                    We replaced complex diagnostic dashboards with a fluid, conversational interface. Users can literally "chat" with their fleet, asking natural questions like "Which trucks in the north region need brake pad replacements this week?" and receive instant, context-aware answers generated by the LUMI intelligence engine.
                                </p>
                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
                            >
                                <Image 
                                    src="/projects/lumi_interface.png" 
                                    alt="LUMI AI Conversational Interface"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <Sparkles className="text-[#00a9ce] mb-4 w-8 h-8" />
                                    <h4 className="font-bold text-lg mb-2 text-[#11243b]">Natural Language</h4>
                                    <p className="text-slate-600 text-sm">Translates complex automotive jargon into plain English summaries for non-technical managers.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <Mic className="text-[#76bc1d] mb-4 w-8 h-8" />
                                    <h4 className="font-bold text-lg mb-2 text-[#11243b]">Voice Enabled</h4>
                                    <p className="text-slate-600 text-sm">Hands-free voice to text transcription specifically trained on automotive terminology and car parts.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <Network className="text-purple-500 mb-4 w-8 h-8" />
                                    <h4 className="font-bold text-lg mb-2 text-[#11243b]">Context Memory</h4>
                                    <p className="text-slate-600 text-sm">Maintains conversation history and vehicle context across multi-turn diagnostic sessions.</p>
                                </div>
                            </div>
                        </div>

                        {/* NEW SECTION: Cognitive Architecture */}
                        <div className="space-y-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-black text-[#11243b] mb-4">Cognitive Architecture & NLP</h2>
                                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                    Under the hood, LUMI leverages a multi-model architecture. We built proprietary Vector Databases loaded with millions of OEM repair manuals, TSBs, and mechanic forum discussions. This retrieval-augmented generation (RAG) approach ensures LUMI's answers are hallucination-free and grounded in real-world automotive science.
                                </p>
                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
                            >
                                <Image 
                                    src="/ai_car_hero_v4.png" 
                                    alt="LUMI Neural Network Mapping"
                                    fill
                                    className="object-cover object-top"
                                />
                            </motion.div>
                        </div>


                        {/* Process Grid (Roadmap) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                            <h2 className="md:col-span-2 text-3xl font-black text-[#11243b] border-b border-slate-200 pb-4">Development Phases</h2>
                            
                            {/* Reasoning Core */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00a9ce]/20 to-transparent flex items-center justify-center text-[#00a9ce]">
                                        <BrainCircuit size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#11243b]">Phase 01: Engine Core</h3>
                                </div>
                                <ul className="space-y-3">
                                    {['Developing predictive vehicle logic models', 'Integrating state-of-the-art LLM endpoints', 'Building automotive natural language processors', 'Structuring high-speed diagnostic paths'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-[#00a9ce] shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Integrations */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#76bc1d]/20 to-transparent flex items-center justify-center text-[#76bc1d]">
                                        <MessageSquare size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#11243b]">Phase 02: Analytics</h3>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Mapping complex OBD2 telemetry and historical repair data into intuitive dialogues, allowing mechanics and fleet managers to query real-time vehicle statuses.
                                </p>
                            </div>

                            {/* UI Design */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent flex items-center justify-center text-purple-500">
                                        <Car size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#11243b]">Phase 03: Recommendations</h3>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Designing the diagnostic reasoning node editor. Focused on translating mechanical symptoms into actionable, step-by-step repair guides and parts lists.
                                </p>
                            </div>

                            {/* Testing */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center text-orange-500">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#11243b]">Phase 04: Alpha Testing</h3>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Conducting fleet-wide audits and stress tests. LUMI is currently analyzing millions of historical service records to refine its automotive reasoning accuracy.
                                </p>
                            </div>

                        </div>

                        {/* Ecosystem Preview */}
                        <div className="pt-16 mt-16 border-t border-slate-200">
                            <h2 className="text-3xl font-black text-[#11243b] mb-12">Core Capabilities & Integrations</h2>
                            
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                                
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight text-[#11243b] mb-2">Cognitive Capabilities</h3>
                                        <p className="text-sm text-slate-600 font-medium">Advanced features within the LUMI neural engine.</p>
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        {[
                                            { name: 'Predictive Maintenance Alerts', color: 'text-[#00a9ce]' },
                                            { name: 'Conversational Diagnostics', color: 'text-[#00a9ce]' },
                                            { name: 'Component Failure Probability', color: 'text-[#00a9ce]' },
                                            { name: 'Smart Repair Recommendations', color: 'text-[#00a9ce]' },
                                            { name: 'Multi-Model Logic Routing', color: 'text-[#76bc1d]' },
                                            { name: 'Automated Service Scheduling', color: 'text-[#76bc1d]' },
                                            { name: 'Real-time Fleet Sentiment', color: 'text-purple-500' },
                                            { name: 'Voice-to-Diagnostic Translation', color: 'text-orange-500' },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-sm group cursor-default">
                                                <Binary className={`w-5 h-5 shrink-0 ${item.color}`} />
                                                <span className={`font-bold text-sm text-slate-700`}>{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight text-[#11243b] mb-2">Target Integrations</h3>
                                        <p className="text-sm text-slate-600 font-medium">Platforms LUMI natively orchestrates and enhances.</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            'AutomotiveDataset API', 'Geotab Telematics', 'Samsara Fleet Management', 'Salesforce Automotive', 
                                            'Mitchell 1', 'ALLDATA', 'Tekmetric', 'Shopmonkey', 
                                            'Dealer Management Systems', 'OEM Connected Car APIs', 'ArkAuto E-Commerce', 'Fleetio'
                                        ].map((api, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                                                <span className="font-bold text-xs text-slate-700">{api}</span>
                                                <Workflow size={14} className="text-[#00a9ce]" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
