import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
    Brain, Cpu, Database, Network, 
    ArrowRight, CheckCircle2, FileText, 
    Zap, Shield, Globe, Users, 
    BarChart3, Code2, Server
} from 'lucide-react';
import { InnerPageHeader } from "@/components/inner-page-header";

export default async function AITrainingPage() {
    return (
        <div className="bg-[#f4f4f4] text-slate-900 min-h-screen font-sans pb-20">
            {/* Hero Section */}
            <InnerPageHeader title="Enterprise AI Training & Optimization" subtitle="Architecting, training, and deploying large-scale AI models tailored to your business. From data annotation to autonomous agent deployment." />

            {/* Core Services */}
            <section className="py-24 bg-[#f4f4f4]">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <span className="text-[#00a9ce] font-bold uppercase tracking-wider text-sm">Capabilities</span>
                        <h2 className="text-4xl font-bold text-slate-900">End-to-End AI Lifecycle</h2>
                        <p className="text-slate-600 text-lg">We handle the heavy lifting of AI development, from raw data to production-grade deployments.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Service 1 */}
                        <div className="p-8 rounded-none border border-slate-200 bg-white hover:border-[#00a9ce] hover:bg-slate-50 transition-all group">
                            <div className="p-3 bg-[#00a9ce]/10 rounded-none w-fit mb-6 group-hover:bg-[#00a9ce]/20 transition-all">
                                <Database className="text-[#00a9ce]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Data Engineering</h3>
                            <p className="text-slate-600 text-sm mb-4">High-quality data annotation, cleaning, and synthetic data generation for training.</p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[#00a9ce]" /> RLHF Datasets</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[#00a9ce]" /> Multi-modal Labeling</li>
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="p-8 rounded-none border border-slate-200 bg-white hover:border-[#76bc1d] hover:bg-slate-50 transition-all group">
                            <div className="p-3 bg-[#76bc1d]/10 rounded-none w-fit mb-6 group-hover:bg-[#76bc1d]/20 transition-all">
                                <Brain className="text-[#76bc1d]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Custom LLMs</h3>
                            <p className="text-slate-600 text-sm mb-4">Pre-training and fine-tuning large language models on your proprietary data.</p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[#76bc1d]" /> Domain Adaptation</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[#76bc1d]" /> LoRA / QLoRA Tuning</li>
                            </ul>
                        </div>

                        {/* Service 3 */}
                        <div className="p-8 rounded-none border border-slate-200 bg-white hover:border-[#001a22] hover:bg-slate-50 transition-all group">
                            <div className="p-3 bg-[#001a22]/10 rounded-none w-fit mb-6 group-hover:bg-[#001a22]/20 transition-all">
                                <Network className="text-[#001a22]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">AI Agent Swarms</h3>
                            <p className="text-slate-600 text-sm mb-4">Deploying autonomous agents that collaborate to solve complex enterprise workflows.</p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[#001a22]" /> Multi-agent Orchestration</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[#001a22]" /> Tool Use & RAG</li>
                            </ul>
                        </div>

                        {/* Service 4 */}
                        <div className="p-8 rounded-none border border-slate-200 bg-white hover:border-[#00a9ce] hover:bg-slate-50 transition-all group">
                            <div className="p-3 bg-[#00a9ce]/10 rounded-none w-fit mb-6 group-hover:bg-[#00a9ce]/20 transition-all">
                                <Cpu className="text-[#00a9ce]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Edge Inference</h3>
                            <p className="text-slate-600 text-sm mb-4">Optimizing models for low-latency, secure deployment on edge devices and private servers.</p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[#00a9ce]" /> Quantization (INT4/INT8)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[#00a9ce]" /> ONNX Runtime</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Resources Section */}
            <section id="resources" className="py-24 bg-[#f4f4f4] border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <span className="text-[#76bc1d] font-bold uppercase tracking-wider text-sm">Knowledge Base</span>
                        <h2 className="text-4xl font-bold text-slate-900">Technical Resources</h2>
                        <p className="text-slate-600 text-lg">Deep dives into our methodology and architectural standards.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Resource 1 */}
                        <div className="bg-white rounded-none border border-slate-200 overflow-hidden hover:border-[#00a9ce] transition-all shadow-sm">
                            <div className="p-6 border-b border-slate-100">
                                <span className="px-2 py-1 bg-[#00a9ce]/10 text-[#00a9ce] text-xs font-bold rounded-none uppercase">Whitepaper</span>
                                <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">Scaling RLHF for Enterprise Data</h3>
                                <p className="text-slate-600 text-sm">Learn how we scale Reinforcement Learning from Human Feedback for domain-specific LLMs.</p>
                            </div>
                            <div className="p-4 bg-slate-50 flex justify-between items-center text-sm border-t border-slate-100">
                                <span className="text-slate-500 flex items-center gap-2"><Users size={14} /> 12 Min Read</span>
                                <Link href="/docs" className="text-[#00a9ce] font-bold flex items-center gap-1 hover:underline">
                                    Download PDF <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Resource 2 */}
                        <div className="bg-white rounded-none border border-slate-200 overflow-hidden hover:border-[#76bc1d] transition-all shadow-sm">
                            <div className="p-6 border-b border-slate-100">
                                <span className="px-2 py-1 bg-[#76bc1d]/10 text-[#76bc1d] text-xs font-bold rounded-none uppercase">Case Study</span>
                                <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">Autonomous Agent Swarms in FinTech</h3>
                                <p className="text-slate-600 text-sm">How we deployed a swarm of 50 collaborative agents to automate fraud detection workflows.</p>
                            </div>
                            <div className="p-4 bg-slate-50 flex justify-between items-center text-sm border-t border-slate-100">
                                <span className="text-slate-500 flex items-center gap-2"><Users size={14} /> 8 Min Read</span>
                                <Link href="/case-studies" className="text-[#76bc1d] font-bold flex items-center gap-1 hover:underline">
                                    Read Case Study <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Resource 3 */}
                        <div className="bg-white rounded-none border border-slate-200 overflow-hidden hover:border-[#001a22] transition-all shadow-sm">
                            <div className="p-6 border-b border-slate-100">
                                <span className="px-2 py-1 bg-[#001a22]/10 text-[#001a22] text-xs font-bold rounded-none uppercase">Documentation</span>
                                <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">Edge Optimization Guidelines</h3>
                                <p className="text-slate-600 text-sm">A comprehensive guide to model quantization, pruning, and low-latency serving.</p>
                            </div>
                            <div className="p-4 bg-slate-50 flex justify-between items-center text-sm border-t border-slate-100">
                                <span className="text-slate-500 flex items-center gap-2"><Users size={14} /> 15 Min Read</span>
                                <Link href="/docs" className="text-[#001a22] font-bold flex items-center gap-1 hover:underline">
                                    View Docs <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Form Section */}
            <section id="inquiry-form" className="py-24 bg-[#f4f4f4] border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <span className="text-[#00a9ce] font-bold uppercase tracking-wider text-sm">Contact</span>
                            <h2 className="text-4xl font-bold text-slate-900">Request a Consultation</h2>
                            <p className="text-slate-600 text-lg max-w-xl">
                                Let's discuss your specific AI requirements. Our engineers will help you architect a solution tailored to your infrastructure.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-white rounded-none border border-slate-200 shadow-sm">
                                    <Shield className="text-[#00a9ce]" size={24} />
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-sm">Strict NDA Compliance</h4>
                                        <p className="text-slate-500 text-xs">Your data and IP are protected by enterprise-grade security.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white rounded-none border border-slate-200 shadow-sm">
                                    <Globe className="text-[#76bc1d]" size={24} />
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-sm">Global Deployment</h4>
                                        <p className="text-slate-500 text-xs">We support hybrid, on-prem, and multi-cloud architectures.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 rounded-none border border-slate-200 shadow-sm">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">First Name</label>
                                        <input type="text" className="w-full bg-white border border-slate-300 rounded-none px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#00a9ce] transition-colors" placeholder="John" required />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Last Name</label>
                                        <input type="text" className="w-full bg-white border border-slate-300 rounded-none px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#00a9ce] transition-colors" placeholder="Doe" required />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Corporate Email</label>
                                    <input type="email" className="w-full bg-white border border-slate-300 rounded-none px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#00a9ce] transition-colors" placeholder="john@company.com" required />
                                </div>
                                
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Project Type</label>
                                    <select className="w-full bg-white border border-slate-300 rounded-none px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#00a9ce] transition-colors">
                                        <option>Select an option...</option>
                                        <option>Custom LLM Pre-training</option>
                                        <option>Fine-Tuning / Adaptation</option>
                                        <option>Autonomous Agent Deployment</option>
                                        <option>Data Engineering & Labeling</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Message / Requirements</label>
                                    <textarea rows={4} className="w-full bg-white border border-slate-300 rounded-none px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#00a9ce] transition-colors" placeholder="Describe your project, timeline, and data availability..." required></textarea>
                                </div>
                                
                                <button type="submit" className="w-full py-3.5 bg-[#00a9ce] text-white rounded-none font-bold hover:bg-[#001a22] transition-all shadow-none">
                                    Submit Request
                                </button>
                                
                                <p className="text-xs text-slate-500 text-center">
                                    By submitting, you agree to our privacy policy and terms of service.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
