import React from 'react';
import AnalyticsStats from '@/components/admin/analytics/analytics-stats';
import VisitorsChart from '@/components/admin/analytics/visitors-chart';
import PageViewsChart from '@/components/admin/analytics/page-views-chart';
import WebsiteInsights from '@/components/admin/analytics/website-insights';
import PagesTable from '@/components/admin/analytics/pages-table';
import DeviceStats from '@/components/admin/analytics/device-stats';

export default function AnalyticsPage() {
    return (
        <div className="pb-12">

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Column (Stats & Charts) */}
                <div className="lg:col-span-3 space-y-8">
                    <AnalyticsStats />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <VisitorsChart />
                        <PageViewsChart />
                    </div>

                    <PagesTable />
                </div>

                {/* Right Column (Insights & Devices) */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="h-[420px]">
                        <WebsiteInsights />
                    </div>
                    <div className="h-[480px]">
                        <DeviceStats />
                    </div>
                </div>
            </div>
        </div>
    );
}
