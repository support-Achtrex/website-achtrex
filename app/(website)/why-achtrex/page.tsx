import { CTASection } from "@/components/cta";
import { Server, ShieldAlert, Cpu, Globe2, Activity } from 'lucide-react';

export const metadata = {
    title: 'Why Achtrex | The Structural Intelligence Advantage',
    description: 'Explore the technical leverage of Achtrex infrastructure. From proprietary autonomy to planetary scale, learn why our architectural engines are the foundation of high-velocity enterprises.',
    keywords: ["Proprietary Data Autonomy", "Geo-Agnostic Scaling", "Resilient API Infrastructure", "Algorithmic Transparency", "SaaS Architectural Advantage"],
    openGraph: {
        title: "Why Achtrex | Unmatched Technical Velocity",
        description: "Plug directly into a state-of-the-art enterprise-grade cognitive infrastructure.",
        images: ["/projects/lumi_ui_v2.jpg"],
    }
};

export default function WhyAchtrexPage() {
    const advantages = [
        {
            icon: Server,
            title: 'Proprietary Autonomy',
            desc: 'We are entirely decoupled from third-party vendor constraints. By exclusively authoring our underlying data pipelines and API proxy layers, we algorithmically guarantee uptime and infinitely control our scalability runway.'
        },
        {
            icon: Globe2,
            title: 'Geo-Agnostic Scale',
            desc: 'Our schemas are engineered from inception to syntactically parse localized datasets on a planetary scale. We deploy systems that structurally resolve asymmetric information deficits across any geographic jurisdiction.'
        },
        {
            icon: Activity,
            title: 'Continuous Velocity',
            desc: 'Because we execute on a sovereign, continuous-delivery framework, our engineering telemetry optimizes exclusively for sub-millisecond reliability and resilient fault tolerance.'
        },
        {
            icon: ShieldAlert,
            title: 'Algorithmic Transparency',
            desc: 'We penetrate markets obscured by fragmented data siloes. By programmatically aggregating and indexing massive structured clusters, we distribute platforms that enforce indisputable operational transparency.'
        }
    ];

    return (
        <main className="min-h-screen bg-background text-white">
            <section className="relative pt-40 pb-20 px-6 border-b border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            We are an architectural <br /> technology laboratory.
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            We do not simply iterate, we originate. Achtrex builds, strictly owns, and aggressively scales high-leverage algorithmic engines. Interfacing with our technology means plugging directly into a state-of-the-art, enterprise-grade cognitive infrastructure.
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
                                <span className="text-primary font-black text-sm uppercase tracking-widest mb-4 block opacity-50">Core Advantage 0{idx + 1}</span>
                                <h3 className="text-2xl font-bold mb-4">{adv.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">{adv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Velocity via vertical integration.</h2>
                    <p className="text-xl text-gray-400 leading-relaxed italic">
                        "The most sophisticated systems integrate seamlessly into the background. By providing frictionless API access to our architectural core, we completely abstract the friction of massive data orchestration, enabling our partners to structurally outpace their competition."
                    </p>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
