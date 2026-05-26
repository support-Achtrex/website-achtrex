'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export const AboutSection = () => {
    const router = useRouter();
    return (
        <section id="why-achtrex" className="py-16 px-6 relative overflow-hidden bg-transparent">
            <div className="max-w-[1440px] mx-auto relative z-10">

                {/* Header */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 space-y-4">
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#1A8B8C]">Founded December 2022</span>
                    <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.1]">
                        Powering the future of<br />automotive intelligence
                    </h2>
                    <p className="text-[16px] text-gray-400 leading-[1.6] max-w-3xl font-medium">
                        Achtrex is a global automotive technology company delivering scalable data APIs, enterprise VIN intelligence, and LUMI AI — a cognitive automotive reasoning engine. We operate live platforms, active integrations, and growing client engagements worldwide.
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
                    {[
                        { value: '2022', label: 'Founded', sub: 'December' },
                        { value: '3', label: 'Live Platforms', sub: 'AutomotiveDataset · LUMI · Core' },
                        { value: '4+', label: 'Industries', sub: 'Auto · AI · SaaS · Enterprise' },
                        { value: 'Global', label: 'Operations', sub: 'Remote-first worldwide' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-6 rounded-2xl border border-white/10 bg-[#111112] hover:border-[#1A8B8C]/50 hover:bg-[#1a1a1c] transition-all">
                            <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                            <div className="text-sm font-bold text-gray-300 mb-1">{stat.label}</div>
                            <div className="text-[11px] text-gray-500 font-medium">{stat.sub}</div>
                        </div>
                    ))}
                </div>

                {/* Infrastructure Image */}
                <div className="w-full relative h-[240px] md:h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-sm mb-10">
                    <Image
                        src="/server_infrastructure.png"
                        alt="Achtrex Scalable Automotive Data Infrastructure"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                        {['AutomotiveDataset.com', 'LUMI AI', 'Achtrex Core', 'Enterprise APIs'].map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-[#111112]/90 backdrop-blur-sm rounded-full text-[12px] font-bold text-white border border-white/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center flex justify-center">
                    <Link href="/about-us" className="relative group overflow-hidden rounded-full p-[2px] transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(59,130,246,0.15)] inline-flex">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-full h-full bg-[#070b14] hover:bg-[#0c1222] text-white font-bold text-[14px] px-8 py-3.5 rounded-full transition-colors duration-500 flex items-center justify-center gap-2">
                            Learn about Achtrex
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};