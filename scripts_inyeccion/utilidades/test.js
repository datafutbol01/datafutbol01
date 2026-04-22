import fs from 'fs';
import * as cheerio from 'cheerio';

async function testHeadings() {
  const url = 'https://es.wikipedia.org/wiki/Equipos_participantes_en_la_Copa_Mundial_de_F%C3%BAtbol_de_2022';
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  $('table.sortable').each((_, table) => {
      console.log("Heading text:", $(table).prevAll('h2, h3, h4').first().text().trim());
  });
}
testHeadings();
