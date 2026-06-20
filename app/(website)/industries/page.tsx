import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Store, Wrench, Globe, Search, Factory, Key, Package, CircleDollarSign } from 'lucide-react';

const industries = [
    { label: 'Car Insurance', description: 'Precise VIN decoding, ADAS specs, and historical data for risk modeling.', href: '/industries/auto-insurance', icon: ShieldCheck },
    { label: 'Car Dealership', description: 'Real-time market insights, valuation data, and inventory management APIs.', href: '/industries/car-dealerships', icon: Store },
    { label: 'Auto Repair Service', description: 'Detailed OEM specifications, maintenance schedules, and cross-reference parts data.', href: '/industries/auto-repair', icon: Wrench },
    { label: 'Car Website', description: 'Rich vehicle databases and high-resolution imagery for digital automotive platforms.', href: '/industries/car-website', icon: Globe },
    { label: 'Classified Website', description: 'Automated listing enrichment, accurate valuations, and VIN-to-specs integration.', href: '/industries/classifieds-websites', icon: Search },
    { label: 'Manufacturers', description: 'Competitive intelligence, production insights, and global market trends.', href: '/industries/manufacturers', icon: Factory },
    { label: 'Car Rental', description: 'Fleet optimization data, lifecycle tracking, and depreciation intelligence.', href: '/industries/car-rental', icon: Key },
    { label: 'Auto Parts Company', description: 'Comprehensive fitment data, OEM cross-referencing, and supply chain insights.', href: '/industries/auto-parts', icon: Package },
    { label: 'Car Finance', description: 'Accurate residual values, depreciation curves, and loan origination data.', href: '/industries/car-finance', icon: CircleDollarSign }
];

export default function IndustriesPage() {
    return (
        <div className="w-full min-h-screen bg-[#f8fafc] pt-32 pb-24 px-6">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#11243b] tracking-tight mb-4">
                        Industries We Empower
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                        Discover how our automotive intelligence and custom enterprise platforms drive innovation across every sector of the mobility ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, idx) => {
                        const Icon = ind.icon;
                        return (
                            <Link key={idx} href={ind.href} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-500/30 transition-all duration-300">
                                <div className="w-14 h-14 bg-slate-50 group-hover:bg-orange-50 rounded-xl flex items-center justify-center mb-6 transition-colors">
                                    <Icon className="w-7 h-7 text-[#11243b] group-hover:text-orange-500 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-[#11243b] mb-3">{ind.label}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {ind.description}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
