import fs from 'fs';
import path from 'path';

export interface MediaSpec {
  label: string;
  value: string;
  description?: string;
}

export interface MediaItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'STORIES' | 'EVENTS' | 'ABOUT US' | 'ESG' | 'INNOVATION';
  date: string;
  dateFormatted: string;
  summary: string;
  content: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  thumbnailUrl?: string;
  featured?: boolean;
  // Multiple images and videos (Tesla Roadster style)
  heroVideo?: string;
  secondaryImage?: string;
  galleryImages?: string[];
  galleryVideos?: string[];
  specs?: MediaSpec[];
}

const DATA_FILE = path.join(process.cwd(), 'data', 'media.json');

export const MediaDB = {
  getAll: (): MediaItem[] => {
    try {
      if (!fs.existsSync(DATA_FILE)) {
        return [];
      }
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      if (!data || !data.trim()) {
        return [];
      }
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading media.json:', error);
      return [];
    }
  },

  getById: (id: string): MediaItem | undefined => {
    const all = MediaDB.getAll();
    return all.find((item) => item.id === id);
  },

  getBySlug: (slug: string): MediaItem | undefined => {
    const all = MediaDB.getAll();
    return all.find((item) => item.slug === slug || item.id === slug);
  },

  add: (item: Omit<MediaItem, 'id' | 'dateFormatted'>): MediaItem => {
    const all = MediaDB.getAll();
    
    // Format date string nicely e.g. "05 October 2026"
    let formattedDate = item.date;
    try {
      const parts = item.date.split('/');
      if (parts.length === 3) {
        const [day, month, year] = parts;
        const d = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        formattedDate = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
      }
    } catch (_) {}

    const newItem: MediaItem = {
      ...item,
      id: `media-${Date.now()}`,
      dateFormatted: formattedDate,
    };

    all.unshift(newItem);

    try {
      const dir = path.dirname(DATA_FILE);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const tempFile = `${DATA_FILE}.tmp`;
      fs.writeFileSync(tempFile, JSON.stringify(all, null, 2), 'utf-8');
      try {
        fs.renameSync(tempFile, DATA_FILE);
      } catch {
        fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2), 'utf-8');
        if (fs.existsSync(tempFile)) {
          try { fs.unlinkSync(tempFile); } catch {}
        }
      }
    } catch (err) {
      console.error('Error saving media.json:', err);
    }

    return newItem;
  },

  update: (id: string, updates: Partial<MediaItem>): MediaItem | null => {
    const all = MediaDB.getAll();
    const index = all.findIndex((item) => item.id === id || item.slug === id);
    if (index === -1) return null;

    let dateFormatted = all[index].dateFormatted;
    if (updates.date) {
      dateFormatted = updates.date;
      try {
        const parts = updates.date.split('/');
        if (parts.length === 3) {
          const [day, month, year] = parts;
          const d = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
          dateFormatted = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
        }
      } catch (_) {}
    }

    all[index] = {
      ...all[index],
      ...updates,
      dateFormatted,
    };

    try {
      const dir = path.dirname(DATA_FILE);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const tempFile = `${DATA_FILE}.tmp`;
      fs.writeFileSync(tempFile, JSON.stringify(all, null, 2), 'utf-8');
      try {
        fs.renameSync(tempFile, DATA_FILE);
      } catch {
        fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2), 'utf-8');
        if (fs.existsSync(tempFile)) {
          try { fs.unlinkSync(tempFile); } catch {}
        }
      }
    } catch (err) {
      console.error('Error saving media.json:', err);
    }

    return all[index];
  },

  delete: (id: string): boolean => {
    const all = MediaDB.getAll();
    const filtered = all.filter((item) => item.id !== id);
    if (filtered.length !== all.length) {
      try {
        const tempFile = `${DATA_FILE}.tmp`;
        fs.writeFileSync(tempFile, JSON.stringify(filtered, null, 2), 'utf-8');
        try {
          fs.renameSync(tempFile, DATA_FILE);
        } catch {
          fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2), 'utf-8');
          if (fs.existsSync(tempFile)) {
            try { fs.unlinkSync(tempFile); } catch {}
          }
        }
      } catch (err) {
        console.error('Error deleting from media.json:', err);
      }
      return true;
    }
    return false;
  }
};
