import * as cheerio from 'cheerio';

async function t() {
    const response = await fetch('https://en.wikipedia.org/wiki/1930_FIFA_World_Cup');
    const html = await response.text();
    const $ = cheerio.load(html);
    const box = $('.footballbox').first();
    console.log(box.html());
}
t();
