import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Layers,
  FolderKanban,
  Film,
  MessageSquare,
  ArrowUpRight,
  ExternalLink,
  Plus,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Sliders
} from 'lucide-react';
import { revalidatePath } from 'next/cache';
import { sql } from '@/lib/db';
import { ServicesDB } from '@/lib/services-db';
import { ProjectsDB } from '@/lib/projects-db';
import { MediaDB } from '@/lib/media-db';
import { HeroDB } from '@/lib/hero-db';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  // Fetch studio data
  const services = ServicesDB.getAll();
  const projects = ProjectsDB.getAll();
  const mediaItems = MediaDB.getAll();
  const heroConfig = HeroDB.getConfig();

  let leadsCount = 0;
  try {
    const { rows } = await sql`SELECT COUNT(*)::int as count FROM leads`;
    if (rows && rows[0]) {
      leadsCount = rows[0].count;
    }
  } catch (error) {
    console.error('Failed to query leads count:', error);
  }

  // Payment details
  let paymentDetails = {
    bank_name: 'Fidelity Bank',
    account_name: 'Achtrex Services',
    account_number: '2400931904813',
    swift_bic: 'FBLIGHAC',
  };

  try {
    const settingsRes = await sql`SELECT value FROM settings WHERE key = 'payment_details'`;
    if (settingsRes.rows.length > 0) {
      paymentDetails = JSON.parse(settingsRes.rows[0].value);
    }
  } catch (error) {
    console.error('Failed to query payment details:', error);
  }

  async function updatePaymentDetails(formData: FormData) {
    'use server';
    const details = {
      bank_name: formData.get('bank_name') as string,
      account_name: formData.get('account_name') as string,
      account_number: formData.get('account_number') as string,
      swift_bic: formData.get('swift_bic') as string,
    };
    try {
      await sql`UPDATE settings SET value = ${JSON.stringify(details)} WHERE key = 'payment_details'`;
    } catch (err) {
      console.error('Failed to update payment details:', err);
    }
    revalidatePath('/admin');
  }

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Studio Live
            </span>
            <span className="text-xs font-mono text-slate-400">ACHTREX v2.4</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Studio Command Center</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Manage public services, concept projects, media publications, and client inquiries.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-sm font-semibold transition-all shadow-xs"
          >
            <span>Preview Website</span>
            <ExternalLink size={15} />
          </a>
          <Link
            href="/admin/services"
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-all shadow-sm"
          >
            <Plus size={16} />
            <span>Manage Services</span>
          </Link>
        </div>
      </div>

      {/* Hero Slider Mode Status Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Sliders size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-slate-900">Homepage Hero Mode:</h2>
              <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                heroConfig.mode === 'single'
                  ? 'bg-amber-100 text-amber-800 border border-amber-200'
                  : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
              }`}>
                {heroConfig.mode === 'single' ? 'Single Slide Image Only' : 'Slideshow Slider Active'}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {heroConfig.mode === 'single'
                ? 'Showing Second Slide image ("We are innovation"). Video slides are saved in admin and ready to be switched back anytime.'
                : 'Actively cycling through all enabled video and image slides.'}
            </p>
          </div>
        </div>

        <Link
          href="/admin/hero"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-all shrink-0 shadow-xs"
        >
          <span>Configure Hero Slider</span>
          <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Services Card */}
        <Link
          href="/admin/services"
          className="group relative bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Layers size={22} />
            </div>
            <ArrowUpRight size={18} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">{services.length}</div>
          <div className="text-sm font-bold text-slate-800">Studio Services</div>
          <div className="text-xs text-slate-500 mt-1">Spatial 3D, WebGL & Configurator offerings</div>
        </Link>

        {/* Projects Card */}
        <Link
          href="/admin/projects"
          className="group relative bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <FolderKanban size={22} />
            </div>
            <ArrowUpRight size={18} className="text-slate-300 group-hover:text-purple-600 transition-colors" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">{projects.length}</div>
          <div className="text-sm font-bold text-slate-800">Concept Projects</div>
          <div className="text-xs text-slate-500 mt-1">Interactive showcases, galleries & videos</div>
        </Link>

        {/* Media Card */}
        <Link
          href="/admin/media"
          className="group relative bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Film size={22} />
            </div>
            <ArrowUpRight size={18} className="text-slate-300 group-hover:text-emerald-600 transition-colors" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">{mediaItems.length}</div>
          <div className="text-sm font-bold text-slate-800">Media Publications</div>
          <div className="text-xs text-slate-500 mt-1">Press releases, newsroom stories & reels</div>
        </Link>

        {/* Leads Card */}
        <Link
          href="/admin/leads"
          className="group relative bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <MessageSquare size={22} />
            </div>
            <ArrowUpRight size={18} className="text-slate-300 group-hover:text-amber-600 transition-colors" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">{leadsCount}</div>
          <div className="text-sm font-bold text-slate-800">Client Inquiries</div>
          <div className="text-xs text-slate-500 mt-1">Inbound consultations & project briefs</div>
        </Link>
      </div>

      {/* Main Studio Management Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Services Quick Management */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Layers size={18} />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">Services Catalog</h2>
                <p className="text-xs text-slate-500">Live on homepage & /services</p>
              </div>
            </div>
            <Link
              href="/admin/services"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
            >
              <span>Manage all</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="space-y-3">
            {services.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-all group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200/60">
                    {service.heroImage ? (
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400">
                        <Layers size={16} />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 truncate">{service.title}</h3>
                    <p className="text-xs text-slate-500 truncate">{service.subtitle}</p>
                  </div>
                </div>
                <Link
                  href="/admin/services"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 transition-colors shrink-0"
                >
                  Edit
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Quick Management */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <FolderKanban size={18} />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">Concept Projects</h2>
                <p className="text-xs text-slate-500">Live on homepage hero & /projects</p>
              </div>
            </div>
            <Link
              href="/admin/projects"
              className="text-xs font-semibold text-purple-600 hover:text-purple-700 hover:underline flex items-center gap-1"
            >
              <span>Manage all</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="space-y-3">
            {projects.slice(0, 4).map((project) => (
              <div
                key={project.slug}
                className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-all group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-900 shrink-0 border border-slate-200/60">
                    {project.heroVideo ? (
                      <video
                        src={project.heroVideo}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                      />
                    ) : project.heroImage ? (
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400">
                        <FolderKanban size={16} />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 truncate">{project.title}</h3>
                    <p className="text-xs text-slate-500 truncate">{project.category} &bull; {project.year}</p>
                  </div>
                </div>
                <Link
                  href="/admin/projects"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-purple-50 hover:text-purple-600 text-slate-600 transition-colors shrink-0"
                >
                  Edit
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Details Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ShieldCheck size={18} />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">Studio Wire & Payment Details</h2>
            <p className="text-xs text-slate-500">Official banking instructions referenced for international client contracts</p>
          </div>
        </div>

        <form action={updatePaymentDetails} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Bank Name</label>
            <input
              type="text"
              name="bank_name"
              defaultValue={paymentDetails.bank_name}
              className="border border-slate-200 rounded-xl px-3.5 py-2.5 w-full text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Account Name</label>
            <input
              type="text"
              name="account_name"
              defaultValue={paymentDetails.account_name}
              className="border border-slate-200 rounded-xl px-3.5 py-2.5 w-full text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Account Number</label>
            <input
              type="text"
              name="account_number"
              defaultValue={paymentDetails.account_number}
              className="border border-slate-200 rounded-xl px-3.5 py-2.5 w-full text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">SWIFT / BIC</label>
            <input
              type="text"
              name="swift_bic"
              defaultValue={paymentDetails.swift_bic}
              className="border border-slate-200 rounded-xl px-3.5 py-2.5 w-full text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div className="md:col-span-2 flex justify-end pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-all shadow-xs"
            >
              Save Payment Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
