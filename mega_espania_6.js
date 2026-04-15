const fs = require('fs');
const path = require('path');

const base = 'C:\\\\Users\\\\gonza\\\\futbolhistoria\\\\clubes\\\\app\\\\src\\\\data\\\\clubes\\\\espania';

const data = {
  'mallorca': {
    "datos": { "nombre_corto": "RCD Mallorca", "estadio_actual": "Estadi Mallorca Son Moix", "estadio_direccion": "Camí dels Reis, s/n, 07011 Palma, Illes Balears", "estadio_lat": 39.5898, "estadio_lng": 2.6300 },
    "historia": [ "Fundado el 5 de marzo de 1916 por el ingeniero Adolfo Vázquez, el club balear nació como la Sociedad Alfonso XIII. Adquirió su nombre definitivo durante la Segunda República.", "Su cúspide de plata acaeció a fines del siglo XX bajo la tutela de Héctor Cúper y posteriormente coronándose campeones de la Copa del Rey de 2003 con Samuel Eto'o." ],
    "canchas": [ { "nombre": "Lluís Sitjar", "desde": "1945", "hasta": "1999", "direccion": "Palma de Mallorca", "lat": 39.576, "lng": 2.645, "obs": "Mítico feudo escarpado mallorquín." }, { "nombre": "Son Moix", "desde": "1999", "hasta": "Presente", "direccion": "Camí dels Reis, s/n, Palma", "lat": 39.5898, "lng": 2.6300, "obs": "Reconstruido íntegramente suprimiendo la pista atlética." } ],
    "equipacion": [ { "desde": "1916", "hasta": "Presente", "tipo": "pleno", "c1": "#cc0000", "c2": "#cc0000", "sh": "#000000", "me": "#000000", "desc": "Camiseta bermellona con pantalones azabache." } ],
    "titulos": [ { "nombre": "Copa del Rey", "cantidad": 1, "anios": ["2003"] } ],
    "idolos": [ { "nombre": "Samuel Eto'o", "pos": "Delantero", "apodo": "El León", "periodo": "2000-2004", "desc": "Pantera camerunés desequilibrante, artífice estelar de la Copa 2003." }, { "nombre": "Miguel Ángel Nadal", "pos": "Defensa", "apodo": "La Bestia", "periodo": "1986-1991, 1999-2005", "desc": "Titán balear absoluto regresado triunfalmente para levantar plata." } ],
    "goleadores_historicos": [ { "nombre": "Samuel Eto'o", "goles": 70, "periodo": "2000-2004", "partidos": 165 }, { "nombre": "Arango", "goles": 50, "periodo": "2004-2009", "partidos": 196 } ],
    "presencias_historicas": [ { "nombre": "Miguel Ángel Nadal", "partidos": 255, "periodo": "1986-1991, 1999-2005" }, { "nombre": "Víctor Casadesús", "partidos": 250, "periodo": "2004-2014" } ]
  },
  'valladolid': {
    "datos": { "nombre_corto": "Real Valladolid", "estadio_actual": "Estadio José Zorrilla", "estadio_direccion": "Av. del Mundial 82, s/n, 47014 Valladolid", "estadio_lat": 41.6444, "estadio_lng": -4.7612 },
    "historia": [ "Nace el 20 de junio de 1928 de la intrépida fusión entre el Real Unión Deportiva y el Club Deportivo Español. Forjó la estirpe pucelana blanquivioleta en los páramos castellanos.", "Templo de coraje y cantera inagotable. Ha sobrevivido estoicamente alternando categorías pero alzando el trofeo de la mítica Copa de la Liga de 1984." ],
    "canchas": [ { "nombre": "Viejo Zorrilla", "desde": "1940", "hasta": "1982", "direccion": "Valladolid", "lat": 41.642, "lng": -4.750, "obs": "Antiguo recinto del milagro blanquivioleta." }, { "nombre": "Nuevo José Zorrilla", "desde": "1982", "hasta": "Presente", "direccion": "Av. Mundial 82, s/n", "lat": 41.6444, "lng": -4.7612, "obs": "Ergido monumentalmente para el Mundial '82." } ],
    "equipacion": [ { "desde": "1928", "hasta": "Presente", "tipo": "rayas-verticales", "c1": "#6f295b", "c2": "#ffffff", "sh": "#ffffff", "me": "#ffffff", "desc": "Singulares bastones violetas y blancos impertérritos." } ],
    "titulos": [ { "nombre": "Copa de la Liga", "cantidad": 1, "anios": ["1984"] } ],
    "idolos": [ { "nombre": "Jorge Alberto González", "pos": "Delantero", "apodo": "Mágico", "periodo": "1984-1985", "desc": "Mago irrepetible, paso corto pero destellos cegadores castellanos." }, { "nombre": "Alberto López", "pos": "Delantero", "apodo": "Alberto", "periodo": "1987-1995", "desc": "Histórico rematador incansable del club." } ],
    "goleadores_historicos": [ { "nombre": "Javi Guerra", "goles": 73, "periodo": "2010-2014", "partidos": 154 } ],
    "presencias_historicas": [ { "nombre": "Alberto López", "partidos": 361, "periodo": "1987-1995" } ]
  },
  'leganes': {
    "datos": { "nombre_corto": "CD Leganés", "estadio_actual": "Estadio Municipal Butarque", "estadio_direccion": "C. de la Arquitectura, s/n, 28914 Leganés, Madrid", "estadio_lat": 40.3400, "estadio_lng": -3.7600 },
    "historia": [ "Institucionalizado formalmente en 1928 bajo el manto blanquiazul del coraje metropolitano sur.", "Tardó siete décadas escarbando barro obrero hasta cristalizar un ascenso divino en 2016 y noquear al Real Madrid en célebres copas domésticas, consagrando a Butarque." ],
    "canchas": [ { "nombre": "Municipal Butarque", "desde": "1998", "hasta": "Presente", "direccion": "Leganés", "lat": 40.3400, "lng": -3.7600, "obs": "Cuna del pepinazo futbolístico madrileño." } ],
    "equipacion": [ { "desde": "1928", "hasta": "Presente", "tipo": "rayas-verticales", "c1": "#0000ff", "c2": "#ffffff", "sh": "#ffffff", "me": "#ffffff", "desc": "Listones azules rematados con medias albas firmes." } ],
    "titulos": [],
    "idolos": [ { "nombre": "Alexander Szymanowski", "pos": "Extremo", "apodo": "Szyma", "periodo": "2015-2020", "desc": "Artífice celestial con la zurda del histórico ascenso del hito sur." } ],
    "goleadores_historicos": [ { "nombre": "Miguel Ángel", "goles": 65, "periodo": "1993-1998", "partidos": 200 } ],
    "presencias_historicas": [ { "nombre": "Martín Mantovani", "partidos": 166, "periodo": "2013-2018" } ]
  },
  'getafe': {
    "datos": { "nombre_corto": "Getafe CF", "estadio_actual": "Coliseum", "estadio_direccion": "Av. Teresa de Calcuta, s/n, 28903 Getafe, Madrid", "estadio_lat": 40.3255, "estadio_lng": -3.7147 },
    "historia": [ "El Club fundado canónicamente en 1983 recogió el testigo azulón irrompible de la localidad madrileña periférica.", "Inyectó el gen milagroso alzanzando dos históricas finales coperas consecutivas y exterminando esquemas en competiciones UEFA bajo liderazgos pragmáticos de Bordalás." ],
    "canchas": [ { "nombre": "Coliseum", "desde": "1998", "hasta": "Presente", "direccion": "Av. Teresa de Calcuta, Getafe", "lat": 40.3255, "lng": -3.7147, "obs": "Recinto áspero, imbatible y gladiador por antonomasia." } ],
    "equipacion": [ { "desde": "1983", "hasta": "Presente", "tipo": "pleno", "c1": "#0000ff", "c2": "#0000ff", "sh": "#0000ff", "me": "#0000ff", "desc": "Mono azul añil completo encarnando su rudo blindaje 'Azulón'." } ],
    "titulos": [],
    "idolos": [ { "nombre": "Manu del Moral", "pos": "Delantero", "apodo": "Manu", "periodo": "2006-2011", "desc": "Cañonero histórico inalcanzable de la cuna del sur madrileño en la casta UEFA." } ],
    "goleadores_historicos": [ { "nombre": "Manu del Moral", "goles": 39, "periodo": "2006-2011", "partidos": 159 } ],
    "presencias_historicas": [ { "nombre": "Javier Casquero", "partidos": 190, "periodo": "2006-2012" } ]
  },
  'las-palmas': {
    "datos": { "nombre_corto": "UD Las Palmas", "estadio_actual": "Estadio de Gran Canaria", "estadio_direccion": "C. Fondos de Segura, s/n, 35019 Las Palmas de G.C.", "estadio_lat": 28.1000, "estadio_lng": -15.4560 },
    "historia": [ "Fusión obligada y portentosa de cinco clubes locales el 22 de agosto de 1949, destinada a conjurar la evasión de talentos insulares al continente.", "Tejiendo un fútbol filigrana de rítmica canaria indescifrable, pelearon valerosamente campeonatos ligueros en los cincuenta arrastrando el amarillo estival en Europa." ],
    "canchas": [ { "nombre": "Estadio Insular", "desde": "1949", "hasta": "2003", "direccion": "Ciudad Jardín, Las Palmas", "lat": 28.125, "lng": -15.432, "obs": "Viejo caldero abrasador encallado en el océano." }, { "nombre": "Gran Canaria", "desde": "2003", "hasta": "Presente", "direccion": "Siete Palmas, Las Palmas", "lat": 28.1000, "lng": -15.4560, "obs": "Mastodonte ultraperiférico adaptado sin foso ni pistas atléticas." } ],
    "equipacion": [ { "desde": "1949", "hasta": "Presente", "tipo": "pleno", "c1": "#ffff00", "c2": "#ffff00", "sh": "#0000ff", "me": "#0000ff", "desc": "Tricota solar impoluta y pantalones navales de la realeza." } ],
    "titulos": [],
    "idolos": [ { "nombre": "Germán Dévora", "pos": "Centrocampista", "apodo": "El Maestro", "periodo": "1962-1978", "desc": "Luminaria inexpugnable isleña, erigiendo el balompié lírico canario a esferas celestiales." } ],
    "goleadores_historicos": [ { "nombre": "Germán Dévora", "goles": 119, "periodo": "1962-1978", "partidos": 453 } ],
    "presencias_historicas": [ { "nombre": "David García", "partidos": 474, "periodo": "2003-2019" } ]
  },
  'alaves': {
    "datos": { "nombre_corto": "Deportivo Alavés", "estadio_actual": "Mendizorroza", "estadio_direccion": "P.º de Cervantes, s/n, 01007 Vitoria-Gasteiz, Álava", "estadio_lat": 42.8369, "estadio_lng": -2.6881 },
    "historia": [ "Forjado en el gélido ambiente de Vitoria en 1921, el Glorioso amoldó una identidad férrea resistente a estepas castellanas y temporales cantábricos.", "Conmovieron al planeta esférico entero en 2001 disputando agónicamente la final continental más épica y cruenta al caer 5-4 ante el monumental Liverpool batiéndose con furia indomable." ],
    "canchas": [ { "nombre": "Mendizorroza", "desde": "1924", "hasta": "Presente", "direccion": "Vitoria-Gasteiz, Álava", "lat": 42.8369, "lng": -2.6881, "obs": "Fortaleza inquebrantable centenaria, testigo de gestas de fango y nieve letal." } ],
    "equipacion": [ { "desde": "1921", "hasta": "Presente", "tipo": "rayas-verticales", "c1": "#0000ff", "c2": "#ffffff", "sh": "#0000ff", "me": "#0000ff", "desc": "Listones magnos blanquiazules imitando pendones clásicos norteños." } ],
    "titulos": [],
    "idolos": [ { "nombre": "Javi Moreno", "pos": "Delantero", "apodo": "El Búfalo", "periodo": "1998-2001", "desc": "Ariete desbocado; rematador mortífero en el periplo asombroso que colapsó a media Europa en UEFA." } ],
    "goleadores_historicos": [ { "nombre": "Rubén Navarro", "goles": 51, "periodo": "2001-2007", "partidos": 204 } ],
    "presencias_historicas": [ { "nombre": "Martín Astudillo", "partidos": 313, "periodo": "1999-2008" } ]
  },
  'rayo-vallecano': {
    "datos": { "nombre_corto": "Rayo Vallecano", "estadio_actual": "Estadio de Vallecas", "estadio_direccion": "C. del Payaso Fofó, 0, Puente de Vallecas, 28018 Madrid", "estadio_lat": 40.3919, "estadio_lng": -3.6586 },
    "historia": [ "Hijo predilecto de la insumisión madrileña franjirroja, erigido en 1924 para ondear el estandarte pirata indomable de Vallecas frente a opulencias burguesas.", "Alargó las utopías barriales compitiendo gloriosamente en competiciones continentales a inicios del nuevo milenio con su mítico matagigantes capitaneado por Michel." ],
    "canchas": [ { "nombre": "Estadio de Vallecas", "desde": "1976", "hasta": "Presente", "direccion": "Puente de Vallecas, Madrid", "lat": 40.3919, "lng": -3.6586, "obs": "Templo claustrofóbico, abigarrado y proletario con un fondo desnudo abrazando el cielo." } ],
    "equipacion": [ { "desde": "1924", "hasta": "Presente", "tipo": "banda-diagonal", "c1": "#ffffff", "c2": "#cc0000", "sh": "#ffffff", "me": "#ffffff", "desc": "La cicatriz franjirroja cruzando el albor blanco como insignia de la franja vallecana indócil." } ],
    "titulos": [],
    "idolos": [ { "nombre": "Miguel Ángel Sánchez 'Míchel'", "pos": "Centrocampista", "apodo": "Míchel", "periodo": "1993-2003, 2006-2012", "desc": "Zurdazo celestial empuñando el orgullo pirata insobornable por toda Europa." } ],
    "goleadores_historicos": [ { "nombre": "Míchel", "goles": 53, "periodo": "1993-2012", "partidos": 363 } ],
    "presencias_historicas": [ { "nombre": "Cota", "partidos": 403, "periodo": "1985-2002" } ]
  },
  'girona': {
    "datos": { "nombre_corto": "Girona FC", "estadio_actual": "Montilivi", "estadio_direccion": "Av. de Montilivi, 141, 17003 Girona", "estadio_lat": 41.9614, "estadio_lng": 2.8286 },
    "historia": [ "Escuadrón balompédico nacido en los aledaños de la Costa Brava en 1930; amalgamado bajo escudos carmesíes pugnando tenazmente en la fosa autonómica catalana.", "Resurrección celestial gracias al City Group alumbrando campanadas de oro macizo alcanzando boletos formidables devorando grandes madrileños rumbo a la mismísima Liga de Campeones." ],
    "canchas": [ { "nombre": "Montilivi", "desde": "1970", "hasta": "Presente", "direccion": "Girona", "lat": 41.9614, "lng": 2.8286, "obs": "Gradas remozadas de acalorado aliento foral incrustado en el norte ibérico." } ],
    "equipacion": [ { "desde": "1930", "hasta": "Presente", "tipo": "rayas-verticales", "c1": "#cc0000", "c2": "#ffffff", "sh": "#cc0000", "me": "#cc0000", "desc": "Listones rojiblancos impolutos ondeando al compás gerundense inalterable." } ],
    "titulos": [],
    "idolos": [ { "nombre": "Cristian Stuani", "pos": "Delantero", "apodo": "El Matador", "periodo": "2017-Presente", "desc": "Capitán letal celestial. Llevó en hombros hercúleos al equipo rumbo a proezas jamás escritas en la ciudad." } ],
    "goleadores_historicos": [ { "nombre": "Cristian Stuani", "goles": 127, "periodo": "2017-Presente", "partidos": 240 } ],
    "presencias_historicas": [ { "nombre": "Migue", "partidos": 251, "periodo": "2007-2014" } ]
  },
  'osasuna': {
    "datos": { "nombre_corto": "CA Osasuna", "estadio_actual": "El Sadar", "estadio_direccion": "C. Sadar, s/n, 31006 Pamplona, Navarra", "estadio_lat": 42.7967, "estadio_lng": -1.6369 },
    "historia": [ "Vigor rojillo emanado del alma navarra pura en 1920. Institución de estirpe rocosa aferrada férreamente a su suelo adoptando la nomenclatura euskera de 'salud, fuerza y vigor'.", "Se batió en justas infernales desafiando colosos alcanzando finales coperas e incursiones milagrosas por la Champions League bajo la conducción aguerrida de Javier Aguirre." ],
    "canchas": [ { "nombre": "El Sadar", "desde": "1967", "hasta": "Presente", "direccion": "Sadar s/n", "lat": 42.7967, "lng": -1.6369, "obs": "Templo volcánico. Una caja acústica temible remodelada para asustar intrusos desde sus pilares aserrados." } ],
    "equipacion": [ { "desde": "1920", "hasta": "Presente", "tipo": "pleno", "c1": "#cc0000", "c2": "#cc0000", "sh": "#0000ff", "me": "#000000", "desc": "Roja sangrienta pamplonica custodiada por calzonas índigas y azabache perenne." } ],
    "titulos": [],
    "idolos": [ { "nombre": "Patxi Puñal", "pos": "Centrocampista", "apodo": "Patxi", "periodo": "1997-2014", "desc": "Glándula vital del mediocampo rojillo, comandante leal de inquebrantable firmeza navarra eterna." } ],
    "goleadores_historicos": [ { "nombre": "Sabino Andonegui", "goles": 127, "periodo": "1953-1964", "partidos": 253 } ],
    "presencias_historicas": [ { "nombre": "Patxi Puñal", "partidos": 513, "periodo": "1997-2014" } ]
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
console.log('Fase 6 Completada');
