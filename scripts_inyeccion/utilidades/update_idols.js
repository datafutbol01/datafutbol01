const fs = require('fs');
const fileMaster = 'c:/Users/gonza/futbolhistoria/clubes/boca-juniors.json';
const fileApp = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/boca-juniors.json';
const data = JSON.parse(fs.readFileSync(fileMaster, 'utf8'));

data.idolos = [
  { "nombre": "Juan Román Riquelme", "pos": "Enganche", "apodo": "El Último 10", "periodo": "1996-2002, 2007-2014", "desc": "Considerado el máximo ídolo en la historia del club. Creador de juego brillante y figura clave en la obtención de 3 Copas Libertadores y 1 Copa Intercontinental." },
  { "nombre": "Martín Palermo", "pos": "Delantero", "apodo": "El Titán", "periodo": "1997-2000, 2004-2011", "desc": "El máximo goleador de la historia de Boca con 236 tantos oficiales. Famoso por sus goles épicos, dobletes memorables en finales e infinitas alegrías." },
  { "nombre": "Guillermo Barros Schelotto", "pos": "Extremo", "apodo": "El Mellizo", "periodo": "1997-2007", "desc": "El terror mental y físico de las defensas rivales por la banda derecha. Forjó una alianza espectacular con Palermo y fue un ganador nato de 16 campeonatos." },
  { "nombre": "Carlos Tevez", "pos": "Delantero", "apodo": "El Apache", "periodo": "2001-2004, 2015-2016, 2018-2021", "desc": "Símbolo total del sentimiento del hincha, unió talento de clase mundial con la típica garra bostera. Figura indiscutida en la Libertadores e Intercontinental 2003." },
  { "nombre": "Ángel Clemente Rojas", "pos": "Delantero / Media Punta", "apodo": "Rojitas", "periodo": "1963-1971", "desc": "El emblema de la elegancia y habilidad en la rica historia antigua de Boca; idolatrado por su enorme gambeta indescifrable y sus quiebres de cintura mágicos en el área." }
];

fs.writeFileSync(fileMaster, JSON.stringify(data, null, 2));
fs.copyFileSync(fileMaster, fileApp);
console.log('Lista de Ídolos actualizada con éxito.');
