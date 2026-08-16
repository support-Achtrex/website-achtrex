'use client';

import React, { useState, useTransition } from 'react';
import { 
  PortalProject, ProjectUpdate, ScopeCartItem, ArchitectureNode,
  DEFAULT_ARCHITECTURE_NODES, DEFAULT_CART_ITEMS
} from '@/lib/portal-types';
import { 
  adminPostProjectUpdateAction, 
  adminUpdateArchitectureAction,
  adminUpdateProjectDetailsAction,
  adminUpdateCartAction
} from '@/app/actions/portal-actions';
import { 
  Briefcase, User, Mail, Building, Phone, 
  Clock, Plus, CheckCircle2, Send, Cpu, 
  ShoppingCart, ArrowLeft, GitCommit, Sliders, 
  ExternalLink, Trash2, Edit, Save, RefreshCw, 
  Layers, Database, Sparkles, Server, Globe, Cloud, Activity, 
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import ArchitectureDiagram from '@/components/portal/ArchitectureDiagram';

interface AdminProjectDetailClientProps {
  project: PortalProject;
  updates: ProjectUpdate[];
}

const STAGES = [
  'Discovery & Scoping',
  'Architecture Design',
  'Core Engineering',
  'QA & Testing',
  'Production Live',
  'Maintenance & Support'
];

const CATEGORIES = ['frontend', 'gateway', 'service', 'ai', 'database', 'cloud', 'pipeline'] as const;

const ARCHITECTURE_TEMPLATES: Record<string, { name: string; nodes: ArchitectureNode[] }> = {
  automotive_ai: {
    name: 'Automotive AI & Dealership Intelligence',
    nodes: [
      {
        id: 'client-apps',
        label: 'Dealership & Buyer Web / Mobile Apps',
        category: 'frontend',
        status: 'active',
        description: 'Next.js 15 App Router & React Native Client with sub-100ms render speeds',
        specs: 'Next.js 15, Tailwind CSS, TanStack Query, Framer Motion',
        connections: ['api-gateway']
      },
      {
        id: 'api-gateway',
        label: 'Achtrex Edge API Gateway & Auth',
        category: 'gateway',
        status: 'active',
        description: 'Cloudflare / Edge Layer reverse proxy with rate limiting, SSL, and token validation',
        specs: 'Cloudflare Workers, JWT Validation, DDoS Protection',
        connections: ['automotive-engine', 'ai-agent-engine', 'auth-service']
      },
      {
        id: 'automotive-engine',
        label: 'Automotive Data & VIN Engine',
        category: 'service',
        status: 'in_progress',
        description: 'Real-time vehicle dataset parsing, OEM specs lookup, and market pricing algorithms',
        specs: 'Node.js / Go microservices, 50,000+ RPS capacity',
        connections: ['postgres-db', 'redis-cache']
      },
      {
        id: 'ai-agent-engine',
        label: 'AI Dealership Sales & Quoting Agent',
        category: 'ai',
        status: 'in_progress',
        description: 'Fine-tuned LLM agents for automated quote generation and customer sales workflows',
        specs: 'RAG Pipeline, pgvector Embeddings, OpenAI / Anthropic SDK',
        connections: ['postgres-db']
      },
      {
        id: 'auth-service',
        label: 'Identity & Access Control',
        category: 'service',
        status: 'active',
        description: 'Multi-tenant enterprise access control with role-based permissions and MFA',
        specs: 'OAuth2, PBKDF2 Session Tokens, Role Hierarchy',
        connections: ['postgres-db']
      },
      {
        id: 'postgres-db',
        label: 'Primary PostgreSQL Database Cluster',
        category: 'database',
        status: 'active',
        description: 'High-availability relational database cluster with point-in-time recovery and SSL',
        specs: 'PostgreSQL 16, Connection Pooling, Automated Daily Backups',
        connections: []
      },
      {
        id: 'redis-cache',
        label: 'Redis Ultra-Fast Memory Cache',
        category: 'database',
        status: 'active',
        description: 'In-memory caching for real-time inventory queries and live session states',
        specs: 'Redis 7.2 Cluster, Sub-5ms Key-Value Retrieval',
        connections: []
      },
      {
        id: 'cloud-infra',
        label: 'Kubernetes Multi-Region Infrastructure',
        category: 'cloud',
        status: 'active',
        description: 'Multi-region auto-scaling containers with 99.99% uptime guarantee and DDoS shield',
        specs: 'Kubernetes (EKS/GKE), Docker, Global Edge CDN, 99.99% SLA',
        connections: ['api-gateway', 'postgres-db']
      }
    ]
  },
  fleet_telematics: {
    name: 'High-Velocity Fleet Telematics & IoT Ingestion',
    nodes: [
      {
        id: 'fleet-dashboard',
        label: 'Fleet Management Real-Time Portal',
        category: 'frontend',
        status: 'active',
        description: 'Live GPS vehicle tracking, geofencing map views, and fuel diagnostic dashboard',
        specs: 'Next.js 15, Mapbox GL, WebSocket Live Telemetry Feeds',
        connections: ['telematics-gateway']
      },
      {
        id: 'telematics-gateway',
        label: 'MQTT & WebSocket IoT Gateway',
        category: 'gateway',
        status: 'active',
        description: 'High-frequency binary packet ingest for vehicle CAN-bus diagnostics and GPS sensors',
        specs: 'EMQX / MQTT Broker, WebSocket Cluster, 100k Concurrent Connections',
        connections: ['telematics-processor', 'timeseries-db']
      },
      {
        id: 'telematics-processor',
        label: 'Stream Processing & Geofence Engine',
        category: 'service',
        status: 'in_progress',
        description: 'Real-time alert dispatching for speed limits, maintenance codes, and geofence breaches',
        specs: 'Apache Kafka / Redpanda, Golang Worker Pool',
        connections: ['timeseries-db', 'postgres-db', 'redis-cache']
      },
      {
        id: 'timeseries-db',
        label: 'TimescaleDB / InfluxDB Metric Store',
        category: 'database',
        status: 'active',
        description: 'Optimized time-series database storing vehicle coordinate histories and telemetry',
        specs: 'TimescaleDB on PostgreSQL 16, Automated Chunk Compression',
        connections: []
      },
      {
        id: 'postgres-db',
        label: 'Fleet Master Database',
        category: 'database',
        status: 'active',
        description: 'Relational store for vehicles, driver assignments, maintenance schedules, and billing',
        specs: 'PostgreSQL 16 with Row-Level Security',
        connections: []
      },
      {
        id: 'redis-cache',
        label: 'Redis Live Vehicle Coordinate Cache',
        category: 'database',
        status: 'active',
        description: 'Sub-millisecond ephemeral location cache for real-time fleet map rendering',
        specs: 'Redis Cluster, Geospatial Indexing (GEOADD/GEORADIUS)',
        connections: []
      }
    ]
  }
};

export default function AdminProjectDetailClient({
  project,
  updates
}: AdminProjectDetailClientProps) {
  const [activeTab, setActiveTab] = useState<'updates' | 'architecture' | 'cart' | 'details'>('updates');
  const [isPending, startTransition] = useTransition();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Project Details State
  const [projectTitle, setProjectTitle] = useState(project.title);
  const [projectServiceType, setProjectServiceType] = useState(project.service_type);
  const [projectBudget, setProjectBudget] = useState(project.budget || 'Custom Scope');
  const [projectDescription, setProjectDescription] = useState(project.description);
  const [projectStatus, setProjectStatus] = useState(project.status);
  const [projectProgress, setProjectProgress] = useState<number>(project.progress_percent || 20);

  // Post Update Form State
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateStage, setUpdateStage] = useState(STAGES[1]);
  const [updateAuthorName, setUpdateAuthorName] = useState('Achtrex Engineering Team');
  const [updateContent, setUpdateContent] = useState('');

  // Architecture Nodes State
  const [nodes, setNodes] = useState<ArchitectureNode[]>(project.architecture_data?.nodes || DEFAULT_ARCHITECTURE_NODES);
  const [editingNodeIndex, setEditingNodeIndex] = useState<number | null>(null);
  const [showAddNodeModal, setShowAddNodeModal] = useState(false);

  // New / Edit Node Form State
  const [nodeId, setNodeId] = useState('');
  const [nodeLabel, setNodeLabel] = useState('');
  const [nodeCategory, setNodeCategory] = useState<ArchitectureNode['category']>('service');
  const [nodeStatus, setNodeStatus] = useState<ArchitectureNode['status']>('active');
  const [nodeDescription, setNodeDescription] = useState('');
  const [nodeSpecs, setNodeSpecs] = useState('');
  const [nodeConnections, setNodeConnections] = useState<string[]>([]);

  // Scope Cart State
  const [cartItems, setCartItems] = useState<ScopeCartItem[]>(project.cart_items || DEFAULT_CART_ITEMS);
  const [showAddCartItem, setShowAddCartItem] = useState(false);
  const [newCartName, setNewCartName] = useState('');
  const [newCartCategory, setNewCartCategory] = useState('Core Feature');
  const [newCartDesc, setNewCartDesc] = useState('');
  const [newCartCost, setNewCartCost] = useState('Included');
  const [newCartTimeline, setNewCartTimeline] = useState('Standard');
  const [newCartStatus, setNewCartStatus] = useState<ScopeCartItem['status']>('included');

  // Handlers
  const handleSaveProjectDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);

    const formData = new FormData();
    formData.append('projectId', project.id.toString());
    formData.append('title', projectTitle);
    formData.append('service_type', projectServiceType);
    formData.append('budget', projectBudget);
    formData.append('description', projectDescription);
    formData.append('status', projectStatus);
    formData.append('progress_percent', projectProgress.toString());

    startTransition(async () => {
      const res = await adminUpdateProjectDetailsAction(formData);
      if (res?.success) {
        setSuccessMessage('Project details updated successfully!');
        setTimeout(() => setSuccessMessage(null), 4000);
      } else {
        alert(res?.error || 'Failed to update project details.');
      }
    });
  };

  const handlePostUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);

    const formData = new FormData();
    formData.append('projectId', project.id.toString());
    formData.append('title', updateTitle);
    formData.append('stage', updateStage);
    formData.append('author_name', updateAuthorName);
    formData.append('content', updateContent);
    formData.append('status', projectStatus);
    formData.append('progress_percent', projectProgress.toString());

    startTransition(async () => {
      const res = await adminPostProjectUpdateAction(formData);
      if (res?.success) {
        setSuccessMessage('Update broadcasted to client dashboard successfully!');
        setUpdateTitle('');
        setUpdateContent('');
        setTimeout(() => setSuccessMessage(null), 4000);
      } else {
        alert(res?.error || 'Failed to post update.');
      }
    });
  };

  const handleSaveArchitecture = () => {
    startTransition(async () => {
      const res = await adminUpdateArchitectureAction(project.id, nodes);
      if (res?.success) {
        setSuccessMessage('System Architecture updated and saved live to client dashboard!');
        setTimeout(() => setSuccessMessage(null), 4000);
      } else {
        alert(res?.error || 'Failed to update architecture.');
      }
    });
  };

  const handleSaveCart = () => {
    startTransition(async () => {
      const res = await adminUpdateCartAction(project.id, cartItems);
      if (res?.success) {
        setSuccessMessage('Scope Deliverables Cart updated and saved live!');
        setTimeout(() => setSuccessMessage(null), 4000);
      } else {
        alert(res?.error || 'Failed to update scope cart.');
      }
    });
  };

  const openAddNodeModal = () => {
    setEditingNodeIndex(null);
    setNodeId(`module-${Date.now().toString().slice(-4)}`);
    setNodeLabel('');
    setNodeCategory('service');
    setNodeStatus('active');
    setNodeDescription('');
    setNodeSpecs('');
    setNodeConnections([]);
    setShowAddNodeModal(true);
  };

  const openEditNodeModal = (index: number) => {
    const node = nodes[index];
    setEditingNodeIndex(index);
    setNodeId(node.id);
    setNodeLabel(node.label);
    setNodeCategory(node.category);
    setNodeStatus(node.status);
    setNodeDescription(node.description);
    setNodeSpecs(node.specs || '');
    setNodeConnections(node.connections || []);
    setShowAddNodeModal(true);
  };

  const handleSaveNodeForm = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedNode: ArchitectureNode = {
      id: nodeId.trim(),
      label: nodeLabel.trim(),
      category: nodeCategory,
      status: nodeStatus,
      description: nodeDescription.trim(),
      specs: nodeSpecs.trim(),
      connections: nodeConnections
    };

    let updatedList: ArchitectureNode[];
    if (editingNodeIndex !== null) {
      updatedList = [...nodes];
      updatedList[editingNodeIndex] = updatedNode;
    } else {
      updatedList = [...nodes, updatedNode];
    }

    setNodes(updatedList);
    setShowAddNodeModal(false);
  };

  const handleDeleteNode = (index: number) => {
    if (!confirm('Are you sure you want to delete this architecture node?')) return;
    const updatedList = nodes.filter((_, i) => i !== index);
    setNodes(updatedList);
  };

  const handleApplyTemplate = (templateKey: string) => {
    const tpl = ARCHITECTURE_TEMPLATES[templateKey];
    if (!tpl) return;
    if (confirm(`Apply "${tpl.name}" architecture template? This will replace the current node list.`)) {
      setNodes(tpl.nodes);
    }
  };

  const handleAddCartItem = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: ScopeCartItem = {
      id: `cart-${Date.now()}`,
      name: newCartName.trim(),
      category: newCartCategory.trim(),
      description: newCartDesc.trim(),
      status: newCartStatus,
      estimatedCost: newCartCost.trim(),
      estimatedTimeline: newCartTimeline.trim()
    };
    setCartItems([...cartItems, newItem]);
    setShowAddCartItem(false);
    setNewCartName('');
    setNewCartDesc('');
  };

  const handleDeleteCartItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      
      {/* Top Breadcrumb & Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/projects"
            className="p-2 rounded-xl bg-white border border-gray-200 text-slate-600 hover:text-gray-900 transition-colors shadow-xs"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-gray-900">{projectTitle}</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200">
                {projectServiceType}
              </span>
            </div>
            <p className="text-slate-500 text-xs mt-0.5">Project ID #{project.id} • Created {new Date(project.created_at).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/portal/dashboard"
            target="_blank"
            className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 hover:bg-blue-700 shadow-sm transition-colors"
          >
            <ExternalLink size={14} /> View Member Portal Live
          </Link>
        </div>
      </div>

      {/* Global Success Alert */}
      {successMessage && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-xs animate-fadeIn">
          <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Client Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
          <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1.5">
            <User size={14} className="text-blue-600" /> Member / Client Details
          </div>
          <div className="text-base font-bold text-gray-900">{project.member_name || 'Client'}</div>
          <div className="text-xs text-slate-600 mt-0.5 flex items-center gap-1"><Mail size={12} /> {project.member_email}</div>
          {project.member_phone && (
            <div className="text-xs text-slate-600 mt-0.5 flex items-center gap-1"><Phone size={12} /> {project.member_phone}</div>
          )}
          {project.member_company && (
            <div className="text-xs text-slate-600 mt-0.5 flex items-center gap-1"><Building size={12} /> {project.member_company}</div>
          )}
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
          <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1.5">
            <Briefcase size={14} className="text-emerald-600" /> Budget &amp; Status
          </div>
          <div className="text-base font-bold text-emerald-600">{projectBudget}</div>
          <div className="text-xs text-slate-600 mt-1">Status: <strong className="uppercase text-gray-900">{projectStatus.replace('_', ' ')}</strong></div>
          <div className="text-xs text-slate-600 mt-1">Progress: <strong className="text-blue-600 font-bold">{projectProgress}%</strong></div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
          <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1.5">
            <Cpu size={14} className="text-purple-600" /> System Architecture
          </div>
          <div className="text-base font-bold text-gray-900">{nodes.length} Architecture Nodes</div>
          <div className="text-xs text-slate-600 mt-1">{cartItems.length} Deliverable Modules In Cart</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">
        <button
          onClick={() => setActiveTab('updates')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'updates'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <GitCommit size={14} /> Post &amp; Manage Updates ({updates.length})
        </button>

        <button
          onClick={() => setActiveTab('architecture')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'architecture'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <Cpu size={14} /> Architecture Topology Editor ({nodes.length} Nodes)
        </button>

        <button
          onClick={() => setActiveTab('cart')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'cart'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <ShoppingCart size={14} /> Scope Deliverables Cart ({cartItems.length})
        </button>

        <button
          onClick={() => setActiveTab('details')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'details'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <Sliders size={14} /> Project Details &amp; Settings
        </button>
      </div>

      {/* Tab 1: Updates Management */}
      {activeTab === 'updates' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Post Update Form (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Send size={18} className="text-blue-600" /> Post Update to Client Feed
            </h3>
            <p className="text-xs text-slate-500">
              The client will see this update immediately in their Member Portal sprint tracker.
            </p>

            <form onSubmit={handlePostUpdate} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Update Title *</label>
                <input
                  type="text"
                  required
                  value={updateTitle}
                  onChange={(e) => setUpdateTitle(e.target.value)}
                  placeholder="e.g. Backend API Gateway & PostgreSQL Deployed"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Sprint Stage</label>
                  <select
                    value={updateStage}
                    onChange={(e) => setUpdateStage(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-2.5 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                  >
                    {STAGES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Author Name</label>
                  <input
                    type="text"
                    value={updateAuthorName}
                    onChange={(e) => setUpdateAuthorName(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  Overall Project Progress: <span className="text-blue-600 font-black">{projectProgress}%</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={projectProgress}
                  onChange={(e) => setProjectProgress(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Update Details &amp; Changelog *</label>
                <textarea
                  rows={4}
                  required
                  value={updateContent}
                  onChange={(e) => setUpdateContent(e.target.value)}
                  placeholder="Explain completed milestones, next sprint deliverables, or test URLs..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600 leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
              >
                {isPending ? 'Broadcasting...' : 'Publish Update to Client'}
              </button>
            </form>
          </div>

          {/* Existing Updates Feed (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
            <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock size={18} className="text-blue-600" /> Published Updates History ({updates.length})
            </h3>

            {updates.length === 0 ? (
              <p className="text-xs text-slate-400">No updates published yet.</p>
            ) : (
              <div className="space-y-4">
                {updates.map((u) => (
                  <div key={u.id} className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {u.stage}
                      </span>
                      <span className="text-[11px] text-slate-400">{new Date(u.created_at).toLocaleString()}</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900">{u.title}</h4>
                    <p className="text-xs text-slate-600 whitespace-pre-line leading-relaxed">{u.content}</p>
                    <div className="text-[11px] text-slate-400 pt-1">Author: {u.author_name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Architecture Topology Editor */}
      {activeTab === 'architecture' && (
        <div className="space-y-6">
          {/* Action Bar */}
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-black text-gray-900 flex items-center gap-2">
                <Cpu size={18} className="text-blue-600" /> Live Architecture Node Editor
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Add, edit, re-link, or delete microservices, databases, and API nodes shown in the member portal.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleApplyTemplate('automotive_ai')}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 transition-colors"
                title="Apply Automotive AI Template"
              >
                Template: Auto AI
              </button>
              <button
                onClick={() => handleApplyTemplate('fleet_telematics')}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 transition-colors"
                title="Apply Fleet Telematics Template"
              >
                Template: Telematics
              </button>
              <button
                onClick={openAddNodeModal}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Plus size={14} /> Add New Node
              </button>
              <button
                onClick={handleSaveArchitecture}
                disabled={isPending}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Save size={14} /> {isPending ? 'Saving...' : 'Save Architecture Live'}
              </button>
            </div>
          </div>

          {/* Node List Table */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
            <div className="p-4 border-b border-gray-200 font-bold text-xs text-slate-700 uppercase tracking-wider flex items-center justify-between">
              <span>Configured Architecture Nodes ({nodes.length})</span>
              <span className="text-slate-400 font-normal text-[11px]">Click edit on any node to adjust connections and specifications</span>
            </div>

            <div className="divide-y divide-gray-100">
              {nodes.map((node, index) => (
                <div key={node.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                        {node.id}
                      </span>
                      <span className="text-sm font-bold text-gray-900">{node.label}</span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200">
                        {node.category}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        node.status === 'active' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                      }`}>
                        {node.status}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600">{node.description}</p>
                    
                    {node.specs && (
                      <div className="text-[11px] font-mono text-slate-500">Specs: {node.specs}</div>
                    )}

                    <div className="text-[11px] text-blue-600 font-semibold">
                      Connected to: {node.connections && node.connections.length > 0 ? node.connections.join(', ') : 'None (Terminal)'}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => openEditNodeModal(index)}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 transition-colors"
                      title="Edit Node"
                    >
                      <Edit size={14} />
                    </button>
                    <button
                      onClick={() => handleDeleteNode(index)}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-600 border border-slate-200 transition-colors"
                      title="Delete Node"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Preview Container */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Member Portal Architecture Preview</h4>
            <ArchitectureDiagram nodes={nodes} projectId={project.id} />
          </div>
        </div>
      )}

      {/* Tab 3: Scope Deliverables Cart */}
      {activeTab === 'cart' && (
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-black text-gray-900 flex items-center gap-2">
                <ShoppingCart size={18} className="text-blue-600" /> Scope Deliverables &amp; Add-ons
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Manage deliverables, modules, and estimated pricing in the client's Scope Cart.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowAddCartItem(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Plus size={14} /> Add Deliverable Item
              </button>
              <button
                onClick={handleSaveCart}
                disabled={isPending}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Save size={14} /> {isPending ? 'Saving...' : 'Save Cart Live'}
              </button>
            </div>
          </div>

          {/* Add Cart Item Form */}
          {showAddCartItem && (
            <form onSubmit={handleAddCartItem} className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-blue-900">Add New Deliverable Item</h4>
                <button
                  type="button"
                  onClick={() => setShowAddCartItem(false)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-900"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Item Name *</label>
                  <input
                    type="text"
                    required
                    value={newCartName}
                    onChange={(e) => setNewCartName(e.target.value)}
                    placeholder="e.g. AI Dealership Quoting Engine"
                    className="w-full bg-white border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Category</label>
                  <input
                    type="text"
                    value={newCartCategory}
                    onChange={(e) => setNewCartCategory(e.target.value)}
                    placeholder="e.g. AI & Automation"
                    className="w-full bg-white border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Status</label>
                  <select
                    value={newCartStatus}
                    onChange={(e) => setNewCartStatus(e.target.value as any)}
                    className="w-full bg-white border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                  >
                    <option value="included">Included</option>
                    <option value="in_review">In Review</option>
                    <option value="addon_requested">Add-on Requested</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Estimated Cost</label>
                  <input
                    type="text"
                    value={newCartCost}
                    onChange={(e) => setNewCartCost(e.target.value)}
                    placeholder="e.g. Included in Base or $2,500"
                    className="w-full bg-white border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Estimated Timeline</label>
                  <input
                    type="text"
                    value={newCartTimeline}
                    onChange={(e) => setNewCartTimeline(e.target.value)}
                    placeholder="e.g. Weeks 1-3 or +2 Weeks"
                    className="w-full bg-white border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Description</label>
                <textarea
                  rows={2}
                  value={newCartDesc}
                  onChange={(e) => setNewCartDesc(e.target.value)}
                  placeholder="Deliverable specifications and scope notes..."
                  className="w-full bg-white border border-gray-200 rounded-xl p-2.5 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                Add Item To Cart
              </button>
            </form>
          )}

          {/* Cart Items List */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xs divide-y divide-gray-100">
            {cartItems.map((item, idx) => (
              <div key={item.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900">{item.name}</span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      {item.category}
                    </span>
                    <select
                      value={item.status}
                      onChange={(e) => {
                        const updated = [...cartItems];
                        updated[idx].status = e.target.value as any;
                        setCartItems(updated);
                      }}
                      className="text-[10px] font-bold uppercase rounded-full px-2 py-0.5 bg-gray-100 border border-gray-200 text-gray-800"
                    >
                      <option value="included">Included</option>
                      <option value="in_review">In Review</option>
                      <option value="addon_requested">Addon Requested</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  <p className="text-xs text-slate-600">{item.description}</p>
                  <div className="text-[11px] text-slate-400 flex items-center gap-3">
                    <span>Cost: <strong className="text-emerald-600">{item.estimatedCost || 'Included'}</strong></span>
                    <span>•</span>
                    <span>Timeline: <strong className="text-slate-600">{item.estimatedTimeline || 'Standard'}</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDeleteCartItem(item.id)}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-600 border border-slate-200 transition-colors"
                    title="Remove Item"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Project Settings & Meta Details */}
      {activeTab === 'details' && (
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs max-w-3xl space-y-4">
          <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <Sliders size={18} className="text-blue-600" /> Edit Project Core Specifications
          </h3>
          <p className="text-xs text-slate-500">
            Update project title, solution category, budget allocation, client requirements, and overall status.
          </p>

          <form onSubmit={handleSaveProjectDetails} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Project Title *</label>
              <input
                type="text"
                required
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3.5 text-xs text-gray-900 focus:outline-none focus:border-blue-600 font-bold"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Solution Category</label>
                <input
                  type="text"
                  value={projectServiceType}
                  onChange={(e) => setProjectServiceType(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Budget</label>
                <input
                  type="text"
                  value={projectBudget}
                  onChange={(e) => setProjectBudget(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Lifecycle Status</label>
                <select
                  value={projectStatus}
                  onChange={(e) => setProjectStatus(e.target.value as any)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                >
                  <option value="submitted">Submitted</option>
                  <option value="reviewing">Reviewing</option>
                  <option value="architecture_design">Architecture Design</option>
                  <option value="in_development">In Development</option>
                  <option value="testing">Testing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  Progress Percentage: <span className="text-blue-600 font-bold">{projectProgress}%</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={projectProgress}
                  onChange={(e) => setProjectProgress(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Project Description &amp; Scope Requirements</label>
              <textarea
                rows={4}
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600 leading-relaxed"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
            >
              <Save size={14} /> {isPending ? 'Saving...' : 'Save Project Details'}
            </button>
          </form>
        </div>
      )}

      {/* Add / Edit Architecture Node Modal */}
      {showAddNodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 max-w-lg w-full text-slate-900 shadow-2xl relative">
            <h3 className="text-lg font-black text-gray-900 mb-1">
              {editingNodeIndex !== null ? 'Edit Architecture Node' : 'Add New Architecture Node'}
            </h3>
            <p className="text-xs text-slate-500 mb-4">Configure node specifications, runtime environment, and dataflow connections.</p>

            <form onSubmit={handleSaveNodeForm} className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Node Slug / ID *</label>
                  <input
                    type="text"
                    required
                    value={nodeId}
                    onChange={(e) => setNodeId(e.target.value)}
                    placeholder="e.g. auth-service"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 font-mono focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Category Tier</label>
                  <select
                    value={nodeCategory}
                    onChange={(e) => setNodeCategory(e.target.value as any)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Node Display Label *</label>
                <input
                  type="text"
                  required
                  value={nodeLabel}
                  onChange={(e) => setNodeLabel(e.target.value)}
                  placeholder="e.g. Achtrex Edge API Gateway"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 font-bold focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Status</label>
                  <select
                    value={nodeStatus}
                    onChange={(e) => setNodeStatus(e.target.value as any)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                  >
                    <option value="active">Active / Operational</option>
                    <option value="in_progress">In Progress</option>
                    <option value="planned">Planned</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Tech Stack / Specs</label>
                  <input
                    type="text"
                    value={nodeSpecs}
                    onChange={(e) => setNodeSpecs(e.target.value)}
                    placeholder="e.g. Node.js, Redis, Docker"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Description &amp; Role</label>
                <textarea
                  rows={2}
                  required
                  value={nodeDescription}
                  onChange={(e) => setNodeDescription(e.target.value)}
                  placeholder="Explains what this component does in the pipeline..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Downstream Connected Nodes (Feeds into)</label>
                <div className="max-h-28 overflow-y-auto bg-gray-50 border border-gray-200 rounded-xl p-2 space-y-1">
                  {nodes.filter(n => n.id !== nodeId).map((other) => {
                    const isChecked = nodeConnections.includes(other.id);
                    return (
                      <label key={other.id} className="flex items-center gap-2 text-xs text-slate-700 hover:bg-white p-1 rounded cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setNodeConnections([...nodeConnections, other.id]);
                            } else {
                              setNodeConnections(nodeConnections.filter(c => c !== other.id));
                            }
                          }}
                          className="rounded text-blue-600"
                        />
                        <span className="font-mono text-[11px] text-slate-500">{other.id}</span>
                        <span className="font-bold text-slate-800">({other.label})</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowAddNodeModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-xl text-xs uppercase tracking-wider shadow-sm"
                >
                  {editingNodeIndex !== null ? 'Update Node' : 'Add Node'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
