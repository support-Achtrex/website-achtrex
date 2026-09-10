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
  AlertCircle, 
  Zap, 
  Target, 
  Layers, 
  Activity, 
  Cpu, 
  Fingerprint,
  LineChart,
  CheckCircle2,
  Globe,
  Truck,
  MapPin,
  Landmark
} from 'lucide-react';
import Link from 'next/link';
import { InnerPageHeader } from "@/components/inner-page-header";

const industryData: Record<string, any> = {
 'auto-insurance': {
 title: 'Auto Insurance',
 subtitle: 'Next-Generation Actuarial Precision & Claims Automation',
 color: 'from-[#00a9ce] to-[#174395]',
 description: 'Achtrex delivers bespoke software engineering, cognitive AI inspection, and actuarial consultation designed from the ground up for the modern insurance sector. Historically, underwriting and claims adjustment have relied on fragmented, manual assessments that introduce institutional risk. By seamlessly integrating our predictive software builds, Advanced Driver Assistance Systems (ADAS) feature modeling, and cognitive damage evaluation, actuaries can construct predictive risk models with surgical precision.\n\nWe eliminate the guesswork in policy pricing. By deploying specialized software systems and cognitive AI directly into your core underwriting workflows, you dynamically adjust premiums based on verified vehicle safety systems and operational risk profiles.',
 challenges: [
 'Blind spots in factory-installed ADAS features which drastically skew risk profiles. Underwriters rely on generalized data, leading to mispriced risk.',
 'Relying on delayed, fragmented, or incomplete total-loss and accident histories during rapid underwriting decisions.',
 'High operational overhead and friction caused by manual data entry in claims and onboarding, leading to misquoted policies.'
 ],
 solutions: [
 'Custom Actuarial Software: Enterprise platforms designed specifically for dynamic underwriting and risk assessment.',
 'Cognitive Claims Intelligence: AI-assisted image and damage evaluation to accelerate total loss thresholds and repair estimates.',
 'Actuarial Systems Advisory: Expert automotive consultation to streamline technical claims workflows and compliance.'
 ],
 capabilities: [
 { text: 'Deep ADAS & Active Safety Feature Verification Engines', icon: ShieldCheck },
 { text: 'Automated Total Loss & Repair Cost Modeling', icon: AlertCircle },
 { text: 'Custom Claims Intake & Processing Software Platforms', icon: LineChart },
 { text: 'Cognitive Damage Inspection & Visual Validation', icon: Fingerprint }
 ],
 icon: Shield,
 solutionStack: ['Custom Actuarial Platform', 'Cognitive Claims AI', 'ADAS Verification Software', 'Insurance Advisory']
 },
 'car-dealerships': {
 title: 'Car Dealerships',
 subtitle: 'Hyper-Accelerate Inventory Turnover & Maximize Gross Margin',
 color: 'from-[#F2147A] to-[#861F80]',
 description: "Transform your entire dealership operation with Achtrex custom automotive software builds, cognitive assistant tools, and hands-on operational consultation. In a highly volatile automotive retail environment, intuition is no longer sufficient; dealerships must operate on agile, modern systems. We build bespoke dealership portals, workshop scheduling systems, and inventory orchestration platforms that modernize your operations.\n\nEquip your sales staff, service advisors, and acquisition teams with unassailable software performance. Whether streamlining trade-in appraisals or optimizing reconditioning turnaround, Achtrex delivers the software systems and strategic advisory to boost profitability.",
 challenges: [
 'Pricing pre-owned inventory competitively in a rapidly fluctuating market without sacrificing front-end gross.',
 'Inaccurately representing complex vehicle trims and expensive factory options online, leading to lost digital sales.',
 'Slow and highly inefficient appraisal processes that bottleneck trade-ins and significantly delay getting inventory front-line ready.'
 ],
 solutions: [
 'Custom Dealership Portals: Tailored showroom and inventory management software built for your exact sales workflows.',
 'Automated Bay Schedulers: High-velocity workshop and reconditioning dispatch software to slash turnaround times.',
 'Dealership Operational Advisory: Strategic consulting on digital retail processes, BDC efficiency, and workflow modernization.'
 ],
 capabilities: [
 { text: 'Custom Dealership Management & Showroom Portals', icon: FileText },
 { text: 'Bay & Reconditioning Workflow Optimization', icon: LineChart },
 { text: 'Real-Time Appraisal & Valuation Workflow Tools', icon: Target },
 { text: 'Predictive Days-to-Turn Analytics & Floorplan Software', icon: Activity }
 ],
 icon: Car,
 solutionStack: ['Dealership Software Builds', 'Workshop Scheduling Engine', 'Cognitive Assistant', 'Dealership Operations Advisory']
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
 'AAIA Cognitive AI Diagnostics: Multi-modal AI acoustic and DTC reasoning models that pinpoint mechanical failures in minutes.',
 'Custom Workshop Management Software: Modern bay scheduling, technician tracking, and digital RO dispatch systems.',
 'Repair Process Advisory: Direct consultation on shop floor throughput, lean workshop layouts, and technician productivity.'
 ],
 capabilities: [
 { text: 'Cognitive OBD2 & Acoustic Defect Diagnostics (AAIA)', icon: Cpu },
 { text: 'Custom Digital Repair Order (RO) & Bay Management', icon: Database },
 { text: 'Predictive Labor & Repair Estimation Software', icon: Target },
 { text: 'Shop Floor Throughput & Lean Operations Advisory', icon: AlertCircle }
 ],
 icon: Wrench,
 solutionStack: ['AAIA Cognitive Diagnostics', 'Workshop Software Build', 'Dynamic Bay Scheduler', 'Repair Advisory']
 },
 'car-website': {
 title: 'Car Website',
 subtitle: 'Enrich Your Digital Automotive Content Ecosystem',
 color: 'from-[#861F80] to-[#174395]',
 description: "Supercharge your automotive blog, editorial review site, or consumer portal with enterprise-grade vehicle specifications, high-resolution imagery, and dynamic performance metrics. In the highly competitive digital publishing space, authoritative content is the ultimate differentiator. Achtrex allows digital publishers to construct massive, highly-accurate vehicle databases without the crippling overhead of manual data curation.\n\nEnsure your audience always has access to the most authoritative, interactive automotive content on the web. From granular vehicle comparison tools to AI-powered vehicle recommendation engines, we engineer platforms that drive engagement and retention.",
 challenges: [
 'Sourcing exhaustive, reliable, and continuously updated vehicle specifications across global markets and distinct trims.',
 'Maintaining high-quality databases of specific metrics, like exact vehicle dimensions and EV battery ranges, without immense labor.',
 'Keeping discerning users engaged and increasing platform dwell time with dynamic, interactive, and visually rich data.'
 ],
 solutions: [
 'Bespoke Web Platform Builds: Ultra-fast Next.js automotive portals engineered for speed, SEO, and interactive engagement.',
 'Comprehensive EV Intelligence: Access specific electric vehicle metrics, including exact battery chemistries and charging curves.',
 'Digital Product Strategy: Consultation on content architecture, monetization funnels, and tech stack design.'
 ],
 capabilities: [
 { text: 'Complete Global Vehicle Spec Database Access', icon: Globe },
 { text: 'High-Resolution OEM Color & Interior Imagery Integration', icon: Monitor },
 { text: 'Cognitive Car Recommendation Engine', icon: Zap },
 { text: 'Modern Digital Publishing Architecture & Strategy', icon: LineChart }
 ],
 icon: Monitor,
 solutionStack: ['Automotive Web Platform', 'Cognitive Recommendation AI', 'Interactive Valuation Tools', 'Digital Product Advisory']
 },
 'classifieds-websites': {
 title: 'Classifieds Website',
 subtitle: 'Build Unshakable Trust in Peer-to-Peer Marketplaces',
 color: 'from-[#00a9ce] to-[#76bc1d]',
 description: "Protect your marketplace users and dramatically elevate the quality of your listings with custom marketplace software engineering, cognitive fraud detection, and operational advisory. Peer-to-peer automotive marketplaces inherently suffer from trust deficits and fraud risks. Achtrex engineers secure, scalable marketplace architectures that streamline vehicle onboarding and eliminate fraudulent listings.\n\nBy deploying intelligent software workflows and cognitive verification algorithms, your platform flags fraudulent listings, standardizes vehicle specifications, and establishes your marketplace as the safe destination for automotive commerce.",
 challenges: [
 'Combating fraudulent listings, fake seller accounts, and inaccurate vehicle specifications.',
 'Sellers vastly overpricing or underpricing their vehicles due to a lack of market knowledge, leading to severe marketplace stagnation.',
 'A fundamental, structural lack of trust between anonymous buyers and sellers regarding the true mechanical condition.'
 ],
 solutions: [
 'Custom Marketplace Software Builds: End-to-end peer-to-peer automotive platforms with automated listing verification.',
 'Cognitive Fraud Detection: AI algorithms that analyze listing photos, descriptions, and seller patterns in real time.',
 'Marketplace Strategy Advisory: Strategic consultation on liquidity, dealer onboarding, and escrow transaction flows.'
 ],
 capabilities: [
 { text: 'Custom Automotive Marketplace Architecture', icon: Database },
 { text: 'Cognitive Listing Verification & Image Analysis', icon: ShieldCheck },
 { text: 'Automated Vehicle Spec Standardization & Badging', icon: Tag },
 { text: 'Trust & Verification Transaction Infrastructure', icon: Fingerprint }
 ],
 icon: FileText,
 solutionStack: ['Custom Marketplace Build', 'Cognitive Verification AI', 'Trust Infrastructure', 'Marketplace Advisory']
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
 'Custom Rental Fleet Software: Cloud and tablet-based fleet management systems for multi-branch rental operations.',
 'Cognitive Damage Inspection: Mobile visual AI that compares pre- and post-rental vehicle conditions automatically.',
 'Fleet Operations Consultation: Hands-on advisory on turnaround logistics, bay staffing, and maintenance scheduling.'
 ],
 capabilities: [
 { text: 'Custom Fleet Operations & Reservation Platforms', icon: Layers },
 { text: 'Cognitive Mobile Visual Damage Inspection', icon: LineChart },
 { text: 'Automated Preventative Maintenance Scheduling', icon: AlertCircle },
 { text: 'Fleet Lifecycle & Turnaround Logistics Advisory', icon: Target }
 ],
 icon: Briefcase,
 solutionStack: ['Custom Rental Fleet Software', 'Cognitive Damage Detection AI', 'Bay Turnaround Dispatcher', 'Rental Operations Advisory']
 },
 'auto-parts': {
 title: 'Auto Parts Company',
 subtitle: 'Ensure Perfect Fitment & Completely Eliminate Return Friction',
 color: 'from-[#F2147A] to-[#174395]',
 description: "Drastically reduce return rates and fundamentally transform customer satisfaction by integrating precise vehicle specifications and guaranteed fitment data into your e-commerce platform. The aftermarket auto parts industry is plagued by the complexities of ACES/PIES catalog data and the high cost of reverse logistics. Achtrex bridges the gap between these massive engineering databases and a consumer-friendly shopping experience.\n\nWe ensure that your customers always purchase the exact right part for their specific vehicle configuration. By engineering intuitive fitment search software and deploying intelligent catalog cross-referencing, our platforms eliminate return friction.",
 challenges: [
 'Crippling return rates and massive reverse-logistics costs caused entirely by customers purchasing incompatible parts.',
 'Customers struggling to identify their exact vehicle sub-model or engine displacement from confusing dropdown menus.',
 'Managing and successfully normalizing massive, highly complex ACES/PIES catalog data across thousands of manufacturers.'
 ],
 solutions: [
 'Custom Auto Parts E-Commerce Builds: High-velocity catalog and checkout platforms with integrated fitment selectors.',
 'Intelligent Part Compatibility Engines: Software architectures that map complex vehicle trims to exact manufacturer part numbers.',
 'Supply Chain & Catalog Advisory: Expert consultation on inventory synchronization, fitment standards, and return reduction.'
 ],
 capabilities: [
 { text: 'Custom Auto Parts E-Commerce & B2B Portals', icon: Car },
 { text: 'Engineered Fitment & Specification Matchmaker', icon: Cpu },
 { text: 'Multi-Warehouse Inventory Synchronization', icon: Database },
 { text: 'Fitment Accuracy & Reverse Logistics Advisory', icon: ShieldCheck }
 ],
 icon: Tag,
 solutionStack: ['Custom Parts E-Commerce Build', 'Intelligent Fitment Match Engine', 'Warehouse Inventory Software', 'Parts Operations Advisory']
 },
 'car-finance': {
 title: 'Car Finance',
 subtitle: 'Instantaneous Loan-to-Value & Comprehensive Risk Assessments',
 color: 'from-[#174395] to-[#00a9ce]',
 description: "Minimize institutional risk and approve automotive loans instantly with real-time market value algorithms, rigorous title checks, and auction history verification. In automotive finance, speed and accuracy are paramount. Underwriters must assess the exact value of collateral in a highly volatile market to determine safe Loan-to-Value (LTV) limits. Achtrex empowers lenders with the definitive, objective data required to make these decisions instantaneously.\n\nEnsure that your portfolios are strictly protected against market volatility, title washing, and synthetic fraud. By engineering unified underwriting portals and deploying cognitive decision support, our platforms accelerate loan approval times from days to minutes.",
 challenges: [
 'Assessing the accurate, real-time collateral value of a vehicle in a rapidly fluctuating market to determine safe LTV limits.',
 'Rigorously verifying title status and actively preventing loan origination on severely depreciated salvage or stolen vehicles.',
 'Time-consuming manual loan approval processes that require underwriters to consult fragmented data sources.'
 ],
 solutions: [
 'Custom Loan Origination Platforms: Bespoke portals connecting dealerships, direct borrowers, and underwriters.',
 'Cognitive Underwriting Models: AI-driven risk scoring and document verification to streamline approval decisions.',
 'FinTech Systems Advisory: Strategic consultation on regulatory compliance, risk modeling, and workflow automation.'
 ],
 capabilities: [
 { text: 'Custom Loan Origination & Dealer Portal Builds', icon: LineChart },
 { text: 'Automated Collateral Risk & LTV Assessment Tools', icon: AlertCircle },
 { text: 'Cognitive Financial Document Verification', icon: Database },
 { text: 'Automated Underwriting Workflow Architecture', icon: Cpu }
 ],
 icon: Database,
 solutionStack: ['Custom Lending Platform Build', 'Cognitive Underwriting Engine', 'Collateral Risk Software', 'Automotive FinTech Advisory']
 },
 'manufacturers': {
 title: 'Manufacturers',
 subtitle: 'Unprecedented OEM Intelligence & Global Market Analytics',
 color: 'from-[#76bc1d] to-[#174395]',
 description: "Leverage our massive global automotive data lakes to gain aggressive competitive intelligence, track precise production insights, and analyze macroeconomic market trends. For Original Equipment Manufacturers (OEMs), understanding the exact movements of competitors and the historical trajectory of the market is critical to long-term survival. Achtrex provides OEMs with the macro and micro-level telemetry required to analyze competitor feature adoption, track long-term vehicle depreciation curves, and optimize future vehicle architectures.\n\nFrom factory-floor software workflows to dealer diagnostic coordination, our systems provide the digital backbone that modern OEMs need to scale.",
 challenges: [
 'Gaining granular visibility into competitor vehicle specifications, feature bundling strategies, and trim-level pricing architectures.',
 'Tracking long-term vehicle depreciation and precise residual value retention to optimize highly competitive lease pricing.',
 'Understanding broad historical market trends, consumer feature preferences, and shifting technological adoption curves.'
 ],
 solutions: [
 'Aggressive Competitor Telemetry: Access exhaustive datasets detailing competitor specs, ADAS adoption rates, and global pricing.',
 'Cognitive Quality Control AI: Machine vision and acoustic analysis models to detect assembly anomalies early.',
 'Strategic Automotive Consultation: Deep advisory on digital transformation, service operations, and diagnostic architecture.'
 ],
 capabilities: [
 { text: 'Enterprise OEM Portal & Network Software Builds', icon: Globe },
 { text: 'Cognitive Quality Control & Defect Detection AI', icon: Layers },
 { text: 'Warranty & Diagnostic Analytics Software', icon: LineChart },
 { text: 'Global Automotive Operations Advisory', icon: Activity }
 ],
 icon: Database,
 solutionStack: ['Enterprise Software Builds', 'Cognitive Quality Inspection AI', 'Warranty Analytics Engine', 'OEM Operations Advisory']
 },
 'fleet-management': {
 title: 'Fleet Management',
 subtitle: 'Streamline Logistics & Maximize Fleet Uptime',
 color: 'from-[#00a9ce] to-[#174395]',
 description: "Empower your logistics network with true, real-time vehicular telematics and predictive maintenance frameworks. Achtrex allows massive commercial fleets to move beyond reactive repairs and fragmented data silos into a unified, predictive ecosystem. By actively monitoring the real-world health and exact factory specifications of your logistics vehicles, we prevent catastrophic failures before they happen.\n\nFrom municipal transit to last-mile logistics, our custom software gives fleet dispatchers and operations directors total control over vehicle health, service schedules, and driver assignments.",
 challenges: [
 'Managing highly complex, disjointed preventative maintenance schedules across thousands of commercial vehicles, leading to unexpected, expensive breakdowns.',
 'Lacking immediate visibility into the specific payload capacities, gross vehicle weight ratings (GVWR), and dimensional constraints of mixed fleets.',
 'Inefficient route planning and asset allocation due to a lack of deep, vehicle-specific intelligence.'
 ],
 solutions: [
 'Predictive Maintenance Triggers: Integrate dynamic OEM maintenance schedules into your fleet management platform to drastically reduce downtime.',
 'Predictive Maintenance AI: Cognitive algorithms analyzing vehicle sensor data and operating hours to forecast service needs.',
 'Fleet Operations Advisory: Consultation on route optimization, maintenance depot logistics, and lifecycle management.'
 ],
 capabilities: [
 { text: 'Bespoke Fleet Telematics & Dispatch Software', icon: Layers },
 { text: 'Cognitive Component Failure Prediction AI', icon: Truck },
 { text: 'Custom Maintenance Bay & Scheduler Systems', icon: Database },
 { text: 'Fleet Lifecycle & Depots Logistics Advisory', icon: LineChart }
 ],
 icon: Truck,
 solutionStack: ['Custom Fleet Software Build', 'Cognitive Maintenance AI Engine', 'Bay Scheduling Infrastructure', 'Fleet Operations Advisory']
 },
 'ride-sharing': {
 title: 'Ride-Sharing & Mobility',
 subtitle: 'Empower Mobility Networks & Driver Safety Compliance',
 color: 'from-[#861F80] to-[#F2147A]',
 description: "Establish absolute safety and compliance across your entire mobility network with instantaneous vehicle verification infrastructure. Ride-sharing and on-demand delivery networks scale rapidly, but manual onboarding processes introduce massive friction and severe legal risk. Achtrex builds custom onboarding portals and automated vehicle compliance tools that streamline network growth.\n\nBy fully automating the vehicle inspection and onboarding pipeline, you drastically reduce time-to-first-ride for new drivers while simultaneously protecting your riders from unsafe, salvaged, or structurally compromised vehicles.",
 challenges: [
 'Severe operational bottlenecks during driver onboarding due to manual, error-prone vehicle inspection and document verification.',
 'Allowing structurally compromised, salvaged, or technically inadequate vehicles onto the platform, exposing the network to massive liability.',
 'Failing to accurately verify specific vehicle classifications (e.g., luxury tiers, high-capacity seating) resulting in poor rider experiences.'
 ],
 solutions: [
 'Custom Mobility Onboarding Platforms: Rapid digital portals for driver and vehicle intake and credential verification.',
 'Cognitive Document & Safety AI: Automated verification of vehicle inspection documents, photos, and condition reports.',
 'Mobility Network Advisory: Strategic consultation on driver compliance workflows, vehicle tiering, and operational scale.'
 ],
 capabilities: [
 { text: 'Custom Driver & Vehicle Onboarding Portals', icon: Target },
 { text: 'Cognitive Safety Document & Photo Verification', icon: ShieldCheck },
 { text: 'Automated Vehicle Classification & Tiering Tools', icon: Layers },
 { text: 'Mobility Operations & Compliance Advisory', icon: Shield }
 ],
 icon: MapPin,
 solutionStack: ['Custom Mobility Software Build', 'Cognitive Verification AI Engine', 'Safety Inspection Platform', 'Mobility Strategy Advisory']
 },
 'government-agencies': {
 title: 'Government Agencies',
 subtitle: 'Enhance Civic Infrastructure & Registry Validation',
 color: 'from-[#76bc1d] to-[#174395]',
 description: "Modernize civic transit networks, municipal fleet management, and departmental vehicle operations with custom enterprise software. Achtrex partners with public sector organizations and municipal transit authorities to engineer sovereign software platforms, cognitive fleet health analytics, and strategic transition advisory.\n\nFrom electrifying public municipal transit to deploying predictive maintenance telemetry across emergency and utility fleets, we deliver enterprise-grade software builds that improve operational uptime, reduce emissions footprints, and provide complete client code ownership.",
 challenges: [
 'Inaccurately classifying vehicles on toll roads and bridges due to legacy, fragmented state registry databases.',
 'Struggling to enforce urban environmental policies and Low Emission Zones (LEZ) due to a lack of rapid emissions and fuel-type data.',
 'Aging legacy municipal software platforms that are difficult to maintain and integrate with modern vehicle hardware.'
 ],
 solutions: [
 'Custom Public Sector Software Builds: Secure, accessible software systems for municipal fleet and transit coordination.',
 'Environmental Enforcement: Utilize our custom software models to instantly verify a vehicle\'s exact fuel type, EV architecture, and emissions rating.',
 'Public Mobility Consultation: Strategic advisory on civic transit modernization, software procurement, and systems design.'
 ],
 capabilities: [
 { text: 'Custom Municipal Fleet & Transit Management Builds', icon: Zap },
 { text: 'Cognitive Infrastructure & Predictive Health AI', icon: Layers },
 { text: 'Public Sector Security & Accessible Software Standards', icon: Activity },
 { text: 'Civic Mobility Operations & Modernization Advisory', icon: ShieldCheck }
 ],
 icon: Landmark,
 solutionStack: ['Custom Civic Software Build', 'Cognitive Transit Analytics AI', 'Fleet Maintenance Platform', 'Public Mobility Advisory']
 },
 'default': {
 title: 'Automotive Industry Solutions',
 subtitle: 'Powering the Future of Enterprise Mobility & Intelligence',
 color: 'from-[#00a9ce] to-[#174395]',
 description: "Deploy bespoke automotive software builds, specialized cognitive AI diagnostics, and strategic automotive consultation to accelerate your business operations. The automotive ecosystem is historically plagued by disjointed tools, fragmented workflows, and legacy software that hinders growth. Achtrex provides the software engineering, cognitive intelligence, and strategic direction required to build high-velocity automotive enterprises.\n\nWhether constructing specialized workshop management platforms, deploying cognitive diagnostic models, or advising executive teams on shop floor operations, Achtrex delivers end-to-end excellence across the 3 core pillars.",
 challenges: [
 'Fragmented, disconnected legacy automotive tools that create operational bottlenecks.',
 'A lack of specialized domain software tailored to modern workshop and dealership workflows.',
 'Difficulty implementing modern AI diagnostics and finding strategic automotive technical leadership.'
 ],
 solutions: [
 'Bespoke Automotive Software Builds: Tailored web and mobile applications engineered for your exact operational workflows.',
 'Cognitive AI Solutions: Domain-trained multimodal AI models for acoustic vehicle diagnosis and predictive maintenance.',
 'Automotive Consultation: Strategic advisory for businesses, manufacturers, and repair networks on operations and technology.'
 ],
 capabilities: [
 { text: 'Custom Automotive Software Engineering (100% IP Ownership)', icon: Database },
 { text: 'Cognitive AI Diagnostics & Multi-Modal Models', icon: Zap },
 { text: 'Automotive Advisory & Workflow Optimization', icon: Cpu },
 { text: 'Bank-Grade Encryption & Guaranteed 99.99% Uptime SLA', icon: ShieldCheck }
 ],
 icon: Database,
 solutionStack: ['Automotive Software Builds', 'Cognitive AI Diagnostics', 'Automotive Consultation', 'Enterprise Architecture']
 }
};

export default function IndustryClient({ slug }: { slug: string }) {
 const data = industryData[slug] || industryData['default'];
 const displayTitle = industryData[slug] ? data.title : slug.split('-').map((w:string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

 return (
 <main className="min-h-screen bg-[#f8fafc] text-slate-900 pb-24">
      {/* Dynamic Themed Header */}
      <InnerPageHeader title={displayTitle} subtitle={data.subtitle} theme="data" />

      {/* Content */}
      <section className="px-6 py-12 relative z-20">
 <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
 
 {/* Left Col */}
 <div className="lg:col-span-8 space-y-16 bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
 
 {/* Overview */}
 <div className="relative">
 <div className="absolute -left-12 top-2 bottom-2 w-1.5 rounded-r-full bg-gradient-to-b opacity-50 hidden md:block" style={{ backgroundImage: `linear-gradient(to bottom, var(--tw-gradient-stops))` }} />
 <h2 className="text-3xl font-extrabold tracking-tight text-[#001a22] mb-8 flex items-center gap-4">
 <Target className="w-8 h-8 text-[#00a9ce]" />
 Industry Overview
 </h2>
 <div className="space-y-6">
 {data.description.split('\n\n').map((paragraph: string, i: number) => (
 <p key={i} className="text-slate-800 leading-[1.8] text-[15px] sm:text-base font-normal">
 {paragraph}
 </p>
 ))}
 </div>
 </div>

 {/* Capabilities (Grid Style) */}
 {data.capabilities && (
 <div className="pt-8 border-t border-slate-100">
 <h3 className="text-2xl font-bold tracking-tight text-[#001a22] mb-8 flex items-center gap-3">
 <Zap className="w-7 h-7 text-[#F2147A]" />
 What We Can Do For You
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {data.capabilities.map((cap: any, i: number) => {
 const CapIcon = cap.icon;
 return (
 <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md hover:border-[#00a9ce] transition-all group">
 <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
 <CapIcon className="w-5 h-5 text-[#00a9ce]" />
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
 <AlertCircle className="w-6 h-6 text-[#F2147A]" />
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
 <ShieldCheck className="w-6 h-6 text-[#76bc1d]" />
 Our Solution
 </h3>
 <div className="space-y-5">
 {data.solutions.map((solution: string, i: number) => (
 <div key={i} className="flex items-start gap-4 bg-[#f2fdf5] rounded-xl p-5 border border-green-100/60">
 <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-green-100">
 <CheckCircle2 className="w-5 h-5 text-[#76bc1d]" />
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
 <Cpu className="w-6 h-6 text-white" />
 </div>
 <h3 className="text-2xl font-bold mb-2 text-[#001a22]">Recommended Solution Stack</h3>
 <p className="text-slate-500 text-sm mb-6 font-medium">Specialized software builds, cognitive AI models, and advisory modules deployed for this sector.</p>
 
 <div className="space-y-3 mb-8">
 {data.solutionStack.map((item: string, i: number) => (
 <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-[#00a9ce] hover:shadow-md transition-all cursor-default group">
 <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-[#00a9ce]/10 transition-colors">
 <Database className="w-4 h-4 text-[#00a9ce]" />
 </div>
 <span className="font-bold text-sm text-slate-700">{item}</span>
 </div>
 ))}
 </div>
 
  <Link href="/contact-us" className="btn-navbar-cta w-full block">
    <span className="btn-navbar-cta-inner !py-3.5 !px-6 text-[13px] uppercase tracking-wider justify-center w-full">
      <span>Discuss Your Solution</span>
      <ArrowRight className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
    </span>
  </Link>
 </div>
 </div>

 </div>
 </section>
 </main>
 );
}
