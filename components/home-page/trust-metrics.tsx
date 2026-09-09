'use client';
import React from 'react';

export const TrustMetrics = () => {
  const metrics = [
    { label: "Manual Workflow Reduced", value: "95%" },
    { label: "Platform Uptime SLA", value: "99.99%" },
    { label: "Client IP Ownership", value: "100%" }
  ];

  return (
    <section className="py-16 bg-[#001a22] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-4xl md:text-4xl font-black text-[#00a9ce] mb-2">
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-slate-400 font-medium tracking-wide">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
