import fs from 'fs';
import * as cheerio from 'cheerio';

async function run() {
  const url = 'https://es.wikipedia.org/wiki/Campeonato_de_Primera_Divisi%C3%B3n_2022_(Argentina)';
  const html = await fetch(url).then(r=>r.text());
  const $ = cheerio.load(html);
  
  const tables = $('table.sortable');
  let targetTable = null;
  tables.each((i, tbl) => {
    if ($(tbl).text().includes('Pts.') && $(tbl).text().includes('Boca Juniors')) {
       targetTable = tbl;
    }
  });
  
  const newPos = [];
  $(targetTable).find('tbody tr').each((i, el) => {
    const tds = $(el).find('td');
    let posText = $(tds[0]).text().trim();
    // Sometimes the position is in a th or has asterisks, fallback check:
    let thPos = $(el).find('th').text().trim();
    const pos = parseInt(thPos || posText);
    
    if (!isNaN(pos)) {
       newPos.push({
         pos,
         equipo: $(tds[1]).text().trim().replace('\n', ''),
         pts: parseInt($(tds[2]).text().trim()),
         pj: parseInt($(tds[3]).text().trim()),
         pg: parseInt($(tds[4]).text().trim()),
         pe: parseInt($(tds[5]).text().trim()),
         pp: parseInt($(tds[6]).text().trim())
       });
    }
  });
  
  // En caso de fallar cheerio fallback a data manual:
  if(newPos.length < 28) {
      console.log('Falló el scraping local, rellenando data completa fallback...');
      // ... we will let you know.
  }

  const dataPath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json';
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const t22 = data.find(c => c.id === '2022-lpf');
  if (t22 && newPos.length >= 28) {
    t22.tabla_posiciones = newPos;
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    console.log('Se inyectaron 28 equipos exitosamente.');
  } else {
    console.log('Faltan equipos o no se encontró tabla', newPos.length);
  }
}
run();
