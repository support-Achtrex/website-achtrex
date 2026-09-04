'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Rocket, Target, Heart, Globe, Cpu, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/buttons';
import { InnerPageHeader } from "@/components/inner-page-header";


export default function LifeAtAchtrexPage() {
 return (
 <main className="min-h-screen bg-[#f4f4f4] text-slate-900 pb-20">
 {/* Header */}
 <InnerPageHeader title="Architecting the Next Era of Data" subtitle="We engineer real infrastructure for the global automotive industry. Join a remote-first, pioneering team building AAIA and the Achtrex Core." theme="cyan" />

 {/* Core Values */}
 <section className="py-20 px-6">
 <div className="max-w-7xl mx-auto">
 <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE] mb-3">Our DNA</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-5">Built on Engineering Excellence.</h3>
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-[1.75]">
              At Achtrex, we value infrastructure-first thinking, AI-driven innovation, and the pursuit of data integrity across every layer of the automotive intelligence stack.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-8 h-8 text-[#00a9ce]" />,
                title: "Infrastructure First",
                desc: "We focus on the underlying protocols and data engines that power the world, not just the surface-level UI.",
                bg: "bg-slate-200/50"
              },
              {
                icon: <Zap className="w-8 h-8 text-[#F37021]" />,
                title: "High Velocity",
                desc: "We ship fast and iterate often. Our CI/CD pipelines are the heartbeat of our distributed laboratory.",
                bg: "bg-slate-200/50"
              },
              {
                icon: <Globe className="w-8 h-8 text-[#00a9ce]" />,
                title: "Global by Default",
                desc: "Our team spans continents. We operate in a follow-the-sun model to ensure continuous delivery.",
                bg: "bg-slate-200/50"
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-2xl ${value.bg} border border-slate-200/60 hover:border-slate-300 transition-all group`}
              >
                <div className="mb-8 p-4 bg-white rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h4>
                <p className="text-slate-700 text-sm leading-[1.7] font-normal">
                  {value.desc}
                </p>
              </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Culture Grid */}
 <section className="py-20 px-6 bg-[#001a22] text-white overflow-hidden relative">
 <div className="absolute top-0 right-0 w-[500px] h-full bg-[#00a9ce]/10 blur-[150px] pointer-events-none" />
 <div className="max-w-7xl mx-auto relative z-10">
 <div className="grid lg:grid-cols-2 gap-20 items-center">
 <div className="space-y-12">
 <header>
 <h2 className="text-[#00a9ce] text-sm font-black uppercase tracking-[0.4em] mb-4">Culture of Ownership</h2>
 <h3 className="text-3xl md:text-4xl font-bold leading-tight">Every architect is a <br /> stakeholder.</h3>
 </header>
 
 <div className="space-y-8">
 {[
 { title: "Remote-Native", desc: "Work from anywhere in the world. We optimize for results, not hours spent at a desk." },
 { title: "Elite Peer Group", desc: "Join some of the world's most talented engineers and data scientists." },
 { title: "Product Ownership", desc: "You don't just write code; you own a piece of the infrastructure you build." }
 ].map((item, i) => (
 <div key={i} className="flex gap-6 items-start">
 <div className="mt-1">
 <div className="w-6 h-6 rounded-none border border-[#00a9ce]/50 flex items-center justify-center">
 <div className="w-2 h-2 rounded-none bg-[#00a9ce]" />
 </div>
 </div>
 <div>
 <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
 <p className="text-slate-300 leading-relaxed">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>

 <div className="grid grid-cols-2 gap-4">
 <div className="space-y-4">
 <div className="relative aspect-[3/4] rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
 <Image src="/life-at-achtrex/collaborative.png" alt="Collab" fill className="object-cover" />
 </div>
 <div className="relative aspect-square rounded-none overflow-hidden bg-[#00a9ce]/20 flex items-center justify-center p-8 text-center">
 <p className="text-xs font-black uppercase tracking-widest text-[#00a9ce] leading-loose">"The architect represents the intelligence of the system."</p>
 </div>
 </div>
 <div className="space-y-4 pt-12">
 <div className="relative aspect-square rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
 <Image src="/life-at-achtrex/focused.png" alt="Focus" fill className="object-cover" />
 </div>
 <div className="relative aspect-[3/4] rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
 <Image src="/life-at-achtrex/Depth 7, Frame 0.png" alt="Work" fill className="object-cover" />
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Perks */}
      {/* Perks */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE] mb-2 block">The Benefits</span>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Engineered for your well-being.</h3>
            </div>
            <Link 
              href="/contact-us"
              className="btn-navbar-cta"
            >
              <span className="btn-navbar-cta-inner !py-3 !px-7 text-xs font-bold uppercase tracking-wider">
                <span>Join Our Team</span>
                <ArrowRight className="w-4 h-4 text-[#00A9CE]" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Global Mobility", icon: <Globe size={24} /> },
              { label: "Equity Options", icon: <Target size={24} /> },
              { label: "Health & Wellness", icon: <Heart size={24} /> },
              { label: "Learning Stipends", icon: <Sparkles size={24} /> },
              { label: "Modern Hardware", icon: <Cpu size={24} /> },
              { label: "Unlimited PTO", icon: <Zap size={24} /> },
              { label: "Retirement Plans", icon: <Shield size={24} /> },
              { label: "Annual Offsites", icon: <Users size={24} /> },
            ].map((perk, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#00A9CE]/40 transition-all flex flex-col items-center justify-center text-center gap-4 group">
                <div className="text-[#00A9CE] group-hover:scale-110 transition-transform">{perk.icon}</div>
                <span className="text-sm font-bold text-slate-800">{perk.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto relative rounded-3xl bg-gradient-to-r from-[#061420] to-[#0A2235] border border-white/10 overflow-hidden shadow-2xl p-8 sm:p-14 text-white">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-15 mix-blend-overlay pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE] mb-2 block">Career Opportunities</span>
              <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">Ready to architect the next era of mobility?</h2>
              <p className="text-slate-200 text-[15px] sm:text-base leading-[1.8] font-normal">
                We are actively looking for elite distributed systems engineers, automotive data specialists, and AI researchers. Send your resume or portfolio directly to our leadership desk.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a 
                href="mailto:careers@achtrex.com" 
                className="btn-navbar-cta"
              >
                <span className="btn-navbar-cta-inner !py-3.5 !px-8 text-xs font-black uppercase tracking-wider">
                  <span>careers@achtrex.com</span>
                  <ArrowRight className="w-4 h-4 text-[#00A9CE]" />
                </span>
              </a>
              <Link 
                href="/about-us" 
                className="btn-navbar-cta"
              >
                <span className="btn-navbar-cta-inner !py-3.5 !px-8 text-xs font-black uppercase tracking-wider">
                  <span>About Our Culture</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
