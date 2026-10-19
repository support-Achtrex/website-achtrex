const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'screenshots', 'verification');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function runVerification() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Track console errors & failed requests
  const consoleErrors = [];
  const failedRequests = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('requestfailed', req => {
    failedRequests.push(`${req.url()} (${req.failure()?.errorText})`);
  });

  console.log('Testing Desktop 1920x1080...');
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000/projects/real-time-cgi-and-immersive-experiences', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  await new Promise(r => setTimeout(r, 1200));

  // 1. Capture Hero Section
  await page.screenshot({ path: path.join(outDir, '01-desktop-hero.png') });
  console.log('Saved 01-desktop-hero.png');

  // Check header theme initially (should be dark on hero)
  const initialHeaderTheme = await page.evaluate(() => document.documentElement.getAttribute('data-header-theme'));
  console.log('Initial Header Theme:', initialHeaderTheme);

  // 2. Scroll to Section 2 (Project Data) & Section 3
  await page.evaluate(() => {
    const s2 = document.getElementById('section_2');
    if (s2) s2.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '02-desktop-project-data.png') });
  console.log('Saved 02-desktop-project-data.png');

  const s2HeaderTheme = await page.evaluate(() => document.documentElement.getAttribute('data-header-theme'));
  console.log('Section 2 Header Theme (expected light):', s2HeaderTheme);

  // 3. Scroll to Section 3 (Intro Statement) & Section 4 (Immersive Experience)
  await page.evaluate(() => {
    const s4 = document.getElementById('section_4');
    if (s4) s4.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '03-desktop-immersive-experience.png') });
  console.log('Saved 03-desktop-immersive-experience.png');

  // 4. Scroll to Section 5 (Car Configurator)
  await page.evaluate(() => {
    const s5 = document.getElementById('section_5');
    if (s5) s5.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '04-desktop-car-configurator.png') });
  console.log('Saved 04-desktop-car-configurator.png');

  const s5HeaderTheme = await page.evaluate(() => document.documentElement.getAttribute('data-header-theme'));
  console.log('Section 5 Header Theme (expected dark):', s5HeaderTheme);

  // 5. Scroll to Section 6 (Real Estate and Pixel Streaming)
  await page.evaluate(() => {
    const s6 = document.getElementById('section_6');
    if (s6) s6.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '05-desktop-real-estate.png') });
  console.log('Saved 05-desktop-real-estate.png');

  // 6. Scroll to Section 7 (Virtual Showroom)
  await page.evaluate(() => {
    const s7 = document.getElementById('section_7');
    if (s7) s7.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '06-desktop-virtual-showroom.png') });
  console.log('Saved 06-desktop-virtual-showroom.png');

  // 7. Scroll to Section 8 (Related Projects Carousel)
  await page.evaluate(() => {
    const s8 = document.getElementById('section_8');
    if (s8) s8.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '07-desktop-related-projects.png') });
  console.log('Saved 07-desktop-related-projects.png');

  // Test carousel next arrow click
  await page.evaluate(() => {
    const nextBtn = document.querySelector('#section_8 button[aria-label="Next project"]');
    if (nextBtn) nextBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '08-desktop-carousel-next.png') });
  console.log('Saved 08-desktop-carousel-next.png (after clicking next)');

  // 8. Check Tablet (768x1024)
  console.log('Testing Tablet 768x1024...');
  await page.setViewport({ width: 768, height: 1024 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '09-tablet-hero.png') });
  await page.evaluate(() => {
    const s4 = document.getElementById('section_4');
    if (s4) s4.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '10-tablet-immersive-experience.png') });

  // 9. Check Mobile (390x844)
  console.log('Testing Mobile 390x844...');
  await page.setViewport({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '11-mobile-hero.png') });
  await page.evaluate(() => {
    const s2 = document.getElementById('section_2');
    if (s2) s2.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '12-mobile-project-data.png') });

  // Check for horizontal overflow
  const overflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log('Mobile horizontal overflow detected?:', overflow);

  // Summary
  console.log('\n--- VERIFICATION SUMMARY ---');
  console.log('Console errors:', consoleErrors.length ? consoleErrors : 'None');
  console.log('Failed requests (excluding favicon/external):', failedRequests.filter(r => !r.includes('favicon')));

  await browser.close();
  console.log('Verification finished successfully!');
}

runVerification().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
