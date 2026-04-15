const fs = require('fs');
const filePath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

let t1912 = data.filter(d => d.anio == '1912');
console.log(JSON.stringify(t1912, null, 2));
