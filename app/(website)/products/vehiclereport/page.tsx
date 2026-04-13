'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Search, ShieldCheck, BarChart3, Star, CheckCircle2, ArrowRight, Smartphone, Globe, Cloud, Layout, MousePointer2, Code2, AppWindow, Database, Info } from 'lucide-react';
import { Button } from '@/components/buttons';
import Image from "next/image";
import { CTASection } from "@/components/cta";

export default function VehicleReportPage() {
    return (
        <main className="min-h-screen bg-white text-black pt-24">
            {/* 1. Header with Title & Stats */}
            <div className="bg-[#f0f4f8] border-b border-gray-200 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
                    <div className="max-w-2xl">
                        <nav className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
                            Portfolio / Vehicle Report Check
                        </nav>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-4">
                            Vehicle Report Check
                        </h1>
                        <p className="text-lg text-gray-500 font-medium">
                            The international gold standard for cross-border vehicle data verification.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-8 lg:gap-16">
                        {[
                            { value: '200%', label: 'Growth in Verification' },
                            { value: '100%', label: 'Schema Translation' },
                            { value: '40+', label: 'Marketplaces' },
                            { value: '< 2m', label: 'Report Gen' },
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
                                Vehicle Report Check is a global data API designed to solve the problem of fragmented and unreliable cross-border vehicle records. However, they needed to directly and openly dedicate new complex API integrations to market their various reporting services so as to engage their professional audience and better achieve great business results.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold border-b-2 border-black pb-4 inline-block">Product Scope</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We collaborated with Vehicle Report Check to build a resilient data infrastructure, translating technical specs and insurance records from 40+ countries into a unified global reporting schema.
                            </p>
                            <ul className="grid grid-cols-1 gap-3">
                                {[
                                    'Universal data schema mapping',
                                    'Real-time auction data ingestion',
                                    'Multicloud storage architecture',
                                    'White-label reporting for dealers',
                                    'Mobile responsive API portal',
                                    'Automated fraud detection engine'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a 
                            href="https://vehiclereportcheck.com" 
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
                            className="bg-[#ebf0f5] p-12 rounded-3xl"
                        >
                            <div className="relative aspect-video w-full">
                                <Image 
                                    src="/projects/vehiclereport_full.jpg" 
                                    alt="Vehicle Report Check Dashboard"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 01</div>
                                <h3 className="text-2xl font-bold">Data Normalization</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Our core challenge was architecting a system that could aggregate and translate records from over 40 global markets into a single, reliable English-language data set.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 02</div>
                                <h3 className="text-2xl font-bold">Interface Design</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    We built an interactive, data-dense and pleasing to the eye design, taking into consideration the usability needed by complex data professionals.
                                </p>
                            </div>
                        </div>

                        {/* Mid Visual */}
                        <div className="bg-[#111] p-12 lg:p-20 rounded-3xl overflow-hidden relative text-white group">
                            <div className="absolute top-0 right-0 w-[50%] h-full bg-orange-500/10 blur-[100px] pointer-events-none" />
                            <div className="relative z-10 space-y-8">
                                <h3 className="text-4xl font-bold">Infrastructure Scale</h3>
                                <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                                    The platform is supported by an automated multicloud QA process before going live, giving professional customers the best final product for their high-stakes transactions.
                                </p>
                                <div className="flex gap-4">
                                    <div className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">Azure Logic Apps</div>
                                    <div className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">AWS Lambda Sync</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 03</div>
                                <h3 className="text-2xl font-bold">API Integration</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    We developed the graphical user interface of Detailed Vehicle History using different coding languages to ensure high performance and zero-latency lookups.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="text-black font-black text-xs uppercase tracking-[0.3em] mb-4">Phase 04</div>
                                <h3 className="text-2xl font-bold">Project Success</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    The result is a platform that serves as a single source of truth for global salvage, auction, and ownership history, ensuring absolute transaction security.
                                </p>
                            </div>
                        </div>

                        {/* Final Visual */}
                        <div className="bg-[#f0f2f5] p-12 rounded-3xl group">
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900 border border-black/5">
                                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10" />
                                <Image 
                                    src="/projects/vehicle-databases.png" 
                                    alt="Global Registry View"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[4s]"
                                />
                            </div>
                            <div className="mt-8 text-center uppercase tracking-[0.4em] font-black text-xs text-gray-400 opacity-50 italic">Professional Data Registry Environment</div>
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
