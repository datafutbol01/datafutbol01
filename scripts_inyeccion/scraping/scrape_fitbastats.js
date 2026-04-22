const cheerio = require('cheerio'); 

async function run() { 
  const res = await fetch('http://www.fitbastats.com/aberdeen/club_records_opposition.php'); 
  const text = await res.text(); 
  const $ = cheerio.load(text); 
  
  const results = [];
  $('table').each((i, table) => {
    $(table).find('tr').each((j, row) => { 
      const tds = $(row).find('td'); 
      if(tds.length >= 6) {
        const rival = $(tds[0]).text().trim();
        const p = parseInt($(tds[1]).text().trim(), 10);
        const w = parseInt($(tds[2]).text().trim(), 10);
        const d = parseInt($(tds[3]).text().trim(), 10);
        const l = parseInt($(tds[4]).text().trim(), 10);
        
        const targets = ['Celtic', 'Dundee', 'Dundee United', 'Falkirk', 'Heart of Midlothian', 'Hibernian', 'Kilmarnock', 'Livingston', 'Motherwell', 'Rangers', 'St Mirren', 'St. Mirren'];
        
        if (targets.includes(rival)) {
           results.push({ Rival: rival, PJ: p, W: w, D: d, L: l });
        }
      } 
    }); 
  });
  
  console.log("ABERDEEN H2H (FitbaStats):");
  console.table(results);
} 
run();
