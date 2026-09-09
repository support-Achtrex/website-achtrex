'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
        "Enterprise software integrations",
        "Ongoing platform management",
        "Automotive intelligence integrations"
      ],
      lumi: {
        title: "AAIA Integration",
        description: "Ark Auto Shop actively utilizes AAIA within its operational automotive workflows.",
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
        "Modern automotive software architecture",
        "Scalable automotive commerce systems",
        "Intelligent fitment workflows",
        "Vehicle compatibility systems",
        "AI-assisted automotive recommendations",
        "Technical automotive guidance",
        "Cognitive automotive workflows"
      ],
      strategicValue: "Ark Auto Shop serves as a practical implementation of the Achtrex ecosystem, demonstrating enterprise automotive infrastructure, AI-powered automotive intelligence, cognitive automotive systems, intelligent workflow automation, and scalable automotive commerce technologies. The platform validates how AAIA supports practical automotive operations through intelligent reasoning, fitment analysis, and technical automotive advisory systems in production environments."
    },
    {
      name: "CarReport.com",
      domain: "carreport.com",
      logoPath: "/logos/use-cases/carreport.png",
      tagline: "Automotive Intelligence Research & Technical Documentation",
      description: "Achtrex contributed automotive research and technical documentation support for vehicle intelligence and automotive reporting systems.",
      scope: [
        "Automotive dataset research",
        "Automotive systems research",
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
      strategicValue: "The engagement strengthened Achtrex’s expertise in automotive software systems, vehicle reporting workflows, and consumer automotive technologies."
    },
    {
      name: "OptiCar.ai",
      domain: "opticar.ai",
      logoPath: "/logos/use-cases/opticar.png",
      tagline: "Enterprise Automotive AI Consultation & Custom Software",
      description: "Achtrex provides continuous consultation and enterprise automotive intelligence infrastructure support for AI-powered automotive systems within the OptiCar ecosystem.",
      scope: [
        "Vehicle specification systems integration",
        "Cognitive vehicle reporting systems",
        "Vehicle market intelligence systems",
        "Vehicle image infrastructure",
        "Automotive data quality optimization",
        "Systems architecture consultation",
        "Enterprise automotive intelligence workflows",
        "Technical infrastructure support"
      ],
      capabilities: [
        "Enterprise automotive software infrastructure",
        "Vehicle intelligence integration systems",
        "Automotive data enrichment workflows",
        "AI-ready automotive intelligence systems",
        "Enterprise integration consultation",
        "Automotive infrastructure optimization"
      ],
      strategicValue: "The engagement demonstrates Achtrex’s capability to support enterprise automotive AI ecosystems through scalable software infrastructure, automotive intelligence systems, high-quality vehicle data integration, enterprise automotive workflows, and AI-powered mobility infrastructure."
    },
    {
      name: "Price360.ai",
      domain: "price360.ai",
      logoPath: "/logos/use-cases/price360.png",
      tagline: "AI Vehicle Valuation & Automotive Intelligence Infrastructure",
      description: "Achtrex provides continuous consultation and automotive intelligence infrastructure support for AI-powered vehicle valuation and inspection technologies.",
      scope: [
        "Valuation software system integration",
        "Vehicle specification parsing systems",
        "Vehicle condition assessment systems",
        "Vehicle image infrastructure",
        "Automotive intelligence systems",
        "Data quality optimization",
        "Enterprise software consultation"
      ],
      capabilities: [
        "Vehicle valuation infrastructure support",
        "Automotive intelligence workflows",
        "AI-ready vehicle data systems",
        "Automotive software integration support",
        "Vehicle information processing systems",
        "Enterprise automotive infrastructure consultation"
      ],
      strategicValue: "The project demonstrates Achtrex’s experience supporting advanced automotive AI ecosystems involving vehicle valuation technologies, automotive intelligence systems, AI-powered automotive workflows, scalable software infrastructure, and real-time vehicle intelligence systems."
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
      description: "Achtrex fully developed and continues to manage the VehicleReportCheck platform as an automotive intelligence and vehicle verification ecosystem focused on vehicle transparency, automotive reporting systems, and vehicle verification workflows.",
      scope: [
        "Platform architecture",
        "Vehicle intelligence systems",
        "Verification workflow engineering",
        "Reporting workflow engineering",
        "Backend systems development",
        "Frontend platform systems",
        "Automotive data integrations",
        "Ongoing infrastructure management"
      ],
      capabilities: [
        "Vehicle verification workflows",
        "Automotive reporting systems",
        "Vehicle verification infrastructure",
        "Vehicle transparency systems",
        "Automotive operational architecture",
        "Scalable automotive platform systems"
      ],
      strategicValue: "The platform demonstrates Achtrex’s ability to build and operate scalable automotive intelligence infrastructure focused on vehicle reporting technologies, verification systems, automotive intelligence workflows, enterprise automotive infrastructure, and vehicle data ecosystems."
    }
  ];

  return (
    <div className="bg-transparent text-slate-900 font-sans antialiased">

      {/* ─── USE CASES LIST ────────────────────────────────────────────── */}
      <div className="max-w-[1080px] mx-auto px-6 py-12 pt-16 relative">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#00a9ce]/5 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>
        <div className="flex flex-col gap-16 relative z-10">
          {useCases.map((useCase, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="relative rounded-3xl bg-white border border-slate-200 p-10 overflow-hidden group hover:border-[#00a9ce]/40 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              
              <div className="relative z-10">
                {/* Header with Logo */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 border-b border-slate-100 pb-8">
                  <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center p-3 shrink-0 overflow-hidden shadow-sm group-hover:scale-105 transition-transform">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={useCase.logoPath || `https://logo.clearbit.com/${useCase.domain}`} 
                      alt={`${useCase.name} logo`}
                      className="max-w-full max-h-full object-contain mix-blend-multiply"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement?.classList.add('fallback-icon');
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `<span class="text-2xl font-black text-slate-400">${useCase.name.charAt(0)}</span>`;
                        }
                      }}
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                      <h2 className="text-3xl font-black text-slate-900 tracking-tight">{useCase.name}</h2>
                      <a 
                        href={`https://${useCase.domain}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-600 hover:text-[#00a9ce] transition-colors border border-slate-200 hover:border-[#00a9ce]/50 bg-white hover:bg-[#00a9ce]/5 rounded-xl px-4 py-2 shrink-0 shadow-sm"
                      >
                        Visit website
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    </div>
                    <p className="text-[15px] font-bold text-[#00a9ce]">
                      {useCase.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-10">
                  <p className="text-[15px] sm:text-base text-slate-800 leading-[1.8] font-normal">
                    {useCase.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                  {/* Scope of Work */}
                  <div>
                    <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 mb-5 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#00a9ce]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                      Scope of Work
                    </h3>
                    <ul className="space-y-3">
                      {useCase.scope.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[14px] sm:text-[15px] text-slate-700 font-normal leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F37021] to-[#00A9CE] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Delivered Capabilities */}
                  <div>
                    <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 mb-5 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#00a9ce]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      Delivered Capabilities
                    </h3>
                    <ul className="space-y-3">
                      {useCase.capabilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[14px] sm:text-[15px] text-slate-700 font-normal leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F37021] to-[#00A9CE] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* AAIA Section (if exists) */}
                {useCase.lumi && (
                  <div className="mb-10 rounded-2xl border border-[#00a9ce]/20 bg-gradient-to-r from-[#00a9ce]/5 to-transparent p-8 relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#00a9ce]/10 rounded-full blur-2xl"></div>
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-[#00a9ce]/10 border border-[#00a9ce]/30 flex items-center justify-center shadow-sm">
                        <span className="text-[#00a9ce] text-sm">✦</span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 tracking-tight">{useCase.lumi.title}</h3>
                    </div>
                    <p className="text-[15px] text-slate-800 mb-6 font-normal leading-[1.8] relative z-10">{useCase.lumi.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                      {useCase.lumi.capabilities.map((cap, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-white border border-[#00a9ce]/20 text-[#00a9ce] shadow-sm">
                          {cap}
                        </span>
                      ))}
                    </div>
                    <p className="text-[13px] text-slate-600 italic border-t border-slate-200/80 pt-4 mt-4 font-normal relative z-10">
                      {useCase.lumi.note}
                    </p>
                  </div>
                )}

                {/* Strategic Value */}
                <div className="rounded-2xl bg-slate-50 border border-slate-100 p-8">
                  <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-[#F37021] mb-3">Strategic Value</h3>
                  <p className="text-[15px] text-slate-800 leading-[1.8] font-normal">
                    {useCase.strategicValue}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
      <div className="max-w-[1080px] mx-auto px-6 py-12 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-r from-[#061420] to-[#0A2235] border border-white/10 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a9ce]/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 p-12 lg:p-16 text-center md:text-left">
            <div>
              <h2 className="text-[32px] md:text-[36px] font-black text-white mb-4 tracking-tight drop-shadow-md">Ready to build your solution?</h2>
              <p className="text-[15px] md:text-[16px] text-slate-200 font-normal leading-[1.8]">
                Contact our team to discuss integration at{' '}
                <a href="mailto:support@achtrex.com" className="text-[#00a9ce] hover:text-white font-bold transition-colors">
                  support@achtrex.com
                </a>
              </p>
            </div>
            <Link href="/contact-us" className="btn-navbar-cta inline-block shrink-0">
              <span className="btn-navbar-cta-inner !py-3.5 !px-8 text-[13px] uppercase tracking-wider">
                <span>Get in touch</span>
                <svg className="w-4 h-4 ml-2 inline-block transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

    </div>
  );
};
