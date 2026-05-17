import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await sql`CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT)`;
        await sql`INSERT INTO settings (key, value) VALUES ('payment_details', '{"bank_name": "Fidelity Bank", "account_name": "Achtrex Services", "account_number": "2400931904813", "swift_bic": "FBLIGHAC"}') ON CONFLICT (key) DO NOTHING`;
        const res = await sql`SELECT * FROM settings`;
        return NextResponse.json({
            count: res.rows.length,
            rows: res.rows
        });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
