import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
    Brain, Cpu, Database, Network, 
    ArrowRight, CheckCircle2, FileText, 
    Zap, Shield, Globe, Users, 
    BarChart3, Code2, Server
} from 'lucide-react';

export default async function AITrainingPage() {
    return (
        <div className="bg-[#030712] text-gray-100 min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-gray-800/50">
                {/* Background Glows */}
                <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-emerald-500/10 rounded-full blur-3xl" />
                
                <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                                <Zap size={14} className="fill-blue-400" />
                                <span>Next-Gen Infrastructure</span>
                            </div>
                            
                            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">AI Training</span> & Optimization
                            </h1>
                            
                            <p className="text-xl text-gray-400 max-w-xl">
                                Architecting, training, and deploying large-scale AI models tailored to your business. From data annotation to autonomous agent deployment.
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link href="#inquiry-form" className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
                                    Get Started <ArrowRight size={16} />
                                </Link>
                                <Link href="#resources" className="px-6 py-3.5 bg-gray-800/50 text-white rounded-xl font-bold hover:bg-gray-800 transition-all border border-gray-700 flex items-center gap-2">
                                    View Resources <FileText size={16} />
                                </Link>
                            </div>
                        </div>
                        
                        <div className="relative group lg:h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                            <div className="relative rounded-2xl border border-gray-800 bg-[#0b1329]/80 backdrop-blur-sm overflow-hidden h-full">
                                <Image 
                                    src="/images/ai_training_hero.png" 
                                    alt="AI Training Visual" 
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                {/* Glassmorphism overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#070b14]/5 backdrop-blur-md rounded-xl border border-white/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-bold text-white">Model Accuracy</span>
                                        <span className="text-sm font-bold text-emerald-400">99.4%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-[#070b14]/10 rounded-full">
                                        <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" style={{ width: '94%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-24 bg-[#050b18]">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <span className="text-blue-500 font-bold uppercase tracking-wider text-sm">Capabilities</span>
                        <h2 className="text-4xl font-bold text-white">End-to-End AI Lifecycle</h2>
                        <p className="text-gray-400 text-lg">We handle the heavy lifting of AI development, from raw data to production-grade deployments.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Service 1 */}
                        <div className="p-8 rounded-2xl border border-gray-800 bg-[#080f21] hover:border-blue-500/50 hover:bg-[#0b152e] transition-all group">
                            <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-6 group-hover:bg-blue-500/20 transition-all">
                                <Database className="text-blue-500" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Data Engineering</h3>
                            <p className="text-gray-400 text-sm mb-4">High-quality data annotation, cleaning, and synthetic data generation for training.</p>
                            <ul className="text-xs text-gray-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> RLHF Datasets</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Multi-modal Labeling</li>
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="p-8 rounded-2xl border border-gray-800 bg-[#080f21] hover:border-emerald-500/50 hover:bg-[#0b152e] transition-all group">
                            <div className="p-3 bg-emerald-500/10 rounded-xl w-fit mb-6 group-hover:bg-emerald-500/20 transition-all">
                                <Brain className="text-emerald-500" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Custom LLMs</h3>
                            <p className="text-gray-400 text-sm mb-4">Pre-training and fine-tuning large language models on your proprietary data.</p>
                            <ul className="text-xs text-gray-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Domain Adaptation</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> LoRA / QLoRA Tuning</li>
                            </ul>
                        </div>

                        {/* Service 3 */}
                        <div className="p-8 rounded-2xl border border-gray-800 bg-[#080f21] hover:border-purple-500/50 hover:bg-[#0b152e] transition-all group">
                            <div className="p-3 bg-purple-500/10 rounded-xl w-fit mb-6 group-hover:bg-purple-500/20 transition-all">
                                <Network className="text-purple-500" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">AI Agent Swarms</h3>
                            <p className="text-gray-400 text-sm mb-4">Deploying autonomous agents that collaborate to solve complex enterprise workflows.</p>
                            <ul className="text-xs text-gray-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Multi-agent Orchestration</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Tool Use & RAG</li>
                            </ul>
                        </div>

                        {/* Service 4 */}
                        <div className="p-8 rounded-2xl border border-gray-800 bg-[#080f21] hover:border-orange-500/50 hover:bg-[#0b152e] transition-all group">
                            <div className="p-3 bg-orange-500/10 rounded-xl w-fit mb-6 group-hover:bg-orange-500/20 transition-all">
                                <Cpu className="text-orange-500" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Edge Inference</h3>
                            <p className="text-gray-400 text-sm mb-4">Optimizing models for low-latency, secure deployment on edge devices and private servers.</p>
                            <ul className="text-xs text-gray-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Quantization (INT4/INT8)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> ONNX Runtime</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Resources Section */}
            <section id="resources" className="py-24 bg-[#030712]">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <span className="text-emerald-500 font-bold uppercase tracking-wider text-sm">Knowledge Base</span>
                        <h2 className="text-4xl font-bold text-white">Technical Resources</h2>
                        <p className="text-gray-400 text-lg">Deep dives into our methodology and architectural standards.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Resource 1 */}
                        <div className="bg-[#080f21] rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all">
                            <div className="p-6 border-b border-gray-800">
                                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-md uppercase">Whitepaper</span>
                                <h3 className="text-lg font-bold text-white mt-3 mb-2">Scaling RLHF for Enterprise Data</h3>
                                <p className="text-gray-400 text-sm">Learn how we scale Reinforcement Learning from Human Feedback for domain-specific LLMs.</p>
                            </div>
                            <div className="p-4 bg-[#0b1329] flex justify-between items-center text-sm">
                                <span className="text-gray-500 flex items-center gap-2"><Users size={14} /> 12 Min Read</span>
                                <Link href="/docs" className="text-emerald-500 font-bold flex items-center gap-1 hover:text-emerald-400">
                                    Download PDF <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Resource 2 */}
                        <div className="bg-[#080f21] rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all">
                            <div className="p-6 border-b border-gray-800">
                                <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-md uppercase">Case Study</span>
                                <h3 className="text-lg font-bold text-white mt-3 mb-2">Autonomous Agent Swarms in FinTech</h3>
                                <p className="text-gray-400 text-sm">How we deployed a swarm of 50 collaborative agents to automate fraud detection workflows.</p>
                            </div>
                            <div className="p-4 bg-[#0b1329] flex justify-between items-center text-sm">
                                <span className="text-gray-500 flex items-center gap-2"><Users size={14} /> 8 Min Read</span>
                                <Link href="/case-studies" className="text-emerald-500 font-bold flex items-center gap-1 hover:text-emerald-400">
                                    Read Case Study <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Resource 3 */}
                        <div className="bg-[#080f21] rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all">
                            <div className="p-6 border-b border-gray-800">
                                <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-md uppercase">Documentation</span>
                                <h3 className="text-lg font-bold text-white mt-3 mb-2">Edge Optimization Guidelines</h3>
                                <p className="text-gray-400 text-sm">A comprehensive guide to model quantization, pruning, and low-latency serving.</p>
                            </div>
                            <div className="p-4 bg-[#0b1329] flex justify-between items-center text-sm">
                                <span className="text-gray-500 flex items-center gap-2"><Users size={14} /> 15 Min Read</span>
                                <Link href="/docs" className="text-emerald-500 font-bold flex items-center gap-1 hover:text-emerald-400">
                                    View Docs <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Form Section */}
            <section id="inquiry-form" className="py-24 bg-[#050b18]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <span className="text-blue-500 font-bold uppercase tracking-wider text-sm">Contact</span>
                            <h2 className="text-4xl font-bold text-white">Request a Consultation</h2>
                            <p className="text-gray-400 text-lg max-w-xl">
                                Let's discuss your specific AI requirements. Our engineers will help you architect a solution tailored to your infrastructure.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-[#080f21] rounded-xl border border-gray-800">
                                    <Shield className="text-blue-500" size={24} />
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Strict NDA Compliance</h4>
                                        <p className="text-gray-500 text-xs">Your data and IP are protected by enterprise-grade security.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-[#080f21] rounded-xl border border-gray-800">
                                    <Globe className="text-emerald-500" size={24} />
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Global Deployment</h4>
                                        <p className="text-gray-500 text-xs">We support hybrid, on-prem, and multi-cloud architectures.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-[#080f21] p-8 rounded-2xl border border-gray-800 shadow-xl shadow-black/20">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-xs font-bold text-gray-400 uppercase mb-2 block">First Name</label>
                                        <input type="text" className="w-full bg-[#0b1329] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John" required />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-400 uppercase mb-2 block">Last Name</label>
                                        <input type="text" className="w-full bg-[#0b1329] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" required />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase mb-2 block">Corporate Email</label>
                                    <input type="email" className="w-full bg-[#0b1329] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" required />
                                </div>
                                
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase mb-2 block">Project Type</label>
                                    <select className="w-full bg-[#0b1329] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors">
                                        <option>Select an option...</option>
                                        <option>Custom LLM Pre-training</option>
                                        <option>Fine-Tuning / Adaptation</option>
                                        <option>Autonomous Agent Deployment</option>
                                        <option>Data Engineering & Labeling</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase mb-2 block">Message / Requirements</label>
                                    <textarea rows={4} className="w-full bg-[#0b1329] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Describe your project, timeline, and data availability..." required></textarea>
                                </div>
                                
                                <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-bold hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg shadow-blue-500/20">
                                    Submit Request
                                </button>
                                
                                <p className="text-xs text-gray-500 text-center">
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
