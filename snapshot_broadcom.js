const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    
    await page.goto('https://www.broadcom.com/', { waitUntil: 'networkidle2' });
    
    const pageData = await page.evaluate(() => {
        const sections = Array.from(document.querySelectorAll('section, header, footer, div.container, main div')).filter(el => el.innerText.trim().length > 0);
        
        let result = [];
        
        const headings = document.querySelectorAll('h1, h2, h3, a.nav-link');
        headings.forEach(h => {
             result.push({
                 tag: h.tagName,
                 text: h.innerText.trim()
             });
        });
        
        return result;
    });
    
    fs.writeFileSync('broadcom_structure.json', JSON.stringify(pageData, null, 2));
    
    console.log("Structure dumped.");
    await browser.close();
})();
