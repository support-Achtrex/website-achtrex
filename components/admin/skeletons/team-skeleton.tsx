import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function TeamSkeleton() {
  return (
    <div className="p-8 bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-transparent rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
            
            <Skeleton className="w-24 h-24 rounded-full mb-4" />
            
            <Skeleton className="h-5 w-48 mb-2" />
            <Skeleton className="h-4 w-32 mb-4" />
            
            <Skeleton className="h-4 w-40 mb-6" />
            
            <div className="w-full pt-4 border-t border-gray-50 flex justify-center gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
