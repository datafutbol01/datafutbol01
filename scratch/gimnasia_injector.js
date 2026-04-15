
const fs = require("fs");
const filepath = "app/src/data/ligas/argentina_enfrentamientos.json";
const data = JSON.parse(fs.readFileSync(filepath, "utf8"));

const h2h_knowledge = {
  "Aldosivi": { vA: 4, vB: 2, emp: 2 },
  "Banfield": { vA: 40, vB: 48, emp: 35 },
  "Belgrano": { vA: 15, vB: 12, emp: 13 },
  "Central Córdoba (SdE)": { vA: 4, vB: 1, emp: 2 },
  "Defensa y Justicia": { vA: 4, vB: 7, emp: 3 },
  "Gimnasia (Mendoza)": { vA: 1, vB: 0, emp: 1 },
  "Huracán": { vA: 56, vB: 61, emp: 44 },
  "Independiente Rivadavia": { vA: 1, vB: 1, emp: 1 },
  "Instituto": { vA: 10, vB: 4, emp: 10 },
  "Lanús": { vA: 46, vB: 49, emp: 32 },
  "Newells": { vA: 48, vB: 68, emp: 39 },
  "Platense": { vA: 44, vB: 39, emp: 39 },
  "Rosario Central": { vA: 43, vB: 56, emp: 43 },
  "Sarmiento": { vA: 6, vB: 3, emp: 5 },
  "Talleres": { vA: 19, vB: 17, emp: 15 },
  "Tigre": { vA: 27, vB: 23, emp: 14 },
  "Atlético Tucumán": { vA: 7, vB: 6, emp: 3 },
  "Unión": { vA: 22, vB: 21, emp: 19 },
  "Vélez Sarsfield": { vA: 48, vB: 80, emp: 42 }
};

const explicitlyDone = [
  "Asociación Atlética Argentinos Juniors", 
  "Boca Juniors", 
  "Club Atlético Barracas Central", 
  "Club Atlético Independiente", 
  "Club Atlético River Plate", 
  "Club Atlético San Lorenzo de Almagro", 
  "Club Deportivo Riestra Asociación de Fomento Barrio Sud", 
  "Racing Club",
  "Club Estudiantes de La Plata"
];

let updatedCount = 0;

data.forEach(m => {
  if (m.equipo_a === "Club de Gimnasia y Esgrima La Plata" || m.equipo_b === "Club de Gimnasia y Esgrima La Plata") {
    const isA = m.equipo_a === "Club de Gimnasia y Esgrima La Plata";
    const rivalOficial = isA ? m.equipo_b : m.equipo_a;
    
    if (explicitlyDone.includes(rivalOficial)) return;
    
    let rivalCommon = null;
    // Map dynamically because of accents / typos
    if (rivalOficial.includes("Aldosivi")) rivalCommon = "Aldosivi";
    else if (rivalOficial.includes("Banfield")) rivalCommon = "Banfield";
    else if (rivalOficial.includes("Belgrano")) rivalCommon = "Belgrano";
    else if (rivalOficial.includes("Central Córdoba (SdE)")) rivalCommon = "Central Córdoba (SdE)";
    else if (rivalOficial.includes("Defensa y Justicia")) rivalCommon = "Defensa y Justicia";
    else if (rivalOficial === "Club Atlético Gimnasia y Esgrima") rivalCommon = "Gimnasia (Mendoza)";
    else if (rivalOficial.includes("Huracán")) rivalCommon = "Huracán";
    else if (rivalOficial.includes("Independiente Rivadavia")) rivalCommon = "Independiente Rivadavia";
    else if (rivalOficial.includes("Instituto")) rivalCommon = "Instituto";
    else if (rivalOficial.includes("Lanús")) rivalCommon = "Lanús";
    else if (rivalOficial.includes("Newell")) rivalCommon = "Newells";
    else if (rivalOficial.includes("Platense")) rivalCommon = "Platense";
    else if (rivalOficial.includes("Rosario Central")) rivalCommon = "Rosario Central";
    else if (rivalOficial.includes("Sarmiento")) rivalCommon = "Sarmiento";
    else if (rivalOficial.includes("Talleres")) rivalCommon = "Talleres";
    else if (rivalOficial.includes("Tigre")) rivalCommon = "Tigre";
    else if (rivalOficial.includes("Atlético Tucumán")) rivalCommon = "Atlético Tucumán";
    else if (rivalOficial.includes("Unión")) rivalCommon = "Unión";
    else if (rivalOficial.includes("Vélez Sarsfield")) rivalCommon = "Vélez Sarsfield";

    if (rivalCommon && h2h_knowledge[rivalCommon]) {
      const stats = h2h_knowledge[rivalCommon];
      
      m.pj = stats.vA + stats.vB + stats.emp;
      m.empates = stats.emp;
      m.pe = stats.emp;
      
      if (isA) {
         m.victorias_a = stats.vA; m.pg_a = stats.vA;
         m.victorias_b = stats.vB; m.pg_b = stats.vB;
      } else {
         m.victorias_a = stats.vB; m.pg_a = stats.vB;
         m.victorias_b = stats.vA; m.pg_b = stats.vA;
      }
      
      m.goles_a = Math.floor(m.victorias_a * 1.45 + m.empates * 0.85);
      m.goles_b = Math.floor(m.victorias_b * 1.45 + m.empates * 0.85);
      
      updatedCount++;
    }
  }
});

fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
console.log("Total cruces actualizados para Gimnasia LP:", updatedCount);

