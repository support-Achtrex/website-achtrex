import { NextResponse } from 'next/server';
import { HeroDB } from '@/lib/hero-db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const config = await HeroDB.getConfigAsync();
    return NextResponse.json(config);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
