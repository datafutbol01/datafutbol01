import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape1974SecureEN() {
  const url = 'https://en.wikipedia.org/wiki/1974_FIFA_World_Cup_squads';
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
    "Franz Beckenbauer": "alemania_federal",
    "Jürgen Sparwasser": "alemania_democratica",
    "Peter Ollerton": "australia",
    "Elías Figueroa": "chile",
    "Dragan Džajić": "yugoslavia",
    "Rivelino": "brasil",
    "Denis Law": "escocia",
    "Mwepu Ilunga": "zaire",
    "Johan Cruyff": "paises_bajos",
    "Ronnie Hellström": "suecia",
    "Hristo Bonev": "bulgaria",
    "Pedro Rocha": "uruguay",
    "Grzegorz Lato": "polonia",
    "Dino Zoff": "italia",
    "Mario Kempes": "argentina",
    "Emmanuel Sanon": "haiti"
  };

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1974.json';
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
          if (fullText.includes('Perfumo')) matchedId = 'argentina';
          else if (fullText.includes('Gerd Müller')) matchedId = 'alemania_federal';
          else if (fullText.includes('Hoffmann')) matchedId = 'alemania_democratica';
          else if (fullText.includes('Neeskens')) matchedId = 'paises_bajos';
          else if (fullText.includes('Jairzinho')) matchedId = 'brasil';
          else if (fullText.includes('Facchetti')) matchedId = 'italia';
          else if (fullText.includes('Deyna')) matchedId = 'polonia';
          else if (fullText.includes('Cubilla')) matchedId = 'uruguay';
          else if (fullText.includes('Dermendzhiev')) matchedId = 'bulgaria';
          else if (fullText.includes('Bremner')) matchedId = 'escocia';
          else if (fullText.includes('Oblak')) matchedId = 'yugoslavia';
          else if (fullText.includes('Caszely')) matchedId = 'chile';
          else if (fullText.includes('Alston')) matchedId = 'australia';
          else if (fullText.includes('Kazadi')) matchedId = 'zaire';
          else if (fullText.includes('Francillon')) matchedId = 'haiti';
          else if (fullText.includes('Nordqvist')) matchedId = 'suecia';
      }

      if (matchedId) {
          const t = data.participants.find(p => p.id === matchedId);
          if (t && t.squad.length === 0) {
              t.squad = squad;
          }
      }
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log("1974 Safe matched EN.");
}
scrape1974SecureEN();
