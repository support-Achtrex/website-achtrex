import { getCmsCollection, getCmsCollectionSync, saveCmsCollection } from '@/lib/cms-db';

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

export const MediaDB = {
  getAll: (): MediaItem[] => {
    return getCmsCollectionSync<MediaItem[]>('media', []);
  },

  getAllAsync: async (): Promise<MediaItem[]> => {
    return await getCmsCollection<MediaItem[]>('media', []);
  },

  getById: (id: string): MediaItem | undefined => {
    const all = MediaDB.getAll();
    return all.find((item) => item.id === id);
  },

  getBySlug: (slug: string): MediaItem | undefined => {
    const all = MediaDB.getAll();
    return all.find((item) => item.slug === slug || item.id === slug);
  },

  getBySlugAsync: async (slug: string): Promise<MediaItem | undefined> => {
    const all = await MediaDB.getAllAsync();
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

    saveCmsCollection('media', all).catch((err) =>
      console.error('Error saving media to DB:', err)
    );

    return newItem;
  },

  update: (id: string, updates: Partial<MediaItem>): MediaItem | null => {
    const all = MediaDB.getAll();
    const index = all.findIndex((item) => item.id === id || item.slug === id);
    if (index === -1) return null;

    // Recalculate formatted date if date string changed
    let dateFormatted = all[index].dateFormatted;
    if (updates.date && updates.date !== all[index].date) {
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

    saveCmsCollection('media', all).catch((err) =>
      console.error('Error saving media to DB:', err)
    );

    return all[index];
  },

  delete: (id: string): boolean => {
    const all = MediaDB.getAll();
    const filtered = all.filter((item) => item.id !== id && item.slug !== id);
    if (filtered.length !== all.length) {
      saveCmsCollection('media', filtered).catch((err) =>
        console.error('Error saving media after deletion to DB:', err)
      );
      return true;
    }
    return false;
  },
};
