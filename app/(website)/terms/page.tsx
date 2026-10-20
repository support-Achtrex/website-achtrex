import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Scale, 
  ShieldCheck, 
  FileCode2, 
  Cpu, 
  CreditCard, 
  Sparkles, 
  AlertCircle, 
  Building2, 
  Mail, 
  ArrowRight,
  CheckCircle2,
  Lock,
  Globe2,
  Clock
} from 'lucide-react';
import { STUDIO_CONFIG } from '@/data/studio-data';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Achtrex Studio',
  description: 'Enterprise master terms of service, intellectual property governance, 3D configurator licensing, AI system protocols, and commercial terms for Achtrex.',
  keywords: [
    'Achtrex Terms of Service',
    'Achtrex Terms and Conditions',
    'Enterprise Software MSA',
    '3D WebGL Configurator Licensing',
    'Spatial Computing Agreement',
    'AI Multi-Agent Development Terms',
    'Achtrex'
  ],
  alternates: {
    canonical: 'https://achtrex.com/terms',
  },
  openGraph: {
    title: 'Terms & Conditions | Achtrex : Digital Experience & Technology Studio',
    description: 'Review the comprehensive terms of service, intellectual property frameworks, and commercial covenants governing Achtrex engineering engagements.',
    url: 'https://achtrex.com/terms',
    siteName: 'Achtrex',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/logo.png',
      width: 735,
      height: 638,
      alt: 'Achtrex Terms & Conditions',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Achtrex Studio',
    description: 'Enterprise master terms of service, intellectual property governance, and software terms for Achtrex.',
    images: ['/logo.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://achtrex.com/terms#webpage',
  'name': 'Terms and Conditions | Achtrex',
  'url': 'https://achtrex.com/terms',
  'description': 'Master Terms of Service and legal agreements governing Achtrex digital products, 3D configurators, and AI engineering services.',
  'publisher': {
    '@type': 'Corporation',
    'name': 'Achtrex',
    'url': 'https://achtrex.com',
    'logo': 'https://achtrex.com/logo.png',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'AE'
    }
  }
};

const TERMS_SECTIONS = [
  { id: 'agreement-scope', number: '01', title: 'Scope of Services & Master Agreement' },
  { id: 'engagement-model', number: '02', title: 'Statements of Work & Retainers' },
  { id: 'intellectual-property', number: '03', title: 'Intellectual Property & Dual-License Model' },
  { id: '3d-spatial-specifications', number: '04', title: '3D, WebGL & Spatial Computing Terms' },
  { id: 'ai-development-terms', number: '05', title: 'Artificial Intelligence & Data Isolation' },
  { id: 'client-responsibilities', number: '06', title: 'Client Materials & Asset Provisioning' },
  { id: 'fees-payment', number: '07', title: 'Fees, Invoicing Milestones & UAE VAT' },
  { id: 'acceptance-warranty', number: '08', title: 'Acceptance & 30-Day Defect Warranty' },
  { id: 'platform-slas', number: '09', title: 'Service Levels, Hosting & Uptime (99.9%)' },
  { id: 'confidentiality', number: '10', title: 'Confidentiality & Trade Secret Non-Disclosure' },
  { id: 'data-protection', number: '11', title: 'Data Privacy & Regulatory Compliance' },
  { id: 'liability-indemnification', number: '12', title: 'Limitation of Liability & Indemnification' },
  { id: 'term-termination', number: '13', title: 'Suspension, Termination & Wind-Down' },
  { id: 'governing-law', number: '14', title: 'Governing Law & DIAC Commercial Arbitration' },
  { id: 'general-provisions', number: '15', title: 'General Provisions, Notices & Severability' },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========================================================================
          HERO (Editorial Studio Header)
      ========================================================================== */}
      <section className="relative pt-36 sm:pt-44 pb-16 px-6 sm:px-12 lg:px-20 border-b border-white/10 overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block">
              Governance / Legal / Enterprise Master Terms
            </span>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#889fa8] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-[#F37021]" />
              <span>Effective: January 1, 2026 &bull; Version 4.0</span>
            </div>
          </div>

          <h1 className="font-clash text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-normal tracking-tight text-white leading-none">
            Terms &amp; Conditions
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-white/10">
            <div className="lg:col-span-8">
              <p className="font-clash text-xl sm:text-2xl text-white/90 font-light leading-relaxed max-w-4xl">
                These Master Terms of Service define the contractual framework governing custom software development, real-time 3D configurators, spatial interfaces, bespoke artificial intelligence systems, and digital product engineering delivered by <strong className="text-white font-normal underline underline-offset-4 decoration-white/30">Achtrex</strong>.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4 text-xs font-mono text-[#889fa8]">
              <div className="space-y-1.5 bg-white/[0.02] border border-white/10 p-4 rounded-xl">
                <span className="text-white uppercase tracking-wider block font-semibold">Master Agreement</span>
                <p>Achtrex Digital Studio</p>
                <p>Global Engineering &amp; Client Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTENT LAYOUT
      ========================================================================== */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-20">
        <div className="w-full max-w-[1720px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Sticky Table of Contents Sidebar */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="sticky top-28 space-y-6">
                <div className="bg-[#05070A] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#889fa8]">
                      Clauses Index
                    </span>
                    <span className="font-mono text-[11px] text-white/50">15 Articles</span>
                  </div>

                  <nav className="space-y-1.5 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                    {TERMS_SECTIONS.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="group flex items-start gap-3 py-1.5 text-xs text-[#889fa8] hover:text-white transition-colors"
                      >
                        <span className="font-mono text-[10px] text-white/40 group-hover:text-[#F37021] transition-colors shrink-0 mt-0.5">
                          {sec.number}
                        </span>
                        <span className="line-clamp-1">{sec.title}</span>
                      </a>
                    ))}
                  </nav>

                  <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
                    <Link
                      href="/privacy"
                      className="flex items-center justify-between text-xs text-white/80 hover:text-white transition-colors font-mono"
                    >
                      <span>Privacy Policy</span>
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
                      href="mailto:legal@achtrex.com"
                      className="flex items-center justify-between text-xs text-[#F37021] hover:text-white transition-colors font-mono pt-2"
                    >
                      <span>legal@achtrex.com</span>
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* In-Depth Articles Stream */}
            <main className="lg:col-span-8 xl:col-span-9 space-y-16">
              
              {/* Section 01 */}
              <article id="agreement-scope" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 01</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Scope of Services &amp; Master Agreement
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    These Master Terms and Conditions (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a binding legal agreement entered into between <strong className="text-white">Achtrex</strong> (&quot;Achtrex&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), and the enterprise entity or individual (&quot;Client&quot;, &quot;Customer&quot;, or &quot;you&quot;) executing an order, Statement of Work, or engaging Achtrex for digital product services.
                  </p>
                  <p>
                    Achtrex operates as a multidisciplinary digital experience and technology studio providing services across primary disciplines:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-white/80">
                    <li className="p-3 bg-white/[0.02] border border-white/10 rounded-lg flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]" />
                      <span>Real-Time 3D &amp; WebGL Product Configurators</span>
                    </li>
                    <li className="p-3 bg-white/[0.02] border border-white/10 rounded-lg flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]" />
                      <span>Spatial Computing &amp; Virtual Environments</span>
                    </li>
                    <li className="p-3 bg-white/[0.02] border border-white/10 rounded-lg flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]" />
                      <span>Artificial Intelligence &amp; Multi-Agent Workflows</span>
                    </li>
                    <li className="p-3 bg-white/[0.02] border border-white/10 rounded-lg flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]" />
                      <span>High-Performance Web Platforms &amp; Custom SaaS</span>
                    </li>
                    <li className="p-3 bg-white/[0.02] border border-white/10 rounded-lg flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]" />
                      <span>Photorealistic CGI &amp; Interactive Media Production</span>
                    </li>
                    <li className="p-3 bg-white/[0.02] border border-white/10 rounded-lg flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]" />
                      <span>Tactile Experience Design, UX/UI &amp; Design Systems</span>
                    </li>
                  </ul>
                  <p>
                    By engaging Achtrex, issuing purchase orders, approving project estimates, paying deposit invoices, or accessing deliverables, Client expressly accepts and agrees to be bound by all stipulations in this Agreement.
                  </p>
                </div>
              </article>

              {/* Section 02 */}
              <article id="engagement-model" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 02</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Statements of Work &amp; Engagement Models
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    Specific deliverables, milestones, delivery schedules, and commercial fees will be documented in individually executed Statements of Work (&quot;SOW&quot;), proposals, or digital work authorizations. In the event of any direct conflict between an SOW and these Master Terms, the SOW will prevail solely with respect to project timelines and specific commercial pricing.
                  </p>
                  <p>
                    <strong className="text-white">Change Orders:</strong> Any request by Client to expand, modify, or pivot the scope defined in an executed SOW (including addition of interactive 3D assets, supplementary AI reasoning pipelines, unlisted API integrations, or architectural refactors) must be documented in a written Change Order reflecting adjusted timelines and incremental fees prior to commencement of out-of-scope work.
                  </p>
                  <p>
                    <strong className="text-white">Sprint Retainers:</strong> For agile retainer engagements, studio capacity is reserved on a dedicated sprint cycle basis. Unused hours or story points within a defined calendar sprint do not roll over to subsequent billing periods unless specifically authorized in writing by Achtrex.
                  </p>
                </div>
              </article>

              {/* Section 03 */}
              <article id="intellectual-property" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 03</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Intellectual Property Rights &amp; Dual-License Model
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    Achtrex recognizes the paramount value of proprietary technology and commercial trade secrets. Our intellectual property governance follows a clear, dual-license model:
                  </p>
                  
                  <div className="space-y-4 pt-2">
                    <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                      <div className="flex items-center gap-2 text-white font-medium text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Client Deliverables &amp; Bespoke Codebase</span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/70">
                        Upon full payment of all invoiced fees associated with the applicable SOW, Achtrex transfers and assigns to Client all worldwide copyright, title, and ownership in the custom frontend layouts, bespoke application code, database schemas, and tailored UI components authored exclusively for Client under that SOW.
                      </p>
                    </div>

                    <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                      <div className="flex items-center gap-2 text-white font-medium text-sm">
                        <Lock className="w-4 h-4 text-[#F37021]" />
                        <span>Achtrex Background IP &amp; Proprietary Engine Tooling</span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/70">
                        Achtrex retains sole and exclusive ownership of all pre-existing software, core WebGL shaders, Three.js render loops, procedural geometry generators, AI routing engines, proprietary utility libraries, algorithms, and architectural frameworks developed by Achtrex prior to or independently of the project (&quot;Background IP&quot;).
                      </p>
                      <p className="text-xs sm:text-sm text-white/70 pt-1">
                        Achtrex grants Client an irrevocable, perpetual, worldwide, non-exclusive, royalty-free license to use, execute, display, and distribute any Background IP embedded within the final deliverables solely as necessary for the operational deployment and maintenance of the delivered system.
                      </p>
                    </div>

                    <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                      <div className="flex items-center gap-2 text-white font-medium text-sm">
                        <ShieldCheck className="w-4 h-4 text-cyan-400" />
                        <span>Client Materials &amp; Pre-Existing Trademarks</span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/70">
                        Client retains all right, title, and ownership in all logos, branding assets, proprietary industrial CAD data, product specifications, images, and corporate content supplied to Achtrex (&quot;Client Materials&quot;). Client grants Achtrex a limited, non-transferable license to use Client Materials strictly to execute the services.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Section 04 */}
              <article id="3d-spatial-specifications" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 04</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Real-Time 3D, WebGL/WebGPU &amp; Spatial Computing Terms
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    For real-time 3D configurators, spatial interfaces, WebGL/WebGPU applications, and digital twin environments, the following technical protocols apply:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
                    <li>
                      <strong className="text-white">PBR Material Pipeline:</strong> Achtrex authors physically based rendering (PBR) metallic/roughness material models calibrated against standard ACEScg / linear color spaces. Color rendering may subtly vary depending on user display hardware calibration, HDR profile, and GPU hardware.
                    </li>
                    <li>
                      <strong className="text-white">Target Hardware &amp; Latency Budgets:</strong> Performance targets (e.g. 60 FPS under sub-16ms frame budgets) are specified for benchmarked desktop and mobile GPU architectures defined in the SOW. Achtrex cannot guarantee target frame rates on legacy hardware lacking WebGL 2.0 or hardware-accelerated rasterization.
                    </li>
                    <li>
                      <strong className="text-white">CAD Optimization &amp; Polygon Budgets:</strong> Conversion of high-density NURBS / STEP CAD data into real-time polygonal meshes involves decimation and retopology to adhere to agreed web memory footprints (typically under 35 MB compressed glTF/DRACO).
                    </li>
                  </ul>
                </div>
              </article>

              {/* Section 05 */}
              <article id="ai-development-terms" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 05</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Artificial Intelligence Systems, Agent Architectures &amp; Data Isolation
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    Where engagements incorporate machine intelligence, Retrieval-Augmented Generation (RAG), autonomous multi-agent systems, or custom fine-tuning, the following warranties apply:
                  </p>
                  <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                    <span className="text-xs font-mono text-[#F37021] uppercase tracking-wider block">Strict Data Isolation Guarantee</span>
                    <p className="text-xs sm:text-sm text-white/80">
                      Achtrex guarantees that Client proprietary data, private knowledge bases, and ingested embeddings will <strong className="text-white">never</strong> be used to train, align, or reinforce general public multi-tenant foundation models. All inference pipelines utilize zero-retention enterprise API endpoints or dedicated VPC deployments.
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70">
                    <strong className="text-white">Probabilistic Output Nature:</strong> Client acknowledges that generative AI models operate on probabilistic reasoning architectures. While Achtrex implements guardrails, deterministic function calling, evaluation benchmarks, and grounding protocols, Achtrex cannot warrant that generative LLM outputs will be free of occasional variance or hallucinations in open-ended customer-facing queries.
                  </p>
                </div>
              </article>

              {/* Section 06 */}
              <article id="client-responsibilities" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 06</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Client Responsibilities &amp; Asset Provisioning
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    Timely delivery of high-velocity engineering projects requires cooperative collaboration. Client agrees to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
                    <li>Designate a primary Product Owner with decision-making authority for milestone sign-offs.</li>
                    <li>Supply required brand guidelines, raw CAD geometries, high-resolution textures, third-party API keys, and staging credentials within five (5) business days of agreed schedule milestones.</li>
                    <li>Review deliverable milestones and provide consolidated feedback within five (5) business days of milestone presentation. Failure to deliver feedback within ten (10) business days will trigger automatic deemed milestone acceptance to preserve engineering sprint velocity.</li>
                  </ul>
                </div>
              </article>

              {/* Section 07 */}
              <article id="fees-payment" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 07</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Commercial Fees, Invoicing Milestones &amp; UAE VAT
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    All commercial fees are denominated in United Arab Emirates Dirhams (AED), United States Dollars (USD), or Euros (EUR) as designated on the applicable SOW.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
                    <li>
                      <strong className="text-white">Payment Milestones:</strong> Unless otherwise specified, project engagements require an initial non-refundable project initiation deposit (typically 40% to 50%) prior to sprint mobilization, with subsequent milestone payments billed upon completion of key project phases.
                    </li>
                    <li>
                      <strong className="text-white">Payment Terms:</strong> Invoices are payable net-14 days from date of issuance via wire transfer or authorized corporate credit instrument.
                    </li>
                    <li>
                      <strong className="text-white">Value Added Tax (VAT):</strong> In accordance with UAE Federal Decree-Law No. (8) of 2017 on Value Added Tax, all services provided to clients inside the United Arab Emirates are subject to standard 5% UAE VAT, itemized separately on Tax Invoices. International cross-border supplies may qualify for zero-rating subject to UAE FTA statutory criteria.
                    </li>
                    <li>
                      <strong className="text-white">Late Balances:</strong> Overdue accounts incur late interest at the rate of 1.5% per month (or the maximum statutory legal limit), and Achtrex reserves the right to suspend development sprints or staging access if invoices remain delinquent past 21 days.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Section 08 */}
              <article id="acceptance-warranty" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 08</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Acceptance Testing &amp; 30-Day Defect Warranty
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    <strong className="text-white">User Acceptance Testing (UAT):</strong> Upon staging deployment, Client will have an agreed testing period of ten (10) business days to evaluate the deliverables against the technical specifications in the SOW.
                  </p>
                  <p>
                    <strong className="text-white">30-Day Post-Launch Bug Warranty:</strong> Following production launch and final acceptance, Achtrex provides a comprehensive <strong className="text-white">30-calendar-day warranty</strong> during which Achtrex will remediate any reproducible functional defects, rendering bugs, or programmatic errors in the custom code delivered by Achtrex at zero additional charge.
                  </p>
                  <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-2 text-xs text-white/70">
                    <span className="font-mono text-white/90 uppercase tracking-wider block">Warranty Exclusions</span>
                    <p>
                      The 30-day warranty does not cover: (a) defects resulting from modifications or edits made to the codebase by Client or third-party developers; (b) breaking changes introduced by third-party APIs or external cloud hosting services; (c) new feature additions or scope changes outside the approved SOW specification.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 09 */}
              <article id="platform-slas" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 09</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Service Levels, Hosting &amp; Uptime Commitments (99.9%)
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    Where Achtrex provisions cloud hosting, edge CDN distribution, or managed platform infrastructure under an active Maintenance &amp; Support Retainer:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
                    <li>
                      <strong className="text-white">99.9% Uptime SLA:</strong> Achtrex commits to maintaining a monthly service availability of 99.9% across production edge delivery endpoints, excluding scheduled maintenance windows announced at least 72 hours in advance.
                    </li>
                    <li>
                      <strong className="text-white">Incident Response Targets:</strong> Critical severity incidents (e.g. total production configurator outage) receive engineering triage within 2 business hours; high priority incidents within 6 business hours.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Section 10 */}
              <article id="confidentiality" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 10</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Confidentiality &amp; Trade Secret Non-Disclosure
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    Both parties agree that all confidential business strategies, unreleased automotive designs, proprietary 3D CAD files, trade secrets, customer databases, AI prompts, and financial records disclosed during the engagement shall remain strictly confidential.
                  </p>
                  <p>
                    Neither party shall disclose confidential information to any third party without prior written consent, except to employees, contractors, and legal advisors with a strict need-to-know who are bound by non-disclosure agreements no less restrictive than these Terms. Confidentiality obligations survive termination of this Agreement for five (5) years, and indefinitely for trade secrets.
                  </p>
                  <p className="text-xs sm:text-sm text-white/70">
                    <strong className="text-white">Studio Portfolio Rights:</strong> Unless expressly prohibited in writing via an exclusive NDA, Achtrex may reference Client name, logo, and non-confidential project visual previews in the Achtrex studio portfolio, case studies, and design award submissions after the public launch of the project.
                  </p>
                </div>
              </article>

              {/* Section 11 */}
              <article id="data-protection" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 11</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Data Privacy &amp; Regulatory Compliance
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    Achtrex complies with all applicable privacy statutes, including the <strong className="text-white">UAE Federal Decree-Law No. 45/2021 on Personal Data Protection (PDPL)</strong>, the <strong className="text-white">European Union General Data Protection Regulation (EU GDPR)</strong>, and the <strong className="text-white">UK Data Protection Act 2018</strong>.
                  </p>
                  <p>
                    Where Achtrex processes personal data on behalf of Client in delivering the Services, Achtrex acts as a Data Processor, and Client acts as the Data Controller. Full details regarding our security controls, data subject rights, and cookie mechanisms are documented in our <Link href="/privacy" className="text-white underline underline-offset-4 decoration-white/40 hover:text-[#F37021]">Privacy Policy</Link>.
                  </p>
                </div>
              </article>

              {/* Section 12 */}
              <article id="liability-indemnification" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 12</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Limitation of Liability &amp; Indemnification
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    To the maximum extent permitted under applicable law:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
                    <li>
                      <strong className="text-white">Exclusion of Consequential Damages:</strong> In no event shall either party be liable to the other for any indirect, special, incidental, exemplary, punitive, or consequential damages, including loss of revenue, anticipated profits, loss of data, business interruption, or procurement of substitute services.
                    </li>
                    <li>
                      <strong className="text-white">Aggregate Financial Cap:</strong> The maximum aggregate liability of Achtrex arising under or in connection with this Agreement or any SOW, whether in contract, tort (including negligence), or otherwise, shall be strictly capped at the total fees actually received by Achtrex from Client under the specific SOW in the twelve (12) months preceding the incident giving rise to liability.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Section 13 */}
              <article id="term-termination" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 13</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Suspension, Termination &amp; Wind-Down
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    <strong className="text-white">Termination for Cause:</strong> Either party may terminate an SOW immediately upon written notice if the other party commits a material breach and fails to cure such breach within thirty (30) days of receiving written notice of the default.
                  </p>
                  <p>
                    <strong className="text-white">Termination for Convenience:</strong> Client may terminate an ongoing engagement for convenience by providing thirty (30) days written notice. In such event, Client shall pay Achtrex for all engineering hours completed and milestone work performed up to the termination effective date, plus non-cancellable third-party licensing commitments incurred.
                  </p>
                  <p>
                    <strong className="text-white">Handover of Work Product:</strong> Upon receipt of all outstanding payments, Achtrex will deliver all completed code repositories, 3D assets, and design files in their current production state.
                  </p>
                </div>
              </article>

              {/* Section 14 */}
              <article id="governing-law" className="scroll-mt-28 space-y-4 pb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 14</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  Governing Law &amp; DIAC Commercial Arbitration
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    This Agreement shall be governed by, construed, and enforced in accordance with the laws of the United Arab Emirates as applicable in the Emirate of Dubai.
                  </p>
                  <p>
                    Any dispute, controversy, or claim arising out of, relating to, or in connection with this Agreement, including any question regarding its existence, validity, interpretation, performance, or termination, shall be settled by binding arbitration in accordance with the Arbitration Rules of the <strong className="text-white">Dubai International Arbitration Centre (DIAC)</strong>. The seat and legal place of arbitration shall be Dubai, UAE. The language of arbitration shall be English.
                  </p>
                </div>
              </article>

              {/* Section 15 */}
              <article id="general-provisions" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider">Article 15</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h2 className="font-clash text-2xl sm:text-3xl text-white font-normal tracking-tight">
                  General Provisions, Notices &amp; Severability
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  <p>
                    <strong className="text-white">Entire Agreement:</strong> These Master Terms, together with executed SOWs and schedules, constitute the entire agreement between the parties and supersede all prior discussions or agreements regarding the subject matter.
                  </p>
                  <p>
                    <strong className="text-white">Severability:</strong> If any provision of this Agreement is held to be invalid or unenforceable, that provision shall be reformed to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.
                  </p>
                  <p>
                    <strong className="text-white">Official Legal Inquiries:</strong> Formal legal notices must be served in writing via registered courier or transmitted electronically to <a href="mailto:legal@achtrex.com" className="text-white underline underline-offset-4 decoration-white/40 hover:text-[#F37021]">legal@achtrex.com</a>.
                  </p>
                </div>
              </article>

            </main>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM LEGAL CALLOUT
      ========================================================================== */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#020304]">
        <div className="w-full max-w-[1720px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-[#889fa8] uppercase tracking-wider block mb-2">
              Corporate Governance &amp; Procurement
            </span>
            <h3 className="font-clash text-2xl sm:text-3xl text-white font-normal">
              Need a bespoke Master Services Agreement (MSA) or custom NDA?
            </h3>
            <p className="font-clash text-sm text-white/70 mt-2 max-w-2xl font-light">
              Our legal counsel works directly with enterprise procurement teams across the UAE, Europe, and North America to customize licensing schedules and service level agreements.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-clash text-sm tracking-wide rounded-full hover:bg-white/90 transition-all shrink-0 font-medium"
          >
            <span>Inquire with Legal Desk</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
