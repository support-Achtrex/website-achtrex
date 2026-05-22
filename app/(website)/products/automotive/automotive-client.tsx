'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Layout, Smartphone, PenTool, Database, Search, Target, TestTube2, Globe } from 'lucide-react';
import Image from "next/image";

export default function AutomotiveClient() {
    return (
        <main className="min-h-screen bg-white text-[#111112] selection:bg-[#174395] selection:text-white pt-24 pb-20">
            {/* 1. Header */}
            <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e6f0ff]/30 border-b border-[#174395]/10 py-16 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <nav className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#174395]/60 mb-6 flex items-center gap-2">
                        <span>Portfolio</span>
                        <span className="text-[#174395]/30">/</span>
                        <span className="text-[#174395]">Automotive Dataset</span>
                    </nav>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
                        <div className="relative w-48 md:w-64 aspect-[3/2]">
                            <Image 
                                src="/projects/ad-logo.png" 
                                alt="Automotive Dataset Logo" 
                                fill 
                                className="object-contain" 
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#174395] via-[#861F80] to-[#F2147A] mb-2">
                                Automotive Dataset
                            </h1>
                            <a href="https://automotivedataset.com" target="_blank" rel="noreferrer" className="text-[#489EE6] font-bold hover:underline flex items-center gap-1">
                                automotivedataset.com <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span className="px-4 py-1.5 rounded-full bg-white border border-[#174395]/20 text-[#174395] text-sm font-semibold shadow-sm">Global Vehicle Data</span>
                        <span className="px-4 py-1.5 rounded-full bg-[#174395] text-white text-sm font-semibold shadow-sm">Real-time APIs</span>
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
                            <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#F2147A] pb-4 inline-block text-[#174395]">The Challenge</h2>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                Automotive Dataset is an enterprise-grade vehicle data platform built to be the cutting-edge for mobility web services worldwide. To achieve this, we needed to directly engineer new interactive dashboards, deep technical documentation, and robust infrastructure to market their vast array of API services, engaging our developer audience to drive business growth.
                            </p>
                        </div>

                        {/* Product Scope */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight border-b-2 border-[#489EE6] pb-4 inline-block text-[#174395]">Product Scope</h2>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                We built Automotive Dataset from the ground up, architecting a low-latency infrastructure for a massive vehicle data ecosystem. We developed comprehensive API endpoints and databases for every facet of vehicle intelligence, handling everything from VIN decoding to market valuations.
                            </p>
                        </div>

                        {/* CTA Group */}
                        <div className="space-y-3">
                            <a 
                                href="https://automotivedataset.com" 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#174395] to-[#861F80] text-white font-bold py-4 rounded-lg hover:opacity-90 transition-all shadow-lg shadow-[#174395]/20"
                            >
                                Visit AutomotiveDataset.com <ArrowRight size={18} />
                            </a>
                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <a href="https://automotivedataset.com/pricing" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full bg-[#f8f9fa] text-[#174395] border border-gray-200 font-semibold py-3 rounded-lg hover:bg-white hover:border-[#174395] hover:shadow-sm transition-all text-sm">
                                    View Pricing
                                </a>
                                <a href="https://automotivedataset.com/documentation" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full bg-[#f8f9fa] text-[#861F80] border border-gray-200 font-semibold py-3 rounded-lg hover:bg-white hover:border-[#861F80] hover:shadow-sm transition-all text-sm">
                                    Read Docs
                                </a>
                                <a href="https://automotivedataset.com/developers" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full bg-[#f8f9fa] text-[#F2147A] border border-gray-200 font-semibold py-3 rounded-lg hover:bg-white hover:border-[#F2147A] hover:shadow-sm transition-all text-sm">
                                    Developer Portal
                                </a>
                                <a href="https://automotivedataset.com/demo" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full bg-[#f8f9fa] text-[#489EE6] border border-gray-200 font-semibold py-3 rounded-lg hover:bg-white hover:border-[#489EE6] hover:shadow-sm transition-all text-sm">
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
                            className="bg-gradient-to-br from-[#174395] via-[#861F80] to-[#F2147A] p-1 md:p-2 rounded-3xl shadow-2xl"
                        >
                            <div className="relative aspect-[16/10] w-full rounded-[1.3rem] overflow-hidden bg-white">
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
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Search size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">UX Flow</h3>
                                </div>
                                <ul className="space-y-3">
                                    {['Research & Technical Discovery', 'Building architecture of the web platform', 'Interface design for data tables', 'Usability testing with developers'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* LoFi Design */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                                        <PenTool size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">LoFi Design</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    We built a structural prototype that was easy to translate to high-level design concepts, forming tangible and testable artifacts for layout and data hierarchy.
                                </p>
                            </div>

                            {/* HiFi Design */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                                        <Layout size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">HiFi Design</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    Based on the prototype, we built an interactive and pleasing-to-the-eye design, taking into consideration the extreme usability required for reading complex JSON data.
                                </p>
                            </div>

                            {/* Front End */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                                        <Smartphone size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">Front End & App</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    We brought everything together and the application was built, developing the graphical user interface of the platform using modern React/Next.js frameworks.
                                </p>
                            </div>

                            {/* QA Process */}
                            <div className="space-y-6 md:col-span-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                                        <TestTube2 size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">QA Process</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed font-medium max-w-2xl">
                                    Before going live, we did rigorous quality assurance testing and review to give our customers the best final product, ensuring API response times stayed under 500ms across thousands of queries.
                                </p>
                            </div>

                        </div>

                        {/* Data & API Ecosystem - New Full Section */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 pt-16 mt-16 border-t border-gray-200">
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-[#174395] mb-2">Comprehensive Databases</h3>
                                    <p className="text-sm text-gray-600 font-medium">A complete suite of vehicle data products built for enterprise scale.</p>
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        { name: 'Vehicle Imagery', link: 'https://automotivedataset.com/databases', color: 'text-[#174395]' },
                                        { name: 'Basic YMM Specs', link: 'https://automotivedataset.com/databases', color: 'text-[#174395]' },
                                        { name: 'Standard YMM Specs', link: 'https://automotivedataset.com/databases', color: 'text-[#174395]' },
                                        { name: 'Advanced YMM Specs', link: 'https://automotivedataset.com/databases', color: 'text-[#174395]' },
                                        { name: 'Market Valuations', link: 'https://automotivedataset.com/databases', color: 'text-[#861F80]' },
                                        { name: 'EV Specifications', link: 'https://automotivedataset.com/databases', color: 'text-[#861F80]' },
                                        { name: 'Maintenance Schedules', link: 'https://automotivedataset.com/databases', color: 'text-[#F2147A]' },
                                        { name: 'Repair Estimates', link: 'https://automotivedataset.com/databases', color: 'text-[#F2147A]' },
                                        { name: 'Motorcycle Specs', link: 'https://automotivedataset.com/databases', color: 'text-[#489EE6]' },
                                        { name: 'Parts Catalog', link: 'https://automotivedataset.com/databases', color: 'text-[#489EE6]' },
                                    ].map((item, i) => (
                                        <a key={i} href={item.link} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-[#f8f9fa] hover:bg-white hover:border-[#489EE6] hover:shadow-lg transition-all group">
                                            <Database className={`w-4 h-4 shrink-0 ${item.color}`} />
                                            <span className={`font-bold text-sm text-gray-800 group-hover:${item.color}`}>{item.name}</span>
                                            <ArrowRight size={14} className="ml-auto text-gray-300 group-hover:text-[#489EE6] -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-[#861F80] mb-2">Developer APIs</h3>
                                    <p className="text-sm text-gray-600 font-medium">High-performance, RESTful endpoints engineered for real-time applications.</p>
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
                                        <a key={i} href={api.link} target="_blank" rel="noreferrer" className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-200 hover:border-[#F2147A] hover:bg-[#F2147A]/5 transition-colors group">
                                            <span className="font-semibold text-xs text-gray-700 group-hover:text-[#F2147A]">{api.name}</span>
                                            <ArrowRight size={12} className="text-gray-300 group-hover:text-[#F2147A]" />
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
