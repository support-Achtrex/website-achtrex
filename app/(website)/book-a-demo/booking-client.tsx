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

    const inputClasses = "w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-colors text-[15px] bg-white";

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] max-w-4xl w-full overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[600px]">
                
                {/* Left Sidebar - Meeting Info */}
                <div className="w-full md:w-1/3 bg-white p-8 md:border-r border-gray-100">
                    {step === 2 && (
                        <button onClick={handleBack} className="text-blue-600 hover:text-blue-800 p-2 -ml-2 mb-4 rounded-full hover:bg-blue-50 transition-colors">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    )}
                    <Image src="/logo.png" alt="Achtrex Logo" width={160} height={45} className="mb-4 object-contain opacity-90 invert grayscale" />
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Book a meeting</h1>
                    
                    <div className="flex flex-col gap-4 text-gray-600 font-medium">
                        <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5" />
                            <span>30 min</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5" />
                            <span>Phone call / Meet</span>
                        </div>
                        {selectedDate && selectedTime && step === 2 && (
                            <div className="flex items-start gap-3 mt-2 text-gray-800">
                                <Clock className="w-5 h-5 mt-0.5 text-gray-600" />
                                <div>
                                    <p className="font-semibold text-blue-600">{selectedTime}</p>
                                    <p>{format(selectedDate, "EEEE, MMMM d, yyyy")}</p>
                                </div>
                            </div>
                        )}
                        <div className="flex items-center gap-3 mt-2">
                            <Globe className="w-5 h-5" />
                            <span className="text-sm">UTC Time</span>
                        </div>
                    </div>
                </div>

                {/* Right Area - Content */}
                <div className="w-full md:w-2/3 p-8">
                    {status === 'success' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">You are scheduled</h2>
                            <p className="text-gray-600">A calendar invitation has been sent to your email address.</p>
                        </div>
                    ) : step === 1 ? (
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Select a Date & Time</h2>
                                <DayPicker
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                    className="!m-0 text-gray-800 calendar-custom"
                                    disabled={{ before: new Date(), dayOfWeek: [0, 6] }}
                                    classNames={{
                                        day_selected: "!bg-blue-600 !text-white hover:!bg-blue-700",
                                        day_today: "text-blue-600 font-bold",
                                    }}
                                />
                            </div>
                            
                            {selectedDate && (
                                <div className="w-full md:w-[200px]">
                                    <p className="text-gray-700 mb-4 font-medium">{format(selectedDate, "EEEE, MMM d")}</p>
                                    <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                        {timeSlots.map(time => (
                                            <button
                                                key={time}
                                                onClick={() => handleTimeSelect(time)}
                                                className="py-3 px-4 rounded-md border border-blue-200 text-blue-600 font-semibold hover:border-blue-600 transition-colors w-full text-center"
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
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Enter Details</h2>
                            <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1">Name *</label>
                                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className={inputClasses} />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1">Email *</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} />
                                </div>
                                <div>
                                    <button type="button" className="text-blue-600 font-semibold text-sm border border-blue-600 rounded-full px-4 py-1.5 hover:bg-blue-50 transition-colors">
                                        Add Guests
                                    </button>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1">Phone Number *</label>
                                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 " className={inputClasses} />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1">Please share anything that will help prepare for our meeting.</label>
                                    <textarea name="note" value={formData.note} onChange={handleChange} rows={3} className={`${inputClasses} resize-none`} />
                                </div>

                                <div className="pt-4 text-sm text-gray-600 leading-relaxed">
                                    By proceeding, you confirm that you have read and agree to <span className="text-blue-600 font-semibold cursor-pointer">Achtrex's Invitee Terms</span> and <span className="text-blue-600 font-semibold cursor-pointer">Privacy Notice</span>.
                                </div>

                                {status === 'error' && (
                                    <p className="text-red-500 text-sm">{errorMessage}</p>
                                )}

                                <button 
                                    type="submit" 
                                    disabled={status === 'loading'}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors disabled:opacity-70 mt-2"
                                >
                                    {status === 'loading' ? 'Scheduling...' : 'Schedule Event'}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{__html: `
                .calendar-custom .rdp-day {
                    width: 46px;
                    height: 46px;
                    border-radius: 50%;
                    background: #f0f7ff;
                    color: #2563eb;
                    font-weight: 500;
                    margin: 4px;
                    transition: all 0.2s;
                }
                .calendar-custom .rdp-day:hover:not([disabled]) {
                    background: #2563eb;
                    color: white;
                }
                .calendar-custom .rdp-button[disabled]:not(.rdp-day_selected) {
                    background: transparent;
                    color: #9ca3af;
                }
                .calendar-custom .rdp-head_cell {
                    color: #4b5563;
                    font-weight: 600;
                    font-size: 13px;
                }
                .calendar-custom .rdp-caption_label {
                    font-weight: 700;
                    color: #111827;
                }
                .calendar-custom .rdp-nav_button {
                    color: #2563eb;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
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
