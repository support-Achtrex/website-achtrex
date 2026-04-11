'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Cpu, ShieldCheck, Car, Bot, User, CheckCircle2, Globe } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export const AboutContent = () => {
    return (
        <section className="bg-background relative pt-40 pb-20 overflow-hidden text-white">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mb-32"
                >
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-[#111827] border border-white/10 rounded-sm">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">About Achtrex</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        We build platforms.<br /> Not client projects.
                    </h1>
                    <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                        <p>
                            Achtrex is not a digital agency. We are an enterprise technology venture builder focused exclusively on developing scalable digital platforms, automated data architectures, and proprietary APIs.
                        </p>
                        <p>
                            Our core thesis is that software should be an asset, not a service. By owning the underlying infrastructure of high-fidelity data engines, we provide businesses with unfiltered access to scale without the overhead of legacy development.
                        </p>
                    </div>
                </motion.div>

                {/* Mission & Vision Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    <motion.div 
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="p-10 rounded-sm bg-[#0a0f1c] border border-white/10 relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Target size={120} className="text-primary" />
                        </div>
                        <div className="relative z-10">
                            <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-6">
                                <Rocket className="w-4 h-4" /> Our Mission
                            </span>
                            <p className="text-2xl font-bold leading-relaxed">
                                To engineer global data infrastructure and proprietary APIs that power the next generation of scalable digital economies.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="p-10 rounded-sm bg-[#0a0f1c] border border-white/10 relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Cpu size={120} className="text-secondary" />
                        </div>
                        <div className="relative z-10">
                            <span className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs mb-6">
                                <Globe className="w-4 h-4" /> Our Model
                            </span>
                            <p className="text-2xl font-bold leading-relaxed">
                                Establish high-leverage SaaS products. Automate the aggregation of intelligence. Deploy API access at global scale.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Internal Pipeline - Products */}
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl font-bold">Our Venture Pipeline</h2>
                        <div className="h-px flex-grow bg-white/10" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group p-8 rounded-sm bg-[#0a0f1c] border border-white/10 transition-transform"
                        >
                            <div className="w-14 h-14 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                                <Car className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Automotive Data Platform</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                An active enterprise API processing millions of market variables, allowing autonomous vehicle valuation and VIN decoding for global marketplaces.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-primary font-bold">
                                <span>Live Operations</span>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group p-8 rounded-sm bg-[#0a0f1c] border border-white/10 transition-transform"
                        >
                            <div className="w-14 h-14 rounded-sm bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
                                <Bot className="w-7 h-7 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Cognitive AI Platform</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                An isolated infrastructure designed to deploy conversational logic flows and autonomous agents directly into corporate tech stacks via a single proxy API.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-secondary font-bold">
                                <span>Architecture Phase</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Founder Section */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-sm overflow-hidden aspect-[4/5] sm:aspect-square group bg-white/5 border border-white/10">
                            <img 
                                src="/team/achim_real.jpg" 
                                alt="Achim Godwin Tetteh - Founder" 
                                className="w-full h-full object-cover grayscale-[0.8] hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                             <User className="w-4 h-4" /> Chief Architect
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-2">Achim Godwin Tetteh</h2>
                        <p className="text-primary font-bold mb-8 uppercase tracking-widest text-sm">Founder, Achtrex</p>
                        
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed border-l-2 border-primary pl-8">
                            <p>
                                Achim is a systems architect building a horizontally scalable technology venture. Recognizing the inherent limitations of the digital agency model, he repositioned Achtrex strictly as a product incubator.
                            </p>
                            <p>
                                His focus is engineering proprietary, high-availability platforms that eliminate information asymmetry across industries. Driven by a global mindset, his current focus is optimizing the Automotive API and standing up the foundational proxy systems for Achtrex's upcoming AI ventures.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
