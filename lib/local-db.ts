import fs from 'fs';
import path from 'path';

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
    get: () => {
        const settings = readJson<SiteSettings>('settings.json');
        return settings[0] || DEFAULT_SETTINGS;
    },
    update: (newSettings: Partial<SiteSettings>) => {
        const current = SettingsDB.get();
        const updated = { ...current, ...newSettings };
        writeJson('settings.json', [updated]);
        return updated;
    }
};
