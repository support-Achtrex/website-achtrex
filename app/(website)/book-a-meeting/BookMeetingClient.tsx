'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  CheckCircle2, 
  ArrowRight, 
  ChevronLeft, 
  Building, 
  Mail, 
  User, 
  Phone, 
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Globe2,
  ExternalLink
} from 'lucide-react';
import { STUDIO_CONFIG } from '@/data/studio-data';
import { submitContactForm } from '@/app/actions/contact';
import { TechDrivingDynamics } from '@/components/studio/TechDrivingDynamics';

const MEETING_TYPES = [
  {
    id: 'discovery',
    title: 'Initial Discovery & Creative Briefing',
    duration: '30 mins',
    description: 'High-level discussion of project goals, timelines, budgets, and creative direction.',
    icon: Sparkles,
    badge: 'Popular',
  },
  {
    id: 'technical',
    title: '3D Spatial & Real-Time Tech Demo',
    duration: '45 mins',
    description: 'Deep dive into 3D configurators, WebGL pipelines, Three.js engineering, or digital twins.',
    icon: Video,
    badge: 'Engineering',
  },
  {
    id: 'ai-systems',
    title: 'Enterprise AI & Autonomous Systems',
    duration: '45 mins',
    description: 'Architecting multi-agent reasoning, RAG platforms, and custom AI enterprise integrations.',
    icon: Globe2,
    badge: 'AI & Data',
  },
  {
    id: 'executive',
    title: 'Executive Partnership & Commercial Scope',
    duration: '60 mins',
    description: 'Comprehensive agency retainer, dedicated pods, enterprise master service agreements.',
    icon: Building,
    badge: 'Partnership',
  },
];

const TIME_SLOTS = [
  '09:30 AM',
  '11:00 AM',
  '01:30 PM',
  '03:00 PM',
  '04:30 PM',
  '06:00 PM',
];

export function BookMeetingClient() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedMeeting, setSelectedMeeting] = useState(MEETING_TYPES[0]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  const [showCalendlyEmbed, setShowCalendlyEmbed] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Generate next 10 business days for instant booking
  const getUpcomingDays = () => {
    const days = [];
    const today = new Date();
    let current = new Date(today);
    // start from tomorrow
    current.setDate(current.getDate() + 1);

    while (days.length < 10) {
      const dayOfWeek = current.getDay();
      // Skip weekends (Sunday=0, Saturday=6, or adjust for Gulf/Global weekdays)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        days.push(new Date(current));
      }
      current.setDate(current.getDate() + 1);
    }
    return days;
  };

  const upcomingDays = getUpcomingDays();

  // Set initial date on first render
  if (!selectedDate && upcomingDays.length > 0) {
    const first = upcomingDays[0];
    const formatted = first.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    setSelectedDate(formatted);
  }

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('company', company);
      formData.append('phone', phone);
      formData.append('service', selectedMeeting.title);
      formData.append('budget', 'Scheduled Strategic Meeting');
      formData.append('source', 'Book a Meeting Page');
      formData.append(
        'message',
        `[CONFIRMED MEETING BOOKING]\nType: ${selectedMeeting.title} (${selectedMeeting.duration})\nDate: ${selectedDate}\nTime: ${selectedTime} GST\n\nClient Notes:\n${notes || 'No extra notes provided.'}`
      );

      const res = await submitContactForm(formData);
      if (res && res.error) {
        setErrorMsg(res.error);
      } else {
        setStep(4); // Confirmed screen
      }
    } catch (err: any) {
      setErrorMsg(err?.message || 'Failed to confirm booking. Please try again or reach out directly.');
    } finally {
      setSubmitting(false);
    }
  };

  // Generate .ics calendar download
  const downloadIcs = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Achtrex Studio//Book A Meeting//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Achtrex Briefing: ${selectedMeeting.title}`,
      `DESCRIPTION:Strategic meeting with Achtrex Technology Studio.\\nDate: ${selectedDate} at ${selectedTime} GST.\\nContact: support@achtrex.com`,
      'LOCATION:Google Meet / Achtrex Studio Virtual Room',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `achtrex-meeting-${selectedMeeting.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#070A0F] text-white pt-28 sm:pt-36 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden font-sans">
      {/* Background Ambient Velocity Streamlines */}
      <TechDrivingDynamics variant="minimal" showTelemetry={false} className="opacity-25" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        {/* Header Breadcrumb & Title */}
        <div className="max-w-4xl mb-12 sm:mb-16 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00A9CE]">
            <span>Achtrex Direct Scheduling</span>
            <span>&bull;</span>
            <span>Dubai Headquartered</span>
          </div>

          <h1 className="font-clash text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.04]">
            Book a Strategic Meeting
          </h1>

          <p className="font-clash text-lg sm:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
            Meet directly with our technology leaders and creative directors. Reserve your session below without external redirects.
          </p>
        </div>

        {/* Embedded Calendly Fallback Toggle */}
        <div className="mb-8 flex items-center justify-between p-4 bg-white/[0.03] border border-white/10 rounded-2xl">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-white/80">
            <CalendarIcon className="w-5 h-5 text-[#00A9CE]" />
            <span>Prefer our interactive calendar widget?</span>
          </div>
          <button
            onClick={() => setShowCalendlyEmbed(!showCalendlyEmbed)}
            className="px-4 py-2 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {showCalendlyEmbed ? 'Switch to Step-by-Step Form' : 'Embed Calendly Live View'}
          </button>
        </div>

        {showCalendlyEmbed ? (
          /* Live Inline Embedded Calendly (Stays on Achtrex.com) */
          <div className="w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-2 min-h-[700px] border border-white/10">
            <iframe
              src="https://calendly.com/achtrex-support/30min?embed_domain=achtrex.com&embed_type=Inline"
              width="100%"
              height="720"
              frameBorder="0"
              title="Schedule a meeting with Achtrex"
              className="w-full h-[720px] rounded-2xl"
            />
          </div>
        ) : (
          /* Bespoke Interactive Achtrex Booking Engine */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Step-by-Step Workflow */}
            <div className="lg:col-span-8 bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
              {/* Stepper Progress */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-[#00A9CE] text-white' : 'bg-white/10 text-white/50'}`}>
                    1
                  </span>
                  <span className={step === 1 ? 'text-white font-semibold' : 'text-white/50'}>
                    Meeting Focus
                  </span>
                </div>
                <div className="w-8 h-[1px] bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-[#00A9CE] text-white' : 'bg-white/10 text-white/50'}`}>
                    2
                  </span>
                  <span className={step === 2 ? 'text-white font-semibold' : 'text-white/50'}>
                    Date &amp; Time
                  </span>
                </div>
                <div className="w-8 h-[1px] bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-[#00A9CE] text-white' : 'bg-white/10 text-white/50'}`}>
                    3
                  </span>
                  <span className={step === 3 ? 'text-white font-semibold' : 'text-white/50'}>
                    Your Details
                  </span>
                </div>
              </div>

              {/* STEP 1: Select Meeting Type */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-clash text-2xl font-normal text-white">
                      Select consultation scope
                    </h3>
                    <p className="text-sm text-white/60 mt-1">
                      Choose the area that best fits what you are building.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {MEETING_TYPES.map((m) => {
                      const Icon = m.icon;
                      const isSelected = selectedMeeting.id === m.id;
                      return (
                        <div
                          key={m.id}
                          onClick={() => setSelectedMeeting(m)}
                          className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'bg-white/10 border-[#00A9CE] shadow-[0_0_25px_rgba(0,169,206,0.2)]'
                              : 'bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.05]'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-[#00A9CE] text-white' : 'bg-white/10 text-white/70'}`}>
                                <Icon size={20} />
                              </div>
                              <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                                {m.badge}
                              </span>
                            </div>
                            <h4 className="font-clash text-lg font-medium text-white mb-2 leading-snug">
                              {m.title}
                            </h4>
                            <p className="text-xs text-white/60 font-light leading-relaxed">
                              {m.description}
                            </p>
                          </div>

                          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                            <span className="flex items-center gap-1.5">
                              <Clock size={13} />
                              {m.duration}
                            </span>
                            <span className={isSelected ? 'text-[#00A9CE] font-bold' : 'text-white/40'}>
                              {isSelected ? 'Selected' : 'Select'}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-clash text-xs tracking-wider uppercase font-medium hover:bg-neutral-200 transition-all cursor-pointer shadow-lg"
                    >
                      <span>Continue to Schedule</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Select Date & Time Slot */}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="font-clash text-2xl font-normal text-white">
                      Pick a Date &amp; Time
                    </h3>
                    <p className="text-sm text-white/60 mt-1">
                      All times displayed in Gulf Standard Time (GST • UTC+4). Video link provided immediately upon booking.
                    </p>
                  </div>

                  {/* Date Selector Row */}
                  <div className="space-y-3">
                    <label className="block font-mono text-xs uppercase tracking-wider text-white/70">
                      Available Dates (Next 10 Business Days)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                      {upcomingDays.map((d, idx) => {
                        const dayName = d.toLocaleDateString('en-GB', { weekday: 'short' });
                        const dayNum = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
                        const fullStr = d.toLocaleDateString('en-GB', {
                          weekday: 'short',
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        });
                        const isSelected = selectedDate === fullStr;

                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedDate(fullStr)}
                            className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#00A9CE] text-white border-[#00A9CE] shadow-md'
                                : 'bg-white/[0.03] border-white/10 hover:border-white/30 text-white/80'
                            }`}
                          >
                            <div className="font-mono text-[10px] uppercase opacity-75">{dayName}</div>
                            <div className="font-clash text-base font-medium mt-0.5">{dayNum}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-3">
                    <label className="block font-mono text-xs uppercase tracking-wider text-white/70">
                      Select Time Slot (GST / Dubai)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {TIME_SLOTS.map((slot) => {
                        const isSelected = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`p-3 rounded-xl border font-mono text-xs tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                              isSelected
                                ? 'bg-white text-black font-bold border-white shadow-md'
                                : 'bg-white/[0.03] border-white/10 hover:border-white/30 text-white/80'
                            }`}
                          >
                            <Clock size={13} className={isSelected ? 'text-black' : 'text-[#00A9CE]'} />
                            <span>{slot}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors cursor-pointer"
                    >
                      <ChevronLeft size={14} />
                      <span>Back to Focus</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-clash text-xs tracking-wider uppercase font-medium hover:bg-neutral-200 transition-all cursor-pointer shadow-lg"
                    >
                      <span>Continue to Details</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Attendee Details Form */}
              {step === 3 && (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-clash text-2xl font-normal text-white">
                      Confirm Your Details
                    </h3>
                    <p className="text-sm text-white/60 mt-1">
                      We will dispatch calendar coordinates and video conference access to this email.
                    </p>
                  </div>

                  {/* Summary Callout */}
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                    <div>
                      <span className="text-white/40 block">Meeting:</span>
                      <span className="text-white font-medium">{selectedMeeting.title} ({selectedMeeting.duration})</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">Scheduled Time:</span>
                      <span className="text-[#00A9CE] font-bold">{selectedDate} at {selectedTime} GST</span>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                        Your Full Name <span className="text-[#00A9CE]">*</span>
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-3.5 top-3.5 text-white/40" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Alex Morgan"
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00A9CE]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                        Work Email Address <span className="text-[#00A9CE]">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3.5 top-3.5 text-white/40" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alex@company.com"
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00A9CE]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                        Company / Brand Name
                      </label>
                      <div className="relative">
                        <Building size={15} className="absolute left-3.5 top-3.5 text-white/40" />
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Porsche Motors or Stealth AI"
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00A9CE]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                        Phone / WhatsApp (Optional)
                      </label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3.5 top-3.5 text-white/40" />
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+971 50 ... or +1 ..."
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00A9CE]"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                        Brief Project Overview / Specific Topics
                      </label>
                      <div className="relative">
                        <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-white/40" />
                        <textarea
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Tell us what you are looking to build, design, or solve..."
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00A9CE]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors cursor-pointer"
                    >
                      <ChevronLeft size={14} />
                      <span>Back to Calendar</span>
                    </button>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-clash text-xs tracking-wider uppercase font-medium hover:bg-neutral-200 transition-all disabled:opacity-50 cursor-pointer shadow-lg"
                    >
                      <span>{submitting ? 'Confirming Session...' : 'Confirm Meeting Reservation'}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 4: Confirmed State */}
              {step === 4 && (
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
                      Session Confirmed
                    </span>
                    <h3 className="font-clash text-3xl sm:text-4xl font-normal text-white">
                      We Look Forward to Meeting With You
                    </h3>
                    <p className="text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
                      Your briefing invitation for <span className="text-white font-medium">{selectedMeeting.title}</span> on{' '}
                      <span className="text-[#00A9CE] font-bold">{selectedDate} at {selectedTime} GST</span> has been registered.
                    </p>
                  </div>

                  <div className="p-6 bg-white/[0.04] border border-white/10 rounded-2xl max-w-md mx-auto text-left space-y-2 font-mono text-xs text-white/80">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/50">Attendee:</span>
                      <span className="font-medium text-white">{name}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/50">Email:</span>
                      <span className="font-medium text-white">{email}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/50">Platform:</span>
                      <span className="text-emerald-400 font-semibold">Google Meet (Link Dispatched)</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={downloadIcs}
                      className="px-6 py-3 rounded-full bg-[#00A9CE] text-white font-clash text-xs tracking-wider uppercase font-medium hover:bg-[#0092b3] transition-colors cursor-pointer shadow-md"
                    >
                      Download Calendar Invite (.ics)
                    </button>
                    <Link
                      href="/"
                      className="px-6 py-3 rounded-full border border-white/20 text-white font-clash text-xs tracking-wider uppercase hover:bg-white/10 transition-colors"
                    >
                      Return to Studio
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Studio Coordinates & Assurance Card */}
            <div className="lg:col-span-4 space-y-6">
              {/* Card 1: Studio Assurance */}
              <div className="p-6 sm:p-8 bg-white/[0.03] border border-white/10 rounded-3xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#00A9CE]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-clash text-base font-medium text-white">Direct Studio Access</h4>
                    <p className="text-xs text-white/50">No sales intermediaries</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs font-light text-white/70 leading-relaxed border-t border-white/10 pt-4">
                  <p>
                    You will be meeting directly with senior technical architects and creative directors who build production systems.
                  </p>
                  <p>
                    All discussions and early architectural materials shared during our sessions are covered under mutual non-disclosure (NDA).
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-2.5 text-xs font-mono text-white/60">
                  <div className="flex items-center justify-between">
                    <span>Response Time:</span>
                    <span className="text-white font-medium">&lt; 2 Hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Meeting Room:</span>
                    <span className="text-white font-medium">Google Meet / Zoom</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Headquarters:</span>
                    <span className="text-white font-medium">Dubai, UAE</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Immediate Contact Channels */}
              <div className="p-6 sm:p-8 bg-white/[0.03] border border-white/10 rounded-3xl space-y-4 font-mono text-xs">
                <span className="text-[10px] uppercase tracking-widest text-[#00A9CE] block">
                  Need Immediate Assistance?
                </span>

                <div className="space-y-3 pt-1">
                  <a
                    href="tel:+971502229587"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white"
                  >
                    <span>Direct Studio Line:</span>
                    <span className="text-[#00A9CE] font-bold">+971 50 222 9587</span>
                  </a>
                  <a
                    href="mailto:support@achtrex.com"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white"
                  >
                    <span>Direct Inquiries:</span>
                    <span className="text-white font-bold">support@achtrex.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
