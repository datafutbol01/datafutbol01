const fs = require('fs');
const path = require('path');

const DIR_STAGING = path.join(__dirname, 'app', 'escudos_a_descargar');

// Asegurar que la carpeta raíz exista
if (!fs.existsSync(DIR_STAGING)) {
  fs.mkdirSync(DIR_STAGING, { recursive: true });
}

const clubs = [
  "augsburg", "union-berlin", "sc-freiburg", "heidenheim", "hoffenheim", 
  "fc-koln", "rb-leipzig", "mainz-05", "fc-st-pauli", "wolfsburg", 
  "bayern-munich", "borussia-dortmund", "bayer-leverkusen", "werder-bremen", 
  "borussia-monchengladbach", "eintracht-frankfurt", "vfb-stuttgart", "hamburger-sv"
];

clubs.forEach(club => {
  const clubDir = path.join(DIR_STAGING, club);
  if (!fs.existsSync(clubDir)) {
    fs.mkdirSync(clubDir, { recursive: true });
  }
});

console.log('Se crearon exitosamente 18 carpetas (una por cada club de la Bundesliga) en app/escudos_a_descargar/');
