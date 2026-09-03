'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { submitContactForm } from '@/app/actions/contact';
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2, AlertCircle, Send, Globe, ArrowRight } from 'lucide-react';

const serviceOptions = [
  'Automotive Data APIs (AutomotiveDataset.com)',
  'Global VIN Decoding & Specification Intelligence',
  'Sales & Inventory DMS Bi-Directional Sync',
  'Custom Automotive Software Development',
  'AAIA Cognitive AI & Diagnostic Reasoning',
  'Enterprise Partnership & Licensing',
  'General Technical Consultation'
];

const countryOptions = [
  'United Arab Emirates',
  'United States',
  'Canada',
  'United Kingdom',
  'Germany',
  'Saudi Arabia',
  'Qatar',
  'Australia',
  'France',
  'India',
  'Other Global Region'
];

export const ContactClient = () => {
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get('subject');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: 'United Arab Emirates',
    service: serviceOptions[0],
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!subjectParam) return;
    switch (subjectParam) {
      case 'software':
        setFormData(prev => ({ ...prev, service: 'Custom Automotive Software Development' }));
        break;
      case 'data':
        setFormData(prev => ({ ...prev, service: 'Automotive Data APIs (AutomotiveDataset.com)' }));
        break;
      case 'ai':
        setFormData(prev => ({ ...prev, service: 'AAIA Cognitive AI & Diagnostic Reasoning' }));
        break;
      case 'infrastructure':
        setFormData(prev => ({ ...prev, service: 'Enterprise Partnership & Licensing' }));
        break;
    }
  }, [subjectParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = new FormData();
    form.append('name', `${formData.firstName} ${formData.lastName}`.trim());
    form.append('email', formData.email);
    form.append('phone', formData.phone || 'N/A');
    form.append('company', formData.company);
    form.append('service', formData.service);
    form.append('source', `Country: ${formData.country}`);
    form.append('message', formData.message);

    try {
      const result = await submitContactForm(form);
      if (result.success) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          country: 'United Arab Emirates',
          service: serviceOptions[0],
          message: ''
        });
      } else {
        setErrorMessage(result.error || 'Failed to submit message. Please try again.');
        setStatus('error');
      }
    } catch (err: any) {
      console.error('Error submitting contact form:', err);
      setErrorMessage(err.message || 'An unexpected error occurred.');
      setStatus('error');
    }
  };

  const inputClasses = "w-full py-3.5 px-4 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-none focus:border-[#F37021] focus:ring-1 focus:ring-[#F37021] transition-colors placeholder:text-slate-400";
  const labelClasses = "block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5";

  return (
    <div className="w-full bg-[#FFFFFF] text-slate-900 font-sans selection:bg-[#F37021] selection:text-white pb-24">
      
      {/* ─── HEADER SECTION ─────────────────────────────────────────────── */}
      <section className="max-w-[1240px] mx-auto px-6 pt-4 pb-14 text-center">
        <span className="text-xs font-black uppercase tracking-widest text-[#F37021] mb-2 block">
          DIRECT COLLABORATION DESK
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
          Contact Achtrex Technology FZCO
        </h1>
        <div className="w-16 h-1 bg-[#F37021] mx-auto mt-3 mb-5 rounded-full" />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
          Whether you need high-volume vehicle data APIs, real-time VIN decoding, or custom dealership cloud software — our engineering team is ready to connect.
        </p>
      </section>

      {/* ─── MAIN CONTENT ───────────────────────────────────────────────── */}
      <section className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column: Direct Channels & Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Support Desk Card */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-8 shadow-sm space-y-6">
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 block mb-1">
                  Global Inquiries
                </span>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Direct Contact Channels
                </h2>
                <div className="w-12 h-1 bg-[#F37021] mt-2 mb-4 rounded-full" />
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Our solutions architecture team is available worldwide to discuss API access tiers, enterprise volume contracts, and tailored platform scoping.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {/* Email Support */}
                <a
                  href="mailto:support@achtrex.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[#F37021] hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F37021]/10 text-[#F37021] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Email Support Desk
                    </span>
                    <span className="font-bold text-sm text-slate-900 group-hover:text-[#F37021] transition-colors">
                      support@achtrex.com
                    </span>
                  </div>
                </a>

                {/* Headquarters Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#F37021]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Global Headquarters
                    </span>
                    <span className="font-bold text-sm text-slate-900">
                      Dubai Silicon Oasis, Dubai, UAE (FZCO)
                    </span>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#F37021]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Guaranteed Response SLA
                    </span>
                    <span className="font-bold text-sm text-slate-900">
                      Within 24 Business Hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Data Perimeter Guarantee */}
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 flex items-start gap-3 shadow-inner">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-slate-600 leading-relaxed">
                  When you connect to an application with Achtrex, you maintain 100% unilateral ownership of your proprietary data perimeter and telemetry queries.
                </p>
              </div>
            </div>

            {/* Book a Meeting Promo Card */}
            <div className="bg-[#1E2226] text-white rounded-2xl p-7 border border-white/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#F37021]/15 rounded-full blur-2xl pointer-events-none" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#F37021] block mb-1">
                Priority Technical Briefing
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Need an architectural walkthrough?
              </h3>
              <p className="text-xs text-slate-300 font-normal leading-relaxed mb-5">
                Schedule a 30-minute private consultation with our Lead System Architect to review API schemas, volume tiers, and custom system integration.
              </p>
              <a
                href="mailto:support@achtrex.com?subject=Schedule%20Architectural%20Briefing"
                className="btn-vibrant-pill !py-2.5 !px-5 !text-xs !uppercase !tracking-wider"
              >
                Request Consultation <ArrowRight className="w-3.5 h-3.5 text-white" />
              </a>
            </div>

          </div>

          {/* Right Column: Comprehensive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-8 sm:p-10 lg:p-12">
              
              <div className="border-b border-slate-100 pb-6 mb-8 text-left">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#F37021] block mb-1">
                  Project Intake & Specifications
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
                  Delivered immediately to <strong className="text-slate-700">support@achtrex.com</strong>.
                </p>
              </div>

              {status === 'success' ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-slate-900">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Achtrex Technology FZCO. Your inquiry has been forwarded to <strong>support@achtrex.com</strong>. An enterprise solution architect will reply within 24 business hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 btn-vibrant-pill !py-2.5 !px-6 !text-xs !uppercase !tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className={labelClasses}>First Name *</label>
                      <input
                        type="text"
                        required
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="e.g. Tariq"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Last Name *</label>
                      <input
                        type="text"
                        required
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="e.g. Al-Mansoor"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className={labelClasses}>Company Work Email *</label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 50 000 0000"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  {/* Company & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className={labelClasses}>Company Name *</label>
                      <input
                        type="text"
                        required
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Auto Mobility LLC"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Country / Region *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        {countryOptions.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Service of Interest */}
                  <div>
                    <label className={labelClasses}>Primary Service of Interest *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelClasses}>Project Scope / Message *</label>
                    <textarea
                      required
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help? Tell us about your vehicle data volume, current platform architecture, or timeline..."
                      className={`${inputClasses} resize-none min-h-[120px] leading-relaxed`}
                    />
                  </div>

                  {/* Error Feedback */}
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                    <p className="text-[11px] text-slate-500 font-normal">
                      By submitting, you agree to receive technical follow-up from Achtrex Support.
                    </p>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-vibrant-pill !px-8 !py-3.5 !text-xs !uppercase !tracking-wider disabled:opacity-60 w-full sm:w-auto"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>{status === 'loading' ? 'Dispatching Message...' : 'Send Message'}</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
