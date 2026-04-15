const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/inglaterra/';

const rawList = `1991-92
Nottingham ForestSouthampton3-2 (en tiempo extra)
1990-91
Crystal PalaceEverton4-1 (en tiempo extra)
1989-90
ChelseaMiddlesbrough1-0
1988-89
Nottingham ForestEverton4-3 (en tiempo extra)
1987-88
Reading FCLuton Town4-1
1986-87
Blackburn RoversCharlton Athletic1-0
1985-86
ChelseaManchester City`;

const targetMap = {
  'chelsea.json': 'Chelsea',
  'crystal-palace.json': 'Crystal Palace',
  'nottingham-forest.json': 'Nottingham Forest'
};

const userYearsByClub = {
    'Chelsea': ['1985-86', '1989-90'],
    'Crystal Palace': ['1990-91'],
    'Nottingham Forest': ['1988-89', '1991-92']
};

const res = {};
let hasDiscrepancies = false;

Object.entries(targetMap).forEach(([file, clubName]) => {
  if (fs.existsSync(path + file)) {
     const data = JSON.parse(fs.readFileSync(path + file));
     
     let liga = data.titulos.find(t => t.nombre.includes("Full Members' Cup") || t.nombre === "Full Members' Cup");
     
     if (!liga) {
       if (userYearsByClub[clubName].length > 0) {
          liga = { nombre: "Full Members' Cup", cantidad: userYearsByClub[clubName].length, años: userYearsByClub[clubName].reverse() };
          data.titulos.push(liga);
          fs.writeFileSync(path + file, JSON.stringify(data, null, 2));
          res[clubName] = { inyectado_totalmente_nuevo: userYearsByClub[clubName].reverse() };
          hasDiscrepancies = true;
       }
       return;
     }

     const myYears = liga.años || [];
     const uYears = userYearsByClub[clubName].reverse();
     
     if (uYears.join(',') !== myYears.join(',')) {
         res[clubName] = { 
           en_json_antes: myYears, 
           en_lista_usuario: uYears
         };
         liga.años = uYears;
         liga.cantidad = uYears.length;
         fs.writeFileSync(path + file, JSON.stringify(data, null, 2));
         hasDiscrepancies = true;
     }
  }
});

console.log(JSON.stringify(res, null, 2));
if (!hasDiscrepancies) console.log("NO DISCREPANCIES FOUND.");
