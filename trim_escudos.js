const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const baseDir = 'app/public/escudos/brasil';

async function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDir(fullPath);
    } else if (file.endsWith('.webp') || file.endsWith('.png')) {
      try {
        const inputBuffer = fs.readFileSync(fullPath);
        const outputBuffer = await sharp(inputBuffer)
          .trim() 
          .toBuffer();
          
        fs.writeFileSync(fullPath, outputBuffer);
        console.log(' Recortado -> ' + file);
      } catch (err) {
        console.error('Error recortando: ' + fullPath, err.message);
      }
    }
  }
}

processDir(baseDir).then(() => console.log('\n¡Proceso de recorte finalizado para todos los escudos!'));
