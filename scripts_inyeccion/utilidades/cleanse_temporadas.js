const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
let db = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

db = db.map(torneo => {
  // Purge fake descensos
  delete torneo.descensos;
  
  // Identify fake generated content by checking the generated goalscorer tag
  if (torneo.goleadores && torneo.goleadores.length > 0 && torneo.goleadores[0].nombre.includes('(Archivo Histórico)')) {
      delete torneo.goleadores;
      delete torneo.tabla_posiciones;
  }
  
  return torneo;
});

fs.writeFileSync(filePath, JSON.stringify(db, null, 2), 'utf-8');
console.log(`🧹 ¡Purga completada! Todas las tablas simuladas y goleadores ficticios fueron eliminados.`);
