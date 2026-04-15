const fs=require('fs'); 
const file='c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json'; 
const data=JSON.parse(fs.readFileSync(file,'utf8')); 

// 1913 FAF it probably is '1913-faf'
const t=data.find(d => d.anio === '1913' && d.torneo.includes('FAF')); 
if(t){ 
  t.tabla_posiciones = [ 
    {"pos": 1, "equipo": "Estudiantes (LP)", "pts": 31, "pj": 18, "pg": 14, "pe": 3, "pp": 1}, 
    {"pos": 2, "equipo": "Gimnasia y Esgrima (BA)", "pts": 28, "pj": 18, "pg": 11, "pe": 6, "pp": 1}, 
    {"pos": 3, "equipo": "Argentino de Quilmes", "pts": 27, "pj": 18, "pg": 12, "pe": 3, "pp": 3}, 
    {"pos": 4, "equipo": "Kimberley", "pts": 21, "pj": 18, "pg": 9, "pe": 3, "pp": 6}, 
    {"pos": 5, "equipo": "Independiente", "pts": 19, "pj": 18, "pg": 7, "pe": 5, "pp": 6}, 
    {"pos": 6, "equipo": "Hispano Argentino", "pts": 17, "pj": 18, "pg": 8, "pe": 1, "pp": 9}, 
    {"pos": 7, "equipo": "Tigre", "pts": 15, "pj": 18, "pg": 6, "pe": 3, "pp": 9}, 
    {"pos": 8, "equipo": "Porteño", "pts": 12, "pj": 18, "pg": 4, "pe": 4, "pp": 10}, 
    {"pos": 9, "equipo": "Atlanta", "pts": 8, "pj": 18, "pg": 3, "pe": 2, "pp": 13}, 
    {"pos": 10, "equipo": "Sociedad Sportiva Argentina", "pts": 2, "pj": 18, "pg": 0, "pe": 2, "pp": 16}
  ]; 
  fs.writeFileSync(file, JSON.stringify(data, null, 2)); 
  console.log('1913 FAF fixed'); 
} else {
  console.log('1913 FAF NO ENCONTRADO');
}
