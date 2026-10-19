import { ThreeDSceneMode } from '@/components/studio/Interactive3DViewport';

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  philosophy: string;
  whyItMatters: string;
  capabilities: string[];
  deliverables: string[];
  techStack: string[];
  industryApplications: {
    industry: string;
    application: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  heroImage: string;
  heroVideo?: string;
  secondaryImage?: string;
  galleryImages: string[];
  featuredCaseSlug: string;
  featuredCaseTitle: string;
  relatedProjectSlugs: string[];
}

export interface ConceptExperienceItem {
  slug: string;
  title: string;
  subtitle: string;
  badge: 'ACHTREX CONCEPT' | 'CONCEPT EXPERIENCE';
  category: string;
  industry: string;
  serviceId: string;
  year: string;
  heroImage?: string;
  heroVideo?: string;
  secondaryImage?: string;
  galleryImages: string[];
  shortDescription: string;
  challenge: string;
  conceptArchitecture: string;
  interactiveExperience: string;
  creativeDirection: string;
  technicalCapabilities: string[];
  techStack: string[];
  sceneMode: ThreeDSceneMode;
  featuredOnHome: boolean;
  gridSpan: 'full' | 'two-thirds' | 'one-third' | 'half';
}

// Backward-compatible alias for ProjectItem
export type ProjectItem = ConceptExperienceItem;

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  image: string;
}

export const STUDIO_CONFIG = {
  name: 'Achtrex',
  fullName: 'Achtrex Technology - FZCO',
  legalName: 'Achtrex Technology - FZCO',
  tagline: 'Digital Experience & Technology Studio',
  headline: 'We design and build digital experiences where technology, creativity and intelligence come together.',
  subheadline: 'Achtrex creates immersive digital experiences, intelligent products, interactive platforms and technology-driven brand experiences for modern businesses.',
  phone: '+971 50 222 9587',
  phoneDisplay: '+971 50 222 9587',
  phoneHref: 'tel:+971502229587',
  email: 'support@achtrex.com',
  emailHref: 'mailto:support@achtrex.com',
  address: 'Dubai Silicon Oasis, Digital Park A5 Building, 6009, UAE',
  locationCity: 'Dubai',
  locationCountry: 'United Arab Emirates',
  calendlyUrl: 'https://calendly.com/achtrex-support/30min',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'creative-strategy',
    slug: 'creative-strategy',
    number: '01',
    title: 'Creative Strategy & Digital Content',
    subtitle: 'Creative direction, digital campaigns, storytelling, interactive content and brand experiences.',
    headline: 'Creating digital stories, campaigns and experiences that connect brands with their audiences.',
    description: 'We conceive distinct creative narratives and produce high-impact digital content, uniting brand storytelling, kinetic typography, 3D assets, and interactive media into memorable brand worlds.',
    philosophy: 'Without an emotional hook, digital technology is inert. We engineer narratives where every interaction, frame of video, and line of copy reinforces a clear, memorable brand perspective.',
    whyItMatters: 'In high-noise markets, passive advertising is quickly forgotten. Interactive campaigns that invite user curiosity generate multi-minute engagement and deep brand affinity.',
    capabilities: [
      'Creative direction',
      'Digital campaigns',
      'Storytelling',
      'Interactive content',
      'Brand experiences',
      'Content direction',
      'Interactive storytelling',
      'Digital marketing experiences',
      '3D content',
      'CGI production',
    ],
    deliverables: [
      'Creative Direction Blueprints & Visual Identity Brand Books',
      'Scroll-Driven Interactive Storytelling Web Experiences',
      'Kinetic Typography, Motion Systems & Custom WebGL Fragment Shaders',
      'Multi-Format Video & CGI Content Suites for Omnichannel Distribution',
      'Interactive Audio-Reactive Spatial Soundscapes & Sound Design',
    ],
    techStack: ['WebGL Shaders', 'Web Audio API', 'Three.js', 'Framer Motion', 'Next.js 15', 'Tailwind CSS'],
    industryApplications: [
      { industry: 'Luxury & Haute Horlogerie', application: 'Kinetic reveal campaigns and interactive craftsmanship chronicles.' },
      { industry: 'Automotive Brands', application: 'Cinematic brand unveiling surfaces and sensory storytelling platforms.' },
      { industry: 'Cultural Institutions', application: 'Interactive digital retrospectives, exhibitions, and immersive archives.' },
      { industry: 'Global Tech Launches', application: 'High-impact keynote interactive hubs and interactive launch microsites.' },
    ],
    process: [
      {
        step: '01',
        title: 'Brand Resonance Discovery',
        description: 'Uncovering the singular narrative truth and emotional anchor behind the product and audience.',
      },
      {
        step: '02',
        title: 'Art Direction & Concepting',
        description: 'Designing distinctive visual languages, expressive typography palettes, and editorial mood systems.',
      },
      {
        step: '03',
        title: 'Content & Editorial Craft',
        description: 'Producing evocative editorial copy, visual compositions, and rich media assets that communicate with elegance.',
      },
      {
        step: '04',
        title: 'Omnichannel Orchestration',
        description: 'Translating the story seamlessly across web platforms, physical touchpoints, and digital campaigns.',
      },
    ],
    heroImage: '/studio-assets/grid-creative-studio.png',
    secondaryImage: '/studio-assets/service-creative-strategy-detail.jpg',
    galleryImages: [
      '/studio-assets/service-creative-strategy-detail.jpg',
      '/studio-assets/project-afterdark.jpg',
      '/studio-assets/service-experience-design.jpg',
    ],
    featuredCaseSlug: 'interactive-storytelling-campaign',
    featuredCaseTitle: 'Nocturnal Brand Storytelling Experience',
    relatedProjectSlugs: ['interactive-storytelling-campaign', 'architectural-spatial-experience'],
  },
  {
    id: 'digital-products',
    slug: 'digital-products',
    number: '02',
    title: 'Digital Product & Software Engineering',
    subtitle: 'Web platforms, digital products, custom applications, portals and technology platforms.',
    headline: 'Designing and building sophisticated digital products from concept to production.',
    description: 'We conceive, architect, and engineer digital products: responsive web applications, mobile ecosystems, enterprise portals, and platforms designed for longevity, performance, and commercial impact.',
    philosophy: 'Great software is where pristine user experience converges with uncompromising architectural rigor. We build modular, resilient codebases engineered to scale effortlessly.',
    whyItMatters: 'Enterprise and consumer software alike must earn loyalty through speed, reliability, and sheer aesthetic pleasure. Sub-second performance directly drives customer retention.',
    capabilities: [
      'Web platforms',
      'Digital products',
      'Custom applications',
      'Enterprise portals',
      'Technology platforms',
      'Product architecture',
      'Front-end development',
      'Back-end systems',
      'System integration',
      'Product prototyping',
    ],
    deliverables: [
      'Full-Stack Production Application (Next.js 15, TypeScript, Node.js)',
      'High-Performance Component Architecture & Design System Implementation',
      'Robust REST & GraphQL API Contracts, WebSockets & Event-Driven Pipelines',
      'Multi-Region Cloud Edge Deployment (Vercel / AWS) with 99.98% SLA',
      'Automated Test Coverage (Unit, Integration, E2E) & Security Hardening',
    ],
    techStack: ['Next.js 15', 'TypeScript', 'React 19', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS'],
    industryApplications: [
      { industry: 'Clinical & Health Sciences', application: 'HIPAA-compliant diagnostic portals and real-time patient telemetry surfaces.' },
      { industry: 'Enterprise SaaS', application: 'High-velocity operational platforms and collaboration command centers.' },
      { industry: 'FinTech & Wealth Management', application: 'Real-time asset analytics, portfolio modeling, and transaction portals.' },
      { industry: 'Real Estate & Property Tech', application: 'Global investment portals with interactive building models and leasing systems.' },
    ],
    process: [
      {
        step: '01',
        title: 'Product Scope & Technical Architecture',
        description: 'Defining user roles, data schemas, API contracts, and scalable system boundaries.',
      },
      {
        step: '02',
        title: 'Rapid Interactive Prototyping',
        description: 'Validating end-to-end user workflows with working code prototypes before scaled engineering.',
      },
      {
        step: '03',
        title: 'Full-Stack Modern Engineering',
        description: 'Developing with strict TypeScript, clean component architecture, and automated test coverage.',
      },
      {
        step: '04',
        title: 'Deployment & Continuous Evolution',
        description: 'Deploying across global edge CDNs with zero-downtime CI/CD pipelines, real-time observability, and monitoring.',
      },
    ],
    heroImage: '/studio-assets/grid-digital-products.png',
    secondaryImage: '/studio-assets/service-digital-products-detail.jpg',
    galleryImages: [
      '/studio-assets/service-digital-products-detail.jpg',
      '/studio-assets/project-lumen.jpg',
      '/studio-assets/project-careflow.jpg',
    ],
    featuredCaseSlug: 'intelligent-clinical-platform',
    featuredCaseTitle: 'Calm Healthcare & Clinical Surface',
    relatedProjectSlugs: ['intelligent-clinical-platform', 'intelligent-copilot-interface'],
  },
  {
    id: 'ai-intelligent-experiences',
    slug: 'ai-intelligent-experiences',
    number: '03',
    title: 'Artificial Intelligence Development Services',
    subtitle: 'Develop intelligent AI solutions, applications and digital products that help businesses automate processes, improve decision-making and create better digital experiences.',
    headline: 'Develop intelligent AI solutions, applications and digital products that help businesses automate processes, improve decision-making and create better digital experiences.',
    description: 'We build production-ready AI solutions: from autonomous agent orchestration and high-precision RAG architectures to conversational systems, intelligent search, and predictive workflows that deliver measurable business transformation.',
    philosophy: 'AI should not be represented by cliché sci-fi robots or noisy prompt bars. True artificial intelligence lives as calm, ambient capability, transforming high-velocity streaming data into clear human decisions.',
    whyItMatters: 'Enterprises that integrate purpose-built AI into their core operational workflows gain compounding speed, automate routine friction, and unlock predictive insights impossible with legacy software.',
    capabilities: [
      'AI application development',
      'Custom AI solutions',
      'AI agents',
      'Generative AI',
      'LLM integration',
      'RAG systems',
      'Conversational AI',
      'AI automation',
      'Intelligent assistants',
      'AI-powered search',
      'Machine learning',
      'Computer vision',
      'Predictive intelligence',
      'AI API integration',
    ],
    deliverables: [
      'Autonomous Multi-Agent Task Orchestration Architecture',
      'Production RAG Engine with Hybrid Vector Search (Dense + Sparse)',
      'Real-Time Streaming Inference UI with Non-Modal Token Feedback',
      'Deterministic Guardrail Pipelines & Hallucination Prevention Systems',
      'Model Evaluation Harnesses & Cost/Latency Optimization Dashboards',
    ],
    techStack: ['Python', 'PyTorch', 'LangGraph', 'Qdrant / Pinecone', 'vLLM', 'Next.js Vercel AI SDK', 'WebSockets'],
    industryApplications: [
      { industry: 'Enterprise Operations', application: 'Autonomous internal research agents and multi-system policy orchestrators.' },
      { industry: 'Biomedical & Research', application: 'Scientific literature synthesis and clinical trial matching pipelines.' },
      { industry: 'Financial Intelligence', application: 'Real-time market sentiment streaming, anomaly detection, and predictive risk modeling.' },
      { industry: 'Customer Experience', application: 'Context-aware conversational assistants with zero-latency streaming responses.' },
    ],
    process: [
      {
        step: '01',
        title: 'Knowledge Modeling & RAG Architecture',
        description: 'Structuring domain knowledge bases, vector embeddings, chunking strategies, and retrieval pipelines.',
      },
      {
        step: '02',
        title: 'Autonomous Agent Design & Tool Calling',
        description: 'Architecting multi-agent coordination, deterministic guardrails, structured outputs, and evaluation harnesses.',
      },
      {
        step: '03',
        title: 'Adaptive Streaming Interface Prototyping',
        description: 'Building non-modal interfaces with streaming token feedback, inline tool previews, and optimistic state.',
      },
      {
        step: '04',
        title: 'Observability, Latency & Evals',
        description: 'Continuous monitoring of model latency, token budgets, hallucination prevention, and completion benchmarks.',
      },
    ],
    heroImage: '/studio-assets/grid-ai-neural.png',
    secondaryImage: '/studio-assets/service-ai-detail.jpg',
    galleryImages: [
      '/studio-assets/service-ai-detail.jpg',
      '/studio-assets/project-lumen.jpg',
      '/studio-assets/service-digital-products-detail.jpg',
    ],
    featuredCaseSlug: 'intelligent-copilot-interface',
    featuredCaseTitle: 'Autonomous AI Copilot & Knowledge Surface',
    relatedProjectSlugs: ['intelligent-copilot-interface', 'intelligent-clinical-platform'],
  },
  {
    id: 'product-configurators',
    slug: 'product-configurators',
    number: '04',
    title: 'Automotive & Real Estate Product Customization',
    subtitle: 'Interactive configurators, product customization, visualization tools, selection systems and personalized digital experiences.',
    headline: 'Creating interactive tools that allow users to explore, configure and personalize products.',
    description: 'We engineer high-fidelity 3D and 2D product configurators that enable consumers to explore variations, inspect details with tactile realism, and purchase with total conviction.',
    philosophy: 'Personalization is the ultimate luxury. When customers see their unique aesthetic choices reflected in real-time ray-traced lighting, engagement transforms into ownership.',
    whyItMatters: 'Interactive 3D configurators dramatically elevate conversion rates, eliminate visual buyer hesitation, and seamlessly interface with automated manufacturing supply chains.',
    capabilities: [
      'Interactive configurators',
      'Product customization',
      'Visualization tools',
      'Selection systems',
      'Personalized digital experiences',
      'Real-time 3D PBR',
      'Combinatorial rule engines',
      'Interactive commerce',
      'BOM & CAD pass-through',
    ],
    deliverables: [
      'Production-Ready Real-Time 3D WebGL Configurator Engine',
      'Combinatorial Dependency Matrix & Validation Rule System',
      'Dynamic Bill of Materials (BOM) & Real-Time Price Computation Engine',
      'High-Res PBR Material Finish Swatches (Metals, Leathers, Carbons)',
      'Seamless E-Commerce, ERP & CAD Manufacturing Pass-Through',
    ],
    techStack: ['Three.js', 'Draco glTF Compression', 'WebGL 2.0 PBR', 'React 19', 'TypeScript', 'Tailwind CSS'],
    industryApplications: [
      { industry: 'Bespoke Automotive', application: 'Exterior/interior configuration with paint physics and rim selections.' },
      { industry: 'Luxury Watches & Jewelry', application: 'Macro-scale metal texture and gemstone refraction customizers.' },
      { industry: 'Industrial & Mechanical Hardware', application: 'Exploded assembly visualizers and tolerance specification tools.' },
      { industry: 'Architectural Millwork & Furniture', application: 'Parametric dimensional sizing and bespoke textile customizers.' },
    ],
    process: [
      {
        step: '01',
        title: 'BOM & Configuration Logic Architecture',
        description: 'Structuring combinatorial rules, material dependencies, pricing matrices, and compatibility constraints.',
      },
      {
        step: '02',
        title: 'Photorealistic PBR Asset Pipeline',
        description: 'Digitizing physical swatches into physically-based rendering textures with micro-surface displacement.',
      },
      {
        step: '03',
        title: 'Real-Time Interactive Engine',
        description: 'Building custom WebGL / WebGPU viewports with instant color changes, lighting rotation, and camera presets.',
      },
      {
        step: '04',
        title: 'Commerce & Production Pass-Through',
        description: 'Generating instant build sheets, dynamic PDF specs, and bidirectional ERP cart integration.',
      },
    ],
    heroImage: '/studio-assets/grid-product-config.jpg',
    secondaryImage: '/studio-assets/service-product-configurators-detail.jpg',
    galleryImages: [
      '/studio-assets/service-product-configurators-detail.jpg',
      '/studio-assets/project-form.jpg',
      '/studio-assets/project-aura.jpg',
    ],
    featuredCaseSlug: 'realtime-product-customizer',
    featuredCaseTitle: 'Tactile 3D Product Customizer',
    relatedProjectSlugs: ['realtime-product-customizer', 'automotive-spatial-configurator'],
  },
];

export const PROJECTS: ConceptExperienceItem[] = [
  {
    slug: 'automotive-spatial-configurator',
    title: 'Spatial Vehicle Configurator',
    subtitle: 'Real-Time 3D Automotive Customization',
    badge: 'ACHTREX CONCEPT',
    category: 'Automotive & Real-Time 3D',
    industry: 'Automotive',
    serviceId: 'product-configurators',
    year: '2025',
    heroImage: '/studio-assets/project-aura.jpg',
    secondaryImage: '/studio-assets/service-product-configurators-detail.jpg',
    galleryImages: [
      '/studio-assets/service-cgi-detail.jpg',
      '/studio-assets/service-product-configurators.jpg',
      '/studio-assets/service-cgi-immersive.jpg',
    ],
    shortDescription: 'A cinematic real-time vehicle exploration and configuration experience engineered with real-time 3D and WebGL visual precision across web, mobile, and interactive showroom displays.',
    challenge: 'How luxury automotive brands can move beyond static pre-rendered brochures to deliver visceral, interactive configuration experiences directly inside the web browser.',
    conceptArchitecture: 'Built on a modular WebGL rendering pipeline that streams progressive LOD geometry, dynamic environment maps, and physically-accurate metallic paint shaders responding dynamically to cursor position.',
    interactiveExperience: 'Seamless 360-degree orbital camera controls, interactive panel deconstruction, carbon weave customization, and real-time ray-traced lighting physics.',
    creativeDirection: 'Editorial dark-mode showroom aesthetic with high-contrast studio illumination, minimal monospace telemetry, and tactile controls.',
    technicalCapabilities: [
      'Real-Time PBR Shaders',
      'Three.js & WebGL Architecture',
      'Interactive Camera Choreography',
      'Low-Latency Asset Streaming',
      'Modular Configuration Logic',
    ],
    techStack: ['Three.js', 'WebGL 2.0', 'GLTF Draco Compression', 'Next.js 15', 'Tailwind CSS'],
    sceneMode: 'product-configurators',
    featuredOnHome: true,
    gridSpan: 'two-thirds',
  },
  {
    slug: 'architectural-spatial-experience',
    title: 'Architectural Spatial Walkthrough',
    subtitle: 'Virtual Real Estate & Lighting Simulation',
    badge: 'ACHTREX CONCEPT',
    category: 'Real Estate & 3D Architecture',
    industry: 'Real Estate',
    serviceId: 'product-configurators',
    year: '2025',
    heroImage: '/studio-assets/preview-008df38e.jpg',
    heroVideo: '/studio-assets/video-spatial-installation.mp4',
    secondaryImage: '/studio-assets/service-cgi-immersive.jpg',
    galleryImages: [
      '/studio-assets/service-cgi-immersive.jpg',
      '/studio-assets/project-sola.jpg',
      '/studio-assets/service-cgi-detail.jpg',
    ],
    shortDescription: 'An interactive digital property experience combining virtual architecture, volumetric daylight simulation, and immersive room navigation before physical ground is broken.',
    challenge: 'Demonstrating architectural scale, seasonal solar paths, and interior acoustic atmosphere to prospective global buyers without relying on passive pre-rendered videos.',
    conceptArchitecture: 'Procedural sun-angle math, physically-based interior materials, volumetric light scattering, and progressive level-of-detail asset streaming over standard broadband.',
    interactiveExperience: 'Glide between vantage points, toggle interior finishes from marble to brushed bronze, and simulate dawn-to-dusk sunlight trajectories with geometric accuracy.',
    creativeDirection: 'Monochromatic architectural HUD with minimal typographic wayfinding, spatial floorplan radar, and tactile room switching.',
    technicalCapabilities: [
      'Volumetric Light Scattering',
      'Dynamic Sun-Path Calculations',
      'Spatial Level-of-Detail Streaming',
      'Cross-Platform Touch & Orbit Controls',
    ],
    techStack: ['Three.js', 'WebGL 2.0', 'GLSL Custom Shaders', 'Next.js 15', 'Framer Motion'],
    sceneMode: 'cgi-immersive',
    featuredOnHome: true,
    gridSpan: 'one-third',
  },
  {
    slug: 'intelligent-copilot-interface',
    title: 'Autonomous AI Copilot & Knowledge Surface',
    subtitle: 'Contextual AI Interaction & Multimodal Telemetry',
    badge: 'ACHTREX CONCEPT',
    category: 'AI Interfaces & Enterprise Workspaces',
    industry: 'Artificial Intelligence',
    serviceId: 'ai-intelligent-experiences',
    year: '2025',
    heroImage: '/studio-assets/project-lumen.jpg',
    secondaryImage: '/studio-assets/service-ai-detail.jpg',
    galleryImages: [
      '/studio-assets/service-ai-intelligent.jpg',
      '/studio-assets/service-ai-detail.jpg',
      '/studio-assets/service-digital-products-detail.jpg',
    ],
    shortDescription: 'An intelligent digital surface designed around contextual AI collaboration, transforming high-velocity streaming data into actionable insights with zero cognitive clutter.',
    challenge: 'Modern enterprise analytics platforms inundate operators with disjointed dashboards, alert noise, and cryptic tabular datasets, causing decision paralysis.',
    conceptArchitecture: 'Distributed edge synchronization, streaming LLM token rendering, and agentic task orchestration with human-in-the-loop oversight and vector retrieval.',
    interactiveExperience: 'Adaptive typography scales dynamically to operator attention; proactive AI recommendations surface inline without interrupting user flow.',
    creativeDirection: 'Subtle midnight color system, high-contrast monospace typography, and rhythmic data visualizations engineered for sustained focus.',
    technicalCapabilities: [
      'Streaming Token Processing',
      'Agentic Task Orchestration',
      'RAG Knowledge Synthesis',
      'Zero-Latency Optimistic State',
      'Canvas Telemetry Rendering',
    ],
    techStack: ['Next.js 15', 'AI SDK & LangChain', 'WebSockets', 'Canvas 2D Engine', 'Tailwind CSS'],
    sceneMode: 'ai-intelligent-experiences',
    featuredOnHome: true,
    gridSpan: 'half',
  },
  {
    slug: 'interactive-storytelling-campaign',
    title: 'Nocturnal Brand Storytelling Experience',
    subtitle: 'Kinetic Typography & Audio-Reactive Media',
    badge: 'ACHTREX CONCEPT',
    category: 'Digital Marketing & Interactive Storytelling',
    industry: 'Digital Marketing',
    serviceId: 'creative-strategy',
    year: '2025',
    heroImage: '/studio-assets/project-afterdark.jpg',
    heroVideo: '/hero-videos/after-dark-cover.mp4',
    secondaryImage: '/studio-assets/service-creative-strategy-detail.jpg',
    galleryImages: [
      '/studio-assets/service-creative-strategy.jpg',
      '/studio-assets/service-creative-strategy-detail.jpg',
      '/studio-assets/service-cgi-immersive.jpg',
    ],
    shortDescription: 'A cinematic interactive campaign concept combining digital storytelling, CGI and brand experience, blending kinetic typography, reactive spatial audio, and nocturnal storytelling.',
    challenge: 'Traditional brand campaigns dissipate quickly on social feeds without generating genuine emotional immersion or lasting cultural resonance.',
    conceptArchitecture: 'Hardware-accelerated GLSL shader distortion, Web Audio procedural synthesis, and responsive scroll-driven narrative pacing.',
    interactiveExperience: 'A hypnotic sensory journey from twilight to dawn, reacting dynamically to device gyro, cursor speed, and ambient audio frequencies.',
    creativeDirection: 'High-contrast neo-grotesk typography paired with liquid chromatic refractions and midnight-gradient silhouettes.',
    technicalCapabilities: [
      'Audio-Reactive Synthesis',
      'GLSL Fragment Shaders',
      'Scroll-Linked Narrative Pacing',
      'Hardware-Accelerated Canvas',
    ],
    techStack: ['WebGL Shaders', 'Web Audio API', 'Framer Motion', 'Next.js 15', 'Tailwind CSS'],
    sceneMode: 'creative-strategy',
    featuredOnHome: true,
    gridSpan: 'half',
  },
  {
    slug: 'realtime-product-customizer',
    title: 'Tactile 3D Product Customizer',
    subtitle: 'Interactive Customization Engine & PBR Rendering',
    badge: 'ACHTREX CONCEPT',
    category: 'Retail & Product Configurators',
    industry: 'Retail & E-commerce',
    serviceId: 'product-configurators',
    year: '2025',
    heroImage: '/studio-assets/project-form.jpg',
    secondaryImage: '/studio-assets/preview-b2311f23-4s.jpg',
    galleryImages: [
      '/studio-assets/service-product-configurators.jpg',
      '/studio-assets/service-product-configurators-detail.jpg',
      '/studio-assets/service-cgi-detail.jpg',
    ],
    shortDescription: 'An interactive product exploration and customization environment providing tactile, millimeter-accurate 3D product customization with instantaneous constraint validation.',
    challenge: 'Bespoke consumer goods often lose conversion due to clunky 2D dropdown selectors that fail to show how chosen materials interact under physical light.',
    conceptArchitecture: 'Combinatorial configuration logic matrices, PBR material swatches with micro-surface displacement, and instantaneous build sheet generation.',
    interactiveExperience: 'Users grab, rotate, explode, and customize luxury industrial hardware with real-time anisotropic reflections and micro-surface roughness previews.',
    creativeDirection: 'Minimalist editorial interface with clean monospace dimensions, haptic-style selectors, and high-contrast studio illumination.',
    technicalCapabilities: [
      'Instantaneous Material Swapping',
      'Exploded View Assembly',
      'Dynamic Rule Evaluation',
      'PBR Surface Roughness Physics',
    ],
    techStack: ['Three.js', 'Draco Compression', 'WebGL 2.0 PBR', 'React 19', 'Tailwind CSS'],
    sceneMode: 'product-configurators',
    featuredOnHome: true,
    gridSpan: 'two-thirds',
  },
  {
    slug: 'intelligent-clinical-platform',
    title: 'Calm Healthcare & Clinical Surface',
    subtitle: 'Human-Centered Digital Product & Telemetry',
    badge: 'ACHTREX CONCEPT',
    category: 'Healthcare & Clinical Systems',
    industry: 'Healthcare',
    serviceId: 'digital-products',
    year: '2025',
    heroImage: '/studio-assets/project-careflow.jpg',
    secondaryImage: '/studio-assets/service-digital-products-detail.jpg',
    galleryImages: [
      '/studio-assets/service-digital-products.jpg',
      '/studio-assets/service-experience-design-detail.jpg',
      '/studio-assets/service-digital-products-detail.jpg',
    ],
    shortDescription: 'A human-centered digital healthcare experience focused on clarity, accessibility and intelligent interaction across complex clinical workflows.',
    challenge: 'Healthcare portals and medical systems consistently suffer from bureaucratic cognitive overload, high error rates in patient triage, and inaccessible interfaces.',
    conceptArchitecture: 'Strict WCAG 2.2 AAA accessibility architecture, encrypted client-side telemetry cache, and optimistic state updates.',
    interactiveExperience: 'Patients and clinicians glide through consultation booking, diagnostic record review, and biometric telemetry with total clarity and zero visual friction.',
    creativeDirection: 'Calm medical minimalism: high-contrast Swiss typography, spacious information cards, and soothing daylight color palettes.',
    technicalCapabilities: [
      'WCAG 2.2 AAA Accessibility',
      'Optimistic State Reconciliation',
      'Progressive Disclosure UX',
      'High-Density Data Ergonomics',
    ],
    techStack: ['Next.js 15', 'React Server Components', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    sceneMode: 'digital-products',
    featuredOnHome: true,
    gridSpan: 'half',
  },
  {
    slug: 'connected-hospitality-platform',
    title: 'Connected Hospitality Digital Journey',
    subtitle: 'Spatial Interaction & Flagship Guest Experience',
    badge: 'ACHTREX CONCEPT',
    category: 'Hospitality & Luxury Travel',
    industry: 'Hospitality',
    serviceId: 'creative-strategy',
    year: '2025',
    heroImage: '/studio-assets/preview-7e05b651.jpg',
    heroVideo: '/studio-assets/video-kinetic-sculpture.mp4',
    secondaryImage: '/studio-assets/service-experience-design.jpg',
    galleryImages: [
      '/studio-assets/service-experience-design.jpg',
      '/studio-assets/service-experience-design-detail.jpg',
      '/studio-assets/project-nova.jpg',
    ],
    shortDescription: 'A premium immersive hospitality experience combining architecture, storytelling and digital interaction, blending documentary cinematography with intuitive reservation architecture.',
    challenge: 'Luxury hospitality websites often resemble generic travel booking forms, divorcing the reservation process from the serenity and poetry of the physical destination.',
    conceptArchitecture: 'Unified design tokens bridging mobile viewports, guest room displays, and web platforms with micro-interaction feedback.',
    interactiveExperience: 'Guests explore archipelago weather, panoramic sunset villas, and culinary itineraries through continuous horizontal editorial scroll reveals.',
    creativeDirection: 'Quiet luxury aesthetics: generous whitespace, high-fashion typography, deep ocean hues, and subtle tactile motion.',
    technicalCapabilities: [
      'Omnichannel Design System',
      'Spatial Map Interactivity',
      'Fluid Motion Choreography',
      'Micro-Interaction Feedback',
    ],
    techStack: ['Next.js 15', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    sceneMode: 'experience-design',
    featuredOnHome: true,
    gridSpan: 'one-third',
  },
];

// Mapping helper to resolve legacy slugs seamlessly
export const LEGACY_SLUG_MAP: Record<string, string> = {
  'real-time-cgi-and-immersive-experiences': 'automotive-spatial-configurator',
  'realtime-cgi-and-immersive-experiences': 'automotive-spatial-configurator',
  'dodge-charger-ev-realtime-configurator': 'automotive-spatial-configurator',
  'aura-interactive-vehicle': 'automotive-spatial-configurator',
  'nova-immersive-property': 'architectural-spatial-experience',
  'lumen-intelligent-product': 'intelligent-copilot-interface',
  'after-dark-brand-campaign': 'interactive-storytelling-campaign',
  'form-product-customization': 'realtime-product-customizer',
  'careflow-digital-healthcare': 'intelligent-clinical-platform',
  'sora-digital-resort': 'connected-hospitality-platform',
};

export const STUDIO_VALUES = [
  {
    title: 'Technology + Creativity + Intelligence',
    description: 'We believe technology and creativity belong together. Code is our creative material, design is our structural discipline, and machine intelligence is our operational amplifier.',
  },
  {
    title: 'Restraint & Craftsmanship',
    description: 'We obsess over the invisible details: easing curves, sub-16ms latency budgets, typographic rhythm, and physically accurate rendering.',
  },
  {
    title: 'Experience Over Explanation',
    description: 'We do not build speculative presentations. We engineer tangible, interactive systems that demonstrate their own value through visceral user interaction.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Achim',
    role: 'Managing Director & Strategy',
    department: 'Leadership',
    image: '/team/achim_real.jpg',
  },
  {
    name: 'Dede',
    role: 'Head of Experience & Creative Direction',
    department: 'Design',
    image: '/team/dede_v2.jpg',
  },
  {
    name: 'Elvis',
    role: 'Head of Engineering & Systems',
    department: 'Technology',
    image: '/team/elvis_v2.jpg',
  },
  {
    name: 'Emmanuel',
    role: 'Lead Full-Stack Architect',
    department: 'Technology',
    image: '/team/emmanuel.jpg',
  },
  {
    name: 'Emmanuella',
    role: 'Design Systems & UI Specialist',
    department: 'Design',
    image: '/team/emmanuella_v2.jpg',
  },
  {
    name: 'Junior',
    role: '3D CGI & Interaction Developer',
    department: 'CGI & 3D',
    image: '/team/junior_real.jpg',
  },
  {
    name: 'Kelvin',
    role: 'Digital Strategist & Analytics Lead',
    department: 'Strategy',
    image: '/team/kelvin-davis.png',
  },
  {
    name: 'Kojo',
    role: 'Operations & Project Director',
    department: 'Operations',
    image: '/team/kojo_real.png',
  },
  {
    name: 'Rashid',
    role: 'Cloud Infrastructure & DevOps Engineer',
    department: 'Technology',
    image: '/team/rashid.png',
  },
];

export const STUDIO_OFFICES = [
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    role: 'Studio Headquarters & Digital Production',
    address: 'Dubai Silicon Oasis, Digital Park A5 Building, 6009, UAE',
    contact: 'support@achtrex.com',
    phone: '+971 50 222 9587',
  },
];
