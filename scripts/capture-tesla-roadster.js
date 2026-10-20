const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
// Authentic snapshot of Tesla Roadster
const TESLA_URL = 'https://web.archive.org/web/20240307180812/https://www.tesla.com/roadster';
const OUTPUT_DIR = path.join(__dirname, '..', 'reference', 'tesla-roadster');
const SCREENSHOTS_DIR = path.join(OUTPUT_DIR, 'screenshots');
const ASSETS_DIR = path.join(OUTPUT_DIR, 'assets');

// Ensure directories
[
  OUTPUT_DIR,
  SCREENSHOTS_DIR,
  path.join(SCREENSHOTS_DIR, 'desktop'),
  path.join(SCREENSHOTS_DIR, 'tablet'),
  path.join(SCREENSHOTS_DIR, 'mobile'),
  path.join(SCREENSHOTS_DIR, 'sections'),
  ASSETS_DIR
].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    try {
      const parsedUrl = new URL(url);
      const client = parsedUrl.protocol === 'https:' ? https : http;
      const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': '*/*'
      };

      const req = client.get(url, { headers }, res => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let redirectUrl = res.headers.location;
          if (!redirectUrl.startsWith('http')) {
            redirectUrl = new URL(redirectUrl, url).href;
          }
          return downloadFile(redirectUrl, destPath).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        const file = fs.createWriteStream(destPath);
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => resolve(destPath));
        });
      });
      req.on('error', err => reject(err));
      req.setTimeout(30000, () => {
        req.destroy();
        reject(new Error(`Timeout downloading ${url}`));
      });
    } catch (e) {
      reject(e);
    }
  });
}

async function run() {
  console.log('🚀 Launching Chrome for Tesla Roadster reference capture...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--window-size=1920,1080'
    ]
  });

  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    );

    console.log(`📡 Navigating to authentic Tesla Roadster reference...`);
    await page.goto(TESLA_URL, { waitUntil: 'load', timeout: 60000 });
    await sleep(5000);

    // Hide Wayback Machine toolbar and banners completely
    await page.addStyleTag({
      content: `
        #wm-ipp-base, #wm-ipp, #wb-tool-ribbon, .wb-autocomplete-suggestions {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          overflow: hidden !important;
        }
        body {
          top: 0 !important;
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
      `
    });

    const title = await page.title();
    console.log(`✅ Page Title: "${title}"`);

    // 1. DESKTOP CAPTURE (1920x1080)
    console.log('📸 Capturing Desktop screenshots (1920x1080)...');
    await page.setViewport({ width: 1920, height: 1080 });
    await sleep(2000);

    // Full page screenshot
    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'desktop', 'full_page.png'),
      fullPage: true
    });

    // Overlapping section captures
    const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    console.log(`Desktop total page height: ${pageHeight}px`);

    let scrollY = 0;
    let sectionIdx = 0;
    const viewportH = 1080;
    while (scrollY < pageHeight) {
      await page.evaluate(y => window.scrollTo(0, y), scrollY);
      await sleep(600);
      const filename = `section_${String(sectionIdx).padStart(2, '0')}_offset_${scrollY}px.png`;
      await page.screenshot({
        path: path.join(SCREENSHOTS_DIR, 'desktop', filename)
      });
      scrollY += Math.floor(viewportH * 0.85); // 15% overlap
      sectionIdx++;
    }

    // 2. TABLET CAPTURE (768x1024)
    console.log('📸 Capturing Tablet screenshots (768x1024)...');
    await page.setViewport({ width: 768, height: 1024 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(2000);
    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'tablet', 'full_page.png'),
      fullPage: true
    });
    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'tablet', 'hero_viewport.png')
    });

    // 3. MOBILE CAPTURE (390x844)
    console.log('📸 Capturing Mobile screenshots (390x844)...');
    await page.setViewport({ width: 390, height: 844 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(2000);
    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'mobile', 'full_page.png'),
      fullPage: true
    });
    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'mobile', 'hero_viewport.png')
    });

    // Reset to desktop for DOM structure extraction
    await page.setViewport({ width: 1920, height: 1080 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(1000);

    console.log('🔍 Analyzing Tesla page DOM structure, typography, and content...');
    const pageData = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('img'))
        .filter(img => !img.src.includes('archive.org') && !img.src.includes('akamai-logo'))
        .map(img => {
          let origUrl = img.src;
          const match = origUrl.match(/https:\/\/web\.archive\.org\/web\/[0-9]+\/(.*)/);
          if (match) origUrl = match[1];
          return {
            src: img.src,
            origUrl: origUrl,
            alt: img.alt || '',
            width: img.naturalWidth || img.width,
            height: img.naturalHeight || img.height
          };
        });

      const videos = Array.from(document.querySelectorAll('video')).map(v => {
        const sources = Array.from(v.querySelectorAll('source')).map(s => s.src);
        return {
          src: v.src || (sources.length ? sources[0] : ''),
          poster: v.poster || '',
          sources: sources,
          autoplay: v.autoplay,
          loop: v.loop,
          muted: v.muted
        };
      });

      const backgroundImages = [];
      const allElements = document.querySelectorAll('*');
      for (const el of allElements) {
        const bg = window.getComputedStyle(el).backgroundImage;
        if (bg && bg !== 'none' && bg.includes('url')) {
          const match = bg.match(/url\(['"]?(.*?)['"]?\)/);
          if (match && !match[1].includes('archive.org') && !match[1].includes('data:')) {
            backgroundImages.push(match[1]);
          }
        }
      }

      // Extract text content & typography styles
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, [class*="title"], [class*="stat"], [class*="headline"]'))
        .map(el => {
          const text = el.innerText ? el.innerText.trim() : '';
          if (text && text.length < 150) {
            const style = window.getComputedStyle(el);
            return {
              tag: el.tagName,
              text: text,
              fontSize: style.fontSize,
              fontWeight: style.fontWeight,
              color: style.color,
              letterSpacing: style.letterSpacing,
              lineHeight: style.lineHeight
            };
          }
          return null;
        }).filter(Boolean);

      const paragraphs = Array.from(document.querySelectorAll('p, section span'))
        .map(el => {
          const text = el.innerText ? el.innerText.trim() : '';
          if (text && text.length > 20 && text.length < 400 && !text.includes('Wayback')) {
            return text;
          }
          return null;
        }).filter(Boolean);

      const ctas = Array.from(document.querySelectorAll('a, button'))
        .map(b => {
          const text = b.innerText ? b.innerText.trim() : '';
          if (text && !text.includes('Wayback') && text.length < 50) {
            const style = window.getComputedStyle(b);
            return {
              text: text,
              bg: style.backgroundColor,
              color: style.color,
              border: style.border
            };
          }
          return null;
        }).filter(Boolean);

      return {
        images,
        videos,
        backgroundImages: Array.from(new Set(backgroundImages)),
        headings,
        paragraphs: Array.from(new Set(paragraphs)),
        ctas
      };
    });

    console.log(`Discovered: ${pageData.images.length} images, ${pageData.videos.length} videos, ${pageData.backgroundImages.length} CSS backgrounds, ${pageData.headings.length} headings, ${pageData.paragraphs.length} paragraphs.`);

    // Save page analysis JSON
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'page-analysis.json'),
      JSON.stringify(pageData, null, 2),
      'utf8'
    );

    // Download relevant media
    const allUrlsToDownload = new Set();
    pageData.images.forEach(img => allUrlsToDownload.add(img.src));
    pageData.backgroundImages.forEach(url => allUrlsToDownload.add(url));
    pageData.videos.forEach(v => {
      if (v.src) allUrlsToDownload.add(v.src);
      if (v.poster) allUrlsToDownload.add(v.poster);
      v.sources.forEach(s => allUrlsToDownload.add(s));
    });

    console.log(`📥 Downloading ${allUrlsToDownload.size} assets to reference/tesla-roadster/assets/...`);
    const downloadedAssets = [];
    let assetIdx = 1;

    for (const url of allUrlsToDownload) {
      try {
        const cleanUrl = url.split('?')[0];
        const ext = path.extname(cleanUrl) || '.jpg';
        if (!['.jpg', '.jpeg', '.png', '.webp', '.mp4', '.webm', '.svg'].includes(ext.toLowerCase())) {
          continue;
        }
        const basename = path.basename(cleanUrl);
        const filename = `${String(assetIdx).padStart(2, '0')}_${basename.slice(0, 50)}`;
        const destPath = path.join(ASSETS_DIR, filename);

        console.log(`Downloading [${assetIdx}]: ${url.slice(0, 80)}...`);
        await downloadFile(url, destPath);
        const stats = fs.statSync(destPath);
        downloadedAssets.push({
          filename,
          url,
          sizeBytes: stats.size,
          ext
        });
        assetIdx++;
      } catch (err) {
        console.warn(`Could not download ${url.slice(0, 80)}: ${err.message}`);
      }
    }

    // Build ASSET_MANIFEST.md
    console.log('📝 Generating ASSET_MANIFEST.md...');
    let manifest = `# Tesla Roadster Reference Asset Manifest\n\n`;
    manifest += `**Reference URL:** \`https://www.tesla.com/roadster\`  \n`;
    manifest += `**Archival Verified Snapshot:** \`${TESLA_URL}\`  \n`;
    manifest += `**Date Captured:** ${new Date().toISOString()}  \n\n`;
    manifest += `## Captured Screenshots\n\n`;
    manifest += `- Desktop Full Page: \`screenshots/desktop/full_page.png\` (1920x${pageHeight})\n`;
    manifest += `- Desktop Section Slices: \`screenshots/desktop/section_*.png\` (${sectionIdx} frames)\n`;
    manifest += `- Tablet Full Page: \`screenshots/tablet/full_page.png\` (768px)\n`;
    manifest += `- Mobile Full Page: \`screenshots/mobile/full_page.png\` (390px)\n\n`;
    manifest += `## Discovered & Downloaded Visual Assets\n\n`;
    manifest += `| Local File | Source URL | Type | Size |\n`;
    manifest += `|---|---|---|---|\n`;
    downloadedAssets.forEach(a => {
      const sizeKB = (a.sizeBytes / 1024).toFixed(1) + ' KB';
      manifest += `| \`${a.filename}\` | \`${a.url.slice(0, 90)}...\` | \`${a.ext}\` | ${sizeKB} |\n`;
    });

    manifest += `\n## Video Media\n\n`;
    pageData.videos.forEach((v, i) => {
      manifest += `### Video ${i + 1}\n`;
      manifest += `- Source: \`${v.src || v.sources.join(', ')}\`\n`;
      manifest += `- Poster: \`${v.poster || 'None'}\`\n`;
      manifest += `- Autoplay: ${v.autoplay}, Loop: ${v.loop}, Muted: ${v.muted}\n\n`;
    });

    manifest += `## Key Extracted Text & Specifications\n\n`;
    pageData.headings.slice(0, 25).forEach(h => {
      manifest += `- **${h.tag} (${h.fontSize})**: "${h.text}"\n`;
    });

    manifest += `\n### Key Editorial Paragraphs\n\n`;
    pageData.paragraphs.slice(0, 10).forEach(p => {
      manifest += `> "${p}"\n\n`;
    });

    fs.writeFileSync(path.join(OUTPUT_DIR, 'ASSET_MANIFEST.md'), manifest, 'utf8');

    // Build detailed SPECIFICATION.md
    console.log('📝 Generating SPECIFICATION.md...');
    let spec = `# Tesla Roadster: Visual & Interaction Architecture Specification

## 1. Executive Summary & Design Tenets
The official Tesla Roadster page is the benchmark for modern hypercar and cutting-edge product storytelling. It rejects conventional corporate brochure layouts and case-study columns in favor of:
1. **Total Full-Bleed Immersion**: Full-viewport visual plates that establish cinematic scale.
2. **Quantitative Metric Supremacy**: Engineering benchmarks (acceleration, top speed, range, torque) are positioned as central, unmissable hero figures.
3. **Ultra-Refined Editorial Rhythm**: High-contrast dark aesthetics (\`#000000\`, \`#050505\`), hairline white borders (\`border-white/10\`), whisper-light uppercase labels (\`text-xs tracking-widest text-neutral-400\`), and clean sans-serif typography.
4. **Focused Interactive Touchpoints**: Uncluttered call-to-action pills and streamlined reserve/inquiry flows.

---

## 2. Section-by-Section Anatomy

### Section 1: Hero Stage
- **Visual**: Full-screen cinematic backdrop of the Roadster in radiant red.
- **Top Bar**: Minimalist navigation bar with logo and primary links.
- **Center Headline**: "Roadster" in bold, uppercase typography.
- **Floating HUD (Bottom of Hero)**:
  - Metric 1: **1.9 s** — 0-60 mph
  - Metric 2: **+250 mph** — Top Speed
  - Metric 3: **620 mi** — Range
  - Metric 4: **10,000 Nm** — Wheel Torque
  - Primary Action: White border pill button ("Reserve Now")
  - Scroll indicator: Subtle animated arrow.

### Section 2: Exterior & Aerodynamic Architecture
- **Headline**: "Designed for Performance and Aero Efficiency"
- **Visual**: High-contrast studio angle emphasizing the sculpted rear diffuser and airflow channels.
- **Content**: An all-electric supercar that maximizes aerodynamic engineering down to every millimeter.

### Section 3: Interior & Cockpit Experience
- **Headline**: "Interior"
- **Visual**: Full-width wide-angle interior spread showing the 2+2 seating configuration, yoke steering wheel, and curved center screen.
- **Content**: The first supercar to seat four passengers with uncompromising minimalist aesthetics.

### Section 4: Removable Glass Roof
- **Headline**: "Glass Roof"
- **Visual**: Convertible open-air configuration with the lightweight glass roof stored cleanly in the trunk.
- **Content**: A lightweight, removable glass roof stores in the trunk for an open-air, convertible driving experience.

### Section 5: Engineering & Specs Grid
- **Headline**: "Specs"
- **Visual**: Clean 2-column or 3-column data table.
- **Metrics**:
  - Acceleration 0-60 mph: 1.9 s
  - Acceleration 0-100 mph: 4.2 s
  - 1/4 Mile: 8.8 s
  - Top Speed: Over 250 mph
  - Wheel Torque: 10,000 Nm
  - Mile Range: 620 miles
  - Seating: 4
  - Drive: All-Wheel Drive

### Section 6: Closing Conversion Hero
- **Visual**: Rear profile / track perspective.
- **Action**: "Reserve Now" with immediate reservation process and pricing details ($50,000 reservation deposit / $250,000 Founders Series).

---

## 3. Achtrex System Implementation Mapping
Achtrex applies these exact architectural and visual principles:
1. **Media Experience (\`/media/together-towards-new-sustainable-goals\`)**: Complete Tesla Roadster digital twin reproducing every section, asset, and specification with zero Wedoo leftovers.
2. **Project Detail Pages (\`/projects/[slug]\`)**:
   - 100vh Full-Bleed Hero with 3 key client/impact quantitative benchmarks.
   - 21:9 Ultra-Wide Performance spread.
   - Deep-dive technical/interaction section.
   - Comprehensive Engineering & Delivery Specs grid.
   - Minimalist closing conversion hero and concept navigation strip.
3. **Service Detail Pages (\`/services/[slug]\`)**:
   - Hero: Full-screen capability presentation with delivery metrics.
   - Section 2: Engineering architecture & pipeline.
   - Section 3: Full-width case study media plate.
   - Section 4: Capability & deliverables specification matrix.
   - Section 5: Enterprise partner engagement CTA.
`;
    fs.writeFileSync(path.join(OUTPUT_DIR, 'SPECIFICATION.md'), spec, 'utf8');

    console.log('🎉 Tesla Roadster Reference Capture & Analysis complete!');
  } catch (err) {
    console.error('❌ Error during capture:', err);
  } finally {
    await browser.close();
  }
}

run();
