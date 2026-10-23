import { NextRequest, NextResponse } from 'next/server';
import { SettingsDB } from '@/lib/local-db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const settings = await SettingsDB.getAsync();
    return NextResponse.json(settings, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const updated = await SettingsDB.update(body);
    return NextResponse.json({ success: true, settings: updated });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
