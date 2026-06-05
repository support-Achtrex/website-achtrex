import { sql } from '@/lib/db';
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

        const url = new URL(request.url);
        const notesParam = url.searchParams.get('notes');
        const selectedNoteIds = notesParam ? notesParam.split(',').map(Number) : undefined;

        // Fetch Data
        const subRes = await sql`SELECT * FROM subscribers WHERE id = ${subscriberId}`;
        if (subRes.rows.length === 0) return new NextResponse('Not found', { status: 404 });
        const subscriber = subRes.rows[0];

        // Robust fetch for Notes
        let notes: any[] = [];
        try {
            const notesRes = await sql`SELECT * FROM client_notes WHERE subscriber_id = ${subscriberId} ORDER BY created_at DESC`;
            let fetchedNotes = notesRes.rows;
            
            if (selectedNoteIds && selectedNoteIds.length > 0) {
                notes = fetchedNotes.filter(n => selectedNoteIds.includes(n.id));
            } else {
                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                notes = fetchedNotes.filter(n => new Date(n.created_at) >= oneWeekAgo);
            }
        } catch (e: any) {
            if (e.message && e.message.includes('relation "client_notes" does not exist')) {
                console.log('client_notes table does not exist, returning empty array');
            } else {
                throw e;
            }
        }

        // Robust fetch for Progress
        let milestones: any[] = [];
        try {
            const progressRes = await sql`SELECT * FROM project_progress WHERE subscriber_id = ${subscriberId} ORDER BY created_at ASC`;
            milestones = progressRes.rows;
        } catch (e: any) {
            if (e.message && e.message.includes('relation "project_progress" does not exist')) {
                console.log('project_progress table does not exist, returning empty array');
            } else {
                throw e;
            }
        }

        // Generate PDF
        const pdfBuffer = await generateProjectReportPDF(subscriber, notes, milestones, "Project Progress Report");

        // Return as PDF stream
        return new NextResponse(new Uint8Array(pdfBuffer), {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="Project-Report-${subscriber.email}.pdf"`,
            },
        });

    } catch (error: any) {
        console.error('Report Generation Error:', error);
        return new NextResponse(`Internal Server Error: ${error.message}`, { status: 500 });
    }
}
