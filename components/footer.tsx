'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const Footer = () => {
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
    <footer className="w-full bg-[#E5EAE9] font-sans text-slate-800 border-t border-slate-300 pt-12 pb-8">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* 3 Columns Consultation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 text-xs leading-relaxed mb-12">
          
          {/* Col 1: Automotive Expert */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-black uppercase tracking-widest text-slate-900 text-xs">
              AUTOMOTIVE EXPERT
            </h4>
            <p className="text-slate-800 font-medium leading-relaxed">
              <strong>Achtrex</strong> provides enterprise automotive software builds, cognitive AI diagnostics, and strategic consultation for businesses, dealerships, and manufacturers worldwide.
            </p>
          </div>

          {/* Col 2: Request A Consultation */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-black uppercase tracking-widest text-slate-900 text-xs">
              REQUEST A CONSULTATION
            </h4>
            <p className="text-slate-800 font-medium leading-relaxed">
              Send a request and one of our solution architects will contact you with a customized enterprise proposal.
            </p>
            <div className="pt-2">
              <Link href="/contact-us" className="btn-navbar-cta self-start inline-block">
                <span className="btn-navbar-cta-inner !py-2.5 !px-6 text-xs uppercase tracking-widest font-bold">
                  <span>Get In Touch</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Col 3: Stay Updated / Newsletter */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-black uppercase tracking-widest text-slate-900 text-xs">
              STAY UPDATED
            </h4>
            <p className="text-slate-800 font-medium leading-relaxed">
              Subscribe to the automotive newsletter and receive updates directly in your email box.
            </p>
            
            {subscribed ? (
              <div className="p-3 bg-emerald-100 text-emerald-900 text-xs font-semibold border border-emerald-300">
                ✓ Thank you for subscribing to Achtrex updates!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-1 flex flex-col space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2.5 text-xs bg-white border border-slate-300 focus:outline-none focus:border-slate-800 text-slate-900 shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-navbar-cta self-start"
                >
                  <span className="btn-navbar-cta-inner !py-2.5 !px-7 text-xs uppercase tracking-widest font-bold">
                    <span>SUBMIT</span>
                  </span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Legal Links Bar */}
        <div className="border-t border-slate-300/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-700 font-medium gap-4">
          <p>© {new Date().getFullYear()} Achtrex. All rights reserved.</p>
          <div className="flex items-center gap-6 font-semibold">
            <Link href="/blog" className="hover:text-slate-900 hover:underline transition-colors">
              Blog Articles
            </Link>
            <Link href="/legal#privacy" className="hover:text-slate-900 hover:underline transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal#terms" className="hover:text-slate-900 hover:underline transition-colors">
              Terms of Service
            </Link>
            <Link href="/legal#security" className="hover:text-slate-900 hover:underline transition-colors">
              Security
            </Link>
            <Link href="/portal" className="hover:text-slate-900 hover:underline transition-colors">
              Portal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};