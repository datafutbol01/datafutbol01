const fs = require('fs');
const path = require('path');

const clubs = [
    "augsburg", "union-berlin", "sc-freiburg", "heidenheim", "hoffenheim",
    "fc-koln", "rb-leipzig", "mainz-05", "fc-st-pauli", "wolfsburg",
    "bayern-munich", "borussia-dortmund", "bayer-leverkusen", "werder-bremen",
    "borussia-monchengladbach", "eintracht-frankfurt", "vfb-stuttgart", "hamburger-sv"
];

const DIR_ESCUDOS = path.join(__dirname, 'app', 'public', 'escudos');
const DIR_HISTORICOS = path.join(__dirname, 'app', 'public', 'escudos_historicos');

const missingCurrent = [];
const missingHistorical = [];

clubs.forEach(club => {
    // Check current shield (.png, .webp, or .svg) usually named [club].png etc.
    const hasCurrent = fs.existsSync(path.join(DIR_ESCUDOS, `${club}.png`)) ||
        fs.existsSync(path.join(DIR_ESCUDOS, `${club}.webp`)) ||
        fs.existsSync(path.join(DIR_ESCUDOS, `${club}.svg`));

    if (!hasCurrent) {
        missingCurrent.push(club);
    }

    // Check historical shields folder exists and has files
    const histPath = path.join(DIR_HISTORICOS, club);
    let hasHistorical = false;
    if (fs.existsSync(histPath) && fs.lstatSync(histPath).isDirectory()) {
        const files = fs.readdirSync(histPath);
        if (files.length > 0) {
            hasHistorical = true;
        }
    }

    if (!hasHistorical) {
        missingHistorical.push(club);
    }
});

console.log("=== AUDITORIA DE ESCUDOS BUNDESLIGA ===");
console.log(`Faltan escudos MODERNOS (app/public/escudos/) para ${missingCurrent.length} clubes:`);
console.log(missingCurrent.join(', ') || "Ninguno. Todos los escudos modernos existen.");
console.log("");
console.log(`Faltan carpetas de escudos HISTÓRICOS (app/public/escudos_historicos/) para ${missingHistorical.length} clubes:`);
console.log(missingHistorical.join(', ') || "Ninguna. Todas las carpetas históricas existen con imágenes.");
