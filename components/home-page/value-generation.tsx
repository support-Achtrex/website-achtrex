'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Terminal, LayoutDashboard, CheckCircle2 } from 'lucide-react';

const valueCards = [
    {
        title: "Subscription Access to Automotive Dataset",
        description: "Monthly and annual subscription tiers granting enterprise clients structured access to millions of cross-border automotive telemetry and history records.",
        icon: Database,
        color: "blue",
        features: ["Direct Database Queries", "High-volume Licensing Volumes"],
        dark: false
    },
    {
        title: "API Usage Pricing",
        description: "Pay-as-you-go and bulk transaction models for developers integrating our zero-latency AI and data resolution endpoints directly into their architecture.",
        icon: Terminal,
        color: "emerald",
        features: ["Millisecond Latency SLAs", "Volume-based Cost Scaling"],
        dark: true
    },
    {
        title: "SaaS Access to LUMI",
        description: "Recurring licensing for organizations adopting LUMI to automate internal workflows, replacing custom-built software with our scalable enterprise AI platform.",
        icon: LayoutDashboard,
        color: "purple",
        features: ["Agent Instance Allocation", "Dedicated Enterprise Clusters"],
        dark: false
    }
];

export const ValueGeneration = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-white">
            {/* Charming Background Elements */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.1, 1],
                    x: [0, 20, 0],
                    y: [0, -20, 0]
                }}
                transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" 
            />
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    x: [0, -30, 0],
                    y: [0, 30, 0]
                }}
                transition={{ 
                    duration: 12, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" 
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">How We Generate Value</h2>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            Achtrex operates on a scalable, software-as-a-service and enterprise API access model, offering tiered subscriptions to our proprietary platforms and high-velocity datasets.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {valueCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-[2.5rem] p-8 lg:p-10 flex flex-col h-full transition-transform hover:-translate-y-2 duration-300 ${
                                card.dark 
                                ? 'bg-[#0a0f1c] text-white shadow-2xl shadow-emerald-900/20' 
                                : 'bg-white border border-gray-100 shadow-xl shadow-gray-200/40'
                            }`}
                        >
                            {/* Card Glow/Gradient for Dark Card */}
                            {card.dark && (
                                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-500" />
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[60px]" />
                                </div>
                            )}

                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                                card.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                                card.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                'bg-purple-50 text-purple-600'
                            }`}>
                                <card.icon className="w-7 h-7" />
                            </div>

                            {/* Content */}
                            <h3 className={`text-2xl font-bold mb-4 tracking-tight ${card.dark ? 'text-white' : 'text-gray-900'}`}>
                                {card.title}
                            </h3>
                            <p className={`text-base leading-relaxed mb-8 flex-grow ${card.dark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {card.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-4">
                                {card.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3">
                                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${card.dark ? 'text-emerald-400' : 'text-emerald-500'}`} />
                                        <span className={`text-sm font-semibold ${card.dark ? 'text-gray-300' : 'text-gray-700'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
