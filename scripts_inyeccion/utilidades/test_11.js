const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function run() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    await page.goto('https://www.11v11.com/teams/auxerre/tab/opposingTeams/opposition/Angers/', { waitUntil: 'networkidle2' });
    const text = await page.evaluate(() => document.body.innerText);
    
    if (text.includes('have won')) {
        console.log('SUCCESS! Found 11v11 match text.');
        console.log(text.substring(0, 1000));
    } else {
        console.log('Blocked by 11v11 or not found.', text.substring(0, 500));
    }
    
    await browser.close();
}
run();
