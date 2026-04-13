import React from 'react';
import { sql } from '@vercel/postgres';
import { TeamGrid } from './team-grid';

// Fallback data in case DB is empty or not initialized
const FALLBACK_TEAM = [
    {
        id: 1,
        name: 'Achim Godwin Tetteh',
        role: 'Operations Project Manager',
        image: '/team/achim_real.jpg',
        bio: 'Leading the vision and operations at Achtrex, driving innovation in digital product development.',
        linkedin: '#',
        twitter: '#',
        email: 'achim@achtrex.com'
    },
    {
        id: 2,
        name: 'Emmanuella Yeboah-Appiah',
        role: 'CFO',
        image: '/team/emmanuella_v2.jpg',
        bio: 'Steering the financial strategy and ensuring sustainable growth for our global operations.',
        linkedin: '#',
        twitter: '#',
        email: 'emmanuella@achtrex.com'
    },
    {
        id: 3,
        name: 'Kojo Thompson',
        role: 'SEO & ASO',
        image: '/team/kojo_real.png',
        bio: 'Optimizing digital presence and driving organic growth through advanced search strategies.',
        linkedin: '#',
        twitter: '#',
        email: 'kojo@achtrex.com'
    },
    {
        id: 4,
        name: 'Junior Achim',
        role: 'Business Analyst and QA',
        image: '/team/junior_real.jpg',
        bio: 'Ensuring product quality and aligning business strategies with technical execution.',
        linkedin: '#',
        twitter: '#',
        email: 'junior@achtrex.com'
    },
    {
        id: 5,
        name: 'Rashid Ahmed',
        role: 'Backend Developer',
        image: '/team/rashid.png',
        bio: 'Architecting scalable server-side solutions and robust APIs that power our high-performance applications.',
        linkedin: '#',
        twitter: '#',
        email: 'rashid@achtrex.com'
    },
    {
        id: 6,
        name: 'Kelvin Davis',
        role: 'Software Engineer',
        image: '/team/kelvin-davis.png',
        bio: 'Building robust, scalable software solutions with a focus on code quality and performance optimization.',
        linkedin: '#',
        twitter: '#',
        email: 'kelvin@achtrex.com'
    },
    {
        id: 7,
        name: 'Dede Davis',
        role: 'DevOps Engineer',
        image: '/team/dede_v2.jpg',
        bio: 'Streamlining deployment pipelines and ensuring maximum system reliability and uptime.',
        linkedin: '#',
        twitter: '#',
        email: 'dede@achtrex.com'
    }
];

export const TeamSection = async () => {
    let teamMembers: any[] = [];

    try {
        const { rows } = await sql`SELECT * FROM team_members ORDER BY id ASC`;
        teamMembers = rows;
    } catch (error) {
        console.error("Failed to fetch team members:", error);
    }

    // FORCE FIX: Ensure specific team member data is correct
    if (teamMembers && teamMembers.length > 0) {
        teamMembers = teamMembers.map(member => {
            let updatedMember = { ...member };

            // Fix Achim's role
            if (member.name === 'Achim Godwin Tetteh') {
                updatedMember.role = 'Operations Project Manager';
            }

            // Remove Dr. prefix from Emmanuella (or anyone else)
            if (updatedMember.name && updatedMember.name.startsWith('Dr. ')) {
                updatedMember.name = updatedMember.name.replace('Dr. ', '');
            }

            return updatedMember;
        });
    }

    // Use fallback if DB is empty
    if (!teamMembers || teamMembers.length === 0) {
        console.log("Using fallback team data due to empty DB");
        teamMembers = FALLBACK_TEAM;
    }

    return (
        <section className="pt-40 pb-24 bg-[image:var(--bg-dark-blue)] relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-mesh opacity-10 pointer-events-none" />
            {/* Hero Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="text-sm font-semibold text-primary tracking-widest uppercase">Our Leadership</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
                        The minds behind the <br /> <span className="text-gradient">innovation</span>.
                    </h1>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
                        We are a diverse team of visionaries, builders, and strategists united by a single purpose: to redefine what's possible in the digital age.
                    </p>
                </div>

                <TeamGrid members={teamMembers} />
            </div>
        </section>
    );
};
