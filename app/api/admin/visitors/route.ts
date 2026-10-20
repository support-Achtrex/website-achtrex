import { NextRequest, NextResponse } from 'next/server';
import { VisitorLogsDB } from '@/lib/visitor-logs-db';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search') || undefined;
    const country = searchParams.get('country') || undefined;
    const limit = parseInt(searchParams.get('limit') || '50', 10);
    const offset = parseInt(searchParams.get('offset') || '0', 10);

    const stats = VisitorLogsDB.getStats();
    const { sessions, total } = VisitorLogsDB.filterSessions({
      search,
      country,
      limit,
      offset,
    });

    return NextResponse.json({
      success: true,
      stats,
      sessions,
      total,
    });
  } catch (err) {
    console.error('Error fetching visitor logs:', err);
    return NextResponse.json({ error: 'Failed to fetch logs' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    VisitorLogsDB.clearAll();
    return NextResponse.json({ success: true, message: 'All visitor logs cleared' });
  } catch (err) {
    console.error('Error clearing visitor logs:', err);
    return NextResponse.json({ error: 'Failed to clear logs' }, { status: 500 });
  }
}
