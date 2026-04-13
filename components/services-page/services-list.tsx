'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { productsData, capabilitiesData } from './services-data';
import { ServiceModal } from './service-modal';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export function ServiceCard({ icon: Icon, title, description, highlighted = false, onClick }: any) {
    return (
        <motion.div
            variants={cardVariants}
            onClick={onClick}
            className={`
                group relative overflow-hidden rounded-3xl p-8 h-full transition-all duration-300
                border border-white/10 bg-white/5 backdrop-blur-md
                hover:bg-white/10 hover:border-primary/50 hover:-translate-y-1
                flex flex-col cursor-pointer
            `}
        >
            <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300
                ${highlighted ? 'bg-primary text-white' : 'bg-white/10 text-primary group-hover:bg-primary group-hover:text-white'}
            `}>
                <Icon className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 font-display group-hover:text-primary transition-colors">
                {title}
            </h3>

            <p className="text-muted-foreground leading-relaxed flex-grow mb-6 line-clamp-4">
                {description}
            </p>

            <div className="flex items-center text-sm font-semibold text-white/50 group-hover:text-primary transition-colors mt-auto">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Gradient Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
}

export const ServicesList = () => {
    const [selectedService, setSelectedService] = useState<any>(null);

    return (
        <section className="py-24 px-6 bg-[image:var(--bg-dark-purple)] relative z-10">
            <div className="max-w-7xl mx-auto">
                {/* Flagship Products Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-display font-bold text-white">Flagship Products</h2>
                        <div className="h-px flex-grow bg-white/10" />
                    </div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {productsData.map((product, index) => (
                            <ServiceCard
                                key={index}
                                {...product}
                                onClick={() => setSelectedService(product)}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Platform Capabilities Section */}
                <div>
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-display font-bold text-white">Platform Capabilities</h2>
                        <div className="h-px flex-grow bg-white/10" />
                    </div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {capabilitiesData.map((capability, index) => (
                            <ServiceCard
                                key={index}
                                {...capability}
                                onClick={() => setSelectedService(capability)}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            <ServiceModal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                service={selectedService}
            />
        </section>
    );
};
