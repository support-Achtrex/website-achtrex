'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

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
    <div className="w-full pb-24 font-sans text-slate-800">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80 pt-8 pb-14 px-6">
        <div className="max-w-[1240px] mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE] mb-2.5 inline-block"
          >
            Trust, Compliance &amp; Governance
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Legal, Privacy &amp; Security
          </motion.h1>

          <div className="w-20 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] rounded-full mx-auto mt-4 mb-4" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            A unified transparency center governing how Achtrex secures automotive systems, delivers enterprise software platforms, and upholds international privacy standards.
          </motion.p>

          {/* Quick Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 max-w-xl mx-auto">
            <button
              onClick={() => setTabAndHash('terms')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'terms'
                  ? 'bg-gradient-to-r from-[#F37021] to-[#00A9CE] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>Terms of Service</span>
            </button>

            <button
              onClick={() => setTabAndHash('privacy')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'privacy'
                  ? 'bg-gradient-to-r from-[#F37021] to-[#00A9CE] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => setTabAndHash('security')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'security'
                  ? 'bg-gradient-to-r from-[#F37021] to-[#00A9CE] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Security Architecture</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-500 mt-4 flex items-center justify-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Effective Date: January 1, 2026 &bull; Version 3.2</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-[1240px] mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4">
                Document Sections
              </h3>

              <nav className="space-y-1">
                <button
                  onClick={() => setTabAndHash('terms')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors text-left cursor-pointer ${
                    activeTab === 'terms'
                      ? 'bg-orange-50 text-[#F37021] border-l-2 border-[#F37021]'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Scale className="w-3.5 h-3.5" />
                    1. Terms of Service
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </button>

                <button
                  onClick={() => setTabAndHash('privacy')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors text-left cursor-pointer ${
                    activeTab === 'privacy'
                      ? 'bg-sky-50 text-[#00A9CE] border-l-2 border-[#00A9CE]'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5" />
                    2. Privacy Policy
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </button>

                <button
                  onClick={() => setTabAndHash('security')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors text-left cursor-pointer ${
                    activeTab === 'security'
                      ? 'bg-teal-50 text-teal-700 border-l-2 border-teal-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    3. Security Architecture
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </button>
              </nav>

              <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500 space-y-3">
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800">Achtrex</p>
                    <p className="text-[11px] leading-snug text-slate-500">Dubai Silicon Oasis, Digital Park A5 Building, 6009, UAE</p>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1.5 text-[#00A9CE] font-bold hover:underline"
                  >
                    <span>Contact Legal Team</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Legal Text Container */}
          <main className="lg:col-span-9 space-y-16">
            
            {/* ─── 1. TERMS OF SERVICE ────────────────────────────────────────── */}
            <section
              id="terms"
              className={`bg-white rounded-2xl border p-8 sm:p-10 shadow-sm scroll-mt-28 transition-all ${
                activeTab === 'terms' ? 'border-[#F37021]/60 ring-2 ring-[#F37021]/10' : 'border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#F37021] flex items-center justify-center font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#F37021]">Legal Framework</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Terms of Service
                  </h2>
                </div>
              </div>

              <div className="max-w-none text-xs sm:text-sm leading-relaxed text-slate-600 mt-6 space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">1. Agreement to Terms</h3>
                  <p className="mb-3">
                    These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (whether individually or on behalf of an enterprise entity, &quot;Customer&quot;, &quot;you&quot;, or &quot;your&quot;) and <strong className="text-slate-900">Achtrex</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), governing your access to and use of Achtrex automotive software builds, cognitive AI platforms, consultation advisory services, cloud platforms, and related documentation (collectively, the &quot;Services&quot;).
                  </p>
                  <p>
                    By accessing, querying, integrating, or utilizing the Services, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms. If you do not agree with all of these Terms, you are prohibited from using the Services.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">2. Enterprise Licensing &amp; Software Access</h3>
                  <p className="mb-3">
                    Subject to your full compliance with these Terms and payment of applicable platform subscriptions, Achtrex grants you a limited, non-exclusive, non-transferable, revocable license to access our custom software builds, cognitive AI tools, and consulting deliverables solely for internal operational workflows, application enrichment, or authorized dealer platform syndication.
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                    <li><strong className="text-slate-900">Platform Credentials:</strong> You are strictly responsible for maintaining the confidentiality of platform credentials, client secrets, and authentication bearer tokens. Any query or action initiated via your credentials is deemed authorized by your organization.</li>
                    <li><strong className="text-slate-900">Rate Limits &amp; Fair Use:</strong> You agree to conform with published rate-limiting tiers (measured in requests per second and monthly quota limits). Scripted circumvention of rate limit controls constitutes an immediate breach.</li>
                    <li><strong className="text-slate-900">No Unauthorized Reverse Engineering:</strong> Automated extraction, reverse compilation, bulk offline mirroring, or unauthorized sub-licensing of proprietary Achtrex code or AI models without express written authorization is strictly prohibited.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">3. Service Level Commitments &amp; Reliability</h3>
                  <p>
                    For production tier enterprise accounts, Achtrex provides a standard <strong className="text-slate-900">99.9% Platform Uptime Commitment</strong> calculated on a calendar month basis, excluding scheduled maintenance windows notified at least 72 hours in advance. Target response latencies are maintained via redundant edge nodes.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">4. Intellectual Property &amp; Neutral Infrastructure</h3>
                  <p>
                    All patents, copyrights, database rights, trademarks, algorithmic classification models, taxonomy structures, and software codebases comprising the Achtrex platform remain the exclusive property of Achtrex. Nothing in these Terms transfers proprietary ownership to Customer. Customer retains all rights and ownership over Customer proprietary data ingested into the system.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">5. Payment, Invoicing &amp; Billing</h3>
                  <p>
                    Fees for Services are billed in advance on an annual or monthly subscription schedule as specified in your Enterprise Master Services Agreement (MSA) or order schedule. All fees are non-refundable except where required by law or as expressly set forth in an SLA rebate provision. Late balances accrue interest at 1.5% per month or the legal statutory ceiling.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">6. Limitation of Liability &amp; Indemnification</h3>
                  <p>
                    To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, consequential, punitive, or exemplary damages, including lost profits or business disruption. The aggregate liability of Achtrex under any claim arising from or related to the Services shall not exceed the total fees paid by Customer to Achtrex in the twelve (12) months preceding the incident.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">7. Governing Law &amp; Dispute Resolution</h3>
                  <p>
                    These Terms are governed by and construed in accordance with the laws of the United Arab Emirates as applicable in the Emirate of Dubai. Any dispute, controversy, or claim arising out of or in connection with these Terms shall be resolved via binding commercial arbitration or the competent courts of Dubai.
                  </p>
                </div>
              </div>
            </section>

            {/* ─── 2. PRIVACY POLICY ────────────────────────────────────────── */}
            <section
              id="privacy"
              className={`bg-white rounded-2xl border p-8 sm:p-10 shadow-sm scroll-mt-28 transition-all ${
                activeTab === 'privacy' ? 'border-[#00A9CE]/60 ring-2 ring-[#00A9CE]/10' : 'border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#00A9CE] flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#00A9CE]">Data Protection</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Privacy Policy
                  </h2>
                </div>
              </div>

              <div className="max-w-none text-xs sm:text-sm leading-relaxed text-slate-600 mt-6 space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">1. Our Privacy Commitment</h3>
                  <p>
                    <strong className="text-slate-900">Achtrex</strong> respects the privacy of our website visitors, platform clients, enterprise partners, and authorized users. This Privacy Policy details how we collect, process, store, and safeguard personal and operational information across our platform, in full alignment with the <strong className="text-slate-900">UAE Federal Decree-Law No. 45/2021 on Personal Data Protection</strong>, the <strong className="text-slate-900">General Data Protection Regulation (GDPR)</strong>, and other applicable global standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">2. Categories of Information Collected</h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li><strong className="text-slate-900">Account &amp; Contact Data:</strong> Name, work email address, company affiliation, telephone number, job title, and billing records provided during partner enrollment, contact inquiries, or meeting bookings.</li>
                    <li><strong className="text-slate-900">Technical &amp; System Logs:</strong> Request timestamps, originating IP addresses, user agent headers, session parameters, and latency metrics recorded automatically when interacting with Achtrex software platforms.</li>
                    <li><strong className="text-slate-900">Vehicular &amp; Diagnostic Metadata:</strong> Vehicle equipment codes, diagnostic trouble codes (DTC), and parts identifiers processed through diagnostic and workshop interfaces. <em>Note:</em> Mechanical vehicle identifiers do not contain personal individual identity data.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">3. Purpose and Legal Grounds for Processing</h3>
                  <p className="mb-2">We process collected data exclusively under the following legal bases:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                    <li><strong className="text-slate-900">Contractual Performance:</strong> Fulfilling our service obligations, provisioning platform access, maintaining uptime, and delivering software engineering deliverables.</li>
                    <li><strong className="text-slate-900">Legitimate Interests:</strong> Preventing unauthorized access, ensuring system cybersecurity, and optimizing software performance.</li>
                    <li><strong className="text-slate-900">Legal Compliance:</strong> Meeting corporate, taxation, and statutory audit obligations under UAE law.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">4. Data Sharing &amp; Sub-Processors</h3>
                  <p>
                    Achtrex does not sell, rent, or monetize personal information. We share information only with strictly audited infrastructure sub-processors (such as ISO-certified cloud hosting providers and payment processors) bound by comprehensive Data Processing Agreements (DPAs) and confidentiality safeguards.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">5. Global Data Subject Rights</h3>
                  <p className="mb-3">
                    Regardless of geographic residency, Achtrex affords users full control over their personal records:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      <p className="font-bold text-slate-900 text-xs">Right of Access &amp; Rectification</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Request a verified extract of your stored records or request correction of inaccuracies.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      <p className="font-bold text-slate-900 text-xs">Right to Erasure (&quot;Forget Me&quot;)</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Direct our compliance team to delete personal identifiers from active data stores.</p>
                    </div>
                  </div>
                  <p className="pt-3">
                    To exercise any data rights, submit your request to <code className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-mono text-xs">privacy@achtrex.com</code>. We respond to all formal requests within 30 days.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">6. Data Retention &amp; Anonymization</h3>
                  <p>
                    Account profiles are maintained throughout the active contractual lifecycle. Operational platform telemetry logs are pseudonymized and archived for 90 days for security analysis before automatic purged retention.
                  </p>
                </div>
              </div>
            </section>

            {/* ─── 3. SECURITY ARCHITECTURE ────────────────────────────────────── */}
            <section
              id="security"
              className={`bg-white rounded-2xl border p-8 sm:p-10 shadow-sm scroll-mt-28 transition-all ${
                activeTab === 'security' ? 'border-teal-500/60 ring-2 ring-teal-500/10' : 'border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-teal-700">Infrastructure Security</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Security Architecture &amp; Data Perimeter
                  </h2>
                </div>
              </div>

              <div className="max-w-none text-xs sm:text-sm leading-relaxed text-slate-600 mt-6 space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">1. Security by Design &amp; Defense in Depth</h3>
                  <p>
                    At Achtrex, security is not an afterthought; it is built into every architectural layer of our automotive data pipeline. We implement a zero-trust model across all development environments, microservices, and client communication interfaces.
                  </p>
                </div>

                {/* Security Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                    <div className="flex items-center gap-2 mb-2 text-teal-700">
                      <Lock className="w-4 h-4" />
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">End-to-End Encryption</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      All data in transit is protected via TLS 1.3 with strict HSTS enforcement. Data at rest is encrypted using military-grade AES-256 with automated HSM key rotation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                    <div className="flex items-center gap-2 mb-2 text-teal-700">
                      <Key className="w-4 h-4" />
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Zero-Trust &amp; MFA</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      All administrative platform access requires mandatory hardware token MFA, short-lived session grants, and continuous role-based least-privilege enforcement.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                    <div className="flex items-center gap-2 mb-2 text-teal-700">
                      <Server className="w-4 h-4" />
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Isolated Multi-Tenant Clusters</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Customer data partitions are logically and cryptographically segmented. No customer queries or DMS inventory feeds bleed across enterprise tenant boundaries.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                    <div className="flex items-center gap-2 mb-2 text-teal-700">
                      <Globe2 className="w-4 h-4" />
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">DDoS &amp; Edge Shielding</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Global Anycast edge networks block Layer 3/4 and Layer 7 volumetric attacks before they reach backend processing clusters, guaranteeing uninterrupted uptime.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">2. Business Continuity &amp; Disaster Recovery</h3>
                  <p className="mb-2">
                    Achtrex maintains real-time active-active database replication across geographically distributed Tier IV data center facilities. We maintain:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    <li><strong className="text-slate-900">Recovery Point Objective (RPO):</strong> &lt; 15 minutes across core automotive repositories.</li>
                    <li><strong className="text-slate-900">Recovery Time Objective (RTO):</strong> &lt; 60 minutes for instantaneous failover orchestration.</li>
                    <li><strong className="text-slate-900">Automated Daily Backups:</strong> Immutable snapshots stored offsite with air-gapped cryptographic integrity validation.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">3. Incident Management &amp; Breach Notification SLA</h3>
                  <p>
                    Our Security Operations Center (SOC) operates 24/7/365 automated anomaly detection. In the event of a verified data breach affecting customer data, Achtrex will notify impacted customers within <strong className="text-slate-900">72 hours</strong> of formal confirmation in accordance with applicable statutory standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">4. Responsible Disclosure &amp; Vulnerability Submissions</h3>
                  <p>
                    We welcome responsible vulnerability disclosures from certified security researchers. If you identify a potential vulnerability in our software or web infrastructure, please report it immediately to <code className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-mono text-xs">security@achtrex.com</code> with proof-of-concept replication steps.
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
