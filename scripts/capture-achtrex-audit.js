const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../public/screenshots/achtrex-audit');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function capture() {
  console.log('Launching browser for Achtrex audit...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--window-size=1920,1080'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  // 1. Homepage Hero
  console.log('Capturing Home Hero...');
  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(outDir, 'achtrex-home-hero.png') });

  // 2. Menu opened
  console.log('Capturing Opened Menu...');
  try {
    const menuBtn = await page.$('header button[aria-label="Toggle Navigation Menu"]');
    if (menuBtn) {
      await menuBtn.click();
      await new Promise(r => setTimeout(r, 1000));
      await page.screenshot({ path: path.join(outDir, 'achtrex-menu-opened.png') });
      const closeBtn = await page.$('button[aria-label="Close navigation menu"]');
      if (closeBtn) await closeBtn.click();
      await new Promise(r => setTimeout(r, 600));
    }
  } catch (err) {
    console.error('Menu capture error:', err.message);
  }

  // 3. Footer
  console.log('Capturing Footer...');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'achtrex-footer.png') });

  // 4. Services Page
  console.log('Capturing Services Overview...');
  await page.goto('http://127.0.0.1:3000/services', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, 'achtrex-services-hero.png') });
  await page.evaluate(() => window.scrollBy(0, 1100));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'achtrex-services-mid.png') });

  // 5. Projects Page
  console.log('Capturing Projects Gallery...');
  await page.goto('http://127.0.0.1:3000/projects', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, 'achtrex-projects-hero.png') });
  await page.evaluate(() => window.scrollBy(0, 1100));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'achtrex-projects-mid.png') });

  // 6. About Page
  console.log('Capturing About...');
  await page.goto('http://127.0.0.1:3000/about', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, 'achtrex-about-hero.png') });
  await page.evaluate(() => window.scrollBy(0, 1000));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'achtrex-about-mid.png') });

  // 7. Contact Page
  console.log('Capturing Contact...');
  await page.goto('http://127.0.0.1:3000/contact', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, 'achtrex-contact-hero.png') });
  await page.evaluate(() => window.scrollBy(0, 1000));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'achtrex-contact-mid.png') });

  // 8. Concept Detail Page
  console.log('Capturing Concept Detail (AURA)...');
  await page.goto('http://127.0.0.1:3000/projects/aura-interactive-vehicle', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, 'achtrex-case-aura-hero.png') });
  await page.evaluate(() => window.scrollBy(0, 1000));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'achtrex-case-aura-mid.png') });

  await browser.close();
  console.log('All Achtrex audit screenshots captured successfully!');
}

capture().catch(err => {
  console.error('Fatal audit error:', err);
  process.exit(1);
});
