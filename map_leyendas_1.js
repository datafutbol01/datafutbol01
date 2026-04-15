const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/espania/';

const data = {
  "alaves.json": {
    idolos: [
      { nombre: "Javi Moreno", periodo: "1998-2001", pos: "Delantero", desc: "El terror goleador que lideró a ese glorioso y modesto Glorioso que paralizó a Europa y llevó al Alavés a la inolvidable y agónica final de Dortmund." },
      { nombre: "Manu García", periodo: "2012-2021", pos: "Mediocampista", desc: "Corazón puramente vitoriano. Anotó el glorioso gol del ascenso en 2016 y fue el eterno capitán que jamás claudicó en la medular de Mendizorroza." },
      { nombre: "Cosmin Contra", periodo: "1999-2001", pos: "Defensa", desc: "Carrilero feroz rumano que destrozó cinturas y bandas rivales enteras durante el apogeo más salvaje en la Copa de la UEFA." },
      { nombre: "Pablo Gómez", periodo: "1996-2004", pos: "Mediocampista", desc: "El reloj biológico e insaciable del centro del campo albiazul durante el trayecto más victorioso e internacional del club en su siglo entero." },
      { nombre: "Fernando Pacheco", periodo: "2015-2022", pos: "Arquero", desc: "El santo guardián que forjó un imperio bajo los tres palos, logrando convertirse de largo en uno de los porteros más determinantes de España con la casaca alavesista." }
    ],
    goleadores_historicos: [
      { nombre: "Julio Remacha", goles: 54, periodo: "Años 50", partidos: "-" },
      { nombre: "Rubén Navarro", goles: 48, periodo: "2001-2007", partidos: "-" },
      { nombre: "Javi Moreno", goles: 39, periodo: "1998-2001", partidos: "-" },
      { nombre: "Magno Mocelin", goles: 37, periodo: "1998-2004", partidos: "-" },
      { nombre: "Joselu", goles: 36, periodo: "2019-2022", partidos: "-" }
    ],
    presencias_historicas: [
      { nombre: "Martín Astudillo", partidos: 346, periodo: "1999-2008" },
      { nombre: "Manu García", partidos: 308, periodo: "2012-2021" },
      { nombre: "Víctor Laguardia", partidos: 285, periodo: "2014-2023" },
      { nombre: "Pablo Gómez", partidos: 279, periodo: "1996-2004" },
      { nombre: "Fernando Pacheco", partidos: 253, periodo: "2015-2022" }
    ]
  },
  "athletic-club.json": {
    idolos: [
      { nombre: "Pichichi / Rafael Moreno", periodo: "1911-1921", pos: "Delantero", desc: "El cañonero mitológico de la prehistoria del balompié español, cuya legendaria estampa con el pañuelo anudado a la cabeza le dio nombre eterno a todos los goleadores ibéricos." },
      { nombre: "José Ángel Iribar", periodo: "1962-1980", pos: "Arquero", desc: "El verdadero muro de San Mamés. 'El Chopo' era un coloso que desató el llanto, el amor y la reverencia sagrada de todos los bilbaínos cubriendo la portería por casi 20 años." },
      { nombre: "Julen Guerrero", periodo: "1992-2006", pos: "Mediocampista", desc: "El rostro inquebrantable de los años 90. Un talentoso y carismático canterano que se negó al mundo exterior y prefirió desgastar sus años prime blindado de amor a la casaca rojiblanca." },
      { nombre: "Dani Ruiz-Bazán", periodo: "1974-1986", pos: "Delantero", desc: "Capitán majestuoso de la legendaria era de los 80. Su frialdad robótica desde los once metros y su carácter indomable le permitieron alzar dos ligas pesadas ante los ricos del país." },
      { nombre: "Aritz Aduriz", periodo: "2002-2020", pos: "Delantero", desc: "El delantero del milagro que envejecía como el vino más caro del mundo. Dejó goles monumentales colgados de volea con un físico imposible e inalterable al paso del tiempo." }
    ],
    goleadores_historicos: [
      { nombre: "Telmo Zarra", goles: 335, periodo: "1940-1955", partidos: 354 },
      { nombre: "Bata", goles: 208, periodo: "1929-1936", partidos: 208 },
      { nombre: "Dani", goles: 199, periodo: "1974-1986", partidos: 402 },
      { nombre: "Guillermo Gorostiza", goles: 196, periodo: "1929-1940", partidos: 256 },
      { nombre: "José Iraragorri", goles: 179, periodo: "1929-1949", partidos: 240 }
    ],
    presencias_historicas: [
      { nombre: "José Ángel Iribar", partidos: 614, periodo: "1962-1980" },
      { nombre: "Iker Muniain", partidos: 560, periodo: "2009-2024" },
      { nombre: "Txetxu Rojo", partidos: 541, periodo: "1965-1982" },
      { nombre: "Óscar de Marcos", partidos: 532, periodo: "2009-2024" },
      { nombre: "Joseba Etxeberria", partidos: 514, periodo: "1995-2010" }
    ]
  },
  "atletico-madrid.json": {
    idolos: [
      { nombre: "Luis Aragonés", periodo: "1964-1974", pos: "Mediocampista", desc: "El genio, el 'Zapatones', el hombre que personificó qué demonios significa el Atlético. Como jugador reventó arcos con tiros libres monumentales, como técnico se volvió Dios guiando al club desde el infierno hasta la gloria." },
      { nombre: "Diego Simeone", periodo: "1994-2005", pos: "Mediocampista", desc: "El guerrero caníbal en pantalones cortos. Líder espiritual innegable del glorioso Doblete de 1996, destrozando toda expectativa con el cuchillo sudamericano siempre entre los dientes." },
      { nombre: "Fernando Torres", periodo: "2001-2018", pos: "Delantero", desc: "El Niño. La figura mesiánica del Manzanares que salvó al club anímica y deportivamente durante su dolorosa estancia en Segunda, cargando con el peso del amor puro colchonero." },
      { nombre: "Gabi Fernández", periodo: "2003-2018", pos: "Mediocampista", desc: "El gran capitán de la era de oro moderna. Representó el despliegue puramente colchonero, vaciándose las vísceras con liderazgo obrero levantando una liga de sangre sudor y lágrimas ante el Madrid de CR7 y el Barcelona de Messi." },
      { nombre: "Paulo Futre", periodo: "1987-1993", pos: "Delantero", desc: "Una bestia alada que destruyó mentalmente al Madrid en las finales de copa. Desequilibrio, regate venenoso y puro carácter insurreccional en una de las etapas institucionales más ardientes del club." }
    ],
    goleadores_historicos: [
      { nombre: "Antoine Griezmann", goles: 181, periodo: "2014-2024", partidos: 389 },
      { nombre: "Luis Aragonés", goles: 172, periodo: "1964-1974", partidos: 368 },
      { nombre: "Adrián Escudero", goles: 169, periodo: "1945-1958", partidos: 330 },
      { nombre: "Paco Campos", goles: 153, periodo: "1939-1948", partidos: 219 },
      { nombre: "José Gárate", goles: 136, periodo: "1966-1977", partidos: 327 }
    ],
    presencias_historicas: [
      { nombre: "Koke Resurrección", partidos: 638, periodo: "2009-2024" },
      { nombre: "Adelardo Rodríguez", partidos: 553, periodo: "1959-1976" },
      { nombre: "Tomás Reñones", partidos: 483, periodo: "1984-1996" },
      { nombre: "Enrique Collar", partidos: 470, periodo: "1953-1969" },
      { nombre: "Jan Oblak", partidos: 446, periodo: "2014-2024" }
    ]
  },
  "barcelona.json": {
    idolos: [
      { nombre: "Johan Cruyff", periodo: "1973-1978", pos: "Mediocampista", desc: "El Holandés Volador revolucionó para siempre a nivel filosófico el juego posicional del Barcelona en el pasto, destruyendo una sequía de 14 años e instaurando el gen estético infinito." },
      { nombre: "Ronaldinho", periodo: "2003-2008", pos: "Delantero", desc: "La sonrisa que salvó al barcelonismo de las lágrimas de la mediocridad. Puso de rodillas al Bernabéu con destrozos estéticos inalcanzables y revivió por sí solo una de las maquinarias de fútbol más hermosas del mundo." },
      { nombre: "Dani Alves", periodo: "2008-2022", pos: "Defensa", desc: "Un huracán abrasador que transformó un mísero lateral derecho en la mejor arma creativa del mundo. Generó una telepatía mágica e histórica asociándose en paredes de un metro contra defensores impotentes." },
      { nombre: "Andrés Iniesta", periodo: "2002-2018", pos: "Mediocampista", desc: "El ilusionista callado y pálido que levitaba entre gigantes de la cancha, con esa 'croqueta' histórica que detuvo el tiempo en el agónico trallazo en la semifinal salvadora de Stamford Bridge." },
      { nombre: "Carles Puyol", periodo: "1999-2014", pos: "Defensa", desc: "El guerrero mitológico, el gran caudillo del corazón culé que sangraba por el club rompiendo pómulos si era necesario para reponer los miedos a la defensa del Dream Team absoluto." }
    ],
    goleadores_historicos: [
      { nombre: "Lionel Messi", goles: 672, periodo: "2004-2021", partidos: 778 },
      { nombre: "César Rodríguez", goles: 232, periodo: "1942-1955", partidos: 351 },
      { nombre: "Luis Suárez", goles: 198, periodo: "2014-2020", partidos: 283 },
      { nombre: "Ladislao Kubala", goles: 194, periodo: "1951-1961", partidos: 256 },
      { nombre: "Josep Samitier", goles: 184, periodo: "1919-1932", partidos: 232 }
    ],
    presencias_historicas: [
      { nombre: "Lionel Messi", partidos: 778, periodo: "2004-2021" },
      { nombre: "Xavi Hernández", partidos: 767, periodo: "1998-2015" },
      { nombre: "Sergio Busquets", partidos: 722, periodo: "2008-2023" },
      { nombre: "Andrés Iniesta", partidos: 674, periodo: "2002-2018" },
      { nombre: "Gerard Piqué", partidos: 616, periodo: "2008-2022" }
    ]
  },
  "celta-vigo.json": {
    idolos: [
      { nombre: "Alexander Mostovoi", periodo: "1996-2004", pos: "Mediocampista", desc: "El Zar de Balaídos que lideró a pura magia y anarquía el brillante e indomable 'Eurocelta', transformándolo en la élite puramente romántica de LaLiga a través del arte eslavo." },
      { nombre: "Valery Karpin", periodo: "1997-2002", pos: "Mediocampista", desc: "Extremo feroz y de acero ruso. Asociado mortalmente al propio Mostovoi con un instinto asesino que quemaba el suelo gallego a favor de pura entrega irascible e indómita." },
      { nombre: "Gustavo López", periodo: "1999-2007", pos: "Delantero", desc: "El zurdo eléctrico sudamericano que devoró carriles contrarios y sirvió pases maravillosos a los legendarios nueves, destilando fuego en noches míticas inolvidables ante la Juventus y el Benfica." },
      { nombre: "Hugo Mallo", periodo: "2009-2023", pos: "Defensa", desc: "Caudillo contemporáneo criado en la pura cantera olívica, el león lateral derecho que lo dejó absolutamente todo logrando ascender al equipo y liderarlo en campos gélidos europeos de Mánchester." },
      { nombre: "Iago Aspas", periodo: "2008-2024", pos: "Delantero", desc: "El muchacho descalzo de Moaña. Es literal y poéticamente el Celta de Vigo hecho hombre: los salvó solos innumerables veces del amargo descenso inventando milagros con su zurda gloriosa." }
    ],
    goleadores_historicos: [
      { nombre: "Iago Aspas", goles: 204, periodo: "2008-2024", partidos: 493 },
      { nombre: "Vlado Gudelj", goles: 113, periodo: "1991-1999", partidos: 258 },
      { nombre: "Pahiño", goles: 91, periodo: "1943-1948", partidos: 104 },
      { nombre: "Catanha", goles: 46, periodo: "2000-2004", partidos: 139 },
      { nombre: "Nolito", goles: 40, periodo: "2013-2020", partidos: 130 }
    ],
    presencias_historicas: [
      { nombre: "Iago Aspas", partidos: 500, periodo: "2008-2024" },
      { nombre: "Hugo Mallo", partidos: 449, periodo: "2009-2023" },
      { nombre: "Atilano Vecino", partidos: 393, periodo: "1982-1994" },
      { nombre: "Juan Fernández", partidos: 348, periodo: "1969-1980" },
      { nombre: "Vlado Gudelj", partidos: 258, periodo: "1991-1999" }
    ]
  },
  "espanyol.json": {
    idolos: [
      { nombre: "Raúl Tamudo", periodo: "1996-2010", pos: "Delantero", desc: "El cazador incombustible perico, y dueño del 'Tamudazo' mortal en el Camp Nou que hirió de muerte al clásico barcelonismo. Máxima expresión de la dignidad rebelde blanquiazul." },
      { nombre: "Dani Jarque", periodo: "2002-2009", pos: "Defensa", desc: "El gran, gran y eterno Capitán eterno central inquebrantable cuyo llanto de muerte dejó helado a Montjuïc, transformándose tras su trágica pérdida en la máxima santidad celestial del club para siempre." },
      { nombre: "Thomas N'Kono", periodo: "1982-1990", pos: "Arquero", desc: "Felino camerunés pionero que usaba pantalones largos negros sin importar el calor asfixiante, paralizando a base de gigantescos y colosales instintos bajo los palos." },
      { nombre: "Luis García", periodo: "2005-2011", pos: "Delantero", desc: "Asturiano indomable de entrega titánica que unió a la grada y a su magia en un título épico copero glorioso cerrando la inolvidable década en Barcelona." },
      { nombre: "Iván de la Peña", periodo: "2002-2011", pos: "Mediocampista", desc: "El genio pelado y resentido de su descarte azulgrana. Inventó los pases poéticos y los regates inalcanzables reviviendo la médula de las mejores gestas milagrosas en competiciones de la copa UEFA." }
    ],
    goleadores_historicos: [
      { nombre: "Raúl Tamudo", goles: 140, periodo: "1996-2010", partidos: 389 },
      { nombre: "Marañón", goles: 144, periodo: "1974-1983", partidos: 261 },
      { nombre: "Julián Arcas", goles: 86, periodo: "1946-1958", partidos: 236 },
      { nombre: "Cayetano Ré", goles: 61, periodo: "1966-1971", partidos: 146 },
      { nombre: "Luis García", goles: 60, periodo: "2005-2011", partidos: 262 }
    ],
    presencias_historicas: [
      { nombre: "Raúl Tamudo", partidos: 389, periodo: "1996-2010" },
      { nombre: "Antonio Argilés", partidos: 301, periodo: "1950-1962" },
      { nombre: "Javi López", partidos: 283, periodo: "2009-2020" },
      { nombre: "Mauricio Pochettino", partidos: 275, periodo: "1994-2006" },
      { nombre: "Sergi Darder", partidos: 245, periodo: "2017-2023" }
    ]
  },
  "getafe.json": {
    idolos: [
      { nombre: "Manu del Moral", periodo: "2006-2011", pos: "Delantero", desc: "El caballero delantero incansable que elevóa con magia simple a los modestos del sur madrileño en aquellos años fantásticos dominando casi batallas ante el Bayern en la Copa UEFA." },
      { nombre: "Gabi", periodo: "2004-2005", pos: "Mediocampista", desc: "Aunque fugaz, dejó una inmensa y colosal enseñanza sobre agresividad técnica pura antes de brillar colosalmente como ícono universal inquebrantable." },
      { nombre: "Sergio Pachón", periodo: "2003-2007", pos: "Delantero", desc: "Anotó 4 goles inmortales e imposibles ante el Tenerife logrando el mágico pero doloroso ansiado ascenso del 2004 metiéndoles en la élite." },
      { nombre: "Abbondanzieri", periodo: "2006-2009", pos: "Arquero", desc: "Mítico trotamundos de Boca Juniors, el Pato trajo fiabilidad veterana infinita adueñándose de un premio Zamora inolvidable blindando al equipo humilde en la liga de estrellas rojas." },
      { nombre: "Jaime Gavilán", periodo: "2007-2014", pos: "Mediocampista", desc: "El veloz correcaminos del ala zurda asumiendo orgullosamente la capitanía blindando la mejor época dorada de final copero jamás lograda." }
    ],
    goleadores_historicos: [
      { nombre: "Jorge Molina", goles: 52, periodo: "2016-2020", partidos: 163 },
      { nombre: "Ángel Rodríguez", goles: 46, periodo: "2017-2021", partidos: 153 },
      { nombre: "Enes Ünal", goles: 38, periodo: "2020-2024", partidos: 109 },
      { nombre: "Manu del Moral", goles: 37, periodo: "2006-2011", partidos: 159 },
      { nombre: "Casquero", goles: 21, periodo: "2006-2012", partidos: 190 }
    ],
    presencias_historicas: [
      { nombre: "Djené Dakonam", partidos: 275, periodo: "2017-2024" },
      { nombre: "Cata Díaz", partidos: 237, periodo: "2007-2012" },
      { nombre: "Casquero", partidos: 190, periodo: "2006-2012" },
      { nombre: "Jaime Gavilán", partidos: 184, periodo: "2007-2014" },
      { nombre: "David Soria", partidos: 211, periodo: "2018-2024" }
    ]
  },
  "girona.json": {
    idolos: [
      { nombre: "Cristhian Stuani", periodo: "2017-2025", pos: "Delantero", desc: "Una fiera implacable. El gran salvador charrúa uruguayo que jamás declinó marchándose en los amargos descensos a costa de repletar Montilivi con cien goles de la pura gloria sagrada del ascenso a la élite de Champions." },
      { nombre: "Portu", periodo: "2016-2019 / 2023-2025", pos: "Delantero", desc: "El rayo hiperactivo insaciable. Desbarató defensas puramente corriendo logrando el legendario ascenso del club y firmando con creces su histórica incursión del 2024." },
      { nombre: "Aleix García", periodo: "2017-2024", pos: "Mediocampista", desc: "El metrónomo brillante indiscutible absoluto catalán que condujo magistralmente con toques suaves el ineludible paso hacia la UEFA Champions con proezas en el Bernabéu." },
      { nombre: "Borja García", periodo: "2015-2024", pos: "Mediocampista", desc: "Mito local intocable para armar juego que sostuvo un amor incondicional desde el fango de segunda aguantando hasta tocar lo más alto e histórico." },
      { nombre: "José Aurelio Suárez", periodo: "2018-2021", pos: "Arquero", desc: "Dando cara al frente, el joven contuvo estoicismo ante las temporadas erráticas de supervivencia del ascenso y su mito forjó un inicio blindable a la portería modesta local." }
    ],
    goleadores_historicos: [
      { nombre: "Cristhian Stuani", goles: 130, periodo: "2017-2025", partidos: 247 },
      { nombre: "Marc Castells", goles: 34, periodo: "2015-2020", partidos: 0 },
      { nombre: "Portu", goles: 38, periodo: "Múltiple", partidos: 120 },
      { nombre: "Artem Dovbyk", goles: 24, periodo: "2023-2024", partidos: 36 },
      { nombre: "Jito", goles: 22, periodo: "2004-2006", partidos: 0 }
    ],
    presencias_historicas: [
      { nombre: "Cristhian Stuani", partidos: 247, periodo: "2017-2025" },
      { nombre: "Borja García", partidos: 233, periodo: "2015-2024" },
      { nombre: "Juanpe Ramírez", partidos: 242, periodo: "2016-2025" },
      { nombre: "Eloi Amagat", partidos: 198, periodo: "2012-2018" },
      { nombre: "Bernardo Espinosa", partidos: 174, periodo: "2017-2024" }
    ]
  },
  "las-palmas.json": {
    idolos: [
      { nombre: "Juan Carlos Valerón", periodo: "1995-1997 / 2013-2016", pos: "Mediocampista", desc: "El flaco del toque mágico. Creador puramente poético y caballeroso de las Islas Canarias brindando asistencias celestiales blindadas de compasión en su romántico regreso a Segunda en 2013 para subir a los suyos." },
      { nombre: "Germán Dévora", periodo: "1962-1978", pos: "Mediocampista", desc: "El Maestro. Arquitecto de una etapa dorada y legendaria donde el equipo amarillo disputó una final de copa e inventaba fútbol inquebrantable asombroso del medio hacia la ofensiva." },
      { nombre: "Tonono", periodo: "1962-1975", pos: "Defensa", desc: "Gran líbero impecable de pulcritud insólita en la defensa local, que le permitía interceptar absolutamente todo desangrándose dolorosamente hasta morir trágicamente meses después con pulmonía en la isla." },
      { nombre: "Jonathan Viera", periodo: "2010-2023", pos: "Mediocampista", desc: "El chicle callejero de mil diabluras insulares y dueño del juego pillo moderno sacando él solo en su mochila toda clase de apuros para colocar nuevamente al club canario bajo puros vítores y regates descarados." },
      { nombre: "Orlando Suárez", periodo: "1990-2003", pos: "Delantero", desc: "El niño gordito que desató en furiosos remates todo un fervor insular blindando de puras esperanzas oscuras un club canario en la era vacía y dolorosa de los lejanísimos años 90." }
    ],
    goleadores_historicos: [
      { nombre: "Germán Dévora", goles: 119, periodo: "1962-1978", partidos: 453 },
      { nombre: "Orlando Suárez", goles: 97, periodo: "1990-2003", partidos: 367 },
      { nombre: "Koke Contreras", goles: 92, periodo: "1983-1989", partidos: 257 },
      { nombre: "Marcos Márquez", goles: 73, periodo: "2005-2010", partidos: 196 },
      { nombre: "Rubén Castro", goles: 71, periodo: "2000-2004 / 2018", partidos: 167 }
    ],
    presencias_historicas: [
      { nombre: "Germán Dévora", partidos: 453, periodo: "1962-1978" },
      { nombre: "Paco Castellano", partidos: 433, periodo: "1964-1978" },
      { nombre: "Guillermo Hernández", partidos: 426, periodo: "1969-1980" },
      { nombre: "Tonono", partidos: 436, periodo: "1962-1975" },
      { nombre: "Roque Díaz", partidos: 375, periodo: "1968-1980" }
    ]
  },
  "leganes.json": {
    idolos: [
      { nombre: "Martín Mantovani", periodo: "2013-2018", pos: "Defensa", desc: "Pelado carismático líder que sacó espinas indomables desde Segunda B hasta subir milagrosamente al pepinero a puras lágrimas en la insólita élite moderna española en Anduva." },
      { nombre: "Gabriel Pires", periodo: "2015-2018", pos: "Mediocampista", desc: "Una clase puramente celestial y exotica brasilera perdida incompresiblemente en un club férreo madrileño asombrando Butarque en grandes batallas colosales copera." },
      { nombre: "Miguel Ángel Guerrero", periodo: "2016-2020", pos: "Delantero", desc: "Peleó cada balón contra aceros puros y se redefinió como guerrero eterno logrando permanencias angustiadas que eran puras victorias del espíritu perplejo de Leganés." },
      { nombre: "Serantes", periodo: "2014-2018", pos: "Arquero", desc: "Portero y héroe enmascarado humilde cuyas palomitas evitaron mil y unas humillaciones letales, construyendo al arquero y referente más querido de todo el poblado." },
      { nombre: "Eraso", periodo: "2013-2022", pos: "Mediocampista", desc: "Jugó y sintió al Leganés tras idas y vueltas desangrándose en el mediocampo del sur logrando batallando como titanes históricos contra ricos acaudalados inigualables." }
    ],
    goleadores_historicos: [
      { nombre: "Miguel Ángel", goles: 65, periodo: "Años 90", partidos: 0 },
      { nombre: "Szymanowski", goles: 23, periodo: "2015-2020", partidos: 86 },
      { nombre: "Guido Carrillo", goles: 11, periodo: "2018-2020", partidos: 60 },
      { nombre: "Youssef En-Nesyri", goles: 15, periodo: "2018-2020", partidos: 53 },
      { nombre: "Miguel de la Fuente", goles: 13, periodo: "2023-2025", partidos: 30 }
    ],
    presencias_historicas: [
      { nombre: "Martín Mantovani", partidos: 167, periodo: "2013-2018" },
      { nombre: "Rubén Pérez", partidos: 154, periodo: "2016-2021" },
      { nombre: "Eraso", partidos: 180, periodo: "2013-2022" },
      { nombre: "Unai Bustinza", partidos: 160, periodo: "2015-2022" },
      { nombre: "Rodrigo Tarín", partidos: 106, periodo: "2018-2022" }
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
