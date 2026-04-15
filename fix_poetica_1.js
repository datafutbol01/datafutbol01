const fs = require('fs');

const dataMap = {
  'atalanta.json': {
    "descripcion_corta": "Entidad de la ciudad de Bérgamo, destacada en las últimas décadas por su academia formativa y su consolidación en competiciones europeas bajo al mando de Gian Piero Gasperini.",
    "historia": [
      {
        "ano": "1907",
        "hito": "Fundación del Atalanta Bergamasca Calcio",
        "desc": "El 17 de octubre de 1907, estudiantes del Liceo Clásico Paolo Sarpi (Eugenio Urio, Giulio y Ferruccio Amati, Alessandro Forlini y Giovanni Roberti) fundaron el club inspirado en la figura de la mitología griega, Atalanta. Tras su fusión en 1920 con la sociedad Bergamasca di Ginnastica e Scherma, adoptaron los colores negro y azul definitivos. Nació como una alternativa a las asociaciones de gimnasia tradicionales de la ciudad alta."
      },
      {
        "ano": "1963",
        "hito": "Primer Título Nacional: Coppa Italia",
        "desc": "El 2 de junio de 1963, el club logró su primer título importante al vencer 3-1 al Torino en la final de la Coppa Italia disputada en Milán. El equipo estaba capitaneado por Angelo Domenghini y dirigido por el técnico Paolo Tabanelli."
      },
      {
        "ano": "1988",
        "hito": "Semifinales de la Recopa de Europa desde Serie B",
        "desc": "Bajo la dirección de Emiliano Mondonico, la Atalanta compitió en la Recopa de Europa mientras militaba en la Serie B. El club alcanzó las semifinales del torneo eliminando al Sporting de Lisboa y otros equipos, estableciendo un registro histórico para un equipo de segunda división en torneos continentales."
      },
      {
        "ano": "2019",
        "hito": "Clasificación Histórica a la Champions League",
        "desc": "Con Gian Piero Gasperini en el banquillo, el club implementó un sistema de juego ofensivo y finalizó en la tercera posición de la Serie A. Este puesto otorgó a la institución su primera clasificación a la UEFA Champions League, consolidando su estatus moderno."
      },
      {
        "ano": "2024",
        "hito": "Campeones de la Europa League",
        "desc": "La Atalanta obtuvo su primer título internacional al vencer 3-0 al Bayer Leverkusen en la final de la UEFA Europa League disputada en Dublín. Ademola Lookman anotó un triplete (hat-trick) en el partido decisivo para asegurar el trofeo."
      }
    ]
  },
  'bologna.json': {
    "descripcion_corta": "Institución de la región de Emilia-Romaña que dominó el campeonato nacional italiano en la década de 1930, ostentando siete títulos de la Serie A.",
    "historia": [
      {
        "ano": "1909",
        "hito": "Fundación del Bologna Football Club",
        "desc": "El 3 de octubre de 1909, en la Cervecería Ronzani de Vía Spaderie, el austriaco Emilio Arnstein junto al estudiante Carlo Sandoni y el dentista suizo Louis Rauch fundaron la institución. Rauch se convirtió en el primer presidente. El club adoptó las rayas verticales rojas y azules como colores oficiales, compitiendo inicialmente en el predio de Prados de Caprara."
      },
      {
        "ano": "1925",
        "hito": "El Primer Scudetto de la Institución",
        "desc": "Con el delantero Angelo Schiavio como figura central, el Bologna ganó su primer Campeonato Nacional superando al Genoa tras una disputada serie de partidos finales. La solidez del equipo provocó que la prensa nacional lo apodara 'el escuadrón que hace temblar al mundo'."
      },
      {
        "ano": "1964",
        "hito": "El Séptimo Scudetto en Partido de Desempate",
        "desc": "Días después del fallecimiento del presidente Renato Dall'Ara, el Bologna conquistó su séptimo Scudetto al disputar el único partido de desempate en la historia moderna de la Serie A. El encuentro se jugó contra el Inter de Milán y finalizó 2-0 a favor de los emilianos."
      },
      {
        "ano": "1998",
        "hito": "Retorno a Competiciones Europeas",
        "desc": "Bajo la influencia del mediapunta Roberto Baggio, quien logró cifras goleadoras destacadas en la temporada, el club mejoró su rendimiento después de años en divisiones inferiores. Conquistaron la Copa Intertoto, lo que les permitió reintegrarse en torneos continentales."
      },
      {
        "ano": "2024",
        "hito": "Regreso a la Champions League",
        "desc": "Dirigido por Thiago Motta, el equipo alcanzó la quinta posición en la Serie A. Este rendimiento aseguró el retorno histórico del Bologna a la máxima competición de clubes de Europa (Champions League) tras seis décadas de ausencia."
      }
    ]
  },
  'cagliari.json': {
    "descripcion_corta": "Equipo representativo de la isla de Cerdeña que logró un histórico Scudetto nacional en la temporada 1969-70 bajo el liderazgo de Luigi Riva.",
    "historia": [
      {
        "ano": "1920",
        "hito": "Fundación Oficial del Club",
        "desc": "El 30 de mayo de 1920, el cirujano Gaetano Fichera y varios asociados fundaron el Cagliari Football Club durante una asamblea en el Cinema Eden. El equipo adoptó los colores rojo y azul oscuro como representación cívica de la bandera de la ciudad y de la región, jugando sus primeros partidos en el Stallaggio Meloni."
      },
      {
        "ano": "1964",
        "hito": "Debut Histórico en la Serie A",
        "desc": "El club ascendió por primera vez a la máxima categoría del fútbol italiano, coincidiendo con el desarrollo profesional de Luigi 'Gigi' Riva, un delantero que se establecería a la postre como el principal referente histórico de la entidad."
      },
      {
        "ano": "1970",
        "hito": "El Único Scudetto del Cagliari",
        "desc": "Dirigido por Manlio Scopigno y con Gigi Riva liderando la tabla de goleadores, el Cagliari logró ganar su primer y único Scudetto en la temporada 1969-1970. Fue el primer equipo de la región del Mezzogiorno y de una isla italiana en conseguir el título nacional."
      },
      {
        "ano": "1994",
        "hito": "Campaña en la Copa de la UEFA",
        "desc": "El equipo alcanzó las semifinales de la Copa de la UEFA bajo la conducción de Bruno Giorgi. Durante la trayectoria en dicho torneo, lograron eliminar a la Juventus, hasta que fueron frenados por el eventual ganador de la competición, el Inter de Milán."
      },
      {
        "ano": "2023",
        "hito": "Retorno a Serie A con Claudio Ranieri",
        "desc": "Claudio Ranieri retornó a la dirección técnica del club. Lograron avanzar hasta la final de las eliminatorias de ascenso y derrotaron al Bari en condición de visitante con un gol en el minuto 94 anotado por Leonardo Pavoletti, reincorporándose a la Serie A."
      }
    ]
  },
  'como.json': {
    "descripcion_corta": "Entidad de la región de Lombardía con base frente al Lago de Como, reconocida por varios ascensos seguidos que le permitieron volver a Serie A en 2024 tras 21 años.",
    "historia": [
      {
        "ano": "1907",
        "hito": "Fundación a Orillas del Lago",
        "desc": "El 25 de julio de 1907 se constituyó el Como Foot-Ball Club luego de una reunión en el Bar Taroni. Con respaldo de la sociedad local y fusionando proyectos, el equipo se integró a las primeras competencias piamontesas y lombardas, adoptando posteriormente el característico color azul claro (azzurro)."
      },
      {
        "ano": "1949",
        "hito": "Primer Ascenso a Serie A",
        "desc": "Al término del contexto de posguerra, la escuadra logró estructurar una campaña sólida en Serie B que garantizó su primer ascenso histórico a la máxima categoría del fútbol nacional. Mantuvieron la categoría durante un período de cuatro temporadas consecutivas."
      },
      {
        "ano": "1980",
        "hito": "Era Contemporánea en Primera División",
        "desc": "El Como inició un ciclo de subidas y descensos entre Serie A y Serie B que se extendió durante la década de los 80. Jugadores de renombre internacional utilizaron la infraestructura del Estadio Giuseppe Sinigaglia para afianzar el proyecto lariense."
      },
      {
        "ano": "2002",
        "hito": "Regreso Breve y Crisis Institucional",
        "desc": "El club enlazó saltos numéricos desde divisiones semiprofesionales hasta regresar brevemente a Serie A bajo el mando de Loris Dominissini. Posterior a su rápido descenso de la élite, el club sufrió quiebras financieras múltiples que obligaron a su refundación."
      },
      {
        "ano": "2024",
        "hito": "Reestructuración y Retorno a Serie A",
        "desc": "Comprados por capital indonesio (los hermanos Hartono) y apuntalados operativamente por el exfutbolista Cesc Fàbregas, el Como concretó su ascenso definitivo a la máxima categoría, superando 21 años de ausencia marcados por la inestabilidad en divisiones como la Serie D y la Serie C."
      }
    ]
  },
  'cremonese.json': {
    "descripcion_corta": "Surgida en Cremona como sociedad polideportiva, distinguida formal y visualmente por poseer un uniforme exclusivo de colores gris y rojo (grigiorossi).",
    "historia": [
      {
        "ano": "1903",
        "hito": "Fundación de la Unione Sportiva",
        "desc": "El 24 de marzo de 1903, un grupo de ciudadanos de Cremona formalizó la asociación en la Trattoria La Varesina. Fue ideada como sociedad polideportiva y, tiempo después de 1914, integraron el peculiar patrón cromático de sus camisas, unificando los colores gris y rojo (grigiorosso) definitivos."
      },
      {
        "ano": "1929",
        "hito": "Participación Inaugural en la División de Honor",
        "desc": "El equipo se integró rápidamente a los primeros torneos profesionales y logró formar parte de la primera edición histórica de la Serie A de Italia, unificada bajo un formato de todos contra todos. Aunque el equipo descendió esa primera campaña, la base deportiva continuó existiendo ininterrumpidamente."
      },
      {
        "ano": "1993",
        "hito": "Victoria Internacional en Wembley",
        "desc": "Con el mando técnico del entrenador Gigi Simoni y operando en divisiones intermedios nacionales, la Cremonese ganó el torneo internacional Copa Anglo-Italiana, batiendo 3-1 al Derby County en las instalaciones originales del Estadio de Wembley en Inglaterra."
      },
      {
        "ano": "1995",
        "hito": "Última Época Regular en Serie A del Siglo XX",
        "desc": "Durante la primera mitad de la década del 90, con delanteros como Enrico Chiesa, el club sostuvo su participación en Serie A durante tres temporadas consecutivas, representando su mayor lapso continuado en la categoría antes del fin de siglo."
      },
      {
        "ano": "2022",
        "hito": "Confirmación del Ascenso Final",
        "desc": "Después de 26 años de intermitencias en escalones como la Lega Pro, la escuadra conducida por Fabio Pecchia consiguió el puntaje estadístico necesario en Serie B para garantizar el segundo lugar oficial y retornar directamente a la división élite de Italia."
      }
    ]
  }
};

Object.keys(dataMap).forEach(filename => {
  const filepath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia/' + filename;
  const contentJSON = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  
  contentJSON.datos.descripcion_corta = dataMap[filename].descripcion_corta;
  contentJSON.historia = dataMap[filename].historia;
  
  fs.writeFileSync(filepath, JSON.stringify(contentJSON, null, 2), 'utf8');
  console.log(`Fixed poetry for ${filename}`);
});
