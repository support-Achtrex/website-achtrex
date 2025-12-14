'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className={`mb-4 rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-gray-50' : 'bg-gray-50'}`}>
      <button
        className="w-full flex justify-between items-center text-left p-6"
        onClick={onClick}
      >
        <span className={`font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-[#2496B3]' : 'text-gray-900'}`}>
          {question}
        </span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// FAQ Section Component
export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does Achtrex provide?",
      answer: "We offer a comprehensive range of digital services including custom software development, mobile app development, web design and development, UI/UX design, and digital transformation consulting. We help businesses turn their ideas into scalable, market-ready products."
    },
    {
      question: "How do you handle project pricing and estimation?",
      answer: "We provide transparent pricing based on the scope and complexity of your project. After an initial consultation to understand your requirements, we offer a detailed proposal outlining the costs, timeline, and deliverables, ensuring there are no hidden surprises."
    },
    {
      question: "Do you work with startups and early-stage companies?",
      answer: "Yes, we love working with startups! We specialize in helping founders validate their ideas, build MVPs (Minimum Viable Products), and scale their technology as they grow. Our partnership approach is designed to support you from concept to launch and beyond."
    },
    {
      question: "What is your development process like?",
      answer: "We follow an agile development methodology that emphasizes collaboration and flexibility. Our process includes discovery, design, development, testing, and deployment, with regular check-ins and demos to ensure the product aligns with your vision at every stage."
    },
    {
      question: "How do we get started with a project?",
      answer: "Getting started is simple. You can reach out to us through our contact form or book a consultation. We'll schedule a discovery call to discuss your project goals, technical needs, and timeline, and then propose a tailored solution to move forward."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 space-y-6"
          >
            <span className="text-lg text-gray-600 font-medium">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-red-hat-display">
              Frequently asked questions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We know you have some questions in mind, we have tried to list the most important ones.
            </p>
          </motion.div>

          {/* Right Column - Accordion */}
          <div className="md:col-span-8 space-y-4">
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