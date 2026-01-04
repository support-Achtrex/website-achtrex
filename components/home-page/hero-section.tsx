'use client';

import React from 'react';
import { Button } from '@/components/buttons';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Code2, Smartphone, Globe, Cloud, Shield, Sparkles } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
    const router = useRouter();

    return (
        <section id="home" className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-background">
            {/* Vibrant Tech Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Generated Tech Gadgets Background Image */}
                <Image
                    src="/hero-bg-tech.png"
                    alt="Futuristic Tech Gadgets Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />

                {/* Tech Texture Overlays */}
                <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background/90" />
            </div>

            {/* Animated Gradient Orbs for 'Colorful' Vibe */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen animate-float pointer-events-none" />


            <div className="container relative mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-6 shadow-[0_0_15px_-5px_var(--primary)]"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                        <span className="text-secondary text-xs uppercase font-bold tracking-widest">Bold Ideas. Global Impact.</span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Empowering Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-shimmer">
                            Transformation
                        </span>
                    </motion.h1>

                    <div className="text-xl md:text-2xl text-white/90 font-light mb-8 flex items-center">
                        Let's Go The
                        <span className="relative inline-block ml-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary animate-shimmer bg-[200%_auto]">
                            Extra Mile
                            <span className="absolute -inset-1 blur-lg bg-secondary/30 -z-10 animate-pulse" />
                            <motion.span
                                className="absolute -top-1 -right-2 text-secondary text-xs"
                                animate={{ opacity: [0, 1, 0], y: [-5, -10, -5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >✦</motion.span>
                            <motion.span
                                className="absolute -bottom-1 -left-2 text-primary text-xs"
                                animate={{ opacity: [0, 1, 0], y: [5, 10, 5] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                            >✦</motion.span>
                        </span>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
                    >
                        We convert your complex challenges into revenue-generating digital assets. Specializing in high-performance <span className="text-white font-medium border-b border-primary/50">Custom Software</span>, scalable <span className="text-white font-medium border-b border-primary/50">Web & Mobile Apps</span>, and strategic <span className="text-white font-medium border-b border-primary/50">IT Consulting</span>.
                    </motion.p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            onClick={() => router.push('/contact-us')}
                            className="bg-primary hover:bg-primary/80 text-white px-8 py-6 rounded-full text-lg shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-300 border-none"
                        >
                            Get Started Today
                        </Button>
                        <Button
                            onClick={() => router.push('/portfolio')}
                            variant="outline"
                            className="border-white/20 hover:bg-white/10 text-white px-8 py-6 rounded-full text-lg backdrop-blur-md"
                        >
                            View Our Work
                        </Button>
                    </div>
                </motion.div>

                {/* Right Content - Floating Elements & Tech Visuals */}
                <div className="relative h-[600px] w-full hidden lg:block">
                    {/* Central Card with Video Effect */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96 glass-card rounded-2xl z-20 overflow-hidden shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)] bg-black/40"
                    >
                        <div className="p-6 h-full flex flex-col justify-between relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />

                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <Code2 className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Custom Software</h3>
                                    <p className="text-xs text-white/50">Live Deployment</p>
                                </div>
                            </div>

                            {/* Animated Code/Data Effect */}
                            <div className="flex-1 rounded-lg bg-black/60 border border-white/5 p-4 mb-4 relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid-white opacity-20" />
                                <div className="flex items-end justify-center gap-1 h-full pb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-3 bg-secondary rounded-t-sm"
                                            animate={{ height: ["20%", "80%", "40%", "90%", "30%"] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                                            style={{ opacity: 0.8 }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary"
                                    animate={{ width: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Badge 1 - AI */}
                    <motion.div
                        animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 left-0 glass-card p-4 rounded-xl flex items-center gap-3 z-30 bg-black/60"
                    >
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                            <Sparkles className="text-purple-400 w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-bold text-white text-sm">AI Integration</p>
                            <p className="text-xs text-white/50">Smart Solutions</p>
                        </div>
                    </motion.div>

                    {/* Floating Badge 2 - Security */}
                    <motion.div
                        animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute top-20 right-0 glass-card p-4 rounded-xl flex items-center gap-3 z-10 bg-black/60"
                    >
                        <div className="p-2 bg-amber-500/20 rounded-lg">
                            <Shield className="text-amber-400 w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-bold text-white text-sm">Secured</p>
                            <p className="text-xs text-emerald-400">100% Verified</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};