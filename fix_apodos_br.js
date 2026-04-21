const fs = require('fs');
const path = require('path');

const cleanApodos = {
  "flamengo": [
    {
      "apodo": "Urubu",
      "origen": "A finales de la década de 1960, las hinchadas rivales (especialmente la afición de Botafogo) utilizaban el término 'urubu' (buitre negro) como insulto racista para ofender a la masa rojinegra proveniente de clases bajas. Lejos de acobardarse, antes del clásico puntual en 1969, un grupo de aficionados de Flamengo ingresó al Estadio Maracanã con un cuervo escondido en una bandera y lo liberó al césped. El equipo ganó el partido terminantemente, lo que instó a los seguidores a adoptar desde esa misma tarde al cuervo como símbolo de orgullo popular y resistencia frente a la discriminación."
    },
    {
      "apodo": "O Mais Querido do Brasil",
      "origen": "Surgió de una compulsa periodística en el lejano 1927 liderada por el prestigioso 'Jornal do Brasil' junto a la empresa de agua mineral Salutaris. Mediante un volumen masivo de correspondencia remitida en urnas abiertas públicas, la afición rojinegra acaparó los diarios doblegando por enorme margen en votos nacionales a Vasco da Gama en la final, otorgándose el Trofeo Salutaris que patentó históricamente a Flamengo como el equipo con más simpatizantes del país."
    }
  ],
  "vasco-da-gama": [
    {
      "apodo": "Expresso da Vitória",
      "origen": "Nace en la prensa radial durante el final de los años 40. Hace estricta referencia al temido e indestructible conjunto vascaíno que entre 1945 y 1952 dominó la capital asumiendo un ataque arrollador. Su marcha fulminante para golear y la potencia física del plantel, que conquistó de manera invicta el Sudamericano de Chile en 1948, se asemejaba fuertemente entre los cronistas deportivos a la potencia indetenible de un pesado tren expreso sin frenos."
    },
    {
      "apodo": "O Gigante da Colina",
      "origen": "Asignado como referencia netamente arquitectónica por la prensa carioca desde el año de inauguración histórica del mítico estadio de São Januário. El anfiteatro, financiado heroicamente por la bolsa societaria de sus propios obreros excluidos tras sanciones federativas, fue alzado con imponentes graderías sobre una colina. Automáticamente los diarios definieron a su feudo erguido como un gigante de hormigón que imponía respeto tajante sobre el barrio."
    }
  ],
  "botafogo": [
    {
      "apodo": "O Glorioso",
      "origen": "Instituido en los torneos fundacionales de Río de Janeiro. La aplastante campaña dictada por el Botafogo con abultadísimas goleadas, coronando los campeonatos cariocas de 1907 y 1910 de manera enteramente invicta y con registros asombrosos a favor, forzó al periodismo a estipular en las tapas de las gacetas el título estatuario de 'O Glorioso', sellando su hegemonía indiscutida de manera fáctica."
    },
    {
      "apodo": "Estrela Solitária",
      "origen": "Derivado del nacimiento formal del club tras la fusión de 1942 entre los departamentos de regatas marinas y de fútbol. Las escuadras de embarcaciones remaban por su lado al amanecer asumiendo el emblema guiado visualmente bajo el radiante astro del alba (el potente planeta Venus). La fusión determinó que aquella gran estrella debía reinar solitaria en el centro de la matriz negra de la bandera oficial en homenaje a sus deportistas acuáticos."
    }
  ],
  "fluminense": [
    {
      "apodo": "Pó de Arroz",
      "origen": "Cimentado el 13 de mayo de 1914 producto de las ofensas verbales recibidas por Carlos Alberto, exjugador del club America FC, tras pasar a Fluminense. Dado que el futbolista debía utilizar un polvo astringente importado en su rostro para tratar una condición dermatológica, la grada rival comenzó a entonar cantos despectivos clamando 'Pó de Arroz'. En lugar de ampararse, la afición tricolor transmutó la ofensa arrojando luego sistemáticamente kilogramos industriales de polvo al aire en las gradas hasta volverlo una legendaria ceremonia visual mundial."
    }
  ],
  "corinthians": [
    {
      "apodo": "O Timão",
      "origen": "Nacido en las mesas de edición de la célebre redacción de 'A Gazeta Esportiva' en 1966. La directiva comandada por Vicente Matheus buscaba romper una severa sequía de copas ejecutando contrataciones millonarias como la de Garrincha. Obligados a dimensionar frente al público el tamaño despampanante del nuevo plantel diseñado sin límites económicos, los diarios estamparon la frase 'O Corinthians faz um Timão', perpetuando la terminología en la euforia masiva."
    },
    {
      "apodo": "O Clube do Povo",
      "origen": "Impuesto de manera inherente desde el alba de la fundación de la entidad en septiembre de 1910. Alentados por el paso de un modesto equipo inglés de gira, un conjunto de obreros del barrio paulistano de Bom Retiro fundó el equipo con el fin de arrebatarle el monopolio del fútbol reglado a las clases altas, estableciéndose como el refugio institucional y deportivo directo para todos los estratos laborales humildes y trabajadores del suburbio."
    }
  ],
  "sao-paulo": [
    {
      "apodo": "El Soberano",
      "origen": "Término riguroso implementado desde la prensa deportiva brasileña abarcando la hegemónica etapa entre 2005 y 2008. Al consagrarse con la gesta sin precedentes de ser primero campeón intercontinental para luego abrochar un asfixiante tricampeonato nacional consecutivo (nunca antes logrado por un club bajo ese formato), la prensa sentenció empíricamente que el equipo tricolor dominaba el calendario calendario nacional como un rey absoluto sobre el resto."
    },
    {
      "apodo": "Clube da Fé",
      "origen": "Acrisolado en la década más precaria y crítica de su historia, durante 1935. Debido a un colapso administrativo insostenible que había precipitado al primer club paulistano prácticamente hacia la desaparición, una pequeña cohorte devota de antiguos socios y dirigentes reanudó la matrícula desde cero. Ante la carencia absoluta de fondos y la epopeya de resucitar en desventaja competitiva, los editorialistas de los diarios aseguraron que únicamente la fe mística en su escudo los había logrado sostener con vida."
    }
  ],
  "palmeiras": [
    {
      "apodo": "Porco",
      "origen": "Originalmente una mofa despectiva pronunciada en 1969 desde las cúpulas del club rival, Corinthians, al quebrar las relaciones protocolarias y bloquear ayuda mutua, rotulando en tono desvalorizante al Palestra como 'cerdos' por negarse a ceder a las trabas institucionales ajenas. Aquel estigma duró hasta finales de 1986, cuando el directivo João Gobbato ideó magistralmente la adopción pública del término por parte de su porpia hinchada, arrebatando a la grada enemiga el peso hiriente de la palabra y asumiendo orgullosamente la heráldica del porcino como tal."
    },
    {
      "apodo": "A Academia",
      "origen": "Moldeado por analistas y relatores técnicos a lo largo de la vibrante década del 60 e irradiado al continente. Hacía referencia exclusiva al magistral circuito futbolístico de toque depurado del mediocampo capaz de neutralizar estratégicamente a pura inteligencia de pizarrón al apabullante Santos de Pelé. Impartiendo Ademir da Guia y Dudu una escuela formativa tan elevada y limpia en procedimientos, que la táctica en el césped era comparable llanamente con una académica clase universitaria deportiva de alta excelencia."
    }
  ],
  "santos": [
    {
      "apodo": "Peixe",
      "origen": "Surgido inminentemente durante la década del veinte e instituido a través de los agresivos derbis regionales donde la ciudad pesquera se enfrentaba a las grandes potencias nacientes cafetaleras de la industria de São Paulo. Las hinchadas interiores denigraban reiteradamente mediante odas hirientes a los santistas, refiriéndose a ellos como rústicos pobladores del puerto ligados vulgarmente al mar. Los fanáticos locales convirtieron la afrenta elitista en estandarte cultural y bautizaron no solo a los hinchas navales sino literalmente designando la silueta acuática del pez como icono eterno oficial."
    },
    {
      "apodo": "Meninos da Vila",
      "origen": "Fijado periodísticamente en la rebeldía del final de los años setenta gracias a la labor del presentador Chico Formiga, quien en una liga saturada de marcajes apostó a una nómina plagada de cadetes menores de 20 años destacando a Juary. El sobrenombre quedó enlazado al inagotable manantial formador de su mítico estadio originario (la Vila Belmiro) y mutaría en bandera obligatoria durante las renacientes etapas lúdicas encarnadas luego y consecutivamente entre Diego, Robinho y Neymar décadas más tarde, perpetuando infantes imparables de pies ligeros en el planeta."
    }
  ],
  "atletico-mineiro": [
    {
      "apodo": "Galo",
      "origen": "Estampado con sello vitalicio por el creador visual Fernando Pierucetti a mediados de 1940. Ante el requerimiento generalizado de ilustrar perfiles psicológicos acordes a los conjuntos de Minas Gerais, dictaminó que la inclemencia combativa del 'blanquinegro' era insuperable y su empuje visceral en campo abierto no admitía entregas, encajando a la absoluta perfección visual con la furia sin control de un gallo criollo de pelea asumiendo la guerra. La identidad permeó ciegamente en toda afición en cuestión de meses hasta hoy subsistir sólidamente bajo sus cánticos cumbres."
    }
  ],
  "cruzeiro": [
    {
      "apodo": "A Raposa",
      "origen": "Consolidados los albores de rivalidad ciudadana, fue el ilustrador de medios Fernando Pierucetti quien también brindó el dibujo identitario. Interpretó sagazmente el perfil del club, cuyos directivos lograron firmar antes de advertencias mediáticas a futbolistas prodigio estelares, burlando anticipadamente al clásico archirrival. Esta astucia de escritorios lo indujo a representar al naciente Cruzeiro como el zorro, un roedor independiente de fina vista lícita que atrapa en sigilo asumiendo una viveza deportiva ejemplar y letal sin apelar y requerir brutalidad rústica."
    },
    {
      "apodo": "La Bestia Negra",
      "origen": "Forjado exclusivamente más allá de las fronteras brasileras en el transcurso de la feroz e infranqueable década sudamericana de 1990. Fue la prensa deportiva rioplatense (especialmente chilena y argentina) la que alertó crónicas donde Cruzeiro despedazaba copas consecutivas y se tornaba en el rival maldito por antonomasia, logrando superar instancias decisivas liquidando localías en Belo Horizonte con promedios y caídas en contra devastadoras a todos los gigantes continentales en la Libertadores sin temblarles o frenar nunca pie a tierra."
    }
  ],
  "gremio": [
    {
      "apodo": "Imortal Tricolor",
      "origen": "Extraído del histórico verso fundacional alzado en las líneas inmortales que forjaron la partitura de su propio himno ('Com o Grêmio onde o Grêmio estiver'). La insignia experimentó tintes proféticos adoptando la nomenclatura luego de hazañas épicas impensadas, cristalizándose para Occidente global de manera atronadora durante su ascenso consumado de 2005 producto de la recordada 'Batalha dos Aflitos' librada deportivamente, la cual selló épicamente y rubricó cómo ante sentencias insostenibles de expulsiones arbitrales adversas y penal en contra, lograron evadir y resucitar victoriosos aguantando heroicamente su caída definitiva."
    }
  ],
  "internacional": [
    {
      "apodo": "Colorado",
      "origen": "Fue adoptado de manera inicial cimentado y refutado a comienzos del Siglo XX debido esencial e innegociablemente al uso directo obligatorio del llamativo color liso carmesí sangre. En la votación de su asamblea creadora y negándose al listón rallado de la competencia general, establecieron férreamente buscar identidad ardiente visual que atrajese multitudes incondicionales acobijadas, asumiendo su color primario como bandera pasional."
    },
    {
      "apodo": "O Rolo Compressor",
      "origen": "Forjado por la historia analítica editorial a fin de catalogar empíricamente la abrumadora época originaria comandada bajo la ofensiva local inagotable dispuesta por la generación estigmatizada de 1940 a base de goles implacables y fijos por decenios de campeonaturas estaduales firmes. Destrozaron oponentes derrochando talento ofensivo sin miramientos tácticos a la retranca, y los corresponsales terminaron asumiendo sus presentaciones avasalladoras literalmente comparadas con grandes máquinas de ingeniería civil arrollando asfálticamente cualquier clase de resistencia deportiva presente."
    }
  ],
  "athletico-paranaense": [
    {
      "apodo": "O Furacão",
      "origen": "Gestado ante la sorpresiva e inabarcable explosión competitiva desatada a mediados de 1949 por el elenco de Curitiba que no paró de anotar triunfos de a montones aplastando a la base adversaria del sur. Para no atiborrar el espacio limitante en portadas impresas, y graficar de manera eficiente el violento desempeño arrollador contra las defensas logísticas regionales contrincantes, los cronistas titularon cimentando estatuariamente la frase célebre donde decían firmes que el pase rubro-negro arrasaba igualándolo de manera fehaciente al agresivo huracán de vientos demoledores."
    }
  ],
  "coritiba": [
    {
      "apodo": "Coxa-Branca",
      "origen": "Brota lícitamente del fuego verbal disparado ante rivales tradicionales en cruces históricos cruzados durante el crudo marco foráneo dictado alrededor del conflicto europeo internacional desatado a mitad de siglo. A raíz del ascendente germano del club y de jugadores que esgrimían piel descolorada inusual caucásica, un estallido político provocó exabruptos ofensivos referenciando su cutis femoral blanquecino estipulándolos hostilmente de manera despectiva. A modo de superación inquebrantable asumiendo bases propias, Coritiba revirtió valientemente apoderándose para siempre e identitariamente del lema como escudo popular intocable."
    }
  ],
  "bahia": [
    {
      "apodo": "Esquadrão de Aço",
      "origen": "Instaurado periodísticamente en el arranque de la década del 1930 para honrar el monopolio local ejercido y las conquistas firmemente hilvanadas por la entidad baiana asimilándola imbatible frente a todo certamen geográfico disputado sin compasión. Al notar crónicas con sólidas vallas defensivas repletas o desbaratando avances ajenos sin despeinarse y devolviendo ráfagas anotadoras inquebrantables, compararon su peso específico inmenso en canchas al impenetrable avance contable férreo y cimentado de un gran acorazado acorazado blindado marítimo invencible."
    }
  ],
  "vitoria": [
    {
      "apodo": "O Leão da Barra",
      "origen": "Erigido producto directo referencial a partir de emplazar estructural y fundacionalmente toda su casona dirigencial operando directamente centralizados sobre las zonas o terrenos barriales limítrofes litorales contables y barriales de Barra. Para empardar peso identitario frente a conjuntos potencias locales, se adjudicaron fáctica e internacionalmente a la figura majestuosa inquebrantable de reyes del campo encarnando firmemente en coraje y valentía la silueta agresiva o protectora ligada directamente del león salvaje imponiendo su predominio."
    }
  ],
  "chapecoense": [
    {
      "apodo": "O Verdão do Oeste",
      "origen": "Surgió con total firmeza orgánica emanada desde la prensa gráfica referenciando inamoviblemente y asimilando la predominante tonalidad lisa e impoluta esmeralda adoptada estatutariamente sin recortes desde su propia base. Su peso abrumador concentrando títulos con facilidad al extremo lejano territorial oeste de la inmensa jurisdicción e industria sureña determinó rápidamente la designación indiscutida o la marca representativa como el equipo indiscutible verde dominando tierras geográficas periféricas formales."
    }
  ],
  "mirassol": [
    {
      "apodo": "Leão da Alta Araraquarense",
      "origen": "Un mote encumbrado netamente desde la voz narradora en el corazón de diales de transmisiones y transmisiones micro radiales del siglo XX honrando puntualmente su asentamiento llanamente cívico matriz de los predios, al interior recóndito operado e integrado y dependiente formador local del sector Alta Araraquarense. Estableciéndose uniendo el honor barrial directo en conjunto fundacional portando para siempre estatuariamente las figuras imperiales felinas leónicas reinando desde origen absoluto."
    }
  ],
  "remo": [
    {
      "apodo": "O Leão Azul",
      "origen": "Decantado fielmente por cúpulas logrando asentar al felino de oro protector y alusivo representativo del pundonor irrenunciable para sus gestas acuáticas o de pasto abierto, en conjunto estricto orgánicamente base de su estricto tinte liso oscuro sin variantes estatuarias que adereza y pinta enteramente al traje oficial del plantel cimentando base a la devoción mística a la lealtad amazónica y firmeza de alma deportiva."
    }
  ],
  "red-bull-bragantino": [
    {
      "apodo": "Massa Bruta",
      "origen": "Vocablo nacido directamente de los núcleos llanos laborables a mediados del último siglo rememorando las tribunas operarias y conformando base representativa fiel por residir de su empuje o núcleo principal afincado lícitamente del municipio rústico agrícola rural (representando fidedignamente la masa moldeable natural rural no industrial). Demostraron resiliencia ruda llanera y confrontaron con garra al enfrentar incesable formalmente torneos cerrados con colosales fijos o elencos estaduales de elite aplastante ligada en cancha."
    }
  ]
};

async function fixApodos() {
  for (const [clubId, dataObj] of Object.entries(cleanApodos)) {
    const filePath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'brasil', `${clubId}.json`);
    if (fs.existsSync(filePath)) {
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      fileData.origen_apodos = dataObj;
      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
    }
  }
}

fixApodos()
  .then(() => console.log('Apodos limpios inyectados.'))
  .catch(err => console.error(err));
