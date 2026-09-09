'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { submitContactForm } from '@/app/actions/contact';
import { Mail, Phone, MapPin, ExternalLink, CheckCircle2, AlertCircle, Send, ArrowRight } from 'lucide-react';

const serviceOptions = [
  'Automotive Software Builds (DMS, Workshops, Fleet)',
  'Cognitive AI Solutions (AAIA Diagnostics, Multi-Modal)',
  'Automotive Consultation (Operations, Diagnostics, Strategy)',
  'Workshop & Bay Operations Systems',
  'Enterprise Partnership',
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
        setFormData(prev => ({ ...prev, service: 'Automotive Software Builds (DMS, Workshops, Fleet)' }));
        break;
      case 'data':
      case 'consultation':
        setFormData(prev => ({ ...prev, service: 'Automotive Consultation (Operations, Diagnostics, Strategy)' }));
        break;
      case 'ai':
        setFormData(prev => ({ ...prev, service: 'Cognitive AI Solutions (AAIA Diagnostics, Multi-Modal)' }));
        break;
      case 'infrastructure':
        setFormData(prev => ({ ...prev, service: 'Enterprise Partnership' }));
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

  const inputClasses = "w-full py-3.5 px-4 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-none focus:border-[#00A9CE] focus:ring-1 focus:ring-[#00A9CE] transition-colors placeholder:text-slate-400";
  const labelClasses = "block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5";

  return (
    <div className="w-full bg-[#FFFFFF] text-slate-900 font-sans selection:bg-[#F37021] selection:text-white pb-24">
      
      {/* ─── HEADER SECTION ─────────────────────────────────────────────── */}
      <section className="max-w-[1240px] mx-auto px-6 pt-4 pb-14 text-center">
        <span className="text-xs font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE] mb-2 block">
          DIRECT COLLABORATION DESK
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
          Contact Achtrex
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mx-auto mt-3 mb-5 rounded-full" />
        <p className="text-slate-800 text-[15px] sm:text-base leading-[1.8] font-normal max-w-2xl mx-auto">
          Whether you need bespoke automotive software builds, cognitive AI diagnostics, or automotive operational consultation — our engineering team is ready to connect.
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
                <div className="w-12 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] mt-2 mb-4 rounded-full" />
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Our solutions architecture team is available worldwide to discuss custom software builds, cognitive AI models, and tailored platform scoping.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {/* Unified Direct Call & WhatsApp Tab / Card */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#00A9CE] hover:shadow-md transition-all">
                  <div className="mb-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Direct Line &amp; WhatsApp
                    </span>
                    <span className="font-bold text-base text-slate-900">
                      +971 50 222 9587
                    </span>
                  </div>

                  {/* Dual Action Options: Direct Call or WhatsApp */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <a
                      href="tel:+971502229587"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold transition-all hover:border-[#00A9CE] hover:text-[#00A9CE] group"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#00A9CE] group-hover:scale-110 transition-transform" />
                      <span>Direct Call</span>
                    </a>

                    <a
                      href="https://wa.me/971502229587?text=Hi%20there!%20I'd%20like%20to%20learn%20more%20about%20Achtrex's%20solutions."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#128C7E] text-xs font-bold transition-all hover:border-[#25D366] group"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Email Support */}
                <a
                  href="mailto:support@achtrex.com"
                  className="block p-4 rounded-xl bg-white border border-slate-200 hover:border-[#00A9CE] hover:shadow-md transition-all group"
                >
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Email Support Desk
                  </span>
                  <span className="font-bold text-base text-slate-900 group-hover:text-[#00A9CE] transition-colors">
                    support@achtrex.com
                  </span>
                </a>

                {/* Headquarters Location & Embedded Google Map */}
                <div className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs">
                  <div className="p-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Global Headquarters
                    </span>
                    <span className="font-bold text-base text-slate-900 leading-snug block">
                      Dubai Silicon Oasis, Digital Park A5 Building, 6009, UAE
                    </span>
                  </div>

                  {/* Google Map Location */}
                  <div className="w-full h-[220px] bg-slate-100 relative border-t border-slate-100">
                    <iframe
                      src="https://www.google.com/maps?q=Dubai+Silicon+Oasis+Digital+Park+A5+Building+UAE&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Achtrex Location - Dubai Silicon Oasis, Digital Park A5 Building, 6009, UAE"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 text-right">
                    <a
                      href="https://maps.google.com/?q=Dubai+Silicon+Oasis+Digital+Park+A5+Building+UAE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A9CE] hover:text-[#F37021] transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Promo Card */}
            <div className="bg-[#1E2226] text-white rounded-2xl p-7 border border-white/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#00A9CE]/15 rounded-full blur-2xl pointer-events-none" />
              <span className="text-[10px] font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE] block mb-1">
                Priority Technical Briefing
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Need an architectural walkthrough?
              </h3>
              <p className="text-xs text-slate-300 font-normal leading-relaxed mb-5">
                Schedule a 30-minute private consultation with our Lead Automotive Architect to review software scoping, diagnostic AI, and custom system integration.
              </p>
              <a
                href="mailto:support@achtrex.com?subject=Schedule%20Architectural%20Briefing"
                className="btn-navbar-cta"
              >
                <span className="btn-navbar-cta-inner !py-2.5 !px-5 !text-xs !uppercase !tracking-wider">
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00A9CE]" />
                </span>
              </a>
            </div>

          </div>

          {/* Right Column: Comprehensive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-8 sm:p-10 lg:p-12">
              
              <div className="border-b border-slate-100 pb-6 mb-8 text-left">
                <span className="text-[11px] font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE] block mb-1">
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
                    Thank you for reaching out to Achtrex. Your inquiry has been forwarded to <strong>support@achtrex.com</strong>. An enterprise solution architect will reply within 24 business hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 btn-navbar-cta"
                  >
                    <span className="btn-navbar-cta-inner !py-2.5 !px-6 !text-xs !uppercase !tracking-wider">
                      Send Another Message
                    </span>
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
                      className="btn-navbar-cta disabled:opacity-60 w-full sm:w-auto"
                    >
                      <span className="btn-navbar-cta-inner !px-8 !py-3.5 !text-xs !uppercase !tracking-wider">
                        <Send className="w-4 h-4 text-[#00A9CE]" />
                        <span>{status === 'loading' ? 'Dispatching Message...' : 'Send Message'}</span>
                      </span>
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
