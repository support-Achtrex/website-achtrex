import React from 'react';
import { Bot, Workflow, Zap, Database, ArrowRight } from 'lucide-react';

export const LumiSection = () => {
    return (
        <section className="py-20 lg:py-32 bg-[#060b14] border-y border-white/10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#3b82f6]/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-t from-[#10b981]/5 to-transparent pointer-events-none" />
            
            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#3b82f6]/30 rounded-full mb-6">
                            <Bot className="w-4 h-4 text-[#3b82f6]" />
                            <span className="text-xs font-bold text-[#3b82f6] tracking-wider uppercase">In Development</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                            🤖 LUMI — <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#3b82f6]">AI Agent Platform</span>
                        </h2>
                        
                        <p className="text-gray-300 text-lg leading-relaxed mb-10">
                            LUMI is an AI-powered platform that enables businesses to build intelligent agents capable of automating workflows, interacting with users, and delivering real-time insights from structured data.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-[#10b981]/20 flex items-center justify-center shrink-0">
                                    <Workflow className="w-6 h-6 text-[#10b981]" />
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-white text-lg font-bold mb-2">Workflow Automation</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">Design complex multi-step processes across legacy systems natively via our enterprise API logic bridge.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-[#3b82f6]/20 flex items-center justify-center shrink-0">
                                    <Zap className="w-6 h-6 text-[#3b82f6]" />
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-white text-lg font-bold mb-2">Intelligent User Interaction</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">Deploy conversational agents that contextually respond to real user inputs while maintaining global semantic state.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-[#8b5cf6]/20 flex items-center justify-center shrink-0">
                                    <Database className="w-6 h-6 text-[#8b5cf6]" />
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-white text-lg font-bold mb-2">Real-time Data Insights</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">Stream structural data analytics instantaneously from connected databases and existing proprietary ledgers.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/10 to-[#3b82f6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                                Primary Use Case
                            </h4>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed relative z-10">
                                Deploying specialized internal communication agents that instantly query company-wide datasets, vastly reducing enterprise response times and human-driven support overhead by 80%.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.15)] transform hover:-translate-y-2 transition-transform duration-500">
                            <img src="/projects/lumi_ui_v2.jpg" alt="LUMI AI Interface" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-transparent to-transparent pointer-events-none" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
