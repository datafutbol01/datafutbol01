const fs = require('fs');
const filePath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

[1913, 1914, 1915, 1916].forEach(year => {
    let t_list = data.filter(x => x.anio == year);
    t_list.forEach(t => {
       console.log(`Year: ${year} - ${t.torneo} (${t.id})`);
       try {
           console.log(JSON.stringify(t.tabla_posiciones.slice(0, 3) || [], null, 2));
       } catch (e) {
           console.log("Error stringifying table positions");
       }
    });
});
