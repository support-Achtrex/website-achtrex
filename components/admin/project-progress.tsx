import React from 'react';

const BlogStats = () => {
    return (
        <div className="rounded-3xl p-px bg-linear-to-br from-gray-200 to-gray-50 h-full">
            <div className="bg-white rounded-[23px] p-4 h-full flex flex-col items-center justify-center relative min-h-[300px]">
                <h3 className="absolute top-6 left-6 text-lg font-bold text-gray-800 font-display">Blog Stats</h3>

                <div className="relative w-40 h-40 mt-8">
                    {/* Circular Progress using SVG */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 192 192">
                        <circle
                            cx="96"
                            cy="96"
                            r="80"
                            stroke="#f3f4f6"
                            strokeWidth="24"
                            fill="transparent"
                            strokeLinecap="round"
                        />
                        <circle
                            cx="96"
                            cy="96"
                            r="80"
                            stroke="var(--primary)"
                            strokeWidth="24"
                            fill="transparent"
                            strokeDasharray="502"
                            strokeDashoffset="200" 
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Inner Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-gray-800 font-display">120</span>
                        <span className="text-[10px] text-gray-400 font-medium font-manrope">Total Posts</span>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-3 mt-6 px-2">
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-[10px] text-gray-500 font-medium whitespace-nowrap font-manrope">Published</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span className="text-[10px] text-gray-500 font-medium whitespace-nowrap font-manrope">Drafts</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                        <span className="text-[10px] text-gray-500 font-medium whitespace-nowrap font-manrope">Scheduled</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogStats;
