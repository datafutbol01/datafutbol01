const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const clubsPath = 'app/src/data/clubes/espania';
const outputPath = 'app/src/data/ligas/espania_enfrentamientos.json';

const map11v11 = {
  'alaves': { slug11: 'alaves' },
  'athletic-club': { slug11: 'athletic-bilbao' },
  'atletico-madrid': { slug11: 'atletico-madrid' },
  'barcelona': { slug11: 'barcelona' },
  'celta-vigo': { slug11: 'celta-de-vigo' },
  'espanyol': { slug11: 'espanyol' },
  'getafe': { slug11: 'getafe' },
  'girona': { slug11: 'girona' },
  'las-palmas': { slug11: 'las-palmas' },
  'leganes': { slug11: 'leganes' },
  'mallorca': { slug11: 'mallorca' },
  'osasuna': { slug11: 'osasuna' },
  'rayo-vallecano': { slug11: 'rayo-vallecano' },
  'real-betis': { slug11: 'real-betis' },
  'real-madrid': { slug11: 'real-madrid' },
  'real-sociedad': { slug11: 'real-sociedad' },
  'real-valladolid': { slug11: 'real-valladolid' },
  'sevilla': { slug11: 'sevilla' },
  'valencia': { slug11: 'valencia' },
  'villarreal': { slug11: 'villarreal' }
};

// Ignore duplicate/extra files not in current 20 LaLiga
const ignore = ['elche.json', 'real-oviedo.json', 'valladolid.json'];

async function buildMatchups() {
  const files = fs.readdirSync(clubsPath).filter(f => f.endsWith('.json') && !ignore.includes(f));
  const clubs = [];

  for (const f of files) {
    const raw = fs.readFileSync(`${clubsPath}/${f}`, 'utf8');
    try {
        const data = JSON.parse(raw);
        if (map11v11[data.id]) {
            clubs.push({
                id: data.id,
                name: data.datos.nombre_corto || data.datos.nombre_completo,
                color: data.datos.color_principal || '#ffffff',
                slug11: map11v11[data.id].slug11
            });
        }
    } catch(e) {}
  }

  console.log(`Loaded ${clubs.length} Spanish clubs for scraping.`);
  if (clubs.length !== 20) {
      console.warn('Warning: expected 20 clubs but got', clubs.length);
  }

  const matchups = [];
  const delay = ms => new Promise(res => setTimeout(res, ms));

  let total = 0;
  for (let i = 0; i < clubs.length; i++) {
    for (let j = i + 1; j < clubs.length; j++) {
      total++;
    }
  }

  let count = 0;
  for (let i = 0; i < clubs.length; i++) {
    for (let j = i + 1; j < clubs.length; j++) {
      const teamA = clubs[i];
      const teamB = clubs[j];
      count++;
      
      const matchId = `${teamA.id}-vs-${teamB.id}`;
      // Clean slug format for 11v11 URL
      const BForUrl = teamB.slug11.replace(/-/g, ' ');
      // Usually the URL is: /teams/[slug]/tab/opposingTeams/opposition/[slug_capitalized]/
      // Let's create an exact capitalize function just like 11v11 needs (e.g. Real Madrid)
      const formattedB = BForUrl.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('%20');
      
      const url = `https://www.11v11.com/teams/${teamA.slug11}/tab/opposingTeams/opposition/${formattedB}/`;

      try {
        process.stdout.write(`[${count}/${total}] Fetching ${teamA.name} vs ${teamB.name}... `);
        const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36' }, timeout: 10000 });
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

        if (vA === 0 && vB === 0 && emp === 0) {
            console.log('0-0-0 (Not found or no matches)');
        } else {
            console.log(`${vA}W - ${emp}D - ${vB}L`);
        }

        matchups.push({
          id: matchId,
          equipo_a: teamA.name,
          equipo_b: teamB.name,
          color_a: teamA.color,
          color_b: teamB.color,
          pj: vA + vB + emp,
          victorias_a: vA,
          victorias_b: vB,
          empates: emp,
          goles_a: 0,
          goles_b: 0,
          pg_a: vA,
          pe: emp,
          pg_b: vB
        });

      } catch (err) {
        console.log(`Failed (HTTP ${err.response?.status || err.message})`);
        // We still push empty
        matchups.push({
          id: matchId,
          equipo_a: teamA.name,
          equipo_b: teamB.name,
          color_a: teamA.color,
          color_b: teamB.color,
          pj: 0, victorias_a: 0, victorias_b: 0, empates: 0, goles_a: 0, goles_b: 0, pg_a: 0, pe: 0, pg_b: 0
        });
      }
      
      await delay(800); // 800ms throttle
    }
  }

  // Ensure JSON mapping
  fs.writeFileSync(outputPath, JSON.stringify(matchups, null, 2));
  console.log(`Finished correctly! Saved ${matchups.length} matchups.`);
}

buildMatchups();
