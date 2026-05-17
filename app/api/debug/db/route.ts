import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        console.log('Adding missing columns to client_payments...');
        try {
            await sql`ALTER TABLE client_payments ADD COLUMN description VARCHAR(255)`;
        } catch (e: any) {
            console.log('Description column error:', e.message);
        }
        try {
            await sql`ALTER TABLE client_payments ADD COLUMN invoice_number VARCHAR(50)`;
        } catch (e: any) {
            console.log('Invoice number column error:', e.message);
        }
        
        const res = await sql`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'client_payments'`;
        return NextResponse.json({
            message: 'Schema updated',
            columns: res.rows
        });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
