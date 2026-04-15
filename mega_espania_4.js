const fs = require('fs');
const path = require('path');

const base = 'C:\\\\Users\\\\gonza\\\\futbolhistoria\\\\clubes\\\\app\\\\src\\\\data\\\\clubes\\\\espania';

const data = {
  'real-betis': {
    "datos": {
      "nombre_completo": "Real Betis Balompié",
      "nombre_oficial": "Real Betis Balompié S.A.D.",
      "nombre_corto": "Real Betis",
      "apodo": "Béticos, Verdiblancos, Heliopolitanos",
      "fundacion": "12 de septiembre de 1907",
      "estadio_actual": "Benito Villamarín",
      "estadio_apodo": "El Villamarín",
      "estadio_capacidad": 60721,
      "estadio_inauguracion": "17 de marzo de 1929",
      "estadio_lat": 37.3565,
      "estadio_lng": -5.9818,
      "estadio_direccion": "Av. de Heliópolis, s/n, Bellavista-La Palmera, 41012 Sevilla, España",
      "socios": 61000,
      "records": { "maximo_goleador": "Rubén Castro (148)", "mas_presencias": "Joaquín Sánchez (528)" }
    },
    "historia": [
      "El Sevilla Balompié nació en 1907 fundado por estudiantes de la Escuela Politécnica. En 1914 se fusionó con el Betis Football Club, adoptando el definitivo 'Real Betis Balompié', instaurando una filosofía arraigada popularmente bajo el célebre mantra 'Manquepierda' que define el espíritu irrompible de su estoica hinchada.",
      "El equipo alcanzó su momento más deslumbrante temprano en la historia al coronarse Campeón de La Liga en 1935 bajo la batuta del irlandés Patrick O'Connell, un hito legendario para los verdiblancos poco antes de que la guerra truncara su inercia dorada.",
      "Con la magia infinita de leyendas modernas como Joaquín Sánchez y el coraje incondicional de su afición, el club ha alardeado victorias superlativas en las últimas décadas levantando Copas del Rey, compitiendo asiduamente en lides europeas y blindando el misticismo del Estadio Benito Villamarín como un templo infranqueable en Europa."
    ],
    "canchas": [
      { "nombre": "Campo del Patronato Obrero", "desde": "1918", "hasta": "1929", "direccion": "El Porvenir, Sevilla", "lat": 37.373, "lng": -5.981, "obs": "Terreno cimentado en la ebullición del origen auriverde barrial." },
      { "nombre": "Estadio Benito Villamarín", "desde": "1929", "hasta": "Presente", "direccion": "Av. de Heliópolis, s/n, Sevilla", "lat": 37.3565, "lng": -5.9818, "obs": "Colosal templo heliopolitano. Reconstruido para el Mundial '82 y ampliado titánicamente en la actualidad." }
    ],
    "equipacion": [
      { "desde": "1907", "hasta": "1911", "tipo": "pleno", "c1": "#0000ff", "c2": "#ffffff", "sh": "#ffffff", "me": "#000000", "desc": "Colores lisos y abotonados. Reminiscencias al pasado pre-fusión." },
      { "desde": "1911", "hasta": "Presente", "tipo": "rayas-verticales", "c1": "#008a3b", "c2": "#ffffff", "sh": "#ffffff", "me": "#008a3b", "desc": "Clásicas franjas trece barras blanquiverdes; indumentaria forjada y bendecida por el fundador para asimilar a la provincia andaluza." }
    ],
    "titulos": [
      { "nombre": "La Liga", "cantidad": 1, "anios": ["1934-35"] },
      { "nombre": "Copa del Rey", "cantidad": 3, "anios": ["1977", "2005", "2022"] }
    ],
    "idolos": [
      { "nombre": "Joaquín Sánchez", "pos": "Extremo", "apodo": "El del Puerto", "periodo": "2000-2006, 2015-2023", "desc": "Símbolo insuperable del beticismo. Alegría, desborde infinito y capitanía vitalicia." },
      { "nombre": "Rubén Castro", "pos": "Delantero", "apodo": "Rubén", "periodo": "2010-2018", "desc": "El ejecutor silencioso; artillero de época que trituró los récords históricos salvando deportivamente al club." },
      { "nombre": "Rafael Gordillo", "pos": "Defensa", "apodo": "El Vendaval del Polígono", "periodo": "1976-1985, 1992-1995", "desc": "Las medias bajas más reconocibles de España corriendo frenéticamente por el carril izquierdo verde." },
      { "nombre": "Julio Cardeñosa", "pos": "Centrocampista", "apodo": "El Flaco", "periodo": "1974-1985", "desc": "Elegancia sutil y cerebro pensante de una de las mejores alineaciones coperas en la historia sevillana." },
      { "nombre": "Alfonso Pérez", "pos": "Delantero", "apodo": "Alfonsito", "periodo": "1995-2000", "desc": "Botines blancos deslumbrantes; ícono ofensivo absoluto del final de milenio aportando destellos de oro magno." }
    ],
    "goleadores_historicos": [
      { "nombre": "Rubén Castro", "goles": 148, "periodo": "2010-2018", "partidos": 290 },
      { "nombre": "Poli Rincón", "goles": 105, "periodo": "1981-1989", "partidos": 223 },
      { "nombre": "Rogelio Sosa", "goles": 92, "periodo": "1962-1978", "partidos": 357 },
      { "nombre": "Alfonso Pérez", "goles": 80, "periodo": "1995-2000", "partidos": 197 },
      { "nombre": "Manolo Domínguez", "goles": 78, "periodo": "1931-1936", "partidos": 100 }
    ],
    "presencias_historicas": [
      { "nombre": "Joaquín Sánchez", "partidos": 528, "periodo": "2000-2006, 2015-2023" },
      { "nombre": "José Ramón Esnaola", "partidos": 460, "periodo": "1973-1985" },
      { "nombre": "Rafael Gordillo", "partidos": 411, "periodo": "1976-1985, 1992-1995" },
      { "nombre": "Juan José Cañas", "partidos": 359, "periodo": "1993-2006" },
      { "nombre": "Rogelio Sosa", "partidos": 357, "periodo": "1962-1978" }
    ]
  },
  'real-sociedad': {
    "datos": {
      "nombre_completo": "Real Sociedad de Fútbol",
      "nombre_oficial": "Real Sociedad de Fútbol S.A.D.",
      "nombre_corto": "Real Sociedad",
      "apodo": "Txuri-Urdines",
      "fundacion": "7 de septiembre de 1909",
      "estadio_actual": "Estadio Anoeta",
      "estadio_apodo": "Reale Arena",
      "estadio_capacidad": 40000,
      "estadio_inauguracion": "13 de agosto de 1993",
      "estadio_lat": 43.3013,
      "estadio_lng": -1.9734,
      "estadio_direccion": "Anoeta Pasealekua, 1, 20014 Donostia, Gipuzkoa, España",
      "socios": 38000,
      "records": { "maximo_goleador": "Jesús María Satrústegui (162)", "mas_presencias": "Alberto Górriz (599)" }
    },
    "historia": [
      "Nacido bajo el auspicio de jóvenes estudiantes y aristócratas veraneantes en San Sebastián, el San Sebastián Recreation Club fraguó la identidad de la Real Sociedad. Su reconocimiento monárquico en 1910 solidificó un linaje vasco caracterizado por la garra insobornable y una comunión inalterable con la provincia guipuzcoana.",
      "La edad de oro donostiarra irrumpió tempestuosamente en la década de los ochenta. Desafiando al centralismo balompédico y aferrándose devotamente a una cantera dorada comandada por Arconada y Zamora, el equipo izó las banderas blanquiazules en lo más alto levantando dos ligas consecutivas que forjaron a fuego su estirpe épica.",
      "Fiel a las costumbres norteñas de elegancia y paciencia, la Real Sociedad contemporánea resurgió con firmeza conquistando trofeos recientes como la final vasca de Copa del Rey de 2020. Bajo las bóvedas rediseñadas del moderno Reale Arena, los Txuri-Urdines despliegan hoy un balompié lírico que desata pasiones en Europa."
    ],
    "canchas": [
      { "nombre": "Campo de Atocha", "desde": "1913", "hasta": "1993", "direccion": "Egia, San Sebastián", "lat": 43.318, "lng": -1.970, "obs": "Mítico feudo abigarrado. El público sentía literalmente la respiración de los defensores; fue el cadalso invencible de los 80." },
      { "nombre": "Estadio de Anoeta", "desde": "1993", "hasta": "Presente", "direccion": "Anoeta Pasealekua, 1, Donostia", "lat": 43.3013, "lng": -1.9734, "obs": "Modernizado profundamente para eliminar sus pistas de atletismo y resucitar la acústica británica envolvente del antiguo Atocha." }
    ],
    "equipacion": [
      { "desde": "1909", "hasta": "Presente", "tipo": "rayas-verticales", "c1": "#00529F", "c2": "#ffffff", "sh": "#ffffff", "me": "#00529F", "desc": "Camisola listada azul de ultramar y blanco níveo de forma intocable, un homenaje sempiterno al pendón e izada marítima vaska." }
    ],
    "titulos": [
      { "nombre": "La Liga", "cantidad": 2, "anios": ["1980-81", "1981-82"] },
      { "nombre": "Copa del Rey", "cantidad": 3, "anios": ["1909", "1987", "2020"] }
    ],
    "idolos": [
      { "nombre": "Luis Arconada", "pos": "Portero", "apodo": "El Pulpo", "periodo": "1974-1989", "desc": "Deidad intocable bajo palos, portaba sus calcetas oscuras como religión, capitaneando la edad de oro máxima de todo el País Vasco." },
      { "nombre": "Jesús María Zamora", "pos": "Centrocampista", "apodo": "Zamora", "periodo": "1974-1989", "desc": "Zancada divina en el mediocentro; creador y artífice de la mítica anotación in extremis en El Molinón para sellar la primera liga liguera de los ochentas." },
      { "nombre": "Roberto López Ufarte", "pos": "Extremo Izquierdo", "apodo": "El Pequeño Diablo", "periodo": "1975-1987", "desc": "Ingenio diabólico e insurrecto en los desbordes; una brisa imparable que rompía cualquier esquema defensivo peninsular de su época dura." },
      { "nombre": "Darko Kovačević", "pos": "Delantero", "apodo": "Darko", "periodo": "1996-2007", "desc": "Emblema del exilio ofensivo; rematador mortífero y torre eslava que aterrorizó defensores en el inolvidable subcampeonato en los albores del milenio." },
      { "nombre": "Mikel Oyarzabal", "pos": "Extremo", "apodo": "El Pie Grande", "periodo": "2015-Presente", "desc": "Canterano supremo y redentor moderno; el capitán de la estirpe cuya penalidad en La Cartuja enterró años de ostracismo llevantando la copa contemporánea." }
    ],
    "goleadores_historicos": [
      { "nombre": "Jesús María Satrústegui", "goles": 162, "periodo": "1973-1986", "partidos": 374 },
      { "nombre": "Roberto López Ufarte", "goles": 129, "periodo": "1975-1987", "partidos": 474 },
      { "nombre": "Cholín", "goles": 127, "periodo": "1927-1940", "partidos": 213 },
      { "nombre": "Darko Kovačević", "goles": 107, "periodo": "1996-2007", "partidos": 286 },
      { "nombre": "Mikel Oyarzabal", "goles": 97, "periodo": "2015-", "partidos": 343 }
    ],
    "presencias_historicas": [
      { "nombre": "Alberto Górriz", "partidos": 599, "periodo": "1979-1993" },
      { "nombre": "Juan Antonio Larrañaga", "partidos": 589, "periodo": "1980-1994" },
      { "nombre": "Jesús María Zamora", "partidos": 588, "periodo": "1974-1989" },
      { "nombre": "Luis Arconada", "partidos": 551, "periodo": "1974-1989" },
      { "nombre": "Xabi Prieto", "partidos": 532, "periodo": "2003-2018" }
    ]
  }
};

Object.keys(data).forEach(id => {
  const fPath = path.join(base, id + '.json');
  let current = {};
  if (fs.existsSync(fPath)) {
    current = JSON.parse(fs.readFileSync(fPath, 'utf8'));
  }
  current.datos = { ...current.datos, ...data[id].datos };
  current.historia = data[id].historia;
  current.canchas = data[id].canchas;
  current.equipacion = data[id].equipacion;
  current.titulos = data[id].titulos;
  current.idolos = data[id].idolos;
  current.goleadores_historicos = data[id].goleadores_historicos;
  current.presencias_historicas = data[id].presencias_historicas;
  
  fs.writeFileSync(fPath, JSON.stringify(current, null, 2));
});
console.log('Fase 4 Completada');
