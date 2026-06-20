import React from 'react';
import Link from 'next/link';
import { FileText, Newspaper, Target } from 'lucide-react';

const resources = [
    { label: 'Blog', description: 'Deep dives, latest news, and technical insights from our engineering team.', href: '/blog', icon: FileText },
    { label: 'Press Release', description: 'Official company announcements and media coverage.', href: '/press-release', icon: Newspaper },
    { label: 'Client & Industry Use Cases', description: 'Real-world data applications and success stories.', href: '/use-cases', icon: Target }
];

export default function ResourcesPage() {
    return (
        <div className="w-full min-h-screen bg-[#f8fafc] pt-32 pb-24 px-6">
            <div className="max-w-[1000px] mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#11243b] tracking-tight mb-4">
                        Resources & Insights
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                        Explore our latest publications, updates, and deep-dives into the world of automotive data and cognitive intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {resources.map((res, idx) => {
                        const Icon = res.icon;
                        return (
                            <Link key={idx} href={res.href} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#00a9ce]/30 transition-all duration-300">
                                <div className="w-14 h-14 bg-slate-50 group-hover:bg-[#00a9ce]/10 rounded-xl flex items-center justify-center mb-6 transition-colors">
                                    <Icon className="w-7 h-7 text-[#11243b] group-hover:text-[#00a9ce] transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-[#11243b] mb-3">{res.label}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {res.description}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
