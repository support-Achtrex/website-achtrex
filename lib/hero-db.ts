import { HeroSlide, HeroConfig, DEFAULT_HERO_CONFIG } from './hero-types';
import { getCmsCollection, getCmsCollectionSync, saveCmsCollection } from '@/lib/cms-db';

export type { HeroSlide, HeroConfig };
export { DEFAULT_HERO_CONFIG };

export const HeroDB = {
  getConfig: (): HeroConfig => {
    const config = getCmsCollectionSync<HeroConfig>('hero', DEFAULT_HERO_CONFIG);
    if (!config || !Array.isArray(config.slides) || config.slides.length === 0) {
      return DEFAULT_HERO_CONFIG;
    }
    config.slides.sort((a: HeroSlide, b: HeroSlide) => (a.order || 0) - (b.order || 0));
    return config;
  },

  getConfigAsync: async (): Promise<HeroConfig> => {
    const config = await getCmsCollection<HeroConfig>('hero', DEFAULT_HERO_CONFIG);
    if (!config || !Array.isArray(config.slides) || config.slides.length === 0) {
      return DEFAULT_HERO_CONFIG;
    }
    config.slides.sort((a: HeroSlide, b: HeroSlide) => (a.order || 0) - (b.order || 0));
    return config;
  },

  saveConfig: (config: HeroConfig): HeroConfig => {
    saveCmsCollection('hero', config).catch((err) =>
      console.error('Error saving hero config to DB:', err)
    );
    return config;
  },

  setMode: (mode: 'single' | 'slider', activeSlideId?: string): HeroConfig => {
    const config = HeroDB.getConfig();
    config.mode = mode;
    if (activeSlideId) {
      config.activeSlideId = activeSlideId;
    }
    return HeroDB.saveConfig(config);
  },

  setActiveSlide: (slideId: string): HeroConfig => {
    const config = HeroDB.getConfig();
    const exists = config.slides.some((s) => s.id === slideId);
    if (exists) {
      config.activeSlideId = slideId;
      HeroDB.saveConfig(config);
    }
    return config;
  },

  getSlideById: (slideId: string): HeroSlide | undefined => {
    const config = HeroDB.getConfig();
    return config.slides.find((s) => s.id === slideId);
  },

  updateSlide: (slideId: string, updates: Partial<HeroSlide>): HeroSlide | null => {
    const config = HeroDB.getConfig();
    const index = config.slides.findIndex((s) => s.id === slideId);
    if (index === -1) return null;

    config.slides[index] = {
      ...config.slides[index],
      ...updates,
    };

    HeroDB.saveConfig(config);
    return config.slides[index];
  },

  addSlide: (slide: Omit<HeroSlide, 'id'> & { id?: string }): HeroSlide => {
    const config = HeroDB.getConfig();
    const id = slide.id || `slide-${Date.now()}`;
    const newSlide: HeroSlide = {
      ...slide,
      id,
      order: slide.order ?? (config.slides.length + 1),
      enabled: slide.enabled ?? true,
    };

    config.slides.push(newSlide);
    HeroDB.saveConfig(config);
    return newSlide;
  },

  deleteSlide: (slideId: string): boolean => {
    const config = HeroDB.getConfig();
    if (config.slides.length <= 1) {
      return false;
    }

    const filtered = config.slides.filter((s) => s.id !== slideId);
    if (filtered.length !== config.slides.length) {
      config.slides = filtered;
      if (config.activeSlideId === slideId) {
        config.activeSlideId = filtered[0].id;
      }
      HeroDB.saveConfig(config);
      return true;
    }
    return false;
  },

  toggleSlideEnabled: (slideId: string, enabled?: boolean): HeroSlide | null => {
    const config = HeroDB.getConfig();
    const slide = config.slides.find((s) => s.id === slideId);
    if (!slide) return null;

    slide.enabled = enabled !== undefined ? enabled : !slide.enabled;
    HeroDB.saveConfig(config);
    return slide;
  },
};
