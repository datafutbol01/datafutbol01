const fs = require('fs');
const data = JSON.parse(fs.readFileSync('app/src/data/ligas/argentina_temporadas.json', 'utf8'));

const year1922 = data.filter(t => t.year == 1922 || String(t.year).includes("1922") || (t.name && String(t.name).includes("1922")));
console.log(JSON.stringify(year1922.map(t => ({
    id: t.id,
    name: t.name,
    year: t.year,
    top_scorers: t.top_scorers,
    table_length: t.table ? t.table.length : 0,
    teams_in_table: t.table ? t.table.map(x => x.team).slice(0, 5) : [] 
})), null, 2));
