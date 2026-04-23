'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
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
  const [warningMessage, setWarningMessage] = useState("");

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
        setWarningMessage(result.warning || "");
      } else {
        setErrorMessage(result.error || "Failed to submit request.");
        setStatus('error');
        setWarningMessage("");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setErrorMessage("An unexpected error occurred.");
      setStatus('error');
    }
  };

  const services = ["Automotive Data API", "AI Platform Access", "Enterprise Architecture", "Integration Support", "Other"];
  const budgets = ["<$5k", "$5k - $10k", "$10k - $25k", "$25k - $50k", ">$50k"];
  const sources = ["Reference/Documentation", "Search Engine", "Referral", "Other"];

  const inputClasses = "w-full py-4 px-4 border border-white/10 rounded-sm text-white focus:border-primary outline-none transition-colors bg-[#0a0f1c] text-base appearance-none";
  const labelClasses = "text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 block group-focus-within:text-primary transition-colors";

  return (
    <section id="contact" className="py-24 px-6 bg-background border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">Enterprise Partnerships</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Discuss infrastructure <br /> and API limits.
            </h2>
            <p className="text-xl text-gray-400">
              Connect with our deployment team to gain technical access, discuss pipeline integration, or explore custom enterprise architecture deployments.
            </p>
          </motion.div>
        </div>

        {/* Form Section */}
        <form className="space-y-8 max-w-4xl" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
              <label htmlFor="contact-name" className={labelClasses}>Primary Contact *</label>
              <input id="contact-name" type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required className={inputClasses} placeholder="John Doe" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group">
              <label htmlFor="contact-email" className={labelClasses}>Corporate Email *</label>
              <input id="contact-email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required className={inputClasses} placeholder="john@enterprise.com" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="group">
              <label htmlFor="contact-phone" className={labelClasses}>Phone Number</label>
              <input id="contact-phone" type="tel" name="contact" autoComplete="tel" value={formData.contact} onChange={handleChange} className={inputClasses} placeholder="+1 (555) 000-0000" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="group">
              <label htmlFor="contact-company" className={labelClasses}>Organization Name</label>
              <input id="contact-company" type="text" name="company" autoComplete="organization" value={formData.company} onChange={handleChange} className={inputClasses} placeholder="Acme Inc." />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="group relative">
              <label htmlFor="contact-service" className={labelClasses}>Inquiry Type</label>
              <div className="relative">
                <select id="contact-service" name="service" autoComplete="off" value={formData.service} onChange={handleChange} className={inputClasses}>
                  <option value="" disabled className="text-gray-500">Select inquiry type</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="group relative">
              <label htmlFor="contact-budget" className={labelClasses}>Expected Volume/Budget</label>
              <div className="relative">
                <select id="contact-budget" name="budget" autoComplete="off" value={formData.budget} onChange={handleChange} className={inputClasses}>
                  <option value="" disabled className="text-gray-500">Select parameter</option>
                  {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="group relative">
              <label htmlFor="contact-source" className={labelClasses}>Lead Source</label>
              <div className="relative">
                <select id="contact-source" name="source" autoComplete="off" value={formData.source} onChange={handleChange} className={inputClasses}>
                  <option value="" disabled className="text-gray-500">Select source</option>
                  {sources.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="group"
          >
            <label htmlFor="contact-message" className={labelClasses}>Technical Scope / Request *</label>
            <textarea
              id="contact-message"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Describe your infrastructure requirements, API needs, or integration timeline..."
              className={`${inputClasses} resize-y min-h-[120px]`}
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
              className="w-full md:w-auto bg-primary text-white hover:bg-primary/90 rounded-sm px-10 py-4 font-bold tracking-wide"
            >
              {status === 'loading' ? 'Submitting...' : 'Submit Request'}
              <ArrowRight className="ml-2 w-4 h-4 inline-block" />
            </Button>

            {status === 'success' && (
              <div className="flex flex-col gap-2">
                <p className="text-green-500 font-bold text-sm bg-green-500/10 px-4 py-2 rounded-sm">Request submitted. Our technical team will follow up quickly.</p>
                {warningMessage && <p className="text-amber-500 text-xs italic">{warningMessage}</p>}
              </div>
            )}
            {status === 'error' && (
              <p className="text-red-500 font-bold text-sm bg-red-500/10 px-4 py-2 rounded-sm">
                {errorMessage || "Failed to submit request. Please try again."}
              </p>
            )}
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;