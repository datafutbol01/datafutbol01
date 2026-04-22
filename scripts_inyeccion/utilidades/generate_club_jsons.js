const fs = require('fs');
const path = require('path');

const srcDir = './app/public/escudos/00_A_DESCARGAR_AHORA_INGLATERRA';
const destImageDir = './app/public/escudos/inglaterra';
const jsonDir = './app/src/data/clubes/inglaterra';

if (!fs.existsSync(destImageDir)) fs.mkdirSync(destImageDir, { recursive: true });
if (!fs.existsSync(jsonDir)) fs.mkdirSync(jsonDir, { recursive: true });

const folders = fs.readdirSync(srcDir);
let count = 0;

folders.forEach(clubId => {
   const clubSrc = path.join(srcDir, clubId);
   if (!fs.statSync(clubSrc).isDirectory()) return;

   let files = fs.readdirSync(clubSrc).filter(f => !f.startsWith('.'));
   if (files.length === 0) return; 

   let candidate = files[0];
   
   // Intentar encontrar el escudo "actual" de forma inteligente: el más simple, sin números (años) ni "old".
   for (let file of files) {
        const lower = file.toLowerCase();
        const hasYear = /[12][0-9]{3}/.test(lower);
        const hasOld = lower.includes('old') && !clubId.includes('old');
        // si mi candidato actual tiene año u 'old' y el nuevo no, cambio.
        if ( (/[12][0-9]{3}/.test(candidate) || candidate.toLowerCase().includes('old')) && !hasYear && !hasOld ) {
            candidate = file;
        } else if (!hasYear && !hasOld && file.length < candidate.length) {
            candidate = file;
        }
   }

   const escudoActual = `/escudos/inglaterra/${clubId}/${candidate}`;
   const escudosViejos = [];

   files.forEach(f => {
      if(f !== candidate) escudosViejos.push(`/escudos/inglaterra/${clubId}/${f}`);
   });

   const formatName = clubId.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' ');

   const clubData = {
     id: clubId,
     nombre: formatName,
     pais: "Inglaterra",
     ciudad: "",
     fundacion: null,
     estadio: "N/A",
     escudo_actual: escudoActual,
     escudos_historicos_urls: escudosViejos,
     colores: [],
     jerarquia: "historico",
     palmares: {
        torneos_nacionales: { titulos: 0, torneos: [] },
        copas_nacionales: { titulos: 0, torneos: [] },
        torneos_internacionales: { titulos: 0, torneos: [] }
     },
     leyendas: []
   };

   // Write JSON
   fs.writeFileSync(path.join(jsonDir, `${clubId}.json`), JSON.stringify(clubData, null, 2));

   // Move images
   const destFolder = path.join(destImageDir, clubId);
   if (!fs.existsSync(destFolder)) fs.mkdirSync(destFolder, { recursive: true });
   
   files.forEach(f => {
      fs.copyFileSync(path.join(clubSrc, f), path.join(destFolder, f));
      fs.unlinkSync(path.join(clubSrc, f));
   });

   count++;
   console.log(`Created JSON and moved images for: ${clubId} (Current: ${candidate})`);
});

console.log("Total clubs processed:", count);
