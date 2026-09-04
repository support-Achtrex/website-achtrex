'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const resourceCards = [
  {
    id: 1,
    tag: 'Cloud API',
    date: 'August 27, 2026',
    title: 'Make or Buy: How go-live speed affects competitiveness',
    excerpt: 'In digital B2B sales, waiting for the perfect in-house solution can become a competitive disadvantage. The sooner you connect to standardized automotive APIs, the faster you capture market share.',
    image: '/images/home_software_chip.jpg',
    link: '/blog/future-of-automotive-data-apis'
  },
  {
    id: 2,
    tag: null,
    date: 'August 26, 2026',
    title: 'CARUSO Dataplace Adds Hyundai to Its Platform, One Integration for Fleet and Privately-Owned Vehicles',
    excerpt: 'Our partner data ecosystem expands with live telematics integration, announcing seamless access to vehicle sensor feeds and diagnostic alerts across connected fleets and commercial vehicles.',
    image: '/images/home_processes_traffic.jpg',
    link: '/blog/enterprise-fleet-management-software'
  },
  {
    id: 3,
    tag: 'VIN Suite',
    date: 'August 25, 2026',
    title: 'Inter Cars scales automation with TecCom',
    excerpt: 'When a company operates at scale, even small inefficiencies in order management quickly become big ones: more manual handling, more errors, and slower response times for customers.',
    image: '/images/home_data_dots.jpg',
    link: '/blog/scaling-nmvtis-data-pipelines'
  },
  {
    id: 4,
    tag: null,
    date: 'August 25, 2026',
    title: 'Looking Ahead to Automechanika Frankfurt 2026',
    excerpt: 'From 8 to 12 September, we will be welcoming customers, enterprise partners and industry experts to explore next-generation VIN decoding engines, cognitive AI assistants, and dealer DMS integrations.',
    image: '/images/home_noc_center.jpg',
    link: '/blog/ai-transforming-auto-dealerships'
  }
];

export const InsightsResources = () => {
  return (
    <section className="w-full bg-[#1A1D20] text-white py-20 md:py-28 font-sans">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4"
          >
            Find the insights and{' '}
            <span className="relative inline-block">
              resources to support
              {/* Brand gradient underline bar */}
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mx-auto rounded-full" />
            </span>{' '}
            your business
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed mt-4"
          >
            Access expert insights, customer stories, and updates on data, standards, and market developments across the IAM.
          </motion.p>
        </div>

        {/* 2x2 Grid of Rich Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {resourceCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#23272B] rounded-2xl overflow-hidden border border-slate-700/60 flex flex-col group hover:border-[#F37021]/50 transition-all duration-300 shadow-lg"
            >
              <Link href={card.link} className="flex flex-col h-full block">
                {/* Card Top Image Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Category Tag Badge */}
                  {card.tag && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#F37021] to-[#00A9CE] text-white text-[11px] font-bold px-3 py-1 rounded shadow-md uppercase tracking-wider">
                      {card.tag}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  {/* Date with Calendar icon */}
                  <div className="flex items-center text-xs font-semibold text-slate-400 mb-3 gap-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{card.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#00A9CE] transition-colors mb-3">
                    {card.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6 line-clamp-3">
                    {card.excerpt}
                  </p>

                  {/* Read More link */}
                  <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#00A9CE] uppercase tracking-wider transition-colors">
                    <span>Read more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#F37021]" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Brand Pill CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/resources"
            className="btn-navbar-cta"
          >
            <span className="btn-navbar-cta-inner !py-3.5 !px-8 text-xs sm:text-sm uppercase tracking-wider">
              <span>See all resources</span>
              <ArrowRight className="w-4 h-4 text-[#00A9CE]" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};
