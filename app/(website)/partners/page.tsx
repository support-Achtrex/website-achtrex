'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Puzzle,
  Headphones,
  Tag,
  Code2,
  BarChart3,
  CheckCircle2,
  Star,
  Mail
} from 'lucide-react';
import PartnerForm from './PartnerForm';

// ─── DATA ──────────────────────────────────────────────────────────────────────

const tabs = ['Who Can Join', 'Prove Your Expertise', 'Scale It'];

const whoCanJoin = {
  title: 'Market roles',
  description: 'The Achtrex Partner Program is open to organizations across the global automotive technology value chain.',
  roles: [
    {
      icon: <Puzzle className="w-5 h-5" />,
      label: 'System Integrators',
      desc: 'Companies that integrate Achtrex APIs and data infrastructure into existing dealer, workshop, or fleet management ecosystems.'
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      label: 'Consultants',
      desc: 'Automotive technology advisors and domain experts that guide clients on Achtrex solutions, VIN data standards, and digital retailing strategy.'
    },
    {
      icon: <Tag className="w-5 h-5" />,
      label: 'Resellers',
      desc: 'Companies that commercially distribute and resell Achtrex platform licenses and automotive data subscriptions to end clients.'
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      label: 'ISV / SaaS Developers',
      desc: 'Independent software vendors building on top of the Achtrex API layer to create specialized applications for the aftermarket.'
    }
  ]
};

const proveExpertise = {
  title: 'Demonstrate & certify your capabilities',
  description: 'Partners are evaluated on their technical depth, market reach, and delivery track record. Certified Partners receive elevated co-marketing and sales support.',
  steps: [
    { num: '01', title: 'Technical Onboarding', detail: 'Complete the Achtrex API Integration Certification — covering VIN decoding, DMS sync endpoints, and vehicle specification query interfaces.' },
    { num: '02', title: 'Market Validation', detail: 'Submit a client reference or pilot use case demonstrating live deployment of an Achtrex-powered workflow in a real automotive business context.' },
    { num: '03', title: 'Partner Review', detail: 'Our Partner Success team evaluates your submission and onboards you at the appropriate tier (Registered, Certified, or Strategic).' },
    { num: '04', title: 'Joint Go-To-Market', detail: 'Co-create a joint GTM plan including co-branded assets, shared pipeline tracking, and joint event participation in your region.' }
  ]
};

const scaleIt = {
  title: 'Grow with the Achtrex ecosystem',
  description: 'Certified and Strategic partners receive exclusive benefits designed to scale their automotive technology practice and revenue.',
  benefits: [
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Revenue Share & Referral Rewards', detail: 'Earn competitive deal registration credits and recurring commission on client renewals for your active fleet of Achtrex accounts.' },
    { icon: <CheckCircle2 className="w-5 h-5" />, title: 'Partner Portal Access', detail: 'Access exclusive co-marketing collateral, API sandbox environments, early product roadmap previews, and a dedicated Slack partner channel.' },
    { icon: <Star className="w-5 h-5" />, title: 'Co-Marketing Programs', detail: 'Participate in Achtrex regional roadshows, thought leadership webinars, partner spotlights on achtrex.com, and IAM industry events.' },
    { icon: <Mail className="w-5 h-5" />, title: 'Dedicated Partner Support', detail: 'Direct access to a named Partner Success Manager, priority SLA, and technical escalation routing on all Achtrex platform deployments.' }
  ]
};

const testimonials = [
  {
    quote: 'Partnering with Achtrex was a decisive step for our DMS connectivity strategy. Their VIN intelligence APIs are the most accurate in the region and the integration support team is unmatched.',
    author: 'Mohammed Al-Rasheed',
    title: 'Chief Technology Officer'
  },
  {
    quote: 'By integrating the Achtrex Automotive Data API into our platform, we now offer buyers real-time factory spec sheets and market valuations. Our listing conversion rate improved by over 30%.',
    author: 'Priya Narayanan',
    title: 'Head of Product'
  },
  {
    quote: 'The Achtrex partnership program gave us a structured pathway to become a premier automotive data consultant. The certification program is rigorous and the client recognition is exceptional.',
    author: 'Kwame Asante',
    title: 'Executive Director & Solution Architect'
  }
];

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────────

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const prevTestimonial = () => setTestimonialIndex(i => (i === 0 ? testimonials.length - 1 : i - 1));
  const nextTestimonial = () => setTestimonialIndex(i => (i === testimonials.length - 1 ? 0 : i + 1));

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus('loading');
    await new Promise(r => setTimeout(r, 1200));
    setNewsletterStatus('success');
    setNewsletterEmail('');
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden pt-32 sm:pt-36 font-sans">

      {/* ─── HERO HEADER ─────────────────────────────────────────────────── */}
      <section className="max-w-[1240px] mx-auto px-6 pt-10 pb-2 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE] mb-2 block"
        >
          Achtrex Partner Program
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight"
        >
          Become a Partner
        </motion.h1>

        {/* Brand Gradient Underline */}
        <div className="w-20 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] rounded-full mx-auto mt-3 mb-5" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-slate-800 text-[15px] sm:text-base max-w-2xl mx-auto leading-[1.8] font-normal"
        >
          Grow your legitimacy, visibility, portfolio, and revenue with the Achtrex Partner Program — the official ecosystem for automotive data and technology specialists worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href="#partner-apply-form"
            className="btn-navbar-cta"
          >
            <span className="btn-navbar-cta-inner">
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 text-[#00A9CE]" />
            </span>
          </a>
          <Link
            href="/contact-us"
            className="btn-navbar-cta"
          >
            <span className="btn-navbar-cta-inner">
              <span>Talk to Partner Team</span>
            </span>
          </Link>
        </motion.div>
      </section>

      {/* ─── STATS STRIP ─────────────────────────────────────────────────── */}
      <section className="max-w-[1240px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { num: '40+', label: 'Countries Active' },
            { num: '3', label: 'Partner Tiers' },
            { num: '20M+', label: 'Vehicle Records Accessible' },
            { num: '99.99%', label: 'Platform API Uptime SLA' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-6 text-center"
            >
              <span className="block text-3xl sm:text-4xl font-black text-slate-900 mb-1">{stat.num}</span>
              <span className="text-xs text-slate-500 font-medium leading-tight">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── TABBED PROGRAM SECTIONS ─────────────────────────────────────── */}
      <section className="max-w-[1240px] mx-auto px-6 pb-20">
        
        {/* Tab bar */}
        <div className="border border-slate-200/90 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <div className="flex border-b border-slate-200/80 bg-white overflow-x-auto scrollbar-none">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 min-w-max px-6 sm:px-10 py-4 text-xs sm:text-[13px] font-bold transition-all relative whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab}
                  {isActive && (
                    <motion.div
                      layoutId="partnerTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#F37021] to-[#00A9CE] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-white p-6 sm:p-10 lg:p-12">
            <AnimatePresence mode="wait">

              {/* Tab 1: Who Can Join */}
              {activeTab === 0 && (
                <motion.div
                  key="who"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
                >
                  {/* Left text */}
                  <div className="lg:col-span-6 space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {whoCanJoin.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-lg">
                      {whoCanJoin.description}
                    </p>

                    <div className="space-y-5 pt-2">
                      {whoCanJoin.roles.map((role, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F37021] to-[#00A9CE] shrink-0 mt-2" />
                          <div>
                            <p className="text-sm font-bold text-slate-900">{role.label}</p>
                            <p className="text-xs text-slate-500 font-normal leading-relaxed mt-0.5">{role.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Icon Graphic */}
                  <div className="lg:col-span-6 flex justify-center">
                    <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl bg-[#F8FAFC] border border-slate-200/70 flex items-center justify-center overflow-hidden shadow-inner p-8">
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F37021] to-[#00A9CE] rounded-b-2xl" />

                      <div className="grid grid-cols-4 gap-4 w-full">
                        {[
                          { icon: <Puzzle className="w-8 h-8" />, label: 'System\nIntegrators' },
                          { icon: <Headphones className="w-8 h-8" />, label: 'Consultants' },
                          { icon: <Tag className="w-8 h-8" />, label: 'Resellers' },
                          { icon: <Code2 className="w-8 h-8" />, label: 'ISV\nDevelopers' }
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center gap-2 bg-white rounded-xl border border-slate-200/90 p-3 shadow-sm text-center"
                          >
                            <div className="text-slate-600">{item.icon}</div>
                            <span className="text-[9px] font-bold text-slate-600 uppercase tracking-wide leading-tight whitespace-pre-wrap text-center">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: Prove Your Expertise */}
              {activeTab === 1 && (
                <motion.div
                  key="prove"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {proveExpertise.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mt-2 mb-6">
                      {proveExpertise.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {proveExpertise.steps.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.06 }}
                        className="flex gap-4 p-5 rounded-xl border border-slate-200/90 bg-[#F8FAFC] hover:border-[#00A9CE]/40 hover:bg-white transition-all"
                      >
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE] leading-none shrink-0">{step.num}</span>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed font-normal">{step.detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Scale It */}
              {activeTab === 2 && (
                <motion.div
                  key="scale"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {scaleIt.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mt-2 mb-6">
                      {scaleIt.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {scaleIt.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.06 }}
                        className="flex gap-4 p-5 rounded-xl border border-slate-200/90 bg-[#F8FAFC] hover:border-[#00A9CE]/40 hover:bg-white transition-all"
                      >
                        <span className="text-[#F37021] shrink-0 mt-0.5">{benefit.icon}</span>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-slate-900">{benefit.title}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed font-normal">{benefit.detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

      </section>

      {/* ─── PARTNER TIERS ───────────────────────────────────────────────── */}
      <section className="w-full bg-[#F8FAFC] border-y border-slate-200/80 py-16 px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 block mb-1">Partner Tiers</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Three levels of partnership</h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] rounded-full mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tier: 'Registered',
                badge: 'Entry Level',
                perks: [
                  'Access to partner portal & API sandbox',
                  'Standard Achtrex co-branded collateral',
                  'Community Slack channel access',
                  'Basic deal registration'
                ]
              },
              {
                tier: 'Certified',
                badge: 'Most Popular',
                featured: true,
                perks: [
                  'Everything in Registered',
                  'Technical certification badge',
                  'Named Partner Success Manager',
                  'Co-marketing campaigns & case studies',
                  'Prioritized SLA & escalation support',
                  'Revenue share & referral commissions'
                ]
              },
              {
                tier: 'Strategic',
                badge: 'Enterprise',
                dark: true,
                perks: [
                  'Everything in Certified',
                  'Joint product roadmap input',
                  'Dedicated partner engineering support',
                  'Executive sponsor access',
                  'Joint press releases & analyst briefs',
                  'Custom commercial terms'
                ]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`relative rounded-2xl border p-7 flex flex-col shadow-sm ${
                  item.dark
                    ? 'bg-[#1E2226] border-white/10 text-white'
                    : item.featured
                    ? 'bg-white border-[#00A9CE]/40 text-slate-900 shadow-md'
                    : 'bg-[#F8FAFC] border-slate-200/80 text-slate-900'
                }`}
              >
                {item.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="btn-navbar-cta">
                      <span className="btn-navbar-cta-inner !py-1 !px-3 !text-[10px] !uppercase !tracking-wider">
                        {item.badge}
                      </span>
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <div className="w-10 h-1 rounded-full mb-3 bg-gradient-to-r from-[#F37021] to-[#00A9CE]" />
                  <span className={`text-[10px] font-black uppercase tracking-widest ${item.dark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {!item.featured ? item.badge : ''}
                  </span>
                  <h3 className={`text-xl font-extrabold mt-0.5 ${item.dark ? 'text-white' : 'text-slate-900'}`}>
                    {item.tier} Partner
                  </h3>
                </div>

                <ul className="space-y-2.5 flex-1">
                  {item.perks.map((perk, pidx) => (
                    <li key={pidx} className="flex items-start gap-2 text-xs font-normal leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#00A9CE]" />
                      <span className={item.dark ? 'text-slate-300' : 'text-slate-600'}>{perk}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#partner-apply-form"
                  className="mt-7 btn-navbar-cta"
                >
                  <span className="btn-navbar-cta-inner !py-2.5 !px-5 !text-xs !uppercase !tracking-wider">
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00A9CE]" />
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="w-full bg-[#F0F2F5] border-b border-slate-200/70 py-16 px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 block mb-1">Partner Success Stories</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Testimonials from latest Partners
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] rounded-full mx-auto mt-3 mb-3" />
            <p className="text-sm text-slate-500 font-normal max-w-xl mx-auto">
              The newest Achtrex Partners share their perspective on being part of the community.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Large quote marks */}
            <span className="absolute -top-4 -left-2 sm:-left-8 text-slate-200 text-8xl font-black leading-none select-none">"</span>
            <span className="absolute -bottom-4 -right-2 sm:-right-8 text-slate-200 text-8xl font-black leading-none select-none rotate-180">"</span>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8 sm:p-10 text-center"
              >
                <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed font-normal mb-6 max-w-2xl mx-auto">
                  "{testimonials[testimonialIndex].quote}"
                </p>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{testimonials[testimonialIndex].author}</p>
                  <p className="text-xs text-slate-500 font-normal mt-0.5">
                    {testimonials[testimonialIndex].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-8 h-8 rounded-full border border-slate-300 hover:border-[#00A9CE] hover:text-[#00A9CE] flex items-center justify-center text-slate-500 transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`rounded-full transition-all cursor-pointer ${
                      idx === testimonialIndex ? 'w-6 h-2.5 bg-gradient-to-r from-[#F37021] to-[#00A9CE]' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-8 h-8 rounded-full border border-slate-300 hover:border-[#00A9CE] hover:text-[#00A9CE] flex items-center justify-center text-slate-500 transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER STRIP ────────────────────────────────────────────── */}
      <section className="max-w-[1240px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Text */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Stay informed on IAM developments
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Receive updates on the latest Achtrex Partner Program activities, global aftermarket industry developments, data standards evolution, and insights shaping the independent automotive ecosystem.
            </p>

            {newsletterStatus === 'success' ? (
              <div className="flex items-center gap-2 text-emerald-700 text-sm font-bold bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Thank you for joining.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex items-center gap-2 mt-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  placeholder="Your work email address"
                  className="flex-1 py-3 px-3.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00A9CE] transition-colors font-medium"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="shrink-0 btn-navbar-cta disabled:opacity-60"
                >
                  <span className="btn-navbar-cta-inner !py-2.5 !px-5 !text-xs !uppercase !tracking-wider">
                    {newsletterStatus === 'loading' ? 'Subscribing...' : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#00A9CE]" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Laptop / Newsletter Graphic */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] aspect-[16/10] flex items-end justify-center">

              {/* Gradient vertical accent bar */}
              <div className="absolute right-12 bottom-0 w-7 h-4/5 bg-gradient-to-t from-[#00A9CE] to-[#F37021] rounded-t-md z-0" />

              {/* Paper airplane */}
              <svg viewBox="0 0 50 50" className="absolute right-4 top-10 w-10 h-10 text-slate-400 opacity-60" fill="none">
                <path d="M5 25 L45 5 L32 45 L20 30 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M20 30 L45 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 30 L22 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>

              {/* Laptop wireframe illustration */}
              <svg viewBox="0 0 500 320" className="relative z-10 w-full h-auto drop-shadow-lg" fill="none">
                <rect x="50" y="250" width="400" height="30" rx="4" fill="#E2E8F0" />
                <rect x="40" y="277" width="420" height="10" rx="5" fill="#CBD5E1" />
                <rect x="100" y="30" width="300" height="225" rx="8" fill="#1E293B" />
                <rect x="108" y="38" width="284" height="210" rx="4" fill="#F8FAFC" />

                {/* Newsletter layout wireframe on screen */}
                <rect x="116" y="46" width="268" height="20" rx="3" fill="#E2E8F0" />
                <rect x="120" y="50" width="80" height="12" rx="2" fill="#F37021" opacity="0.7" />

                {[72, 98, 124, 150, 176].map((y, i) => (
                  <g key={i}>
                    <rect x="116" y={y} width={i % 2 === 0 ? 268 : 220} height="10" rx="2" fill="#E2E8F0" />
                    <rect x="116" y={y + 14} width={180 + i * 10} height="10" rx="2" fill="#E2E8F0" opacity="0.6" />
                  </g>
                ))}

                <rect x="116" y="200" width="200" height="22" rx="4" fill="#E2E8F0" />
                <rect x="322" y="200" width="70" height="22" rx="4" fill="#00A9CE" />
                <text x="342" y="215" fill="#FFFFFF" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Subscribe</text>
              </svg>

            </div>
          </div>

        </div>
      </section>

      {/* ─── APPLICATION FORM ────────────────────────────────────────────── */}
      <section className="w-full bg-[#F8FAFC] border-t border-slate-200/80 py-16 px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE] block mb-1">
              Official Application
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Apply for Partnership
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] rounded-full mx-auto mt-3 mb-3" />
            <p className="text-sm text-slate-500 font-normal max-w-xl mx-auto">
              Submit your application and our Partner Management Team will respond within 1–2 business days. All communications land at <strong className="text-slate-700">support@achtrex.com</strong>.
            </p>
          </div>

          <PartnerForm />
        </div>
      </section>

    </main>
  );
}
