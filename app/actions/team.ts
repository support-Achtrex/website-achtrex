'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { sendPayslipEmail } from '@/lib/email';

export async function addTeamMember(formData: FormData) {
    const name = formData.get('name') as string;
    const role = formData.get('role') as string;
    const bio = formData.get('bio') as string;
    const email = formData.get('email') as string;
    const image = (formData.get('image') as string) || '/team/placeholder-user.jpg';

    // HR fields
    const salary = formData.get('salary') ? parseFloat(formData.get('salary') as string) : null;
    const bank_details = formData.get('bank_details') as string;
    const start_date = formData.get('start_date') as string;

    await sql`
        INSERT INTO team_members (name, role, bio, email, image, salary, bank_details, start_date)
        VALUES (${name}, ${role}, ${bio}, ${email}, ${image}, ${salary}, ${bank_details}, ${start_date})
    `;

    revalidatePath('/admin/team');
}

export async function updateTeamMember(id: number, formData: FormData) {
    const name = formData.get('name') as string;
    const role = formData.get('role') as string;
    const bio = formData.get('bio') as string;
    const email = formData.get('email') as string;
    const image = formData.get('image') as string;
    const salary = formData.get('salary') ? parseFloat(formData.get('salary') as string) : null;
    const bank_details = formData.get('bank_details') as string;
    const start_date = formData.get('start_date') as string;

    await sql`
        UPDATE team_members 
        SET name=${name}, role=${role}, bio=${bio}, email=${email}, image=${image}, 
            salary=${salary}, bank_details=${bank_details}, start_date=${start_date}
        WHERE id=${id}
    `;

    revalidatePath(`/admin/team/${id}`);
    revalidatePath('/admin/team');
}


export async function deleteTeamMember(id: number) {
    await sql`DELETE FROM team_members WHERE id = ${id}`;
    revalidatePath('/admin/team');
}

// Payroll Actions

export async function recordPayroll(teamMemberId: number, formData: FormData) {
    const amount = parseFloat(formData.get('amount') as string);
    const payment_date = formData.get('payment_date') as string || new Date().toISOString();
    const status = (formData.get('status') as string) || 'paid';
    const shouldSendEmail = formData.get('send_email') === 'on';

    // 1. Insert Record
    const { rows } = await sql`
        INSERT INTO payroll_records (team_member_id, amount, payment_date, status)
        VALUES (${teamMemberId}, ${amount}, ${payment_date}, ${status})
        RETURNING id
    `;
    const payrollId = rows[0].id;

    // 2. Fetch Member Details
    const { rows: memberRows } = await sql`SELECT * FROM team_members WHERE id = ${teamMemberId}`;
    const member = memberRows[0];

    // 3. Send Email if requested
    if (shouldSendEmail && member && member.email) {
        try {
            await sendPayslipEmail(member, {
                id: payrollId,
                amount,
                date: payment_date,
                status
            });
        } catch (error) {
            console.error('Failed to send payslip email:', error);
            // We don't rollback the transaction, just log the error
        }
    }

    revalidatePath(`/admin/team/${teamMemberId}`);
    return { success: true };
}

export async function deletePayroll(id: number, teamMemberId: number) {
    await sql`DELETE FROM payroll_records WHERE id = ${id}`;
    revalidatePath(`/admin/team/${teamMemberId}`);
}
