'use client';

import React, { useEffect, useState } from 'react';
import { Search, Mail, Bell } from 'lucide-react';
import { createClient } from '@/utilities/supabase/client';

const AdminTopbar = () => {
    const [user, setUser] = useState<{ email?: string; user_metadata?: { full_name?: string } } | null>(null);
    const supabase = createClient();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        getUser();
    }, [supabase.auth]);

    // Extract user display info
    const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';
    const email = user?.email || '';
    const initials = displayName
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    return (
        <header className="flex items-center justify-between py-4 mb-8 bg-white/80 backdrop-blur-md sticky top-0 z-40 px-8 -mx-8 border-b border-gray-100">
            {/* Search */}
            <div className="relative w-96">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search size={20} />
                </div>
                <input
                    type="text"
                    placeholder="Search task"
                    className="w-full pl-12 pr-12 py-3 bg-white rounded-full border-none focus:ring-2 focus:ring-primary/20 outline-none text-sm text-gray-700 shadow-sm placeholder:text-gray-400"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded border border-gray-200 bg-gray-50 px-2 font-mono text-[10px] font-medium text-gray-500">
                        ⌘F
                    </kbd>
                </div>
            </div>

            {/* Actions & Profile */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-primary hover:bg-primary/10 transition-colors shadow-sm">
                        <Mail size={20} />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-primary hover:bg-primary/10 transition-colors shadow-sm relative">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                    </button>
                </div>

                <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
                    <div className="text-right hidden md:block">
                        <h4 className="text-sm font-bold text-gray-800">{displayName}</h4>
                        <p className="text-xs text-gray-400">{email}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                        <div className="w-full h-full bg-linear-to-br from-primary/80 to-primary/40 flex items-center justify-center text-white font-bold">
                            {initials}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminTopbar;

