import React from 'react';
import { TrendingUp, Eye } from 'lucide-react';

const TotalViewsWidget = () => {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                        <Eye size={20} />
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full font-manrope">
                        <TrendingUp size={12} />
                        +12.5%
                    </span>
                </div>
                
                <div>
                    <h3 className="text-sm font-medium text-gray-500 font-montserrat mb-1">Total Views</h3>
                    <div className="text-3xl font-bold text-gray-900 font-manrope">
                        45.2k
                    </div>
                </div>
            </div>

            {/* Decorative Background */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-300 transition-transform duration-500" />
            <div className="absolute bottom-2 right-2 z-0">
                 <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-100">
                    <path d="M0 35C10 30 20 10 30 20C40 30 50 5 60 15C70 25 80 0 80 0V40H0V35Z" fill="currentColor"/>
                </svg>
            </div>
        </div>
    );
};

export default TotalViewsWidget;
