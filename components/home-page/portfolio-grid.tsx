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
        <section className="w-full bg-white pt-24">
            
            {/* Header Area */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl font-black text-[#003049] tracking-tight mb-4"
                >
                    Transforming Automotive Ideas Into Enterprise Platforms
                </motion.h2>
            </div>

            {/* Alternating Split Layout */}
            <div className="w-full flex flex-col">
                {portfolioItems.map((item, index) => {
                    const isEven = index % 2 === 0;
                    
                    return (
                        <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[500px]">
                            
                            {/* Text Block */}
                            <motion.div 
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col justify-center p-12 md:p-20 lg:p-32 ${isEven ? 'bg-[#f4f6f8] md:order-1' : 'bg-white md:order-2'} order-2`}
                            >
                                <h3 className="text-2xl md:text-[28px] font-bold text-slate-900 mb-6 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[17px] text-slate-600 mb-8 leading-relaxed">
                                    {item.desc}
                                </p>
                                <div>
                                    <Link href={item.link} className="inline-flex items-center text-[#00a9ce] font-semibold text-[16px] hover:text-[#008db0] transition-colors">
                                        View Project <ArrowRight weight="bold" className="w-5 h-5 ml-1" />
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Image Block */}
                            <motion.div 
                                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`relative w-full aspect-[4/3] md:aspect-auto flex items-center justify-center p-12 lg:p-24 ${isEven ? 'bg-white md:order-2' : 'bg-[#f4f6f8] md:order-1'} order-1 overflow-hidden group`}
                            >
                                <Image 
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className={`transition-transform duration-700 ease-out group-hover:scale-[1.03] ${item.isLogo ? 'object-contain p-16 lg:p-32' : 'object-cover'}`}
                                    unoptimized
                                />
                            </motion.div>

                        </div>
                    );
                })}
            </div>

        </section>
    );
};
