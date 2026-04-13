import React from 'react';
import { SettingsDB } from '@/lib/local-db';
import { Save } from 'lucide-react';
import { Button } from '@/components/buttons';

export default function SettingsPage() {
    const settings = SettingsDB.get();

    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-1">Settings</h1>
                <p className="text-gray-500 text-sm">Manage global website configuration.</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <form className="space-y-6">
                    {/* Site Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Site Name</label>
                        <input
                            type="text"
                            name="siteName"
                            defaultValue={settings.siteName}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                        />
                        <p className="text-xs text-gray-400">Used in title tags and footer.</p>
                    </div>

                    {/* Contact Email */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Contact Email</label>
                        <input
                            type="email"
                            name="contactEmail"
                            defaultValue={settings.contactEmail}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                        />
                        <p className="text-xs text-gray-400">Where contact form submissions are sent.</p>
                    </div>

                    {/* Maintenance Mode */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div>
                            <span className="text-sm font-semibold text-gray-900 block">Maintenance Mode</span>
                            <span className="text-xs text-gray-500">Enable to show a "Coming Soon" page to visitors.</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked={settings.maintenanceMode} className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-3 flex items-center gap-2">
                            <Save size={18} />
                            Save Changes
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// In a real app, you would add a Server Action here to handle the form submission and update SettingsDB
