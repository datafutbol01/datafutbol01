const fs = require('fs');
const path = require('path');
const leagueDbPath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/espania_temporadas.json';

let leagueDb = [];
if (fs.existsSync(leagueDbPath)) {
    leagueDb = JSON.parse(fs.readFileSync(leagueDbPath, 'utf8'));
} else {
    console.error("espania_temporadas.json not found!");
}

const aliases = {
  // ESP
  "real madrid": "real-madrid", "barcelona": "barcelona", "fc barcelona": "barcelona", "atletico de madrid": "atletico-madrid", "atletico madrid": "atletico-madrid", "athletic club": "athletic-club", "athletic bilbao": "athletic-club", "real sociedad": "real-sociedad", "real betis": "real-betis", "betis": "real-betis", "villarreal": "villarreal", "villarreal cf": "villarreal", "valencia": "valencia", "valencia cf": "valencia", "sevilla": "sevilla", "sevilla fc": "sevilla", "osasuna": "osasuna", "ca osasuna": "osasuna", "celta de vigo": "celta-vigo", "celta vigo": "celta-vigo", "rayo vallecano": "rayo-vallecano", "mallorca": "mallorca", "rcd mallorca": "mallorca", "alaves": "alaves", "deportivo alaves": "alaves", "las palmas": "las-palmas", "ud las palmas": "las-palmas", "getafe": "getafe", "getafe cf": "getafe", "leganes": "leganes", "cd leganes": "leganes", "real valladolid": "real-valladolid", "valladolid": "real-valladolid", "espanyol": "espanyol", "rcd espanyol": "espanyol", "girona": "girona", "girona fc": "girona"
};

const teamsToCheck = new Set();

// Add all defined ESP aliases (which covers the 20 LaLiga teams + history versions)
Object.keys(aliases).forEach(k => {
    // We only need the primary readable name, which might just be the key itself capitalized
    teamsToCheck.add(k);
});

// Add all historical champions from the JSON (LaLiga, Copa del Rey, Supercopa, etc.)
leagueDb.forEach(t => {
   if (!t.campeon) return;
   teamsToCheck.add(t.campeon);
});

const missing = new Set();

Array.from(teamsToCheck).forEach(team => {
   const normalizedCampeon = team.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
   let aliasId = aliases[normalizedCampeon];
   
   if (!aliasId) {
      const slug = team.toLowerCase().replace(/[^a-z0-9]/g, '-');
      aliasId = slug;
   }

   const extensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp'];
   let found = false;
   extensions.forEach(ext => {
      // Check loose files in escudos/
      if (fs.existsSync('c:/Users/gonza/futbolhistoria/clubes/app/public/escudos/' + aliasId + ext)) {
         found = true;
      }
      // Check if it exists as a folder inside escudos_historicos/ or escudos/
      if (fs.existsSync('c:/Users/gonza/futbolhistoria/clubes/app/public/escudos_historicos/' + aliasId)) {
          found = true;
      }
      if (fs.existsSync('c:/Users/gonza/futbolhistoria/clubes/app/public/escudos/' + aliasId)) {
          // If the folder exists, we might still want to check if a primary logo exists, but usually folder existence means we dealt with it
          found = true;
      }
      // If there is an equipo json for this, it probably already has its shield URL configured inside it, but let's check the physical file to be thorough.
   });

   if (!found) {
      // It's genuinely missing
      // Let's grab the best display name
      const displayName = team.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      missing.add(displayName);
   }
});

const baseDownloadDir = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar';
if (!fs.existsSync(baseDownloadDir)) {
    fs.mkdirSync(baseDownloadDir);
}

Array.from(missing).forEach(team => {
    const folderName = team.replace(/[<>\:\'\"\/\\\|\?\*]+/g, '').trim();
    if (!folderName) return;
    const folderPath = path.join(baseDownloadDir, folderName);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }
});

console.log('Created ' + missing.size + ' folders in app/escudos_a_descargar/ for missing Spanish teams.');
