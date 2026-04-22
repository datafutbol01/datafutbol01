const fs = require('fs');
const path = require('path');

const frEstadios = {
  "angers": [
    {
      "nombre": "Stade Raymond Kopa (Anteriormente Jean-Bouin)",
      "capacidad": "18.752",
      "inauguracion": "1912",
      "desde": "1912",
      "hasta": "",
      "direccion": "73 Bd Jacques Portet, 49000 Angers, Francia",
      "lat": 47.4608,
      "lng": -0.5305,
      "obs": "Hogar centenario del Angers, conocido originalmente como Stade Jean-Bouin hasta su rebautizo en 2017."
    }
  ],
  "auxerre": [
    {
      "nombre": "Stade de l'Abbé-Deschamps",
      "capacidad": "18.541",
      "inauguracion": "1918",
      "desde": "1918",
      "hasta": "",
      "direccion": "Rte de Vaux, 89000 Auxerre, Francia",
      "lat": 47.7867,
      "lng": 3.5888,
      "obs": "Uno de los pocos estadios en Francia que es propiedad absoluta del club que reside en él."
    }
  ],
  "brest": [
    {
      "nombre": "Stade Francis-Le Blé",
      "capacidad": "15.220",
      "inauguracion": "1922",
      "desde": "1922",
      "hasta": "",
      "direccion": "Rte de Quimper, 29200 Brest, Francia",
      "lat": 48.4038,
      "lng": -4.4616,
      "obs": "Recinto originalmente llamado Stade de l'Armoricaine, fue renombrado en homenaje a un ex alcalde."
    }
  ],
  "le-havre": [
    {
      "nombre": "Stade Jules-Deschaseaux",
      "capacidad": "16.382",
      "inauguracion": "1932",
      "desde": "1932",
      "hasta": "2012",
      "direccion": "33 Rue du Commandant Abadie, 76620 Le Havre, Francia",
      "lat": 49.5008,
      "lng": 0.1691,
      "obs": "Antiguo recinto del equipo y sede durante la Copa del Mundo de 1938."
    },
    {
      "nombre": "Stade Océane",
      "capacidad": "25.178",
      "inauguracion": "2012",
      "desde": "2012",
      "hasta": "",
      "direccion": "Blvd de Léningrad, 76600 Le Havre, Francia",
      "lat": 49.4994,
      "lng": 0.1683,
      "obs": "Infraestructura ultramoderna de exterior azul diseñada para cumplir protocolos UEFA."
    }
  ],
  "lens": [
    {
      "nombre": "Stade Bollaert-Delelis",
      "capacidad": "38.223",
      "inauguracion": "1933",
      "desde": "1933",
      "hasta": "",
      "direccion": "Av. Alfred Maes, 62300 Lens, Francia",
      "lat": 50.4328,
      "lng": 2.8148,
      "obs": "Coliseo histórico minero, cuya capacidad curiosamente puede albergar a más personas de las que residen en la propia ciudad de Lens."
    }
  ],
  "lille": [
    {
      "nombre": "Stade Grimonprez-Jooris",
      "capacidad": "21.128",
      "inauguracion": "1975",
      "desde": "1975",
      "hasta": "2004",
      "direccion": "Av. du Petit Paradis, 59800 Lille, Francia",
      "lat": 50.6408,
      "lng": 3.0454,
      "obs": "Vieja fortaleza del club que fue demolida tras décadas de uso debido a límites estructurales y financieros."
    },
    {
      "nombre": "Decathlon Arena (Stade Pierre-Mauroy)",
      "capacidad": "50.186",
      "inauguracion": "2012",
      "desde": "2012",
      "hasta": "",
      "direccion": "261 Bd de Tournai, 59650 Villeneuve-d'Ascq, Francia",
      "lat": 50.6119,
      "lng": 3.1305,
      "obs": "Estadio cubierto multifuncional construido en Villeneuve-d'Ascq para ser utilizado como centro de élite europeo."
    }
  ],
  "lorient": [
    {
      "nombre": "Stade du Moustoir (Yves Allainmat)",
      "capacidad": "18.110",
      "inauguracion": "1959",
      "desde": "1959",
      "hasta": "",
      "direccion": "Rue Jean Le Coutaller, 56100 Lorient, Francia",
      "lat": 47.7487,
      "lng": -3.3697,
      "obs": "Recinto en el centro de Lorient y conocido por instalar un terreno pionero de césped artificial."
    }
  ],
  "lyon": [
    {
      "nombre": "Stade de Gerland",
      "capacidad": "41.044",
      "inauguracion": "1926",
      "desde": "1950",
      "hasta": "2015",
      "direccion": "353 Av. Jean Jaurès, 69007 Lyon, Francia",
      "lat": 45.7238,
      "lng": 4.8322,
      "obs": "Estadio primario del club por más de sesenta años, cimentando su dominio con los 7 títulos consecutivos."
    },
    {
      "nombre": "Groupama Stadium (Parc OL)",
      "capacidad": "59.186",
      "inauguracion": "2016",
      "desde": "2016",
      "hasta": "",
      "direccion": "10 Av. Simone Veil, 69150 Décines-Charpieu, Francia",
      "lat": 45.7656,
      "lng": 4.9818,
      "obs": "Recinto propio edificado por el proyecto OL Europe, diseñado en las afueras de la urbe de Lyon."
    }
  ],
  "marseille": [
    {
      "nombre": "Stade de l'Huveaune",
      "capacidad": "15.000",
      "inauguracion": "1904",
      "desde": "1904",
      "hasta": "1937",
      "direccion": "Rue de l'Huveaune, 13008 Marseille, Francia",
      "lat": 43.2736,
      "lng": 5.3944,
      "obs": "El campo original de principios de siglo utilizado y construido bajo propiedad y fondos de fieles de la base afición."
    },
    {
      "nombre": "Stade Vélodrome (Orange Vélodrome)",
      "capacidad": "67.394",
      "inauguracion": "1937",
      "desde": "1937",
      "hasta": "",
      "direccion": "3 Bd Michelet, 13008 Marseille, Francia",
      "lat": 43.2698,
      "lng": 5.3959,
      "obs": "El templo del fútbol del sur. Famoso por albergar una acústica ruidosa bajo una inmensa cubierta ondular blanca."
    }
  ],
  "metz": [
    {
      "nombre": "Stade Saint-Symphorien",
      "capacidad": "28.786",
      "inauguracion": "1923",
      "desde": "1923",
      "hasta": "",
      "direccion": "3 All. Saint-Symphorien, 57050 Longeville-lès-Metz, Francia",
      "lat": 49.1097,
      "lng": 6.1583,
      "obs": "Ubicado en la isla de Saint-Symphorien a orillas del Mosela y sede habitual del derbi de Lorena."
    }
  ],
  "monaco": [
    {
      "nombre": "Stade Louis II",
      "capacidad": "16.360",
      "inauguracion": "1985",
      "desde": "1985",
      "hasta": "",
      "direccion": "7 Av. des Castelans, 98000 Monaco",
      "lat": 43.7276,
      "lng": 7.4156,
      "obs": "Situado en el distrito industrial de Fontvieille encajonado junto al mar; se distingue por sus vistosos arcos amarillos perimetrales."
    }
  ],
  "nantes": [
    {
      "nombre": "Stade Marcel-Saupin",
      "capacidad": "20.000",
      "inauguracion": "1937",
      "desde": "1937",
      "hasta": "1984",
      "direccion": "Quai Malakoff, 44000 Nantes, Francia",
      "lat": 47.2144,
      "lng": -1.5369,
      "obs": "Terreno a orillas del río Loira. Sede fundacional durante los primeros lauros de los 'Canarios'."
    },
    {
      "nombre": "Stade de la Beaujoire",
      "capacidad": "35.322",
      "inauguracion": "1984",
      "desde": "1984",
      "hasta": "",
      "direccion": "5 Bd de la Beaujoire, 44300 Nantes, Francia",
      "lat": 47.2556,
      "lng": -1.5253,
      "obs": "Construido velozmente para acoger certámenes internacionales del campeonato Euro de 1984."
    }
  ],
  "nice": [
    {
      "nombre": "Stade du Ray",
      "capacidad": "17.415",
      "inauguracion": "1927",
      "desde": "1927",
      "hasta": "2013",
      "direccion": "Av. du Ray, 06100 Nice, Francia",
      "lat": 43.7233,
      "lng": 7.2597,
      "obs": "Arena modesta rodeada arquitectónicamente dentro la trama urbana del norte de Niza, hogar de los 4 títulos coperos iniciales."
    },
    {
      "nombre": "Allianz Riviera",
      "capacidad": "36.178",
      "inauguracion": "2013",
      "desde": "2013",
      "hasta": "",
      "direccion": "Bd des Jardiniers, 06200 Nice, Francia",
      "lat": 43.7052,
      "lng": 7.1927,
      "obs": "Recinto moderno y sustentable, nombrado bajo patrocinio de acuerdos comerciales al oeste de la riviera francesa."
    }
  ],
  "paris-fc": [
    {
      "nombre": "Stade Déjerine",
      "capacidad": "2.500",
      "inauguracion": "1905",
      "desde": "1969",
      "hasta": "2007",
      "direccion": "Rue des Docteurs Déjerine, 75020 Paris, Francia",
      "lat": 48.8601,
      "lng": 2.4116,
      "obs": "Sede histórica de sus años de regional, limitante para divisiones de fútbol absoluto."
    },
    {
      "nombre": "Stade Sébastien Charléty",
      "capacidad": "20.000",
      "inauguracion": "1939",
      "desde": "2007",
      "hasta": "",
      "direccion": "99 Bd Kellermann, 75013 Paris, Francia",
      "lat": 48.8178,
      "lng": 2.3468,
      "obs": "Complejo multiusos ubicado en distrito trece de la urbe parisina asimilado para localías actuales del equipo."
    }
  ],
  "psg": [
    {
      "nombre": "Parc des Princes",
      "capacidad": "47.929",
      "inauguracion": "1972",
      "desde": "1974",
      "hasta": "",
      "direccion": "24 Rue du Commandant Guilbaud, 75016 Paris, Francia",
      "lat": 48.8414,
      "lng": 2.2530,
      "obs": "Levantado sobre las bases de antiguos recintos de caza real. Es la casa incondicional en el sudoeste parisino y cuartel de la era QSI."
    }
  ],
  "rennes": [
    {
      "nombre": "Roazhon Park (Stade de la Route de Lorient)",
      "capacidad": "29.778",
      "inauguracion": "1912",
      "desde": "1912",
      "hasta": "",
      "direccion": "111 Rue de Lorient, 35000 Rennes, Francia",
      "lat": 48.1075,
      "lng": -1.7128,
      "obs": "El bastión bretón adoptó a mediados del s. XXI un neologismo para nombrarse mediante su dialecto lingüístico original de Bretaña."
    }
  ],
  "strasbourg": [
    {
      "nombre": "Stade de la Meinau",
      "capacidad": "26.109",
      "inauguracion": "1914",
      "desde": "1914",
      "hasta": "",
      "direccion": "12 Rue de l'Extenwoerth, 67100 Strasbourg, Francia",
      "lat": 48.5603,
      "lng": 7.7533,
      "obs": "Su terreno original fue forjado cerca del bosque por universitarios alemanes a principios del siglo."
    }
  ],
  "toulouse": [
    {
      "nombre": "Stadium de Toulouse",
      "capacidad": "33.150",
      "inauguracion": "1937",
      "desde": "1970",
      "hasta": "",
      "direccion": "1 All. Gabriel Biénès, 31400 Toulouse, Francia",
      "lat": 43.5833,
      "lng": 1.4340,
      "obs": "Alzado en una insula isleña en el río Garona con una arquitectura oval parecida a estadios ingleses como Wembley."
    }
  ]
};

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.json')) {
    const clubId = file.replace('.json', '');
    if (frEstadios[clubId]) {
      const filePath = path.join(dir, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      // Construir Array de Canchas Final
      const canchasPopulated = frEstadios[clubId].map(c => {
         return {
            ...c,
            url: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(c.direccion)
         }
      });
      data.canchas = canchasPopulated;

      // Extraer el ultimo como estadio actual para popular `datos`
      if (data.canchas.length > 0) {
         const current = data.canchas[data.canchas.length - 1];
         if (!data.datos) data.datos = {};
         data.datos.estadio_actual = current.nombre;
         data.datos.estadio_capacidad = current.capacidad;
         data.datos.estadio_inauguracion = current.inauguracion;
         data.datos.estadio_direccion = current.direccion;
         data.datos.estadio_lat = current.lat;
         data.datos.estadio_lng = current.lng;
      }

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`[OK] Estadios y Regla 3 inyectados en ${clubId}`);
    }
  }
}
console.log('Finalizado: Los 18 clubes franceses obedecen la Regla 3 de Estadios.');
