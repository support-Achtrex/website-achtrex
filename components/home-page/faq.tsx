'use client';

import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className={`mb-4 border-b border-white/10 overflow-hidden`}>
      <button
        className="w-full flex justify-between items-center text-left py-4 group"
        onClick={onClick}
      >
        <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-white group-hover:text-primary/80'}`}>
          {question}
        </span>
        <div className={`p-1.5 rounded-full border border-white/5 bg-white/5 transition-colors duration-300 group-hover:bg-primary/20 group-hover:border-primary/20 group-hover:text-primary`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6 text-muted-foreground text-base leading-relaxed max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What capabilities does Achtrex offer?",
      answer: "We deliver full-cycle product engineering. This includes scalable web & mobile applications, enterprise software, AI/ML integration, and end-to-end digital transformation strategies designed for growth."
    },
    {
      question: "How do you ensure project success?",
      answer: "We employ a rigorous agile methodology paired with clear milestones. From initial discovery to final deployment, we maintain transparent communication and iterative feedback loops to ensure the final product exceeds expectations."
    },
    {
      question: "Do you partner with early-stage ventures?",
      answer: "Absolutely. We specialize in turning complex ideas into market-ready MVPs. We help founders navigate technical decisions, prioritize features, and build a solid foundation for scaling."
    },
    {
      question: "What is your typical engagement model?",
      answer: "We adapt to your needs. Whether it's a dedicated team extension, a fixed-scope project, or a long-term strategic partnership, we structure our engagement to provide maximum value and flexibility."
    },
    {
      question: "How do we initiate a collaboration?",
      answer: "Start by reaching out via our contact form. We'll schedule a technical discovery session to deeply understand your challenges and propose a roadmap tailored to your business objectives."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 space-y-4"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Support</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight font-display">
              Common <br /> Questions
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Everything you need to know about partnering with us. Can't find the answer? Contact our team directly.
            </p>
          </motion.div>

          {/* Right Column - Accordion */}
          <div className="md:col-span-8 space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};