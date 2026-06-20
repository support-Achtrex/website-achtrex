'use client';

import React from 'react';
import Link from 'next/link';
import { Database, Bot, Code2 } from 'lucide-react';

const products = [
    {
        label: 'AutomotiveDataset.com',
        description: 'Enterprise VIN intelligence, technical specifications, and historical data APIs built for high-frequency access and massive scale.',
        href: '/products/automotive',
        icon: Database
    },
    {
        label: 'LUMI AI Engine',
        description: 'Proprietary cognitive reasoning model tailored for vehicle diagnostics, automated customer support, and predictive insights.',
        href: '/products/lumi',
        icon: Bot
    },
    {
        label: 'Achtrex Core',
        description: 'The foundational enterprise integration hub and API gateway that provides secure access to our entire suite of automotive tools.',
        href: '/products/enterprise-platforms',
        icon: Code2
    }
];

export default function ProductsClient() {
    return (
        <div className="w-full min-h-screen bg-[#f8fafc] pt-32 pb-24 px-6">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#11243b] tracking-tight mb-4">
                        Our Product Ecosystem
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                        Explore our proprietary platforms powering modern automotive businesses, from high-frequency datasets to autonomous AI frameworks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((prod, idx) => {
                        const Icon = prod.icon;
                        return (
                            <Link key={idx} href={prod.href} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-500/30 transition-all duration-300">
                                <div className="w-14 h-14 bg-slate-50 group-hover:bg-orange-50 rounded-xl flex items-center justify-center mb-6 transition-colors">
                                    <Icon className="w-7 h-7 text-[#11243b] group-hover:text-orange-500 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-[#11243b] mb-3">{prod.label}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {prod.description}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
