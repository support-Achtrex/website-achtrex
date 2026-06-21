'use client';

import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Database, 
  Shield, 
  Wrench, 
  Car, 
  Briefcase, 
  FileText, 
  Monitor, 
  Tag, 
  WarningCircle as AlertCircle, 
  Lightning as Zap, 
  Target, 
  Stack as Layers, 
  Pulse as Activity, 
  Cpu, 
  Fingerprint,
  ChartLineUp as LineChart,
  CheckCircle as CheckCircle2,
  Globe,
  Truck,
  MapPin,
  Bank as Landmark
} from '@phosphor-icons/react';
import Link from 'next/link';
import { InnerPageHeader } from "@/components/inner-page-header";

const industryData: Record<string, any> = {
  'auto-insurance': {
    title: 'Auto Insurance',
    subtitle: 'Next-Generation Actuarial Precision & Claims Automation',
    color: 'from-[#00a9ce] to-[#174395]',
    description: 'Achtrex delivers the ultimate data infrastructure designed from the ground up for the modern insurance sector. Historically, underwriting and claims adjustment have relied on fragmented, often self-reported data that introduces massive institutional risk. By seamlessly integrating our high-velocity VIN decoding, Advanced Driver Assistance Systems (ADAS) feature extraction, and historical vehicle records, actuaries can construct predictive risk models with unprecedented, surgical precision.\n\nWe eliminate the guesswork inherent in policy pricing. By streaming real-time data on exact factory specifications, active safety systems, and historical accident records directly into your core underwriting engines, you can dynamically adjust premiums based on the true physical capabilities and history of the insured vehicle.',
    challenges: [
      'Blind spots in factory-installed ADAS features which drastically skew risk profiles. Underwriters rely on generalized data, leading to mispriced risk.',
      'Relying on delayed, fragmented, or incomplete total-loss and accident histories during rapid underwriting decisions.',
      'High operational overhead and friction caused by manual data entry in claims and onboarding, leading to misquoted policies.'
    ],
    solutions: [
      'Sub-second VIN Decoding: Instantly retrieve exhaustive vehicle specifications—including standard and optional safety equipment.',
      'Automated Intelligence: Stream comprehensive vehicle history, title branding, and real-time market value data directly into models.',
      'Scalable Claim Pipelines: Drastically reduce manual processing time by automating the identification of exact replacement parts and ACV.'
    ],
    capabilities: [
      { text: 'Deep ADAS & Active Safety Feature Verification via VIN', icon: ShieldCheck },
      { text: 'Instantaneous Total Loss, Salvage, and Title History Checks', icon: AlertCircle },
      { text: 'Real-time Market Value Appraisals for Accurate Claims Adjustment', icon: LineChart },
      { text: 'Automated Vehicle Image OCR for Rapid Intake and Validation', icon: Fingerprint }
    ],
    icon: Shield,
    apis: ['VIN Decoding API', 'Vehicle History API', 'Market Value API', 'OCR API']
  },
  'car-dealerships': {
    title: 'Car Dealerships',
    subtitle: 'Hyper-Accelerate Inventory Turnover & Maximize Gross Margin',
    color: 'from-[#F2147A] to-[#861F80]',
    description: "Transform your entire dealership operation with Achtrex's absolute market intelligence layer. In a highly volatile automotive retail environment, intuition is no longer sufficient; dealerships must operate on definitive, real-time data. We deliver live market valuations, exact OEM specifications, and aggressive competitive pricing insights natively into your Dealer Management System (DMS) and CRM.\n\nEquip your sales staff, BDC, and acquisition teams with unassailable data transparency. Whether you are appraising a vehicle at the trade-in desk or acquiring inventory from wholesale auctions, our APIs ensure you never overpay for a vehicle and never under-price a highly optioned trim.",
    challenges: [
      'Pricing pre-owned inventory competitively in a rapidly fluctuating market without sacrificing front-end gross.',
      'Inaccurately representing complex vehicle trims and expensive factory options online, leading to lost digital sales.',
      'Slow and highly inefficient appraisal processes that bottleneck trade-ins and significantly delay getting inventory front-line ready.'
    ],
    solutions: [
      'Algorithmic Pricing Architecture: Leverage our Real-time Market Value API to algorithmically determine the optimal acquisition price.',
      'Automated Merchandising: Utilize our comprehensive VIN decoding to automatically generate rich, highly converting vehicle descriptions.',
      'Digital Showroom Integration: Embed instant vehicle history and exact specification reports directly into your VDPs.'
    ],
    capabilities: [
      { text: 'Automated Window Sticker (Monroney) Generation', icon: FileText },
      { text: 'Live Wholesale vs. Retail Price Arbitrage Metrics', icon: LineChart },
      { text: 'Instant Trade-In Valuation & Exact Factory Spec Verification', icon: Target },
      { text: 'Historical Sales Data & Predictive Days-to-Turn Analytics', icon: Activity }
    ],
    icon: Car,
    apis: ['VIN Decoding API', 'Window Sticker API', 'Market Value API', 'Sales History API']
  },
  'auto-repair': {
    title: 'Auto Repair Service',
    subtitle: 'Streamline Diagnostics, Parts Sourcing, and Service Operations',
    color: 'from-[#174395] via-[#861F80] to-[#F2147A]',
    description: "Enhance your shop management and service bays with instantaneous access to OEM maintenance schedules, dynamic repair pricing, and predictive diagnostic intelligence. As modern vehicles become increasingly complex and software-driven, repair facilities face an immense challenge in sourcing accurate repair procedures. Achtrex bridges this gap by equipping service centers with the exact mechanical specifications, fluid capacities, and technical service bulletins required to service any vehicle.\n\nReduce technician research time, drastically increase bay turnover, and eliminate the friction of incorrect parts ordering. Service advisors can provide instantly accurate quotes to customers, while technicians are routed directly to the root cause of failures.",
    challenges: [
      'Locating accurate, up-to-date OEM repair procedures, wiring diagrams, and specific labor times for an ever-expanding ecosystem of modern vehicles.',
      'Translating complex, often ambiguous OBD2 diagnostic trouble codes (DTCs) into actionable, step-by-step repair paths.',
      'Managing supply chain delays and accurately identifying cross-compatible parts for specific niche sub-models.'
    ],
    solutions: [
      'Direct OEM Data Access: Provide your technicians and service advisors with instant, normalized access to comprehensive maintenance schedules.',
      'AI-Powered Diagnostic Routing: Deploy our LUMI engine to instantly map obscure error codes and symptoms to statistically probable fixes.',
      'Intelligent Parts Cross-Reference: Seamlessly integrate our vast aftermarket and OEM parts database with your Shop Management System.'
    ],
    capabilities: [
      { text: 'Live OEM Maintenance Schedules & Precise Fluid Capacity Lookups', icon: Database },
      { text: 'Predictive OBD2 Trouble Code Resolution via Cognitive AI', icon: Cpu },
      { text: 'Accurate Labor Time & Dynamic Repair Cost Estimation', icon: Target },
      { text: 'Real-time Technical Service Bulletin (TSB) & Recall Alerts', icon: AlertCircle }
    ],
    icon: Wrench,
    apis: ['Repair Pricing API', 'Vehicle Maintenance API', 'Technical Service Bulletins API', 'LUMI Engine']
  },
  'car-website': {
    title: 'Car Website',
    subtitle: 'Enrich Your Digital Automotive Content Ecosystem',
    color: 'from-[#861F80] to-[#174395]',
    description: "Supercharge your automotive blog, editorial review site, or consumer portal with enterprise-grade vehicle specifications, high-resolution imagery, and dynamic performance metrics. In the highly competitive digital publishing space, authoritative content is the ultimate differentiator. Achtrex allows digital publishers to construct massive, highly-accurate vehicle databases without the crippling overhead of manual data curation.\n\nEnsure your audience always has access to the most authoritative, interactive automotive content on the web. From granular internal combustion engine displacement metrics to deep EV battery architectures, our APIs stream perfectly formatted data directly into your CMS.",
    challenges: [
      'Sourcing exhaustive, reliable, and continuously updated vehicle specifications across global markets and distinct trims.',
      'Maintaining high-quality databases of specific metrics—like exact vehicle dimensions and EV battery ranges—without immense labor.',
      'Keeping discerning users engaged and increasing platform dwell time with dynamic, interactive, and visually rich data.'
    ],
    solutions: [
      'Automated CMS Ingestion Pipelines: Pull real-time, exhaustive specifications directly into your publishing backend.',
      'Comprehensive EV Intelligence: Access specific electric vehicle metrics, including exact battery chemistries and charging curves.',
      'Interactive Analytical Widgets: Enhance editorial reviews with accurate market value trends and historical depreciation charts.'
    ],
    capabilities: [
      { text: 'Complete Global Vehicle Spec Database Access', icon: Globe },
      { text: 'High-Resolution OEM Color & Interior Imagery Integration', icon: Monitor },
      { text: 'Deep EV Metrics (Charging Speeds, Battery Architecture)', icon: Zap },
      { text: 'Historical Depreciation & Value Retention Analysis Curves', icon: LineChart }
    ],
    icon: Monitor,
    apis: ['Vehicle Specifications API', 'EV Specifications API', 'Vehicle Image API']
  },
  'classifieds-websites': {
    title: 'Classifieds Website',
    subtitle: 'Build Unshakable Trust in Peer-to-Peer Marketplaces',
    color: 'from-[#00a9ce] to-[#76bc1d]',
    description: "Protect your marketplace users and dramatically elevate the quality of your listings by automatically verifying VINs, checking stolen vehicle registries, and providing objective market value context. Peer-to-peer automotive marketplaces inherently suffer from an massive trust deficit. Achtrex provides the essential data infrastructure required to transform a chaotic, low-trust classifieds site into a secure, transparent, and highly efficient transactional platform.\n\nBy algorithmically validating every vehicle that enters your platform, you eradicate fraudulent listings and cloned VINs before they reach your buyers. Furthermore, you vastly improve marketplace liquidity and establish your platform as the definitive, safe destination for automotive commerce.",
    challenges: [
      'Combating fraudulent listings, cloned VINs, title washing, and highly inaccurate descriptions uploaded by malicious sellers.',
      'Sellers vastly overpricing or underpricing their vehicles due to a lack of market knowledge, leading to severe marketplace stagnation.',
      'A fundamental, structural lack of trust between anonymous buyers and sellers regarding the true mechanical condition.'
    ],
    solutions: [
      'Instant Infrastructure Verification: Automatically verify every submitted VIN against authoritative global databases to flag invalid formats.',
      'Objective Market Value Context: Provide integrated, dynamic market value widgets on every listing to educate users on fair pricing.',
      'Comprehensive Trust Infrastructure: Generate automatic vehicle history summaries and rigorous title checks to establish confidence.'
    ],
    capabilities: [
      { text: 'Automated Listing Enrichment & Spec Population via VIN Input', icon: Database },
      { text: 'Live Stolen Vehicle, Total Loss & Salvage Title Verification', icon: ShieldCheck },
      { text: 'Dynamic Price Rating Badges (Great Price, Fair Price)', icon: Tag },
      { text: 'Instant Verification Badges for Authenticated Listings', icon: Fingerprint }
    ],
    icon: FileText,
    apis: ['Stolen Vehicle API', 'Market Value API', 'VIN Title Check API']
  },
  'car-rental': {
    title: 'Car Rental',
    subtitle: 'Optimize Fleet Utilization, Lifecycle & Disposition Value',
    color: 'from-[#489EE6] to-[#174395]',
    description: "Manage your rental fleet with surgical precision by tracking real-time vehicle depreciation, automating preventative maintenance schedules, and streamlining vehicle onboarding. Operating a large-scale rental fleet requires walking a tightrope between maximum utilization and avoiding massive depreciation cliffs. Achtrex provides fleet operators with the definitive macroeconomic data necessary to determine the exact optimal moment to acquire or defleet assets.\n\nOur infrastructure allows you to instantly ingest and categorize new vehicles, track their real-time market value against historical depreciation curves, and automate complex OEM maintenance schedules.",
    challenges: [
      'Accurately tracking the exact factory specifications and specific trims of thousands of active fleet vehicles.',
      'Determining the mathematically optimal time to sell off fleet vehicles before they cross critical depreciation cliffs.',
      'Managing highly variable preventative maintenance schedules to avoid catastrophic mechanical failures and maximize utilization.'
    ],
    solutions: [
      'Instant Fleet Onboarding: Instantly ingest new vehicles into your fleet management platform by decoding the VIN.',
      'Algorithmic Disposition Optimization: Monitor real-time fleet market value to algorithmically optimize your sell-off timing.',
      'Automated Preventative Maintenance: Trigger automated maintenance workflows and service alerts based on exact OEM schedules.'
    ],
    capabilities: [
      { text: 'Bulk Fleet VIN Decoding & Specification Normalization', icon: Layers },
      { text: 'Live Fleet Depreciation Tracking & Portfolio Market Value', icon: LineChart },
      { text: 'Automated OEM Maintenance Milestone & Recall Alerts', icon: AlertCircle },
      { text: 'Predictive Disposition Analytics for Optimal Defleeting', icon: Target }
    ],
    icon: Briefcase,
    apis: ['Vehicle Maintenance API', 'Market Value API', 'VIN Decoding API']
  },
  'auto-parts': {
    title: 'Auto Parts Company',
    subtitle: 'Ensure Perfect Fitment & Completely Eliminate Return Friction',
    color: 'from-[#F2147A] to-[#174395]',
    description: "Drastically reduce return rates and fundamentally transform customer satisfaction by integrating precise vehicle specifications and guaranteed fitment data into your e-commerce platform. The aftermarket auto parts industry is plagued by the complexities of ACES/PIES catalog data and the high cost of reverse logistics. Achtrex bridges the gap between these massive engineering databases and a consumer-friendly shopping experience.\n\nWe ensure that your customers always purchase the exact right part for their specific vehicle configuration. By allowing users to shop via License Plate or precise VIN decoding, our APIs map their exact engine code, transmission type, and sub-model directly to your inventory.",
    challenges: [
      'Crippling return rates and massive reverse-logistics costs caused entirely by customers purchasing incompatible parts.',
      'Customers struggling to identify their exact vehicle sub-model or engine displacement from confusing dropdown menus.',
      'Managing and successfully normalizing massive, highly complex ACES/PIES catalog data across thousands of manufacturers.'
    ],
    solutions: [
      'Seamless Fitment Lookup: Allow your customers to seamlessly shop for compatible parts by entering their License Plate or VIN.',
      'High-Precision Inventory Mapping: Map highly specific vehicle sub-models and exact engine codes directly to your inventory.',
      'Guaranteed Fitment Architecture: Provide absolute confidence at checkout with our guaranteed fitment APIs, increasing conversion.'
    ],
    capabilities: [
      { text: 'License Plate-to-VIN & Exact Specification Conversion', icon: Car },
      { text: 'Deep Engine Code, Drivetrain & Transmission Identification', icon: Cpu },
      { text: 'Comprehensive ACES/PIES Data Normalization & Inventory Mapping', icon: Database },
      { text: 'Automated Fitment Guarantee Badging & Compatibility API', icon: ShieldCheck }
    ],
    icon: Tag,
    apis: ['License Plate API', 'VIN Decoding API', 'Vehicle Specifications API']
  },
  'car-finance': {
    title: 'Car Finance',
    subtitle: 'Instantaneous Loan-to-Value & Comprehensive Risk Assessments',
    color: 'from-[#174395] to-[#00a9ce]',
    description: "Minimize institutional risk and approve automotive loans instantly with real-time market value algorithms, rigorous title checks, and auction history verification. In automotive finance, speed and accuracy are paramount. Underwriters must assess the exact value of collateral in a highly volatile market to determine safe Loan-to-Value (LTV) limits. Achtrex empowers lenders with the definitive, objective data required to make these decisions instantaneously.\n\nEnsure that your portfolios are strictly protected against market volatility, title washing, and synthetic fraud. By integrating our APIs directly into your Loan Origination System (LOS), you can automatically flag salvage titles and pull live wholesale appraisals in milliseconds.",
    challenges: [
      'Assessing the accurate, real-time collateral value of a vehicle in a rapidly fluctuating market to determine safe LTV limits.',
      'Rigorously verifying title status and actively preventing loan origination on severely depreciated salvage or stolen vehicles.',
      'Time-consuming manual loan approval processes that require underwriters to consult fragmented data sources.'
    ],
    solutions: [
      'Algorithmic LTV Assessment: Instantly calculate highly accurate LTV ratios by pulling real-time retail and wholesale valuations.',
      'Automated Fraud Prevention: Automatically check every single application for salvage titles, total loss history, and odometer rollback.',
      'Automated Underwriting Integration: Streamline approvals with instantaneous data ingestion directly into your Loan Origination System (LOS).'
    ],
    capabilities: [
      { text: 'Real-time Wholesale, Trade-In, & Retail Market Appraisals', icon: LineChart },
      { text: 'Instant Title Brand, Odometer & Total Loss Verification', icon: AlertCircle },
      { text: 'Historical Auction Price Data for Deep Collateral Assessment', icon: Database },
      { text: 'Direct Automated Loan Origination System (LOS) Integration', icon: Cpu }
    ],
    icon: Database,
    apis: ['Market Value API', 'VIN Title Check API', 'Auction History API']
  },
  'manufacturers': {
    title: 'Manufacturers',
    subtitle: 'Unprecedented OEM Intelligence & Global Market Analytics',
    color: 'from-[#76bc1d] to-[#174395]',
    description: "Leverage our massive global automotive data lakes to gain aggressive competitive intelligence, track precise production insights, and analyze macroeconomic market trends. For Original Equipment Manufacturers (OEMs), understanding the exact movements of competitors and the historical trajectory of the market is critical to long-term survival. Achtrex provides OEMs with the macro and micro-level telemetry required to analyze competitor feature adoption, track long-term vehicle depreciation curves, and optimize future vehicle architectures.\n\nOur enterprise APIs allow your strategic planning teams to access exhaustive datasets detailing exactly how competitors are pricing specific trims, bundling ADAS features, and reacting to market pressures.",
    challenges: [
      'Gaining granular visibility into competitor vehicle specifications, feature bundling strategies, and trim-level pricing architectures.',
      'Tracking long-term vehicle depreciation and precise residual value retention to optimize highly competitive lease pricing.',
      'Understanding broad historical market trends, consumer feature preferences, and shifting technological adoption curves.'
    ],
    solutions: [
      'Aggressive Competitor Telemetry: Access exhaustive datasets detailing competitor specs, ADAS adoption rates, and global pricing.',
      'Advanced Residual Analysis: Utilize our historical market value APIs to deeply analyze residual value retention across competing models.',
      'Macro Strategic Planning: Integrate our immense, global automotive data lakes directly into your strategic planning dashboards.'
    ],
    capabilities: [
      { text: 'Global Competitor Specification & Complex Pricing Matrices', icon: Globe },
      { text: 'Granular Feature Adoption, ADAS & Packaging Analytics', icon: Layers },
      { text: 'Long-Term Residual Value & Lease Depreciation Modeling', icon: LineChart },
      { text: 'Macro-Economic Vehicle Sales & Global Turn-Rate Insights', icon: Activity }
    ],
    icon: Database,
    apis: ['Vehicle Specifications API', 'Market Value API', 'Sales History API']
  },
  'fleet-management': {
    title: 'Fleet Management',
    subtitle: 'Streamline Logistics & Maximize Fleet Uptime',
    color: 'from-[#00a9ce] to-[#174395]',
    description: "Empower your logistics network with true, real-time vehicular telematics and predictive maintenance frameworks. Achtrex allows massive commercial fleets to move beyond reactive repairs and fragmented data silos into a unified, predictive ecosystem. By actively monitoring the real-world health and exact factory specifications of your logistics vehicles, we prevent catastrophic failures before they happen.\n\nFrom long-haul trucking to last-mile delivery vans, our comprehensive APIs allow dispatchers and fleet managers to instantly decode VINs, ensuring every vehicle is perfectly mapped to specific cargo capacities and route profiles.",
    challenges: [
      'Managing highly complex, disjointed preventative maintenance schedules across thousands of commercial vehicles, leading to unexpected, expensive breakdowns.',
      'Lacking immediate visibility into the specific payload capacities, gross vehicle weight ratings (GVWR), and dimensional constraints of mixed fleets.',
      'Inefficient route planning and asset allocation due to a lack of deep, vehicle-specific intelligence.'
    ],
    solutions: [
      'Predictive Maintenance Triggers: Integrate dynamic OEM maintenance schedules into your fleet management platform to drastically reduce downtime.',
      'Deep Specification Mapping: Utilize our robust VIN decoding to instantly map payload capacities and dimensional constraints to exact vehicles.',
      'Lifecycle Value Optimization: Track the macroeconomic depreciation of your commercial assets to algorithmically determine the optimal defleeting window.'
    ],
    capabilities: [
      { text: 'Live OEM Maintenance & Fluid Capacity Tracking', icon: Layers },
      { text: 'Exact Gross Vehicle Weight (GVWR) & Payload Metrics', icon: Truck },
      { text: 'Bulk Commercial VIN Decoding & Normalization', icon: Database },
      { text: 'Predictive Lifecycle & Defleeting Analytics', icon: LineChart }
    ],
    icon: Truck,
    apis: ['Vehicle Maintenance API', 'VIN Decoding API', 'Market Value API']
  },
  'ride-sharing': {
    title: 'Ride-Sharing & Mobility',
    subtitle: 'Empower Mobility Networks & Driver Safety Compliance',
    color: 'from-[#861F80] to-[#F2147A]',
    description: "Establish absolute safety and compliance across your entire mobility network with instantaneous vehicle verification infrastructure. Ride-sharing and on-demand delivery networks scale rapidly, but manual onboarding processes introduce massive friction and severe legal risk. Achtrex provides the API backbone required to instantly verify the exact specifications, title status, and safety features of any vehicle attempting to join your platform.\n\nBy fully automating the vehicle inspection and onboarding pipeline, you drastically reduce time-to-first-ride for new drivers while simultaneously protecting your riders from unsafe, salvaged, or structurally compromised vehicles.",
    challenges: [
      'Severe operational bottlenecks during driver onboarding due to manual, error-prone vehicle inspection and document verification.',
      'Allowing structurally compromised, salvaged, or technically inadequate vehicles onto the platform, exposing the network to massive liability.',
      'Failing to accurately verify specific vehicle classifications (e.g., luxury tiers, high-capacity seating) resulting in poor rider experiences.'
    ],
    solutions: [
      'Instantaneous Onboarding: Allow drivers to onboard simply by entering their VIN or License Plate, automatically verifying their specific vehicle tier.',
      'Automated Risk Mitigation: Instantly cross-reference new vehicles against national stolen registries and salvage title databases.',
      'Feature Validation: Automatically verify interior capacities, active safety features, and luxury trims to properly classify vehicles into premium service tiers.'
    ],
    capabilities: [
      { text: 'Automated License Plate & VIN Resolution', icon: Target },
      { text: 'Instant Salvage Title & Stolen Vehicle Checks', icon: ShieldCheck },
      { text: 'Vehicle Classification & Seating Capacity Validation', icon: Layers },
      { text: 'ADAS & Safety Feature Identification via VIN', icon: Shield }
    ],
    icon: MapPin,
    apis: ['License Plate API', 'VIN Title Check API', 'Stolen Vehicle API']
  },
  'government-agencies': {
    title: 'Government Agencies',
    subtitle: 'Enhance Civic Infrastructure & Registry Validation',
    color: 'from-[#76bc1d] to-[#174395]',
    description: "Modernize civic infrastructure, tolling networks, and departmental motor vehicle registries with ultra-high-velocity, authoritative automotive data. Achtrex provides government agencies and municipal authorities with the definitive datasets required to accurately classify vehicles, optimize dynamic tolling, and enforce environmental regulations.\n\nBy leveraging our massive specification databases, highway authorities can instantly map license plates to exact vehicle weights, emissions profiles, and EV classifications. This allows for incredibly efficient automated tolling architectures, highly accurate taxation modeling, and the seamless enforcement of low-emission urban zones.",
    challenges: [
      'Inaccurately classifying vehicles on toll roads and bridges due to legacy, fragmented state registry databases.',
      'Struggling to enforce urban environmental policies and Low Emission Zones (LEZ) due to a lack of rapid emissions and fuel-type data.',
      'Widespread tax evasion and registration fraud facilitated by cloned VINs and inaccurate vehicular documentation.'
    ],
    solutions: [
      'Dynamic Tolling Architecture: Instantly map passing license plates to exact gross vehicle weights to automatically calculate correct tolling brackets.',
      'Environmental Enforcement: Utilize our API to instantly verify a vehicle\'s exact fuel type, EV architecture, and emissions rating.',
      'Registry Integrity: Cross-reference state and municipal registrations with our definitive, global VIN databases to eradicate cloning and documentation fraud.'
    ],
    capabilities: [
      { text: 'High-Velocity License Plate-to-VIN Resolution', icon: Zap },
      { text: 'Exact Gross Vehicle Weight & Dimension Identification', icon: Layers },
      { text: 'Instant EV, Hybrid & Fuel Emissions Classification', icon: Activity },
      { text: 'National Stolen Vehicle & Title Validation Checks', icon: ShieldCheck }
    ],
    icon: Landmark,
    apis: ['License Plate API', 'Vehicle Specifications API', 'VIN Title Check API']
  },
  'default': {
    title: 'Automotive Industry Solutions',
    subtitle: 'Powering the Future of Enterprise Mobility & Intelligence',
    color: 'from-[#00a9ce] to-[#174395]',
    description: "Integrate comprehensive, highly-normalized vehicle data APIs and advanced AI reasoning engines to ruthlessly accelerate your automotive business operations. The automotive ecosystem is historically plagued by fragmented, siloed, and intensely difficult-to-parse data. Achtrex provides the robust, high-velocity data infrastructure required to shatter these silos and build the next generation of digital automotive platforms.\n\nWhether you are constructing intelligent consumer marketplaces, automating massive underwriting systems, or powering real-time logistics networks, Achtrex provides the architectural foundation. We offer real-time data synchronization, guaranteed 99.99% enterprise uptime, and completely normalized datasets.",
    challenges: [
      'Fragmented, inaccurate, and heavily siloed legacy vehicle data sources that require immense engineering effort to normalize.',
      'High latency and incredibly poor reliability in legacy automotive API providers, causing critical bottlenecks.',
      'A complete lack of intelligent, predictive insights in the market that move beyond basic tabular data retrieval.'
    ],
    solutions: [
      'Unified Data Infrastructure: Access high-speed GraphQL and REST API endpoints that deliver normalized data in milliseconds.',
      'Extreme Enterprise Reliability: Rely on infrastructure explicitly built for massive scale, backed by absolute 99.99% uptime guarantees.',
      'Cognitive Workflow Automation: Leverage our proprietary LUMI AI models for complex automotive reasoning and intelligent workflow automation.'
    ],
    capabilities: [
      { text: 'Unified, Highly Normalized Global Vehicle Data Lake', icon: Database },
      { text: 'High-Velocity, Low-Latency GraphQL & REST API Architecture', icon: Zap },
      { text: 'Proprietary Automotive AI (LUMI) & Cognitive Integration', icon: Cpu },
      { text: 'Bank-Grade Encryption & Guaranteed 99.99% Uptime SLA', icon: ShieldCheck }
    ],
    icon: Database,
    apis: ['VIN Decoding API', 'Market Value API', 'License Plate API', 'LUMI Engine']
  }
};

export default function IndustryClient({ slug }: { slug: string }) {
  const data = industryData[slug] || industryData['default'];
  const displayTitle = industryData[slug] ? data.title : slug.split('-').map((w:string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 pb-24">
      {/* Dynamic Themed Header */}
      <div className={`w-full relative overflow-hidden bg-gradient-to-r ${data.color} pt-40 pb-28 px-6 shadow-inner`}>
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          <div className="w-20 h-20 mx-auto bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md flex items-center justify-center mb-8 shadow-xl">
            {data.icon && <data.icon weight="duotone" className="w-10 h-10 text-white" />}
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-md">
            {displayTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            {data.subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="px-6 -mt-12 relative z-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Col */}
          <div className="lg:col-span-8 space-y-16 bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
            
            {/* Overview */}
            <div className="relative">
              <div className="absolute -left-12 top-2 bottom-2 w-1.5 rounded-r-full bg-gradient-to-b opacity-50 hidden md:block" style={{ backgroundImage: `linear-gradient(to bottom, var(--tw-gradient-stops))` }} />
              <h2 className="text-3xl font-extrabold tracking-tight text-[#001a22] mb-8 flex items-center gap-4">
                <Target weight="duotone" className="w-8 h-8 text-[#00a9ce]" />
                Industry Overview
              </h2>
              <div className="space-y-6">
                {data.description.split('\n\n').map((paragraph: string, i: number) => (
                  <p key={i} className="text-slate-600 leading-relaxed text-lg font-medium">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Capabilities (Grid Style) */}
            {data.capabilities && (
              <div className="pt-8 border-t border-slate-100">
                <h3 className="text-2xl font-bold tracking-tight text-[#001a22] mb-8 flex items-center gap-3">
                  <Zap weight="duotone" className="w-7 h-7 text-[#F2147A]" />
                  What We Can Do For You
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.capabilities.map((cap: any, i: number) => {
                    const CapIcon = cap.icon;
                    return (
                      <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md hover:border-[#00a9ce] transition-all group">
                        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                          <CapIcon weight="duotone" className="w-5 h-5 text-[#00a9ce]" />
                        </div>
                        <span className="leading-snug font-semibold text-slate-700 pt-0.5">{cap.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Challenges & Solutions */}
            <div className="pt-8 border-t border-slate-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                
                {/* Challenge Column */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight text-[#001a22] flex items-center gap-3">
                    <AlertCircle weight="duotone" className="w-6 h-6 text-[#F2147A]" />
                    The Challenge
                  </h3>
                  <div className="space-y-5">
                    {data.challenges.map((challenge: string, i: number) => (
                      <div key={i} className="flex items-start gap-4 bg-rose-50/50 rounded-xl p-5 border border-rose-100/50">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-rose-100">
                          <span className="text-rose-500 font-bold text-sm">{i + 1}</span>
                        </div>
                        <p className="text-slate-700 leading-relaxed text-sm font-medium pt-1">
                          {challenge}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution Column */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight text-[#001a22] flex items-center gap-3">
                    <ShieldCheck weight="duotone" className="w-6 h-6 text-[#76bc1d]" />
                    Our Solution
                  </h3>
                  <div className="space-y-5">
                    {data.solutions.map((solution: string, i: number) => (
                      <div key={i} className="flex items-start gap-4 bg-[#f2fdf5] rounded-xl p-5 border border-green-100/60">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-green-100">
                          <CheckCircle2 weight="duotone" className="w-5 h-5 text-[#76bc1d]" />
                        </div>
                        <p className="text-slate-700 leading-relaxed text-sm font-medium pt-1">
                          {solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Col */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sticky top-32">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-6 shadow-md">
                <Cpu weight="duotone" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#001a22]">Recommended Tech Stack</h3>
              <p className="text-slate-500 text-sm mb-6 font-medium">The specific APIs and models required to power this industry.</p>
              
              <div className="space-y-3 mb-8">
                {data.apis.map((api: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-[#00a9ce] hover:shadow-md transition-all cursor-default group">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-[#00a9ce]/10 transition-colors">
                      <Database weight="duotone" className="w-4 h-4 text-[#00a9ce]" />
                    </div>
                    <span className="font-bold text-sm text-slate-700">{api}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/contact-us" className="group relative flex items-center justify-center gap-3 w-full bg-[#001a22] text-white font-bold py-4 px-6 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 text-sm tracking-widest uppercase">Start Building</span>
                <ArrowRight weight="bold" className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
