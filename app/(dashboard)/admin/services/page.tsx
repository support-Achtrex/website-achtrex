'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  Plus, 
  Trash2, 
  Edit3, 
  ExternalLink, 
  Upload, 
  X, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  RefreshCw,
  Layers
} from 'lucide-react';
import { updateServiceAction, createServiceAction, deleteServiceAction } from '@/app/actions/services';
import { ServiceItem } from '@/data/studio-data';

export default function AdminServicesPage() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form Fields
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [headline, setHeadline] = useState('');
  const [description, setDescription] = useState('');
  const [philosophy, setPhilosophy] = useState('');
  const [whyItMatters, setWhyItMatters] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [secondaryImage, setSecondaryImage] = useState('');
  const [capabilities, setCapabilities] = useState('');
  const [deliverables, setDeliverables] = useState('');

  // File Upload Previews
  const [heroImageFile, setHeroImageFile] = useState<File | null>(null);
  const [heroImagePreview, setHeroImagePreview] = useState<string>('');
  const [secondaryImageFile, setSecondaryImageFile] = useState<File | null>(null);
  const [secondaryImagePreview, setSecondaryImagePreview] = useState<string>('');

  const heroInputRef = useRef<HTMLInputElement>(null);
  const secondaryInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/services-items?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setServices(data);
      }
    } catch (_) {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  const openEditModal = (service: ServiceItem) => {
    setEditingService(service);
    setIsCreating(false);
    setTitle(service.title || '');
    setNumber(service.number || '');
    setSubtitle(service.subtitle || '');
    setHeadline(service.headline || '');
    setDescription(service.description || '');
    setPhilosophy(service.philosophy || '');
    setWhyItMatters(service.whyItMatters || '');
    setHeroImage(service.heroImage || '');
    setSecondaryImage(service.secondaryImage || '');
    setCapabilities((service.capabilities || []).join('\n'));
    setDeliverables((service.deliverables || []).join('\n'));
    setHeroImageFile(null);
    setHeroImagePreview('');
    setSecondaryImageFile(null);
    setSecondaryImagePreview('');
  };

  const openCreateModal = () => {
    setEditingService(null);
    setIsCreating(true);
    setTitle('');
    setNumber('07');
    setSubtitle('');
    setHeadline('');
    setDescription('');
    setPhilosophy('');
    setWhyItMatters('');
    setHeroImage('/studio-assets/service-experience-design.jpg');
    setSecondaryImage('');
    setCapabilities('');
    setDeliverables('');
    setHeroImageFile(null);
    setHeroImagePreview('');
    setSecondaryImageFile(null);
    setSecondaryImagePreview('');
  };

  const handleHeroFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setHeroImageFile(file);
      setHeroImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSecondaryFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSecondaryImageFile(file);
      setSecondaryImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveHeroImage = () => {
    setHeroImage('');
    setHeroImageFile(null);
    setHeroImagePreview('');
  };

  const handleRemoveSecondaryImage = () => {
    setSecondaryImage('');
    setSecondaryImageFile(null);
    setSecondaryImagePreview('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setToastMessage(null);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('number', number);
      formData.append('subtitle', subtitle);
      formData.append('headline', headline);
      formData.append('description', description);
      formData.append('philosophy', philosophy);
      formData.append('whyItMatters', whyItMatters);
      formData.append('heroImage', heroImage);
      formData.append('secondaryImage', secondaryImage);
      formData.append('capabilities', capabilities);
      formData.append('deliverables', deliverables);

      if (heroImageFile) formData.append('heroImageFile', heroImageFile);
      if (secondaryImageFile) formData.append('secondaryImageFile', secondaryImageFile);

      let res;
      if (isCreating) {
        res = await createServiceAction(formData);
      } else if (editingService) {
        formData.append('slug', editingService.slug);
        res = await updateServiceAction(formData);
      }

      if (res?.success) {
        setToastMessage({ type: 'success', text: isCreating ? 'Service created successfully!' : 'Service updated successfully!' });
        if (editingService && res.service) {
          setServices((prev) => prev.map((s) => (s.slug === editingService.slug || s.id === editingService.id ? res.service! : s)));
        } else if (isCreating && res.service) {
          setServices((prev) => [res.service!, ...prev]);
        }
        setEditingService(null);
        setIsCreating(false);
        fetchServices();
      } else {
        setToastMessage({ type: 'error', text: res?.error || 'Failed to save service' });
      }
    } catch (err: any) {
      setToastMessage({ type: 'error', text: err?.message || 'Unexpected error' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this service? This cannot be undone.')) return;

    try {
      const res = await deleteServiceAction(slug);
      if (res.success) {
        setToastMessage({ type: 'success', text: 'Service deleted.' });
        setServices((prev) => prev.filter((s) => s.slug !== slug && s.id !== slug));
        fetchServices();
      } else {
        setToastMessage({ type: 'error', text: 'Failed to delete service.' });
      }
    } catch (_) {
      setToastMessage({ type: 'error', text: 'Error deleting service.' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
              <Layers size={20} />
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Manage Services
            </h1>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Update service titles, copy, hero images, and capabilities. Changes reflect immediately on the live website.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchServices}
            className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
            title="Refresh"
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
          </button>
          <button
            onClick={openCreateModal}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#0f172a] hover:bg-black text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            <Plus size={18} />
            <span>Add Service</span>
          </button>
        </div>
      </div>

      {/* Toast Feedback */}
      {toastMessage && (
        <div
          className={`p-4 rounded-xl flex items-center gap-3 border ${
            toastMessage.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : 'bg-rose-50 text-rose-800 border-rose-200'
          }`}
        >
          {toastMessage.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span className="text-sm font-medium">{toastMessage.text}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-auto text-xs font-bold hover:underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Services Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="h-64 rounded-xl bg-gray-100 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Media Preview Box */}
                <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden group">
                  {service.heroImage ? (
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 font-mono text-xs">
                      No Image Configured
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-black/75 text-white border border-white/20">
                      AREA {service.number}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="font-mono text-[11px] text-cyan-300 block">
                      /{service.slug}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-lg text-gray-900 tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {service.description || service.subtitle}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1">
                    {(service.capabilities || []).slice(0, 3).map((cap, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700"
                      >
                        {cap}
                      </span>
                    ))}
                    {(service.capabilities || []).length > 3 && (
                      <span className="text-[10px] font-mono px-1 text-gray-400">
                        +{(service.capabilities || []).length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  target="_blank"
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-black font-medium transition-colors"
                >
                  <Eye size={14} />
                  <span>View Live</span>
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEditModal(service)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 hover:bg-gray-100 text-gray-800 rounded-lg text-xs font-medium transition-colors shadow-2xs"
                  >
                    <Edit3 size={13} />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(service.slug)}
                    className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit / Create Service Modal */}
      {(editingService || isCreating) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-3xl my-8 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 block">
                  {isCreating ? 'Create New Studio Service' : `Editing Service Area ${editingService?.number}`}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-0.5">
                  {isCreating ? 'New Service' : editingService?.title}
                </h2>
              </div>
              <button
                onClick={() => {
                  setEditingService(null);
                  setIsCreating(false);
                }}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
              {/* Row 1: Title & Number */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-3">
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Number
                  </label>
                  <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="01"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-sm"
                    required
                  />
                </div>
                <div className="sm:col-span-9">
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Service Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Artificial Intelligence Development Services"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-sm"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Hero Visual Media Replacement */}
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold uppercase text-gray-900">
                      Hero Image
                    </span>
                    <span className="text-xs text-gray-500">
                      Primary high-resolution photo or 3D visual displayed on the service page and grid.
                    </span>
                  </div>
                  {(heroImagePreview || heroImage) && (
                    <button
                      type="button"
                      onClick={handleRemoveHeroImage}
                      className="text-xs text-rose-600 hover:underline font-medium"
                    >
                      Remove Image
                    </button>
                  )}
                </div>

                {/* Preview Frame */}
                {(heroImagePreview || heroImage) && (
                  <div className="relative aspect-[16/9] max-h-48 rounded-lg overflow-hidden border border-gray-200 bg-black">
                    <Image
                      src={heroImagePreview || heroImage}
                      alt="Hero preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* File Upload & Direct URL Controls */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="file"
                    ref={heroInputRef}
                    onChange={handleHeroFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => heroInputRef.current?.click()}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium text-xs shadow-2xs"
                  >
                    <Upload size={14} />
                    <span>Upload New Image File</span>
                  </button>

                  <input
                    type="text"
                    value={heroImage}
                    onChange={(e) => setHeroImage(e.target.value)}
                    placeholder="Or enter image URL e.g. /studio-assets/service-ai.jpg"
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-mono"
                  />
                </div>
              </div>

              {/* Row 3: Detail / Secondary Visual */}
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold uppercase text-gray-900">
                      Secondary / Detail Visual
                    </span>
                    <span className="text-xs text-gray-500">
                      Displayed alongside the interaction dynamics and methodology section.
                    </span>
                  </div>
                  {(secondaryImagePreview || secondaryImage) && (
                    <button
                      type="button"
                      onClick={handleRemoveSecondaryImage}
                      className="text-xs text-rose-600 hover:underline font-medium"
                    >
                      Remove Image
                    </button>
                  )}
                </div>

                {(secondaryImagePreview || secondaryImage) && (
                  <div className="relative aspect-[16/9] max-h-40 rounded-lg overflow-hidden border border-gray-200 bg-black">
                    <Image
                      src={secondaryImagePreview || secondaryImage}
                      alt="Secondary preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="file"
                    ref={secondaryInputRef}
                    onChange={handleSecondaryFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => secondaryInputRef.current?.click()}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium text-xs shadow-2xs"
                  >
                    <Upload size={14} />
                    <span>Upload Detail Image</span>
                  </button>

                  <input
                    type="text"
                    value={secondaryImage}
                    onChange={(e) => setSecondaryImage(e.target.value)}
                    placeholder="Or enter image URL e.g. /studio-assets/service-ai-detail.jpg"
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-mono"
                  />
                </div>
              </div>

              {/* Subtitle & Headline */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  placeholder="Concise studio summary"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Editorial Headline
                </label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  placeholder="Primary large headline on detail page"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Full Service Description
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Detailed description of the service scope and deliverables..."
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
              </div>

              {/* Philosophy & Why It Matters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Design &amp; Engineering Philosophy
                  </label>
                  <textarea
                    rows={3}
                    value={philosophy}
                    onChange={(e) => setPhilosophy(e.target.value)}
                    placeholder="Our studio conviction..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Why It Matters
                  </label>
                  <textarea
                    rows={3}
                    value={whyItMatters}
                    onChange={(e) => setWhyItMatters(e.target.value)}
                    placeholder="Commercial and brand impact..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  />
                </div>
              </div>

              {/* Capabilities & Deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Key Capabilities (1 per line)
                  </label>
                  <textarea
                    rows={4}
                    value={capabilities}
                    onChange={(e) => setCapabilities(e.target.value)}
                    placeholder="Custom AI architectures&#10;Autonomous agents&#10;RAG pipelines"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Client Deliverables (1 per line)
                  </label>
                  <textarea
                    rows={4}
                    value={deliverables}
                    onChange={(e) => setDeliverables(e.target.value)}
                    placeholder="Production React/Next.js Codebase&#10;API Integration Contracts&#10;Design System Tokens"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-xs"
                  />
                </div>
              </div>

              {/* Submit Controls */}
              <div className="pt-4 border-t border-gray-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setEditingService(null);
                    setIsCreating(false);
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2 rounded-lg bg-[#0f172a] hover:bg-black text-white text-sm font-medium transition-colors shadow-sm disabled:opacity-50"
                >
                  {submitting ? 'Saving...' : isCreating ? 'Create Service' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
