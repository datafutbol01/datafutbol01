import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape1950SecureEN() {
  const url = 'https://en.wikipedia.org/wiki/1950_FIFA_World_Cup_squads';
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
          
          let noText = $(cols[0]).text().trim();
          let no = parseInt(noText) || 0;
          
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

          squad.push({ no: no === 0 ? '-' : no, pos, name, clubName, club: 'default' });
      });

      if (squad.length > 15) {
         allSquads.push(squad);
      }
  });

  const exactSigMap = {
    "Ademir": "brasil",
    "Stjepan Bobek": "yugoslavia",
    "Fredy Bickel": "suiza",
    "Antonio Carbajal": "mexico",
    "Telmo Zarra": "espana", // Using Telmo Zarra
    "Alf Ramsey": "inglaterra",
    "Sergio Livingstone": "chile",
    "Walter Bahr": "estados_unidos",
    "Lennart Skoglund": "suecia",
    "Giampiero Boniperti": "italia",
    "Darío Saguier": "paraguay",
    "Obdulio Varela": "uruguay",
    "Víctor Agustín Ugarte": "bolivia"
  };

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1950.json';
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
          if (fullText.includes('Zizinho') || fullText.includes('Jair') || fullText.includes('Barbosa')) matchedId = 'brasil';
          else if (fullText.includes('Mitić') || fullText.includes('Zlatko Čajkovski') || fullText.includes('Rajko Mitić')) matchedId = 'yugoslavia';
          else if (fullText.includes('Antenen') || fullText.includes('Fatton') || fullText.includes('Bickel')) matchedId = 'suiza';
          else if (fullText.includes('Borja') || fullText.includes('Casarín') || fullText.includes('Carbajal')) matchedId = 'mexico';
          else if (fullText.includes('Ramallets') || fullText.includes('Basora') || fullText.includes('Zarra')) matchedId = 'espana';
          else if (fullText.includes('Matthews') || fullText.includes('Finney') || fullText.includes('Mortensen') || fullText.includes('Aston')) matchedId = 'inglaterra';
          else if (fullText.includes('Cremaschi') || fullText.includes('Prieto') || fullText.includes('Livingstone')) matchedId = 'chile';
          else if (fullText.includes('Gaetjens') || fullText.includes('Borghi') || fullText.includes('Bahr')) matchedId = 'estados_unidos';
          else if (fullText.includes('Nilsson') || fullText.includes('Svensson') || fullText.includes('Skoglund')) matchedId = 'suecia';
          else if (fullText.includes('Parola') || fullText.includes('Amadei') || fullText.includes('Boniperti')) matchedId = 'italia';
          else if (fullText.includes('Maciel') || fullText.includes('López') || fullText.includes('Saguier') || fullText.includes('Avalos')) matchedId = 'paraguay';
          else if (fullText.includes('Schiaffino') || fullText.includes('Ghiggia') || fullText.includes('Roque Máspoli') || fullText.includes('Britos') || fullText.includes('Obdulio Varela')) matchedId = 'uruguay';
          else if (fullText.includes('Mena') || fullText.includes('Gutiérrez') || fullText.includes('Achá')) matchedId = 'bolivia';
      }

      if (matchedId) {
          const t = data.participants.find(p => p.id === matchedId);
          if (t && t.squad.length === 0) {
              t.squad = squad;
          }
      }
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log("1950 Safe matched EN.");
}
scrape1950SecureEN();
