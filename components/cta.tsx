'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const CTASection = () => {
  const router = useRouter();
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-primary">
      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
        <div className="relative w-full h-full max-w-7xl mx-auto">
          <Image
            src="/cta/Group 47.png"
            alt="Background Pattern"
            fill
            className="object-contain opacity-50"
            priority
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 font-red-hat-display leading-tight"
        >
          Ready to write your own success story?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 opacity-90 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Partner with our team to design, build, and scale digital products users love. Together we will build, design and scale products beyond your imaginations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button onClick={() => router.push('/contact-us')} className="bg-white text-[#0052cc] hover:bg-gray-100 transition-colors font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:scale-105 transform duration-200">
            Talk to Us Today
          </button>
        </motion.div>
      </div>
    </section >
  );
};
