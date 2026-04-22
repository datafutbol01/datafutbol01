const axios = require('axios');
const fs = require('fs');

const clubsPath = 'app/src/data/clubes/espania';
const outputPath = 'app/src/data/ligas/espania_enfrentamientos.json';
const ignore = ['elche.json', 'real-oviedo.json', 'valladolid.json'];

// Load IDs
const clubs = [];
const files = fs.readdirSync(clubsPath).filter(f => f.endsWith('.json') && !ignore.includes(f));
for (const f of files) {
  try {
      const data = JSON.parse(fs.readFileSync(`${clubsPath}/${f}`, 'utf8'));
      clubs.push({
          id: data.id,
          name: data.datos.nombre_corto || data.datos.nombre_completo,
          color: data.datos.color_principal || '#ffffff'
      });
  } catch(e) {}
}

// Function to safely normalize names to slugs
// "FC Barcelona" -> "barcelona", "Real Betis" -> "real-betis"
function mapTeam(name) {
  let n = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/"/g, '').trim();
  if (n.includes('barcelona') && !n.includes('espanyol')) return 'barcelona';
  if (n.includes('athletic bilbao')) return 'athletic-club';
  if (n.includes('deportivo alaves')) return 'alaves';
  if (n.includes('espanyol')) return 'espanyol';
  if (n === 'celta vigo' || n === 'celta de vigo') return 'celta-vigo';
  if (n === 'sevilla fc') return 'sevilla';
  if (n === 'valencia cf') return 'valencia';
  if (n === 'villarreal cf') return 'villarreal';
  if (n === 'getafe cf' || n === 'getafe') return 'getafe';
  if (n === 'cd leganes' || n === 'leganes') return 'leganes';
  if (n === 'rcd mallorca' || n === 'mallorca') return 'mallorca';
  if (n === 'ca osasuna' || n === 'osasuna') return 'osasuna';
  if (n === 'rayo vallecano') return 'rayo-vallecano';
  if (n === 'real betis' || n === 'betis') return 'real-betis';
  if (n === 'real sociedad') return 'real-sociedad';
  if (n === 'real valladolid') return 'real-valladolid';
  if (n === 'girona fc' || n === 'girona') return 'girona';
  if (n === 'ud las palmas' || n === 'las palmas') return 'las-palmas';
  return n.replace(/\s+/g, '-');
}

async function run() {
  console.log('Downloading historical CSV...');
  try {
      const res = await axios.get('https://raw.githubusercontent.com/jalapic/engsoccerdata/master/data-raw/spain.csv');
      const lines = res.data.split('\n');
      console.log(`Loaded ${lines.length} historical matches.`);

      // Initialize the matrix
      const matrix = {};
      for (let i = 0; i < clubs.length; i++) {
        for (let j = i + 1; j < clubs.length; j++) {
           const id = `${clubs[i].id}-vs-${clubs[j].id}`;
           matrix[id] = {
              equipo_a: clubs[i].name, equipo_b: clubs[j].name,
              color_a: clubs[i].color, color_b: clubs[j].color,
              pj: 0, victorias_a: 0, victorias_b: 0, empates: 0,
              goles_a: 0, goles_b: 0, pg_a: 0, pe: 0, pg_b: 0
           };
        }
      }

      // Process CSV
      // Format: "Date","Season","home","visitor","HT","FT","hgoal","vgoal","tier","round","group","notes"
      for (let i = 1; i < lines.length; i++) {
         const cols = lines[i].split(',');
         if (cols.length < 8) continue;
         const homeRaw = cols[2];
         const visitorRaw = cols[3];
         const hG = parseInt(cols[6]);
         const vG = parseInt(cols[7]);

         if (isNaN(hG) || isNaN(vG)) continue;

         const home = mapTeam(homeRaw);
         const away = mapTeam(visitorRaw);

         const comb1 = `${home}-vs-${away}`;
         const comb2 = `${away}-vs-${home}`;

         if (matrix[comb1]) {
             matrix[comb1].pj++;
             if (hG > vG) { matrix[comb1].victorias_a++; matrix[comb1].pg_a++; }
             else if (hG < vG) { matrix[comb1].victorias_b++; matrix[comb1].pg_b++; }
             else { matrix[comb1].empates++; matrix[comb1].pe++; }
             matrix[comb1].goles_a += hG;
             matrix[comb1].goles_b += vG;
         } else if (matrix[comb2]) {
             matrix[comb2].pj++;
             if (vG > hG) { matrix[comb2].victorias_a++; matrix[comb2].pg_a++; }
             else if (vG < hG) { matrix[comb2].victorias_b++; matrix[comb2].pg_b++; }
             else { matrix[comb2].empates++; matrix[comb2].pe++; }
             matrix[comb2].goles_a += vG;
             matrix[comb2].goles_b += hG;
         }
      }

      const outArr = Object.keys(matrix).map(k => ({id: k, ...matrix[k]}));
      fs.writeFileSync(outputPath, JSON.stringify(outArr, null, 2));
      console.log('Successfully injected actual LaLiga data into es_enfrentamientos.json!');
  } catch(e) {
      console.error(e.message);
  }
}
run();
