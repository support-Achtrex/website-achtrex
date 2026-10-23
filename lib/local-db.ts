import fs from 'fs';
import path from 'path';
import { getCmsCollection, getCmsCollectionSync, saveCmsCollection } from '@/lib/cms-db';

const DATA_DIR = path.join(process.cwd(), 'data');

// Helper to read JSON file
function readJson<T>(filename: string): T[] {
    try {
        const filePath = path.join(DATA_DIR, filename);
        if (!fs.existsSync(filePath)) {
            return [];
        }
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error(`Error reading ${filename}:`, error);
        return [];
    }
}

// Helper to write JSON file
function writeJson<T>(filename: string, data: T[]) {
    try {
        const filePath = path.join(DATA_DIR, filename);
        if (!fs.existsSync(DATA_DIR)) {
            fs.mkdirSync(DATA_DIR, { recursive: true });
        }
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error(`Error writing ${filename}:`, error);
    }
}

// --- LEADS ---
export interface Lead {
    id: string;
    name: string;
    email: string;
    message: string;
    service?: string;
    budget?: string;
    company?: string;
    source?: string;
    createdAt: string;
    status: 'new' | 'contacted' | 'qualified' | 'lost';
}

export const LeadsDB = {
    getAll: () => readJson<Lead>('leads.json'),
    add: (lead: Omit<Lead, 'id' | 'createdAt' | 'status'>) => {
        const leads = LeadsDB.getAll();
        const newLead: Lead = {
            ...lead,
            id: Math.random().toString(36).substr(2, 9),
            createdAt: new Date().toISOString(),
            status: 'new'
        };
        leads.unshift(newLead);
        writeJson('leads.json', leads);
        return newLead;
    },
    updateStatus: (id: string, status: Lead['status']) => {
        const leads = LeadsDB.getAll();
        const leadIndex = leads.findIndex(l => l.id === id);
        if (leadIndex > -1) {
            leads[leadIndex].status = status;
            writeJson('leads.json', leads);
            return leads[leadIndex];
        }
        return null;
    }
};

// --- SETTINGS ---
export interface SiteSettings {
    siteName: string;
    contactEmail: string;
    maintenanceMode: boolean;
}

const DEFAULT_SETTINGS: SiteSettings = {
    siteName: 'Achtrex',
    contactEmail: 'support@achtrex.com',
    maintenanceMode: false,
};

export const SettingsDB = {
    get: (): SiteSettings => {
        const raw = getCmsCollectionSync<any>('settings', DEFAULT_SETTINGS);
        if (Array.isArray(raw)) {
            const item = raw[0] || {};
            return {
                siteName: item.siteName || DEFAULT_SETTINGS.siteName,
                contactEmail: item.contactEmail || DEFAULT_SETTINGS.contactEmail,
                maintenanceMode: Boolean(item.maintenanceMode),
            };
        }
        if (raw && typeof raw === 'object') {
            return {
                siteName: raw.siteName || DEFAULT_SETTINGS.siteName,
                contactEmail: raw.contactEmail || DEFAULT_SETTINGS.contactEmail,
                maintenanceMode: Boolean(raw.maintenanceMode),
            };
        }
        return DEFAULT_SETTINGS;
    },

    getAsync: async (): Promise<SiteSettings> => {
        const raw = await getCmsCollection<any>('settings', DEFAULT_SETTINGS);
        if (Array.isArray(raw)) {
            const item = raw[0] || {};
            return {
                siteName: item.siteName || DEFAULT_SETTINGS.siteName,
                contactEmail: item.contactEmail || DEFAULT_SETTINGS.contactEmail,
                maintenanceMode: Boolean(item.maintenanceMode),
            };
        }
        if (raw && typeof raw === 'object') {
            return {
                siteName: raw.siteName || DEFAULT_SETTINGS.siteName,
                contactEmail: raw.contactEmail || DEFAULT_SETTINGS.contactEmail,
                maintenanceMode: Boolean(raw.maintenanceMode),
            };
        }
        return DEFAULT_SETTINGS;
    },

    update: async (newSettings: Partial<SiteSettings>): Promise<SiteSettings> => {
        const current = SettingsDB.get();
        const updated: SiteSettings = {
            siteName: newSettings.siteName ?? current.siteName,
            contactEmail: newSettings.contactEmail ?? current.contactEmail,
            maintenanceMode: newSettings.maintenanceMode !== undefined ? Boolean(newSettings.maintenanceMode) : current.maintenanceMode,
        };
        await saveCmsCollection('settings', updated);
        return updated;
    }
};
