'use client';

import React from 'react';
import { Button } from '@/components/buttons';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
    const router = useRouter();

    return (
        <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-32 overflow-hidden bg-slate-900 border-b border-white/10">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-[#0a0f1c]">
                <Image
                    src="/enterprise_command_center.png" 
                    alt="Enterprise Tech Command Center"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/80 via-[#0a0f1c]/60 to-[#0a0f1c]" />
            </div>

            <div className="container relative mx-auto px-6 z-10 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 flex justify-center"
                >
                    <span className="text-sm font-bold tracking-[0.2em] text-white/70 uppercase">
                        Venture Builder & SaaS Platform
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Building Scalable <br />
                    <span className="text-white">
                        Data & AI Products.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10"
                >
                    Achtrex engineers and operates high-performance SaaS applications, API gateways, and intelligent data platforms for the global market.
                </motion.p>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <Button
                        onClick={() => router.push('/products')}
                        className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black px-10 py-6 rounded-sm font-bold text-lg transition-transform hover:scale-[1.02]"
                    >
                        Explore Our Products
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                        onClick={() => router.push('/about-us')}
                        variant="secondary"
                        className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white border border-white/20 px-10 py-6 rounded-sm font-bold text-lg transition-transform hover:scale-[1.02]"
                    >
                        Our Company
                    </Button>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap justify-center gap-12 md:gap-24 text-white text-sm font-bold uppercase tracking-[0.1em]"
                >
                    <div className="flex flex-col items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3C7.58 3 4 4.79 4 7C4 9.21 7.58 11 12 11C16.42 11 20 9.21 20 7C20 4.79 16.42 3 12 3ZM12 9C8.36 9 5.86 7.69 5.15 7C5.86 6.31 8.36 5 12 5C15.64 5 18.14 6.31 18.85 7C18.14 7.69 15.64 9 12 9ZM4 10.42V13C4 15.21 7.58 17 12 17C16.42 17 20 15.21 20 13V10.42C19.1 11.39 16.14 12.5 12 12.5C7.86 12.5 4.9 11.39 4 10.42ZM20 16.42V19C20 21.21 16.42 23 12 23C7.58 23 4 21.21 4 19V16.42C4.9 17.39 7.86 18.5 12 18.5C16.14 18.5 19.1 17.39 20 16.42Z" />
                        </svg>
                        <span>Structured Datasets</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z" />
                        </svg>
                        <span>Global APIs</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21 10H19C19 8.9 18.1 8 17 8H16V6C16 4.9 15.1 4 14 4H10C8.9 4 8 4.9 8 6V8H7C5.9 8 5 8.9 5 10H3V14H5V16C5 17.1 5.9 18 7 18H17C18.1 18 19 17.1 19 16V14H21V10ZM14 12H10V10H14V12ZM17 12H16V10H17V12ZM8 12H7V10H8V12Z" />
                        </svg>
                        <span>AI Agents</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};