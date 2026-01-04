'use client';

import React from 'react';
import { Button } from '@/components/buttons';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Code2, Smartphone, Globe, Cloud, Shield, Sparkles, Zap, Activity } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
    const router = useRouter();

    return (
        <section id="home" className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden bg-[#030014]">
            {/* 1. Ultra-Dark Deep Space Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#090024] to-[#030014] opacity-100" />

                {/* 2. Cyberpunk Grid Floor */}
                <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_top,theme(colors.background),transparent)] opacity-20 pointer-events-none transform perspective-[2000px] rotate-x-[60deg]" style={{ transform: 'perspective(1000px) rotateX(60deg) translateY(200px) scale(2)' }} />

                {/* 3. Glowing Nebula Effects */}
                <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
            </div>

            <div className="container relative mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content - Typography & CTA */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left relative z-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-primary-foreground text-xs font-bold uppercase tracking-[0.2em] drop-shadow-md">Bold Ideas. Global Impact.</span>
                    </motion.div>

                    <motion.h1
                        className="text-6xl md:text-8xl font-display font-black leading-[1.1] mb-8 text-white tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Empowering Digital <br />
                        <span className="relative inline-block">
                            <span className="absolute -inset-2 bg-gradient-to-r from-primary to-purple-600 blur-2xl opacity-50" />
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                                Transformation
                            </span>
                        </span>
                    </motion.h1>

                    <div className="text-2xl md:text-3xl text-white font-light mb-10 flex items-center gap-3">
                        Let's Go The
                        <span className="relative font-bold text-white px-2">
                            Extra Mile
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                        </span>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mb-12 border-l-4 border-primary/50 pl-6"
                    >
                        We convert your complex challenges into revenue-generating digital assets. Specializing in high-performance <strong className="text-white">Custom Software</strong>, scalable <strong className="text-white">Web & Mobile Apps</strong>, and strategic <strong className="text-white">IT Consulting</strong>.
                    </motion.p>

                    {/* Bold CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <Button
                            onClick={() => router.push('/contact-us')}
                            className="group relative bg-white text-black hover:bg-gray-100 px-10 py-7 rounded-sm text-lg font-bold tracking-wide transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get Started Today <Zap size={20} className="group-hover:fill-black text-black" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                        </Button>
                        <Button
                            onClick={() => router.push('/portfolio')}
                            variant="outline"
                            className="border border-white/20 text-white px-10 py-7 rounded-sm text-lg font-bold hover:bg-white/10 backdrop-blur-sm transition-all"
                        >
                            View Our Work
                        </Button>
                    </div>
                </motion.div>

                {/* Right Content - Abstract Tech Visualization */}
                <div className="relative h-[800px] w-full hidden lg:block perspective-[1000px]">
                    {/* Floating Code Cubes */}
                    <motion.div
                        animate={{ y: [-20, 20, -20], rotateY: [0, 10, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-gradient-to-tr from-gray-900/90 to-black/90 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl z-20 flex flex-col gap-6"
                    >
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-xs font-mono text-gray-500">server_status: <span className="text-green-400">online</span></div>
                        </div>

                        {/* Animated Data Streams */}
                        <div className="flex-1 space-y-3 font-mono text-sm overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />
                            {[...Array(10)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: [0, 1, 0.5], x: 0 }}
                                    transition={{ delay: i * 0.2, duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                    className="flex items-center gap-3 text-gray-400"
                                >
                                    <span className="text-primary">{'>'}</span>
                                    <span className="text-purple-400">deploying</span>
                                    <span className="text-white">module_{100 + i}</span>
                                    <span className="text-green-500 ml-auto text-xs">[SUCCESS]</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Interactive Widget */}
                        <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <Activity className="text-blue-400 animate-pulse" />
                            </div>
                            <div>
                                <div className="text-xl font-bold text-white">99.9%</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">System Uptime</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Background Elements */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute right-[-50px] top-[20%] w-[600px] h-[600px] border border-white/5 rounded-full z-0 border-dashed"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute right-[50px] top-[30%] w-[400px] h-[400px] border border-primary/20 rounded-full z-0"
                    />
                </div>
            </div>
        </section>
    );
};