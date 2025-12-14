import React from 'react';
import Link from 'next/link';
import { createClient } from '@/utilities/supabase/server';

interface TeamMember {
    id: string;
    name: string;
    email: string;
    role: string;
    image: string | null;
}

const TeamOverview = async () => {
    const supabase = await createClient();
    
    const { data: teamMembers } = await supabase
        .from('teams')
        .select('*')
        .order('created_at', { ascending: true })
        .limit(4);

    return (
        <div className="rounded-3xl p-px bg-linear-to-br from-gray-200 to-gray-50">
            <div className="bg-white rounded-[23px] p-6 h-full">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-800 font-display">Team Members</h3>
                    <Link href="/admin/team" className="text-xs font-medium text-primary hover:underline font-manrope">
                        View All
                    </Link>
                </div>

                <div className="space-y-4">
                    {teamMembers?.map((member: TeamMember) => (
                        <div key={member.id} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-100">
                                {member.image ? (
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-linear-to-br from-primary/80 to-primary/40 flex items-center justify-center text-white font-bold text-xs">
                                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-gray-800 truncate font-manrope">{member.name}</h4>
                                <p className="text-xs text-gray-500 truncate font-manrope">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamOverview;

