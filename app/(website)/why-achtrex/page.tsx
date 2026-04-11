import { CTASection } from "@/components/cta";
import { Server, ShieldAlert, Cpu, Globe2, Activity } from 'lucide-react';

export const metadata = {
    title: 'Why Achtrex | The Platform Advantage',
    description: 'Achtrex provides unmatched technical velocity and scalable infrastructure for modern digital economies.',
};

export default function WhyAchtrexPage() {
    const advantages = [
        {
            icon: Server,
            title: 'Proprietary Infrastructure',
            desc: 'We are not bound by third-party vendor limits. By owning our core data pipelines and API proxies, we guarantee uptime, reduce latency, and control our own scalability runway.'
        },
        {
            icon: Globe2,
            title: 'Global Mindset',
            desc: 'Our architectures are designed from day one to handle localized datasets on a global scale. We build systems that resolve information asymmetry regardless of the geographic market.'
        },
        {
            icon: Activity,
            title: 'Technical Velocity',
            desc: 'Because we operate on a strictly product-focused model, our engineering metrics revolve around high-availability and zero downtime, not billing hours.'
        },
        {
            icon: ShieldAlert,
            title: 'Zero Asymmetry',
            desc: 'We focus on markets where data is opaque or fragmented. By aggregating massive datasets, we provide platforms that deliver immediate truth and transparency.'
        }
    ];

    return (
        <main className="min-h-screen bg-background text-white">
            <section className="relative pt-40 pb-20 px-6 border-b border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-left">
                        <span className="inline-flex items-center gap-2 bg-[#111827] border border-white/10 px-4 py-2 rounded-sm text-xs font-bold tracking-[0.1em] text-primary mb-8">
                            THE ACHTREX ADVANTAGE
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            We are not another <br /> technology agency.
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            We don't sell our time. We build, own, and scale high-leverage data engines. Partnering with our technology means plugging directly into enterprise-grade infrastructure.
                        </p>
                    </div>
                    
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0f1c]">
                        <img 
                            src="/server_infrastructure.png" 
                            alt="Server Infrastructure" 
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent" />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#0a0f1c] relative border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {advantages.map((adv, idx) => (
                            <div key={idx} className="bg-background border border-white/10 p-10 rounded-sm hover:border-primary/50 transition-colors">
                                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-sm mb-6 border border-primary/20">
                                    <adv.icon className="text-primary w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{adv.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">{adv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <Cpu className="text-secondary w-16 h-16 mx-auto mb-8 opacity-50" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Innovation through ownership.</h2>
                    <p className="text-xl text-gray-400 leading-relaxed italic">
                        "The most profound technologies are those that disappear. By giving developers and businesses access to our APIs, we abstract the complexity of massive data aggregation so they can focus on building the future."
                    </p>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
