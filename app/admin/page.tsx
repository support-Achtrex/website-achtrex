import React from 'react';
import { Plus, Upload } from 'lucide-react';
import AdminSidebar from '@/components/admin/sidebar';
import AdminTopbar from '@/components/admin/topbar';
import StatsCards from '@/components/admin/stats-cards';
import AnalyticsWidget from '@/components/admin/analytics-widget';
import RecentBlogsList from '@/components/admin/recent-blogs-list';
import TeamOverview from '@/components/admin/team-overview';
import ProjectProgress from '@/components/admin/project-progress';
import TotalViewsWidget from '@/components/admin/total-views-widget';

export default function AdminDashboard() {
    return (
        <>

            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-1">Dashboard</h1>
                    <p className="text-gray-500 text-sm">Plan, prioritize, and accomplish your blogs with ease.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-colors shadow-lg shadow-primary/20">
                        <Plus size={18} />
                        <span>Add Blog</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-full font-medium transition-colors">
                        <Upload size={18} />
                        <span>Import Data</span>
                    </button>
                </div>
            </div>

            <StatsCards />

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Row 1: Analytics (Span 2) + Recent Blogs (Span 1) */}
                <div className="lg:col-span-2 h-80">
                    <AnalyticsWidget />
                </div>
                <div className="lg:col-span-1 h-80">
                    <RecentBlogsList />
                </div>

                {/* Row 2: Team, Progress, Time */}
                <div className="lg:col-span-1 h-64">
                    <TeamOverview />
                </div>
                <div className="lg:col-span-1 h-64">
                    <ProjectProgress />
                </div>
                <div className="lg:col-span-1 h-64">
                    <TotalViewsWidget />
                </div>
            </div>
        </>
    );
}
