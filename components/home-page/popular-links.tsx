'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Phone, Users, Shield } from 'lucide-react';
import Link from 'next/link';

const links = [
    { name: 'Products & Platforms', href: '/products', icon: <Box className="w-6 h-6 text-primary" />, desc: 'Explore our data engines and AI tools.' },
    { name: 'About Achtrex', href: '/about-us', icon: <Users className="w-6 h-6 text-secondary" />, desc: 'Learn about our mission and engineering culture.' },
    { name: 'Security Architecture', href: '#', icon: <Shield className="w-6 h-6 text-purple-400" />, desc: 'Read our enterprise compliance documents.' },
    { name: 'Contact Engineering', href: '/contact-us', icon: <Phone className="w-6 h-6 text-green-400" />, desc: 'Direct access to our infrastructure architects.' },
];

export const PopularLinks = () => {
    return (
        <section className="py-20 bg-background border-y border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-10 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-white">Popular Links</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {links.map((link, i) => (
                        <Link href={link.href} key={i}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 bg-[#0a0f1c] hover:bg-white/5 border border-white/10 hover:border-primary/50 transition-all rounded-xl h-full flex flex-col"
                            >
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/50 mb-6 transition-colors group-hover:text-primary">Resource 0{i + 1}</div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">{link.name}</h3>
                                <p className="text-sm text-gray-400 font-medium mb-8 flex-grow leading-relaxed">{link.desc}</p>
                                <div className="mt-auto flex items-center text-white text-[11px] font-black tracking-[0.2em] uppercase group-hover:text-primary transition-colors">
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
