const fs = require('fs');

let html20 = "";
let html30 = "";
try {
   html20 = fs.readFileSync('rsssf1920s.html', 'utf8');
   html30 = fs.readFileSync('rsssf1930s.html', 'utf8');
} catch(e) { 
   console.log("Files not found, skipping.");
}

function extractLines(html, strToFind) {
    if(!html) return;
    let lines = html.split('\n');
    let idx = lines.findIndex(l => l.includes(strToFind));
    if(idx !== -1) {
        console.log(`Found ${strToFind}`);
        console.log(lines.slice(idx, idx+35).join('\n'));
    }
}

extractLines(html20, "Asociación Amateurs de Football - 1921");
extractLines(html20, "Asociación Amateurs de Football - 1926");
extractLines(html30, "Asociación Argentina de Football (Amateurs y Profesionales) - 1931");
extractLines(html30, "Copa Campeonato 1936");

