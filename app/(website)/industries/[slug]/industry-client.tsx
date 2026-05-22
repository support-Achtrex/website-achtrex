'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Database, Shield, Wrench, Car, Briefcase, FileText, Monitor, Tag } from 'lucide-react';
import Link from 'next/link';

const industryData: Record<string, any> = {
    'auto-insurance': {
        title: 'Auto Insurance',
        subtitle: 'Provide Accurate Car Insurance Quotes',
        description: 'Get accurate car insurance quotes with our auto insurance solutions. Build your own insurance car database for informed pricing and risk assessment.',
        challenges: [
            'Finding the true market value of vehicles.',
            'Gaining accurate accident and historical records.',
            'Time-consuming manual data entry and claims processing.'
        ],
        solutions: [
            'Instant access to precise vehicle specifications and VIN decoding.',
            'Automate workflows to reduce operational costs.',
            'Offer customizable coverage based on predictive risk models.'
        ],
        icon: Shield,
        color: 'from-[#174395] to-[#489EE6]',
        apis: ['VIN Decoding API', 'Vehicle History API', 'Market Value API', 'OCR API']
    },
    'car-dealerships': {
        title: 'Car Dealerships',
        subtitle: 'Accelerate Inventory Turnover & Sales',
        description: 'Empower your dealership with real-time vehicle data, market pricing insights, and automated inventory management to boost sales and transparency.',
        challenges: [
            'Inaccurate vehicle descriptions and missing options.',
            'Pricing vehicles competitively in a volatile market.',
            'Building trust with buyers regarding vehicle history.'
        ],
        solutions: [
            'Instantly decode VINs to auto-populate complete feature lists.',
            'Access real-time market value algorithms for optimal pricing.',
            'Provide transparent history and specification reports to buyers.'
        ],
        icon: Car,
        color: 'from-[#861F80] to-[#F2147A]',
        apis: ['VIN Decoding API', 'Window Sticker API', 'Market Value API', 'Sales History API']
    },
    'auto-repair': {
        title: 'Auto Repair Service',
        subtitle: 'Streamline Diagnostics and Service Ops',
        description: 'Enhance your shop management with instant access to OEM maintenance schedules, repair pricing, and predictive diagnostic reasoning.',
        challenges: [
            'Locating accurate OEM repair procedures and labor times.',
            'Translating OBD2 codes into actionable repair steps.',
            'Managing diverse vehicle makes and complex electrical architectures.'
        ],
        solutions: [
            'Direct access to maintenance schedules and repair pricing APIs.',
            'AI-powered diagnostic routing for faster technician turnaround.',
            'Seamless integration with your Shop Management System (SMS).'
        ],
        icon: Wrench,
        color: 'from-[#174395] via-[#861F80] to-[#F2147A]',
        apis: ['Repair Pricing API', 'Vehicle Maintenance API', 'Technical Service Bulletins API', 'LUMI Engine']
    },
    'car-website': {
        title: 'Car Website',
        subtitle: 'Enrich Your Automotive Content',
        description: 'Supercharge your automotive blog, review site, or portal with rich vehicle specifications, images, and performance metrics.',
        challenges: [
            'Sourcing accurate and up-to-date vehicle specifications.',
            'Maintaining high-quality databases of vehicle trims and options.',
            'Keeping users engaged with dynamic vehicle data.'
        ],
        solutions: [
            'Pull real-time specifications directly into your CMS.',
            'Access comprehensive EV specifications and battery metrics.',
            'Enhance reviews with accurate market value and depreciation data.'
        ],
        icon: Monitor,
        color: 'from-[#F2147A] to-[#861F80]',
        apis: ['Vehicle Specifications API', 'EV Specifications API', 'Vehicle Image API']
    },
    'classifieds-websites': {
        title: 'Classifieds Website',
        subtitle: 'Build Trust in Peer-to-Peer Sales',
        description: 'Protect your users and improve listing quality by verifying VINs, checking stolen statuses, and providing market value context.',
        challenges: [
            'Fraudulent listings and inaccurate vehicle descriptions.',
            'Users overpricing or underpricing their vehicles.',
            'Lack of trust between buyers and sellers.'
        ],
        solutions: [
            'Automatically verify VINs and check stolen vehicle databases.',
            'Provide integrated market value widgets on listings.',
            'Generate automatic vehicle history summaries for buyers.'
        ],
        icon: FileText,
        color: 'from-[#489EE6] to-[#174395]',
        apis: ['Stolen Vehicle API', 'Market Value API', 'VIN Title Check API']
    },
    'car-rental': {
        title: 'Car Rental',
        subtitle: 'Optimize Fleet Utilization & Value',
        description: 'Manage your rental fleet efficiently by tracking vehicle depreciation, managing maintenance schedules, and streamlining vehicle onboarding.',
        challenges: [
            'Tracking the exact specifications and trims of fleet vehicles.',
            'Knowing when to sell vehicles based on market depreciation.',
            'Managing preventative maintenance to avoid downtime.'
        ],
        solutions: [
            'Instantly onboard new vehicles into your system via VIN decoding.',
            'Monitor fleet market value to optimize sell-off timing.',
            'Automate maintenance alerts based on OEM schedules.'
        ],
        icon: Briefcase,
        color: 'from-[#174395] to-[#861F80]',
        apis: ['Vehicle Maintenance API', 'Market Value API', 'VIN Decoding API']
    },
    'auto-parts': {
        title: 'Auto Parts Company',
        subtitle: 'Ensure Perfect Fitment Every Time',
        description: 'Reduce return rates and improve customer satisfaction by integrating precise vehicle specifications and fitment data into your e-commerce platform.',
        challenges: [
            'High return rates due to incorrect part fitment.',
            'Customers struggling to identify their exact vehicle trim.',
            'Managing complex ACES/PIES catalog data.'
        ],
        solutions: [
            'Allow customers to shop by entering their License Plate or VIN.',
            'Map specific vehicle sub-models to your exact parts inventory.',
            'Provide confidence at checkout with guaranteed fitment APIs.'
        ],
        icon: Tag,
        color: 'from-[#861F80] to-[#174395]',
        apis: ['License Plate API', 'VIN Decoding API', 'Vehicle Specifications API']
    },
    'car-finance': {
        title: 'Car Finance',
        subtitle: 'Accurate Loan-to-Value Assessments',
        description: 'Minimize risk and approve loans faster with real-time market value algorithms, title checks, and auction history verification.',
        challenges: [
            'Assessing the accurate collateral value of a vehicle.',
            'Verifying the title status and preventing fraud.',
            'Time-consuming loan approval processes.'
        ],
        solutions: [
            'Instantly calculate accurate Loan-to-Value (LTV) ratios.',
            'Automatically check for salvage titles or total loss history.',
            'Streamline approvals with automated data ingestion.'
        ],
        icon: Database,
        color: 'from-[#F2147A] to-[#174395]',
        apis: ['Market Value API', 'VIN Title Check API', 'Auction History API']
    },
    'default': {
        title: 'Automotive Industry Solutions',
        subtitle: 'Powering the Future of Mobility',
        description: 'Integrate comprehensive vehicle data APIs and AI reasoning engines to accelerate your automotive business operations.',
        challenges: [
            'Fragmented and inaccurate vehicle data sources.',
            'High latency in legacy automotive API providers.',
            'Lack of intelligent, predictive insights.'
        ],
        solutions: [
            'Unified, high-speed GraphQL and REST API endpoints.',
            'Real-time data synchronization with 99.99% uptime.',
            'Proprietary AI models tailored for automotive reasoning.'
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
        <main className="min-h-screen bg-white text-[#111112] selection:bg-[#861F80] selection:text-white pt-24 pb-20">
            {/* Header */}
            <div className={`bg-gradient-to-br ${data.color} opacity-90 border-b border-gray-100 py-20 px-6`}>
                <div className="max-w-[1200px] mx-auto text-white">
                    <nav className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 mb-6 flex items-center gap-2">
                        <span>Industries</span>
                        <span className="text-white/30">/</span>
                        <span className="text-white">{displayTitle}</span>
                    </nav>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                            <data.icon size={32} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-2">
                                {displayTitle}
                            </h1>
                            <p className="text-xl text-white/90 font-medium max-w-2xl">{data.subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <section className="py-24 px-6">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Left Col */}
                    <div className="lg:col-span-8 space-y-16">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl font-bold tracking-tight text-[#111112] mb-6">Overview</h2>
                            <p className="text-gray-600 leading-relaxed font-medium text-lg">
                                {data.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold tracking-tight text-[#861F80]">The Challenge</h3>
                                <ul className="space-y-4">
                                    {data.challenges.map((challenge: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-[#861F80] shrink-0 mt-2" />
                                            <span className="leading-relaxed">{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold tracking-tight text-[#174395]">Our Solution</h3>
                                <ul className="space-y-4">
                                    {data.solutions.map((solution: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                                            <ShieldCheck className="w-5 h-5 text-[#174395] shrink-0 mt-0.5" />
                                            <span className="leading-relaxed">{solution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Col */}
                    <div className="lg:col-span-4">
                        <div className="bg-[#f8f9fa] border border-gray-100 rounded-3xl p-8 sticky top-32">
                            <h3 className="text-xl font-bold mb-6 text-[#111112]">Recommended APIs</h3>
                            <div className="space-y-3">
                                {data.apis.map((api: string, i: number) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                                        <Database className="w-4 h-4 text-[#489EE6]" />
                                        <span className="font-bold text-sm text-gray-800">{api}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-gray-200">
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
