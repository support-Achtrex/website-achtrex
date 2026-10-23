import fs from 'fs';
import path from 'path';
import { sql } from '@/lib/db';

// In-memory cache for ultra-fast response
const memoryCache: Record<string, { data: any; timestamp: number }> = {};
const CACHE_TTL_MS = 5000; // 5 seconds cache to avoid slamming DB on concurrent SSR requests

/**
 * Reads a CMS collection from PostgreSQL database, falling back to local JSON file or default.
 */
export async function getCmsCollection<T>(name: string, defaultData: T): Promise<T> {
  // Check memory cache first
  const cached = memoryCache[name];
  const now = Date.now();
  if (cached && now - cached.timestamp < CACHE_TTL_MS) {
    return cached.data as T;
  }

  try {
    const res = await sql`SELECT data FROM cms_collections WHERE name = ${name} LIMIT 1;`;
    if (res && res.rows && res.rows.length > 0 && res.rows[0].data) {
      const dbData = res.rows[0].data as T;
      memoryCache[name] = { data: dbData, timestamp: now };
      
      // Also update local file in background if possible
      trySyncToLocalFile(name, dbData);
      return dbData;
    }
  } catch (err) {
    console.warn(`[CMS DB] Could not read ${name} from PostgreSQL, falling back to local file:`, err);
  }

  // Fallback to local JSON file
  const localData = readLocalJsonFile<T>(name);
  if (localData !== null) {
    memoryCache[name] = { data: localData, timestamp: now };
    return localData;
  }

  return defaultData;
}

/**
 * Synchronous read fallback for SSR components that are not yet async.
 * Uses memory cache if available, then local JSON file, then defaultData.
 */
export function getCmsCollectionSync<T>(name: string, defaultData: T): T {
  const cached = memoryCache[name];
  if (cached && cached.data) {
    return cached.data as T;
  }

  const localData = readLocalJsonFile<T>(name);
  if (localData !== null) {
    memoryCache[name] = { data: localData, timestamp: Date.now() };
    return localData;
  }

  return defaultData;
}

/**
 * Saves a CMS collection to PostgreSQL database AND writes to local JSON file.
 * Returns true if saved to DB.
 */
export async function saveCmsCollection<T>(name: string, data: T): Promise<boolean> {
  // Immediately update memory cache
  memoryCache[name] = { data, timestamp: Date.now() };

  // Write to local JSON file
  trySyncToLocalFile(name, data);

  // Write to PostgreSQL
  try {
    const jsonStr = JSON.stringify(data);
    await sql`
      INSERT INTO cms_collections (name, data, updated_at)
      VALUES (${name}, ${jsonStr}::jsonb, NOW())
      ON CONFLICT (name)
      DO UPDATE SET data = EXCLUDED.data, updated_at = NOW();
    `;
    return true;
  } catch (err) {
    console.error(`[CMS DB] Error saving ${name} to PostgreSQL:`, err);
    return false;
  }
}

/**
 * Helper to read from data/<name>.json safely.
 */
function readLocalJsonFile<T>(name: string): T | null {
  try {
    const filePath = path.join(process.cwd(), 'data', `${name}.json`);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, 'utf-8');
    if (!raw || !raw.trim()) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

/**
 * Helper to write to data/<name>.json safely.
 */
function trySyncToLocalFile<T>(name: string, data: T): void {
  try {
    const filePath = path.join(process.cwd(), 'data', `${name}.json`);
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch {
    // Ignore on read-only serverless filesystems
  }
}
