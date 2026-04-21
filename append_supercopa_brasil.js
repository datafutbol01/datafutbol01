const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'brasil_temporadas.json');

const supercopaData = [
  { anio: "1990", campeon: "Grêmio" },
  { anio: "1991", campeon: "Corinthians" },
  { anio: "2020", campeon: "Flamengo" },
  { anio: "2021", campeon: "Flamengo" },
  { anio: "2022", campeon: "Atlético Mineiro" },
  { anio: "2023", campeon: "Palmeiras" },
  { anio: "2024", campeon: "São Paulo" },
  { anio: "2025", campeon: "Flamengo" }
];

if (fs.existsSync(filePath)) {
  const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Clean up any existing duplicates to be safe
  const cleanData = fileData.filter(item => !item.id.includes('-supercopa'));
  
  const supercopaEntries = supercopaData.map(c => ({
    id: c.anio + "-supercopa",
    anio: c.anio,
    torneo: "Supercopa do Brasil",
    campeon: c.campeon,
    tabla_posiciones: []
  }));
  
  const finalData = [...cleanData, ...supercopaEntries];
  
  fs.writeFileSync(filePath, JSON.stringify(finalData, null, 2));
  console.log('Supercopa do Brasil inyectada exitosamente!');
}
