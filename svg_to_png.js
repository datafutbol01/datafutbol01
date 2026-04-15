const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const svgs = [
    { src: 'rangers/Rangers_FC_2020.svg', dest: 'rangers.png', size: 512 },
    { src: 'aik/Allmänna_Idrottsklubben_Ishockey_Logo.svg', dest: 'aik.png', size: 512 },
    { src: 'norma_tallinn/Coat_of_arms_of_Tallinn_(Estonian_SSR).svg', dest: 'norma_tallinn.png', size: 512 }
  ];

  for (const item of svgs) {
    const fullSrc = path.join('c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar', item.src);
    if (!fs.existsSync(fullSrc)) continue;
    
    const svgCode = fs.readFileSync(fullSrc, 'utf8');
    await page.setContent(`<div id="container" style="width:${item.size}px; height:${item.size}px; display:flex; justify-content:center; align-items:center;">${svgCode}</div>`);
    
    // adjust svg to fill container
    await page.evaluate(() => {
      const svg = document.querySelector('svg');
      if (svg) {
        svg.style.width = '100%';
        svg.style.height = '100%';
      }
    });

    const element = await page.$('#container');
    await element.screenshot({ path: path.join('c:/Users/gonza/futbolhistoria/clubes/app/public/escudos', item.dest), omitBackground: true });
    console.log(`Converted ${item.dest}`);
  }

  await browser.close();
  console.log("Done");
})();
