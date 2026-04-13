"use client";

import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';

const AnalyticsWidget = () => {
    const data = [
        { day: 'S', value: 40, active: false },
        { day: 'M', value: 70, active: true },
        { day: 'T', value: 50, active: true, label: '74%' },
        { day: 'W', value: 90, active: true },
        { day: 'T', value: 60, active: false },
        { day: 'F', value: 45, active: false },
        { day: 'S', value: 55, active: false },
    ];

    return (
        <div className="rounded-3xl p-px bg-linear-to-br from-gray-200 to-gray-50 h-full">
            <div className="bg-white rounded-[23px] p-6 h-full flex flex-col">
                <h3 className="text-lg font-bold text-gray-800 mb-6 font-display">Blog Analytics</h3>

                <div className="flex-1 w-full h-full min-h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} barSize={40}>
                            <XAxis
                                dataKey="day"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 500, fontFamily: 'var(--font-manrope)' }}
                                dy={10}
                            />
                            <Bar dataKey="value" radius={[20, 20, 20, 20]}>
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.active ? 'var(--primary)' : '#e5e7eb'}
                                        fillOpacity={entry.active ? 1 : 0.5}
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsWidget;
