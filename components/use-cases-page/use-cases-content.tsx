'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const UseCasesContent = () => {

    const useCases = [
        {
            name: "Ark Auto Shop",
            domain: "arkautoshop.com",
            logoPath: "/logos/use-cases/arkauto.png",
            tagline: "Intelligent Automotive Parts Distribution & Service Infrastructure",
            description: "Achtrex fully designed, engineered, deployed, and continues to manage the complete digital infrastructure powering Ark Auto Shop’s automotive parts distribution and intelligent service ecosystem. The platform was developed end-to-end as a scalable automotive commerce and operational infrastructure platform integrating automotive intelligence systems, AI-powered workflows, intelligent fitment technologies, enterprise operational systems, vehicle compatibility infrastructure, and technical automotive advisory systems.",
            scope: [
                "Full Platform Engineering",
                "Full-stack platform development",
                "Backend infrastructure engineering",
                "Frontend systems development",
                "Automotive workflow architecture",
                "Cloud infrastructure deployment",
                "API integrations",
                "Ongoing platform management",
                "Automotive intelligence integrations"
            ],
            lumi: {
                title: "LUMI AI Integration",
                description: "Ark Auto Shop actively utilizes LUMI AI within its operational automotive workflows.",
                capabilities: [
                    "Intelligent parts fitment assistance",
                    "AI-powered technical automotive advice",
                    "Vehicle compatibility workflows",
                    "Automotive intelligence support",
                    "Customer assistance automation",
                    "Automotive reasoning systems",
                    "Intelligent workflow guidance"
                ],
                note: "The integration demonstrates real-world deployment of cognitive automotive intelligence systems inside a live automotive commerce environment."
            },
            capabilities: [
                "Automotive parts distribution systems",
                "Intelligent automotive workflows",
                "Customer engagement systems",
                "Enterprise operational infrastructure",
                "API-ready automotive architecture",
                "Scalable automotive commerce systems",
                "Intelligent fitment workflows",
                "Vehicle compatibility systems",
                "AI-assisted automotive recommendations",
                "Technical automotive guidance",
                "Cognitive automotive workflows"
            ],
            strategicValue: "Ark Auto Shop serves as a practical implementation of the Achtrex ecosystem, demonstrating enterprise automotive infrastructure, AI-powered automotive intelligence, cognitive automotive systems, intelligent workflow automation, and scalable automotive commerce technologies. The platform validates how LUMI AI supports practical automotive operations through intelligent reasoning, fitment analysis, and technical automotive advisory systems in production environments."
        },
        {
            name: "CarReport.com",
            domain: "carreport.com",
            logoPath: "/logos/use-cases/carreport.png",
            tagline: "Automotive Intelligence Research & Technical Documentation",
            description: "Achtrex contributed automotive research and technical documentation support for vehicle intelligence and automotive reporting systems.",
            scope: [
                "Automotive dataset research",
                "VIN intelligence research",
                "Technical documentation",
                "Vehicle information workflows",
                "Automotive reporting analysis"
            ],
            capabilities: [
                "Structured automotive research",
                "Technical documentation support",
                "Vehicle intelligence workflow analysis",
                "Automotive data research systems"
            ],
            strategicValue: "The engagement strengthened Achtrex’s expertise in automotive intelligence systems, VIN infrastructure, vehicle reporting workflows, and consumer automotive intelligence technologies."
        },
        {
            name: "OptiCar.ai",
            domain: "opticar.ai",
            logoPath: "/logos/use-cases/opticar.png",
            tagline: "Enterprise Automotive AI Consultation & API Infrastructure",
            description: "Achtrex provides continuous consultation and enterprise automotive intelligence infrastructure support for AI-powered automotive systems within the OptiCar ecosystem.",
            scope: [
                "Advanced VIN Decode API integration",
                "Vehicle History Report API integration",
                "Market Value API systems",
                "Vehicle image infrastructure",
                "Automotive data quality optimization",
                "API integration consultation",
                "Enterprise automotive intelligence workflows",
                "Technical infrastructure support"
            ],
            capabilities: [
                "Advanced automotive API infrastructure",
                "Vehicle intelligence integration systems",
                "Automotive data enrichment workflows",
                "AI-ready automotive intelligence systems",
                "Enterprise integration consultation",
                "Automotive infrastructure optimization"
            ],
            strategicValue: "The engagement demonstrates Achtrex’s capability to support enterprise automotive AI ecosystems through scalable API infrastructure, automotive intelligence systems, high-quality vehicle data integration, enterprise automotive workflows, and AI-powered mobility infrastructure."
        },
        {
            name: "Price360.ai",
            domain: "price360.ai",
            logoPath: "/logos/use-cases/price360.png",
            tagline: "AI Vehicle Valuation & Automotive Intelligence Infrastructure",
            description: "Achtrex provides continuous consultation and automotive intelligence infrastructure support for AI-powered vehicle valuation and inspection technologies.",
            scope: [
                "Market Value API integration",
                "Advanced VIN decoding systems",
                "Vehicle History Report integrations",
                "Vehicle image infrastructure",
                "Automotive intelligence systems",
                "Data quality optimization",
                "Enterprise API consultation"
            ],
            capabilities: [
                "Vehicle valuation infrastructure support",
                "Automotive intelligence workflows",
                "AI-ready vehicle data systems",
                "Automotive API integration support",
                "Vehicle information processing systems",
                "Enterprise automotive infrastructure consultation"
            ],
            strategicValue: "The project demonstrates Achtrex’s experience supporting advanced automotive AI ecosystems involving vehicle valuation technologies, automotive intelligence systems, AI-powered automotive workflows, scalable API-driven infrastructure, and real-time vehicle intelligence systems."
        },
        {
            name: "Carkasa.com",
            domain: "carkasa.com",
            logoPath: "/logos/use-cases/vehiclehistory.png",
            tagline: "Automotive Commerce & Vehicle Experience Platform",
            description: "Achtrex fully designed, developed, deployed, and continues to manage the complete infrastructure and operational platform powering Carkasa. The platform was engineered as a scalable automotive commerce ecosystem focused on vehicle experience systems, automotive customer engagement, intelligent automotive workflows, and scalable digital automotive operations.",
            scope: [
                "Full-stack platform development",
                "Infrastructure engineering",
                "Automotive workflow systems",
                "Cloud deployment",
                "UI/UX systems",
                "Automotive integrations",
                "Ongoing platform management",
                "Technical operations support"
            ],
            capabilities: [
                "Automotive commerce infrastructure",
                "Vehicle experience systems",
                "Intelligent automotive workflows",
                "Scalable platform architecture",
                "Automotive operational systems",
                "Enterprise-ready automotive ecosystem"
            ],
            strategicValue: "The project reflects Achtrex’s capability to engineer and continuously manage large-scale automotive digital ecosystems from concept to long-term operational deployment."
        },
        {
            name: "VehicleReportCheck",
            domain: "vehiclereportcheck.com",
            logoPath: "/logos/use-cases/vehiclereportcheck.png",
            tagline: "Vehicle Verification & Automotive Intelligence Platform",
            description: "Achtrex fully developed and continues to manage the VehicleReportCheck platform as an automotive intelligence and vehicle verification ecosystem focused on VIN intelligence, vehicle transparency, automotive reporting systems, and vehicle verification workflows.",
            scope: [
                "Platform architecture",
                "Vehicle intelligence systems",
                "VIN infrastructure integration",
                "Reporting workflow engineering",
                "Backend systems development",
                "Frontend platform systems",
                "Automotive data integrations",
                "Ongoing infrastructure management"
            ],
            capabilities: [
                "Vehicle verification workflows",
                "Automotive reporting systems",
                "VIN intelligence infrastructure",
                "Vehicle transparency systems",
                "Automotive operational architecture",
                "Scalable automotive platform systems"
            ],
            strategicValue: "The platform demonstrates Achtrex’s ability to build and operate scalable automotive intelligence infrastructure focused on vehicle reporting technologies, verification systems, automotive intelligence workflows, enterprise automotive infrastructure, and vehicle data ecosystems."
        }
    ];

    return (
        <div className="bg-transparent text-slate-900 font-sans antialiased min-h-screen">
            
            {/* ─── HERO ─────────────────────────────────────────────────────── */}
            <div className="relative overflow-hidden pt-32 pb-24 px-6 border-b border-slate-200 bg-transparent">
                <div className="relative z-10 max-w-[1080px] mx-auto text-center flex flex-col items-center">
                    <h1 className="text-[48px] md:text-[64px] font-black tracking-[-0.03em] leading-[0.95] text-slate-900 mb-6">
                        Client &amp; Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-600">Use Cases</span>
                    </h1>
                    <p className="text-[17px] md:text-[19px] text-slate-500 max-w-2xl leading-relaxed font-medium mb-12">
                        Enterprise Automotive Infrastructure, APIs &amp; AI Systems Delivered by Achtrex
                    </p>
                </div>
            </div>

            {/* ─── USE CASES LIST ────────────────────────────────────────────── */}
            <div className="max-w-[1080px] mx-auto px-6 py-20">
                <div className="flex flex-col gap-16">
                    {useCases.map((useCase, index) => (
                        <div key={index} className="relative rounded-3xl bg-transparent border border-slate-200 p-10 overflow-hidden group hover:border-blue-300 transition-colors shadow-sm">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/10 blur-[100px] group-hover:bg-blue-500/20 transition-colors" />
                            
                            <div className="relative z-10">
                                {/* Header with Logo */}
                                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 border-b border-slate-200 pb-8">
                                    <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-3 shrink-0 overflow-hidden shadow-sm">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img 
                                            src={useCase.logoPath || `https://logo.clearbit.com/${useCase.domain}`} 
                                            alt={`${useCase.name} logo`}
                                            className="max-w-full max-h-full object-contain"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                target.parentElement?.classList.add('fallback-icon');
                                                if (target.parentElement) {
                                                    target.parentElement.innerHTML = `<span class="text-2xl font-bold text-slate-500">${useCase.name.charAt(0)}</span>`;
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1 w-full">
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                                            <h2 className="text-3xl font-black text-slate-900">{useCase.name}</h2>
                                            <a 
                                                href={`https://${useCase.domain}`} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-500 hover:text-slate-900 transition-colors border border-slate-200 hover:border-[#111112]/30 bg-transparent hover:bg-transparent rounded-full px-4 py-1.5 shrink-0 shadow-sm"
                                            >
                                                Visit website
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            </a>
                                        </div>
                                        <p className="text-[15px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                                            {useCase.tagline}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-10">
                                    <p className="text-[16px] text-slate-500 leading-relaxed font-medium">
                                        {useCase.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                                    {/* Scope of Work */}
                                    <div>
                                        <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 mb-5 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                                            Scope of Work
                                        </h3>
                                        <ul className="space-y-3">
                                            {useCase.scope.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-[14px] text-slate-500 font-medium">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Delivered Capabilities */}
                                    <div>
                                        <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 mb-5 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                            Delivered Capabilities
                                        </h3>
                                        <ul className="space-y-3">
                                            {useCase.capabilities.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-[14px] text-slate-500 font-medium">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* LUMI AI Section (if exists) */}
                                {useCase.lumi && (
                                    <div className="mb-10 rounded-2xl border border-purple-500/30 bg-purple-900/10 p-6 shadow-sm">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 rounded-lg bg-transparent border border-purple-200 flex items-center justify-center shadow-sm">
                                                <span className="text-purple-600 text-sm">✦</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900">{useCase.lumi.title}</h3>
                                        </div>
                                        <p className="text-[14px] text-slate-500 mb-4 font-medium">{useCase.lumi.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {useCase.lumi.capabilities.map((cap, i) => (
                                                <span key={i} className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-transparent border border-purple-200 text-purple-700">
                                                    {cap}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-[13px] text-purple-600/80 italic border-t border-purple-200 pt-4 font-medium">
                                            {useCase.lumi.note}
                                        </p>
                                    </div>
                                )}

                                {/* Strategic Value */}
                                <div className="rounded-2xl bg-transparent border border-slate-200 p-6 shadow-sm">
                                    <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3">Strategic Value</h3>
                                    <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
                                        {useCase.strategicValue}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── CTA ──────────────────────────────────────────────────────── */}
            <div className="max-w-[1080px] mx-auto px-6 py-20">
                <div className="relative rounded-3xl bg-gradient-to-r from-blue-50 via-teal-50 to-emerald-50 border border-slate-200 overflow-hidden shadow-sm">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-[80px]" />
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-100 rounded-full blur-[80px]" />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 p-12 lg:p-16 text-center md:text-left">
                        <div>
                            <h2 className="text-[32px] font-black text-slate-900 mb-4 tracking-tight">Ready to build your solution?</h2>
                            <p className="text-[16px] text-slate-500 font-medium">
                                Contact our team to discuss integration at{' '}
                                <a href="mailto:support@achtrex.com" className="text-teal-600 hover:text-teal-700 font-bold transition-colors">
                                    support@achtrex.com
                                </a>
                            </p>
                        </div>
                        <Link href="/contact-us"
                            className="inline-flex items-center gap-3 bg-white text-slate-900 font-bold text-[15px] px-8 py-4 rounded-full hover:bg-gray-800 transition-all shadow-md hover:scale-105 whitespace-nowrap shrink-0">
                            Get in touch
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};
