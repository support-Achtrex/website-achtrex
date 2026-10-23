import { ConceptExperienceItem, PROJECTS as DEFAULT_PROJECTS, LEGACY_SLUG_MAP } from '@/data/studio-data';
import { getCmsCollection, getCmsCollectionSync, saveCmsCollection } from '@/lib/cms-db';

export const ProjectsDB = {
  getAll: (): ConceptExperienceItem[] => {
    return getCmsCollectionSync<ConceptExperienceItem[]>('projects', DEFAULT_PROJECTS);
  },

  getAllAsync: async (): Promise<ConceptExperienceItem[]> => {
    return await getCmsCollection<ConceptExperienceItem[]>('projects', DEFAULT_PROJECTS);
  },

  getBySlug: (slug: string): ConceptExperienceItem | undefined => {
    const resolved = (LEGACY_SLUG_MAP && LEGACY_SLUG_MAP[slug]) || slug;
    const all = ProjectsDB.getAll();
    return all.find((p) => p.slug === resolved || p.slug === slug);
  },

  getBySlugAsync: async (slug: string): Promise<ConceptExperienceItem | undefined> => {
    const resolved = (LEGACY_SLUG_MAP && LEGACY_SLUG_MAP[slug]) || slug;
    const all = await ProjectsDB.getAllAsync();
    return all.find((p) => p.slug === resolved || p.slug === slug);
  },

  update: (slug: string, updates: Partial<ConceptExperienceItem>): ConceptExperienceItem | null => {
    const resolved = (LEGACY_SLUG_MAP && LEGACY_SLUG_MAP[slug]) || slug;
    const all = ProjectsDB.getAll();
    const index = all.findIndex((p) => p.slug === resolved || p.slug === slug);
    if (index === -1) return null;

    all[index] = {
      ...all[index],
      ...updates,
    };

    saveCmsCollection('projects', all).catch((err) =>
      console.error('Error saving projects to DB:', err)
    );

    return all[index];
  },

  add: (item: ConceptExperienceItem): ConceptExperienceItem => {
    const all = ProjectsDB.getAll();
    all.push(item);

    saveCmsCollection('projects', all).catch((err) =>
      console.error('Error saving projects to DB:', err)
    );

    return item;
  },

  delete: (slug: string): boolean => {
    const resolved = (LEGACY_SLUG_MAP && LEGACY_SLUG_MAP[slug]) || slug;
    const all = ProjectsDB.getAll();
    const filtered = all.filter((p) => p.slug !== resolved && p.slug !== slug);
    if (filtered.length !== all.length) {
      saveCmsCollection('projects', filtered).catch((err) =>
        console.error('Error saving projects after deletion to DB:', err)
      );
      return true;
    }
    return false;
  },
};
