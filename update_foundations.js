const fs = require('fs');
const path = require('path');

const clubsDir = path.join(__dirname, 'app/src/data/clubes/argentina');

const foundations = {
  "boca-juniors": {
    "hito": "Constitución de la entidad en Plaza Solís (1905)",
    "desc": "El 3 de abril de 1905, un grupo de cinco jóvenes hijos de inmigrantes genoveses —Esteban Baglietto, Alfredo Scarpati, Santiago Sana y los hermanos Juan y Teodoro Farenga— concretó la fundación oficial del Club Atlético Boca Juniors. El cónclave decisivo se llevó a cabo en uno de los bancos de la Plaza Solís, en el barrio de La Boca. La asamblea designó a Esteban Baglietto como primer presidente de la institución. En los albores, la cuestión cromática generó debates hasta la célebre decisión de adoptar los colores de la bandera del primer barco que ingresara al puerto, resultando ser el navío sueco Drottning Sophia, el cual cedió el definitivo azul y oro a la identidad xeneize."
  },
  "river-plate": {
    "hito": "Fusión Institucional de Santa Rosa y La Rosales (1901)",
    "desc": "El 25 de mayo de 1901, en una asamblea celebrada en las cercanías de la Dársena Sur del puerto de Buenos Aires, quedó formalmente instituido el Club Atlético River Plate. La entidad surgió como resultado de la fusión estratégica de dos clubes vecinales preexistentes: Santa Rosa y La Rosales. La reunión fundacional, encabezada por figuras como Leopoldo Bard, Livio Ratto y Pedro Martínez, concluyó con la designación de Leopoldo Bard como primer presidente. El distintivo nombre institucional fue propuesto tras advertir la inscripción 'The River Plate' en los cajones de mercancía de los muelles portuarios."
  },
  "estudiantes-lp": {
    "hito": "Acta Fundacional en la Zapatería 'Nueva York' (1905)",
    "desc": "El 4 de agosto de 1905, un núcleo conformado por veinte universitarios firmó el acta constitutiva del Club Estudiantes de La Plata. El encuentro se produjo en las instalaciones de la zapatería 'Nueva York', propiedad de Félix Francisco Díaz, emplazada en la céntrica calle 7 de la capital bonaerense. Impulsados por el rechazo de Gimnasia y Esgrima a la práctica del novel 'football', jóvenes como Tomás Shead (primer presidente electo), Jorge Luis Hirschi y Alfredo Lartigue decidieron forjar una institución independiente. Se acordó adoptar los colores rojo y blanco en bastones verticales como tributo explícito al disuelto pero glorioso conjunto inglés Alumni."
  },
  "racing-club": {
    "hito": "Alianza constitutiva de Barracas al Sud (1903)",
    "desc": "El 25 de marzo de 1903, las agrupaciones independientes 'Colorados Unidos' y 'Club Argentino' confluyeron en una asamblea definitiva que dio origen formal al Racing Club. La cumbre vecinal, gestada para potenciar la competitividad de Avellaneda, contó con la participación activa de figuras claves como Arturo Artola, Germán Vidaillac y Pedro Viazzi. Fue precisamente Germán Vidaillac quien introdujo al debate la denominación 'Racing Club' exhibiendo una revista automovilística de origen francés que circulaba en la época. Tras desecharse propuestas cromáticas iniciales, el socio Pedro Werner instituyó exitosamente los históricos bastones celestes y blancos hacia el año 1910."
  },
  "independiente": {
    "hito": "La emancipación de los empleados de comercio (1905)",
    "desc": "El 1 de enero de 1905, un contingente de jóvenes empleados subalternos de la prestigiosa tienda 'A la Ciudad de Londres' resolvió fundar el Independiente Football Club. El acto fundacional emergió como una medida de emancipación tras la negativa de las autoridades del equipo oficial de la empresa (Maipú Banfield) a permitirles competir en la escuadra titular. Los líderes de la secesión, Rosendo Degiorgi (quien cedió su residencia como primera sede) y Fernando Aizpuru, establecieron la comisión directiva primaria. La asamblea constitutiva se terminaría formalizando meses después, dando paso al color rojo definitivo en 1908 tras el deslumbrante impacto del Nottingham Forest británico en Argentina."
  },
  "san-lorenzo": {
    "hito": "Acuerdo barrial con el Padre Lorenzo Massa (1908)",
    "desc": "El 1 de abril de 1908 cristalizó formalmente la institución del Club Atlético San Lorenzo de Almagro, producto del consenso entre un grupo de jóvenes deportistas barriales —los 'Forzosos de Almagro'— y el clérigo salesiano Lorenzo Massa. El acuerdo fundamental, propiciado por figuras como Federico Monti (aportante económico primario) y Antonio Scaramusso, estableció que el equipo abandonara las calles para jugar en el predio del Oratorio San Antonio, en busca de protección ante la creciente inseguridad urbana. La designación 'San Lorenzo' fue adoptada por la asamblea como tributo al padre benefactor y simultáneamente al heroico combate de San Lorenzo y la figura eclesiástica homónima."
  },
  "rosario-central": {
    "hito": "Génesis ferroviaria del Central Argentine Railway (1889)",
    "desc": "El 24 de diciembre de 1889, un aproximado de setenta empleados dependientes del ferrocarril Central Argentine Railway Company oficializaron la conformación del 'Central Argentine Railway Athletic Club' en las instalaciones de la estación Rosario Central. La asamblea, impulsada casi exclusivamente por trabajadores de origen británico e inmigrantes afines, designó al escocés Colin Calder como su presidente fundacional fundador y primer director técnico provisorio. El equipo admitió inicialmente solo a empleados de la compañía en sus filas, dinámica que se modificaría catorce años más tarde en 1903 durante una histórica castellanización de su membrete bajo el impulso de Miguel Green, pasando a denominarse universalmente Club Atlético Rosario Central."
  },
  "newells-old-boys": {
    "hito": "Homenaje educativo y la impronta de Claudio Newell (1903)",
    "desc": "En la jornada de conmemoración cívica del 3 de noviembre de 1903, antiguos estudiantes del Colegio Comercial Anglicano Argentino procedieron a la fundación formal del Club Atlético Newell's Old Boys. La entidad se cristalizó como un tributo en vida al maestro pedagogo británico Isaac Newell, fundador de dicha institución educativa. Su hijo, Claudio Newell, ofició como principal impulsor, propiciando el encuentro institucional. La asamblea original nombró como presidente inicial a Víctor Heitz, y suscribió el estatuto que oficializaba la camiseta dividida verticalmente en franjas rojas y negras en honor a los colores primarios de las banderas inglesa (de Isaac) y alemana (de su esposa, Ana Margareth Jockinsen)."
  },
  "velez-sarsfield": {
    "hito": "Acta en las vías del tren de Floresta (1910)",
    "desc": "El 1 de enero de 1910, refugiados bajo un túnel a raíz del mal clima estival, un conjunto de vecinos congregados en las inmediaciones de la estación de trenes del barrio de Floresta rubricaron el acta orgánica del 'Club Atlético Argentinos de Vélez Sarsfield'. Liderados por Julio Guglielmone, Martín Portillo y Nicolás Marín Moreno, entre otros fundadores clave, estructuraron los pilares de la asociación civil asumiendo a Luis Barredo como titular del primer organigrama directivo. La elección final del nombre conmemoraba directamente a la estación circundante, honrando intrínsecamente a Dalmacio Vélez Sarsfield, insigne autor del Código Civil argentino."
  },
  "huracan": {
    "hito": "Firma del acta oficial tras la 'Lucha de Cero' (1908)",
    "desc": "El 1 de noviembre de 1908 se labró de manera definitiva y con reconocimiento institucional vigente la fundación del Club Atlético Huracán, tras una serie de intentos fallidos liderados previamente por el precursor juvenil Tomás Cora. La asamblea definitoria se llevó adelante en una modesta vivienda de la barriada porteña de Nueva Pompeya, bajo el liderazgo firme de José Laguna (futuro prócer y presidente), Américo Stefanini y Agustín Caimi, quienes elaboraron un estatuto de fuerte carácter social. El núcleo adoptó para siempre el emblema identificatorio del extinto globo aerostático bautizado 'Huracán', que comandara pocos años antes el piloto e impulsor de la aviación continental Jorge Newbery."
  },
  "gimnasia-lp": {
    "hito": "Fundación del decano sudamericano de fútbol en La Plata (1887)",
    "desc": "El 3 de junio de 1887, cincuenta y cuatro figuras prominentes de la emergente alta jerarquía social, comercial y pública de la flamante localidad de La Plata congregaron una Asamblea General en la Sala Comercial de la ciudad para constituir el Club de Gimnasia y Esgrima. El encuentro, organizado en las postrimerías de la fundación de la ciudad, ungió como pionero mandatario a Saturnino Perdriel, destacado funcionario aduanero e intelectual contemporáneo. Nacido bajo la égida original de fomentar la práctica de armas (esgrima) y la calistenia europea bajo recintos estancos, incorporó progresivamente y con reticencias orgánicas elitistas el fútbol popular masivo desde la década siguiente impulsado fuertemente por estudiantes asociados."
  },
  "talleres-cba": {
    "hito": "El impulso ferroviario de Tomás Lawson (1913)",
    "desc": "El 12 de octubre de 1913 emergió de modo concluyente el 'Atlético Talleres Central Córdoba' —actualmente Club Atlético Talleres— por iniciativa explícita de Tomas Lawson, ciudadano de ascendencia inglesa empleado administrativo de peso en el sistema de ferrocarriles centrales de la ciudad de Córdoba. Acompañado en asamblea ejecutiva en el barrio Inglés por operarios metalúrgicos calificados como Ramón Frugoni y Antonio de la Casa, se estructuró un comité de acción que designaría al mismísimo Lawson como dirigente principal. La paleta de colores distintivos adoptada imitó históricamente el diseño de gruesos bastones azul oscuro sobre lienzo inmaculado pertenecientes al extinto y contemporáneo English High School en reconocimiento y familiaridad local."
  },
  "belgrano-cba": {
    "hito": "Asamblea juvenil bajo el sombraje en Barrio Alberdi (1905)",
    "desc": "El 19 de marzo de 1905 un contingente de niños y jóvenes estudiantes se dio cita al amparo de la arboleda de Plaza General Paz, en los confines del barrio Alberdi de la ciudad de Córdoba, declarando formal y solemnemente operativo al Club Atlético Belgrano. La figura de Arturo Orgaz, un incipiente intelectual visionario con tan solo catorce años, descolló sobre sus compañeros liderando el acto cívico fundacional y erigiéndose posteriormente como un prohombre cultural insoslayable en la provincia mediterránea. Aquellos fundadores —que sumarían luego el valedero escudo con los tonos celestes en alusión franca a la bandera nacional— organizaron un fondo primario con cuotas monetarias destinadas exclusivamente a confeccionar su primera divisa competitiva oficial."
  },
  "banfield": {
    "hito": "Congregación de la colectividad británica meridional (1896)",
    "desc": "El 21 de enero de 1896, miembros calificados de la alta sociedad inmigrante de influencia británica e inversores ferroviarios residentes al sur del entramado portuario sellaron legalmente el nacimiento del Banfield Athletic Club. Su asamblea se materializó merced a la convocatoria directa de prominentes comerciantes del distrito como Daniel Kingsland, quien asumió la comandancia de la junta inicial, George Burton (luego estandarte dirigencial hasta deceso en pleno cargo) y la familia Buchardo. Acordaron de manera taxativa honrar toponímicamente a la terminal de tren aledaña erigida como gratitud personal a los servicios prestados por el ciudadano jerárquico del ferrocarril de la zona: Sir Edward Banfield."
  },
  "lanus": {
    "hito": "Fusión del Club de Barracas y Lanús United (1915)",
    "desc": "El 3 de enero de 1915 marcó la génesis estatutaria irreversible del Club Atlético Lanús. La moderna asociación fue la conclusión directa de una larga negociación para fusionar orgánicamente dos populares entidades previas que padecían agudas carencias infraestructurales y de logística deportiva competitiva regular: el modesto equipo barrial de Lanús United y el afamado sector del Club Atlético Barracas de los alrededores obreros. La sesión fundadora ungida democráticamente, reunida con urgencia a orillas de estamentos sindicales comunitarios, coronó al prestigioso señor Miguel Igartúa al frente directivo de comisiones conjuntas. Con esta movida, adoptaron el simbólico color granate oscuro extraído estrictamente desde Europa por el equipo madrileño Club Deportivo Español."
  },
  "atletico-tucuman": {
    "hito": "Origen protocolar del 'Decano' del interior septentrional (1902)",
    "desc": "El 27 de septiembre de 1902 se rubricó administrativamente de modo pionero y adelantado para la historia competitiva local el estatuto primigenio del Club Atlético Tucumán. La conjunción histórica de un grupo selecto de visionarios del noroeste de la República, operando bajo las estrictas directrices formales propuestas por la comisión creadora encarnada entre otros por Agenor Albornoz (designado titular de la primitiva asamblea), Tomás Barber y José Fiero, derivó en la constitución de la entidad fundacional referente más longeva del norte argentino. Con el correr perentorio de los tiempos de adiestramiento, forjaron de manera inescrutable los colores albicelestes bastonados como insignia imperecedera extraídos e impulsados tras la conformación del escudo de AFA."
  },
  "tigre": {
    "hito": "Instauración vecinal de José Dellagiovanna (1902)",
    "desc": "El 3 de agosto de 1902 quedó instaurado formalmente en el norte del delta bonaerense el Club Atlético Tigre encabezado decididamente por las ansias organizativas supremas de un distinguido vecino joven e impetuoso de apenas 19 abriles del distrito homónimo: José Dellagiovanna. Reunido en círculo asambleario íntimo flanqueado por inseparables adeptos como Luis Caminos y Eduardo de Fasolari, trazó los lineamientos administrativos orgánicos que darían un anclaje deportivo a las juventudes que residían en adyacencias del entonces boyante Mercado de Frutos de la época. Por medio de rigurosos debates establecieron la indumentaria pionera predominante azul y el estandarte rojo inyectado de estirpe naviera."
  },
  "union": {
    "hito": "Cruce asambleario en bar Cavour Fornite (1907)",
    "desc": "Transcurrido el 15 de abril de 1907 tras arduas contiendas tácticas y desavenencias societarias locales originarias directas, las disidencias del grupo extinto 'Santa Fe FC' materializaron legalmente al flamante 'Club United'. Un cónclave fundacional celebrado con catorce testigos oculares en un popular local gastronómico de despacho y venta portillo denominado 'Bar Cavour', dio inicio a esta hazaña encolumnada codo a codo tras las figuras descollantes y resolutivas de Belisario Osuna y Guillermo Drenner, este último primer timonel elegido democráticamente por votantes presentes de la flamante y combativa escuadra que con el devenir paulatino de las gestiones sería prontamente castellanizada nominal y popularmente reconvertida a Club Atlético Unión."
  },
  "platense": {
    "hito": "La apuesta ganadora de jóvenes recoletos en el Hipódromo (1905)",
    "desc": "En pleno 25 de mayo de 1905 el origen institucional del Club Atlético Platense estuvo intrínsecamente determinado por una contingencia financiera inusitada para el contexto histórico rioplatense pero profundamente anecdótica de clase socio-cultural porteña del hipódromo. Varios jóvenes pudientes, habitantes habituales y arraigados al elegante perímetro urbano de la calle Callao, habiendo agrupado sistemáticamente una vaquita monetaria de apuestas sobre el generoso rendimiento y victoria final del esbelto caballo pura sangre 'Gay Simon' surgido legítimamente del afamado 'Stud Platense', utilizaron el abultado volumen de ganancia hipocrática generalizada para efectuar con posterioridad en recintos formales y cerrados la suscripción innegable acta constitutiva que originó al conjunto calamar capitalino."
  },
  "barracas-central": {
    "hito": "Gremio de conductores de camiones consolidando bases (1904)",
    "desc": "El 5 de abril de 1904 el populoso barrio sur porteño atestiguó la creación del rudimentario 'Barracas Central'. La estructura deportiva estuvo originalmente solventada de modo unívoco e irrestricto por agrupaciones trabajadoras del puerto integradas en general por camioneros rudimentarios nucleados tras el gremio laboral incipiente abocados al pesado traslado material de la mercadería por la extensa y desgastante Avenida Montes de Oca. Este acto constitutivo asambleario y estatutario gremial coronó al estibador y conductor principal Ángel Gardella ocupando la plana cívica mayor erigiéndolo legítimamente a cargo total del poder, adoptando formalmente en estatuto franjas encarnadas cruzadas."
  },
  "central-cordoba": {
    "hito": "Gestación ferroviaria y empleados de Ferrocarril Central (1919)",
    "desc": "El 3 de junio de 1919 quedó legalmente ratificado en el corazón árido y ferviente del territorio de la provincia capital de Santiago del Estero la creación del Club Atlético Central Córdoba auspiciada a instancias y dictamines plazos de un amplio sindicato dependiente abocados mayoritariamente al trabajo férreo. Su masa societaria constituyente, conformada unánimemente y en forma rotunda por curtidos, dedicados y jerárquicos laborantes del Ferrocarril Central Córdoba congregados habitualmente a fines recreativos a las veras circundantes de las barreras perimetrales aduaneras interurbanas y de andenes, rubricaron designar los bastones blancos y oscuros fundacionales sin debate aparente con su consecuente expansión deportiva."
  },
  "defensa-justicia": {
    "hito": "Refugio veredal asambleario en Florencio Varela (1935)",
    "desc": "Transcurrido ineludiblemente el 20 de marzo de 1935 un conglomerado juvenil de profunda estirpe obrera abocado tradicionalmente a los menesteres de recreación cívica, estableció oficialmente las escrituras societarias formales innegables del Club Social y Deportivo Defensa y Justicia. Aglutinados regularmente de forma clandestina tras desavenencias burocráticas previas en la intersección de importantes calles asfaltadas de la zona Sur de Florencio Varela. Quienes gestaron este sueño popular eligieron unánime y enfáticamente su representativo e icónico nombre buscando simbolizar inequívocamente su compromiso permanente e inflexible bajo conceptos solidarios referidos con los derechos primarios morales ciudadanos forjando de esta manera tempranamente su inquebrantable ADN barrial con base del partido."
  },
  "estudiantes-rc": {
    "hito": "Revuelta estudiantil de la élite de Río Cuarto (1912)",
    "desc": "El emblemático recinto temporal que significó el viejo Colegio Nacional de Río Cuarto albergó definitivamente durante el día del estudiante un 21 de septiembre del año 1912 la concreción estricta burocrática integral de Asociación Atlética Estudiantes, forjando sin condicionamientos sus pilares fundamentales. Concebida integral, moral y estatutariamente como la válvula de escape institucional de expresión máxima para la prolífica, calificada pero reducida élite escolar y social local acentuada en el corazón profundo provincial mediterráneo, cimentaron una bandera histórica sin fisuras adornada con el predominante tono blanquecino estético representativo imitando los históricos uniformes escolares sumandos líneas negras en sobriedad con rigurosa disciplina marcial educativa de competencia regional y cultural."
  },
  "gimnasia-mdz": {
    "hito": "El génesis recreativo de élite en Mendoza (1908)",
    "desc": "El 30 de agosto de 1908 emerge el Club Atlético Gimnasia y Esgrima, forjado y cimentado de manera contundente y sólida gracias a desavenencias con estructuras previas en el pujante y vasto Parque San Martín mendocino gestadas íntimamente por una élite de vecinos encarnizados del distinguido y apacible perímetro lindante sureño de la ciudad homónima capitular en ciernes de un polo urbano vitivinícola arrollador. Conformado en asamblea bajo parámetros sociales estrictos propulsados tras la vocación de impartir, con el rigor cívico preexistente, cátedra moral obligatoria y competencia en general, el conjunto estableció rápidamente y en exclusiva los colores clásicos blanco y oscuro franjeados bajo su nombre oficial de matriz pionera."
  },
  "independiente-rivadavia": {
    "hito": "Advenimiento asambleario bajo la comandancia de Gargantini (1913)",
    "desc": "Promediando el 24 de enero de 1913, bajo una tórrida asamblea social formal encendida de acalorados y extenuantes debates se rubricó irrevocablemente el acta estatutaria orgánica magna perteneciente al Club Sportivo Independiente Rivadavia. Influidos bajo severas condiciones cívicas en general a las espaldas administrativas del pionero Pedro del Castillo por la gigantesca innegable figura descollante precursora visionaria cívica corporativa mendocina de Bautista Gargantini, quien aportó fondos e impulsó el consenso político necesario unificando en masa a entusiastas que operaban el franjeo del parque preexistente. Rápidamente fue asumido como el gigante indiscutido caudillo del este cuyano consolidando veloz y unívocamente ese intenso manto color noche de época colonial."
  },
  "instituto": {
    "hito": "Símbolo mutual del Ferrocarril Central Córdoba (1918)",
    "desc": "La velada del 8 de agosto de 1918 resultó decisiva institucional y definitivamente para la fundación burocrática protocolar de Instituto Atlético Central Córdoba en los pujantes establecimientos periféricos colindantes correspondientes al taller aduanero seccional cordobés. Esta estructura y maquinaria deportiva que posteriormente fue abierta sin condicionamientos o recelos al público surgió como un derivado solidario mutual fundado y apoyado íntegramente de facto e incondicional por dependientes preexistentes y obreros ferroviarios de tramos medios del Central Córdoba de zona Alta Córdoba. Proponiéndose inicialmente ser fuente inagotable gregaria de cobijo cultural obrero local comandada por las arcas e ideales supremos del precursor fundamental líder de zona y fundador pionero de peso Ramón Caro y sus colaboradores."
  },
  "riestra": {
    "hito": "Conjuro de voluntades populares surgidas en la pizzería (1931)",
    "desc": "El Deportivo Riestra rubricó sus principios legales asociativos y fundamentos estructurales fundacionales un 22 de febrero de 1931 al sur periférico comercial barrial sur de zona precarizada sur de la pujante Buenos Aires tras un censo exhaustivo por la urgencia competitiva de agrupar una vasta porción y conglomerado demográfico que operaban en solitario. Ideado integral y estatutariamente inicialmente entre tertulias extendidas celebradas en el popular comercio de la pizzería aledaña conformando este novel y variopinto equipo en asamblea regular al lado de las vías adoptando indumentaria franjeada de manera fortuita gracias a colaboraciones y donaciones inyectadas desinteresadamente bajo la óptica y bandera moral predominante del humilde pero pujante Bajo Flores bonaerense popular."
  },
  "sarmiento-junin": {
    "hito": "Reunión trascendental en zona de chacras (1911)",
    "desc": "Consumado el inicio estival e ingresando históricamente el acta fundacional al 1 de abril de 1911 quedó legalizado protocolar, inobjetablemente y reglamentariamente establecido en el núcleo agroexportador geográfico correspondiente norteño bonaerense originario principal al Club Atlético Sarmiento en el centro agrícola poblado preexistente cabecera del afamado y pintoresco radio estipulado urbano y perimetral de Junín. Unificando voluntades a cargo de incansables e intrépidos dirigentes pueblerinos jóvenes tras firmar documentaciones oficiales estatutarias conjuntas de voluntades en apoyo al maestro de estado prohombre cívico fundacional bajo puros tonos predominante naturalistas verde inglés inmaculados que sirvió de soporte ideológico base que aclimató a toda la zona agropecuaria a su favor."
  }
};

const processed = Object.keys(foundations).map(key => {
  const file = path.join(clubsDir, `${key}.json`);
  if (!fs.existsSync(file)) {
      console.log(`Not found: ${file}`);
      return false;
  }
  let content = fs.readFileSync(file, 'utf8');
  let data = JSON.parse(content);
  
  if (data.historia && data.historia.length > 0) {
    data.historia[0].hito = foundations[key].hito;
    data.historia[0].desc = foundations[key].desc;
  }
  
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
  return true;
});

console.log(`${processed.filter(Boolean).length} club histories rewritten in a journalistic style.`);
