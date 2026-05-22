'use client';

import React from 'react';
import Image from 'next/image';
import { Database, Bot, LayoutTemplate, Globe, ShieldCheck } from 'lucide-react';

export const AboutContent = () => {
    return (
        <section className="bg-white text-[#111112] font-sans">
            
            {/* Hero Banner */}
            <div className="bg-[#005AB0] text-white pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <h1 className="text-[48px] md:text-[64px] font-bold mb-6">About Achtrex</h1>
                    <p className="text-xl md:text-3xl max-w-4xl font-light leading-relaxed text-white/90">
                        Building Intelligent Automotive Infrastructure for the Future of Mobility
                    </p>
                </div>
            </div>

            {/* Intro Section */}
            <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-32 border-b border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl font-bold text-[#005AB0] mb-6">Who We Are</h2>
                        <div className="w-16 h-1 bg-[#10b981] mb-8" />
                    </div>
                    <div className="lg:col-span-7 space-y-6 text-xl text-gray-700 leading-relaxed font-light">
                        <p>
                            Achtrex is a technology-driven automotive intelligence company focused on building scalable automotive datasets, enterprise API infrastructure, and AI-powered vehicle intelligence platforms for the global mobility ecosystem.
                        </p>
                        <p>
                            Our mission is to modernize how automotive data is accessed, interpreted, and utilized by dealerships, insurers, marketplaces, fleet operators, developers, and mobility technology companies worldwide.
                        </p>
                        <p>
                            We are developing one of the most advanced intelligent automotive ecosystems by combining large-scale vehicle datasets, real-time integrations, enterprise APIs, and artificial intelligence technologies into a unified automotive infrastructure platform.
                        </p>
                    </div>
                </div>
            </div>

            {/* Leadership (Moved up) */}
            <div className="bg-gray-50 py-20 lg:py-32 border-b border-gray-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-[#111112] mb-4">Architectural Leadership</h2>
                        <div className="w-16 h-1 bg-[#005AB0]" />
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-4">
                            <div className="relative aspect-[4/5] bg-gray-100 shadow-xl overflow-hidden rounded-xl">
                                <Image 
                                    src="/team/achim_real.jpg" 
                                    alt="Achim Godwin Tetteh" 
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <h3 className="text-3xl font-bold mb-2">Achim Godwin Tetteh</h3>
                            <p className="text-[#005AB0] font-bold uppercase tracking-wider text-sm mb-8">Founder & Chief Architect</p>
                            
                            <div className="space-y-6 text-xl text-gray-700 leading-relaxed font-light">
                                <p>
                                    With a relentless focus on enterprise-grade architecture, Achim Godwin Tetteh founded Achtrex to resolve the immense data fragmentation currently hindering the global mobility ecosystem.
                                </p>
                                <blockquote className="border-l-4 border-[#10b981] pl-6 italic font-medium text-gray-900 my-8">
                                    "The future of the automotive industry isn't just connected; it's autonomous and data-driven. Our mandate is to build the definitive API infrastructure and AI reasoning layers required to power this next generation of global mobility—ensuring total data transparency and extreme scalability for our enterprise partners."
                                </blockquote>
                                <p>
                                    By prioritizing scalable platforms over bespoke projects, Achim directs the engineering of Achtrex’s core assets, including our high-frequency data pipelines and the LUMI AI cognitive framework. His architectural vision ensures that every system we deploy can seamlessly process millions of data points across global timezones without compromising latency or reliability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What We Build */}
            <div className="py-20 lg:py-32">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-[#111112] mb-4">What We Build</h2>
                        <div className="w-16 h-1 bg-[#005AB0]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Infra */}
                        <div className="bg-white p-10 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <Database className="w-12 h-12 text-[#10b981] mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Automotive Data Infrastructure</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Through platforms such as AutomotiveDataset.com, we provide scalable automotive data systems designed to power VIN intelligence, vehicle specifications, analytics, and enterprise-grade automotive integrations. Our infrastructure is designed to support developers, dealerships, insurance providers, fleet operators, and automotive technology companies requiring reliable and scalable automotive data solutions.
                            </p>
                        </div>

                        {/* AI */}
                        <div className="bg-white p-10 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <Bot className="w-12 h-12 text-[#10b981] mb-6" />
                            <h3 className="text-2xl font-bold mb-4">AI-Powered Vehicle Intelligence</h3>
                            <p className="text-gray-600 leading-relaxed">
                                LUMI represents our next-generation AI-powered automotive intelligence initiative designed to deliver intelligent vehicle reasoning, predictive insights, conversational automotive assistance, and advanced mobility intelligence. By combining AI with structured automotive datasets, we are building systems that can transform how automotive decisions are made across the industry.
                            </p>
                        </div>

                        {/* Enterprise Platforms */}
                        <div className="bg-white p-10 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <LayoutTemplate className="w-12 h-12 text-[#10b981] mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Enterprise Automotive Platforms</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Our ecosystem also includes specialized automotive platforms and use cases including:
                            </p>
                            <ul className="space-y-2 text-gray-600 list-disc pl-5">
                                <li>Automotive commerce solutions</li>
                                <li>Vehicle intelligence & reporting systems</li>
                                <li>Intelligent dealership & service platforms</li>
                                <li>Automotive workflow automation technologies</li>
                            </ul>
                            <p className="text-gray-600 mt-4 leading-relaxed">
                                These platforms allow us to continuously validate, scale, and expand our automotive intelligence infrastructure in real-world environments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision & Focus */}
            <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-32 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-3xl font-bold text-[#005AB0] mb-6">Our Vision</h2>
                        <div className="w-16 h-1 bg-[#10b981] mb-8" />
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            We believe the future of mobility will be driven by intelligent, connected, and data-powered systems.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Our vision is to build a globally scalable automotive intelligence ecosystem capable of powering the next generation of:
                        </p>
                        <ul className="space-y-3 text-lg text-gray-700 list-disc pl-5 font-semibold mb-6">
                            <li>Connected vehicles</li>
                            <li>Automotive marketplaces</li>
                            <li>Insurance technologies</li>
                            <li>Fleet intelligence systems</li>
                            <li>AI-driven mobility platforms</li>
                            <li>Intelligent automotive experiences</li>
                        </ul>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Achtrex is committed to building the infrastructure layer that helps shape the future of automotive technology.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-[#005AB0] mb-6">Our Focus</h2>
                        <div className="w-16 h-1 bg-[#10b981] mb-8" />
                        <ul className="space-y-6">
                            {[
                                "Scalable automotive datasets",
                                "Enterprise API infrastructure",
                                "AI-powered automotive intelligence",
                                "Vehicle data standardization",
                                "Mobility technology innovation",
                                "Intelligent automotive integrations"
                            ].map((focus, idx) => (
                                <li key={idx} className="flex items-center gap-4 border-b border-gray-100 pb-4">
                                    <ShieldCheck className="w-6 h-6 text-[#005AB0] shrink-0" />
                                    <span className="text-lg text-gray-800 font-medium">{focus}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* The Future */}
            <div className="bg-[#005AB0] text-white py-20 lg:py-32">
                <div className="max-w-[1200px] mx-auto px-6 text-center">
                    <Globe className="w-16 h-16 mx-auto mb-8 text-white/80" />
                    <h2 className="text-4xl font-bold mb-8">The Future</h2>
                    <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed mb-8 text-white/90">
                        As automotive technologies continue evolving toward connected, intelligent, and autonomous ecosystems, Achtrex is positioning itself at the intersection of automotive data, artificial intelligence, and scalable digital infrastructure.
                    </p>
                    <p className="text-xl md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed">
                        We are continuously expanding our platforms, integrations, and intelligent systems to support the future of global mobility.
                    </p>
                </div>
            </div>

        </section>
    );
};
