'use client';

import { motion } from 'framer-motion';

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export function ServiceCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <motion.div
            variants={cardVariants}
            className="
                flex
                flex-col
                items-start
                text-left
                h-full
                p-6
            "
        >
            {/* Icon */}
            <div className="mb-6 inline-block">
                <div className="p-[10px] rounded-full bg-gradient-to-b from-[#0066FF] to-[#0066FF40]">
                    <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                        {icon}
                    </div>
                </div>
            </div>

            <h3 className="font-manrope font-bold text-3xl mb-4 text-gray-900">
                {title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
                {description}
            </p>
        </motion.div>
    );
}

export const ServicesList = () => {
    const services = [
        {
            icon: <img src="/services-page/app-dev.png" alt="App Development" className="w-12 h-12 object-contain" />,
            title: 'App Development',
            description: 'We build apps that blend performance, beauty, and usability. Our team at AchTech designs and develops mobile applications for iOS, Android, and cross-platform environments, focusing on creating smooth, engaging experiences that meet both user needs and business goals. From backend integration to interface design, we ensure every app is robust, scalable, and aligned with your digital strategy.'
        },
        {
            icon: <img src="/services-page/web-dev.png" alt="Web Development" className="w-12 h-12 object-contain" />,
            title: 'Web Development',
            description: 'We build responsive, high-performing websites tailored to your brand\'s identity and audience. From concept to code, every detail is designed to express your uniqueness and elevate your digital presence. We combine strategy, creativity, and technical precision to create websites that don\'t just look good but work hard for your business.'
        },
        {
            icon: <img src="/services-page/ui-ux.png" alt="UI/UX Design" className="w-12 h-12 object-contain" />,
            title: 'UI/UX Design',
            description: 'Great design is more than aesthetics; it\'s about how users feel and interact. We craft intuitive interfaces and thoughtful user journeys that connect people to your product effortlessly. Through user research, wireframes, and prototypes, we transform ideas into designs that delight and convert. Our approach focuses on accessibility, responsiveness, and clarity.'
        },
        {
            icon: <img src="/services-page/seo.png" alt="Digital Marketing Specialist" className="w-12 h-12 object-contain" />,
            title: 'Digital Marketing Specialist',
            description: 'We help brands grow through data-driven visibility. Our Digital Marketing service ensures your digital presence ranks higher, reaches further, and performs better. We handle on-page optimization, keyword strategy, and site performance tracking to help you attract the right audience. With insights from advanced analytics tools, we refine strategies to boost engagement, increase conversions, and maximize your return on investment.'
        },
        {
            icon: <img src="/services-page/consultation.png" alt="IT Consultation" className="w-12 h-12 object-contain" />,
            title: 'IT Consultation',
            description: 'We guide your business toward smarter digital decisions. We offer IT consulting that bridges strategy with technology. Whether you\'re scaling operations, migrating systems, or integrating new technologies, our consultants provide clarity, direction, and technical expertise to move your business forward confidently.'
        },
        {
            icon: <img src="/service/videography.png" alt="Visual Content" className="w-12 h-12 object-contain" />,
            title: 'Visual Content',
            description: 'We provide professional videography and photography services to elevate your brand\'s visual identity. From corporate shoots to creative campaigns, we ensure your brand looks its best.'
        },
        {
            icon: <img src="/service/print.png" alt="Printing Services" className="w-12 h-12 object-contain" />,
            title: 'Printing Services',
            description: 'High-quality printing services for all your business needs. From brochures and business cards to large-format prints, we deliver crisp, professional results.'
        }
    ];

    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
