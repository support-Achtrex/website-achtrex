"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft } from "lucide-react";

interface StatItem {
  value: string;
  suffix: string;
  label: string;
}

interface OutcomeItem {
  title: string;
  image: string;
}

interface PortfolioDetailProps {
  data: {
    title: string;
    kicker: string;
    heroImage: string;
    stats: StatItem[];
    challenge: string;
    scope: string[];
    outcomes: OutcomeItem[];
  };
  backLink: string;
}

export const PortfolioDetailTemplate: React.FC<PortfolioDetailProps> = ({ data, backLink }) => {
  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-[#11243b] pt-32 pb-24 px-6 overflow-hidden">
        {/* Background texture/overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center text-center">
          <Link href={backLink} className="self-start md:self-center mb-8 inline-flex items-center text-orange-500 hover:text-orange-400 font-semibold transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-orange-500 font-black tracking-widest uppercase text-sm md:text-base mb-4">
              {data.kicker}
            </h4>
            <h1 className="text-4xl md:text-4xl font-black text-white mb-8 tracking-tight">
              {data.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full -mt-12 relative z-20 px-6">
        <div className="max-w-[1000px] mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex items-center justify-center text-4xl md:text-4xl font-black text-[#11243b] mb-2">
                  {stat.value}
                  <span className="text-orange-500 text-3xl md:text-4xl">{stat.suffix}</span>
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Scope Section */}
      <section className="w-full py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16">
          {/* The Challenge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#11243b] mb-6">The Challenge</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {data.challenge}
            </p>
          </motion.div>

          {/* Product Scope */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100"
          >
            <h2 className="text-3xl font-black text-[#11243b] mb-8">Product Scope</h2>
            <ul className="space-y-4">
              {data.scope.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-semibold text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl md:text-4xl font-black text-[#11243b] mb-16">The Outcome</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {data.outcomes.map((outcome, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg bg-slate-100 aspect-video"
              >
                <Image
                  src={outcome.image}
                  alt={outcome.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
                    <h3 className="text-xl font-black text-[#11243b]">{outcome.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <Link href="/" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-black uppercase tracking-wider rounded-full hover:bg-[#11243b] hover:-translate-y-1 transition-all shadow-[0_8px_20px_rgba(249,115,22,0.3)]">
              See Live Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
