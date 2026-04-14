'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Cpu, ShieldCheck, Car, Bot, User, CheckCircle2, Globe, Database, Compass, Eye, Wrench, Zap, Layers, BarChart3 } from 'lucide-react';

export const AboutContent = () => {
    return (
        <section className="bg-black relative pt-32 lg:pt-40 overflow-hidden text-white">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-white via-[#10b981] to-[#3b82f6] z-50" />

            {/* Background: Horizontal Black to Purple with Perforated Texture */}
            <div className="absolute inset-0 z-0 flex">
                <div className="w-[60%] bg-black h-full" />
                <div className="w-[40%] h-full relative" 
                     style={{ 
                        background: 'linear-gradient(to right, #000 0%, #2e1065 100%)'
                     }}>
                    <div className="absolute inset-0 opacity-[0.2]" 
                         style={{ 
                            backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`,
                            backgroundSize: '24px 24px'
                         }} 
                    />
                </div>
                <div className="absolute top-0 left-[50%] bottom-0 w-[20%] bg-gradient-to-r from-black to-transparent z-1" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 pb-32">
                
                {/* 1. STRATEGIC THESIS */}
                <div id="strategic-thesis" className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40 pt-10">
                    <div className="lg:col-span-12 mb-8">
                         <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                            <span>Company</span>
                            <span className="opacity-50">/</span>
                            <span className="text-white font-black">About Us</span>
                        </nav>
                    </div>
                    <div className="lg:col-span-5">
                         <h2 className="text-gradient font-bold uppercase tracking-widest text-xs mb-6">Strategic Thesis</h2>
                         <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                            We build platforms as assets,<br/> not projects as services.
                         </h3>
                    </div>
                    <div className="lg:col-span-7 space-y-8 text-gray-400 text-lg leading-relaxed border-l border-white/10 pl-8 lg:pl-16">
                        <p>
                            Achtrex is an autonomous enterprise technology laboratory. We operate under the core conviction that the traditional digital agency model is fundamentally flawed for high-leverage growth. Instead, we position ourselves as an incubator of architectural assets.
                        </p>
                        <p>
                            Our operations are focused exclusively on **Infrastructure-as-a-Product**. By owning the underlying mechanisms of data aggregation, specific-use APIs, and autonomous reasoning frameworks, we provide our stakeholders with unfiltered access to technology that scales without the overhead of bespoke development.
                        </p>
                    </div>
                </div>

                {/* 2. LEADERSHIP & OWNERSHIP */}
                <div id="ownership" className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-48">
                    <div className="lg:col-span-4">
                         <div className="relative aspect-[4/5] bg-gray-900 overflow-hidden border border-white/10 grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                            <img 
                                src="/team/achim_real.jpg" 
                                alt="Achim Godwin Tetteh" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-8 left-8">
                                <p className="text-white font-bold text-2xl tracking-tight">Achim Godwin Tetteh</p>
                                <p className="text-logo-gradient text-sm font-bold uppercase tracking-widest mt-1">Founder & Chief Architect</p>
                            </div>
                         </div>
                    </div>
                    <div className="lg:col-span-8 space-y-10">
                        <header>
                            <h2 className="text-gradient font-bold uppercase tracking-widest text-xs mb-4">Architectural Leadership</h2>
                            <h3 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">Driven by a global <br className="hidden lg:block"/> engineering mindset.</h3>
                        </header>
                        
                        <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                            <p>
                                Achim Godwin Tetteh founded Achtrex to resolve the fundamental asymmetry in technology delivery. By focusing on **Product over Service**, he has built a distributed laboratory capable of standing up complex infrastructure synchronously across major global timezones.
                            </p>
                            <p className="text-white font-medium border-l-2 border-logo-gradient-start pl-8 italic">
                                "Our immediate mission is the commoditization of transparency within the mobility sector. We are architecting the infrastructure required to provide absolute **global coverage on every vehicle history in the world**, eliminating information asymmetry for every stakeholder in the automotive value chain."
                            </p>
                            <p>
                                Every asset in the Achtrex portfolio is owned and maintained by an elite, global team of senior developers. This ensures that our systems are not only built for today but are architected for the sheer scale of the automated world.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. MISSION & VISION (New Replacement) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-48">
                    <div className="bg-black p-12 lg:p-20 relative overflow-hidden group">
                        <div className="relative z-10">
                            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-logo-gradient-start mb-8 block">Our Mission</h2>
                            <p className="text-2xl md:text-4xl font-bold text-white leading-tight">
                                To engineer the foundational protocols and API sub-structures required for planetary-scale data intelligence and autonomous operations.
                            </p>
                        </div>
                    </div>
                    <div className="bg-black p-12 lg:p-20 relative overflow-hidden group border-t lg:border-t-0 lg:border-l border-white/10">
                        <div className="relative z-10">
                            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-logo-gradient-end mb-8 block">Our Vision</h2>
                            <p className="text-2xl md:text-4xl font-bold text-white leading-tight">
                                To consolidate global data opacity into a unified, mathematically verifiable infrastructure layer that accelerates technological velocity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4. WHAT WE BUILD (New Replacement) */}
                <div className="mb-48">
                    <div className="flex items-center justify-between mb-16 border-b border-white/10 pb-8">
                        <div>
                            <h2 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Portfolio Focus</h2>
                            <h3 className="text-4xl font-bold tracking-tighter">What We Build</h3>
                        </div>
                        <p className="text-gray-400 text-lg max-w-md text-right hidden lg:block">
                            At Achtrex, we focus on developing scalable and globally applicable technology platforms.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Automotive */}
                        <div className="flex flex-col gap-4 items-start">
                            <h4 className="text-2xl font-bold mb-2">Global Telemetry Data Platform</h4>
                            <p className="text-gray-400 leading-relaxed text-lg mb-6">
                                An ultra-low latency gateway aggregating deeply fragmented automotive data across continents into a unified, queryable schema for enterprise integrators.
                            </p>
                        </div>

                        {/* CarKasa */}
                        <div className="flex flex-col gap-4 items-start">
                            <h4 className="text-2xl font-bold mb-2">CarKasa Asset Index</h4>
                            <p className="text-gray-400 leading-relaxed text-lg mb-6">
                                A high-availability transaction protocol combining localized market intelligence, structured vehicle valuation, and verified ledger asset tracking.
                            </p>
                        </div>

                        {/* Vehicle Report Check */}
                        <div className="flex flex-col gap-4 items-start">
                            <h4 className="text-2xl font-bold mb-2">Omni-Vehicle Verification Protocol</h4>
                            <p className="text-gray-400 leading-relaxed text-lg mb-6">
                                A forensic aggregation engine that compiles millions of distinct origin nodes into an undisputed truth mechanism for cross-border vehicle lifecycle analysis.
                            </p>
                        </div>

                        {/* LUMI */}
                        <div className="flex flex-col gap-4 items-start">
                            <h4 className="text-2xl font-bold mb-2">LUMI, Autonomous Agent Architecture</h4>
                            <p className="text-gray-400 leading-relaxed text-lg mb-6">
                                A proprietary cognitive framework built to interpret complex enterprise logic, autonomously synthesize datasets, and execute deterministic workflows with millisecond latency.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 5. OUR APPROACH (New Replacement) */}
                <div className="bg-[#0a0f1c] border border-white/5 p-12 lg:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[300px] h-full bg-logo-gradient opacity-[0.03] blur-[120px] pointer-events-none" />
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5">
                            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-8 block">Our Approach</h2>
                            <p className="text-2xl font-bold text-white leading-tight mb-8">
                                Platform-First Engineering.
                            </p>
                            <p className="text-gray-400 leading-relaxed font-medium">
                                Our goal is to create solutions that are adaptable, efficient, and capable of powering the next generation of digital applications through architectural ownership.
                            </p>
                        </div>
                        
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
                            {[
                                { title: "Scalability & Performance", text: "Optimized for extreme throughput and negligible latency." },
                                { title: "Global Use Cases", text: "Architected for cross-border applicability and localization." },
                                { title: "Modern Practices", text: "Built with the latest engineering paradigms and CI/CD." },
                                { title: "Continuous Innovation", text: "Leveraging state-of-the-art developments in Data and AI." }
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-4 border-l-2 border-white/5 pl-6">
                                    <h5 className="font-bold text-lg text-white">{item.title}</h5>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
