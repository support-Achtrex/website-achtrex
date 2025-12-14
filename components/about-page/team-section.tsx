'use client';

import Image from "next/image";
import { Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string | null;
}

interface TeamSectionProps {
    teamMembers: TeamMember[];
}

export const TeamSection = ({ teamMembers }: TeamSectionProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollToEnd = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            container.scrollTo({
                left: container.scrollWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 px-6 bg-[#E8EEF2]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 flex justify-between items-end"
                >
                    <div>
                        <span className="bg-white px-4 py-1 rounded-full text-sm font-medium text-gray-600">Our team</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">Meet our team members</h2>
                        <p className="text-gray-600 max-w-3xl">
                            Behind every successful project is a passionate team. At AchTech, our developers, designers, and strategists unite creativity with precision, building digital solutions that empower brands and redefine how businesses grow online.
                        </p>
                    </div>
                    <button
                        onClick={scrollToEnd}
                        className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-sm"
                        aria-label="Scroll to end"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </motion.div>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group rounded-2xl overflow-hidden min-w-[300px] h-[400px] snap-center shrink-0"
                        >
                            {member.image ? (
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full bg-linear-to-br from-primary/80 to-primary/40 flex items-center justify-center text-white font-bold text-6xl">
                                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                                </div>
                            )}
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-sm opacity-90 mb-4">{member.role}</p>
                                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Facebook size={16} className="cursor-pointer hover:text-[#2496B3]" />
                                    <Twitter size={16} className="cursor-pointer hover:text-[#2496B3]" />
                                    <Linkedin size={16} className="cursor-pointer hover:text-[#2496B3]" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

