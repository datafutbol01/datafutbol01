const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'escocia');

// Ensure directory exists
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}

const clubs = [
  { id: 'aberdeen', name: 'Aberdeen Football Club', year: '1903' },
  { id: 'celtic', name: 'Celtic Football Club', year: '1887' },
  { id: 'dundee', name: 'Dundee Football Club', year: '1893' },
  { id: 'dundee-united', name: 'Dundee United Football Club', year: '1909' },
  { id: 'hearts', name: 'Heart of Midlothian Football Club', year: '1874' },
  { id: 'hibernian', name: 'Hibernian Football Club', year: '1875' },
  { id: 'kilmarnock', name: 'Kilmarnock Football Club', year: '1869' },
  { id: 'motherwell', name: 'Motherwell Football Club', year: '1886' },
  { id: 'rangers', name: 'Rangers Football Club', year: '1872' },
  { id: 'ross-county', name: 'Ross County Football Club', year: '1929' },
  { id: 'st-johnstone', name: 'St Johnstone Football Club', year: '1884' },
  { id: 'st-mirren', name: 'St Mirren Football Club', year: '1877' }
];

clubs.forEach(club => {
  const filePath = path.join(dirPath, `${club.id}.json`);
  const data = {
    id: club.id,
    datos: {
      nombre_completo: club.name,
      fundacion: club.year,
      escudo_actual: `/escudos/${club.id}.png` // Placeholder
    }
  };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
});

console.log('¡12 archivos de clubes escoceses creados con éxito!');
