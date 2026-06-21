'use client';

import { motion } from "framer-motion";

export const LifeHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-20 px-4 overflow-hidden bg-[#001a22]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-tech-mesh opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00a9ce]/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-slate-700 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-[#00a9ce] text-sm font-semibold tracking-widest uppercase">Why Achtrex</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 tracking-tight leading-none"
        >
          Build the <br /> <span className="text-[#00a9ce] italic">future</span> with us.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Join a team of dreamers, doers, and innovators. At Achtrex, we're not just writing code; we're writing the next chapter of technology.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
