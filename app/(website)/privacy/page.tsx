import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Database, 
  FileCheck, 
  Server, 
  Clock, 
  ArrowRight,
  Mail,
  Building2,
  CheckCircle2,
  Globe2
} from 'lucide-react';
import { STUDIO_CONFIG } from '@/data/studio-data';

export const metadata: Metadata = {
  title: 'Privacy Policy | Achtrex Studio',
  description: 'Enterprise privacy policy, UAE PDPL, EU GDPR, and UK GDPR compliance frameworks, data processing agreements, and data retention standards for Achtrex.',
  keywords: [
    'Achtrex Privacy Policy',
    'UAE PDPL Compliance',
    'GDPR Compliance Studio',
    'Data Privacy Dubai Silicon Oasis',
    'AI Data Isolation Privacy',
    'Achtrex'
  ],
  alternates: {
    canonical: 'https://achtrex.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Achtrex Studio',
    description: 'Review our privacy framework, data handling policies, and compliance with the UAE Federal Decree-Law on Personal Data Protection and GDPR.',
    url: 'https://achtrex.com/privacy',
    siteName: 'Achtrex',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/logo.png',
      width: 735,
      height: 638,
      alt: 'Achtrex Privacy Policy',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Achtrex Studio',
    description: 'Enterprise privacy policy and regulatory compliance frameworks for Achtrex.',
    images: ['/logo.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://achtrex.com/privacy#webpage',
  'name': 'Privacy Policy | Achtrex',
  'url': 'https://achtrex.com/privacy',
  'description': 'Data protection and privacy commitments of Achtrex in Dubai Silicon Oasis.',
  'publisher': {
    '@type': 'Corporation',
    'name': 'Achtrex',
    'url': 'https://achtrex.com',
    'logo': 'https://achtrex.com/logo.png',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Digital Park A5 Building, 6009',
      'addressLocality': 'Dubai Silicon Oasis',
      'addressRegion': 'Dubai',
      'addressCountry': 'AE'
    }
  }
};

const PRIVACY_SECTIONS = [
  { id: 'privacy-commitment', number: '01', title: 'Commitment & Regulatory Standards' },
  { id: 'data-collected', number: '02', title: 'Information We Collect' },
  { id: 'legal-grounds', number: '03', title: 'Legal Grounds for Processing' },
  { id: 'ai-data-isolation', number: '04', title: 'AI Architecture & Data Isolation Guarantee' },
  { id: 'cookies-telemetry', number: '05', title: 'Cookies, Telemetry & WebGL Metrics' },
  { id: 'data-sharing', number: '06', title: 'Sub-Processors & Infrastructure' },
  { id: 'international-transfers', number: '07', title: 'Cross-Border Data Transfers' },
  { id: 'data-retention', number: '08', title: 'Retention & Cryptographic Erasure' },
  { id: 'data-subject-rights', number: '09', title: 'Global Data Subject Rights (GDPR & PDPL)' },
  { id: 'security-measures', number: '10', title: 'Technical & Organizational Security' },
  { id: 'dpo-contact', number: '11', title: 'Data Protection Officer & Contact' },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========================================================================
          HERO
      ========================================================================== */}
      <section className="relative pt-36 sm:pt-44 pb-16 px-6 sm:px-12 lg:px-20 border-b border-white/10 overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block">
              Governance / Legal / Data Protection
            </span>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#889fa8] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Effective: January 1, 2026 &bull; Version 4.0</span>
            </div>
          </div>

          <h1 className="font-clash text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-normal tracking-tight text-white leading-none">
            Privacy Policy
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-white/10">
            <div className="lg:col-span-8">
              <p className="font-clash text-xl sm:text-2xl text-white/90 font-light leading-relaxed max-w-4xl">
                Achtrex is committed to the highest standards of data integrity, confidentiality, and individual privacy. This document details our processing principles across website visits, enterprise client portals, real-time 3D configurators, and custom AI systems.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4 text-xs font-mono text-[#889fa8]">
              <div className="space-y-1.5 bg-white/[0.02] border border-white/10 p-4 rounded-xl">
                <span className="text-white uppercase tracking-wider block font-semibold">Regulatory Alignment</span>
                <p>&bull; UAE Personal Data Protection Law (PDPL)</p>
                <p>&bull; EU General Data Protection Regulation (GDPR)</p>
                <p>&bull; UK Data Protection Act 2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN PRIVACY CONTENT
      ========================================================================== */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-20">
        <div className="w-full max-w-[1720px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="sticky top-28 space-y-6">
                <div className="bg-[#05070A] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#889fa8]">
                      Privacy Index
                    </span>
                    <span className="font-mono text-[11px] text-white/50">11 Articles</span>
                  </div>

                  <nav className="space-y-1.5 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                    {PRIVACY_SECTIONS.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="group flex items-start gap-3 py-1.5 text-xs text-[#889fa8] hover:text-white transition-colors"
                      >
                        <span className="font-mono text-[10px] text-white/40 group-hover:text-emerald-400 transition-colors shrink-0 mt-0.5">
                          {sec.number}
                        </span>
                        <span className="line-clamp-1">{sec.title}</span>
                      </a>
                    ))}
                  </nav>

                  <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
                    <Link
                      href="/terms"
                      className="flex items-center justify-between text-xs text-white/80 hover:text-white transition-colors font-mono"
                    >
                      <span>Terms &amp; Conditions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/legal"
                      className="flex items-center justify-between text-xs text-white/80 hover:text-white transition-colors font-mono"
                    >
                      <span>Legal &amp; Compliance Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href="mailto:privacy@achtrex.com"
                      className="flex items-center justify-between text-xs text-emerald-400 hover:text-white transition-colors font-mono pt-2"
                    >
                      <span>privacy@achtrex.com</span>
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Articles Stream */}
            <main className="lg:col-span-8 xl:col-span-9 space-y-16">
              
              <article id="privacy-commitment" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Article 01</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Commitment &amp; Regulatory Frameworks
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    Achtrex (&quot;Achtrex&quot;, &quot;we&quot;, &quot;us&quot;) respect the privacy of individuals whose data we collect and process. We strictly abide by:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-white/80">
                    <li><strong className="text-white">UAE Federal Decree-Law No. (45) of 2021</strong> on the Protection of Personal Data (PDPL).</li>
                    <li><strong className="text-white">Regulation (EU) 2016/679</strong> of the European Parliament (General Data Protection Regulation / GDPR).</li>
                    <li><strong className="text-white">UK Data Protection Act 2018</strong> and the UK General Data Protection Regulation.</li>
                  </ul>
                  <p>
                    Whether you are an enterprise client commissioning an interactive 3D platform, an automotive brand partner, or a studio website visitor, this Privacy Policy outlines how your personal information is processed and protected.
                  </p>
                </div>
              </article>

              <article id="data-collected" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Article 02</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Information We Collect
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>We collect data across three distinct categories:</p>
                  
                  <div className="space-y-3 pt-2">
                    <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-1.5">
                      <span className="text-xs font-mono text-white uppercase tracking-wider block font-semibold">1. Voluntarily Provided Contact &amp; Inquiry Data</span>
                      <p className="text-xs sm:text-sm text-white/70">
                        When you submit our contact forms, book a demo via Calendly, or execute an agreement, we collect your name, corporate email address, organization name, telephone number, geographic territory, and project scope details.
                      </p>
                    </div>

                    <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-1.5">
                      <span className="text-xs font-mono text-white uppercase tracking-wider block font-semibold">2. Technical &amp; Device Telemetry</span>
                      <p className="text-xs sm:text-sm text-white/70">
                        When interacting with our website or 3D configurators, we record IP addresses (anonymized at edge), browser user agent headers, WebGL renderer strings (to adapt texture resolution to GPU memory), session durations, and interaction metrics.
                      </p>
                    </div>

                    <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-1.5">
                      <span className="text-xs font-mono text-white uppercase tracking-wider block font-semibold">3. Enterprise Contractual &amp; Billing Records</span>
                      <p className="text-xs sm:text-sm text-white/70">
                        Commercial billing records, corporate tax registration numbers (TRN), wire transfer receipts, and authorized representative signatures are collected for accounting and compliance with UAE Federal Tax Authority statutory requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article id="legal-grounds" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Article 03</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Legal Grounds for Processing
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>We process personal data solely under legitimate legal bases recognized by the UAE PDPL and GDPR:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
                    <li><strong className="text-white">Contract Performance:</strong> Delivering software development, sprint retainers, and platform hosting per executed agreements.</li>
                    <li><strong className="text-white">Legitimate Interests:</strong> Preventing cybersecurity intrusions, monitoring edge latency, and maintaining service resilience.</li>
                    <li><strong className="text-white">Explicit Consent:</strong> Sending studio press releases, media digests, or non-essential telemetry cookies.</li>
                    <li><strong className="text-white">Legal Obligations:</strong> Compliance with statutory tax, corporate, and audit laws in the United Arab Emirates.</li>
                  </ul>
                </div>
              </article>

              <article id="ai-data-isolation" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Article 04</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  AI Architecture &amp; Data Isolation Guarantee
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <div className="p-5 bg-white/[0.02] border border-emerald-500/20 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm">
                      <Lock className="w-4 h-4" />
                      <span>Zero Retention &amp; Private Foundation Model Guarantee</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80">
                      Achtrex guarantees that Client data ingested into AI pipelines, multi-agent frameworks, or vector databases is <strong className="text-white">never retained, shared, or utilized</strong> to train public models. All enterprise AI inference routes through isolated private endpoints under strict enterprise non-training terms.
                    </p>
                  </div>
                </div>
              </article>

              <article id="cookies-telemetry" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Article 05</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Cookies, Telemetry &amp; WebGL Metrics
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    Achtrex employs minimal, essential first-party cookies and anonymized telemetry strictly necessary for user interface responsiveness and WebGL viewport rendering. We do not engage in third-party behavioral cross-site tracking or commercial data brokerage.
                  </p>
                </div>
              </article>

              <article id="data-sharing" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Article 06</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Audited Sub-Processors &amp; Infrastructure
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    Achtrex shares data solely with vetted enterprise infrastructure providers bound by signed Data Processing Agreements (DPAs):
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-white/70">
                    <li><strong className="text-white">Supabase / PostgreSQL:</strong> Encrypted operational database and media storage (SOC 2 Type II certified).</li>
                    <li><strong className="text-white">Cloudflare / Edge CDN:</strong> Global SSL termination, edge caching, and DDoS mitigation.</li>
                    <li><strong className="text-white">Vercel:</strong> Production frontend hosting and serverless compute infrastructure.</li>
                    <li><strong className="text-white">Google Tag Manager:</strong> Privacy-compliant event aggregation.</li>
                  </ul>
                </div>
              </article>

              <article id="data-retention" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Article 08</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Retention &amp; Cryptographic Erasure
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    Inquiry submissions are retained for up to 24 months to support relationship history unless erasure is requested. Active client records are maintained throughout the contractual term and archived for statutory accounting compliance (typically 5 years under UAE commercial tax regulations).
                  </p>
                </div>
              </article>

              <article id="data-subject-rights" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Article 09</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Global Data Subject Rights (GDPR &amp; PDPL)
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>Regardless of residency, all individuals whose data we process possess the right to:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-1">
                      <span className="text-xs font-mono text-white block font-semibold">Right of Access &amp; Portability</span>
                      <p className="text-xs text-white/70">Request an electronic extract of all personal data held about you.</p>
                    </div>
                    <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-1">
                      <span className="text-xs font-mono text-white block font-semibold">Right to Rectification</span>
                      <p className="text-xs text-white/70">Request immediate correction of inaccurate or incomplete records.</p>
                    </div>
                    <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-1">
                      <span className="text-xs font-mono text-white block font-semibold">Right to Erasure (&quot;Right to be Forgotten&quot;)</span>
                      <p className="text-xs text-white/70">Direct the permanent cryptographic deletion of your personal records.</p>
                    </div>
                    <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-1">
                      <span className="text-xs font-mono text-white block font-semibold">Right to Object &amp; Restrict Processing</span>
                      <p className="text-xs text-white/70">Restrict processing of your records for specific legitimate purposes.</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 pt-2">
                    To exercise any privacy right, email our Data Protection Desk at <a href="mailto:privacy@achtrex.com" className="text-white underline underline-offset-4 decoration-white/40 hover:text-emerald-400">privacy@achtrex.com</a>. We respond to all verified requests within thirty (30) days without charge.
                  </p>
                </div>
              </article>

              <article id="dpo-contact" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Article 11</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Data Protection Officer &amp; Inquiries
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    For inquiries regarding this Privacy Policy, enterprise DPAs, or data subject requests, please contact:
                  </p>
                  <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2 font-mono text-xs text-white/80">
                    <p className="text-white font-semibold">Data Protection Officer</p>
                    <p>Achtrex</p>
                    <p>Digital Park A5 Building, Office 6009</p>
                    <p>Dubai Silicon Oasis, Dubai, UAE</p>
                    <p className="pt-2 text-emerald-400">Email: privacy@achtrex.com</p>
                  </div>
                </div>
              </article>

            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
