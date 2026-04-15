const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('https://www.ceroacero.es/search.php?buscar=equipas&query=boca+juniors', {waitUntil: 'domcontentloaded'});
    await new Promise(r => setTimeout(r, 2000));
    
    const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a')).map(a => a.href).filter(href => href.includes('boca'));
    });
    console.log(links.slice(0, 15));
    await browser.close();
})();
