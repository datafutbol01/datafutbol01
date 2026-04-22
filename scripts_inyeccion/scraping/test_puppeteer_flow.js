const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const fs = require('fs');

async function scrapeLivefutbol() {
    console.log("Starting Puppeteer Stealth crawler for Livefutbol...");
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Test if we can access Livefutbol
    try {
        await page.goto('https://www.livefutbol.com/equipos/bayern-muenchen/', { waitUntil: 'domcontentloaded' });
        const title = await page.title();
        console.log("Page title: " + title);
        
        // Find the 'Historial contra...' link
        const h2hLink = await page.evaluate(() => {
            const links = Array.from(document.querySelectorAll('a'));
            const link = links.find(a => a.textContent && a.textContent.includes('Historial contra...'));
            return link ? link.href : null;
        });
        
        console.log("H2H Link for Bayern: ", h2hLink);
        
        if (h2hLink) {
            await page.goto(h2hLink);
            const body = await page.content();
            console.log("H2H Page loaded. Size: " + body.length);
            
            // To find 'Borussia Dortmund' inside the H2H page list:
            const dortmundLink = await page.evaluate(() => {
                const links = Array.from(document.querySelectorAll('a'));
                const tdLink = links.find(a => a.textContent && a.textContent.trim() === 'Borussia Dortmund');
                return tdLink ? tdLink.href : null;
            });
            console.log("Link to Dortmund H2H: " + dortmundLink);
            
             if (dortmundLink) {
                 await page.goto(dortmundLink);
                 const h2hHtml = await page.content();
                 console.log(h2hHtml.includes('Balance total') ? 'FOUND BALANCE TOTAL!' : 'NO BALANCE TOTAL');
             }
        }
        
    } catch(e) {
        console.error("Puppeteer Error: ", e.message);
    } finally {
        await browser.close();
    }
}
scrapeLivefutbol();
