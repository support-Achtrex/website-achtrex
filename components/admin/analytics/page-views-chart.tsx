'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowDown } from 'lucide-react';

const data = [
    { name: 'Jul', value: 200 },
    { name: '1', value: 200 },
    { name: '2', value: 500 },
    { name: '3', value: 500 },
    { name: 'Aug', value: 800 },
    { name: '5', value: 650 },
    { name: 'Sep', value: 650 },
];

const PageViewsChart = () => {
    return (
        <div className="bg-white p-8 rounded-[32px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100/50 h-full hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-gray-800 font-display text-lg">Page Views</h3>
                <div className="relative">
                    <select className="appearance-none bg-gray-50 border-none text-xs font-semibold text-gray-500 rounded-xl px-4 py-2 pr-8 outline-none cursor-pointer hover:bg-gray-100 transition-colors font-montserrat">
                        <option>Last 3 month</option>
                        <option>Last 6 month</option>
                        <option>Last year</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>

            <div className="flex items-end gap-4 mb-10">
                <span className="text-5xl font-bold text-gray-900 font-manrope tracking-tight">645</span>
                <div className="flex items-center gap-1.5 text-red-500 mb-2 bg-red-50/80 px-2.5 py-1 rounded-full border border-red-100">
                    <ArrowDown size={16} strokeWidth={3} />
                    <span className="text-sm font-bold font-manrope">18%</span>
                </div>
            </div>

            <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f97316" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={false} stroke="#f3f4f6" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 12, fontFamily: 'var(--font-manrope)' }}
                            dy={15}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 12, fontFamily: 'var(--font-manrope)' }}
                            tickFormatter={(value) => value >= 1000 ? `${value / 1000}K` : value}
                        />
                        <Tooltip
                            contentStyle={{
                                borderRadius: '16px',
                                border: 'none',
                                boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1)',
                                fontFamily: 'var(--font-manrope)',
                                padding: '12px 16px'
                            }}
                            cursor={{ stroke: '#f97316', strokeWidth: 2, strokeDasharray: '4 4' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#f97316"
                            strokeWidth={4}
                            fillOpacity={1}
                            fill="url(#colorViews)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PageViewsChart;
