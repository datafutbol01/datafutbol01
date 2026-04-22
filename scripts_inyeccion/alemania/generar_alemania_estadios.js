const fs = require('fs');
const path = require('path');

const DIR_ALEMANIA = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

const estadios = {
  "bayern-munich": {
    nombre: "Allianz Arena", apodo: "Schlauchboot", capacidad: 75024, inag: "2005",
    dir: "Werner-Heisenberg-Allee 25, 80939 München, Alemania",
    desc: "Referente arquitectónico mundial forrado en paneles luminosos. Cuna del esplendor hegemónico moderno del Bayer Múnich."
  },
  "borussia-dortmund": {
    nombre: "Signal Iduna Park", apodo: "Westfalenstadion", capacidad: 81365, inag: "1974",
    dir: "Strobelallee 50, 44139 Dortmund, Alemania",
    desc: "El estadio de mayor aforo formal del país, hogar de la mítica e inquebrantable 'Muralla Amarilla' ('Gelbe Wand') en su tribuna sur."
  },
  "bayer-leverkusen": {
    nombre: "BayArena", apodo: "Ulrich-Haberland-Stadion", capacidad: 30210, inag: "1958",
    dir: "Bismarckstraße 122-124, 51373 Leverkusen, Alemania",
    desc: "Remodelado a la vanguardia bajo los gigantescos fondos industriales, sigue emplazado en la ciudad química cobijando a las cruces rojas."
  },
  "werder-bremen": {
    nombre: "Weserstadion", apodo: "El fortín del río", capacidad: 42100, inag: "1947",
    dir: "Franz-Böhmert-Straße 1, 28205 Bremen, Alemania",
    desc: "Erguido a base de tierra a orillas del majestuoso río Weser, es la fosa portuaria en donde sucedieron los históricos 'Weserwunder'."
  },
  "borussia-monchengladbach": {
    nombre: "Borussia-Park", apodo: "Nordpark", capacidad: 54057, inag: "2004",
    dir: "Hennes-Weisweiler-Allee 1, 41179 Mönchengladbach, Alemania",
    desc: "Reemplazó al querido pero obsoleto y mítico Bökelbergstadion para dotar a los 'Potros' de un infierno verde de élite y máxima comodidad."
  },
  "eintracht-frankfurt": {
    nombre: "Deutsche Bank Park", apodo: "Waldstadion", capacidad: 58000, inag: "1925",
    dir: "Mörfelder Landstraße 362, 60528 Frankfurt am Main, Alemania",
    desc: "Históricamente conocido como el estadio del bosque (Waldstadion), ha coronado las inmensas hazañas coperas del gran escuadrón de las Águilas."
  },
  "vfb-stuttgart": {
    nombre: "MHPArena", apodo: "Neckarstadion", capacidad: 60449, inag: "1933",
    dir: "Mercedesstraße 87, 70372 Stuttgart, Alemania",
    desc: "Mítico coliseo envuelto entre los motores de Swabia. Remodelado repetidas veces despojándose de pistas atléticas para acoger puro calor suabo."
  },
  "hamburger-sv": {
    nombre: "Volksparkstadion", apodo: "Volkspark", capacidad: 57000, inag: "1953",
    dir: "Sylvesterallee 7, 22525 Hamburg, Alemania",
    desc: "Sede de la final de 1974 y guardián doloroso del histórico 'reloj del tiempo' que certificaba su longeva duración pura en la máxima categoría."
  },
  "augsburg": {
    nombre: "WWK Arena", apodo: "Schwabenstadion", capacidad: 30660, inag: "2009",
    dir: "Bürgermeister-Ulrich-Straße 90, 86199 Augsburg, Alemania",
    desc: "Fortaleza moderna con paneles brillantes entrelazada firmemente en la campiña bávara del sur."
  },
  "union-berlin": {
    nombre: "Stadion An der Alten Försterei", apodo: "Alte Försterei", capacidad: 22012, inag: "1920",
    dir: "An d. Wuhlheide 263, 12555 Berlin, Alemania",
    desc: "Monumento a la resistencia obrera del este construido y ampliado físicamente con la propia sangre y sudor de miles de hinchas voluntarios y albañiles de la tribuna."
  },
  "sc-freiburg": {
    nombre: "Europa-Park Stadion", apodo: "Mooswaldstadion", capacidad: 34700, inag: "2021",
    dir: "Achim-Stocker-Straße 1, 79108 Freiburg im Breisgau, Alemania",
    desc: "La nueva maravilla sustentable que reemplazó entre nostalgia a su querido rincón del Dreisamstadion. Plagado de la magia nacida de la Selva Negra."
  },
  "heidenheim": {
    nombre: "Voith-Arena", apodo: "Albstadion", capacidad: 15000, inag: "1979",
    dir: "Schloßhaustraße 162, 89522 Heidenheim an der Brenz, Alemania",
    desc: "Un cofre de 15,000 butacas donde un pueblito de bajo presupuesto abate en la cima de la colina escarpada a temibles monstruos gigantes millonarios."
  },
  "hoffenheim": {
    nombre: "PreZero Arena", apodo: "Rhein-Neckar-Arena", capacidad: 30150, inag: "2009",
    dir: "Dietmar-Hopp-Straße 1, 74889 Sinsheim, Alemania",
    desc: "Inmensa proeza tecnológica emplazada geográficamente lejos del pueblo central, consolidando a un esquema formativo revolucionario impulsado de billeteras."
  },
  "fc-koln": {
    nombre: "RheinEnergieStadion", apodo: "Müngersdorfer Stadion", capacidad: 50000, inag: "1923",
    dir: "Aachener Str. 999, 50933 Köln, Alemania",
    desc: "Templo encendido portando en cada rincón un enorme ambiente caluroso marcado por la famosa mascota de la cabra presenciando en césped directo el partido."
  },
  "rb-leipzig": {
    nombre: "Red Bull Arena", apodo: "Zentralstadion", capacidad: 47069, inag: "2004",
    dir: "Am Sportforum 3, 04105 Leipzig, Alemania",
    desc: "Una maravilla contemporánea construida hundida literalmente sobre las mismísimas bases fundacionales del gigante pero abolido Zentralstadion socialista oriental."
  },
  "mainz-05": {
    nombre: "Mewa Arena", apodo: "Opel Arena", capacidad: 33305, inag: "2011",
    dir: "Eugen-Salomon-Straße 1, 55128 Mainz, Alemania",
    desc: "Iniciando como Coface Arena, las orillas carnavalescas crearon este foso infernal rojo que ha desbaratado con sudor inmensas hazañas y promesas."
  },
  "fc-st-pauli": {
    nombre: "Millerntor-Stadion", apodo: "Millerntor", capacidad: 29546, inag: "1963",
    dir: "Harald-Stender-Platz 1, 20359 Hamburg, Alemania",
    desc: "Mítico estadio cultural. Un bastión impenetrable ideológicamente portuario bañado por calaveras antinazis (Jolly Roger) resonando fuerte The Hells Bells de AC/DC."
  },
  "wolfsburg": {
    nombre: "Volkswagen Arena", apodo: "VfL-Arena", capacidad: 30000, inag: "2002",
    dir: "In den Allerwiesen 1, 38446 Wolfsburg, Alemania",
    desc: "Custodiada íntima y financieramente del enorme emporio motriz, su grama coronó la hazaña mágica originada en 2009 de los potentes goles brasileños-bosnios."
  }
};

Object.keys(estadios).forEach(clubId => {
  const filePath = path.join(DIR_ALEMANIA, `${clubId}.json`);
  if (fs.existsSync(filePath)) {
    const club = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const data = estadios[clubId];

    // Llenar bloque datos
    club.datos.estadio_actual = data.nombre;
    club.datos.estadio_apodo = data.apodo;
    club.datos.estadio_capacidad = data.capacidad;
    club.datos.estadio_inauguracion = data.inag;
    club.datos.estadio_direccion = data.dir;
    
    // Dejamos en 0 a menos que luego implementemos geocoder
    club.datos.estadio_lat = 0;
    club.datos.estadio_lng = 0;

    // Google Maps URL search
    const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.dir)}`;

    // Llenar bloque canchas
    club.canchas = [
      {
        nombre: data.nombre + (data.apodo ? ` (${data.apodo})` : ""),
        capacidad: data.capacidad.toLocaleString('es-ES'),
        inauguracion: data.inag,
        url: gmapsUrl,
        direccion: data.dir,
        descripcion: data.desc
      }
    ];

    fs.writeFileSync(filePath, JSON.stringify(club, null, 2), 'utf-8');
  }
});

console.log('Se mapearon e inyectaron rigurosamente los 18 estadios alemanes, sus direcciones físicas y links URL de Google Maps.');
