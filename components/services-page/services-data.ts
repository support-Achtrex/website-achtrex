import { Travel, Chat, ColorPalette, Rocket, Sphere } from '@nobertdev/react-3d-icons/fc';

export const productsData = [
    {
        id: 'automotive-software',
        icon: Travel,
        title: 'Automotive Software Builds',
        description: 'Full-cycle custom engineering for dealership systems, workshop management, bay scheduling, and fleet operations.',
        details: {
            overview: "Bespoke automotive software architectures tailored specifically to modern workshops, dealership networks, and fleet systems with 100% client code ownership.",
            features: [
                "Dealership Management & Inventory Portals",
                "Workshop & Bay Operations Schedulers",
                "Fleet Maintenance & Telemetry Systems",
                "Custom Mobile & Cloud Automotive Apps"
            ],
            technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS / Docker"]
        },
        highlighted: true
    },
    {
        id: 'cognitive-ai',
        icon: Chat,
        title: 'Cognitive AI Solutions',
        description: 'Domain-trained cognitive AI models for multimodal vehicle diagnostics, acoustic analysis, and predictive maintenance.',
        details: {
            overview: "Specialized automotive intelligence engines that empower technicians, optimize repair procedures, and automate complex diagnostic logic.",
            features: [
                "AAIA Multi-Modal Vehicle Diagnostics",
                "Acoustic & Vibration Defect Analysis",
                "Autonomous Repair Recommendation Logic",
                "Predictive Component Failure Detection"
            ],
            technologies: ["PyTorch", "Python", "Vector Databases", "LangChain"]
        }
    },
    {
        id: 'automotive-consultation',
        icon: Sphere,
        title: 'Automotive Consultation',
        description: 'Strategic advisory for businesses, manufacturers, dealerships, and individuals across diagnostics, repair workflows, and operations.',
        details: {
            overview: "Hands-on strategic and technical advisory guiding automotive enterprises through workflow modernization, technology stack selection, and operational efficiency.",
            features: [
                "Workshop Workflow & Bay Modernization",
                "Dealership Technology Strategy & Audits",
                "Diagnostic Operations & Process Optimization",
                "Business Scaling & Technical Architecture"
            ],
            technologies: ["Systems Auditing", "Workflow Analysis", "Architecture Design"]
        }
    }
];

export const capabilitiesData = [
    {
        id: 'product-engineering',
        icon: Sphere,
        title: 'Custom Engineering',
        description: 'Our software builds use modern engineering standards to ensure bulletproof reliability, modularity, and high-load performance.',
        details: {
            overview: "We engineer systems that don't just work, but scale with your business operations.",
            features: [
                "Scalable Architecture Design",
                "Robust Automotive Engines",
                "High-Performance Code",
                "Cloud & Edge Infrastructure"
            ],
            technologies: ["React", "TypeScript", "Node.js", "AWS"]
        }
    },
    {
        id: 'ui-ux-design',
        icon: ColorPalette,
        title: 'Intuitive Design',
        description: 'We design intuitive and technician-friendly interfaces that enhance interaction with complex automotive software platforms.',
        details: {
            overview: "Human-centric design applied to technical automotive workflows and shop management platforms.",
            features: [
                "User Journey Mapping",
                "Iterative Prototyping",
                "Visual Design Systems",
                "Workshop Accessibility"
            ],
            technologies: ["Figma", "Framer", "React"]
        }
    },
    {
        id: 'strategic-growth',
        icon: Rocket,
        title: 'Strategic Growth',
        description: 'Our advisory solutions enable businesses to leverage modern software and AI to maximize operational efficiency and margins.',
        details: {
            overview: "Converting technical innovation and operational rigor into measurable business leverage.",
            features: [
                "Operational Roadmapping",
                "AI Implementation Strategy",
                "Market & Process Analytics",
                "Shop Floor Optimization"
            ],
            technologies: ["Python", "Segment", "Google Cloud"]
        }
    }
];

// For backward compatibility during migration if needed
export const servicesData = [...productsData, ...capabilitiesData];
