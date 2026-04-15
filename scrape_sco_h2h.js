const cheerio = require('cheerio'); 

async function run() { 
  const res = await fetch('https://www.11v11.com/teams/aberdeen/tab/opposingTeams/'); 
  const html = await res.text(); 
  const $ = cheerio.load(html); 
  let results = [];
  
  $('table tbody tr').each((i, row) => { 
    const tds = $(row).find('td'); 
    if (tds.length >= 6) { 
      const team = $(tds[0]).text().trim(); 
      const p = parseInt($(tds[1]).text().trim(), 10); 
      const w = parseInt($(tds[2]).text().trim(), 10); 
      const d = parseInt($(tds[3]).text().trim(), 10); 
      const l = parseInt($(tds[4]).text().trim(), 10); 
      
      const targets = ['Celtic', 'Dundee', 'Dundee United', 'Heart of Midlothian', 'Hibernian', 'Kilmarnock', 'Motherwell', 'Rangers', 'Ross County', 'St Johnstone', 'St Mirren'];
      
      if (targets.includes(team)) { 
        results.push({ rival: team, P: p, W: w, D: d, L: l });
      } 
    } 
  }); 
  console.log("ABERDEEN H2H (11v11.com Source):");
  console.table(results);
} 
run();
