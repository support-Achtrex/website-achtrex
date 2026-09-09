'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface IndustryCategory {
  id: string;
  name: string;
  sectors: {
    title: string;
    description: string;
    href: string;
  }[];
  spotlight: {
    heading: string;
    body: string;
  };
}

export const industryCategories: IndustryCategory[] = [
  {
    id: 'retail-dealer',
    name: 'Retail & Dealerships',
    sectors: [
      {
        title: 'Car Dealerships',
        description: 'Hyper-accelerate inventory turnover and protect gross margin with absolute market intelligence, automated DMS sync, and intelligent lead routing across every rooftop.',
        href: '/industries/car-dealerships'
      },
      {
        title: 'Car Rental & Fleet Operators',
        description: 'Optimize fleet utilization, predict lifecycle disposition windows, and automate compliance across vehicle pools of any size using depreciation analytics and real-time telemetry.',
        href: '/industries/car-rental'
      },
      {
        title: 'Classified & Marketplace Platforms',
        description: 'Build unshakable consumer trust in automotive classifieds and dealer portals through digital inspection verification, condition scoring, and automated fraud signal detection.',
        href: '/industries/classifieds-websites'
      },
      {
        title: 'Car Finance & Lenders',
        description: 'Instantaneous loan-to-value calculations, automated collateral appraisals, and real-time risk scoring protect institutional lending portfolios from overexposure.',
        href: '/industries/car-finance'
      }
    ],
    spotlight: {
      heading: 'Retail-Ready Automotive Intelligence',
      body: 'Achtrex equips retail automotive businesses with the exact data infrastructure and workflow automation they need to compete at the enterprise level — without the enterprise overhead. From single-point dealers to multi-rooftop groups, our platform integrates on day one and begins delivering measurable ROI within the first billing cycle. Inventory turns faster, leads close sooner, and operations run leaner.'
    }
  },
  {
    id: 'insurance-finance',
    name: 'Insurance & Risk',
    sectors: [
      {
        title: 'Auto Insurance Carriers',
        description: 'Eliminate underwriting blind spots by streaming factory-installed ADAS specifications, active safety system inventory, and historical accident records directly into your actuarial pricing engines.',
        href: '/industries/auto-insurance'
      },
      {
        title: 'Claims Processing',
        description: 'Accelerate total-loss valuations, verify mileage discrepancies, and cross-reference repair estimates against OEM labour times and parts pricing to reduce settlement leakage.',
        href: '/industries/auto-insurance'
      },
      {
        title: 'Vehicle Warranty Providers',
        description: 'Validate vehicle eligibility, verify odometer accuracy against historical records, and automate coverage mapping to factory build specifications for extended warranty products.',
        href: '/industries/car-finance'
      },
      {
        title: 'Government & Registry Agencies',
        description: 'Enhance civic infrastructure with automated title validation, cross-border stolen vehicle checks, tolling optimization, and emissions compliance verification at scale.',
        href: '/industries/government-agencies'
      }
    ],
    spotlight: {
      heading: 'Risk Intelligence at Machine Speed',
      body: 'Insurance and financial institutions face mounting pressure to underwrite and assess risk accurately. Achtrex delivers custom digital platforms and cognitive AI models to streamline decisions — ADAS active safety evaluations, damage severity scoring, real-time market valuations, and repair triage. Our custom systems accelerate workflows and support regulatory compliance.'
    }
  },
  {
    id: 'oem-manufacturing',
    name: 'OEM & Manufacturing',
    sectors: [
      {
        title: 'Vehicle Manufacturers (OEM)',
        description: 'Access unprecedented global market analytics, regional vehicles-in-operation data, and real-time aftermarket penetration metrics to guide product planning and distribution strategy.',
        href: '/industries/manufacturers'
      },
      {
        title: 'Auto Parts Distributors',
        description: 'Streamline catalog workflows, parts cross-referencing, and regional demand forecasting across your parts and warehouse inventory.',
        href: '/industries/auto-parts'
      },
      {
        title: 'Auto Repair & Service Chains',
        description: 'Streamline diagnostics, automate parts sourcing, and route repair jobs intelligently with AI-powered service triage that interprets fault codes and maps them to OEM repair procedures.',
        href: '/industries/auto-repair'
      },
      {
        title: 'Fleet & Logistics Management',
        description: 'Reduce unplanned downtime with predictive maintenance scheduling, real-time telematics ingestion, and driver behaviour analytics across mixed commercial and passenger fleets.',
        href: '/industries/fleet-management'
      }
    ],
    spotlight: {
      heading: 'From Factory Line to Aftermarket',
      body: 'OEMs, parts manufacturers, and repair networks share one critical dependency: precise vehicle data. Achtrex bridges the gap between factory-level build records and field-level service reality. Our platform ingests, normalizes, and delivers vehicle specification data at the granularity required for parts fitment, warranty coverage, recall management, and service lane efficiency — across any geography, at any volume.'
    }
  },
  {
    id: 'digital-mobility',
    name: 'Digital & Mobility',
    sectors: [
      {
        title: 'Automotive Content Platforms',
        description: 'Enrich digital content ecosystems with structured vehicle specifications, media assets, and comparative data for editorial review platforms, consumer research portals, and configurators.',
        href: '/industries/car-website'
      },
      {
        title: 'Ride-Sharing & Mobility Networks',
        description: 'Empower mobility operators with instant vehicle verification, driver safety compliance checks, real-time registration validation, and automated dispatch eligibility screening.',
        href: '/industries/ride-sharing'
      },
      {
        title: 'EV Charging & Infrastructure',
        description: 'Analyze charging compatibility, battery telemetry, and onboard charger specs — enabling smart route planning, energy optimization, and depot load management.',
        href: '/contact-us'
      },
      {
        title: 'Telematics & Connected Car Platforms',
        description: 'Build connected vehicle applications on top of Achtrex streaming pipelines — ingesting real-time telemetry, processing OBD-II events, and triggering contextual actions at vehicle level.',
        href: '/contact-us'
      }
    ],
    spotlight: {
      heading: 'Powering the Connected Mobility Stack',
      body: 'The future of automotive is digital-first — and Achtrex is built for it. Our bespoke software builds and cognitive AI frameworks power mobility fleets, EV operational systems, and connected vehicle applications with enterprise reliability. Whether your platform serves thousands of drivers or multi-rooftop dealer networks, Achtrex provides the engineering backbone that keeps it performing.'
    }
  }
];

export const IndustriesMegaMenu = ({ onClose }: { onClose?: () => void }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(industryCategories[0].id);

  const activeCategory = industryCategories.find(c => c.id === activeCategoryId) || industryCategories[0];

  return (
    <div
      className="w-full max-w-[1280px] bg-[#FFFFFF] border border-slate-200 shadow-[0_25px_60px_rgba(0,0,0,0.22)] rounded-none overflow-hidden font-sans text-slate-900"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">

        {/* COLUMN 1: Industry Category Sidebar — no icons */}
        <div className="col-span-12 lg:col-span-3 bg-[#F8FAFC] border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col py-4">
          <div className="px-5 py-2 mb-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">
              Industry Segments
            </span>
          </div>

          <div className="flex flex-col space-y-0.5">
            {industryCategories.map((category) => {
              const isActive = category.id === activeCategoryId;

              return (
                <button
                  key={category.id}
                  type="button"
                  onMouseEnter={() => setActiveCategoryId(category.id)}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`w-full flex items-center justify-between px-5 py-4 text-left transition-all relative cursor-pointer ${
                    isActive
                      ? 'bg-white text-slate-900 font-bold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-medium'
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#F37021] to-[#00A9CE]" />
                  )}
                  <span className="text-[14px] leading-snug">
                    {category.name}
                  </span>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isActive ? 'text-[#F37021] translate-x-0.5' : 'text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* COLUMN 2: 2-Column Sector Grid */}
        <div className="col-span-12 lg:col-span-6 bg-[#FFFFFF] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h3 className="text-[15px] font-black text-slate-900 tracking-tight uppercase">
              {activeCategory.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 flex-1">
            {activeCategory.sectors.map((sector, idx) => (
              <Link
                key={idx}
                href={sector.href}
                onClick={onClose}
                className="group/item flex flex-col transition-all"
              >
                <h4 className="text-[13px] font-bold text-slate-900 group-hover/item:text-[#F37021] transition-colors leading-snug mb-1.5">
                  {sector.title}
                </h4>
                <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
                  {sector.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* COLUMN 3: Rich Text Spotlight */}
        <div className="col-span-12 lg:col-span-3 bg-[#F8FAFC] p-6 sm:p-7 flex flex-col">
          <div className="mb-4">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3">
              Achtrex For Industry
            </h4>
            <h5 className="text-[15px] font-black text-slate-900 leading-snug mb-3">
              {activeCategory.spotlight.heading}
            </h5>
            <p className="text-[12px] text-slate-600 leading-relaxed font-normal">
              {activeCategory.spotlight.body}
            </p>
          </div>

          <div className="border-t border-slate-200 pt-5 mt-auto space-y-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1.5">
                Global Reach
              </p>
              <p className="text-[12px] text-slate-600 leading-relaxed">
                Achtrex serves clients across North America, the GCC, and Western Europe — with tailored automotive software builds and consulting frameworks for each region.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1.5">
                Architecture
              </p>
              <p className="text-[12px] text-slate-600 leading-relaxed">
                Turnkey software architectures with comprehensive documentation, staging environments, and dedicated technical deployment support for enterprise onboarding.
              </p>
            </div>

            <Link
              href="/contact-us"
              onClick={onClose}
              className="btn-navbar-cta w-full block"
            >
              <span className="btn-navbar-cta-inner !py-2.5 !px-4 text-[12px] uppercase tracking-wider justify-center w-full">
                <span>Discuss Your Industry</span>
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
