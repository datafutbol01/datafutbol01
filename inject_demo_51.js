const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

data.forEach((t) => {
  if (t.id === '1951-pd') {
    t.partidos_desempate = [
      {"ronda": "Final Ida", "resultado": "San Lorenzo 0 - 0 Banfield", "estadio": "Viejo Gasómetro"},
      {"ronda": "Final Vuelta", "resultado": "Racing Club 1 - 0 Banfield", "estadio": "Viejo Gasómetro", "campeon": true}
    ];
  }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('1951 parcheado con su desempate épico!!');
