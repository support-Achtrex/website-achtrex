const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function test() {
  const outDir = path.join(__dirname, '..', 'public', 'screenshots', 'verification');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));
  
  const section = await page.$('#services-grid');
  if (section) {
    await section.scrollIntoView();
    await new Promise(r => setTimeout(r, 800));
    
    // Click next button 3 times to get to slide 4
    const nextBtn = await page.$('button[aria-label="Next service"]');
    if (nextBtn) {
      await nextBtn.click();
      await new Promise(r => setTimeout(r, 300));
      await nextBtn.click();
      await new Promise(r => setTimeout(r, 300));
      await nextBtn.click();
      await new Promise(r => setTimeout(r, 1000));
      await section.screenshot({ path: path.join(outDir, 'services-slider-slide4.png') });
      console.log('Saved slide 4 screenshot');
    }
  }
  await browser.close();
}
test().catch(console.error);
