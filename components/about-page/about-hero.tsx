'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AboutHero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                        We build the <span className="text-gradient">future</span> <br className="hidden md:block" />
                        of digital experiences.
                    </h1>

                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
                        Achtrex is a next-generation product studio. We combine data-driven strategy with premium design to help brands scale, innovate, and lead in their industries.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
