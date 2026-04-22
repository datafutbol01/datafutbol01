import * as cheerio from 'cheerio';

async function test() {
  const response = await fetch('https://en.wikipedia.org/wiki/1934_FIFA_World_Cup_squads');
  const html = await response.text();
  const $ = cheerio.load(html);
  
  $('table.sortable').each((_, table) => {
      const firstRowCols = $(table).find('tr').eq(1).find('td, th');
      console.log('Cols Length:', firstRowCols.length);
      firstRowCols.each((j, c) => console.log('  Col', j, ':', $(c).text().trim()));
  });
}
test();
