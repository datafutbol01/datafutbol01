import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Capturar todos los errores
    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.log('BROWSER_ERROR:', msg.text());
        }
    });

    page.on('pageerror', err => {
        console.log('PAGE_ERROR:', err.message);
    });

    try {
        await page.goto('http://localhost:5174/mundiales', { waitUntil: 'networkidle2' });
        console.log('DOM Loaded. Clicking 1986...');
        await page.waitForSelector('#wc-year-1986');
        await page.click('#wc-year-1986');
        
        await new Promise(r => setTimeout(r, 2000));
        console.log('Done waiting for errors.');
    } catch (e) {
        console.log('Puppeteer Error:', e);
    } finally {
        await browser.close();
    }
})();
