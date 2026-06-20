'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal, Workflow, Zap, Database, Blocks, Layers, Settings2, CloudCog, ShieldAlert } from 'lucide-react';
import Image from "next/image";
import { InnerPageHeader } from "@/components/inner-page-header";

export default function CustomClient() {
    return (
        <main className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-[#00a9ce]/20 selection:text-slate-900 pb-20">
            {/* 1. Header */}
            <InnerPageHeader title="Enterprise Automotive Platforms" subtitle="Delivering cutting-edge custom architecture and API integrations to empower your automotive business with scalable enterprise infrastructure." />

            {/* 2. Main Content Grid */}
            <section className="py-16 lg:py-24 px-6">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    
                    {/* Left: Info Sidebar */}
                    <div className="lg:col-span-4 space-y-16">
                        {/* The Challenge */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-black tracking-tight border-b-4 border-[#00a9ce] pb-4 inline-block text-[#11243b]">The Challenge</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Off-the-shelf software often fails to meet the highly specific demands of the automotive industry. Managing complex telemetry, huge vehicle databases, and legacy dealer management systems requires architecture built strictly for speed, reliability, and extreme scalability.
                            </p>
                        </div>

                        {/* Product Scope */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-black tracking-tight border-b-4 border-[#76bc1d] pb-4 inline-block text-[#11243b]">Our Solution</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                We specialize in delivering cutting-edge custom development services and API integrations that empower your automotive-focused business to thrive in the digital age. From cloud-native microservices to sophisticated B2B portals, we architect the backbone of modern mobility.
                            </p>
                        </div>

                        {/* CTA Group */}
                        <div className="space-y-3 sticky top-32">
                            <a href="/contact-us" className="inline-flex items-center justify-center gap-2 w-full bg-[#00a9ce] text-white font-bold py-4 rounded-xl hover:bg-[#008cb0] hover:-translate-y-1 transition-all shadow-[0_8px_20px_rgba(0,169,206,0.2)]">
                                Contact Architecture Team <ArrowRight size={18} />
                            </a>
                            <div className="grid grid-cols-2 gap-3 pt-4">
                                <button className="inline-flex items-center justify-center w-full bg-white text-[#11243b] border-2 border-slate-200 font-bold py-3 rounded-xl hover:border-[#00a9ce] hover:text-[#00a9ce] transition-all text-sm shadow-sm">
                                    Our Methodology
                                </button>
                                <button className="inline-flex items-center justify-center w-full bg-white text-[#11243b] border-2 border-slate-200 font-bold py-3 rounded-xl hover:border-[#76bc1d] hover:text-[#76bc1d] transition-all text-sm shadow-sm">
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
                            className="bg-white p-2 rounded-2xl border border-slate-200 shadow-xl"
                        >
                            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#001a22] flex flex-col justify-center p-6 md:p-12">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-[#76bc1d]" />
                                </div>
                                <pre className="text-[#00a9ce] font-mono text-sm sm:text-base md:text-lg leading-relaxed overflow-x-auto">
{`// Achtrex Custom Automotive Architecture
async function deployAutomotiveScale() {
  const infrastructure = await Achtrex.build({
    scale: 'enterprise',
    domain: 'automotive',
    reliability: '99.99%',
    latency: '< 50ms'
  });

  await infrastructure.integrate([
    'High-Frequency Telematics',
    'Legacy DMS Connections',
    'Predictive AI ML Models',
    'Global Edge CDN'
  ]);

  return { status: 'Thriving in Digital Age' };
}`}
                                </pre>
                            </div>
                        </motion.div>

                        {/* NEW SECTION: Scalable Cloud Architecture */}
                        <div className="space-y-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-black text-[#11243b] mb-4">Scalable Cloud Architecture</h2>
                                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                    We design and deploy cloud-native platforms capable of processing billions of data points. By leveraging serverless computing, Kubernetes clusters, and highly tuned time-series databases, we ensure your infrastructure scales dynamically with your traffic, absorbing massive spikes without breaking a sweat.
                                </p>
                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
                            >
                                <Image 
                                    src="/hero-bg-tech.png" 
                                    alt="Cloud Infrastructure Architecture"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                                    <CloudCog className="text-[#00a9ce] w-10 h-10 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-[#11243b]">Microservices</h4>
                                        <p className="text-slate-600 text-sm">Decoupled services for maximum resilience and rapid iteration cycles.</p>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                                    <ShieldAlert className="text-orange-500 w-10 h-10 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-[#11243b]">Enterprise Security</h4>
                                        <p className="text-slate-600 text-sm">End-to-end encryption, strict IAM roles, and automated threat detection.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* NEW SECTION: Integration Workflows */}
                        <div className="space-y-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-black text-[#11243b] mb-4">Complex Integration Workflows</h2>
                                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                    The automotive sector is plagued by fragmented legacy systems. We build robust middleware that acts as the universal translator, seamlessly connecting modern SaaS applications with antiquated Dealer Management Systems (DMS) and proprietary OEM data feeds.
                                </p>
                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
                            >
                                <Image 
                                    src="/enterprise_command_center.png" 
                                    alt="Enterprise Integration Command Center"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>


                        {/* Process Grid */}
                        <div className="pt-16 mt-16 border-t border-slate-200">
                            <h2 className="text-3xl font-black text-[#11243b] mb-12">Core Competencies</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00a9ce]/20 to-transparent flex items-center justify-center text-[#00a9ce]">
                                            <Workflow size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#11243b]">API Integrations</h3>
                                    </div>
                                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                        Seamlessly connect disparate automotive systems. We build robust middleware that unifies Dealer Management Systems, legacy databases, and modern SaaS endpoints.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#76bc1d]/20 to-transparent flex items-center justify-center text-[#76bc1d]">
                                            <Database size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#11243b]">Data Architecture</h3>
                                    </div>
                                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                        Design highly available, lightning-fast data pipelines capable of handling high-frequency vehicle telemetry and massive historical datasets.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-transparent flex items-center justify-center text-indigo-500">
                                            <Blocks size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#11243b]">Custom Portals</h3>
                                    </div>
                                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                        Develop bespoke dashboards, B2B portals, and consumer-facing applications that turn complex automotive data into stunning, user-friendly experiences.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center text-orange-500">
                                            <Settings2 size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#11243b]">System Audits</h3>
                                    </div>
                                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                        Comprehensive review of your existing automotive infrastructure to identify bottlenecks, security vulnerabilities, and opportunities for massive performance gains.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Ecosystem Preview */}
                        <div className="pt-16 mt-16 border-t border-slate-200">
                            <h2 className="text-3xl font-black text-[#11243b] mb-12">Technical Matrix</h2>
                            
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                                
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight text-[#11243b] mb-2">Technical Capabilities</h3>
                                        <p className="text-sm text-slate-600 font-medium">Technologies we utilize to build your infrastructure.</p>
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        {[
                                            { name: 'GraphQL & REST API Design', color: 'text-[#00a9ce]' },
                                            { name: 'High-Frequency Data Pipelines', color: 'text-[#00a9ce]' },
                                            { name: 'Serverless Infrastructure (AWS/GCP)', color: 'text-[#00a9ce]' },
                                            { name: 'PostgreSQL & Time-Series DBs', color: 'text-[#76bc1d]' },
                                            { name: 'React / Next.js / Tailwind Frontends', color: 'text-[#00a9ce]' },
                                            { name: 'Kubernetes Container Orchestration', color: 'text-purple-500' },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-sm group cursor-default">
                                                <Zap className={`w-5 h-5 shrink-0 ${item.color}`} />
                                                <span className={`font-bold text-sm text-slate-700`}>{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight text-[#11243b] mb-2">Automotive Expertise</h3>
                                        <p className="text-sm text-slate-600 font-medium">Domain-specific systems we seamlessly integrate.</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            'Dealer Management Systems', 'OEM Data Feeds', 'Telematics Providers', 'OBD2 Protocols', 'Insurance Quoting Engines', 'Parts Fitment Catalogs', 'Auction House Data', 'Warranty Systems'
                                        ].map((api, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                                                <span className="font-bold text-xs text-slate-700">{api}</span>
                                                <Layers size={14} className="text-[#00a9ce]" />
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
