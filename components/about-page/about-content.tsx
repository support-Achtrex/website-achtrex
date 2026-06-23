'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const AboutContent = () => {

  const platforms = [
    {
      accent: '#00a9ce',
      bg: 'bg-white hover:bg-[#00a9ce]/5',
      border: 'border-slate-200 hover:border-[#00a9ce]/50',
      dot: 'bg-[#00a9ce]',
      statusText: 'text-sky-400',
      statusBg: 'bg-sky-900/30 border-sky-500/30',
      name: 'Automotive Data & APIs',
      tagline: 'AutomotiveDataset.com',
      desc: 'Enterprise VIN intelligence, vehicle specifications, and fitment APIs querying over 2.5 million live records for absolute data superiority.',
      tags: ['VIN Decoding', 'Specs API', 'Fitment Data', 'Market Values'],
      href: 'https://automotivedataset.com',
      external: true,
    },
    {
      accent: '#76bc1d',
      bg: 'bg-white hover:bg-[#76bc1d]/5',
      border: 'border-slate-200 hover:border-[#76bc1d]/50',
      dot: 'bg-[#76bc1d]',
      statusText: 'text-violet-400',
      statusBg: 'bg-violet-900/30 border-violet-500/30',
      name: 'Sales & Inventory Management',
      tagline: 'Frictionless Operations',
      desc: 'Structural sales ecosystems that streamline dealership operations, eliminating manual data entry and replacing it with real-time, automated tracking.',
      tags: ['Dealership Ops', 'Inventory Sync', 'Automated Tracking', 'Retail'],
      href: '/products/automotive',
      external: false,
    },
    {
      accent: '#001a22',
      bg: 'bg-white hover:bg-[#001a22]/5',
      border: 'border-slate-200 hover:border-[#001a22]/50',
      dot: 'bg-[#001a22]',
      statusText: 'text-emerald-400',
      statusBg: 'bg-emerald-900/30 border-emerald-500/30',
      name: 'Custom Software Development',
      tagline: 'Enterprise Platforms',
      desc: 'Bespoke, resilient, and highly-scalable enterprise platforms engineered from the ground up to ensure absolute technical autonomy and zero vendor lock-in.',
      tags: ['Bespoke Systems', 'No Lock-In', 'Enterprise Cloud', 'SaaS'],
      href: '/services',
      external: false,
    },
    {
      accent: '#053787',
      bg: 'bg-white hover:bg-[#053787]/5',
      border: 'border-slate-200 hover:border-[#053787]/50',
      dot: 'bg-[#053787]',
      statusText: 'text-blue-400',
      statusBg: 'bg-blue-900/30 border-blue-500/30',
      name: 'AI Solutions (LUMI)',
      tagline: 'Cognitive Workflows',
      desc: 'A powerful communications platform leveraging advanced LLMs and neural processing to execute complex autonomous business logic across your enterprise.',
      tags: ['LLMs', 'Cognitive Processing', 'Workflow Automation', 'NLP'],
      href: '/products/lumi',
      external: false,
    },
  ];

  const values = [
    { label: 'Infrastructure-First', icon: '⬡' },
    { label: 'Data Accuracy', icon: '◈' },
    { label: 'Developer Experience', icon: '⌗' },
    { label: 'Enterprise Reliability', icon: '◉' },
    { label: 'AI-Driven Innovation', icon: '◆' },
    { label: 'Scalability by Design', icon: '⬢' },
    { label: 'Customer-Centric', icon: '◎' },
    { label: 'Sales & Inventory', icon: '⟳' },
  ];

  const expertise = [
    'Automotive Engineering', 
    'System Architecture',
    'Vehicle Diagnostics',
    'Technical Training',
    'Data Validation',
    'Database Engineering',
    'Data Orchestration',
    'Technical Sales',
    'Account Management',
    'Managerial Leadership',
    'Cross-Functional Leadership',
    'Enterprise Integration',
    'API Architecture', 
    'Microservices Architecture',
    'Cloud Infrastructure',
    'AI Infrastructure',
    'Predictive Analytics',
    'Dealership Operations',
    'SaaS Development',
    'Automotive Research & Consulting'
  ];

  return (
    <div className="bg-transparent text-slate-900 font-sans antialiased min-h-screen pb-16">
      
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden pt-10 pb-10 px-6 bg-transparent">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-[1200px] mx-auto text-center flex flex-col items-center">

          <div className="text-[14px] md:text-[15px] text-slate-500 max-w-4xl leading-relaxed font-medium mb-8 text-center space-y-4">
            <p>
              Achtrex is fundamentally re-architecting how businesses interact with data, inventory, software, and artificial intelligence. Founded on the principle that modern enterprises require more than just disconnected silos of information, we build vertically integrated platforms that transform fragmented operations into unified, actionable, real-time intelligence.
            </p>
            <p>
              Our ecosystem provides businesses with an absolute structural advantage through four core pillars. First, our <strong>Automotive Data & APIs</strong> grant instantaneous, robust access to comprehensive VIN intelligence and market valuations via a single streamlined interface. Second, our <strong>Sales & Inventory Management</strong> tools streamline dealership and retail operations, drastically reducing manual overhead through autonomous tracking.
            </p>
            <p>
              Third, our <strong>Custom Software Development</strong> division engineers bespoke, zero-compromise enterprise platforms that scale infinitely without third-party vendor lock-in. Finally, our <strong>LUMI AI Solutions</strong> transition enterprises from static tools to truly autonomous cognitive workflows, leveraging advanced LLMs to process complex business logic. Together, these pillars form the mission-critical foundation required to build, scale, and dominate in the intelligent digital economy.
            </p>
          </div>

          {/* Quick stats row */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
            {[
              { n: '20M+', label: 'Vehicle Records', color: 'bg-white', border: 'border-slate-200' },
              { n: '99.99%', label: 'Uptime SLA', color: 'bg-white', border: 'border-slate-200' },
              { n: '50ms', label: 'Avg API Latency', color: 'bg-white', border: 'border-slate-200' },
              { n: 'Tier 1', label: 'Enterprise Security', color: 'bg-white', border: 'border-slate-200' },
            ].map((s, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className={`border ${s.border} rounded-xl px-4 py-6 flex flex-col items-center justify-center relative overflow-hidden ${s.color} hover:shadow-md transition-shadow`}>
                <p className="text-[32px] font-black text-[#00a9ce] leading-none mb-2">{s.n}</p>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ─── LIFESTYLE IMAGE ─────────────────────────────────────────── */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-[1200px] mx-auto px-6 pt-4 pb-10">
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl group">
          <Image 
            src="/images/corporate_team_1.png" 
            alt="Achtrex team collaborating in a modern office" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001a22] via-[#001a22]/30 to-transparent opacity-90" />
          <div className="absolute bottom-8 left-8 md:left-12">
            <p className="text-white font-black text-2xl md:text-3xl tracking-tight mb-1">Engineering the Future</p>

          </div>
        </div>
      </motion.div>

      {/* ─── DENSE BENTO LAYOUT ────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10 flex flex-col gap-10">
        
        {/* ROW 1 & 2: Leadership then Core Values */}
        <div className="flex flex-col gap-8">
          
          {/* Leadership */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4">
            <div className="px-2 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#00a9ce] rounded-full"></div>
              <h2 className="text-[22px] font-black text-slate-900 tracking-tight">Leadership</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00a9ce]/5 rounded-bl-full -z-0"></div>
              
              {/* Left Column: Image & Tags */}
              <div className="relative z-10 w-full md:w-72 shrink-0 flex flex-col gap-5">
                <div className="rounded-xl overflow-hidden bg-slate-100 shadow-inner w-full">
                  <Image src="/team/achim_real.jpg" alt="Godwin Achim Tetteh" width={400} height={600} className="w-full h-auto object-cover" priority />
                </div>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-full text-[12px] font-bold text-slate-700 shadow-sm leading-tight">{t}</span>
                  ))}
                </div>
              </div>

              {/* Right Column: Bio */}
              <div className="flex flex-col relative z-10 flex-1">
                <h3 className="text-xl font-black text-slate-900">Godwin Achim Tetteh</h3>
                <p className="text-[12px] font-bold uppercase tracking-widest text-[#00a9ce] mb-3">Founder & System Architect</p>
                <div className="text-[14px] text-slate-600 leading-relaxed font-medium mb-4 space-y-4">
                  <p>
                    Godwin’s architectural vision is rooted in a rare, end-to-end mastery of the automotive ecosystem. He began his career as a hands-on Automotive Engineer, directly diagnosing and engineering complex vehicle mechanical and electrical systems. Recognizing a critical knowledge gap in the sector, he transitioned into an Automotive Trainer, educating over 800 technicians and students on advanced vehicle systems and modern diagnostics.
                  </p>
                  <p>
                    His deep mechanical expertise naturally evolved into systemic problem-solving. Serving as a Data Validation Officer and in Technical Sales, Godwin rigorously mastered the complex requirements of automotive data. He began architecting bespoke software systems designed to solve the exact operational bottlenecks he had witnessed firsthand in repair shops and industrial environments.
                  </p>
                  <p>
                    This foundation propelled him into high-level Account Management and Consulting, where he advised developers, startups, and large-scale enterprises seeking robust automotive databases and APIs. Through extensive independent research and contracting, he realized the industry's greatest barrier was data fragmentation, leading directly to the founding of Achtrex to architect the definitive data and software infrastructure for the connected mobility era.
                  </p>
                  <div className="bg-[#00a9ce]/5 border border-[#00a9ce]/10 p-5 rounded-xl mt-6 italic text-slate-700 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00a9ce]"></div>
                    <span className="font-black text-[#00a9ce] not-italic block mb-2 text-[15px]">My Word to the Industry:</span>
                    "For decades, the automotive world has been defined by physical engineering, but tomorrow will be defined by systemic intelligence. We are moving past the era where data was merely a byproduct of operations; today, data is the engine itself. My architectural philosophy is simple: software should not dictate how a business runs; it should invisibly empower how a business dominates. At Achtrex, we go beyond delivering consulting and providing Data. By unifying granular automotive intelligence, autonomous sales and inventory ecosystems, bespoke enterprise software, and cognitive AI workflows, we are engineering the complete central nervous system of the modern business. We eliminate structural friction entirely, so you can engineer the future."
                  </div>
                  <p className="mt-5">
                    Godwin’s leadership is defined by this relentless pursuit of architectural perfection. He believes that true innovation happens exclusively at the intersection of raw mechanical understanding and elite software engineering. As Founder and System Architect, he remains deeply involved in the systemic design of Achtrex’s infrastructure, ensuring that every product, from the deepest VIN database query to the most complex cognitive AI workflow, meets his uncompromising standard of absolute operational superiority.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4">
            <div className="px-2 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#76bc1d] rounded-full"></div>
              <h2 className="text-[22px] font-black text-slate-900 tracking-tight">Core Values</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {values.map((v, i) => (
                <div key={i} className="group flex flex-col items-center justify-center gap-3 p-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm hover:shadow-md hover:border-[#76bc1d]/30 text-center">
                  <span className="text-3xl text-[#76bc1d] leading-none font-mono group-hover:scale-110 transition-transform">{v.icon}</span>
                  <span className="text-[14px] font-bold text-slate-700">{v.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ROW 2: Foundation (2x2 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-8 shadow-sm flex flex-col hover:border-[#00a9ce]/50 hover:shadow-lg transition-all relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#00a9ce]/10 rounded-full blur-xl group-hover:bg-[#00a9ce]/20 transition-all"></div>
            <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Our Mission</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
              To provide scalable enterprise infrastructure that enables businesses to access intelligent data, custom software platforms, and real-time AI solutions through secure, modern digital architectures.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-8 shadow-sm flex flex-col hover:border-[#76bc1d]/50 hover:shadow-lg transition-all relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#76bc1d]/10 rounded-full blur-xl group-hover:bg-[#76bc1d]/20 transition-all"></div>
            <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Our Vision</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
              To build one of the world's leading technology ecosystems, powering the future of connected intelligence, zero-compromise software, and autonomous enterprise workflows.
            </p>
          </motion.div>

          {/* Fragmentation Gap */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm hover:shadow-lg hover:border-slate-300 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">Industry Fragmentation</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Data, inventory, and operations live in disconnected, legacy silos',
                'Off-the-shelf software fails under modern enterprise scalability demands',
                'Businesses need 5–10 vendors to get a complete data & software solution',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-slate-600 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <span className="mt-1 w-2 h-2 rounded-full bg-slate-400 shrink-0 shadow-sm" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Achtrex Solution */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm hover:shadow-lg hover:border-[#00a9ce]/50 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">The Achtrex Solution</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Automotive Data & APIs, massive intelligence via one enterprise endpoint',
                'Sales & Inventory, automated tracking replacing manual entry',
                'Custom Software, bespoke, scalable, zero vendor lock-in platforms',
                'LUMI AI, cognitive workflow automation powered by advanced LLMs'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-slate-600 font-medium bg-[#00a9ce]/5 p-3 rounded-lg border border-[#00a9ce]/10">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#00a9ce] shrink-0 shadow-sm" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ROW 3: Platform Ecosystem */}
        <div className="flex flex-col gap-4 mt-8">
          <div className="px-2 flex items-center gap-2">
             <div className="w-1.5 h-6 bg-slate-900 rounded-full"></div>
            <h2 className="text-[22px] font-black text-slate-900 tracking-tight">Platform Ecosystem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((p, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                key={i} 
                className={`group flex flex-col rounded-2xl border ${p.bg} ${p.border} p-8 transition-all shadow-sm hover:shadow-xl relative overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 transition-transform group-hover:scale-150`} style={{ backgroundColor: p.accent }}></div>
                <h3 className="text-[18px] font-black text-slate-900 mb-3 tracking-tight relative z-10">{p.name}</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed font-medium flex-1 mb-6 relative z-10">{p.desc}</p>
                
                {p.external ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[14px] font-bold transition-all group-hover:gap-3 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm self-start"
                    style={{ color: p.accent }}>
                    Visit platform <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                ) : (
                  <Link href={p.href}
                    className="inline-flex items-center gap-2 text-[14px] font-bold transition-all group-hover:gap-3 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm self-start"
                    style={{ color: p.accent }}>
                    Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-gradient-to-r from-[#061420] to-[#0A2235] border border-white/10 overflow-hidden shadow-2xl mt-10 mb-10">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a9ce]/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-10 md:p-12 text-center sm:text-left">
            <div>
              <h2 className="text-[28px] font-black text-white mb-3 tracking-tight drop-shadow-md">Ready to build on Achtrex?</h2>
              <p className="text-[16px] text-slate-300 font-medium">
                Contact our team to discuss integration at <a href="mailto:support@achtrex.com" className="text-[#00a9ce] hover:text-white font-bold transition-colors">support@achtrex.com</a>
              </p>
            </div>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 bg-logo-gradient text-white font-bold text-[15px] px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,169,206,0.4)] shrink-0 border-0 group">
              Contact Us
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
