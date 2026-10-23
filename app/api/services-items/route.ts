import { NextResponse } from 'next/server';
import { ServicesDB } from '@/lib/services-db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const items = await ServicesDB.getAllAsync();
    return NextResponse.json(items, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
