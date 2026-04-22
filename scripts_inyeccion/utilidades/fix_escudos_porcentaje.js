const fs = require('fs');
const path = require('path');

const pubHistoricos = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos_historicos';
const dbPath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/escocia';

const folders = fs.readdirSync(pubHistoricos);

folders.forEach(club => {
  const clubDir = path.join(pubHistoricos, club);
  if (!fs.statSync(clubDir).isDirectory()) return;

  const dbFile = path.join(dbPath, `${club}.json`);
  if (!fs.existsSync(dbFile)) return;

  let changesMade = false;
  let data = JSON.parse(fs.readFileSync(dbFile, 'utf8'));

  const files = fs.readdirSync(clubDir);
  files.forEach(file => {
    if (file.includes('%') || file.includes('(') || file.includes(')')) {
      // Create a clean name
      const cleanFile = file.replace(/[%()]/g, '_');
      
      fs.renameSync(path.join(clubDir, file), path.join(clubDir, cleanFile));

      // Update in JSON
      if (data.evolucion_escudos) {
        data.evolucion_escudos.forEach(esc => {
          if (esc.url.includes(file)) {
            esc.url = esc.url.replace(file, cleanFile);
            changesMade = true;
          }
        });
      }
    }
  });

  // I also manually replaced celtic_1977_1995.webp in the terminal
  // so I should fix the JSON manually for that just in case it wasn't caught.
  if (club === 'celtic' && data.evolucion_escudos) {
    data.evolucion_escudos.forEach(esc => {
      if (esc.url.includes('The_Celtic_Football_28green_and_white%1977-1995.webp')) {
        esc.url = '/escudos_historicos/celtic/celtic_1977_1995.webp';
        changesMade = true;
      }
    });
  }

  if (changesMade) {
    fs.writeFileSync(dbFile, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Fixed bad chars in ${club}`);
  }
});
