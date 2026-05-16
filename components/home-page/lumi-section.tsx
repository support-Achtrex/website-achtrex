import React from 'react';
import Image from 'next/image';
import { Sprout, Workflow, Zap, Database, ArrowRight } from 'lucide-react';

export const LumiSection = () => {
    return (
        <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#3b82f6]/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-t from-[#10b981]/5 to-transparent pointer-events-none" />
            
            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Automate with <br /> <span className="text-gradient">LUMI Intelligence.</span>
                        </h2>
                        
                        <p className="text-slate-600 text-lg leading-relaxed mb-10">
                            LUMI is an AI-powered platform that enables businesses to build intelligent agents capable of automating workflows, interacting with users, and delivering real-time insights from structured data.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center shrink-0">
                                    <Workflow className="w-6 h-6 text-[#10b981]" />
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-slate-900 text-lg font-bold mb-2">Workflow Automation</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">Design complex multi-step processes across legacy systems natively via our enterprise API logic bridge.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center shrink-0">
                                    <Zap className="w-6 h-6 text-[#3b82f6]" />
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-slate-900 text-lg font-bold mb-2">Intelligent User Interaction</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">Deploy conversational agents that contextually respond to real user inputs while maintaining global semantic state.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center shrink-0">
                                    <Database className="w-6 h-6 text-[#8b5cf6]" />
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-slate-900 text-lg font-bold mb-2">Real-time Data Insights</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">Stream structural data analytics instantaneously from connected databases and existing proprietary ledgers.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white border border-slate-200 rounded-2xl relative overflow-hidden group shadow-sm">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h4 className="text-slate-900 font-bold mb-3 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                                Primary Use Case
                            </h4>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed relative z-10">
                                Deploying specialized internal communication agents that instantly query company-wide datasets, vastly reducing enterprise response times and human-driven support overhead by 80%.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
                            <Image 
                                src="/projects/lumi_ui_v2.jpg" 
                                alt="LUMI AI Interface" 
                                fill
                                className="object-cover" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
