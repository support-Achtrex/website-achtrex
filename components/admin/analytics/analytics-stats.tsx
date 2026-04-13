import React from 'react';
import { User, MousePointer2, Inbox, ArrowRight } from 'lucide-react';

const StatCard = ({
    icon: Icon,
    value,
    label,
    colorClass,
    bgClass
}: {
    icon: any,
    value: string,
    label: string,
    colorClass: string,
    bgClass: string
}) => (
    <div className="bg-white p-6 rounded-[24px] flex flex-col justify-between h-full shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 border border-gray-100/50">
        <div className="flex items-start gap-5 mb-6">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${bgClass} ${colorClass} shadow-inner`}>
                <Icon size={26} strokeWidth={2} />
            </div>
            <div>
                <h3 className="text-3xl font-bold text-gray-900 font-manrope tracking-tight">{value}</h3>
                <p className="text-sm text-gray-500 font-medium font-montserrat">{label}</p>
            </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-50 group cursor-pointer">
            <span className="text-xs font-semibold text-gray-400 group-hover:text-primary transition-colors font-montserrat uppercase tracking-wide">View details</span>
            <ArrowRight size={16} className="text-gray-300 group-hover:text-primary transition-colors transform group-hover:translate-x-1" />
        </div>
    </div>
);

const AnalyticsStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
                icon={User}
                value="9"
                label="Active Visitor"
                colorClass="text-orange-500"
                bgClass="bg-orange-50"
            />
            <StatCard
                icon={MousePointer2}
                value="2,231"
                label="Click Events"
                colorClass="text-emerald-500"
                bgClass="bg-emerald-50"
            />
            <StatCard
                icon={Inbox}
                value="2"
                label="Form Submissions"
                colorClass="text-blue-500"
                bgClass="bg-blue-50"
            />
        </div>
    );
};

export default AnalyticsStats;
