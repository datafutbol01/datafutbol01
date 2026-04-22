const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/inglaterra/';

// LIVERPOOL: Football League Super Cup 1985
const livFile = path + 'liverpool.json';
if (fs.existsSync(livFile)) {
  const data = JSON.parse(fs.readFileSync(livFile));
  if (!data.titulos.find(t => t.nombre === 'Football League Super Cup')) {
    data.titulos.push({ nombre: 'Football League Super Cup', cantidad: 1, años: ['1985-86'] });
    fs.writeFileSync(livFile, JSON.stringify(data, null, 2));
    console.log("Liverpool: Football League Super Cup added.");
  }
}

// ARSENAL: Centenary Trophy 1988
const arsFile = path + 'arsenal.json';
if (fs.existsSync(arsFile)) {
  const data = JSON.parse(fs.readFileSync(arsFile));
  if (!data.titulos.find(t => t.nombre === 'Centenary Trophy')) {
    data.titulos.push({ nombre: 'Centenary Trophy', cantidad: 1, años: ['1988'] });
    fs.writeFileSync(arsFile, JSON.stringify(data, null, 2));
    console.log("Arsenal: Centenary Trophy added.");
  }
}
