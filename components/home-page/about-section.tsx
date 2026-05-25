'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export const AboutSection = () => {
    const router = useRouter();
    return (
        <section id="why-achtrex" className="py-16 px-6 relative overflow-hidden bg-white">
            <div className="max-w-[1440px] mx-auto relative z-10">

                {/* Header */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 space-y-4">
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#1A8B8C]">Founded December 2022</span>
                    <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-[#111112] tracking-tight leading-[1.1]">
                        Powering the future of<br />automotive intelligence
                    </h2>
                    <p className="text-[16px] text-[#5C7695] leading-[1.6] max-w-3xl font-medium">
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
                        <div key={i} className="text-center p-6 rounded-2xl border border-[#e5e5e5] bg-[#f9fafb] hover:border-[#1A8B8C]/30 hover:bg-white transition-all">
                            <div className="text-3xl font-black text-[#111112] mb-1">{stat.value}</div>
                            <div className="text-sm font-bold text-[#111112] mb-1">{stat.label}</div>
                            <div className="text-[11px] text-[#5C7695] font-medium">{stat.sub}</div>
                        </div>
                    ))}
                </div>

                {/* Infrastructure Image */}
                <div className="w-full relative h-[240px] md:h-[380px] rounded-2xl overflow-hidden border border-[#e5e5e5] shadow-sm mb-10">
                    <Image
                        src="/server_infrastructure.png"
                        alt="Achtrex Scalable Automotive Data Infrastructure"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                        {['AutomotiveDataset.com', 'LUMI AI', 'Achtrex Core', 'Enterprise APIs'].map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[12px] font-bold text-[#111112] border border-white/50">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link href="/about-us" className="inline-flex items-center gap-2 bg-[#111112] text-white font-bold px-8 py-3.5 rounded-full hover:bg-gray-800 transition-colors text-[14px]">
                        Learn about Achtrex
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};