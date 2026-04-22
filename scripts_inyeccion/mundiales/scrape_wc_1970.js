import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape1970SecureEN() {
  const url = 'https://en.wikipedia.org/wiki/1970_FIFA_World_Cup_squads';
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
    "Lev Yashin": "urs",
    "Ignacio Calderón": "mexico",
    "Paul Van Himst": "belgica",
    "Mauricio Alonso Rodríguez": "el_salvador",
    "Giacinto Facchetti": "italia",
    "Pedro Rocha": "uruguay",
    "Ove Grahn": "suecia",
    "Mordechai Spiegler": "israel",
    "Pelé": "brasil",
    "Bobby Moore": "inglaterra",
    "Mircea Lucescu": "rumania",
    "Ivo Viktor": "checoslovaquia",
    "Franz Beckenbauer": "alemania_federal",
    "Teófilo Cubillas": "peru",
    "Hristo Bonev": "bulgaria",
    "Allal Ben Kassou": "marruecos"
  };

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1970.json';
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
          if (fullText.includes('Yashin') || fullText.includes('Khmelnytskyi')) matchedId = 'urs';
          else if (fullText.includes('Zico')) matchedId = 'brasil'; // Zico not in 70
          else if (fullText.includes('Jairzinho')) matchedId = 'brasil';
          else if (fullText.includes('Banks') || fullText.includes('Charlton')) matchedId = 'inglaterra';
          else if (fullText.includes('Riva') || fullText.includes('Mazzola')) matchedId = 'italia';
          else if (fullText.includes('Gerd Müller')) matchedId = 'alemania_federal';
          else if (fullText.includes('Chumpitaz')) matchedId = 'peru';
          else if (fullText.includes('Lambert')) matchedId = 'belgica';
          else if (fullText.includes('Peña') || fullText.includes('Fragoso')) matchedId = 'mexico';
          else if (fullText.includes('Quintano') || fullText.includes('Martinez')) matchedId = 'el_salvador'; 
          else if (fullText.includes('Mazurkiewicz') || fullText.includes('Ancheta')) matchedId = 'uruguay';
          else if (fullText.includes('Nordqvist')) matchedId = 'suecia';
          else if (fullText.includes('Rosenthal')) matchedId = 'israel';
          else if (fullText.includes('Dumitrache')) matchedId = 'rumania';
          else if (fullText.includes('Petráš')) matchedId = 'checoslovaquia';
          else if (fullText.includes('Dermendzhiev')) matchedId = 'bulgaria';
          else if (fullText.includes('Ghazouani')) matchedId = 'marruecos';
          else if (fullText.includes('Jorge González')) matchedId = 'el_salvador';
      }

      if (matchedId) {
          const t = data.participants.find(p => p.id === matchedId);
          if (t && t.squad.length === 0) {
              t.squad = squad;
          }
      }
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log("1970 Safe matched EN.");
}
scrape1970SecureEN();
