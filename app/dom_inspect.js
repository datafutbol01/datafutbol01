import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    try {
        await page.goto('http://localhost:5174/mundiales', { waitUntil: 'networkidle2' });
        await page.waitForSelector('#wc-year-1986');
        await page.click('#wc-year-1986');
        
        await new Promise(r => setTimeout(r, 1000));
        
        // Extraer tooodo el texto o estructura del contenedor principal
        const html = await page.$eval('h2.title-font', el => el.parentElement.parentElement.parentElement.outerHTML);
        console.log(html);
        
    } catch (e) {
        console.log('Puppeteer Error:', e);
    } finally {
        await browser.close();
    }
})();
