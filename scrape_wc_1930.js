import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape1930SecureEN() {
  const url = 'https://en.wikipedia.org/wiki/1930_FIFA_World_Cup_squads';
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

          squad.push({ no: "-", pos, name, clubName, club: 'default' });
      });

      if (squad.length > 13) {
         allSquads.push(squad);
      }
  });

  const exactSigMap = {
    "José Leandro Andrade": "uruguay",
    "Luis Monti": "argentina",
    "Bert Patenaude": "estados_unidos",
    "Aleksandar Tirnanić": "yugoslavia",
    "Guillermo Subiabre": "chile",
    "Preguinho": "brasil",
    "Lucien Laurent": "francia", // Scored the first World Cup goal
    "Adalbert Deșu": "rumania",
    "Lino Nessi": "paraguay",
    "Luis de Souza Ferreira": "peru",
    "Bernard Voorhoof": "belgica",
    "Gumercindo Gómez": "bolivia",
    "Juan Carreño": "mexico"
  };

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1930.json';
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
          if (fullText.includes("Héctor Scarone") || fullText.includes("Pedro Cea")) matchedId = 'uruguay';
          else if (fullText.includes("Guillermo Stábile") || fullText.includes("Carlos Peucelle")) matchedId = 'argentina';
          else if (fullText.includes("Jimmy Douglas") || fullText.includes("Billy Gonsalves")) matchedId = 'estados_unidos';
          else if (fullText.includes("Blagoje Marjanović") || fullText.includes("Đorđe Vujadinović")) matchedId = 'yugoslavia';
          else if (fullText.includes("Roberto Snow") || fullText.includes("Eberardo Villalobos")) matchedId = 'chile';
          else if (fullText.includes("Araken") || fullText.includes("Carvalho Leite")) matchedId = 'brasil';
          else if (fullText.includes("Marcel Langiller") || fullText.includes("Alex Thépot")) matchedId = 'francia';
          else if (fullText.includes("Constantin Stanciu") || fullText.includes("Nicolae Kovács")) matchedId = 'rumania';
          else if (fullText.includes("Aurelio González") || fullText.includes("Delfín Benítez Cáceres")) matchedId = 'paraguay';
          else if (fullText.includes("Teodoro Fernández") || fullText.includes("Julio Lores")) matchedId = 'peru';
          else if (fullText.includes("Ferdinand Adams") || fullText.includes("Jacques Secretin")) matchedId = 'belgica';
          else if (fullText.includes("Mario Alborta") || fullText.includes("José Bustamante")) matchedId = 'bolivia';
          else if (fullText.includes("Manuel Rosas") || fullText.includes("Isidoro Sota")) matchedId = 'mexico';
      }

      if (matchedId) {
          const t = data.participants.find(p => p.id === matchedId);
          if (t && t.squad.length === 0) {
              squad.forEach((player, idx) => {
                  player.no = (idx + 1).toString();
              });
              t.squad = squad;
          }
      }
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log("1930 Safe matched EN.");
}
scrape1930SecureEN();
