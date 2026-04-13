'use client';

import { motion } from "framer-motion";
import { Database, SearchCode, Cloud, Rocket } from "lucide-react";

const processes = [
    {
        title: "Proprietary Data Core",
        description: "We aggregate, structure, and refine massive datasets to serve as the foundation of our specific products.",
        icon: Database
    },
    {
        title: "Intelligent Processing",
        description: "Utilizing AI and machine learning to extract insights, decode complex variables, and ensure absolute enterprise accuracy.",
        icon: SearchCode
    },
    {
        title: "API Provisioning",
        description: "Exposing our deep architectures through robust, developer-friendly REST and GraphQL endpoints.",
        icon: Cloud
    },
    {
        title: "Subscription Scaling",
        description: "Deploying our solutions globally via highly available SaaS infrastructure and subscription models.",
        icon: Rocket
    }
];

export const ProcessSection = () => {
    return (
        <section className="py-20 px-6 bg-background relative overflow-hidden text-left border-y border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 space-y-3">
                    <span className="text-gradient text-sm font-bold tracking-widest uppercase block">SaaS Go-To-Market</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Product Architecture</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processes.map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 border border-white/10 p-8 rounded-2xl relative group hover:bg-slate-800 transition-all hover:border-logo-gradient border-b-2"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 text-6xl font-bold text-white group-hover:opacity-10 transition-opacity">
                                0{index + 1}
                            </div>
                            <div className="w-12 h-12 bg-logo-gradient rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                                <process.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">{process.title}</h3>
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
