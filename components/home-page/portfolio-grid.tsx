'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Storefront, Brain } from '@phosphor-icons/react';
import Link from 'next/link';

const industries = [
  {
    id: 'data-apis',
    title: 'Data & APIs',
    icon: Database,
    featuredImage: '/images/automotive_data_api.png',
    description: 'We build enterprise VIN intelligence and high-speed data pipelines for modern platforms. Whether you need raw specs or derived valuations, our APIs power the automotive ecosystem.',
    projects: [
      {
        title: 'AutomotiveDataset.com',
        services: 'Enterprise Data Architecture',
        client: 'AutomotiveDataset'
      },
      {
        title: 'Achtrex Core',
        services: 'API Gateway Development',
        client: 'Internal Product'
      }
    ]
  },
  {
    id: 'custom-software',
    title: 'Dealerships',
    icon: Storefront,
    featuredImage: '/images/automotive_software_dashboard.png',
    description: 'Bespoke commerce platforms and dealership management systems designed for conversion and engagement. We architect systems that drive sales and streamline automotive retail.',
    projects: [
      {
        title: 'Carkasa B2C Platform',
        services: 'Ecommerce & Digital Retail',
        client: 'Carkasa'
      },
      {
        title: 'Ark Auto Shop',
        services: 'Parts Distribution Platform',
        client: 'Ark Auto'
      }
    ]
  },
  {
    id: 'ai-solutions',
    title: 'AI & Analytics',
    icon: Brain,
    featuredImage: '/images/ai_training_hero.png',
    description: 'Next-generation cognitive reasoning models and diagnostics tools. From customer support to deep vehicle analytics, we train and deploy AI specifically for automotive use cases.',
    projects: [
      {
        title: 'LUMI AI Engine',
        services: 'Cognitive Reasoning & NLP',
        client: 'Internal Product'
      },
      {
        title: 'VehicleReportCheck',
        services: 'Automated Analytics',
        client: 'VRC'
      }
    ]
  }
];

export const PortfolioGrid = () => {
    const [activeTab, setActiveTab] = useState(0);

    const activeIndustry = industries[activeTab];

    return (
        <section className="relative w-full bg-[#0a1118] py-24 text-white font-sans overflow-hidden">
            
            {/* Header Area */}
            <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center flex flex-col items-center relative z-10">
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-[11px] font-bold tracking-widest text-[#f97316] uppercase mb-4"
                >
                    WHO WE WORK WITH
                </motion.p>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight max-w-3xl leading-tight mb-4"
                >
                    Industries Served
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[16px] text-slate-300 max-w-lg leading-relaxed"
                >
                    Serving a wide range of automotive sectors with professional website and digital solutions
                </motion.p>
            </div>

            {/* Main Interactive Area */}
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
                
                {/* Left Column: Image and Description */}
                <div className="lg:col-span-5 flex flex-col">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndustry.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden bg-[#050a10]">
                                <Image 
                                    src={activeIndustry.featuredImage}
                                    alt={activeIndustry.title}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105 opacity-90 mix-blend-screen"
                                    unoptimized
                                />
                                {/* Subtle vignette gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1118]/80 via-transparent to-transparent opacity-50" />
                            </div>

                            {/* Bordered Description Box (matching screenshot styling) */}
                            <div className="relative pt-6 pb-6 px-6">
                                {/* Partial top-left border effect */}
                                <div className="absolute top-0 left-0 w-24 h-[1px] bg-slate-400"></div>
                                <div className="absolute top-0 left-0 w-[1px] h-full bg-slate-400"></div>
                                
                                {/* Right top corner partial border */}
                                <div className="absolute top-0 right-0 w-12 h-[1px] bg-slate-400"></div>
                                <div className="absolute top-0 right-0 w-[1px] h-12 bg-slate-400"></div>

                                {/* Bottom full border */}
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-400"></div>

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 uppercase tracking-wider text-center md:text-left">
                                    {activeIndustry.title}
                                </h3>
                                <p className="text-[#00a9ce] text-[14px] font-semibold mb-4 leading-relaxed">
                                    Your website is the digital engine for your {activeIndustry.title.toLowerCase()} business.
                                </p>
                                <p className="text-white text-[14px] leading-relaxed">
                                    {activeIndustry.description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Column: Tabs and Projects */}
                <div className="lg:col-span-7 flex flex-col">
                    
                    {/* Tabs Row */}
                    <div className="flex flex-row overflow-x-auto gap-6 mb-12 pb-4 scrollbar-hide">
                        {industries.map((industry, index) => {
                            const isActive = activeTab === index;
                            const Icon = industry.icon;
                            return (
                                <button
                                    key={industry.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`
                                        flex-shrink-0 flex flex-col items-center justify-center p-6 w-[180px] h-[180px] transition-all duration-300
                                        ${isActive ? 'bg-white text-[#00a9ce] shadow-2xl scale-105' : 'bg-transparent text-[#00a9ce] border border-[#00a9ce]/30 hover:border-[#00a9ce]'}
                                    `}
                                >
                                    <Icon weight={isActive ? "duotone" : "regular"} className={`w-16 h-16 mb-4 ${isActive ? 'text-[#00a9ce]' : 'text-[#00a9ce]'}`} />
                                    <span className={`text-[12px] font-semibold tracking-wide ${isActive ? 'text-[#00a9ce]' : 'text-slate-300'}`}>
                                        {industry.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Related Projects Area */}
                    <div className="flex flex-col">
                        <h4 className="text-[22px] font-light tracking-wide text-[#00a9ce] mb-6">
                            Related Projects
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                            <AnimatePresence mode="wait">
                                {activeIndustry.projects.map((project, idx) => (
                                    <motion.div
                                        key={`${activeIndustry.id}-${idx}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                                        className="border border-[#00a9ce]/30 bg-transparent p-6 flex flex-col min-h-[160px] transition-all hover:bg-[#00a9ce]/5"
                                    >
                                        <h5 className="text-[#00a9ce] text-[16px] font-medium mb-4 leading-tight">
                                            {project.title}
                                        </h5>
                                        <p className="text-[13px] text-white mb-2">
                                            Services: <strong className="font-semibold ml-1">{project.services}</strong>
                                        </p>
                                        <p className="text-[12px] text-white mt-auto">
                                            Client: <span className="ml-1">{project.client}</span>
                                        </p>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="mt-12">
                        <Link href="/use-cases" className="inline-flex items-center justify-center bg-[#8dc63f] hover:bg-[#7ab135] text-white font-bold text-[11px] tracking-widest uppercase px-6 py-4 transition-colors relative overflow-hidden group">
                            <span className="relative z-10">VIEW ALL INDUSTRIES</span>
                            {/* Blue triangle corner effect like the screenshot */}
                            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[16px] border-b-[16px] border-l-[#00a9ce] border-b-[#00a9ce] z-0"></div>
                        </Link>
                    </div>

                </div>
            </div>
            
            {/* Background faint geometric shapes (matching screenshot vibe) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                {/* Abstract triangle/line shape on the far left */}
                <svg className="absolute top-[10%] -left-10 w-64 h-64 opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="0,0 100,50 0,100" fill="none" stroke="#8b5cf6" strokeWidth="0.5" />
                </svg>
                <svg className="absolute top-[30%] -left-20 w-80 h-80 opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="0,0 100,50 0,100" fill="none" stroke="#slate-400" strokeWidth="0.5" />
                </svg>
            </div>

        </section>
    );
};
