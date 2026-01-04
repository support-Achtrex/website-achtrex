'use client';

import React from 'react';
import { Button } from '@/components/buttons';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
    const router = useRouter();

    return (
        <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-32 overflow-hidden bg-slate-900">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg-tech.png" // Using existing asset as base
                    alt="Background"
                    fill
                    className="object-cover opacity-40 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/50" />
            </div>

            <div className="container relative mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Content - Text */}
                <div className="lg:col-span-7 text-left pt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 flex items-center gap-2"
                    >
                        <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                            Top Rated Development Team
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Empowering Digital <br />
                        <span className="text-primary">Transformation.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed mb-8"
                    >
                        We convert your complex challenges into revenue-generating digital assets. Specializing in high-performance Custom Software, scalable Web & Mobile Apps, and strategic IT Consulting.
                    </motion.p>

                    <div className="flex flex-wrap gap-4 text-slate-400 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-primary w-5 h-5" />
                            <span>Top 1% Talent</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-primary w-5 h-5" />
                            <span>Timezone Aligned</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-primary w-5 h-5" />
                            <span>Enterprise Grade Security</span>
                        </div>
                    </div>
                </div>

                {/* Right Content - Lead Form */}
                <div className="lg:col-span-5 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative z-20"
                    >
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-slate-900">Let's connect to help you and your team.</h3>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900" placeholder="John Doe" />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase">Company</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900" placeholder="Company Inc." />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase">Work Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900" placeholder="john@company.com" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase">How can we help?</label>
                                <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none h-24 text-slate-900" placeholder="Tell us about your project..." />
                            </div>

                            <Button className="w-full bg-[#ff5722] hover:bg-[#f4511e] text-white py-4 rounded-lg font-bold text-lg shadow-lg transition-transform active:scale-[0.98]">
                                Jump-start Your Project
                            </Button>

                            <p className="text-center text-xs text-slate-400 mt-4">
                                By clicking, you agree to our Terms & Privacy Policy.
                            </p>
                        </form>
                    </motion.div>

                    {/* Decorative Elements around form */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10" />
                </div>
            </div>

            {/* Bottom Curve Wave */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-20">
                <svg className="w-full h-12 md:h-24 text-background" viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path fill="currentColor" d="M0,0 C480,120 960,120 1440,0 L1440,100 L0,100 Z" />
                </svg>
            </div>
        </section>
    );
};