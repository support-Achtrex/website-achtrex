import { NextResponse } from 'next/server';
import { ServicesDB } from '@/lib/services-db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const items = ServicesDB.getAll();
    return NextResponse.json(items);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
