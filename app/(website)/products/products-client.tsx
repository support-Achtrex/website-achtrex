'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InnerPageHeader } from "@/components/inner-page-header";

export default function ProductsClient() {
    
    const products = [
        {
            id: 'automotive-dataset',
            name: 'AutomotiveDataset.com',
            desc: 'Enterprise VIN intelligence & vehicle specifications',
            href: 'https://automotivedataset.com',
            external: true,
            image: '/projects/automotive_hero_new.png'
        },
        {
            id: 'lumi-ai',
            name: 'LUMI AI Engine',
            desc: 'Cognitive reasoning model for vehicle diagnostics',
            href: '/products/lumi',
            external: false,
            image: '/projects/lumi_hero_new.png'
        },
        {
            id: 'achtrex-core',
            name: 'Achtrex Core',
            desc: 'Enterprise integration hub & API gateway',
            href: '/products/enterprise-platforms',
            external: false,
            image: '/projects/command_center.jpg'
        }
    ];

    return (
        <div className="bg-[#f4f4f4] text-slate-900 font-sans antialiased pb-24">
            <InnerPageHeader title="Product Ecosystem" subtitle="Explore our proprietary platforms powering modern automotive businesses." />

            <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-12 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
                    <div className="bg-white border border-slate-200 rounded-none p-8 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#00a9ce]/10 rounded-none flex items-center justify-center text-[#00a9ce] mb-6">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">High-Performance APIs</h3>
                        <p className="text-slate-600 font-medium leading-relaxed">Built for scale with sub-50ms latency, our infrastructure supports millions of daily queries with 99.99% guaranteed uptime.</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-none p-8 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#76bc1d]/10 rounded-none flex items-center justify-center text-[#76bc1d] mb-6">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Security</h3>
                        <p className="text-slate-600 font-medium leading-relaxed">SOC2 compliant data centers and end-to-end encryption ensure your proprietary intelligence remains secure at all times.</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-none p-8 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#00a9ce]/10 rounded-none flex items-center justify-center text-[#00a9ce] mb-6">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Ready Data</h3>
                        <p className="text-slate-600 font-medium leading-relaxed">Clean, normalized, and perfectly structured datasets designed specifically to train and power modern cognitive reasoning models.</p>
                    </div>
                </div>

                {products.map((product) => {
                    const CardContent = (
                        <div className="group relative rounded-none overflow-hidden bg-white shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-500 cursor-pointer flex flex-col">
                            
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#081622] overflow-hidden">
                                <Image 
                                    src={product.image} 
                                    alt={product.name} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-[#001a22]/0 group-hover:bg-[#001a22]/60 transition-colors duration-300" />
                                
                                {/* Hover Action Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <div className="bg-[#76bc1d] text-white font-bold text-[15px] px-8 py-4 rounded-none shadow-none flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border border-[#76bc1d]">
                                        Select to read more
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Card Footer */}
                            <div className="p-6 md:p-8 bg-white border-t border-slate-100 flex-grow">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{product.name}</h2>
                                <p className="text-slate-600 font-medium text-[15px]">{product.desc}</p>
                            </div>
                        </div>
                    );

                    return product.external ? (
                        <a key={product.id} href={product.href} target="_blank" rel="noopener noreferrer">
                            {CardContent}
                        </a>
                    ) : (
                        <Link key={product.id} href={product.href}>
                            {CardContent}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
