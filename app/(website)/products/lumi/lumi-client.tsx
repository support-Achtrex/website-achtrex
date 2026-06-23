'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Search, Layout, ShieldCheck, MessageSquare, Workflow, Zap, Car, BrainCircuit } from 'lucide-react';
import Image from "next/image";
import { InnerPageHeader } from "@/components/inner-page-header";

export default function LumiClient() {
 return (
 <main className="min-h-screen bg-[#f4f4f4] text-slate-900 selection:bg-[#00a9ce]/20 selection:text-slate-900 pb-20">
 {/* 1. Header */}
 <InnerPageHeader title="LUMI AI Platform" subtitle="The cognitive automotive platform delivering AI-driven vehicle intelligence, predictive analytics, and conversational diagnostics." />

 {/* 2. Main Content Grid */}
 <section className="py-12 lg:py-16 px-6">
 <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
 
 {/* Left: Info Sidebar */}
 <div className="lg:col-span-4 space-y-16">
 {/* The Challenge */}
 <div className="space-y-6">
 <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#00a9ce] pb-4 inline-block text-slate-900">The Challenge</h2>
 <p className="text-lg text-slate-600 leading-relaxed font-medium">
 LUMI is being engineered to bridge the gap between static vehicle data and actionable intelligence. Traditional automotive analytics lack true contextual understanding, leading to reactive maintenance and frustrating diagnostic workflows. The challenge is to architect an autonomous reasoning engine that understands the complex language of mobility.
 </p>
 </div>

 {/* Product Scope */}
 <div className="space-y-6">
 <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#76bc1d] pb-4 inline-block text-slate-900">Product Scope</h2>
 <p className="text-lg text-slate-600 leading-relaxed font-medium">
 We are developing a unified intelligent layer utilizing state-of-the-art cognitive capabilities and proprietary LLM architectures. The platform features conversational vehicle analytics, predictive maintenance alerts, intelligent repair recommendations, and real-time automotive reasoning tailored for enterprise fleets.
 </p>
 </div>

 {/* CTA Group */}
 <div className="space-y-3">
 <a href="https://lumi.achtrex.com" className="inline-flex items-center justify-center gap-2 w-full bg-[#00a9ce] text-white font-bold py-4 rounded-none hover:opacity-90 transition-all shadow-none">
 Launch LUMI <ArrowRight size={18} />
 </a>
 <div className="grid grid-cols-2 gap-3 pt-2">
 <button className="inline-flex items-center justify-center w-full bg-white text-[#001a22] border border-slate-200 font-semibold py-3 rounded-full hover:bg-slate-50 hover:border-[#00a9ce] transition-all text-sm">
 Platform Architecture
 </button>
 <button className="inline-flex items-center justify-center w-full bg-white text-[#001a22] border border-slate-200 font-semibold py-3 rounded-full hover:bg-slate-50 hover:border-[#00a9ce] transition-all text-sm">
 AI Model Docs
 </button>
 <button className="inline-flex items-center justify-center w-full bg-white text-[#76bc1d] border border-slate-200 font-semibold py-3 rounded-full hover:bg-slate-50 hover:border-[#76bc1d] transition-all text-sm">
 Developer Beta
 </button>
 <button className="inline-flex items-center justify-center w-full bg-white text-[#00a9ce] border border-slate-200 font-semibold py-3 rounded-full hover:bg-slate-50 hover:border-[#00a9ce] transition-all text-sm">
 Contact Sales
 </button>
 </div>
 </div>
 </div>

 {/* Right: Process & Execution */}
 <div className="lg:col-span-8 space-y-24">
 
 {/* Big Hero Visual / Interactive Demo */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="group relative bg-[#000] rounded-xl border border-slate-800 shadow-2xl overflow-hidden cursor-pointer"
 >
 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
 <div className="relative aspect-[16/10] w-full">
 <Image 
 src="/projects/lumi_ui_v2.jpg" 
 alt="LUMI AI Vehicle Intelligence Platform Demo"
 fill
 className="object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-700"
 />
 </div>
 
 {/* Play Button Overlay */}
 <div className="absolute inset-0 z-20 flex items-center justify-center">
   <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-[#00a9ce]/90 text-white shadow-[0_0_40px_rgba(0,169,206,0.5)] group-hover:bg-[#00a9ce] group-hover:scale-110 transition-all duration-300">
     <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
     <svg className="w-8 h-8 md:w-10 md:h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
       <path d="M8 5v14l11-7z" />
     </svg>
   </div>
 </div>

 {/* Lower third metadata */}
 <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8 flex items-end justify-between">
   <div>
     <div className="flex items-center gap-2 mb-2">
       <span className="bg-[#00a9ce] text-white text-xs font-bold px-2 py-1 uppercase tracking-wider rounded-sm">Demo</span>
       <span className="text-white/80 text-sm font-medium">3:42</span>
     </div>
     <h3 className="text-white text-xl md:text-2xl font-bold">LUMI Engine: Autonomous Diagnostic Workflow</h3>
   </div>
 </div>
 </motion.div>

 {/* Process Grid (Roadmap) */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
 
 {/* Reasoning Core */}
 <div className="space-y-6">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-none bg-[#00a9ce]/10 flex items-center justify-center text-[#00a9ce]">
 <BrainCircuit size={20} />
 </div>
 <h3 className="text-2xl font-bold tracking-tight">Phase 01: Engine Core</h3>
 </div>
 <ul className="space-y-3">
 {['Developing predictive vehicle logic models', 'Integrating state-of-the-art LLM endpoints', 'Building automotive natural language processors', 'Structuring high-speed diagnostic paths'].map((item, i) => (
 <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
 <div className="w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0" />
 {item}
 </li>
 ))}
 </ul>
 </div>

 {/* Integrations */}
 <div className="space-y-6">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-none bg-[#76bc1d]/10 flex items-center justify-center text-[#76bc1d]">
 <MessageSquare size={20} />
 </div>
 <h3 className="text-2xl font-bold tracking-tight">Phase 02: Conversational Analytics</h3>
 </div>
 <p className="text-lg text-slate-600 leading-relaxed font-medium">
 Mapping complex OBD2 telemetry and historical repair data into intuitive, natural language dialogues, allowing users to literally "chat" with their vehicles.
 </p>
 </div>

 {/* UI Design */}
 <div className="space-y-6">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-none bg-[#001a22]/10 flex items-center justify-center text-[#001a22]">
 <Car size={20} />
 </div>
 <h3 className="text-2xl font-bold tracking-tight">Phase 03: Intelligent Recommendations</h3>
 </div>
 <p className="text-lg text-slate-600 leading-relaxed font-medium">
 Designing the diagnostic reasoning node editor. Focused on translating mechanical symptoms into actionable, step-by-step repair guides and parts lists.
 </p>
 </div>

 {/* Testing */}
 <div className="space-y-6">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-none bg-[#00a9ce]/10 flex items-center justify-center text-[#00a9ce]">
 <ShieldCheck size={20} />
 </div>
 <h3 className="text-2xl font-bold tracking-tight">Phase 04: Alpha Testing</h3>
 </div>
 <p className="text-lg text-slate-600 leading-relaxed font-medium">
 Conducting fleet-wide audits and stress tests. LUMI is currently analyzing millions of historical service records to refine its automotive reasoning accuracy.
 </p>
 </div>

 </div>

 {/* Gallery / UI Showcase */}
 <div className="mt-16 pt-16 border-t border-slate-200">
 <div className="flex items-center gap-3 mb-8">
 <div className="w-10 h-10 rounded-none bg-[#00a9ce]/10 flex items-center justify-center text-[#00a9ce]">
 <Layout size={20} />
 </div>
 <h3 className="text-2xl font-bold tracking-tight">Real-World Interfaces</h3>
 </div>
 <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10 max-w-3xl">
 LUMI provides a highly visual, cognitive interface that translates complex vehicle telemetry and reasoning nodes into intuitive diagnostic views.
 </p>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-white">
 <Image src="/projects/lumi-real-screenshot-1.png" alt="LUMI Interface Concept" fill className="object-cover hover:scale-105 transition-transform duration-700" />
 </div>
 <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-white">
 <Image src="/projects/lumi-real-screenshot-2.png" alt="LUMI Account Login" fill className="object-cover hover:scale-105 transition-transform duration-700" />
 </div>
 <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-white md:col-span-2">
 <Image src="/projects/lumi-real-screenshot-3.png" alt="LUMI Diagnostic Wireframe" fill className="object-cover hover:scale-105 transition-transform duration-700" />
 </div>
 </div>
 </div>

 {/* Ecosystem Preview */}
 <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 pt-16 mt-16 border-t border-slate-200">
 
 <div className="space-y-6">
 <div>
 <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Cognitive Capabilities</h3>
 <p className="text-sm text-slate-600 font-medium">Upcoming features within the LUMI core engine.</p>
 </div>
 <div className="grid grid-cols-1 gap-3">
 {[
 { name: 'Predictive Maintenance Alerts', color: 'text-[#00a9ce]' },
 { name: 'Conversational Diagnostics', color: 'text-[#00a9ce]' },
 { name: 'Component Failure Probability', color: 'text-[#00a9ce]' },
 { name: 'Smart Repair Recommendations', color: 'text-[#00a9ce]' },
 { name: 'Multi-Model Logic Routing', color: 'text-[#76bc1d]' },
 { name: 'Automated Service Scheduling', color: 'text-[#76bc1d]' },
 { name: 'Real-time Fleet Sentiment', color: 'text-[#001a22]' },
 { name: 'Voice-to-Diagnostic Translation', color: 'text-[#001a22]' },
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-3 p-3 rounded-none border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all group cursor-default">
 <Zap className={`w-4 h-4 shrink-0 ${item.color}`} />
 <span className={`font-bold text-sm text-slate-700`}>{item.name}</span>
 </div>
 ))}
 </div>
 </div>

 <div className="space-y-6">
 <div>
 <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Target Integrations</h3>
 <p className="text-sm text-slate-600 font-medium">Platforms LUMI will natively orchestrate at launch.</p>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
 {[
 'AutomotiveDataset API', 'Geotab Telematics', 'Samsara Fleet Management', 'Salesforce Automotive', 
 'Mitchell 1', 'ALLDATA', 'Tekmetric', 'Shopmonkey', 
 'Dealer Management Systems (DMS)', 'OEM Connected Car APIs', 'ArkAuto E-Commerce', 'Fleetio'
 ].map((api, i) => (
 <div key={i} className="flex items-center justify-between px-3 py-2 rounded-none border border-slate-200 bg-white">
 <span className="font-semibold text-xs text-gray-700">{api}</span>
 <Workflow size={12} className="text-[#00a9ce]" />
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
