const fs = require('fs');
const path = require('path');

const jsonDir = './app/src/data/clubes/inglaterra';
const files = fs.readdirSync(jsonDir).filter(f => f.endsWith('.json'));

let fixed = 0;

for (let file of files) {
   const fullPath = path.join(jsonDir, file);
   const currentJSON = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

   // If my script created it, it has top-level "nombre" and lacks "datos"
   if (currentJSON.nombre && !currentJSON.datos) {
      
      const newJSON = {
         id: currentJSON.id,
         meta: {
            etiquetas: ["inglaterra", "historico"]
         },
         datos: {
            nombre_completo: currentJSON.nombre,
            nombre_corto: currentJSON.nombre,
            escudo_actual: currentJSON.escudo_actual
         },
         evolucion_escudos: [
            {
               ano: "Actualidad",
               url: currentJSON.escudo_actual
            }
         ],
         palmares: {
             torneos_nacionales: { titulos: 0, torneos: [] },
             copas_nacionales: { titulos: 0, torneos: [] },
             torneos_internacionales: { titulos: 0, torneos: [] }
         }
      };

      // Add the other shields to evolucion_escudos as "Historico"
      if (currentJSON.escudos_historicos_urls && currentJSON.escudos_historicos_urls.length > 0) {
          currentJSON.escudos_historicos_urls.forEach(url => {
             newJSON.evolucion_escudos.push({ ano: "Historico", url });
          });
      }

      fs.writeFileSync(fullPath, JSON.stringify(newJSON, null, 2));
      fixed++;
   }
}

console.log(`Fixed ${fixed} JSON files back to proper structure.`);
