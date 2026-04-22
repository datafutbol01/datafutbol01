const cheerio = require('cheerio');
async function run() { 
  const url = 'https://www.ceroacero.es/xray.php?equipa_id=2515&equipa_vs_equipa_id=2503'; 
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0'} }); 
  const t = await res.text(); 
  const $ = cheerio.load(t); 
  console.log($('title').text()); 
  
  // Find the overall summary box
  const section = $('#entity_xray_match_summary');
  if (section.length) {
     const table = section.find('table').first();
     table.find('tr').each((i, row) => {
         console.log($(row).text().replace(/\s+/g, ' ').trim());
     });
  } else {
     console.log("No match summary found or URL invalid.");
  }
} 
run();
