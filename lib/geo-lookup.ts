export interface GeoInfo {
  country: string;
  countryCode: string;
  city: string;
  region: string;
  flag: string;
}

// Convert 2-letter ISO country code into emoji flag
export function getCountryFlag(countryCode: string): string {
  if (!countryCode || countryCode.length !== 2 || countryCode === 'DEV') {
    return '🌐';
  }
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// Memory cache to prevent repeating lookups for identical IP
const geoCache = new Map<string, GeoInfo>();

export async function resolveGeoLocation(
  ip: string,
  headers?: {
    country?: string | null;
    city?: string | null;
    region?: string | null;
  }
): Promise<GeoInfo> {
  const cleanIp = (ip || '').split(',')[0].trim();

  // 1. Check if Localhost / Private IP
  const isLocal =
    !cleanIp ||
    cleanIp === '127.0.0.1' ||
    cleanIp === '::1' ||
    cleanIp.startsWith('192.168.') ||
    cleanIp.startsWith('10.') ||
    cleanIp.startsWith('172.16.') ||
    cleanIp === 'localhost';

  if (isLocal) {
    return {
      country: 'Localhost / Dev',
      countryCode: 'DEV',
      city: 'Local Machine',
      region: 'Development',
      flag: '💻',
    };
  }

  // 2. Check if hosting headers provide geolocation (e.g. Vercel, Cloudflare)
  if (headers?.country) {
    const code = headers.country.toUpperCase();
    return {
      country: headers.country,
      countryCode: code,
      city: headers.city ? decodeURIComponent(headers.city) : 'Unknown City',
      region: headers.region || 'Unknown Region',
      flag: getCountryFlag(code),
    };
  }

  // 3. Check in-memory cache
  if (geoCache.has(cleanIp)) {
    return geoCache.get(cleanIp)!;
  }

  // 4. Fallback lookup via public IP API with 2.5s timeout
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(`http://ip-api.com/json/${cleanIp}?fields=status,country,countryCode,regionName,city`, {
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      if (data.status === 'success') {
        const geoInfo: GeoInfo = {
          country: data.country || 'Unknown Country',
          countryCode: data.countryCode || 'XX',
          city: data.city || 'Unknown City',
          region: data.regionName || 'Unknown Region',
          flag: getCountryFlag(data.countryCode || ''),
        };
        geoCache.set(cleanIp, geoInfo);
        return geoInfo;
      }
    }
  } catch {
    // Timeout or network unreachable, fallback gracefully
  }

  const fallback: GeoInfo = {
    country: 'International Visitor',
    countryCode: 'INT',
    city: 'Unknown City',
    region: 'Network Edge',
    flag: '🌐',
  };
  geoCache.set(cleanIp, fallback);
  return fallback;
}
