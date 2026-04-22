const fs = require('fs');
const filePath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

[1891, 1896, 1901, 1906, 1911].forEach(year => {
    let t = data.find(x => x.anio == year);
    if(t) {
       console.log(`Year: ${year} - ${t.torneo}`);
       console.log(JSON.stringify(t.tabla_posiciones.slice(0, 5), null, 2));
    }
});
