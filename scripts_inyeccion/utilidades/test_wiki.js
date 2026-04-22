import fs from 'fs';
import * as cheerio from 'cheerio';

async function fetchWiki() {
  const res = await fetch('https://es.wikipedia.org/wiki/Equipos_participantes_en_la_Copa_Mundial_de_F%C3%BAtbol_de_1986');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  const tables = $('table.sortable');
  
  tables.each((i, tbl) => {
    const $tbl = $(tbl);
    let title = $tbl.prevAll('h3, h2').first().text().trim();
    // Sometimes the title is within an H3, wait, let's search backwards in the DOM
    const rawH3 = $tbl.prev().text().trim() || $tbl.parent().prev().text().trim(); 
    console.log(`Table ${i} -> H3 text:`, title, ' | Prev text:', rawH3);
  });
}

fetchWiki().catch(console.error);
