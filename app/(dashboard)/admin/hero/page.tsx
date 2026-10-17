'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sliders,
  Play,
  Pause,
  Image as ImageIcon,
  Video,
  Eye,
  Edit3,
  Trash2,
  Plus,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Upload,
  X,
  RefreshCw,
  Sparkles,
  ArrowRight,
  Layers,
  Film,
  Check,
  Radio
} from 'lucide-react';
import {
  setHeroModeAction,
  setActiveSlideAction,
  toggleSlideEnabledAction,
  updateHeroSlideAction,
  createHeroSlideAction,
  deleteHeroSlideAction,
  updateHeroConfigAction,
} from '@/app/actions/hero';
import { HeroConfig, HeroSlide } from '@/lib/hero-types';

export default function AdminHeroPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [config, setConfig] = useState<HeroConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [savingMode, setSavingMode] = useState(false);
  const [editingSlide, setEditingSlide] = useState<HeroSlide | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form State for Edit / Add
  const [titleLines, setTitleLines] = useState('');
  const [linkLabel, setLinkLabel] = useState('');
  const [linkHref, setLinkHref] = useState('');
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  const [directUrl, setDirectUrl] = useState('');
  const [enabled, setEnabled] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const fetchConfig = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/hero?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setConfig(data);
      }
    } catch (_) {
      // Ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  // Quick switch between Single Slide and Slider Mode
  const handleToggleMode = async () => {
    if (!config) return;
    setSavingMode(true);
    setMessage(null);

    const newMode = config.mode === 'single' ? 'slider' : 'single';
    // If switching to single mode, ensure innovation slide or first enabled slide is active
    const activeId = config.activeSlideId || 'innovation';

    try {
      const res = await setHeroModeAction(newMode, activeId);
      if (res.success && res.config) {
        setConfig(res.config);
        setMessage({
          type: 'success',
          text: newMode === 'single'
            ? 'Switched to Single Slide mode! The Home page now displays only the selected image slide.'
            : 'Switched to Slider mode! The Home page now displays the dynamic video & image slideshow.',
        });
        router.refresh();
      } else {
        setMessage({ type: 'error', text: res.error || 'Failed to toggle mode' });
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Error updating hero mode' });
    } finally {
      setSavingMode(false);
    }
  };

  // Set active slide for Single Mode
  const handleSetActiveSlide = async (slideId: string) => {
    if (!config) return;
    try {
      const res = await setActiveSlideAction(slideId);
      if (res.success && res.config) {
        setConfig(res.config);
        const slide = config.slides.find((s) => s.id === slideId);
        setMessage({
          type: 'success',
          text: `"${slide?.titleLines.join(' ')}" is now set as the active slide!`,
        });
        router.refresh();
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Failed to set active slide' });
    }
  };

  // Toggle slide in/out of slider rotation
  const handleToggleSlideEnabled = async (slideId: string, currentEnabled: boolean) => {
    try {
      const res = await toggleSlideEnabledAction(slideId, !currentEnabled);
      if (res.success) {
        setConfig((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            slides: prev.slides.map((s) => (s.id === slideId ? { ...s, enabled: !currentEnabled } : s)),
          };
        });
        setMessage({
          type: 'success',
          text: !currentEnabled ? 'Slide enabled in slideshow rotation.' : 'Slide paused from slideshow rotation.',
        });
        router.refresh();
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Failed to toggle slide status' });
    }
  };

  // Open Edit Modal
  const openEditModal = (slide: HeroSlide) => {
    setEditingSlide(slide);
    setShowAddModal(false);
    setTitleLines(slide.titleLines.join('\n'));
    setLinkLabel(slide.linkLabel);
    setLinkHref(slide.linkHref);
    setMediaType(slide.mediaType);
    setDirectUrl(slide.mediaSrc);
    setEnabled(slide.enabled);
    setSelectedFile(null);
    setPreviewUrl(slide.mediaSrc);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // Open Add Modal
  const openAddModal = () => {
    setEditingSlide(null);
    setShowAddModal(true);
    setTitleLines('Digital Precision\nSpatial Computing');
    setLinkLabel('Explore Concept');
    setLinkHref('/projects');
    setMediaType('image');
    setDirectUrl('/hero-videos/hero-innovation.jpg');
    setEnabled(true);
    setSelectedFile(null);
    setPreviewUrl('/hero-videos/hero-innovation.jpg');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  // Submit Edit or Add Form
  const handleSubmitSlide = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      let resolvedDirectUrl = directUrl;
      if (selectedFile) {
        setMessage({
          type: 'success',
          text: `Uploading ${mediaType} (${(selectedFile.size / 1024 / 1024).toFixed(1)} MB)...`,
        });
        const upForm = new FormData();
        upForm.append('file', selectedFile);
        const upRes = await fetch('/api/upload', { method: 'POST', body: upForm });
        if (!upRes.ok) {
          throw new Error(`Upload failed for ${selectedFile.name} (HTTP ${upRes.status})`);
        }
        const json = await upRes.json();
        if (!json.success || !json.url) {
          throw new Error(json.error || `Upload failed for ${selectedFile.name}`);
        }
        resolvedDirectUrl = json.url;
      }

      const formData = new FormData();
      formData.append('titleLines', titleLines);
      formData.append('linkLabel', linkLabel);
      formData.append('linkHref', linkHref);
      formData.append('mediaType', mediaType);
      formData.append('directUrl', resolvedDirectUrl);
      formData.append('enabled', enabled ? 'true' : 'false');

      let res;
      if (editingSlide) {
        formData.append('id', editingSlide.id);
        res = await updateHeroSlideAction(formData);
      } else {
        res = await createHeroSlideAction(formData);
      }

      if (res.success && res.slide) {
        setMessage({
          type: 'success',
          text: editingSlide ? 'Hero slide updated successfully!' : 'New hero slide added successfully!',
        });
        setEditingSlide(null);
        setShowAddModal(false);
        setSelectedFile(null);
        fetchConfig();
        router.refresh();
      } else {
        setMessage({ type: 'error', text: res.error || 'Failed to save slide' });
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Submission error' });
    } finally {
      setSubmitting(false);
    }
  };

  // Delete Slide
  const handleDeleteSlide = async (slideId: string, slideTitle: string) => {
    if (!confirm(`Are you sure you want to remove the slide "${slideTitle}"?`)) return;
    try {
      const res = await deleteHeroSlideAction(slideId);
      if (res.success) {
        setMessage({ type: 'success', text: 'Slide removed successfully.' });
        fetchConfig();
        router.refresh();
      } else {
        setMessage({ type: 'error', text: res.error || 'Failed to delete slide' });
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Deletion error' });
    }
  };

  const isSingle = config?.mode === 'single';

  return (
    <div className="space-y-8 pb-16 max-w-6xl">
      {/* Top Banner / Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <Sliders className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Hero Section & Slider Management</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Control the homepage hero presentation, toggle between single slide and multi-slide slider, or edit slides media and copy.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors shadow-2xs"
          >
            <span>View Live Home</span>
            <ExternalLink size={14} />
          </Link>
          <button
            onClick={fetchConfig}
            className="p-2.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
            title="Refresh"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      {/* Notifications */}
      {message && (
        <div
          className={`p-4 rounded-xl flex items-center gap-3 text-sm transition-all ${
            message.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs'
              : 'bg-rose-50 text-rose-800 border border-rose-200 shadow-2xs'
          }`}
        >
          {message.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {/* Hero Mode Master Controller */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-neutral-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden border border-slate-800">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider ${
                isSingle
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                  : 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
              }`}>
                <span className={`w-2 h-2 rounded-full ${isSingle ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`} />
                {isSingle ? 'Current Mode: Single Slide (Static)' : 'Current Mode: Slideshow / Slider'}
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white">
              {isSingle ? 'Home page is showing the Second Slide Image only' : 'Home page is running the full Video & Image Slideshow'}
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              {isSingle
                ? 'The home page currently presents only the Second Slide image ("We are innovation"). The remaining video slides are safely paused and stored here so you can switch back to the slider anytime or edit their image and video assets below.'
                : 'The home page is actively cycling through your enabled slides with smooth transitions and progress bars.'}
            </p>
          </div>

          {/* Quick Switch Action */}
          <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3">
            <button
              onClick={handleToggleMode}
              disabled={savingMode}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold tracking-wide transition-all shadow-lg cursor-pointer ${
                isSingle
                  ? 'bg-blue-500 hover:bg-blue-400 text-white shadow-blue-500/25 hover:scale-[1.02]'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/25 hover:scale-[1.02]'
              } disabled:opacity-50`}
            >
              {savingMode ? (
                <>
                  <RefreshCw size={17} className="animate-spin" />
                  <span>Updating Mode...</span>
                </>
              ) : isSingle ? (
                <>
                  <Play size={17} />
                  <span>Switch to Slideshow / Slider</span>
                </>
              ) : (
                <>
                  <Pause size={17} />
                  <span>Switch to Single Slide Only</span>
                </>
              )}
            </button>

            <button
              onClick={openAddModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors"
            >
              <Plus size={15} />
              <span>Add New Slide</span>
            </button>
          </div>
        </div>
      </div>

      {/* Add / Edit Slide Form Modal / Card */}
      {(editingSlide || showAddModal) && (
        <div className="bg-white p-8 rounded-2xl border-2 border-blue-500/30 shadow-xl transition-all">
          <div className="border-b border-slate-100 pb-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                {editingSlide ? <Edit3 size={20} /> : <Plus size={20} />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {editingSlide ? `Edit Slide / ${editingSlide.titleLines.join(' ')}` : 'Add New Hero Slide'}
                </h3>
                <p className="text-xs text-slate-500">
                  Configure headline text, button link, and upload an image or video file.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setEditingSlide(null);
                setShowAddModal(false);
              }}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmitSlide} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title Lines (multiline) */}
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Headline Text (1 line per row) <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={titleLines}
                  onChange={(e) => setTitleLines(e.target.value)}
                  placeholder="e.g.&#10;We are&#10;innovation"
                  className="w-full px-4 py-3 text-base font-bold bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-600 font-sans"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Each line appears as a separate line in the hero title.
                </p>
              </div>

              {/* Link Label */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Button / Link Label
                </label>
                <input
                  type="text"
                  required
                  value={linkLabel}
                  onChange={(e) => setLinkLabel(e.target.value)}
                  placeholder="Discover Studio or Explore Concept"
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Link Href */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Button Destination URL
                </label>
                <input
                  type="text"
                  required
                  value={linkHref}
                  onChange={(e) => setLinkHref(e.target.value)}
                  placeholder="/about or /projects/..."
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-600 font-mono text-xs"
                />
              </div>

              {/* Media Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Media Format
                </label>
                <div className="flex items-center gap-5 pt-1.5">
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-800 cursor-pointer">
                    <input
                      type="radio"
                      name="mediaType"
                      value="image"
                      checked={mediaType === 'image'}
                      onChange={() => setMediaType('image')}
                      className="text-blue-600 focus:ring-blue-500 w-4 h-4"
                    />
                    <ImageIcon size={18} className="text-blue-600" />
                    <span>Image (JPG, PNG, WebP)</span>
                  </label>

                  <label className="flex items-center gap-2 text-sm font-medium text-slate-800 cursor-pointer">
                    <input
                      type="radio"
                      name="mediaType"
                      value="video"
                      checked={mediaType === 'video'}
                      onChange={() => setMediaType('video')}
                      className="text-blue-600 focus:ring-blue-500 w-4 h-4"
                    />
                    <Video size={18} className="text-purple-600" />
                    <span>Video (MP4, WebM)</span>
                  </label>
                </div>
              </div>

              {/* Slider Inclusion */}
              <div className="flex items-center pt-6">
                <label className="flex items-center gap-3 text-sm text-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enabled}
                    onChange={(e) => setEnabled(e.target.checked)}
                    className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <span className="font-semibold block">Include in Slideshow Slider</span>
                    <span className="text-xs text-slate-400">When enabled, this slide cycles in Slider mode.</span>
                  </div>
                </label>
              </div>

              {/* Media Upload */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Upload Replacement Media ({mediaType === 'image' ? 'Image' : 'Video'})
                </label>
                <div className="flex items-center gap-3">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={mediaType === 'image' ? 'image/*' : 'video/*'}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors cursor-pointer shadow-2xs"
                  >
                    <Upload size={15} />
                    <span>{selectedFile ? selectedFile.name : `Upload ${mediaType === 'image' ? 'Image' : 'Video'} File...`}</span>
                  </button>
                  {selectedFile && (
                    <span className="text-xs text-slate-500 font-mono">
                      ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  )}
                </div>
              </div>

              {/* Direct Path / URL */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Or Direct Media URL / Path
                </label>
                <input
                  type="text"
                  value={directUrl}
                  onChange={(e) => {
                    setDirectUrl(e.target.value);
                    if (e.target.value) setPreviewUrl(e.target.value);
                  }}
                  placeholder={
                    mediaType === 'image'
                      ? '/hero-videos/hero-innovation.jpg'
                      : '/hero-videos/form-customizer-cover.mp4'
                  }
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-600 font-mono text-xs"
                />
              </div>

              {/* Live Preview */}
              {previewUrl && (
                <div className="md:col-span-2">
                  <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Media Live Preview
                  </span>
                  <div className="relative w-full max-w-lg aspect-[16/9] bg-black rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    {mediaType === 'video' ? (
                      <video src={previewUrl} controls className="w-full h-full object-cover" />
                    ) : (
                      <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setEditingSlide(null);
                  setShowAddModal(false);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-all disabled:opacity-50 cursor-pointer"
              >
                {submitting ? 'Saving...' : editingSlide ? 'Save Slide Updates' : 'Add Hero Slide'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Slides Inventory Table / Cards */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-bold text-slate-900">Hero Slides Roster</h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold font-mono">
              {config?.slides.length || 0} slides
            </span>
          </div>

          <div className="text-xs text-slate-500">
            Click <strong className="text-slate-700">"Make Active Single Slide"</strong> to switch which slide is shown on homepage.
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {config?.slides.map((slide, index) => {
            const isActiveInSingleMode = config.activeSlideId === slide.id;
            const isSlideCurrentlyShowing = isSingle ? isActiveInSingleMode : slide.enabled;

            return (
              <div
                key={slide.id}
                className={`p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-colors ${
                  isActiveInSingleMode && isSingle
                    ? 'bg-blue-50/40 border-l-4 border-l-blue-600'
                    : 'hover:bg-slate-50/70'
                }`}
              >
                {/* Media Preview & Info */}
                <div className="flex items-start gap-5 flex-1 min-w-0">
                  {/* Thumbnail / Video */}
                  <div className="relative w-36 sm:w-44 aspect-[16/10] bg-black rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-xs group">
                    {slide.mediaType === 'video' ? (
                      <>
                        <video
                          src={slide.mediaSrc}
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                          <Video className="w-5 h-5 text-white drop-shadow" />
                        </div>
                      </>
                    ) : (
                      <Image
                        src={slide.mediaSrc}
                        alt={slide.titleLines.join(' ')}
                        fill
                        sizes="176px"
                        className="object-cover"
                      />
                    )}

                    <span className="absolute top-1.5 left-1.5 text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-black/70 text-white font-bold backdrop-blur-xs">
                      #{index + 1} &bull; {slide.mediaType.toUpperCase()}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {isActiveInSingleMode && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                          <Check size={11} />
                          Active on Homepage (Single Mode)
                        </span>
                      )}

                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-md border ${
                          slide.enabled
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}
                      >
                        {slide.enabled ? 'Included in Slideshow' : 'Paused in Slideshow'}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      {slide.titleLines.join(' ')}
                    </h4>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <div>
                        <span className="text-slate-400">Button: </span>
                        <span className="font-semibold text-slate-700">"{slide.linkLabel}"</span>
                        <span className="font-mono text-slate-400 ml-1">({slide.linkHref})</span>
                      </div>
                      <div className="font-mono text-[11px] text-slate-400 truncate max-w-xs">
                        {slide.mediaSrc}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-end lg:self-center">
                  {/* Make Active in Single Mode */}
                  {isSingle && !isActiveInSingleMode && (
                    <button
                      onClick={() => handleSetActiveSlide(slide.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-colors cursor-pointer"
                    >
                      <Check size={13} />
                      <span>Set Active on Home</span>
                    </button>
                  )}

                  {/* Toggle In Slideshow */}
                  <button
                    onClick={() => handleToggleSlideEnabled(slide.id, slide.enabled)}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl transition-colors cursor-pointer border ${
                      slide.enabled
                        ? 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200'
                        : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200'
                    }`}
                    title={slide.enabled ? 'Remove from slider cycle' : 'Add to slider cycle'}
                  >
                    <span>{slide.enabled ? 'Pause in Slider' : 'Enable in Slider'}</span>
                  </button>

                  {/* Edit Slide */}
                  <button
                    onClick={() => openEditModal(slide)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer shadow-2xs"
                  >
                    <Edit3 size={13} />
                    <span>Edit</span>
                  </button>

                  {/* Delete Slide */}
                  {config.slides.length > 1 && (
                    <button
                      onClick={() => handleDeleteSlide(slide.id, slide.titleLines.join(' '))}
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                      title="Delete Slide"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
