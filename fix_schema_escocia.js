const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/escocia/';

const archivos = fs.readdirSync(path).filter(f => f.endsWith('.json'));

archivos.forEach(file => {
  const filePath = path + file;
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos) {
    data.idolos = data.idolos.map(i => {
      let desc = i.desc || '';
      let match = desc.match(/Época:\s*([^|]+)\s*\|\s*Presencias:\s*([^|]+)\s*\|\s*Goles:\s*([^\.]+)\.\s*(.*)/);
      if (match) {
        return {
          nombre: i.nombre,
          pos: "Leyenda / Referente",
          apodo: i.nombre,
          periodo: match[1].trim(),
          desc: match[4].trim()
        };
      }
      return i;
    });
  }

  if (data.goleadores_historicos) {
    data.goleadores_historicos = data.goleadores_historicos.map(g => {
      let desc = g.desc || '';
      let match = desc.match(/Época:\s*([^|]+)\s*\|\s*Presencias:\s*([^|]+)\s*\|\s*Goles:\s*([^\.]+)\.\s*(.*)/);
      if (match) {
        return {
          nombre: g.nombre,
          goles: parseInt(match[3].trim().replace(/\D/g, '')) || g.cant || 0,
          periodo: match[1].trim(),
          desc: match[4].trim()
        };
      } else if (g.cant) {
        return {
          nombre: g.nombre,
          goles: g.cant,
          periodo: "-",
          desc: desc
        };
      }
      return g;
    });
  }

  if (data.presencias_historicas) {
    data.presencias_historicas = data.presencias_historicas.map(p => {
      let desc = p.desc || '';
      let match = desc.match(/Época:\s*([^|]+)\s*\|\s*Presencias:\s*([^|]+)\s*\|\s*Goles:\s*([^\.]+)\.\s*(.*)/);
      if (match) {
        return {
          nombre: p.nombre,
          partidos: parseInt(match[2].trim().replace(/\D/g, '')) || p.cant || 0,
          periodo: match[1].trim(),
          desc: match[4].trim()
        };
      } else if (p.cant) {
        return {
          nombre: p.nombre,
          partidos: p.cant,
          periodo: "-",
          desc: desc
        };
      }
      return p;
    });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Fixed schema for ${file}`);
});
