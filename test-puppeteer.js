
const puppeteer = require('puppeteer');

async function test() {
    try {
        console.log("Launching browser...");
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            headless: true
        });
        console.log("Browser launched successfully!");
        const page = await browser.newPage();
        await page.setContent('<h1>Test</h1>');
        const pdf = await page.pdf();
        console.log("PDF generated successfully! Size:", pdf.length);
        await browser.close();
    } catch (e) {
        console.error("Puppeteer test failed:", e);
    }
}

test();
