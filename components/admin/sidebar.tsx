'use client'


import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    LayoutDashboard,
    FileText,
    BarChart2,
    Users,
    Settings,
    HelpCircle,
    LogOut,
    MessageSquare,

} from 'lucide-react';

import Image from 'next/image';
import { createClient } from '@/utilities/supabase/client';
import { useToast } from '@/components/ui/toast';

const AdminSidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const supabase = createClient();
    const toast = useToast();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        toast.success('Logged out successfully');
        router.push('/login');
    };

    const isActive = (path: string) => {
        if (path === '/admin' && pathname === '/admin') return true;
        if (path !== '/admin' && pathname?.startsWith(path)) return true;
        return false;
    };

    const getLinkClass = (path: string) => {
        const active = isActive(path);
        return active
            ? "flex items-center gap-3 px-4 py-3 bg-linear-to-r from-primary/10 to-transparent text-primary rounded-xl font-medium transition-all relative group"
            : "flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-xl font-medium transition-colors group";
    };

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 flex flex-col justify-between p-6 bg-white border-r border-gray-100 z-50">
            <div>
                {/* Logo */}
                <div className="flex items-center gap-3 mb-12">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/logo.png"
                            alt="Achtrex Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold text-gray-900 tracking-tight">Achtrex</span>
                </div>

                {/* Menu */}
                <div className="mb-8">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase mb-4 tracking-wider">Menu</h3>
                    <nav className="space-y-2">
                        <Link href="/admin" className={getLinkClass('/admin')}>
                            {isActive('/admin') && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-[0_0_10px_rgba(0,90,176,0.5)]"></div>
                            )}
                            <LayoutDashboard size={20} />
                            <span>Dashboard</span>
                        </Link>
                        <Link href="/admin/blogs" className={getLinkClass('/admin/blogs')}>
                            {isActive('/admin/blogs') && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-[0_0_10px_rgba(0,90,176,0.5)]"></div>
                            )}
                            <FileText size={20} />
                            <span className="flex-1">Blogs</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-md transition-opacity ${isActive('/admin/blogs') ? 'bg-primary text-white opacity-100' : 'bg-gray-100 text-gray-600 opacity-0 group-hover:opacity-100'}`}>12+</span>
                        </Link>
                        <Link href="/admin/analytics" className={getLinkClass('/admin/analytics')}>
                            {isActive('/admin/analytics') && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-[0_0_10px_rgba(0,90,176,0.5)]"></div>
                            )}
                            <BarChart2 size={20} />
                            <span>Analytics</span>
                        </Link>
                        <Link href="/admin/team" className={getLinkClass('/admin/team')}>
                            {isActive('/admin/team') && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-[0_0_10px_rgba(0,90,176,0.5)]"></div>
                            )}
                            <Users size={20} />
                            <span>Team</span>
                        </Link>

                    </nav>
                </div>

                {/* General */}
                <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase mb-4 tracking-wider">General</h3>
                    <nav className="space-y-2">
                        <Link href="/admin/settings" className={getLinkClass('/admin/settings')}>
                            {isActive('/admin/settings') && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-[0_0_10px_rgba(0,90,176,0.5)]"></div>
                            )}
                            <Settings size={20} />
                            <span>Settings</span>
                        </Link>
                        <Link href="/admin/help" className={getLinkClass('/admin/help')}>
                            {isActive('/admin/help') && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-[0_0_10px_rgba(0,90,176,0.5)]"></div>
                            )}
                            <HelpCircle size={20} />
                            <span>Help</span>
                        </Link>
                        <button 
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors text-left"
                        >
                            <LogOut size={20} />
                            <span>Logout</span>
                        </button>
                    </nav>
                </div>
            </div>

        </aside>
    );
};

export default AdminSidebar;

