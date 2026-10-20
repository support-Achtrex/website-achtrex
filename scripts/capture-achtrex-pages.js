const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.join(__dirname, '..', 'reference', 'achtrex-verification');

const PAGES_TO_CAPTURE = [
  {
    name: 'media-roadster',
    url: 'http://localhost:3000/media/together-towards-new-sustainable-goals',
  },
  {
    name: 'media-overview',
    url: 'http://localhost:3000/media',
  },
  {
    name: 'project-detail',
    url: 'http://localhost:3000/projects/automotive-spatial-configurator',
  },
  {
    name: 'service-detail',
    url: 'http://localhost:3000/services/product-configurators',
  },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('🚀 Launching Chrome to capture Achtrex pages for visual QA...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (const pageInfo of PAGES_TO_CAPTURE) {
      console.log(`\n📸 Capturing: ${pageInfo.name} (${pageInfo.url})...`);
      const pageDir = path.join(OUTPUT_DIR, pageInfo.name);
      if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });

      for (const vp of VIEWPORTS) {
        const page = await browser.newPage();
        await page.setViewport({ width: vp.width, height: vp.height });
        
        try {
          const res = await page.goto(pageInfo.url, { waitUntil: 'networkidle2', timeout: 30000 });
          console.log(`  [${vp.name}] Status: ${res ? res.status() : 'N/A'}`);
          await sleep(2000);

          // Hero screenshot
          const heroFile = path.join(pageDir, `${vp.name}_hero.png`);
          await page.screenshot({ path: heroFile });

          // Full page screenshot
          const fullFile = path.join(pageDir, `${vp.name}_full.png`);
          await page.screenshot({ path: fullFile, fullPage: true });

          console.log(`  Saved ${vp.name} hero and full page.`);
        } catch (err) {
          console.error(`  Error capturing ${pageInfo.name} at ${vp.name}:`, err.message);
        } finally {
          await page.close();
        }
      }
    }
    console.log('\n🎉 Achtrex visual verification captures complete!');
  } finally {
    await browser.close();
  }
}

run();
