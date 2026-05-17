'use server';

import { sql } from '@/lib/db';
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

    const executeInsert = async () => {
        await sql`
            INSERT INTO team_members (name, role, bio, email, image, salary, bank_details, start_date)
            VALUES (${name}, ${role}, ${bio}, ${email}, ${image}, ${salary}, ${bank_details}, ${start_date})
        `;
    };

    try {
        await executeInsert();
        revalidatePath('/admin/team');
        return { success: true };
    } catch (error: any) {
        console.error('Add team member error:', error);
        
        // Self-healing: If columns are missing, add them
        if (error.message && (error.message.includes('column "salary" does not exist') || error.message.includes('column "bank_details" does not exist'))) {
            try {
                console.log('Columns missing in team_members. Adding them...');
                await sql`ALTER TABLE team_members ADD COLUMN IF NOT EXISTS salary DECIMAL(10, 2)`;
                await sql`ALTER TABLE team_members ADD COLUMN IF NOT EXISTS bank_details TEXT`;
                await sql`ALTER TABLE team_members ADD COLUMN IF NOT EXISTS start_date VARCHAR(50)`;
                
                // Retry insert
                await executeInsert();
                revalidatePath('/admin/team');
                return { success: true };
            } catch (alterError: any) {
                console.error('Failed to alter team_members table:', alterError);
                return { error: `Failed to add missing columns: ${alterError.message}` };
            }
        }
        
        return { error: error.message || 'Failed to add team member' };
    }
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

    try {
        await sql`
            UPDATE team_members 
            SET name=${name}, role=${role}, bio=${bio}, email=${email}, image=${image}, 
                salary=${salary}, bank_details=${bank_details}, start_date=${start_date}
            WHERE id=${id}
        `;

        revalidatePath(`/admin/team/${id}`);
        revalidatePath('/admin/team');
        return { success: true };
    } catch (error: any) {
        console.error('Update team member error:', error);
        return { error: error.message || 'Failed to update team member' };
    }
}


export async function deleteTeamMember(id: number) {
    try {
        await sql`DELETE FROM team_members WHERE id = ${id}`;
        revalidatePath('/admin/team');
        return { success: true };
    } catch (error: any) {
        return { error: error.message || 'Failed to delete team member' };
    }
}

// Payroll Actions

export async function recordPayroll(teamMemberId: number, formData: FormData) {
    const amount = parseFloat(formData.get('amount') as string);
    const payment_date = formData.get('payment_date') as string || new Date().toISOString();
    const status = (formData.get('status') as string) || 'paid';
    const shouldSendEmail = formData.get('send_email') === 'on';

    const executeInsert = async () => {
        return await sql`
            INSERT INTO payroll_records (team_member_id, amount, payment_date, status)
            VALUES (${teamMemberId}, ${amount}, ${payment_date}, ${status})
            RETURNING id
        `;
    };

    let payrollId: number | null = null;

    try {
        const { rows } = await executeInsert();
        payrollId = rows[0].id;
    } catch (error: any) {
        console.error('Payroll error:', error);
        
        // Self-healing: If table doesn't exist, create it and retry
        if (error.message && error.message.includes('relation "payroll_records" does not exist')) {
            try {
                console.log('Table payroll_records missing. Creating it...');
                await sql`
                  CREATE TABLE IF NOT EXISTS payroll_records (
                    id SERIAL PRIMARY KEY,
                    team_member_id INTEGER REFERENCES team_members(id) ON DELETE CASCADE,
                    amount DECIMAL(10, 2) NOT NULL,
                    payment_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                    status VARCHAR(50) DEFAULT 'paid',
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                  )
                `;
                
                const { rows } = await executeInsert();
                payrollId = rows[0].id;
            } catch (createError: any) {
                console.error('Failed to auto-create payroll_records table:', createError);
                return { error: `Failed to auto-create table: ${createError.message}` };
            }
        } else {
            return { error: error.message || 'Failed to record payroll' };
        }
    }

    // 2. Fetch Member Details & Send Email if requested
    if (payrollId) {
        try {
            const { rows: memberRows } = await sql`SELECT * FROM team_members WHERE id = ${teamMemberId}`;
            const member = memberRows[0];

            if (shouldSendEmail && member && member.email) {
                await sendPayslipEmail(member, {
                    id: payrollId,
                    amount,
                    date: payment_date,
                    status
                });
            }
            
            revalidatePath(`/admin/team/${teamMemberId}`);
            return { success: true };
        } catch (emailError: any) {
            console.error('Failed to send payslip email:', emailError);
            revalidatePath(`/admin/team/${teamMemberId}`);
            return { success: true, warning: `Payroll recorded, but email failed to send: ${emailError.message}` };
        }
    }

    return { error: 'Failed to record payroll' };
}

export async function deletePayroll(id: number, teamMemberId: number) {
    try {
        await sql`DELETE FROM payroll_records WHERE id = ${id}`;
        revalidatePath(`/admin/team/${teamMemberId}`);
        return { success: true };
    } catch (error: any) {
        return { error: error.message || 'Failed to delete payroll' };
    }
}
