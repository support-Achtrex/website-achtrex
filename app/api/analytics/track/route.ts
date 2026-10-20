import { NextRequest, NextResponse } from 'next/server';
import { VisitorLogsDB } from '@/lib/visitor-logs-db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { visitorId, sessionId, path, title, referrer } = body;

    if (!visitorId || !sessionId) {
      return NextResponse.json({ error: 'Missing visitorId or sessionId' }, { status: 400 });
    }

    // Extract IP address from standard headers
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIp = req.headers.get('x-real-ip');
    const clientIp = (forwardedFor ? forwardedFor.split(',')[0].trim() : realIp) || '127.0.0.1';

    // Extract geo headers (Vercel / Cloudflare)
    const country = req.headers.get('x-vercel-ip-country') || req.headers.get('cf-ipcountry');
    const city = req.headers.get('x-vercel-ip-city');
    const region = req.headers.get('x-vercel-ip-country-region');
    const userAgent = req.headers.get('user-agent');

    const session = await VisitorLogsDB.recordPageView({
      visitorId,
      sessionId,
      path: path || '/',
      title: title || '',
      referrer: referrer || '',
      ip: clientIp,
      userAgent,
      headers: {
        country,
        city,
        region,
      },
    });

    return NextResponse.json({ success: true, session: { id: session.id, country: session.country } });
  } catch (err) {
    console.error('Analytics track error:', err);
    return NextResponse.json({ error: 'Failed to record visitor' }, { status: 500 });
  }
}
