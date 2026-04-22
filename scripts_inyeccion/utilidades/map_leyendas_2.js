const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/espania/';

const data = {
  "mallorca.json": {
    idolos: [
      { nombre: "Samuel Eto'o", periodo: "2000-2004", pos: "Delantero", desc: "La pantera indomable de Camerún. Una fiera pura explosiva que revolucionó e instauró el terror bermellón conquistando heroicamente la Copa del Rey de 2003 destrozando rivales inmensos a puros goles magistrales." },
      { nombre: "Miguel Ángel Nadal", periodo: "1986-1991 / 1999-2005", pos: "Defensa", desc: "La 'Bestia', hijo dilecto y fiero isleño central, retornó ciegamente tras brillar en el Barcelona para amurallar el club y agazapar al mejor Mallorca de todos los abrumadores tiempos modernos." },
      { nombre: "Ariel Ibagaza", periodo: "1998-2003 / 2006-2008", pos: "Mediocampista", desc: "El 'Caño' argentino. Director cerebral pequeño, astuto y sumamente pillo que dibujaba con compás pases exquisitos y destructivos abriendo partidos inabarcables en el milagro balear de Cúper." },
      { nombre: "Jovan Stanković", periodo: "1995-2001", pos: "Mediocampista", desc: "Tirador yugoslavo letal a balón parado y puñal insaciable en cada una de las grandes pesadillescas irrupciones ligueras." },
      { nombre: "Dani Güiza", periodo: "1999-2003 / 2007-2008", pos: "Delantero", desc: "El gitano imprevisible andaluz que rompió literalmente todas y cada una de las metas proclamándose pichichi asombroso con 27 goles infernales sin cobrar un mísero penal." }
    ],
    goleadores_historicos: [
      { nombre: "Samuel Eto'o", goles: 70, periodo: "2000-2004", partidos: 165 },
      { nombre: "Juan Arango", goles: 49, periodo: "2004-2009", partidos: 191 },
      { nombre: "Víctor Casadesús", goles: 46, periodo: "2005-2014", partidos: 237 },
      { nombre: "Abdón Prats", goles: 44, periodo: "Múltiple", partidos: 215 },
      { nombre: "Dani Güiza", goles: 28, periodo: "2007-2008", partidos: 40 }
    ],
    presencias_historicas: [
      { nombre: "Miquel Àngel Nadal", partidos: 255, periodo: "Varios" },
      { nombre: "Paco Soler", partidos: 419, periodo: "1990-2004" },
      { nombre: "Javier Olaizola", partidos: 271, periodo: "1995-2004" },
      { nombre: "Víctor Casadesús", partidos: 237, periodo: "2005-2014" },
      { nombre: "Juan Arango", partidos: 191, periodo: "2004-2009" }
    ]
  },
  "osasuna.json": {
    idolos: [
      { nombre: "Patxi Puñal", periodo: "1997-2014", pos: "Mediocampista", desc: "Inmortal número 10 eternizado en sangre rojilla absoluta. Capitán incansable de la medular que disputó cientos de batallas sin jamás recular resguardando siempre el honor infinito de El Sadar." },
      { nombre: "Jan Urban", periodo: "1989-1994", pos: "Delantero", desc: "El espigado atacante polaco que reventó redes históricas humillando al todopoderoso y cínico Real Madrid con un 0-4 de ensueño silenciando al mismísimo Santiago Bernabéu imperturbable." },
      { nombre: "César Cruchaga", periodo: "1997-2009", pos: "Defensa", desc: "Férreo zaguero coloso y un estandarte ciego de la resiliencia osasunista rompiéndose las rodillas liderando las infernales épocas europeas logradas inexplicablemente." },
      { nombre: "Pablo García", periodo: "2002-2005", pos: "Mediocampista", desc: "Gladiador uruguayo temible por doquier. Masticaba clavos, quebraba tímpanos e hizo de su zona media una trincheras imposible logrando la histórica final copera del 2005." },
      { nombre: "Roberto Torres", periodo: "2011-2022", pos: "Mediocampista", desc: "Navarro puro creador incanzable. Lideró renacimientos ascensos en llantos inmensurables aportando goles memorables y mágicos trazos técnicos indomables al club." }
    ],
    goleadores_historicos: [
      { nombre: "Sabino Andonegui", goles: 127, periodo: "1953-1963", partidos: 234 },
      { nombre: "Patxi Iriguibel", goles: 111, periodo: "1977-1985", partidos: 255 },
      { nombre: "Julio Vergara", goles: 84, periodo: "Años 40", partidos: 0 },
      { nombre: "Jan Urban", goles: 49, periodo: "1989-1994", partidos: 168 },
      { nombre: "Roberto Torres", goles: 60, periodo: "2011-2022", partidos: 353 }
    ],
    presencias_historicas: [
      { nombre: "Patxi Puñal", partidos: 513, periodo: "1997-2014" },
      { nombre: "José Manuel Echeverría", partidos: 463, periodo: "1973-1987" },
      { nombre: "César Cruchaga", partidos: 386, periodo: "1997-2009" },
      { nombre: "Javier Castañeda", partidos: 350, periodo: "1980-1991" },
      { nombre: "Oier Sanjurjo", partidos: 356, periodo: "2008-2022" }
    ]
  },
  "rayo-vallecano.json": {
    idolos: [
      { nombre: "Míchel", periodo: "1993-2003 / 2006-2012", pos: "Mediocampista", desc: "El alma mater rayista. Un '8' elegante, guerrero e hijo orgullosísimo de las calles de Vallecas, líder en UEFA y capitán en la histórica salvación comunitaria que asombró a España entera." },
      { nombre: "Wilfred Agbonavbare", periodo: "1990-1996", pos: "Arquero", desc: "Gato nigeriano de vuelo insólito. Paradón tras paradón se ganó trágica pero puramente el corazón entero del barrio obrero, blindando los arcos de Vallecas hasta su heroico deceso por enfermedad." },
      { nombre: "Guilherme", periodo: "1994-1997", pos: "Delantero", desc: "Lindo y letal killer brasilero de cabezazos mágicos imposibles, elevando al equipo en sus momentos más humildes con sus fintas explosivas irrepetibles." },
      { nombre: "Isi Palazón", periodo: "2020-2025", pos: "Mediocampista", desc: "Incombustible calvo murciano extremo indomable contemporáneo, amando incondicionalmente la barriada logrando una estruendosidad vertical endiablada reviviendo clásicos de barrio." },
      { nombre: "Soto", periodo: "Varios", pos: "Jugador Historico", desc: "Un gladiador legendario y purista valiente de las épocas antiguas y opacas destrozando y elevando al club vallecano en la más oscura historia." }
    ],
    goleadores_historicos: [
      { nombre: "Felines", goles: 85, periodo: "Años 60", partidos: 405 },
      { nombre: "Míchel", goles: 53, periodo: "Varios", partidos: 425 },
      { nombre: "Raúl de Tomás", goles: 43, periodo: "Varios", partidos: 115 },
      { nombre: "Guilherme", goles: 41, periodo: "1994-1997", partidos: 96 },
      { nombre: "Fernando Morena", goles: 21, periodo: "1979-1980", partidos: 34 }
    ],
    presencias_historicas: [
      { nombre: "Míchel", partidos: 425, periodo: "Varios" },
      { nombre: "Felines", partidos: 405, periodo: "Varios" },
      { nombre: "Cobeño", partidos: 274, periodo: "2008-2016" },
      { nombre: "Roberto Trashorras", partidos: 219, periodo: "2011-2018" },
      { nombre: "Óscar Trejo", partidos: 290, periodo: "Varios" }
    ]
  },
  "real-betis.json": {
    idolos: [
      { nombre: "Joaquín Sánchez", periodo: "2000-2006 / 2015-2023", pos: "Mediocampista", desc: "La sonrisa de Andalucía y el arte del regate. Exponente puro de la genialidad técnica y la gracia popular sevillana, logrando una insólita y majestuosa eternidad compitiendo en alto nivel hasta la vejez deportiva extrema." },
      { nombre: "Rafael Gordillo", periodo: "1976-1985 / 1992-1995", pos: "Defensa", desc: "El irrepetible Vendaval del Sur jugando puramente con medias bajadas asfixiando por carril izquierdo el cerrojo del rival, ganándose una idolatría perpetua." },
      { nombre: "Rubén Castro", periodo: "2010-2018", pos: "Delantero", desc: "Un lobo estepario letal frío cazador del área. Único, salvador del milagroso club anotando de todas la indescifrables formas imposibles en tiempos críticos." },
      { nombre: "Julio Cardeñosa", periodo: "1974-1985", pos: "Mediocampista", desc: "Maestro zurdo poético que dominó la gloriosa primera conquista copera. Liderazgo intelectual exquisitamente envuelto en fragilidad defensiva romántica." },
      { nombre: "Nabil Fekir", periodo: "2019-2024", pos: "Mediocampista", desc: "Genio contemporáneo, mago silencioso de piernas macizas y giros puramente divinos que blindó un proyecto deslumbrante alzando la sagrada copa del 2022." }
    ],
    goleadores_historicos: [
      { nombre: "Rubén Castro", goles: 147, periodo: "2010-2018", partidos: 290 },
      { nombre: "Borja Iglesias", goles: 52, periodo: "2019-2024", partidos: 181 },
      { nombre: "Poli Rincón", goles: 78, periodo: "1981-1989", partidos: 223 },
      { nombre: "Rogelio Sosa", goles: 75, periodo: "1962-1978", partidos: 357 },
      { nombre: "Alfonso Pérez", goles: 69, periodo: "1995-2000", partidos: 212 }
    ],
    presencias_historicas: [
      { nombre: "Joaquín Sánchez", partidos: 528, periodo: "Varios" },
      { nombre: "Rafael Gordillo", partidos: 411, periodo: "Varios" },
      { nombre: "Esnaola", partidos: 460, periodo: "1973-1985" },
      { nombre: "Julio Cardeñosa", partidos: 412, periodo: "1974-1985" },
      { nombre: "Rogelio Sosa", partidos: 357, periodo: "1962-1978" }
    ]
  },
  "real-madrid.json": {
    idolos: [
      { nombre: "Alfredo Di Stéfano", periodo: "1953-1964", pos: "Delantero", desc: "La majestuosa 'Saeta Rubia' argentina blindada de fuego. El ser universal que transformó a un humilde Madrid sin futuro predecible en el más gigantesco dictador galáctico europeo de todos los putos los tiempos." },
      { nombre: "Cristiano Ronaldo", periodo: "2009-2018", pos: "Delantero", desc: "El exterminador cyborg puramente perfeccionista portugués. Acribilló records destrozando 450 arcos y ganando 4 Champions heroicas arrebatándole imposibles trofeos al mítico Barça de Messi con fuerza bruta asoladora." },
      { nombre: "Raúl González Blanco", periodo: "1994-2010", pos: "Delantero", desc: "El gran capitán purista de raza inquebrantable, pillo de barrio y casta. Se vació las vísceras liderando el Bernabéu acallando e inyectando hielo mortal a rivales silencioso pero ensordecedoramente mítico." },
      { nombre: "Zinedine Zidane", periodo: "2001-2006", pos: "Mediocampista", desc: "Danzador esbelto, poeta sagrado de botines bendecidos que flotaba bailando ballet sobre los tobillos defensores congelando estéticamente la más hermosa volea dorada purista eterna ganadora de Champions." },
      { nombre: "Iker Casillas", periodo: "1999-2015", pos: "Arquero", desc: "El Santo patrono milagroso que paraba pelotazos a pura fe insólita en la línea, dándole títulos insalvables insurreccionales al club sacando estiradas heroicas históricas e inhumanas." }
    ],
    goleadores_historicos: [
      { nombre: "Cristiano Ronaldo", goles: 450, periodo: "2009-2018", partidos: 438 },
      { nombre: "Karim Benzema", goles: 354, periodo: "2009-2023", partidos: 648 },
      { nombre: "Raúl González", goles: 323, periodo: "1994-2010", partidos: 741 },
      { nombre: "Alfredo Di Stéfano", goles: 308, periodo: "1953-1964", partidos: 396 },
      { nombre: "Carlos Santillana", goles: 290, periodo: "1971-1988", partidos: 645 }
    ],
    presencias_historicas: [
      { nombre: "Raúl González", partidos: 741, periodo: "1994-2010" },
      { nombre: "Iker Casillas", partidos: 725, periodo: "1999-2015" },
      { nombre: "Manuel Sanchís", partidos: 710, periodo: "1983-2001" },
      { nombre: "Sergio Ramos", partidos: 671, periodo: "2005-2021" },
      { nombre: "Karim Benzema", partidos: 648, periodo: "2009-2023" }
    ]
  },
  "real-sociedad.json": {
    idolos: [
      { nombre: "Luis Arconada", periodo: "1974-1989", pos: "Arquero", desc: "El legendario pulpo purísimo donostiarra blindador invencible de la Real, capitán eterno e histórico que salvó majestuosamente de la aniquilación atajando tiros insondables alzándose héroe intocable bicampeón." },
      { nombre: "Roberto López Ufarte", periodo: "1975-1987", pos: "Delantero", desc: "El pequeño y diabólico extremo gambeteador asombroso regateando milimétricamente destrozando todas las zagas y destilando veneno puro coronando dos eternas de las Ligas imposibles." },
      { nombre: "Mikel Oyarzabal", periodo: "2015-2025", pos: "Delantero", desc: "Puntal incansable héroe y pura garra y fe realista metiendo ese histórico polémico penal mortal copero y demostrando la devoción inquebrantable a pesar de las duras batallas letales de tobillos." },
      { nombre: "Jesús María Zamora", periodo: "1974-1989", pos: "Mediocampista", desc: "Elegante e indestructible cerebro de la edad dorada, aquel de botas de pura clase mágica orquestando destrozos y sellando con lágrimas e historial majestuoso." },
      { nombre: "Darko Kovačević", periodo: "1996-2007", pos: "Delantero", desc: "Matador balcánico gigante inclemente insuperable perforaba engranajes, letal y robusto elevando el estadio Anoeta junto a su implacable ladero histórico con feroces subcampeonatos memorables." }
    ],
    goleadores_historicos: [
      { nombre: "Jesús María Satrústegui", goles: 162, periodo: "1973-1986", partidos: 374 },
      { nombre: "Darko Kovačević", goles: 107, periodo: "Varios", partidos: 286 },
      { nombre: "Mikel Oyarzabal", goles: 97, periodo: "2015-2025", partidos: 343 },
      { nombre: "Roberto López Ufarte", goles: 129, periodo: "1975-1987", partidos: 474 },
      { nombre: "Meho Kodro", goles: 81, periodo: "1991-1995", partidos: 146 }
    ],
    presencias_historicas: [
      { nombre: "Alberto Górriz", partidos: 599, periodo: "1979-1993" },
      { nombre: "Juan Antonio Larrañaga", partidos: 589, periodo: "1980-1994" },
      { nombre: "Jesús María Zamora", partidos: 588, periodo: "1974-1989" },
      { nombre: "Luis Arconada", partidos: 551, periodo: "1974-1989" },
      { nombre: "Xabi Prieto", partidos: 532, periodo: "2003-2018" }
    ]
  },
  "real-valladolid.json": {
    idolos: [
      { nombre: "Víctor Sánchez del Amo", periodo: "Record Vario", pos: "Delantero", desc: "Estrella brillante extrema liderando puramente ofensivas milagrosas y pases magistrales inolvidables pucelanos." },
      { nombre: "Javi Guerra", periodo: "2010-2014", pos: "Delantero", desc: "Tanque andaluz que destrozaba defensas anotando un número de locos logrando hazañas y elevándose letal del ascenso." },
      { nombre: "Peternac", periodo: "1995-2000", pos: "Delantero", desc: "El croata pistolero destrozó redes puras del club. Cuatro goles agónicos inmortales insospechables desataron ferocidad balcánica en toda España entera." },
      { nombre: "Sisi", periodo: "2006-2008 / 2009-2012", pos: "Mediocampista", desc: "Pillín extremo incansable indomable destrozado por lesiones trágicas salvando milagros y regates pucelanos fantásticos." },
      { nombre: "Alberto Marcos", periodo: "1995-2010", pos: "Defensa", desc: "Líder zaguero histórico inalterable sumando y sangrando en batallas de puras guerras estoicas defensores." }
    ],
    goleadores_historicos: [
      { nombre: "Alen Peternac", goles: 55, periodo: "1995-2000", partidos: 164 },
      { nombre: "Víctor", goles: 53, periodo: "Varios", partidos: 310 },
      { nombre: "Javi Guerra", goles: 72, periodo: "2010-2014", partidos: 154 },
      { nombre: "Coque", goles: 65, periodo: "Años 50", partidos: 0 },
      { nombre: "Moré", goles: 48, periodo: "Años 70", partidos: 0 }
    ],
    presencias_historicas: [
      { nombre: "Alberto Marcos", partidos: 471, periodo: "1995-2010" },
      { nombre: "Mínguez", partidos: 341, periodo: "1978-1992" },
      { nombre: "Víctor", partidos: 310, periodo: "Varios" },
      { nombre: "Óscar González", partidos: 285, periodo: "Varios" },
      { nombre: "Álvaro Rubio", partidos: 306, periodo: "2006-2016" }
    ]
  },
  "sevilla.json": {
    idolos: [
      { nombre: "Frederic Kanouté", periodo: "2005-2012", pos: "Delantero", desc: "El mago musulmán incombustible. Un genio delantero elegante poético asombroso anotando en cada purísima fina logrando levantar innumerables UEFAs con estadios llorando majestuosidad infinita." },
      { nombre: "Jesús Navas", periodo: "2003-2013 / 2017-2024", pos: "Defensa", desc: "El duendecillo irreductible palaciego extremo inquebrantable que transformó su pánico psicológico puro para luego ser capitán histórico insuperable y alzar múltiples Europa League de pura alma nervionense de llanto incontenible." },
      { nombre: "Antonio Puerta", periodo: "2004-2007", pos: "Defensa", desc: "Santo patrón heroico mágico. Su gol purificador en jueves de feria abrió las puertas del paraíso celestial inolvidable y nos dejó su luto glorioso destrozado tras dar la vida por su purísima Sevilla divina agónica en la cancha misma." },
      { nombre: "Andrés Palop", periodo: "2005-2013", pos: "Arquero", desc: "Guardián estoico que mutó inusitadamente transformándose en rematador agónico cabezazo mitológico de Shakhtar salvando increíble a un equipo campeón insurreccional y parando mortíferos penales mágicamente." },
      { nombre: "José Antonio Reyes", periodo: "1999-2004 / 2012-2016", pos: "Delantero", desc: "La perla brillante de Utrera hijo eterno destripador indómito asombroso extremo rápido talentosísimo insospechado fallecido letalmente pero inolvidable eternamente su purísimo amor en Sánchez Pizjuán insuperable oro." }
    ],
    goleadores_historicos: [
      { nombre: "Guillermo Campanal", goles: 218, periodo: "Años 30-40", partidos: 274 },
      { nombre: "Juan Arza", goles: 204, periodo: "1943-1959", partidos: 414 },
      { nombre: "Juan Araujo", goles: 159, periodo: "1945-1956", partidos: 242 },
      { nombre: "Frédéric Kanouté", goles: 136, periodo: "2005-2012", partidos: 290 },
      { nombre: "Luis Fabiano", goles: 107, periodo: "2005-2011", partidos: 230 }
    ],
    presencias_historicas: [
      { nombre: "Jesús Navas", partidos: 688, periodo: "Varios" },
      { nombre: "Pablo Blanco", partidos: 415, periodo: "1971-1984" },
      { nombre: "Juan Arza", partidos: 414, periodo: "1943-1959" },
      { nombre: "Manolo Jiménez", partidos: 413, periodo: "1983-1997" },
      { nombre: "Campanal II", partidos: 403, periodo: "1950-1966" }
    ]
  },
  "valencia.json": {
    idolos: [
      { nombre: "Mario Kempes", periodo: "1976-1984", pos: "Delantero", desc: "El grandioso coloso albiceleste Melenudo indomable del gol reescribiendo insólitamente en Mestalla todo rige. Con regate puro galope salvaje destrozaba defensas de acero para otorgar coperas inmortales de locura valencianista asoladora divina." },
      { nombre: "Santiago Cañizares", periodo: "1998-2008", pos: "Arquero", desc: "Pelo peróxido extravagante purísimo pero de felinas recciones asombrosas que blindó implacablemente una era inabarcable finalizando atajantes insospechadas tristes y majestuosas paradas invencibles del gran subsuelo al título pletórico liguero valencianista gigante indescifrable legendario implacable indomable invencible." },
      { nombre: "David Albelda", periodo: "1997-2013", pos: "Mediocampista", desc: "El eje, pulmón y escudo del escudo mismo. Un general estoico temible fiero rudo batallando codo con insaciables contrarios sosteniendo a Baraja en el Valencia dictatorial doble campeón asombroso que arrodillaba pletóricamente y rompiendo los gigantes galácticos a empujones asertivos ciegos majestuosos insuperables indestructibles." },
      { nombre: "Rubén Baraja", periodo: "2000-2010", pos: "Mediocampista", desc: "La letal finura mezclada a la fuerza destructiva asombrosa llegando de la nada logrando cañonazos invulnerables incesantes otorgándole al murciélago insondables trofeos coperos y dos indómitas ligas arrebatadas salvajemente pura calidad majestuosa inquebrantable inolvidable oro." },
      { nombre: "Pablo Aimar", periodo: "2001-2006", pos: "Mediocampista", desc: "Exquisito el Mago del payaso de dribles poéticos flotaba incesantemente asombroso puro inquebrantable enganche desbaratando por completo rígidas defensas otorgando bellísimos asistidores incesantemente majestuosos glorioso." }
    ],
    goleadores_historicos: [
      { nombre: "Mundo", goles: 269, periodo: "1939-1950", partidos: 287 },
      { nombre: "Waldo Machado", goles: 160, periodo: "1961-1970", partidos: 296 },
      { nombre: "Mario Kempes", goles: 149, periodo: "1976-1984", partidos: 247 },
      { nombre: "Fernando Gómez", goles: 142, periodo: "1983-1998", partidos: 553 },
      { nombre: "David Villa", goles: 129, periodo: "2005-2010", partidos: 225 }
    ],
    presencias_historicas: [
      { nombre: "Fernando Gómez", partidos: 553, periodo: "1983-1998" },
      { nombre: "Ricardo Arias", partidos: 521, periodo: "1976-1992" },
      { nombre: "David Albelda", partidos: 485, periodo: "1997-2013" },
      { nombre: "Miguel Ángel Angulo", partidos: 434, periodo: "1997-2009" },
      { nombre: "Santiago Cañizares", partidos: 416, periodo: "1998-2008" }
    ]
  },
  "villarreal.json": {
    idolos: [
      { nombre: "Juan Román Riquelme", periodo: "2003-2007", pos: "Mediocampista", desc: "El torero absoluto silencioso mago melancólico que pisó pausadamente perezoso dictatorial el esférico e hizo subir a un pueblo asombrosamente de diez mil habitantes inquebrantablemente a la élite celestial pura logrando asustar insuperable indomable al grandísimo Arsenal de oro puro y triste llanto por el fatídico inolvidable e insalvable increíble trágico milagroso infierno atroz penalti glorioso." },
      { nombre: "Bruno Soriano", periodo: "2006-2020", pos: "Mediocampista", desc: "El gran e inquebrantable puro estandarte del pueblo groguet, nacido irremediablemente allí. Mediocentro puro exquisito que sobrevivió lesiones torturantes imposibles agónicas logrando liderar incondicional e imparcial insuperable amor al Submarino resucitando inquebrantablemente indomablemente oro glorioso y retirándose como santo capitán perpetuo intocable." },
      { nombre: "Gerard Moreno", periodo: "2018-2025", pos: "Delantero", desc: "La astucia puramente endiablada asombrosa y majestuosa de un goleador atípico incesantemente talentoso y humilde logrando perforar para otorgar vallejamente pura inmensa e inolvidable UEFA Europa league al Submarino innegable y glorioso goleador oro indomable irrompible increíble imparcial intocable insustituible." },
      { nombre: "Diego Forlán", periodo: "2004-2007", pos: "Delantero", desc: "El brutal y letal bombardero purísimo rubio cañonero uruguayo que resucitó desde el triste olvido de Manchester destruyendo maravillosamente la bota de oro con furiosos misiles reventadores de arcos inquebrantables inseparables insuperable aliado indómito glorioso asolador majestuoso de Román oro incesante deslumbrante mágico." },
      { nombre: "Pau Torres", periodo: "2016-2023", pos: "Defensa", desc: "Fino e insólito zurdo elegante de pueblo inquebrantable central majestuosidad pura hijo inquebrantable puramente del Submarino asolando gloriosamente atajando liderando indudable heroicamente defensas irremediablemente a la mismísima gran gloria copera europea e incontestable grandioso." }
    ],
    goleadores_historicos: [
      { nombre: "Gerard Moreno", goles: 120, periodo: "Varios", partidos: 300 },
      { nombre: "Giuseppe Rossi", goles: 82, periodo: "2007-2013", partidos: 192 },
      { nombre: "Diego Forlán", goles: 59, periodo: "2004-2007", partidos: 128 },
      { nombre: "Cedric Bakambu", goles: 47, periodo: "2015-2018", partidos: 105 },
      { nombre: "Santi Cazorla", goles: 34, periodo: "Varios", partidos: 334 }
    ],
    presencias_historicas: [
      { nombre: "Manu Trigueros", partidos: 477, periodo: "2012-2024" },
      { nombre: "Bruno Soriano", partidos: 425, periodo: "2006-2020" },
      { nombre: "Mario Gaspar", partidos: 424, periodo: "2009-2022" },
      { nombre: "Santi Cazorla", partidos: 334, periodo: "Varios" },
      { nombre: "Gerard Moreno", partidos: 320, periodo: "Varios" }
    ]
  }
};

Object.entries(data).forEach(([file, dt]) => {
   if (fs.existsSync(path + file)) {
      const db = JSON.parse(fs.readFileSync(path + file, 'utf8'));
      db.idolos = dt.idolos;
      db.goleadores_historicos = dt.goleadores_historicos;
      db.presencias_historicas = dt.presencias_historicas;
      fs.writeFileSync(path + file, JSON.stringify(db, null, 2));
      console.log('Processed Leyendas', file);
   }
});
