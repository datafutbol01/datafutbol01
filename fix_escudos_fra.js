const fs = require('fs');
const path = require('path');

const procBase = path.join(__dirname, 'app', 'escudos_a_descargar', 'procesados_francia');
const destActualBase = path.join(__dirname, 'app', 'public', 'escudos');
const destHistBase = path.join(__dirname, 'app', 'public', 'escudos_historicos');
const jsonBase = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');

// 1. Arreglar el desmadre del Paris FC / PSG
const parisFcDir = path.join(procBase, 'paris-fc');
const psgDir = path.join(procBase, 'psg');
if (!fs.existsSync(psgDir)) fs.mkdirSync(psgDir, { recursive: true });

if (fs.existsSync(parisFcDir)) {
  const allParisFiles = fs.readdirSync(parisFcDir);
  allParisFiles.forEach(f => {
    // Si el nombre dice Paris_Saint-Germain, lo movemos a psg
    if (f.toLowerCase().includes('saint-germain') || f.toLowerCase().includes('psg')) {
      fs.renameSync(path.join(parisFcDir, f), path.join(psgDir, f));
    }
  });
}

// 2. Limpiar las carpetas destino de historia de paris-fc y psg, vamos a regenerarlas de 0
[ 'paris-fc', 'psg' ].forEach(c => {
  const hDir = path.join(destHistBase, c);
  if (fs.existsSync(hDir)) {
    fs.rmSync(hDir, { recursive: true, force: true });
  }
  fs.mkdirSync(hDir, { recursive: true });
});

// 3. Volver a procesar TODOS los clubes basándonos en procesados_francia
const clubes = [
  'angers', 'auxerre', 'brest', 'le-havre', 'lens', 'lille', 'lorient', 'lyon', 
  'marseille', 'metz', 'monaco', 'nantes', 'nice', 'paris-fc', 'psg', 'rennes', 
  'strasbourg', 'toulouse'
];

clubes.forEach(club => {
  const clubProcDir = path.join(procBase, club);
  if (!fs.existsSync(clubProcDir)) return;
  const files = fs.readdirSync(clubProcDir);
  if (files.length === 0) return;

  const jsonPath = path.join(jsonBase, `${club}.json`);
  let data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  const stats = files.map(f => ({
    name: f,
    filePath: path.join(clubProcDir, f),
    mtime: fs.statSync(path.join(clubProcDir, f)).mtime.getTime()
  })).sort((a, b) => a.mtime - b.mtime);

  // Remapear el histórico (y asegurarnos que si copiamos algo malo a public/escudos lo pisemos)
  const actualObj = stats.pop(); 
  
  // Limpiar posibles viejos destructivos (.png forzados)
  ['.png', '.webp', '.svg', '.jpg'].forEach(ext => {
    const rmPath = path.join(destActualBase, `${club}${ext}`);
    if (fs.existsSync(rmPath)) fs.unlinkSync(rmPath);
  });

  // Copiar el actual con su REAL extensión
  const realExt = path.extname(actualObj.name).toLowerCase();
  const actualDestPath = path.join(destActualBase, `${club}${realExt}`);
  fs.copyFileSync(actualObj.filePath, actualDestPath);
  const actualUrl = `/escudos/${club}${realExt}`;
  
  data.datos.escudo_actual = actualUrl;

  const histDestDir = path.join(destHistBase, club);
  if (!fs.existsSync(histDestDir)) fs.mkdirSync(histDestDir, { recursive: true });

  let evolucion = [];
  stats.forEach(obj => {
    const fileName = obj.name;
    const destPath = path.join(histDestDir, fileName);
    fs.copyFileSync(obj.filePath, destPath);
    
    // Extraer fecha
    const match = fileName.match(/((?:18|19|20)\d{2}(?:\s*-\s*\d{2,4})?)/);
    let año = match && match[1] ? match[1] : "";
    
    evolucion.push({
      ano: año,
      url: `/escudos_historicos/${club}/${fileName}`
    });
  });

  // Añadir el "Actualidad"
  evolucion.push({
    ano: "Actualidad",
    url: actualUrl
  });

  data.evolucion_escudos = evolucion;
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

  console.log(`✅ Arreglado y reprocesado: ${club} -> ${actualUrl}`);
});
