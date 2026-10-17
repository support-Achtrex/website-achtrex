import React from 'react';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';
import { SettingsDB } from '@/lib/local-db';
import { HeroDB } from '@/lib/hero-db';
import { Save, Sliders, ExternalLink, Play, Pause, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/buttons';

export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
  const settings = SettingsDB.get();
  const heroConfig = HeroDB.getConfig();

  async function updateSettings(formData: FormData) {
    'use server';
    const siteName = formData.get('siteName') as string;
    const contactEmail = formData.get('contactEmail') as string;
    const maintenanceMode = formData.get('maintenanceMode') === 'on';

    SettingsDB.update({
      siteName: siteName || settings.siteName,
      contactEmail: contactEmail || settings.contactEmail,
      maintenanceMode,
    });

    revalidatePath('/');
    revalidatePath('/admin/settings');
  }

  async function toggleHeroModeAction() {
    'use server';
    const current = HeroDB.getConfig();
    const newMode = current.mode === 'single' ? 'slider' : 'single';
    HeroDB.setMode(newMode);
    revalidatePath('/');
    revalidatePath('/admin');
    revalidatePath('/admin/hero');
    revalidatePath('/admin/settings');
  }

  const isSingle = heroConfig.mode === 'single';
  const activeSlide = heroConfig.slides.find((s) => s.id === heroConfig.activeSlideId) || heroConfig.slides[0];

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">Website & Studio Settings</h1>
        <p className="text-slate-500 text-sm">Manage global website configuration, homepage hero mode, and system parameters.</p>
      </div>

      {/* Hero Section Display Mode Configuration Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-neutral-900 text-white rounded-2xl border border-slate-800 p-7 shadow-lg relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider ${
                isSingle
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                  : 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
              }`}>
                <span className={`w-2 h-2 rounded-full ${isSingle ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`} />
                {isSingle ? 'Single Slide Mode Active' : 'Slideshow Slider Active'}
              </span>
            </div>

            <h2 className="text-xl font-bold text-white">Homepage Hero Display Mode</h2>

            <p className="text-xs text-slate-300 leading-relaxed">
              {isSingle ? (
                <>
                  Home is showing <strong className="text-white">"{activeSlide?.titleLines.join(' ')}"</strong> (Second Slide Image). The other 3 video slides are paused and safely stored in the Hero Manager.
                </>
              ) : (
                <>
                  Home is actively playing the multi-slide video & image slideshow.
                </>
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <form action={toggleHeroModeAction}>
              <button
                type="submit"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ${
                  isSingle
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                }`}
              >
                {isSingle ? (
                  <>
                    <Play size={14} />
                    <span>Switch to Slider Mode</span>
                  </>
                ) : (
                  <>
                    <Pause size={14} />
                    <span>Switch to Single Slide Only</span>
                  </>
                )}
              </button>
            </form>

            <Link
              href="/admin/hero"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white border border-white/15 rounded-xl text-xs font-semibold transition-colors"
            >
              <span>Edit Hero Media</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* General Settings Form */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-8">
        <div className="border-b border-slate-100 pb-4 mb-6">
          <h2 className="text-lg font-bold text-slate-900">General Information</h2>
          <p className="text-xs text-slate-500">Global site naming, contact details, and maintenance toggle.</p>
        </div>

        <form action={updateSettings} className="space-y-6">
          {/* Site Name */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">Site Name</label>
            <input
              type="text"
              name="siteName"
              defaultValue={settings.siteName}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all text-sm"
            />
            <p className="text-xs text-slate-400">Used in title tags, metadata, and footer copyright.</p>
          </div>

          {/* Contact Email */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">Contact Email</label>
            <input
              type="email"
              name="contactEmail"
              defaultValue={settings.contactEmail}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all text-sm"
            />
            <p className="text-xs text-slate-400">Target recipient for website contact and booking submissions.</p>
          </div>

          {/* Maintenance Mode */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <span className="text-sm font-semibold text-slate-900 block">Maintenance Mode</span>
              <span className="text-xs text-slate-400">Enable to show a "Coming Soon" page to visitors.</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="maintenanceMode"
                defaultChecked={settings.maintenanceMode}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl px-6 py-3 flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <Save size={16} />
              <span>Save Settings</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
