"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const offerings = [
  {
    id: 'software',
    title: 'Automotive Software Builds',
    tabTitle: 'Software Builds',
    subtitle: 'Bespoke automotive engineering platforms built with zero vendor lock-in',
    description: 'We architect enterprise-grade software platforms engineered specifically for dealership groups and mobility enterprises. From custom DMS portals and sales & inventory engines to connected fleet telematics and workshop scheduling, our systems are delivered with 100% intellectual property ownership.',
    capabilities: ['Bespoke Dealership DMS', 'Sales & Inventory Clouds', 'Fleet Telematics IoT', 'Workshop Bay Scheduling', '100% IP Ownership'],
    metric: '100% Client IP Ownership',
    metricLabel: 'Architecture Autonomy',
    buttonText: 'Explore Software Builds',
    href: '/contact-us',
    image: '/images/solutions/auto_software_builds.jpg',
    accentColor: '#0263c6'
  },
  {
    id: 'ai',
    title: 'Cognitive AI Solutions',
    tabTitle: 'Cognitive AI',
    subtitle: 'Automotive-trained neural models and autonomous diagnostic workflows',
    description: 'Transform traditional dealership and service operations into self-optimizing cognitive systems. Our AAIA intelligence engine delivers domain-specialized diagnostic reasoning decoders trained on OBD-II/DTC fault trees, 24/7 conversational showroom sales agents, automated service bay triage, and computer-vision damage appraisal.',
    capabilities: ['AAIA Diagnostic Reasoning', '24/7 Virtual Showroom AI', 'Service Bay Triage', 'Vision Damage Inspection', 'Automotive OCR'],
    metric: 'Sub-60s Response Velocity',
    metricLabel: 'Autonomous Execution',
    buttonText: 'Discover AI Solutions',
    href: '/contact-us',
    image: '/images/solutions/auto_cognitive_ai.jpg',
    accentColor: '#76bc1d'
  },
  {
    id: 'consultation',
    title: 'Automotive Consultation',
    tabTitle: 'Automotive Consultation',
    subtitle: 'Advising businesses, manufacturers, dealerships, and individuals across the automotive chain',
    description: 'Strategic advisory covering vehicle technologies, automotive data pipelines, repair processes, diagnostics, operations, and business strategy. Our seasoned practitioners de-risk digital migrations, optimize workshop throughput, and architect future-proof operational models.',
    capabilities: ['OEM & Dealer Strategy', 'Workshop Process Audits', 'Diagnostic & Data Advisory', 'DMS Migration Roadmaps', 'Aftermarket Supply Chain'],
    metric: 'Zero-Downtime Transition',
    metricLabel: 'Migration Guarantee',
    buttonText: 'Consult With Our Specialists',
    href: '/contact-us',
    image: '/images/solutions/auto_consultation.jpg',
    accentColor: '#f37021'
  }
];

export const OfferingsTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % offerings.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeData = offerings[activeTab];

  return (
    <section 
      className="w-full py-20 lg:py-24 bg-[#fafbfc] font-sans overflow-hidden border-y border-slate-200/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Enterprise Automotive Solutions &amp;{' '}
            <span className="text-gradient">Strategic Advisory</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
            We empower dealerships, OEMs, and mobility enterprises to scale operations through bespoke automotive software builds, domain-trained cognitive AI agents, and strategic automotive consultation.
          </p>
        </div>

        {/* Modern Segmented Tab Bar (Clean & Symbol-Free) */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-200/70 p-1.5 rounded-2xl border border-slate-300/60 backdrop-blur-md">
            {offerings.map((offering, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={offering.id}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "relative py-3.5 px-4 rounded-xl text-center transition-all duration-300 outline-none cursor-pointer select-none",
                    isActive ? "text-slate-900 shadow-md bg-white font-black" : "text-slate-600 hover:text-slate-900 font-bold hover:bg-white/40"
                  )}
                >
                  <span className="text-xs sm:text-sm tracking-tight whitespace-nowrap block">
                    {offering.tabTitle}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r from-[#F37021] to-[#00A9CE]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Content Showcase Card */}
        <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-8 sm:p-12 lg:p-14">
          
          {/* Subtle Ambient Radial Highlight in Active Platform Color */}
          <div 
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[100px] opacity-20 pointer-events-none transition-colors duration-700"
            style={{ backgroundColor: activeData.accentColor }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
            >
              
              {/* Left Column: Narrative, Capabilities & Metrics (Span 7) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                    {activeData.title}
                  </h3>
                  <p 
                    className="text-sm sm:text-base font-bold mt-1.5"
                    style={{ color: activeData.accentColor }}
                  >
                    {activeData.subtitle}
                  </p>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  {activeData.description}
                </p>

                {/* Capabilities Matrix (Clean Text Tags, Symbol-Free) */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
                    Core Capabilities
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeData.capabilities.map((cap, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold shadow-2xs"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Performance Metric Row */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <div className="text-2xl font-black text-slate-900 tracking-tight">
                      {activeData.metric}
                    </div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {activeData.metricLabel}
                    </div>
                  </div>

                  <Link 
                    href={activeData.href}
                    className="btn-navbar-cta shrink-0 text-center"
                  >
                    <span className="btn-navbar-cta-inner !py-3.5 !px-8 text-xs sm:text-sm font-bold tracking-wide">
                      <span>{activeData.buttonText}</span>
                    </span>
                  </Link>
                </div>

              </div>

              {/* Right Column: Clean Hardware Asset Without Box or Borders (Span 5) */}
              <div className="lg:col-span-5 relative w-full aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[420px] flex items-center justify-center">
                <div className="relative w-full h-full max-h-[380px] flex items-center justify-center">
                  <Image
                    src={activeData.image}
                    alt={activeData.title}
                    fill
                    className="object-contain drop-shadow-xl"
                    priority
                    unoptimized
                  />
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
