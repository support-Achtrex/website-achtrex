'use client';

import React, { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { ChevronDown } from "lucide-react";

export const ContactClient = () => {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        // Map country to source to keep the existing action working
        form.append('source', `Country: ${formData.country}`);
        form.append('message', formData.note || "Plaid-style Lead Form Submission");

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

    const inputClasses = "w-full py-3 px-4 border border-slate-300 rounded-none text-slate-700 placeholder-slate-400 focus:border-[#00a9ce] focus:ring-1 focus:ring-[#00a9ce] outline-none transition-colors text-[14px] bg-white";

    return (
        <main className="min-h-[90vh] bg-[#f4f4f4] relative flex flex-col justify-center pt-24 pb-16 overflow-hidden">
            {/* Topographical background overlay */}
            <div 
                className="absolute inset-0 opacity-10 pointer-events-none z-0"
                style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='topo' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 30c15 0 15-30 30-30s15 30 30 30 15-30 30-30v60c-15 0-15-30-30-30s-15 30-30 30-15-30-30-30V30z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23topo)'/%3E%3C/svg%3E")`,
                backgroundSize: '120px 120px'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 mb-16">
                    
                    {/* Left side text */}
                    <div className="lg:w-1/2 lg:pt-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight">
                            <span className="text-[#00a9ce]">Start</span> <span className="text-slate-900">building</span><br />
                            <span className="text-[#00a9ce]">better</span> <span className="text-slate-900">automotive</span><br />
                            <span className="text-[#00a9ce]">products</span>
                        </h1>
                        <div className="mt-12 text-slate-900/90">
                            <h3 className="text-xl font-bold mb-4 font-display text-slate-900">Direct Contact</h3>
                            <div className="flex flex-col gap-4">
                                <a href="mailto:support@achtrex.com" className="flex items-center gap-3 hover:text-slate-900 transition-colors text-[#00a9ce]">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <span className="font-semibold text-lg text-slate-900">support@achtrex.com</span>
                                </a>
                                <a href="tel:+16133664271" className="flex items-center gap-3 hover:text-slate-900 transition-colors text-[#00a9ce]">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <span className="font-semibold text-lg text-slate-900">+1 613 366-4271</span>
                                </a>

                                <div className="flex items-center gap-3 text-[#00a9ce]">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <span className="font-semibold text-lg text-slate-900">Global Remote Operations</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side form card */}
                    <div className="lg:w-1/2 w-full max-w-lg">
                        {/* The glowing border effect behind the card */}
                        <div className="relative">
                            
                            <div className="relative bg-white border border-[#00a9ce]/20 rounded-none p-6 md:p-8 shadow-md">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 font-display">Let's get started</h3>
                                
                                {status === 'success' ? (
                                    <div className="py-12 text-center">
                                        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Request Received</h4>
                                        <p className="text-slate-400">Our team will be in touch shortly to help you start building.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className={inputClasses} />
                                            </div>
                                            <div>
                                                <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className={inputClasses} />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Company email" className={inputClasses} />
                                            </div>
                                            <div>
                                                <input required type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company name" className={inputClasses} />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                            </div>
                                            <div>
                                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number (optional)" className={inputClasses} />
                                            </div>
                                        </div>

                                        <div>
                                            <textarea 
                                                name="note" 
                                                value={formData.note} 
                                                onChange={handleChange as any} 
                                                placeholder="How can we help? (optional)" 
                                                rows={3}
                                                className={`${inputClasses} resize-none`} 
                                            />
                                        </div>

                                        <p className="text-[12px] text-slate-400 pt-2 pb-4">
                                            By submitting this form, I confirm that I have read and understood <a href="/privacy" className="underline hover:text-slate-700">Achtrex's Privacy Statement</a>.
                                        </p>

                                        {status === 'error' && (
                                            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
                                        )}

                                        <button 
                                            type="submit" 
                                            disabled={status === 'loading'}
                                            className="w-full relative group overflow-hidden rounded-none disabled:opacity-70 transition-all bg-[#76bc1d] hover:bg-transparent border border-[#76bc1d]"
                                        >
                                            <div className="relative w-full text-white group-hover:text-[#76bc1d] font-bold text-[15px] px-8 py-4 rounded-none transition-colors duration-300">
                                                {status === 'loading' ? 'Submitting...' : 'Talk with our team'}
                                            </div>
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#081622] border border-[#00a9ce]/20 rounded-none px-6 py-5 flex flex-col md:flex-row items-center justify-between text-white w-full shadow-md mt-8">
                    <p className="font-semibold text-[15px] text-center md:text-left mb-2 md:mb-0">
                        When you connect to an app with Achtrex, you're in control of who has access to your data.
                    </p>
                    <a href="/products" className="font-bold text-[15px] text-[#00a9ce] hover:text-white transition-colors whitespace-nowrap">
                        Manage your connections with Achtrex Portal »
                    </a>
                </div>
            </div>
        </main>
    );
};
