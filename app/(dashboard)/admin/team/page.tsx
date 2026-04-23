import React from 'react';
import { sql } from '@vercel/postgres';
import { Plus, Trash2 } from 'lucide-react';
import { addTeamMember, deleteTeamMember } from '@/app/actions/team';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function TeamPage() {
    let teamMembers: any[] = [];
    try {
        const { rows } = await sql`SELECT * FROM team_members ORDER BY created_at ASC`;
        teamMembers = rows;
    } catch (error) {
        console.error('Error fetching team:', error);
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Team Management</h1>
                    <p className="text-gray-500 text-sm">Add or remove team members from the About page.</p>
                </div>
            </div>

            {/* Add Member Form */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Add New Member</h3>
                <form action={addTeamMember} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="name" placeholder="Full Name" required className="p-3 border rounded-xl" />
                    <input name="role" placeholder="Role (e.g. CEO)" required className="p-3 border rounded-xl" />
                    <input name="email" placeholder="Email" required className="p-3 border rounded-xl" />
                    <input name="image" placeholder="Image Path (e.g. /team/name.jpg)" className="p-3 border rounded-xl" />
                    <textarea name="bio" placeholder="Short Bio" className="p-3 border rounded-xl md:col-span-2 h-24 resize-none" />
                    <div className="md:col-span-2">
                        <button type="submit" className="bg-primary text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors">
                            <Plus size={18} /> Add Member
                        </button>
                    </div>
                </form>
            </div>

            {/* Team List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                    <div key={member.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4 group">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden relative">
                                    <Image
                                        src={member.image || '/team/placeholder-user.jpg'}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{member.name}</h4>
                                    <p className="text-xs text-gray-500">{member.role}</p>
                                </div>
                            </div>
                            <form action={deleteTeamMember.bind(null, member.id)}>
                                <button className="text-gray-400 hover:text-red-500 transition-colors">
                                    <Trash2 size={18} />
                                </button>
                            </form>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">{member.bio}</p>

                        <div className="pt-2 border-t border-gray-50 flex justify-end">
                            <a href={`/admin/team/${member.id}`} className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">
                                Manage & Payroll &rarr;
                            </a>
                        </div>
                    </div>
                ))}
                {teamMembers.length === 0 && (
                    <div className="col-span-full text-center py-12 text-gray-400 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        No team members found. Add one above.
                    </div>
                )}
            </div>
        </div>
    );
}

