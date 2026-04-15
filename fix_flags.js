import fs from 'fs';

['1994', '1998'].forEach(year => {
    const file = `c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/${year}.json`;
    if (!fs.existsSync(file)) return;
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));

    Object.keys(data.groups).forEach(g => {
        data.groups[g].standings.forEach(t => {
            const p = data.participants.find(part => part.id === t.id || part.name === t.team);
            if (p) {
                t.flag = p.flag;
            }
        });
    });

    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    console.log(`Banderas inyectadas a la tabla de posiciones en ${year}`);
});
