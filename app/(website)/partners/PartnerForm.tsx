'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/buttons";
import { submitPartnerForm } from "@/app/actions/contact";

const PartnerForm = () => {
 const [formData, setFormData] = useState({
 name: "",
 email: "",
 company: "",
 type: "",
 message: ""
 });
 const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
 const { name, value } = e.target;
 setFormData(prev => ({ ...prev, [name]: value }));
 };

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setStatus('loading');
 
 const form = new FormData();
 form.append('name', formData.name);
 form.append('email', formData.email);
 form.append('company', formData.company);
 form.append('type', formData.type);
 form.append('message', formData.message);

 try {
 const result = await submitPartnerForm(form);

 if (result.success) {
 setStatus('success');
 setFormData({ name: "", email: "", company: "", type: "", message: "" });
 } else {
 setStatus('error');
 }
 } catch (error) {
 console.error('Error submitting form:', error);
 setStatus('error');
 }
 };

 const types = ["Solution Integrator", "Reseller", "Referral Partner", "Technology Partner"];

 const inputClasses = "w-full py-4 px-4 border border-slate-200 rounded-none text-slate-900 focus:border-[#00a9ce] focus:ring-1 focus:ring-[#00a9ce] outline-none transition-all bg-[#F8F9FA] text-base appearance-none";
 const labelClasses = "text-slate-600 text-sm font-bold mb-2 block group-focus-within:text-[#00a9ce] transition-colors";

 return (
 <section className="py-24 px-6 bg-[#f4f4f4] border-t border-slate-200">
 <div className="max-w-4xl mx-auto">
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Apply for Partnership</h2>
 <p className="text-slate-500 max-w-2xl mx-auto">
 Fill out the form below and our partner relations team will get back to you within 2 business days.
 </p>
 </div>

 <form className="space-y-6 bg-white p-8 md:p-10 rounded-none border border-slate-200 shadow-sm" onSubmit={handleSubmit}>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="group">
 <label htmlFor="name" className={labelClasses}>Full Name *</label>
 <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClasses} placeholder="John Doe" />
 </div>

 <div className="group">
 <label htmlFor="email" className={labelClasses}>Work Email *</label>
 <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} placeholder="john@company.com" />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="group">
 <label htmlFor="company" className={labelClasses}>Company Name *</label>
 <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} required className={inputClasses} placeholder="Acme Inc." />
 </div>

 <div className="group relative">
 <label htmlFor="type" className={labelClasses}>Partnership Type *</label>
 <div className="relative">
 <select id="type" name="type" value={formData.type} onChange={handleChange} required className={inputClasses}>
 <option value="" disabled className="text-slate-400">Select type</option>
 {types.map(t => <option key={t} value={t}>{t}</option>)}
 </select>
 <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
 </div>
 </div>
 </div>

 <div className="group">
 <label htmlFor="message" className={labelClasses}>Tell us about your business *</label>
 <textarea
 id="message"
 rows={4}
 name="message"
 value={formData.message}
 onChange={handleChange}
 required
 placeholder="Briefly describe your company and how you plan to partner with Achtrex..."
 className={`${inputClasses} resize-none min-h-[120px]`}
 ></textarea>
 </div>

 <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
 <Button
 type="submit"
 disabled={status === 'loading'}
 size="lg"
 className="w-full md:w-auto bg-[#00a9ce] text-white hover:bg-[#001a22] rounded-none px-10 py-4 font-bold tracking-wide transition-all shadow-none"
 >
 {status === 'loading' ? 'Submitting...' : 'Submit Application'}
 <ArrowRight className="ml-2 w-4 h-4 inline-block" />
 </Button>

 {status === 'success' && (
 <p className="text-[#76bc1d] font-bold text-sm bg-[#76bc1d]/10 px-4 py-2 rounded-none border border-[#76bc1d]/20">
 Application submitted! We will contact you soon.
 </p>
 )}
 {status === 'error' && (
 <p className="text-red-600 font-bold text-sm bg-red-50 px-4 py-2 rounded-none border border-red-100">
 Failed to submit application. Please try again.
 </p>
 )}
 </div>
 </form>
 </div>
 </section>
 );
};

export default PartnerForm;
