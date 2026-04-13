'use client';

import { motion } from 'framer-motion';

export const PortfolioHero = () => {
    return (
        <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-24 px-6 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-red-hat-display font-black text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Our <span className="text-primary">Portfolio</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Explore our collection of successful projects where we've transformed ideas into powerful digital solutions. Each project represents our commitment to excellence and innovation.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};
