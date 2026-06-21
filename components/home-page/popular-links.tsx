'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Phone, Users, Shield } from 'lucide-react';
import Link from 'next/link';

const links = [
  { name: 'Products & Platforms', href: '/products', icon: <Box className="w-6 h-6 text-primary" />, desc: 'Explore our data engines and AI tools.' },
  { name: 'About Achtrex', href: '/about-us', icon: <Users className="w-6 h-6 text-secondary" />, desc: 'Learn about our mission and engineering culture.' },
  { name: 'Contact Engineering', href: '/contact-us', icon: <Phone className="w-6 h-6 text-green-400" />, desc: 'Direct access to our infrastructure architects.' },
];

export const PopularLinks = () => {
  return (
    <section className="py-14 bg-transparent border-y border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gradient">Popular Links</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <Link href={link.href} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-white hover:bg-slate-50 border border-slate-200 hover:border-white/50 transition-all rounded-xl h-full flex flex-col shadow-sm"
              >
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 transition-colors group-hover:text-[#174395]">Resource 0{i + 1}</div>
                <h3 className="text-xl font-bold text-gradient mb-3 transition-colors">{link.name}</h3>
                <p className="text-sm text-slate-500 font-medium mb-8 flex-grow leading-relaxed">{link.desc}</p>
                <div className="mt-auto flex items-center text-slate-900 group-hover:text-[#174395] text-[11px] font-black tracking-[0.2em] uppercase transition-colors">
                  EXPLORE <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
