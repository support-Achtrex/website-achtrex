const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'screenshots', 'local-audit');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function capture() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // 1. Home Page Hero & Opened Menu & Footer
  console.log('Navigating to http://127.0.0.1:3000 ...');
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1500));

  await page.screenshot({ path: path.join(outDir, 'local-home-hero.png') });
  console.log('Saved local-home-hero.png');

  // Open menu
  const menuBtn = await page.$('button[aria-label="Toggle Navigation Menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'local-menu-opened.png') });
    console.log('Saved local-menu-opened.png');
    // Close menu by clicking the close button
    const closeBtn = await page.$('button[aria-label="Close navigation menu"]');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 600));
  }

  // Scroll to footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'local-footer.png') });
  console.log('Saved local-footer.png');

  // 2. Services Page
  console.log('Navigating to /services ...');
  await page.goto('http://127.0.0.1:3000/services', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'local-services-hero.png') });
  
  // Scroll to mid (first service split)
  await page.evaluate(() => window.scrollTo(0, window.innerHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'local-services-mid.png') });
  console.log('Saved local-services-hero.png & mid.png');

  // 3. Projects Page
  console.log('Navigating to /projects ...');
  await page.goto('http://127.0.0.1:3000/projects', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'local-projects-hero.png') });

  await page.evaluate(() => window.scrollTo(0, window.innerHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'local-projects-mid.png') });
  console.log('Saved local-projects-hero.png & mid.png');

  // 4. About Page
  console.log('Navigating to /about ...');
  await page.goto('http://127.0.0.1:3000/about', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'local-about-hero.png') });

  await page.evaluate(() => window.scrollTo(0, window.innerHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'local-about-mid.png') });
  console.log('Saved local-about-hero.png & mid.png');

  // 5. Contacts Page
  console.log('Navigating to /contact ...');
  await page.goto('http://127.0.0.1:3000/contact', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'local-contact-hero.png') });

  await page.evaluate(() => window.scrollTo(0, window.innerHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'local-contact-mid.png') });
  console.log('Saved local-contact-hero.png & mid.png');

  // 6. Case Study Detail Page
  console.log('Navigating to /projects/dodge-charger-ev-realtime-configurator ...');
  await page.goto('http://127.0.0.1:3000/projects/dodge-charger-ev-realtime-configurator', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'local-case-dodge-charger-hero.png') });

  await page.evaluate(() => window.scrollTo(0, window.innerHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'local-case-dodge-charger-mid.png') });
  console.log('Saved local-case-dodge-charger-hero.png & mid.png');

  // 7. Service Detail Page
  console.log('Navigating to /services/experience-design ...');
  await page.goto('http://127.0.0.1:3000/services/experience-design', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'local-service-experience-design-hero.png') });

  await page.evaluate(() => window.scrollTo(0, window.innerHeight));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'local-service-experience-design-mid.png') });
  console.log('Saved local-service-experience-design-hero.png & mid.png');

  await browser.close();
  console.log('All local screenshots captured successfully!');
}

capture().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
