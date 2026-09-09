'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Headphones, Sliders, Sparkles } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Multilingual Data Management',
    desc: 'Multilingual and multi-channel support service active throughout global automotive markets.',
    icon: (
      <svg className="w-10 h-10 text-white stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M7 10h4M9 8v6M13 14l3-6 3 6M14 12h4" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Automotive Technical Helpline',
    desc: 'Professionals specially trained who provide technical assistance and diagnostic guidance from our Headquarters.',
    icon: (
      <svg className="w-10 h-10 text-white stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="8" cy="7" r="3" />
        <circle cx="16" cy="17" r="3" />
        <path d="M8 10v7a2 2 0 002 2h4M16 14V7a2 2 0 00-2-2h-4" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Customized services',
    desc: 'High performing software applications increase productivity and revenue and reduce time and operational costs.',
    icon: (
      <svg className="w-10 h-10 text-white stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="7" y1="9" x2="17" y2="9" />
        <line x1="7" y1="15" x2="17" y2="15" />
        <circle cx="10" cy="9" r="1.5" fill="white" />
        <circle cx="14" cy="15" r="1.5" fill="white" />
      </svg>
    )
  },
  {
    id: 4,
    title: '100% White Label',
    desc: 'All the solutions are offered in white label and allow the complete rebranding of the services based on customer needs.',
    icon: (
      <svg className="w-10 h-10 text-white stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2l2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 14.24l-4.8 2.52.92-5.34-3.88-3.78 5.36-.78L12 2z" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="2.1" y2="2.1" />
        <line x1="19.07" y1="4.93" x2="21.9" y2="2.1" />
      </svg>
    )
  }
];

export const SupplyChainServices = () => {
  return (
    <section className="w-full bg-[#F8FAFC] text-slate-900 py-16 md:py-24 font-sans relative overflow-hidden border-y border-slate-200">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Header Titles */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider uppercase mb-3 text-slate-900"
          >
            SERVICES DESIGNED FOR THE PROTAGONISTS OF THE SUPPLY CHAIN
          </motion.h2>

          {/* Brand Gradient Underline */}
          <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mx-auto mb-5 rounded-full" />

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Car Manufacturers, Parts Manufacturers, Equipment Manufacturers, Repairer Networks, Parts Distributors, Car Fleet and Insurance.
          </motion.p>
        </div>

        {/* 4 Column Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center text-center space-y-3 p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#00A9CE]/60 transition-all duration-300"
            >
              {/* Icon Container with Gradient Rim */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#F37021]/10 via-[#FB923C]/5 to-[#00A9CE]/15 border border-slate-200 flex items-center justify-center mb-1 group-hover:scale-105 transition-transform shadow-sm">
                <div className="text-slate-800 group-hover:text-[#00A9CE] transition-colors [&>svg]:text-current">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold tracking-wide text-slate-900 group-hover:text-[#00A9CE] transition-colors">
                {item.title}
              </h3>

              <div className="w-8 h-0.5 bg-gradient-to-r from-[#F37021] to-[#00A9CE] rounded-full" />

              {/* Body */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium max-w-xs">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
