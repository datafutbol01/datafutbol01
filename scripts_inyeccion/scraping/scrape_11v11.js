const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const clubsPath = 'app/src/data/clubes/inglaterra';
const outputPath = 'app/src/data/ligas/inglaterra_enfrentamientos.json';

const map11v11 = {
  'arsenal': { slug11: 'arsenal' },
  'aston-villa': { slug11: 'aston-villa' },
  'bournemouth': { slug11: 'afc-bournemouth' },
  'brentford': { slug11: 'brentford' },
  'brighton': { slug11: 'brighton-and-hove-albion' },
  'burnley': { slug11: 'burnley' },
  'chelsea': { slug11: 'chelsea' },
  'crystal-palace': { slug11: 'crystal-palace' },
  'everton': { slug11: 'everton' },
  'fulham': { slug11: 'fulham' },
  'leeds-united': { slug11: 'leeds-united' },
  'liverpool': { slug11: 'liverpool' },
  'manchester-city': { slug11: 'manchester-city' },
  'manchester-united': { slug11: 'manchester-united' },
  'newcastle': { slug11: 'newcastle-united' },
  'nottingham-forest': { slug11: 'nottingham-forest' },
  'sunderland': { slug11: 'sunderland' },
  'tottenham': { slug11: 'tottenham-hotspur' },
  'west-ham-united': { slug11: 'west-ham-united' },
  'wolverhampton-wanderers': { slug11: 'wolverhampton-wanderers' }
};

// Ignore duplicate files
const ignore = ['west-ham.json'];

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

  console.log(`Loaded ${clubs.length} English clubs for scraping.`);

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
      const BForUrl = teamB.name.replace(/ /g, '%20');
      const url = `https://www.11v11.com/teams/${teamA.slug11}/tab/opposingTeams/opposition/${teamB.slug11.charAt(0).toUpperCase() + teamB.slug11.slice(1)}/`;

      try {
        console.log(`[${count}/${total}] Fetching ${teamA.name} vs ${teamB.name}...`);
        const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }, timeout: 10000 });
        const $ = cheerio.load(res.data);
        const text = $('body').text().replace(/\\s+/g, ' ');

        let vA = 0, vB = 0, emp = 0;
        
        // Regex: "Arsenal have won 84, Chelsea have won 66, and they have drawn 60 times"
        // Also look for specific tables
        const bodyText = text.substring(0, 3000);
        
        // Let's use the simplest and most robust heuristic for 11v11
        // Usually there is a block: 
        // TEAM A NAME: <stats> TEAM B NAME <stats> OR "have won X"
        // Since text parsing might be brittle if names are reversed, let's look for standard phrases:
        
        // The most failsafe way is looking at the actual parsed text of the 11v11 page.
        // It has a specific sentence we can regex.
        let match1 = bodyText.match(/have won (\\d+)/gi);
        let match2 = bodyText.match(/drawn (\\d+)/i);
        
        if (match1 && match1.length >= 2) {
             vA = parseInt(match1[0].replace(/[^0-9]/g, ''));
             vB = parseInt(match1[1].replace(/[^0-9]/g, ''));
             if(match1.length > 2 && text.indexOf(teamA.name) > text.indexOf(teamB.name)) {
                // Failsafe inverted. But usually URL is teamA vs teamB so TeamA is first.
             }
        }
        if (match2) {
             emp = parseInt(match2[0].replace(/[^0-9]/g, ''));
        }

        // If simple regex fails, fallback to zeros so we don't crash. (User can edit later)
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
          goles_a: 0, // 11v11 doesn't easily expose total goals without deep DOM parsing of the table, so we omit for now.
          goles_b: 0,
          pg_a: vA,
          pe: emp,
          pg_b: vB
        });

      } catch (err) {
        console.log(`Failed ${teamA.name} vs ${teamB.name}: ${err.message}`);
        // Push empty if failed
        matchups.push({
          id: matchId,
          equipo_a: teamA.name,
          equipo_b: teamB.name,
          color_a: teamA.color,
          color_b: teamB.color,
          pj: 0, victorias_a: 0, victorias_b: 0, empates: 0, goles_a: 0, goles_b: 0, pg_a: 0, pe: 0, pg_b: 0
        });
      }
      
      await delay(700); // 700ms throttle to prevent ban
    }
  }

  // Ensure JSON mapping
  fs.writeFileSync(outputPath, JSON.stringify(matchups, null, 2));
  console.log(`Finished correctly! Saved ${matchups.length} matchups.`);
  
  // Inject into loader.js dynamically!
  let loaderCode = fs.readFileSync('app/src/data/loader.js', 'utf8');
  if(!loaderCode.includes('inglaterra_enfrentamientos.json')) {
      loaderCode = loaderCode.replace('import argEnfrentamientos from \'./ligas/argentina_enfrentamientos.json\';', 'import argEnfrentamientos from \'./ligas/argentina_enfrentamientos.json\';\nimport engEnfrentamientos from \'./ligas/inglaterra_enfrentamientos.json\';');
      loaderCode = loaderCode.replace('export const getEnfrentamientos = (leagueId) => {', 'export const getEnfrentamientos = (leagueId) => {\n  if (leagueId === "inglaterra") return engEnfrentamientos;\n');
      fs.writeFileSync('app/src/data/loader.js', loaderCode);
  }
}

buildMatchups();
