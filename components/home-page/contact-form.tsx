'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/buttons";
import { submitContactForm } from "@/app/actions/contact";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
    service: "",
    budget: "",
    source: "",
    message: ""
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.contact); // Map contact to phone
    form.append('company', formData.company);
    form.append('service', formData.service);
    form.append('budget', formData.budget);
    form.append('source', formData.source);
    form.append('message', formData.message);

    try {
      const result = await submitContactForm(form);

      if (result.success) {
        setStatus('success');
        setFormData({
          name: "", email: "", contact: "", company: "",
          service: "", budget: "", source: "", message: ""
        });
        setErrorMessage("");
      } else {
        setErrorMessage(result.error || "Failed to send message.");
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setErrorMessage("An unexpected error occurred.");
      setStatus('error');
    }
  };

  const services = ["App Development", "Web Development", "UI/UX Design", "Digital Marketing", "IT Consultation", "Other"];
  const budgets = ["<$5k", "$5k - $10k", "$10k - $25k", "$25k - $50k", ">$50k"];
  const sources = ["Google Search", "Social Media", "Referral", "Blog/Article", "Other"];

  const inputClasses = "w-full py-3 border-b border-white/10 text-white placeholder-white/20 focus:border-primary outline-none transition-colors bg-transparent text-base appearance-none";
  const labelClasses = "text-muted-foreground text-xs uppercase tracking-wider group-focus-within:text-primary transition-colors";

  return (
    <section id="contact" className="py-20 px-4 bg-[image:var(--bg-dark-purple)] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-white opacity-10 pointer-events-none" />
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">Let's Connect</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white font-display">
              Have a vision? <br />
              Let's make it <span className="text-primary italic">reality</span>.
            </h2>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 mt-6 md:mt-0"
          >
            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-muted-foreground hover:text-white">
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Form Section */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-1 group">
              <label htmlFor="contact-name" className={labelClasses}>Your Name *</label>
              <input id="contact-name" type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required className={inputClasses} placeholder="John Doe" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-1 group">
              <label htmlFor="contact-email" className={labelClasses}>Email Address *</label>
              <input id="contact-email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required className={inputClasses} placeholder="john@example.com" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-1 group">
              <label htmlFor="contact-phone" className={labelClasses}>Phone Number</label>
              <input id="contact-phone" type="tel" name="contact" autoComplete="tel" value={formData.contact} onChange={handleChange} className={inputClasses} placeholder="+1 (555) 000-0000" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="space-y-1 group">
              <label htmlFor="contact-company" className={labelClasses}>Company Name</label>
              <input id="contact-company" type="text" name="company" autoComplete="organization" value={formData.company} onChange={handleChange} className={inputClasses} placeholder="Acme Inc." />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="space-y-1 group relative">
              <label htmlFor="contact-service" className={labelClasses}>Service Interested In</label>
              <div className="relative">
                <select id="contact-service" name="service" autoComplete="off" value={formData.service} onChange={handleChange} className={inputClasses}>
                  <option value="" disabled className="bg-black text-gray-500">Select a service</option>
                  {services.map(s => <option key={s} value={s} className="bg-[#111] text-white">{s}</option>)}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="space-y-1 group relative">
              <label htmlFor="contact-budget" className={labelClasses}>Budget Range</label>
              <div className="relative">
                <select id="contact-budget" name="budget" autoComplete="off" value={formData.budget} onChange={handleChange} className={inputClasses}>
                  <option value="" disabled className="bg-black text-gray-500">Select budget</option>
                  {budgets.map(b => <option key={b} value={b} className="bg-[#111] text-white">{b}</option>)}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="space-y-1 group relative">
              <label htmlFor="contact-source" className={labelClasses}>How did you hear about us?</label>
              <div className="relative">
                <select id="contact-source" name="source" autoComplete="off" value={formData.source} onChange={handleChange} className={inputClasses}>
                  <option value="" disabled className="bg-black text-gray-500">Select source</option>
                  {sources.map(s => <option key={s} value={s} className="bg-[#111] text-white">{s}</option>)}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-1 group"
          >
            <label htmlFor="contact-message" className={labelClasses}>Message *</label>
            <textarea
              id="contact-message"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project goals, timeline, and requirements..."
              className="w-full py-3 border-b border-white/10 text-white placeholder-white/20 focus:border-primary outline-none transition-colors bg-transparent resize-none text-base min-h-[100px]"
            ></textarea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-6 pt-4"
          >
            <Button
              type="submit"
              disabled={status === 'loading'}
              size="lg"
              className="w-full md:w-auto bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 text-base font-semibold"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            {status === 'success' && (
              <p className="text-emerald-400 font-medium text-sm animate-fade-in-up">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 font-medium text-sm animate-fade-in-up">
                {errorMessage || "Failed to send message. Please try again."}
              </p>
            )}
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;