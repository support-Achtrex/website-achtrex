'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export const TeamGrid = ({ members }: { members: any[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.length > 0 ? (
                members.map((member, index) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative"
                    >
                        <div className="relative h-[420px] w-full rounded-2xl overflow-hidden mb-6 border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-primary/50 transition-all duration-500 shadow-lg group-hover:shadow-primary/10">
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 z-10" />

                            <Image
                                src={member.image || '/team/placeholder-user.jpg'}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                priority={index < 4}
                            />

                            {/* Socials Overlay (Slide Up) */}
                            <div className="absolute inset-x-0 bottom-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-black/60 backdrop-blur-md border-t border-white/10">
                                <div className="flex justify-center gap-4">
                                    <a href={member.linkedin || '#'} className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors text-white">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href={member.twitter || '#'} className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors text-white">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                    <a href={`mailto:${member.email}`} className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors text-white">
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                            <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">{member.role}</p>
                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 px-2">
                                {member.bio}
                            </p>
                        </div>
                    </motion.div>
                ))
            ) : (
                <div className="col-span-full text-center py-10 text-white/50">
                    <p>No team members found. Initialize the database to see the team.</p>
                </div>
            )}
        </div>
    );
};
