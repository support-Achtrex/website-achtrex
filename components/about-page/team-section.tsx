import React from 'react';
import { sql } from '@vercel/postgres';
import { TeamGrid } from './team-grid';

export const TeamSection = async () => {
    let teamMembers: any[] = [];

    try {
        const { rows } = await sql`SELECT * FROM team_members ORDER BY id ASC`;
        teamMembers = rows;
    } catch (error) {
        console.error("Failed to fetch team members:", error);
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
