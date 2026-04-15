const fs=require('fs'); 
const file='c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json'; 
const data=JSON.parse(fs.readFileSync(file,'utf8')); 
const t=data.find(d => d.id === '1914-faf'); 
if(t){ 
  t.tabla_posiciones = [ 
    {"pos": 1, "equipo": "Porteño", "pts": 24, "pj": 14, "pg": 10, "pe": 4, "pp": 0}, 
    {"pos": 2, "equipo": "Estudiantes (LP)", "pts": 21, "pj": 14, "pg": 9, "pe": 3, "pp": 2}, 
    {"pos": 3, "equipo": "Independiente", "pts": 19, "pj": 14, "pg": 7, "pe": 5, "pp": 2}, 
    {"pos": 4, "equipo": "Kimberley", "pts": 12, "pj": 14, "pg": 5, "pe": 2, "pp": 7}, 
    {"pos": 5, "equipo": "Gimnasia y Esgrima (BA)", "pts": 11, "pj": 14, "pg": 4, "pe": 3, "pp": 7}, 
    {"pos": 6, "equipo": "Hispano Argentino", "pts": 11, "pj": 14, "pg": 4, "pe": 3, "pp": 7}, 
    {"pos": 7, "equipo": "Atlanta", "pts": 10, "pj": 14, "pg": 4, "pe": 2, "pp": 8}, 
    {"pos": 8, "equipo": "Sportivo Floresta", "pts": 4, "pj": 14, "pg": 1, "pe": 2, "pp": 11} 
  ]; 
  fs.writeFileSync(file, JSON.stringify(data, null, 2)); 
  console.log('1914 FAF fixed'); 
}
