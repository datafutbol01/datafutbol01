const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const t06 = data.find(x => x.id === '1906-pd');
if(t06) {
  t06.foto_campeon = 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Alumni1906.JPG';
  t06.foto_goleador = 'https://upload.wikimedia.org/wikipedia/commons/d/da/Eliseo-brown.jpg';
}

const t08 = data.find(x => x.id === '1908-pd');
if(t08) {
  t08.foto_equipo_arriba = 'https://upload.wikimedia.org/wikipedia/commons/9/91/Belgrano_AC_1908_champion.jpg';
  t08.foto_goleador_arriba = 'https://upload.wikimedia.org/wikipedia/commons/d/da/Eliseo-brown.jpg';
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('URLs de Wikimedia inyectadas en 1906 y 1908 correctamente.');
