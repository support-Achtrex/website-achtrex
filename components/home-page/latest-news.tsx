'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

import { blogPosts } from "@/lib/blog-data";

const LATEST_POSTS = blogPosts.slice(0, 3);

export const LatestNews = () => {
    return (
        <section className="py-24 bg-[#0a0f1c] relative border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <span className="text-gradient text-sm font-bold tracking-widest uppercase mb-3 block">Updates & Announcements</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Latest News</h2>
                    </div>
                    <Link href="/blog" className="flex items-center text-sm font-bold text-white uppercase tracking-widest hover:text-gradient transition-colors">
                        View All News <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {LATEST_POSTS.map((news, index) => (
                        <motion.div 
                            key={news.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer flex flex-col h-full bg-background border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
                        >
                            <Link href={`/blog/${news.slug}`} className="flex flex-col h-full">
                                <div className="relative h-56 w-full border-b border-white/10 overflow-hidden">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${news.image})` }} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded text-xs font-bold text-white border border-white/10 uppercase tracking-widest">
                                        {news.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow relative z-10">
                                    <div className="flex items-center text-xs text-gray-400 mb-4 font-bold uppercase tracking-widest">
                                        <Calendar className="w-3.5 h-3.5 mr-2" />
                                        {news.date}
                                    </div>
                                    <h3 className="text-xl font-bold text-white leading-snug group-hover:text-gradient transition-colors mb-6 line-clamp-3">
                                        {news.title}
                                    </h3>
                                    <div className="mt-auto flex items-center text-white font-bold text-[13px] tracking-widest uppercase group-hover:text-gradient transition-colors">
                                        Read Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
