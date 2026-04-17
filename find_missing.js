const fs = require('fs');
const path = require('path');

const rootDir = './app/public/escudos/';
const targetDir = './app/public/escudos/00_A_DESCARGAR_AHORA_INGLATERRA/';

const missing31 = [
  'leicester-city', 'swansea-city', 'wigan-athletic', 'birmingham-city', 
  'portsmouth', 'middlesbrough', 'blackburn-rovers', 'sheffield-wednesday', 
  'luton-town', 'wimbledon', 'reading-fc', 'coventry-city', 'oxford-united', 
  'norwich-city', 'ipswich-town', 'derby-county', 'southampton', 'stoke-city', 
  'swindon-town', 'west-bromwich-albion', 'qpr', 'blackpool', 'preston-north-end', 
  'huddersfield-town', 'sheffield-united', 'barnsley', 'bury', 'blackburn-olympic', 
  'old-etonians', 'old-carthusians', 'oxford-university'
];

let found = [];

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  // Omit the target dir itself
  if (path.resolve(dir) === path.resolve(targetDir)) return;
  // Omit the specific countries that the other script already populated
  if (dir.includes('inglaterra') || dir.includes('argentina') || dir.includes('italia') || dir.includes('espania') || dir.includes('escocia')) {
     // but wait, what if he dropped them in /escudos/inglaterra/ ?
     // actually if it has a .json, it would be mapped. If it doesn't have a json, he might have dropped it in /escudos/
  }

  const list = fs.readdirSync(dir);
  for (let file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
       scanDir(fullPath);
    } else {
       const lowerName = file.toLowerCase();
       // Check if this file roughly matches any missing club
       for (let clubId of missing31) {
          const mainKey = clubId.split('-')[0]; // e.g. "leicester"
          if (lowerName.includes(mainKey) || lowerName.includes(clubId.replace('-',''))) {
              found.push({ clubId, fullPath, file });
              break;
          }
       }
    }
  }
}

scanDir(rootDir);

console.log("FOUND THE FOLLOWING:");
found.forEach(f => {
  console.log(`- Matched ${f.clubId}: ${f.fullPath}`);
  const destPath = path.join(targetDir, f.clubId, f.file);
  // Auto move
  if (!fs.existsSync(destPath)) {
      if (f.fullPath !== destPath) {
         try {
           fs.cpSync(f.fullPath, destPath);
           fs.unlinkSync(f.fullPath);
           console.log(`---> MOVED to ${destPath}`);
         } catch(e) { console.log("Failed moving", e.message); }
      }
  }
});

console.log("Total recovered:", found.length);
