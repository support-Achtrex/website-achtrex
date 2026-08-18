"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const offerings = [
  {
    id: 'software',
    title: 'Custom Software Development',
    tabTitle: 'Custom Software',
    subtitle: 'Bespoke, scalable platforms engineered for operational superiority',
    description: 'We architect enterprise-grade software platforms engineered specifically for dealerships, automotive franchises, and digital mobility enterprises. From multi-rooftop dealer portals and high-load auto parts marketplaces to complex fleet ERPs, our systems are built from the ground up to ensure maximum reliability, zero third-party vendor lock-in, and full intellectual property ownership.',
    capabilities: ['Bespoke Portals', 'Multi-Store DMS Sync', 'Marketplace Platforms', 'Automotive ERPs', 'Zero Lock-in'],
    metric: '100% Client IP Ownership',
    metricLabel: 'Architecture Autonomy',
    buttonText: 'Explore Custom Software',
    href: '/products/enterprise-platforms',
    image: '/images/slide1_foreground.png',
    accentColor: '#00a9ce'
  },
  {
    id: 'data',
    title: 'Automotive Data & APIs',
    tabTitle: 'Data & APIs',
    subtitle: 'High-velocity vehicle intelligence and real-time market datasets',
    description: 'Power your applications with the industry’s most comprehensive vehicle data engine. We provide sub-50ms REST and GraphQL APIs for instant VIN decoding, granular OEM build specifications, live retail valuations, fitment databases, and complete vehicle lifecycle histories querying tens of millions of records.',
    capabilities: ['Instant VIN Decoding', 'OEM Fitment Data', 'Live Market Valuations', 'Sub-50ms Latency', 'GraphQL & REST'],
    metric: '20M+ Vehicle Records',
    metricLabel: 'Live Indexed Dataset',
    buttonText: 'Explore Data APIs',
    href: '/products/automotive',
    image: '/images/slide2_foreground.png',
    accentColor: '#0263c6'
  },
  {
    id: 'ai',
    title: 'Cognitive AI Solutions',
    tabTitle: 'AI Solutions',
    subtitle: 'Automotive-trained intelligence models and autonomous workflows',
    description: 'Transform traditional manual processes into self-optimizing cognitive systems. Our AAIA intelligence engine delivers domain-specialized customer engagement assistants, automated diagnostic decoders, predictive pricing algorithms, and autonomous multi-agent business logic trained exclusively on automotive operations.',
    capabilities: ['AAIA Intelligence', 'Autonomous Lead Routing', 'Predictive Pricing', 'Neural NLP Workflows', '24/7 Agent Ops'],
    metric: 'Sub-60s Response Velocity',
    metricLabel: 'Autonomous Execution',
    buttonText: 'Discover AI Solutions',
    href: '/products/lumi',
    image: '/images/slide3_foreground.png',
    accentColor: '#76bc1d'
  },
  {
    id: 'sales-inventory',
    title: 'Sales & Inventory Management',
    tabTitle: 'Sales & Inventory',
    subtitle: 'Unified cloud infrastructure for modern franchised & independent dealer groups',
    description: 'Eliminate operational friction and aged inventory lot lag. Our sales and inventory platform synchronizes directly with your DMS, powering instant multi-channel syndication, algorithmic age-on-lot pricing, automated lead routing, and executive turn-rate analytics across standalone and multi-state dealership networks.',
    capabilities: ['Bi-Directional DMS Sync', 'Multi-Rooftop Tracking', 'Marketplace Syndication', 'Dynamic Price Velocity', 'Lead Auto-Routing'],
    metric: '3.4x Faster Inventory Turn',
    metricLabel: 'Dealership Efficiency',
    buttonText: 'View Sales & Inventory Solutions',
    href: '/products/sales-inventory',
    image: '/images/sim_gadget_group.png',
    accentColor: '#00a9ce'
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
            <span className="text-gradient">Data Intelligence Platforms</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
            We empower dealerships, OEMs, and mobility enterprises to scale operations through custom software engineering, high-precision vehicle data APIs, cognitive AI agents, and unified sales management systems.
          </p>
        </div>

        {/* Modern Segmented Tab Bar (Clean & Symbol-Free) */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-200/70 p-1.5 rounded-2xl border border-slate-300/60 backdrop-blur-md">
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
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r from-[#00a9ce] to-[#76bc1d]"
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
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-slate-900 hover:bg-[#00a9ce] text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 shrink-0 text-center"
                  >
                    {activeData.buttonText}
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
