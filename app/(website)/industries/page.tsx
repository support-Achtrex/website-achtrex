'use client';
import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Storefront, Wrench, Globe, MagnifyingGlass, Factory, Key, Package, CurrencyDollar, Truck, MapPin, Bank } from '@phosphor-icons/react';

const industries = [
  { label: 'Car Insurance', description: 'Next-Generation Actuarial Precision & Claims Automation with predictive risk models.', href: '/industries/auto-insurance', icon: ShieldCheck },
  { label: 'Car Dealership', description: 'Hyper-Accelerate Inventory Turnover & Maximize Gross with absolute market intelligence.', href: '/industries/car-dealerships', icon: Storefront },
  { label: 'Auto Repair Service', description: 'Streamline Diagnostics, Parts, and Service Operations with predictive AI routing.', href: '/industries/auto-repair', icon: Wrench },
  { label: 'Car Website', description: 'Enrich Your Digital Automotive Content Ecosystem with global vehicle specifications.', href: '/industries/car-website', icon: Globe },
  { label: 'Classified Website', description: 'Build Unshakable Trust in Peer-to-Peer Marketplaces through live verification infrastructure.', href: '/industries/classifieds-websites', icon: MagnifyingGlass },
  { label: 'Manufacturers', description: 'Unprecedented OEM Intelligence & Global Market Analytics for strategic telemetry.', href: '/industries/manufacturers', icon: Factory },
  { label: 'Car Rental', description: 'Optimize Fleet Utilization, Lifecycle & Disposition Value with depreciation analytics.', href: '/industries/car-rental', icon: Key },
  { label: 'Auto Parts Company', description: 'Ensure Perfect Fitment & Eliminate Return Friction using normalized PIES/ACES data.', href: '/industries/auto-parts', icon: Package },
  { label: 'Car Finance', description: 'Instantaneous Loan-to-Value & Risk Assessments to protect institutional portfolios.', href: '/industries/car-finance', icon: CurrencyDollar },
  { label: 'Fleet Management', description: 'Streamline Logistics & Maximize Uptime with real-time telematics and maintenance forecasting.', href: '/industries/fleet-management', icon: Truck },
  { label: 'Ride-Sharing', description: 'Empower Mobility Networks with instant vehicle verification and safety compliance.', href: '/industries/ride-sharing', icon: MapPin },
  { label: 'Government Agencies', description: 'Enhance Civic Infrastructure with tolling optimization and automated registry validation.', href: '/industries/government-agencies', icon: Bank }
];

export default function IndustriesPage() {
  return (
    <div className="w-full min-h-screen bg-[#f8fafc] pt-32 pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl font-extrabold text-[#11243b] tracking-tight mb-4">
            Industries We Empower
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Discover how our automotive intelligence and custom enterprise platforms drive innovation across every sector of the mobility ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Link key={idx} href={ind.href} className="group bg-white p-8 rounded-none shadow-sm border border-slate-200 hover:shadow-md hover:border-[#00a9ce] transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 group-hover:bg-[#00a9ce]/10 rounded-none flex items-center justify-center mb-6 transition-colors">
                    <Icon weight="duotone" className="w-7 h-7 text-slate-700 group-hover:text-[#00a9ce] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00a9ce] transition-colors">{ind.label}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    {ind.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}
