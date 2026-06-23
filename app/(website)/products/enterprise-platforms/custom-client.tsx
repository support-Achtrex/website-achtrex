'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal, Workflow, Zap, Database, Blocks, Layers, Settings2 } from 'lucide-react';
import Image from "next/image";
import { InnerPageHeader } from "@/components/inner-page-header";

export default function CustomClient() {
 return (
 <main className="min-h-screen bg-[#f4f4f4] text-slate-900 selection:bg-[#00a9ce]/20 selection:text-slate-900 pb-20">
 {/* 1. Header */}
 <InnerPageHeader title="Enterprise Automotive Platforms" subtitle="Delivering cutting-edge custom architecture and API integrations to empower your automotive business with scalable enterprise infrastructure." />

 {/* 2. Main Content Grid */}
 <section className="py-24 px-6">
 <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
 
 {/* Left: Info Sidebar */}
 <div className="lg:col-span-4 space-y-16">
 {/* The Challenge */}
 <div className="space-y-6">
 <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#00a9ce] pb-4 inline-block text-slate-900">The Challenge</h2>
 <p className="text-slate-500 leading-relaxed font-medium">
 Off-the-shelf software often fails to meet the highly specific demands of the automotive industry. Managing complex telemetry, huge vehicle databases, and legacy dealer management systems requires architecture built strictly for speed, reliability, and extreme scalability.
 </p>
 </div>

 {/* Product Scope */}
 <div className="space-y-6">
 <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#76bc1d] pb-4 inline-block text-slate-900">Our Solution</h2>
 <p className="text-slate-500 leading-relaxed font-medium">
 We specialize in delivering cutting-edge custom development services and API integration's that empower your automotive-focused business to thrive in the digital age. Your success in the automotive sector is our success, and we're excited to be your trusted technology partner on this automotive journey.
 </p>
 </div>

 {/* CTA Group */}
 <div className="space-y-3">
 <a href="/contact-us" className="inline-flex items-center justify-center gap-2 w-full bg-[#00a9ce] text-white font-bold py-4 rounded-none hover:opacity-90 transition-all shadow-none">
 Contact Today <ArrowRight size={18} />
 </a>
 <div className="grid grid-cols-2 gap-3 pt-2">
 <button className="inline-flex items-center justify-center w-full bg-white text-[#001a22] border border-slate-200 font-semibold py-3 rounded-full hover:bg-slate-50 hover:border-[#00a9ce] transition-all text-sm">
 Our Methodology
 </button>
 <button className="inline-flex items-center justify-center w-full bg-white text-[#001a22] border border-slate-200 font-semibold py-3 rounded-full hover:bg-slate-50 hover:border-[#00a9ce] transition-all text-sm">
 Case Studies
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
 className="bg-[#081622] rounded-none border border-[#00a9ce]/20 shadow-none overflow-hidden"
 >
 <div className="relative aspect-[16/10] w-full bg-[#001a22]">
 <Image 
 src="/images/real_server_room_1775935470750.png" 
 alt="Enterprise Architecture"
 fill
 className="object-cover object-center"
 />
 </div>
 </motion.div>

 {/* Process Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
 
 <div className="space-y-6">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-none bg-[#00a9ce]/10 flex items-center justify-center text-[#00a9ce]">
 <Workflow size={20} />
 </div>
 <h3 className="text-2xl font-bold tracking-tight">API Integrations</h3>
 </div>
 <p className="text-slate-500 leading-relaxed font-medium">
 Seamlessly connect disparate automotive systems. We build robust middleware that unifies Dealer Management Systems, legacy databases, and modern SaaS endpoints.
 </p>
 </div>

 <div className="space-y-6">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-none bg-[#76bc1d]/10 flex items-center justify-center text-[#76bc1d]">
 <Database size={20} />
 </div>
 <h3 className="text-2xl font-bold tracking-tight">Data Architecture</h3>
 </div>
 <p className="text-slate-500 leading-relaxed font-medium">
 Design highly available, lightning-fast data pipelines capable of handling high-frequency vehicle telemetry and massive historical datasets.
 </p>
 </div>

 <div className="space-y-6">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-none bg-[#001a22]/10 flex items-center justify-center text-[#001a22]">
 <Blocks size={20} />
 </div>
 <h3 className="text-2xl font-bold tracking-tight">Custom Portals</h3>
 </div>
 <p className="text-slate-500 leading-relaxed font-medium">
 Develop bespoke dashboards, B2B portals, and consumer-facing applications that turn complex automotive data into stunning, user-friendly experiences.
 </p>
 </div>

 <div className="space-y-6">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-none bg-[#00a9ce]/10 flex items-center justify-center text-[#00a9ce]">
 <Settings2 size={20} />
 </div>
 <h3 className="text-2xl font-bold tracking-tight">Endless Possibilities</h3>
 </div>
 <p className="text-slate-500 leading-relaxed font-medium">
 Contact us today to discuss your automotive project. Let's explore the endless possibilities together to ensure your success in the automotive sector.
 </p>
 </div>

 </div>

 {/* Infrastructure Showcase / Gallery */}
 <div className="mt-16 pt-16 border-t border-slate-200">
 <div className="flex items-center gap-3 mb-8">
 <div className="w-10 h-10 rounded-none bg-[#081622] flex items-center justify-center text-white">
 <Terminal size={20} />
 </div>
 <h3 className="text-2xl font-bold tracking-tight text-slate-900">Global Infrastructure</h3>
 </div>
 <p className="text-slate-600 mb-8 max-w-2xl font-medium">
 Our core systems are deployed across global data centers, providing the ultra-low latency and 99.999% uptime required by modern automotive platforms.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-white">
 <Image src="/images/bright_office_hero.jpg" alt="Our Team Environment" fill className="object-cover hover:scale-105 transition-transform duration-700" />
 </div>
 <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-white">
 <Image src="/images/real_dev_team.jpg" alt="Dedicated Development Teams" fill className="object-cover hover:scale-105 transition-transform duration-700" />
 </div>
 <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-white md:col-span-2">
 <Image src="/images/corporate_team_1.png" alt="Collaborative Innovation" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
 </div>
 </div>
 </div>

 {/* Ecosystem Preview */}
 <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 pt-16 mt-16 border-t border-slate-200">
 
 <div className="space-y-6">
 <div>
 <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Technical Capabilities</h3>
 <p className="text-sm text-slate-500 font-medium">Technologies we utilize to build your infrastructure.</p>
 </div>
 <div className="grid grid-cols-1 gap-3">
 {[
 { name: 'GraphQL & REST API Design', color: 'text-[#00a9ce]' },
 { name: 'High-Frequency Data Pipelines', color: 'text-[#00a9ce]' },
 { name: 'Serverless Infrastructure', color: 'text-[#00a9ce]' },
 { name: 'PostgreSQL & Time-Series DBs', color: 'text-[#76bc1d]' },
 { name: 'React / Next.js Frontends', color: 'text-[#00a9ce]' },
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
 <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Automotive Expertise</h3>
 <p className="text-sm text-slate-500 font-medium">Domain-specific systems we seamlessly integrate.</p>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
 {[
 'Dealer Management Systems', 'OEM Data Feeds', 'Telematics Providers', 'OBD2 Protocols', 'Insurance Quoting Engines', 'Parts Fitment Catalogs'
 ].map((api, i) => (
 <div key={i} className="flex items-center justify-between px-3 py-2 rounded-none border border-slate-200 bg-white">
 <span className="font-semibold text-xs text-gray-700">{api}</span>
 <Layers size={12} className="text-[#00a9ce]" />
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
