'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const BusinessSupportSection = () => {
  return (
    <section className="w-full bg-stipple-warm-gray-top pt-14 md:pt-20 pb-6 md:pb-10 font-sans relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clear, High-Converting Business Value & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-[1.15] tracking-tight">
              Find out how Achtrex can support your business
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] rounded-full" />

            <div className="space-y-4 text-slate-800 text-[15px] sm:text-[16px] leading-[1.8] font-normal">
              <p>
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#F37021] to-[#00A9CE] inline-block mr-2.5 align-middle shrink-0" />
                <strong className="font-extrabold text-slate-900">Achtrex</strong> is an enterprise automotive technology and API provider. We support our enterprise partners with comprehensive digital infrastructure, high-velocity APIs, and custom platforms designed to improve technical performance and operational confidence.
              </p>
              <p>
                From instant VIN decoding and dealer inventory automation to bespoke enterprise portals and cognitive AI diagnostic models, our engineering resources ensure your operations stay ahead of industry demands. This commitment to technical excellence strengthens performance, eliminates fragmented workflows, and drives long-term business growth.
              </p>
            </div>

            {/* High-Impact Stat Metrics matching reference layout */}
            <div className="pt-2 flex flex-wrap items-center gap-8 sm:gap-12 w-full">
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">20M+</span>
                <span className="text-xs sm:text-[13px] font-bold text-slate-600 mt-0.5">Vehicle Datasets</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">&lt;50ms</span>
                <span className="text-xs sm:text-[13px] font-bold text-slate-600 mt-0.5">Response Latency</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE] tracking-tight">100%</span>
                <span className="text-xs sm:text-[13px] font-bold text-slate-600 mt-0.5">IP Ownership</span>
              </div>
            </div>

            {/* High-Converting Brand Pill CTA Button */}
            <div className="pt-2">
              <Link
                href="/contact-us"
                className="btn-navbar-cta"
              >
                <span className="btn-navbar-cta-inner !py-3.5 !px-8 text-sm sm:text-base font-bold">
                  <span>Contact Us Today</span>
                  <ArrowRight className="w-4 h-4 text-[#00A9CE]" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Animated GIF Demonstration */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
              <Image
                src="/images/home_business_support_animation.gif"
                alt="Achtrex automotive technology animation demonstration"
                fill
                unoptimized
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
