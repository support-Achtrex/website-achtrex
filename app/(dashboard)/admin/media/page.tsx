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
  RefreshCw
} from 'lucide-react';
import { createMediaAction, updateMediaAction, deleteMediaAction } from '@/app/actions/media';
import { MediaItem } from '@/lib/media-db';

const CATEGORIES = ['STORIES', 'EVENTS', 'ABOUT US', 'ESG', 'INNOVATION'];

export default function AdminMediaPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<MediaItem | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<'STORIES' | 'EVENTS' | 'ABOUT US' | 'ESG' | 'INNOVATION'>('STORIES');
  const [date, setDate] = useState('');
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  const [directUrl, setDirectUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [featured, setFeatured] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const getTodayDate = () => {
    const today = new Date();
    const d = String(today.getDate()).padStart(2, '0');
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const y = today.getFullYear();
    return `${d}/${m}/${y}`;
  };

  // Fetch initial media items
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
    setMediaType('image');
    setDirectUrl('');
    setSummary('');
    setContent('');
    setFeatured(false);
    setSelectedFile(null);
    setPreviewUrl('');
    setShowAddForm(true);
  };

  const openEditModal = (item: MediaItem) => {
    setEditingItem(item);
    setTitle(item.title || '');
    setSubtitle(item.subtitle || '');
    setCategory(item.category || 'STORIES');
    setDate(item.date || getTodayDate());
    setMediaType(item.mediaType || 'image');
    setDirectUrl(item.mediaUrl || '');
    setSummary(item.summary || '');
    setContent(item.content || '');
    setFeatured(Boolean(item.featured));
    setSelectedFile(null);
    setPreviewUrl(item.mediaUrl || '');
    setShowAddForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

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
      formData.append('mediaType', mediaType);
      formData.append('directUrl', directUrl);
      formData.append('summary', summary);
      formData.append('content', content);
      formData.append('featured', featured ? 'true' : 'false');
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
            ? `Media "${res.item.title}" updated successfully!`
            : `Media "${res.item.title}" published successfully!`,
        });
        // Reset form
        setTitle('');
        setSubtitle('');
        setSummary('');
        setContent('');
        setDirectUrl('');
        setSelectedFile(null);
        setPreviewUrl('');
        setEditingItem(null);
        setShowAddForm(false);
        // Refresh list
        if (editingItem) {
          setItems((prev) => prev.map((i) => (i.id === editingItem.id ? res.item! : i)));
        } else {
          setItems((prev) => [res.item!, ...prev]);
        }
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
            Publish and manage news, stories, events, and press releases with images and videos.
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
            <span>{showAddForm ? 'Close Form' : 'Add New Media'}</span>
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

      {/* Add / Edit Media Form */}
      {showAddForm && (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md transition-all">
          <div className="border-b border-slate-100 pb-4 mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {editingItem ? `Edit Media Release / ${editingItem.title}` : 'Publish New Media Release'}
              </h2>
              <p className="text-xs text-slate-500">
                {editingItem
                  ? 'Update editorial copy, media asset URLs, or upload replacement media files.'
                  : 'Provide article copy and upload either an image or video (or embed YouTube/Vimeo).'}
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

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="e.g. “Virtual Rescue Experience” or Next-Gen AI Release"
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#1a365d]"
                />
              </div>

              {/* Subtitle */}
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Subtitle / Subhead
                </label>
                <input
                  type="text"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  placeholder="e.g. Achtrex and partners at the Genoa International Boat Show"
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
                  placeholder="05/10/2026"
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#1a365d]"
                />
              </div>

              {/* Media Type Selection */}
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
                    <ImageIcon size={16} className="text-slate-500" />
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
                    <Video size={16} className="text-slate-500" />
                    <span>Video (MP4 / YouTube / Vimeo)</span>
                  </label>
                </div>
              </div>

              {/* Featured Flag */}
              <div className="flex items-center pt-6">
                <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="w-4 h-4 rounded text-[#1a365d] focus:ring-[#1a365d]"
                  />
                  <span className="font-medium">Pin as Featured on Homepage</span>
                </label>
              </div>

              {/* Media Source: File Upload */}
              <div className="md:col-span-1">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Upload File ({mediaType === 'image' ? 'JPG, PNG, WebP' : 'MP4, WebM'})
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
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    <Upload size={14} />
                    <span>{selectedFile ? selectedFile.name : 'Choose File...'}</span>
                  </button>
                  {selectedFile && (
                    <span className="text-xs text-slate-500">
                      ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  )}
                </div>
              </div>

              {/* Media Source: Direct URL */}
              <div className="md:col-span-1">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Or Direct Media URL / Video Embed
                </label>
                <input
                  type="text"
                  value={directUrl}
                  onChange={(e) => {
                    setDirectUrl(e.target.value);
                    if (e.target.value.startsWith('http')) {
                      setPreviewUrl(e.target.value);
                    }
                  }}
                  placeholder={
                    mediaType === 'video'
                      ? 'https://youtube.com/watch?v=... or /video.mp4'
                      : 'https://... or /studio-assets/service-experience-design.jpg'
                  }
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#1a365d]"
                />
              </div>

              {/* Live Preview */}
              {previewUrl && (
                <div className="md:col-span-2">
                  <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Media Preview
                  </span>
                  <div className="relative w-full max-w-md aspect-[16/10] bg-neutral-900 rounded-xl overflow-hidden border border-slate-200">
                    {mediaType === 'video' ? (
                      previewUrl.includes('youtube') || previewUrl.includes('youtu.be') ? (
                        <iframe src={previewUrl} className="w-full h-full border-0" />
                      ) : (
                        <video src={previewUrl} controls className="w-full h-full object-contain" />
                      )
                    ) : (
                      <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                    )}
                  </div>
                </div>
              )}

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
                  placeholder="Short 2-3 sentence teaser that appears in card grids and carousels..."
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#1a365d]"
                />
              </div>

              {/* Full Editorial Content */}
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Full Article Body (Markdown / Paragraphs) <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write the complete article copy here. Separate paragraphs with blank lines..."
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#1a365d] font-sans"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
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
                {submitting ? 'Saving...' : editingItem ? 'Save Changes' : 'Publish Media Item'}
              </button>
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
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
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
                  <div className="relative w-28 h-20 bg-neutral-100 rounded-lg overflow-hidden shrink-0 border border-slate-200">
                    <Image
                      src={item.mediaUrl || '/studio-assets/service-experience-design.jpg'}
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
                      <span className="text-xs text-slate-400">
                        {item.date}
                      </span>
                      {item.featured && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-medium border border-amber-200">
                          Featured
                        </span>
                      )}
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                        {item.mediaType.toUpperCase()}
                      </span>
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
