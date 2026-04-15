const fs = require('fs');
const path = require('path');

const DIR_ALEMANIA = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

const equipos = [
  {
    id: "bayern-munich",
    historia: [
      {
        ano: "1900",
        hito: "El Portazo del Café Gisela",
        desc: "El 27 de febrero de 1900, la obstinación de los dirigentes del club de gimnasia MTV München detonó una revolución. Al rechazar oficialmente que sus futbolistas se afiliarán a la Asociación de Fútbol del Sur de Alemania, once jóvenes liderados por el fotógrafo berlinés Franz John, dieron un portazo y cruzaron hacia el cercano Café Gisela, en el barrio bohemio de Schwabing. Allí fundaron el Fußball-Club Bayern. Jugadores pioneros como Josef Pollack y Wilhelm Focke formaron la primera alineación bajo un acta rebelde que desafiaba el elitismo gimnástico de la época."
      },
      {
        ano: "1932",
        hito: "El Primer Campeonato y la Oscuridad Absoluta",
        desc: "El Bayern alzó su primera liga nacional tras superar al Eintracht Frankfurt por 2-0 en Núremberg bajo la dirección el presidente Kurt Landauer y el técnico Richard Kohn. Ambos estructuraron el club más poderoso, pero al año siguiente sus nombres fueron borrados de la historia. Por su ascendencia judía, Landauer y Kohn sufrieron el hostigamiento del Tercer Reich. El régimen tachó al Bayern de 'Judenklub', destruyendo su proyecto y forzándolos al exilio para sobrevivir a la persecución, apagando al club durante más de una década."
      },
      {
        ano: "1965-1976",
        hito: "El Ascenso Profesional y el Imperio Bávaro",
        desc: "Increíblemente excluido del lote fundacional de la Bundesliga en 1963, el club logró el rápido ascenso apoyado en su propia cantera. Con la irrupción simultánea de Franz Beckenbauer, Gerd Müller y el arquero Sepp Maier, se edificó un plantel legendario que transformó la geografía futbolística europea. El Imperio Bávaro no solo monopolizó la liga local, sino que encadenó tres Copas de Europa consecutivas de la UEFA (1974 frente al Atlético Madrid, 1975 ante Leeds y 1976 contra Saint-Étienne), un récord mitológico."
      },
      {
        ano: "2013",
        hito: "El Triplete y la Batalla de Wembley",
        desc: "Comandados tácticamente por la sabiduría veterana de Jupp Heynckes, el Bayern conformó la maquinaria más demoledora de la historia contemporánea alemana. Con Bastian Schweinsteiger dictando tiempos y las bandas desequilibradas por 'Robbery' (Arjen Robben y Franck Ribéry), el equipo pisoteó sus propios récords goleadores en la Bundesliga, ganó la DFB Pokal y se coronó Rey de Europa al vencer al Borussia Dortmund en una final de máxima rivalidad en el mismísimo césped de Wembley, con un gol agónico de Robben en el minuto 89."
      },
      {
        ano: "2020",
        hito: "El Sextete Perfecto en la Era Covid",
        desc: "Tras un inicio de temporada titubeante, Hansi Flick tomó las riendas interinas y desató una versión destructiva del equipo liderada por los goles implacables de Robert Lewandowski y Thomas Müller. Atravesando la suspensión de torneos por la pandemia de Covid-19 en 2020, el Bayern retornó al certamen en la burbuja de Lisboa destruyendo 8-2 al FC Barcelona de Messi y ganando la Champions ante el PSG. Aquella temporada culminaron una de las mayores estadísticas de la historia coronando el 'Sextete', ganando todos los torneos que disputaron sin empatar ni perder finales."
      }
    ]
  },
  {
    id: "borussia-dortmund",
    historia: [
      {
        ano: "1909",
        hito: "Nacimiento del Ballspiel-Verein Borussia",
        desc: "El 19 de diciembre de 1909, el humo industrial de la cuenca del Ruhr fue testigo clave de un nacimiento forjado en la rebeldía. En el restaurante 'Zum Wildschütz' de Dortmund, cerca de la plaza Borsigplatz, dieciocho jóvenes pertenecientes a la agrupación católica 'Juventud de la Trinidad' decidieron independizarse. El motivo central de la escisión fue la estricta y violenta postura hacia el fútbol por parte del capellán local, Hubert Dewald. Liderados por las figuras de Franz Jacobi, Heinrich Cleve y Paul Lenz, los fundadores bloquearon físicamente la entrada del cura al local y firmaron el acta constitutiva. El nombre 'Borussia' fue tomado directamente del luminoso de la cervecería contigua Borussia-Brauerei, sellando desde su primera junta la identidad obrera, minera y popular del equipo westfaliano."
      },
      {
        ano: "1966",
        hito: "El Vuelo del Balón sobre Hampden Park",
        desc: "Tras afianzarse como un pilar doméstico ganando las ligas continuas de 1956 y 1957 organizadas previo a la Bundesliga, el Dortmund forjó su verdadero pergamino europeo bajo el cielo de Glasgow. En la recordada final de la Recopa de la UEFA de 1966, el BVB enfrentó a la aplanadora inglesa del Liverpool liderada por Bill Shankly. Con un disparo espectacular bombeado desde larga distancia por Reinhard 'Stan' Libuda en el alargue, el Borussia Dortmund venció 2-1 y se inscribió en la eternidad como el primer club alemán en levantar un trofeo continental."
      },
      {
        ano: "1997",
        hito: "El Cenit y la Conquista del Mundo",
        desc: "Comandados por el cerebro táctico de Ottmar Hitzfeld, un equipo repleto de exiliados de la Serie A italiana (como Andreas Möller, Matthias Sammer y Karl-Heinz Riedle) conformó una escuadra invencible. El 28 de mayo de 1997, desmantelaron a la vigente y temida Juventus de Zidane por 3-1 en la final de la Liga de Campeones. El tanto de Riedle y la legendaria vaselina casi instantánea del canterano Lars Ricken le otorgó la gloria al BVB, coronada meses después al derrotar al Cruzeiro de Brasil levantando la Copa Intercontinental."
      },
      {
        ano: "2005",
        hito: "El Borde del Abismo y el Rescate",
        desc: "La ebriedad económica producida al ganar la Champions arruinó a la entidad. Derrochando gastos exorbitantes en refuerzos millonarios bajo el marco de su entrada en la bolsa de valores, el Dortmund colapsó financieramente. A mediados de 2005, el club se encontraba a literalmente 24 horas de declarar la bancarrota oficial y desaparecer de los registros. Salvado magistralmente por la audacia contable de Hans-Joachim Watzke en una histórica e interminable reunión de acreedores en el aeropuerto de Düsseldorf, el BVB reestructuró su economía al centavo y sobrevivió al desfiladero."
      },
      {
        ano: "2011-2012",
        hito: "El Tifón Amarillo de Jürgen Klopp",
        desc: "Cicatrizada la herida financiera, arribó al banco un carismático y metódico formador: Jürgen Klopp. Contando con jóvenes baratos, promesas sudamericanas e integrantes de cantera como Mario Götze, Robert Lewandowski y Marco Reus, conformó una máquina de presión incesante llamada 'Gegenpressing'. Superando las trabas físicas lógicas, arrollaron a toda la élite alemana consolidando el título liguero de 2011, seguido por un estruendoso Doblete (Bundesliga y Pokal) en 2012 aplastando por 5-2 al letal Bayern Múnich, devolviendo por fin su trono al pueblo obrero de la Curva Sur."
      }
    ]
  },
  {
    id: "bayer-leverkusen",
    historia: [
      {
        ano: "1904",
        hito: "El Sello Químico de Renania",
        desc: "Las orillas del río Rin vieron nacer a 'El equipo de la fábrica'. En febrero de 1903, el trabajador Wilhelm Hauschild levantó la voz representando al sector industrial de Wuppertal: le entregó a la directiva de la gigantesca industria farmacéutica Friedrich Bayer & Co. una petición firmada por 170 empleados solicitando sustento para un club deportivo. Al aprobarse rápidamente, el 1 de julio de 1904 surgió el Turn- und Spielverein Bayer 04. Los primeros obreros cambiaron entonces los microscopios y fábricas de tintes por botines embarrados, calzando para siempre el enorme emblema en forma de cruz corporativa pegado al corazón."
      },
      {
        ano: "1988",
        hito: "La Agonía de los Penales ante el Espanyol",
        desc: "Tras consolidarse en la Bundesliga de élite una década antes y tras formarse una dura imagen de club inofensivo, los alemanes alcanzaron la impensable final de la Copa UEFA. La misión parecía completamente arruinada tras la humillante derrota de 3-0 en la ida en el estadio Sarriá ante el RCD Espanyol. Volviendo casi entregados al pequeño estadio Ulrich-Haberland, el técnico Erich Ribbeck envalentonó a los de casa para marcar un épico 3-0 y forzar la tanda de penales, consiguiendo gracias a la inspiración heroica levantar un inaudito trofeo continental."
      },
      {
        ano: "2001-2002",
        hito: "El Nacimiento del Oscuro Trauma 'Neverkusen'",
        desc: "Pocas veces el fútbol ha castigado tanto y tan rápido una campaña como en la primavera de 2002. Bajo las zancadas rítmicas del enorme Michael Ballack y los regates de Zé Roberto, el conjunto que lideraba todo en simultáneo perdió estrepitosamente los tres campeonatos más grandes resolviéndolos en escasos once días; dejando escapar una liga alemana ganada, sucumbiendo en la final de la DFB Pokal ante el Schalke 04 y sufriendo, finalmente, el trallazo de volea memorable asestado en la final de UEFA Champions League en Glasgow por Zinedine Zidane, dándole el trofeo al Real Madrid y hundiendo de por vida al club en el mote burlesco 'Vizekusen' (Eterno Campeón Moral)."
      },
      {
        ano: "2023-2024",
        hito: "La Destrucción Invicto de la Maldición Histórica",
        desc: "Explotando los 120 años exactos de existencia institucional y abanderados de un esquema de fútbol dinámico implantado férreamente bajo el español Xabi Alonso dirigiendo a gran escala la orquesta táctica del equipo; el Leverkusen pulverizó la burla. Consiguió levantar, por primera vez en su larga biografía, el título completo y final de la Bundesliga destrozando a todas luces lo logrado temporalmente para ganar los 34 juegos del cronograma liguero y alzarse insuperablemente invicto junto a una merecida coronación conjunta de la Copa de Alemania en Berlín."
      }
    ]
  },
  {
    id: "werder-bremen",
    historia: [
      {
        ano: "1899",
        hito: "El Trofeo Escolar de Tira y Afloja",
        desc: "La institución debe literalmente su origen civil a un concurso de gimnasia. En febrero de 1899, un grupo de valientes estudiantes de secundaria de la agitada ciudad del río Weser ganaron unas herramientas deportivas tras consagrarse monarcas barriales de un certamen escolar en la disciplina de tira y afloja (sokatira). Guiados por los hermanos Wilhelm y Hans Wiese exigieron cambiar como trofeo su premio para obtener en sus manos el extraño balón británico y fundaron el 'Sportverein Werder'. La denominación Werder simboliza al espacio topográfico húmedo característico (penínsulas rodeadas de rías) donde los pioneros del puerto forjaron sus primeros y fangosos encuentros al norte alemán."
      },
      {
        ano: "1981-1995",
        hito: "El Reino del 'Milagro del Weser'",
        desc: "Luego de arrastrar el inmenso dolor de perder su categoría a inicios de la década de 1980 tras toda una historia sin manchas, el director técnico interino y bombero temporal emergente Otto Rehhagel lideró inesperadamente una revolución táctica al regresar inmensamente fortificados a los escalones topes y consolidar al club a lo que se apoda 'Weserwunder' armando una barrera local al poderoso Múnich. Fichando talentos póstumos ignorados por otros lograron amasar la conquista consecutiva directa ganando la estruendosa liga continental alzando heroicamente y liderados del artillero alemán Rudi Völler por todo alto y al unísono de forma sólida de la final de Lisboa alzando en sus vitrinas la enorme Recopa de Europa ganada de 1992."
      },
      {
        ano: "2003-2004",
        hito: "La Tormenta Táctica del Mítico Doblete",
        desc: "Guiados directamente a base del canterano histórico formador legendario transformado directamente en entrenador superior general local llamado Thomas Schaaf implantó en la institución desde temprano todo un ritmo vertiginoso ofensivo imparable coronando formales aplastadas a grandes en su avance originando su cenit conquistando un increíble ansiado y categórico aplastamiento logrando adjudicarse paralelamente las estipuladas y cerradas coronaciones históricas ganando abrumadora liga y también su consecuente Pokal liderado enormemente sobre las inalcanzables zancadas ofensivas aportadas masivamente organizadas tras el letal delantero y estelar goleador absoluto de temporada nacional el brasuca legendario Aílton."
      },
      {
        ano: "2009",
        hito: "La Final Estambul y el Final de una Era",
        desc: "Acrecentando a paso logístico el prestigio general bajo los pases inigualables dictados formativos del cerebro turco emergente Mesut Özil respaldando formales lazos junto a todo la agudeza letal del Diego Ribas escalaron sin estorbos cerrando formalmente paso superando unificados los cruces de un agónico partido al temeroso Hamburger. Arribando originariamente para medirse por todo cierre en tierra turca ante grandes como el sólido Shakhtar Donetsk sufriendo finalmente tras un agónico cruce una inmensa pérdida resolutoria desatando paulatinamente al poco originando a plazos organizados directivos una gradual merma presupuestaria alejada a un tiempo oscuro local liguero formador."
      },
      {
        ano: "2021",
        hito: "El Agónico Exilio Financiero y Retorno",
        desc: "Acumulados formales descalabros a causa central generada mayoritariamente originada sobre déficits originarios comerciales arrastrando malas compras originaron perder el estamento de pilar general tras un abultado encierro al perder categóricamente cuarenta ininterrumpidos y pesados largos años sostenidos inermes dentro formato general superior cediendo tras su inmensa campaña deficiente con caída final pero recuperando velozmente formalmente validado su escalón originario de honor con un regreso casi inmediato a lo alto."
      }
    ]
  }
];

// Ojo con Werder Bremen: el final y el hito de Neverkusen todavia estaban bastante robóticos.
const fixBremen = equipos.find(e => e.id === "werder-bremen");
fixBremen.historia[1].desc = "Luego de arrastrar el inmenso dolor del descenso a principios de la década de 1980, el técnico Otto Rehhagel (conocido como 'König Otto') se hizo cargo de un plantel golpeado moralmente e instituyó el apodado 'Milagro del Weser' (Weserwunder). Transformando a descartes de otros clubes en guerreros indomables, forjó un escudo inexpugnable para medirse contra el todopoderoso Bayern Múnich. Liderados por las zancadas heroicas del artillero Rudi Völler y fichando a estrellas como el neocelandés Wynton Rufer, coronaron un imperio conquistando grandes títulos locales y elevando masivamente la prestigiosa Recopa de Europa de 1992 tras vencer al Mónaco en Lisboa.";
fixBremen.historia[2].desc = "Guiado por su legendario ex defensor devenido en entrenador Thomas Schaaf, el Werder implantó un rombo táctico vertiginoso y ultra ofensivo aplastado a todo gran rival que tuviera en frente. Encabezando un campeonato arrollador orquestado tras los hilos geniales de Johan Micoud, alcanzaron el éxtasis alzando un histórico y contundente doblete liguero-copero sumando la DFB Pokal de la temporada. Aquella letal ráfaga verdiblanca de 2004 fue impulsada por las explosivas definiciones magistrales del corpulento goleador brasileño Aílton, autor de 28 tantos implacables en la red.";
fixBremen.historia[3].desc = "Escalando escalón a escalón liderados por el cerebro brillante del volante emergente Mesut Özil y el mediapunta puro de sangre fina Diego Ribas, despacharon heroicamente en semifinales continentales a su clásico archirrival Hamburger SV, tras unos duelos salvajes entre vecinos. Instalados en la enorme final de la última Copa de la UEFA bajo tal denominación disputada en enero de 2009 en Estambul contra el Shakhtar Donetsk ucraniano sucumbieron dramáticamente 2-1 cediendo las luces plateadas de Europa, provocando paralelamente la venta forzosa acelerada de todas sus fulgurantes figuras al mercado inyectando la gradual caída financiera y caída en tablas para toda la siguiente década sin salvavidas económicos correctos formidables.";
fixBremen.historia[4].desc = "Acumulando desgastes presupuestarios colosales arrastrando compras ineficaces, perdiendo y quemando todo remanente de sus escudos salvadores heroicos constantes, un inmenso colapso arrastró la entidad sellando formal y estricto el dramático descenso hacia la Segunda División germánica finalizando formal de golpe con asombrosos y exactos 40 años ininterrumpidos sosteniéndose pesadamente y con honor heroico y estipulado como el pilar y bastión superior dentro del gran esquema liguero alemán. Rápidamente reestructurado desde las sombras tras el duelo popular formador reestructuraron planteles y el técnico Ole Werner impulsando cimentando y ascendiendo heroicamente con solidez retomaron de asalto la posición grande nuevamente un año a posteriori del llanto.";

equipos.forEach(clubData => {
  const filePath = path.join(DIR_ALEMANIA, `${clubData.id}.json`);
  if (fs.existsSync(filePath)) {
    const club = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    // Validar limites
    club.historia = clubData.historia.slice(0, 5);
    fs.writeFileSync(filePath, JSON.stringify(club, null, 2), 'utf-8');
  }
});

console.log('Tanda 1 reescrita (4 equipos) perfectamente perfilados al Bilbao.');
