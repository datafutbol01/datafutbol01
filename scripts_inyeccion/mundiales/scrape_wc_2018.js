import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape2018Secure() {
  const url = 'https://es.wikipedia.org/wiki/Equipos_participantes_en_la_Copa_Mundial_de_F%C3%BAtbol_de_2018';
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
    "Andrés Iniesta": "espana",
    "Cristiano Ronaldo": "portugal",
    "Lionel Messi": "argentina",
    "Kylian Mbappé": "francia",
    "Harry Kane": "inglaterra",
    "Luis Suárez": "uruguay",
    "Xherdan Shaqiri": "suiza",
    "Keylor Navas": "costa_rica",
    "Robert Lewandowski": "polonia",
    "Mohamed Salah": "egipto",
    "Sadio Mané": "senegal",
    "Son Heung-min": "corea_del_sur",
    "Timo Werner": "alemania",
    "Emil Forsberg": "suecia",
    "Aleksandar Kolarov": "serbia",
    "Romelu Lukaku": "belgica",
    "Wahbi Khazri": "tunez",
    "Roman Torres": "panama",
    "Christian Eriksen": "dinamarca",
    "Paolo Guerrero": "peru",
    "Mile Jedinak": "australia",
    "Medhi Benatia": "marruecos",
    "Sardar Azmoun": "iran",
    "Salem Al-Dawsari": "arabia_saudita",
    "Igor Akinfeev": "rusia",
    "Victor Moses": "nigeria",
    "Gylfi Sigurðsson": "islandia",
    "Radamel Falcao": "colombia",
    "Keisuke Honda": "japon"
  };

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2018.json';
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
          if (fullText.includes('Chicharito')) matchedId = 'mexico';
          else if (fullText.includes('Cuadrado')) matchedId = 'colombia';
          else if (fullText.includes('Golovin')) matchedId = 'rusia';
          else if (fullText.includes('Akinféyev')) matchedId = 'rusia';
          else if (fullText.includes('Dziuba')) matchedId = 'rusia';
          else if (fullText.includes('Golovín')) matchedId = 'rusia';
          else if (fullText.includes('Kokorin')) matchedId = 'rusia';
          else if (fullText.includes('Fahad Al-Muwallad')) matchedId = 'arabia_saudita';
          else if (fullText.includes('Osama Hawsawi')) matchedId = 'arabia_saudita';
          else if (fullText.includes('Hakim Ziyech')) matchedId = 'marruecos';
          else if (fullText.includes('Alireza Jahanbakhsh')) matchedId = 'iran';
          else if (fullText.includes('Cueva')) matchedId = 'peru';
          else if (fullText.includes('Aron Gunnarsson')) matchedId = 'islandia';
          else if (fullText.includes('Obi Mikel')) matchedId = 'nigeria';
          else if (fullText.includes('Akanji')) matchedId = 'suiza';
          else if (fullText.includes('Matic')) matchedId = 'serbia';
          else if (fullText.includes('Kroos')) matchedId = 'alemania';
          else if (fullText.includes('Granqvist')) matchedId = 'suecia';
          else if (fullText.includes('H. M. Son')) matchedId = 'corea_del_sur';
          else if (fullText.includes('Pérez')) matchedId = 'panama';
          else if (fullText.includes('Sy Assbeig')) matchedId = 'tunez';
          else if (fullText.includes('Sliti')) matchedId = 'tunez';
          else if (fullText.includes('Kagawa')) matchedId = 'japon';
          else if (fullText.includes('Koulibaly')) matchedId = 'senegal';
      }

      if (matchedId) {
          const t = data.participants.find(p => p.id === matchedId);
          if (t && t.squad.length === 0) {
              t.squad = squad;
          }
      }
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log("2018 Safe matched.");
}
scrape2018Secure();
