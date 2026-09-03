'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface SolutionCategory {
  id: string;
  name: string;
  features: {
    title: string;
    description: string;
    href: string;
  }[];
  spotlight: {
    heading: string;
    body: string;
    href: string;
  };
}

export const solutionCategories: SolutionCategory[] = [
  {
    id: 'data-management',
    name: 'Automotive Data & APIs',
    features: [
      {
        title: 'Instant VIN Decoding API',
        description: 'Decode any North American or international VIN in real time. Retrieve full factory specs, trim packages, optional equipment, engine configuration, and safety system details in a single API call.',
        href: '/contact-us'
      },
      {
        title: 'OEM Build Specifications',
        description: 'Granular factory-installed equipment records including ADAS sensor suites, paint codes, transmission types, towing capacity, and exact options configured at the assembly line.',
        href: '/contact-us'
      },
      {
        title: 'Market Valuation Engine',
        description: 'Predictive residual value curves and real-time depreciation analytics built from auction lane data, private sale transactions, and certified pre-owned market pricing across 40+ regions.',
        href: '/contact-us'
      },
      {
        title: 'Vehicle History & Title Records',
        description: 'Lifetime ownership chain, total-loss declarations, odometer discrepancy alerts, lien records, province and state title history, and structural damage disclosures in one unified report.',
        href: '/contact-us'
      },
      {
        title: 'EV Battery & Range Telemetry',
        description: 'State-of-health curves, degradation modelling over charge cycles, DC fast-charge compatibility, real-world range variance by temperature, and battery chemistry identification.',
        href: '/contact-us'
      },
      {
        title: 'Vehicle Parc & VIO Intelligence',
        description: 'National and regional vehicles-in-operation counts segmented by make, model, age, and geography — used for parts demand forecasting, territory planning, and market sizing.',
        href: '/contact-us'
      }
    ],
    spotlight: {
      heading: 'The Achtrex Data Layer',
      body: 'Our vehicle data infrastructure is purpose-built for enterprise throughput. Every API endpoint is backed by multi-region redundancy, versioned schema contracts, and a comprehensive developer sandbox. Whether you are enriching a DMS, powering an insurance underwriting engine, or building a consumer-facing vehicle detail page, the Achtrex data layer gives your team the reliability and depth required to move fast without compromise.',
      href: '/contact-us'
    }
  },
  {
    id: 'sales-inventory',
    name: 'Sales & Inventory Cloud',
    features: [
      {
        title: 'Bi-Directional DMS Sync',
        description: 'Live two-way inventory mirroring across CDK Global, Reynolds & Reynolds, DealerSocket, DealerTrack, and custom dealer management systems with conflict resolution and audit logs.',
        href: '/contact-us'
      },
      {
        title: 'Multi-Channel Syndication',
        description: 'Automated vehicle broadcast to AutoTrader, Cars.com, CarGurus, Kijiji Autos, and over 40 regional classifieds — with dynamic photo ordering, pricing rules, and compliance flags.',
        href: '/contact-us'
      },
      {
        title: 'Algorithmic Lot Pricing',
        description: 'Age-on-lot decay models that automatically lower asking price at configurable thresholds to protect velocity, preserve gross profit, and reduce aged unit carrying costs.',
        href: '/contact-us'
      },
      {
        title: 'Intelligent Lead Routing',
        description: 'Neural lead scoring that weights intent signals, browsing behavior, and trade-in value to route hot prospects directly to the highest-performing available sales specialist.',
        href: '/contact-us'
      },
      {
        title: 'Digital Appraisal Suite',
        description: 'Consumer self-appraisal tools, condition-guided photo capture, algorithmic wholesale valuation with configurable margin buffers, and instant offer generation for trade-in conversions.',
        href: '/contact-us'
      },
      {
        title: 'Multi-Rooftop Fleet View',
        description: 'Unified executive dashboard for dealer groups managing multiple rooftops — enabling cross-location inventory rebalancing, consolidated reporting, and group-level profitability analytics.',
        href: '/contact-us'
      }
    ],
    spotlight: {
      heading: 'End-to-End Dealer Operations',
      body: 'The Achtrex Inventory Cloud eliminates the manual overhead that slows dealership operations. From the moment a unit lands in stock to the final signature on the sale, every workflow — appraisal, listing, pricing, lead follow-up — is orchestrated by intelligent automation. Our platform integrates with your existing DMS on day one, requires no data migration, and goes live in under two weeks for most dealer groups.',
      href: '/contact-us'
    }
  },
  {
    id: 'custom-software',
    name: 'Custom Software Builds',
    features: [
      {
        title: 'Bespoke Dealership Portals',
        description: 'Custom-designed web and mobile applications for dealership staff, service advisors, and general managers — built to your exact operational workflow with role-based access controls.',
        href: '/contact-us'
      },
      {
        title: 'Auto Parts B2B Marketplaces',
        description: 'High-performance parts catalog search engines that cross-reference OEM part numbers with aftermarket equivalents, fitment guides, and real-time distributor inventory levels.',
        href: '/contact-us'
      },
      {
        title: 'Enterprise Mobility Cloud ERP',
        description: 'Modular, cloud-native ERP architectures purpose-built for automotive group operations — procurement, reconditioning, warranty management, and compliance modules included.',
        href: '/contact-us'
      },
      {
        title: 'Custom Middleware & Integration Layers',
        description: 'Resilient API middleware connecting legacy on-premise dealership systems to modern SaaS platforms — built with schema validation, retry logic, and full observability.',
        href: '/contact-us'
      },
      {
        title: 'Workshop & Service Bay Scheduling',
        description: 'Customer self-booking portals, real-time bay capacity management, technician assignment, parts pre-staging, and automated customer communication at every step.',
        href: '/contact-us'
      },
      {
        title: 'Telematics & IoT Data Pipelines',
        description: 'Distributed streaming pipelines ingesting high-frequency vehicle telemetry via MQTT and Kafka — enabling real-time fleet tracking, predictive maintenance alerts, and driver analytics.',
        href: '/contact-us'
      }
    ],
    spotlight: {
      heading: 'You Own Every Line of Code',
      body: 'When Achtrex builds your platform, there is no subscription, no vendor lock-in, and no licensing ceiling. Every deliverable is transferred to you as full intellectual property. Our architecture team designs systems that scale from a single-rooftop dealer to a national OEM subsidiary — and we stand behind each build with a structured hypercare period, documentation, and optional long-term support contracts.',
      href: '/contact-us'
    }
  },
  {
    id: 'cognitive-ai',
    name: 'Cognitive AI Solutions',
    features: [
      {
        title: 'AAIA Diagnostic Reasoning Engine',
        description: 'Domain-specialized neural models trained on tens of millions of OBD-II fault codes, factory service procedures, TSBs, and real-world repair outcomes across hundreds of vehicle platforms.',
        href: '/contact-us'
      },
      {
        title: '24/7 Autonomous Sales Agents',
        description: 'Conversational AI assistants that handle inbound vehicle inquiries around the clock — answering spec questions, generating trade-in estimates, and booking test drives without human intervention.',
        href: '/contact-us'
      },
      {
        title: 'Automated Service Triage',
        description: 'Intelligent intake system that classifies customer complaints, estimates repair complexity, checks parts availability, and generates preliminary quotes before a service advisor is involved.',
        href: '/contact-us'
      },
      {
        title: 'Document & Invoice Extraction (OCR)',
        description: 'Computer-vision OCR pipeline extracting structured data from repair orders, auction bills of sale, title paperwork, and insurance declarations with over 98% field accuracy.',
        href: '/contact-us'
      },
      {
        title: 'Predictive Demand Forecasting',
        description: 'Machine learning models that project regional consumer vehicle demand 60–90 days out, integrating macroeconomic signals, search trend data, and historical transaction patterns.',
        href: '/contact-us'
      },
      {
        title: 'Autonomous Damage Audit',
        description: 'Computer-vision inspection models that assess vehicle damage from photos, cross-reference repair estimates against insurer guidelines, and flag anomalies for adjuster review.',
        href: '/contact-us'
      }
    ],
    spotlight: {
      heading: 'AI Built for Automotive Specificity',
      body: 'General-purpose AI models do not understand torque specifications, VIN structure, or ADAS calibration requirements. Achtrex builds and fine-tunes AI systems on automotive-specific training sets so the outputs are accurate enough to act on — not just plausible enough to read. Every model we deploy is tested against domain benchmarks before it touches a production workflow, and each system includes human-in-the-loop escalation paths where confidence falls below threshold.',
      href: '/contact-us'
    }
  }
];

export const SolutionsMegaMenu = ({ onClose }: { onClose?: () => void }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(solutionCategories[0].id);

  const activeCategory = solutionCategories.find(c => c.id === activeCategoryId) || solutionCategories[0];

  return (
    <div
      className="w-full max-w-[1280px] bg-[#FFFFFF] border border-slate-200 shadow-[0_25px_60px_rgba(0,0,0,0.22)] rounded-none overflow-hidden font-sans text-slate-900"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">

        {/* COLUMN 1: Category Sidebar — no icons */}
        <div className="col-span-12 lg:col-span-3 bg-[#F8FAFC] border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col py-4">
          <div className="px-5 py-2 mb-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">
              Solution Pillars
            </span>
          </div>

          <div className="flex flex-col space-y-0.5">
            {solutionCategories.map((category) => {
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
                  {/* Active left accent bar */}
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#F37021]" />
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

        {/* COLUMN 2: 2-Column Feature Grid */}
        <div className="col-span-12 lg:col-span-6 bg-[#FFFFFF] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h3 className="text-[15px] font-black text-slate-900 tracking-tight uppercase">
              {activeCategory.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 flex-1">
            {activeCategory.features.map((feature, idx) => (
              <Link
                key={idx}
                href={feature.href}
                onClick={onClose}
                className="group/item flex flex-col transition-all"
              >
                <h4 className="text-[13px] font-bold text-slate-900 group-hover/item:text-[#F37021] transition-colors leading-snug mb-1.5">
                  {feature.title}
                </h4>
                <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* COLUMN 3: Rich Text Spotlight — no icons, no buttons */}
        <div className="col-span-12 lg:col-span-3 bg-[#F8FAFC] p-6 sm:p-7 flex flex-col">
          <div className="mb-4">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3">
              Achtrex Ecosystem
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
                Trusted By
              </p>
              <p className="text-[12px] text-slate-600 leading-relaxed">
                Dealerships, OEM distributors, auto insurers, and fleet operators rely on Achtrex infrastructure across North America and the Middle East.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1.5">
                Deployment
              </p>
              <p className="text-[12px] text-slate-600 leading-relaxed">
                Cloud-native, API-first, and deployable on AWS, Azure, GCP, or private infrastructure. SLA-backed with dedicated onboarding support.
              </p>
            </div>

            <Link
              href="/contact-us"
              onClick={onClose}
              className="block w-full text-center border-2 border-[#F37021] text-[#F37021] hover:bg-[#F37021] hover:text-white text-[12px] font-bold py-2.5 px-4 transition-all uppercase tracking-wider"
            >
              Request a Consultation
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
