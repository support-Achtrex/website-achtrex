
import React from 'react';
import { notFound } from 'next/navigation';
import { sql } from '@vercel/postgres';
import { TeamManager } from '@/components/admin/team/TeamManager';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function TeamMemberPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const { id } = params;

    let member;
    let payrollHistory = [];

    try {
        console.log(`Debug: Fetching team member with ID: ${id}`);
        const { rows } = await sql`SELECT * FROM team_members WHERE id = ${id}`;
        if (rows.length === 0) {
            console.log(`Debug: No team member found for ID: ${id}`);
            notFound();
        }
        member = rows[0];

        const { rows: history } = await sql`SELECT * FROM payroll_records WHERE team_member_id = ${id} ORDER BY payment_date DESC`;
        payrollHistory = history;

    } catch (error) {
        console.error('Error details querying team member:', error);
        notFound();
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/admin/team" className="p-2 rounded-full hover:bg-white transition-colors text-gray-400 hover:text-gray-900 border border-transparent hover:border-gray-200">
                    <ArrowLeft size={20} />
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Manage Team Member</h1>
            </div>

            <TeamManager member={member} payrollHistory={payrollHistory} />
        </div>
    );
}
