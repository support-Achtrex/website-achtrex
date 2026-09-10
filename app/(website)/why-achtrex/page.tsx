import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles,
  Lock,
  Workflow
} from 'lucide-react';
import { InnerPageHeader } from "@/components/inner-page-header";
import { ComparisonSection } from "@/components/home-page/comparison-section";
import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'framer-motion/client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Achtrex | The Automotive Engineering & Advisory Advantage',
  description: 'Discover why automotive leaders partner with Achtrex: 100% intellectual property ownership, deterministic cognitive AI diagnostics, cloud-native scalability, and strategic operational consultation.',
  keywords: [
    "Automotive Software Builds", 
    "Cognitive AI Diagnostics", 
    "Automotive Consultation", 
    "100% Code Ownership", 
    "Dealer Management Software",
    "Independent Automotive Aftermarket"
  ],
  openGraph: {
    title: "Why Achtrex | The Automotive Engineering Advantage",
    description: "Bespoke automotive software builds, cognitive AI diagnostics, and strategic operational advisory engineered for enterprise scale.",
    images: ["/images/solutions/auto_software_builds.jpg"],
  }
};

export default function WhyAchtrexPage() {
  const advantages = [
    {
      icon: ShieldCheck,
      number: '01',
      tag: 'SOVEREIGNTY // 100% OWNERSHIP',
      title: '100% Intellectual Property Sovereignty',
      desc: 'You retain complete, unencumbered ownership of all delivered source code, database architectures, and trained models. No vendor lock-in, no unpredictable annual license escalations, and zero recurring per-user fees.'
    },
    {
      icon: Cpu,
      number: '02',
      tag: 'PRECISION // COGNITIVE AI',
      title: 'Domain-Trained Automotive AI',
      desc: 'Unlike generic probabilistic chatbots that hallucinate, our cognitive AI diagnostics are grounded in verified OBD-II telemetry, OEM component schematics, and Diagnostic Trouble Codes (DTCs) to ensure deterministic root-cause triage.'
    },
    {
      icon: Zap,
      number: '03',
      tag: 'VELOCITY // CLOUD NATIVE',
      title: 'Continuous Engineering Velocity',
      desc: 'Built on modern Next.js, Python microservices, and elastic cloud infrastructure. We systematically modernize legacy dealer management systems, inventory portals, and workshop scheduling with zero operational downtime.'
    },
    {
      icon: Compass,
      number: '04',
      tag: 'LEADERSHIP // ADVISORY',
      title: 'Pragmatic Operational Consultation',
      desc: 'Software is only as valuable as the shop-floor adoption it drives. Our automotive advisory specialists work directly with dealership principals and service directors to ensure technological investments translate directly into EBITDA expansion.'
    }
  ];

  const solutionPillars = [
    {
      title: 'Automotive Software Builds',
      subtitle: 'Bespoke Dealership & Workshop Platforms',
      image: '/images/solutions/auto_software_builds.jpg',
      badge: 'Core Pillar 01',
      description: 'Custom Dealer Management Systems (DMS), parts catalog engines, and workshop management software built with zero SaaS lock-in and 100% client code ownership.',
      highlights: ['Custom Multi-Branch DMS', 'Real-Time Inventory Synchronization', 'Technician Dispatch Portals']
    },
    {
      title: 'Cognitive AI Diagnostics',
      subtitle: 'Deterministic Vehicle Telemetry & AAIA',
      image: '/images/solutions/auto_cognitive_ai.jpg',
      badge: 'Core Pillar 02',
      description: 'Domain-specialized AI reasoning engines that map complex multi-sensor OBD-II telemetry and symptom histories directly to verified root-cause repair protocols.',
      highlights: ['OBD-II Telemetry Interpretation', '24/7 Autonomous Customer Quoting', 'Predictive Parts Sourcing Forecasting']
    },
    {
      title: 'Automotive Consultation',
      subtitle: 'Operational Leadership & Systems Modernization',
      image: '/images/solutions/auto_consultation.jpg',
      badge: 'Core Pillar 03',
      description: 'Executive advisory guiding franchise networks and independent aftermarket groups through workflow redesign, legacy modernization, and shop-floor productivity.',
      highlights: ['Shop Floor Workflow Audits', 'Legacy Modernization Strategy', 'Direct EBITDA Expansion Advisory']
    }
  ];

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-slate-900 font-sans selection:bg-[#F37021] selection:text-white">
      
      {/* 1. Header */}
      <InnerPageHeader 
        title="Why Achtrex" 
        subtitle="The Automotive Engineering & Advisory Advantage" 
        theme="cyan" 
      />

      {/* 2. Hero Section: Purpose-Built for Automotive */}
      <section className="relative py-16 sm:py-24 px-6 bg-[#FFFFFF] overflow-hidden">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F37021] mb-3 block">
              • THE ENGINEERING ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Purpose-Built for Automotive. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE]">
                Engineered for Sovereignty.
              </span>
            </h2>

            {/* Signature Brand Gradient Underline */}
            <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mb-6 rounded-full" />

            <div className="space-y-4 text-slate-700 text-[15px] sm:text-base leading-[1.8] font-normal">
              <p>
                The automotive industry is burdened by legacy technology: rigid dealer management platforms that resist customization, generic AI tools with no mechanical comprehension, and restrictive licensing models that extract recurring per-seat taxes.
              </p>
              <p>
                Achtrex provides an uncompromising enterprise alternative. We partner with ambitious automotive dealerships, independent repair networks, and mobility operators to build custom software, deploy deterministic cognitive AI diagnostics, and provide pragmatic strategic consultation.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-[#F37021] shrink-0" />
                <span>100% IP Ownership</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-[#00A9CE] shrink-0" />
                <span>Deterministic AI</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Zero SaaS Lock-in</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right Visual Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[540px] aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
              <Image 
                src="/images/vehicles/dealership_showroom.jpg" 
                alt="Achtrex Modern Automotive Engineering" 
                fill
                priority
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              {/* Floating Highlight Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F37021] block">
                    CLIENT SOVEREIGNTY
                  </span>
                  <p className="text-slate-900 font-extrabold text-sm sm:text-base">
                    100% Code Ownership & Extensibility
                  </p>
                </div>
                <div className="bg-[#00A9CE] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shrink-0">
                  Zero Lock-In
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Four Core Architectural Advantages Grid (Clean & Visible) */}
      <section className="py-20 sm:py-24 px-6 bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="max-w-[1240px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F37021] mb-2 block">
              • STRATEGIC PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Enterprises Partner With Achtrex
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mt-3 mx-auto rounded-full" />
            <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed mt-4">
              We eliminate the friction between enterprise ambitions and real-world automotive operations.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((adv, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                key={idx} 
                className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#00A9CE]/40 transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F37021]/10 to-[#00A9CE]/10 text-[#F37021] flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                    <adv.icon className="w-6 h-6 text-[#F37021]" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {adv.number}
                  </span>
                </div>

                <span className="font-mono text-[11px] font-bold text-[#00A9CE] uppercase tracking-widest block mb-2">
                  {adv.tag}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
                  {adv.title}
                </h3>

                <p className="text-slate-700 text-[15px] leading-[1.8] font-normal">
                  {adv.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Three Solutions in Action (Visual Cards with Real Photography) */}
      <section className="py-20 sm:py-24 px-6 bg-[#FFFFFF]">
        <div className="max-w-[1240px] mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F37021] mb-2 block">
              • OUR TRIAD MODEL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Three Pillars. One Definitive Partner.
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mt-3 mx-auto rounded-full" />
            <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed mt-4">
              How our bespoke builds, AI diagnostics, and advisory interact to deliver continuous enterprise advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutionPillars.map((pillar, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative w-full h-56 bg-slate-900 overflow-hidden">
                  <Image 
                    src={pillar.image} 
                    alt={pillar.title} 
                    fill 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-mono font-bold px-3 py-1 rounded-full border border-white/50 shadow-sm">
                    {pillar.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#00A9CE] tracking-wider uppercase block mb-1">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {pillar.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F37021] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Head-to-Head Comparison Section */}
      <ComparisonSection />
      
      {/* 6. Closing Partnership Call to Action Card */}
      <section className="py-20 sm:py-24 px-6 bg-[#FFFFFF]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-[#0B0F15] text-white p-10 sm:p-14 md:p-16 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE]"></div>
          
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F37021] mb-3 block">
            • ENGAGE WITH ACHTREX
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight leading-tight">
            Accelerate Your Automotive Operations
          </h2>
          
          <p className="text-[15px] sm:text-base md:text-lg text-slate-300 leading-[1.8] font-normal max-w-2xl mx-auto mb-8">
            Whether you need custom software builds, cognitive AI diagnostics, or high-level automotive advisory, our team is ready to engineer your enterprise advantage.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
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
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-200 bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center gap-2 border border-white/10"
            >
              <span>Explore All Solutions</span>
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
