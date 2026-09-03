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
    answer: 'Achtrex is a specialized automotive technology venture builder and enterprise software partner. We engineer high-velocity vehicle data APIs, proprietary AI diagnostic frameworks (AAIA), DMS inventory synchronization tools, and bespoke cloud platforms for automakers, parts distributors, dealership networks, and mobility startups worldwide.'
  },
  {
    id: 2,
    question: 'Who benefits most from using Achtrex platforms & APIs?',
    answer: 'Our solutions are built for participants across the entire automotive supply chain: automotive dealerships looking to automate inventory and lead workflows, parts and equipment manufacturers managing catalog fitment, fleet operators requiring real-time diagnostic telemetry, insurance carriers needing instant vehicle history validation, and software developers building next-generation mobility applications.'
  },
  {
    id: 3,
    question: 'How does Achtrex improve automotive data latency and VIN intelligence?',
    answer: 'Achtrex Core processes millions of vehicle records daily with sub-50ms query response times. Our normalized REST and GraphQL endpoints offer instant VIN decoding, granular OEM build specifications, historical market valuations, EV battery telemetry, and real-time title data with 99.9% uptime SLA.'
  },
  {
    id: 4,
    question: 'Can Achtrex build custom software tailored to our proprietary workflows?',
    answer: 'Yes. We specialize in end-to-end bespoke software engineering. We develop custom dealer management portals, high-load auto parts marketplaces, multi-rooftop inventory syndication hubs, and fleet ERPs. Clients receive 100% intellectual property (IP) ownership with zero vendor lock-in.'
  },
  {
    id: 5,
    question: 'How does the AAIA cognitive AI engine assist automotive businesses?',
    answer: 'AAIA is our domain-trained automotive reasoning model. It powers autonomous 24/7 customer support agents, automated vehicle diagnostic triage, predictive age-on-lot pricing algorithms, and intelligent repair recommendations, reducing resolution times by up to 70%.'
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
          
          {/* Orange Accent Underline Bar */}
          <div className="w-24 h-1 bg-[#F37021] mx-auto mt-4 rounded-full" />
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
                    <ArrowRight className="w-4 h-4 text-slate-900 shrink-0 stroke-[2.5]" />
                    <span className="text-sm sm:text-base md:text-[17px] font-bold text-slate-900 group-hover:text-[#F37021] transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-slate-800 group-hover:text-[#F37021] transition-colors">
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
                      <div className="pb-6 pl-7 pr-4 text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal">
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
