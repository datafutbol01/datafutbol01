
const fs = require("fs");
const filepath = "app/src/data/ligas/argentina_enfrentamientos.json";
const data = JSON.parse(fs.readFileSync(filepath, "utf8"));

const updates = {
  "Gimnasia (Mendoza)": { vA: 87, vB: 83, emp: 85 }
};

const explicitlyDone = [
  "Argentinos", 
  "Boca", 
  "Barracas", 
  "Independiente", 
  "River Plate", 
  "San Lorenzo", 
  "Riestra", 
  "Racing Club",
  "Estudiantes de La Plata",
  "Esgrima La Plata", 
  "Lan\u00fas",
  "Banfield",
  "Platense",
  "Tigre",
  "Hurac\u00e1n",
  "Rosario Central",
  "Newell",
  "Sarsfield",
  "Aldosivi",
  "Uni\u00f3n",
  "Belgrano",
  "Talleres",
  "Instituto",
  "Tucum\u00e1n",
  "Sarmiento",
  "Central C\u00f3rdoba",
  "Defensa y Justicia"
];

let count = 0;

data.forEach(m => {
  if (m.equipo_a.includes("Independiente Rivadavia") || m.equipo_b.includes("Independiente Rivadavia")) {
    const isA = m.equipo_a.includes("Independiente Rivadavia");
    const rivalOficial = isA ? m.equipo_b : m.equipo_a;
    
    let isProtected = false;
    for (const p of explicitlyDone) {
        if (rivalOficial.includes(p)) {
            if (p === "Independiente" && rivalOficial.includes("Rivadavia")) {
                continue; 
            }
            isProtected = true;
            break;
        }
    }
    
    if (isProtected) return;
    
    let keyToUpdate = null;
    if (rivalOficial === "Club Atlético Gimnasia y Esgrima") keyToUpdate = "Gimnasia (Mendoza)";
    
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
console.log("Restantes actualizados limpios para Ind Rivadavia:", count);

