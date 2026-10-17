export interface HeroSlide {
  id: string;
  titleLines: string[];
  linkLabel: string;
  linkHref: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  posterSrc?: string;
  enabled: boolean;
  order: number;
}

export interface HeroConfig {
  mode: 'single' | 'slider'; // 'single' shows only one slide, 'slider' cycles through enabled slides
  activeSlideId: string;     // ID of the slide shown when in 'single' mode
  slideDurationMs: number;   // Slide duration in ms for slider mode
  slides: HeroSlide[];
}

export const DEFAULT_HERO_CONFIG: HeroConfig = {
  mode: 'single',
  activeSlideId: 'innovation', // The Second Slide (Innovation Image)
  slideDurationMs: 8900,
  slides: [
    {
      id: 'customization',
      titleLines: ['Real-Time 3D', 'Product Customization'],
      linkLabel: 'Explore Concept',
      linkHref: '/projects/realtime-product-customizer',
      mediaType: 'video',
      mediaSrc: '/hero-videos/form-customizer-cover.mp4',
      enabled: false,
      order: 1,
    },
    {
      id: 'innovation',
      titleLines: ['We are', 'innovation'],
      linkLabel: 'Discover Studio',
      linkHref: '/about',
      mediaType: 'image',
      mediaSrc: '/hero-videos/hero-innovation.jpg',
      enabled: true,
      order: 2,
    },
    {
      id: 'ai-development',
      titleLines: ['Artificial Intelligence', 'Development Services'],
      linkLabel: 'Explore Concept',
      linkHref: '/projects/intelligent-copilot-interface',
      mediaType: 'video',
      mediaSrc: '/hero-videos/lumen-intelligent-cover.mp4',
      enabled: false,
      order: 3,
    },
    {
      id: 'cgi-immersive',
      titleLines: ['CGI, 3D &', 'Immersive Experiences'],
      linkLabel: 'Explore Concept',
      linkHref: '/projects/interactive-storytelling-campaign',
      mediaType: 'video',
      mediaSrc: '/hero-videos/after-dark-cover.mp4',
      enabled: false,
      order: 4,
    },
  ],
};
