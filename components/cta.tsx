'use client'

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/buttons";

export const CTASection = () => {
  const router = useRouter();

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display text-white tracking-tight leading-tight"
        >
          Explore our platforms or <br />
          <span className="text-gradient">get in touch to collaborate</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl mb-10 text-muted-foreground max-w-xl mx-auto font-light leading-relaxed"
        >
          Turn your visionary ideas into world-class digital reality.
          We are the engineering partner you've been waiting for.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            onClick={() => router.push('/contact-us')}
            className="bg-white text-black hover:bg-gray-200 font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_30px_-10px_rgba(255,255,255,0.2)] hover:scale-105 transform duration-200"
          >
            Start Your Journey
          </Button>
        </motion.div>
      </div>
    </section >
  );
};
