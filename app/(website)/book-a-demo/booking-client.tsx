'use client';

import React, { useState } from "react";
import { submitBookingForm } from "@/app/actions/booking";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { Clock, Phone, ChevronLeft, Globe } from "lucide-react";
import Image from "next/image";
import "react-day-picker/dist/style.css";

export const BookingClient = () => {
 const [step, setStep] = useState(1);
 const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
 const [selectedTime, setSelectedTime] = useState<string | null>(null);
 const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
 const [errorMessage, setErrorMessage] = useState("");
 
 const [formData, setFormData] = useState({
 name: "",
 email: "",
 guests: "",
 phone: "",
 note: ""
 });

 const timeSlots = [
 "09:00", "09:30", "10:00", "10:30", 
 "11:00", "11:30", "13:00", "13:30", 
 "14:00", "14:30", "15:00", "15:30"
 ];

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
 const { name, value } = e.target;
 setFormData(prev => ({ ...prev, [name]: value }));
 };

 const handleTimeSelect = (time: string) => {
 setSelectedTime(time);
 setStep(2);
 };

 const handleBack = () => {
 setStep(1);
 setSelectedTime(null);
 };

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 if (!selectedDate || !selectedTime) return;

 setStatus('loading');

 const datetimeStr = `${format(selectedDate, "EEEE, MMMM d, yyyy")} at ${selectedTime}`;

 const form = new FormData();
 form.append('name', formData.name);
 form.append('email', formData.email);
 form.append('guests', formData.guests);
 form.append('phone', formData.phone);
 form.append('message', formData.note);
 form.append('datetime', datetimeStr);

 try {
 const result = await submitBookingForm(form);
 if (result.success) {
 setStatus('success');
 setErrorMessage("");
 } else {
 setErrorMessage(result.error || "Failed to book demo.");
 setStatus('error');
 }
 } catch (error) {
 setErrorMessage("An unexpected error occurred.");
 setStatus('error');
 }
 };

  const inputClasses = "w-full py-3.5 px-4 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:border-[#00a9ce] focus:ring-2 focus:ring-[#00a9ce]/20 outline-none transition-all text-sm bg-slate-50 focus:bg-white font-medium";

  return (
    <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center py-24 px-4 font-sans text-slate-900">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full overflow-hidden border border-slate-200 flex flex-col md:flex-row min-h-[620px]">
        
        {/* Left Sidebar - Meeting Info */}
        <div className="w-full md:w-1/3 bg-slate-50/80 p-8 md:border-r border-slate-200 flex flex-col justify-between">
          <div>
            {step === 2 && (
              <button 
                onClick={handleBack} 
                className="text-[#00a9ce] hover:text-[#001a22] p-2 -ml-2 mb-4 rounded-full hover:bg-slate-200/50 transition-colors flex items-center gap-1 text-xs font-bold"
              >
                <ChevronLeft className="w-4 h-4" /> Back to times
              </button>
            )}
            <Image src="/logo.png" alt="Achtrex Logo" width={140} height={40} className="mb-6 object-contain opacity-90" />
            <h1 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Book a Demo</h1>
            <p className="text-xs text-slate-500 font-medium mb-6">
              Connect with an Achtrex solutions architect to explore live API datasets, AI diagnostics, and custom platform integration.
            </p>
            
            <div className="flex flex-col gap-4 text-slate-600 font-semibold text-xs sm:text-sm">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                <Clock className="w-4 h-4 text-[#00a9ce]" />
                <span>30 min Technical Walkthrough</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                <Phone className="w-4 h-4 text-[#00a9ce]" />
                <span>Google Meet / Screen Share</span>
              </div>
              {selectedDate && selectedTime && step === 2 && (
                <div className="flex items-start gap-3 p-3 bg-sky-50 rounded-xl border border-[#00a9ce]/30 text-slate-800">
                  <Clock className="w-4 h-4 mt-0.5 text-[#00a9ce]" />
                  <div>
                    <p className="font-bold text-[#00a9ce]">{selectedTime}</p>
                    <p className="text-xs font-medium text-slate-600">{format(selectedDate, "EEEE, MMMM d, yyyy")}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Globe className="w-4 h-4 text-slate-400" />
            <span>UTC Timezone</span>
          </div>
        </div>

        {/* Right Area - Content */}
        <div className="w-full md:w-2/3 p-8 sm:p-10 flex flex-col justify-center">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">You are scheduled!</h2>
              <p className="text-sm text-slate-600 font-medium max-w-sm">
                A calendar invitation and Google Meet link have been sent to your email address.
              </p>
            </div>
          ) : step === 1 ? (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="text-lg font-black text-slate-900 mb-4 tracking-tight">Select a Date & Time</h2>
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="!m-0 text-slate-800 calendar-custom"
                  disabled={{ before: new Date(), dayOfWeek: [0, 6] }}
                  classNames={{
                    selected: "!bg-[#00a9ce] !text-white hover:!bg-[#001a22]",
                    today: "text-[#00a9ce] font-bold",
                  }}
                />
              </div>
              
              {selectedDate && (
                <div className="w-full md:w-[200px]">
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">{format(selectedDate, "EEEE, MMM d")}</p>
                  <div className="flex flex-col gap-2 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className="py-2.5 px-4 rounded-xl border border-slate-200 text-[#00a9ce] font-bold text-xs hover:border-[#00a9ce] hover:bg-[#00a9ce]/5 transition-all w-full text-center shadow-xs cursor-pointer"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Enter Your Details</h2>
              <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Full Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className={inputClasses} placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Work Email *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Phone Number *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Notes / Goals</label>
                  <textarea name="note" value={formData.note} onChange={handleChange} rows={3} className={`${inputClasses} resize-none`} placeholder="Tell us what you'd like to see in the demo..." />
                </div>

                <div className="pt-2 text-xs text-slate-500 font-medium leading-relaxed">
                  By proceeding, you confirm that you agree to <span className="text-[#00a9ce] font-bold">Achtrex Terms</span> and <span className="text-[#00a9ce] font-bold">Privacy Policy</span>.
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-xs font-bold">{errorMessage}</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-[#00a9ce] hover:bg-[#001a22] text-white font-black text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all disabled:opacity-70 mt-2 shadow-md cursor-pointer"
                >
                  {status === 'loading' ? 'Scheduling Demo...' : 'Confirm Demo Session'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .calendar-custom .rdp-day {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #f8fafc;
          color: #00a9ce;
          font-weight: 600;
          margin: 3px;
          transition: all 0.2s;
        }
        .calendar-custom .rdp-day:hover:not([disabled]) {
          background: #00a9ce;
          color: white;
        }
        .calendar-custom .rdp-button[disabled]:not(.rdp-day_selected) {
          background: transparent;
          color: #cbd5e1;
        }
        .calendar-custom .rdp-head_cell {
          color: #64748b;
          font-weight: 700;
          font-size: 12px;
        }
        .calendar-custom .rdp-caption_label {
          font-weight: 800;
          color: #0f172a;
        }
        .calendar-custom .rdp-nav_button {
          color: #00a9ce;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}} />
    </main>
  );
};
