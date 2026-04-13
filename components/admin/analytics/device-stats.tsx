'use client';

import React from 'react';
import { MoreHorizontal, ArrowUpRight } from 'lucide-react';

const DeviceStats = () => {
    const devices = [
        { name: 'Mac OS', value: 81, color: 'bg-amber-300' },
        { name: 'Windows', value: 69, color: 'bg-amber-200' },
        { name: 'iOS', value: 55, color: 'bg-amber-100' },
        { name: 'Android', value: 47, color: 'bg-orange-100' },
    ];

    return (
        <div className="bg-white p-8 rounded-[32px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100/50 h-full flex flex-col hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-gray-800 font-display text-lg">Device users</h3>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <select className="appearance-none bg-gray-50 border-none text-xs font-semibold text-gray-500 rounded-xl px-4 py-2 pr-8 outline-none cursor-pointer hover:bg-gray-100 transition-colors font-montserrat">
                            <option>This month</option>
                            <option>Last month</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-xl transition-colors">
                        <MoreHorizontal size={20} />
                    </button>
                </div>
            </div>

            <div className="mb-8">
                <p className="text-xs text-gray-500 mb-2 font-montserrat font-medium uppercase tracking-wide">Total visitors</p>
                <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold text-gray-900 font-manrope tracking-tight">2147</span>
                    <span className="bg-emerald-50 text-emerald-500 text-xs font-bold px-2.5 py-1 rounded-lg border border-emerald-100 font-manrope">+8.21%</span>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-6 mb-8">
                {devices.map((device, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                        <span className="w-20 text-xs font-semibold text-gray-500 shrink-0 font-montserrat">{device.name}</span>
                        <div className="flex-1 relative h-8">
                            {/* Grid lines */}
                            <div className="absolute inset-0 flex justify-between px-0 pointer-events-none opacity-50">
                                <div className="w-px h-full bg-gray-50"></div>
                                <div className="w-px h-full bg-gray-50"></div>
                                <div className="w-px h-full bg-gray-50"></div>
                                <div className="w-px h-full bg-gray-50"></div>
                                <div className="w-px h-full bg-gray-50"></div>
                            </div>

                            {/* Bar */}
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 h-4 rounded-full ${device.color} shadow-sm group-hover:scale-y-110 transition-transform duration-300`}
                                style={{ width: `${device.value}%` }}
                            ></div>

                            {/* Value Label */}
                            <span
                                className="absolute top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-700 ml-3 font-manrope"
                                style={{ left: `${device.value}%` }}
                            >
                                {device.value}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* X Axis Labels */}
            <div className="flex justify-between text-[10px] font-medium text-gray-400 pl-20 pr-4 mb-8 font-manrope">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
            </div>

            <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                <p className="text-xs font-semibold text-gray-600 font-montserrat">You almost maintain very good statistics</p>
                <button className="flex items-center gap-1.5 text-xs font-bold text-gray-900 hover:text-primary transition-colors group font-montserrat uppercase tracking-wide">
                    View report
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default DeviceStats;
