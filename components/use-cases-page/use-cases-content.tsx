'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

export const UseCasesContent = () => {

    const useCases = [
        {
            name: "Ark Auto Shop",
            domain: "arkautoshop.com",
            logoPath: "/logos/use-cases/arkauto.png",
            tagline: "Intelligent Automotive Parts Distribution & Service Infrastructure",
            description: "Achtrex fully designed, engineered, deployed, and continues to manage the complete digital infrastructure powering Ark Auto Shop’s automotive parts distribution and intelligent service ecosystem. The platform was developed end-to-end as a scalable automotive commerce and operational infrastructure platform integrating automotive intelligence systems.",
            image: "/laptop_dashboard_hero.png",
            capabilities: [
                "Automotive parts distribution systems",
                "Intelligent fitment workflows",
                "Enterprise operational infrastructure",
                "API-ready automotive architecture",
            ],
            strategicValue: "Validates how LUMI AI supports practical automotive operations through intelligent reasoning, fitment analysis, and technical automotive advisory systems in production environments."
        },
        {
            name: "CarReport.com",
            domain: "carreport.com",
            logoPath: "/logos/use-cases/carreport.png",
            tagline: "Automotive Intelligence Research & Technical Documentation",
            description: "Achtrex contributed automotive research and technical documentation support for vehicle intelligence and automotive reporting systems, strengthening expertise in automotive intelligence systems, VIN infrastructure, and vehicle reporting workflows.",
            image: "/hero-analytics-dashboard.png",
            capabilities: [
                "Structured automotive research",
                "Technical documentation support",
                "Vehicle intelligence workflow analysis",
                "Automotive data research systems"
            ],
            strategicValue: "Strengthened Achtrex’s expertise in automotive intelligence systems, VIN infrastructure, vehicle reporting workflows, and consumer automotive intelligence technologies."
        },
        {
            name: "OptiCar.ai",
            domain: "opticar.ai",
            logoPath: "/logos/use-cases/opticar.png",
            tagline: "Enterprise Automotive AI Consultation & API Infrastructure",
            description: "Achtrex provides continuous consultation and enterprise automotive intelligence infrastructure support for AI-powered automotive systems within the OptiCar ecosystem, focusing on advanced data quality and seamless API interconnectivity.",
            image: "/ai_car_hero.png",
            capabilities: [
                "Advanced automotive API infrastructure",
                "Vehicle intelligence integration systems",
                "Automotive data enrichment workflows",
                "AI-ready automotive intelligence systems",
            ],
            strategicValue: "Demonstrates Achtrex’s capability to support enterprise automotive AI ecosystems through scalable API infrastructure and high-quality vehicle data integration."
        },
        {
            name: "Price360.ai",
            domain: "price360.ai",
            logoPath: "/logos/use-cases/price360.png",
            tagline: "AI Vehicle Valuation & Automotive Intelligence Infrastructure",
            description: "Achtrex provides continuous consultation and automotive intelligence infrastructure support for AI-powered vehicle valuation and inspection technologies, driving real-time market value API integrations.",
            image: "/ai_car_hero_new.png",
            capabilities: [
                "Vehicle valuation infrastructure support",
                "Automotive intelligence workflows",
                "AI-ready vehicle data systems",
                "Automotive API integration support",
            ],
            strategicValue: "Demonstrates experience supporting advanced automotive AI ecosystems involving vehicle valuation technologies and scalable API-driven infrastructure."
        },
        {
            name: "Carkasa.com",
            domain: "carkasa.com",
            logoPath: "/logos/use-cases/vehiclehistory.png",
            tagline: "Automotive Commerce & Vehicle Experience Platform",
            description: "Achtrex fully designed, developed, deployed, and continues to manage the complete infrastructure and operational platform powering Carkasa. The platform was engineered as a scalable automotive commerce ecosystem focused on vehicle experience systems.",
            image: "/enterprise_command_center.png",
            capabilities: [
                "Automotive commerce infrastructure",
                "Vehicle experience systems",
                "Intelligent automotive workflows",
                "Scalable platform architecture",
            ],
            strategicValue: "Reflects Achtrex’s capability to engineer and continuously manage large-scale automotive digital ecosystems from concept to long-term operational deployment."
        },
        {
            name: "VehicleReportCheck",
            domain: "vehiclereportcheck.com",
            logoPath: "/logos/use-cases/vehiclereportcheck.png",
            tagline: "Vehicle Verification & Automotive Intelligence Platform",
            description: "Achtrex fully developed and continues to manage the VehicleReportCheck platform as an automotive intelligence and vehicle verification ecosystem focused on VIN intelligence, vehicle transparency, and verification workflows.",
            image: "/hero-bg-2.png",
            capabilities: [
                "Vehicle verification workflows",
                "Automotive reporting systems",
                "VIN intelligence infrastructure",
                "Vehicle transparency systems",
            ],
            strategicValue: "Demonstrates ability to build and operate scalable automotive intelligence infrastructure focused on vehicle reporting technologies and verification systems."
        }
    ];

    return (
        <div className="bg-transparent text-slate-900 font-sans antialiased">
            <div className="max-w-[1200px] mx-auto px-6 py-12 pt-16">
                <div className="flex flex-col gap-24">
                    {useCases.map((useCase, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className={\`flex flex-col \${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center\`}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <Image 
                                            src={useCase.image} 
                                            alt={useCase.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#11243b]/90 via-[#11243b]/40 to-transparent flex flex-col justify-end p-8">
                                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 inline-block w-fit mb-4">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img 
                                                    src={useCase.logoPath || \`https://logo.clearbit.com/\${useCase.domain}\`} 
                                                    alt={\`\${useCase.name} logo\`}
                                                    className="h-8 object-contain drop-shadow-md brightness-0 invert"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                            <h3 className="text-white text-2xl font-black">{useCase.name}</h3>
                                            <a href={\`https://\${useCase.domain}\`} target="_blank" rel="noreferrer" className="text-orange-400 font-bold flex items-center gap-2 mt-2 hover:text-orange-300 w-fit">
                                                Visit {useCase.domain} <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 space-y-8">
                                    <div>
                                        <h4 className="text-[#00a9ce] font-black uppercase tracking-wider text-sm mb-2">Use Case {String(index + 1).padStart(2, '0')}</h4>
                                        <h2 className="text-3xl md:text-4xl font-black text-[#11243b] leading-tight mb-4">
                                            {useCase.tagline}
                                        </h2>
                                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                            {useCase.description}
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                        <h4 className="font-bold text-[#11243b] mb-4 text-lg">Core Capabilities</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {useCase.capabilities.map((cap, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-[#76bc1d] shrink-0 mt-0.5" />
                                                    <span className="text-sm font-semibold text-slate-700">{cap}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-orange-500">
                                        <h4 className="font-bold text-[#11243b] mb-2 text-sm uppercase tracking-wider">Strategic Value</h4>
                                        <p className="text-slate-600 font-medium text-sm italic">
                                            "{useCase.strategicValue}"
                                        </p>
                                    </div>

                                    <Link href={\`/use-cases/\${useCase.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}\`} className="inline-flex items-center justify-center px-8 py-4 bg-[#11243b] text-white font-bold rounded-xl hover:bg-[#00a9ce] transition-all shadow-md group">
                                        View Detailed Breakdown <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
