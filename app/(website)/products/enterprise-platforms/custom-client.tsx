'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal, Workflow, Zap, Database, Blocks, Layers, Settings2 } from 'lucide-react';
import Image from "next/image";

export default function CustomClient() {
    return (
        <main className="min-h-screen bg-[#070b14] text-white selection:bg-[#489EE6] selection:text-white pt-24 pb-20">
            {/* 1. Header */}
            <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e6f3ff]/30 border-b border-[#489EE6]/10 py-16 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <nav className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#489EE6]/60 mb-6 flex items-center gap-2">
                        <span>Portfolio</span>
                        <span className="text-[#489EE6]/30">/</span>
                        <span className="text-[#489EE6]">Enterprise Automotive Platforms</span>
                    </nav>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#489EE6] to-[#174395] flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
                            <Code2 size={40} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#489EE6] via-[#174395] to-[#861F80] mb-2">
                                Enterprise Automotive Platforms
                            </h1>
                            <p className="text-xl text-gray-500 font-bold max-w-3xl">Delivering cutting-edge custom architecture and API integrations to empower your automotive business.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Main Content Grid */}
            <section className="py-24 px-6">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    
                    {/* Left: Info Sidebar */}
                    <div className="lg:col-span-4 space-y-16">
                        {/* The Challenge */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#174395] pb-4 inline-block text-[#489EE6]">The Challenge</h2>
                            <p className="text-gray-400 leading-relaxed font-medium">
                                Off-the-shelf software often fails to meet the highly specific demands of the automotive industry. Managing complex telemetry, huge vehicle databases, and legacy dealer management systems requires architecture built strictly for speed, reliability, and extreme scalability.
                            </p>
                        </div>

                        {/* Product Scope */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#861F80] pb-4 inline-block text-[#489EE6]">Our Solution</h2>
                            <p className="text-gray-400 leading-relaxed font-medium">
                                We specialize in delivering cutting-edge custom development services and API integration's that empower your automotive-focused business to thrive in the digital age. Your success in the automotive sector is our success, and we're excited to be your trusted technology partner on this automotive journey.
                            </p>
                        </div>

                        {/* CTA Group */}
                        <div className="space-y-3">
                            <a href="/contact-us" className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#489EE6] via-[#174395] to-[#861F80] text-white font-bold py-4 rounded-lg hover:opacity-90 transition-all shadow-lg shadow-blue-500/20">
                                Contact Today <ArrowRight size={18} />
                            </a>
                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <button className="inline-flex items-center justify-center w-full bg-[#111112] text-[#c2fce3] border border-white/10 font-semibold py-3 rounded-lg hover:bg-[#070b14] hover:border-[#c2fce3] hover:shadow-sm transition-all text-sm">
                                    Our Methodology
                                </button>
                                <button className="inline-flex items-center justify-center w-full bg-[#111112] text-[#c2fce3] border border-white/10 font-semibold py-3 rounded-lg hover:bg-[#070b14] hover:border-[#c2fce3] hover:shadow-sm transition-all text-sm">
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
                            className="bg-gradient-to-br from-[#489EE6] via-[#174395] to-[#861F80] p-1 md:p-2 rounded-3xl shadow-2xl"
                        >
                            <div className="relative aspect-[16/10] w-full rounded-[1.3rem] overflow-hidden bg-[#111112] flex items-center justify-center p-8">
                                <div className="text-left w-full space-y-4">
                                    <div className="flex items-center gap-2 mb-8">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <pre className="text-[#489EE6] font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
{`// Achtrex Custom Automotive Architecture
async function deployAutomotiveScale() {
  const infrastructure = await Achtrex.build({
    scale: 'enterprise',
    domain: 'automotive',
    reliability: '99.99%'
  });

  await infrastructure.integrate([
    'Telematics Streams',
    'DMS Connections',
    'Predictive AI Models'
  ]);

  return { status: 'Thriving in Digital Age' };
}`}
                                    </pre>
                                </div>
                            </div>
                        </motion.div>

                        {/* Process Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#489EE6]">
                                        <Workflow size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">API Integrations</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed font-medium">
                                    Seamlessly connect disparate automotive systems. We build robust middleware that unifies Dealer Management Systems, legacy databases, and modern SaaS endpoints.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-[#c2fce3]">
                                        <Database size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">Data Architecture</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed font-medium">
                                    Design highly available, lightning-fast data pipelines capable of handling high-frequency vehicle telemetry and massive historical datasets.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-[#c2fce3]">
                                        <Blocks size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">Custom Portals</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed font-medium">
                                    Develop bespoke dashboards, B2B portals, and consumer-facing applications that turn complex automotive data into stunning, user-friendly experiences.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-[#F2147A]">
                                        <Settings2 size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">Endless Possibilities</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed font-medium">
                                    Contact us today to discuss your automotive project. Let's explore the endless possibilities together to ensure your success in the automotive sector.
                                </p>
                            </div>

                        </div>

                        {/* Ecosystem Preview */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 pt-16 mt-16 border-t border-white/10">
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-[#c2fce3] mb-2">Technical Capabilities</h3>
                                    <p className="text-sm text-gray-400 font-medium">Technologies we utilize to build your infrastructure.</p>
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        { name: 'GraphQL & REST API Design', color: 'text-[#489EE6]' },
                                        { name: 'High-Frequency Data Pipelines', color: 'text-[#c2fce3]' },
                                        { name: 'Serverless Infrastructure', color: 'text-[#c2fce3]' },
                                        { name: 'PostgreSQL & Time-Series DBs', color: 'text-[#F2147A]' },
                                        { name: 'React / Next.js Frontends', color: 'text-[#489EE6]' },
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
                                    <h3 className="text-2xl font-bold tracking-tight text-[#c2fce3] mb-2">Automotive Expertise</h3>
                                    <p className="text-sm text-gray-400 font-medium">Domain-specific systems we seamlessly integrate.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {[
                                        'Dealer Management Systems', 'OEM Data Feeds', 'Telematics Providers', 'OBD2 Protocols', 'Insurance Quoting Engines', 'Parts Fitment Catalogs'
                                    ].map((api, i) => (
                                        <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg border border-white/10 bg-[#070b14]">
                                            <span className="font-semibold text-xs text-gray-700">{api}</span>
                                            <Layers size={12} className="text-gray-300" />
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
