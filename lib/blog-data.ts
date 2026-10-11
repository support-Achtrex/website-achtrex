export interface BlogPost {
    id: string;
    slug: string;
    category: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "studio-1",
        slug: "future-of-realtime-3d-web-experiences",
        category: "Creative Technology",
        title: "The Future of Real-Time 3D and Spatial Web Experiences",
        date: "October 02, 2026",
        image: "/studio-assets/service-product-configurators.jpg",
        excerpt: "How real-time WebGL, Three.js shaders, and GPU acceleration are transforming brand immersion from static pages to interactive spatial worlds.",
        content: "<p class=\"text-xl text-slate-600 font-medium leading-relaxed mb-8\">Digital experience design is reaching an inflection point. As browser rendering engines and WebGL pipelines mature, websites are transitioning from flat document layouts to dynamic, tactile spatial playgrounds.</p><p class=\"mb-6 text-slate-700 leading-relaxed\">At Achtrex, we approach real-time 3D not as a gimmick, but as an editorial storytelling medium. When lighting, physical materials, and camera choreography respond fluidly to user intent, digital interfaces create profound emotional resonance.</p>"
    },
    {
        id: "studio-2",
        slug: "designing-contextual-ai-interfaces",
        category: "AI & Experience",
        title: "Designing Contextual AI Interfaces: Beyond the Chatbox",
        date: "September 24, 2026",
        image: "/studio-assets/service-ai-intelligent-experiences.jpg",
        excerpt: "Why the future of artificial intelligence interfaces lies in generative, adaptive UI components rather than generic conversational prompts.",
        content: "<p class=\"text-xl text-slate-600 font-medium leading-relaxed mb-8\">Text prompts are only the first rudimentary step in interacting with machine intelligence. The next generation of digital products presents dynamic UI states that synthesize and reshape themselves in real time.</p><p class=\"mb-6 text-slate-700 leading-relaxed\">By combining predictive models with design systems, we craft intelligent environments where controls, typography, and visualizations evolve proactively to match the user's focus.</p>"
    },
    {
        id: "studio-3",
        slug: "crafting-design-systems-for-high-velocity-teams",
        category: "Design Systems",
        title: "Crafting High-Velocity Design Systems for Global Brands",
        date: "September 15, 2026",
        image: "/studio-assets/service-experience-design.jpg",
        excerpt: "Bridging the gap between creative art direction and robust engineering architectures with modular token architectures.",
        content: "<p class=\"text-xl text-slate-600 font-medium leading-relaxed mb-8\">A design system is only as powerful as its velocity in production. Aligning typography hierarchies, motion curves, and layout rhythms creates cohesive digital experiences across every touchpoint.</p><p class=\"mb-6 text-slate-700 leading-relaxed\">When design tokens are mathematically harmonized, creative teams and engineering squads build with unprecedented confidence and craft.</p>"
    }
];
