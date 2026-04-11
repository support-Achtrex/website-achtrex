import { Smartphone, Globe, LayoutTemplate, TrendingUp, MessageSquareCode, Video, Printer, Car, Bot } from 'lucide-react';

export const productsData = [
    {
        id: 'automotive-data',
        icon: Car,
        title: 'Automotive Data Platform',
        description: 'Our flagship product providing structured vehicle data for developers, businesses, and mobility platforms. The platform enables seamless access to vehicle data through APIs and datasets.',
        details: {
            overview: "A comprehensive verification platform integrating with global vehicle databases (NMVTIS) and auction APIs.",
            features: [
                "Structured vehicle data",
                "API integration",
                "Global brand coverage",
                "Built for developers"
            ],
            technologies: ["Next.js", "PostgreSQL", "Python", "AWS"]
        },
        highlighted: true
    },
    {
        id: 'ai-platform',
        icon: Bot,
        title: 'AI Platform (Coming Soon)',
        description: 'Achtrex is developing AI-powered chatbot and automation tools designed to deliver intelligent insights and enhance digital experiences across industries.',
        details: {
            overview: "Architecting advanced AI tools to create seamless, intelligent digital experiences.",
            features: [
                "Conversational AI",
                "Intelligent automation",
                "Scalable deployment"
            ],
            technologies: ["OpenAI", "LangChain", "Vector Databases", "Node.js"]
        }
    }
];

export const capabilitiesData = [
    {
        id: 'product-engineering',
        icon: Smartphone,
        title: 'Product Engineering',
        description: 'Our platforms are built using modern product engineering practices to ensure scalability, reliability, and performance.',
        details: {
            overview: "We engineer systems that don't just work, but scale with your ambition.",
            features: [
                "Scalable System Design",
                "Robust core engines",
                "High-performance code",
                "Cloud infrastructure"
            ],
            technologies: ["React", "TypeScript", "Node.js", "AWS"]
        }
    },
    {
        id: 'ui-ux-design',
        icon: LayoutTemplate,
        title: 'Intuitive Design',
        description: 'We design intuitive and user-friendly interfaces that enhance interaction with data-driven platforms.',
        details: {
            overview: "Human-centric design applied to technical data platforms.",
            features: [
                "User Journey Mapping",
                "Iterative Prototyping",
                "Visual Systems",
                "Accessibility"
            ],
            technologies: ["Figma", "Framer", "React"]
        }
    },
    {
        id: 'strategic-growth',
        icon: TrendingUp,
        title: 'Strategic Growth',
        description: 'Our solutions enable businesses to leverage data and AI to build smarter digital products.',
        details: {
            overview: "Converting technical data into business leverage.",
            features: [
                "Data Strategy",
                "AI implementation",
                "Market analytics",
                "Roadmap planning"
            ],
            technologies: ["Python", "Segment", "Google Cloud"]
        }
    }
];

// For backward compatibility during migration if needed
export const servicesData = [...productsData, ...capabilitiesData];
