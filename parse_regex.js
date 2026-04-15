const fs = require('fs');
const ch = require('cheerio');
const h = fs.readFileSync('angers_aux2.html', 'utf8');

const $ = ch.load(h);
const cleanText = $('body').text().replace(/\s+/g, ' ');

// The user found: Partidos 22 Victorias Angers SCO 10 Victorias AJ Auxerre 3 Empates 9
// Let's use a regex to capture it. We don't know exact team names so we use .*?
const regex = /Partidos\s*(\d+)\s*Victorias(.*?)\s*(\d+)\s*Victorias(.*?)\s*(\d+)\s*Empates\s*(\d+)/i;
const match = cleanText.match(regex);

if (match) {
    console.log("MATCH FOUND!");
    console.log("PJ:", match[1]);
    console.log("Win 1 (", match[2].trim(), "):", match[3]);
    console.log("Win 2 (", match[4].trim(), "):", match[5]);
    console.log("Empates:", match[6]);
} else {
    console.log("Not found.");
    // Search the DOM element that contains 'Partidos' exactly
    let pDOM = null;
    $('*').each((i, e) => {
        if ($(e).children().length === 0 && $(e).text().trim() === 'Partidos') {
            pDOM = $(e).parent().parent().text().replace(/\s+/g, ' ').trim();
        }
    });
    console.log("Found DOM Node text:", pDOM);
}
