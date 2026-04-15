const fs = require('fs');
const path = require('path');

const clubsDir = path.join(__dirname, 'app/src/data/clubes/argentina');

function validateClubes() {
  const files = fs.readdirSync(clubsDir).filter(f => f.endsWith('.json'));
  let allValid = true;
  let summary = [];

  for (const file of files) {
    const filePath = path.join(clubsDir, file);
    try {
      const rawData = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(rawData);

      let errors = [];

      // Validating structure
      if (!data.historia || data.historia.length !== 5) {
        errors.push(`Historia: esperados 5, encontrados ${data.historia ? data.historia.length : 0}`);
      }
      if (!data.equipacion || data.equipacion.length !== 3) {
        errors.push(`Equipacion: esperadas 3, encontradas ${data.equipacion ? data.equipacion.length : 0}`);
      }
      if (!data.idolos || data.idolos.length !== 5) {
        errors.push(`Idolos: esperados 5, encontrados ${data.idolos ? data.idolos.length : 0}`);
      }
      if (!data.goleadores_historicos || data.goleadores_historicos.length !== 5) {
        errors.push(`Goleadores: esperados 5, encontrados ${data.goleadores_historicos ? data.goleadores_historicos.length : 0}`);
      }
      if (!data.presencias_historicas || data.presencias_historicas.length !== 5) {
        errors.push(`Presencias: esperadas 5, encontradas ${data.presencias_historicas ? data.presencias_historicas.length : 0}`);
      }

      if (errors.length > 0) {
        summary.push(`\n❌ [${data.id}] Errores de estructura:\n   - ` + errors.join('\n   - '));
        allValid = false;
      } else {
        summary.push(`✅ [${data.id}] Impecable (5 Historia, 3 Equipaciones, 5 Ídolos, 5 Goleadores, 5 Presencias).`);
      }

    } catch (e) {
      summary.push(`\n🚨 FATAL ERROR: No se pudo parsear el archivo [${file}]. Razón: ${e.message}\nVerifica comas y llaves rotas.`);
      allValid = false;
    }
  }

  console.log("==================================================");
  console.log("🛡️ REPORTE DEL SISTEMA: ESCANEO DE LA PRIMERA DIVISIÓN");
  console.log("==================================================");
  summary.forEach(msg => console.log(msg));
  console.log("==================================================");
  
  if (allValid) {
    console.log("⭐️ RESULTADO: TODOS LOS CLUBES PASARON LA PRUEBA ESTRUCTURAL. 0 ERRORES FATALES.");
  } else {
    console.log("⚠️ RESULTADO: SE ENCONTRARON ALGUNAS DISCREPANCIAS ESTRUCTURALES EN LOS ASSETS. REVISAR REPORTE.");
  }
}

validateClubes();
