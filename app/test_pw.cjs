const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    // Catch console errors from the internal page
    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.error('BROWSER ERROR:', msg.text());
        }
    });
    
    // Catch uncaught exceptions in the page
    page.on('pageerror', error => {
        console.error('PAGE EXCEPTION:', error.message);
    });

    try {
        await page.goto('http://localhost:4173', { waitUntil: 'networkidle0', timeout: 10000 });
        console.log("Page loaded successfully.");
        
        // Let's check some text is rendered, e.g. "Argentina"
        const content = await page.content();
        if (content.includes('Argentina')) {
            console.log('Main feed rendered properly.');
        } else {
            console.log('Warning: No Argentina found.');
        }
        
        // Wait a bit
        await new Promise(r => setTimeout(r, 2000));
        
    } catch(e) {
        console.error("Puppeteer navigation error", e);
    }
    await browser.close();
    process.exit(0);
})();
