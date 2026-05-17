import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const res = await sql`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'client_payments'`;
        const countRes = await sql`SELECT COUNT(*) FROM client_payments`;
        const sample = await sql`SELECT * FROM client_payments LIMIT 1`;
        
        return NextResponse.json({
            columns: res.rows,
            count: countRes.rows[0],
            sample: sample.rows[0]
        });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
