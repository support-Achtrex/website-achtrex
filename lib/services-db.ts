import fs from 'fs';
import path from 'path';
import { ServiceItem, SERVICES as DEFAULT_SERVICES } from '@/data/studio-data';

const DATA_FILE = path.join(process.cwd(), 'data', 'services.json');

export const ServicesDB = {
  getAll: (): ServiceItem[] => {
    try {
      if (!fs.existsSync(DATA_FILE)) {
        // Seed initial data from studio-data
        const dir = path.dirname(DATA_FILE);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(DATA_FILE, JSON.stringify(DEFAULT_SERVICES, null, 2), 'utf-8');
        return DEFAULT_SERVICES;
      }
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        return DEFAULT_SERVICES;
      }
      return parsed;
    } catch (err) {
      console.error('Error reading services.json:', err);
      return DEFAULT_SERVICES;
    }
  },

  getBySlug: (slug: string): ServiceItem | undefined => {
    const all = ServicesDB.getAll();
    return all.find((s) => s.slug === slug || s.id === slug);
  },

  update: (slug: string, updates: Partial<ServiceItem>): ServiceItem | null => {
    const all = ServicesDB.getAll();
    const index = all.findIndex((s) => s.slug === slug || s.id === slug);
    if (index === -1) return null;

    all[index] = {
      ...all[index],
      ...updates,
    };

    try {
      const dir = path.dirname(DATA_FILE);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2), 'utf-8');
    } catch (err) {
      console.error('Error saving services.json:', err);
    }

    return all[index];
  },

  add: (item: ServiceItem): ServiceItem => {
    const all = ServicesDB.getAll();
    all.push(item);

    try {
      const dir = path.dirname(DATA_FILE);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2), 'utf-8');
    } catch (err) {
      console.error('Error saving services.json:', err);
    }

    return item;
  },

  delete: (slug: string): boolean => {
    const all = ServicesDB.getAll();
    const filtered = all.filter((s) => s.slug !== slug && s.id !== slug);
    if (filtered.length !== all.length) {
      try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2), 'utf-8');
        return true;
      } catch (err) {
        console.error('Error saving services.json after deletion:', err);
      }
    }
    return false;
  },
};
