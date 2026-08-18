'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Code2, Terminal, Workflow, Zap, Database, 
  Blocks, Layers, Settings2, ShieldCheck, Server, Cpu, 
  Lock, Globe, Smartphone, Cloud, CheckCircle2, GitBranch, Sparkles
} from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import { InnerPageHeader } from "@/components/inner-page-header";
import ProjectHandlingSection from '@/components/products/project-handling';

const techStack = {
  frontend: {
    title: 'Frontend & Mobile',
    items: ['Next.js 15 (React 19)', 'TypeScript', 'Tailwind CSS', 'React Native (iOS/Android)', 'WebSockets / SSE', 'Framer Motion']
  },
  backend: {
    title: 'Backend & Microservices',
    items: ['Node.js & Go Engines', 'Python (AI & Telematics)', 'GraphQL & REST Gateways', 'gRPC High-Speed Services', 'Apache Kafka / RabbitMQ', 'Event-Driven Pub/Sub']
  },
  databases: {
    title: 'Data & Ingestion',
    items: ['PostgreSQL & TimescaleDB', 'Redis Cluster (Caching)', 'ClickHouse (Analytics)', 'Elasticsearch / OpenSearch', 'S3 / Cloudflare R2', 'Supabase Realtime']
  },
  devops: {
    title: 'Cloud & Infrastructure',
    items: ['AWS & Google Cloud', 'Kubernetes (EKS / GKE)', 'Docker Containers', 'Terraform (IaC)', 'Datadog & Grafana Ops', 'Cloudflare Edge CDN']
  }
};

export default function CustomClient() {
  const [activeStack, setActiveStack] = useState<'frontend' | 'backend' | 'databases' | 'devops'>('backend');

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-slate-900 selection:bg-[#00a9ce]/20 selection:text-slate-900 pb-20 font-sans">
      {/* 1. Header */}
      <InnerPageHeader 
        title="Custom Automotive Software & Cloud Platforms" 
        subtitle="We design, engineer, and scale bespoke enterprise automotive platforms — from high-frequency telematics pipelines and legacy DMS modernization to digital automotive fintech rails." 
        theme="software"
      />

      {/* 2. Main Content Grid */}
      <section className="py-12 lg:py-24 px-6">
        <div className="max-w-[1280px] mx-auto space-y-20">
          
          {/* Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="p-4 border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-black text-[#001a22]">99.99%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Uptime Availability SLA</div>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-black text-[#00a9ce]">Sub-50ms</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Telemetry Pipeline Speed</div>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-black text-[#76bc1d]">Zero-Trust</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">SOC2 & ISO Compliant</div>
            </div>
            <div className="p-4">
              <div className="text-3xl lg:text-4xl font-black text-[#001a22]">Full-Cycle</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">From Blueprint to 24/7 Ops</div>
            </div>
          </div>

          {/* Architecture Hero Showcase */}
          <div className="bg-[#001a22] rounded-3xl p-8 lg:p-12 border border-cyan-500/20 shadow-2xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                  Bespoke Architecture Built for Extreme Scale
                </h2>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">
                  Off-the-shelf software collapses under the weight of automotive telemetry, multi-location inventory syncing, and legacy ERP constraints. We build dedicated microservices architectures capable of ingesting millions of sensor events per minute with cryptographic security.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/contact-us"
                    className="bg-[#00a9ce] hover:bg-[#0092b3] text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm flex items-center gap-2"
                  >
                    <span>Request Technical Blueprint</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/portal"
                    className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl border border-white/20 transition-colors text-sm"
                  >
                    Explore Member Portal
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black">
                <Image
                  src="/images/cloud_infrastructure.png"
                  alt="Enterprise Architecture Diagram"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Interactive Tech Stack Explorer */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black text-slate-900">Battle-Tested Automotive Engineering Stack</h2>
              <p className="text-slate-600 text-sm mt-2 font-medium">We choose resilient, modern technologies tailored for sub-second data streaming, high availability, and rapid feature iteration.</p>
            </div>

            {/* Stack Category Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
              {(Object.keys(techStack) as Array<keyof typeof techStack>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveStack(key)}
                  className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                    activeStack === key
                      ? 'bg-[#001a22] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {techStack[key].title}
                </button>
              ))}
            </div>

            {/* Stack Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {techStack[activeStack].items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#00a9ce] hover:shadow-sm transition-all"
                >
                  <CheckCircle2 size={18} className="text-[#00a9ce] shrink-0" />
                  <span className="font-bold text-sm text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Core Engineering Pillars */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900">Enterprise Engineering Capabilities</h2>
              <p className="text-slate-600 text-sm mt-2 font-medium">We handle every layer of complex automotive software from device hardware integration to front-end dealer apps.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Server,
                  title: 'Distributed Microservices',
                  desc: 'High-concurrency microservices orchestrated with Kubernetes and Kafka for instantaneous processing of high-volume automotive events.',
                  color: 'text-[#00a9ce]',
                  bg: 'bg-[#00a9ce]/10'
                },
                {
                  icon: Zap,
                  title: 'IoT & CAN-Bus Telematics',
                  desc: 'Ingest and parse OBD-II, GPS tracking, and ECU telemetry data in real-time with sub-50ms roundtrip ingestion pipelines.',
                  color: 'text-[#76bc1d]',
                  bg: 'bg-[#76bc1d]/10'
                },
                {
                  icon: Workflow,
                  title: 'Legacy DMS Modernization',
                  desc: 'Bridge decades-old mainframe and on-premise dealer management systems to modern cloud APIs without disrupting daily store operations.',
                  color: 'text-[#001a22]',
                  bg: 'bg-[#001a22]/10'
                },
                {
                  icon: Lock,
                  title: 'Automotive FinTech & Billing',
                  desc: 'Secure payment gateways, digital lease desking, automated ACH disbursement, and PCI-DSS compliant credit origination pipelines.',
                  color: 'text-[#00a9ce]',
                  bg: 'bg-[#00a9ce]/10'
                },
                {
                  icon: Smartphone,
                  title: 'Custom Mobile & Web Apps',
                  desc: 'High-performance React Native iOS and Android apps for fleet drivers, dealership service advisors, and retail vehicle buyers.',
                  color: 'text-[#76bc1d]',
                  bg: 'bg-[#76bc1d]/10'
                },
                {
                  icon: ShieldCheck,
                  title: 'SOC2 & Zero-Trust Security',
                  desc: 'End-to-end encryption at rest and in transit, multi-factor authentication, granular RBAC permissions, and automated security audit trails.',
                  color: 'text-[#001a22]',
                  bg: 'bg-[#001a22]/10'
                }
              ].map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
                    <div className={`w-12 h-12 rounded-xl ${pillar.bg} flex items-center justify-center ${pillar.color}`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{pillar.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Project Handling Framework */}
          <ProjectHandlingSection subject="enterprise-platforms" />

        </div>
      </section>
    </main>
  );
}
