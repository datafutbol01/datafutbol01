const cheerio = require('cheerio');
const fs = require('fs');

async function getH2H(slugB) {
  const url = `https://www.livefutbol.com/equipos/aberdeen-fc/${slugB}/11/`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const text = await res.text();
    const $ = cheerio.load(text);
    
    let stats = null;
    $('table.standard_tbg tr').each((i, row) => {
        const rowText = $(row).text();
        if (rowText.includes('Suma')) {
            const tds = $(row).find('td');
            if(tds.length >= 6) {
                stats = {
                    PJ: parseInt($(tds[1]).text().trim() || 0),
                    W: parseInt($(tds[2]).text().trim() || 0),
                    D: parseInt($(tds[3]).text().trim() || 0),
                    L: parseInt($(tds[4]).text().trim() || 0)
                };
            }
        }
    });
    return stats;
  } catch(e) {
    return null;
  }
}

async function go() {
  const rivals = [
    { name: 'Celtic', slug: 'celtic-glasgow' },
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

  let results = [];
  for(let r of rivals) {
      console.log(`Buscando Aberdeen vs ${r.name}...`);
      const s = await getH2H(r.slug);
      if(s) {
          results.push({ Rival: r.name, PJ: s.PJ, W: s.W, D: s.D, L: s.L });
      } else {
          results.push({ Rival: r.name, Error: 'No data' });
      }
      await new Promise(res => setTimeout(res, 500));
  }
  
  console.log("ABERDEEN H2H TRIPLE CHEQUEO (LIVEFUTBOL VERIFIED):");
  console.table(results);
}
go();
