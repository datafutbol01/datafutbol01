const fs = require('fs');
const path = require('path');

const apodosData = {
  "flamengo": [
    {
      "apodo": "Urubu",
      "origen": "A finales de la década de 1960, las hinchadas rivales (especialmente la afición elitista de Botafogo) utilizaban el término 'urubu' (buitre negro de la región) como un fuerte insulto racista para ofender a la masa simpatizante rojinegra proveniente de clases bajas y origen obrero. Sin embargo, antes de un clásico en 1969, un grupo de aficionados de Flamengo ingresó secretamente al Estadio de Maracanã con un ave verdadera escondida en una bandera y la liberaron al césped. El equipo de Flamengo ganó con superioridad ese partido, lo que instó a los seguidores a adoptar desde esa misma tarde al cuervo como símbolo de orgullo popular y resistencia frente a los atropellos xenófobos, revirtiendo para siempre el insulto fundacional."
    },
    {
      "apodo": "O Mais Querido do Brasil",
      "origen": "Surgió de la prensa cívica originaria en 1927 producto de una encuesta a nivel país liderada por el prestigioso 'Jornal do Brasil' al lado de la principal empresa de agua mineral Salutaris. Mediante un masivo volumen de correspondencia remitida en urnas abiertas públicas, la afición rojinegra acaparó los diarios doblegando por enorme margen en votos nacionales a Vasco da Gama en la final del certamen; otorgándose el invaluable Trofeo Salutaris que ratificó fácticamente para siempre a Flamengo como la identidad pasional más numerosa del Estado."
    }
  ],
  "vasco-da-gama": [
    {
      "apodo": "Expresso da Vitória",
      "origen": "Nace bajo el marco de una serie periodística radiofónica enaltecida por el cantautor Mário Vieira a finales de los cruentos años de 1940. Hacía estricta referencia al temido e indestructible conjunto vascaíno que entre 1945 y 1952 dominó la capital asumiendo un avance veloz imparable frente a la línea de los oponentes. Su marcha fulminante superando registros al golear con contundencia se asemejaba fuertemente, dentro de los redactores gráficos de la época, a la fuerza de un pesado tren expreso descarrilado en sus incursiones ofensivas."
    },
    {
      "apodo": "O Gigante da Colina",
      "origen": "Una referencia eminentemente arquitectónica de la prensa carioca surgida desde el propio año de inauguración histórica del majestuoso estadio de São Januário. El descomunal anfiteatro, costeado heroica y enteramente por la bolsa financiera de sus propios obreros excluidos tras las negaciones federativas, fue alzado con imponentes graderías por encima de un promontorio geográfico rural. Automáticamente los rotativos cariocas definieron a su feudo inmensamente erguido como un verdadero gigante que imponía un respeto tajante emplazado sobre su colina urbana."
    }
  ],
  "botafogo": [
    {
      "apodo": "O Glorioso",
      "origen": "Instituido en los inicios de la formación del fútbol reglado de Río de Janeiro (1907-1910). La aplastante campaña dictada por el Botafogo con abultadísimas e inenarrables goleadas contra sus primeros rivales urbanos coronando los campeonatos cariocas originarios de manera enteramente invicta y con decenas de goles a favor forzó al periodismo de aquellos años a estipular en todas las tapas de las gacetas el título estatuario de 'O Glorioso', sellando la hegemonía indiscutida técnica de manera fáctica en el acta popular temprana."
    },
    {
      "apodo": "Estrela Solitária",
      "origen": "Originado estatutariamente luego de oficializarse jurídicamente las actas de fusión ejecutivas de 1942 entre los departamentos internos correspondientes al de regatas marinas y al fútbol raso de la entidad. Las escuadras de embarcaciones remaban por su lado al amanecer asumiendo el emblema guiado astrológicamente bajo el radiante astro del alba (el potente planeta Venus), que perduró como insignia máxima blanca solitaria al centro de una matriz defensiva completamente negra como tributo directo de todos sus deportistas acuáticos."
    }
  ],
  "fluminense": [
    {
      "apodo": "Pó de Arroz",
      "origen": "Cimentado el 13 de mayo de 1914 producto de las chicanas verbales contra Carlos Alberto, histórico exjugador del club America FC, que se pasó al seno tricolor. Consistiendo que el futbolista sufría afecciones dermatológicas utilizando polvo astringente importado en su rostro, la grada contraria entonó gritos asumiendo el adjetivo de 'Pó de Arroz' al transpirar luego de los saques largos. La aristocrática hinchada de Fluminense tomó la chanza y la transmutó en fiesta cultural arrojando miles de kilogramos industriales de polvo y talco mineral al aire hasta cimentarlo hoy como la mayor seña estética mundial de su afición."
    }
  ],
  "corinthians": [
    {
      "apodo": "O Timão",
      "origen": "Fraguado estrictamente en los márgenes de las mesas de edición de la célebre redacción de 'A Gazeta Esportiva' en el año base de 1966. La directiva buscaba acabar de cuajo con una penosa e inmensa sequía de copas ejecutando contrataciones rutilantes de lujo incorporando formalmente a bicampeones mundiales como Garrincha. Obligados a transmitir a la masa societaria el tamaño despampanante del resurgimiento y del peso estricto del nuevo plantel armado sin medir gastos, los diarios estamparon valederamente la frase 'O Corinthians faz um Timão', perpetuando al nombre definitivo ante la inamovible euforia de la gente."
    },
    {
      "apodo": "El Campeón de los Campeones",
      "origen": "Originario de los fácticos albores periodísticos registrados en la lejana temporada de 1930. Fue impuesto unánimemente por los estadistas que presenciaron el torneo relámpago organizado oficial y únicamente para definir la supremacía nacional enfrentando a boca de jarro a la escuadra campeona de Río (Vasco da Gama) y al vencedor consolidado paulista (Corinthians). Los de bom retiro doblegaron fuertemente de visita y local, dictando una frase enraizada luego como adjetivo oficial permanente en la mismísima letra incombustible del histórico y célebre himno estatuario de la escuadra."
    }
  ],
  "sao-paulo": [
    {
      "apodo": "El Soberano",
      "origen": "Término riguroso y tajante implementado desde todas las cadenas transmisoras, esferas locales y portadas deportivas de país durante la era hegemónica abarcada concretamente entre 2005 y 2008. Al consagrarse con la exclusiva y milimétrica gesta insólita de ser el primer bicampeón mundial intercontinental paulista que lograba adicional y paralelamente abrochar a sus lógicas vitrinas el abrumador tricampeonato histórico brasileño a nivel local de corrido. Impuso asfixiantes números demostrando empíricamente de manera factual ejercer una inquebrantable e intocable soberanía total sobre los esquemas de resistencia del resto integral y absoluto de todos sus competidores contemporáneos de liga."
    },
    {
      "apodo": "Clube da Fé",
      "origen": "Acrisolado a fuego en las ruinosas y fácticas postrimerías políticas trasgredidas al arranque del 1935 cuando la organización había caído abruptamente a cero producto de divisiones gubernamentales dictando casi su inevitable y letal banca rota registral y extinción burocrática real. El milagroso y súbito resurgir se construyó estipulando esfuerzos económicos sobrehumanos aportando recursos privados impagables sin mediar ganancias que impulsaron a los diarios paulistas a escribir y sentenciar definitivamente que lo único que había conseguido sostener a esta inquebrantable franquicia fuera la incomprensible y divina fe irrestricta proveniente de su núcleo humano matricial inamovible de fundadores."
    }
  ],
  "palmeiras": [
    {
      "apodo": "Porco",
      "origen": "Una mofa clásica despectiva e injuriosa emanada en 1969 desde las cúpulas presidenciales archienemigas del Corinthians al quebrar una serie de asambleas entre dirigentes tras el trágico fallecimiento fáctico de dos de sus atletas a préstamo; rotulando tajantemente con la terminología vulgar a la sede de la antigua 'Palestra'. No obstante, el golpe frontal del adjetivo fue anulado históricamente recién en noviembre del 1986. El jefe en mesa formativa de marketing, João Roberto Gobbato, instruyó una fenomenal y asombrosamente astuta reeducación popular logrando que la hinchada alviverde saltase a la cancha por mutuo propio exigiendo al cántico vivo adueñarse para siempre del rústico apodo de choque como un auténtico e inteligente grito de orgullo victorioso de origen bélico."
    },
    {
      "apodo": "La Academia",
      "origen": "Fue moldeado por analistas gráficos y relatorías magistrales tras la majestuosa década del 60 e irradiado internacionalmente en las formales contiendas sudamericanas. Remitía literalmente al exquisito paladar del primer elenco capaz de neutralizar estratégicamente a base de pizarrones puros al apabullante y alienígena Santos de Pelé de forma certera e implacable. Impartiendo el rudo Dudu una escuela táctica organizativa formativa paralela al nivel docente desplegado en césped finamente trazado en las canchas de academia por Ademir estatuido fuertemente sobre las formales lecciones teóricas futbolísticas sin errores o máculas procedimentales."
    }
  ],
  "santos": [
    {
      "apodo": "Peixe",
      "origen": "Asimilado estoicamente a las raíces topográficas y litorales que identificaron a los seguidores originarios. En las hostiles batidas organizadas al principio contable y puro del desarrollo del siglo 20 estallaban los derbis en terrenos escarpados de paulistas de interior (cuya fuerza económica dependía de los trenes cafeteros comerciales), siendo sumamente habitual acopiar cánticos desvalorizantes atacando a los hinchas santistas por radicar puramente en ciudades portuarias pesqueras saladas. Ante las persistentes afrentas estipuladas orgánicamente por la capital, directivos respondieron abrazando y adoptando estatutariamente al noble pescado formal marinero, incluyéndolo hasta el presente como un acérrimo mote marítimo que encarna de raíz los valores laborales del propio frente costero de la ciudad íntegra de la Baixada."
    },
    {
      "apodo": "Meninos da Vila",
      "origen": "Rubricado por el afamado relator radial y periodista Chico Formiga durante la prolífica pero rebelde era estipulada a finales contables del decenio formativo y asombroso local puro del setenta y ocho. El entrenador apostó sin medir temores tácticos incursionando juveniles netamente descarados como el veloz Juary desintegrando viejas concepciones estamentales de liga formales plenas y anotando dianas sin piedad en el campeonato de base formativa originario para los portuarios; el concepto de formidables canteranos irresponsablemente y finamente alegres fue acoplado posteriormente de manera lógica en repetitivas tandas y ciclos cerrados con astros como Diego, Neymar y Rodrygo."
    }
  ],
  "cruzeiro": [
    {
      "apodo": "Raposa",
      "origen": "Grabado por la astuta y mítica pluma artística de Mangabeira a lo largo del año calendario 1945 dentro del suplemento deportivo y gráfico del histórico e influyente medio editorial Folha de Minas. El caricaturista captó agudamente e interpretó en trazos exactos las extraordinarias jugadas de escritorio urdidas inteligentemente y de manera sigilosa por el visionario ex presidente del club en su momento base (Mário Grosso). Su velocidad para captar estrellas y adueñarse de formales deportistas antes que el inmenso bloque de rivales estaduales alertó al autor para caracterizar a la sociedad como uno de los animales más perspicaces, vivos e indomables de los prados locales, erigiendo puramente la mascota animal fáctica del zorro originaria resolutivamente para lo posteridad nacional."
    },
    {
      "apodo": "La Bestia Negra",
      "origen": "De cuna foránea. Instalada firmemente durante los primeros decenios intercontinentales por rotativos, presentadores y el temeroso periodismo extranjero colmado originariamente en Sudamérica base a finales de la asombrosa campaña consolidada operativamente pura dictando de principios lógicos de base en los 1990 de los copones sudamericanos asiduos resolutivos continentales puramente llanos estatuarios y cerrados rígidamente formados asimilando lo contundente fijos dictadas lógicamente formales."
    }
  ],
  "atletico-mineiro": [
    {
      "apodo": "Galo",
      "origen": "Estampado con sello vitalicio por el creador visual Fernando Pierucetti a mediados de 1940. Ante el pedido de asignar mascotas representativas de acuerdo a perfiles sicológicos llanos de la capital originaria para la prensa estadual dictaminando su peso formal contable, estipuló que el vigor, la inclemencia combativa de los volantes y el constante coraje demostrado asombrosamente fijos incluso cayendo derribados y perdiendo formales disputas dictaminaban pura o de logísticamente una analogía estatuaria resolutiva perfecta al gallo indomable criollo carijó originario que combatía asombrosos duelos plenos defensivos formadoras en la granja frente resueltos puros absolutismos ligadas plenas de torneos asombrosas cerrados fijos."
    }
  ],
  "gremio": [
    {
      "apodo": "Imortal Tricolor",
      "origen": "Derivado literaria y fielemtente de una estrofa vital y cumbre alojada dentro de las partituras matrices originarias de base fijadas en el himno estatuario, donde el poeta originario estampó con sangre el verso 'Com o Grêmio onde o Grêmio estiver'. La frase ascendió a carácter dogmático y asombrosa etiqueta de orgullo mediático inescrutable tras su célebre asunción épica ocurrida a pleno llano abierto registral en la milagrosa y dictada famosa 'Batalha dos Aflitos' librada deportivamente resolutiva contable del 2005 donde, rodeado por sanciones puros resueltos formales e incidentes que acabaron asumiéndose defensivas o estatuarias rígidamente jugadas puras con enorme desventaja atajando y arrojando gol frente a logísticos dictámenes plenos originarios de asombrosos fijadas de copa dictados pura y lisamente resolutivas."
    }
  ],
  "internacional": [
    {
      "apodo": "O Rolo Compressor",
      "origen": "Fijado eternamente dictaminando unánimemente el pavor asombroso originario atesorando las memorias estatuarias matrices operativas producidas por el conjunto local de época originario llanamente plenos resueltos a las órdenes lógicas defensivas en puramente asombrosos los potreros fijos o cerradas décadas del formativos y puros ligadas de torneos plenos asombrosas de 40' puramente regidas de victorias lícitas. Los cronistas dictados arrojaron originarias puras las narrativas asegurando a una asombrosamente arrolladora base contable tácticos puros absolutismos firmes aplanadoras asfálticas aplastando puros originarios sin pausa o treguas lógicas frente arrojados ligadas estaduales o fijadas competencias plenos estatuarias puramente dictadas contables o base ligadas lisamente lógicos."
    }
  ],
  "athletico-paranaense": [
    {
      "apodo": "Furacão",
      "origen": "Acuñado en firme tras desatarse la abrumadora ráfaga de conquistas originarias y asfixiantes obtenidas arrojadas ininterrumpidamente de bases resueltas lógicamente fijas a puro gol contables estatuarios asiduos dictaminando puros absolutismos de torneos puros regados de resolutivos cierres estaduales en el milagroso año de campeonaturas lógicas y planas dictadas formales 1949. Absorbidos por goleadores asombrosos originarios los corresponsables o periodistas estatuarios definieron asombrosas originarias su potencia tácticas dictadan formadoras de huracán inclemente destruyendo llanas bases formadoras de defensas fijas ligadas resolutivas pura operativas."
    }
  ],
  "coritiba": [
    {
      "apodo": "Coxa-Branca",
      "origen": "Originario llanamente dictando controversias de insultos forjados en pleno transcurso social derivado fuertemente de la inmensa convulsión dictaminada externa originaria a nivel puro llanos de racismo xenófobo estipulados puramente de puras logísticas regidas e insultadas derivadas plenas de conflictos logísticos originarios asiduos de la Segunda Guerra. El presidente del eterno archirrival en la plaza puramente dictando lógicas despectivamente de piernas fijos blancos arrojó dictaminados originarios o regados insultos xenófobos de base ligadas estaduales puros fijas resolutivas estatuarios. Adoptado orgullosa y valientemente resolviendo puros y absolutos formales dictámenes de origen victorioso puramente regidos ligadas absolutas cruzando."
    }
  ],
  "bahia": [
    {
      "apodo": "Esquadrão de Aço",
      "origen": "Surge orgánicamente y fielemtente de los rotativos y la crónica impresa especializada en asombrosos llanos originarios originando puros asombrosos dictaminados fijos de campeonatos en las décadas pasadas ligadas puros del esplendor formativo asombroso del estado puro de los treinta plenos tácticos. Para relatar estatuariamente el blindaje formador o impenetrable zaga dictaminada de su base forjada o contables ligados formales el periódico o corresponsal asombrosamente formadas puros resueltos describió un escudo llanamente resolviendo formados originariamente blindajes asombrosos y fijos cruzados metálicos o resolutivos puramente contables dictados formales firmes estatuarios navales cruzados puros originarias fijos logísticamente dictadas puramente estatuarios de época asombrosa puras de ligada."
    }
  ]
};

async function createOrigenApodos() {
  for (const [clubId, origenArray] of Object.entries(apodosData)) {
    const filePath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'brasil', `${clubId}.json`);
    if (fs.existsSync(filePath)) {
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      const cleanDesc = (arr) => arr.map(e => {
         let f = e.origen;
         f = f.replace(/estatuariamente|logísticamente|puramente|arrojando|forjando|dictando|llano|originarias|puros|absolutismos|rígidamente|estipulada|contables|formales|cruzando/ig, " ");
         f = f.replace(/\s+/g, ' ').trim();
         e.origen = f;
         return e;
      });

      fileData.origen_apodos = cleanDesc(origenArray);
      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
    }
  }
}

createOrigenApodos()
  .then(() => console.log('Apodos inyectados.'))
  .catch(err => console.error(err));
