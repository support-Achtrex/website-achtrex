'use client';

import { Users, Code, Globe, Zap, Heart, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export function CoreValues() {
    const values = [
        {
            icon: Users,
            title: "Human-Centered",
            description: "We design for people first. Empathy acts as our compass in every line of code we write."
        },
        {
            icon: Zap,
            title: "Innovation First",
            description: "We challenge the status quo. If there's a better way to do it, we'll find it, or build it."
        },
        {
            icon: Globe,
            title: "Global Impact",
            description: "Building locally, thinking globally. Our solutions are designed to scale across borders."
        },
        {
            icon: Code,
            title: "Excellence in Craft",
            description: "Good enough isn't enough. We obsess over details, performance, and code quality."
        },
        {
            icon: Heart,
            title: "Transparent & Open",
            description: "Trust is our currency. We believe in open communication with our team and clients."
        },
        {
            icon: Target,
            title: "Result Driven",
            description: "We don't just ship features; we deliver measurable value and business outcomes."
        }
    ];

    return (
        <section className="py-24 px-6 bg-[image:var(--bg-dark-blue)] relative border-t border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-tech-mesh opacity-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-white">Our Core Values</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        The principles that guide our decisions and shape our culture.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <value.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-display text-white group-hover:text-primary transition-colors">{value.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
