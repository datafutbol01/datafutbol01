import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape2010Secure() {
  const url = 'https://es.wikipedia.org/wiki/Equipos_participantes_en_la_Copa_Mundial_de_F%C3%BAtbol_de_2010';
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
    "Tshabalala": "sudafrica",
    "Chicharito": "mexico",
    "Edinson Cavani": "uruguay",
    "Thierry Henry": "francia",
    "Lionel Messi": "argentina",
    "Obafemi Martins": "nigeria",
    "Park Ji-Sung": "corea_del_sur",
    "Gekas": "grecia",
    "Wayne Rooney": "inglaterra",
    "Landon Donovan": "estados_unidos",
    "Bougherra": "argelia",
    "Oblak": "eslovenia", // Not there. Let's use Handanovič
    "Handanovič": "eslovenia",
    "Thomas Müller": "alemania",
    "Tim Cahill": "australia",
    "Nemanja Vidić": "serbia",
    "Asamoah Gyan": "ghana",
    "Arjen Robben": "paises_bajos",
    "Christian Eriksen": "dinamarca",
    "Keisuke Honda": "japon",
    "Samuel Eto'o": "camerun",
    "Andrea Pirlo": "italia",
    "Roque Santa Cruz": "paraguay",
    "Chris Wood": "nueva_zelanda",
    "Marek Hamšík": "eslovaquia",
    "Kaká": "brasil",
    "Jong Tae-Se": "corea_del_norte",
    "Didier Drogba": "costa_de_marfil",
    "Cristiano Ronaldo": "portugal",
    "Andrés Iniesta": "espana",
    "Xherdan Shaqiri": "suiza",
    "Maynor Figueroa": "honduras",
    "Alexis Sánchez": "chile"
  };

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2010.json';
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
      
      // Fallback signatures for tricky ones
      if (!matchedId) {
          if (fullText.includes('Cuauhtémoc')) matchedId = 'mexico';
          else if (fullText.includes('Lugano')) matchedId = 'uruguay';
          else if (fullText.includes('Park Chu-Young')) matchedId = 'corea_del_sur';
          else if (fullText.includes('Birsa')) matchedId = 'eslovenia';
          else if (fullText.includes('Koren')) matchedId = 'eslovenia';
          else if (fullText.includes('Nelsen')) matchedId = 'nueva_zelanda';
          else if (fullText.includes('Smeltz')) matchedId = 'nueva_zelanda';
          else if (fullText.includes('Killen')) matchedId = 'nueva_zelanda';
          else if (fullText.includes('Jong Tae-se')) matchedId = 'corea_del_norte';
          else if (fullText.includes('Gervinho')) matchedId = 'costa_de_marfil';
          else if (fullText.includes('Karagounis')) matchedId = 'grecia';
      }

      if (matchedId) {
          const t = data.participants.find(p => p.id === matchedId);
          if (t && t.squad.length === 0) {
              t.squad = squad;
          }
      } else {
          console.log("NOT FOUND MATCH FOR SQUAD STARTING WITH:", squad[0].name);
      }
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log("2010 Safe matched.");
}
scrape2010Secure();
