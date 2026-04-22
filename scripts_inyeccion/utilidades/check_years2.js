const fs = require('fs');
const filePath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

[1916, 1921, 1926, 1931, 1936].forEach(year => {
    let t_list = data.filter(x => x.anio == year);
    t_list.forEach(t => {
       console.log(`Year: ${year} - ${t.torneo} (${t.id})`);
       console.log(JSON.stringify(t.tabla_posiciones.slice(0, 5), null, 2));
    });
});
