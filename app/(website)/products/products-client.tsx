'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Database, Bot, Code2, LayoutDashboard, ArrowRight, CheckCircle2, Zap, Shield, Sparkles, Cpu, Layers } from 'lucide-react';

const products = [
  {
    id: 'automotive',
    badge: 'API & Intelligence Infrastructure',
    label: 'Automotive Data & APIs',
    brand: 'AutomotiveDataset.com',
    description: 'Enterprise VIN decoding, full build-sheet specs, live auction pricing, history reports, and maintenance telematics via ultra-fast REST & GraphQL endpoints.',
    href: '/products/automotive',
    icon: Database,
    accentColor: '#00a9ce',
    accentBg: 'bg-[#00a9ce]/10',
    image: '/projects/automotive_hero_new.png',
    metrics: [
      { value: '2.5M+', label: 'Global Vehicle Records' },
      { value: '< 45ms', label: 'API Response Time' },
      { value: '22+', label: 'Specialized Endpoints' }
    ],
    features: ['17-Digit VIN Build Sheets', 'Real-Time Auction & Valuation', 'OEM Maintenance Schedules', 'High-Res Vehicle Studio Media']
  },
  {
    id: 'sales-inventory',
    badge: 'Dealership Operations Engine',
    label: 'Sales & Inventory Management',
    brand: 'Achtrex SIM Suite',
    description: 'Cloud-native multi-rooftop inventory orchestration, automated marketplace syndication, AI vehicle appraisal, and high-converting lead management.',
    href: '/products/sales-inventory',
    icon: LayoutDashboard,
    accentColor: '#76bc1d',
    accentBg: 'bg-[#76bc1d]/10',
    image: '/images/sales_inventory.png',
    metrics: [
      { value: '42%', label: 'Faster Stock Turn Rate' },
      { value: '< 60s', label: 'Lead Auto-Routing' },
      { value: '100%', label: 'Multi-Rooftop Sync' }
    ],
    features: ['Automated Inventory Syndication', 'Smart Lead Distribution & CRM', 'AI Dynamic Price Optimization', 'Multi-Store Appraisal Sharing']
  },
  {
    id: 'enterprise-platforms',
    badge: 'Bespoke Engineering & Cloud',
    label: 'Custom Software Development',
    brand: 'Achtrex Core Architecture',
    description: 'Tailored enterprise software architecture, legacy DMS/ERP modernization, real-time IoT telematics pipelines, and automotive fintech payment rails.',
    href: '/products/enterprise-platforms',
    icon: Code2,
    accentColor: '#001a22',
    accentBg: 'bg-[#001a22]/10',
    image: '/images/real_enterprise_header.png',
    metrics: [
      { value: '99.99%', label: 'Uptime SLA' },
      { value: 'Zero-Trust', label: 'SOC2 Compliant' },
      { value: 'Full-Cycle', label: 'Discovery to 24/7 Ops' }
    ],
    features: ['Microservices & Event Streaming', 'CAN-Bus / OBD-II Telematics', 'Legacy AS/400 Cloud Migration', 'Automotive FinTech & Billing']
  },
  {
    id: 'lumi',
    badge: 'Autonomous Cognitive AI',
    label: 'AI Solutions & Reasoning',
    brand: 'AAIA Intelligence Model',
    description: 'Autonomous automotive AI engine trained on millions of service records to deliver instant diagnostic reasoning, predictive fleet maintenance, and conversational support.',
    href: '/products/lumi',
    icon: Bot,
    accentColor: '#00a9ce',
    accentBg: 'bg-[#00a9ce]/10',
    image: '/projects/aaia_ui_v2.png',
    metrics: [
      { value: '< 120ms', label: 'Inference Latency' },
      { value: '99.4%', label: 'Diagnostic Accuracy' },
      { value: '15M+', label: 'Trained Repair Cases' }
    ],
    features: ['Multi-Modal DTC Diagnostics', 'Predictive Fleet Component Alerts', 'Autonomous Service Booking', 'Instant Warranty Claim Triage']
  }
];

export default function ProductsClient() {
  return (
    <div className="w-full min-h-screen bg-[#f8fafc] pt-32 pb-24 px-6 text-slate-900">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Top Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00a9ce]/10 border border-[#00a9ce]/20 text-[#00a9ce] text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles size={14} />
            Enterprise Solutions Ecosystem
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            Architected for the Next Era of Mobility
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            Discover our full stack of automotive software products, high-velocity data pipelines, and cognitive AI platforms powering dealerships, fleets, and global automotive enterprises.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {products.map((prod, idx) => {
            const Icon = prod.icon;
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Preview Header */}
                  <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden border-b border-slate-100">
                    <Image
                      src={prod.image}
                      alt={prod.label}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                        {prod.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                      <div>
                        <div className="text-xs font-medium text-cyan-300 mb-0.5">{prod.brand}</div>
                        <h3 className="text-2xl font-bold">{prod.label}</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-[#00a9ce] transition-colors">
                        <Icon size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 space-y-6">
                    <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                      {prod.description}
                    </p>

                    {/* Performance Metrics Row */}
                    <div className="grid grid-cols-3 gap-3 py-4 border-y border-slate-100 bg-slate-50/70 rounded-xl px-4">
                      {prod.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <div className="text-lg md:text-xl font-extrabold text-slate-900">{metric.value}</div>
                          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-tight">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {prod.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 size={15} className="text-[#00a9ce] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-8 pb-8 pt-2">
                  <Link
                    href={prod.href}
                    className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-[#00a9ce] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-sm group/btn"
                  >
                    <span>Explore {prod.label}</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enterprise Integration Callout */}
        <div className="bg-gradient-to-br from-[#001a22] to-[#081622] rounded-3xl p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-[#00a9ce]/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
              <Zap size={14} /> Custom Deployments & Dedicated SLAs
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Need a bespoke integration or tailored data pipeline?
            </h2>
            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed font-normal">
              Our core engineering team collaborates directly with enterprise automotive platforms, OEMs, and dealer networks to build custom microservices, white-label portals, and low-latency API architectures.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="bg-logo-gradient text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all text-sm uppercase tracking-wider"
              >
                Schedule Engineering Consultation
              </Link>
              <Link
                href="/portal"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/20 transition-colors text-sm uppercase tracking-wider flex items-center gap-2"
              >
                Access Member Portal
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
