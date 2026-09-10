'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Database, TrendingUp, CheckCircle2 } from 'lucide-react';

const roadmapData = [
  {
    id: 'phase-1',
    tabLabel: 'Phase 1: Core Architecture',
    phaseLabel: 'PHASE 1 // IMMEDIATE HORIZON',
    title: 'Sovereign Digital Architecture & Enterprise Foundations',
    summary: 'Deploying high-performance custom operating software, unified vehicle data schemas, and proprietary architectures that eliminate enterprise dependency on rigid legacy platforms.',
    points: [
      {
        badge: 'Custom Platforms',
        text: 'Engineering bespoke Dealer Management Systems (DMS), parts catalog engines, and workshop management software delivered with 100% intellectual property ownership to the client.'
      },
      {
        badge: 'Standardized Data Schemas',
        text: 'Normalizing heterogeneous vehicle diagnostics, repair taxonomies, and cross-catalog OEM/aftermarket part mappings into unified high-throughput data models.'
      },
      {
        badge: 'Legacy Modernization',
        text: 'Replacing fragmented on-premise silos with secure, cloud-native microservices designed for elastic throughput, zero data loss, and uninterrupted multi-branch operations.'
      }
    ]
  },
  {
    id: 'phase-2',
    tabLabel: 'Phase 2: Cognitive Intelligence',
    phaseLabel: 'PHASE 2 // EXPANSION HORIZON',
    title: 'Deterministic AI Diagnostics & Operational Automation',
    summary: 'Infusing deep domain-specialized artificial intelligence into everyday automotive workflows to multiply operational capacity, eliminate diagnostic guesswork, and automate customer engagement.',
    points: [
      {
        badge: 'Diagnostic Intelligence',
        text: 'Developing the Achtrex Automotive Intelligence Architecture (AAIA) — neural reasoning models that map complex multi-sensor OBD-II telemetry and symptom profiles directly to verified root-cause fixes.'
      },
      {
        badge: 'Autonomous Agents',
        text: 'Deploying 24/7 intelligent sales and service booking agents capable of parsing natural customer inquiries, matching inventory, calculating estimates, and scheduling repair slots autonomously.'
      },
      {
        badge: 'Predictive Market Telemetry',
        text: 'Synthesizing regional auction trends, macroeconomic signals, and historical parts velocity to provide real-time dynamic pricing and predictive inventory stocking forecasts.'
      }
    ]
  },
  {
    id: 'phase-3',
    tabLabel: 'Phase 3: Global Mobility Scale',
    phaseLabel: 'PHASE 3 // LONG-TERM HORIZON',
    title: 'Connected Fleet Ecosystems & Interoperable Aftermarket Cloud',
    summary: 'Building the neutral, borderless digital backbone that seamlessly connects fleet operators, parts manufacturers, multi-brand service networks, and connected vehicles worldwide.',
    points: [
      {
        badge: 'Connected Telematics',
        text: 'Real-time edge ingestion of high-frequency vehicle telemetry, predictive EV battery state-of-health (SoH) modeling, and automated roadside triage dispatch.'
      },
      {
        badge: 'Neutral Aftermarket Grid',
        text: 'Establishing secure, open API protocols enabling verified cross-brand parts interchangeability, decentralized warranty adjudication, and real-time inventory discovery across borders.'
      },
      {
        badge: 'Autonomous Supply Routing',
        text: 'End-to-end algorithmic parts fulfillment connecting regional logistics hubs directly to workshop service bays just-in-time, slashing technician idle time.'
      }
    ]
  }
];

export const AboutContent = () => {
  const [activePhaseId, setActivePhaseId] = useState(roadmapData[0].id);

  const currentPhase = roadmapData.find(p => p.id === activePhaseId) || roadmapData[0];

  return (
    <div className="w-full bg-[#FFFFFF] text-slate-900 font-sans selection:bg-[#F37021] selection:text-white pb-24">

      {/* ─── SECTION 1: ABOUT ACHTREX / OUR PURPOSE ─────────────────────── */}
      <section className="max-w-[1240px] mx-auto px-6 pt-4 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-black uppercase tracking-widest text-[#F37021] mb-2">
              OUR VISION & CONVICTION
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Architecting the Future of Enterprise Automotive Technology
            </h1>

            {/* Signature Brand Gradient Underline */}
            <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mt-3 mb-6 rounded-full" />

            <div className="space-y-4 text-slate-700 text-[15px] sm:text-[16px] leading-[1.8] font-normal max-w-xl">
              <p>
                The global automotive ecosystem is undergoing the most consequential digital shift in its history. As vehicles evolve into software-defined machines and customer expectations demand real-time transparency, enterprise dealerships, aftermarket networks, and mobility operators cannot afford to be constrained by rigid, fragmented software.
              </p>
              <p>
                Headquartered in Dubai, UAE, Achtrex is built to solve this challenge. We partner with ambitious automotive enterprises worldwide to engineer sovereign custom platforms, domain-specific AI diagnostics, and high-throughput digital backbones that turn complex technical operations into scalable, defensible competitive advantages.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="btn-navbar-cta"
              >
                <span className="btn-navbar-cta-inner">
                  <span>Initiate Partnership</span>
                  <ArrowRight className="w-4 h-4 text-[#00A9CE]" />
                </span>
              </Link>
              <Link
                href="/services"
                className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors duration-200 flex items-center gap-2 border border-slate-200"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] aspect-[4/3] flex items-center justify-center">
              
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F37021]/10 via-transparent to-slate-100 rounded-3xl blur-2xl -z-10" />

              {/* Graphic Composition */}
              <svg viewBox="0 0 500 380" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                
                {/* 1. Books / Data Foundation Stack (Bottom Left) */}
                <g transform="translate(40, 210)">
                  {/* Book 3 (Bottom) */}
                  <rect x="10" y="70" width="180" height="26" rx="4" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1.5" />
                  <rect x="0" y="70" width="16" height="26" rx="3" fill="#64748B" />
                  
                  {/* Book 2 (Middle - Dark Charcoal) */}
                  <rect x="8" y="42" width="180" height="26" rx="4" fill="#334155" stroke="#1E293B" strokeWidth="1.5" />
                  <rect x="0" y="42" width="14" height="26" rx="3" fill="#0F172A" />
                  
                  {/* Book 1 (Top - White) */}
                  <rect x="12" y="14" width="176" height="26" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <rect x="0" y="14" width="16" height="26" rx="3" fill="#94A3B8" />

                  {/* Mechanical Gear Schematic watermark above books */}
                  <g opacity="0.4" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3">
                    <circle cx="90" cy="-30" r="38" />
                    <circle cx="90" cy="-30" r="18" fill="#F8FAFC" />
                    <circle cx="150" cy="-60" r="26" />
                    <circle cx="150" cy="-60" r="10" fill="#F8FAFC" />
                    <path d="M90 -68 L90 8 M52 -30 L128 -30" />
                  </g>
                </g>

                {/* 2. Connected Data Bus Lines (Ascending Circuit) */}
                <path d="M190 220 L270 220 L310 160 L380 160 L420 110" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M220 250 L270 250 L310 160" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                
                {/* Circuit Nodes */}
                <circle cx="190" cy="220" r="4" fill="#475569" />
                <circle cx="220" cy="250" r="3.5" fill="#94A3B8" />
                <circle cx="380" cy="160" r="3.5" fill="#475569" />

                {/* 3. Ascending Golden-Orange Growth Trajectory Line */}
                <path d="M160 270 L250 180 L320 180 L430 65" stroke="url(#orangeGlow)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="250" cy="180" r="6" fill="#FFFFFF" stroke="#F37021" strokeWidth="3" />
                <circle cx="320" cy="180" r="6" fill="#FFFFFF" stroke="#F37021" strokeWidth="3" />
                <circle cx="430" cy="65" r="8" fill="#FFFFFF" stroke="#F37021" strokeWidth="4" />

                {/* 4. Top Right Floating Analytics Dashboard */}
                <g transform="translate(330, 20)">
                  {/* Dashboard Frame with subtle drop shadow */}
                  <rect x="0" y="0" width="150" height="95" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" filter="drop-shadow(0px 8px 16px rgba(0,0,0,0.12))" />
                  
                  {/* Dashboard Header Bar */}
                  <rect x="0" y="0" width="150" height="18" rx="8" fill="#F8FAFC" />
                  <circle cx="10" cy="9" r="2.5" fill="#CBD5E1" />
                  <circle cx="18" cy="9" r="2.5" fill="#CBD5E1" />
                  
                  {/* Donut Chart Indicator */}
                  <circle cx="35" cy="45" r="14" stroke="#F1F5F9" strokeWidth="4" fill="none" />
                  <circle cx="35" cy="45" r="14" stroke="#F37021" strokeWidth="4" strokeDasharray="50 40" fill="none" transform="rotate(-90 35 45)" />

                  {/* Bar Chart Bars */}
                  <rect x="75" y="50" width="4" height="15" rx="1" fill="#00A9CE" />
                  <rect x="83" y="40" width="4" height="25" rx="1" fill="#F37021" />
                  <rect x="91" y="32" width="4" height="33" rx="1" fill="#0284C7" />
                  <rect x="99" y="44" width="4" height="21" rx="1" fill="#94A3B8" />

                  {/* Metric Trend Fill Area */}
                  <path d="M75 80 Q95 68 115 76 T140 68 L140 85 L75 85 Z" fill="#F37021" opacity="0.2" />
                  <path d="M75 80 Q95 68 115 76 T140 68" stroke="#F37021" strokeWidth="1.5" fill="none" />
                </g>

                {/* Gradients */}
                <defs>
                  <linearGradient id="orangeGlow" x1="160" y1="270" x2="430" y2="65" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FB923C" />
                    <stop offset="60%" stopColor="#F37021" />
                    <stop offset="100%" stopColor="#D95000" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 2: STRATEGIC GROWTH ROADMAP & INNOVATION HORIZONS ─── */}
      <section className="max-w-[1240px] mx-auto px-6 pb-20 sm:pb-24">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#F37021] mb-2 block">
            STRATEGIC ROADMAP
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight">
            Our Intended Growth & Innovation Horizons
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mt-3 mb-5 rounded-full" />

          <p className="text-slate-700 text-[15px] sm:text-base leading-[1.8] font-normal max-w-3xl">
            Achtrex executes against a disciplined multi-phase engineering trajectory designed to systematically de-risk automotive operations, establish dominant technical infrastructure, and unlock long-term enterprise value for our partners and investors.
          </p>
        </div>

        {/* Milestone Card with Interactive Tabs */}
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">
          
          {/* Top Tab Bar */}
          <div className="border-b border-slate-200/80 px-6 sm:px-10 pt-6 flex items-center gap-6 sm:gap-10 overflow-x-auto scrollbar-none">
            {roadmapData.map((item) => {
              const isActive = item.id === activePhaseId;

              return (
                <button
                  key={item.id}
                  onClick={() => setActivePhaseId(item.id)}
                  className={`pb-4 text-xs sm:text-[13px] font-bold transition-all relative whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span>{item.tabLabel}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="roadmapUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#F37021] to-[#00A9CE] rounded-full" 
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Area */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Milestone Text */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#F37021] uppercase tracking-widest block">
                  {currentPhase.phaseLabel}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {currentPhase.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                  {currentPhase.summary}
                </p>

                <div className="space-y-4 pt-3">
                  {currentPhase.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70">
                      <CheckCircle2 className="w-4 h-4 text-[#F37021] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 font-bold mr-1.5">{point.badge}:</strong>
                        <span>{point.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Schematic Graphic */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-2xl bg-[#F8FAFC] border border-slate-200/70 p-6 flex items-center justify-center overflow-hidden shadow-inner">
                  
                  {/* Blueprint Grid Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

                  {/* Brand Gradient Vertical Accent Bar */}
                  <div className="absolute w-6 h-48 bg-gradient-to-b from-[#F37021] to-[#00A9CE] rounded-sm -rotate-3 opacity-90" />

                  {/* High Tech Engineering Blueprint / Circuit Iconography */}
                  <svg viewBox="0 0 200 240" className="relative z-10 w-44 h-auto drop-shadow-md" fill="none">
                    {/* Diagnostic Sensor Hub Graphic */}
                    <circle cx="100" cy="70" r="36" fill="#0F172A" stroke="#334155" strokeWidth="3" />
                    <circle cx="100" cy="70" r="24" fill="#1E293B" />
                    <circle cx="100" cy="70" r="10" fill="#F37021" />

                    {/* Surrounding Node Ring */}
                    <circle cx="100" cy="70" r="52" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 3" />
                    <circle cx="50" cy="60" r="5" fill="#00A9CE" />
                    <circle cx="150" cy="60" r="5" fill="#00A9CE" />
                    <circle cx="100" cy="18" r="5" fill="#F37021" />

                    {/* Lower Gateway Module */}
                    <rect x="60" y="135" width="80" height="45" rx="6" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
                    <line x1="100" y1="106" x2="100" y2="135" stroke="#F37021" strokeWidth="2.5" />
                    
                    {/* Status LED Bars */}
                    <rect x="70" y="145" width="12" height="4" rx="1" fill="#00A9CE" />
                    <rect x="86" y="145" width="12" height="4" rx="1" fill="#F37021" />
                    <rect x="102" y="145" width="12" height="4" rx="1" fill="#10B981" />
                    <rect x="118" y="145" width="12" height="4" rx="1" fill="#38BDF8" />

                    {/* Integrated Microchip Grid */}
                    <rect x="70" y="156" width="60" height="14" rx="2" fill="#1E293B" />
                    <line x1="78" y1="163" x2="122" y2="163" stroke="#FB923C" strokeWidth="1.5" strokeDasharray="2 2" />

                    {/* Telemetry Bus Links Out */}
                    <path d="M75 180 L60 215" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M100 180 L100 220" stroke="#F37021" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M125 180 L140 215" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="60" cy="215" r="3.5" fill="#00A9CE" />
                    <circle cx="100" cy="220" r="4" fill="#F37021" />
                    <circle cx="140" cy="215" r="3.5" fill="#00A9CE" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: STRATEGIC OPPORTUNITY & COMMITMENT METRICS ────────── */}
      <section className="w-full bg-[#181C21] text-white py-14 px-6 relative overflow-hidden my-4">
        
        {/* Subtle Map / Vector Road Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cityMapPattern" width="160" height="160" patternUnits="userSpaceOnUse">
                <path d="M0 40 Q40 80 80 40 T160 40 M40 0 L40 160 M120 0 L120 160 M0 120 Q80 160 160 120" stroke="#FFFFFF" strokeWidth="1" fill="none" />
                <circle cx="40" cy="40" r="3" fill="#F37021" />
                <circle cx="120" cy="120" r="3" fill="#F37021" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cityMapPattern)" />
          </svg>
        </div>

        <div className="max-w-[1240px] mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
              $1.8T+
            </span>
            <span className="text-xs sm:text-[13px] text-slate-300 font-medium leading-tight max-w-[200px]">
              Global mobility & aftermarket market shift
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-black text-[#F37021] tracking-tight mb-2">
              100%
            </span>
            <span className="text-xs sm:text-[13px] text-slate-300 font-medium leading-tight max-w-[200px]">
              Intellectual property ownership transferred to client
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-black text-[#00A9CE] tracking-tight mb-2">
              99.9%
            </span>
            <span className="text-xs sm:text-[13px] text-slate-300 font-medium leading-tight max-w-[200px]">
              Targeted cloud architecture uptime SLA
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
              Zero
            </span>
            <span className="text-xs sm:text-[13px] text-slate-300 font-medium leading-tight max-w-[200px]">
              Vendor lock-in: fully sovereign codebases
            </span>
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: OUR VISION AND MISSION ───────────────────────────── */}
      <section className="max-w-[1240px] mx-auto px-6 py-10 sm:py-16">
        <div className="w-full bg-[#22262B] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Graphic: Network Constellation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl bg-white/95 p-6 flex items-center justify-center overflow-hidden shadow-md">
                
                {/* Brand Gradient Backdrop Rectangle */}
                <div className="absolute right-8 w-44 h-32 bg-gradient-to-br from-[#F37021] to-[#00A9CE] rounded-md" />

                {/* Technologist / Professional Silhouette */}
                <div className="relative z-10 flex items-center justify-between w-full h-full">
                  <div className="w-1/3 flex items-center justify-center">
                    <svg viewBox="0 0 100 160" className="w-20 h-auto" fill="none">
                      <circle cx="50" cy="26" r="14" fill="#0F172A" />
                      <path d="M30 46 L70 46 L65 110 L35 110 Z" fill="#1E293B" />
                      <path d="M35 110 L32 155 M65 110 L68 155" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
                      <path d="M68 55 L88 72" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* 3D Network Mesh constellation (Interactive data graph) */}
                  <div className="w-2/3 h-full flex items-center justify-center pl-2">
                    <svg viewBox="0 0 160 120" className="w-full h-auto" fill="none">
                      {/* Interconnected Network Links */}
                      <line x1="20" y1="60" x2="60" y2="30" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
                      <line x1="20" y1="60" x2="70" y2="80" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
                      <line x1="60" y1="30" x2="110" y2="25" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
                      <line x1="60" y1="30" x2="90" y2="60" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
                      <line x1="70" y1="80" x2="90" y2="60" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
                      <line x1="70" y1="80" x2="120" y2="90" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
                      <line x1="90" y1="60" x2="140" y2="55" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
                      <line x1="110" y1="25" x2="140" y2="55" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
                      <line x1="120" y1="90" x2="140" y2="55" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />

                      {/* Network Data Nodes */}
                      <circle cx="20" cy="60" r="4" fill="#FFFFFF" />
                      <circle cx="60" cy="30" r="4" fill="#FFFFFF" />
                      <circle cx="70" cy="80" r="4" fill="#FFFFFF" />
                      <circle cx="90" cy="60" r="5" fill="#FFFFFF" stroke="#F37021" strokeWidth="2" />
                      <circle cx="110" cy="25" r="4" fill="#FFFFFF" />
                      <circle cx="120" cy="90" r="4" fill="#FFFFFF" />
                      <circle cx="140" cy="55" r="5" fill="#FFFFFF" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Text: Vision and Mission */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#F37021] mb-2 block">
                  CORPORATE GUIDELINES
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Our Vision and Mission
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mt-3 mb-6 rounded-full" />
              </div>

              <div className="space-y-6 text-slate-200 text-[15px] sm:text-base leading-[1.8] font-normal">
                <div className="border-l-2 border-[#F37021] pl-4 py-1">
                  <h4 className="text-white font-bold text-lg mb-1">Our Vision</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    To be the preeminent engineering partner and neutral digital architecture that powers the world&apos;s most resilient, agile, and technologically independent automotive enterprises.
                  </p>
                </div>

                <div className="border-l-2 border-[#00A9CE] pl-4 py-1">
                  <h4 className="text-white font-bold text-lg mb-1">Our Mission</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    To dismantle technical friction in the automotive sector by engineering sovereign bespoke software, deterministic AI reasoning engines, and unified data networks that guarantee 100% intellectual property ownership to our clients.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 5: INSTITUTIONAL VALUE & ADVANTAGES ─────────────────── */}
      <section className="max-w-[1240px] mx-auto px-6 py-6 sm:py-10">
        <div className="w-full bg-[#22262B] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Text: Strategic Advantages */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#F37021] mb-2 block">
                  ENTERPRISE DIFFERENTIATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Why Enterprises & Investors Choose Achtrex
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mt-3 mb-6 rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <ShieldCheck className="w-6 h-6 text-[#F37021] mb-2" />
                  <h4 className="font-bold text-white text-sm mb-1">100% IP Sovereignty</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Clients retain complete, unencumbered ownership of all delivered source code, architectures, and proprietary models.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <Cpu className="w-6 h-6 text-[#00A9CE] mb-2" />
                  <h4 className="font-bold text-white text-sm mb-1">Deterministic AI</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Unlike generic probabilistic chat tools, our AI models are trained on real automotive telemetry, schematics, and DTC codes.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <Database className="w-6 h-6 text-[#F37021] mb-2" />
                  <h4 className="font-bold text-white text-sm mb-1">Modern Cloud Native</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Zero legacy technical debt. Built from ground up on modern Next.js, Python microservices, and distributed cloud systems.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <TrendingUp className="w-6 h-6 text-[#00A9CE] mb-2" />
                  <h4 className="font-bold text-white text-sm mb-1">EBITDA Expansion</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Slashing workshop diagnostic triage times and automating customer quoting directly elevates client operational margins.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Graphic: Precision Engineering Coupling & Circuit Schematic */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[460px] aspect-[16/10] rounded-2xl bg-[#14171A] border border-white/10 p-4 flex items-center justify-center overflow-hidden shadow-2xl">
                
                {/* Mechanical Shaft & Telemetry Vector Graphic */}
                <svg viewBox="0 0 400 220" className="w-full h-full" fill="none">
                  {/* Center Metal Shaft Bar */}
                  <rect x="0" y="98" width="400" height="24" fill="#475569" stroke="#334155" />
                  <line x1="0" y1="104" x2="400" y2="104" stroke="#64748B" strokeWidth="1" />
                  <line x1="0" y1="116" x2="400" y2="116" stroke="#1E293B" strokeWidth="1" />

                  {/* Center Mechanical Coupling Collar */}
                  <g transform="translate(150, 60)">
                    {/* Outer Cylindrical Coupling Body */}
                    <rect x="0" y="10" width="100" height="80" rx="6" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                    <rect x="15" y="15" width="70" height="70" rx="3" fill="#0F172A" />

                    {/* Laser Etched / Circuit Traces on Coupling */}
                    <path d="M25 30 L45 30 L55 50 L75 50" stroke="#F37021" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="25" cy="30" r="2" fill="#F37021" />
                    <circle cx="75" cy="50" r="2" fill="#F37021" />

                    <path d="M30 70 L50 70 L60 50 L75 50" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="30" cy="70" r="2" fill="#FB923C" />

                    {/* Locking Collar Ring Screws */}
                    <circle cx="8" cy="50" r="3" fill="#64748B" />
                    <circle cx="92" cy="50" r="3" fill="#64748B" />
                  </g>

                  {/* CAD Tolerance Dimensioning Lines (Orange) */}
                  <g stroke="#F37021" strokeWidth="1" opacity="0.8">
                    <line x1="150" y1="40" x2="250" y2="40" />
                    <line x1="150" y1="35" x2="150" y2="45" />
                    <line x1="250" y1="35" x2="250" y2="45" />
                    <line x1="130" y1="70" x2="130" y2="150" />
                    <line x1="125" y1="70" x2="135" y2="70" />
                    <line x1="125" y1="150" x2="135" y2="150" />
                  </g>

                  {/* Dimension Text Markers */}
                  <text x="185" y="35" fill="#FB923C" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Ø 85.0 mm</text>
                  <text x="80" y="115" fill="#FB923C" fontSize="9" fontFamily="sans-serif" fontWeight="bold">TOL ±0.01</text>
                </svg>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: PARTNER WITH ACHTREX / JOIN OUR GROWTH ───────────── */}
      <section className="max-w-[1240px] mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Multi-Layered Visual */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/3] flex items-center justify-center">
              
              {/* Subtle architectural background grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none" />

              {/* Large Brand Gradient Geometric Backdrop Card */}
              <div className="absolute left-10 top-4 w-52 h-64 bg-gradient-to-br from-[#F37021] to-[#00A9CE] rounded-2xl -rotate-2 shadow-sm" />

              {/* Team Professional Silhouette Card */}
              <div className="absolute left-4 bottom-2 w-52 h-68 rounded-2xl bg-white border border-slate-200/90 shadow-xl overflow-hidden z-10 flex items-end justify-center">
                <svg viewBox="0 0 160 200" className="w-44 h-auto" fill="none">
                  <circle cx="80" cy="50" r="22" fill="#0F172A" />
                  <path d="M48 85 C48 70, 112 70, 112 85 L120 200 L40 200 Z" fill="#1E293B" />
                  <rect x="68" y="110" width="24" height="60" rx="3" fill="#FFFFFF" />
                </svg>
              </div>

              {/* Rocket Launch Card (Front right layer) */}
              <div className="absolute right-2 bottom-0 w-60 h-52 rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-4 z-20 flex flex-col items-center justify-center">
                <div className="w-full flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-12 bg-gradient-to-b from-[#F37021] to-[#00A9CE] rounded-full" />
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                    High Velocity Growth
                  </span>
                </div>

                {/* Ascending Space Rocket Illustration */}
                <svg viewBox="0 0 160 110" className="w-full h-auto drop-shadow-sm" fill="none">
                  {/* Launchpad Base */}
                  <rect x="40" y="80" width="80" height="12" rx="2" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
                  <line x1="50" y1="92" x2="35" y2="105" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="110" y1="92" x2="125" y2="105" stroke="#94A3B8" strokeWidth="2" />

                  {/* Propulsion Cloud */}
                  <ellipse cx="80" cy="80" rx="22" ry="10" fill="#E2E8F0" />
                  <circle cx="65" cy="78" r="8" fill="#CBD5E1" />
                  <circle cx="95" cy="78" r="8" fill="#CBD5E1" />

                  {/* Rocket Body */}
                  <g transform="translate(68, 15) rotate(25)">
                    {/* Rocket Fuselage */}
                    <path d="M12 0 C16 10, 24 25, 24 50 L0 50 C0 25, 8 10, 12 0 Z" fill="#1E293B" />
                    {/* Port Window */}
                    <circle cx="12" cy="25" r="5" fill="#00A9CE" stroke="#FFFFFF" strokeWidth="1.5" />
                    {/* Rocket Fins */}
                    <path d="M0 40 L-8 55 L0 50 Z" fill="#F37021" />
                    <path d="M24 40 L32 55 L24 50 Z" fill="#F37021" />
                    {/* Flame Trail */}
                    <path d="M6 50 L12 68 L18 50 Z" fill="#FB923C" />
                  </g>

                  {/* Ascending Orbit Trajectory */}
                  <path d="M95 30 Q120 15 140 30" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                  <polygon points="144,28 140,32 138,26" fill="#F37021" />
                </svg>
              </div>

            </div>
          </div>

          {/* Right Text: Join our growth */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-black uppercase tracking-widest text-[#F37021] mb-2 block">
              COLLABORATION & TALENT
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Join Our Trajectory
            </h3>

            {/* Brand Gradient Underline */}
            <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mt-3 mb-6 rounded-full" />

            <p className="text-slate-700 text-[15px] sm:text-base leading-[1.8] font-normal mb-8 max-w-lg">
              Whether you are an automotive enterprise seeking custom software builds, an investor exploring strategic mobility opportunities, or an exceptional engineer eager to solve hard technical problems, we welcome your partnership.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="btn-navbar-cta"
              >
                <span className="btn-navbar-cta-inner">
                  <span>Initiate Partnership</span>
                  <ArrowRight className="w-4 h-4 text-[#00A9CE]" />
                </span>
              </Link>
              <Link
                href="/life-at-achtrex"
                className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors duration-200 flex items-center gap-2 border border-slate-200"
              >
                <span>Explore Careers</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
