'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What is Achtrex and what does it do?',
    answer: 'Achtrex is a specialized automotive technology enterprise and consultation partner. We deliver across three core pillars: Automotive Software Builds (custom dealer portals, DMS sync, parts fitment), Cognitive AI Solutions (domain-trained diagnostics, predictive triage, smart agents), and Automotive Consultation (end-to-end strategic advisory for businesses, manufacturers, dealerships, and repair operations).'
  },
  {
    id: 2,
    question: 'Who benefits most from using Achtrex platforms & advisory?',
    answer: 'Our offerings empower participants across the entire mobility ecosystem: automotive dealerships looking to automate inventory and lead workflows, vehicle and parts manufacturers optimizing repair data, independent service centers scaling diagnostic precision, fleet operators requiring telemetry builds, and businesses seeking strategic automotive consultation.'
  },
  {
    id: 3,
    question: 'What does Achtrex Automotive Consultation cover?',
    answer: 'Our consultation practice advises businesses, manufacturers, dealerships, or individuals on anything related to vehicles, automotive data, repair processes, diagnostics, operations, or commercial business strategy.'
  },
  {
    id: 4,
    question: 'Can Achtrex build custom software tailored to our proprietary workflows?',
    answer: 'Yes. Under our Automotive Software Builds pillar, we develop custom dealer management portals, high-load auto parts marketplaces, multi-rooftop inventory syndication hubs, and fleet ERPs. Clients receive 100% intellectual property (IP) ownership with zero vendor lock-in.'
  },
  {
    id: 5,
    question: 'How does the AAIA cognitive AI engine assist automotive businesses?',
    answer: 'AAIA is our domain-trained automotive reasoning model within our Cognitive AI Solutions pillar. It powers autonomous 24/7 customer support agents, automated vehicle diagnostic triage, predictive age-on-lot pricing algorithms, and intelligent repair recommendations, reducing resolution times by up to 70%.'
  },
  {
    id: 6,
    question: 'How can we integrate Achtrex into our existing IT and DMS systems?',
    answer: 'Integration is rapid and turnkey. We offer comprehensive developer documentation, ready-to-deploy SDKs, bi-directional DMS sync adapters (supporting major DMS and inventory management platforms), and dedicated solution architects who assist your engineering team throughout deployment.'
  }
];

export const AchtrexFaq = () => {
  const [openId, setOpenId] = useState<number | null>(1); // Default first item open matching reference image

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-20 md:py-28 font-sans border-b border-slate-100">
      <div className="max-w-[960px] mx-auto px-6">
        
        {/* Header matching reference image 1 */}
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Everything you need to know about <span className="text-slate-900">Achtrex</span>
          </motion.h2>
          
          {/* Brand Gradient Underline Bar */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordion List matching reference image 1 */}
        <div className="border-t border-slate-300">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="border-b border-slate-300">
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 flex items-center justify-between text-left group focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <ArrowRight className="w-4 h-4 text-slate-900 shrink-0 stroke-[2.5] group-hover:text-[#00A9CE] transition-colors" />
                    <span className="text-sm sm:text-base md:text-[17px] font-bold text-slate-900 group-hover:text-[#00A9CE] transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-slate-800 group-hover:text-[#00A9CE] transition-colors">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 stroke-[2]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 stroke-[2]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-7 pr-4 text-xs sm:text-sm md:text-[15px] text-slate-700 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
