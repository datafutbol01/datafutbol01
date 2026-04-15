const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeH2H() {
  const teamA = 'aberdeen';
  const rivals = [
    { name: 'Celtic', slug11ForUrl: 'Celtic' },
    { name: 'Dundee', slug11ForUrl: 'Dundee' },
    { name: 'Dundee United', slug11ForUrl: 'Dundee%20United' },
    { name: 'Falkirk', slug11ForUrl: 'Falkirk' },
    { name: 'Heart of Midlothian', slug11ForUrl: 'Heart%20of%20Midlothian' },
    { name: 'Hibernian', slug11ForUrl: 'Hibernian' },
    { name: 'Kilmarnock', slug11ForUrl: 'Kilmarnock' },
    { name: 'Livingston', slug11ForUrl: 'Livingston' },
    { name: 'Motherwell', slug11ForUrl: 'Motherwell' },
    { name: 'Rangers', slug11ForUrl: 'Rangers' },
    { name: 'St Mirren', slug11ForUrl: 'St%20Mirren' }
  ];

  const results = [];
  const delay = ms => new Promise(res => setTimeout(res, ms));

  for (const rival of rivals) {
    const url = `https://www.11v11.com/teams/${teamA}/tab/opposingTeams/opposition/${rival.slug11ForUrl}/`;
    try {
      process.stdout.write(`Fetching Aberdeen vs ${rival.name}... `);
      const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 10000 });
      const $ = cheerio.load(res.data);
      const text = $('body').text().replace(/\s+/g, ' ');

      let vA = 0, vB = 0, emp = 0;
      const bodyText = text.substring(0, 5000);
      
      let match1 = bodyText.match(/have won (\d+)/gi);
      let match2 = bodyText.match(/drawn (\d+)/i);
      
      if (match1 && match1.length >= 2) {
           vA = parseInt(match1[0].replace(/[^0-9]/g, ''));
           vB = parseInt(match1[1].replace(/[^0-9]/g, ''));
      }
      if (match2) {
           emp = parseInt(match2[0].replace(/[^0-9]/g, ''));
      }

      console.log(`P:${vA+vB+emp} W:${vA} D:${emp} L:${vB}`);
      results.push({ Rival: rival.name, PJ: vA + vB + emp, W: vA, D: emp, L: vB });

    } catch (err) {
      console.log(`Failed (HTTP ${err.response?.status || err.message})`);
    }
    await delay(1000); // 1 sec delay to avoid blocking
  }

  console.log("\nFINAL REPORT ABERDEEN H2H:");
  console.table(results);
}

scrapeH2H();
