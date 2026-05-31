'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className="bg-transparent text-slate-900 font-sans antialiased min-h-screen pt-32 pb-24">
            <div className="max-w-[1200px] mx-auto px-6 text-center mb-16">
                <h1 className="text-[40px] md:text-[56px] font-black tracking-tight leading-[1.05] text-slate-900 mb-4">
                    Product Ecosystem
                </h1>
                <p className="text-[16px] md:text-[18px] text-slate-500 max-w-2xl mx-auto font-medium">
                    Explore our proprietary platforms powering modern automotive businesses.
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-12">
                {products.map((product) => {
                    const CardContent = (
                        <div className="group relative rounded-[32px] overflow-hidden bg-[#F8F9FA] shadow-md border border-slate-200 hover:shadow-2xl transition-all duration-500 cursor-pointer block">
                            
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#0a0a0b] overflow-hidden">
                                <Image 
                                    src={product.image} 
                                    alt={product.name} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                                
                                {/* Hover Action Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <div className="bg-[#F8F9FA] text-slate-900 font-bold text-[15px] px-8 py-4 rounded-full shadow-lg flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        Select to read more
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Card Footer */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[#F8F9FA]/80 via-black/40 to-transparent">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{product.name}</h2>
                                <p className="text-slate-900/80 font-medium text-[15px]">{product.desc}</p>
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
