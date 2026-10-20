'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const VISITOR_KEY = 'achtrex_visitor_id';
const SESSION_KEY = 'achtrex_session_id';
const SESSION_TIMESTAMP_KEY = 'achtrex_session_ts';
const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes

function getOrCreateVisitorId(): string {
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = `vis_${Math.random().toString(36).substring(2, 9)}_${Date.now().toString(36)}`;
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return `vis_${Math.random().toString(36).substring(2, 9)}`;
  }
}

function getOrCreateSessionId(): string {
  try {
    const now = Date.now();
    const lastActive = sessionStorage.getItem(SESSION_TIMESTAMP_KEY);
    let sessionId = sessionStorage.getItem(SESSION_KEY);

    // If session expired or doesn't exist, create fresh session
    if (!sessionId || !lastActive || now - parseInt(lastActive, 10) > SESSION_TIMEOUT_MS) {
      sessionId = `sess_${Math.random().toString(36).substring(2, 9)}_${Date.now().toString(36)}`;
      sessionStorage.setItem(SESSION_KEY, sessionId);
    }

    sessionStorage.setItem(SESSION_TIMESTAMP_KEY, now.toString());
    return sessionId;
  } catch {
    return `sess_${Math.random().toString(36).substring(2, 9)}`;
  }
}

export function VisitorTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // Avoid double tracking exact same path in strict mode
    if (lastTrackedPath.current === pathname) {
      return;
    }
    lastTrackedPath.current = pathname;

    // Do not track admin routes if mounted globally
    if (pathname?.startsWith('/admin')) {
      return;
    }

    const visitorId = getOrCreateVisitorId();
    const sessionId = getOrCreateSessionId();

    // Give document.title a moment to update
    const timer = setTimeout(() => {
      fetch('/api/analytics/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          visitorId,
          sessionId,
          path: pathname || '/',
          title: typeof document !== 'undefined' ? document.title : '',
          referrer: typeof document !== 'undefined' ? document.referrer : '',
        }),
        keepalive: true,
      }).catch(() => {
        // Silently catch network errors so it never affects user browsing
      });
    }, 250);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
