'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Database, Shield, Wrench, Car, Briefcase, FileText, Monitor, Tag } from 'lucide-react';
import Link from 'next/link';

const industryData: Record<string, any> = {
    'auto-insurance': {
        title: 'Auto Insurance',
        subtitle: 'Provide Accurate Car Insurance Quotes',
        description: 'Achtrex provides enterprise-grade automotive data infrastructure specifically designed for the insurance sector. By integrating our high-velocity VIN decoding and historical vehicle records, actuaries and underwriters can construct robust, predictive risk models. Eliminate guesswork in policy pricing by leveraging real-time data on Advanced Driver Assistance Systems (ADAS), exact trim specifications, and historical accident records to offer highly accurate, dynamic insurance quotes.',
        challenges: [
            'Difficulty in accurately identifying factory-installed ADAS features which drastically impact risk profiles and repair costs.',
            'Relying on fragmented, delayed, or incomplete historical accident and total-loss records during the underwriting process.',
            'High operational overhead and friction caused by manual data entry, leading to inaccurate quotes and poor customer experiences.'
        ],
        solutions: [
            'Integrate our sub-second VIN Decoding API to instantly retrieve exhaustive vehicle specifications, including standard and optional safety equipment.',
            'Automate the ingestion of comprehensive vehicle history and market value data directly into your actuarial models to refine risk assessment.',
            'Deploy scalable data pipelines that drastically reduce manual processing time, accelerating claim resolutions and improving overall loss ratios.'
        ],
        icon: Shield,
        color: 'from-[#174395] to-[#489EE6]',
        apis: ['VIN Decoding API', 'Vehicle History API', 'Market Value API', 'OCR API']
    },
    'car-dealerships': {
        title: 'Car Dealerships',
        subtitle: 'Accelerate Inventory Turnover & Sales',
        description: 'Transform your dealership operations with Achtrex\'s comprehensive intelligence layer. We deliver real-time market valuations, exact vehicle specifications, and competitive pricing insights directly into your Dealer Management System (DMS). By equipping your sales and acquisition teams with unassailable data transparency, you can accelerate inventory turnover, optimize acquisition costs, and build unparalleled trust with your buyers.',
        challenges: [
            'Pricing pre-owned inventory competitively in a rapidly fluctuating market without sacrificing profit margins.',
            'Inaccurately representing vehicle trims and factory options online, leading to lost sales and decreased buyer trust.',
            'Slow and inefficient vehicle intake and appraisal processes that delay getting inventory front-line ready.'
        ],
        solutions: [
            'Leverage our Real-time Market Value API to algorithmically determine optimal acquisition and retail pricing based on localized market data.',
            'Utilize our comprehensive VIN decoding to automatically generate rich, accurate, and highly converting online vehicle descriptions.',
            'Integrate instant vehicle history and specification reports directly into your digital showroom to maximize buyer confidence.'
        ],
        icon: Car,
        color: 'from-[#861F80] to-[#F2147A]',
        apis: ['VIN Decoding API', 'Window Sticker API', 'Market Value API', 'Sales History API']
    },
    'auto-repair': {
        title: 'Auto Repair Service',
        subtitle: 'Streamline Diagnostics and Service Ops',
        description: 'Enhance your shop management with instant access to OEM maintenance schedules, repair pricing, and predictive diagnostic reasoning. Achtrex equips service centers with the exact mechanical specifications and technical service bulletins needed to service modern, highly-complex vehicles. Reduce technician research time and increase bay turnover by integrating our proprietary intelligence directly into your workflow.',
        challenges: [
            'Locating accurate, up-to-date OEM repair procedures, fluid capacities, and labor times for a diverse range of modern vehicles.',
            'Translating complex OBD2 diagnostic trouble codes into actionable, step-by-step repair procedures.',
            'Managing supply chain delays and accurately identifying cross-compatible parts for specific vehicle trims.'
        ],
        solutions: [
            'Provide technicians with direct access to comprehensive maintenance schedules, fluid capacities, and repair pricing APIs.',
            'Deploy AI-powered diagnostic routing to instantly map error codes to known fixes, drastically reducing diagnostic time.',
            'Seamlessly integrate our vast parts cross-reference database with your existing Shop Management System (SMS) for automated ordering.'
        ],
        icon: Wrench,
        color: 'from-[#174395] via-[#861F80] to-[#F2147A]',
        apis: ['Repair Pricing API', 'Vehicle Maintenance API', 'Technical Service Bulletins API', 'LUMI Engine']
    },
    'car-website': {
        title: 'Car Website',
        subtitle: 'Enrich Your Automotive Content',
        description: 'Supercharge your automotive blog, review site, or consumer portal with enterprise-grade vehicle specifications, high-resolution imagery, and dynamic performance metrics. Achtrex allows digital publishers to construct massive, highly-accurate vehicle databases without the overhead of manual data curation, ensuring your audience always has access to the most authoritative automotive content.',
        challenges: [
            'Sourcing accurate, comprehensive, and up-to-date vehicle specifications across global markets and thousands of distinct trims.',
            'Maintaining high-quality databases of vehicle dimensions, EV battery ranges, and standard features without immense manual labor.',
            'Keeping users engaged and increasing dwell time with dynamic, interactive, and visually rich vehicle data.'
        ],
        solutions: [
            'Pull real-time, exhaustive specifications—from engine displacement to interior legroom—directly into your CMS.',
            'Access highly specific EV metrics, including battery chemistry, charging curves, and real-world range data.',
            'Enhance editorial reviews and comparison tools with accurate market value trends and historical depreciation data.'
        ],
        icon: Monitor,
        color: 'from-[#F2147A] to-[#861F80]',
        apis: ['Vehicle Specifications API', 'EV Specifications API', 'Vehicle Image API']
    },
    'classifieds-websites': {
        title: 'Classifieds Website',
        subtitle: 'Build Trust in Peer-to-Peer Sales',
        description: 'Protect your marketplace users and dramatically improve listing quality by automatically verifying VINs, checking stolen vehicle registries, and providing objective market value context. Achtrex provides the essential infrastructure to transform a chaotic peer-to-peer marketplace into a secure, transparent, and highly efficient transactional platform.',
        challenges: [
            'Combating fraudulent listings, cloned VINs, and inaccurate vehicle descriptions uploaded by malicious or uneducated sellers.',
            'Sellers severely overpricing or underpricing their vehicles, leading to marketplace stagnation and poor liquidity.',
            'A fundamental lack of trust between anonymous buyers and sellers regarding the true condition and history of a vehicle.'
        ],
        solutions: [
            'Automatically verify every submitted VIN against global databases to flag invalid formats and check stolen vehicle registries.',
            'Provide integrated, dynamic market value widgets on every listing to educate both buyers and sellers on fair pricing.',
            'Generate automatic vehicle history summaries, title checks, and exact feature lists to establish immediate buyer confidence.'
        ],
        icon: FileText,
        color: 'from-[#489EE6] to-[#174395]',
        apis: ['Stolen Vehicle API', 'Market Value API', 'VIN Title Check API']
    },
    'car-rental': {
        title: 'Car Rental',
        subtitle: 'Optimize Fleet Utilization & Value',
        description: 'Manage your rental fleet efficiently by tracking real-time vehicle depreciation, automating preventative maintenance schedules, and streamlining vehicle onboarding. Achtrex provides fleet operators with the macroeconomic data necessary to determine the exact optimal moment to acquire or defleet assets, maximizing overall fleet profitability.',
        challenges: [
            'Tracking the exact specifications, technology packages, and trims of thousands of active fleet vehicles.',
            'Determining the financially optimal time to sell off fleet vehicles before they cross critical depreciation thresholds.',
            'Managing preventative maintenance schedules across diverse makes and models to avoid catastrophic failures and downtime.'
        ],
        solutions: [
            'Instantly onboard new vehicles into your fleet management system by decoding the VIN to extract all factory specifications.',
            'Monitor real-time fleet market value and historical depreciation curves to algorithmically optimize your sell-off timing.',
            'Automate maintenance alerts and service workflows based on exact OEM schedules tailored to each specific vehicle.'
        ],
        icon: Briefcase,
        color: 'from-[#174395] to-[#861F80]',
        apis: ['Vehicle Maintenance API', 'Market Value API', 'VIN Decoding API']
    },
    'auto-parts': {
        title: 'Auto Parts Company',
        subtitle: 'Ensure Perfect Fitment Every Time',
        description: 'Reduce return rates and drastically improve customer satisfaction by integrating precise vehicle specifications and fitment data into your e-commerce platform. Achtrex bridges the gap between complex ACES/PIES catalog data and consumer-friendly shopping experiences, ensuring that your customers always purchase the exact right part for their specific vehicle.',
        challenges: [
            'Extremely high return rates and shipping costs caused by customers purchasing incompatible parts for their vehicles.',
            'Customers struggling to identify their exact vehicle sub-model, engine code, or trim level from complex dropdown menus.',
            'Managing and normalizing massive, complex ACES/PIES catalog data across thousands of aftermarket manufacturers.'
        ],
        solutions: [
            'Allow customers to seamlessly shop for parts by simply entering their License Plate or VIN, instantly identifying their exact trim.',
            'Map highly specific vehicle sub-models and engine codes directly to your exact aftermarket parts inventory.',
            'Provide absolute confidence at checkout with our guaranteed fitment APIs, reducing friction and increasing conversion rates.'
        ],
        icon: Tag,
        color: 'from-[#861F80] to-[#174395]',
        apis: ['License Plate API', 'VIN Decoding API', 'Vehicle Specifications API']
    },
    'car-finance': {
        title: 'Car Finance',
        subtitle: 'Accurate Loan-to-Value Assessments',
        description: 'Minimize institutional risk and approve automotive loans faster with real-time market value algorithms, title checks, and auction history verification. Achtrex empowers lenders with the definitive, objective data required to assess exact collateral value, ensuring that your portfolios are protected against market volatility and title fraud.',
        challenges: [
            'Assessing the highly accurate collateral value of a vehicle in a volatile market to determine safe Loan-to-Value (LTV) limits.',
            'Verifying the title status, brand history, and preventing loan origination on salvage, rebuilt, or stolen vehicles.',
            'Time-consuming manual loan approval processes that require underwriters to consult multiple fragmented data sources.'
        ],
        solutions: [
            'Instantly calculate accurate Loan-to-Value (LTV) ratios by pulling real-time retail and wholesale market valuations.',
            'Automatically check every application for salvage titles, total loss history, and severe accident reports prior to approval.',
            'Streamline and automate underwriting approvals with instantaneous, high-velocity data ingestion directly into your LOS.'
        ],
        icon: Database,
        color: 'from-[#F2147A] to-[#174395]',
        apis: ['Market Value API', 'VIN Title Check API', 'Auction History API']
    },
    'manufacturers': {
        title: 'Manufacturers',
        subtitle: 'OEM Intelligence & Market Analytics',
        description: 'Leverage global automotive data to gain competitive intelligence, track production insights, and analyze macroeconomic market trends. Achtrex provides OEMs with the macro and micro-level data required to analyze competitor feature adoption, track vehicle depreciation curves, and optimize future vehicle architectures.',
        challenges: [
            'Gaining granular visibility into competitor vehicle specifications, feature bundling, and trim-level pricing strategies.',
            'Tracking long-term vehicle depreciation and residual value retention to optimize lease pricing and financing offers.',
            'Understanding historical market trends and consumer preferences to inform future vehicle development and supply chain planning.'
        ],
        solutions: [
            'Access exhaustive datasets detailing competitor specifications, ADAS adoption rates, and exact pricing architectures.',
            'Utilize our historical market value APIs to analyze residual value retention across specific models and vehicle segments.',
            'Integrate our macro-level automotive data directly into your strategic planning and market intelligence dashboards.'
        ],
        icon: Database,
        color: 'from-[#174395] to-[#F2147A]',
        apis: ['Vehicle Specifications API', 'Market Value API', 'Sales History API']
    },
    'default': {
        title: 'Automotive Industry Solutions',
        subtitle: 'Powering the Future of Mobility',
        description: 'Integrate comprehensive vehicle data APIs and AI reasoning engines to accelerate your automotive business operations. Achtrex provides the robust, high-velocity data infrastructure required to build the next generation of digital automotive platforms, from intelligent marketplaces to automated underwriting systems.',
        challenges: [
            'Fragmented, inaccurate, and heavily siloed vehicle data sources that require immense engineering effort to normalize.',
            'High latency and poor reliability in legacy automotive API providers, causing critical bottlenecks in production environments.',
            'A complete lack of intelligent, predictive insights that move beyond basic data retrieval into true automated reasoning.'
        ],
        solutions: [
            'Access unified, high-speed GraphQL and REST API endpoints that deliver completely normalized, production-ready data.',
            'Rely on enterprise-grade infrastructure built for scale, offering real-time data synchronization with 99.99% uptime guarantees.',
            'Leverage our proprietary LUMI AI models, specifically trained for automotive reasoning and complex workflow automation.'
        ],
        icon: Database,
        color: 'from-[#489EE6] to-[#174395]',
        apis: ['VIN Decoding API', 'Market Value API', 'License Plate API', 'LUMI Engine']
    }
};

export default function IndustryClient({ slug }: { slug: string }) {
    const data = industryData[slug] || industryData['default'];
    const displayTitle = industryData[slug] ? data.title : slug.split('-').map((w:string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return (
        <main className="min-h-screen bg-[#070b14] text-white selection:bg-[#861F80] selection:text-white pt-24 pb-20">
            {/* Header */}
            <div className={`bg-gradient-to-br ${data.color} opacity-90 border-b border-white/10 py-10 px-6`}>
                <div className="max-w-[1200px] mx-auto text-white">
                    <nav className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 mb-4 flex items-center gap-2">
                        <span>Industries</span>
                        <span className="text-white/30">/</span>
                        <span className="text-white">{displayTitle}</span>
                    </nav>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
                            {displayTitle}
                        </h1>
                        <p className="text-lg text-white/90 font-medium max-w-2xl">{data.subtitle}</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <section className="py-24 px-6">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Left Col */}
                    <div className="lg:col-span-8 space-y-16">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Overview</h2>
                            <p className="text-gray-400 leading-relaxed font-medium text-lg">
                                {data.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold tracking-tight text-[#c2fce3]">The Challenge</h3>
                                <ul className="space-y-4">
                                    {data.challenges.map((challenge: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-[#861F80] shrink-0 mt-2" />
                                            <span className="leading-relaxed">{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold tracking-tight text-[#c2fce3]">Our Solution</h3>
                                <ul className="space-y-4">
                                    {data.solutions.map((solution: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400 font-medium">
                                            <ShieldCheck className="w-5 h-5 text-[#c2fce3] shrink-0 mt-0.5" />
                                            <span className="leading-relaxed">{solution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Col */}
                    <div className="lg:col-span-4">
                        <div className="bg-[#111112] border border-white/10 rounded-3xl p-8 sticky top-32">
                            <h3 className="text-xl font-bold mb-6 text-white">Recommended APIs</h3>
                            <div className="space-y-3">
                                {data.apis.map((api: string, i: number) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-[#070b14] rounded-xl border border-white/10 shadow-sm">
                                        <Database className="w-4 h-4 text-[#489EE6]" />
                                        <span className="font-bold text-sm text-gray-200">{api}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 w-full bg-[#111112] text-white font-bold py-3.5 rounded-lg hover:bg-gray-900 transition-all">
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
