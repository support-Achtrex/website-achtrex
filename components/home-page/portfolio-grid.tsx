'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import Link from 'next/link';

const portfolioItems = [
    {
        id: 1,
        title: "AutomotiveDataset.com",
        category: "Product",
        image: "/projects/ad-logo.png",
        link: "/products",
        desc: "We partnered with AutomotiveDataset.com to architect their enterprise VIN intelligence infrastructure. Our team optimized their backend systems to deliver sub-50ms latency for vehicle specifications, enabling them to scale to millions of daily queries.",
        isLogo: true
    },
    {
        id: 2,
        title: "LUMI AI Engine",
        category: "Product",
        image: "/projects/lumi-logo.png",
        link: "/products",
        desc: "We engineered LUMI AI, a proprietary cognitive reasoning model designed specifically for vehicle diagnostics and automotive data processing. This engine powers automated customer support and internal knowledge assistants.",
        isLogo: true
    },
    {
        id: 3,
        title: "Achtrex Core",
        category: "Product",
        image: "/achtrex-logo-email.png",
        link: "/products",
        desc: "Achtrex Core serves as the foundational enterprise integration hub. We designed this API gateway to provide seamless, secure, and rapid access to our entire suite of automotive intelligence tools for our B2B partners.",
        isLogo: true
    },
    {
        id: 4,
        title: "Ark Auto Shop",
        category: "Use Case",
        image: "/logos/use-cases/arkauto.png",
        link: "/use-cases",
        desc: "We fully designed, engineered, and deployed the complete digital infrastructure powering Ark Auto Shop's automotive parts distribution. We integrated AI-powered workflows and intelligent fitment technologies to streamline their service ecosystem.",
        isLogo: true
    },
    {
        id: 5,
        title: "Carkasa",
        category: "Use Case",
        image: "/logos/use-cases/vehiclehistory.png",
        link: "/use-cases",
        desc: "We collaborated with Carkasa to build a bespoke automotive commerce platform that increases customer engagement. We developed scalable digital operations and vehicle experience systems to drive their B2C revenue.",
        isLogo: true
    },
    {
        id: 6,
        title: "VehicleReportCheck",
        category: "Use Case",
        image: "/logos/use-cases/vehiclereportcheck.png",
        link: "/use-cases",
        desc: "We developed and continue to manage the VehicleReportCheck platform. We focused on VIN intelligence, vehicle transparency, and comprehensive reporting workflows to create a trusted vehicle verification ecosystem.",
        isLogo: true
    }
];

export const PortfolioGrid = () => {
    return (
        <section className="w-full bg-[#f8fafc] pt-24">
            
            {/* Header Area */}
            <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center flex flex-col items-center">
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs font-bold tracking-widest text-[#00a9ce] uppercase mb-4"
                >
                    Success Stories & Products
                </motion.p>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl font-black text-[#001a22] tracking-tight max-w-3xl leading-tight"
                >
                    Transforming <span className="text-gradient">Automotive Ideas</span> Into Enterprise Platforms
                </motion.h2>
            </div>

            {/* Grid Area */}
            <div className="max-w-[1200px] mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => {
                        return (
                            <motion.div 
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-[#00a9ce]/30 transition-all duration-500 overflow-hidden flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8 overflow-hidden border-b border-slate-50">
                                    <Image 
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className={`transition-transform duration-700 ease-out group-hover:scale-110 ${item.isLogo ? 'object-contain p-10' : 'object-cover'}`}
                                        unoptimized
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-slate-100/50">
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-600">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-[#001a22] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-logo-gradient transition-all duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-[15px] leading-relaxed mb-8 flex-1">
                                        {item.desc}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-slate-50">
                                        <Link href={item.link} className="inline-flex items-center text-[#00a9ce] font-bold tracking-wide text-[13px] uppercase hover:text-[#001a22] transition-colors">
                                            View Details <ArrowRight weight="bold" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
};
