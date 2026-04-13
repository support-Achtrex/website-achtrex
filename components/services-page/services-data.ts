import { Smartphone, Globe, LayoutTemplate, TrendingUp, MessageSquareCode, Video, Printer, Car, Bot } from 'lucide-react';

export const productsData = [
    {
        id: 'automotive-data',
        icon: Car,
        title: 'AutomotiveDataset.com',
        description: 'A massive vehicle intelligence API providing 2.5M+ records, VIN-to-Build-Sheet data, and recall databases for the global mobility market.',
        details: {
            overview: "A comprehensive verification platform delivering granular life-cycle data and historical vehicle records via a high-performance API.",
            features: [
                "VIN-to-Build-Sheet Decoding",
                "Odometer & Service History",
                "Real-time Recall Database",
                "Global Stock Imagery API"
            ],
            technologies: ["Next.js", "PostgreSQL", "Python", "AWS"]
        },
        highlighted: true
    },
    {
        id: 'ai-platform',
        icon: Bot,
        title: 'LUMI // Communications Platform',
        description: 'LUMI is a unified communications platform designed to power intelligent interactions and automate complex enterprise workflows.',
        details: {
            overview: "A cross-platform cognitive ecosystem for messaging, voice, video, and autonomous business logic.",
            features: [
                "Instant Messaging & Presence",
                "Voice & Video Conferencing",
                "Workflow SDK & Integrations",
                "Real-time Insights & NLP"
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
