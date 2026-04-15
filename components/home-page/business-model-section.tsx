import React from 'react';
import { Database, Terminal, LayoutDashboard, CheckCircle2 } from 'lucide-react';

export const BusinessModelSection = () => {
    return (
        <section className="py-24 bg-[#ffffff] border-y border-gray-200">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-bold tracking-widest text-[#10b981] uppercase mb-4">💰 Business Model</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">How We Generate Value</h3>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        Achtrex operates on a scalable, software-as-a-service and enterprise API access model, offering tiered subscriptions to our proprietary platforms and high-velocity datasets.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
                    {/* Model 1: Subscription Access */}
                    <div className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#3b82f6]/10 to-transparent rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
                        <div className="w-16 h-16 bg-[#3b82f6]/10 text-[#3b82f6] rounded-2xl flex items-center justify-center mb-8">
                            <Database className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Subscription Access to Automotive Dataset</h4>
                        <p className="text-gray-600 mb-8 text-base leading-relaxed">
                            Monthly and annual subscription tiers granting enterprise clients structured access to millions of cross-border automotive telemetry and history records.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-700 font-semibold"><CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" /> Direct Database Queries</li>
                            <li className="flex items-start gap-3 text-sm text-gray-700 font-semibold"><CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" /> High-volume Licensing Volumes</li>
                        </ul>
                    </div>

                    {/* Model 2: API Usage Pricing */}
                    <div className="bg-[#0a0f1c] p-8 lg:p-10 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden transform md:-translate-y-6">
                        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-white via-[#10b981] to-[#3b82f6]" />
                        <div className="w-16 h-16 bg-white/5 text-[#10b981] rounded-2xl flex items-center justify-center mb-8 border border-white/10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                            <Terminal className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">API Usage Pricing</h4>
                        <p className="text-gray-400 mb-8 text-base leading-relaxed">
                            Pay-as-you-go and bulk transaction models for developers integrating our zero-latency AI and data resolution endpoints directly into their architecture.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-300 font-semibold"><CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" /> Millisecond Latency SLAs</li>
                            <li className="flex items-start gap-3 text-sm text-gray-300 font-semibold"><CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" /> Volume-based Cost Scaling</li>
                        </ul>
                    </div>

                    {/* Model 3: SaaS Access */}
                    <div className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#8b5cf6]/10 to-transparent rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
                        <div className="w-16 h-16 bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-2xl flex items-center justify-center mb-8">
                            <LayoutDashboard className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">SaaS Access to LUMI</h4>
                        <p className="text-gray-600 mb-8 text-base leading-relaxed">
                            Recurring licensing for organizations adopting LUMI to automate internal workflows, replacing custom-built software with our scalable enterprise AI platform.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-700 font-semibold"><CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" /> Agent Instance Allocation</li>
                            <li className="flex items-start gap-3 text-sm text-gray-700 font-semibold"><CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" /> Dedicated Enterprise Clusters</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
