import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardSkeleton() {
    return (
        <>
            {/* Dashboard Header Skeleton */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                    <Skeleton className="h-9 w-48 mb-2" />
                    <Skeleton className="h-4 w-64" />
                </div>
                <div className="flex items-center gap-3">
                    <Skeleton className="h-11 w-32 rounded-full" />
                    <Skeleton className="h-11 w-36 rounded-full" />
                </div>
            </div>

            {/* Stats Cards Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <Skeleton className="h-10 w-10 rounded-xl" />
                            <Skeleton className="h-6 w-12 rounded-full" />
                        </div>
                        <Skeleton className="h-8 w-24 mb-1" />
                        <Skeleton className="h-4 w-32" />
                    </div>
                ))}
            </div>

            {/* Main Grid Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Row 1: Analytics (Span 2) + Recent Blogs (Span 1) */}
                <div className="lg:col-span-2 h-80 bg-white rounded-3xl border border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-8 w-24 rounded-lg" />
                    </div>
                    <div className="flex items-end gap-2 h-52">
                        {[...Array(12)].map((_, i) => (
                            <Skeleton key={i} className="w-full rounded-t-lg" style={{ height: `${Math.random() * 60 + 20}%` }} />
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-1 h-80 bg-white rounded-3xl border border-gray-100 p-6">
                    <Skeleton className="h-6 w-32 mb-6" />
                    <div className="space-y-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex gap-4">
                                <Skeleton className="h-16 w-16 rounded-xl flex-shrink-0" />
                                <div className="flex-1 space-y-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-3 w-2/3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Team, Progress, Time */}
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="lg:col-span-1 h-64 bg-white rounded-3xl border border-gray-100 p-6">
                        <Skeleton className="h-6 w-32 mb-4" />
                        <div className="space-y-3">
                            <Skeleton className="h-12 w-full rounded-xl" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
