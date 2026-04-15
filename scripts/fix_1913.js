const fs=require('fs'); 
const file='c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json'; 
const data=JSON.parse(fs.readFileSync(file,'utf8')); 
const t=data.find(d => d.id === '1913-aaf'); 
if(t){ 
  t.tabla_posiciones = [ 
    {"pos": 1, "equipo": "Racing Club", "pts": 35, "pj": 20, "pg": 17, "pe": 1, "pp": 2}, 
    {"pos": 2, "equipo": "San Isidro", "pts": 32, "pj": 20, "pg": 14, "pe": 4, "pp": 2}, 
    {"pos": 3, "equipo": "River Plate", "pts": 31, "pj": 19, "pg": 13, "pe": 5, "pp": 1}, 
    {"pos": 4, "equipo": "Boca Juniors", "pts": 27, "pj": 19, "pg": 12, "pe": 3, "pp": 4}, 
    {"pos": 5, "equipo": "Platense", "pts": 21, "pj": 18, "pg": 9, "pe": 3, "pp": 6}, 
    {"pos": 6, "equipo": "Belgrano Athletic", "pts": 18, "pj": 18, "pg": 8, "pe": 2, "pp": 8}, 
    {"pos": 7, "equipo": "Quilmes", "pts": 18, "pj": 19, "pg": 8, "pe": 2, "pp": 9}, 
    {"pos": 8, "equipo": "Estudiantes (BA)", "pts": 17, "pj": 19, "pg": 7, "pe": 3, "pp": 9}, 
    {"pos": 9, "equipo": "Estudiantil Porteño", "pts": 17, "pj": 19, "pg": 7, "pe": 3, "pp": 9}, 
    {"pos": 10, "equipo": "Banfield", "pts": 16, "pj": 18, "pg": 6, "pe": 4, "pp": 8}, 
    {"pos": 11, "equipo": "Comercio", "pts": 15, "pj": 19, "pg": 6, "pe": 3, "pp": 10}, 
    {"pos": 12, "equipo": "Ferro Carril Oeste", "pts": 9, "pj": 17, "pg": 2, "pe": 5, "pp": 10}, 
    {"pos": 13, "equipo": "Ferrocarril Sud", "pts": 8, "pj": 17, "pg": 3, "pe": 2, "pp": 12}, 
    {"pos": 14, "equipo": "Olivos", "pts": 7, "pj": 17, "pg": 2, "pe": 3, "pp": 12}, 
    {"pos": 15, "equipo": "Riachuelo", "pts": 5, "pj": 17, "pg": 1, "pe": 3, "pp": 13} 
  ]; 
  fs.writeFileSync(file, JSON.stringify(data, null, 2)); 
  console.log('1913 AAF fixed'); 
}
