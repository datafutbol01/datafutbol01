const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');

// LOTE DE 4 PARA COMPLETAR LOS 5 (MALLORCA + ESTOS 4).
const idolosLote2_4 = {
  "osasuna": [
    { nombre: "Patxi Puñal", desc: "Mediocampista formado en el club. Posee el histórico récord de mayor cantidad de partidos jugados en la institución, con más de 500 encuentros." },
    { nombre: "Jan Urban", desc: "Delantero de origen polaco. Disputó la titularidad a principios de 1990 anotando goles claves que permitieron las primeras clasificaciones a torneos europeos del equipo." },
    { nombre: "César Cruchaga", desc: "Zaguero central y gran capitán institucional. Formó parte del plantel que alcanzó por primera vez los torneos de Liga de Campeones en 2006." },
    { nombre: "Pablo García", desc: "Defensor y volante uruguayo de quite. Lideró la organización y recuperación para afianzar el histórico cuarto lugar general en torneos locales del club." },
    { nombre: "Roberto Torres", desc: "Atacante surgido del complejo local. Jugó más de 300 partidos durante campañas formales y apoyó el ascenso titular directo de su escuadra a Primera División." }
  ],
  "rayo-vallecano": [
    { nombre: "Míchel", desc: "Mediocampista formado en la cantera local. Tras su extensa carrera como jugador en el primer equipo, debutó como director técnico." },
    { nombre: "Wilfred Agbonavbare", desc: "Arquero nigeriano que atajó en Primera División durante los primeros años de la década de 1990." },
    { nombre: "Guilherme", desc: "Centrodelantero titular que formó parte del histórico equipo que logró ser líder de Primera División en 1999." },
    { nombre: "Isi Palazón", desc: "Extremo que asumió la titularidad en competiciones contemporáneas, impulsando al plantel a varios ascensos de división." },
    { nombre: "Soto", desc: "Defensor y jugador franquicia que mantiene en su poder la mayor cifra de partidos jugados de la institución." }
  ],
  "real-betis": [
    { nombre: "Joaquín Sánchez", desc: "Mediocampista extremo y gran capitán. Terminó su carrera ostentando el récord de mayor cantidad de partidos jugados en la historia del club." },
    { nombre: "Rafael Gordillo", desc: "Veloz lateral izquierdo que destacó a lo largo de campañas nacionales para convertirse luego en titular del seleccionado nacional." },
    { nombre: "Rubén Castro", desc: "Delantero español que ostenta el título de máximo goleador oficial de la historia del club en diferentes categorías." },
    { nombre: "Julio Cardeñosa", desc: "Mediocampista distribuidor de la histórica plantilla campeona de la primera Copa del Rey que el club conquistó en 1977." },
    { nombre: "Nabil Fekir", desc: "Volante ofensivo internacional que capitaneó y armó las ofensivas en el plantel victorioso que consiguió la Copa del Rey de 2022." }
  ],
  "real-oviedo": [
    { nombre: "Isidro Lángara", desc: "Extraordinario goleador de la década de 1930. Ganó el Trofeo Pichichi de Primera División en tres temporadas consecutivas." },
    { nombre: "Eduardo Herrera Bueno (Herrerita)", desc: "Destacado delantero que conformó el bloque ofensivo del club garantizando altas consagraciones regulares a mediados de siglo." },
    { nombre: "Carlos Muñoz", desc: "Delantero centro fundamental que aportó la mayoría de goles decisivos en el ascenso a Primera División a finales de la década de 1980." },
    { nombre: "Mariano Arias (Marianín)", desc: "Atacante galardonado históricamente que logró ganar el Trofeo Pichichi a máximo goleador de Primera División en la temporada de 1972." },
    { nombre: "Esteban Suárez", desc: "Arquero que habiendo cumplido trayectorias locales y externas retornó años después para defender el arco logrando rescates y ascensos." }
  ]
};

const clubesList = Object.keys(idolosLote2_4);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote2_4[clubId].find(i => 
         i.nombre.toLowerCase() === idolo.nombre.toLowerCase() ||
         idolo.nombre.toLowerCase().includes(i.nombre.toLowerCase().split(' ')[0]) ||
         i.nombre.toLowerCase().includes(idolo.nombre.toLowerCase().split(' / ')[0]) || 
         i.nombre.toLowerCase().includes(idolo.nombre.toLowerCase().split(' ')[0])
      );
      if (idoloMatch) {
         idolo.desc = idoloMatch.desc;
      }
    });
  }

  // Las presencias y goleadores quedan iguales
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[ESPAÑA - LOTE 2 (RESTO)] Crónicas redactadas en: ${clubId}`);
});
