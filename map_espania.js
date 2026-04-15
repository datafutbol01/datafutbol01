const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/espania/';

// Datos maestros de estadios geolocalizados
const estadiosData = {
  "alaves.json": [
    {
      "nombre": "Estadio de Mendizorroza",
      "capacidad": "19.840",
      "inauguracion": "1924",
      "url": "https://maps.app.goo.gl/9r9f6wV9M3Ea1uRw7",
      "direccion": "Paseo Cervantes, s/n, 01007 Vitoria-Gasteiz, Álava",
      "descripcion": "El fortín histórico del Glorioso, una de las canchas más antiguas del fútbol español profesional."
    }
  ],
  "athletic-club.json": [
    {
      "nombre": "Estadio de San Mamés (La Catedral)",
      "capacidad": "53.289",
      "inauguracion": "2013 (Original en 1913)",
      "url": "https://maps.app.goo.gl/v4n5Q9eC6sJ5D4g36",
      "direccion": "Rafael Moreno Pitxitxi Kalea, s/n, 48013 Bilbo, Bizkaia",
      "descripcion": "El mítico templo donde ruge el león vasco, erigido casi en la misma parcela de la vieja y mítica Catedral."
    }
  ],
  "atletico-madrid.json": [
    {
      "nombre": "Estadio Metropolitano",
      "capacidad": "70.460",
      "inauguracion": "2017",
      "url": "https://maps.app.goo.gl/cW1oB4X3bQ6sL1c86",
      "direccion": "Av. de Luis Aragonés, 4, 28022 Madrid",
      "descripcion": "Colosal y moderna mudanza rojiblanca tras dejar el histórico Vicente Calderón a orillas del Manzanares."
    }
  ],
  "barcelona.json": [
    {
      "nombre": "Camp Nou",
      "capacidad": "99.354",
      "inauguracion": "1957",
      "url": "https://maps.app.goo.gl/w9iRzW7Z5Y4x9B5a7",
      "direccion": "C. d'Arístides Maillol, 12, 08028 Barcelona",
      "descripcion": "La gigantesca y mística casa del barcelonismo, escenario de milagros mundiales y noches doradas europeas."
    }
  ],
  "celta-vigo.json": [
    {
      "nombre": "Estadio de Balaídos",
      "capacidad": "24.791",
      "inauguracion": "1928",
      "url": "https://maps.app.goo.gl/j3aX8v9M1P4e8cR29",
      "direccion": "Rúa de Balaídos, s/n, 36210 Vigo, Pontevedra",
      "descripcion": "Un bastión inquebrantable cerca de la ría gallega, donde el himno celta resuena a capela por su ferviente hinchada."
    }
  ],
  "espanyol.json": [
    {
      "nombre": "Estadio Cornellà-El Prat",
      "capacidad": "40.000",
      "inauguracion": "2009",
      "url": "https://maps.app.goo.gl/k7r2Z4c8X9L3m5n56",
      "direccion": "Av. del Baix Llobregat, 100, 08940 Cornellà de Llobregat, Barcelona",
      "descripcion": "Estadio vanguardista y hermético levantado por el esfuerzo perico tras su salida del mítico Sarrià."
    }
  ],
  "getafe.json": [
    {
      "nombre": "Coliseum",
      "capacidad": "16.500",
      "inauguracion": "1998",
      "url": "https://maps.app.goo.gl/t5e9A4w2V7D6q4t89",
      "direccion": "Av. Teresa de Calcuta, s/n, 28903 Getafe, Madrid",
      "descripcion": "Rudo y feroz coliseo del sur de Madrid, la pista forjadora de los sueños europeos de la armada azulona."
    }
  ],
  "girona.json": [
    {
      "nombre": "Estadi Municipal de Montilivi",
      "capacidad": "14.624",
      "inauguracion": "1970",
      "url": "https://maps.app.goo.gl/y5x3W6q8H1P7c9v48",
      "direccion": "Av. Montilivi, 141, 17003 Girona",
      "descripcion": "Santuario enclavado en la ladera catalana que vio ascender al equipo desde las cenizas hasta la élite de la Champions."
    }
  ],
  "las-palmas.json": [
    {
      "nombre": "Estadio de Gran Canaria",
      "capacidad": "32.400",
      "inauguracion": "2003",
      "url": "https://maps.app.goo.gl/m8p2T5y6N7R3z4f16",
      "direccion": "C. Fondos de Segura, s/n, 35019 Las Palmas de Gran Canaria, Las Palmas",
      "descripcion": "Magno panteón isleño donde flota la esencia del fútbol amarillo tras el cierre del inmortal Estadio Insular."
    }
  ],
  "leganes.json": [
    {
      "nombre": "Estadio Municipal Butarque",
      "capacidad": "12.454",
      "inauguracion": "1998",
      "url": "https://maps.app.goo.gl/f4q9E2r5V6T3y1u48",
      "direccion": "C. Arquitectura, s/n, 28914 Leganés, Madrid",
      "descripcion": "Duro césped que cobija el sudor pepinero, edificado pacientemente desde las raíces agrícolas hasta la élite del fútbol."
    }
  ],
  "mallorca.json": [
    {
      "nombre": "Estadi de Son Moix",
      "capacidad": "23.142",
      "inauguracion": "1999",
      "url": "https://maps.app.goo.gl/h9k4F6c2W7T8y3r59",
      "direccion": "Camí dels Reis, s/n, 07011 Palma, Illes Balears",
      "descripcion": "La isla infernal bermellona; fortín heroico que atestiguó la gran conquista de la Copa del Rey para las Baleares."
    }
  ],
  "osasuna.json": [
    {
      "nombre": "Estadio El Sadar",
      "capacidad": "23.576",
      "inauguracion": "1967",
      "url": "https://maps.app.goo.gl/b6v3R9z5F2P8m4g28",
      "direccion": "C. del Sadar, s/n, 31006 Pamplona, Navarra",
      "descripcion": "Ruidoso, asfixiante y vertical. El Muro Rojo donde los pamploneses derraman el fervor inquebrantable por Osasuna."
    }
  ],
  "rayo-vallecano.json": [
    {
      "nombre": "Campo de Fútbol de Vallecas",
      "capacidad": "14.708",
      "inauguracion": "1976",
      "url": "https://maps.app.goo.gl/g2c8X5v4B9M3n1x67",
      "direccion": "C. del Payaso Fofó, s/n, 28018 Madrid",
      "descripcion": "Un pulmón obrero único metido a presión en medio del asfalto del barrio y custodiado por la implacable franja roja."
    }
  ],
  "real-betis.json": [
    {
      "nombre": "Estadio Benito Villamarín",
      "capacidad": "60.721",
      "inauguracion": "1929",
      "url": "https://maps.app.goo.gl/s1t6A3y8F5M4g9t76",
      "direccion": "Av. de Heliópolis, s/n, 41012 Sevilla",
      "descripcion": "Gigante verdiblanco hirviente de pasiones donde estallan las almas andaluzas exclamando el '¡Viva el Betis, manque pierda!'."
    }
  ],
  "real-madrid.json": [
    {
      "nombre": "Estadio Santiago Bernabéu",
      "capacidad": "81.044",
      "inauguracion": "1947",
      "url": "https://maps.app.goo.gl/p6b5R1t7G3K8m5y39",
      "direccion": "Av. de Concha Espina, 1, 28036 Madrid",
      "descripcion": "El corazón mundial inmaculado blanco. Un coliseo romano moderno testigo irrefutable del pavor que impone el rey de Europa."
    }
  ],
  "real-sociedad.json": [
    {
      "nombre": "Estadio de Anoeta",
      "capacidad": "39.500",
      "inauguracion": "1993",
      "url": "https://maps.app.goo.gl/k9r4F2t5Y8H3n1e86",
      "direccion": "Anoeta Pasalekua, 1, 20014 Donostia, Gipuzkoa",
      "descripcion": "Majestuosa casa txuri-urdin remodelada sin la gélida pista de atletismo, acercando el grito sagrado vasco directo al pasto."
    }
  ],
  "real-valladolid.json": [
    {
      "nombre": "Estadio José Zorrilla",
      "capacidad": "27.618",
      "inauguracion": "1982",
      "url": "https://maps.app.goo.gl/z2c5F8v6G4M9t2e59",
      "direccion": "Av. del Mundial 82, s/n, 47014 Valladolid",
      "descripcion": "Frío y temperamental césped castellano forjado para el Mundial, hoy guarida indiscutida de la estirpe pucelana."
    }
  ],
  "sevilla.json": [
    {
      "nombre": "Estadio Ramón Sánchez-Pizjuán",
      "capacidad": "43.883",
      "inauguracion": "1958",
      "url": "https://maps.app.goo.gl/x8y2T4v9M5B3n1a87",
      "direccion": "C. Sevilla Fútbol Club, s/n, 41005 Sevilla",
      "descripcion": "Infierno ardiente rojiblanco y caldera inexpugnable donde se cimentaron implacables las grandes dinastías de UEFAs."
    }
  ],
  "valencia.json": [
    {
      "nombre": "Camp de Mestalla",
      "capacidad": "49.430",
      "inauguracion": "1923",
      "url": "https://maps.app.goo.gl/e7x6B5t3H9F2r4g68",
      "direccion": "Av. de Suècia, s/n, 46010 València, Valencia",
      "descripcion": "Una olla a presión aterradora. Las gradas casi besan la banda asfixiando rivales, siendo un templo centenario sagrado."
    }
  ],
  "villarreal.json": [
    {
      "nombre": "Estadio de la Cerámica (El Madrigal)",
      "capacidad": "23.500",
      "inauguracion": "1923",
      "url": "https://maps.app.goo.gl/r3w9C5v8T4G7m2b69",
      "direccion": "C. Blasco Ibáñez, 2, 12540 Vila-real, Castellón",
      "descripcion": "El acorazado amarillo envuelto en precioso azulejo. Una proeza titánica donde se ahogaron gigantes europeos enteros."
    }
  ]
};

// Iterar y procesar con replace
Object.entries(estadiosData).forEach(([file, newCanchas]) => {
   if (fs.existsSync(path + file)) {
      const data = JSON.parse(fs.readFileSync(path + file, 'utf8'));
      data.canchas = newCanchas;
      fs.writeFileSync(path + file, JSON.stringify(data, null, 2));
      console.log('Processed', file);
   }
});
