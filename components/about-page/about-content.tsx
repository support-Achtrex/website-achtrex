'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutContent = () => {

    const platforms = [
        {
            accent: '#0ea5e9',
            bg: 'bg-transparent hover:bg-sky-900/20',
            border: 'border-white/10 hover:border-sky-500/50',
            dot: 'bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.4)]',
            statusText: 'text-sky-400',
            statusBg: 'bg-sky-900/30 border-sky-500/30',
            name: 'AutomotiveDataset.com',
            tagline: 'Automotive Data Infrastructure',
            desc: 'Enterprise VIN intelligence, vehicle specifications, trim data, fitment APIs, and market values — all through a single developer-first REST API layer.',
            tags: ['VIN Decoding', 'Specs API', 'Fitment Data', 'Market Values', 'Fleet'],
            href: 'https://automotivedataset.com',
            external: true,
        },
        {
            accent: '#8b5cf6',
            bg: 'bg-transparent hover:bg-violet-900/20',
            border: 'border-white/10 hover:border-violet-500/50',
            dot: 'bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.4)]',
            statusText: 'text-violet-400',
            statusBg: 'bg-violet-900/30 border-violet-500/30',
            name: 'LUMI AI',
            tagline: 'Cognitive Automotive Platform',
            desc: 'Domain-specific AI reasoning engine for vehicle diagnostics, predictive analytics, and automotive decision intelligence — trained on proprietary data.',
            tags: ['AI Reasoning', 'Diagnostics', 'Predictive', 'Conversational', 'NLP'],
            href: '/products/lumi',
            external: false,
        },
        {
            accent: '#10b981',
            bg: 'bg-transparent hover:bg-emerald-900/20',
            border: 'border-white/10 hover:border-emerald-500/50',
            dot: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]',
            statusText: 'text-emerald-400',
            statusBg: 'bg-emerald-900/30 border-emerald-500/30',
            name: 'Achtrex Core',
            tagline: 'Enterprise Integration Hub',
            desc: 'Central API gateway, client onboarding, integration orchestration, enterprise dashboards, and licensing infrastructure powering the full Achtrex ecosystem.',
            tags: ['API Gateway', 'Onboarding', 'Licensing', 'Enterprise', 'SaaS'],
            href: '/products',
            external: false,
        },
    ];

    const values = [
        { label: 'Infrastructure-First', icon: '⬡' },
        { label: 'Data Accuracy', icon: '◈' },
        { label: 'Developer Experience', icon: '⌗' },
        { label: 'Enterprise Reliability', icon: '◉' },
        { label: 'AI-Driven Innovation', icon: '◆' },
        { label: 'Scalability by Design', icon: '⬢' },
        { label: 'Customer-Centric', icon: '◎' },
        { label: 'Continuous Growth', icon: '⟳' },
    ];

    const expertise = ['Automotive Data Systems', 'VIN Intelligence', 'API Architecture', 'AI Infrastructure'];

    return (
        <div className="bg-transparent text-white font-sans antialiased min-h-screen pb-16">
            
            {/* ─── HERO ─────────────────────────────────────────────────────── */}
            <div className="relative overflow-hidden pt-28 pb-10 px-6 border-b border-white/10 bg-transparent">
                <div className="relative z-10 max-w-[1200px] mx-auto text-center flex flex-col items-center">
                    <h1 className="text-[40px] md:text-[56px] font-black tracking-[-0.03em] leading-[1] text-white mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-600">Achtrex</span>
                    </h1>

                    <div className="text-[14px] md:text-[15px] text-gray-400 max-w-4xl leading-relaxed font-medium mb-8 text-center space-y-4">
                        <p>
                            Achtrex is fundamentally re-architecting how businesses interact with automotive data by delivering enterprise-grade intelligence and cognitive AI infrastructure for the connected mobility era. Founded on the principle that modern automotive workflows require more than just disconnected silos of information, we build unified platforms that transform fragmented vehicle specifications, market data, and diagnostic inputs into actionable, real-time intelligence.
                        </p>
                        <p>
                            Our ecosystem bridges the critical architecture gap between legacy data providers and the demands of next-generation digital applications. Through AutomotiveDataset.com, we provide developers and enterprise systems with instant, robust access to comprehensive VIN intelligence, exact fitment mappings, and hyper-accurate market valuations via a single streamlined API. Complementing this, our LUMI AI engine introduces true cognitive reasoning to automotive diagnostics and predictive analytics, trained extensively on proprietary, domain-specific mobility data to support complex decision-making in real time.
                        </p>
                        <p>
                            Orchestrating this entire ecosystem is Achtrex Core—our enterprise integration hub that ensures seamless scalability, rapid client onboarding, and uncompromising security. From powering dynamic parts distribution networks and cutting-edge valuation engines to supporting intelligent fleet management and connected automotive commerce, Achtrex provides the mission-critical foundation required to build, scale, and innovate the intelligent automotive solutions of tomorrow.
                        </p>
                    </div>

                    {/* Quick stats row */}
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
                        {[
                            { n: '3', label: 'Live Platforms', color: 'bg-blue-900/20', border: 'border-blue-500/20' },
                            { n: '4+', label: 'Industries Served', color: 'bg-purple-900/20', border: 'border-purple-500/20' },
                            { n: 'SaaS', label: 'Business Model', color: 'bg-emerald-900/20', border: 'border-emerald-500/20' },
                            { n: 'Global', label: 'Remote Operations', color: 'bg-sky-900/20', border: 'border-sky-500/20' },
                        ].map((s, i) => (
                            <div key={i} className={`border ${s.border} rounded-2xl px-4 py-5 flex flex-col items-center justify-center relative overflow-hidden ${s.color}`}>
                                <p className="text-[28px] font-black text-white leading-none mb-1">{s.n}</p>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── DENSE BENTO LAYOUT ────────────────────────────────────────── */}
            <div className="max-w-[1200px] mx-auto px-6 pt-10 flex flex-col gap-10">
                
                {/* ROW 1: Leadership & Core Values */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    
                    {/* Leadership */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="px-2">
                            <h2 className="text-[20px] font-bold text-white">Leadership</h2>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 bg-transparent border border-white/10 rounded-3xl p-6 shadow-sm h-full">
                            <div className="relative w-full sm:w-40 aspect-square sm:aspect-[4/5] shrink-0 rounded-2xl overflow-hidden bg-[#111112]">
                                <Image src="/team/achim_real.jpg" alt="Godwin Achim Tetteh" fill className="object-cover" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-lg font-bold text-white">Godwin Achim Tetteh</h3>
                                <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-3">Founder & System Architect</p>
                                <div className="text-[13px] text-gray-400 leading-relaxed font-medium mb-4 space-y-3">
                                    <p>
                                        Bringing a rare combination of deep hands-on automotive engineering expertise and advanced enterprise system architecture, Godwin founded Achtrex with a clear vision: to resolve the critical data fragmentation that has historically held back the global automotive ecosystem. Recognizing that legacy API providers and siloed databases fail under the stress of modern, AI-driven applications, he engineered Achtrex entirely from the ground up as a unified, developer-first infrastructure.
                                    </p>
                                    <p>
                                        His technical leadership drives the core architectural decisions behind Achtrex’s proprietary data ingestion pipelines, highly scalable API gateways, and the cognitive reasoning models powering LUMI AI. By merging a deep, technical understanding of vehicle diagnostics with a rigorous approach to cloud-native scalability, Godwin ensures that Achtrex delivers unparalleled data accuracy, system reliability, and performance for enterprise clients worldwide.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {expertise.map((t, i) => (
                                        <span key={i} className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-blue-900/30 text-blue-400 border border-blue-500/30">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Core Values */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="px-2">
                            <h2 className="text-[20px] font-bold text-white">Core Values</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-3 h-full">
                            {values.map((v, i) => (
                                <div key={i} className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-white/10 bg-transparent hover:bg-blue-900/20 transition-colors shadow-sm text-center">
                                    <span className="text-xl text-blue-500 leading-none font-mono drop-shadow-sm">{v.icon}</span>
                                    <span className="text-[12px] font-bold text-gray-400">{v.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* ROW 2: Foundation (2x2 Grid) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Mission */}
                    <div className="rounded-3xl bg-transparent border border-white/10 p-8 shadow-sm flex flex-col hover:border-blue-300 transition-colors">

                        <h2 className="text-xl font-bold text-white mb-3">Our Mission</h2>
                        <p className="text-[14px] text-gray-400 leading-relaxed font-medium">
                            To provide scalable enterprise infrastructure that enables businesses to access intelligent automotive data, cognitive AI systems, and real-time mobility intelligence through secure, modern digital architectures.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="rounded-3xl bg-transparent border border-white/10 p-8 shadow-sm flex flex-col hover:border-teal-300 transition-colors">

                        <h2 className="text-xl font-bold text-white mb-3">Our Vision</h2>
                        <p className="text-[14px] text-gray-400 leading-relaxed font-medium">
                            To build one of the world&apos;s leading automotive intelligence and cognitive infrastructure ecosystems — powering the future of connected mobility and AI-driven vehicle intelligence.
                        </p>
                    </div>

                    {/* Fragmentation Gap */}
                    <div className="rounded-3xl border border-rose-500/30 p-8 bg-rose-900/10 hover:border-rose-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">

                            <h3 className="text-xl font-bold text-white">Industry Fragmentation</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'VIN databases, specs & fitment data live in disconnected silos',
                                'Legacy automotive APIs fail under modern enterprise load',
                                'Businesses need 5–10 vendors to get a complete data solution',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[14px] text-gray-400 font-medium">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The Achtrex Solution */}
                    <div className="rounded-3xl border border-emerald-500/30 p-8 bg-emerald-900/10 hover:border-emerald-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">

                            <h3 className="text-xl font-bold text-white">The Achtrex Solution</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'AutomotiveDataset.com — unified VIN intelligence via one enterprise API',
                                'LUMI AI — cognitive reasoning trained on proprietary automotive data',
                                'Achtrex Core — one integration layer for data, AI & enterprise workflows',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[14px] text-gray-400 font-medium">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ROW 3: Platform Ecosystem */}
                <div className="flex flex-col gap-4">
                    <div className="px-2">
                        <h2 className="text-[20px] font-bold text-white">Platform Ecosystem</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {platforms.map((p, i) => (
                            <div key={i} className={`group flex flex-col rounded-3xl border ${p.bg} ${p.border} p-6 transition-all shadow-sm`}>

                                <h3 className="text-[16px] font-bold text-white mb-2">{p.name}</h3>
                                <p className="text-[13px] text-gray-400 leading-relaxed font-medium flex-1 mb-5">{p.desc}</p>
                                
                                {p.external ? (
                                    <a href={p.href} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[13px] font-bold transition-all group-hover:gap-3"
                                        style={{ color: p.accent }}>
                                        Visit platform <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </a>
                                ) : (
                                    <Link href={p.href}
                                        className="inline-flex items-center gap-2 text-[13px] font-bold transition-all group-hover:gap-3"
                                        style={{ color: p.accent }}>
                                        Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="relative rounded-3xl bg-gradient-to-r from-[#111112] via-[#0a0a0b] to-[#111112] border border-white/10 overflow-hidden shadow-sm mt-2">
                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 md:p-10 text-center sm:text-left">
                        <div>
                            <h2 className="text-[24px] font-black text-white mb-2 tracking-tight">Ready to build on Achtrex?</h2>
                            <p className="text-[14px] text-gray-400 font-medium">
                                Contact our team to discuss integration at <a href="mailto:support@achtrex.com" className="text-teal-600 hover:text-teal-700 font-bold">support@achtrex.com</a>
                            </p>
                        </div>
                        <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#c2fce3] text-[#070b14] font-bold text-[14px] px-6 py-3 rounded-full hover:bg-white transition-all shadow-md shrink-0">
                            Get in touch
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};
