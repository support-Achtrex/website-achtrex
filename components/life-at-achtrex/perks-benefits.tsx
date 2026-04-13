'use client';

import { Laptop, Banknote, Users, HeartPulse, Coffee, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

export function PerksBenefits() {
    const perks = [
        {
            icon: Laptop,
            title: "Remote-First Hybrid",
            description: "Work from where you feel most productive. We support a flexible hybrid model that respects your time."
        },
        {
            icon: Banknote,
            title: "Competitive Salary",
            description: "We value top talent and ensure our compensation packages reflect your expertise and impact."
        },
        {
            icon: Users,
            title: "Growth & Mentorship",
            description: "Continuous learning is in our DNA. Access courses, conferences, and 1-on-1 mentorship."
        },
        {
            icon: HeartPulse,
            title: "Comprehensive Health",
            description: "Your well-being matters. We provide extensive health coverage for you and your dependents."
        },
        {
            icon: Coffee,
            title: "Team Retreats",
            description: "We work hard and play hard. Regular team bondings and annual retreats in exciting locations."
        },
        {
            icon: Plane,
            title: "Paid Time Off",
            description: "Recharge to perform. Generous vacation policies to ensure you stay fresh and inspired."
        }
    ];

    return (
        <section className="py-24 px-6 bg-[image:var(--bg-dark-teal)] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-white">Perks & Benefits</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We take care of our team so they can take care of the products.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {perks.map((perk, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-secondary/50 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg bg-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-black transition-colors">
                                    <perk.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold font-display text-white">{perk.title}</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed pl-14">
                                {perk.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
