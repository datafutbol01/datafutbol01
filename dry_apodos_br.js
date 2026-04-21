const fs = require('fs');
const path = require('path');

const ultraDryApodos = {
  "flamengo": [
    {
      "apodo": "Urubu",
      "origen": "A finales de la década de 1960, las hinchadas rivales aplicaban el término 'urubu' (buitre) de forma despectiva para referirse a la afición del Flamengo, asociada históricamente a clases populares. Esta connotación cambió en un clásico de 1969 contra Botafogo, cuando aficionados introdujeron un cuervo vivo al Estadio Maracanã y lo exhibieron en las gradas. Tras la victoria en ese partido, el club y su parcialidad adoptaron oficialmente al ave como su mascota y símbolo de identidad."
    },
    {
      "apodo": "O Mais Querido do Brasil",
      "origen": "Se formalizó en 1927 a partir de un concurso realizado por el 'Jornal do Brasil' y la marca Salutaris. A través del envío de correspondencia, los lectores debían votar por su equipo preferido. Flamengo obtuvo la mayor cantidad de sufragios en todo el país, superando a Vasco da Gama en el conteo final, y recibió el 'Trofeo Salutaris', consolidando estadísticamente el título de la afición más numerosa."
    }
  ],
  "vasco-da-gama": [
    {
      "apodo": "Expresso da Vitória",
      "origen": "Surge en la prensa radial a finales de la década de 1940 para calificar al equipo que dominó el campeonato carioca entre 1945 y 1952. Tras obtener el Campeonato Sudamericano de Campeones de 1948 en Chile de manera invicta y registrar un alto promedio de goles por partido, los locutores compararon el rendimiento del plantel con la fuerza y velocidad de un tren expreso de la época."
    },
    {
      "apodo": "O Gigante da Colina",
      "origen": "Hace referencia directa a la inauguración del estadio de São Januário en 1927. El recinto, financiado íntegramente mediante la recolección de fondos de los propios socios del club, fue construido sobre una elevación natural de tierra en la zona norte de Río de Janeiro. Al ser el estadio más grande de Sudamérica en su momento, los diarios lo bautizaron como el 'gigante' emplazado en la colina."
    }
  ],
  "botafogo": [
    {
      "apodo": "O Glorioso",
      "origen": "Data de los primeros torneos profesionales de Río de Janeiro, específicamente de las campañas correspondientes a los campeonatos cariocas de 1907 y 1910. Botafogo obtuvo este último título de forma invicta y liderando la tabla de posiciones con un diferencial de goles muy por encima de la media, lo que motivó a la prensa a comenzar a referirse a la institución bajo el apelativo de 'El Glorioso'."
    },
    {
      "apodo": "Estrela Solitária",
      "origen": "Proviene de la fusión administrativa y deportiva en 1942 entre el Club de Regatas Botafogo y el Botafogo Football Club. El escudo de la división de remo consistía históricamente en una estrella blanca sobre fondo negro, elegida porque los remeros guiaban sus entrenamientos matutinos guiándose por la estrella d'Alva (planeta Venus). Tras la unión, esa estrella se convirtió en el emblema central único del nuevo escudo."
    }
  ],
  "fluminense": [
    {
      "apodo": "Pó de Arroz",
      "origen": "Se originó el 13 de mayo de 1914. Carlos Alberto, jugador que se había transferido desde el America FC, utilizaba un polvo astringente para tratar una dolencia en la piel antes de los partidos. La hinchada visitante descubrió esto y comenzó a gritarle 'pó de arroz' de forma despectiva. Con el tiempo, la afición de Fluminense invirtió el agravio y lo incorporó como tradición, arrojando talco industrial en las tribunas al ingresar el equipo."
    }
  ],
  "corinthians": [
    {
      "apodo": "O Timão",
      "origen": "Apareció impreso en el diario 'A Gazeta Esportiva' en 1966. La directiva buscaba terminar con un largo período sin títulos mediante la contratación de figuras de la selección brasileña como Garrincha. Para graficar la magnitud de la inversión y la alta expectativa generada por la nueva plantilla, el diario tituló en su portada 'O Corinthians faz um Timão', término que fue adoptado de forma permanente por la afición."
    },
    {
      "apodo": "O Clube do Povo",
      "origen": "Surge de su propio origen fundacional en septiembre de 1910. A diferencia de las entidades creadas por las élites locales y británicas, Corinthians fue fundado por un grupo de cinco operarios bajo un farol de luz en el barrio de Bom Retiro. Esto posicionó al club inmediatamente como el representante exclusivo de la clase obrera y trabajadora de la ciudad de São Paulo frente a los clubes aristocráticos."
    }
  ],
  "sao-paulo": [
    {
      "apodo": "O Soberano",
      "origen": "Fue popularizado por la prensa y el área de marketing institucional para enmarcar los logros obtenidos entre 2005 y 2008. En ese trienio, São Paulo Fútbol Club conquistó la Copa Libertadores, la Copa Intercontinental y se convirtió en el primer equipo en lograr un tricampeonato consecutivo del Campeonato Brasileño bajo el formato moderno, ejerciendo un dominio estadístico sobre sus rivales de liga."
    },
    {
      "apodo": "Clube da Fé",
      "origen": "Nació durante la crisis institucional de 1935, cuando disputas políticas provocaron la caída temporal del club. Al reactivar la institución partiendo desde cero, sin patrimonio físico ni jugadores, los fundadores debieron sostener el proyecto mediante aportes económicos propios ante un marco adverso, lo que llevó a los periodistas deportivos a resumir que la entidad había resurgido sustentada únicamente por la 'fe'."
    }
  ],
  "palmeiras": [
    {
      "apodo": "O Porco",
      "origen": "Sus raíces datan de un conflicto de 1969, cuando Corinthians requirió fichar a dos jugadores de emergencia tras un accidente vial de sus futbolistas y la directiva de Palmeiras rechazó la solicitud. En respuesta, directivos rivales etiquetaron a Palmeiras de 'cerdos'. En 1986, el director de marketing palmeirense João Roberto Gobbato promovió la asimilación del mote, logrando que la afición adoptara un cerdo de mascota para anular publicamente el insulto."
    },
    {
      "apodo": "A Academia",
      "origen": "Acuñado en las décadas de 1960 y 1970 por los analistas deportivos. Refería específicamente al estilo de juego ordenado y de pases cortos mostrado por el mediocampo de Palmeiras (liderado por Ademir da Guia) que logró disputarle títulos al Santos de Pelé. Los periodistas definían que el plantel impartía lecciones de disciplina táctica y técnica comparable a una academia de formación superior."
    }
  ],
  "santos": [
    {
      "apodo": "Peixe",
      "origen": "Surgió en la década de 1920 durante los encuentros frente a los clubes de la capital paulista. Los hinchas contrarios utilizaban términos vinculados a la pesca como insulto clasista para menospreciar a los seguidores del Santos por residir en la zona portuaria del litoral. La decisión del propio club fue abrazar la identidad de su ciudad costera, incorporando la palabra y la figura del pez como símbolos oficiales de la entidad."
    },
    {
      "apodo": "Meninos da Vila",
      "origen": "Establecido por el periodista Chico Formiga a fines de los años setenta. Frente a planteles consolidados y físicos, Santos estructuró su ataque apoyándose en canteranos adolescentes, destacando el atacante Juary. 'Vila' refiere al estadio Vila Belmiro, y el apodo se institucionalizó para definir a las sucesivas generaciones de atacantes juveniles destacados que el club forma históricamente y proyecta al equipo profesional."
    }
  ],
  "atletico-mineiro": [
    {
      "apodo": "Galo",
      "origen": "Creado por el dibujante Fernando Pierucetti en 1940 para el periódico Folha de Minas. Ante el pedido de ilustrar una mascota para el club, optó por un gallo carijó debido a las similitudes estilísticas que detectó con el plantel: observó que los jugadores de Atlético no desistían en los partidos hasta escuchar el silbato final, comparando su resistencia con las aves de riña que luchaban de forma frontal."
    }
  ],
  "cruzeiro": [
    {
      "apodo": "A Raposa",
      "origen": "Atribuido al ilustrador Fernando Pierucetti en la década de 1940. El caricaturista documentó la destreza del entonces presidente del club, Mário Grosso, para efectuar contrataciones negociando de forma silenciosa para primerear a su principal competidor de ciudad. Esta agilidad directiva lo llevó a representar visualmente al elenco como a un zorro, remitiendo a su destreza en lugar de basarse en fuerza bruta."
    },
    {
      "apodo": "La Bestia Negra",
      "origen": "Apodo originado estrictamente en la prensa deportiva sudamericana de habla hispana, puntualmente durante de la década de 1990. Debido a la alta frecuencia con la que Cruzeiro derrotaba y eliminaba tanto a equipos argentinos, chilenos como uruguayos en instancias clave jugando como local, los medios deportivos del exterior etiquetaron al club bajo dicha frase."
    }
  ],
  "gremio": [
    {
      "apodo": "Imortal",
      "origen": "Deriva del lema escrito en su himno oficial. Tomó carácter definitorio tras repetidas remontadas en su historia. Esto encontró su punto máximo moderno en el episodio de 2005 conocido como 'Batalha dos Aflitos', en el cual Grêmio logró el ascenso de categoría jugando los minutos finales con solo siete jugadores en el campo al atajar un tiro penal, sentenciando literariamente su capacidad de supervivencia ante la adversidad."
    }
  ],
  "internacional": [
    {
      "apodo": "Colorado",
      "origen": "Aprobado orgánicamente durante los primeros años del club. En contraposición explícita a la clásica vestimenta listada predominante entonces, los fundadores optaron deliberadamente por imponer una camiseta completamente roja y lisa en su uniforme titular, utilizando y afianzando este matiz visual primario como principal nombre de reconocimiento institucional y pasional."
    },
    {
      "apodo": "O Rolo Compressor",
      "origen": "Acrisolado por la crónica deportiva de Rio Grande do Sul a mediados del decenio de 1940. Representaba a la delantera liderada por Carlitos y Tesourinha, la cual encadenó años de conquistas del campeonato gaúcho a de base de resultados abultados. La superioridad expresada partido tras partido provocó que los editores refirieran al conjunto como una compactadora nivelando asfalto, aplastando todo escollo táctico opositor."
    }
  ],
  "athletico-paranaense": [
    {
      "apodo": "O Furacão",
      "origen": "Se registró a lo largo del transcurso del campeonato estadual de Curitiba disputado en 1949. El conjunto titular firmó una larga serie de triunfos paralelos con un diferencial goleador pronunciado que neutralizó anticipadamente a todos sus rivales seccionales, motivando a que los titulares de la prensa grafica local compararan su tránsito destructivo con el embate climático de un huracán."
    }
  ],
  "coritiba": [
    {
      "apodo": "Coxa-Branca",
      "origen": "Surge de una denigración verbal emitida durante el clásico local de octubre de 1941. Ante la marcada ascendencia germana del equipo albiverde y enmarcado en las tensiones por la Segunda Guerra, Jofre Cabral (presidente del rival Athletico Paranaense) profirió insultos racistas señalando despectivamente las piernas blancas de sus rivales. Coritiba no eludió la terminología y decidió asimilar permanentemente el adjetivo como propia identificación de la grada."
    }
  ],
  "bahia": [
    {
      "apodo": "Esquadrão de Aço",
      "origen": "Aplicado habitualmente por el periodismo y los cronistas hacia la entidad bahiana en la década de 1930 para reportar su hegemonía de resultados a lo largo del certamen estadual. Basado en el registro imbatido de sus bloques de retaguardia, el relato equiparó públicamente su solidez de marcaje lograda al desempeño incuestionable del blindaje presente usualmente en las formaciones marítimas forjadas íntegramente en acero."
    }
  ],
  "vitoria": [
    {
      "apodo": "O Leão da Barra",
      "origen": "Bautizado al integrar su ubicación domiciliaria originaria con el perfil institucional requerido. La primera directiva anclaba gran parte de sus estructuras urbanas sobre la geografía circundante al tradicional barrio de Barra. Asimismo, para competir frente al resto desde el emblema visual se adoptó de base al propio león salvaje a fin de transmitir en el certamen oficial valores formales atados al liderazgo selvático y valentía estructural."
    }
  ],
  "chapecoense": [
    {
      "apodo": "O Verdão do Oeste",
      "origen": "Una asgnación regional que responde a los componentes cromáticos y geográficos plenos. Se sustenta mediante la firme adhesión de la indumentaria al color esmeralda y la localización de la sede del club, que consolidó paulatinamente su monopolio deportivo a escala local gobernando los torneos del interior oeste periférico perteneciente estrictamente al plano legal y geográfico perteneciente a Santa Catarina."
    }
  ],
  "mirassol": [
    {
      "apodo": "Leão da Alta Araraquarense",
      "origen": "Es un complemento impuesto desde la identidad radial y medios de la zona originaria para exaltar a su mascota basándose en la circunscripción territorial inamovible de sus orígenes, combinando al león heráldico y visual característico elegido en el seno del propio club directivo en sincronía con la porción macro regional cartográfica a la que está ligada institucionalmente la entidad, reconocida comúnmente en el Estado paulista como Alta Araraquarense."
    }
  ],
  "remo": [
    {
      "apodo": "O Leão Azul",
      "origen": "Surgió de la síntesis de dos de sus bastiones principales formativos. Representa por un lado la figura de un león, seleccionada por los fundadores con objetivo de evocar formalmente fortaleza irrenunciable amazónica para contrarrestar retos estamentales. Seguido inamoviblemente del uso estricto liso originario del matiz añil en cada equipación titular que lo caracterizó invariablemente bajo reconocimiento federado y popular."
    }
  ],
  "red-bull-bragantino": [
    {
      "apodo": "Massa Bruta",
      "origen": "Surge a nivel orgánico de sus partidarios a mitad del siglo XX y cimentado como identidad principal ineludible. Remataba fehacientemente que la sede deportiva descansaba amparada sobre una matriz dependiente conformada por ciudadanos orientados a la producción rural sin procesar de Bragança Paulista (la propia masa bruta). Los cronistas refrendaron y aplicaron este concepto de trabajo rústico directo al empuje rústico evidenciado en los esquemas tácticos de juego de la entidad."
    }
  ]
};

async function dryApodos() {
  for (const [clubId, dataObj] of Object.entries(ultraDryApodos)) {
    const filePath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'brasil', `${clubId}.json`);
    if (fs.existsSync(filePath)) {
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      fileData.origen_apodos = dataObj;
      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
    }
  }
}

dryApodos()
  .then(() => console.log('Apodos secos inyectados.'))
  .catch(err => console.error(err));
