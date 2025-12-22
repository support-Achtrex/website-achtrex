'use client';

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const processes = [
    {
        title: "Discovery & Strategy",
        description: "Deep dive into your goals to build a solid roadmap.",
        icon: Search
    },
    {
        title: "Design & Prototyping",
        description: "Crafting intuitive interfaces for seamless user experiences.",
        icon: PenTool
    },
    {
        title: "Development & Testing",
        description: "Building scalable systems with robust code quality.",
        icon: Code
    },
    {
        title: "Launch & Growth",
        description: "Deploying with confidence and data-driven scaling.",
        icon: Rocket
    }
];

export const ProcessSection = () => {
    return (
        <section className="py-20 px-4 bg-background relative overflow-hidden text-left">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] opacity-20"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12 space-y-3">
                    <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Process</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white">How We Build</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processes.map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl relative group hover:bg-white/10 transition-all hover:-translate-y-1"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-5xl font-bold font-display text-white group-hover:opacity-20 transition-opacity">
                                0{index + 1}
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                                <process.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{process.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {process.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
