'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Database, LayoutDashboard, Users, Workflow, BarChart3, 
  MapPin, Zap, Layers, CheckCircle2, Shield, Sparkles, Sliders, 
  TrendingUp, RefreshCw, Car, ArrowUpRight, DollarSign, Clock, Smartphone
} from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import { InnerPageHeader } from "@/components/inner-page-header";
import ProjectHandlingSection from '@/components/products/project-handling';

export default function SalesInventoryClient() {
  const [vehiclesOnLot, setVehiclesOnLot] = useState<number>(150);
  const [avgGrossPerUnit, setAvgGrossPerUnit] = useState<number>(2400);

  // ROI estimation calculations
  const projectedTurnGain = Math.round(vehiclesOnLot * 0.18);
  const extraAnnualGross = Math.round(projectedTurnGain * avgGrossPerUnit * 12);

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-slate-900 selection:bg-[#00a9ce]/20 selection:text-slate-900 pb-20 font-sans">
      {/* 1. Header */}
      <InnerPageHeader 
        title="Sales & Inventory Management" 
        subtitle="Empower your dealership or dealer group with unified multi-rooftop inventory orchestration, automated marketplace syndication, AI vehicle pricing, and high-converting lead routing." 
        theme="sales"
      />

      {/* 2. Main Content Grid */}
      <section className="py-12 lg:py-24 px-6">
        <div className="max-w-[1280px] mx-auto space-y-20">
          
          {/* Operations Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="p-4 border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-black text-[#001a22]">42%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Faster Inventory Turn</div>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-black text-[#76bc1d]">&lt; 60s</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Lead Auto-Routing</div>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-black text-[#00a9ce]">+18%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Front-End Gross Growth</div>
            </div>
            <div className="p-4">
              <div className="text-3xl lg:text-4xl font-black text-[#001a22]">100%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Multi-Rooftop Sync</div>
            </div>
          </div>

          {/* Interactive Live Dealer Operations Mockup */}
          <div className="bg-[#081622] rounded-3xl p-6 lg:p-10 border border-slate-700 shadow-2xl text-white">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl lg:text-3xl font-extrabold">Live Multi-Store Inventory & Lead Control</h2>
                <p className="text-slate-400 text-sm mt-1 font-medium">Real-time status across DMS sync, syndication feeds, and customer leads.</p>
              </div>
            </div>

            {/* Dashboard Visual Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#0d2235] p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
                  <span>Active Live Stock</span>
                  <Car size={16} className="text-[#00a9ce]" />
                </div>
                <div className="text-3xl font-black text-white">482 Units</div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between"><span>New Inventory:</span><strong className="text-white">214 units</strong></div>
                  <div className="flex justify-between"><span>Pre-Owned Certified:</span><strong className="text-white">268 units</strong></div>
                  <div className="flex justify-between"><span>Avg Days on Lot:</span><strong className="text-emerald-400">22.4 Days</strong></div>
                </div>
              </div>

              <div className="bg-[#0d2235] p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
                  <span>Lead Pipeline Funnel</span>
                  <Users size={16} className="text-[#76bc1d]" />
                </div>
                <div className="text-3xl font-black text-white">128 Today</div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between"><span>Inbound Test Drives:</span><strong className="text-white">34 confirmed</strong></div>
                  <div className="flex justify-between"><span>Digital Trade-In Appraisals:</span><strong className="text-white">41 submitted</strong></div>
                  <div className="flex justify-between"><span>Avg Rep Response Time:</span><strong className="text-[#76bc1d]">48 seconds</strong></div>
                </div>
              </div>

              <div className="bg-[#0d2235] p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
                  <span>Syndication Channels</span>
                  <Workflow size={16} className="text-cyan-400" />
                </div>
                <div className="text-3xl font-black text-white">9 Active Feeds</div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between"><span>AutoTrader & Cars.com:</span><strong className="text-emerald-400">Synced (100%)</strong></div>
                  <div className="flex justify-between"><span>CarGurus & Edmunds:</span><strong className="text-emerald-400">Synced (100%)</strong></div>
                  <div className="flex justify-between"><span>FB Marketplace & TikTok:</span><strong className="text-emerald-400">Synced (100%)</strong></div>
                </div>
              </div>
            </div>

            {/* Big Hero Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#001a22]">
              <Image 
                src="/images/sales_inventory.png" 
                alt="Sales & Inventory Management Interface" 
                fill 
                className="object-cover object-center" 
              />
            </div>
          </div>

          {/* Interactive ROI Dealership Calculator */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-black text-slate-900">Project Your Dealership Gross Profit Growth</h2>
              <p className="text-slate-600 text-sm mt-2 font-medium">Adjust your lot inventory size and average front-end gross to estimate annualized gains through faster turns and automated pricing.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-800">Total Vehicles In Stock:</label>
                    <span className="text-base font-extrabold text-[#001a22]">{vehiclesOnLot} Units</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="600"
                    step="10"
                    value={vehiclesOnLot}
                    onChange={(e) => setVehiclesOnLot(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#76bc1d]"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-800">Average Front-End Gross Per Unit:</label>
                    <span className="text-base font-extrabold text-[#001a22]">${avgGrossPerUnit.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="5000"
                    step="100"
                    value={avgGrossPerUnit}
                    onChange={(e) => setAvgGrossPerUnit(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00a9ce]"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-[#001a22] text-white space-y-2">
                  <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Additional Monthly Units</div>
                  <div className="text-3xl lg:text-4xl font-black text-white">+{projectedTurnGain} Units/Mo</div>
                  <p className="text-xs text-slate-400">Via automated syndication and dynamic price velocity</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#00a9ce] text-white space-y-2">
                  <div className="text-xs font-bold text-sky-100 uppercase tracking-wider">Annual Gross Uplift</div>
                  <div className="text-3xl lg:text-4xl font-black text-white">${extraAnnualGross.toLocaleString()}</div>
                  <p className="text-xs text-sky-100">Projected front-end gross expansion</p>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Core Functional Modules Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900">Complete Dealership Operations Architecture</h2>
              <p className="text-slate-600 text-sm mt-2 font-medium">Engineered for standalone stores, franchised dealerships, and multi-state enterprise dealer groups.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Database,
                  title: 'Real-Time Inventory Sync',
                  desc: 'Bi-directional integration with your DMS. Changes to pricing, photos, or vehicle status sync instantly across all digital sales channels.',
                  color: 'text-[#00a9ce]',
                  bg: 'bg-[#00a9ce]/10'
                },
                {
                  icon: Sparkles,
                  title: 'AI Price Optimization',
                  desc: 'Algorithmic market pricing based on local inventory scarcity, live auction trends, and age-on-lot velocity to maximize front-end gross.',
                  color: 'text-[#76bc1d]',
                  bg: 'bg-[#76bc1d]/10'
                },
                {
                  icon: Users,
                  title: 'Smart Lead Auto-Routing',
                  desc: 'Capture leads from web forms, chats, phone calls, and third-party portals with sub-60s automated assignment and CRM sync.',
                  color: 'text-[#001a22]',
                  bg: 'bg-[#001a22]/10'
                },
                {
                  icon: MapPin,
                  title: 'Multi-Location Rooftop Sync',
                  desc: 'Designed for dealer groups. Move stock between locations, share appraisal history, and manage consolidated inventory dashboards.',
                  color: 'text-[#00a9ce]',
                  bg: 'bg-[#00a9ce]/10'
                },
                {
                  icon: Layers,
                  title: 'Automated Marketplace Feeds',
                  desc: 'Syndicate listings to AutoTrader, Cars.com, CarGurus, Edmunds, and social channels with automated high-res photo formatting.',
                  color: 'text-[#76bc1d]',
                  bg: 'bg-[#76bc1d]/10'
                },
                {
                  icon: BarChart3,
                  title: 'Executive Dealer Analytics',
                  desc: 'Real-time performance reports for General Managers: vehicle turn-rate, sales team closing ratios, marketing ROI, and aged inventory alerts.',
                  color: 'text-[#001a22]',
                  bg: 'bg-[#001a22]/10'
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color}`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dealership Integration Ecosystem */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-black text-slate-900">Pre-Built Integrations for Your Tech Stack</h3>
              <p className="text-slate-600 text-sm mt-2 font-medium">Plug into your existing DMS, CRM, and syndication platforms without replacing your existing business tools.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { name: 'CDK Global', cat: 'DMS' },
                { name: 'Reynolds & Reynolds', cat: 'DMS' },
                { name: 'DealerTrack', cat: 'DMS / Desking' },
                { name: 'VinSolutions', cat: 'CRM' },
                { name: 'Elead CRM', cat: 'CRM' },
                { name: 'vAuto', cat: 'Appraisal' },
                { name: 'AutoTrader', cat: 'Syndication' },
                { name: 'CarGurus', cat: 'Syndication' },
                { name: 'Cars.com', cat: 'Syndication' },
                { name: 'Facebook Auto', cat: 'Social Feeds' },
                { name: 'RouteOne', cat: 'Financing' },
                { name: 'Dealer.com', cat: 'Websites' }
              ].map((tech, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center hover:bg-white hover:border-[#00a9ce] hover:shadow-sm transition-all">
                  <div className="font-bold text-xs text-slate-900">{tech.name}</div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-tight mt-0.5">{tech.cat}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Handling Framework */}
          <ProjectHandlingSection subject="sales-inventory" />

        </div>
      </section>
    </main>
  );
}