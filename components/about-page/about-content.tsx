'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Linkedin, Twitter, Mail } from 'lucide-react';

const timelineData = [
  {
    id: '2018-2020',
    tabLabel: '2018 to 2020',
    period: '1994 TO 2004',
    periodLabel: '2018 TO 2020',
    title: 'Foundation and early digital innovation',
    points: [
      {
        year: '2018',
        text: 'Founding of Achtrex to engineer standardized automotive data pipelines and enterprise API infrastructure for the emerging mobility economy.'
      },
      {
        year: '2019',
        text: 'First deployment of the Achtrex Global VIN Decoding Engine, indexing over 20M+ vehicle specifications across North American, European, and Asian platforms.'
      },
      {
        year: '2020',
        text: 'Launch of the Achtrex Enterprise Automotive Data Engine, providing instantaneous cloud API access to factory build configurations, parts catalogs, and market valuation curves.'
      }
    ]
  },
  {
    id: '2021-2023',
    tabLabel: '2021 to 2023',
    periodLabel: '2021 TO 2023',
    title: 'Expansion into dealer operations and cloud syndication',
    points: [
      {
        year: '2021',
        text: 'Deployment of the Achtrex Sales & Inventory Cloud, enabling bi-directional real-time DMS synchronization across major multi-rooftop dealer networks.'
      },
      {
        year: '2022',
        text: 'Expansion into 40+ global classified syndication channels, automating multi-channel vehicle broadcast with algorithmic lot velocity pricing.'
      },
      {
        year: '2023',
        text: 'Establishment of neutral aftermarket data exchange standards, connecting regional parts distributors with independent workshops and fleet operators.'
      }
    ]
  },
  {
    id: '2024-2025',
    tabLabel: '2024 to 2025',
    periodLabel: '2024 TO 2025',
    title: 'Autonomous AI reasoning and diagnostic triage',
    points: [
      {
        year: '2024',
        text: 'Introduction of AAIA (Achtrex Automotive Intelligence Architecture) — domain-specialized neural models for OBD-II diagnostic interpretation and predictive service triage.'
      },
      {
        year: '2024',
        text: 'Deployment of autonomous 24/7 AI conversational sales agents and computer-vision OCR pipelines extracting repair orders and title paperwork at 98%+ accuracy.'
      },
      {
        year: '2025',
        text: 'Integration of predictive regional demand forecasting models, synthesizing auction transactions, macroeconomic indicators, and search trend telemetry.'
      }
    ]
  },
  {
    id: '2026-beyond',
    tabLabel: '2026 & Beyond',
    periodLabel: '2026 & BEYOND',
    title: 'Connected mobility and neutral aftermarket infrastructure',
    points: [
      {
        year: '2026',
        text: 'Scaling real-time EV battery telemetry, predictive state-of-health degradation modeling, and charging network interoperability across international markets.'
      },
      {
        year: 'Ongoing',
        text: 'Strengthening the neutral digital backbone of the independent automotive aftermarket to ensure all operators remain competitive, agile, and sovereign over their data.'
      }
    ]
  }
];

const teamMembers = [
  {
    name: 'Achim Godwin Tetteh',
    role: 'Founder and System Architect',
    image: '/team/achim_real.jpg',
    bio: 'Pioneering automotive data architecture, distributed cloud systems, and domain-tuned AI models that power enterprise mobility platforms.'
  },
  {
    name: 'Emmanuella Yeboah-Appiah',
    role: 'Administrator',
    image: '/team/emmanuella_v2.jpg',
    bio: 'Overseeing executive administration, corporate governance, organizational workflows, and operations for Achtrex.'
  },
  {
    name: 'Rashid Ahmed',
    role: 'Lead Backend & Data Architect',
    image: '/team/rashid.png',
    bio: 'Architecting high-throughput vehicle telemetry pipelines, normalized VIN schemas, and resilient multi-region cloud microservices.'
  },
  {
    name: 'Kelvin Davis',
    role: 'Senior Software Engineer',
    image: '/team/kelvin-davis.png',
    bio: 'Engineering scalable dealer management interfaces, high-performance API integrations, and robust automated test suites.'
  },
  {
    name: 'Dede Davis',
    role: 'Lead DevOps & Infrastructure Engineer',
    image: '/team/dede_v2.jpg',
    bio: 'Managing 99.99% SLA cloud deployments, zero-downtime CI/CD pipelines, container orchestration, and bank-grade security protocols.'
  },
  {
    name: 'Kojo Thompson',
    role: 'Head of Digital Growth & SEO',
    image: '/team/kojo_real.png',
    bio: 'Accelerating digital footprint, content architecture, and organic market presence across search engines and global automotive hubs.'
  },
  {
    name: 'Junior Achim',
    role: 'Business Analyst & Quality Assurance',
    image: '/team/junior_real.jpg',
    bio: 'Aligning business strategies with technical deliverables, regression testing, and data integrity verification across customer deployments.'
  }
];

export const AboutContent = () => {
  const [activeTimelineId, setActiveTimelineId] = useState(timelineData[0].id);

  const currentTimeline = timelineData.find(t => t.id === activeTimelineId) || timelineData[0];

  return (
    <div className="w-full bg-[#FFFFFF] text-slate-900 font-sans selection:bg-[#F37021] selection:text-white pb-24">

      {/* ─── SECTION 1: OUR STORY / ABOUT ACHTREX ───────────────────────── */}
      <section className="max-w-[1240px] mx-auto px-6 pt-4 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
              OUR STORY
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
              About Achtrex
            </h1>

            {/* Signature Brand Gradient Underline */}
            <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mt-3 mb-6 rounded-full" />

            <div className="space-y-4 text-slate-800 text-[15px] sm:text-[16px] leading-[1.8] font-normal max-w-xl">
              <p>
                From the very beginning, our focus has been simple: setting the data standard for the industry and solving what no one can solve alone. Achtrex has grown alongside the independent automotive aftermarket, supporting how it evolves, connects, and operates across geographies.
              </p>
              <p>
                Headquartered in Dubai, UAE, Achtrex provides scalable automotive data APIs, enterprise VIN intelligence, and custom software solutions designed for the next generation of connected mobility, retail dealerships, and parts distribution networks worldwide.
              </p>
            </div>
          </div>

          {/* Right Visual Graphic (Illustration matching TecAlliance graphic) */}
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

      {/* ─── SECTION 2: HOW IT STARTED / OUR JOURNEY IN THE AFTERMARKET ─── */}
      <section className="max-w-[1240px] mx-auto px-6 pb-20 sm:pb-24">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2 block">
            HOW IT STARTED
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight">
            Our journey in the aftermarket
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mt-3 mb-5 rounded-full" />

          <p className="text-slate-800 text-[15px] sm:text-base leading-[1.8] font-normal max-w-3xl">
            Since our founding, Achtrex has supported the development of shared standards and data that enable the independent aftermarket to operate across systems, companies, and geographies.
          </p>
        </div>

        {/* Milestone Card with Interactive Tabs (Image 2 style) */}
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">
          
          {/* Top Tab Bar */}
          <div className="border-b border-slate-200/80 px-6 sm:px-10 pt-6 flex items-center gap-6 sm:gap-10 overflow-x-auto scrollbar-none">
            {timelineData.map((item) => {
              const isActive = item.id === activeTimelineId;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTimelineId(item.id)}
                  className={`pb-4 text-xs sm:text-[13px] font-bold transition-all relative whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span>{item.tabLabel}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="timelineUnderline"
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
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                  {currentTimeline.periodLabel}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {currentTimeline.title}
                </h3>

                <div className="space-y-4 pt-2">
                  {currentTimeline.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F37021] to-[#00A9CE] shrink-0 mt-2" />
                      <p>
                        <strong className="text-slate-900 font-bold">{point.year}:</strong> {point.text.replace(`${point.year}: `, '')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Sketch Illustration Graphic (Image 2 style) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-2xl bg-[#F8FAFC] border border-slate-200/70 p-6 flex items-center justify-center overflow-hidden shadow-inner">
                  
                  {/* Blueprint Grid Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

                  {/* Brand Gradient Vertical Accent Bar */}
                  <div className="absolute w-6 h-48 bg-gradient-to-b from-[#F37021] to-[#00A9CE] rounded-sm -rotate-3 opacity-90" />

                  {/* Monochrome Technician / Engineer Silhouette */}
                  <svg viewBox="0 0 200 240" className="relative z-10 w-44 h-auto drop-shadow-md" fill="none">
                    {/* Head with Hard Hat */}
                    <ellipse cx="100" cy="45" rx="14" ry="12" fill="#1E293B" />
                    <path d="M82 45 C82 30, 118 30, 118 45 Z" fill="#0F172A" />
                    <rect x="80" y="44" width="40" height="4" rx="2" fill="#F37021" />

                    {/* Torso & Uniform in working posture */}
                    <path d="M85 60 L115 60 L125 120 L75 120 Z" fill="#1E293B" />
                    <path d="M98 60 L98 120" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 2" />

                    {/* Arms holding wrench / inspection diagnostic device */}
                    <path d="M85 65 L60 100 L75 125" stroke="#1E293B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M115 65 L135 95 L120 120" stroke="#1E293B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Inspection tool / tablet with glowing orange screen */}
                    <rect x="70" y="115" width="40" height="26" rx="2" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
                    <rect x="74" y="119" width="32" height="18" rx="1" fill="#FB923C" />

                    {/* Legs / Safety Boots */}
                    <path d="M85 120 L80 185 L70 215" stroke="#1E293B" strokeWidth="10" strokeLinecap="round" />
                    <path d="M115 120 L120 185 L130 215" stroke="#1E293B" strokeWidth="10" strokeLinecap="round" />
                    <ellipse cx="65" cy="218" rx="12" ry="6" fill="#0F172A" />
                    <ellipse cx="135" cy="218" rx="12" ry="6" fill="#0F172A" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: DARK STATS STRIP (Bottom of Image 2) ─────────────── */}
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

        <div className="max-w-[1240px] mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
              15+
            </span>
            <span className="text-xs sm:text-[13px] text-slate-300 font-medium leading-tight">
              Years of leadership experience
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
              50M+
            </span>
            <span className="text-xs sm:text-[13px] text-slate-300 font-medium leading-tight">
              Vehicle records indexed
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
              30+
            </span>
            <span className="text-xs sm:text-[13px] text-slate-300 font-medium leading-tight">
              Global partner networks
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
              40+
            </span>
            <span className="text-xs sm:text-[13px] text-slate-300 font-medium leading-tight">
              Countries covered
            </span>
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: OUR VISION AND MISSION (Image 3 Top) ─────────────── */}
      <section className="max-w-[1240px] mx-auto px-6 py-10 sm:py-16">
        <div className="w-full bg-[#22262B] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Graphic: Network Constellation with Orange Box (Image 3) */}
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
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Our vision and mission
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mt-3 mb-6 rounded-full" />
              </div>

              <div className="space-y-4 text-slate-200 text-[15px] sm:text-base leading-[1.8] font-normal">
                <p>
                  Our vision is to empower the automotive aftermarket to shape a connected data ecosystem by safeguarding independence through trusted standards and a shared data foundation. We aim to drive sustainable global business growth.
                </p>
                <p>
                  Our mission is to unlock growth and ensure the competitiveness of the independent aftermarket by establishing neutral standards and enabling market connectivity. This builds on trusted data elements, certified VIN intelligence, and core enabling functions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 5: OUR ROLE TODAY (Image 4 Top) ─────────────────────── */}
      <section className="max-w-[1240px] mx-auto px-6 py-6 sm:py-10">
        <div className="w-full bg-[#22262B] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Text: Our Role Today */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Our role today
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mt-3 mb-6 rounded-full" />
              </div>

              <div className="space-y-4 text-slate-200 text-[15px] sm:text-base leading-[1.8] font-normal">
                <p>
                  Today, Achtrex acts as the neutral backbone for collaboration across the independent automotive aftermarket.
                </p>
                <p className="font-semibold text-white">
                  We do not compete in the market. We support it.
                </p>
                <p>
                  Our focus is on creating the conditions to allow companies to connect, collaborate, and operate efficiently while remaining completely independent.
                </p>
              </div>
            </div>

            {/* Right Graphic: Precision Engineering Coupling & Circuit Schematic */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[460px] aspect-[16/10] rounded-2xl bg-[#14171A] border border-white/10 p-4 flex items-center justify-center overflow-hidden shadow-2xl">
                
                {/* Mechanical Shaft & Telemetry Vector Graphic (matching Image 4) */}
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

      {/* ─── SECTION 6: OUR MANAGEMENT (Image 3 Bottom) ──────────────────── */}
      <section className="max-w-[1240px] mx-auto px-6 py-16 sm:py-20 text-center">
        
        {/* Centered Heading */}
        <div className="max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our management
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mx-auto mt-3 mb-6 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Achtrex is led by a team with deep experience in automotive data, software architecture, and the independent aftermarket. They are united by a shared responsibility: supporting the long-term success of the industry.
          </p>
        </div>

        {/* Clean Management Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-left">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#F37021]/50 transition-all overflow-hidden flex flex-col"
            >
              {/* Photo Frame */}
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Bio & Details */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#F37021] transition-colors leading-tight mb-1">
                  {member.name}
                </h3>
                <span className="text-xs font-bold text-[#F37021] uppercase tracking-wider mb-3">
                  {member.role}
                </span>
                <p className="text-xs text-slate-500 font-normal leading-relaxed flex-1">
                  {member.bio}
                </p>

                <div className="pt-4 mt-auto border-t border-slate-100 flex items-center gap-3 text-slate-400">
                  <a href="#" className="hover:text-[#00A9CE] transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="hover:text-slate-900 transition-colors" aria-label="Twitter">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={`mailto:info@achtrex.com`} className="hover:text-[#F37021] transition-colors" aria-label="Email">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* ─── SECTION 7: JOIN THE TEAM (Image 4 Bottom) ───────────────────── */}
      <section className="max-w-[1240px] mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Multi-Layered Visual: Team Professional + Rocket Launch Illustration (Image 4) */}
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

          {/* Right Text: Join the team */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Join the team
            </h3>

            {/* Brand Gradient Underline */}
            <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mt-3 mb-6 rounded-full" />

            <p className="text-slate-800 text-[15px] sm:text-base leading-[1.8] font-normal mb-8 max-w-lg">
              Passionate about data, IT, and the automotive industry? Explore our open positions and join Achtrex as we shape the future of the automotive aftermarket.
            </p>

            <div>
              <Link
                href="/life-at-achtrex"
                className="btn-navbar-cta"
              >
                <span className="btn-navbar-cta-inner">
                  <span>Explore careers</span>
                  <ArrowRight className="w-4 h-4 text-[#00A9CE]" />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
