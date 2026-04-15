import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape1938SecureEN() {
  const url = 'https://en.wikipedia.org/wiki/1938_FIFA_World_Cup_squads';
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const tables = $('table.sortable');
  const allSquads = [];

  tables.each((_, table) => {
      const squad = [];
      $(table).find('tr').each((i, row) => {
          if (i === 0) return; 
          const cols = $(row).find('td, th');
          if (cols.length < 4) return; 
          
          let posText = $(cols[1] || cols[0]).text().trim();
          let nameIndex = cols.length >= 6 ? 2 : 1;
          let name = $(cols[nameIndex]).find('a').first().text().trim() || $(cols[nameIndex]).text().trim();
          
          let pos = "Centrocampista";
          if (posText.includes("GK") || posText.includes("1GK")) pos = "Portero";
          else if (posText.includes("DF") || posText.includes("2DF")) pos = "Defensa";
          else if (posText.includes("MF") || posText.includes("3MF")) pos = "Centrocampista";
          else if (posText.includes("FW") || posText.includes("4FW")) pos = "Delantero";

          let clubCol = $(cols[cols.length - 1]);
          let clubName = clubCol.text().trim();
          if (!clubName || clubName === '') clubName = "Club Desconocido";

          name = name.split(',')[0].trim().replace(/\(.*?\)/g, '').trim();

          squad.push({ no: "-", pos, name, clubName, club: 'default' });
      });

      if (squad.length > 13) {
         allSquads.push(squad);
      }
  });

  const exactSigMap = {
    "Michele Andreolo": "italia",
    "Afonsinho": "brasil",
    "István Balogh": "hungria",
    "Jaroslav Bouček": "checoslovaquia",
    "Fritz Buchloh": "alemania",
    "André Abegglen": "suiza",
    "Alfred Aston": "francia",
    "Juan Alonzo": "cuba",
    "Stanisław Baran": "polonia",
    "Iuliu Baratky": "rumania",
    "Arne Brustad": "noruega",
    "Henock Abrahamsson": "suecia",
    "Arnold Badjou": "belgica",
    "Wim Anderiesen": "paises_bajos",
    "Sutan Anwar": "indias_orientales_neerlandesas"
  };

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1938.json';
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

      if (matchedId) {
          const t = data.participants.find(p => p.id === matchedId);
          if (t && t.squad.length === 0) {
              t.squad = squad;
          }
      }
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log("1938 Safe matched EN.");
}
scrape1938SecureEN();
