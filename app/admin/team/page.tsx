import React from 'react';

import { createClient } from '@/utilities/supabase/server';
import TeamPageClient from '@/components/admin/team-page-client';

interface TeamMember {
    id: string;
    name: string;
    email: string;
    role: string;
    image: string | null;
}

const TeamPage = async () => {
    const supabase = await createClient();
    
    const { data: teamMembers, error } = await supabase
        .from('teams')
        .select('*')
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Error fetching team members:', error);
    }

    return (
        <TeamPageClient initialMembers={teamMembers || []} />
    );
};

export default TeamPage;

