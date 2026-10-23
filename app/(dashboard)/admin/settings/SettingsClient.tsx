'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Save, Play, Pause, ArrowRight, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';
import { SiteSettings } from '@/lib/local-db';
import { HeroConfig } from '@/lib/hero-db';
import { updateSettingsAction, toggleHeroModeAction } from '@/app/actions/settings';

interface SettingsClientProps {
  initialSettings: SiteSettings;
  initialHeroConfig: HeroConfig;
}

export function SettingsClient({ initialSettings, initialHeroConfig }: SettingsClientProps) {
  const [settings, setSettings] = useState<SiteSettings>(initialSettings);
  const [heroConfig, setHeroConfig] = useState<HeroConfig>(initialHeroConfig);
  const [siteName, setSiteName] = useState(initialSettings.siteName);
  const [contactEmail, setContactEmail] = useState(initialSettings.contactEmail);
  const [maintenanceMode, setMaintenanceMode] = useState(initialSettings.maintenanceMode);

  const [saving, setSaving] = useState(false);
  const [togglingHero, setTogglingHero] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setToast(null);

    try {
      const formData = new FormData();
      formData.append('siteName', siteName);
      formData.append('contactEmail', contactEmail);
      if (maintenanceMode) {
        formData.append('maintenanceMode', 'on');
      }

      const res = await updateSettingsAction(formData);

      if (res.success && res.settings) {
        setSettings(res.settings);
        setSiteName(res.settings.siteName);
        setContactEmail(res.settings.contactEmail);
        setMaintenanceMode(res.settings.maintenanceMode);
        showToast('success', 'Settings successfully saved to PostgreSQL database.');
      } else {
        showToast('error', res.error || 'Failed to save settings.');
      }
    } catch (err: any) {
      showToast('error', err.message || 'An unexpected error occurred while saving.');
    } finally {
      setSaving(false);
    }
  };

  const handleToggleHeroMode = async () => {
    setTogglingHero(true);
    try {
      const res = await toggleHeroModeAction();
      if (res.success && res.mode) {
        setHeroConfig((prev) => ({ ...prev, mode: res.mode as 'single' | 'slider' }));
        showToast('success', `Homepage Hero switched to ${res.mode === 'single' ? 'Single Slide' : 'Slider Mode'}.`);
      } else {
        showToast('error', res.error || 'Failed to toggle hero mode.');
      }
    } catch (err: any) {
      showToast('error', err.message || 'Error toggling hero mode.');
    } finally {
      setTogglingHero(false);
    }
  };

  const isSingle = heroConfig.mode === 'single';
  const activeSlide = heroConfig.slides.find((s) => s.id === heroConfig.activeSlideId) || heroConfig.slides[0];

  return (
    <div className="max-w-4xl space-y-8 relative">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border text-sm font-medium transition-all animate-in fade-in slide-in-from-top-4 ${
            toast.type === 'success'
              ? 'bg-slate-900 text-emerald-400 border-emerald-500/30 shadow-emerald-500/10'
              : 'bg-slate-900 text-rose-400 border-rose-500/30 shadow-rose-500/10'
          }`}
        >
          {toast.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
          Website & Studio Settings
        </h1>
        <p className="text-slate-500 text-sm">
          Manage global website configuration, homepage hero mode, and system parameters saved live to PostgreSQL.
        </p>
      </div>

      {/* Hero Display Mode Configuration Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-neutral-900 text-white rounded-2xl border border-slate-800 p-7 shadow-lg relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider ${
                  isSingle
                    ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                    : 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSingle ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`} />
                {isSingle ? 'Single Slide Mode Active' : 'Slideshow Slider Active'}
              </span>
            </div>

            <h2 className="text-xl font-bold text-white">Homepage Hero Display Mode</h2>

            <p className="text-xs text-slate-300 leading-relaxed">
              {isSingle ? (
                <>
                  Home is showing <strong className="text-white">"{Array.isArray(activeSlide?.titleLines) ? activeSlide.titleLines.join(' ') : 'Featured Slide'}"</strong> (Second Slide Image). The other 3 video slides are paused and stored in the Hero Manager.
                </>
              ) : (
                <>
                  Home is actively playing the multi-slide video & image slideshow.
                </>
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              disabled={togglingHero}
              onClick={handleToggleHeroMode}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer disabled:opacity-50 ${
                isSingle
                  ? 'bg-blue-600 hover:bg-blue-500 text-white'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
              }`}
            >
              {togglingHero ? (
                <Loader2 size={14} className="animate-spin" />
              ) : isSingle ? (
                <Play size={14} />
              ) : (
                <Pause size={14} />
              )}
              <span>{isSingle ? 'Switch to Slider Mode' : 'Switch to Single Slide Only'}</span>
            </button>

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

      {/* Maintenance Mode Warning Notice (If Active) */}
      {maintenanceMode && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 flex items-start gap-4 text-amber-900">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <p className="font-bold text-amber-950 text-sm">Maintenance Mode is Currently ACTIVE</p>
            <p className="text-amber-800 leading-relaxed">
              Public visitors to the website are currently greeted with the Coming Soon / System Maintenance screen. Admins can still access and use this portal. To bring the website back online for all visitors, toggle Maintenance Mode off below and click Save Settings.
            </p>
          </div>
        </div>
      )}

      {/* General Settings Form */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-8">
        <div className="border-b border-slate-100 pb-4 mb-6">
          <h2 className="text-lg font-bold text-slate-900">General Information</h2>
          <p className="text-xs text-slate-500">Global site naming, contact details, and maintenance toggle.</p>
        </div>

        <form onSubmit={handleSaveSettings} className="space-y-6">
          {/* Site Name */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">
              Site Name
            </label>
            <input
              type="text"
              name="siteName"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all text-sm"
              required
            />
            <p className="text-xs text-slate-400">Used in title tags, metadata, and footer copyright.</p>
          </div>

          {/* Contact Email */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">
              Contact Email
            </label>
            <input
              type="email"
              name="contactEmail"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all text-sm"
              required
            />
            <p className="text-xs text-slate-400">Target recipient for website contact and booking submissions.</p>
          </div>

          {/* Maintenance Mode Toggle */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200 transition-colors hover:border-slate-300">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-900 block">Maintenance Mode</span>
                {maintenanceMode && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300 uppercase">
                    Live
                  </span>
                )}
              </div>
              <span className="text-xs text-slate-500">
                Enable to show the sleek Coming Soon & Maintenance screen to public visitors.
              </span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="maintenanceMode"
                checked={maintenanceMode}
                onChange={(e) => setMaintenanceMode(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              {settings.maintenanceMode ? 'Status: Maintenance Active' : 'Status: Website Live Online'}
            </span>

            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl px-6 py-3 flex items-center gap-2 shadow-sm transition-all cursor-pointer disabled:opacity-50"
            >
              {saving ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Saving to PostgreSQL...</span>
                </>
              ) : (
                <>
                  <Save size={16} />
                  <span>Save Settings</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
