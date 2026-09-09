'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Building2, User, Globe, FileText, Send } from 'lucide-react';
import { submitPartnerForm } from '@/app/actions/contact';

const partnershipTracks = [
  'Strategic Collaboration & Joint Venture',
  'Technology Co-Innovation & AI Research Partner',
  'Supplier & Hardware Provider (Telematics, Diagnostics, Parts)',
  'OEM & Automotive Manufacturer Alliance',
  'Commercial & Regional Distribution Alliance',
  'Executive Advisory & Automotive Specialist',
  'Other Collaborative Initiative'
];

const targetMarkets = [
  'Global Mobility & International Operations',
  'Middle East & GCC Region',
  'North America (US & Canada)',
  'Europe & United Kingdom',
  'Automotive Hardware & Diagnostic Devices',
  'Dealership Networks & Retail Groups',
  'Fleet Operators & Commercial Mobility',
  'Cross-Border Distribution & Market Expansion'
];

const companySizes = [
  '1 - 10 Employees',
  '11 - 50 Employees',
  '51 - 200 Employees',
  '201 - 1,000 Employees',
  '1,000+ Enterprise'
];

const timelines = [
  'Immediate (Within 30 Days)',
  'Near Term (1 - 3 Months)',
  'Mid Term (3 - 6 Months)',
  'Exploratory / Planning Stage'
];

export const PartnerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    company: '',
    website: '',
    country: '',
    companySize: companySizes[1],
    partnershipTrack: partnershipTracks[0],
    targetMarket: targetMarkets[0],
    timeline: timelines[0],
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone);
    payload.append('role', formData.role);
    payload.append('company', formData.company);
    
    let cleanWebsite = formData.website.trim();
    if (cleanWebsite && !/^https?:\/\//i.test(cleanWebsite)) {
      cleanWebsite = `https://${cleanWebsite}`;
    }
    payload.append('website', cleanWebsite);
    payload.append('country', formData.country);
    payload.append('companySize', formData.companySize);
    payload.append('type', formData.partnershipTrack);
    payload.append('targetMarket', formData.targetMarket);
    payload.append('timeline', formData.timeline);
    payload.append('message', formData.message);

    try {
      const result = await submitPartnerForm(payload);

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          role: '',
          company: '',
          website: '',
          country: '',
          companySize: companySizes[1],
          partnershipTrack: partnershipTracks[0],
          targetMarket: targetMarkets[0],
          timeline: timelines[0],
          message: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to submit application. Please try again.');
      }
    } catch (err: any) {
      console.error('Error submitting partner application:', err);
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    }
  };

  const inputClasses = "w-full py-3 px-3.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#F37021] focus:ring-1 focus:ring-[#F37021] transition-colors placeholder:text-slate-400";
  const labelClasses = "block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5";

  return (
    <div id="partner-apply-form" className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6 sm:p-10 lg:p-12">
      
      {/* Form Header */}
      <div className="border-b border-slate-200/80 pb-6 mb-8 text-left">
        <span className="text-[11px] font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE] block mb-1">
          Strategic Alliances & Ecosystem Relations
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Achtrex Partnership & Collaboration Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
          All inquiries are reviewed directly by Achtrex Executive Leadership and delivered securely to <strong className="text-slate-700">support@achtrex.com</strong>.
        </p>
      </div>

      {status === 'success' ? (
        <div className="p-8 sm:p-12 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-extrabold text-emerald-950">
            Inquiry Submitted Successfully!
          </h4>
          <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. Your partnership inquiry has been delivered directly to <strong>support@achtrex.com</strong>. An executive director will review your profile and connect within 1–2 business days.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: Contact Representative */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-2">
              <User className="w-4 h-4 text-[#F37021]" />
              <span>1. Contact Representative</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={labelClasses}>Full Name *</label>
                <input
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. David Al-Mansoor"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={labelClasses}>Work Email Address *</label>
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
                <label className={labelClasses}>Direct Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971 50 000 0000"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={labelClasses}>Job Title / Role *</label>
                <input
                  type="text"
                  required
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. Head of Technology / VP Alliances"
                  className={inputClasses}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Organization Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-2">
              <Building2 className="w-4 h-4 text-[#F37021]" />
              <span>2. Organization Profile</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={labelClasses}>Company Legal Name *</label>
                <input
                  type="text"
                  required
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Apex Mobility Solutions Ltd."
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={labelClasses}>Company Website / URL *</label>
                <input
                  type="text"
                  required
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  placeholder="e.g. company.com or https://company.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={labelClasses}>Headquarters Country / City *</label>
                <input
                  type="text"
                  required
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. Dubai, United Arab Emirates"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={labelClasses}>Organization Size *</label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  {companySizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Partnership Alignment */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-2">
              <Globe className="w-4 h-4 text-[#F37021]" />
              <span>3. Partnership Category & Strategic Scope</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <label className={labelClasses}>Partnership Category *</label>
                <select
                  name="partnershipTrack"
                  value={formData.partnershipTrack}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  {partnershipTracks.map((track) => (
                    <option key={track} value={track}>{track}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClasses}>Primary Market / Scope *</label>
                <select
                  name="targetMarket"
                  value={formData.targetMarket}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  {targetMarkets.map((market) => (
                    <option key={market} value={market}>{market}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClasses}>Expected Timeline *</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  {timelines.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 4: Collaboration Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-2">
              <FileText className="w-4 h-4 text-[#F37021]" />
              <span>4. Scope & Strategic Objectives</span>
            </div>

            <div>
              <label className={labelClasses}>
                Tell us about your organization, strategic objectives, or supplier/collaboration scope *
              </label>
              <textarea
                required
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your organization, strategic objectives, proposed collaboration or supply structure, and how we can achieve mutual success..."
                className={`${inputClasses} resize-none min-h-[110px] leading-relaxed`}
              />
            </div>
          </div>

          {/* Error Feedback */}
          {status === 'error' && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <p className="text-[11px] text-slate-500 font-normal">
              By submitting, you agree to receive communications from Achtrex Strategic Alliances &amp; Capital Relations.
            </p>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-navbar-cta disabled:opacity-60"
            >
              <span className="btn-navbar-cta-inner !px-8 !py-3.5 !text-xs !uppercase !tracking-wider">
                <Send className="w-4 h-4 text-[#00A9CE]" />
                <span>{status === 'loading' ? 'Dispatching Inquiry...' : 'Submit Partnership Inquiry'}</span>
              </span>
            </button>
          </div>

        </form>
      )}

    </div>
  );
};
export default PartnerForm;
