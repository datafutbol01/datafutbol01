const fs = require('fs');
const path = require('path');

const leyendasP1 = {
  "flamengo": {
    "idolos": [
      { nombre: "Arthur Antunes Coimbra", epoca: "1971-1989", apodo: "Zico / Galinho de Quintino", desc: "El máximo ícono de la institución. Comandó la etapa dorada conquistando la primera Libertadores e Intercontinental, forjando un aura mítica como enganche de técnica exquisita y dominio absoluto de los tiros libres." },
      { nombre: "Leovegildo Lins da Gama", epoca: "1974-1993", apodo: "Júnior / Capacete", desc: "Símbolo de longevidad y jerarquía. Inició como lateral izquierdo deslumbrante y culminó su trayectoria como mediocampista central orquestador, ganando cuatro campeonatos brasileños en dos décadas distintas." },
      { nombre: "José Leandro de Souza", epoca: "1978-1990", apodo: "Leandro / Peixe-Frito", desc: "Lateral derecho de antología considerado el defensor más técnico de la historia del club. Desarrolló su carrera profesional exclusivamente en Flamengo, siendo pieza vital de la máquina campeona del mundo en 1981." },
      { nombre: "Edvaldo Alves de Santa Rosa", epoca: "1954-1964", apodo: "Dida", desc: "Ídolo supremo de la etapa previa a Zico. Delantero de habilidad punzante y artífice máximo de los trofeos cariocas en los años 50, fue la gran inspiración del 'Galinho' durante su juventud." },
      { nombre: "Gabriel Barbosa", epoca: "2019-2024", apodo: "Gabigol", desc: "La cara contemporánea del club. Inmortalizó su nombre anotando dobletes heroicos en finales continentales, restaurando el prestigio internacional y la mística victoriosa tras más de tres décadas de sequía continental." }
    ],
    "goleadores_historicos": [
      { nombre: "Arthur Antunes Coimbra", goles: 509, epoca: "1971-1989", apodo: "Zico", desc: "Marcó un registro inalcanzable de 509 goles combinando definiciones excelsas dentro del área y una maestría sin precedentes en remates de balón parado." },
      { nombre: "Edvaldo Alves de Santa Rosa", goles: 264, epoca: "1954-1964", apodo: "Dida", desc: "Atacante implacable que dominó las redes estatales, deslumbrando a multitudes en el Maracanã con recortes fulminantes y remates certeros que dictaron el pulso del fútbol de la época." },
      { nombre: "Henrique Frade", goles: 216, epoca: "1954-1963", apodo: "Henrique", desc: "Delantero centro de potencia bruta y posicionamiento perfecto. Mantuvo un letal registro anotador acompañando la era dorada de los 50 antes de la transición generacional del club." },
      { nombre: "Pirillo", goles: 204, epoca: "1941-1947", apodo: "Sylvio Pirillo", desc: "Contratado para suplir a Leônidas, destrozó las expectativas rompiendo el récord de goles en un solo campeonato carioca, sellando su legado como ariete letal del primer tricampeonato." },
      { nombre: "Romário de Souza Faria", goles: 204, epoca: "1995-1999", apodo: "Romário / Baixinho", desc: "El mejor delantero del mundo llegó en la cúspide de su carrera, promediando casi un gol por partido y brindando un espectáculo constante de magia dentro del área." }
    ],
    "presencias_historicas": [
      { nombre: "Leovegildo Lins da Gama", partidos: 876, epoca: "1974-1993", apodo: "Júnior", desc: "Ostenta el récord absoluto de apariciones con el manto rojinegro, prolongando su carrera hasta casi los 40 años gracias a una lectura de juego y condición atlética prodigiosas." },
      { nombre: "Arthur Antunes Coimbra", partidos: 732, epoca: "1971-1989", apodo: "Zico", desc: "Entregó la totalidad de su vida útil europea al club de sus amores, promediando una lealtad competitiva en cancha pocas veces vista en estrellas mundiales de su envergadura." },
      { nombre: "Adílio de Oliveira Gonçalves", partidos: 615, epoca: "1975-1987", apodo: "Adílio / Brown", desc: "Mediocampista todoterreno y escudero perfecto de Zico. Recorrió el mundo portando la camiseta y dejando su estampa técnica en más de seiscientos encuentros como titular inamovible." },
      { nombre: "Jordan da Costa", partidos: 609, epoca: "1952-1963", apodo: "Jordan", desc: "Lateral izquierdo de raza y marca inquebrantable que sostuvo el flanco defensivo durante la década del cincuenta, reconocido por su legendaria pulcritud táctica en el Maracanã." },
      { nombre: "Jorge Luís Andrade da Silva", partidos: 570, epoca: "1979-1988", apodo: "Andrade", desc: "Un reloj en el mediocentro. Controló e impuso los tiempos en la generación más victoriosa del club sumando cientos de batallas continentales con despliegue físico brutal." }
    ]
  },
  "vasco-da-gama": {
    "idolos": [
      { nombre: "Carlos Roberto de Oliveira", epoca: "1971-1993", apodo: "Roberto Dinamite", desc: "La identidad eterna de la Cruz de Malta. Centrodelantero monumental, artillero implacable y máxima figura representativa en los derbis frente a Flamengo, dedicando su vida deportiva y administrativa al club." },
      { nombre: "Romário de Souza Faria", epoca: "1985-2008", apodo: "Baixinho", desc: "Criado en São Januário, el delantero prodigio debutó arrollando redes y tuvo múltiples retornos gloriosos donde conquistó el Brasileirão 2000 y coronó su milésimo gol profesional vistiendo la misma casaca." },
      { nombre: "Edmundo Alves de Souza Neto", epoca: "1992-2008", apodo: "Animal", desc: "Genio indomable. Su temporada arrasadora en 1997 le brindó al equipo un campeonato nacional cimentado puramente en su anarquía letal y destreza técnica brillante ante la meta rival." },
      { nombre: "Hilderaldo Bellini", epoca: "1952-1961", apodo: "Bellini", desc: "Emblema del escudo y estandarte del liderazgo en la retaguardia. Consolidó una defensa impenetrable como capitán de las escuadras dominantes nacionales antes del Mundial del 58." },
      { nombre: "Antônio Augusto Ribeiro Reis Jr.", epoca: "1995-2013", apodo: "Juninho Pernambucano", desc: "Orquestador de la asombrosa Libertadores del 98. Su monumental remate de tiro libre en el estadio de River Plate quedó sellado como el pasaje dorado a la gloria continental contemporánea." }
    ],
    "goleadores_historicos": [
      { nombre: "Carlos Roberto de Oliveira", goles: 708, epoca: "1971-1993", apodo: "Roberto Dinamite", desc: "Sus cifras no tienen igual: 708 gritos sagrados que lo posicionan como el mayor emblema de definición pura, ostentando récords supremos en los campeonatos nacionales y regionales brasileños." },
      { nombre: "Romário de Souza Faria", goles: 326, epoca: "1985-2008", apodo: "Baixinho", desc: "Heredero de las áreas vascaínas, acumuló más de trescientos goles mediante sombreros sedosos, picadas sutiles y remates de punta explosivos patentados en exclusiva bajo su sello personal." },
      { nombre: "Ademir Marques de Menezes", goles: 301, epoca: "1942-1956", apodo: "Ademir de Menezes / Queixada", desc: "Líder anotador del Expreso de la Victoria invencible sudamericano del 48. Revolucionó la posición introduciendo arranques eléctricos y aceleraciones mortíferas dentro de las grandes canchas." },
      { nombre: "José Lázaro Robles", goles: 250, epoca: "1953-1961", apodo: "Pinga", desc: "Centrocampista y atacante de pie sedoso que registró una cuota tremenda de definiciones durante los años dorados cincuentenarios, superando marcas de longevidad ofensiva." },
      { nombre: "Ipojucan Lins de Araújo", goles: 225, epoca: "1944-1954", apodo: "Ipojucan", desc: "Elegante y técnico, su contextura larguirucha no le impidió firmar anotaciones finas y asociativas letales junto a la legendaria delantera que conquistó América en los cuarenta." }
    ],
    "presencias_historicas": [
      { nombre: "Carlos Roberto de Oliveira", partidos: 1110, epoca: "1971-1993", apodo: "Roberto Dinamite", desc: "El único hombre en romper la barrera de los mil encuentros institucionales, plasmando un nivel de dedicación a nivel de campo que forjó y definió a toda la nación vascaína." },
      { nombre: "Carlos Germano Schwambach Alves", partidos: 632, epoca: "1990-1999", apodo: "Carlos Germano", desc: "Muro arqueado seguro y silencioso de la era que arropó una Libertadores y cruzada de campeonatos. Representó un cerrojo vital para competir férreamente contra todas las potencias sudamericanas." },
      { nombre: "Sebastião Leônidas", partidos: 576, epoca: "1952-1964", apodo: "Sabará", desc: "Puntero incansable de la época gloriosa. Se mantuvo durante más de diez años corriendo ininterrumpidamente las bandas y vistiendo la formación estatuaria titular más sólida nacional." },
      { nombre: "Alcir Portela", partidos: 511, epoca: "1963-1974", apodo: "Alcir", desc: "Volante rocoso y líder de mil batallas encargado de las transiciones del bloque defensivo que mantuvo un volumen contundente de compromisos en los albores del Brasileirão unificado." },
      { nombre: "Moacyr Barbosa", partidos: 431, epoca: "1945-1962", apodo: "Barbosa", desc: "Arquero legendario del Expreso de la Victoria. Agigantó las redes de San Genaro brindando solidez acrobática irrepetible y cimentó gran parte de las hazañas bajo los tres palos." }
    ]
  },
  "botafogo": {
    "idolos": [
      { nombre: "Manuel Francisco dos Santos", epoca: "1953-1965", apodo: "Garrincha / Alegría del Pueblo", desc: "La esencia lúdica del fútbol encapsulada en piernas corvas. Volvió loco al mundo con sus gambetas por la extrema derecha, cimentando el aura inalcanzable de los botafoguenses en plenos años sesenta." },
      { nombre: "Nilton Santos", epoca: "1948-1964", apodo: "La Enciclopedia", desc: "Defensor revolucionario que jugaba con traje de etiqueta invisible. Su elegancia para salir proyectado en ataque redefinió para siempre la función del lateral izquierdo y lo elevó como dios del club." },
      { nombre: "Jair Ventura Filho", epoca: "1959-1974", apodo: "Jairzinho / El Huracán", desc: "Reemplazó a un mito puro como Garrincha y lo superó en explosión física. Su tranco letal y cuota de definición arrolladora marcaron la potencia dorada en ofensiva durante la transición generacional." },
      { nombre: "Túlio Costa", epoca: "1994-1998", apodo: "Túlio Maravilha", desc: "Ícono publicitario y artillero demoledor de los años noventa. Rescató al club del ostracismo ganando con sus ráfagas goleadoras el histórico título brasileño de 1995 como figura indiscutible." },
      { nombre: "Valdir Pereira", epoca: "1956-1962", apodo: "Didi", desc: "El creador intelectual de la 'Folha Seca'. Maestro elegante de ritmos en la mitad de la cancha y cerebro de maquinarias invencibles que ganaron títulos de liga e influenciaron al seleccionado verdeamarelo." }
    ],
    "goleadores_historicos": [
      { nombre: "Waldir Cardoso Lebrêgo", goles: 313, epoca: "1954-1964", apodo: "Quarentinha", desc: "Delantero furibundo de pierna zurda de acero. Ostenta el cetro reinante marcando más de 300 goles mediante remates rasos letales que fulminaron redes durante una década entera." },
      { nombre: "Carvalho Leite", goles: 261, epoca: "1929-1941", apodo: "Carvalho Leite", desc: "Goleador primario de la década amateur y profesional naciente. Cimentó bases de jerarquía logrando registros astronómicos sin importar en qué campo pantanoso se parase." },
      { nombre: "Manuel Francisco dos Santos", goles: 243, epoca: "1953-1965", apodo: "Garrincha", desc: "Pese a jugar en la banda centrando balones y divirtiendo tribunas, registró cuotas altísimas con diagonales de magia resolutiva y penetración destructiva que sumaron más de doscientos gritos." },
      { nombre: "Heleno de Freitas", goles: 209, epoca: "1939-1948", apodo: "Heleno", desc: "Adonis del área y talento trágico de talento puro. Con cabezazos mortíferos y toques de clase, marcó pauta y anotó en estampida sosteniendo una estampa estatuaria inalcanzable." },
      { nombre: "Nilo Murtinho Braga", goles: 190, epoca: "1927-1937", apodo: "Nilo", desc: "Letal en el remate de primera intención durante los dorados tricampeonatos cariocas de inicio de los 30, fijando un registro base fundacional de eficacia inmensa en las ligas primeras." }
    ],
    "presencias_historicas": [
      { nombre: "Nilton Santos", partidos: 718, epoca: "1948-1964", apodo: "Nilton Santos", desc: "Jugó de manera completa y total toda su carrera en Botafogo. Son setecientos encuentros regidos bajo un señorío defensivo que lo catapultaron como líder de la estrella solitaria." },
      { nombre: "Manuel Francisco dos Santos", partidos: 612, epoca: "1953-1965", apodo: "Garrincha", desc: "Entregó el apogeo vital de sus gambetas en el club sumando un volumen astronómico de choques oficiales de liga y derbis cariocas estipulados para la leyenda eterna." },
      { nombre: "Jefferson de Oliveira Galvão", partidos: 459, epoca: "2003-2018", apodo: "Jefferson", desc: "El gran estandarte milenial. Cuidó los tres palos asumiendo liderazgos en épocas bravas oscilantes, erigiéndose mediante sus extraordinarios reflejos como el ancla de contención contemporáneo." },
      { nombre: "Valtencir Pereira Senra", partidos: 453, epoca: "1967-1976", apodo: "Valtencir", desc: "Polivalente defensivo de pulmones gigantes. Sostuvo la firmeza física y constancia técnica asumiendo más de cuatrocientos encuentros lidiando en la escuadra nacional máxima de la época táctica." },
      { nombre: "Waldir Cardoso Lebrêgo", partidos: 444, epoca: "1954-1964", apodo: "Quarentinha", desc: "Además de sus goles furiosos, sostuvo su titularidad de punta durante diez años inquebrantables, combinando asistencias perfectas y desgaste táctico entre los más grandes del continente." }
    ]
  },
  "fluminense": {
    "idolos": [
      { nombre: "Carlos José Castilho", epoca: "1946-1964", apodo: "Castilho", desc: "Guardián eterno de milagros y lealtad sobrenatural. Llegó al extremo heroico de amputarse el dedo meñique para continuar atajando liderando al plantel a levantar la legendaria Copa Rio." },
      { nombre: "Frederico Chaves Guedes", epoca: "2009-2022", apodo: "Fred", desc: "Líder contemporáneo que sacó al equipo de ahogos traumáticos y devolvió campeonatos brasileños al centro de Río. Sus chilenas, cabezazos y gritos desgarradores lo transformaron en un mito en vida." },
      { nombre: "Roberto Rivellino", epoca: "1975-1978", apodo: "Rivelino", desc: "La zurda elástica y 'patada atómica' de Brasil. Aportó una técnica fina y destreza superior asumiendo los hilos organizativos del equipo conocido icónicamente como 'La Máquina' de los años setenta." },
      { nombre: "Waldo Machado da Silva", epoca: "1954-1961", apodo: "Waldo", desc: "Un finalizador nato letal. Convirtió la simpleza del disparo al arco en un arte puro arruinado redes para catapultar su fama a base puramente matemática como artillero infalible y rápido del continente." },
      { nombre: "Thiago Emiliano da Silva", epoca: "2006-Presente", apodo: "Thiago Silva / O Monstro", desc: "Su paso y regreso consolidan zafiros en defensa. Su temple elegante para cerrar delanteros devolvió esperanzas épicas permitiendo al 'Tricolor' sellar su grandísima primera Copa Libertadores de América." }
    ],
    "goleadores_historicos": [
      { nombre: "Waldo Machado da Silva", goles: 319, epoca: "1954-1961", apodo: "Waldo", desc: "Es el trono absoluto del gol tricolor. Alcanzó guarismos desproporcionados logrados mediante derechazos espectaculares o atropelladas heroicas en el corazón del área penal en apenas siete certámenes." },
      { nombre: "Frederico Chaves Guedes", goles: 199, epoca: "2009-2022", apodo: "Fred", desc: "Atesora la impresionante cifra persiguiendo sus récords y consolidándose estatuariamente como el mayor goleador del formato liga regular nacional demostrando sapiencia, arrastre y remates letales." },
      { nombre: "Orlando Pingo de Ouro", goles: 184, epoca: "1945-1953", apodo: "Pingo de Ouro", desc: "Pequeño jugador de estirpe indomable y definición furibunda. Acarreó sobre sus espaldas ofensivas de grandes campañas dejando su firma en redes cruzadas cariocas de épocas áridas de competencia." },
      { nombre: "Hércules de Miranda", goles: 165, epoca: "1935-1941", apodo: "Hércules", desc: "Artillero de los remates potentes sin rebotes que edificó tricampeonatos marcando bases inamovibles de efectividad frente a potentes arqueros en pleno arranque oficial profesional del sudeste." },
      { nombre: "Telê Santana da Silva", goles: 164, epoca: "1951-1960", apodo: "Fio de Esperança", desc: "Figura menuda y de gambeta punzante. Acumuló formales centenas asegurando las bandas con enganches profundos seguidos de definiciones técnicas certeras sobre los costados de las porterías tricolores." }
    ],
    "presencias_historicas": [
      { nombre: "Carlos José Castilho", partidos: 698, epoca: "1946-1964", apodo: "Castilho", desc: "Nadie visitó el césped más que él. Su resiliencia física permitió que casi setecientos cruces documenten las tapadas y atajadas voladoras sosteniendo los cimientos deportivos puros directivos históricas." },
      { nombre: "João Carlos Batista Pinheiro", partidos: 603, epoca: "1948-1963", apodo: "Pinheiro", desc: "Caudillo férreo en la base defensiva de contención y marca pegajosa. Estableció seis centenares portando con jerarquía intocable las líneas de fondo del legendario Fluminense dorado cincuentenario." },
      { nombre: "Telê Santana da Silva", partidos: 559, epoca: "1951-1960", apodo: "Telê Santana", desc: "El 'Fio de Esperança' dominó con pulmones inmensos las carreras de extremo sumando más de quinientas presentaciones oficiales que forjaron su táctica como jugador regular metódico." },
      { nombre: "Altair Gomes de Figueiredo", partidos: 551, epoca: "1955-1970", apodo: "Altair", desc: "De porte bajo pero salto elástico y timming espectacular, rigió las zonas bajas barriendo ofensivas contrarias cruzando el medio siglo con un rendimiento atlético sin variaciones asombrosas prolongadas." },
      { nombre: "Benedito Ribeiro", partidos: 489, epoca: "1954-1964", apodo: "Escurinho", desc: "Extremo o medio ágil de contención dinámica aportando una carga fundamental operativa a disposición completa de los planes del campo disputando cerca de quinientos choques puros de competencia." }
    ]
  },
  "corinthians": {
    "idolos": [
      { nombre: "Sócrates Brasileiro", epoca: "1978-1984", apodo: "El Doctor", desc: "Cerebro majestuoso y filósofo con el balón. Pionero ideológico de la 'Democracia Corinthiana', lideró al plantel al bicampeonato paulista con sus toques de taquito geniales que maravillaron a un país oprimido." },
      { nombre: "Cássio Ramos", epoca: "2012-2024", apodo: "Gigante Cássio", desc: "Arquero colosal en los momentos definitorios de vida o muerte. Autor cumbre de una tapada apoteósica ante Diego Souza para luego alzar las glorias absolutas de la Libertadores del 2012 y el Mundial contra Chelsea." },
      { nombre: "Marcelo Pereira Surcin", epoca: "1994-2001", apodo: "Marcelinho Carioca / Pé de Anjo", desc: "El pie celestial que dictaba combas magnéticas y misiles estáticos en jugadas de táctica fija. Acumuló títulos arrasadores (brasileños, mundiales y paulistas) liderando la ofensiva rebelde y precisa al maderamen." },
      { nombre: "José Ferreira Neto", epoca: "1989-1993", apodo: "Neto / Craque Neto", desc: "Diez rebelde, caudillo insolente y de pegada feroz en sus tiros libres letales. Arrastró prácticamente en solitario al conjunto conquistando heroicamente el primer Campeonato de Brasil puro liguero sumando milagros tácticos de 1990." },
      { nombre: "Roberto Rivellino", epoca: "1965-1974", apodo: "Reizinho do Parque", desc: "El inventor del drible bautizado finta elástica. Ostentó magistralmente el número diez repartiendo fútbol exquisito de clase mundial y desbordando una técnica en disparos de zurda pura estruendosa en la liga paulista." }
    ],
    "goleadores_historicos": [
      { nombre: "Cláudio Christovam de Pinho", goles: 305, epoca: "1945-1957", apodo: "Cláudio / Gerente", desc: "Puntero cerebral que tejía acciones precisas e insertaba anotaciones asiduas por los bordes derechos, consolidándose como tope anotador estatuario del Timão insuperable ostentando sus trescientas perforaciones a redes regulares." },
      { nombre: "Oswaldo Silva", goles: 269, epoca: "1945-1957", apodo: "Baltazar / Cabezón de Oro", desc: "Cazador innato emparejado directamente con Cláudio. Ejecutor definitivo por excelencia, patentó frentazos colosales sobre alturas asombrosas que sellaron centenas puras superando dos contabilidades históricas de campeonatos en cancha lisa." },
      { nombre: "Uriel Fernandes", goles: 256, epoca: "1934-1944", apodo: "Teleco", desc: "Goleador artillero ráfaga implacable en los estadios antiguos y barrosos, erigiendo fácticos perfiles registrando el increíble o inalcanzable hito logístico de obtener un brutal promedio neto mayor a un gol directo formal cerrado por cada encuentro cruzado." },
      { nombre: "Manoel Nunes", goles: 228, epoca: "1913-1930", apodo: "Neco", desc: "La esencia primera histórica originada popular en el potrero obrero arrojando goles puros desde posiciones volantes de base para conquistar fundacionales paulistas base de estirpe corinthiana primitiva originaria y matriz contable regida estatuaria resolutiva." },
      { nombre: "Marcelo Pereira Surcin", goles: 206, epoca: "1994-2001", apodo: "Marcelinho Carioca", desc: "Engomando balones a los costados y rompiendo las redes matrices de manera moderna de tiro libre logístico y pelotas cortas certeras forjando más de doscientos cantos furibundos ante la marea atlántica liguera consolidada logrando podios definitivos." }
    ],
    "presencias_historicas": [
      { nombre: "Wladimir Rodrigues dos Santos", partidos: 806, epoca: "1972-1987", apodo: "Wladimir", desc: "Soporte táctico en franja zurda inmensa registrando cifra suprema que demuele tableros estadísticos fijos arrojando marca inalcanzable forjada contable a base regular de pulmón cerrado en la década del resurgimiento puro formador local en la Fiel." },
      { nombre: "Cássio Ramos", partidos: 712, epoca: "2012-2024", apodo: "Gigante Cássio", desc: "Ostentó el récord en el arco sobrepasando setecientos asaltos aguantando redes puras a destajo mediante bloqueos y milagros de tapadas en todos los arcos del país matriz ganando mundiales contables cruzados sobre potencias inquebrantables resueltas lisas." },
      { nombre: "Luiz Trochillo", partidos: 606, epoca: "1948-1967", apodo: "Luizinho / Pequeño Polegar", desc: "Menudo estocado enganche driblador consolidado puramente para deleitar al tablón, cimentando registros permanentes formados sumando apariciones constantes como dueño del sector organizativo oficial regulado liguero cincuentenario." },
      { nombre: "Ronaldo Soares Giovanelli", partidos: 602, epoca: "1988-1998", apodo: "Ronaldo Giovanelli", desc: "Atajador osado con reacción felina pura y personalidad irascible asumiendo los guantes a finales de los ochenta prolongando vallas invictas puras y levantadas copas arrojando número astronómico atestando sus cientos absolutos bajo tres palos madereros." },
      { nombre: "José Maria Rodrigues Alves", partidos: 598, epoca: "1970-1983", apodo: "Zé Maria / Super Zé", desc: "Prototipo puro del lateral fuerte inagotable brasilero cruzándolo a base pulmón subiendo franjas y ganando campeonatos asumiendo entregas físicas colosales casi rasguñando estatuaria y literalmente los seiscientos encajes formales puros de agenda liga local de bases originarias plenas contables de juego liso." }
    ]
  }
};

async function createTanda() {
  for (const [clubId, dataObj] of Object.entries(leyendasP1)) {
    const filePath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'brasil', `${clubId}.json`);
    if (fs.existsSync(filePath)) {
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      fileData.idolos = dataObj.idolos;
      fileData.goleadores_historicos = dataObj.goleadores_historicos;
      fileData.presencias_historicas = dataObj.presencias_historicas;
      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
    }
  }
  console.log("Inyectada Tanda 1 de leyendas premium.");
}

createTanda();
