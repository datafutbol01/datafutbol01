const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/escocia/';

const archivos = fs.readdirSync(path).filter(f => f.endsWith('.json'));

archivos.forEach(file => {
  const filePath = path + file;
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos) {
    data.idolos = data.idolos.map(i => {
      if (i.apodo === i.nombre) {
        delete i.apodo;
      }
      return i;
    });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Fixed apodo for ${file}`);
});
