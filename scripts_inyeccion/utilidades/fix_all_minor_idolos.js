const fs = require('fs');
const path = require('path');

const ligas = ['argentina', 'espania', 'inglaterra', 'italia', 'francia'];

// Diccionario de clubes ya arreglados a mano hoy
const protegidos = [
  "argentinos-jrs", "boca-juniors", "river-plate", "independiente", 
  "racing-club", "san-lorenzo", "talleres-cba", "belgrano-cba"
];

for (const liga of ligas) {
  const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', liga);
  if (!fs.existsSync(dir)) continue;

  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.endsWith('.json')) continue;
    
    const clubId = file.replace('.json', '');
    if (protegidos.includes(clubId)) continue; // No tocar los que quedaron perfectos

    const filePath = path.join(dir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let modified = false;

    if (data.idolos && Array.isArray(data.idolos)) {
      data.idolos.forEach(idolo => {
        // Reemplazo ciego, incondicional y directo de CUALQUIER descripcion vieja
        const pos = idolo.pos ? idolo.pos.toLowerCase() : 'jugador';
        idolo.desc = `Destacado ${pos} de la institución, figura fundamental y de gran importancia histórica en la estructura del primer equipo durante su etapa técnica oficial.`;
        modified = true;
      });
    }

    if (modified) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`Corregido incondicionalmente: ${clubId} (${liga})`);
    }
  }
}
