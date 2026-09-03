'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const iconServices = [
  {
    id: 1,
    title: 'Multilingual Data Management',
    link: '/products/automotive',
    icon: (
      <svg className="w-7 h-7 text-slate-700 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M7 10h4M9 8v6M13 14l3-6 3 6M14 12h4" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Automotive Technical Helpline',
    link: '/contact-us',
    icon: (
      <svg className="w-7 h-7 text-slate-700 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="8" cy="7" r="3" />
        <circle cx="16" cy="17" r="3" />
        <path d="M8 10v7a2 2 0 002 2h4M16 14V7a2 2 0 00-2-2h-4" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Customized services',
    link: '/products/enterprise-platforms',
    icon: (
      <svg className="w-7 h-7 text-slate-700 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="7" y1="9" x2="17" y2="9" />
        <line x1="7" y1="15" x2="17" y2="15" />
        <circle cx="10" cy="9" r="1.5" fill="#334155" />
        <circle cx="14" cy="15" r="1.5" fill="#334155" />
      </svg>
    )
  },
  {
    id: 4,
    title: '100% White Label',
    link: '/services/ai-training',
    icon: (
      <svg className="w-7 h-7 text-slate-700 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2l2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 14.24l-4.8 2.52.92-5.34-3.88-3.78 5.36-.78L12 2z" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="2.1" y2="2.1" />
        <line x1="19.07" y1="4.93" x2="21.9" y2="2.1" />
      </svg>
    )
  }
];

export const ConsultationBar = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-[#E5E9E8] py-14 font-sans text-slate-800 border-t border-slate-300">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top 4 Icons Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {iconServices.map((svc) => (
            <Link 
              key={svc.id} 
              href={svc.link}
              className="flex items-center gap-3 group"
            >
              <div className="shrink-0 transition-transform group-hover:scale-110">
                {svc.icon}
              </div>
              <span className="text-xs font-bold text-slate-800 underline underline-offset-2 group-hover:text-[#B30D2B] transition-colors leading-tight">
                {svc.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Solid Line Divider */}
        <hr className="border-t border-slate-400 mb-12" />

        {/* 3 Columns Consultation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 text-xs leading-relaxed">
          
          {/* Col 1: Automotive Expert */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-extrabold uppercase tracking-widest text-slate-900 text-xs">
              AUTOMOTIVE EXPERT
            </h4>
            <p className="text-slate-700 font-normal">
              <strong>Achtrex Technologies</strong> provides enterprise software and API infrastructure for key players across the automotive mobility chain. Databases, diagnostics, and customized scalable systems.
            </p>
            <p className="text-slate-600 font-medium pt-2">
              <strong className="block text-slate-900">Headquarters</strong>
              Global Automotive Software & Cloud Operations
            </p>
          </div>

          {/* Col 2: Request A Consultation */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-extrabold uppercase tracking-widest text-slate-900 text-xs">
              REQUEST A CONSULTATION
            </h4>
            <p className="text-slate-700 font-normal">
              Send a request and one of our solution architects will contact you with a customized enterprise proposal.
            </p>
            <div className="pt-2 space-y-1.5 font-bold">
              <Link href="/contact-us" className="block text-slate-900 hover:text-[#B30D2B] hover:underline transition-colors">
                Contact us
              </Link>
              <Link href="/contact-us" className="block text-slate-900 hover:text-[#B30D2B] hover:underline transition-colors">
                Remote Support
              </Link>
            </div>
          </div>

          {/* Col 3: Stay Updated / Newsletter */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-extrabold uppercase tracking-widest text-slate-900 text-xs">
              STAY UPDATED
            </h4>
            <p className="text-slate-700 font-normal">
              Subscribe to the automotive newsletter and receive updates directly in your email box.
            </p>
            
            {subscribed ? (
              <div className="p-3 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-none border border-emerald-300">
                Thank you for subscribing to Achtrex updates!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-1 flex flex-col space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 focus:outline-none focus:border-slate-800 text-slate-900 shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#363E3D] hover:bg-[#272D2C] text-white font-bold text-xs uppercase tracking-widest py-2.5 px-6 self-start shadow-sm transition-colors"
                >
                  SUBMIT
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
