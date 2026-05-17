import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const res = await sql`SELECT * FROM subscribers LIMIT 1`;
        return NextResponse.json({
            count: res.rows.length,
            rows: res.rows
        });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
