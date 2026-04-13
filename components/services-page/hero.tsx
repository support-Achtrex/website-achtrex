'use client';

import { motion } from "framer-motion";

export const ServicesHero = () => {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center py-20 px-4 overflow-hidden bg-[image:var(--bg-dark-teal)]">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
            <div className="absolute inset-0 bg-tech-mesh opacity-20 pointer-events-none" />

            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                    <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Products & Platforms</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold mb-8 font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/60 tracking-tight leading-tight"
                >
                    Our Products & <br /> <span className="text-primary italic">Platforms</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                    Achtrex builds scalable digital platforms powered by data, APIs, and AI to enable businesses and developers to create intelligent solutions.
                </motion.p>
            </div>
        </section>
    );
};
