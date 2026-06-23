'use client';

import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { submitContactForm } from "@/app/actions/contact";
import { CaretDown } from "@phosphor-icons/react";

export const ContactClient = () => {
 const searchParams = useSearchParams();
 const subject = searchParams.get('subject');

 const [formData, setFormData] = useState({
 firstName: "",
 lastName: "",
 email: "",
 company: "",
 country: "United States",
 phone: "",
 note: ""
 });
 const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
 const [errorMessage, setErrorMessage] = useState("");

 useEffect(() => {
 if (!subject) return;
 
 let noteText = "";
 switch (subject) {
 case 'software':
 noteText = "I am interested in Custom Software Development. I would like to discuss building custom responsive platforms, mobile apps, or enterprise systems to scale our automotive operations.";
 break;
 case 'data':
 noteText = "I am interested in Data & APIs. I would like to explore integrating accurate automotive datasets, VIN decoding, and real-time market values into our applications.";
 break;
 case 'ai':
 noteText = "I am interested in AI Solutions. I would like to learn more about implementing LUMI AI, conversational support agents, and complex workflow automation.";
 break;
 case 'infrastructure':
 noteText = "I am interested in Enterprise Infrastructure. I would like to discuss scalable cloud architecture, high-volume data streaming, and managing cloud operations.";
 break;
 }
 
 if (noteText) {
 setFormData(prev => ({ ...prev, note: noteText }));
 }
 }, [subject]);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
 form.append('name', `${formData.firstName} ${formData.lastName}`.trim());
 form.append('email', formData.email);
 form.append('company', formData.company);
 form.append('phone', formData.phone);
 form.append('source', `Country: ${formData.country}`);
 form.append('message', formData.note || "Enterprise Lead Form Submission");

 try {
 const result = await submitContactForm(form);
 if (result.success) {
 setStatus('success');
 setFormData({
 firstName: "", lastName: "", email: "", company: "", country: "United States", phone: "", note: ""
 });
 setErrorMessage("");
 } else {
 setErrorMessage(result.error || "Failed to submit request.");
 setStatus('error');
 }
 } catch (error) {
 console.error('Error sending message:', error);
 setErrorMessage("An unexpected error occurred.");
 setStatus('error');
 }
 };

 const inputClasses = "w-full py-4 px-5 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:border-[#00a9ce] focus:ring-4 focus:ring-[#00a9ce]/10 outline-none transition-all text-sm bg-slate-50/50 hover:bg-slate-50";

 return (
 <main className="min-h-screen bg-[#f8fafc] text-slate-900 pb-24">
 {/* Dynamic Themed Header */}
 <div className="w-full relative overflow-hidden bg-gradient-to-r from-[#001a22] to-[#004b66] pt-40 pb-32 px-6 shadow-inner">
 <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply pointer-events-none" />
 <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
 <div className="max-w-[1200px] mx-auto relative z-10 text-center">
 <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-md">
 Start Building
 </h1>
 <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
 Partner with Achtrex to scale your automotive data infrastructure.
 </p>
 </div>
 </div>

 {/* Content */}
 <section className="px-6 -mt-16 relative z-20">
 <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
 
 {/* Left Col */}
 <div className="lg:col-span-5 space-y-8">
 <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10 sticky top-32">
 <h2 className="text-2xl font-extrabold tracking-tight text-[#001a22] mb-4">
 Let's talk
 </h2>
 <p className="text-slate-600 mb-8 leading-relaxed font-medium">
 If you have business inquiries or other questions, please fill out the form to contact us. Thank you.
 </p>
 
 <div className="space-y-4">
 <a href="mailto:support@achtrex.com" className="block p-5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md hover:border-[#00a9ce] transition-all group">
 <div>
 <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Support</p>
 <span className="font-semibold text-slate-700">support@achtrex.com</span>
 </div>
 </a>

 <a href="tel:+16133664271" className="block p-5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md hover:border-[#00a9ce] transition-all group">
 <div>
 <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Global Phone</p>
 <span className="font-semibold text-slate-700">+1 613 366-4271</span>
 </div>
 </a>
 </div>

 <div className="mt-8 bg-[#f2fdf5] rounded-xl p-6 border border-green-100/60 text-center md:text-left">
 <p className="text-sm font-medium text-[#46860f] leading-relaxed">
 When you connect to an app with Achtrex, you're in complete control of your enterprise data perimeter.
 </p>
 </div>
 </div>
 </div>

 {/* Right Col (Form) */}
 <div className="lg:col-span-7">
 <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
 <h3 className="text-3xl font-extrabold text-[#001a22] mb-8">Let's build something.</h3>
 
 {status === 'success' ? (
 <div className="py-20 text-center">
 <h4 className="text-3xl font-bold text-[#76bc1d] mb-4">Request Received</h4>
 <p className="text-slate-600 font-medium max-w-sm mx-auto text-lg">
 Our enterprise architecture team will be in touch shortly to assist you.
 </p>
 </div>
 ) : (
 <form onSubmit={handleSubmit} className="space-y-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className={inputClasses} />
 </div>
 <div>
 <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className={inputClasses} />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Company email" className={inputClasses} />
 </div>
 <div>
 <input required type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company name" className={inputClasses} />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="relative">
 <select required name="country" value={formData.country} onChange={handleChange} className={`${inputClasses} appearance-none pr-10`}>
 <option value="United States">United States</option>
 <option value="Canada">Canada</option>
 <option value="United Kingdom">United Kingdom</option>
 <option value="Germany">Germany</option>
 <option value="France">France</option>
 <option value="Australia">Australia</option>
 <option value="Other">Other</option>
 </select>
 <CaretDown weight="bold" className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
 </div>
 <div>
 <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number (optional)" className={inputClasses} />
 </div>
 </div>

 <div>
 <textarea 
 name="note" 
 value={formData.note} 
 onChange={handleChange} 
 placeholder="How can we help? Tell us about your infrastructure needs." 
 rows={4}
 className={`${inputClasses} resize-none`} 
 />
 </div>

 <p className="text-xs text-slate-400 font-medium py-2">
 By submitting this form, I confirm that I have read and understood <a href="/privacy" className="underline hover:text-slate-700">Achtrex's Privacy Statement</a>.
 </p>

 {status === 'error' && (
 <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 text-sm font-medium">
 {errorMessage}
 </div>
 )}

 <button 
 type="submit" 
 disabled={status === 'loading'}
 className="group relative flex items-center justify-center w-full bg-[#001a22] text-white font-bold py-5 px-6 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
 >
 <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
 <span className="relative z-10 text-sm tracking-widest uppercase">
 {status === 'loading' ? 'Submitting...' : 'Talk with our team'}
 </span>
 </button>
 </form>
 )}
 </div>
 </div>

 </div>
 </section>
 </main>
 );
};
