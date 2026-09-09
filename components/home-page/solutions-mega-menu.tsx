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
    id: 'automotive-software',
    name: 'Automotive Software Builds',
    features: [
      {
        title: 'Bespoke Dealership & DMS Platforms',
        description: 'Full-lifecycle custom web and mobile DMS/CRM platforms engineered around your store workflows, sales desks, F&I contracting, and role-based staff permissions.',
        href: '/contact-us'
      },
      {
        title: 'Sales & Inventory Cloud Integration',
        description: 'Bi-directional DMS synchronization, automated multi-channel inventory broadcast to AutoTrader and CarGurus, algorithmic lot pricing, and turn velocity tracking.',
        href: '/contact-us'
      },
      {
        title: 'Connected Fleet Telematics & IoT Streaming',
        description: 'High-frequency Kafka and MQTT vehicle data pipelines ingesting CAN bus telemetry, GPS tracks, driver behavior metrics, and remote diagnostic codes.',
        href: '/contact-us'
      },
      {
        title: 'Workshop Service Bay Scheduling',
        description: 'Customer self-booking portals, dynamic bay capacity algorithms, certified technician labor allocation, and automated service parts staging.',
        href: '/contact-us'
      },
      {
        title: 'Enterprise Automotive ERP Architectures',
        description: 'Cloud-native ERPs purpose-built for automotive groups, vehicle distributors, and fleet operators—spanning procurement, reconditioning tracking, and parts logistics.',
        href: '/contact-us'
      },
      {
        title: 'OEM Direct-to-Consumer (D2C) Retailing',
        description: 'Digital showroom configurators, build-to-order reservation funnels, dynamic trade-in calculations, and legally compliant online checkout flows.',
        href: '/contact-us'
      }
    ],
    spotlight: {
      heading: 'You Own Every Line of Automotive Code',
      body: 'When Achtrex builds your automotive technology, there are no licensing ceilings or third-party vendor lock-in. Every system—from dealership management portals and inventory clouds to connected fleet telematics and enterprise ERPs—is engineered to your exact operational specifications and transferred with 100% intellectual property ownership.',
      href: '/contact-us'
    }
  },
  {
    id: 'cognitive-ai',
    name: 'Cognitive AI Solutions',
    features: [
      {
        title: 'AAIA Diagnostic Reasoning Engine',
        description: 'Domain-specialized neural models trained on tens of millions of OBD-II DTC fault codes, OEM Technical Service Bulletins (TSBs), and guided vehicle repair trees.',
        href: '/contact-us'
      },
      {
        title: '24/7 Autonomous Dealership Sales Agents',
        description: 'Conversational AI handling vehicle inquiries around the clock—answering factory spec questions, calculating preliminary payments, and booking showroom test drives.',
        href: '/contact-us'
      },
      {
        title: 'Automated Service Bay Triage AI',
        description: 'Intelligent repair intake classifying customer symptom descriptions, estimating labor hours, checking parts inventory readiness, and drafting repair orders.',
        href: '/contact-us'
      },
      {
        title: 'Computer-Vision Vehicle Damage Inspection',
        description: 'Neural image models evaluating exterior panel damage, scratch/dent severity, paint depth, and tire tread from photos to generate repair cost estimates.',
        href: '/contact-us'
      },
      {
        title: 'Automotive Document & Repair Order OCR',
        description: 'Deep-learning extraction of vehicle titles, auction bills of sale, parts invoices, and repair orders with over 98% field accuracy and ERP ingestion.',
        href: '/contact-us'
      },
      {
        title: 'Predictive Spare Parts Demand & Inventory ML',
        description: 'Machine learning models projecting regional component wear-and-tear cycles and seasonal demand to optimize parts department stocking and minimize backorders.',
        href: '/contact-us'
      },
      {
        title: 'Autonomous Warranty Claims Audit AI',
        description: 'Automated review comparing technician repair narratives against OBD-II freeze-frame data and OEM guidelines to prevent warranty claim rejections.',
        href: '/contact-us'
      },
      {
        title: 'Dynamic Residual Value & Depreciation ML',
        description: 'Predictive machine learning models calculating 30/60/90-day wholesale and retail asset depreciation curves across makes, trims, and market regions.',
        href: '/contact-us'
      }
    ],
    spotlight: {
      heading: 'AI Engineered for Automotive Specificity',
      body: 'General-purpose AI models do not understand torque specifications, telemetry protocols, or ADAS calibration requirements. Achtrex builds and fine-tunes domain-specialized neural architectures trained specifically on automotive engineering, repair documentation, and dealership operations. Whether automating customer engagement or accelerating technician diagnostics in the service bay, our AI solutions deliver reliable, production-ready accuracy.',
      href: '/contact-us'
    }
  },
  {
    id: 'automotive-consultation',
    name: 'Automotive Consultation',
    features: [
      {
        title: 'Manufacturer & OEM Strategy',
        description: 'Feature adoption curves, electrification transition planning, vehicle architecture roadmaps, and global competitive market positioning.',
        href: '/contact-us'
      },
      {
        title: 'Dealership Operations & Profitability',
        description: 'Comprehensive operational audits, showroom workflow automation, sales desking optimization, and age-on-lot inventory turn enhancement.',
        href: '/contact-us'
      },
      {
        title: 'Repair Processes & Workshop Throughput',
        description: 'Body shop and service bay workflow consulting, cycle time reduction, flat-rate labor efficiency, and technician throughput optimization.',
        href: '/contact-us'
      },
      {
        title: 'Vehicle Diagnostics & Telematics Advisory',
        description: 'Guided troubleshooting protocols, OBD-II/CAN bus architecture, remote diagnostic integration, and high-frequency telemetry pipeline design.',
        href: '/contact-us'
      },
      {
        title: 'Aftermarket Supply Chain & Parts Strategy',
        description: 'Parts inventory optimization, warehouse turn modeling, and distributor logistics engineering.',
        href: '/contact-us'
      },
      {
        title: 'Private Client & Fleet Advisory',
        description: 'Strategic advisory for corporate fleets, transport businesses, and private entities on vehicle acquisitions, lifecycle costs, and custom technology.',
        href: '/contact-us'
      }
    ],
    spotlight: {
      heading: 'Advising Across the Mobility Chain',
      body: 'Achtrex advises businesses, manufacturers, dealerships, and individuals on anything related to vehicles, repair processes, diagnostics, workshop operations, and business strategy. Our seasoned automotive practitioners bring deep domain expertise to de-risk technology initiatives, optimize workshop throughput, and architect future-proof operational models.',
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
                Cloud-native, enterprise-grade, and deployable on AWS, Azure, GCP, or private infrastructure. SLA-backed with dedicated onboarding support.
              </p>
            </div>

            <Link
              href="/contact-us"
              onClick={onClose}
              className="btn-navbar-cta w-full block"
            >
              <span className="btn-navbar-cta-inner !py-2.5 !px-4 text-[12px] uppercase tracking-wider justify-center w-full">
                <span>Request a Consultation</span>
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
