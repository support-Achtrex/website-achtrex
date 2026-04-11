import { CTASection } from "@/components/cta";
import { ArrowUpRight } from 'lucide-react';
import Image from "next/image";

export const metadata = {
    title: "Platform & Use Cases | Achtrex Scaling in Action",
    description: "Explore how Achtrex technologies and platforms are applied to build real-world digital solutions across industries.",
};

export default function PlatformUseCasesPage() {
    const useCases = [
        {
            title: 'Carkasa Platform Integration',
            category: 'Automotive Data Engine',
            tags: ['API Integration', 'Data Validation', 'At-Scale'],
            description: 'The automotive market suffers from extreme data fragmentation. This integration demonstrates how Achtrex API infrastructure resolves information asymmetry by validating millions of properties in milliseconds.',
            productRole: 'Using the Achtrex Automotive Data Engine, we established a high-velocity verification layer connecting global NMVTIS records directly to a consumer interface.',
            impact: '99.9% data accuracy across localized subsets, proving the global scalability of the underlying proprietary data structure.',
            image: '/hero-analytics-dashboard.png'
        },
        {
            title: 'Telemedicine Infrastructure',
            category: 'Health Tech Routing',
            tags: ['HIPAA Architecture', 'WebSockets', 'Scalability'],
            description: 'Geographical barriers limit healthcare reach. This internal system test highlights how our cloud infrastructure manages secure, high-latency video and data packets.',
            productRole: 'Achtrex containerized infrastructure deployed strict HIPAA-compliant routing protocols to support zero-loss video streaming and decentralized records.',
            impact: 'Achieved ultra-low latency connections, validating our core routing layers for enterprise health deployments.',
            image: '/images/global-innovation.png'
        }
    ];

    return (
        <main className="min-h-screen bg-background text-white">
            <section className="relative pt-40 pb-20 px-6 border-b border-white/5">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-flex items-center gap-2 bg-[#111827] border border-white/10 px-4 py-2 rounded-sm text-xs font-bold tracking-[0.1em] text-secondary mb-8">
                        INFRASTRUCTURE IN ACTION
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Proof of Concept.<br /> Validated at scale.
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        We don't showcase client work. We present real-world integrations demonstrating the absolute ceiling of our proprietary engines and API infrastructures.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {useCases.map((useCase, idx) => (
                        <div key={idx} className="group flex flex-col bg-[#0a0f1c] border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-colors">
                            <div className="relative h-[300px] lg:h-[400px] w-full bg-slate-900 border-b border-white/10">
                                <Image
                                    src={useCase.image}
                                    alt={useCase.title}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 rounded-sm bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                                        {useCase.category}
                                    </span>
                                    {useCase.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-sm bg-white/5 text-gray-400 text-xs border border-white/5 font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-bold mb-4">{useCase.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed flex-1">{useCase.description}</p>
                                
                                <div className="space-y-4 pt-6 border-t border-white/10 mt-auto">
                                    <div>
                                        <h4 className="text-xs uppercase text-primary font-bold tracking-widest mb-2">Platform Role</h4>
                                        <p className="text-sm text-gray-300">{useCase.productRole}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase text-secondary font-bold tracking-widest mb-2">Architectural Impact</h4>
                                        <p className="text-sm text-gray-300">{useCase.impact}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTASection />
        </main>
    );
}
