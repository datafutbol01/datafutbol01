import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape1958SecureEN() {
  const url = 'https://en.wikipedia.org/wiki/1958_FIFA_World_Cup_squads';
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
    "Nils Liedholm": "suecia",
    "Uwe Seeler": "alemania_federal",
    "Harry Gregg": "irlanda_del_norte",
    "Josef Masopust": "checoslovaquia",
    "Amadeo Carrizo": "argentina",
    "Just Fontaine": "francia",
    "Todor Veselinović": "yugoslavia",
    "Florencio Amarilla": "paraguay",
    "Bobby Evans": "escocia",
    "John Charles": "gales",
    "Dezső Bundzsák": "hungria",
    "Antonio Carbajal": "mexico",
    "Pelé": "brasil",
    "Lev Yashin": "urs",
    "Billy Wright": "inglaterra",
    "Gerhard Hanappi": "austria"
  };

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1958.json';
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
          if (fullText.includes('Garrincha') || fullText.includes('Didi')) matchedId = 'brasil';
          else if (fullText.includes('Rahn') || fullText.includes('Szymaniak')) matchedId = 'alemania_federal';
          else if (fullText.includes('Kopa') || fullText.includes('Piantoni')) matchedId = 'francia';
          else if (fullText.includes('Skoglund') || fullText.includes('Hamrin')) matchedId = 'suecia';
          else if (fullText.includes('Blanchflower') || fullText.includes('Bingham')) matchedId = 'irlanda_del_norte';
          else if (fullText.includes('Novák') || fullText.includes('Pluskal')) matchedId = 'checoslovaquia';
          else if (fullText.includes('Labruna') || fullText.includes('Corbatta')) matchedId = 'argentina';
          else if (fullText.includes('Sekularac') || fullText.includes('Zebec') || fullText.includes('Šekularac')) matchedId = 'yugoslavia';
          else if (fullText.includes('Agüero') || fullText.includes('Parodi')) matchedId = 'paraguay';
          else if (fullText.includes('Hewie') || fullText.includes('Murray')) matchedId = 'escocia';
          else if (fullText.includes('Allchurch') || fullText.includes('Kelsey')) matchedId = 'gales';
          else if (fullText.includes('Grosics') || fullText.includes('Bozsik')) matchedId = 'hungria';
          else if (fullText.includes('Cárdenas') || fullText.includes('Sepúlveda')) matchedId = 'mexico';
          else if (fullText.includes('Simonyan') || fullText.includes('Ivanov')) matchedId = 'urs';
          else if (fullText.includes('Charlton') || fullText.includes('Haynes')) matchedId = 'inglaterra';
          else if (fullText.includes('Koller') || fullText.includes('Buzo')) matchedId = 'austria';
      }

      if (matchedId) {
          const t = data.participants.find(p => p.id === matchedId);
          if (t && t.squad.length === 0) {
              t.squad = squad;
          }
      }
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log("1958 Safe matched EN.");
}
scrape1958SecureEN();
