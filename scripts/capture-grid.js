const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 1000 });
    await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle2', timeout: 20000 });
    
    // Scroll to #services-grid
    await page.evaluate(() => {
      const el = document.getElementById('services-grid');
      if (el) el.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 1000));

    const el = await page.$('#services-grid');
    if (el) {
      await el.screenshot({ path: 'public/screenshots/services-grid-verification.png' });
      console.log('Saved public/screenshots/services-grid-verification.png');
    } else {
      console.log('#services-grid not found');
    }
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
  }
})();
