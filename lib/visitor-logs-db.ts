import fs from 'fs';
import path from 'path';
import { resolveGeoLocation } from './geo-lookup';
import { parseUserAgent } from './ua-parser';

export interface VisitedPage {
  path: string;
  title?: string;
  timestamp: string;
}

export interface VisitorSession {
  id: string;
  visitorId: string;
  ip: string;
  country: string;
  countryCode: string;
  city: string;
  region: string;
  flag: string;
  deviceType: 'desktop' | 'mobile' | 'tablet';
  browser: string;
  os: string;
  referrer: string;
  startedAt: string;
  lastActiveAt: string;
  pageViewsCount: number;
  pagesVisited: VisitedPage[];
}

export interface VisitorStats {
  totalVisits: number;
  uniqueVisitors: number;
  totalPageViews: number;
  todayVisits: number;
  topPages: { path: string; count: number }[];
  topCountries: { country: string; code: string; flag: string; count: number; percentage: number }[];
  deviceBreakdown: { name: string; count: number; percentage: number }[];
  browserBreakdown: { name: string; count: number; percentage: number }[];
}

const DATA_FILE = path.join(process.cwd(), 'data', 'visitor-logs.json');
const MAX_SESSIONS = 5000;

function readLogs(): VisitorSession[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const content = fs.readFileSync(DATA_FILE, 'utf-8');
    if (!content || !content.trim()) {
      return [];
    }
    return JSON.parse(content);
  } catch (err) {
    console.error('Error reading visitor logs:', err);
    return [];
  }
}

function writeLogs(sessions: VisitorSession[]): void {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    // Cap at MAX_SESSIONS
    const trimmed = sessions.slice(0, MAX_SESSIONS);
    const tempFile = `${DATA_FILE}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(trimmed, null, 2), 'utf-8');
    try {
      fs.renameSync(tempFile, DATA_FILE);
    } catch {
      // Fallback for file lock on Windows
      fs.writeFileSync(DATA_FILE, JSON.stringify(trimmed, null, 2), 'utf-8');
      if (fs.existsSync(tempFile)) {
        try { fs.unlinkSync(tempFile); } catch {}
      }
    }
  } catch (err) {
    console.error('Error writing visitor logs:', err);
  }
}

export const VisitorLogsDB = {
  getAll: (): VisitorSession[] => {
    return readLogs();
  },

  recordPageView: async (params: {
    visitorId: string;
    sessionId: string;
    path: string;
    title?: string;
    referrer?: string;
    ip: string;
    userAgent?: string | null;
    headers?: {
      country?: string | null;
      city?: string | null;
      region?: string | null;
    };
  }): Promise<VisitorSession> => {
    const sessions = readLogs();
    const now = new Date().toISOString();
    const cleanPath = params.path || '/';

    // 1. Check if session already exists
    const existingIndex = sessions.findIndex((s) => s.id === params.sessionId);

    if (existingIndex > -1) {
      const session = sessions[existingIndex];
      session.lastActiveAt = now;
      session.pageViewsCount += 1;

      // Add page to journey if not an instant duplicate of last page
      const lastPage = session.pagesVisited[session.pagesVisited.length - 1];
      const isDuplicate = lastPage && lastPage.path === cleanPath &&
        new Date(now).getTime() - new Date(lastPage.timestamp).getTime() < 2500;

      if (!isDuplicate) {
        session.pagesVisited.push({
          path: cleanPath,
          title: params.title || cleanPath,
          timestamp: now,
        });
      }

      // Move active session to top
      sessions.splice(existingIndex, 1);
      sessions.unshift(session);
      writeLogs(sessions);
      return session;
    }

    // 2. New Visitor Session
    const geo = await resolveGeoLocation(params.ip, params.headers);
    const ua = parseUserAgent(params.userAgent);

    const newSession: VisitorSession = {
      id: params.sessionId,
      visitorId: params.visitorId,
      ip: params.ip || '127.0.0.1',
      country: geo.country,
      countryCode: geo.countryCode,
      city: geo.city,
      region: geo.region,
      flag: geo.flag,
      deviceType: ua.deviceType,
      browser: ua.browser,
      os: ua.os,
      referrer: params.referrer || 'Direct / Bookmark',
      startedAt: now,
      lastActiveAt: now,
      pageViewsCount: 1,
      pagesVisited: [
        {
          path: cleanPath,
          title: params.title || cleanPath,
          timestamp: now,
        },
      ],
    };

    sessions.unshift(newSession);
    writeLogs(sessions);
    return newSession;
  },

  getStats: (): VisitorStats => {
    const sessions = readLogs();
    const now = new Date();
    const todayStr = now.toISOString().slice(0, 10);

    const uniqueVisitorIds = new Set<string>();
    let totalPageViews = 0;
    let todayVisits = 0;

    const pageCountMap = new Map<string, number>();
    const countryMap = new Map<string, { code: string; flag: string; count: number }>();
    const deviceMap = new Map<string, number>();
    const browserMap = new Map<string, number>();

    for (const s of sessions) {
      uniqueVisitorIds.add(s.visitorId);
      totalPageViews += s.pageViewsCount;

      if (s.startedAt.startsWith(todayStr)) {
        todayVisits += 1;
      }

      // Pages
      for (const p of s.pagesVisited) {
        pageCountMap.set(p.path, (pageCountMap.get(p.path) || 0) + 1);
      }

      // Countries
      const currentCountry = countryMap.get(s.country) || {
        code: s.countryCode,
        flag: s.flag,
        count: 0,
      };
      currentCountry.count += 1;
      countryMap.set(s.country, currentCountry);

      // Devices
      deviceMap.set(s.deviceType, (deviceMap.get(s.deviceType) || 0) + 1);

      // Browsers
      browserMap.set(s.browser, (browserMap.get(s.browser) || 0) + 1);
    }

    const totalSessions = sessions.length || 1;

    // Top Pages
    const topPages = Array.from(pageCountMap.entries())
      .map(([path, count]) => ({ path, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);

    // Top Countries
    const topCountries = Array.from(countryMap.entries())
      .map(([country, data]) => ({
        country,
        code: data.code,
        flag: data.flag,
        count: data.count,
        percentage: Math.round((data.count / totalSessions) * 100),
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);

    // Device breakdown
    const deviceBreakdown = Array.from(deviceMap.entries())
      .map(([name, count]) => ({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        count,
        percentage: Math.round((count / totalSessions) * 100),
      }))
      .sort((a, b) => b.count - a.count);

    // Browser breakdown
    const browserBreakdown = Array.from(browserMap.entries())
      .map(([name, count]) => ({
        name,
        count,
        percentage: Math.round((count / totalSessions) * 100),
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return {
      totalVisits: sessions.length,
      uniqueVisitors: uniqueVisitorIds.size,
      totalPageViews,
      todayVisits,
      topPages,
      topCountries,
      deviceBreakdown,
      browserBreakdown,
    };
  },

  filterSessions: (params: {
    search?: string;
    country?: string;
    limit?: number;
    offset?: number;
  }) => {
    let sessions = readLogs();

    if (params.country && params.country !== 'all') {
      sessions = sessions.filter(
        (s) => s.country.toLowerCase() === params.country?.toLowerCase()
      );
    }

    if (params.search && params.search.trim()) {
      const q = params.search.toLowerCase().trim();
      sessions = sessions.filter(
        (s) =>
          s.ip.toLowerCase().includes(q) ||
          s.country.toLowerCase().includes(q) ||
          s.city.toLowerCase().includes(q) ||
          s.browser.toLowerCase().includes(q) ||
          s.os.toLowerCase().includes(q) ||
          s.pagesVisited.some((p) => p.path.toLowerCase().includes(q))
      );
    }

    const total = sessions.length;
    const offset = params.offset || 0;
    const limit = params.limit || 50;
    const paginated = sessions.slice(offset, offset + limit);

    return {
      total,
      sessions: paginated,
    };
  },

  clearAll: (): void => {
    writeLogs([]);
  },
};
