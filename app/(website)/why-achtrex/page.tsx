import { Server, ShieldAlert, Cpu, Globe2, Activity } from 'lucide-react';
import { InnerPageHeader } from "@/components/inner-page-header";
import { ComparisonSection } from "@/components/home-page/comparison-section";

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
    <main className="min-h-screen bg-[#f4f4f4] text-slate-900">
      <InnerPageHeader title="Why Achtrex" subtitle="The Structural Intelligence Advantage" />
      <section className="relative py-16 px-6 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              We are an architectural <br /> technology laboratory.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              We do not simply iterate, we originate. Achtrex builds, strictly owns, and aggressively scales high-leverage algorithmic engines. Interfacing with our technology means plugging directly into a state-of-the-art, enterprise-grade cognitive infrastructure.
            </p>
          </div>
          
          <div className="relative aspect-[4/3] rounded-none overflow-hidden border border-slate-200 bg-[#081622]">
            <img 
              src="/server_infrastructure.png" 
              alt="Server Infrastructure" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000 mix-blend-luminosity opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081622] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#081622] relative border-y border-[#00a9ce]/20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="bg-[#001a22] border border-[#00a9ce]/20 p-10 rounded-none hover:border-[#00a9ce]/50 transition-colors">
                <span className="text-[#00a9ce] font-black text-sm uppercase tracking-widest mb-4 block opacity-50">Core Advantage 0{idx + 1}</span>
                <h3 className="text-2xl font-bold mb-4 text-white">{adv.title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComparisonSection />
      
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-slate-900">Velocity via vertical integration.</h2>
          <p className="text-xl text-slate-500 leading-relaxed italic">
            "The most sophisticated systems integrate seamlessly into the background. By providing frictionless API access to our architectural core, we completely abstract the friction of massive data orchestration, enabling our partners to structurally outpace their competition."
          </p>
        </div>
      </section>

      
    </main>
  );
}
