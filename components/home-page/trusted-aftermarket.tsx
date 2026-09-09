'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    tag: 'Bespoke Automotive Software',
    quote: 'Thanks to our successful collaboration with Achtrex, we built a cutting-edge, fully individualized alternative to legacy parts catalog systems. The combination of web tools and mobile access for online parts search has streamlined our technical operations significantly.',
    author: 'Christian S.',
    role: 'Global Data Management & Category Lead'
  },
  {
    id: 2,
    tag: 'AAIA Cognitive AI Solutions',
    quote: 'Achtrex fundamentally upgraded how our engineering teams interface with vehicle telemetry and diagnostic datasets. Sub-50ms query latency and automated triage reduced our diagnostic time by over 70%, giving our repair networks real-time clarity across thousands of vehicles daily.',
    author: 'Elena Rostova',
    role: 'VP of Digital Operations & Fleet Architecture'
  },
  {
    id: 3,
    tag: 'Cloud Catalog & Custom Software',
    quote: 'Deploying Achtrex custom software builds unified decades of fragmented workshop and catalog systems into a single high-availability platform. We achieved 100% operational fidelity across multi-country parts syndication with zero downtime during peak season.',
    author: 'Marc Van Der Berg',
    role: 'Chief Technology Officer'
  }
];

export const TrustedAftermarket = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrent((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const item = testimonials[current];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-24 font-sans">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Grey Rounded Container */}
        <div className="bg-[#EEF2F5] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Trusted across the{' '}
              <span className="relative inline-block">
                independent aftermarket
                {/* Brand gradient underline bar */}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mx-auto rounded-full" />
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-5">
              Thousands of companies rely on Achtrex every day to operate efficiently and maintain consistency across markets.
            </p>
          </div>

          {/* Testimonial Box Card */}
          <div className="relative max-w-3xl mx-auto">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-slate-200/80 relative"
              >
                {/* Large Quotation Mark Icon Top Right */}
                <div className="absolute top-6 right-6 text-slate-300 pointer-events-none">
                  <Quote className="w-12 h-12 rotate-180 fill-slate-200 text-slate-200" />
                </div>

                <div className="space-y-6">
                  {/* Tag */}
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-[#F37021] to-[#00A9CE] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      {item.tag}
                    </span>
                  </div>

                  {/* Text */}
                  <p className="text-base sm:text-lg text-slate-800 font-bold leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Author Information */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-sm font-black text-slate-900">{item.author}</h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Quotation Mark Icon Bottom Left */}
                <div className="absolute -bottom-5 left-8 text-slate-300 pointer-events-none">
                  <Quote className="w-10 h-10 fill-slate-200 text-slate-200" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-8 h-8 rounded-full bg-white border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      current === idx ? 'w-6 bg-gradient-to-r from-[#F37021] to-[#00A9CE]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-8 h-8 rounded-full bg-white border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
