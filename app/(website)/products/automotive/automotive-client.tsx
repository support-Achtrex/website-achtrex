'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Layout, Smartphone, PenTool, Database, Search, Target, TestTube2, Globe } from 'lucide-react';
import Image from "next/image";
import { InnerPageHeader } from "@/components/inner-page-header";

export default function AutomotiveClient() {
    return (
        <main className="min-h-screen bg-[#f4f4f4] text-slate-900 selection:bg-[#00a9ce]/20 selection:text-slate-900 pb-20">
            {/* 1. Header */}
            <InnerPageHeader title="Automotive Dataset" subtitle="The backbone of mobility intelligence. Access 2.5M+ vehicle records, VIN-to-Build-Sheet mapping, real-time specs, auctions, vehicle images, history reports, repair & maintenance data, and more through our high-availability API engine." />

            {/* 2. Main Content Grid */}
            <section className="py-12 lg:py-24 px-6">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
                    
                    {/* Left: Info Sidebar */}
                    <div className="lg:col-span-4 space-y-16">
                        {/* The Challenge */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#00a9ce] pb-4 inline-block text-slate-900">The Challenge</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Automotive Dataset is an enterprise-grade vehicle data platform built to be the cutting-edge for mobility web services worldwide. To achieve this, we needed to directly engineer new interactive dashboards, deep technical documentation, and robust infrastructure to market their vast array of API services, engaging our developer audience to drive business growth.
                            </p>
                        </div>

                        {/* Product Scope */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#76bc1d] pb-4 inline-block text-slate-900">Product Scope</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                We built Automotive Dataset from the ground up, architecting a low-latency infrastructure for a massive vehicle data ecosystem. We developed comprehensive API endpoints and databases for every facet of vehicle intelligence, handling everything from VIN decoding to market valuations.
                            </p>
                        </div>

                        {/* CTA Group */}
                        <div className="space-y-3">
                            <a 
                                href="https://automotivedataset.com" 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full bg-[#00a9ce] text-white font-bold py-4 rounded-none hover:opacity-90 transition-all shadow-none"
                            >
                                Visit AutomotiveDataset.com <ArrowRight size={18} />
                            </a>
                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <a href="https://automotivedataset.com/pricing" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full bg-white text-[#001a22] border border-slate-200 font-semibold py-3 rounded-none hover:bg-slate-50 hover:border-[#00a9ce] transition-all text-sm">
                                    View Pricing
                                </a>
                                <a href="https://automotivedataset.com/documentation" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full bg-white text-[#001a22] border border-slate-200 font-semibold py-3 rounded-none hover:bg-slate-50 hover:border-[#00a9ce] transition-all text-sm">
                                    Read Docs
                                </a>
                                <a href="https://automotivedataset.com/developers" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full bg-white text-[#76bc1d] border border-slate-200 font-semibold py-3 rounded-none hover:bg-slate-50 hover:border-[#76bc1d] transition-all text-sm">
                                    Developer Portal
                                </a>
                                <a href="https://automotivedataset.com/demo" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full bg-white text-[#00a9ce] border border-slate-200 font-semibold py-3 rounded-none hover:bg-slate-50 hover:border-[#00a9ce] transition-all text-sm">
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
                            className="bg-[#081622] p-1 md:p-2 rounded-none border border-[#00a9ce]/20 shadow-none"
                        >
                            <div className="relative aspect-[16/10] w-full rounded-none overflow-hidden bg-[#001a22]">
                                <Image 
                                    src="/projects/automotive_hero_new.png" 
                                    alt="Automotive API Interface"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </motion.div>

                        {/* Process Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            
                            {/* UX Flow */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-none bg-[#00a9ce]/10 flex items-center justify-center text-[#00a9ce]">
                                        <Search size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">UX Flow</h3>
                                </div>
                                <ul className="space-y-3">
                                    {['Research & Technical Discovery', 'Building architecture of the web platform', 'Interface design for data tables', 'Usability testing with developers'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* LoFi Design */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-none bg-[#76bc1d]/10 flex items-center justify-center text-[#76bc1d]">
                                        <PenTool size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">LoFi Design</h3>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    We built a structural prototype that was easy to translate to high-level design concepts, forming tangible and testable artifacts for layout and data hierarchy.
                                </p>
                            </div>

                            {/* HiFi Design */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-none bg-[#001a22]/10 flex items-center justify-center text-[#001a22]">
                                        <Layout size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">HiFi Design</h3>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Based on the prototype, we built an interactive and pleasing-to-the-eye design, taking into consideration the extreme usability required for reading complex JSON data.
                                </p>
                            </div>

                            {/* Front End */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-none bg-[#00a9ce]/10 flex items-center justify-center text-[#00a9ce]">
                                        <Smartphone size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">Front End & App</h3>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    We brought everything together and the application was built, developing the graphical user interface of the platform using modern React/Next.js frameworks.
                                </p>
                            </div>

                            {/* QA Process */}
                            <div className="space-y-6 md:col-span-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-none bg-[#76bc1d]/10 flex items-center justify-center text-[#76bc1d]">
                                        <TestTube2 size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">QA Process</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-medium max-w-2xl">
                                    Before going live, we did rigorous quality assurance testing and review to give our customers the best final product, ensuring API response times stayed under 500ms across thousands of queries.
                                </p>
                            </div>

                        </div>

                        {/* Data & API Ecosystem - New Full Section */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 pt-16 mt-16 border-t border-slate-200">
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Comprehensive Databases</h3>
                                    <p className="text-sm text-slate-600 font-medium">A complete suite of vehicle data products built for enterprise scale.</p>
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        { name: 'Vehicle Imagery', link: 'https://automotivedataset.com/databases', color: 'text-[#00a9ce]' },
                                        { name: 'Basic YMM Specs', link: 'https://automotivedataset.com/databases', color: 'text-[#00a9ce]' },
                                        { name: 'Standard YMM Specs', link: 'https://automotivedataset.com/databases', color: 'text-[#00a9ce]' },
                                        { name: 'Advanced YMM Specs', link: 'https://automotivedataset.com/databases', color: 'text-[#00a9ce]' },
                                        { name: 'Market Valuations', link: 'https://automotivedataset.com/databases', color: 'text-[#00a9ce]' },
                                        { name: 'EV Specifications', link: 'https://automotivedataset.com/databases', color: 'text-[#00a9ce]' },
                                        { name: 'Maintenance Schedules', link: 'https://automotivedataset.com/databases', color: 'text-[#76bc1d]' },
                                        { name: 'Repair Estimates', link: 'https://automotivedataset.com/databases', color: 'text-[#76bc1d]' },
                                        { name: 'Motorcycle Specs', link: 'https://automotivedataset.com/databases', color: 'text-[#001a22]' },
                                        { name: 'Parts Catalog', link: 'https://automotivedataset.com/databases', color: 'text-[#001a22]' },
                                    ].map((item, i) => (
                                        <a key={i} href={item.link} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-none border border-slate-200 bg-white hover:bg-slate-50 hover:border-[#00a9ce] hover:shadow-none transition-all group">
                                            <Database className={`w-4 h-4 shrink-0 ${item.color}`} />
                                            <span className={`font-bold text-sm text-slate-700`}>{item.name}</span>
                                            <ArrowRight size={14} className="ml-auto text-slate-600 group-hover:text-[#00a9ce] -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Developer APIs</h3>
                                    <p className="text-sm text-slate-600 font-medium">High-performance, RESTful endpoints engineered for real-time applications.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {[
                                        { name: 'Premium VIN', link: 'https://automotivedataset.com/developers/advanced-vin-decode' },
                                        { name: 'Auction Data', link: 'https://automotivedataset.com/developers/auction' },
                                        { name: 'Basic VIN', link: 'https://automotivedataset.com/developers/basic-vin-decode' },
                                        { name: 'EV Specs', link: 'https://automotivedataset.com/developers/ev-specs' },
                                        { name: 'Europe VIN', link: 'https://automotivedataset.com/developers/europe-vin-decode' },
                                        { name: 'Plate to VIN', link: 'https://automotivedataset.com/developers/us-plate-decode' },
                                        { name: 'Plate OCR', link: 'https://automotivedataset.com/developers/license-plate-ocr' },
                                        { name: 'Valuation', link: 'https://automotivedataset.com/developers/market-value' },
                                        { name: 'Motorcycle VIN', link: 'https://automotivedataset.com/developers/motorcycle-decode' },
                                        { name: 'Owner Manuals', link: 'https://automotivedataset.com/developers/owner-manual' },
                                        { name: 'Sale History', link: 'https://automotivedataset.com/developers/sales-history' },
                                        { name: 'Stolen Check', link: 'https://automotivedataset.com/developers/stolen-check' },
                                        { name: 'Maintenance', link: 'https://automotivedataset.com/developers/vehicle-maintenance' },
                                        { name: 'Vehicle Media', link: 'https://automotivedataset.com/developers/vehicle-media' },
                                        { name: 'Recalls', link: 'https://automotivedataset.com/developers/vehicle-recalls' },
                                        { name: 'Repair Estimates', link: 'https://automotivedataset.com/developers/vehicle-repair' },
                                        { name: 'Warranty', link: 'https://automotivedataset.com/developers/vehicle-warranty' },
                                        { name: 'VIN OCR', link: 'https://automotivedataset.com/developers/vin-ocr' },
                                        { name: 'VIN Helper', link: 'https://automotivedataset.com/developers/vin-suggestions' },
                                        { name: 'YMM Specs', link: 'https://automotivedataset.com/developers/ymm-specs' },
                                        { name: 'History Report', link: 'https://automotivedataset.com/developers/vin-full-report' },
                                        { name: 'Report Check', link: 'https://automotivedataset.com/developers/vin-report-check' },
                                    ].map((api, i) => (
                                        <a key={i} href={api.link} target="_blank" rel="noreferrer" className="flex items-center justify-between px-3 py-2 rounded-none border border-slate-200 hover:border-[#00a9ce] hover:bg-slate-50 transition-colors group">
                                            <span className="font-semibold text-xs text-slate-700 group-hover:text-[#00a9ce]">{api.name}</span>
                                            <ArrowRight size={12} className="text-slate-600 group-hover:text-[#00a9ce]" />
                                        </a>
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
