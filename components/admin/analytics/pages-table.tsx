import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const PagesTable = () => {
  const pages = [
    { name: '/Home page', visitors: 832, percent: 85 },
    { name: '/Pricing', visitors: 450, percent: 45 },
    { name: '/Contact', visitors: 320, percent: 25 },
    { name: '/News', visitors: 200, percent: 15 },
    { name: '/About', visitors: 345, percent: 30 },
  ];

  return (
    <div className="bg-transparent p-8 rounded-[32px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-200/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-1.5 bg-transparent/80 p-1.5 rounded-2xl border border-slate-200">
          <button className="px-5 py-2 bg-transparent text-gray-900 text-xs font-bold rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] font-montserrat tracking-wide">Pages</button>
          <button className="px-5 py-2 text-slate-400 text-xs font-medium hover:bg-gray-200/50 rounded-full transition-colors font-montserrat tracking-wide">Entry Pages</button>
          <button className="px-5 py-2 text-slate-400 text-xs font-medium hover:bg-gray-200/50 rounded-full transition-colors font-montserrat tracking-wide">Exit Pages</button>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <select className="appearance-none bg-transparent border-none text-xs font-semibold text-slate-400 rounded-xl px-4 py-2 pr-8 outline-none cursor-pointer hover:bg-slate-50/5 transition-colors font-montserrat">
              <option>This month</option>
              <option>Last month</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
          <button className="p-2 text-slate-500 hover:bg-transparent rounded-full transition-colors">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>

      <div className="mb-6 flex justify-between text-xs font-bold text-slate-500 px-4 uppercase tracking-wider font-montserrat">
        <span>Pages Name</span>
        <span>Visitors</span>
      </div>

      <div className="space-y-8 px-2">
        {pages.map((page, index) => (
          <div key={index} className="flex items-center gap-6 group">
            <span className="w-32 text-sm font-bold text-gray-700 shrink-0 font-sans">{page.name}</span>
            <div className="flex-1 h-3.5 bg-transparent rounded-full overflow-hidden shadow-inner">
              <div
                className="h-full bg-linear-to-r from-purple-400 to-purple-500 rounded-full group-hover:from-purple-500 group-hover:to-purple-600 transition-all duration-500 ease-out shadow-[0_2px_10px_rgba(168,85,247,0.3)]"
                style={{ width: `${page.percent}%` }}
              ></div>
            </div>
            <span className="w-16 text-right text-sm font-bold text-gray-900 font-sans">{page.visitors}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PagesTable;
