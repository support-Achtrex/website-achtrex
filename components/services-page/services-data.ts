import { Smartphone, Globe, LayoutTemplate, TrendingUp, MessageSquareCode, Video, Printer } from 'lucide-react';

export const servicesData = [
    {
        id: 'app-dev',
        icon: Smartphone,
        title: 'App Development',
        description: 'We build native and cross-platform mobile apps that blend high performance with intuitive design. From iOS to Android, we create seamless digital experiences that engage users and drive business growth.',
        details: {
            overview: "Our mobile app development service covers the entire lifecycle of your application, from concept to deployment. We specialize in creating high-performance, scalable, and visually stunning apps for iOS and Android.",
            features: [
                "Native iOS & Android Development",
                "Cross-Platform Solutions (Flutter, React Native)",
                "UI/UX Design for Mobile",
                "App Store Optimization (ASO)",
                "Maintenance & Support"
            ],
            technologies: ["Swift", "Kotlin", "Flutter", "React Native", "Firebase"]
        },
        highlighted: true
    },
    {
        id: 'web-dev',
        icon: Globe,
        title: 'Web Development',
        description: 'Responsive, scalable, and SEO-optimized websites tailored to your brand. We utilize modern frameworks like Next.js and React to deliver lightning-fast web experiences that convert visitors into customers.',
        details: {
            overview: "We create websites that are not just digital brochures but powerful business tools. Our focus is on performance, SEO, and user conversion, ensuring your site works as hard as you do.",
            features: [
                "Custom Website Design",
                "E-commerce Solutions",
                "CMS Development",
                "Progressive Web Apps (PWA)",
                "API Integration"
            ],
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"]
        }
    },
    {
        id: 'ui-ux',
        icon: LayoutTemplate,
        title: 'UI/UX Design',
        description: 'Design that speaks. We craft user-centric interfaces and thoughtful journeys. Through research, wireframing, and prototyping, we turn complex logic into simple, beautiful, and accessible designs.',
        details: {
            overview: "User experience is at the heart of everything we do. We design interfaces that are intuitive, accessible, and delightful to use, ensuring your users have a seamless journey.",
            features: [
                "User Research & Personas",
                "Wireframing & Prototyping",
                "Visual Design Systems",
                "Usability Testing",
                "Interaction Design"
            ],
            technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle"]
        }
    },
    {
        id: 'digital-marketing',
        icon: TrendingUp,
        title: 'Digital Marketing',
        description: 'Data-driven strategies to boost your online visibility. We specialize in SEO, content strategy, and performance analytics to ensure your brand reaches the right audience at the right time.',
        details: {
            overview: "Make your brand seen and heard. Our data-driven marketing strategies are designed to increase your reach, engagement, and conversion rates across all digital channels.",
            features: [
                "Search Engine Optimization (SEO)",
                "Social Media Marketing",
                "Content Strategy & Creation",
                "Pay-Per-Click (PPC) Advertising",
                "Email Marketing Campaigns"
            ],
            technologies: ["Google Analytics", "Semrush", "HubSpot", "Meta Ads", "Google Ads"]
        }
    },
    {
        id: 'it-consultation',
        icon: MessageSquareCode,
        title: 'IT Consultation',
        description: 'Strategic guidance for your digital transformation. Whether migrating to the cloud or optimizing legacy systems, our experts provide the technical roadmap you need to scale confidently.',
        details: {
            overview: "Navigate the complex landscape of technology with confidence. We provide expert advice and strategic planning to help you leverage technology for business growth.",
            features: [
                "Digital Transformation Strategy",
                "Cloud Migration Planning",
                "IT Infrastructure Audit",
                "Cybersecurity Assessment",
                "Technology Stack Selection"
            ],
            technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
        }
    },
    {
        id: 'visual-content',
        icon: Video,
        title: 'Visual Content',
        description: 'Professional videography and motion graphics to tell your brand\'s story. We create compelling visual assets that capture attention and elevate your marketing campaigns.',
        details: {
            overview: "Visual storytelling is the most powerful way to connect with your audience. We produce high-quality video and motion content that captures the essence of your brand.",
            features: [
                "Corporate Video Production",
                "Motion Graphics & Animation",
                "Product Photography",
                "Event Coverage",
                "Post-Production & Editing"
            ],
            technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Final Cut Pro"]
        }
    },
    {
        id: 'printing',
        icon: Printer,
        title: 'Printing Services',
        description: 'High-quality corporate printing solutions. From premium business cards to large-format displays, we ensure your physical brand materials are as impressive as your digital ones.',
        details: {
            overview: "Extend your brand into the physical world. Our premium printing services ensure your marketing collateral leaves a lasting impression.",
            features: [
                "Business Cards & Stationery",
                "Brochures & Flyers",
                "Large Format Printing",
                "Packaging Design",
                "Promotional Merchandise"
            ],
            technologies: ["Offset Printing", "Digital Printing", "Screen Printing", "UV Coating", "Embossing"]
        }
    }
];
