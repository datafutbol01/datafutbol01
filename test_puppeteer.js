const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function run() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    await page.goto('https://www.livefutbol.com/clasificacion/fra-ligue-1-2023-2024/', { waitUntil: 'networkidle2' });
    
    // Evaluate links
    const links = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('table.standard_tbg a[href^="/equipos/"]'));
        return [...new Set(anchors.map(a => a.getAttribute('href').split('/')[2]))];
    });
    
    console.log(links);
    
    // Also try ligue 2 to get auxerre, angers
    await page.goto('https://www.livefutbol.com/clasificacion/fra-ligue-2-2023-2024/', { waitUntil: 'networkidle2' });
    const links2 = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('table.standard_tbg a[href^="/equipos/"]'));
        return [...new Set(anchors.map(a => a.getAttribute('href').split('/')[2]))];
    });
    
    console.log(links2);

    await browser.close();
}

run();
