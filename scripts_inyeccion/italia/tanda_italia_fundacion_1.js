const fs = require('fs');

const dataMap = {
  'atalanta.json': {
    "ano": "1907",
    "hito": "Fundación del Atalanta Bergamasca Calcio",
    "desc": "A principios del siglo XX, la ciudad de Bérgamo experimentaba una clara división deportiva dominada por las vetustas asociaciones de gimnasia de la Ciudad Alta. Buscando romper con ese rigor conservador, el 17 de octubre de 1907, cinco jóvenes estudiantes del Liceo Clásico Paolo Sarpi (Eugenio Urio, Giulio y Ferruccio Amati, Alessandro Forlini y Giovanni Roberti) decidieron fundar un club íntegramente dedicado al novedoso deporte del foot-ball. Rechazando alianzas con la aristocracia local, bautizaron a la institución en honor a Atalanta, la heroína cazadora y atleta inalcanzable de la mitología griega. Tras una prolongada rivalidad regional, en 1920 absorbieron definitivamente a la sociedad Bergamasca di Ginnastica e Scherma, forjando el ADN moderno del club y adoptando para siempre la característica indumentaria de rayas verticales negras y azules."
  },
  'bologna.json': {
    "ano": "1909",
    "hito": "Fundación en la Cervecería Ronzani",
    "desc": "El arraigo del fútbol en la región de Emilia-Romaña nació al calor de la inmigración europea y las discusiones de bar. El 3 de octubre de 1909, en las mesas de la popular Cervecería Ronzani de la Vía Spaderie, el comerciante bohemio-austríaco Emilio Arnstein se reunió con estudiantes locales y expatriados para dar vida al Bologna Football Club. Arnstein ya había fundado clubes en Praga, pero fue el respaldo del estudiante boloñés Carlo Sandoni y del dentista suizo Louis Rauch (quien se erigió como el primer presidente) lo que cimentó el proyecto. Financiados por el abogado Guido Della Valle y vistiendo primitivas camisas rojas y azules heredadas del colegio suizo Schönberg de Rossbach, el equipo saltó a los Prados de Caprara para forjar una de las instituciones más tradicionales y dominantes de la Italia prebélica."
  },
  'cagliari.json': {
    "ano": "1920",
    "hito": "Nacimiento Deportivo en Cerdeña",
    "desc": "Aislada históricamente del bullicio industrial y del desarrollo futbolístico que arrasaba en el norte de la península, la isla de Cerdeña necesitaba un estandarte deportivo propio. El 30 de mayo de 1920, impulsados por el cirujano local Gaetano Fichera, un grupo de profesionales y estudiantes sardos convocó a una asamblea en las butacas del Cinema Eden para fundar oficialmente el Cagliari Football Club. En sus primeros enfrentamientos informales disputados sobre el polvoriento Stallaggio Meloni, la escuadra portó improvisadas camisas blancas. Poco después, adoptaron inquebrantablemente el azul oscuro y el rojo carmesí presentes en el escudo de armas comunal de la ciudad de Cagliari, forjando una identidad que uniría el sentimiento regional de toda la isla en las décadas venideras."
  },
  'como.json': {
    "ano": "1907",
    "hito": "Las Bases Larienses en el Bar Taroni",
    "desc": "El encanto estético del Lago de Como, centro turístico y aristocrático en Lombardía, no fue ajeno a la fiebre del 'foot-ball'. El 25 de julio de 1907, tras la organización de un comité de ciudadanos locales y entusiastas deportivos entre los que destacaban Mario Bazzi, el primer presidente, y el comerciante Carlo Colombo, se fundó formalmente el Como Foot-Ball Club durante una reunión celebrada en el céntrico Bar Taroni. Con el respaldo de las autoridades comunales y disputando sus primeros encuentros en prados prestados, el equipo integró rápidamente los campeonatos regionales. Su identidad quedó sellada de forma indisoluble al decidir adoptar de manera unánime el color azul profundo (Azzurro), representando visualmente y para toda la eternidad las aguas de su emblemático lago."
  },
  'cremonese.json': {
    "ano": "1903",
    "hito": "Los Orígenes Grigiorossi en La Varesina",
    "desc": "El 24 de marzo de 1903, en respuesta a la efervescencia deportiva que cruzaba la región de Lombardía, un grupo de comerciantes y aficionados encabezado por el sastre Emilio Torrenti y el farmacéutico Zini organizó una asamblea fundacional en la humilde Trattoria La Varesina, constituyendo la Unione Sportiva Cremonese. Nacida originalmente como una sociedad polideportiva modesta, la división de fútbol vistió en sus primeros años rudimentarias camisas blancas con cuellos lila. Sin embargo, en 1914, los directivos sellaron un acuerdo textil que cambiaría su historia visual: adoptaron de forma permanente la combinación de bastones grises ceniza y rayas rojas sangre, un patrón cromático único e inédito en el Calcio que apellidó al club como 'I Grigiorossi' de por vida."
  }
};

Object.keys(dataMap).forEach(filename => {
  const filepath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia/' + filename;
  const contentJSON = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  
  if(contentJSON.historia && contentJSON.historia.length > 0) {
    contentJSON.historia[0] = {
      ano: dataMap[filename].ano,
      hito: dataMap[filename].hito,
      desc: dataMap[filename].desc
    };
  }
  
  fs.writeFileSync(filepath, JSON.stringify(contentJSON, null, 2), 'utf8');
  console.log(`Fundacion Bilbao-Level procesada para ${filename}`);
});
