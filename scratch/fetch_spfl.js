const cheerio = require('cheerio');

async function getTeams() {
  const url = 'https://www.livefutbol.com/clasificacion/sco-premiership-2025-2026/';
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if(res.status !== 200) {
        // try 2024-2025 just in case
         const r2 = await fetch('https://www.livefutbol.com/clasificacion/sco-premiership-2024-2025/', { headers: { 'User-Agent': 'Mozilla/5.0' } });
         const html2 = await r2.text();
         parseHtml(html2, "2024-2025 fallback");
         return;
    }
    const html = await res.text();
    parseHtml(html, "2025-2026");
  } catch(e) {
    console.error(e);
  }
}

function parseHtml(html, title) {
    const $ = cheerio.load(html);
    const teams = [];
    $('.standard_tbg').first().find('tr').each((i, row) => {
        const teamName = $(row).find('td').eq(2).text().trim();
        if(teamName && teamName.length > 2 && teamName !== 'Equipo') {
            teams.push(teamName);
        }
    });
    console.log(`--- TEAMS FOR ${title} ---`);
    console.log(teams.join('\n'));
}

getTeams();
