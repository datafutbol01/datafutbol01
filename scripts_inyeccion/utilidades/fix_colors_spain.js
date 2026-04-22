const fs = require('fs');
const path = require('path');

const clubsDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');
const files = fs.readdirSync(clubsDir).filter(f => f.endsWith('.json'));

const colorFixes = {
  "real-madrid.json": [ { tag: "Blanco", hex: "#FFFFFF" }, { tag: "Violeta", hex: "#5A167E" } ],
  "getafe.json": [ { tag: "Azul", hex: "#0000FF" }, { tag: "Blanco", hex: "#FFFFFF" } ],
  "villarreal.json": [ { tag: "Amarillo", hex: "#FFD700" }, { tag: "Azul", hex: "#005BA6" } ]
};

for (const file of files) {
  const filePath = path.join(clubsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (colorFixes[file]) {
    data.datos.paleta = colorFixes[file];
  } else if (data.datos.paleta.length === 1) {
     // Just in case there's another one with length 1
     data.datos.paleta.push({ tag: "Secundario", hex: "#000000" }); 
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

console.log("Colores corregidos para contraste en el banner.");
