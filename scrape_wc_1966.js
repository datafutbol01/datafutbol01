import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape1966SecureEN() {
  const url = 'https://en.wikipedia.org/wiki/1966_FIFA_World_Cup_squads';
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
    "Bobby Moore": "inglaterra",
    "Ladislao Mazurkiewicz": "uruguay",
    "Antonio Carbajal": "mexico",
    "Robert Herbin": "francia",
    "Franz Beckenbauer": "alemania_federal",
    "Antonio Rattín": "argentina",
    "Luis Suárez": "espana",
    "Karl Elsener": "suiza",
    "Eusébio": "portugal",
    "Flórián Albert": "hungria",
    "Pelé": "brasil",
    "Georgi Asparuhov": "bulgaria",
    "Lev Yashin": "urs",
    "Pak Doo-ik": "corea_del_norte",
    "Sandro Mazzola": "italia",
    "Leonel Sánchez": "chile"
  };

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1966.json';
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
          if (fullText.includes('Banks') || fullText.includes('Charlton')) matchedId = 'inglaterra';
          else if (fullText.includes('Rocha') || fullText.includes('Cortés')) matchedId = 'uruguay';
          else if (fullText.includes('Borja') || fullText.includes('Fragoso')) matchedId = 'mexico';
          else if (fullText.includes('Gondet') || fullText.includes('Djorkaeff')) matchedId = 'francia';
          else if (fullText.includes('Seeler') || fullText.includes('Müller')) matchedId = 'alemania_federal';
          else if (fullText.includes('Perfumo') || fullText.includes('Pastoriza')) matchedId = 'argentina';
          else if (fullText.includes('Gento') || fullText.includes('Zoco')) matchedId = 'espana';
          else if (fullText.includes('Brodmann') || fullText.includes('Hosp')) matchedId = 'suiza';
          else if (fullText.includes('Coluna') || fullText.includes('Torres')) matchedId = 'portugal';
          else if (fullText.includes('Bene') || fullText.includes('Farkas')) matchedId = 'hungria';
          else if (fullText.includes('Garrincha') || fullText.includes('Tostão')) matchedId = 'brasil';
          else if (fullText.includes('Zhechev') || fullText.includes('Dermendzhiev')) matchedId = 'bulgaria';
          else if (fullText.includes('Ponedelnik') || fullText.includes('Voronin')) matchedId = 'urs';
          else if (fullText.includes('Seung-zin') || fullText.includes('Bong-zin')) matchedId = 'corea_del_norte';
          else if (fullText.includes('Rivera') || fullText.includes('Riva')) matchedId = 'italia';
          else if (fullText.includes('Fouilloux') || fullText.includes('Marcos')) matchedId = 'chile';
      }

      if (matchedId) {
          const t = data.participants.find(p => p.id === matchedId);
          if (t && t.squad.length === 0) {
              t.squad = squad;
          }
      }
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log("1966 Safe matched EN.");
}
scrape1966SecureEN();
