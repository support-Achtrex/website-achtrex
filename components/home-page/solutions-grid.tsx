'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Layers, Brain, Cpu } from 'lucide-react';

const solutions = [
  {
    id: 'data',
    title: 'Automotive Data & APIs',
    kicker: 'Vehicle Intelligence',
    icon: Database,
    image: '/images/home_data_dots.jpg',
    link: '/contact-us',
    desc: 'High-velocity vehicle intelligence, instant VIN decoding pipelines, granular OEM specifications, and real-time market datasets with sub-50ms response latency.'
  },
  {
    id: 'sales-inventory',
    title: 'Sales & Inventory Cloud',
    kicker: 'DMS & Dealership Platform',
    icon: Layers,
    image: '/images/home_processes_traffic.jpg',
    link: '/contact-us',
    desc: 'Bi-directional DMS synchronization, automated multi-channel inventory syndication, algorithmic age-on-lot pricing, and intelligent lead auto-routing.'
  },
  {
    id: 'software',
    title: 'Custom Software Builds',
    kicker: 'Bespoke Enterprise Systems',
    icon: Cpu,
    image: '/images/home_software_chip.jpg',
    link: '/contact-us',
    desc: 'Bespoke dealer management portals, high-load auto parts marketplaces, and fleet ERPs built with zero vendor lock-in and 100% client IP ownership.'
  },
  {
    id: 'ai',
    title: 'Cognitive AI Solutions',
    kicker: 'AAIA Diagnostic Reasoning',
    icon: Brain,
    image: '/images/home_360_hub.jpg',
    link: '/contact-us',
    desc: 'Domain-specialized vehicle diagnostic engines, 24/7 conversational customer assistants, and neural multi-agent workflows trained specifically for automotive operations.'
  }
];

export const SolutionsGrid = () => {
  return (
    <section className="w-full bg-stipple-warm-gray-bottom pt-4 sm:pt-6 md:pt-8 pb-16 md:pb-24 font-sans border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Top Header & Wireframe Icon */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 md:mb-12">
          
          {/* Minimalist Car Outline Icon with sensor nodes */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-2"
          >
            <svg 
              className="w-12 h-12 text-slate-400 stroke-[1.2]" 
              viewBox="0 0 64 64" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Car body path */}
              <path 
                d="M12 36C12 36 15 28 22 24C29 20 38 20 44 24C49 27 52 36 52 36M12 36C8 36 6 39 6 43C6 47 9 49 14 49M12 36H52M52 36C56 36 58 39 58 43C58 47 55 49 50 49M14 49H50" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              {/* Wheels */}
              <circle cx="20" cy="46" r="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="44" cy="46" r="4" stroke="currentColor" strokeWidth="1.5" />
              {/* Antenna / Sensor Node */}
              <circle cx="32" cy="18" r="2.5" fill="#F37021" />
              <line x1="32" y1="20" x2="32" y2="23" stroke="#00A9CE" strokeWidth="1.5" />
            </svg>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-wider uppercase mb-2"
          >
            DISCOVER THE SOLUTIONS
          </motion.h2>

          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-sm font-bold text-slate-500 tracking-widest uppercase mb-3"
          >
            CHOSEN BY AUTOMOTIVE EXPERTS
          </motion.h3>

          {/* Brand Gradient Underline */}
          <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mx-auto mb-6 rounded-full" />

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal"
          >
            We provide solutions that can be adapted to meet the specific requirements of Auto Manufacturers, Parts and Equipment Manufacturers, Repairer Networks, Parts Distributors, Car Fleets and Insurance that manage Authority processes.
          </motion.p>
        </div>

        {/* 4 Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <Link href={item.link} className="flex flex-col h-full block">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    
                    {/* Corner Tag */}
                    <div className="absolute top-3 left-3 bg-[#0A0E14]/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider rounded-md border border-white/10">
                      {item.kicker}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-[#F37021] shrink-0" />
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-[#00A9CE] transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5 flex-1">
                      {item.desc}
                    </p>

                    <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE]">Explore Solution</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#00A9CE] transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
