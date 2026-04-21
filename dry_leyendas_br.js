const fs = require('fs');
const path = require('path');

const clubsDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'brasil');
const files = fs.readdirSync(clubsDir).filter(f => f.endsWith('.json'));

let peleFixed = false;

for (const file of files) {
  const filePath = path.join(clubsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.goleadores_historicos) {
    data.goleadores_historicos.forEach(g => {
      if (g.goles) {
        g.desc = `Registró un total de ${g.goles} goles oficiales con la institución.`;
      } else {
        delete g.desc;
      }
    });
  }

  if (data.presencias_historicas) {
    data.presencias_historicas.forEach(p => {
      if (p.partidos) {
        p.desc = `Acumuló un total de ${p.partidos} presencias oficiales con la institución.`;
      } else {
        delete p.desc;
      }
    });
  }

  if (data.idolos) {
    data.idolos.forEach(i => {
      if (i.nombre.includes("Pelé") || (i.apodo && i.apodo.includes("Pelé"))) {
        i.desc = "Considerado uno de los tres mejores futbolistas de la historia junto a Lionel Messi y Diego Armando Maradona.";
        peleFixed = true;
      } else {
        // Remove narrative completely. 
        // Only leaving facts (Name, Apodo, Epoca).
        delete i.desc;
      }
    });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

console.log(`Cleaned narrative for ${files.length} clubs. Pelé was updated: ${peleFixed}`);
