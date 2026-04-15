import * as cheerio from 'cheerio';

async function run() {
  const url = 'https://es.wikipedia.org/wiki/Equipos_participantes_en_la_Copa_Mundial_de_F%C3%BAtbol_de_2002';
  try {
      const response = await fetch(url);
      const html = await response.text();
      const $ = cheerio.load(html);
      
      $('table.sortable').each((_, table) => {
          const firstRow = $(table).find('tr').eq(1);
          const cols = firstRow.find('td, th');
          const p1Text = $(cols[2]).text().trim() || $(cols[1]).text().trim() || $(cols[0]).text().trim();
          console.log(p1Text.split(',')[0].trim().replace(/\(.*?\)/g, '').trim());
      });
  } catch(e) {
      console.error(e);
  }
}
run();
