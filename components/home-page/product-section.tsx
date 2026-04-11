'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Bot, ArrowRight, ExternalLink, Code2 } from 'lucide-react';
import { Button } from '@/components/buttons';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export const ProductSection = () => {
    const router = useRouter();

    return (
        <section id="products" className="py-24 relative bg-background overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block"
                    >
                        Our Portfolio
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Live SaaS Assets
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl"
                    >
                        Achtrex builds and operates specialized digital platforms designed for high-performance API access and enterprise scale.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Automotive Data Platform */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group flex flex-col h-full bg-[#0a0f1c] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-xl relative"
                    >
                        {/* Status Badge */}
                        <div className="absolute top-6 right-6 z-20">
                            <span className="flex items-center gap-2 bg-green-500/90 text-white shadow-lg border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                Live Product
                            </span>
                        </div>

                        {/* Card Hero Image */}
                        <div className="relative h-64 w-full bg-slate-900 border-b border-white/10 overflow-hidden">
                            <Image
                                src="/images/automotive-data-engine.png"
                                alt="Automotive Data Engine"
                                fill
                                className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent" />
                        </div>

                        <div className="p-8 md:p-10 flex-grow relative z-10 pt-4">
                            <h3 className="text-3xl font-display font-bold text-white mb-3">AutomotiveDataset.com</h3>
                            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-6">Vehicle API & Global Database</p>
                            
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                A standalone SaaS product providing comprehensive global automotive intelligence and real-time APIs. Engineered for developers needing enterprise-grade accuracy for VIN decoding, specs, and market values.
                            </p>
                            
                            <ul className="space-y-4 mb-10 text-sm text-gray-400 font-medium border-t border-white/5 pt-6">
                                <li className="flex items-center gap-3">
                                    <Code2 className="w-5 h-5 text-primary" />
                                    REST API Endpoints & JSON Payloads
                                </li>
                                <li className="flex items-center gap-3">
                                    <Database className="w-5 h-5 text-primary" />
                                    10,000+ Structured Vehicle Records
                                </li>
                            </ul>
                        </div>
                        
                        <div className="p-8 md:p-10 pt-0 mt-auto">
                            <a 
                                href="https://automotivedataset.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-cyan-600 text-white py-4 rounded-xl font-bold transition-all hover:scale-[1.02]"
                            >
                                Visit Automotivedataset.com
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* AI Platform */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group flex flex-col h-full bg-[#0a0f1c] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 relative"
                    >
                        {/* Status Badge */}
                        <div className="absolute top-6 right-6 z-20">
                            <span className="flex items-center gap-2 bg-[#111827]/90 text-secondary border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                                In Development
                            </span>
                        </div>

                        {/* Card Hero Image */}
                        <div className="relative h-64 w-full bg-slate-900 border-b border-white/10 overflow-hidden">
                            <Image
                                src="/images/ai-architecture.png"
                                alt="AI Logic Framework"
                                fill
                                className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent" />
                        </div>

                        <div className="p-8 md:p-10 flex-grow relative z-10 pt-4">
                            <h3 className="text-3xl font-display font-bold text-white mb-3">AI Agent Platform</h3>
                            <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-6">Conversational AI SaaS</p>
                            
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                We are currently architecting a sophisticated AI-powered chatbot SaaS designed to integrate directly into existing enterprise workflows, automating customer intelligence and support.
                            </p>
                            
                            <ul className="space-y-4 mb-10 text-sm text-gray-400 font-medium border-t border-white/5 pt-6 opacity-60">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                    Custom LLM Fine-Tuning
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                    Automated Multi-Channel Deployment
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 md:p-10 pt-0 mt-auto">
                            <Button
                                variant="secondary"
                                disabled
                                className="w-full py-4 rounded-xl font-bold opacity-50 cursor-not-allowed border-dashed bg-transparent"
                            >
                                Beta Access Coming Soon
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Database Icon wrapper
function Database(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    );
}
