const fs = require('fs');
const dbPath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

data.forEach(t => {
    if(t.id === '1925-aaf') {
        t.obs = "*(1) Huracán domina y gana legítimamente este campeonato de 23 fechas. Boca Juniors se ausentó gran parte del año realizando su mítica Gira Europea (jugando apenas 7 partidos locales), por lo que la AAF le otorgó un inédito título de 'Campeón de Honor', el cual figura como un hito extraoficial en los historiales.*";
    }
});

fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
console.log("Updated 1925 AAF obs.");
