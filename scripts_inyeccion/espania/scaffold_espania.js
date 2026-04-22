const fs = require('fs');

const clubsPath = 'app/src/data/clubes/espania';
const outputPath = 'app/src/data/ligas/espania_enfrentamientos.json';

const ignore = ['elche.json', 'real-oviedo.json', 'valladolid.json'];

function buildScaffold() {
  const files = fs.readdirSync(clubsPath).filter(f => f.endsWith('.json') && !ignore.includes(f));
  const clubs = [];

  for (const f of files) {
    const raw = fs.readFileSync(`${clubsPath}/${f}`, 'utf8');
    try {
        const data = JSON.parse(raw);
        clubs.push({
            id: data.id,
            name: data.datos.nombre_corto || data.datos.nombre_completo,
            color: data.datos.color_principal || '#ffffff'
        });
    } catch(e) {}
  }

  console.log(`Loaded ${clubs.length} Spanish clubs for scaffolding.`);
  if (clubs.length !== 20) {
      console.warn('Warning: expected 20 clubs but got', clubs.length);
  }

  const matchups = [];
  
  for (let i = 0; i < clubs.length; i++) {
    for (let j = i + 1; j < clubs.length; j++) {
      const teamA = clubs[i];
      const teamB = clubs[j];
      
      const matchId = `${teamA.id}-vs-${teamB.id}`;

      matchups.push({
          id: matchId,
          equipo_a: teamA.name,
          equipo_b: teamB.name,
          color_a: teamA.color,
          color_b: teamB.color,
          pj: 0,
          victorias_a: 0,
          victorias_b: 0,
          empates: 0,
          goles_a: 0,
          goles_b: 0,
          pg_a: 0,
          pe: 0,
          pg_b: 0
      });
    }
  }

  fs.writeFileSync(outputPath, JSON.stringify(matchups, null, 2));
  console.log(`Finished! Saved ${matchups.length} matchups.`);

  let loaderCode = fs.readFileSync('app/src/data/loader.js', 'utf8');
  if(!loaderCode.includes('espania_enfrentamientos.json')) {
      loaderCode = loaderCode.replace('import engEnfrentamientos', 'import engEnfrentamientos from \'./ligas/inglaterra_enfrentamientos.json\';\nimport espEnfrentamientos from \'./ligas/espania_enfrentamientos.json\';');
      loaderCode = loaderCode.replace('if (leagueId === "inglaterra") return engEnfrentamientos;', 'if (leagueId === "inglaterra") return engEnfrentamientos;\n  if (leagueId === "espania") return espEnfrentamientos;');
      fs.writeFileSync('app/src/data/loader.js', loaderCode);
      console.log('Injected espania_enfrentamientos into loader.js');
  }
}

buildScaffold();
