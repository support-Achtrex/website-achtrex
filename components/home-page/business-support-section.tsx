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
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-[1.15] tracking-tight">
              Find out how Achtrex can support your business
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] rounded-full" />

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                At Achtrex, we understand that reliable data and resilient software are key to automotive success. That&apos;s why we support our enterprise partners with comprehensive digital infrastructure, high-velocity APIs, and custom platforms designed to improve technical performance and operational confidence.
              </p>
              <p>
                From instant VIN decoding and dealer inventory automation to bespoke enterprise portals and cognitive AI diagnostic models, our engineering resources ensure your operations stay ahead of industry demands. This commitment to technical excellence strengthens performance, eliminates fragmented workflows, and drives long-term business growth.
              </p>
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
