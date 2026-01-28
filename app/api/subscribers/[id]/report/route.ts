
import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
import { generateProjectReportPDF } from '@/lib/email';

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const subscriberId = parseInt(id);

        if (isNaN(subscriberId)) {
            return new NextResponse('Invalid Subscriber ID', { status: 400 });
        }

        // Fetch Data
        const subRes = await sql`SELECT * FROM subscribers WHERE id = ${subscriberId}`;
        if (subRes.rows.length === 0) return new NextResponse('Not found', { status: 404 });
        const subscriber = subRes.rows[0];

        const notesRes = await sql`SELECT * FROM client_notes WHERE subscriber_id = ${subscriberId} ORDER BY created_at DESC`;
        const notes = notesRes.rows;

        const progressRes = await sql`SELECT * FROM project_progress WHERE subscriber_id = ${subscriberId} ORDER BY created_at ASC`;
        const milestones = progressRes.rows;

        // Generate PDF
        const pdfBuffer = await generateProjectReportPDF(subscriber, notes, milestones, "Project Progress Report");

        // Return as PDF stream
        return new NextResponse(new Uint8Array(pdfBuffer), {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="Project-Report-${subscriber.email}.pdf"`,
            },
        });

    } catch (error) {
        console.error('Report Generation Error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
