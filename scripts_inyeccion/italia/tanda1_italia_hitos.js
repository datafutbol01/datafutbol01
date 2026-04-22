const fs = require('fs');

const data = {
  'atalanta.json': [
    {
      "ano": "1907",
      "hito": "Fundación del Atalanta Bergamasca Calcio",
      "desc": "El 17 de octubre de 1907, en el corazón de la Ciudad Alta de Bérgamo, la inquietud deportiva de un grupo de jóvenes estudiantes del prestigioso Liceo Clásico Paolo Sarpi dio luz a una leyenda. Eugenio Urio, Giulio y Ferruccio Amati, Alessandro Forlini y Giovanni Roberti ansiaban romper con la monotonía de las sociedades gimnásticas tradicionales. Rechazando lo mundano, bautizaron a su sociedad con el nombre de Atalanta, la indomable heroína de la mitología griega, jurando nobleza y velocidad. Aunque al principio carecían de un campo estable, este espíritu rebelde cimentó las bases de la 'Dea'. En 1920, la fusión con la sociedad bergamasca Bergamasca di Ginnastica e Scherma daría lugar a los definitivos colores nerazzurri. Así nacía un club destinado a representar el orgullo obrero y terrenal de Bérgamo frente a los colosos ricos de Lombardía."
    },
    {
      "ano": "1963",
      "hito": "La Conquista de la Coppa Italia",
      "desc": "La consagración absoluta en el panorama nacional llegó el 2 de junio de 1963. En el asfalto hirviente de San Siro, aquella Atalanta capitaneada por Angelo Domenghini y guiada por Paolo Tabanelli arrolló al Torino por 3-1. Fue el primer gran trofeo de la Dea, un grito de gloria que demostró que el orgullo de provincia podía doblegar a la aristocracia."
    },
    {
      "ano": "1988",
      "hito": "El Milagro en Europa desde la Serie B",
      "desc": "Bajo la icónica dirección de Emiliano Mondonico, la Atalanta escribió quizás la página más romántica del fútbol continental. Militando en la Serie B, el equipo desató una furia inaudita en la Recopa de Europa, eliminando al Sporting de Lisboa en una campaña épica y alcanzando las semifinales europeas, un hito irrepetible para un club de la segunda división italiana."
    },
    {
      "ano": "2019",
      "hito": "El Desembarco en la Champions League",
      "desc": "La revolución táctica comandada por Gian Piero Gasperini fructificó en un fútbol total, asfixiante y maravillosamente ofensivo. Un tercer puesto en la Serie A otorgó a la Dea su primera clasificación histórica a la UEFA Champions League, culminando un proyecto que transformó para siempre la identidad del modesto equipo bergamasco en una máquina temida en todo el continente."
    },
    {
      "ano": "2024",
      "hito": "La Noche Mágica de Dublín y la Europa League",
      "desc": "El cénit absoluto de la historia nerazzurra. En un despliegue de superioridad táctica y talento puro, la Atalanta destrozó por 3-0 al invicto Bayer Leverkusen en la final de la UEFA Europa League con un heroico hat-trick de Ademola Lookman. La Diosa bajó del cielo para alzar su primer título internacional y consagrar la 'Era Gasperini' en la eternidad del fútbol."
    }
  ],
  'bologna.json': [
    {
      "ano": "1909",
      "hito": "El Nacimiento en la Cervecería Ronzani",
      "desc": "A los pies de los soportales del centro histórico, el 3 de octubre de 1909, el fervor europeo por el 'foot-ball' echó raíces en la Cervecería Ronzani de Vía Spaderie. El visionario austriaco Emilio Arnstein, contagiado por la fiebre del balón en Viena y Praga, encontró en el estudiante boloñés Carlo Sandoni y en el dentista suizo Louis Rauch (primer presidente) a sus cómplices perfectos para fundar el Bologna Football Club. Adoptaron de inmediato las rayas rojas y azules del Colegio Wiggin de Suiza o, según el mito, la indumentaria del Crystal Palace. Aquellos primeros jóvenes valientes patearon sus primeras pelotas en los Prados de Caprara, forjando el espíritu indomable de una escuadra que muy pronto mutaría de un grupo de soñadores a una temible potencia futbolística que paralizaría a toda Italia."
    },
    {
      "ano": "1925",
      "hito": "El Primer Scudetto y el Mito del 'Squadrone'",
      "desc": "Liderados por el mítico goleador Angelo Schiavio, los rossoblù conquistaron su primer Campeonato Nacional tras una carnicería épica en finales múltiples contra el Genoa. Nacía así en la prensa y en el clamor popular 'Il squadrone che tremare il mondo fa', un equipo feroz y elegante que dominaría la Italia de entreguerras marcando una época."
    },
    {
      "ano": "1964",
      "hito": "El Séptimo Scudetto y el Playoff de la Muerte",
      "desc": "En el año más dramático de su historia, marcado por el trágico fallecimiento de su amado presidente Renato Dall'Ara días antes del final, el Bologna conquistó su séptimo Scudetto. Lo hizo en el único partido de desempate por el título en la historia de la Serie A, doblegando 2-0 al invencible Inter de Helenio Herrera en un acto de justicia poética y coraje monumental."
    },
    {
      "ano": "1998",
      "hito": "El Renacimiento Europeo y Roberto Baggio",
      "desc": "Tras décadas de oscuridad y purgas por las divisiones de ascenso, la resurrección rossoblù cristalizó en la mágica temporada con Roberto Baggio a los mandos. El 'Divin Codino' batió todos sus récords goleadores, devolvió la ilusión a la ciudad e impulsó al Bologna a conquistar la Copa Intertoto, retornando con honores al fútbol continental."
    },
    {
      "ano": "2024",
      "hito": "El Milagro de Thiago Motta y el Regreso a la Champions",
      "desc": "Bajo la batuta del revolucionario técnico Thiago Motta, el Bologna desplegó el fútbol más moderno, asociativo y seductor de Italia. Rompiendo cualquier pronóstico económico y deportivo, alcanzaron un histórico quinto puesto, clasificándose asombrosamente a la Liga de Campeones y devolviendo, 60 años después, la música estelar a la noche de Renato Dall'Ara."
    }
  ],
  'cagliari.json': [
    {
      "ano": "1920",
      "hito": "La Fundación en el Corazón de Cerdeña",
      "desc": "El 30 de mayo de 1920, en el Cinema Eden del centro, el cirujano Gaetano Fichera materializó el anhelo de una isla entera al fundar el Cagliari Football Club. El naciente equipo, que adoptó el rossoblù como homenaje a los colores de la bandera de la ciudad y de la región, debutó humillando a la sociedad de estudiantes de Torres. Sin un campo fijo inicializado (jugaban en el modesto campo Stallaggio Meloni), aquellos fundadores plantaron la semilla de un club destinado a no ser solo una escuadra, sino la auténtica selección nacional del pueblo sardo. Un escudo de orgullo mediterráneo contra la arrogancia y la riqueza de la península continental, el pilar sobre el que Cerdeña construiría su voz en el mapa futbolístico."
    },
    {
      "ano": "1964",
      "hito": "El Desembarco en la Serie A y el Rombo di Tuono",
      "desc": "El ascenso por primera vez a la máxima categoría coincidió con la explosión de un joven delantero lombardo adoptado por la isla: Luigi 'Gigi' Riva. Su bota izquierda, un cañón incontenible, le valió el apodo de 'Rombo di Tuono' y empezó a cimentar el respeto y el temor hacia esta pequeña entidad sureña en las canchas de lujo."
    },
    {
      "ano": "1970",
      "hito": "El Scudetto Sardo: La Rebelión de los Pobres",
      "desc": "De la mano del genial y bohemio entrenador Manlio Scopigno, y con Gigi Riva consagrado como rey de los goleadores, el Cagliari protagonizó la hazaña más romántica del fútbol italiano: su primer y único Scudetto. Fue la venganza poética del sur obrero y olvidado que humilló al opulento y poderoso norte, desatando una euforia insular perpetua."
    },
    {
      "ano": "1994",
      "hito": "La Cabalgada en la Copa de la UEFA",
      "desc": "Tras resurgir de sus cenizas, la década de los 90 regaló a los sardos noches europeas antológicas. Con Francescoli y después Luis Oliveira, el equipo dirigido por Bruno Giorgi llegó a unas milagrosas semifinales de Copa de la UEFA en 1994, eliminando heroicamente a la Juventus y dejando el nombre de Cerdeña tatuado en el continente."
    },
    {
      "ano": "2023",
      "hito": "El Regreso de Ranieri y el Milagro en San Nicola",
      "desc": "Cuando el descenso a Serie C parecía inminente, regresó Claudio Ranieri, figura paternal del club. Con una remontada espectacular, el Cagliari escaló hasta el playoff y, en el minuto 94 de la final en campo del Bari, un heroico tanto de Leonardo Pavoletti desató el éxtasis absoluto y un mágico e inesperado retorno a la Serie A."
    }
  ],
  'como.json': [
    {
      "ano": "1907",
      "hito": "Nacimiento a las Orillas del Lago",
      "desc": "En el apogeo del primer romanticismo futbolístico, un 25 de julio de 1907, en las bulliciosas mesas del Bar Taroni, varios socios fundaron el Como Foot-Ball Club. Ante las frías aguas del lago y el imponente paisaje alpino, el primer comité apostó por este nuevo deporte inglés que fascinaba a la burguesía local. Sus primeros partidos, batallas campales en terrenos rústicos, forjaron una identidad férrea. Aunque tardarían décadas en adoptar la indumentaria azzurra que reflejaba su famoso lago, la tenacidad de aquellos pioneros lombardos en un rincón idílico del norte construyó los cimientos de una escuadra acostumbrada a batallar contra la adversidad, siempre flotando entre la nobleza estética de su entorno y la dureza de las ligas de ascenso."
    },
    {
      "ano": "1949",
      "hito": "El Primer Bautismo en la Serie A",
      "desc": "Después de sangrientas batallas en el ascenso de posguerra, el Como conquistó finalmente la Serie B. El desembarco oficial en la máxima categoría desató una locura en las riberas del lago, completando una estadía de cuatro años que sentó al club por primera vez en la misma mesa de gigantes milaneses y turineses."
    },
    {
      "ano": "1980",
      "hito": "La Década de Oro del Lariano",
      "desc": "Los años 80 conformaron el ciclo más brillante de la época contemporánea lariana. Consolidándose como un temido visitante, dos dolorosas caídas fueron curadas prontamente con épicos ascensos, desfilando por el modesto Giuseppe Sinigaglia figuras de clase mundial que hicieron de Como una fortaleza incómoda para cualquier titán del Calcio italiano."
    },
    {
      "ano": "2002",
      "hito": "El Efímero Regreso y la Doble Caída a los Infiernos",
      "desc": "Bajo el mando de Loris Dominissini, el equipo obró el milagro encadenando saltos consecutivos de la C1 a la Serie A. Sin embargo, la euforia dio paso a la catástrofe institucional. Tras un año ruin en la élite, el club colapsó, sufriendo múltiples quiebras que borraron su escudo del mapa profesional italiano de forma casi definitiva."
    },
    {
      "ano": "2024",
      "hito": "La Resurrección de los Hermanos Hartono y Cesc",
      "desc": "Reconstruidos desde la Serie D gracias al poderoso capital del consorcio indonesio Djarum, el Como 1907 vivió un renacer cinematográfico. Con el español Cesc Fàbregas impulsando el proyecto deportivo, el club selló un romántico y electrizante retorno a la Serie A 21 años después, revolucionando la tranquilidad milenaria del lago."
    }
  ],
  'cremonese.json': [
    {
      "ano": "1903",
      "hito": "Orígenes en la Trattoria La Varesina",
      "desc": "La noche del 24 de marzo de 1903, inmersos en el humo y el clamor de la Trattoria La Varesina, un grupo de visionarios de la alta burguesía cremonense dieron vida a la Unione Sportiva Cremonese. Nació no solo como una escuadra de balompié, sino como una sociedad polideportiva completa bajo el lema 'la mente sana en el cuerpo sano'. Fue una década después, en 1914, tras ensayar con camisas blancas, cuando adoptaron la histórica y extrañísima combinación grigiorossa (gris y roja). Estos colores inconfundibles, fruto del azar textil y la economía de los proveedores lombardos, dotaron a los pioneros de un aura bohemia que los diferenció permanentemente de todas las demás escuadras de Lombardía."
    },
    {
      "ano": "1929",
      "hito": "Los Primeros Pasos en el Albor de la Serie A",
      "desc": "El arraigo en las divisiones altas de los años 20 pavimentó su invitación a participar de la primera temporada de la nueva y unificada Serie A italiana en el formato de todos contra todos. Aunque aquel debut absoluto resultó en descenso, colocó al grigiorosso para siempre en los libros fundacionales del Calcio que hoy conocemos."
    },
    {
      "ano": "1993",
      "hito": "La Conquista de Wembley",
      "desc": "En pleno Siglo XX y militando en divisiones de ascenso, la Cremonese protagonizó de la mano del técnico Gigi Simoni la mayor epopeya foránea para un equipo de su estatus. Alcanzaron la mítica final de la Copa Anglo-Italiana disputada en el Templo Sagrado de Wembley, destrozando al Derby County por 3-1 ante la mirada atónita del mundo."
    },
    {
      "ano": "1995",
      "hito": "La Trinchera Máxima con Simoni y Chiesa",
      "desc": "Durante los noventa, la Cremonese instauró una temible regularidad para un club humilde. Manteniéndose heroicamente varias temporadas consecutivas en Serie A gracias a artilleros sublimes como Enrico Chiesa, convirtieron el humilde estadio Giovanni Zini en un bastión casi inexpugnable, en la cual hasta los campeones temblaban."
    },
    {
      "ano": "2022",
      "hito": "El Despertar Tras 26 Años de Sombras",
      "desc": "Luego de tres décadas de hundimiento, desidias y exilio doloroso por las catacumbas de la Serie C y B, la escuadra dirigida por el prometedor Fabio Pecchia completó un campeonato excepcional. Devolviendo los colores lombardos gris y rojo a la Serie A, cerraron la sequía más larga en la historia rojigrís para lamento eterno de sus críticos."
    }
  ]
};

const basePath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia/';

Object.keys(data).forEach(filename => {
  const filepath = basePath + filename;
  const contentJSON = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  
  contentJSON.historia = data[filename];
  
  fs.writeFileSync(filepath, JSON.stringify(contentJSON, null, 2), 'utf8');
  console.log(`Updated ${filename}`);
});
