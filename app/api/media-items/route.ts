import { NextResponse } from 'next/server';
import { MediaDB } from '@/lib/media-db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const items = MediaDB.getAll();
    return NextResponse.json(items);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
