'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Globe,
  Users,
  Eye,
  Activity,
  Search,
  RefreshCw,
  Trash2,
  Laptop,
  Smartphone,
  Tablet,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Filter,
  Compass,
} from 'lucide-react';
import { VisitorSession, VisitorStats } from '@/lib/visitor-logs-db';
import { useToast } from '@/components/ui/toast';

export default function VisitorsAdminPage() {
  const [stats, setStats] = useState<VisitorStats | null>(null);
  const [sessions, setSessions] = useState<VisitorSession[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [expandedSessionId, setExpandedSessionId] = useState<string | null>(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const toast = useToast();

  const fetchLogs = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.set('search', searchQuery.trim());
      if (selectedCountry !== 'all') params.set('country', selectedCountry);
      params.set('limit', '60');

      const res = await fetch(`/api/admin/visitors?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setStats(data.stats);
        setSessions(data.sessions);
        setTotal(data.total);
      } else {
        toast.error('Failed to load visitor logs');
      }
    } catch (err) {
      console.error(err);
      toast.error('Network error loading logs');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [searchQuery, selectedCountry, toast]);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  const handleClearLogs = async () => {
    try {
      const res = await fetch('/api/admin/visitors', { method: 'DELETE' });
      if (res.ok) {
        toast.success('Visitor logs cleared successfully');
        setShowClearConfirm(false);
        fetchLogs(true);
      } else {
        toast.error('Failed to clear logs');
      }
    } catch {
      toast.error('Network error clearing logs');
    }
  };

  const formatTimeAgo = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      const now = new Date();
      const diffSec = Math.floor((now.getTime() - date.getTime()) / 1000);

      if (diffSec < 60) return `${diffSec}s ago`;
      const diffMin = Math.floor(diffSec / 60);
      if (diffMin < 60) return `${diffMin}m ago`;
      const diffHours = Math.floor(diffMin / 60);
      if (diffHours < 24) return `${diffHours}h ago`;
      const diffDays = Math.floor(diffHours / 24);
      return `${diffDays}d ago`;
    } catch {
      return dateStr;
    }
  };

  const formatExactTime = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    } catch {
      return dateStr;
    }
  };

  const formatExactDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  const getDeviceIcon = (deviceType: string) => {
    if (deviceType === 'mobile') return <Smartphone size={15} className="text-blue-500" />;
    if (deviceType === 'tablet') return <Tablet size={15} className="text-purple-500" />;
    return <Laptop size={15} className="text-slate-600" />;
  };

  const countriesList = stats?.topCountries || [];

  return (
    <div className="space-y-8 pb-16">
      {/* =========================================================================
          PAGE HEADER
      ========================================================================== */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Visitor Logs &amp; Traffic</h1>
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Tracking
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Real-time insight into who visits the website, their geographic location, and all pages they explore.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => fetchLogs(true)}
            disabled={refreshing}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-medium text-sm transition-all shadow-xs disabled:opacity-50 cursor-pointer"
          >
            <RefreshCw size={15} className={refreshing ? 'animate-spin' : ''} />
            <span>{refreshing ? 'Refreshing...' : 'Refresh'}</span>
          </button>

          <button
            onClick={() => setShowClearConfirm(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-red-200 hover:bg-red-50 text-red-600 rounded-xl font-medium text-sm transition-all shadow-xs cursor-pointer"
          >
            <Trash2 size={15} />
            <span>Clear Logs</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          KPI SUMMARY CARDS
      ========================================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Total Visits */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Total Sessions
            </span>
            <div className="text-3xl font-bold text-gray-900">
              {stats?.totalVisits ?? 0}
            </div>
            <span className="text-xs text-slate-500 mt-1 block">Recorded visits</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Activity size={24} />
          </div>
        </div>

        {/* Card 2: Unique Visitors */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Unique Visitors
            </span>
            <div className="text-3xl font-bold text-gray-900">
              {stats?.uniqueVisitors ?? 0}
            </div>
            <span className="text-xs text-slate-500 mt-1 block">Distinct individuals</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Users size={24} />
          </div>
        </div>

        {/* Card 3: Total Pageviews */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Total Pageviews
            </span>
            <div className="text-3xl font-bold text-gray-900">
              {stats?.totalPageViews ?? 0}
            </div>
            <span className="text-xs text-slate-500 mt-1 block">Pages explored</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Eye size={24} />
          </div>
        </div>

        {/* Card 4: Today's Visits */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Today&rsquo;s Activity
            </span>
            <div className="text-3xl font-bold text-gray-900">
              {stats?.todayVisits ?? 0}
            </div>
            <span className="text-xs text-slate-500 mt-1 block">Visits today</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Compass size={24} />
          </div>
        </div>
      </div>

      {/* =========================================================================
          ANALYTICS BREAKDOWN GRIDS (TOP PAGES & TOP COUNTRIES)
      ========================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Top Visited Pages */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div>
              <h2 className="text-base font-bold text-gray-900">Top Visited Pages</h2>
              <p className="text-xs text-slate-500">Most engaged content and project experiences</p>
            </div>
            <span className="text-xs font-medium text-slate-400">Total views</span>
          </div>

          <div className="space-y-3">
            {stats?.topPages && stats.topPages.length > 0 ? (
              stats.topPages.map((page, idx) => {
                const maxViews = stats.topPages[0]?.count || 1;
                const percentage = Math.round((page.count / maxViews) * 100);

                return (
                  <div key={page.path} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 max-w-[80%]">
                        <span className="font-mono text-slate-400 text-[11px] w-4">{idx + 1}.</span>
                        <a
                          href={page.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-slate-800 hover:text-blue-600 truncate transition-colors flex items-center gap-1 group"
                        >
                          <span className="truncate">{page.path}</span>
                          <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 shrink-0 text-slate-400" />
                        </a>
                      </div>
                      <span className="font-semibold text-slate-900 tabular-nums">
                        {page.count} {page.count === 1 ? 'view' : 'views'}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-8 text-center text-slate-400 text-xs">
                No pageview data recorded yet.
              </div>
            )}
          </div>
        </div>

        {/* Top Locations & Geographic Origins */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div>
              <h2 className="text-base font-bold text-gray-900">Geographic Origins</h2>
              <p className="text-xs text-slate-500">Visitor locations by country</p>
            </div>
            <Globe size={18} className="text-slate-400" />
          </div>

          <div className="space-y-3">
            {stats?.topCountries && stats.topCountries.length > 0 ? (
              stats.topCountries.map((c) => (
                <div key={c.country} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{c.flag || '🌐'}</span>
                    <span className="font-medium text-slate-800">{c.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900 tabular-nums">{c.count}</span>
                    <span className="text-slate-400 text-[11px] w-9 text-right tabular-nums">
                      ({c.percentage}%)
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-slate-400 text-xs">
                No location data recorded yet.
              </div>
            )}
          </div>

          {/* Device & Browser Quick Pills */}
          <div className="pt-4 border-t border-gray-100 space-y-2">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Device Distribution
            </span>
            <div className="flex flex-wrap gap-2">
              {stats?.deviceBreakdown.map((d) => (
                <span
                  key={d.name}
                  className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium flex items-center gap-1.5"
                >
                  {getDeviceIcon(d.name.toLowerCase())}
                  <span>{d.name}:</span>
                  <strong className="text-slate-900">{d.percentage}%</strong>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          LIVE VISITOR SESSIONS & SEQUENTIAL PAGE JOURNEYS
      ========================================================================== */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
        {/* Table Filter Toolbar */}
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Live Visitor Sessions</h2>
            <p className="text-slate-500 text-xs mt-0.5">
              Showing {sessions.length} of {total} visitor journeys in real-time
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search IP, City, Page, Browser..."
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-xs w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Country Filter Dropdown */}
            {countriesList.length > 0 && (
              <div className="relative flex items-center">
                <Filter size={14} className="absolute left-3 text-slate-400 pointer-events-none" />
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="pl-8 pr-8 py-2 bg-white border border-gray-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="all">All Countries</option>
                  {countriesList.map((c) => (
                    <option key={c.country} value={c.country}>
                      {c.flag} {c.country} ({c.count})
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-2.5 text-slate-400 pointer-events-none" />
              </div>
            )}
          </div>
        </div>

        {/* Sessions Feed */}
        {loading ? (
          <div className="p-16 text-center text-slate-400 text-sm">
            <RefreshCw size={24} className="animate-spin mx-auto mb-3 text-blue-500" />
            Loading visitor journeys...
          </div>
        ) : sessions.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {sessions.map((session) => {
              const isExpanded = expandedSessionId === session.id;

              return (
                <div
                  key={session.id}
                  className={`p-6 transition-colors duration-150 ${
                    isExpanded ? 'bg-blue-50/20' : 'hover:bg-slate-50/60'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Visitor Location & Identity */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xl shrink-0 shadow-2xs">
                        {session.flag || '🌐'}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-gray-900">
                            {session.city && session.city !== 'Unknown City' ? `${session.city}, ` : ''}
                            {session.country}
                          </span>
                          <span className="font-mono text-[11px] text-slate-500 px-2 py-0.5 rounded-md bg-slate-100">
                            {session.ip}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-sans">
                          <span className="flex items-center gap-1">
                            {getDeviceIcon(session.deviceType)}
                            <span className="capitalize">{session.deviceType}</span>
                          </span>
                          <span>&bull;</span>
                          <span>{session.browser}</span>
                          <span>&bull;</span>
                          <span>{session.os}</span>
                          {session.referrer && session.referrer !== 'Direct / Bookmark' && (
                            <>
                              <span>&bull;</span>
                              <span className="text-blue-600 truncate max-w-[200px]" title={session.referrer}>
                                From: {session.referrer}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Session Metrics & Journey Toggle */}
                    <div className="flex items-center justify-between lg:justify-end gap-4 shrink-0">
                      <div className="text-left lg:text-right space-y-0.5">
                        <div className="flex items-center lg:justify-end gap-1.5 text-xs text-slate-600 font-medium">
                          <Clock size={13} className="text-slate-400" />
                          <span>{formatTimeAgo(session.lastActiveAt)}</span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono block">
                          {formatExactDate(session.startedAt)} &bull; {formatExactTime(session.startedAt)}
                        </span>
                      </div>

                      {/* Journey Count Badge & Expand Toggle */}
                      <button
                        onClick={() => setExpandedSessionId(isExpanded ? null : session.id)}
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          isExpanded
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        <span>
                          {session.pagesVisited.length}{' '}
                          {session.pagesVisited.length === 1 ? 'Page' : 'Pages'}
                        </span>
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                    </div>
                  </div>

                  {/* VISITOR JOURNEY TRAIL (SEQUENTIAL STEP-BY-STEP PAGES VISITED) */}
                  <div className="mt-4 pt-4 border-t border-gray-100/80">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
                        Page Journey:
                      </span>
                    </div>

                    {/* Horizontal Breadcrumb Journey */}
                    <div className="flex flex-wrap items-center gap-2">
                      {session.pagesVisited.map((page, pIdx) => {
                        const isLast = pIdx === session.pagesVisited.length - 1;

                        return (
                          <div key={pIdx} className="flex items-center gap-2">
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                                isLast
                                  ? 'bg-blue-50 text-blue-800 font-semibold border border-blue-200/80'
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              <span className="text-[10px] text-slate-400 font-normal">
                                0{pIdx + 1}
                              </span>
                              <span className="font-medium">{page.path}</span>
                              <span className="text-[10px] text-slate-400 font-normal ml-1">
                                {formatExactTime(page.timestamp)}
                              </span>
                            </span>

                            {!isLast && (
                              <ArrowRight size={13} className="text-slate-300 shrink-0" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Detailed Expanded Timeline if clicked */}
                    {isExpanded && (
                      <div className="mt-4 p-4 bg-white rounded-xl border border-blue-100 space-y-3">
                        <span className="text-xs font-semibold text-slate-700 block">
                          Detailed Session Timeline &bull; Visitor ID: {session.visitorId}
                        </span>
                        <div className="relative pl-6 space-y-3 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-200">
                          {session.pagesVisited.map((page, idx) => (
                            <div key={idx} className="relative text-xs">
                              <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white" />
                              <div className="flex items-baseline justify-between gap-4">
                                <a
                                  href={page.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-mono text-blue-700 font-semibold hover:underline"
                                >
                                  {page.path}
                                </a>
                                <span className="font-mono text-slate-400 text-[11px]">
                                  {formatExactTime(page.timestamp)}
                                </span>
                              </div>
                              {page.title && (
                                <p className="text-slate-500 text-[11px] mt-0.5">{page.title}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-16 text-center text-slate-500">
            <Compass size={44} className="mx-auto mb-3 text-slate-300" />
            <h3 className="text-base font-semibold text-slate-800 mb-1">No visitor logs found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              As soon as users browse your website, their geographic location, device, and page navigation will appear here in real time.
            </p>
          </div>
        )}
      </div>

      {/* =========================================================================
          CLEAR LOGS CONFIRMATION MODAL
      ========================================================================== */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
              <Trash2 size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Clear All Visitor Logs?</h3>
              <p className="text-slate-500 text-sm mt-1">
                This will permanently delete all stored visitor sessions, location data, and page history. This action cannot be undone.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium text-sm transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleClearLogs}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium text-sm transition-colors cursor-pointer"
              >
                Yes, Clear All Logs
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
