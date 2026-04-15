import fs from 'fs';
import * as cheerio from 'cheerio';

async function test1982En() {
  const url = 'https://en.wikipedia.org/wiki/1982_FIFA_World_Cup_squads';
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const tables = $('table');
  console.log("Total tables found:", tables.length);

  tables.each((_, table) => {
      const rows = $(table).find('tr');
      const firstRowCols = $(rows[1]).find('td, th');
      console.log('Cols length:', firstRowCols.length);
  });
}
test1982En();
