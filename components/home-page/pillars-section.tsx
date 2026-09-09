'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const PillarsSection = () => {
  const pillars = [
    {
      image: '/projects/software_builds_real.png',
      title: 'Automotive Software Builds',
      description: 'Bespoke dealership DMS, workshop bay management, and fleet telematics platforms engineered for end-to-end operational mastery.',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      image: '/projects/aaia_ui_v2.png',
      title: 'Cognitive AI Solutions',
      description: 'Domain-specialized neural models (AAIA) for multi-modal OBD-II fault diagnostics, predictive parts wear, and computer-vision vehicle inspection.',
      color: 'from-purple-600 to-pink-700'
    },
    {
      image: '/projects/consultation_advisory.png',
      title: 'Automotive Consultation',
      description: 'Strategic advisory for businesses, manufacturers, dealerships, and workshops on diagnostic workflows, repair operations, and digital modernization.',
      color: 'from-emerald-600 to-teal-700'
    }
  ];

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[16/10] w-full mb-8 overflow-hidden rounded-xl border border-slate-200 shadow-sm transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-xl">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-[#F8F9FA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
              
              <h3 className="text-2xl font-bold text-[#005a9e] mb-4 tracking-tight group-hover:text-blue-700 transition-colors">
                {pillar.title}
              </h3>
              
              <p className="text-[#4b5563] text-lg leading-relaxed font-medium">
                {pillar.description}
              </p>
              
              <div className="mt-6 flex items-center text-sm font-black uppercase tracking-[0.2em] text-blue-600 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                Learn More →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
