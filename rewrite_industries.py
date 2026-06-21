import sys

content = '''"use client";

import React from 'react';
import { ArrowRight, ShieldCheck, Database, Shield, Wrench, Car, Briefcase, FileText, Monitor, Tag, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { InnerPageHeader } from "@/components/inner-page-header";

const industryData: Record<string, any> = {
  'auto-insurance': {
    title: 'Auto Insurance',
    subtitle: 'Next-Generation Actuarial Precision & Claims Automation',
    description: 'Achtrex delivers the ultimate data infrastructure for the modern insurance sector. By integrating our high-velocity VIN decoding, ADAS feature extraction, and historical vehicle records, actuaries can construct predictive risk models with unprecedented precision. We eliminate the guesswork in policy pricing by streaming real-time data on exact factory specifications, active safety systems, and historical accident records directly into your core underwriting engines.',
    challenges: [
      'Blind spots in factory-installed ADAS features which drastically skew risk profiles and severity projections.',
      'Relying on delayed or incomplete total-loss and accident histories during rapid underwriting decisions.',
      'High operational overhead and friction caused by manual data entry, leading to misquoted policies and poor UX.'
    ],
    solutions: [
      'Sub-second VIN Decoding: Instantly retrieve exhaustive vehicle specifications, including standard and optional safety equipment.',
      'Automated Ingestion: Stream comprehensive vehicle history and market value data directly into actuarial models.',
      'Scalable Pipelines: Drastically reduce manual processing time, accelerating claim resolutions and improving loss ratios.'
    ],
    capabilities: [
      'ADAS & Safety Feature Verification via VIN',
      'Instant Total Loss & Salvage History Checks',
      'Real-time Market Value Appraisals for Claims',
      'Automated Vehicle Image OCR for Rapid Intake'
    ],
    icon: Shield,
    apis: ['VIN Decoding API', 'Vehicle History API', 'Market Value API', 'OCR API']
  },
  'car-dealerships': {
    title: 'Car Dealerships',
    subtitle: 'Hyper-Accelerate Inventory Turnover & Maximize Gross',
    description: "Transform your dealership operations with Achtrex\'s absolute market intelligence layer. We deliver real-time market valuations, exact OEM specifications, and competitive pricing insights natively into your Dealer Management System (DMS). Equip your sales, BDC, and acquisition teams with unassailable data transparency to accelerate inventory turnover, optimize acquisition costs at auction, and build unbreakable trust with your buyers.",
    challenges: [
      'Pricing pre-owned inventory competitively in a rapidly fluctuating market without sacrificing front-end gross.',
      'Inaccurately representing vehicle trims and expensive factory options online, leading to lost digital sales.',
      'Slow and inefficient appraisal processes that bottleneck trade-ins and delay getting inventory front-line ready.'
    ],
    solutions: [
      'Algorithmic Pricing: Leverage our Real-time Market Value API to determine optimal acquisition and retail pricing.',
      'Automated Merchandising: Utilize comprehensive VIN decoding to automatically generate rich, converting descriptions.',
      'Digital Showroom Integration: Embed instant vehicle history and specification reports directly into your VDPs.'
    ],
    capabilities: [
      'Automated Window Sticker (Monroney) Generation',
      'Live Wholesale vs. Retail Price Arbitrage Metrics',
      'Instant Trade-In Valuation & Spec Verification',
      'Historical Sales Data & Days-to-Turn Analytics'
    ],
    icon: Car,
    apis: ['VIN Decoding API', 'Window Sticker API', 'Market Value API', 'Sales History API']
  },
  'auto-repair': {
    title: 'Auto Repair Service',
    subtitle: 'Streamline Diagnostics, Parts, and Service Operations',
    description: "Enhance your shop management with instantaneous access to OEM maintenance schedules, dynamic repair pricing, and predictive diagnostic intelligence. Achtrex equips service centers with the exact mechanical specifications, fluid capacities, and technical service bulletins needed to service highly-complex modern vehicles. Reduce technician research time, increase bay turnover, and eliminate parts return friction.",
    challenges: [
      'Locating accurate, up-to-date OEM repair procedures and labor times for a massive diversity of modern vehicles.',
      'Translating complex OBD2 diagnostic trouble codes into actionable, step-by-step repair paths.',
      'Managing supply chain delays and accurately identifying cross-compatible parts for specific niche sub-models.'
    ],
    solutions: [
      'Direct Data Access: Provide technicians with instant access to comprehensive maintenance schedules and capacities.',
      'AI Diagnostic Routing: Deploy our LUMI engine to instantly map error codes to known fixes, drastically reducing diag time.',
      'Parts Cross-Reference: Seamlessly integrate our vast parts database with your Shop Management System (SMS).'
    ],
    capabilities: [
      'Live OEM Maintenance & Fluid Capacity Lookups',
      'Predictive OBD2 Code Resolution via AI',
      'Accurate Labor Time & Repair Cost Estimation',
      'Real-time Technical Service Bulletin (TSB) Alerts'
    ],
    icon: Wrench,
    apis: ['Repair Pricing API', 'Vehicle Maintenance API', 'Technical Service Bulletins API', 'LUMI Engine']
  },
  'car-website': {
    title: 'Car Website',
    subtitle: 'Enrich Your Digital Automotive Content Ecosystem',
    description: "Supercharge your automotive blog, review site, or consumer portal with enterprise-grade vehicle specifications, high-resolution imagery, and dynamic performance metrics. Achtrex allows digital publishers to construct massive, highly-accurate vehicle databases without the crippling overhead of manual data curation. Ensure your audience always has access to the most authoritative, interactive automotive content on the web.",
    challenges: [
      'Sourcing exhaustive and up-to-date vehicle specifications across global markets and thousands of distinct trims.',
      'Maintaining high-quality databases of vehicle dimensions, EV battery ranges, and standard features.',
      'Keeping users engaged and increasing dwell time with dynamic, interactive, and visually rich data.'
    ],
    solutions: [
      'Automated CMS Ingestion: Pull real-time, exhaustive specifications directly into your publishing backend.',
      'EV Intelligence: Access highly specific EV metrics, including battery chemistry, charging curves, and range data.',
      'Interactive Widgets: Enhance editorial reviews with accurate market value trends and historical depreciation charts.'
    ],
    capabilities: [
      'Complete Global Vehicle Spec Database Access',
      'High-Resolution OEM Color & Interior Imagery',
      'Deep EV Metrics (Charging Speeds, Architecture)',
      'Historical Depreciation & Value Retention Curves'
    ],
    icon: Monitor,
    apis: ['Vehicle Specifications API', 'EV Specifications API', 'Vehicle Image API']
  },
  'classifieds-websites': {
    title: 'Classifieds Website',
    subtitle: 'Build Unshakable Trust in Peer-to-Peer Marketplaces',
    description: "Protect your marketplace users and dramatically improve listing quality by automatically verifying VINs, checking stolen vehicle registries, and providing objective market value context. Achtrex provides the essential data infrastructure to transform a chaotic peer-to-peer automotive classifieds site into a secure, transparent, and highly efficient transactional platform.",
    challenges: [
      'Combating fraudulent listings, cloned VINs, and inaccurate vehicle descriptions uploaded by malicious sellers.',
      'Sellers overpricing or underpricing their vehicles, leading to marketplace stagnation and poor liquidity.',
      'A fundamental lack of trust between anonymous buyers and sellers regarding the true condition of a vehicle.'
    ],
    solutions: [
      'Instant Verification: Automatically verify every submitted VIN to flag invalid formats and check stolen registries.',
      'Market Value Context: Provide integrated, dynamic market value widgets to educate buyers and sellers on fair pricing.',
      'Trust Infrastructure: Generate automatic vehicle history summaries and title checks to establish immediate buyer confidence.'
    ],
    capabilities: [
      'Automated Listing Enrichment via VIN Input',
      'Live Stolen Vehicle & Salvage Title Checks',
      'Dynamic Price Rating Badges (Great Price, Fair Price)',
      'Instant Verification Badges for Verified Listings'
    ],
    icon: FileText,
    apis: ['Stolen Vehicle API', 'Market Value API', 'VIN Title Check API']
  },
  'car-rental': {
    title: 'Car Rental',
    subtitle: 'Optimize Fleet Utilization, Lifecycle & Disposition Value',
    description: "Manage your rental fleet with surgical precision by tracking real-time vehicle depreciation, automating preventative maintenance schedules, and streamlining vehicle onboarding. Achtrex provides fleet operators with the macroeconomic data necessary to determine the exact optimal moment to acquire or defleet assets, maximizing overall fleet profitability and reducing operational downtime.",
    challenges: [
      'Tracking the exact specifications, technology packages, and trims of thousands of active, mobile fleet vehicles.',
      'Determining the financially optimal time to sell off fleet vehicles before they cross critical depreciation cliffs.',
      'Managing complex preventative maintenance schedules across diverse makes to avoid catastrophic failures.'
    ],
    solutions: [
      'Instant Onboarding: Instantly ingest new vehicles into your fleet management system by decoding the VIN.',
      'Disposition Optimization: Monitor real-time fleet market value to algorithmically optimize your sell-off timing.',
      'Automated Maintenance: Trigger maintenance workflows based on exact OEM schedules tailored to each specific vehicle.'
    ],
    capabilities: [
      'Bulk Fleet VIN Decoding & Spec Normalization',
      'Live Fleet Depreciation & Market Value Tracking',
      'Automated OEM Maintenance Milestone Alerts',
      'Predictive Analytics for Optimal Defleeting Timing'
    ],
    icon: Briefcase,
    apis: ['Vehicle Maintenance API', 'Market Value API', 'VIN Decoding API']
  },
  'auto-parts': {
    title: 'Auto Parts Company',
    subtitle: 'Ensure Perfect Fitment & Eliminate Return Friction',
    description: "Drastically reduce return rates and improve customer satisfaction by integrating precise vehicle specifications and guaranteed fitment data into your e-commerce platform. Achtrex bridges the gap between complex ACES/PIES catalog data and consumer-friendly shopping experiences, ensuring that your customers always purchase the exact right part for their specific vehicle configuration.",
    challenges: [
      'Crippling return rates and reverse-logistics costs caused by customers purchasing incompatible parts.',
      'Customers struggling to identify their exact vehicle sub-model, engine code, or trim level from confusing dropdowns.',
      'Managing and normalizing massive, complex ACES/PIES catalog data across thousands of aftermarket manufacturers.'
    ],
    solutions: [
      'Seamless Lookup: Allow customers to shop for parts by simply entering their License Plate or VIN.',
      'Precision Mapping: Map highly specific vehicle sub-models and engine codes directly to your aftermarket inventory.',
      'Guaranteed Fitment: Provide absolute confidence at checkout with our fitment APIs, increasing conversion rates.'
    ],
    capabilities: [
      'License Plate-to-VIN & Exact Spec Conversion',
      'Deep Engine Code & Transmission Identification',
      'ACES/PIES Data Normalization & Mapping',
      'Automated Fitment Guarantee Badging API'
    ],
    icon: Tag,
    apis: ['License Plate API', 'VIN Decoding API', 'Vehicle Specifications API']
  },
  'car-finance': {
    title: 'Car Finance',
    subtitle: 'Instantaneous Loan-to-Value & Risk Assessments',
    description: "Minimize institutional risk and approve automotive loans instantly with real-time market value algorithms, title checks, and auction history verification. Achtrex empowers lenders with the definitive, objective data required to assess exact collateral value, ensuring that your portfolios are protected against market volatility, title washing, and synthetic fraud.",
    challenges: [
      'Assessing the highly accurate collateral value of a vehicle in a volatile market to determine safe LTV limits.',
      'Verifying title status, brand history, and preventing loan origination on salvage, rebuilt, or stolen vehicles.',
      'Time-consuming manual loan approval processes that require underwriters to consult multiple fragmented data sources.'
    ],
    solutions: [
      'Algorithmic LTV: Instantly calculate accurate LTV ratios by pulling real-time retail and wholesale market valuations.',
      'Fraud Prevention: Automatically check every application for salvage titles, total loss history, and severe accidents.',
      'Automated Underwriting: Streamline approvals with instantaneous, high-velocity data ingestion directly into your LOS.'
    ],
    capabilities: [
      'Real-time Wholesale & Retail Market Appraisals',
      'Instant Title Brand & Total Loss Verification',
      'Historical Auction Price Data for Collateral Assessment',
      'Automated Loan Origination System (LOS) Integration'
    ],
    icon: Database,
    apis: ['Market Value API', 'VIN Title Check API', 'Auction History API']
  },
  'manufacturers': {
    title: 'Manufacturers',
    subtitle: 'Unprecedented OEM Intelligence & Global Market Analytics',
    description: "Leverage our massive global automotive data lakes to gain aggressive competitive intelligence, track production insights, and analyze macroeconomic market trends. Achtrex provides OEMs with the macro and micro-level telemetry required to analyze competitor feature adoption, track long-term vehicle depreciation curves, and optimize future vehicle architectures.",
    challenges: [
      'Gaining granular visibility into competitor vehicle specifications, feature bundling, and trim-level pricing strategies.',
      'Tracking long-term vehicle depreciation and residual value retention to optimize lease pricing and captive finance offers.',
      'Understanding historical market trends and consumer feature preferences to inform future vehicle development.'
    ],
    solutions: [
      'Competitor Telemetry: Access exhaustive datasets detailing competitor specs, ADAS adoption rates, and exact pricing.',
      'Residual Analysis: Utilize historical market value APIs to analyze residual value retention across specific models.',
      'Macro Planning: Integrate our global automotive data directly into your strategic planning and intelligence dashboards.'
    ],
    capabilities: [
      'Global Competitor Specification & Pricing Matrices',
      'Granular Feature Adoption & Packaging Analytics',
      'Long-Term Residual Value & Depreciation Modeling',
      'Macro-Economic Vehicle Sales & Turn-Rate Insights'
    ],
    icon: Database,
    apis: ['Vehicle Specifications API', 'Market Value API', 'Sales History API']
  },
  'default': {
    title: 'Automotive Industry Solutions',
    subtitle: 'Powering the Future of Enterprise Mobility',
    description: "Integrate comprehensive vehicle data APIs and AI reasoning engines to ruthlessly accelerate your automotive business operations. Achtrex provides the robust, high-velocity data infrastructure required to build the next generation of digital automotive platforms, from intelligent marketplaces to automated underwriting systems.",
    challenges: [
      'Fragmented, inaccurate, and heavily siloed vehicle data sources that require immense engineering effort to normalize.',
      'High latency and poor reliability in legacy automotive API providers, causing critical bottlenecks in production.',
      'A complete lack of intelligent, predictive insights that move beyond basic data retrieval into true automated reasoning.'
    ],
    solutions: [
      'Unified Infrastructure: Access high-speed GraphQL and REST API endpoints that deliver normalized, production-ready data.',
      'Extreme Reliability: Rely on enterprise-grade infrastructure built for scale, offering real-time synchronization with 99.99% uptime.',
      'Cognitive Automation: Leverage our proprietary LUMI AI models, specifically trained for complex workflow automation.'
    ],
    capabilities: [
      'Unified, Normalized Global Vehicle Data Lake',
      'High-Velocity, Low-Latency GraphQL & REST APIs',
      'Proprietary Automotive AI (LUMI) Integration',
      'Bank-Grade Security & 99.99% Uptime SLA'
    ],
    icon: Database,
    apis: ['VIN Decoding API', 'Market Value API', 'License Plate API', 'LUMI Engine']
  }
};

export default function IndustryClient({ slug }: { slug: string }) {
  const data = industryData[slug] || industryData['default'];
  const displayTitle = industryData[slug] ? data.title : slug.split('-').map((w:string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-slate-900 pb-20">
      {/* Header */}
      <InnerPageHeader title={displayTitle} subtitle={data.subtitle} />

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Col */}
          <div className="lg:col-span-8 space-y-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Industry Overview</h2>
              <p className="text-slate-500 leading-relaxed font-medium text-lg">
                {data.description}
              </p>
            </div>

            {/* NEW SECTION: Capabilities */}
            {data.capabilities && (
              <div className="bg-white border border-slate-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold tracking-tight text-[#001a22] mb-6">What We Can Do For You</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.capabilities.map((cap: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-[#f8fafc] border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-[#00a9ce] shrink-0 mt-0.5" />
                      <span className="font-semibold text-slate-700">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-slate-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight text-[#001a22]">The Challenge</h3>
                <ul className="space-y-4">
                  {data.challenges.map((challenge: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 font-medium bg-white p-4 border border-slate-200 shadow-sm">
                      <div className="w-2 h-2 rounded-none bg-[#F2147A] shrink-0 mt-2" />
                      <span className="leading-relaxed text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight text-[#001a22]">Our Solution</h3>
                <ul className="space-y-4">
                  {data.solutions.map((solution: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 font-medium bg-[#001a22] text-white p-4 border border-[#002b3d] shadow-sm">
                      <ShieldCheck className="w-5 h-5 text-[#76bc1d] shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-sm text-slate-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Col */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200 rounded-none p-8 sticky top-32 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-slate-900">Recommended APIs & Engines</h3>
              <div className="space-y-3">
                {data.apis.map((api: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 hover:border-[#00a9ce] hover:bg-white transition-colors cursor-default">
                    <Database className="w-4 h-4 text-[#00a9ce]" />
                    <span className="font-bold text-sm text-slate-700">{api}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-slate-200">
                <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 w-full bg-[#00a9ce] text-white font-bold py-4 rounded-none hover:bg-[#001a22] transition-all uppercase tracking-wide text-sm">
                  Talk to an Expert <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
'''

with open("app/(website)/industries/[slug]/industry-client.tsx", "w", encoding="utf-8") as f:
    f.write(content)
