import fs from 'fs';
import * as cheerio from 'cheerio';

async function test() {
  const url = 'https://es.wikipedia.org/wiki/Equipos_participantes_en_la_Copa_Mundial_de_F%C3%BAtbol_de_2006';
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  console.log($('table').length, $('table.sortable').length);
}
test();
