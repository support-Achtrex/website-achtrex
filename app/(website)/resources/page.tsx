import React from 'react';
import Link from 'next/link';
import { FileText, Newspaper, Target, ArrowRight } from 'lucide-react';
import { InnerPageHeader } from '@/components/inner-page-header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources & Insights | Achtrex',
  description: 'Explore technical publications, architecture case studies, press releases, and engineering blueprints from Achtrex.',
  keywords: ['Achtrex Resources', 'Automotive Whitepapers', 'Engineering Case Studies', 'Newsroom', 'Software Blueprints'],
  openGraph: {
    title: 'Resources & Insights | Achtrex',
    description: 'Explore technical publications, architecture case studies, press releases, and engineering blueprints from Achtrex.',
    images: ['/projects/aaia_ui_v2.png'],
  }
};

const mainResources = [
  { 
    label: 'Engineering Blog', 
    kicker: 'Technical Deep Dives',
    description: 'Deep dives, architectural decisions, and our approach to building high-velocity automotive and AI platforms.', 
    href: '/blog', 
    icon: FileText,
    accent: '#00a9ce',
    actionText: 'Read Articles'
  },
  { 
    label: 'Newsroom & Press', 
    kicker: 'Company Updates',
    description: 'Official corporate announcements, product launches, partnership milestones, and media coverage.', 
    href: '/press-release', 
    icon: Newspaper,
    accent: '#76bc1d',
    actionText: 'View Newsroom'
  },
  { 
    label: 'Solutions & Services', 
    kicker: 'Core Pillars',
    description: 'Explore bespoke automotive software builds, domain-trained cognitive AI diagnostics, and strategic operational consultation.', 
    href: '/services', 
    icon: Target,
    accent: '#0284c7',
    actionText: 'Explore Solutions'
  }
];

const technicalGuides = [
  {
    title: 'Bespoke Automotive Software Architecture',
    description: 'Custom workshop systems, dealer management platforms, and high-velocity workflow architecture.',
    tag: 'Software Builds',
    href: '/services'
  },
  {
    title: 'AAIA Autonomous Reasoning Architecture',
    description: 'Overview of cognitive AI models powering multi-modal vehicle diagnostics and predictive maintenance.',
    tag: 'Cognitive AI',
    href: '/blog/future-of-automotive-software-systems'
  },
  {
    title: 'Automotive Operations & Strategy Blueprint',
    description: 'Enterprise consulting frameworks for workshop efficiency, repair diagnostics, and business transformation.',
    tag: 'Advisory Blueprint',
    href: '/contact-us'
  }
];

export default function ResourcesPage() {
  return (
    <main className="w-full min-h-screen bg-[#f8fafc] pb-24 text-slate-900 font-sans">
      {/* Header */}
      <InnerPageHeader 
        title="Resources & Insights" 
        subtitle="Explore our latest engineering publications, industry newsroom announcements, and real-world automotive architecture case studies." 
        theme="purple" 
      />

      <div className="max-w-[1280px] mx-auto px-6 pt-16 space-y-16">
        {/* Main Resource Cards Grid */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1.5 h-6 bg-[#00a9ce] rounded-full" />
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Primary Publications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainResources.map((res, idx) => {
              const Icon = res.icon;
              return (
                <Link 
                  key={idx} 
                  href={res.href} 
                  className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 opacity-5 rounded-bl-full transition-transform group-hover:scale-150" style={{ backgroundColor: res.accent }} />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm"
                        style={{ backgroundColor: `${res.accent}15`, color: res.accent }}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span 
                        className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md"
                        style={{ backgroundColor: `${res.accent}15`, color: res.accent }}
                      >
                        {res.kicker}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#00a9ce] transition-colors">
                      {res.label}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm font-medium">
                      {res.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 font-bold text-sm" style={{ color: res.accent }}>
                    <span>{res.actionText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Technical Guides & Documentation Highlights */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-500 mb-1 block">Engineering & Architecture Hub</span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Technical Specifications & Blueprints</h2>
            </div>
            <Link 
              href="/contact-us"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-700 hover:text-[#00a9ce] transition-colors self-start sm:self-auto"
            >
              Request Custom Blueprint <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalGuides.map((guide, idx) => (
              <Link 
                key={idx} 
                href={guide.href}
                className="group p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#00a9ce]/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded inline-block mb-3">
                    {guide.tag}
                  </span>
                  <h4 className="text-base font-black text-slate-900 mb-2 group-hover:text-[#00a9ce] transition-colors leading-snug">
                    {guide.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    {guide.description}
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-[#00a9ce] transition-colors">
                  <span>Explore Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="relative rounded-2xl bg-gradient-to-r from-[#061420] to-[#0A2235] border border-white/10 overflow-hidden shadow-2xl p-8 sm:p-12 text-white">
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight">Need dedicated automotive advisory?</h3>
              <p className="text-slate-300 text-sm sm:text-base font-medium max-w-xl">
                Partner with our systems engineers and automotive consultants to build custom software and AI diagnostics.
              </p>
            </div>
            <Link 
              href="/contact-us" 
              className="px-8 py-3.5 rounded-full font-black text-sm bg-logo-gradient text-white hover:scale-105 transition-all shadow-lg shrink-0"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
