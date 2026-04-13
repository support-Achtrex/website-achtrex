
import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
import { generateInvoicePDF } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const { id } = params;

    try {
        // Fetch payroll record
        const { rows: payrollRows } = await sql`
            SELECT * FROM payroll_records WHERE id = ${id}
        `;

        if (payrollRows.length === 0) {
            return new NextResponse('Payroll record not found', { status: 404 });
        }

        const payroll = payrollRows[0];

        // Fetch team member
        const { rows: memberRows } = await sql`
            SELECT * FROM team_members WHERE id = ${payroll.team_member_id}
        `;

        if (memberRows.length === 0) {
            return new NextResponse('Team member not found', { status: 404 });
        }

        const member = memberRows[0];
        const formattedDate = new Date(payroll.payment_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        const pdfData = {
            invoice_number: `PAY-${payroll.id.toString().padStart(6, '0')}`,
            amount: payroll.amount,
            description: `Salary Payment for ${formattedDate}`,
            status: 'paid',
            date: new Date(payroll.payment_date).toLocaleDateString(),
            client_name: member.name,
            client_email: member.email,
            currency: 'USD'
        };

        // Generate PDF
        const pdfBuffer = await generateInvoicePDF(pdfData, 'Payslip');

        // Create headers
        const headers = new Headers();
        headers.set('Content-Type', 'application/pdf');
        headers.set('Content-Disposition', `attachment; filename="Payslip-${formattedDate.replace(/ /g, '-')}-${member.id}.pdf"`);

        return new NextResponse(pdfBuffer as any, {
            status: 200,
            headers: headers,
        });

    } catch (error) {
        console.error('Error generating payslip PDF:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
