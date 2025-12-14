import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { createClient } from '@/utilities/supabase/server';

const StatsCards = async () => {
    const supabase = await createClient();
    
    // Fetch team count
    const { count: teamCount } = await supabase
        .from('teams')
        .select('*', { count: 'exact', head: true });

    const stats = [
        {
            title: 'Total Blogs',
            value: '24',
            change: 'Increased from last month',
            trend: 'up',
            bg: 'bg-primary',
            text: 'text-white',
            iconBg: 'bg-white/20',
            iconColor: 'text-white',
            subtext: 'text-blue-100',
            href: '/admin/blogs'
        },
        {
            title: 'Team Members',
            value: teamCount?.toString() || '0',
            change: 'Active',
            trend: 'neutral',
            bg: 'bg-white',
            text: 'text-gray-800',
            iconBg: 'bg-gray-50',
            iconColor: 'text-gray-800',
            subtext: 'text-gray-400',
            href: '/admin/team'
        },
        {
            title: 'Total Visitors',
            value: '12M',
            change: 'Increased from last month',
            trend: 'up',
            bg: 'bg-white',
            text: 'text-gray-800',
            iconBg: 'bg-gray-50',
            iconColor: 'text-gray-800',
            subtext: 'text-gray-400',
            href: '/admin/analytics'
        },
        {
            title: 'Total Click Events',
            value: '2M',
            change: 'Increased from last month',
            trend: 'up',
            bg: 'bg-white',
            text: 'text-gray-800',
            iconBg: 'bg-gray-50',
            iconColor: 'text-gray-800',
            subtext: 'text-gray-400',
            href: '/admin/analytics'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <div key={index} className={`rounded-3xl p-px ${stat.bg === 'bg-primary' ? 'bg-primary' : 'bg-linear-to-br from-gray-200 to-gray-50'} border border-gray-100 relative overflow-hidden group hover:shadow-sm transition-shadow`}>
                    <div className={`${stat.bg} rounded-[23px] p-6 h-full`}>
                        <div className="flex justify-between items-start mb-4">
                            <h3 className={`text-sm font-medium font-manrope ${stat.bg === 'bg-primary' ? 'text-blue-100' : 'text-gray-500'}`}>
                                {stat.title}
                            </h3>
                            <Link href={stat.href}>
                                <div className={`w-8 h-8 rounded-full ${stat.iconBg} flex items-center justify-center ${stat.iconColor}`}>
                                    <ArrowUpRight size={16} />
                                </div>
                            </Link>
                        </div>

                        <div className="mb-4">
                            <span className={`text-4xl font-bold ${stat.text} block truncate font-display`}>{stat.value}</span>
                        </div>

                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <div className={`px-1.5 py-0.5 rounded text-[10px] font-bold font-manrope ${stat.bg === 'bg-primary' ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700'}`}>
                                {stat.trend === 'up' ? '-' : '+'}
                            </div>
                            <span className={`text-xs font-manrope ${stat.subtext}`}>
                                {stat.change}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
