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
    description: 'Achtrex delivers the ultimate data infrastructure designed from the ground up for the modern insurance sector. Historically, underwriting and claims adjustment have relied on fragmented, often self-reported data that introduces massive institutional risk. By seamlessly integrating our high-velocity VIN decoding, Advanced Driver Assistance Systems (ADAS) feature extraction, and historical vehicle records, actuaries can construct predictive risk models with unprecedented, surgical precision.\\n\\nWe eliminate the guesswork inherent in policy pricing. By streaming real-time data on exact factory specifications, active safety systems (such as autonomous emergency braking and lane keep assist), and historical accident records directly into your core underwriting engines, you can dynamically adjust premiums based on the true physical capabilities and history of the insured vehicle. In the claims department, our intelligent APIs allow for rapid identification of total loss thresholds, reducing manual appraisal time and improving overall customer experience during critical moments.',
    challenges: [
      'Blind spots in factory-installed ADAS features which drastically skew risk profiles. Without knowing exactly what active safety features are installed on a specific VIN, underwriters are forced to rely on generalized model data, leading to mispriced risk and unexpected severity projections.',
      'Relying on delayed, fragmented, or incomplete total-loss and accident histories during rapid underwriting decisions. This lack of transparency allows high-risk or previously salvaged vehicles to enter the portfolio undetected.',
      'High operational overhead and friction caused by manual data entry in claims and onboarding, leading to misquoted policies, poor user experiences, and highly inefficient claims resolution pipelines.'
    ],
    solutions: [
      'Sub-second VIN Decoding & Spec Extraction: Instantly retrieve exhaustive vehicle specifications—including standard and optional safety equipment—ensuring that every policy is priced against the vehicle\\'s exact physical footprint and technological capabilities.',
      'Automated Intelligence Ingestion: Stream comprehensive vehicle history, title branding, and real-time market value data directly into your actuarial models to automatically flag high-risk vehicles before origination.',
      'Scalable Claim Pipelines: Drastically reduce manual processing time by automating the identification of exact replacement parts, trim levels, and ACV (Actual Cash Value), accelerating claim resolutions and significantly improving loss ratios.'
    ],
    capabilities: [
      'Deep ADAS & Active Safety Feature Verification via VIN',
      'Instantaneous Total Loss, Salvage, and Title History Checks',
      'Real-time Market Value Appraisals for Accurate Claims Adjustment',
      'Automated Vehicle Image OCR for Rapid Intake and Validation'
    ],
    icon: Shield,
    apis: ['VIN Decoding API', 'Vehicle History API', 'Market Value API', 'OCR API']
  },
  'car-dealerships': {
    title: 'Car Dealerships',
    subtitle: 'Hyper-Accelerate Inventory Turnover & Maximize Gross Margin',
    description: "Transform your entire dealership operation with Achtrex\\'s absolute market intelligence layer. In a highly volatile automotive retail environment, intuition is no longer sufficient; dealerships must operate on definitive, real-time data. We deliver live market valuations, exact OEM specifications, and aggressive competitive pricing insights natively into your Dealer Management System (DMS) and CRM.\\n\\nEquip your sales staff, BDC, and acquisition teams with unassailable data transparency. Whether you are appraising a vehicle at the trade-in desk or acquiring inventory from wholesale auctions, our APIs ensure you never overpay for a vehicle and never under-price a highly optioned trim. On the digital retail front, our automated merchandising tools guarantee that every vehicle on your website is represented with exhaustive accuracy, building unbreakable trust with your buyers and hyper-accelerating your days-to-turn.",
    challenges: [
      'Pricing pre-owned inventory competitively in a rapidly fluctuating market without sacrificing front-end gross. Relying on outdated book values often results in aged inventory or left money on the table.',
      'Inaccurately representing complex vehicle trims and expensive factory options online. Missing a ,000 technology package in a listing directly leads to lost digital sales and depressed retail prices.',
      'Slow and highly inefficient appraisal processes that bottleneck trade-ins, frustrate customers, and significantly delay getting newly acquired inventory front-line ready.'
    ],
    solutions: [
      'Algorithmic Pricing Architecture: Leverage our Real-time Market Value API to algorithmically determine the optimal acquisition price at auction and the maximum profitable retail price on your lot.',
      'Automated Merchandising & VDP Generation: Utilize our comprehensive VIN decoding to automatically generate rich, highly converting vehicle descriptions, completely eliminating manual data entry for your marketing team.',
      'Digital Showroom Integration: Embed instant vehicle history, window stickers, and exact specification reports directly into your VDPs (Vehicle Details Pages) to establish immediate authority and buyer trust.'
    ],
    capabilities: [
      'Automated Window Sticker (Monroney) Generation & Reproduction',
      'Live Wholesale vs. Retail Price Arbitrage Metrics for Buyers',
      'Instant Trade-In Valuation & Exact Factory Spec Verification',
      'Historical Sales Data & Predictive Days-to-Turn Analytics'
    ],
    icon: Car,
    apis: ['VIN Decoding API', 'Window Sticker API', 'Market Value API', 'Sales History API']
  },
  'auto-repair': {
    title: 'Auto Repair Service',
    subtitle: 'Streamline Diagnostics, Parts Sourcing, and Service Operations',
    description: "Enhance your shop management and service bays with instantaneous access to OEM maintenance schedules, dynamic repair pricing, and predictive diagnostic intelligence. As modern vehicles become increasingly complex and software-driven, repair facilities face an immense challenge in sourcing accurate repair procedures. Achtrex bridges this gap by equipping service centers with the exact mechanical specifications, fluid capacities, and technical service bulletins required to service any vehicle.\\n\\nReduce technician research time, drastically increase bay turnover, and eliminate the friction of incorrect parts ordering. By integrating our proprietary intelligence directly into your workflow, service advisors can provide instantly accurate quotes to customers, while technicians are routed directly to the root cause of complex mechanical and electrical failures using our AI-driven diagnostic routing algorithms.",
    challenges: [
      'Locating accurate, up-to-date OEM repair procedures, wiring diagrams, and specific labor times for an ever-expanding and massively diverse ecosystem of modern vehicles.',
      'Translating complex, often ambiguous OBD2 diagnostic trouble codes (DTCs) into actionable, step-by-step repair paths without spending hours on exploratory teardowns.',
      'Managing supply chain delays and accurately identifying cross-compatible parts for specific niche sub-models, leading to crippling return rates and occupied service bays.'
    ],
    solutions: [
      'Direct OEM Data Access: Provide your technicians and service advisors with instant, normalized access to comprehensive maintenance schedules, precise fluid capacities, and step-by-step procedures.',
      'AI-Powered Diagnostic Routing: Deploy our LUMI cognitive engine to instantly map obscure error codes and symptoms to statistically probable fixes, drastically reducing diagnostic time.',
      'Intelligent Parts Cross-Reference: Seamlessly integrate our vast aftermarket and OEM parts database with your Shop Management System (SMS) to guarantee perfect fitment on the first order.'
    ],
    capabilities: [
      'Live OEM Maintenance Schedules & Precise Fluid Capacity Lookups',
      'Predictive OBD2 Trouble Code Resolution via Cognitive AI',
      'Accurate Labor Time & Dynamic Repair Cost Estimation',
      'Real-time Technical Service Bulletin (TSB) & Recall Alerts'
    ],
    icon: Wrench,
    apis: ['Repair Pricing API', 'Vehicle Maintenance API', 'Technical Service Bulletins API', 'LUMI Engine']
  },
  'car-website': {
    title: 'Car Website',
    subtitle: 'Enrich Your Digital Automotive Content Ecosystem',
    description: "Supercharge your automotive blog, editorial review site, or consumer portal with enterprise-grade vehicle specifications, high-resolution imagery, and dynamic performance metrics. In the highly competitive digital publishing space, authoritative content is the ultimate differentiator. Achtrex allows digital publishers to construct massive, highly-accurate vehicle databases without the crippling overhead of manual data curation.\\n\\nEnsure your audience always has access to the most authoritative, interactive automotive content on the web. From granular internal combustion engine displacement metrics to deep EV battery architectures, our APIs stream perfectly formatted data directly into your CMS. By providing your users with rich comparative tools, live market value trends, and historical depreciation charts, you dramatically increase session duration, engagement, and overall platform authority.",
    challenges: [
      'Sourcing exhaustive, reliable, and continuously updated vehicle specifications across global markets and tens of thousands of distinct historical and modern trims.',
      'Maintaining high-quality databases of highly specific metrics—such as exact vehicle dimensions, cargo volume, EV battery ranges, and standard features—without immense editorial labor.',
      'Keeping discerning users engaged and increasing platform dwell time with dynamic, interactive, and visually rich data rather than static blocks of text.'
    ],
    solutions: [
      'Automated CMS Ingestion Pipelines: Pull real-time, exhaustive specifications directly into your publishing backend, ensuring your platform automatically scales alongside new vehicle releases.',
      'Comprehensive EV Intelligence: Access highly specific electric vehicle metrics, including exact battery chemistries, granular charging curves, and real-world range data to cater to the modern buyer.',
      'Interactive Analytical Widgets: Enhance editorial reviews with accurate market value trends, historical depreciation charts, and complex cross-model comparison algorithms.'
    ],
    capabilities: [
      'Complete Global Vehicle Spec Database Access (Historical & Modern)',
      'High-Resolution OEM Color & Interior Imagery Integration',
      'Deep EV Metrics (Charging Speeds, Battery Architecture, Range)',
      'Historical Depreciation & Value Retention Analysis Curves'
    ],
    icon: Monitor,
    apis: ['Vehicle Specifications API', 'EV Specifications API', 'Vehicle Image API']
  },
  'classifieds-websites': {
    title: 'Classifieds Website',
    subtitle: 'Build Unshakable Trust in Peer-to-Peer Marketplaces',
    description: "Protect your marketplace users and dramatically elevate the quality of your listings by automatically verifying VINs, checking stolen vehicle registries, and providing objective market value context. Peer-to-peer automotive marketplaces inherently suffer from an massive trust deficit. Achtrex provides the essential data infrastructure required to transform a chaotic, low-trust classifieds site into a secure, transparent, and highly efficient transactional platform.\\n\\nBy algorithmically validating every vehicle that enters your platform, you eradicate fraudulent listings and cloned VINs before they reach your buyers. Furthermore, by equipping buyers and sellers with objective pricing context and transparent vehicle histories, you remove the friction of negotiation, vastly improving marketplace liquidity and establishing your platform as the definitive, safe destination for automotive commerce.",
    challenges: [
      'Endlessly combating fraudulent listings, cloned VINs, title washing, and highly inaccurate vehicle descriptions uploaded by malicious or uneducated private sellers.',
      'Sellers vastly overpricing or underpricing their vehicles due to a lack of market knowledge, leading to severe marketplace stagnation and poor inventory liquidity.',
      'A fundamental, structural lack of trust between anonymous buyers and sellers regarding the true mechanical condition, ownership history, and legal status of a vehicle.'
    ],
    solutions: [
      'Instant Infrastructure Verification: Automatically verify every submitted VIN against authoritative global databases to instantly flag invalid formats and cross-reference stolen vehicle registries.',
      'Objective Market Value Context: Provide integrated, dynamic market value widgets on every single listing to educate both buyers and sellers on fair pricing, encouraging realistic transactions.',
      'Comprehensive Trust Infrastructure: Generate automatic vehicle history summaries, rigorous title checks, and exact feature lists to establish immediate, unassailable buyer confidence.'
    ],
    capabilities: [
      'Automated Listing Enrichment & Spec Population via VIN Input',
      'Live Stolen Vehicle, Total Loss & Salvage Title Verification',
      'Dynamic Price Rating Badges (e.g., Great Price, Fair Price)',
      'Instant Verification Badges for Authenticated Marketplace Listings'
    ],
    icon: FileText,
    apis: ['Stolen Vehicle API', 'Market Value API', 'VIN Title Check API']
  },
  'car-rental': {
    title: 'Car Rental',
    subtitle: 'Optimize Fleet Utilization, Lifecycle & Disposition Value',
    description: "Manage your rental fleet with surgical precision by tracking real-time vehicle depreciation, automating preventative maintenance schedules, and streamlining vehicle onboarding. Operating a large-scale rental fleet requires walking a tightrope between maximum utilization and avoiding massive depreciation cliffs. Achtrex provides fleet operators with the definitive macroeconomic data necessary to determine the exact optimal moment to acquire or defleet assets.\\n\\nOur infrastructure allows you to instantly ingest and categorize new vehicles, track their real-time market value against historical depreciation curves, and automate complex OEM maintenance schedules. By ensuring your vehicles are impeccably maintained and defleeted at the precise peak of their residual value, you maximize overall fleet profitability and drastically reduce unexpected operational downtime.",
    challenges: [
      'Accurately tracking the exact factory specifications, technology packages, and specific trims of thousands of active, highly mobile fleet vehicles across various geographic regions.',
      'Determining the mathematically optimal time to sell off fleet vehicles into the wholesale or retail market before they cross critical depreciation cliffs and lose immense value.',
      'Managing complex, highly variable preventative maintenance schedules across incredibly diverse makes and models to avoid catastrophic mechanical failures and maximize utilization rates.'
    ],
    solutions: [
      'Instant Fleet Onboarding: Instantly ingest new vehicles into your fleet management platform by decoding the VIN, automatically populating every exact factory specification and asset detail.',
      'Algorithmic Disposition Optimization: Monitor real-time fleet market value to algorithmically optimize your sell-off timing, ensuring maximum residual value recovery on every asset.',
      'Automated Preventative Maintenance: Trigger automated maintenance workflows and service alerts based on the exact OEM schedules tailored strictly to each specific vehicle\\'s engine and chassis.'
    ],
    capabilities: [
      'Bulk Fleet VIN Decoding & Specification Normalization',
      'Live Fleet Depreciation Tracking & Portfolio Market Value',
      'Automated OEM Maintenance Milestone & Recall Alerts',
      'Predictive Disposition Analytics for Optimal Defleeting Timing'
    ],
    icon: Briefcase,
    apis: ['Vehicle Maintenance API', 'Market Value API', 'VIN Decoding API']
  },
  'auto-parts': {
    title: 'Auto Parts Company',
    subtitle: 'Ensure Perfect Fitment & Completely Eliminate Return Friction',
    description: "Drastically reduce return rates and fundamentally transform customer satisfaction by integrating precise vehicle specifications and guaranteed fitment data into your e-commerce platform. The aftermarket auto parts industry is plagued by the complexities of ACES/PIES catalog data and the high cost of reverse logistics. Achtrex bridges the gap between these massive engineering databases and a consumer-friendly shopping experience.\\n\\nWe ensure that your customers always purchase the exact right part for their specific vehicle configuration. By allowing users to shop via License Plate or precise VIN decoding, our APIs map their exact engine code, transmission type, and sub-model directly to your inventory. Eliminate the frustration of ambiguous dropdown menus, increase your checkout conversion rates, and eradicate the crippling costs associated with incompatible parts returns.",
    challenges: [
      'Crippling return rates and massive reverse-logistics costs caused entirely by customers inadvertently purchasing incompatible parts for their specific vehicle configuration.',
      'Customers struggling to identify their exact vehicle sub-model, engine displacement, or trim level from confusing, multi-tiered year/make/model dropdown menus.',
      'Managing, ingesting, and successfully normalizing massive, highly complex ACES/PIES catalog data across thousands of disparate aftermarket part manufacturers.'
    ],
    solutions: [
      'Seamless Fitment Lookup: Allow your customers to seamlessly shop for compatible parts by simply entering their License Plate or VIN, completely bypassing complex vehicle identification trees.',
      'High-Precision Inventory Mapping: Map highly specific vehicle sub-models, exact engine codes, and chassis configurations directly to your complex aftermarket inventory databases.',
      'Guaranteed Fitment Architecture: Provide absolute, unassailable confidence at checkout with our guaranteed fitment APIs, drastically increasing conversion rates while destroying return metrics.'
    ],
    capabilities: [
      'License Plate-to-VIN & Exact Specification Conversion',
      'Deep Engine Code, Drivetrain & Transmission Identification',
      'Comprehensive ACES/PIES Data Normalization & Inventory Mapping',
      'Automated Fitment Guarantee Badging & Compatibility API'
    ],
    icon: Tag,
    apis: ['License Plate API', 'VIN Decoding API', 'Vehicle Specifications API']
  },
  'car-finance': {
    title: 'Car Finance',
    subtitle: 'Instantaneous Loan-to-Value & Comprehensive Risk Assessments',
    description: "Minimize institutional risk and approve automotive loans instantly with real-time market value algorithms, rigorous title checks, and auction history verification. In automotive finance, speed and accuracy are paramount. Underwriters must assess the exact value of collateral in a highly volatile market to determine safe Loan-to-Value (LTV) limits. Achtrex empowers lenders with the definitive, objective data required to make these decisions instantaneously.\\n\\nEnsure that your portfolios are strictly protected against market volatility, title washing, and synthetic fraud. By integrating our APIs directly into your Loan Origination System (LOS), you can automatically flag salvage titles, cross-reference total loss databases, and pull live wholesale appraisals in milliseconds. Streamline your approval pipelines and fund loans with absolute confidence in your collateral.",
    challenges: [
      'Assessing the highly accurate, real-time collateral value of a vehicle in a rapidly fluctuating market to determine mathematically safe Loan-to-Value (LTV) and advance limits.',
      'Rigorously verifying title status, historical brand history, and actively preventing loan origination on severely depreciated salvage, rebuilt, or stolen vehicles.',
      'Time-consuming, highly manual loan approval processes that require underwriters to painstakingly consult multiple fragmented, legacy data sources to verify asset integrity.'
    ],
    solutions: [
      'Algorithmic LTV Assessment: Instantly calculate highly accurate LTV ratios by pulling real-time retail, wholesale, and trade-in market valuations based on exact local market telemetry.',
      'Automated Fraud Prevention: Automatically check every single application against national databases for salvage titles, total loss history, odometer rollback, and severe accident indicators.',
      'Automated Underwriting Integration: Streamline approvals with instantaneous, high-velocity data ingestion directly into your Loan Origination System (LOS) to fund loans faster than competitors.'
    ],
    capabilities: [
      'Real-time Wholesale, Trade-In, & Retail Market Appraisals',
      'Instant Title Brand, Odometer & Total Loss Verification',
      'Historical Auction Price Data for Deep Collateral Assessment',
      'Direct Automated Loan Origination System (LOS) Integration'
    ],
    icon: Database,
    apis: ['Market Value API', 'VIN Title Check API', 'Auction History API']
  },
  'manufacturers': {
    title: 'Manufacturers',
    subtitle: 'Unprecedented OEM Intelligence & Global Market Analytics',
    description: "Leverage our massive global automotive data lakes to gain aggressive competitive intelligence, track precise production insights, and analyze macroeconomic market trends. For Original Equipment Manufacturers (OEMs), understanding the exact movements of competitors and the historical trajectory of the market is critical to long-term survival. Achtrex provides OEMs with the macro and micro-level telemetry required to analyze competitor feature adoption, track long-term vehicle depreciation curves, and optimize future vehicle architectures.\\n\\nOur enterprise APIs allow your strategic planning teams to access exhaustive datasets detailing exactly how competitors are pricing specific trims, bundling ADAS features, and reacting to market pressures. By analyzing our historical market value retention metrics, your captive finance arms can perfectly optimize lease pricing, while your engineering teams use the insights to shape the future of global mobility.",
    challenges: [
      'Gaining granular, highly structured visibility into competitor vehicle specifications, feature bundling strategies, and highly specific trim-level pricing architectures across global markets.',
      'Tracking long-term vehicle depreciation and precise residual value retention to optimize highly competitive lease pricing and captive finance subvention offers.',
      'Understanding broad historical market trends, exact consumer feature preferences, and shifting technological adoption curves to accurately inform future vehicle development.'
    ],
    solutions: [
      'Aggressive Competitor Telemetry: Access exhaustive, fully normalized datasets detailing competitor specs, exact ADAS adoption rates, battery architectures, and precise global pricing.',
      'Advanced Residual Analysis: Utilize our historical market value APIs to deeply analyze residual value retention across specific competing models and vehicle segments over multi-year horizons.',
      'Macro Strategic Planning: Integrate our immense, global automotive data lakes directly into your strategic planning and intelligence dashboards to inform executive-level architectural decisions.'
    ],
    capabilities: [
      'Global Competitor Specification & Complex Pricing Matrices',
      'Granular Feature Adoption, ADAS & Packaging Analytics',
      'Long-Term Residual Value & Lease Depreciation Modeling',
      'Macro-Economic Vehicle Sales & Global Turn-Rate Insights'
    ],
    icon: Database,
    apis: ['Vehicle Specifications API', 'Market Value API', 'Sales History API']
  },
  'default': {
    title: 'Automotive Industry Solutions',
    subtitle: 'Powering the Future of Enterprise Mobility & Intelligence',
    description: "Integrate comprehensive, highly-normalized vehicle data APIs and advanced AI reasoning engines to ruthlessly accelerate your automotive business operations. The automotive ecosystem is historically plagued by fragmented, siloed, and intensely difficult-to-parse data. Achtrex provides the robust, high-velocity data infrastructure required to shatter these silos and build the next generation of digital automotive platforms.\\n\\nWhether you are constructing intelligent consumer marketplaces, automating massive underwriting systems, or powering real-time logistics networks, Achtrex provides the architectural foundation. We offer real-time data synchronization, guaranteed 99.99% enterprise uptime, and completely normalized datasets, allowing your engineering teams to focus purely on product innovation rather than data wrangling.",
    challenges: [
      'Fragmented, inaccurate, and heavily siloed legacy vehicle data sources that require immense engineering effort, capital, and time to normalize into usable formats.',
      'High latency and incredibly poor reliability in legacy automotive API providers, causing critical, unacceptable bottlenecks in high-stakes production environments.',
      'A complete lack of intelligent, predictive insights in the market that move beyond basic tabular data retrieval into true, automated cognitive reasoning.'
    ],
    solutions: [
      'Unified Data Infrastructure: Access high-speed, modern GraphQL and REST API endpoints that deliver completely normalized, production-ready automotive data in milliseconds.',
      'Extreme Enterprise Reliability: Rely on infrastructure explicitly built for massive scale, offering real-time global synchronization backed by absolute 99.99% uptime guarantees.',
      'Cognitive Workflow Automation: Leverage our proprietary LUMI AI models, specifically trained for complex automotive reasoning, unstructured data parsing, and intelligent workflow automation.'
    ],
    capabilities: [
      'Unified, Highly Normalized Global Vehicle Data Lake',
      'High-Velocity, Low-Latency GraphQL & REST API Architecture',
      'Proprietary Automotive AI (LUMI) & Cognitive Integration',
      'Bank-Grade Encryption & Guaranteed 99.99% Uptime SLA'
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
              <h2 className="text-3xl font-bold tracking-tight text-[#001a22] mb-6">Overview</h2>
              {data.description.split('\\n\\n').map((paragraph: string, i: number) => (
                <p key={i} className="text-slate-600 leading-relaxed font-medium text-lg mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Capabilities (Reverted to standard un-boxed clean list) */}
            {data.capabilities && (
              <div className="space-y-6 pt-8 border-t border-slate-200">
                <h3 className="text-2xl font-bold tracking-tight text-[#001a22]">What We Can Do For You</h3>
                <ul className="space-y-4">
                  {data.capabilities.map((cap: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#00a9ce] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight text-[#001a22]">The Challenge</h3>
                <ul className="space-y-6">
                  {data.challenges.map((challenge: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                      <div className="w-2 h-2 rounded-none bg-[#00a9ce] shrink-0 mt-2.5" />
                      <span className="leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight text-[#001a22]">Our Solution</h3>
                <ul className="space-y-6">
                  {data.solutions.map((solution: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                      <ShieldCheck className="w-5 h-5 text-[#76bc1d] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Col */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200 rounded-none p-8 sticky top-32 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-slate-900">Recommended APIs</h3>
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
