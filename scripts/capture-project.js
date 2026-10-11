const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 1200 });
    await page.goto('http://127.0.0.1:3000/projects/automotive-spatial-configurator', { waitUntil: 'networkidle2', timeout: 25000 });
    
    // Scroll down to the Spatial Configurator Engine section
    await page.evaluate(() => {
      const h2 = Array.from(document.querySelectorAll('h2')).find(el => el.textContent.includes('Live Experience Surface'));
      if (h2) h2.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 1500));

    await page.screenshot({ path: 'public/screenshots/project-configurator-engine.png' });
    console.log('Saved public/screenshots/project-configurator-engine.png');

    // Scroll down to the Interactive Spatial Simulation section
    await page.evaluate(() => {
      const h3 = Array.from(document.querySelectorAll('h3')).find(el => el.textContent.includes('Interactive Spatial Simulation'));
      if (h3) h3.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 1500));

    await page.screenshot({ path: 'public/screenshots/project-spatial-simulation-grid.png' });
    console.log('Saved public/screenshots/project-spatial-simulation-grid.png');

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
  }
})();
