const fs = require('fs');

const queries = {
  1930: 'José Nasazzi 1930',
  1934: 'Giuseppe Meazza 1934',
  1938: 'Leônidas da Silva 1938',
  1950: 'Alcides Ghiggia 1950',
  1954: 'Ferenc Puskás 1954',
  1958: 'Didi 1958',
  1962: 'Garrincha 1962',
  1966: 'Eusébio 1966',
  1970: 'Pelé 1970',
  1990: 'Lothar Matthäus 1990',
  1994: 'Romário 1994',
  1998: 'Ronaldo 1998',
  2002: 'Ronaldinho 2002',
  2006: 'Zidane Materazzi',
  2014: 'Mario Götze 2014',
  2018: 'Luka Modrić 2018',
  2022: 'Lionel Messi 2022'
};

async function search() {
  for (const [year, q] of Object.entries(queries)) {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&utf8=&format=json&srnamespace=6`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.query.search && data.query.search.length > 0) {
            const title = data.query.search[0].title;
            const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
            const infoRes = await fetch(infoUrl);
            const infoData = await infoRes.json();
            const pages = infoData.query.pages;
            const pageId = Object.keys(pages)[0];
            console.log(`[${year}] URL: ${pages[pageId].imageinfo[0].url}`);
        } else {
            // Try fallback without year
            const fallbackQ = q.split(' ').slice(0, -1).join(' ');
            const fUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(fallbackQ)}&utf8=&format=json&srnamespace=6`;
            const fres = await fetch(fUrl);
            const fdata = await fres.json();
            if (fdata.query.search && fdata.query.search.length > 0) {
                const title = fdata.query.search[0].title;
                const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
                const infoRes = await fetch(infoUrl);
                const infoData = await infoRes.json();
                const pages = infoData.query.pages;
                const pageId = Object.keys(pages)[0];
                console.log(`[${year}] URL (fallback): ${pages[pageId].imageinfo[0].url}`);
            } else {
                 console.log(`[${year}] NO RESULTS`);
            }
        }
    } catch (e) {
        console.log(`[${year}] ERROR: ${e.message}`);
    }
  }
}
search();
