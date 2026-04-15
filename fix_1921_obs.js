const fs = require('fs');
const dbPath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let found = false;
data.forEach(t => {
    if(t.id === '1921-aaf') {
        t.obs = "*(1) Huracán domina la Asociación Argentina y consigue levantar el PRIMER CAMPEONATO de su rica historia institucional, relegando a Boca Juniors al tercer lugar.*";
        found = true;
    }
});

if(found) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    console.log("Fixed 1921 AAF observation.");
}
