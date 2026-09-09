'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const portfolioItems = [
  {
    id: 1,
    title: "Automotive Software Builds",
    category: "Pillar 01",
    image: "/projects/ad-logo.png",
    link: "/solutions/automotive-software",
    desc: "We engineer bespoke automotive software platforms. From custom dealership portals to workshop bay schedulers and fleet systems, we deliver enterprise-grade architectures with 100% client code ownership.",
    isLogo: true
  },
  {
    id: 2,
    title: "Cognitive AI Solutions",
    category: "Pillar 02",
    image: "/projects/aaia-logo.png",
    link: "/solutions/cognitive-ai",
    desc: "We engineered AAIA, our proprietary cognitive reasoning model designed specifically for multimodal vehicle diagnostics, acoustic defect analysis, and autonomous technician guidance.",
    isLogo: true
  },
  {
    id: 3,
    title: "Automotive Consultation",
    subtitle: "Operations & Business Strategy",
    category: "Pillar 03",
    image: "/achtrex-logo-email.png",
    link: "/solutions/automotive-consultation",
    desc: "Achtrex advises businesses, manufacturers, dealerships, and repair shops on workshop workflow modernization, diagnostic operations, and long-term technical growth strategy.",
    isLogo: true
  },
];

export const PortfolioGrid = () => {
  return (
    <section className="w-full bg-[#f8fafc]">
      
      {/* Header Area - Who We Are Bento Layout */}
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Bento Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left Gradient Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#018861] to-[#00a9ce] rounded-3xl p-8 flex flex-col justify-between aspect-square shadow-sm"
              >
                <div className="text-sm font-medium text-white/80 mb-4">At Achtrex...</div>
                <div className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                  We love <br/>empowering <br/>businesses
                </div>
              </motion.div>
              
              {/* Top Right Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative rounded-3xl overflow-hidden aspect-square shadow-sm"
              >
                <Image 
                  src="/projects/team_collaboration_1.png" 
                  alt="Achtrex Team Collaboration" 
                  fill 
                  className="object-cover"
                />
              </motion.div>

              {/* Bottom Wide Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="col-span-2 relative rounded-3xl overflow-hidden aspect-[21/9] shadow-sm bg-slate-100"
              >
                <Image 
                  src="/projects/team_collaboration_wide.png" 
                  alt="Achtrex Engineering Team" 
                  fill 
                  className="object-cover object-center"
                />
              </motion.div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col"
              >
                <div className="text-4xl md:text-4xl font-extrabold text-[#001a22] mb-1">+15</div>
                <div className="text-xs md:text-sm text-slate-700 font-semibold">Industry Experts</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col"
              >
                <div className="text-4xl md:text-4xl font-extrabold text-[#001a22] mb-1">+50</div>
                <div className="text-xs md:text-sm text-slate-700 font-semibold">Projects Delivered</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col"
              >
                <div className="text-4xl md:text-4xl font-extrabold text-[#001a22] mb-1">100%</div>
                <div className="text-xs md:text-sm text-slate-700 font-semibold">Client Satisfaction</div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Typography & Copy */}
          <div className="flex flex-col relative pt-8 lg:pt-0 lg:pl-8">
            {/* Decorative Star */}
            <div className="absolute top-0 right-12 text-[#018861] animate-pulse">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>

            {/* Circular Badge - Only visible on lg+ */}
            <div className="absolute -top-12 right-0 hidden lg:flex items-center justify-center w-32 h-32 animate-[spin_12s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="text-[11.5px] font-bold tracking-[0.18em] uppercase fill-slate-800">
                  <textPath href="#curve" startOffset="0%">AUTOMOTIVE DATA INTELLIGENCE •</textPath>
                </text>
              </svg>
              <div className="absolute text-slate-800">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#001a22] tracking-tight mb-6 leading-[1.2] font-sans"
            >
              Who <br className="hidden lg:block"/>we Are?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-slate-700 leading-relaxed mb-10 text-[17px] font-normal"
            >
              <p>
                <strong className="text-[#001a22] font-bold">Automotive businesses need more than tools. They need software, intelligence, and direction. We build all three.</strong> Our expertise lies in bespoke automotive software builds, cognitive AI diagnostics, and strategic operational consultation.
              </p>
              <p>
                As an enterprise automotive partner, <strong className="text-[#001a22] font-bold">we deeply understand the technical and operational challenges of modern automotive enterprises</strong>. We build custom software solutions, deploy specialized cognitive AI models, and advise leadership on process optimization with 100% client code ownership.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {['Automotive Software Builds', 'Cognitive AI Solutions', 'Automotive Consultation', 'AAIA Diagnostics', 'Workshop Modernization'].map((tag, i) => (
                <span key={i} className="px-5 py-2.5 rounded-full border border-slate-300 bg-white text-[13px] font-semibold text-slate-700 hover:border-[#018861] hover:text-[#018861] transition-colors cursor-default whitespace-nowrap shadow-xs">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Grid Area */}
      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => {
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-[#00a9ce]/50 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center overflow-hidden border-b border-slate-100">
                  {item.isLogo ? (
                    <div className="relative w-full h-full flex items-center justify-center p-10">
                      <Image 
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <Image 
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      unoptimized
                    />
                  )}
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-slate-200">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-800">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#001a22] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-logo-gradient transition-all duration-300">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm font-bold text-[#00a9ce] mb-3 -mt-2">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-8 flex-1 font-normal">
                    {item.desc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link href={item.link} className="inline-flex items-center text-[#00a9ce] font-bold tracking-wide text-[13px] uppercase hover:text-[#001a22] transition-colors">
                      View Details <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
