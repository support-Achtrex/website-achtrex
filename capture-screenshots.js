const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const imagesDir = path.join(__dirname, 'public', 'projects');
  
  if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
  }

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set viewport to a typical desktop size
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to automotivedataset.com...');
  await page.goto('https://automotivedataset.com', { waitUntil: 'networkidle2' });

  // Take screenshot of the hero section
  console.log('Taking screenshot of the homepage hero...');
  await page.screenshot({ path: path.join(imagesDir, 'ad-hero-screenshot.png') });

  // Scroll down a bit to capture more of the page
  console.log('Scrolling and taking another screenshot...');
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(imagesDir, 'ad-features-screenshot.png') });

  // Navigate to documentation or databases
  console.log('Navigating to databases page...');
  await page.goto('https://automotivedataset.com/databases', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(imagesDir, 'ad-databases-screenshot.png') });

  // Navigate to developer portal
  console.log('Navigating to developers page...');
  await page.goto('https://automotivedataset.com/developers', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(imagesDir, 'ad-developers-screenshot.png') });

  await browser.close();
  console.log('Screenshots captured successfully!');
})();
