import PartnerForm from "./PartnerForm";
import { InnerPageHeader } from "@/components/inner-page-header";
import { Metadata } from "next";
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
  title: "Partner Program | Achtrex",
  description: "Join the Achtrex Partner Program to offer your clients best-in-class Data and AI solutions. Get access to exclusive co-marketing, training, and rewards.",
  keywords: ["Achtrex Partner", "Reseller Program", "AI Partnership", "Data Platform Partner"],
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-slate-900 pb-20">
      {/* Header */}
      <InnerPageHeader title="Partner with Achtrex" subtitle="Join our ecosystem of innovators and deliver world-class Data & AI solutions to your clients." />
      
      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white relative">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#00a9ce]/5 rounded-full blur-[80px] -z-0"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5 bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-[#00a9ce]/20 transition-all group">
              <div className="w-14 h-14 bg-[#00a9ce]/10 rounded-2xl flex items-center justify-center text-[#00a9ce] text-xl font-black group-hover:scale-110 transition-transform shadow-sm">01</div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Co-Marketing</h3>
              <p className="text-slate-600 text-[15px] font-medium leading-relaxed">
                Collaborate on joint webinars, case studies, and events to expand your reach and showcase success.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-5 bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-[#00a9ce]/20 transition-all group">
              <div className="w-14 h-14 bg-[#00a9ce]/10 rounded-2xl flex items-center justify-center text-[#00a9ce] text-xl font-black group-hover:scale-110 transition-transform shadow-sm">02</div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Technical Training</h3>
              <p className="text-slate-600 text-[15px] font-medium leading-relaxed">
                Get direct access to our engineering team and comprehensive training to master the Achtrex stack.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-5 bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-[#00a9ce]/20 transition-all group">
              <div className="w-14 h-14 bg-[#00a9ce]/10 rounded-2xl flex items-center justify-center text-[#00a9ce] text-xl font-black group-hover:scale-110 transition-transform shadow-sm">03</div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Referral Rewards</h3>
              <p className="text-slate-600 text-[15px] font-medium leading-relaxed">
                Earn competitive commissions for every client you refer who successfully signs with Achtrex.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <PartnerForm />
      
      
    </main>
  );
}
