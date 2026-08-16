import crypto from 'crypto';
import { cookies } from 'next/headers';
import { getMemberById, PortalMember } from './portal-db';

const SESSION_COOKIE_NAME = 'achtrex_member_session';

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedHash: string): boolean {
  try {
    const [salt, originalHash] = storedHash.split(':');
    if (!salt || !originalHash) return false;
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hash === originalHash;
  } catch (err) {
    console.error('Password verification error:', err);
    return false;
  }
}

export function generateSessionToken(memberId: number): string {
  const payload = `${memberId}:${Date.now()}`;
  const secret = process.env.SESSION_SECRET || 'achtrex-portal-super-secret-key-2026';
  const hmac = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  return Buffer.from(`${payload}:${hmac}`).toString('base64');
}

export function verifySessionToken(token: string): number | null {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf8');
    const [memberIdStr, timestampStr, hmac] = decoded.split(':');
    if (!memberIdStr || !timestampStr || !hmac) return null;
    
    const payload = `${memberIdStr}:${timestampStr}`;
    const secret = process.env.SESSION_SECRET || 'achtrex-portal-super-secret-key-2026';
    const expectedHmac = crypto.createHmac('sha256', secret).update(payload).digest('hex');
    
    if (hmac !== expectedHmac) return null;
    return parseInt(memberIdStr, 10);
  } catch (err) {
    return null;
  }
}

export async function setMemberSessionCookie(memberId: number) {
  const token = generateSessionToken(memberId);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30 // 30 days
  });
}

export async function clearMemberSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function getCurrentMember(): Promise<PortalMember | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token) return null;
    
    const memberId = verifySessionToken(token);
    if (!memberId) return null;
    
    return await getMemberById(memberId);
  } catch (err) {
    console.error('getCurrentMember error:', err);
    return null;
  }
}
