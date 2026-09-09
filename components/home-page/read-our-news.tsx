'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const newsItems = [
  {
    id: 1,
    title: 'MODERNIZING DEALERSHIP INFRASTRUCTURE: SCALING BESPOKE SOFTWARE ARCHITECTURES',
    category: 'Software Builds',
    date: '23 June 2026',
    image: '/images/home_noc_center.jpg',
    link: '/blog/future-of-automotive-software-systems'
  },
  {
    id: 2,
    title: 'ADPA MANIFESTO FOR MOBILITY 2024-2029: KEEP MOVING EU!',
    category: 'Mobility Standards',
    date: '11 June 2026',
    image: '/images/home_processes_traffic.jpg',
    link: '/blog/enterprise-fleet-management-software'
  },
  {
    id: 3,
    title: 'AUTOMOTIVE INNOVATION CENTER BY ACHTREX OPENS THE DOORS TO INTERNATIONAL MANAGERS',
    category: 'Innovation',
    date: '28 February 2026',
    image: '/images/home_360_hub.jpg',
    link: '/blog/ai-transforming-auto-dealerships'
  }
];

export const ReadOurNews = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 md:py-28 font-sans border-b border-slate-100">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-black text-slate-900 tracking-wider uppercase mb-3"
          >
            READ OUR NEWS
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-slate-600 font-normal"
          >
            News, previews and sector updates commented by our Automotive Experts.
          </motion.p>
        </div>

        {/* 3 News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {newsItems.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col group"
            >
              <Link href={news.link} className="flex flex-col h-full block">
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 mb-5 border border-slate-200">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-[#001a22]/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase text-white tracking-widest border border-white/10">
                    {news.category}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-black text-slate-800 leading-snug tracking-wider uppercase group-hover:text-[#00A9CE] transition-colors mb-3">
                  {news.title}
                </h3>

                {/* Date */}
                <p className="text-[11px] text-slate-400 font-medium mb-3">
                  {news.date}
                </p>

                {/* Read More Link */}
                <span className="mt-auto inline-flex items-center text-xs font-semibold text-slate-600 group-hover:text-[#00A9CE] transition-colors">
                  Read more ›
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
