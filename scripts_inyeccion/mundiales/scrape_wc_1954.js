import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape1954SecureEN() {
  const url = 'https://en.wikipedia.org/wiki/1954_FIFA_World_Cup_squads';
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
    "Djalma Santos": "brasil",
    "Stjepan Bobek": "yugoslavia",
    "Raymond Kopa": "francia",
    "Antonio Carbajal": "mexico",
    "Ferenc Puskás": "hungria",
    "Fritz Walter": "alemania_federal",
    "Lefter Küçükandonyadis": "turquia",
    "Hong Deok-young": "corea_del_sur",
    "Juan Alberto Schiaffino": "uruguay",
    "Ernst Ocwirk": "austria",
    "Ladislav Novák": "checoslovaquia",
    "Tommy Docherty": "escocia",
    "Stanley Matthews": "inglaterra",
    "Josef Hügi": "suiza",
    "Giampiero Boniperti": "italia",
    "Léopold Anoul": "belgica"
  };

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1954.json';
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
          if (fullText.includes('Nilton Santos') || fullText.includes('Didi')) matchedId = 'brasil';
          else if (fullText.includes('Zebec') || fullText.includes('Boškov')) matchedId = 'yugoslavia';
          else if (fullText.includes('Fontaine') || fullText.includes('Jonquet')) matchedId = 'francia';
          else if (fullText.includes('Cárdenas') || fullText.includes('Balcázar')) matchedId = 'mexico';
          else if (fullText.includes('Kocsis') || fullText.includes('Czibor') || fullText.includes('Hidegkuti')) matchedId = 'hungria';
          else if (fullText.includes('Rahn') || fullText.includes('Morlock')) matchedId = 'alemania_federal';
          else if (fullText.includes('Turgay') || fullText.includes('Suat')) matchedId = 'turquia';
          else if (fullText.includes('Chung Nam-sik') || fullText.includes('Choi Chung-min')) matchedId = 'corea_del_sur';
          else if (fullText.includes('Míguez') || fullText.includes('Varela')) matchedId = 'uruguay';
          else if (fullText.includes('Probst') || fullText.includes('Stojaspal')) matchedId = 'austria';
          else if (fullText.includes('Pluskal') || fullText.includes('Scherer')) matchedId = 'checoslovaquia';
          else if (fullText.includes('Cunningham') || fullText.includes('Ormond')) matchedId = 'escocia';
          else if (fullText.includes('Lofthouse') || fullText.includes('Finney')) matchedId = 'inglaterra';
          else if (fullText.includes('Ballaman') || fullText.includes('Vonlanthen')) matchedId = 'suiza';
          else if (fullText.includes('Lorenzi') || fullText.includes('Galli')) matchedId = 'italia';
          else if (fullText.includes('Mermans') || fullText.includes('Coppens')) matchedId = 'belgica';
      }

      if (matchedId) {
          const t = data.participants.find(p => p.id === matchedId);
          if (t && t.squad.length === 0) {
              t.squad = squad;
          }
      }
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log("1954 Safe matched EN.");
}
scrape1954SecureEN();
