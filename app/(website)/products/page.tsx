import { CTASection } from "@/components/cta";
import { Car, Bot, Server, Database, Code2 } from 'lucide-react';
import Image from "next/image";

export const metadata = {
    title: "Our Products & Platforms | Automotive Data & AI Solutions",
    description: "Achtrex builds scalable digital platforms powered by data, APIs, and AI to enable businesses and developers to create intelligent solutions.",
};

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* SaaS Hero */}
            <section className="relative pt-40 pb-20 px-6 border-b border-white/5 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-flex items-center gap-2 bg-[#111827] border border-white/10 px-4 py-2 rounded-sm text-xs font-bold tracking-[0.1em] text-primary mb-8">
                        PROPRIETARY CAPABILITIES
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Platforms that power <br /> modern infrastructure.
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        We don't build client projects. We architect highly proprietary API engines and data aggregators that scale globally.
                    </p>
                </div>
            </section>

            {/* Automotive Data Platform Spotlight */}
            <section className="py-24 px-6 border-b border-white/5 bg-[#0a0f1c]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-sm">
                                <Car className="text-primary w-6 h-6" />
                            </div>
                            <span className="text-green-500 bg-green-500/10 border border-green-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">
                                Live Product
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Automotive Data Platform</h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            A high-availability API engine processing over 1.2M market variables. Built for developers and enterprise marketplaces to instantly access granular vehicle datasets, VIN decodes, and real-time valuation metrics without owning the underlying infrastructure.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {['RESTful API Access', 'Global Brand Coverage (NMVTIS)', 'Instant Market Valuation Engine'].map(feature => (
                                <li key={feature} className="flex items-center gap-3">
                                    <Database className="text-primary w-5 h-5 shrink-0" />
                                    <span className="text-white font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="https://automotivedataset.com" target="_blank" rel="noopener noreferrer" className="inline-flex bg-primary text-white font-bold px-8 py-4 rounded-sm hover:bg-primary/90 transition-colors">
                            View Documentation & API
                        </a>
                    </div>
                    <div className="relative h-[500px] w-full rounded-xl border border-white/10 overflow-hidden bg-background">
                        <Image src="/images/automotive-data-engine.png" alt="Automotive API Dashboard" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* AI Platform Spotlight */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
                    <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-xl border border-white/10 overflow-hidden bg-[#0a0f1c]">
                         {/* AI Image */}
                         <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                             <Image src="/images/ai-architecture.png" alt="Conversational AI Engine" fill className="object-cover opacity-80" />
                         </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 flex items-center justify-center rounded-sm">
                                <Bot className="text-secondary w-6 h-6" />
                            </div>
                            <span className="text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">
                                Architecture Phase
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Conversational AI Engine</h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Our upcoming cognitive layer connects large language models directly via a low-latency API proxy. We are building the infrastructure required for enterprise platforms to deploy intelligent chatbots and automated reasoning workflows instantly.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {['RAG-pipeline integration', 'Intent classification routing', 'Scalable reasoning nodes'].map(feature => (
                                <li key={feature} className="flex items-center gap-3">
                                    <Code2 className="text-secondary w-5 h-5 shrink-0" />
                                    <span className="text-white font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

             {/* Internal Capabilities Reframed */}
            <section className="py-24 px-6 relative overflow-hidden bg-[#0a0f1c]">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Internal Capabilities</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            We don't sell hours. We leverage our deep engineering capabilities purely to forge and scale our own proprietary products.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Global System Architecture', desc: 'Monolithic repos decoupled into high-performance microservices.' },
                            { title: 'Data Aggregation Strategy', desc: 'Massive ETL pipelines processing terabytes of structured intelligence.' },
                            { title: 'High-Fidelity UI Systems', desc: 'Pixel-perfect component engineering for frictionless developer interfaces.' }
                        ].map((cap, i) => (
                             <div key={i} className="border border-white/10 bg-background p-8 rounded-sm hover:border-primary/50 transition-colors">
                                 <h3 className="text-xl font-bold text-white mb-4">{cap.title}</h3>
                                 <p className="text-gray-400 leading-relaxed">{cap.desc}</p>
                             </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <CTASection />
        </main>
    );
}
