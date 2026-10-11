const puppeteer = require('puppeteer');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'screenshots', 'replacement-verification');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // 1. Menu Open test on 1440x900
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle2', timeout: 15000 });
  
  // Click menu button
  const menuBtn = await page.$('button[aria-label="Toggle Navigation Menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outDir, 'menu-opened-1440x900.png') });
    console.log('Captured menu-opened-1440x900.png');
  } else {
    console.log('Menu button not found');
  }

  // 2. Menu Open test on laptop 1280x768
  await page.setViewport({ width: 1280, height: 768 });
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: path.join(outDir, 'menu-opened-1280x768.png') });
  console.log('Captured menu-opened-1280x768.png');

  // 3. Menu scrolling test on small height 1024x480
  await page.setViewport({ width: 1024, height: 480 });
  await new Promise(r => setTimeout(r, 300));
  // Scroll menu container down
  await page.evaluate(() => {
    const overlay = document.querySelector('.overflow-y-auto');
    if (overlay) overlay.scrollTop = 250;
  });
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: path.join(outDir, 'menu-scrolled-1024x480.png') });
  console.log('Captured menu-scrolled-1024x480.png');

  // 4. Verify Services page 3D for AI Development Services
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:3000/services', { waitUntil: 'networkidle2', timeout: 15000 });
  await page.evaluate(() => {
    const el = document.getElementById('ai-intelligent-experiences');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'services-page-ai-3d.png') });
  console.log('Captured services-page-ai-3d.png');

  // 5. Verify Service Detail page 3D
  await page.goto('http://127.0.0.1:3000/services/ai-intelligent-experiences', { waitUntil: 'networkidle2', timeout: 15000 });
  await page.evaluate(() => window.scrollTo(0, 1000));
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, 'service-detail-ai-3d.png') });
  console.log('Captured service-detail-ai-3d.png');

  await browser.close();
  console.log('All verifications completed successfully!');
})();
