import fs from 'fs';
import path from 'path';
import { ConceptExperienceItem, PROJECTS as DEFAULT_PROJECTS } from '@/data/studio-data';

const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json');

export const ProjectsDB = {
  getAll: (): ConceptExperienceItem[] => {
    try {
      if (!fs.existsSync(DATA_FILE)) {
        // Seed initial data from studio-data
        const dir = path.dirname(DATA_FILE);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(DATA_FILE, JSON.stringify(DEFAULT_PROJECTS, null, 2), 'utf-8');
        return DEFAULT_PROJECTS;
      }
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        return DEFAULT_PROJECTS;
      }
      return parsed;
    } catch (err) {
      console.error('Error reading projects.json:', err);
      return DEFAULT_PROJECTS;
    }
  },

  getBySlug: (slug: string): ConceptExperienceItem | undefined => {
    const all = ProjectsDB.getAll();
    return all.find((p) => p.slug === slug);
  },

  update: (slug: string, updates: Partial<ConceptExperienceItem>): ConceptExperienceItem | null => {
    const all = ProjectsDB.getAll();
    const index = all.findIndex((p) => p.slug === slug);
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
      console.error('Error saving projects.json:', err);
    }

    return all[index];
  },

  add: (item: ConceptExperienceItem): ConceptExperienceItem => {
    const all = ProjectsDB.getAll();
    all.push(item);

    try {
      const dir = path.dirname(DATA_FILE);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2), 'utf-8');
    } catch (err) {
      console.error('Error saving projects.json:', err);
    }

    return item;
  },

  delete: (slug: string): boolean => {
    const all = ProjectsDB.getAll();
    const filtered = all.filter((p) => p.slug !== slug);
    if (filtered.length !== all.length) {
      try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2), 'utf-8');
        return true;
      } catch (err) {
        console.error('Error saving projects.json after deletion:', err);
      }
    }
    return false;
  },
};
