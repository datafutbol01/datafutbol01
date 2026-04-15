import * as cheerio from 'cheerio';

async function test() {
  const response = await fetch('https://en.wikipedia.org/wiki/1938_FIFA_World_Cup_squads');
  const html = await response.text();
  const $ = cheerio.load(html);
  
  $('table.sortable').each((_, t) => {
      console.log('--- Table ---');
      console.log($(t).find('tr').eq(1).text().replace(/\n/g, ' '));
  });
}
test();
