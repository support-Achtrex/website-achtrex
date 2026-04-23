'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Rocket, Target, Heart, Globe, Cpu, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/buttons';
import { CTASection } from "@/components/cta";

export default function LifeAtAchtrexPage() {
    return (
        <main className="min-h-screen bg-white text-black pt-24">
            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden bg-[#f8fafc]">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-24" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Careers @ Achtrex</span>
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 leading-[1.1]">
                                    Architecting the <br /> 
                                    <span className="text-primary">Next Era</span> of Data.
                                </h1>
                                <p className="text-xl text-gray-500 font-medium mb-10 leading-relaxed max-w-lg">
                                    We don't just build apps. We engineer planetary-scale infrastructure. Join a global team of architects redefining digital ownership.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 rounded-full font-bold">
                                        View Openings
                                    </Button>
                                    <div className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-full bg-white shadow-sm">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                                    <Image src={`/team/team-member-${i}.jpg`} alt="Team" fill className="object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-xs font-bold text-gray-600">Join 40+ Architects</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/50"
                        >
                            <Image 
                                src="/life-at-achtrex/Rectangle 789.png" 
                                alt="Achtrex Collaborative Environment" 
                                fill 
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-gray-400 mb-4">Our DNA</h2>
                        <h3 className="text-4xl font-bold text-black mb-6">Built on Engineering Excellence.</h3>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed">
                            At Achtrex, we value deterministic logic, high-velocity iteration, and the relentless pursuit of architectural elegance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Cpu className="w-8 h-8 text-primary" />,
                                title: "Infrastructure First",
                                desc: "We focus on the underlying protocols and data engines that power the world, not just the surface-level UI.",
                                bg: "bg-blue-50"
                            },
                            {
                                icon: <Zap className="w-8 h-8 text-secondary" />,
                                title: "High Velocity",
                                desc: "We ship fast and iterate often. Our CI/CD pipelines are the heartbeat of our distributed laboratory.",
                                bg: "bg-purple-50"
                            },
                            {
                                icon: <Globe className="w-8 h-8 text-green-500" />,
                                title: "Global by Default",
                                desc: "Our team spans continents. We operate in a follow-the-sun model to ensure continuous delivery.",
                                bg: "bg-green-50"
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-10 rounded-3xl ${value.bg} border border-transparent hover:border-black/5 transition-all group`}
                            >
                                <div className="mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture Grid */}
            <section className="py-32 px-6 bg-black text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-full bg-primary/10 blur-[150px] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <header>
                                <h2 className="text-primary text-sm font-black uppercase tracking-[0.4em] mb-4">Culture of Ownership</h2>
                                <h3 className="text-4xl md:text-5xl font-bold leading-tight">Every architect is a <br /> stakeholder.</h3>
                            </header>
                            
                            <div className="space-y-8">
                                {[
                                    { title: "Remote-Native", desc: "Work from anywhere in the world. We optimize for results, not hours spent at a desk." },
                                    { title: "Elite Peer Group", desc: "Join some of the world's most talented engineers and data scientists." },
                                    { title: "Product Ownership", desc: "You don't just write code; you own a piece of the infrastructure you build." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="mt-1">
                                            <div className="w-6 h-6 rounded-full border border-primary/50 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                    <Image src="/life-at-achtrex/collaborative.png" alt="Collab" fill className="object-cover" />
                                </div>
                                <div className="relative aspect-square rounded-2xl overflow-hidden bg-primary/20 flex items-center justify-center p-8 text-center">
                                    <p className="text-xs font-black uppercase tracking-widest text-primary leading-loose">"The architect represents the intelligence of the system."</p>
                                </div>
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="relative aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                    <Image src="/life-at-achtrex/focused.png" alt="Focus" fill className="object-cover" />
                                </div>
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                    <Image src="/life-at-achtrex/Depth 7, Frame 0.png" alt="Work" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perks */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-gray-400 mb-4">The Benefits</h2>
                            <h3 className="text-4xl font-bold text-black">Engineered for your well-being.</h3>
                        </div>
                        <Button className="bg-primary text-white hover:bg-primary/90 px-8 rounded-full font-bold">
                            See All Perks
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-3xl overflow-hidden">
                        {[
                            { label: "Global Mobility", icon: <Globe size={24} /> },
                            { label: "Equity Options", icon: <Target size={24} /> },
                            { label: "Health & Wellness", icon: <Heart size={24} /> },
                            { label: "Learning Stipends", icon: <Sparkles size={24} /> },
                            { label: "Modern Hardware", icon: <Cpu size={24} /> },
                            { label: "Unlimited PTO", icon: <Zap size={24} /> },
                            { label: "Retirement Plans", icon: <Shield size={24} /> },
                            { label: "Annual Offsites", icon: <Users size={24} /> },
                        ].map((perk, i) => (
                            <div key={i} className="bg-white p-8 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center text-center gap-4">
                                <div className="text-primary">{perk.icon}</div>
                                <span className="text-sm font-bold text-gray-800">{perk.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="bg-black py-20">
                <CTASection />
            </div>
        </main>
    );
}
