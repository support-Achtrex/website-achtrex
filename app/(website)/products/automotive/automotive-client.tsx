'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Database, Search, Shield, Zap, 
  Code2, Terminal, Copy, Check, ExternalLink, Cpu, Layers, 
  Activity, Server, FileText, CheckCircle, RefreshCw, BarChart3, Globe
} from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import { InnerPageHeader } from "@/components/inner-page-header";
import ProjectHandlingSection from '@/components/products/project-handling';

const codeExamples = {
  vinDecode: {
    title: 'VIN Build Sheet & Specs',
    endpoint: 'GET /v1/vin/decode?vin=1FA6P8CF4M5109XXX',
    response: `{
  "status": "success",
  "data": {
    "vin": "1FA6P8CF4M5109XXX",
    "year": 2021,
    "make": "Ford",
    "model": "Mustang",
    "trim": "GT Premium Fastback",
    "body_type": "Coupe",
    "engine": {
      "displacement_liters": 5.0,
      "cylinders": 8,
      "horsepower": 460,
      "torque_lb_ft": 420,
      "fuel_type": "Premium Unleaded"
    },
    "transmission": "10-Speed SelectShift Automatic",
    "drivetrain": "RWD",
    "oem_paint_code": "D4 (Lucid Red Pearl)",
    "msrp_original": 42595,
    "manufactured_in": "Flat Rock, Michigan, USA"
  },
  "latency_ms": 38
}`
  },
  valuation: {
    title: 'Market Value & Auction Trends',
    endpoint: 'GET /v1/valuation/market-price?vin=1FA6P8CF4M5109XXX&mileage=24500',
    response: `{
  "status": "success",
  "data": {
    "vin": "1FA6P8CF4M5109XXX",
    "mileage": 24500,
    "condition": "Clean",
    "estimated_trade_in": 32800,
    "estimated_private_party": 35400,
    "estimated_retail_dealer": 37900,
    "market_days_supply": 28,
    "price_velocity_index": 8.4,
    "recent_auction_comps": [
      { "date": "2026-02-10", "price": 31900, "odometer": 26100, "region": "Midwest" },
      { "date": "2026-02-04", "price": 33100, "odometer": 22400, "region": "Southeast" }
    ]
  },
  "latency_ms": 42
}`
  },
  maintenance: {
    title: 'OEM Maintenance & Service Recalls',
    endpoint: 'GET /v1/vehicle/maintenance?make=Ford&model=Mustang&year=2021&mileage=30000',
    response: `{
  "status": "success",
  "data": {
    "interval_miles": 30000,
    "due_services": [
      { "service": "Engine Oil & Filter Replacement", "severity": "Required", "estimated_labor_hrs": 0.5 },
      { "service": "Engine Air Filter Inspection/Replace", "severity": "Required", "estimated_labor_hrs": 0.3 },
      { "service": "Brake Fluid Moisture Inspection", "severity": "Recommended", "estimated_labor_hrs": 0.4 }
    ],
    "active_nhtsa_recalls": 0,
    "published_tsbs_count": 4
  },
  "latency_ms": 31
}`
  },
  evSpecs: {
    title: 'EV Battery & Telematics Specs',
    endpoint: 'GET /v1/ev/specs?vin=5YJ3E1EB8NF123XXX',
    response: `{
  "status": "success",
  "data": {
    "usable_battery_kwh": 78.1,
    "epa_range_miles": 358,
    "charging_max_kw": 250,
    "dc_charge_time_10_80_min": 27,
    "onboard_charger_kw": 11.5,
    "battery_chemistry": "NMC (Nickel Manganese Cobalt)",
    "cell_format": "2170 Cylindrical"
  },
  "latency_ms": 29
}`
  }
};

export default function AutomotiveClient() {
  const [activeTab, setActiveTab] = useState<'vinDecode' | 'valuation' | 'maintenance' | 'evSpecs'>('vinDecode');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-slate-900 selection:bg-[#00a9ce]/20 selection:text-slate-900 pb-20 font-sans">
      {/* 1. Header */}
      <InnerPageHeader 
        title="Automotive Data & High-Velocity APIs" 
        subtitle="The backbone of modern mobility platforms. Access 20M+ vehicle records, VIN-to-build-sheet mapping, real-time market valuations, maintenance schedules, and EV battery specs through our sub-50ms developer engine." 
        theme="data"
      />

      {/* 2. Main Content Grid */}
      <section className="py-12 lg:py-24 px-6">
        <div className="max-w-[1280px] mx-auto space-y-20">
          
          {/* Key Value & Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="p-4 border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-black text-[#001a22]">20M+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Indexed VIN Records</div>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-black text-[#00a9ce]">&lt; 45ms</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Average Global Latency</div>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-black text-[#76bc1d]">99.99%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Enterprise Uptime SLA</div>
            </div>
            <div className="p-4">
              <div className="text-3xl lg:text-4xl font-black text-[#001a22]">22+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">REST & GraphQL Endpoints</div>
            </div>
          </div>

          {/* Interactive Live Code Terminal Section */}
          <div className="bg-[#0b132b] rounded-3xl p-6 lg:p-10 border border-cyan-500/20 shadow-2xl text-white">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl lg:text-3xl font-extrabold">Instant Vehicle Intelligence In Action</h2>
                <p className="text-slate-400 text-sm mt-1 font-medium">Select an endpoint below to inspect real JSON response schemas returned by our API engine.</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://automotivedataset.com/developers"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#00a9ce] hover:bg-[#0092b3] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
                >
                  <span>Open API Docs</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Tab Selectors */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(Object.keys(codeExamples) as Array<keyof typeof codeExamples>).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                    activeTab === tabKey
                      ? 'bg-[#00a9ce] text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {codeExamples[tabKey].title}
                </button>
              ))}
            </div>

            {/* Code Window Box */}
            <div className="bg-[#050b18] rounded-2xl border border-white/10 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-[#0a1224] border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 overflow-x-auto">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-bold">REST</span>
                  <span className="text-slate-300">{codeExamples[activeTab].endpoint}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md transition-colors"
                >
                  {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy JSON'}</span>
                </button>
              </div>
              <pre className="p-6 text-xs md:text-sm font-mono text-emerald-400 overflow-x-auto max-h-[380px] leading-relaxed">
                <code>{codeExamples[activeTab].response}</code>
              </pre>
            </div>
          </div>

          {/* Left Info / Right Visual Two-Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Scope & Action */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#00a9ce] mb-2">Proprietary In-House Tech</h3>
                  <h2 className="text-2xl font-extrabold text-[#001a22]">AutomotiveDataset.com</h2>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed font-medium">
                    We architected AutomotiveDataset.com from the ground up as a premier enterprise data provider. By unifying OEM factory build sheets, national vehicle registries, auction lanes, and repair schedules, we give automotive software companies the exact data they need to build market-leading platforms.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href="https://automotivedataset.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#00a9ce] hover:bg-[#0092b3] text-white font-bold py-4 rounded-xl transition-all shadow-md"
                  >
                    <span>Visit AutomotiveDataset.com</span>
                    <ArrowRight size={18} />
                  </a>

                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href="https://automotivedataset.com/pricing"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 font-semibold py-3 rounded-lg text-xs transition-colors"
                    >
                      View Pricing
                    </a>
                    <a
                      href="https://automotivedataset.com/documentation"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 font-semibold py-3 rounded-lg text-xs transition-colors"
                    >
                      Read API Docs
                    </a>
                    <a
                      href="https://automotivedataset.com/developers"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full bg-slate-50 hover:bg-slate-100 text-[#76bc1d] border border-slate-200 font-semibold py-3 rounded-lg text-xs transition-colors"
                    >
                      Developer Portal
                    </a>
                    <a
                      href="https://automotivedataset.com/demo"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full bg-slate-50 hover:bg-slate-100 text-[#00a9ce] border border-slate-200 font-semibold py-3 rounded-lg text-xs transition-colors"
                    >
                      Live Sandbox
                    </a>
                  </div>
                </div>

                <div className="bg-[#f0f9ff] rounded-xl p-5 border border-sky-100 text-xs text-slate-700 leading-relaxed font-medium space-y-2">
                  <div className="font-bold text-[#00a9ce] flex items-center gap-1.5">
                    <Shield size={16} /> Enterprise Reliability Guarantee
                  </div>
                  <p>
                    All API tier accounts include dedicated VPC peering, 99.99% uptime SLAs, multi-region fallback in US/EU/Asia, and custom webhook streams for asynchronous bulk operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Key Capabilities Grid */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Feature Showcase 1: Build Sheets */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#00a9ce]/10 flex items-center justify-center text-[#00a9ce] shrink-0">
                    <Database size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">17-Digit VIN Build Sheet Decoding</h3>
                    <p className="text-xs text-slate-500 font-medium">Decode standard and exotic vehicles to exact factory equipment specifications.</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Go far beyond generic Year/Make/Model data. Our VIN decoder maps original factory installed packages, transmission codes, engine displacement, standard safety systems, paint codes, interior upholstery materials, and original MSRP values.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                  {['OEM Equipment Codes', 'Transmission & Gears', 'Safety & ADAS Packages', 'Paint & Trim Codes', 'Fuel Economy (EPA)', 'Towing Capacity'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={14} className="text-[#00a9ce] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Showcase 2: Market Valuation */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#76bc1d]/10 flex items-center justify-center text-[#76bc1d] shrink-0">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Live Market Valuation & Auction Comps</h3>
                    <p className="text-xs text-slate-500 font-medium">Real-time dealer wholesale, retail, and trade-in pricing engines.</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Harness dynamic pricing models trained on millions of live transactions, dealer listings, and wholesale auction lanes across North America and Europe. Factor in exact mileage, condition adjustments, regional demand, and days-on-lot metrics.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                  {['Trade-In Estimates', 'Dealer Retail Targets', 'Wholesale Auction Lanes', 'Days Supply Metrics', 'Depreciation Curves', 'Regional Price Variance'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={14} className="text-[#76bc1d] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Showcase 3: Maintenance & Recalls */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#001a22]/10 flex items-center justify-center text-[#001a22] shrink-0">
                    <RefreshCw size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">OEM Maintenance, TSBs & NHTSA Recalls</h3>
                    <p className="text-xs text-slate-500 font-medium">Preventative service intervals, factory repair labor hours, and safety alerts.</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Provide vehicle owners and repair shops with authoritative service schedules based on exact vehicle mileage. Query open safety recalls, Technical Service Bulletins (TSBs), and OEM repair labor estimates.
                </p>
              </div>

              {/* Real UI Screenshot Gallery */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Developer Platform Screenshots</h3>
                  <p className="text-xs text-slate-500 font-medium">Production portals, query metrics, and API key management.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <Image src="/projects/ad-real-screenshot-1.png" alt="Automotive Data Solutions" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <Image src="/projects/ad-real-screenshot-2.png" alt="Partner Integration Dashboard" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <Image src="/projects/ad-real-screenshot-3.png" alt="Developer Account Management" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <Image src="/projects/ad-real-screenshot-4.png" alt="Data Coverage Analytics" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Comprehensive 22+ API Endpoints Directory */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-black text-slate-900">22+ Specialized REST Endpoints</h3>
              <p className="text-slate-600 text-sm mt-2 font-medium">Direct REST and GraphQL endpoints ready for integration into your iOS/Android apps, dealership CRMs, or analytics pipelines.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { name: 'Advanced VIN Decode', path: '/developers/advanced-vin-decode' },
                { name: 'Basic VIN Decode', path: '/developers/basic-vin-decode' },
                { name: 'Europe VIN Decode', path: '/developers/europe-vin-decode' },
                { name: 'Motorcycle Decode', path: '/developers/motorcycle-decode' },
                { name: 'US Plate to VIN', path: '/developers/us-plate-decode' },
                { name: 'License Plate OCR', path: '/developers/license-plate-ocr' },
                { name: 'VIN OCR Scanner', path: '/developers/vin-ocr' },
                { name: 'VIN Auto-Suggestions', path: '/developers/vin-suggestions' },
                { name: 'Market Valuation', path: '/developers/market-value' },
                { name: 'Wholesale Auctions', path: '/developers/auction' },
                { name: 'Sales & Price History', path: '/developers/sales-history' },
                { name: 'Vehicle History Report', path: '/developers/vin-full-report' },
                { name: 'Report Quick Check', path: '/developers/vin-report-check' },
                { name: 'Stolen Vehicle Check', path: '/developers/stolen-check' },
                { name: 'Maintenance Schedules', path: '/developers/vehicle-maintenance' },
                { name: 'Repair Cost Estimates', path: '/developers/vehicle-repair' },
                { name: 'Factory Recalls', path: '/developers/vehicle-recalls' },
                { name: 'Factory Warranty', path: '/developers/vehicle-warranty' },
                { name: 'Owner Digital Manuals', path: '/developers/owner-manual' },
                { name: 'EV Specifications', path: '/developers/ev-specs' },
                { name: 'Vehicle Studio Media', path: '/developers/vehicle-media' },
                { name: 'Year Make Model Specs', path: '/developers/ymm-specs' }
              ].map((ep, i) => (
                <a
                  key={i}
                  href={`https://automotivedataset.com${ep.path}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#00a9ce] hover:shadow-md transition-all group"
                >
                  <span className="font-semibold text-xs text-slate-800 group-hover:text-[#00a9ce]">{ep.name}</span>
                  <ExternalLink size={13} className="text-slate-400 group-hover:text-[#00a9ce] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Project Delivery Framework */}
          <ProjectHandlingSection subject="automotive-data" />

        </div>
      </section>
    </main>
  );
}
