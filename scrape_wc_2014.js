import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape2014Secure() {
  const url = 'https://es.wikipedia.org/wiki/Equipos_participantes_en_la_Copa_Mundial_de_F%C3%BAtbol_de_2014';
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
          if (cols.length < 5) return; 
          
          let noText = $(cols[0]).text().trim();
          let no = parseInt(noText);
          if (isNaN(no)) return;
          
          let posText = $(cols[1]).text().trim();
          let nameText = $(cols[2]).text().trim();
          let pos = $(cols[2]).text().trim();
          let name = $(cols[1]).find('a').first().text().trim() || $(cols[2]).find('a').first().text().trim();
          
          if (!["Portero", "Defensa", "Centrocampista", "Medio", "Delantero"].includes(pos)) {
              if (["Portero", "Defensa", "Centrocampista", "Medio", "Delantero", "POR", "DEF", "MED", "DEL"].some(p => posText.includes(p))) {
                  pos = posText;
                  name = nameText;
                  let explicitName = $(cols[2]).find('a').first().text().trim();
                  if (explicitName) name = explicitName;
              }
          }
          if (pos === "Medio" || pos === "MED") pos = "Centrocampista";
          if (pos === "POR") pos = "Portero";
          if (pos === "DEF") pos = "Defensa";
          if (pos === "DEL") pos = "Delantero";

          let clubCol = $(cols[cols.length - 1]);
          let clubName = clubCol.text().trim();
          if (!clubName || clubName === '') clubName = "Club Desconocido";

          name = name.split(',')[0].trim().replace(/\(.*?\)/g, '').trim();
          if (!name) name = nameText.split(',')[0].trim().replace(/\(.*?\)/g, '').trim();

          squad.push({ no, pos, name, clubName, club: 'default' });
      });

      if (squad.length > 15) {
         allSquads.push(squad);
      }
  });

  const exactSigMap = {
    "Neymar": "brasil",
    "Luka Modrić": "croacia",
    "Guillermo Ochoa": "mexico",
    "Samuel Eto'o": "camerun",
    "Andrés Iniesta": "espana",
    "Arjen Robben": "paises_bajos",
    "Alexis Sánchez": "chile",
    "Tim Cahill": "australia",
    "James Rodríguez": "colombia",
    "Sokratis": "grecia",
    "Didier Drogba": "costa_de_marfil",
    "Keisuke Honda": "japon",
    "Luis Suárez": "uruguay",
    "Keylor Navas": "costa_rica",
    "Wayne Rooney": "inglaterra",
    "Andrea Pirlo": "italia",
    "Xherdan Shaqiri": "suiza",
    "Enner Valencia": "ecuador",
    "Karim Benzema": "francia",
    "Maynor Figueroa": "honduras",
    "Lionel Messi": "argentina",
    "Edin Džeko": "bosnia",
    "Ashkan Dejagah": "iran",
    "John Obi Mikel": "nigeria",
    "Thomas Müller": "alemania",
    "Cristiano Ronaldo": "portugal",
    "Asamoah Gyan": "ghana",
    "Clint Dempsey": "estados_unidos",
    "Eden Hazard": "belgica",
    "Riyad Mahrez": "argelia",
    "Igor Akinfeev": "rusia",
    "Son Heung-min": "corea_del_sur"
  };

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2014.json';
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));

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
          if (fullText.includes('Chicharito')) matchedId = 'mexico';
          else if (fullText.includes('Cuadrado')) matchedId = 'colombia';
          else if (fullText.includes('Karagounis')) matchedId = 'grecia';
          else if (fullText.includes('Holebas')) matchedId = 'grecia';
          else if (fullText.includes('Bougherra')) matchedId = 'argelia';
          else if (fullText.includes('Slimani')) matchedId = 'argelia';
          else if (fullText.includes('Kokorin')) matchedId = 'rusia';
          else if (fullText.includes('Kerzhakov')) matchedId = 'rusia';
          else if (fullText.includes('Ki Sung-yueng')) matchedId = 'corea_del_sur';
          else if (fullText.includes('Park Chu-young')) matchedId = 'corea_del_sur';
      }

      if (matchedId) {
          const t = data.participants.find(p => p.id === matchedId);
          if (t && t.squad.length === 0) {
              t.squad = squad;
          }
      }
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log("2014 Safe matched.");
}
scrape2014Secure();
