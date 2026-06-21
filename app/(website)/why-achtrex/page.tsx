import { Server, ShieldAlert, Cpu, Globe2, Activity } from 'lucide-react';
import { InnerPageHeader } from "@/components/inner-page-header";
import { ComparisonSection } from "@/components/home-page/comparison-section";
import Image from 'next/image';
import * as motion from 'framer-motion/client';

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
      <section className="relative py-20 px-6 bg-transparent overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#00a9ce]/5 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#76bc1d]/5 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>
        
        <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              We are an architectural <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a9ce] to-[#053787]">technology laboratory.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              We do not simply iterate, we originate. Achtrex builds, strictly owns, and aggressively scales high-leverage algorithmic engines. Interfacing with our technology means plugging directly into a state-of-the-art, enterprise-grade cognitive infrastructure.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-[#081622] group">
            <Image 
              src="/server_infrastructure.png" 
              alt="Server Infrastructure" 
              fill
              priority
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 mix-blend-luminosity opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081622] via-[#081622]/30 to-transparent opacity-90" />
            <div className="absolute bottom-8 left-8 border-l-4 border-[#00a9ce] pl-4">
               <p className="text-white font-black text-2xl tracking-tight">Data Resiliency</p>
               <p className="text-[#00a9ce] text-sm font-bold tracking-widest uppercase mt-1">Tier 1 Infrastructure</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 relative bg-gradient-to-b from-[#040e16] to-[#081622] border-y border-[#00a9ce]/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((adv, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="group bg-[#02101a]/50 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:border-[#00a9ce]/30 hover:bg-[#00a9ce]/5 transition-all shadow-xl hover:shadow-[0_0_30px_rgba(0,169,206,0.1)] relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00a9ce]/10 rounded-full blur-2xl group-hover:bg-[#00a9ce]/20 transition-all"></div>
                <adv.icon className="w-10 h-10 text-[#00a9ce] mb-6 group-hover:scale-110 transition-transform" />
                <span className="text-[#00a9ce] font-black text-[11px] uppercase tracking-widest mb-3 block opacity-60">Core Advantage 0{idx + 1}</span>
                <h3 className="text-2xl font-black mb-4 text-white tracking-tight">{adv.title}</h3>
                <p className="text-slate-400 leading-relaxed text-[15px] font-medium">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ComparisonSection />
      
      <section className="py-24 px-6 bg-transparent">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-white p-12 md:p-16 rounded-3xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00a9ce] to-[#76bc1d]"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-slate-900 tracking-tight">Velocity via vertical integration.</h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed italic font-medium">
            "The most sophisticated systems integrate seamlessly into the background. By providing frictionless API access to our architectural core, we completely abstract the friction of massive data orchestration, enabling our partners to structurally outpace their competition."
          </p>
        </motion.div>
      </section>

      
    </main>
  );
}
