'use server';

import { sql } from '@/lib/db';
import { revalidatePath } from 'next/cache';

// Notes
export async function addNote(subscriberId: number, content: string) {
    if (!content) return { error: 'Note content is required' };
    try {
        await sql`
            INSERT INTO client_notes (subscriber_id, content)
            VALUES (${subscriberId}, ${content})
        `;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error: any) {
        console.error('Add note error:', error);
        
        // Self-healing: If table doesn't exist, create it and retry
        if (error.message && error.message.includes('relation "client_notes" does not exist')) {
            try {
                console.log('Table client_notes missing. Creating it...');
                await sql`
                  CREATE TABLE IF NOT EXISTS client_notes (
                    id SERIAL PRIMARY KEY,
                    subscriber_id INTEGER REFERENCES subscribers(id) ON DELETE CASCADE,
                    content TEXT NOT NULL,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                  )
                `;
                // Retry the insert
                await sql`
                    INSERT INTO client_notes (subscriber_id, content)
                    VALUES (${subscriberId}, ${content})
                `;
                revalidatePath(`/admin/subscribers/${subscriberId}`);
                return { success: true };
            } catch (createError: any) {
                console.error('Failed to auto-create client_notes table:', createError);
                return { error: `Failed to auto-create table: ${createError.message}` };
            }
        }
        
        return { error: error.message || 'Failed to add note' };
    }
}

export async function deleteNote(subscriberId: number, noteId: number) {
    try {
        await sql`DELETE FROM client_notes WHERE id = ${noteId}`;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error) {
        console.error('Delete note error:', error);
        return { error: 'Failed to delete note' };
    }
}

// Payments (Invoices)
export async function recordPayment(subscriberId: number, amount: number, description: string, status: string = 'paid') {
    if (!amount) return { error: 'Amount is required' };
    
    const executeInsert = async (invoiceNum: string) => {
        await sql`
            INSERT INTO client_payments (subscriber_id, amount, description, status, invoice_number)
            VALUES (${subscriberId}, ${amount}, ${description}, ${status}, ${invoiceNum})
        `;
    };

    try {
        const invoiceNum = `INV-${Date.now().toString().slice(-6)}`;
        await executeInsert(invoiceNum);
        
        // Send Email
        const clientRes = await sql`SELECT email, name FROM subscribers WHERE id = ${subscriberId}`;
        const client = clientRes.rows[0];

        if (client && client.email) {
            const { sendInvoiceEmail } = await import('../../lib/email');
            await sendInvoiceEmail({
                invoice_number: invoiceNum,
                amount,
                description,
                status,
                date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                client_name: client.name,
                client_email: client.email
            });
        }

        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error: any) {
        console.error('Payment error:', error);
        
        // Self-healing: If table doesn't exist, create it and retry
        if (error.message && error.message.includes('relation "client_payments" does not exist')) {
            try {
                console.log('Table client_payments missing. Creating it...');
                await sql`
                  CREATE TABLE IF NOT EXISTS client_payments (
                    id SERIAL PRIMARY KEY,
                    subscriber_id INTEGER REFERENCES subscribers(id) ON DELETE CASCADE,
                    amount DECIMAL(10, 2) NOT NULL,
                    currency VARCHAR(3) DEFAULT 'USD',
                    description VARCHAR(255),
                    status VARCHAR(50) DEFAULT 'pending',
                    invoice_number VARCHAR(50),
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                  )
                `;
                
                const invoiceNum = `INV-${Date.now().toString().slice(-6)}`;
                await executeInsert(invoiceNum);
                revalidatePath(`/admin/subscribers/${subscriberId}`);
                return { success: true };
            } catch (createError: any) {
                console.error('Failed to auto-create client_payments table:', createError);
                return { error: `Failed to auto-create table: ${createError.message}` };
            }
        }
        
        return { error: error.message || 'Failed to record payment' };
    }
}

export async function deletePayment(paymentId: number, subscriberId: number) {
    try {
        await sql`DELETE FROM client_payments WHERE id = ${paymentId}`;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error) {
        return { error: 'Failed to delete payment' };
    }
}

// Project Progress (Milestones)
export async function addMilestone(subscriberId: number, milestone: string) {
    if (!milestone) return { error: 'Milestone is required' };
    try {
        await sql`
            INSERT INTO project_progress (subscriber_id, milestone)
            VALUES (${subscriberId}, ${milestone})
        `;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error: any) {
        console.error('Milestone error:', error);
        
        // Self-healing: If table doesn't exist, create it and retry
        if (error.message && error.message.includes('relation "project_progress" does not exist')) {
            try {
                console.log('Table project_progress missing. Creating it...');
                await sql`
                  CREATE TABLE IF NOT EXISTS project_progress (
                    id SERIAL PRIMARY KEY,
                    subscriber_id INTEGER REFERENCES subscribers(id) ON DELETE CASCADE,
                    milestone TEXT NOT NULL,
                    status VARCHAR(50) DEFAULT 'pending',
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                  )
                `;
                
                await sql`
                    INSERT INTO project_progress (subscriber_id, milestone)
                    VALUES (${subscriberId}, ${milestone})
                `;
                revalidatePath(`/admin/subscribers/${subscriberId}`);
                return { success: true };
            } catch (createError: any) {
                return { error: `Failed to auto-create table: ${createError.message}` };
            }
        }
        
        return { error: error.message || 'Failed to add milestone' };
    }
}

export async function updateMilestoneStatus(subscriberId: number, milestoneId: number, status: string) {
    try {
        await sql`
            UPDATE project_progress
            SET status = ${status}
            WHERE id = ${milestoneId} AND subscriber_id = ${subscriberId}
        `;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error) {
        return { error: 'Failed to update milestone' };
    }
}

export async function deleteMilestone(subscriberId: number, milestoneId: number) {
    try {
        await sql`DELETE FROM project_progress WHERE id = ${milestoneId}`;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error) {
        return { error: 'Failed to delete milestone' };
    }
}

// Client Files
export async function addFile(subscriberId: number, fileName: string, fileUrl: string, fileSize?: number) {
    if (!fileName || !fileUrl) return { error: 'Name and URL are required' };
    try {
        await sql`
            INSERT INTO client_files (subscriber_id, file_name, file_url, file_size)
            VALUES (${subscriberId}, ${fileName}, ${fileUrl}, ${fileSize || 0})
        `;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error: any) {
        console.error('File add error:', error);
        
        // Self-healing: If table doesn't exist, create it and retry
        if (error.message && error.message.includes('relation "client_files" does not exist')) {
            try {
                console.log('Table client_files missing. Creating it...');
                await sql`
                  CREATE TABLE IF NOT EXISTS client_files (
                    id SERIAL PRIMARY KEY,
                    subscriber_id INTEGER REFERENCES subscribers(id) ON DELETE CASCADE,
                    file_name VARCHAR(255) NOT NULL,
                    file_url TEXT NOT NULL,
                    file_size INTEGER,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                  )
                `;
                
                await sql`
                    INSERT INTO client_files (subscriber_id, file_name, file_url, file_size)
                    VALUES (${subscriberId}, ${fileName}, ${fileUrl}, ${fileSize || 0})
                `;
                revalidatePath(`/admin/subscribers/${subscriberId}`);
                return { success: true };
            } catch (createError: any) {
                return { error: `Failed to auto-create table: ${createError.message}` };
            }
        }
        
        return { error: error.message || 'Failed to add file' };
    }
}

export async function deleteFile(subscriberId: number, fileId: number) {
    try {
        await sql`DELETE FROM client_files WHERE id = ${fileId}`;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error) {
        return { error: 'Failed to delete file' };
    }
}

export async function sendWeeklyReport(subscriberId: number) {
    try {
        const subRes = await sql`SELECT * FROM subscribers WHERE id = ${subscriberId}`;
        const subscriber = subRes.rows[0];

        const notesRes = await sql`SELECT * FROM client_notes WHERE subscriber_id = ${subscriberId} ORDER BY created_at DESC`;
        const notes = notesRes.rows;

        const progressRes = await sql`SELECT * FROM project_progress WHERE subscriber_id = ${subscriberId} ORDER BY created_at ASC`;
        const milestones = progressRes.rows;

        const { sendWeeklyReportEmail } = await import('../../lib/email');
        await sendWeeklyReportEmail(subscriber, notes, milestones);

        return { success: true };
    } catch (error) {
        console.error('Report send error:', error);
        return { error: 'Failed to send report' };
    }
}
