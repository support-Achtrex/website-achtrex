import { ServiceItem, SERVICES as DEFAULT_SERVICES } from '@/data/studio-data';
import { getCmsCollection, getCmsCollectionSync, saveCmsCollection } from '@/lib/cms-db';

export const ServicesDB = {
  getAll: (): ServiceItem[] => {
    return getCmsCollectionSync<ServiceItem[]>('services', DEFAULT_SERVICES);
  },

  getAllAsync: async (): Promise<ServiceItem[]> => {
    return await getCmsCollection<ServiceItem[]>('services', DEFAULT_SERVICES);
  },

  getBySlug: (slug: string): ServiceItem | undefined => {
    const all = ServicesDB.getAll();
    return all.find((s) => s.slug === slug || s.id === slug);
  },

  getBySlugAsync: async (slug: string): Promise<ServiceItem | undefined> => {
    const all = await ServicesDB.getAllAsync();
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

    saveCmsCollection('services', all).catch((err) =>
      console.error('Error saving services to DB:', err)
    );

    return all[index];
  },

  add: (item: ServiceItem): ServiceItem => {
    const all = ServicesDB.getAll();
    all.push(item);

    saveCmsCollection('services', all).catch((err) =>
      console.error('Error saving services to DB:', err)
    );

    return item;
  },

  delete: (slug: string): boolean => {
    const all = ServicesDB.getAll();
    const filtered = all.filter((s) => s.slug !== slug && s.id !== slug);
    if (filtered.length !== all.length) {
      saveCmsCollection('services', filtered).catch((err) =>
        console.error('Error saving services after deletion to DB:', err)
      );
      return true;
    }
    return false;
  },
};
