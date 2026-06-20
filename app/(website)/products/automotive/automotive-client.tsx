'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, PenTool, Layout, Smartphone, TestTube2, Database, Zap, Activity, Server, FileJson } from 'lucide-react';
import Image from "next/image";
import { InnerPageHeader } from "@/components/inner-page-header";

export default function AutomotiveClient() {
    return (
        <main className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-[#00a9ce]/20 selection:text-slate-900 pb-20">
            {/* 1. Header */}
            <InnerPageHeader title="Automotive Dataset" subtitle="The backbone of mobility intelligence. Access 2.5M+ vehicle records, VIN-to-Build-Sheet mapping, real-time specs, auctions, vehicle images, history reports, repair & maintenance data, and more through our high-availability API engine." />

            {/* 2. Main Content Grid */}
            <section className="py-16 lg:py-24 px-6">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
                    
                    {/* Left: Info Sidebar */}
                    <div className="lg:col-span-4 space-y-16">
                        {/* The Challenge */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-black tracking-tight border-b-4 border-[#00a9ce] pb-4 inline-block text-[#11243b]">The Challenge</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Automotive Dataset is an enterprise-grade vehicle data platform built to be the cutting-edge for mobility web services worldwide. To achieve this, we needed to directly engineer new interactive dashboards, deep technical documentation, and robust infrastructure to market their vast array of API services, engaging our developer audience to drive business growth.
                            </p>
                        </div>

                        {/* Product Scope */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-black tracking-tight border-b-4 border-[#76bc1d] pb-4 inline-block text-[#11243b]">Product Scope</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                We built Automotive Dataset from the ground up, architecting a low-latency infrastructure for a massive vehicle data ecosystem. We developed comprehensive API endpoints and databases for every facet of vehicle intelligence, handling everything from VIN decoding to market valuations with uncompromising reliability.
                            </p>
                        </div>

                        {/* CTA Group */}
                        <div className="space-y-3 sticky top-32">
                            <a 
                                href="https://automotivedataset.com" 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full bg-[#00a9ce] text-white font-bold py-4 rounded-xl hover:bg-[#008cb0] hover:-translate-y-1 transition-all shadow-[0_8px_20px_rgba(0,169,206,0.2)]"
                            >
                                Visit AutomotiveDataset.com <ArrowRight size={18} />
                            </a>
                            <div className="grid grid-cols-2 gap-3 pt-4">
                                <a href="https://automotivedataset.com/pricing" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full bg-white text-[#11243b] border-2 border-slate-200 font-bold py-3 rounded-xl hover:border-[#00a9ce] hover:text-[#00a9ce] transition-all text-sm shadow-sm">
                                    View Pricing
                                </a>
                                <a href="https://automotivedataset.com/documentation" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full bg-white text-[#11243b] border-2 border-slate-200 font-bold py-3 rounded-xl hover:border-[#00a9ce] hover:text-[#00a9ce] transition-all text-sm shadow-sm">
                                    Read Docs
                                </a>
                                <a href="https://automotivedataset.com/developers" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full bg-white text-[#11243b] border-2 border-slate-200 font-bold py-3 rounded-xl hover:border-[#76bc1d] hover:text-[#76bc1d] transition-all text-sm shadow-sm">
                                    Developer Portal
                                </a>
                                <a href="https://automotivedataset.com/demo" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full bg-white text-[#11243b] border-2 border-slate-200 font-bold py-3 rounded-xl hover:border-[#00a9ce] hover:text-[#00a9ce] transition-all text-sm shadow-sm">
                                    Request Demo
                                </a>
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
                                    src="/projects/automotive_hero_new.png" 
                                    alt="Automotive API Interface"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </motion.div>

                        {/* NEW SECTION: Data Delivery Pipeline */}
                        <div className="space-y-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-black text-[#11243b] mb-4">High-Velocity Data Pipeline</h2>
                                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                    Delivering vehicle intelligence at a massive scale requires a fault-tolerant architecture. We engineered a globally distributed data pipeline that processes millions of queries daily, integrating seamlessly with OEM feeds, auction houses, and historical repositories to deliver unified JSON responses in under 50 milliseconds.
                                </p>
                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
                            >
                                <Image 
                                    src="/server_infrastructure.png" 
                                    alt="Server Infrastructure Architecture"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <Server className="text-[#00a9ce] mb-4 w-8 h-8" />
                                    <h4 className="font-bold text-lg mb-2 text-[#11243b]">Global Edge CDN</h4>
                                    <p className="text-slate-600 text-sm">Deployed across 35 edge locations worldwide to ensure ultra-low latency for API consumers globally.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <Activity className="text-[#76bc1d] mb-4 w-8 h-8" />
                                    <h4 className="font-bold text-lg mb-2 text-[#11243b]">99.99% Uptime</h4>
                                    <p className="text-slate-600 text-sm">Engineered with multi-region redundancy and automatic failover clustering for true enterprise reliability.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <FileJson className="text-orange-500 mb-4 w-8 h-8" />
                                    <h4 className="font-bold text-lg mb-2 text-[#11243b]">RESTful & GraphQL</h4>
                                    <p className="text-slate-600 text-sm">Flexible data querying with standardized responses designed specifically for seamless developer integration.</p>
                                </div>
                            </div>
                        </div>

                        {/* NEW SECTION: Interactive Dashboard */}
                        <div className="space-y-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-black text-[#11243b] mb-4">Enterprise Developer Dashboard</h2>
                                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                    APIs are only as good as the tools used to manage them. We developed a comprehensive B2B dashboard enabling enterprise clients to monitor real-time API usage, track latency metrics, manage multiple integration keys, and handle high-volume billing effortlessly.
                                </p>
                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
                            >
                                <Image 
                                    src="/projects/automotive_dashboard.png" 
                                    alt="Automotive Developer Dashboard"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>


                        {/* Process Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                            <h2 className="md:col-span-2 text-3xl font-black text-[#11243b] border-b border-slate-200 pb-4">Our Development Process</h2>
                            
                            {/* UX Flow */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00a9ce]/20 to-transparent flex items-center justify-center text-[#00a9ce]">
                                        <Search size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#11243b]">UX Flow</h3>
                                </div>
                                <ul className="space-y-3">
                                    {['Research & Technical Discovery', 'Building architecture of the web platform', 'Interface design for data tables', 'Usability testing with developers'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-[#00a9ce] shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* LoFi Design */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#76bc1d]/20 to-transparent flex items-center justify-center text-[#76bc1d]">
                                        <PenTool size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#11243b]">LoFi Design</h3>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    We built a structural prototype that was easy to translate to high-level design concepts, forming tangible and testable artifacts for layout and data hierarchy.
                                </p>
                            </div>

                            {/* HiFi Design */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center text-orange-500">
                                        <Layout size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#11243b]">HiFi Design</h3>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Based on the prototype, we built an interactive and pleasing-to-the-eye design, taking into consideration the extreme usability required for reading complex JSON data.
                                </p>
                            </div>

                            {/* QA Process */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-transparent flex items-center justify-center text-indigo-500">
                                        <TestTube2 size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#11243b]">QA Process</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-medium max-w-2xl text-lg">
                                    Before going live, we did rigorous quality assurance testing and review to give our customers the best final product, ensuring API response times stayed under 500ms across thousands of queries.
                                </p>
                            </div>

                        </div>

                        {/* Data & API Ecosystem - Expanded */}
                        <div className="pt-16 mt-16 border-t border-slate-200">
                            <h2 className="text-3xl font-black text-[#11243b] mb-12">The Data Ecosystem</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:border-[#00a9ce] transition-colors">
                                    <Database className="w-10 h-10 text-[#00a9ce] mb-6" />
                                    <h3 className="text-2xl font-bold text-[#11243b] mb-4">Market Valuations</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        Real-time retail, trade-in, and private party valuations driven by advanced ML models that ingest millions of active automotive listings, historical auction results, and depreciation curves.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:border-[#76bc1d] transition-colors">
                                    <Zap className="w-10 h-10 text-[#76bc1d] mb-6" />
                                    <h3 className="text-2xl font-bold text-[#11243b] mb-4">EV Specifications API</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        A specialized database for the modern fleet. Retrieve precise battery capacities, charging speeds, estimated real-world ranges, and electric motor configurations for any EV instantly.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:border-orange-500 transition-colors">
                                    <FileJson className="w-10 h-10 text-orange-500 mb-6" />
                                    <h3 className="text-2xl font-bold text-[#11243b] mb-4">Premium VIN Decoding</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        Beyond basic Year/Make/Model. Our premium decoder unpacks exact trim levels, standard and optional equipment packages, original MSRP, and deep mechanical specifications from a 17-digit VIN.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:border-indigo-500 transition-colors">
                                    <Activity className="w-10 h-10 text-indigo-500 mb-6" />
                                    <h3 className="text-2xl font-bold text-[#11243b] mb-4">History & Maintenance</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        Access comprehensive vehicle lifecycles, including reported accidents, title branding, open safety recalls, and OEM-recommended maintenance schedules organized by mileage intervals.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
