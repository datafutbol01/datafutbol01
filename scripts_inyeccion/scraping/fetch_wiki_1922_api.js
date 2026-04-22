const https = require('https');
const fs = require('fs');
const options = {
  hostname: 'es.wikipedia.org',
  path: '/w/api.php?action=query&prop=revisions&titles=Campeonato_de_Primera_Divisi%C3%B3n_1922_de_la_AAmF_(Argentina)&rvprop=content&rvslots=main&format=json',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
};
https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
       const json = JSON.parse(data);
       const pages = json.query.pages;
       const firstPage = pages[Object.keys(pages)[0]];
       const content = firstPage.revisions[0].slots.main['*'];
       // Look for Tabla de posiciones final
       const lines = content.split('\n');
       const teams = [];
       let inTable = false;
       for (let i=0; i<lines.length; i++) {
           if (lines[i].includes('Tabla de posiciones final')) {
               inTable = true;
           }
           if (inTable && lines[i].startsWith('{{Clasificaci')) {
               inTable = false; // end
           }
           if (inTable && lines[i].startsWith('|')) {
               // lines like | 1 | [[Club Atlético Independiente|Independiente]] || 40 || 30 || ...
               const parts = lines[i].split('|').map(s => s.trim()).filter(s => s.length > 0);
               if (parts.length >= 8 && !isNaN(parseInt(parts[0]))) {
                   // extract name
                   let namePart = parts[1];
                   let nameMatch = namePart.match(/\[\[(?:[^|\]]*\|)?([^\]]*)\]\]/);
                   let equipo = nameMatch ? nameMatch[1] : namePart;
                   teams.push({
                      pos: parseInt(parts[0]),
                      equipo: equipo,
                      pts: parseInt(parts[2]),
                      pj: parseInt(parts[3]),
                      pg: parseInt(parts[4]),
                      pe: parseInt(parts[5]),
                      pp: parseInt(parts[6])
                   });
               }
           }
       }
       console.log(JSON.stringify(teams, null, 2));
    } catch (e) { console.error(e); }
  });
});
