import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function BlogsSkeleton() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <Skeleton className="h-8 w-32 mb-2" />
                    <Skeleton className="h-4 w-64" />
                </div>
                <Skeleton className="h-10 w-32 rounded-xl" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm flex flex-col h-full">
                        {/* Image Skeleton */}
                        <Skeleton className="w-full h-48" />
                        
                        <div className="p-6 flex flex-col flex-grow">
                            {/* Category & Date */}
                            <div className="flex items-center justify-between mb-4">
                                <Skeleton className="h-6 w-20 rounded-full" />
                                <Skeleton className="h-4 w-24" />
                            </div>

                            {/* Title */}
                            <Skeleton className="h-7 w-full mb-2" />
                            <Skeleton className="h-7 w-2/3 mb-4" />

                            {/* Author */}
                            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <div className="space-y-1">
                                        <Skeleton className="h-3 w-24" />
                                        <Skeleton className="h-3 w-16" />
                                    </div>
                                </div>
                                <Skeleton className="h-4 w-16" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
