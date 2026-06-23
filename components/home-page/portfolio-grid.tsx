'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import Link from 'next/link';

const portfolioItems = [
  {
    id: 1,
    title: "AutomotiveDataset.com",
    category: "Product",
    image: "/projects/ad-logo.png",
    link: "/products/automotive",
    desc: "We built and launched AutomotiveDataset.com as our proprietary enterprise VIN intelligence infrastructure. We engineered the entire backend system to deliver sub-50ms latency for vehicle specifications, allowing the platform to scale to millions of daily queries.",
    isLogo: true
  },
  {
    id: 2,
    title: "LUMI AI Engine",
    category: "Product",
    image: "/projects/lumi-logo.png",
    link: "/products/lumi",
    desc: "We engineered LUMI AI, our proprietary cognitive reasoning model designed specifically for vehicle diagnostics and automotive data processing. This engine powers automated customer support and internal knowledge assistants.",
    isLogo: true
  },
  {
    id: 3,
    title: "Achtrex Core",
    category: "Product",
    image: "/achtrex-logo-email.png",
    link: "/products/enterprise-platforms",
    desc: "Achtrex Core serves as our foundational enterprise integration hub. We designed this API gateway entirely in-house to provide seamless, secure, and rapid access to our full suite of automotive intelligence tools.",
    isLogo: true
  },
  {
    id: 4,
    title: "Ark Auto Shop",
    category: "Use Case",
    image: "/logos/use-cases/arkauto.png",
    link: "/use-cases",
    desc: "We created Ark Auto Shop from the ground up, engineering its complete digital infrastructure for automotive parts distribution. We embedded our AI-powered workflows and intelligent fitment technologies to drive the entire service ecosystem.",
    isLogo: true
  },
  {
    id: 5,
    title: "Carkasa",
    category: "Use Case",
    image: "/logos/use-cases/vehiclehistory.png",
    link: "/use-cases",
    desc: "We founded and built Carkasa as a global platform for comprehensive vehicle history reports. Utilizing the Achtrex data engine, we aggregate massive datasets to provide instant, reliable vehicle backgrounds to consumers and dealers worldwide.",
    isLogo: true
  },
  {
    id: 6,
    title: "VehicleReportCheck",
    category: "Use Case",
    image: "/logos/use-cases/vehiclereportcheck.png",
    link: "/use-cases",
    desc: "We built and scaled the VehicleReportCheck platform entirely in-house. Powered by our core automotive intelligence, this platform focuses on advanced VIN decoding, vehicle transparency, and comprehensive reporting workflows.",
    isLogo: true
  }
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
                <div className="text-4xl md:text-4xl font-light text-[#001a22] mb-1">+15</div>
                <div className="text-xs md:text-sm text-slate-500 font-medium">Industry Experts</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col"
              >
                <div className="text-4xl md:text-4xl font-light text-[#001a22] mb-1">+50</div>
                <div className="text-xs md:text-sm text-slate-500 font-medium">Projects Delivered</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col"
              >
                <div className="text-4xl md:text-4xl font-light text-[#001a22] mb-1">100%</div>
                <div className="text-xs md:text-sm text-slate-500 font-medium">Client Satisfaction</div>
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
              className="space-y-6 text-slate-500 leading-relaxed mb-10 text-[17px]"
            >
              <p>
                <strong className="text-[#001a22] font-semibold">We are an automotive intelligence company</strong>, providing cutting-edge infrastructure for VIN decoding, vehicle history, and API integrations. Our expertise lies in seamlessly connecting global automotive datasets to consumer applications.
              </p>
              <p>
                As an enterprise technology provider, <strong className="text-[#001a22] font-semibold">we deeply understand the data needs of modern automotive businesses</strong>. With an innovative mindset, we excel in delivering scalable APIs and AI-driven solutions through our in-house team of experts.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {['Vehicle Data APIs', 'LUMI AI Engine', 'Enterprise Infrastructure', 'Automotive Intelligence', 'Vehicle History Reports'].map((tag, i) => (
                <span key={i} className="px-5 py-2.5 rounded-full border border-slate-300 text-[13px] font-medium text-slate-600 hover:border-[#018861] hover:text-[#018861] transition-colors cursor-default whitespace-nowrap">
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
                className="group bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-[#00a9ce]/30 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8 overflow-hidden border-b border-slate-50">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`transition-transform duration-700 ease-out group-hover:scale-110 ${item.isLogo ? 'object-contain p-10' : 'object-cover'}`}
                    unoptimized
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-slate-100/50">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-600">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#001a22] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-logo-gradient transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed mb-8 flex-1">
                    {item.desc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-50">
                    <Link href={item.link} className="inline-flex items-center text-[#00a9ce] font-bold tracking-wide text-[13px] uppercase hover:text-[#001a22] transition-colors">
                      View Details <ArrowRight weight="bold" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
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
