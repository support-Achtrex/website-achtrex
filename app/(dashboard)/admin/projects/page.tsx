'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FolderKanban, 
  Plus, 
  Trash2, 
  Edit3, 
  Upload, 
  X, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  RefreshCw,
  Video,
  ImageIcon
} from 'lucide-react';
import { updateProjectAction, createProjectAction, deleteProjectAction } from '@/app/actions/projects';
import { ConceptExperienceItem } from '@/data/studio-data';

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ConceptExperienceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState<ConceptExperienceItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form Fields
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('');
  const [industry, setIndustry] = useState('');
  const [year, setYear] = useState('2025');
  const [shortDescription, setShortDescription] = useState('');
  const [challenge, setChallenge] = useState('');
  const [conceptArchitecture, setConceptArchitecture] = useState('');
  const [interactiveExperience, setInteractiveExperience] = useState('');
  const [creativeDirection, setCreativeDirection] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [heroVideo, setHeroVideo] = useState('');
  const [secondaryImage, setSecondaryImage] = useState('');
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [technicalCapabilities, setTechnicalCapabilities] = useState('');
  const [techStack, setTechStack] = useState('');

  // File Upload Previews
  const [heroImageFile, setHeroImageFile] = useState<File | null>(null);
  const [heroImagePreview, setHeroImagePreview] = useState<string>('');
  const [heroVideoFile, setHeroVideoFile] = useState<File | null>(null);
  const [secondaryImageFile, setSecondaryImageFile] = useState<File | null>(null);
  const [secondaryImagePreview, setSecondaryImagePreview] = useState<string>('');
  const [newGalleryFile, setNewGalleryFile] = useState<File | null>(null);

  const heroImageInputRef = useRef<HTMLInputElement>(null);
  const heroVideoInputRef = useRef<HTMLInputElement>(null);
  const secondaryImageInputRef = useRef<HTMLInputElement>(null);
  const galleryImageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/projects-items?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (_) {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  const openEditModal = (project: ConceptExperienceItem) => {
    setEditingProject(project);
    setIsCreating(false);
    setTitle(project.title || '');
    setSubtitle(project.subtitle || '');
    setCategory(project.category || '');
    setIndustry(project.industry || '');
    setYear(project.year || '2025');
    setShortDescription(project.shortDescription || '');
    setChallenge(project.challenge || '');
    setConceptArchitecture(project.conceptArchitecture || '');
    setInteractiveExperience(project.interactiveExperience || '');
    setCreativeDirection(project.creativeDirection || '');
    setHeroImage(project.heroImage || '');
    setHeroVideo(project.heroVideo || '');
    setSecondaryImage(project.secondaryImage || '');
    setGalleryImages(project.galleryImages || []);
    setTechnicalCapabilities((project.technicalCapabilities || []).join('\n'));
    setTechStack((project.techStack || []).join('\n'));
    setHeroImageFile(null);
    setHeroImagePreview('');
    setHeroVideoFile(null);
    setSecondaryImageFile(null);
    setSecondaryImagePreview('');
    setNewGalleryFile(null);
  };

  const openCreateModal = () => {
    setEditingProject(null);
    setIsCreating(true);
    setTitle('');
    setSubtitle('');
    setCategory('Interactive & Real-Time 3D');
    setIndustry('Automotive');
    setYear('2025');
    setShortDescription('');
    setChallenge('');
    setConceptArchitecture('');
    setInteractiveExperience('');
    setCreativeDirection('');
    setHeroImage('/studio-assets/project-aura.jpg');
    setHeroVideo('');
    setSecondaryImage('');
    setGalleryImages([]);
    setTechnicalCapabilities('');
    setTechStack('Next.js 15\nThree.js\nTailwind CSS');
    setHeroImageFile(null);
    setHeroImagePreview('');
    setHeroVideoFile(null);
    setSecondaryImageFile(null);
    setSecondaryImagePreview('');
    setNewGalleryFile(null);
  };

  const handleHeroImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setHeroImageFile(file);
      setHeroImagePreview(URL.createObjectURL(file));
    }
  };

  const handleHeroVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setHeroVideoFile(file);
    }
  };

  const handleSecondaryImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSecondaryImageFile(file);
      setSecondaryImagePreview(URL.createObjectURL(file));
    }
  };

  const handleGalleryFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewGalleryFile(file);
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setToastMessage(null);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('subtitle', subtitle);
      formData.append('category', category);
      formData.append('industry', industry);
      formData.append('year', year);
      formData.append('shortDescription', shortDescription);
      formData.append('challenge', challenge);
      formData.append('conceptArchitecture', conceptArchitecture);
      formData.append('interactiveExperience', interactiveExperience);
      formData.append('creativeDirection', creativeDirection);
      formData.append('heroImage', heroImage);
      formData.append('heroVideo', heroVideo);
      formData.append('secondaryImage', secondaryImage);
      formData.append('galleryImages', JSON.stringify(galleryImages));
      formData.append('technicalCapabilities', technicalCapabilities);
      formData.append('techStack', techStack);

      if (heroImageFile) formData.append('heroImageFile', heroImageFile);
      if (heroVideoFile) formData.append('heroVideoFile', heroVideoFile);
      if (secondaryImageFile) formData.append('secondaryImageFile', secondaryImageFile);
      if (newGalleryFile) formData.append('newGalleryFile', newGalleryFile);

      let res;
      if (isCreating) {
        res = await createProjectAction(formData);
      } else if (editingProject) {
        formData.append('slug', editingProject.slug);
        res = await updateProjectAction(formData);
      }

      if (res?.success) {
        setToastMessage({ type: 'success', text: isCreating ? 'Project created successfully!' : 'Project updated successfully!' });
        if (editingProject && res.project) {
          setProjects((prev) => prev.map((p) => (p.slug === editingProject.slug ? res.project! : p)));
        } else if (isCreating && res.project) {
          setProjects((prev) => [res.project!, ...prev]);
        }
        setEditingProject(null);
        setIsCreating(false);
        fetchProjects();
      } else {
        setToastMessage({ type: 'error', text: res?.error || 'Failed to save project' });
      }
    } catch (err: any) {
      setToastMessage({ type: 'error', text: err?.message || 'Unexpected error' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this project? This cannot be undone.')) return;

    try {
      const res = await deleteProjectAction(slug);
      if (res.success) {
        setToastMessage({ type: 'success', text: 'Project deleted.' });
        setProjects((prev) => prev.filter((p) => p.slug !== slug));
        fetchProjects();
      } else {
        setToastMessage({ type: 'error', text: 'Failed to delete project.' });
      }
    } catch (_) {
      setToastMessage({ type: 'error', text: 'Error deleting project.' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-cyan-50 text-cyan-600">
              <FolderKanban size={20} />
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Manage Projects &amp; Concepts
            </h1>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Update project titles, copy, hero videos, interactive simulators, and gallery visuals. Changes reflect immediately on the live website.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchProjects}
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
            <span>Add Concept Experience</span>
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

      {/* Projects Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="h-72 rounded-xl bg-gray-100 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Media Preview Box */}
                <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden group">
                  {project.heroVideo ? (
                    <video
                      src={project.heroVideo}
                      poster={project.heroImage}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : project.heroImage ? (
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 font-mono text-xs">
                      No Media Configured
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-black/75 text-white border border-white/20">
                      {project.industry}
                    </span>
                    {project.heroVideo && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center gap-1">
                        <Video size={10} />
                        <span>VIDEO</span>
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="font-mono text-[11px] text-cyan-300 block">
                      /{project.slug}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-bold text-lg text-gray-900 tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {project.shortDescription || project.subtitle}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1">
                    {(project.technicalCapabilities || []).slice(0, 3).map((cap, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700"
                      >
                        {cap}
                      </span>
                    ))}
                    {(project.technicalCapabilities || []).length > 3 && (
                      <span className="text-[10px] font-mono px-1 text-gray-400">
                        +{(project.technicalCapabilities || []).length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  target="_blank"
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-black font-medium transition-colors"
                >
                  <Eye size={14} />
                  <span>View Live</span>
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEditModal(project)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 hover:bg-gray-100 text-gray-800 rounded-lg text-xs font-medium transition-colors shadow-2xs"
                  >
                    <Edit3 size={13} />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(project.slug)}
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

      {/* Edit / Create Project Modal */}
      {(editingProject || isCreating) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-4xl my-8 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 block">
                  {isCreating ? 'Create New Concept Experience' : `Editing Concept Project / ${editingProject?.slug}`}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-0.5">
                  {isCreating ? 'New Concept Project' : editingProject?.title}
                </h2>
              </div>
              <button
                onClick={() => {
                  setEditingProject(null);
                  setIsCreating(false);
                }}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
              {/* Row 1: Title & Industry */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-7">
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Project Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Spatial Vehicle Configurator"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium text-sm"
                    required
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Industry
                  </label>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="e.g. Automotive"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Year
                  </label>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="2025"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono text-sm"
                  />
                </div>
              </div>

              {/* Row 2: Category & Subtitle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Discipline / Category
                  </label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. Automotive & Real-Time 3D"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="e.g. Real-Time 3D Automotive Customization"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                  />
                </div>
              </div>

              {/* MEDIA SECTION 1: HERO IMAGE */}
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold uppercase text-gray-900">
                      Hero Image
                    </span>
                    <span className="text-xs text-gray-500">
                      Primary high-resolution poster or photography frame for this project.
                    </span>
                  </div>
                  {(heroImagePreview || heroImage) && (
                    <button
                      type="button"
                      onClick={() => {
                        setHeroImage('');
                        setHeroImageFile(null);
                        setHeroImagePreview('');
                      }}
                      className="text-xs text-rose-600 hover:underline font-medium"
                    >
                      Remove Image
                    </button>
                  )}
                </div>

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

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="file"
                    ref={heroImageInputRef}
                    onChange={handleHeroImageFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => heroImageInputRef.current?.click()}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium text-xs shadow-2xs"
                  >
                    <Upload size={14} />
                    <span>Upload New Hero Image</span>
                  </button>

                  <input
                    type="text"
                    value={heroImage}
                    onChange={(e) => setHeroImage(e.target.value)}
                    placeholder="Or enter image URL e.g. /studio-assets/project-aura.jpg"
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs font-mono"
                  />
                </div>
              </div>

              {/* MEDIA SECTION 2: HERO VIDEO */}
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold uppercase text-gray-900">
                      Hero Video Loop
                    </span>
                    <span className="text-xs text-gray-500">
                      MP4 or M4V video loop displayed in the hero and simulation viewports.
                    </span>
                  </div>
                  {heroVideo && (
                    <button
                      type="button"
                      onClick={() => {
                        setHeroVideo('');
                        setHeroVideoFile(null);
                      }}
                      className="text-xs text-rose-600 hover:underline font-medium"
                    >
                      Remove Video
                    </button>
                  )}
                </div>

                {heroVideo && (
                  <div className="relative aspect-[16/9] max-h-44 rounded-lg overflow-hidden border border-gray-200 bg-black">
                    <video
                      src={heroVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="file"
                    ref={heroVideoInputRef}
                    onChange={handleHeroVideoFileChange}
                    accept="video/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => heroVideoInputRef.current?.click()}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium text-xs shadow-2xs"
                  >
                    <Video size={14} />
                    <span>Upload New Video File</span>
                  </button>

                  <input
                    type="text"
                    value={heroVideo}
                    onChange={(e) => setHeroVideo(e.target.value)}
                    placeholder="Or enter video URL e.g. /hero-videos/aura-vehicle-cover.mp4"
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs font-mono"
                  />
                </div>
              </div>

              {/* MEDIA SECTION 3: SECONDARY IMAGE */}
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold uppercase text-gray-900">
                      Secondary Editorial Image
                    </span>
                    <span className="text-xs text-gray-500">
                      Visual plate displayed in the Sensory Flow &amp; Creative Direction section.
                    </span>
                  </div>
                  {(secondaryImagePreview || secondaryImage) && (
                    <button
                      type="button"
                      onClick={() => {
                        setSecondaryImage('');
                        setSecondaryImageFile(null);
                        setSecondaryImagePreview('');
                      }}
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
                    ref={secondaryImageInputRef}
                    onChange={handleSecondaryImageFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => secondaryImageInputRef.current?.click()}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium text-xs shadow-2xs"
                  >
                    <Upload size={14} />
                    <span>Upload Secondary Image</span>
                  </button>

                  <input
                    type="text"
                    value={secondaryImage}
                    onChange={(e) => setSecondaryImage(e.target.value)}
                    placeholder="Or enter image URL e.g. /studio-assets/service-product-configurators-detail.jpg"
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs font-mono"
                  />
                </div>
              </div>

              {/* MEDIA SECTION 4: GALLERY IMAGES */}
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold uppercase text-gray-900">
                      Concept Visual Records (Gallery)
                    </span>
                    <span className="text-xs text-gray-500">
                      Additional high-resolution plates displayed in the project visual gallery.
                    </span>
                  </div>
                </div>

                {galleryImages.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {galleryImages.map((img, i) => (
                      <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-black group">
                        <Image src={img} alt="" fill className="object-cover" />
                        <button
                          type="button"
                          onClick={() => handleRemoveGalleryImage(i)}
                          className="absolute top-1 right-1 p-1 rounded-full bg-black/75 text-white hover:bg-rose-600 transition-colors"
                          title="Remove from gallery"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-3">
                  <input
                    type="file"
                    ref={galleryImageInputRef}
                    onChange={handleGalleryFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => galleryImageInputRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium text-xs shadow-2xs"
                  >
                    <Upload size={14} />
                    <span>Upload Gallery Image</span>
                  </button>
                </div>
              </div>

              {/* Narrative Content */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  placeholder="Editorial summary displayed on overview cards..."
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    The Real-World Challenge
                  </label>
                  <textarea
                    rows={3}
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    placeholder="Problem statement..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Concept Architecture &amp; Execution
                  </label>
                  <textarea
                    rows={3}
                    value={conceptArchitecture}
                    onChange={(e) => setConceptArchitecture(e.target.value)}
                    placeholder="Technical approach..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Interactive Behavior &amp; Sensory Flow
                  </label>
                  <textarea
                    rows={3}
                    value={interactiveExperience}
                    onChange={(e) => setInteractiveExperience(e.target.value)}
                    placeholder="Interaction dynamics..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Creative Direction &amp; Philosophy
                  </label>
                  <textarea
                    rows={3}
                    value={creativeDirection}
                    onChange={(e) => setCreativeDirection(e.target.value)}
                    placeholder="Visual direction..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                  />
                </div>
              </div>

              {/* Technical Capabilities & Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Technical Capabilities (1 per line)
                  </label>
                  <textarea
                    rows={4}
                    value={technicalCapabilities}
                    onChange={(e) => setTechnicalCapabilities(e.target.value)}
                    placeholder="Real-Time PBR Shaders&#10;Three.js &amp; WebGL&#10;Low-Latency Streaming"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Technology Stack (1 per line)
                  </label>
                  <textarea
                    rows={4}
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                    placeholder="Next.js 15&#10;Three.js&#10;Tailwind CSS"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono text-xs"
                  />
                </div>
              </div>

              {/* Submit Controls */}
              <div className="pt-4 border-t border-gray-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setEditingProject(null);
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
                  {submitting ? 'Saving...' : isCreating ? 'Create Concept' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
