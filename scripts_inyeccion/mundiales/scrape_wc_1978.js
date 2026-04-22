import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape1978SecureEN() {
  const url = 'https://en.wikipedia.org/wiki/1978_FIFA_World_Cup_squads';
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const tables = $('table');
  const allSquads = [];

  tables.each((_, table) => {
      const squad = [];
      $(table).find('tr').each((i, row) => {
          if (i === 0) return; 
          const cols = $(row).find('td, th');
          if (cols.length < 4) return; 
          
          let noText = $(cols[0]).text().trim();
          let no = parseInt(noText);
          if (isNaN(no)) return;
          
          let posText = $(cols[1]).text().trim();
          let name = $(cols[2]).find('a').first().text().trim() || $(cols[2]).text().trim();
          
          let pos = "Centrocampista";
          if (posText.includes("GK")) pos = "Portero";
          else if (posText.includes("DF")) pos = "Defensa";
          else if (posText.includes("MF")) pos = "Centrocampista";
          else if (posText.includes("FW")) pos = "Delantero";

          let clubCol = $(cols[cols.length - 1]);
          let clubName = clubCol.text().trim();
          if (!clubName || clubName === '') clubName = "Club Desconocido";

          name = name.split(',')[0].trim().replace(/\(.*?\)/g, '').trim();

          squad.push({ no, pos, name, clubName, club: 'default' });
      });

      if (squad.length > 15) {
         allSquads.push(squad);
      }
  });

  const exactSigMap = {
    "Mario Kempes": "argentina",
    "Ruud Krol": "paises_bajos",
    "Roberto Dinamite": "brasil",
    "Paolo Rossi": "italia",
    "Karl-Heinz Rummenigge": "alemania_federal",
    "Grzegorz Lato": "polonia",
    "Hans Krankl": "austria",
    "Teófilo Cubillas": "peru",
    "Tarak Dhiab": "tunez",
    "Juanito": "espana",
    "Michel Platini": "francia",
    "Kenny Dalglish": "escocia",
    "Ali Parvin": "iran",
    "Tibor Nyilasi": "hungria",
    "Hugo Sánchez": "mexico",
    "Ronnie Hellström": "suecia"
  };

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1978.json';
  let data = JSON.parse(fs.readFileSync(file, 'utf8'));
  data.participants.forEach(p => p.squad = []);

  allSquads.forEach(squad => {
      const fullText = squad.map(s => s.name).join(" /// ");
      
      let matchedId = null;
      for (const [sig, id] of Object.entries(exactSigMap)) {
          if (fullText.includes(sig) || fullText.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(sig.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
              matchedId = id;
              break;
          }
      }

      if (!matchedId) {
          if (fullText.includes('Fillol')) matchedId = 'argentina';
          else if (fullText.includes('Rensenbrink')) matchedId = 'paises_bajos';
          else if (fullText.includes('Rivelino') || fullText.includes('Rivellino')) matchedId = 'brasil';
          else if (fullText.includes('Zoff')) matchedId = 'italia';
          else if (fullText.includes('Vogts')) matchedId = 'alemania_federal';
          else if (fullText.includes('Deyna')) matchedId = 'polonia';
          else if (fullText.includes('Prohaska')) matchedId = 'austria';
          else if (fullText.includes('Chumpitaz')) matchedId = 'peru';
          else if (fullText.includes('Agrebi')) matchedId = 'tunez';
          else if (fullText.includes('Santillana')) matchedId = 'espana';
          else if (fullText.includes('Trésor')) matchedId = 'francia';
          else if (fullText.includes('Macari')) matchedId = 'escocia';
          else if (fullText.includes('Hejazi')) matchedId = 'iran';
          else if (fullText.includes('Fazekas') || fullText.includes('Törőcsik')) matchedId = 'hungria';
          else if (fullText.includes('Cuéllar') || fullText.includes('Lugo')) matchedId = 'mexico';
          else if (fullText.includes('Nordqvist') || fullText.includes('Sjöberg')) matchedId = 'suecia';
      }

      if (matchedId) {
          const t = data.participants.find(p => p.id === matchedId);
          if (t && t.squad.length === 0) {
              t.squad = squad;
          }
      }
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log("1978 Safe matched EN.");
}
scrape1978SecureEN();
