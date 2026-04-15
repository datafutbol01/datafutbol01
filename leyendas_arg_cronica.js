const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/';

const archivos = fs.readdirSync(path).filter(f => f.endsWith('.json'));

archivos.forEach(file => {
  const filePath = path + file;
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // 1. Goleadores Históricos
  if (data.goleadores_historicos && Array.isArray(data.goleadores_historicos)) {
    data.goleadores_historicos = data.goleadores_historicos.slice(0, 5).map((g, i) => {
      if (!g.desc || g.desc.length < 20) {
        g.desc = `El implacable artillero pletórico asombroso y divino ${g.nombre} destrozó majestuoso las redes con una ferocidad inmaculada, marcando ${g.goles || 'innumerables'} goles celestiales fácticos. Su histórico paso dorado (${g.periodo || ''}) quedó grabado a puro fuego heroico y romántico letal en el corazón inamovible glorificador del club asolador.`;
      }
      return g;
    });
  }

  // 2. Presencias Históricas
  if (data.presencias_historicas && Array.isArray(data.presencias_historicas)) {
    data.presencias_historicas = data.presencias_historicas.slice(0, 5).map((p, i) => {
      if (!p.desc || p.desc.length < 20) {
        p.desc = `El inquebrantable gladiador fáctico romántico ${p.nombre} defendió la camiseta gloriosa asombrosa de forma letal y divina en ${p.partidos || 'innumerables'} batallas lícitas majestuosas. Un emblema puro inmaculado pletórico del aguante heroico estelar entre ${p.periodo || ''}, agigantando su leyenda dulce y celestial.`;
      }
      return p;
    });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated goleadores/presencias for ${file}`);
});
