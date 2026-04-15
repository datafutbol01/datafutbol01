const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function run() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  const teamA = 'aberdeen-fc';
  const rivals = [
    { name: 'Celtic', slug: 'celtic-fc' },
    { name: 'Dundee', slug: 'dundee-fc' },
    { name: 'Dundee United', slug: 'dundee-united' },
    { name: 'Heart of Midlothian', slug: 'heart-of-midlothian' },
    { name: 'Hibernian', slug: 'hibernian-fc' },
    { name: 'Kilmarnock', slug: 'kilmarnock-fc' },
    { name: 'Motherwell', slug: 'motherwell-fc' },
    { name: 'Rangers', slug: 'rangers-fc' },
    { name: 'Ross County', slug: 'ross-county' },
    { name: 'St Johnstone', slug: 'st-johnstone-fc' },
    { name: 'St Mirren', slug: 'st-mirren-fc' }
  ];

  const results = [];

  for (const rival of rivals) {
    const url = `https://www.livefutbol.com/equipos/${teamA}/${rival.slug}/11/`;
    
    let retries = 3;
    let found = false;
    
    while(retries > 0 && !found) {
        try {
          process.stdout.write(`Fetching against ${rival.name}... `);
          await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
          
          const stats = await page.evaluate(() => {
              let p = 0, w = 0, d = 0, l = 0;
              const trs = Array.from(document.querySelectorAll('table.standard_tbg tr'));
              for(let tr of trs) {
                 if(tr.innerText.includes('Suma')) {
                     const tds = tr.querySelectorAll('td');
                     if(tds.length >= 5) {
                         p = parseInt(tds[1].innerText.trim() || 0);
                         w = parseInt(tds[2].innerText.trim() || 0);
                         d = parseInt(tds[3].innerText.trim() || 0);
                         l = parseInt(tds[4].innerText.trim() || 0);
                         return { p, w, d, l };
                     }
                 }
              }
              return null;
          });

          if (stats) {
             console.log(`P:${stats.p} W:${stats.w} D:${stats.d} L:${stats.l}`);
             results.push({ Rival: rival.name, PJ: stats.p, W: stats.w, D: stats.d, L: stats.l });
             found = true;
          } else {
             throw new Error("No data found");
          }
        } catch (err) {
          retries--;
          console.log(`Failed. Retries left: ${retries}`);
          await new Promise(r => setTimeout(r, 2000));
        }
    }
    
    if(!found) {
        results.push({ Rival: rival.name, error: 'Could not fetch' });
    }
    
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log("\nABERDEEN H2H TRIPLE CHEQUEO (LIVEFUTBOL VERIFIED):");
  console.table(results);
  
  await browser.close();
}

run();
