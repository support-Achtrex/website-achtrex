'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const AboutContent = () => {

  const platforms = [
    {
      accent: '#00a9ce',
      bg: 'bg-white hover:bg-[#00a9ce]/5',
      border: 'border-slate-200 hover:border-[#00a9ce]/50',
      dot: 'bg-[#00a9ce]',
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
      accent: '#76bc1d',
      bg: 'bg-white hover:bg-[#76bc1d]/5',
      border: 'border-slate-200 hover:border-[#76bc1d]/50',
      dot: 'bg-[#76bc1d]',
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
      accent: '#001a22',
      bg: 'bg-white hover:bg-[#001a22]/5',
      border: 'border-slate-200 hover:border-[#001a22]/50',
      dot: 'bg-[#001a22]',
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
    <div className="bg-transparent text-slate-900 font-sans antialiased min-h-screen pb-16">
      
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden pt-10 pb-10 px-6 bg-transparent">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-[1200px] mx-auto text-center flex flex-col items-center">

          <div className="text-[14px] md:text-[15px] text-slate-500 max-w-4xl leading-relaxed font-medium mb-8 text-center space-y-4">
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
              { n: '20M+', label: 'Vehicle Records', color: 'bg-white', border: 'border-slate-200' },
              { n: '99.99%', label: 'Uptime SLA', color: 'bg-white', border: 'border-slate-200' },
              { n: '50ms', label: 'Avg API Latency', color: 'bg-white', border: 'border-slate-200' },
              { n: 'Tier 1', label: 'Enterprise Security', color: 'bg-white', border: 'border-slate-200' },
            ].map((s, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className={`border ${s.border} rounded-xl px-4 py-6 flex flex-col items-center justify-center relative overflow-hidden ${s.color} hover:shadow-md transition-shadow`}>
                <p className="text-[32px] font-black text-[#00a9ce] leading-none mb-2">{s.n}</p>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ─── LIFESTYLE IMAGE ─────────────────────────────────────────── */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-[1200px] mx-auto px-6 pt-4 pb-10">
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl group">
          <Image 
            src="/images/corporate_team_1.png" 
            alt="Achtrex team collaborating in a modern office" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001a22] via-[#001a22]/30 to-transparent opacity-90" />
          <div className="absolute bottom-8 left-8 md:left-12">
            <p className="text-white font-black text-2xl md:text-3xl tracking-tight mb-1">Engineering the Future</p>
            <p className="text-[#00a9ce] text-sm md:text-base font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00a9ce] animate-pulse"></span>
              Achtrex HQ
            </p>
          </div>
        </div>
      </motion.div>

      {/* ─── DENSE BENTO LAYOUT ────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10 flex flex-col gap-10">
        
        {/* ROW 1: Leadership & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Leadership */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-4">
            <div className="px-2 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#00a9ce] rounded-full"></div>
              <h2 className="text-[22px] font-black text-slate-900 tracking-tight">Leadership</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00a9ce]/5 rounded-bl-full -z-0"></div>
              <div className="relative z-10 w-full sm:w-48 aspect-square shrink-0 rounded-xl overflow-hidden bg-slate-100 shadow-inner">
                <Image src="/team/achim_real.jpg" alt="Godwin Achim Tetteh" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center relative z-10">
                <h3 className="text-xl font-black text-slate-900">Godwin Achim Tetteh</h3>
                <p className="text-[12px] font-bold uppercase tracking-widest text-[#00a9ce] mb-3">Founder & System Architect</p>
                <div className="text-[13px] text-slate-600 leading-relaxed font-medium mb-4 space-y-3">
                  <p>
                    Bringing a rare combination of deep hands-on automotive engineering expertise and advanced enterprise system architecture, Godwin founded Achtrex with a clear vision: to resolve the critical data fragmentation that has historically held back the global automotive ecosystem.
                  </p>
                  <p>
                    His technical leadership drives the core architectural decisions behind Achtrex’s proprietary data ingestion pipelines, highly scalable API gateways, and the cognitive reasoning models powering LUMI AI. 
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200 shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-4">
            <div className="px-2 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#76bc1d] rounded-full"></div>
              <h2 className="text-[22px] font-black text-slate-900 tracking-tight">Core Values</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 h-full">
              {values.map((v, i) => (
                <div key={i} className="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm hover:shadow-md hover:border-[#76bc1d]/30 text-center">
                  <span className="text-2xl text-[#76bc1d] leading-none font-mono group-hover:scale-110 transition-transform">{v.icon}</span>
                  <span className="text-[13px] font-bold text-slate-700">{v.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ROW 2: Foundation (2x2 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-8 shadow-sm flex flex-col hover:border-[#00a9ce]/50 hover:shadow-lg transition-all relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#00a9ce]/10 rounded-full blur-xl group-hover:bg-[#00a9ce]/20 transition-all"></div>
            <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Our Mission</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
              To provide scalable enterprise infrastructure that enables businesses to access intelligent automotive data, cognitive AI systems, and real-time mobility intelligence through secure, modern digital architectures.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-8 shadow-sm flex flex-col hover:border-[#76bc1d]/50 hover:shadow-lg transition-all relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#76bc1d]/10 rounded-full blur-xl group-hover:bg-[#76bc1d]/20 transition-all"></div>
            <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Our Vision</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
              To build one of the world&apos;s leading automotive intelligence and cognitive infrastructure ecosystems — powering the future of connected mobility and AI-driven vehicle intelligence.
            </p>
          </motion.div>

          {/* Fragmentation Gap */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm hover:shadow-lg hover:border-slate-300 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">Industry Fragmentation</h3>
            </div>
            <ul className="space-y-4">
              {[
                'VIN databases, specs & fitment data live in disconnected silos',
                'Legacy automotive APIs fail under modern enterprise load',
                'Businesses need 5–10 vendors to get a complete data solution',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-slate-600 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <span className="mt-1 w-2 h-2 rounded-full bg-slate-400 shrink-0 shadow-sm" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Achtrex Solution */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm hover:shadow-lg hover:border-[#00a9ce]/50 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">The Achtrex Solution</h3>
            </div>
            <ul className="space-y-4">
              {[
                'AutomotiveDataset.com — unified VIN intelligence via one enterprise API',
                'LUMI AI — cognitive reasoning trained on proprietary automotive data',
                'Achtrex Core — one integration layer for data, AI & enterprise workflows',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-slate-600 font-medium bg-[#00a9ce]/5 p-3 rounded-lg border border-[#00a9ce]/10">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#00a9ce] shrink-0 shadow-sm" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ROW 3: Platform Ecosystem */}
        <div className="flex flex-col gap-4 mt-8">
          <div className="px-2 flex items-center gap-2">
             <div className="w-1.5 h-6 bg-slate-900 rounded-full"></div>
            <h2 className="text-[22px] font-black text-slate-900 tracking-tight">Platform Ecosystem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                key={i} 
                className={`group flex flex-col rounded-2xl border ${p.bg} ${p.border} p-8 transition-all shadow-sm hover:shadow-xl relative overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 transition-transform group-hover:scale-150`} style={{ backgroundColor: p.accent }}></div>
                <h3 className="text-[18px] font-black text-slate-900 mb-3 tracking-tight relative z-10">{p.name}</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed font-medium flex-1 mb-6 relative z-10">{p.desc}</p>
                
                {p.external ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[14px] font-bold transition-all group-hover:gap-3 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm self-start"
                    style={{ color: p.accent }}>
                    Visit platform <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                ) : (
                  <Link href={p.href}
                    className="inline-flex items-center gap-2 text-[14px] font-bold transition-all group-hover:gap-3 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm self-start"
                    style={{ color: p.accent }}>
                    Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-gradient-to-r from-[#061420] to-[#0A2235] border border-white/10 overflow-hidden shadow-2xl mt-10 mb-10">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a9ce]/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-10 md:p-12 text-center sm:text-left">
            <div>
              <h2 className="text-[28px] font-black text-white mb-3 tracking-tight drop-shadow-md">Ready to build on Achtrex?</h2>
              <p className="text-[16px] text-slate-300 font-medium">
                Contact our team to discuss integration at <a href="mailto:support@achtrex.com" className="text-[#00a9ce] hover:text-white font-bold transition-colors">support@achtrex.com</a>
              </p>
            </div>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 bg-logo-gradient text-white font-bold text-[15px] px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,169,206,0.4)] shrink-0 border-0 group">
              Contact Us
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
