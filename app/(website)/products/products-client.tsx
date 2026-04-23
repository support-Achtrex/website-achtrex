'use client';

import { CTASection } from "@/components/cta";
import { motion } from 'framer-motion';
import { Car, Bot, Server, Database, Code2, BarChart3, ShieldCheck, CheckCircle2, Globe } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { MultiDeviceMockup } from "@/components/multi-device-mockup";



export default function ProductsClient() {
    return (
        <main className="min-h-screen bg-background">
            {/* SaaS Hero */}
            <section className="relative pt-40 pb-20 px-6 border-b border-white/5 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Platforms that power <br /> modern infrastructure.
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Our enterprise products are proprietary, horizontally scalable utility layers. We deploy robust data intelligence gateways and autonomous logic frameworks designed to power high-velocity digital economies.
                    </p>
                </div>
            </section>

            {/* Automotive Data Platform Spotlight */}
            <section className="py-24 px-6 border-b border-white/5 bg-[#0a0f1c]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-green-500 bg-green-500/10 border border-green-500/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-sm">
                                Live Product
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">AutomotiveDataset.com</h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            A high-availability API engine providing 2.5M+ vehicle records. built for mobility platforms to instantly access granular vehicle datasets, VIN-to-Build-Sheet data, and recall databases without owning the infrastructure.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                'Real-Time VIN-to-Build-Sheet Decoding',
                                'Predictive Odometer & Service Ledger',
                                'NHTSA-Federated Recall Database',
                                'Global Photorealistic Stock Imagery API'
                            ].map(feature => (
                                <li key={feature} className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                                    <span className="text-white font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-8">
                            <a href="https://automotivedataset.com" target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#1e40af] text-white font-bold px-10 py-4 rounded-sm hover:bg-primary/90 transition-all w-fit">
                                View Documentation & API
                            </a>
                        </div>
                    </div>
                    <div>
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 aspect-[4/3] w-full"
                        >
                            <Image 
                                src="/projects/automotive_ui_new.jpg" 
                                alt="AutomotiveDataset.com API Dashboard"
                                fill
                                className="object-contain p-4"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CarKasa Spotlight */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
                    <div className="order-2 lg:order-1">
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 aspect-[4/3] w-full"
                        >
                            <Image 
                                src="/projects/carkasa_full.jpg" 
                                alt="CarKasa Platform Mockup"
                                fill
                                className="object-contain p-4"
                            />
                        </motion.div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-blue-400 bg-blue-400/10 border border-blue-400/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-sm">
                                Live Platform
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">CarKasa.com</h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            CarKasa is an all-in-one ecosystem for vehicle history reports, optimized vehicle listings, and integrated auto loan services, streamlining the path from discovery to ownership.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                'Forensic Asset History Generation',
                                'Algorithmic Marketplace Matching',
                                'Dynamic Lending Assessment Models',
                                'Zero-Latency Mobile Verification'
                            ].map(feature => (
                                <li key={feature} className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                                    <span className="text-white font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="https://carkasa.com" target="_blank" rel="noopener noreferrer" className="inline-flex bg-logo-gradient text-white font-bold px-10 py-4 rounded-sm hover:opacity-90 transition-all w-fit">
                            Visit Carkasa.com
                        </a>
                    </div>
                </div>
            </section>

            {/* Vehicle Report Check Spotlight */}
            <section className="py-24 px-6 border-b border-white/5 bg-[#0a0f1c]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-orange-400 bg-orange-400/10 border border-orange-400/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-sm">
                                Global Solution
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">VehicleReportCheck.com</h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            A global reporting hub providing comprehensive vehicle history data for any vehicle worldwide. Built to eliminate uncertainty in international vehicle transactions.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                'Cross-Border Telemetry Extraction',
                                'Deep Database VIN Parsing',
                                'Immutable Mileage & Collision Ledgers',
                                'Institutional-Grade Documentation'
                            ].map(feature => (
                                <li key={feature} className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                                    <span className="text-white font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="https://vehiclereportcheck.com" target="_blank" rel="noopener noreferrer" className="inline-flex bg-white text-black font-bold px-10 py-4 rounded-sm hover:bg-gray-100 transition-all w-fit">
                            Visit VehicleReportCheck.com
                        </a>
                    </div>
                    <div>
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 aspect-[4/3] w-full"
                        >
                            <Image 
                                src="/projects/vehiclereport_full.jpg" 
                                alt="Vehicle Report Check Mockup"
                                fill
                                className="object-contain p-4"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* AI Platform Spotlight */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
                    <div>
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 aspect-[4/3] w-full"
                        >
                            <Image 
                                src="/projects/lumi_ui_new.jpg" 
                                alt="LUMI Communications Dashboard"
                                fill
                                className="object-contain p-4"
                            />
                        </motion.div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-sm">
                                Architecture Phase
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">LUMI // Communications Platform</h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            LUMI is a unified communications platform designed to power intelligent interactions, automate complex workflows, and deliver real-time insights. Integrate LUMI into your business for a seamless, cross-platform experience.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                'Unified Enterprise Communications',
                                'Real-Time Data Streaming & Sync',
                                'Autonomous Task Execution Workflows',
                                'Frictionless Cross-Platform API Integration'
                            ].map(feature => (
                                <li key={feature} className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />
                                    <span className="text-white font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

             {/* Internal Capabilities Reframed */}
            <section className="py-24 px-6 relative overflow-hidden bg-[#0a0f1c]">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Internal Capabilities</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            We don't sell hours. We leverage our deep engineering capabilities purely to forge and scale our own proprietary products.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Global System Architecture', desc: 'Monolithic repos decoupled into high-performance microservices.' },
                            { title: 'Data Aggregation Strategy', desc: 'Massive ETL pipelines processing terabytes of structured intelligence.' },
                            { title: 'High-Fidelity UI Systems', desc: 'Pixel-perfect component engineering for frictionless developer interfaces.' }
                        ].map((cap, i) => (
                             <div key={i} className="border border-white/10 bg-background p-8 rounded-sm hover:border-primary/50 transition-colors">
                                 <h3 className="text-xl font-bold text-white mb-4">{cap.title}</h3>
                                 <p className="text-gray-400 leading-relaxed">{cap.desc}</p>
                             </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <CTASection />
        </main>
    );
}
