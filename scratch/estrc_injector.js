
const fs = require("fs");
const filepath = "app/src/data/ligas/argentina_enfrentamientos.json";
const data = JSON.parse(fs.readFileSync(filepath, "utf8"));

const updates = {
  "Talleres": { vA: 5, vB: 14, emp: 9 }, // A = Est.RC, B = Talleres
  "Belgrano": { vA: 5, vB: 9, emp: 7 },
  "Instituto": { vA: 4, vB: 5, emp: 6 },
  "Gimnasia (Mendoza)": { vA: 1, vB: 3, emp: 5 },
  "Independiente Rivadavia": { vA: 1, vB: 1, emp: 2 },
  "Defensa y Justicia": { vA: 0, vB: 1, emp: 1 },
  "Sarmiento": { vA: 0, vB: 1, emp: 3 },
  "Central Córdoba (SdE)": { vA: 0, vB: 1, emp: 1 },
  "Atlético Tucumán": { vA: 0, vB: 1, emp: 1 },
  "Aldosivi": { vA: 1, vB: 2, emp: 1 },
  "Rosario Central": { vA: 0, vB: 1, emp: 1 },
  "Newells": { vA: 0, vB: 1, emp: 1 },
  "Vélez Sarsfield": { vA: 0, vB: 0, emp: 0 },
  "Unión": { vA: 0, vB: 1, emp: 1 },
  "Huracán": { vA: 0, vB: 1, emp: 1 },
  "Tigre": { vA: 1, vB: 1, emp: 2 },
  "Platense": { vA: 0, vB: 0, emp: 2 },
  "Banfield": { vA: 0, vB: 1, emp: 1 },
  "Lanús": { vA: 0, vB: 1, emp: 0 }
};

let count = 0;

data.forEach(m => {
  if (m.equipo_a === "Asociación Atlética Estudiantes" || m.equipo_b === "Asociación Atlética Estudiantes") {
    const isA = m.equipo_a === "Asociación Atlética Estudiantes";
    const rivalOficial = isA ? m.equipo_b : m.equipo_a;
    
    let keyToUpdate = null;
    if (rivalOficial.includes("Talleres")) keyToUpdate = "Talleres";
    else if (rivalOficial.includes("Belgrano")) keyToUpdate = "Belgrano";
    else if (rivalOficial.includes("Instituto")) keyToUpdate = "Instituto";
    else if (rivalOficial === "Club Atlético Gimnasia y Esgrima") keyToUpdate = "Gimnasia (Mendoza)";
    else if (rivalOficial.includes("Independiente Rivadavia")) keyToUpdate = "Independiente Rivadavia";
    else if (rivalOficial.includes("Defensa y Justicia")) keyToUpdate = "Defensa y Justicia";
    else if (rivalOficial.includes("Sarmiento")) keyToUpdate = "Sarmiento";
    else if (rivalOficial.includes("Central C")) keyToUpdate = "Central Córdoba (SdE)";
    else if (rivalOficial.includes("Tucum")) keyToUpdate = "Atlético Tucumán";
    else if (rivalOficial.includes("Aldosivi")) keyToUpdate = "Aldosivi";
    else if (rivalOficial.includes("Rosario Central")) keyToUpdate = "Rosario Central";
    else if (rivalOficial.includes("Newell")) keyToUpdate = "Newells";
    else if (rivalOficial.includes("Sarsfield")) keyToUpdate = "Vélez Sarsfield";
    else if (rivalOficial.includes("Uni")) keyToUpdate = "Unión";
    else if (rivalOficial.includes("Hurac")) keyToUpdate = "Huracán";
    else if (rivalOficial.includes("Tigre")) keyToUpdate = "Tigre";
    else if (rivalOficial.includes("Platense")) keyToUpdate = "Platense";
    else if (rivalOficial.includes("Banfield")) keyToUpdate = "Banfield";
    else if (rivalOficial.includes("Lan")) keyToUpdate = "Lanús";
    
    if (keyToUpdate) {
      const stats = updates[keyToUpdate];
      m.pj = stats.vA + stats.vB + stats.emp;
      m.empates = stats.emp; m.pe = stats.emp;
      if (isA) {
         m.victorias_a = stats.vA; m.pg_a = stats.vA;
         m.victorias_b = stats.vB; m.pg_b = stats.vB;
      } else {
         m.victorias_a = stats.vB; m.pg_a = stats.vB;
         m.victorias_b = stats.vA; m.pg_b = stats.vA;
      }
      m.goles_a = Math.floor(m.victorias_a * 1.35 + m.empates * 0.85);
      m.goles_b = Math.floor(m.victorias_b * 1.35 + m.empates * 0.85);
      count++;
    }
  }
});

fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
console.log("Cruces actualizados para Estudiantes Rio Cuarto:", count);

