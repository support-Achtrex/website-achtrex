'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Bot, Search, Layout, ShieldCheck, MessageSquare, 
  Workflow, Zap, Car, BrainCircuit, Sparkles, Cpu, CheckCircle2, 
  Terminal, Activity, Wrench, Shield, Gauge, Check, Copy
} from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import { InnerPageHeader } from "@/components/inner-page-header";
import ProjectHandlingSection from '@/components/products/project-handling';

const aiSimulations = {
  dtcDiagnostic: {
    title: 'DTC Code Diagnostic (P0420)',
    query: 'Vehicle: 2021 BMW M340i (3.0L Turbo B58). Active DTC: P0420 (Catalytic Converter System Efficiency Below Threshold). Sensor O2 downstream voltage fluctuating erratically between 0.1V - 0.9V.',
    output: {
      confidence: '98.6%',
      rootCause: 'Downstream Post-Cat Oxygen Sensor (Bank 1) heater circuit degradation causing false catalyst efficiency flags.',
      recommendedAction: '1. Perform smoke test on turbo downpipe flange to rule out exhaust leak.\n2. Verify upstream wideband AFR (reading steady 14.7:1).\n3. Replace downstream O2 sensor (BMW OEM Part #11788644365).\n4. Reset ECU fuel trims and execute standard 20-minute drive cycle.',
      estimatedLaborHrs: '0.8 hrs',
      oemParts: ['O2 Sensor Post-Cat (11-78-8-644-365)', 'Exhaust Downpipe V-Band Gasket (18-30-7-606-136)']
    }
  },
  fleetBattery: {
    title: 'Fleet EV Battery Telematics',
    query: 'Fleet ID: Ford F-150 Lightning (VIN: 1FT6W1EV4NW102XXX). Telematics telemetry shows 4.2% cell voltage variance across Module 3 during 150kW DC fast charging.',
    output: {
      confidence: '99.1%',
      rootCause: 'Cell balancing imbalance in Battery Pack Module 3 thermal control sub-circuit under high-draw DC charge profile.',
      recommendedAction: '1. Flag vehicle for depot rebalancing cycle (Level 2 slow charging to 100% SoC).\n2. Update Battery Energy Control Module (BECM) firmware to v4.2.1.\n3. If delta remains > 35mV, replace Module 3 internal sensor wiring harness under factory warranty.',
      estimatedLaborHrs: '1.5 hrs',
      oemParts: ['BECM High-Voltage Wiring Harness (NL3Z-14A005-B)']
    }
  },
  serviceAssistant: {
    title: 'Conversational Service Booking',
    query: 'Customer WhatsApp: "Hi, my 2020 Honda CR-V has a squealing noise when braking at low speeds, and the maintenance minder says B17."',
    output: {
      confidence: '99.4%',
      rootCause: 'B17 Service Code: Engine Oil + Oil Filter, Tire Rotation, and Brake Fluid Flush needed. Squeal indicates front ceramic brake pad wear indicator contacting rotor.',
      recommendedAction: 'Automated Quote Generated for Dealership CRM:\n- Synthetic Oil & Filter Service ($79.99)\n- Four-Wheel Tire Rotation ($29.99)\n- DOT3 Brake Fluid Exchange ($129.99)\n- Front Ceramic Brake Pads & Rotor Resurfacing ($289.00)\nTotal Estimated: $528.97 (Earliest appointment slot offered: Tomorrow at 9:30 AM).',
      estimatedLaborHrs: '2.2 hrs',
      oemParts: ['Front Brake Pad Set (45022-TLA-A01)', 'Genuine Honda DOT3 Fluid (08798-9008)']
    }
  }
};

export default function LumiClient() {
  const [activeSim, setActiveSim] = useState<'dtcDiagnostic' | 'fleetBattery' | 'serviceAssistant'>('dtcDiagnostic');

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-slate-900 selection:bg-[#00a9ce]/20 selection:text-slate-900 pb-20 font-sans">
      {/* 1. Header */}
      <InnerPageHeader 
        title="AAIA — Autonomous Automotive AI Platform" 
        subtitle="The cognitive automotive reasoning model engineered for multi-modal vehicle diagnostics, predictive fleet maintenance, and automated dealership service workflows." 
      />

      {/* 2. Main Content Grid */}
      <section className="py-12 lg:py-24 px-6">
        <div className="max-w-[1280px] mx-auto space-y-20">
          
          {/* AI Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="p-4 border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-black text-[#00a9ce]">&lt; 120ms</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Inference Latency</div>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-black text-[#76bc1d]">99.4%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Diagnostic Accuracy</div>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-black text-[#001a22]">15M+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Trained Repair Cases</div>
            </div>
            <div className="p-4">
              <div className="text-3xl lg:text-4xl font-black text-[#00a9ce]">128k</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Context Token Window</div>
            </div>
          </div>

          {/* Interactive AI Live Simulator */}
          <div className="bg-[#001017] rounded-3xl p-6 lg:p-10 border border-cyan-500/25 shadow-2xl text-white">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <BrainCircuit size={14} /> Cognitive Reasoning Simulator
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold">Experience AAIA Autonomous Automotive Reasoning</h2>
                <p className="text-slate-400 text-sm mt-1 font-medium">Select an automotive scenario to see how AAIA evaluates telemetry, diagnoses root causes, and generates actionable repair plans.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  Model Status: Online (v3.4-Flash)
                </span>
              </div>
            </div>

            {/* Simulation Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(Object.keys(aiSimulations) as Array<keyof typeof aiSimulations>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSim(key)}
                  className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                    activeSim === key
                      ? 'bg-[#00a9ce] text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {aiSimulations[key].title}
                </button>
              ))}
            </div>

            {/* Interactive Simulation Window */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#001824] rounded-2xl p-6 border border-cyan-500/20">
              
              {/* Left: Input Prompt */}
              <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
                <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-cyan-300"><Terminal size={14} /> Inbound Automotive Query</span>
                </div>
                <div className="bg-[#000d14] p-4 rounded-xl border border-white/5 text-xs font-mono text-slate-300 leading-relaxed">
                  {aiSimulations[activeSim].query}
                </div>
                <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-[11px] text-cyan-200 leading-relaxed font-medium">
                  💡 AAIA cross-references live DTC sensor telemetry against 15M+ OEM technical service bulletins and repair manuals in real time.
                </div>
              </div>

              {/* Right: AI Diagnostic Output */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-emerald-400"><Sparkles size={14} /> AAIA Autonomous Reasoning Output</span>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[11px]">
                    Confidence: {aiSimulations[activeSim].output.confidence}
                  </span>
                </div>

                <div className="space-y-3 text-xs bg-[#000d14] p-5 rounded-xl border border-white/5">
                  <div>
                    <span className="text-cyan-400 font-bold uppercase tracking-wider text-[10px] block mb-1">Root Cause Analysis</span>
                    <p className="text-white font-medium">{aiSimulations[activeSim].output.rootCause}</p>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px] block mb-1">Actionable Repair Steps</span>
                    <pre className="font-mono text-slate-300 whitespace-pre-line text-xs">{aiSimulations[activeSim].output.recommendedAction}</pre>
                  </div>

                  <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-2 text-slate-300">
                    <div>
                      <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px] block">Est. Labor Time</span>
                      <strong className="text-white">{aiSimulations[activeSim].output.estimatedLaborHrs}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px] block">OEM Verified Parts</span>
                      <strong className="text-white">{aiSimulations[activeSim].output.oemParts.length} Parts Identified</strong>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Big Interactive Demo / Video Showcase */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a9ce]/10 text-[#00a9ce] text-xs font-bold uppercase tracking-wider mb-2">
                <Layout size={14} /> Production UI & Workflows
              </div>
              <h2 className="text-3xl font-black text-slate-900">Engineered for Automotive Workspaces</h2>
              <p className="text-slate-600 text-sm mt-2 font-medium">Explore the AAIA interface deployed across dealership service lanes, fleet telematics command centers, and consumer automotive mobile apps.</p>
            </div>

            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-200 bg-[#001017] shadow-xl">
              <Image 
                src="/projects/aaia_ui_v2.png" 
                alt="AAIA Vehicle Intelligence Platform" 
                fill 
                className="object-cover object-center" 
              />
            </div>
          </div>

          {/* 6 Core AI Capabilities Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900">Core AAIA Capabilities</h2>
              <p className="text-slate-600 text-sm mt-2 font-medium">From complex diagnostic triage to autonomous service appointment booking, AAIA automates end-to-end automotive intelligence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Wrench,
                  title: 'Multi-Modal DTC Diagnostics',
                  desc: 'Combines OBD-II trouble codes, live sensor data, and repair history to pinpoint exact root causes without unnecessary trial-and-error part swapping.',
                  color: 'text-[#00a9ce]',
                  bg: 'bg-[#00a9ce]/10'
                },
                {
                  icon: Activity,
                  title: 'Predictive Fleet Maintenance',
                  desc: 'Monitors real-time telemetry from connected vehicles to predict component failures 30–60 days in advance, eliminating unscheduled fleet downtime.',
                  color: 'text-[#76bc1d]',
                  bg: 'bg-[#76bc1d]/10'
                },
                {
                  icon: MessageSquare,
                  title: 'Conversational Service Assistant',
                  desc: 'Empower dealership websites and WhatsApp channels with an AI assistant that understands automotive terminology, quotes repairs, and books appointments.',
                  color: 'text-[#001a22]',
                  bg: 'bg-[#001a22]/10'
                },
                {
                  icon: ShieldCheck,
                  title: 'Automated Warranty Claim Triage',
                  desc: 'Instantly cross-references submitted warranty claim labor and parts against factory TSB guidelines, reducing claim rejection rates by over 75%.',
                  color: 'text-[#00a9ce]',
                  bg: 'bg-[#00a9ce]/10'
                },
                {
                  icon: Gauge,
                  title: 'EV Battery & Range Analytics',
                  desc: 'Specialized machine learning models for electric vehicle battery health, degradation forecasting, charging curve optimization, and thermal diagnostics.',
                  color: 'text-[#76bc1d]',
                  bg: 'bg-[#76bc1d]/10'
                },
                {
                  icon: BrainCircuit,
                  title: 'OEM Manual Vector Embeddings',
                  desc: 'High-dimensional vector search across 50,000+ factory workshop manuals, wiring schematics, and torque specifications accessible in milliseconds.',
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

          {/* Project Delivery Framework */}
          <ProjectHandlingSection subject="ai-solutions" />

        </div>
      </section>
    </main>
  );
}
