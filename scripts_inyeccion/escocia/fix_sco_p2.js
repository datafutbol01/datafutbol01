const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/escocia/';

const data = {
  "rangers": {
    "idolos": [
      { "nombre": "Jim Baxter", "desc": "Época: 1960-1965, 1969-1970 | Presencias: 254 | Goles: 24. Apodado 'Slim Jim', el deslumbrante mediocampista marcó época impartiendo clases de talento y técnica pura. Sus regates humillaron defensas enteras forjando un estatus legendario en las retinas de los aficionados de Ibrox." },
      { "nombre": "Brian Laudrup", "desc": "Época: 1994-1998 | Presencias: 116 | Goles: 33. Elegante y resolutivo, el danés orquestó los triunfos de los famosos 'Nueve Seguidos'. Un mediocampista superlativo que coleccionó distinciones individuales y enamoró a la grada con su velocidad electrizante." },
      { "nombre": "Paul Gascoigne", "desc": "Época: 1995-1998 | Presencias: 104 | Goles: 39. Genio desequilibrante del fútbol mundial que deslumbró en tierras escocesas. El talentoso y controversial mediocentro desató eufóricas celebraciones conquistando al público mediante destellos técnicos fenomenales y goles sublimes." },
      { "nombre": "Richard Gough", "desc": "Época: 1987-1997 | Presencias: 427 | Goles: 37. El gran capitán de los nueve laureles consecutivos. Férreo zaguero que brindaba absoluta seguridad a la última línea, sumando un liderazgo indispensable para consolidar la etapa más brillante del club." },
      { "nombre": "Sandy Jardine", "desc": "Época: 1964-1982 | Presencias: 674 | Goles: 77. Lateral ofensivo incombustible que participó gloriosamente de la histórica conquista continental en Barcelona. Un profesional intachable que cruzó tres décadas sirviendo íntegramente a los intereses de la institución." }
    ],
    "goleadores": [
      { "nombre": "Ally McCoist", "cant": 355, "desc": "Época: 1983-1998 | Presencias: 581 | Goles: 355. El letal 'Super Ally' destrozó arqueros durante décadas anotando goles de todas las facturas. Un goleador extraordinario que ostenta dos Botas de Oro europeas y el récord histórico absoluto del club." },
      { "nombre": "Bob McPhail", "cant": 261, "desc": "Época: 1927-1939 | Presencias: 408 | Goles: 261. Ídolo del periodo pre-guerra que estableció cuotas altísimas de conversión. Destruyó esquemas defensivos liderando las estadísticas como el mayor artillero de su época." },
      { "nombre": "Jimmy Smith", "cant": 249, "desc": "Época: 1928-1946 | Presencias: 259 | Goles: 249. Rematador prolífico de registro casi infalible con un promedio de gol atronador. Llevó el poderío de Glasgow a liderar el certamen nacional con definiciones inolvidables de alta precisión." },
      { "nombre": "Ralph Brand", "cant": 206, "desc": "Época: 1954-1965 | Presencias: 317 | Goles: 206. Atacante implacable y escurridizo que aterrorizó a los defensores rivales entre finales de los años cincuenta y mediados de los sesenta logrando consolidarse como una potencia de ataque." },
      { "nombre": "Jim Forrest", "cant": 145, "desc": "Época: 1962-1967 | Presencias: 163 | Goles: 145. Velocísimo extremo de explosión temprana en los sesenta. Firmó números asombrosos rompiendo redes con un medio centenar de anotaciones en una única campaña liguera antes de partir a Inglaterra." }
    ],
    "presencias": [
      { "nombre": "John Greig", "cant": 755, "desc": "Época: 1961-1978 | Presencias: 755 | Goles: 120. Nombrado simbólicamente 'el mejor de todos los tiempos' en Ibrox. Capitán de mística irrompible que sumó más batallas disputadas que ningún otro en toda la historia de la escuadra." },
      { "nombre": "Sandy Jardine", "cant": 674, "desc": "Época: 1964-1982 | Presencias: 674 | Goles: 77. Su inmensa constancia y entrega le permitió ubicarse en la segunda posición histórica de presencias, asumiendo una regularidad soberbia sin ceder jamás su jerarquía." },
      { "nombre": "Ally McCoist", "cant": 581, "desc": "Época: 1983-1998 | Presencias: 581 | Goles: 355. Complementando su enorme superioridad en el registro goleador, el ariete escocés consolidó su fidelidad total disputando casi seiscientos encuentros de altísima exigencia." },
      { "nombre": "Sandy Archibald", "cant": 513, "desc": "Época: 1914-1934 | Presencias: 513 | Goles: 148. Formidable extremo diestro que participó dictando la titularidad en un sinfín de campeonatos. Sostuvo un ritmo constante durante el siglo emergente sumando gloria y campeonatos." },
      { "nombre": "David Meiklejohn", "cant": 490, "desc": "Época: 1919-1936 | Presencias: 490 | Goles: 46. Marcador de sobriedad impecable que lideró la zaga por quince extensos torneos, asegurando la representación inquebrantable que cimentó sólidas victorias de campeonato." }
    ]
  },
  "kilmarnock": {
    "idolos": [
      { "nombre": "Ray Montgomerie", "desc": "Época: 1988-1998 | Presencias: 470 | Goles: 4. Defensor central y emblemático capitán que lideró al conjunto hacia el histórico triunfo en la Copa de Escocia de 1997. Marcó una época brindando jerarquía y solvencia organizativa en el fondo." },
      { "nombre": "Kris Boyd", "desc": "Época: 1999-2005, 2013-2015, 2015-2019 | Presencias: 314 | Goles: 136. Uno de los mayores anotadores de la era moderna del fútbol escocés. Sus formidables disparos y colocación aseguraron campañas exitosas durante sus diferentes etapas en el club." },
      { "nombre": "Tommy McLean", "desc": "Época: 1964-1971 | Presencias: 216 | Goles: 48. Mediocampista creativo de notable técnica, fundamental en la consecución del único campeonato liguero de la institución. Su visión de juego determinó el histórico éxito de 1965." },
      { "nombre": "Stuart McLean", "desc": "Época: 1974-1989 | Presencias: 548 | Goles: 24. Zaguero polifuncional de destacada trayectoria en las entrañas de Rugby Park. Su indiscutible profesionalismo acompañó al cuadro en múltiples transiciones competitivas marcando récord de apariciones." },
      { "nombre": "Dieter van Tornhout", "desc": "Época: 2012 | Presencias: 14 | Goles: 1. Atacante de ciclo breve cuyo solitario e histórico tanto en la final frente al Celtic cimentó la heroica obtención de la Copa de la Liga Escocesa en el año 2012." }
    ],
    "goleadores": [
      { "nombre": "Willie Culley", "cant": 264, "desc": "Época: 1911-1923 | Presencias: 295 | Goles: 264. Delantero de cifras inigualables durante el inicio del siglo pasado. Registró marcas apabullantes ostentando hasta la fecha el honor de ser el artillero absoluto del equipo." },
      { "nombre": "Kris Boyd", "cant": 136, "desc": "Época: 1999-2019 | Presencias: 314 | Goles: 136. Reconocido cazador del área cuyas rachas goleadoras catapultaron al elenco. Acumuló 136 conquistas consolidando su inmenso aporte estadístico al campeonato liguero contemporáneo." },
      { "nombre": "Eddie Morrison", "cant": 121, "desc": "Época: 1966-1976 | Presencias: 294 | Goles: 121. Atacante combativo de la plantilla poscampeona garantizando celebraciones continuas en la élite escocesa con potentes cabezazos y regates." },
      { "nombre": "Andy Kerr", "cant": 113, "desc": "Época: 1954-1965 | Presencias: 280 | Goles: 113. Definidor nato que lideró el ataque a fines de los cincuenta, superando el centenar de goles para dar cimientos sólidos al competitivo plantel sureño." },
      { "nombre": "Brien McIlroy", "cant": 108, "desc": "Época: 1960-1971 | Presencias: 300 | Goles: 108. Hábil definidor que formó la medular ofensiva en el decenio más exitoso, aportando cifras determinantes para enriquecer la dorada racha de los sesenta." }
    ],
    "presencias": [
      { "nombre": "Alan Robertson", "cant": 624, "desc": "Época: 1969-1983 | Presencias: 624 | Goles: 3. Símbolo de la zaga que ostenta orgullosamente la cima de duelos disputados. Mostró una fidelidad inquebrantable a lo largo de catorce campañas en primera división." },
      { "nombre": "Frank Beattie", "cant": 611, "desc": "Época: 1953-1972 | Presencias: 611 | Goles: 23. Mediocampista perseverante que abrazó la capitanía en el hito liguero de 1965. Una figura estelar que promedió dos décadas completas de entrega indiscutida." },
      { "nombre": "Stuart McLean", "cant": 548, "desc": "Época: 1974-1989 | Presencias: 548 | Goles: 24. Defensor aguerrido que respaldó rígidamente todo el progreso táctico de los años ochenta asumiendo medio millar de presentaciones ininterrumpidas." },
      { "nombre": "Ray Montgomerie", "cant": 470, "desc": "Época: 1988-1998 | Presencias: 470 | Goles: 4. El histórico líder cimentó su inmenso estatus participando en asiduas contiendas hasta consumar el glorioso levantar del trofeo nacional copero." },
      { "nombre": "James Fowler", "cant": 461, "desc": "Época: 1999-2014 | Presencias: 461 | Goles: 11. Volante de extensa carrera moderna; ofreció consistencia y equilibrio al sistema escocés cerrando un ciclo impecable en la actual Premiership." }
    ]
  },
  "motherwell": {
    "idolos": [
      { "nombre": "George Stevenson", "desc": "Época: 1923-1939 | Presencias: 511 | Goles: 170. Estratega excepcional y cerebro del club. Tras un impacto directo en el campo, asumió el cargo directivo conduciendo magistralmente la histórica consagración del único título liguero." },
      { "nombre": "James McFadden", "desc": "Época: 2000-2003, 2013-2017 | Presencias: 112 | Goles: 37. Atacante deslumbrante surgido en las inferiores. Sus regates eléctricos y tiros libres magistrales lo convirtieron en un favorito inmediato y referente contemporáneo inigualable." },
      { "nombre": "Phil O'Donnell", "desc": "Época: 1990-1994, 2004-2007 | Presencias: 201 | Goles: 24. Valioso centrocampista integrante del equipo campeón de la Copa Escocesa en 1991. Su trágica pérdida en pleno terreno de juego cimentó su nombre en el corazón eterno de los fanáticos." },
      { "nombre": "Keith Lasley", "desc": "Época: 1999-2017 | Presencias: 479 | Goles: 24. Capitán implacable de inmensa disciplina. Distribuyó juego e interceptó ataques rivales sosteniendo la regularidad del cuadro a través de múltiples décadas en la máxima categoría." },
      { "nombre": "Stevie Hammell", "desc": "Época: 1999-2018 | Presencias: 583 | Goles: 5. Firme y respetado marcador de punta, completó una impecable estadía casi de veinte años garantizando asistencias regulares e inquebrantable solidez sobre el flanco izquierdo." }
    ],
    "goleadores": [
      { "nombre": "Hughie Ferguson", "cant": 284, "desc": "Época: 1916-1925 | Presencias: 346 | Goles: 284. Máximo artillero invencible en la historia del cuadro. Promedió casi un tanto por duelo forjando un ataque absolutamente devastador antes de emigrar rápidamente de Escocia." },
      { "nombre": "Willie MacFadyen", "cant": 251, "desc": "Época: 1921-1936 | Presencias: 378 | Goles: 251. Delantero de récord nacional asombroso que reventó redes al marcar 52 tantos en la histórica campaña de liga de la temporada 1931-1932." },
      { "nombre": "Bob Ferrier", "cant": 262, "desc": "Época: 1917-1937 | Presencias: 626 | Goles: 262. Cimentó su inmenso éxito como carrilero con gran proyección sumando cifras asombrosas a escala ofensiva, convirtiéndose en el segundo encestador más letal en los libros de Fir Park." },
      { "nombre": "John Gahagan", "cant": 59, "desc": "Época: 1979-1990 | Presencias: 291 | Goles: 59. Volante ofensivo con olfato de definición, promediando dianas vitales que sellaron clásicas remontadas ochenteras y mantuvieron al equipo enfocado en competiciones europeas." },
      { "nombre": "Michael Higdon", "cant": 40, "desc": "Época: 2011-2013 | Presencias: 72 | Goles: 40. Goleador corpulento de paso breve pero fulminante. Conquistó la bota de oro de la SPFL de 2013 logrando asegurar el subcampeonato en una etapa brillante de consolidación táctica." }
    ],
    "presencias": [
      { "nombre": "Bob Ferrier", "cant": 626, "desc": "Época: 1917-1937 | Presencias: 626 | Goles: 262. Indiscutido dominador estadístico que operó durante los años fundadores de prestigio. Su permanencia intocable resguarda un puesto eterno en el olimpo histórico institucional." },
      { "nombre": "Stevie Hammell", "cant": 583, "desc": "Época: 1999-2018 | Presencias: 583 | Goles: 5. Sumamente profesional, rebasó records modernos sumando casi seiscientas asiduidades, logrando competir ininterrumpidamente desde la era juvenil a la capitanía interina." },
      { "nombre": "Charlie Aitken", "cant": 570, "desc": "Época: 1949-1966 | Presencias: 570 | Goles: 38. Robusto pilar defensivo que entregó su servicio mediante actuaciones rigurosísimas de gran solvencia, aportando carácter ante escuadras altamente competitivas de la época." },
      { "nombre": "George Stevenson", "cant": 511, "desc": "Época: 1923-1939 | Presencias: 511 | Goles: 170. Mediocampo de gran lucidez que cruzó el umbral del medio millar marcando firmemente con dictámenes certeros que lo perpetúan como artífice del equipo." },
      { "nombre": "Keith Lasley", "cant": 479, "desc": "Época: 1999-2017 | Presencias: 479 | Goles: 24. Fiel luchador del cerco central, entregó un compromiso sobresaliente para alcanzar finales consecutivas de los torneos mayores afianzando la estructura organizativa." }
    ]
  },
  "ross-county": {
    "idolos": [
      { "nombre": "Michael Gardyne", "desc": "Época: 2006-2021 | Presencias: 444 | Goles: 73. Histórico jugador ascendiendo desde los estamentos menores para coronar al conjunto en reiteradas ocasiones, resultando indispensable para sostenerse en la Premiership." },
      { "nombre": "Derek Adams", "desc": "Época: 1996-2004, 2007-2014 | Presencias: 269 | Goles: 55. Primero como mediocentro dinámico y luego fungiendo el rol de director técnico para comandar la gran escalada a final de la Copa Escocesa asombrando al país formativo." },
      { "nombre": "Richard Brittain", "desc": "Época: 2008-2015 | Presencias: 274 | Goles: 50. Batallador capitán firme en su zancada, logrando certificar pautas ascensionales y sumando victorias plenas como especialista irrebatible de certeras ejecuciones a pelota quieta." },
      { "nombre": "Scott Boyd", "desc": "Época: 2007-2016 | Presencias: 305 | Goles: 15. Zaguero inamovible de estricto rigor operativo. Sus anticipos defensivos blindaron el progreso de un equipo chico hasta cruzar a los escenarios de primera." },
      { "nombre": "Ian McShane", "desc": "Época: 2015-2017 | Presencias: 52 | Goles: 5. Medular que con una intervención corta firmó la mayor presea obtenida, la Copa de la Liga Escocesa en 2016, tras batir con solidez inusitada la competencia local." }
    ],
    "goleadores": [
      { "nombre": "Michael Gardyne", "cant": 73, "desc": "Época: 2006-2021 | Presencias: 444 | Goles: 73. Atleta versátil y mayor goleador histórico, destrozó redes para orquestar la consolidación del elenco modesto convirtiéndolo en un participante respetado de peso formal en divisiones estelares." },
      { "nombre": "Liam Boyce", "cant": 50, "desc": "Época: 2014-2017 | Presencias: 115 | Goles: 50. Letal norirlandés que rompió los esquemas tácticos convirtiéndose rápidamente en el máximo anotador de todo el circuito británico de la temporada regular, un lujo increíble para el humilde bastión norteño." },
      { "nombre": "Craig Curran", "cant": 33, "desc": "Época: 2015-2018 | Presencias: 114 | Goles: 33. Delantero fiero que encadenó rachas positivas y brindó su cuota asertiva de conquistas permitiendo campeonatos locales de Copa fundamentales en tiempos reñidos de salvación táctica." },
      { "nombre": "Brian Graham", "cant": 20, "desc": "Época: 2015-2016 | Presencias: 28 | Goles: 20. Rematador esporádico que aportó valiosos aportes coperos manteniendo resoluciones asombrosas y muy efectivas al momento definitivo frente de cada gran contienda nacional." },
      { "nombre": "Liam Craig", "cant": 19, "desc": "Época: 2015-2017 | Presencias: 51 | Goles: 19. Ofensivo disciplinado que promedió resoluciones letales precisas engrosando los márgenes de seguridad para superar obstáculos competitivos dentro de los campos opuestos." }
    ],
    "presencias": [
      { "nombre": "Michael Gardyne", "cant": 444, "desc": "Época: 2006-2021 | Presencias: 444 | Goles: 73. Líder indiscutido operando de manera irrenunciable sobrepasando lances tácticos inmensos hasta alcanzar cumbres y galardones escoceses memorables." },
      { "nombre": "Scott Boyd", "cant": 305, "desc": "Época: 2007-2016 | Presencias: 305 | Goles: 15. Dictando solidez perimetral aportando más de trescientas jornadas asegurables que afirmaron la retaguardia estable del ascenso nacional." },
      { "nombre": "Richard Brittain", "cant": 274, "desc": "Época: 2008-2015 | Presencias: 274 | Goles: 50. Medio de enorme temperamento que cerró registros estáticos muy admirables con una entrega y regularidad indiscutida por ambas facciones de la directiva y afición." },
      { "nombre": "Marcus Fraser", "cant": 196, "desc": "Época: 2015-2020 | Presencias: 196 | Goles: 4. Defensor seguro lateral que encumbró triunfos coperos de altísimo riesgo y acumuló cercanías a la segunda centena aportando innegable control rústico perimetral." },
      { "nombre": "Martin Woods", "cant": 139, "desc": "Época: 2014-2017 | Presencias: 139 | Goles: 6. Constante fijado en el once titular asumiendo valiosa responsabilidad en los choques medulares directos." }
    ]
  },
  "st-johnstone": {
    "idolos": [
      { "nombre": "Chris Millar", "desc": "Época: 2008-2018 | Presencias: 349 | Goles: 6. Estandarte puro del mediocampo operando férreamente y colaborando en la obtención de la histórica final copera, ganándose el respeto de su afición con inmenso sacrificio físico." },
      { "nombre": "David Wotherspoon", "desc": "Época: 2013-2023 | Presencias: 356 | Goles: 28. Medio creativo formidabílisimo ganador de cruces y actor indispensable en sendas victorias coperas históricas ostentando asombroso desequilibrio ofensivo contemporáneo." },
      { "nombre": "Steven MacLean", "desc": "Época: 2012-2018 | Presencias: 202 | Goles: 58. El goleador infalible que se coronó marcando la diana definitoria pautada de la Copa Escocesa cerrando una trayectoria inmensa logrando un hito absoluto." },
      { "nombre": "Dave Mackay (Saintees)", "desc": "Época: 2009-2016 | Presencias: 260 | Goles: 16. Defensor legendario y capitán histórico asumiendo el comando que rompió el maleficio y levantó la primera medalla oficial de copa grande para la gran afición de Perth." },
      { "nombre": "Liam Craig", "desc": "Época: 2007-2022 | Presencias: 457 | Goles: 59. Volante indiscutido superando registros récord, obteniendo respeto supremo adjudicándose el histórico y milagroso doblete copero en los recientes años deslumbrantes." }
    ],
    "goleadores": [
      { "nombre": "John Brogan", "cant": 140, "desc": "Época: 1976-1984 | Presencias: 290 | Goles: 140. Definidor implacable registrando anotabilidades letales, fijando con claridad números impresionantes y precisas ejecuciones constantes en todo el panorama superior." },
      { "nombre": "Ian Rodger", "cant": 116, "desc": "Época: 1947-1954 | Presencias: 220 | Goles: 116. Ejecutor letal cruzando la centena a mediados de la época post bélica, aportando contundentes embestidas frontales firmando actuaciones legendarias inexpugnables." },
      { "nombre": "Henry Hall", "cant": 114, "desc": "Época: 1968-1975 | Presencias: 236 | Goles: 114. Artillero fulminante ostentando puntería táctica asombrosamente resolutiva que cimentó importantes triunfos aportando registros exactos a nivel estadístico." },
      { "nombre": "Stevie May", "cant": 70, "desc": "Época: 2009-2024 (Múltiples periodos) | Presencias: 285 | Goles: 70. Ariete inconfundible de festejos contemporáneos siendo clave fundamental para romper largas sequías anotando el gol de un recordado triunfo sin precedentes de liga y copa." },
      { "nombre": "Steven MacLean", "cant": 58, "desc": "Época: 2012-2018 | Presencias: 202 | Goles: 58. Goleador astuto sumando aportes rústicamente fijos en finales consagratorias que consolidaron el gran ascenso generalizado del conjunto durante ciclos imperdibles modernos." }
    ],
    "presencias": [
      { "nombre": "Liam Craig", "cant": 457, "desc": "Época: 2007-2022 | Presencias: 457 | Goles: 59. Superando todo registro vigente y estipulando titularidad indiscutida rígidamente abarcando casi medio millar de encuentros de asombrosa exigencia oficial y leal." },
      { "nombre": "Steven Anderson", "cant": 439, "desc": "Época: 2004-2019 | Presencias: 439 | Goles: 14. Zaguero inamovible fáctico que respaldó enormes contiendas coperas con formidables anticipos aéreos eternizándose con goles estelares." },
      { "nombre": "David Wotherspoon", "cant": 356, "desc": "Época: 2013-2023 | Presencias: 356 | Goles: 28. Comprobó brillante capacidad operativa englobando dobletes internacionales marcando época y liderando todo balance asertivo y constructivo de medular central." },
      { "nombre": "Drew Rutherford", "cant": 345, "desc": "Época: 1977-1985 | Presencias: 345 | Goles: 2. Garantizando registros de sólidas apariciones seguras mediante defensas contundentes de las divisiones de retaguardia escocesas en plena transición de finales de los setenta." },
      { "nombre": "Chris Millar", "cant": 349, "desc": "Época: 2008-2018 | Presencias: 349 | Goles: 6. Esteta combativo aportando rigor contundente cerrando un historial espléndido sumando contiendas decisivas en la historia triunfal de las grandes copas." }
    ]
  },
  "st-mirren": {
    "idolos": [
      { "nombre": "Tony Fitzpatrick", "desc": "Época: 1973-1989 | Presencias: 458 | Goles: 22. Inmenso capitán del equipo vencedor en lides coperas gloriosas asumiendo también luego roles directivos para resguardar la identidad del cuadro sumando un legendario respeto." },
      { "nombre": "Hugh Murray", "desc": "Época: 1997-2012 | Presencias: 462 | Goles: 15. Contención incansable que sobrepasó marcas absolutas fijando un enorme registro inquebrantable asombrosamente sostenido frente al desgaste del esquema nacional de competición estricto." },
      { "nombre": "Steven Thompson", "desc": "Época: 2011-2016 | Presencias: 167 | Goles: 54. Atacante letal coronado de honores rompiendo redes en la triunfante Copa de la Liga de 2013, siendo un asertivo e indiscutible favorito general del público estricto." },
      { "nombre": "Cammy Bell", "desc": "Época: 2005-2012 | Presencias: 115 | Goles: 0. Portero de grandes hazañas consolidando seguridad extrema e impulsando salvaguardas continuas para resistir presiones ofensivas implacables durante la élite competitiva escocesa." },
      { "nombre": "Mark Yardley", "desc": "Época: 1995-2003 | Presencias: 260 | Goles: 75. Artillero robusto infundiendo terror al contrincante y marcando remates explosivos que le significaron cuantiosas conquistas vitales para la salvación asidua anual constante." }
    ],
    "goleadores": [
      { "nombre": "David McCrae", "cant": 251, "desc": "Época: 1923-1934 | Presencias: 350 | Goles: 251. Líder artillero aplastante fijando un récord irrebatible estipulando la abismal barrera de los 251 goles asumiendo supremacía irrompible del periodo pre guerra en Escocia central." },
      { "nombre": "Steven Thompson", "cant": 54, "desc": "Época: 2011-2016 | Presencias: 167 | Goles: 54. Goleador contemporáneo de impacto inmediato coronándose afortunadamente en fases culminantes como autor fundamental e insustituible de históricas copas modernas locales plenas." },
      { "nombre": "Mark Yardley", "cant": 75, "desc": "Época: 1995-2003 | Presencias: 260 | Goles: 75. Definidor de imponente estructura física dictaminando y aportando goles claves rompiendo el muro adverso estipulando un formidable y efectivo registro constante en su paso contundente." },
      { "nombre": "John Sutton", "cant": 37, "desc": "Época: 2005-2007 | Presencias: 75 | Goles: 37. Fijo delantero sumando formidables tantos con excelente posicionamiento, un definidor contundente que garantizó anotaciones necesarias y efectivas fácticas de precisión exacta e incontestable." },
      { "nombre": "Barry Lavety", "cant": 34, "desc": "Época: 1992-2003 (Múltiples periodos) | Presencias: 147 | Goles: 34. Astuto artillero logrando sumar victorias determinantes a la sumatoria global con un rústico juego frontal fáctico resolutivo cerrando de forma completa su currículum estelar." }
    ],
    "presencias": [
      { "nombre": "Hugh Murray", "cant": 462, "desc": "Época: 1997-2012 | Presencias: 462 | Goles: 15. Dictando su autoridad sobrepasó todos los historiales vigentes asegurando con persistencia inusitada casi quinientos desempeños profesionales pletos de lealtad imbatible." },
      { "nombre": "Campbell Money", "cant": 400, "desc": "Época: 1981-1993 | Presencias: 400 | Goles: 2. Guardian tapando remates letales de los duros certámenes de ochenta, asumiendo su registro asombrosamente firme estipulado certero lográndose confirmar un liderazgo estricto de garantía titular." },
      { "nombre": "Tony Fitzpatrick", "cant": 458, "desc": "Época: 1973-1989 | Presencias: 458 | Goles: 22. Consagrado capitán histórico coronando de formidables pautas medievicas el juego mediocentro de una constancia férrea sumando a más estables cifras de puros dictámenes plenos estelares plenos tácticos fijos puros." },
      { "nombre": "Jim Mair", "cant": 313, "desc": "Época: 1974-1983 | Presencias: 313 | Goles: 4. Defensor seguro cerrando pasillos atacantes cediendo su físico dictando rústicos y férreos dictámenes defensivos para sostener divisiones cruzando umbrales estadísticos estáticos seguros estelares inamovibles." },
      { "nombre": "Tommy Turner", "cant": 310, "desc": "Época: 1989-1998 | Presencias: 310 | Goles: 12. Medio rústico y versátil operando franjas cruzadas asiduamente conteniendo la presión táctica aportando estipuladas estadísticas plenas totales fácticas inmaculadas estables burocráticas lícitas fijos plenos y de gran asombro." }
    ]
  }
};

for (const club in data) {
  const filePath = path + club + '.json';
  if (fs.existsSync(filePath)) {
    let fileDataText = fs.readFileSync(filePath, 'utf8');
    let fileData = JSON.parse(fileDataText);
    
    fileData.idolos = data[club].idolos;
    fileData.goleadores_historicos = data[club].goleadores;
    fileData.presencias_historicas = data[club].presencias;

    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), 'utf8');
    console.log(`Updated idols for ${club}`);
  }
}
