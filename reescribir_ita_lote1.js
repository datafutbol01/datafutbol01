const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'italia');

// ITALIA: LOTE 1 (5 CLUBES) - 100% FACTUAL Y DIRECTO
const idolosLote1_Ita = {
  "atalanta": [
    { nombre: "Glenn Strömberg", desc: "Capitán histórico sueco. Jugó ininterrumpidamente ocho temporadas en el club durante la década de 1980 en Primera y Segunda División." },
    { nombre: "Gianpaolo Bellini", desc: "Defensor lateral surgido de la cantera. Posee el récord absoluto de presencias en la historia del club superando los 400 encuentros oficiales." },
    { nombre: "Alejandro 'Papu' Gómez", desc: "Volante ofensivo argentino y capitán histórico. Máximo asistente del club que lideró al equipo en su primera participación oficial en la Liga de Campeones en 2019." },
    { nombre: "Cristiano Doni", desc: "Mediocampista goleador. Se mantiene como el máximo anotador estadístico histórico de la institución superando la cifra de cien goles oficiales." },
    { nombre: "Claudio Caniggia", desc: "Veloz delantero internacional argentino que jugó en la institución en torneos regulares logrando la histórica clasificación a la Copa de la UEFA en 1989." }
  ],
  "bologna": [
    { nombre: "Angelo Schiavio", desc: "Máximo goleador histórico con 242 anotaciones. Artillero central del equipo que conquistó diversos títulos de Serie A durante la década de 1930." },
    { nombre: "Giacomo Bulgarelli", desc: "Mediocampista histórico e indispensable capitán general. Ostenta sólidamente el máximo registro absoluto con cerca de 400 partidos de liga oficial en la posguerra." },
    { nombre: "Roberto Baggio", desc: "Legendario atacante italiano que en la temporada 1997 anotó un total de 22 goles para el equipo, estableciendo el mejor registro goleador de su carrera profesional liguera." },
    { nombre: "Marco Di Vaio", desc: "Experimentado delantero y capitán del plantel en la época moderna. Consiguió la marca de más de 60 goles durante cuatro temporadas seguidas en la Serie A." },
    { nombre: "Harald Nielsen", desc: "Delantero de origen danés. Finalizó como líder de goleo y consagró al plantel aportando goles durante el último campeonato liguero de 1964." }
  ],
  "cagliari": [
    { nombre: "Luigi Riva", desc: "Conocido como Gigi. Máximo ídolo y goleador del equipo que consiguió la hazaña histórica de obtener el título local formal de Serie A en 1970." },
    { nombre: "Daniele Conti", desc: "Mediocampista defensivo originario de las juveniles y eterno capitán. Dueño de la marca inexpugnable formal que corresponde al máximo jugador con participaciones sumando más de 400 partidos." },
    { nombre: "Gianfranco Zola", desc: "Talentoso y veloz delantero italiano. Retornó sorpresivamente para las campañas finales logrando devolver asiduamente al equipo en un complejo campeonato formativo hasta lograr el ascenso." },
    { nombre: "David Suazo", desc: "Atacante hondureño. Lideró la ofensiva logrando consagrarse y asumiendo registros como goleador del equipo superando más de cien conquistas absolutas." },
    { nombre: "Enzo Francescoli", desc: "Fino volante creativo uruguayo. Resultó pilar indispensable asumiendo la generación de juego del equipo liguero de principios de años noventa logrando mantener a la plantilla a salvo." }
  ],
  "como": [
    { nombre: "Stefano Borgonovo", desc: "Delantero formado en la cantera del club. Fue el goleador del equipo durante las campañas en la Serie A a mediados de la década de 1980." },
    { nombre: "Giancarlo Centi", desc: "Mediocampista titular que posee el récord histórico como el jugador con mayor cantidad de partidos jugados en el club." },
    { nombre: "Gianfranco Matteoli", desc: "Mediocampista técnico que debutó profesionalmente en el equipo y lideró los ascensos del club antes de consolidar su carrera en importantes planteles de Italia." },
    { nombre: "Dan Corneliusson", desc: "Delantero centro de origen sueco. Fue un titular habitual y aportó anotaciones durante la participación continua del equipo en la Serie A." },
    { nombre: "Pietro Vierchowod", desc: "Defensor central campeón del mundo con Italia. Inició su etapa deportiva profesional consolidándose como firme zaguero titular del club a fines de los años 70." }
  ],
  "cremonese": [
    { nombre: "Gianluca Vialli", desc: "Extraordinario delantero formado en la cantera. Anotó numerosos goles consolidando a la plantilla en la Serie B y guiando su histórico ascenso a la máxima categoría." },
    { nombre: "Alviero Chiorri", desc: "Mediocampista ofensivo muy querido por los hinchas. Conformó y lideró al equipo durante su campaña ininterrumpida logrando históricos retornos a la Serie A." },
    { nombre: "Gustavo Dezotti", desc: "Goleador internacional argentino. Fue la principal figura ofensiva de la institución estableciendo altas marcas goleadoras consecutivas a comienzos de los años 90." },
    { nombre: "Emiliano Mondonico", desc: "Histórico director técnico y exjugador del club. Dirigió al plantel asegurando el rápido retorno deportivo del equipo a competir oficialmente en la Serie A a principios de los 80." },
    { nombre: "Luigi Gualco", desc: "Defensor central surgido del fútbol base local. Mantiene inamovible el destacado puesto estadístico como el futbolista con mayor cantidad absoluta de presencias con el club." }
  ]
};

const clubesList = Object.keys(idolosLote1_Ita);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote1_Ita[clubId].find(i => 
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
  console.log(`[ITALIA - LOTE 1 (5 Clubes)] Crónicas fácticas redactadas en: ${clubId}`);
});
