"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Clock } from '@nobertdev/react-3d-icons/fc';

export default function ProjectHandlingSection({ subject }: { subject: string }) {
  const steps = [
    {
      title: "Discovery & Strategy",
      time: "Weeks 1-2",
      desc: "We dive deep into your requirements, assessing the current infrastructure, and formulating a robust architectural roadmap."
    },
    {
      title: "Development & Integration",
      time: "Weeks 3-8",
      desc: "Our engineering team builds, integrates, and customizes the solutions, establishing secure pipelines and core functionalities."
    },
    {
      title: "Testing & QA",
      time: "Weeks 9-10",
      desc: "Rigorous stress testing, security audits, and QA ensure that the platform performs flawlessly under real-world conditions."
    },
    {
      title: "Deployment & Scaling",
      time: "Ongoing",
      desc: "We deploy the solution and provide continuous monitoring, maintenance, and scalable infrastructure support."
    }
  ];

  return (
    <div className="mt-16 pt-16 border-t border-slate-200">
      <div className="mb-12">
        <h3 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">How We Handle Your Project</h3>
        <p className="text-slate-600 max-w-3xl text-lg">
          We believe in transparent, milestone-driven execution. Our enterprise-grade delivery process ensures your solution is built on time, securely, and exactly to spec.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {steps.map((step, i) => (
          <div key={i} className="relative p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#00a9ce]" />
              <span className="text-sm font-bold text-[#00a9ce] uppercase tracking-wider">{step.time}</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
