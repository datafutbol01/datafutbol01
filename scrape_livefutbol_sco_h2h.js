const cheerio = require('cheerio');

async function getH2H(teamA, slugA, teamB, slugB) {
  const url = `https://www.livefutbol.com/equipos/${slugA}/${slugB}/11/`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }});
    const html = await res.text();
    const $ = cheerio.load(html);
    
    let p = 0, w = 0, d = 0, l = 0, gf = 0, gc = 0;
    
    // In livefutbol, the summary is typically in a table cell. Let's look for "Balance"
    $('table.standard_tbg').each((i, table) => {
      if ($(table).text().includes('Balance')) {
        $(table).find('tr').each((j, row) => {
          const tds = $(row).find('td');
          if (tds.length >= 6 && $(tds[0]).text().includes('Suma')) {
            p = parseInt($(tds[1]).text().trim(), 10);
            w = parseInt($(tds[2]).text().trim(), 10);
            d = parseInt($(tds[3]).text().trim(), 10);
            l = parseInt($(tds[4]).text().trim(), 10);
            const goals = $(tds[5]).text().trim().split(':');
            gf = parseInt(goals[0], 10);
            gc = parseInt(goals[1], 10);
          }
        });
      }
    });

    return { rival: teamB, P: p, W: w, D: d, L: l, GF: gf, GC: gc };
  } catch(e) {
    return { rival: teamB, error: e.message };
  }
}

async function run() {
  const rivals = [
    { name: 'Celtic', slug: 'celtic-fc' },
    { name: 'Dundee', slug: 'dundee-fc' },
    { name: 'Dundee United', slug: 'dundee-united' },
    { name: 'Falkirk', slug: 'falkirk-fc' },
    { name: 'Heart of Midlothian', slug: 'heart-of-midlothian' },
    { name: 'Hibernian', slug: 'hibernian-fc' },
    { name: 'Kilmarnock', slug: 'kilmarnock-fc' },
    { name: 'Livingston', slug: 'livingston-fc' },
    { name: 'Motherwell', slug: 'motherwell-fc' },
    { name: 'Rangers', slug: 'rangers-fc' },
    { name: 'St Mirren', slug: 'st-mirren-fc' }
  ];

  const results = [];
  for (const rival of rivals) {
    const res = await getH2H('Aberdeen', 'aberdeen-fc', rival.name, rival.slug);
    results.push(res);
    // delay to avoid ban
    await new Promise(r => setTimeout(r, 500));
  }
  
  console.log("ABERDEEN H2H TRIPLE CHEQUEO:");
  console.table(results);
}
run();
