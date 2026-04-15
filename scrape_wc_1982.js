import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape1982SecureEN() {
  const url = 'https://en.wikipedia.org/wiki/1982_FIFA_World_Cup_squads';
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
    "Paolo Rossi": "italia",
    "Diego Maradona": "argentina",
    "Karl-Heinz Rummenigge": "alemania_federal",
    "Zbigniew Boniek": "polonia",
    "Michel Platini": "francia",
    "Zico": "brasil",
    "Kevin Keegan": "inglaterra",
    "Rinat Dasayev": "urs",
    "Hans Krankl": "austria",
    "Pat Jennings": "irlanda_del_norte",
    "Jean-Marie Pfaff": "belgica",
    "Luis Arconada": "espana",
    "Lakhdar Belloumi": "argelia",
    "László Fazekas": "hungria",
    "Kenny Dalglish": "escocia",
    "Safet Sušić": "yugoslavia",
    "Roger Milla": "camerun",
    "Gilberto Yearwood": "honduras",
    "Antonín Panenka": "checoslovaquia",
    "Teófilo Cubillas": "peru",
    "Fathi Kammel": "kuwait",
    "Elías Figueroa": "chile",
    "Wynton Rufer": "nueva_zelanda",
    "Mágico González": "el_salvador"
  };

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1982.json';
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
          if (fullText.includes('Kempes')) matchedId = 'argentina';
          else if (fullText.includes('Zoff')) matchedId = 'italia';
          else if (fullText.includes('Schumacher')) matchedId = 'alemania_federal';
          else if (fullText.includes('Lato')) matchedId = 'polonia';
          else if (fullText.includes('Tigana')) matchedId = 'francia';
          else if (fullText.includes('Socrates') || fullText.includes('Sócrates')) matchedId = 'brasil';
          else if (fullText.includes('Shilton')) matchedId = 'inglaterra';
          else if (fullText.includes('Blokhin')) matchedId = 'urs';
          else if (fullText.includes('Prohaska')) matchedId = 'austria';
          else if (fullText.includes('O\'Neill')) matchedId = 'irlanda_del_norte';
          else if (fullText.includes('Ceulemans')) matchedId = 'belgica';
          else if (fullText.includes('Juanito')) matchedId = 'espana';
          else if (fullText.includes('Madjer')) matchedId = 'argelia';
          else if (fullText.includes('Nyilasi')) matchedId = 'hungria';
          else if (fullText.includes('Souness')) matchedId = 'escocia';
          else if (fullText.includes('Pantelić')) matchedId = 'yugoslavia';
          else if (fullText.includes('N\'Kono') || fullText.includes("N'Kono")) matchedId = 'camerun';
          else if (fullText.includes('Zelaya')) matchedId = 'honduras';
          else if (fullText.includes('Nehoda')) matchedId = 'checoslovaquia';
          else if (fullText.includes('Uribe')) matchedId = 'peru';
          else if (fullText.includes('Al-Tarabulsi') || fullText.includes('Kameel')) matchedId = 'kuwait';
          else if (fullText.includes('Caszely')) matchedId = 'chile';
          else if (fullText.includes('Sumner')) matchedId = 'nueva_zelanda';
          else if (fullText.includes('Jorge González') || fullText.includes('González')) matchedId = 'el_salvador';
          else if (fullText.includes('Dasaev') || fullText.includes('Dasaev')) matchedId = 'urs';
      }

      if (matchedId) {
          const t = data.participants.find(p => p.id === matchedId);
          if (t && t.squad.length === 0) {
              t.squad = squad;
          }
      }
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log("1982 Safe matched EN.");
}
scrape1982SecureEN();
