import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape1962SecureEN() {
  const url = 'https://en.wikipedia.org/wiki/1962_FIFA_World_Cup_squads';
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
    "Milan Galić": "yugoslavia",
    "Pedro Rocha": "uruguay",
    "Marcos Coll": "colombia",
    "Uwe Seeler": "alemania_federal",
    "Leonel Sánchez": "chile",
    "Cesare Maldini": "italia",
    "Karl Elsener": "suiza",
    "Pelé": "brasil",
    "Josef Masopust": "checoslovaquia",
    "Antonio Carbajal": "mexico",
    "Gento": "espana", // Paco Gento
    "Flórián Albert": "hungria",
    "Bobby Charlton": "inglaterra",
    "José Sanfilippo": "argentina",
    "Georgi Asparuhov": "bulgaria"
  };

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1962.json';
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
          if (fullText.includes('Ponedelnik') || fullText.includes('Voronin')) matchedId = 'urs';
          else if (fullText.includes('Jerković') || fullText.includes('Šekularac')) matchedId = 'yugoslavia';
          else if (fullText.includes('Rocha') || fullText.includes('Sasia')) matchedId = 'uruguay';
          else if (fullText.includes('Zuluaga') || fullText.includes('Klinger')) matchedId = 'colombia';
          else if (fullText.includes('Seeler') || fullText.includes('Schnellinger')) matchedId = 'alemania_federal';
          else if (fullText.includes('Fouilloux') || fullText.includes('Toro')) matchedId = 'chile';
          else if (fullText.includes('Rivera') || fullText.includes('Altafini')) matchedId = 'italia';
          else if (fullText.includes('Allemann') || fullText.includes('Brodmann')) matchedId = 'suiza';
          else if (fullText.includes('Garrincha') || fullText.includes('Vavá') || fullText.includes('Didi')) matchedId = 'brasil';
          else if (fullText.includes('Pluskal') || fullText.includes('Scherer')) matchedId = 'checoslovaquia';
          else if (fullText.includes('Cárdenas') || fullText.includes('Reyes')) matchedId = 'mexico';
          else if (fullText.includes('Puskás') || fullText.includes('Di Stéfano') || fullText.includes('Suárez')) matchedId = 'espana'; // Real Madrid players for Spain
          else if (fullText.includes('Grosics') || fullText.includes('Farkas') || fullText.includes('Tichy')) matchedId = 'hungria';
          else if (fullText.includes('Moore') || fullText.includes('Greaves')) matchedId = 'inglaterra';
          else if (fullText.includes('Rattín') || fullText.includes('Navarro') || fullText.includes('Marzolini')) matchedId = 'argentina';
          else if (fullText.includes('Naidenov') || fullText.includes('Kolev')) matchedId = 'bulgaria';
      }

      if (matchedId) {
          const t = data.participants.find(p => p.id === matchedId);
          if (t && t.squad.length === 0) {
              t.squad = squad;
          }
      }
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log("1962 Safe matched EN.");
}
scrape1962SecureEN();
