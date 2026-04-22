const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');

const idolosLote1 = {
  "alaves": [
    { nombre: "Javi Moreno", desc: "Máximo goleador en la campaña que finalizó en el subcampeonato de la Copa de la UEFA en 2001." },
    { nombre: "Manu García", desc: "Capitán originario de Vitoria que anotó el gol de la victoria frente al Real Madrid en la temporada 2018." },
    { nombre: "Cosmin Contra", desc: "Lateral derecho titular en la destacada participación que el club logró en la Copa de la UEFA de 2001." },
    { nombre: "Pablo Gómez", desc: "Mediocampista ofensivo que ascendió con el equipo desde las divisiones menores hasta la Primera División." },
    { nombre: "Fernando Pacheco", desc: "Arquero titular en la etapa contemporánea, acumulando cientos de encuentros disputados en Primera División." }
  ],
  "celta-vigo": [
    { nombre: "Alexander Mostovoi", desc: "Mediocampista ruso que fue el referente ofensivo durante las competiciones europeas de fines de los años 90." },
    { nombre: "Valery Karpin", desc: "Mediocampista organizador de origen ruso. Conformó el equipo titular en la Copa de la UEFA." },
    { nombre: "Gustavo López", desc: "Extremo argentino que jugó ocho años en el club y alcanzó el subcampeonato de la Copa del Rey en 2001." },
    { nombre: "Hugo Mallo", desc: "Lateral derecho y capitán. Posee el récord absoluto de mayor cantidad de partidos jugados en la historia del club." },
    { nombre: "Iago Aspas", desc: "Máximo goleador histórico del club en Primera División y ganador de cuatro Trofeos Zarra de España." }
  ],
  "espanyol": [
    { nombre: "Raúl Tamudo", desc: "Máximo goleador histórico con más de 120 anotaciones. Ganó dos títulos de Copa del Rey durante su capitanía." },
    { nombre: "Dani Jarque", desc: "Defensor central y capitán formado en la cantera. La ciudad deportiva del club lleva institucionalmente su nombre." },
    { nombre: "Thomas N'Kono", desc: "Arquero camerunés titular en la histórica campaña de la Copa de la UEFA donde el equipo fue subcampeón en 1988." },
    { nombre: "Luis García", desc: "Delantero protagonista en la obtención de la Copa del Rey de 2006 y en diversas clasificaciones internacionales." },
    { nombre: "Iván de la Peña", desc: "Mediocampista central que lideró en número de asistencias a los delanteros del club durante sus años en Primera." }
  ],
  "getafe": [
    { nombre: "Manu del Moral", desc: "Delantero que se mantuvo durante largos años como el máximo anotador histórico del club en Primera División." },
    { nombre: "Gabi", desc: "Mediocampista defensivo que fue titular durante la histórica campaña del club en la Copa de la UEFA 2008." },
    { nombre: "Sergio Pachón", desc: "Atacante que anotó cuatro goles en el partido final de la temporada asegurando el histórico primer ascenso del club a Primera." },
    { nombre: "Abbondanzieri", desc: "Arquero argentino que obtuvo el Trofeo Zamora como el arco menos vencido de Primera División de España en 2007." },
    { nombre: "Jaime Gavilán", desc: "Extremo que asumió la titularidad superando un centenar de partidos en la máxima categoría del fútbol español." }
  ],
  "girona": [
    { nombre: "Cristhian Stuani", desc: "Máximo goleador histórico del club. Capitaneó al equipo durante la época de múltiples ascensos a Primera División." },
    { nombre: "Portu", desc: "Extremo de ataque que aportó asistencias y decenas de goles fundamentales en la primera etapa en Primera División." },
    { nombre: "Aleix García", desc: "Mediocentro titular que capitaneó al equipo en la clasificación a la Liga de Campeones en 2024." },
    { nombre: "Borja García", desc: "Mediocampista ofensivo que disputó más de 200 partidos a lo largo de campañas en Primera y Segunda División." },
    { nombre: "José Aurelio Suárez", desc: "Guardameta con participaciones titulares en torneos del ascenso cuidando el arco en diversas campañas nacionales." }
  ],
  "elche": [
    { nombre: "Juan Francisco Martínez (Nino)", desc: "Dueño de ambos récords históricos: máximo goleador absoluto y jugador con más partidos disputados en el club." },
    { nombre: "Fidel Chaves", desc: "Mediocampista que aportó participaciones clave para conseguir diferentes ascensos a Primera División." },
    { nombre: "Marcial Pina", desc: "Habilidoso mediocampista surgido del club en la década de los 60 antes de su paso a clubes mayores de Primera División." },
    { nombre: "Romero", desc: "Defensor central que formó una titularidad constante en torneos y copas a mediados de siglo estableciendo solidez defensiva." },
    { nombre: "Miguel Quirant", desc: "Defensor que ocupa actualmente la tercera posición histórica en la estadística de partidos jugados en la institución." }
  ],
  "levante": [
    { nombre: "José Luis Morales", desc: "Apodado El Comandante. Es el capitán y máximo goleador acumulado del club en torneos de Primera División." },
    { nombre: "Sergio Ballesteros", desc: "Defensor central que lideró como capitán al histórico plantel que logró clasificar a torneos continentales en 2012." },
    { nombre: "Paco Salillas", desc: "Delantero centro que resultó goleador indiscutido para obtener ascensos decisivos a fines del siglo veinte." },
    { nombre: "Vicente Iborra", desc: "Centrocampista formado en la cantera aportando destacadas campañas en el ciclo inicial hacia torneos europeos." },
    { nombre: "Félix Ettien", desc: "Extremo africano de origen marfileño que vistió ininterrumpidamente la camiseta del club por más de un decenio en múltiples divisiones." }
  ]
};

const clubesList = Object.keys(idolosLote1);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote1[clubId].find(i => 
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

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[ESP LOTE 1] Crónicas SECAS aplicadas en: ${clubId}`);
});
