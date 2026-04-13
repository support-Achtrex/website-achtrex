import React from 'react';
import { Pause, StopCircle } from 'lucide-react';

const TimeTracker = () => {
    return (
        <div className="bg-primary rounded-3xl p-6 shadow-sm border border-primary/20 h-full relative overflow-hidden text-white flex flex-col justify-between">
            <div className="relative z-10">
                <h3 className="text-lg font-medium text-blue-100 mb-6">Time Tracker</h3>

                <div className="text-4xl font-bold mb-8 font-mono tracking-wider">
                    01:24:08
                </div>

                <div className="flex items-center gap-4">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-gray-200 transition-colors">
                        <Pause size={20} fill="currentColor" />
                    </button>
                    <button className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                        <StopCircle size={20} fill="currentColor" />
                    </button>
                </div>
            </div>

            {/* Abstract Background Waves */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 50 Q 25 30 50 50 T 100 50 V 100 H 0 Z" fill="var(--secondary)" />
                    <path d="M0 60 Q 25 40 50 60 T 100 60 V 100 H 0 Z" fill="var(--primary)" />
                    <path d="M0 70 Q 25 50 50 70 T 100 70 V 100 H 0 Z" fill="#000000" />
                </svg>
            </div>
        </div>
    );
};

export default TimeTracker;
