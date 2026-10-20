'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Film, 
  Image as ImageIcon, 
  Plus, 
  Trash2, 
  Edit3,
  ExternalLink, 
  Upload, 
  Video, 
  CheckCircle2, 
  AlertCircle,
  Calendar,
  Layers,
  FileText,
  X,
  RefreshCw,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { createMediaAction, updateMediaAction, deleteMediaAction } from '@/app/actions/media';
import { MediaItem, MediaSpec } from '@/lib/media-db';

const CATEGORIES = ['STORIES', 'EVENTS', 'ABOUT US', 'ESG', 'INNOVATION'];

export default function AdminMediaPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const heroVideoInputRef = useRef<HTMLInputElement>(null);
  const secondaryImageInputRef = useRef<HTMLInputElement>(null);
  const multiGalleryImagesInputRef = useRef<HTMLInputElement>(null);
  const multiGalleryVideosInputRef = useRef<HTMLInputElement>(null);

  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<MediaItem | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form Tabs
  const [activeTab, setActiveTab] = useState<'basics' | 'hero' | 'gallery' | 'editorial' | 'specs'>('basics');

  // Form State: Basics
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<'STORIES' | 'EVENTS' | 'ABOUT US' | 'ESG' | 'INNOVATION'>('STORIES');
  const [date, setDate] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [featured, setFeatured] = useState(false);

  // Form State: Primary Media
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  const [directUrl, setDirectUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  // Form State: Hero Video & Secondary 21:9 Image
  const [heroVideo, setHeroVideo] = useState('');
  const [heroVideoFile, setHeroVideoFile] = useState<File | null>(null);
  const [secondaryImage, setSecondaryImage] = useState('');
  const [secondaryImageFile, setSecondaryImageFile] = useState<File | null>(null);

  // Form State: Multiple Gallery Images (Tesla Roadster Style)
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [newGalleryFiles, setNewGalleryFiles] = useState<File[]>([]);
  const [newImageUrlInput, setNewImageUrlInput] = useState('');

  // Form State: Multiple Gallery Videos (Tesla Roadster Style)
  const [galleryVideos, setGalleryVideos] = useState<string[]>([]);
  const [newGalleryVideoFiles, setNewGalleryVideoFiles] = useState<File[]>([]);
  const [newVideoUrlInput, setNewVideoUrlInput] = useState('');

  // Form State: Tesla-Style Benchmark Specs
  const [specs, setSpecs] = useState<MediaSpec[]>([]);

  const getTodayDate = () => {
    const today = new Date();
    const d = String(today.getDate()).padStart(2, '0');
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const y = today.getFullYear();
    return `${d}/${m}/${y}`;
  };

  useEffect(() => {
    fetchMedia();
    setDate(getTodayDate());
  }, []);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/media-items?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setItems(data);
      } else {
        router.refresh();
      }
    } catch (_) {
      // Ignore
    } finally {
      setLoading(false);
    }
  };

  const openAddModal = () => {
    setEditingItem(null);
    setTitle('');
    setSubtitle('');
    setCategory('STORIES');
    setDate(getTodayDate());
    setSummary('');
    setContent('');
    setFeatured(false);
    setMediaType('image');
    setDirectUrl('');
    setSelectedFile(null);
    setPreviewUrl('');
    setHeroVideo('');
    setHeroVideoFile(null);
    setSecondaryImage('');
    setSecondaryImageFile(null);
    setGalleryImages([]);
    setNewGalleryFiles([]);
    setNewImageUrlInput('');
    setGalleryVideos([]);
    setNewGalleryVideoFiles([]);
    setNewVideoUrlInput('');
    setSpecs([
      { label: 'Classification', value: 'Editorial', description: 'Domain focus' },
      { label: 'Status', value: 'Published', description: 'Official Release' },
    ]);
    setActiveTab('basics');
    setShowAddForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openEditModal = (item: MediaItem) => {
    setEditingItem(item);
    setTitle(item.title || '');
    setSubtitle(item.subtitle || '');
    setCategory(item.category || 'STORIES');
    setDate(item.date || getTodayDate());
    setSummary(item.summary || '');
    setContent(item.content || '');
    setFeatured(Boolean(item.featured));
    setMediaType(item.mediaType || 'image');
    setDirectUrl(item.mediaUrl || '');
    setSelectedFile(null);
    setPreviewUrl(item.mediaUrl || '');
    setHeroVideo(item.heroVideo || '');
    setHeroVideoFile(null);
    setSecondaryImage(item.secondaryImage || '');
    setSecondaryImageFile(null);
    setGalleryImages(item.galleryImages ? [...item.galleryImages] : []);
    setNewGalleryFiles([]);
    setNewImageUrlInput('');
    setGalleryVideos(item.galleryVideos ? [...item.galleryVideos] : []);
    setNewGalleryVideoFiles([]);
    setNewVideoUrlInput('');
    setSpecs(item.specs && item.specs.length > 0 ? [...item.specs] : []);
    setActiveTab('basics');
    setShowAddForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Primary file handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  // Multiple Gallery Images File Handler
  const handleMultipleGalleryImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setNewGalleryFiles((prev) => [...prev, ...files]);
      // Also generate local preview URLs to display immediately in the gallery grid
      const previewUrls = files.map((f) => URL.createObjectURL(f));
      setGalleryImages((prev) => [...prev, ...previewUrls]);
    }
  };

  // Multiple Gallery Videos File Handler
  const handleMultipleGalleryVideosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setNewGalleryVideoFiles((prev) => [...prev, ...files]);
      const previewUrls = files.map((f) => URL.createObjectURL(f));
      setGalleryVideos((prev) => [...prev, ...previewUrls]);
    }
  };

  // Add Direct Image URL to gallery
  const addImageUrlToGallery = () => {
    if (!newImageUrlInput.trim()) return;
    const urls = newImageUrlInput
      .split(/[\n,]+/)
      .map((u) => u.trim())
      .filter(Boolean);
    setGalleryImages((prev) => [...prev, ...urls]);
    setNewImageUrlInput('');
  };

  // Remove Gallery Image
  const removeGalleryImage = (index: number) => {
    setGalleryImages((prev) => prev.filter((_, idx) => idx !== index));
  };

  // Add Direct Video URL to gallery
  const addVideoUrlToGallery = () => {
    if (!newVideoUrlInput.trim()) return;
    const urls = newVideoUrlInput
      .split(/[\n,]+/)
      .map((u) => u.trim())
      .filter(Boolean);
    setGalleryVideos((prev) => [...prev, ...urls]);
    setNewVideoUrlInput('');
  };

  // Remove Gallery Video
  const removeGalleryVideo = (index: number) => {
    setGalleryVideos((prev) => prev.filter((_, idx) => idx !== index));
  };

  // Spec management
  const addSpecRow = () => {
    setSpecs((prev) => [...prev, { label: 'Metric', value: '100%', description: 'Performance metric' }]);
  };

  const updateSpecRow = (index: number, field: keyof MediaSpec, val: string) => {
    setSpecs((prev) =>
      prev.map((s, idx) => (idx === index ? { ...s, [field]: val } : s))
    );
  };

  const removeSpecRow = (index: number) => {
    setSpecs((prev) => prev.filter((_, idx) => idx !== index));
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('subtitle', subtitle);
      formData.append('category', category);
      formData.append('date', date);
      formData.append('summary', summary);
      formData.append('content', content);
      formData.append('featured', featured ? 'true' : 'false');
      formData.append('mediaType', mediaType);
      formData.append('directUrl', directUrl);

      // Hero Video & Secondary Image
      formData.append('heroVideo', heroVideo);
      formData.append('secondaryImage', secondaryImage);
      if (heroVideoFile) formData.append('heroVideoFile', heroVideoFile);
      if (secondaryImageFile) formData.append('secondaryImageFile', secondaryImageFile);

      // Filter out blob: URLs that were local previews before saving JSON
      const remoteGalleryImages = galleryImages.filter((url) => !url.startsWith('blob:'));
      formData.append('galleryImages', JSON.stringify(remoteGalleryImages));

      const remoteGalleryVideos = galleryVideos.filter((url) => !url.startsWith('blob:'));
      formData.append('galleryVideos', JSON.stringify(remoteGalleryVideos));

      // Append new files
      for (const file of newGalleryFiles) {
        formData.append('newGalleryFiles', file);
      }
      for (const file of newGalleryVideoFiles) {
        formData.append('newGalleryVideoFiles', file);
      }

      // Specs
      formData.append('specs', JSON.stringify(specs));

      // Primary file upload
      if (selectedFile) {
        formData.append('file', selectedFile);
      }

      let res;
      if (editingItem) {
        formData.append('id', editingItem.id);
        formData.append('slug', editingItem.slug);
        res = await updateMediaAction(formData);
      } else {
        res = await createMediaAction(formData);
      }

      if (res.success && res.item) {
        setMessage({
          type: 'success',
          text: editingItem
            ? `Media release "${res.item.title}" updated successfully!`
            : `Media release "${res.item.title}" published successfully!`,
        });
        setEditingItem(null);
        setShowAddForm(false);
        fetchMedia();
        router.refresh();
      } else {
        setMessage({ type: 'error', text: res.error || 'Failed to save media story' });
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err?.message || 'Unexpected submission error' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string, itemTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${itemTitle}"?`)) return;

    try {
      const res = await deleteMediaAction(id);
      if (res.success) {
        setItems((prev) => prev.filter((i) => i.id !== id));
        setMessage({ type: 'success', text: 'Media item deleted.' });
        router.refresh();
      } else {
        setMessage({ type: 'error', text: res.error || 'Failed to delete' });
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Deletion error' });
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner / Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <Film className="w-6 h-6 text-[#1a365d]" />
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Media & Press Management</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Publish, edit and configure high-fidelity Tesla-inspired releases with multiple images, videos and metrics.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/media"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            <span>View Public Newsroom</span>
            <ExternalLink size={14} />
          </Link>
          <button
            onClick={() => {
              if (showAddForm) {
                setShowAddForm(false);
                setEditingItem(null);
              } else {
                openAddModal();
              }
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1a365d] hover:bg-[#152a48] rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <Plus size={16} />
            <span>{showAddForm ? 'Close Editor' : 'Add New Media Release'}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {message && (
        <div
          className={`p-4 rounded-xl flex items-center gap-3 text-sm ${
            message.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-rose-50 text-rose-800 border border-rose-200'
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

      {/* Add / Edit Media Full Experience Editor */}
      {showAddForm && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden transition-all">
          {/* Header */}
          <div className="border-b border-slate-200 p-6 flex items-center justify-between bg-slate-50/50">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-[#1a365d]">
                  Tesla Roadster Architecture
                </span>
                <h2 className="text-lg font-bold text-slate-900">
                  {editingItem ? `Editing: ${editingItem.title}` : 'Create New Media Release'}
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Configure full-bleed cinema media, multiple gallery images, videos, and production specs just like the Tesla Roadster experience.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setShowAddForm(false);
                setEditingItem(null);
              }}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1 px-6 border-b border-slate-200 bg-white overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'basics'
                  ? 'border-[#1a365d] text-[#1a365d]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              1. General Info
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('hero')}
              className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'hero'
                  ? 'border-[#1a365d] text-[#1a365d]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              2. Hero & Cinema Media
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'gallery'
                  ? 'border-[#1a365d] text-[#1a365d]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <span>3. Multiple Images & Videos</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-blue-100 text-blue-800 font-bold">
                {galleryImages.length + galleryVideos.length}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'specs'
                  ? 'border-[#1a365d] text-[#1a365d]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              4. Specifications ({specs.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('editorial')}
              className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'editorial'
                  ? 'border-[#1a365d] text-[#1a365d]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              5. Editorial Narrative
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* =========================================================================
                TAB 1: GENERAL INFO
            ========================================================================== */}
            {activeTab === 'basics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Title */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Title <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Tesla Roadster: The Quickest Car in the World"
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#1a365d]"
                    />
                  </div>

                  {/* Subtitle */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Subtitle / Tagline
                    </label>
                    <input
                      type="text"
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      placeholder="e.g. Record-setting acceleration, range and aerodynamic performance"
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#1a365d]"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as any)}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#1a365d]"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Publication Date */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Publication Date (DD/MM/YYYY)
                    </label>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      placeholder="19/10/2026"
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#1a365d]"
                    />
                  </div>

                  {/* Summary / Teaser */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Short Teaser / Summary <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      placeholder="Short 2-3 sentence teaser that appears in card carousels and Tesla summary headers..."
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#1a365d]"
                    />
                  </div>

                  {/* Featured Flag */}
                  <div className="md:col-span-2 flex items-center pt-2">
                    <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={featured}
                        onChange={(e) => setFeatured(e.target.checked)}
                        className="w-4 h-4 rounded text-[#1a365d] focus:ring-[#1a365d]"
                      />
                      <span className="font-medium">Pin as Featured Story on Homepage Carousel</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 2: HERO & CINEMA MEDIA
            ========================================================================== */}
            {activeTab === 'hero' && (
              <div className="space-y-8">
                {/* Primary Media Asset */}
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <ImageIcon size={16} />
                    Primary Hero Media
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Media Type
                      </label>
                      <div className="flex items-center gap-4 pt-1">
                        <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="mediaType"
                            value="image"
                            checked={mediaType === 'image'}
                            onChange={() => setMediaType('image')}
                            className="text-[#1a365d] focus:ring-[#1a365d]"
                          />
                          <span>Image</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="mediaType"
                            value="video"
                            checked={mediaType === 'video'}
                            onChange={() => setMediaType('video')}
                            className="text-[#1a365d] focus:ring-[#1a365d]"
                          />
                          <span>Video (MP4 / YouTube / Vimeo)</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Upload Primary Media File
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
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
                        >
                          <Upload size={14} />
                          <span>{selectedFile ? selectedFile.name : 'Choose File...'}</span>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Or Direct Media URL / Path
                      </label>
                      <input
                        type="text"
                        value={directUrl}
                        onChange={(e) => {
                          setDirectUrl(e.target.value);
                          setPreviewUrl(e.target.value);
                        }}
                        placeholder="e.g. /case/roadster/roadster-hero.jpg or https://..."
                        className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#1a365d]"
                      />
                    </div>

                    {previewUrl && (
                      <div className="md:col-span-2 pt-2">
                        <div className="relative w-full max-w-sm aspect-[16/10] bg-neutral-900 rounded-xl overflow-hidden border border-slate-200">
                          {mediaType === 'video' ? (
                            previewUrl.endsWith('.mp4') ? (
                              <video src={previewUrl} controls className="w-full h-full object-cover" />
                            ) : (
                              <iframe src={previewUrl} className="w-full h-full border-0" />
                            )
                          ) : (
                            <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hero Dedicated Video Loop */}
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <Video size={16} />
                    Hero Background Video Loop (Tesla Roadster Style)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Autoplays full-screen behind the hero section with cinematic vignette.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Hero Video URL (.mp4)
                      </label>
                      <input
                        type="text"
                        value={heroVideo}
                        onChange={(e) => setHeroVideo(e.target.value)}
                        placeholder="e.g. /case/roadster/roadster-loop.mp4"
                        className="w-full px-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#1a365d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Or Upload MP4 Video
                      </label>
                      <input
                        ref={heroVideoInputRef}
                        type="file"
                        accept="video/mp4,video/*"
                        onChange={(e) => setHeroVideoFile(e.target.files?.[0] || null)}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => heroVideoInputRef.current?.click()}
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
                      >
                        <Upload size={14} />
                        <span>{heroVideoFile ? heroVideoFile.name : 'Choose Video File...'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Secondary Full-Bleed 21:9 Image */}
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <Layers size={16} />
                    Secondary Full-Bleed 21:9 Media Plate
                  </h3>
                  <p className="text-xs text-slate-500">
                    Large full-bleed cinematic spread displayed below the hero section.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Secondary Image URL
                      </label>
                      <input
                        type="text"
                        value={secondaryImage}
                        onChange={(e) => setSecondaryImage(e.target.value)}
                        placeholder="e.g. /case/roadster/roadster-profile.jpg"
                        className="w-full px-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#1a365d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Or Upload Image
                      </label>
                      <input
                        ref={secondaryImageInputRef}
                        type="file"
                        accept="image/*"
                        onChange={(e) => setSecondaryImageFile(e.target.files?.[0] || null)}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => secondaryImageInputRef.current?.click()}
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
                      >
                        <Upload size={14} />
                        <span>{secondaryImageFile ? secondaryImageFile.name : 'Choose Image File...'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 3: MULTIPLE GALLERY IMAGES & VIDEOS
            ========================================================================== */}
            {activeTab === 'gallery' && (
              <div className="space-y-10">
                {/* Section A: Multiple Images */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <ImageIcon className="w-5 h-5 text-[#1a365d]" />
                        Multiple High-Resolution Images ({galleryImages.length})
                      </h3>
                      <p className="text-xs text-slate-500">
                        Rendered in the Tesla 2-column widescreen portfolio grid.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        ref={multiGalleryImagesInputRef}
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleMultipleGalleryImagesChange}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => multiGalleryImagesInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#1a365d] hover:bg-[#152a48] rounded-lg transition-colors cursor-pointer shadow-xs"
                      >
                        <Upload size={13} />
                        <span>Upload Images</span>
                      </button>
                    </div>
                  </div>

                  {/* Add Image URLs input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newImageUrlInput}
                      onChange={(e) => setNewImageUrlInput(e.target.value)}
                      placeholder="Paste image URL (/case/roadster/roadster-rear.jpg, https://...) and click Add"
                      className="flex-1 px-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#1a365d]"
                    />
                    <button
                      type="button"
                      onClick={addImageUrlToGallery}
                      className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                    >
                      + Add URL
                    </button>
                  </div>

                  {/* Visual Grid of Gallery Images */}
                  {galleryImages.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-2">
                      {galleryImages.map((imgUrl, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-[16/10] bg-neutral-900 rounded-xl overflow-hidden border border-slate-200 group shadow-xs"
                        >
                          <Image src={imgUrl} alt={`Gallery Image ${idx + 1}`} fill className="object-cover" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button
                              type="button"
                              onClick={() => removeGalleryImage(idx)}
                              className="p-1.5 rounded-lg bg-rose-600 text-white hover:bg-rose-700 transition-colors shadow-sm cursor-pointer"
                              title="Remove image"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[9px] font-mono bg-black/70 text-white">
                            #{idx + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center bg-slate-50 border border-dashed border-slate-200 rounded-xl text-xs text-slate-400">
                      No gallery images attached yet. Click &ldquo;Upload Images&rdquo; or paste URLs above to populate the Tesla 2-column spread.
                    </div>
                  )}
                </div>

                {/* Section B: Multiple Videos */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <Video className="w-5 h-5 text-[#1a365d]" />
                        Multiple Video Showcases ({galleryVideos.length})
                      </h3>
                      <p className="text-xs text-slate-500">
                        Rendered in the dedicated high-fidelity Cinema Video Section.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        ref={multiGalleryVideosInputRef}
                        type="file"
                        multiple
                        accept="video/*"
                        onChange={handleMultipleGalleryVideosChange}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => multiGalleryVideosInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#1a365d] hover:bg-[#152a48] rounded-lg transition-colors cursor-pointer shadow-xs"
                      >
                        <Upload size={13} />
                        <span>Upload Videos</span>
                      </button>
                    </div>
                  </div>

                  {/* Add Video URLs input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newVideoUrlInput}
                      onChange={(e) => setNewVideoUrlInput(e.target.value)}
                      placeholder="Paste video URL (/case/roadster/roadster-loop.mp4, YouTube, Vimeo) and click Add"
                      className="flex-1 px-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#1a365d]"
                    />
                    <button
                      type="button"
                      onClick={addVideoUrlToGallery}
                      className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                    >
                      + Add Video
                    </button>
                  </div>

                  {/* List of Gallery Videos */}
                  {galleryVideos.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                      {galleryVideos.map((vidUrl, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-[16/10] bg-neutral-900 rounded-xl overflow-hidden border border-slate-200 flex flex-col justify-end p-3 shadow-xs"
                        >
                          {vidUrl.endsWith('.mp4') ? (
                            <video src={vidUrl} className="absolute inset-0 w-full h-full object-cover" />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 text-white font-mono text-xs">
                              {vidUrl}
                            </div>
                          )}
                          <div className="relative z-10 flex items-center justify-between bg-black/60 backdrop-blur-md p-2 rounded-lg text-white">
                            <span className="text-[10px] font-mono truncate max-w-[150px]">
                              Video #{idx + 1}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeGalleryVideo(idx)}
                              className="p-1 rounded bg-rose-600 text-white hover:bg-rose-700 transition-colors cursor-pointer"
                              title="Remove video"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center bg-slate-50 border border-dashed border-slate-200 rounded-xl text-xs text-slate-400">
                      No gallery videos attached yet. Upload MP4 videos or paste video URLs above.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 4: SPECIFICATIONS & BENCHMARKS (Tesla-Style Metrics Grid)
            ========================================================================== */}
            {activeTab === 'specs' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-[#1a365d]" />
                      Tesla-Style Specifications &amp; Benchmarks ({specs.length})
                    </h3>
                    <p className="text-xs text-slate-500">
                      Renders in the 3-box or 4-box metrics grid (e.g. 0-60 mph: 1.9s, Top Speed: +250 mph).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={addSpecRow}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#1a365d] hover:bg-[#152a48] rounded-lg transition-colors cursor-pointer"
                  >
                    <Plus size={13} />
                    <span>Add Metric</span>
                  </button>
                </div>

                {specs.length > 0 ? (
                  <div className="space-y-3">
                    {specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
                      >
                        <div className="sm:col-span-3">
                          <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                            Label
                          </label>
                          <input
                            type="text"
                            value={spec.label}
                            onChange={(e) => updateSpecRow(idx, 'label', e.target.value)}
                            placeholder="e.g. Top Speed"
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#1a365d]"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                            Value
                          </label>
                          <input
                            type="text"
                            value={spec.value}
                            onChange={(e) => updateSpecRow(idx, 'value', e.target.value)}
                            placeholder="e.g. +250 mph"
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg font-bold text-slate-900 focus:outline-none focus:border-[#1a365d]"
                          />
                        </div>

                        <div className="sm:col-span-5">
                          <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                            Description
                          </label>
                          <input
                            type="text"
                            value={spec.description || ''}
                            onChange={(e) => updateSpecRow(idx, 'description', e.target.value)}
                            placeholder="e.g. Maximum verified velocity threshold"
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#1a365d]"
                          />
                        </div>

                        <div className="sm:col-span-1 flex justify-end pt-4 sm:pt-0">
                          <button
                            type="button"
                            onClick={() => removeSpecRow(idx)}
                            className="p-2 text-slate-400 hover:text-rose-600 rounded-lg transition-colors cursor-pointer"
                            title="Remove metric"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center bg-slate-50 border border-dashed border-slate-200 rounded-xl text-xs text-slate-400">
                    No specifications configured. Click &ldquo;Add Metric&rdquo; to add custom metrics like acceleration, range, or speed.
                  </div>
                )}
              </div>
            )}

            {/* =========================================================================
                TAB 5: EDITORIAL NARRATIVE
            ========================================================================== */}
            {activeTab === 'editorial' && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#1a365d]" />
                    Full Editorial Narrative Body
                  </h3>
                  <p className="text-xs text-slate-500">
                    Write in paragraphs separated by blank lines. Displayed in the clean Tesla narrative section.
                  </p>
                </div>

                <textarea
                  required
                  rows={14}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write the complete article copy here. Separate distinct paragraphs with blank lines..."
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#1a365d] font-sans leading-relaxed"
                />
              </div>
            )}

            {/* Footer Form Action Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200 bg-white">
              <div className="text-xs text-slate-400">
                All changes automatically revalidate public pages and the home carousel.
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingItem(null);
                  }}
                  className="px-5 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#1a365d] hover:bg-[#152a48] rounded-xl shadow-sm transition-all disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? 'Saving...' : editingItem ? 'Save & Update Media' : 'Publish Media Release'}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Media Stories Table / List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-900">Published Media Releases</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
              {items.length} total
            </span>
          </div>
          <button
            onClick={fetchMedia}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title="Refresh list"
          >
            <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>

        {items.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {items.map((item) => (
              <div
                key={item.id}
                className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50/70 transition-colors"
              >
                {/* Left: Thumbnail & Info */}
                <div className="flex items-start gap-5 flex-1 min-w-0">
                  <div className="relative w-28 h-20 bg-neutral-900 rounded-lg overflow-hidden shrink-0 border border-slate-200">
                    <Image
                      src={item.mediaUrl || item.thumbnailUrl || '/studio-assets/service-experience-design.jpg'}
                      alt={item.title}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                    {item.mediaType === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Video className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                        {item.category}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {item.date}
                      </span>
                      {item.featured && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-medium border border-amber-200">
                          Featured
                        </span>
                      )}
                      {item.galleryImages && item.galleryImages.length > 0 && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
                          {item.galleryImages.length} Images
                        </span>
                      )}
                      {item.galleryVideos && item.galleryVideos.length > 0 && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-medium border border-purple-200">
                          {item.galleryVideos.length} Videos
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 max-w-xl">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                  <Link
                    href={`/media/${item.slug}`}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    <span>View</span>
                    <ExternalLink size={12} />
                  </Link>

                  <button
                    onClick={() => openEditModal(item)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shadow-2xs"
                    title="Edit Media"
                  >
                    <Edit3 size={13} />
                    <span>Edit</span>
                  </button>

                  <button
                    onClick={() => handleDelete(item.id, item.title)}
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                    title="Delete Media"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-slate-400 text-sm">
            {loading ? 'Loading media items...' : 'No media items published yet.'}
          </div>
        )}
      </div>
    </div>
  );
}
