'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
    {
        name: "Achim Godwin Tetteh",
        role: "CEO & Operations Project Manager",
        image: "/team/achim_real.jpg",
        bio: "Leading the vision and operations at Achtrex, driving innovation in digital product development.",
        socials: { linkedin: "#", twitter: "#", mail: "mailto:achim@achtrex.com" }
    },
    {
        name: "Dr. Emmanuella Yeboah-Appiah",
        role: "CFO",
        image: "/team/emmanuella_v2.jpg",
        bio: "Steering the financial strategy and ensuring sustainable growth for our global operations.",
        socials: { linkedin: "#", twitter: "#", mail: "mailto:emmanuella@achtrex.com" }
    },
    {
        name: "Kojo Thompson",
        role: "SEO & ASO",
        image: "/team/kojo_real.png",
        bio: "Optimizing digital presence and driving organic growth through advanced search strategies.",
        socials: { linkedin: "#", twitter: "#", mail: "mailto:kojo@achtrex.com" }
    },
    {
        name: "Junior Achim",
        role: "Business Analyst and QA",
        image: "/team/junior_real.jpg",
        bio: "Ensuring product quality and aligning business strategies with technical execution.",
        socials: { linkedin: "#", twitter: "#", mail: "mailto:junior@achtrex.com" }
    },
    {
        name: "Rashid Ahmed",
        role: "Backend Developer",
        image: "/team/rashid.png",
        bio: "Architecting scalable server-side solutions and robust APIs that power our high-performance applications.",
        socials: { linkedin: "#", twitter: "#", mail: "mailto:rashid@achtrex.com" }
    },
    {
        name: "Kelvin Davis",
        role: "Software Engineer",
        image: "/team/kelvin-davis.png",
        bio: "Building robust, scalable software solutions with a focus on code quality and performance optimization.",
        socials: { linkedin: "#", twitter: "#", mail: "mailto:kelvin@achtrex.com" }
    },
    {
        name: "Dede Davis",
        role: "DevOps Engineer",
        image: "/team/dede_v2.jpg",
        bio: "Streamlining deployment pipelines and ensuring maximum system reliability and uptime.",
        socials: { linkedin: "#", twitter: "#", mail: "mailto:dede@achtrex.com" }
    }
];

export const TeamSection = () => {
    return (
        <section className="pt-40 pb-24 bg-[image:var(--bg-dark-blue)] relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-mesh opacity-10 pointer-events-none" />
            {/* Hero Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="text-sm font-semibold text-primary tracking-widest uppercase">Our Leadership</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
                        The minds behind the <br /> <span className="text-gradient">innovation</span>.
                    </h1>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
                        We are a diverse team of visionaries, builders, and strategists united by a single purpose: to redefine what's possible in the digital age.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
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
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />

                                {/* Socials Overlay (Slide Up) */}
                                <div className="absolute inset-x-0 bottom-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-black/60 backdrop-blur-md border-t border-white/10">
                                    <div className="flex justify-center gap-4">
                                        <a href={member.socials.linkedin} className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors text-white">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href={member.socials.twitter} className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors text-white">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a href={member.socials.mail} className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors text-white">
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
                    ))}
                </div>
            </div>
        </section>
    );
};
