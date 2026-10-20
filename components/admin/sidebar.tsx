'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Layers,
  FolderKanban,
  Film,
  MessageSquare,
  Settings,
  LogOut,
  ExternalLink,
  Sliders,
  Globe
} from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/components/ui/toast';

const AdminSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const toast = useToast();

  const handleLogout = async () => {
    document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
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
      ? "flex items-center gap-3 px-4 py-3 bg-blue-50/80 text-blue-700 rounded-xl font-semibold transition-all relative group shadow-xs"
      : "flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-100/70 rounded-xl font-medium transition-colors group";
  };

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 flex flex-col justify-between p-6 bg-white border-r border-slate-200 z-50">
      <div>
        {/* Logo */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
          <Link href="/admin" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center p-1">
              <Image
                src="/logo.png"
                alt="Achtrex Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <span className="text-lg font-bold text-slate-900 tracking-tight block leading-tight">Achtrex</span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">Studio Admin</span>
            </div>
          </Link>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            title="View live site"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <ExternalLink size={15} />
          </a>
        </div>

        {/* Content Management */}
        <div className="mb-6">
          <h3 className="text-[11px] font-semibold text-slate-400 uppercase mb-3 tracking-wider px-2">Studio Content</h3>
          <nav className="space-y-1.5">
            <Link href="/admin" className={getLinkClass('/admin')}>
              {isActive('/admin') && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 bg-blue-600 rounded-r-full shadow-xs"></div>
              )}
              <LayoutDashboard size={19} className={isActive('/admin') ? 'text-blue-600' : 'text-slate-400'} />
              <span>Dashboard</span>
            </Link>

            <Link href="/admin/hero" className={getLinkClass('/admin/hero')}>
              {isActive('/admin/hero') && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 bg-blue-600 rounded-r-full shadow-xs"></div>
              )}
              <Sliders size={19} className={isActive('/admin/hero') ? 'text-blue-600' : 'text-slate-400'} />
              <span className="flex-1">Hero Slider</span>
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">Mode</span>
            </Link>

            <Link href="/admin/services" className={getLinkClass('/admin/services')}>
              {isActive('/admin/services') && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 bg-blue-600 rounded-r-full shadow-xs"></div>
              )}
              <Layers size={19} className={isActive('/admin/services') ? 'text-blue-600' : 'text-slate-400'} />
              <span className="flex-1">Services</span>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">6</span>
            </Link>

            <Link href="/admin/projects" className={getLinkClass('/admin/projects')}>
              {isActive('/admin/projects') && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 bg-blue-600 rounded-r-full shadow-xs"></div>
              )}
              <FolderKanban size={19} className={isActive('/admin/projects') ? 'text-blue-600' : 'text-slate-400'} />
              <span className="flex-1">Projects</span>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">5</span>
            </Link>

            <Link href="/admin/media" className={getLinkClass('/admin/media')}>
              {isActive('/admin/media') && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 bg-blue-600 rounded-r-full shadow-xs"></div>
              )}
              <Film size={19} className={isActive('/admin/media') ? 'text-blue-600' : 'text-slate-400'} />
              <span className="flex-1">Media</span>
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">Live</span>
            </Link>

            <Link href="/admin/leads" className={getLinkClass('/admin/leads')}>
              {isActive('/admin/leads') && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 bg-blue-600 rounded-r-full shadow-xs"></div>
              )}
              <MessageSquare size={19} className={isActive('/admin/leads') ? 'text-blue-600' : 'text-slate-400'} />
              <span className="flex-1">Inbox Leads</span>
            </Link>

            <Link href="/admin/visitors" className={getLinkClass('/admin/visitors')}>
              {isActive('/admin/visitors') && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 bg-blue-600 rounded-r-full shadow-xs"></div>
              )}
              <Globe size={19} className={isActive('/admin/visitors') ? 'text-blue-600' : 'text-slate-400'} />
              <span className="flex-1">Visitor Logs</span>
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">Live</span>
            </Link>
          </nav>
        </div>

        {/* System Settings */}
        <div>
          <h3 className="text-[11px] font-semibold text-slate-400 uppercase mb-3 tracking-wider px-2">Configuration</h3>
          <nav className="space-y-1.5">
            <Link href="/admin/settings" className={getLinkClass('/admin/settings')}>
              {isActive('/admin/settings') && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 bg-blue-600 rounded-r-full shadow-xs"></div>
              )}
              <Settings size={19} className={isActive('/admin/settings') ? 'text-blue-600' : 'text-slate-400'} />
              <span>Settings</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Logout */}
      <div className="pt-4 border-t border-slate-100">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:text-red-600 hover:bg-red-50/80 rounded-xl font-medium transition-colors text-left"
        >
          <LogOut size={18} />
          <span className="text-sm">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
