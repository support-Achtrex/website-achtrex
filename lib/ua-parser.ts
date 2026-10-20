export interface ParsedUserAgent {
  deviceType: 'desktop' | 'mobile' | 'tablet';
  browser: string;
  os: string;
}

export function parseUserAgent(uaString: string | null | undefined): ParsedUserAgent {
  if (!uaString) {
    return {
      deviceType: 'desktop',
      browser: 'Unknown',
      os: 'Unknown',
    };
  }

  const ua = uaString.toLowerCase();

  // 1. Device Type
  let deviceType: 'desktop' | 'mobile' | 'tablet' = 'desktop';
  if (/ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk/i.test(ua)) {
    deviceType = 'tablet';
  } else if (/mobile|iphone|ipod|android|blackberry|opera mini|iemobile|wpdesktop/i.test(ua)) {
    deviceType = 'mobile';
  }

  // 2. OS
  let os = 'Unknown OS';
  if (/windows nt 10.0/i.test(ua)) os = 'Windows 10/11';
  else if (/windows nt 6.3/i.test(ua)) os = 'Windows 8.1';
  else if (/windows nt 6.1/i.test(ua)) os = 'Windows 7';
  else if (/windows/i.test(ua)) os = 'Windows';
  else if (/iphone|ipad|ipod/i.test(ua)) {
    const match = ua.match(/os (\d+[._]\d+)/i);
    os = match ? `iOS ${match[1].replace('_', '.')}` : 'iOS';
  } else if (/mac os x/i.test(ua)) {
    const match = ua.match(/mac os x (\d+[._]\d+)/i);
    os = match ? `macOS ${match[1].replace('_', '.')}` : 'macOS';
  } else if (/android/i.test(ua)) {
    const match = ua.match(/android (\d+(\.\d+)?)/i);
    os = match ? `Android ${match[1]}` : 'Android';
  } else if (/linux/i.test(ua)) {
    os = 'Linux';
  } else if (/cros/i.test(ua)) {
    os = 'Chrome OS';
  }

  // 3. Browser
  let browser = 'Unknown Browser';
  if (/edg\//i.test(ua)) browser = 'Microsoft Edge';
  else if (/opr\/|opera/i.test(ua)) browser = 'Opera';
  else if (/chrome|crios/i.test(ua) && !/edg/i.test(ua)) browser = 'Chrome';
  else if (/firefox|fxios/i.test(ua)) browser = 'Firefox';
  else if (/safari/i.test(ua) && !/chrome|crios|android/i.test(ua)) browser = 'Safari';
  else if (/msie|trident/i.test(ua)) browser = 'Internet Explorer';

  return {
    deviceType,
    browser,
    os,
  };
}
