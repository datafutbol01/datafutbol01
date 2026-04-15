const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina');

const idolosLote3 = {
  "argentinos-jrs": [
    { nombre: "Diego Armando Maradona", desc: "Debutó profesionalmente en el club en 1976 y rápidamente deslumbró al fútbol argentino por su inigualable talento, registrando más de 100 goles antes de su transferencia a Boca Juniors." },
    { nombre: "Sergio Batista", desc: "Mediocampista central surgido de la cantera formativa. Fue el eje táctico del equipo que conquistó la Copa Libertadores de 1985, afianzando el recordado estilo de control y técnica." },
    { nombre: "Claudio Borghi", desc: "Volante ofensivo de una resolución técnica excepcional. Resultó determinante durante la histórica campaña en la Copa Libertadores y en la ajustada final Intercontinental frente a Juventus." },
    { nombre: "Juan Román Riquelme", desc: "Originario genuino de las divisiones inferiores conocidas como 'El Semillero del Mundo'. Retornó en el año 2014 para liderar al equipo, logrando el ascenso a la Primera División en lo que fue su última actuación profesional." },
    { nombre: "Néstor Ortigoza", desc: "Mediocampista central preponderante en la obtención del Torneo Clausura 2010. Se destacó a lo largo de su ciclo por su asombrosa efectividad en la ejecución de penales y por su visión organizativa." }
  ],
  "banfield": [
    { nombre: "Javier Sanguinetti", desc: "Posee el récord absoluto de partidos disputados oficiales vistiendo la camiseta del club. Como defensor central, fue una pieza principal de liderazgo en las campañas de consolidación de la década del 2000." },
    { nombre: "Garrafa Sánchez", desc: "Enganche de sobresaliente habilidad e ídolo muy carismático para los simpatizantes. Lideró futbolísticamente al equipo hacia el anhelado ascenso a la Primera División en la temporada 2001." },
    { nombre: "Darío Cvitanich", desc: "Delantero originado en las divisiones inferiores que destacó ampliamente por su capacidad de definición. Retornó al club en múltiples etapas de su carrera, manteniendo siempre un promedio anotador decisivo." },
    { nombre: "Santiago Silva", desc: "Atacante central de origen uruguayo caracterizado por su temperamento inquebrantable. Fue el máximo goleador del certamen y pilar estructural en la obtención del Torneo Apertura 2009, el primer campeonato de Primera División del club." },
    { nombre: "Julio Falcioni", desc: "Reconocido centralmente por su etapa como director técnico. Forjó un equipo rocoso que consiguió el histórico campeonato de 2009, transformándose en una de las máximas referencias de la era moderna de la institución." }
  ],
  "lanus": [
    { nombre: "Lautaro Acosta", desc: "Delantero extremo, producto de la cantera y figura emblemática de la modernidad Granate. Conquistó el Torneo Apertura 2007 en sus inicios y continuó siendo estandarte en los diversos trofeos obtenidos posteriormente." },
    { nombre: "José Sand", desc: "El máximo artillero en la historia centenaria de la institución. Con un instinto delantero irreplicable, fue el arma determinante del equipo tanto en los campeonatos de Primera División como en las competiciones del continente." },
    { nombre: "Luis Arrieta", desc: "Destacado atacante de la década de 1940 que mantuvo el récord histórico de goleo exclusivo durante setenta años. Integró el plantel representativo que solidificó inicialmente al equipo en la máxima categoría regulada." },
    { nombre: "Armando González", desc: "Histórico capitán defensivo aguerrido apodado 'La Urraca'. Inmortalizó su nombre en 1996 al levantar la Copa Conmebol, certamen que representó el primer título oficial internacional del club." },
    { nombre: "Héctor Guidi", desc: "Mediocampista organizador central histórico de enorme despliegue. Completó la mayor parte de su trayectoria profesional aquí y fue el director de orquesta de los combinados de 1950, recordados por su elegante juego." }
  ],
  "talleres-cba": [
    { nombre: "Daniel Willington", desc: "Exquisito mediocampista ofensivo forjado de una potencia técnica distinguida y natural remate. Fue un símbolo insoslayable durante el esplendor institucional desarrollado regionalmente en la década de 1960 y 1970." },
    { nombre: "Mario Kempes", desc: "Reconocido goleador que protagonizó un rutilante paso por las filas del plantel. En la década de los setenta, anotó una asombrosa cantidad de tantos, cimentando rápidamente la base de su extraordinaria proyección mundial a futuro." },
    { nombre: "José Daniel Valencia", desc: "Enganche cerebral apodado 'Rana' e incorporado oportunamente del norte del país. Se convirtió en el director estratégico del equipo que deslumbró y peleó instancias cumbres de los Torneos Nacionales a finales de los setenta." },
    { nombre: "Pablo Guiñazú", desc: "Experimentado volante central de recuperación devenido en referente ineludible contemporáneo. Se ganó la idolatría permanente en 2016 al ensayar un agónico e inesperado remate al ángulo que consumó el ascenso definitivo de vuelta a Primera." },
    { nombre: "Luis Galván", desc: "Zaguero central mundialista de enorme serenidad táctica, quite y posicionamiento estricto. Representó a la institución ininterrumpidamente durante todo el ciclo superior nacional siendo pilar irremplazable en los equipos de 1977." }
  ],
  "platense": [
    { nombre: "Goyeneche", desc: "Conocido popular y nacionalmente como uno de los máximos exponentes de la historia tanguera del país. Su devoto y constante apoyo hizo que su nombre y figura se asimilaran profundamente como parte intrínseca de la identidad general de la institución." },
    { nombre: "Gonzalo Bergessio", desc: "Robusto delantero con destacada potencia física. Durante el inicio de su extensa trayectoria, irrumpió con fuerza letal en el primer equipo evidenciando su notoria capacidad anotadora frente a las fuertes defensas del torneo de ascenso." },
    { nombre: "David Trezeguet", desc: "Destacado atacante franco-argentino y campeón mundial internacional, nacido profesionalmente de las entrañas formativas del club, donde tuvo sus primeros roces de primera división en 1994 previo a su fulgurante carrera europea." },
    { nombre: "Claudio Spontón", desc: "Rápido atacante y protagonista destacado de la estructura principal de la Primera División a lo largo de diversas etapas de la década de 1990. Su arraigo a los colores lo mantuvo vigente permanentemente como valioso delantero e ícono local." },
    { nombre: "Mauricio Hanuch", desc: "Mediocampista dinámico volcado al ataque y reconocido por su regate explosivo en la zona de tres cuartos. Quedó grabado en la gran memoria tras estelarizar un ineludible encuentro goleando contundentemente a Boca Juniors en 1998." }
  ]
};

const clubesList = Object.keys(idolosLote3);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote3[clubId].find(i => 
         i.nombre.toLowerCase() === idolo.nombre.toLowerCase() ||
         idolo.nombre.toLowerCase().includes(i.nombre.toLowerCase().split(' ')[0]) ||
         i.nombre.toLowerCase().includes(idolo.nombre.toLowerCase().split(' ')[0])
      );
      if (idoloMatch) {
         idolo.desc = idoloMatch.desc;
      }
    });
  }

  // Dejamos Intactas las crónicas de Goleadores y Presencias porque el 
  // formato factual seco que pusimos en masa funciona perfecto y no tiene quejas de poesía de esos roles menores.

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[ARG LOTE 3] Crónicas reales redactadas a mano aplicadas en: ${clubId}`);
});
