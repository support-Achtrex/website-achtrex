'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Scale,
  ShieldCheck,
  Lock,
  FileText,
  Building2,
  Server,
  Key,
  Globe2,
  Clock,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Mail
} from 'lucide-react';

type LegalTab = 'terms' | 'privacy' | 'security';

export function LegalContent() {
  const [activeTab, setActiveTab] = useState<LegalTab>('terms');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'privacy' || hash === 'terms' || hash === 'security') {
        setActiveTab(hash as LegalTab);
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const setTabAndHash = (tab: LegalTab) => {
    setActiveTab(tab);
    window.history.replaceState(null, '', '#' + tab);
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full pb-24 font-sans text-white">
      {/* Editorial Studio Hero Header */}
      <section className="px-6 sm:px-12 lg:px-20 pb-16 border-b border-white/10">
        <div className="w-full max-w-[1720px] mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block">
              Governance / Legal &amp; Compliance Hub
            </span>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#889fa8] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-[#F37021]" />
              <span>Version 4.0 &bull; Revised January 2026</span>
            </div>
          </div>

          <h1 className="font-clash text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-normal tracking-tight text-white leading-none">
            Legal &amp; Security
          </h1>

          <p className="font-clash text-xl sm:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
            Unified governance architecture for <strong className="text-white font-normal underline underline-offset-4 decoration-white/30">Achtrex</strong>. Our digital product builds, 3D spatial platforms, and cognitive AI deployments operate under strict contractual safeguards, zero-trust infrastructure, and compliance with UAE PDPL and GDPR.
          </p>

          {/* Interactive Fast-Switch Tabs */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={() => setTabAndHash('terms')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'terms'
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/30'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>1. Terms of Service</span>
            </button>

            <button
              onClick={() => setTabAndHash('privacy')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'privacy'
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/30'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>2. Privacy Policy</span>
            </button>

            <button
              onClick={() => setTabAndHash('security')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'security'
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/30'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>3. Security Architecture</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-28 bg-[#05070A] rounded-2xl border border-white/10 p-6 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#889fa8] block mb-3">
                  Document Navigation
                </span>

                <nav className="space-y-1.5 font-mono text-xs">
                  <button
                    onClick={() => setTabAndHash('terms')}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors text-left cursor-pointer ${
                      activeTab === 'terms'
                        ? 'bg-white/10 text-white font-semibold border-l-2 border-[#F37021]'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Scale className="w-3.5 h-3.5 text-[#F37021]" />
                      <span>Terms of Service</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </button>

                  <button
                    onClick={() => setTabAndHash('privacy')}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors text-left cursor-pointer ${
                      activeTab === 'privacy'
                        ? 'bg-white/10 text-white font-semibold border-l-2 border-emerald-400'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Privacy Policy</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </button>

                  <button
                    onClick={() => setTabAndHash('security')}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors text-left cursor-pointer ${
                      activeTab === 'security'
                        ? 'bg-white/10 text-white font-semibold border-l-2 border-cyan-400'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Security Architecture</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                </nav>
              </div>

              {/* Dedicated Standalone Document Links */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#889fa8] block mb-2">
                  Dedicated Full Documents
                </span>
                <Link
                  href="/terms"
                  className="flex items-center justify-between text-xs text-white/80 hover:text-white transition-colors font-mono py-1"
                >
                  <span>Open Full Terms Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/privacy"
                  className="flex items-center justify-between text-xs text-white/80 hover:text-white transition-colors font-mono py-1"
                >
                  <span>Open Full Privacy Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Entity Info Box */}
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#889fa8] space-y-2">
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Achtrex</p>
                    <p className="text-[11px] leading-snug">Global Digital Engineering &amp; Client Services</p>
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href="mailto:legal@achtrex.com"
                    className="inline-flex items-center gap-1.5 text-[#F37021] font-semibold hover:underline"
                  >
                    <span>Contact Legal Desk</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Legal Sections */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-16">
            
            {/* ─── 1. TERMS OF SERVICE ────────────────────────────────────────── */}
            <section
              id="terms"
              className={`bg-[#05070A] rounded-2xl border p-8 sm:p-12 scroll-mt-28 transition-all ${
                activeTab === 'terms' ? 'border-[#F37021]/50 ring-1 ring-[#F37021]/20' : 'border-white/10'
              }`}
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#F37021] flex items-center justify-center">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#F37021]">Legal Framework</span>
                    <h2 className="text-xl sm:text-2xl font-clash text-white tracking-tight">
                      Master Terms of Service Overview
                    </h2>
                  </div>
                </div>

                <Link
                  href="/terms"
                  className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-[#F37021] hover:text-white transition-colors"
                >
                  <span>View 15 Detailed Articles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="text-sm leading-relaxed text-white/70 font-light mt-8 space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-white mb-2 font-clash">1. Master Agreement Scope</h3>
                  <p>
                    These Terms govern all engineering contracts, real-time 3D configurators, spatial interfaces, bespoke AI pipelines, and digital products provided by <strong className="text-white">Achtrex</strong>. By executing an SOW or paying a deposit invoice, Client agrees to be bound by these Master Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white mb-2 font-clash">2. Intellectual Property Governance</h3>
                  <p>
                    Upon receipt of full payment, all bespoke deliverables (custom layout code, application logic, and custom UI components) authored specifically for Client under an executed SOW transfer to Client. Pre-existing Achtrex shader pipelines, Three.js render loops, procedural geometry utilities, and algorithmic libraries remain Achtrex Background IP, licensed perpetually and royalty-free to Client for deployment.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white mb-2 font-clash">3. 30-Day Defect Warranty</h3>
                  <p>
                    Following production sign-off, Achtrex provides a standard 30-day bug warranty during which any reproducible defect or rendering failure in custom code authored by Achtrex is remedied without additional charge.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white mb-2 font-clash">4. Governing Law &amp; Arbitration</h3>
                  <p>
                    Governed by the commercial laws of the United Arab Emirates as applicable in Dubai. Disputes are settled via binding arbitration under the rules of the Dubai International Arbitration Centre (DIAC).
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/terms"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-clash text-xs tracking-wider uppercase rounded-full hover:bg-white/90 transition-all font-semibold"
                  >
                    <span>Read Full Master Terms &amp; Conditions (15 Articles)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* ─── 2. PRIVACY POLICY ────────────────────────────────────────── */}
            <section
              id="privacy"
              className={`bg-[#05070A] rounded-2xl border p-8 sm:p-12 scroll-mt-28 transition-all ${
                activeTab === 'privacy' ? 'border-emerald-500/50 ring-1 ring-emerald-500/20' : 'border-white/10'
              }`}
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-emerald-400 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">Data Protection</span>
                    <h2 className="text-xl sm:text-2xl font-clash text-white tracking-tight">
                      Privacy Policy Overview
                    </h2>
                  </div>
                </div>

                <Link
                  href="/privacy"
                  className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-white transition-colors"
                >
                  <span>View Full Privacy Policy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="text-sm leading-relaxed text-white/70 font-light mt-8 space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-white mb-2 font-clash">1. Regulatory Compliance Standards</h3>
                  <p>
                    We operate in full compliance with UAE Federal Decree-Law No. (45) of 2021 on Personal Data Protection (PDPL), EU GDPR, and UK GDPR. We do not sell, monetize, or broker personal information.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white mb-2 font-clash">2. Strict AI Data Isolation</h3>
                  <p>
                    Client data and proprietary assets are never used to train public generative foundation models. All AI inference and vector indexing occur through isolated, zero-retention enterprise pipelines.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white mb-2 font-clash">3. Data Subject Rights</h3>
                  <p>
                    Regardless of location, users may request access, rectification, or complete cryptographic erasure of personal records by contacting <a href="mailto:privacy@achtrex.com" className="text-white underline underline-offset-4 decoration-white/40 hover:text-emerald-400 font-mono text-xs">privacy@achtrex.com</a>.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-clash text-xs tracking-wider uppercase rounded-full hover:bg-white/90 transition-all font-semibold"
                  >
                    <span>Read Full Privacy Policy (11 Articles)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* ─── 3. SECURITY ARCHITECTURE ────────────────────────────────────── */}
            <section
              id="security"
              className={`bg-[#05070A] rounded-2xl border p-8 sm:p-12 scroll-mt-28 transition-all ${
                activeTab === 'security' ? 'border-cyan-500/50 ring-1 ring-cyan-500/20' : 'border-white/10'
              }`}
            >
              <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">Zero-Trust Infrastructure</span>
                  <h2 className="text-xl sm:text-2xl font-clash text-white tracking-tight">
                    Security Architecture &amp; Data Perimeter
                  </h2>
                </div>
              </div>

              <div className="text-sm leading-relaxed text-white/70 font-light mt-8 space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-white mb-2 font-clash">Security by Design</h3>
                  <p>
                    At Achtrex, defense in depth is embedded into every development phase, deployment pipeline, and client integration interface.
                  </p>
                </div>

                {/* Security Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-2 mb-2 text-cyan-400">
                      <Lock className="w-4 h-4" />
                      <h4 className="font-semibold text-white text-sm font-clash">End-to-End Encryption</h4>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      All data in transit is protected via TLS 1.3 with strict HSTS enforcement. Data at rest is encrypted using AES-256 with automated HSM key management.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-2 mb-2 text-cyan-400">
                      <Key className="w-4 h-4" />
                      <h4 className="font-semibold text-white text-sm font-clash">Zero-Trust &amp; Hardware MFA</h4>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      All production infrastructure access requires mandatory FIDO2 hardware token MFA, short-lived session tokens, and continuous least-privilege role enforcement.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-2 mb-2 text-cyan-400">
                      <Server className="w-4 h-4" />
                      <h4 className="font-semibold text-white text-sm font-clash">Cryptographically Isolated Clusters</h4>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      Client repositories, 3D CAD assets, and vector databases are logically and cryptographically partitioned with dedicated VPC routing.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-2 mb-2 text-cyan-400">
                      <Globe2 className="w-4 h-4" />
                      <h4 className="font-semibold text-white text-sm font-clash">Global Edge Shielding &amp; DDoS Mitigation</h4>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      Global Anycast edge networks block Layer 3/4 volumetric floods and Layer 7 malicious request payloads before reaching server clusters.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white mb-2 font-clash">Responsible Vulnerability Disclosure</h3>
                  <p>
                    We welcome responsible vulnerability disclosures from certified security researchers. Please transmit encrypted findings to <code className="bg-white/10 text-white px-2 py-0.5 rounded font-mono text-xs">security@achtrex.com</code> with step-by-step reproduction scripts.
                  </p>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
