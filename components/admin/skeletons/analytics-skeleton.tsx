import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function AnalyticsSkeleton() {
    return (
        <div className="pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Column (Stats & Charts) */}
                <div className="lg:col-span-3 space-y-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <Skeleton className="h-4 w-24 mb-2" />
                                <Skeleton className="h-8 w-32" />
                            </div>
                        ))}
                    </div>

                    {/* Charts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 h-80">
                                <Skeleton className="h-6 w-32 mb-6" />
                                <div className="flex items-end gap-2 h-56">
                                    {[...Array(8)].map((_, j) => (
                                        <Skeleton key={j} className="w-full rounded-t-lg" style={{ height: `${Math.random() * 60 + 20}%` }} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pages Table */}
                    <div className="bg-white rounded-3xl border border-gray-100 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <Skeleton className="h-6 w-32" />
                            <Skeleton className="h-8 w-24 rounded-lg" />
                        </div>
                        <div className="space-y-4">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                                    <Skeleton className="h-4 w-48" />
                                    <Skeleton className="h-4 w-16" />
                                    <Skeleton className="h-4 w-16" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column (Insights & Devices) */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="h-[420px] bg-white rounded-3xl border border-gray-100 p-6">
                        <Skeleton className="h-6 w-32 mb-6" />
                        <div className="space-y-4">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="flex gap-3">
                                    <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
                                    <div className="flex-1 space-y-2">
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-3 w-2/3" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="h-[480px] bg-white rounded-3xl border border-gray-100 p-6">
                        <Skeleton className="h-6 w-32 mb-6" />
                        <div className="flex justify-center mb-8">
                            <Skeleton className="h-48 w-48 rounded-full" />
                        </div>
                        <div className="space-y-4">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-3 w-3 rounded-full" />
                                        <Skeleton className="h-4 w-20" />
                                    </div>
                                    <Skeleton className="h-4 w-12" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
