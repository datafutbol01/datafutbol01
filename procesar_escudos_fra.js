const fs = require('fs');
const path = require('path');

const srcBase = path.join(__dirname, 'app', 'escudos_a_descargar');
const destActualBase = path.join(__dirname, 'app', 'public', 'escudos');
const destHistBase = path.join(__dirname, 'app', 'public', 'escudos_historicos');
const jsonBase = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');
const procBase = path.join(srcBase, 'procesados_francia');

if (!fs.existsSync(procBase)) fs.mkdirSync(procBase, { recursive: true });

const clubes = [
  'angers', 'auxerre', 'brest', 'le-havre', 'lens', 'lille', 'lorient', 'lyon', 
  'marseille', 'metz', 'monaco', 'nantes', 'nice', 'paris-fc', 'psg', 'rennes', 
  'strasbourg', 'toulouse'
];

clubes.forEach(club => {
  const clubSrcDir = path.join(srcBase, club);
  if (!fs.existsSync(clubSrcDir)) {
    console.log(`No se encontró fuente para ${club}`);
    return;
  }
  
  const jsonPath = path.join(jsonBase, `${club}.json`);
  if (!fs.existsSync(jsonPath)) {
    console.log(`No se encontró JSON para ${club}`);
    return;
  }
  
  let files = fs.readdirSync(clubSrcDir);
  if (files.length === 0) return;
  
  // Ordenar por tiempo de modificación/creación para sacar el último (actual)
  const stats = files.map(f => ({
    name: f,
    filePath: path.join(clubSrcDir, f),
    mtime: fs.statSync(path.join(clubSrcDir, f)).mtime.getTime()
  })).sort((a, b) => a.mtime - b.mtime);
  
  // El último ingresado es el actual
  const actualObj = stats.pop();
  
  // Asegurar directorio de histórico
  const histDestDir = path.join(destHistBase, club);
  if (!fs.existsSync(histDestDir)) fs.mkdirSync(histDestDir, { recursive: true });
  
  // Manejar el actual
  const ext = path.extname(actualObj.name).toLowerCase() === '.webp' ? '.webp' : '.png'; // forzar ext real
  const actualDestPath = path.join(destActualBase, `${club}${ext}`);
  fs.copyFileSync(actualObj.filePath, actualDestPath);
  const actualUrl = `/escudos/${club}${ext}`;
  
  let data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  data.datos.escudo_actual = actualUrl;
  
  let evolucion = [];
  
  // Manejar los históricos
  stats.forEach(obj => {
    const fileName = obj.name;
    const destPath = path.join(histDestDir, fileName);
    fs.copyFileSync(obj.filePath, destPath);
    
    // Intentar sacar año del nombre
    const match = fileName.match(/((?:18|19|20)\d{2}(?:\s*-\s*\d{2,4})?)/);
    let año = match && match[1] ? match[1] : "";
    
    evolucion.push({
      ano: año,
      url: `/escudos_historicos/${club}/${fileName}`
    });
  });
  
  // Agregamos el actual al final de la evolución también (para que salte en el listado histórico de la UI)
  evolucion.push({
    ano: "Actualidad",
    url: actualUrl
  });
  
  data.evolucion_escudos = evolucion;
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
  
  // Mover carpeta a procesados
  const procClubDir = path.join(procBase, club);
  fs.renameSync(clubSrcDir, procClubDir);
  
  console.log(`✅ Escudos procesados y JSON actualizado para: ${club}`);
});
