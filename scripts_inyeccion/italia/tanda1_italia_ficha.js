const fs = require('fs');

const datosMap = {
  'atalanta.json': {
    "nombre_completo": "Atalanta Bergamasca Calcio S.p.A.",
    "sigla": "ATA",
    "fundacion": "1907",
    "apodo": "La Dea, Gli Orobici, I Nerazzurri",
    "estadio_actual": "Gewiss Stadium",
    "estadio_apodo": "",
    "estadio_capacidad": 21300,
    "estadio_inauguracion": "1 de noviembre de 1928",
    "estadio_lat": 45.7092,
    "estadio_lng": 9.6808,
    "estadio_direccion": "Viale Giulio Cesare 18, 24124 Bergamo, Lombardia",
    "socios": 15000,
    "descripcion_corta": "Entidad representativa de Bérgamo, mundialmente célebre por su mítica academia juvenil y su imponente fútbol ofensivo moderno bajo la legendaria era Gasperini.",
    "paleta": [
      {
        "tag": "Negro",
        "hex": "#000000"
      },
      {
        "tag": "Azul",
        "hex": "#1a428a"
      }
    ],
    "records": {
      "maximo_goleador": "Cristiano Doni (112 goles)",
      "mas_presencias": "Gianpaolo Bellini (435 partidos)",
      "mayor_goleada": "7-0 vs Torino (2020)"
    },
    "nombre_oficial": "Atalanta Bergamasca Calcio",
    "nombre_corto": "Atalanta"
  },
  'bologna.json': {
    "nombre_completo": "Bologna Football Club 1909 S.p.A.",
    "sigla": "BOL",
    "fundacion": "1909",
    "apodo": "I Felsinei, I Rossoblù, I Veltri",
    "estadio_actual": "Stadio Renato Dall'Ara",
    "estadio_apodo": "Il Littoriale",
    "estadio_capacidad": 36462,
    "estadio_inauguracion": "29 de mayo de 1927",
    "estadio_lat": 44.4923,
    "estadio_lng": 11.3099,
    "estadio_direccion": "Via Andrea Costa 174, 40134 Bologna, Emilia-Romagna",
    "socios": 14000,
    "descripcion_corta": "El mítico 'squadrone' elegante de la región de Emilia-Romaña que forjó una leyenda temible dominando el Calcio en la dorada época de los años treinta.",
    "paleta": [
      {
        "tag": "Rojo",
        "hex": "#a21c26"
      },
      {
        "tag": "Azul",
        "hex": "#1a2f4c"
      }
    ],
    "records": {
      "maximo_goleador": "Angelo Schiavio (251 goles)",
      "mas_presencias": "Giacomo Bulgarelli (486 partidos)",
      "mayor_goleada": "8-0 vs Triestina (1932)"
    },
    "nombre_oficial": "Bologna Football Club 1909",
    "nombre_corto": "Bologna"
  },
  'cagliari.json': {
    "nombre_completo": "Cagliari Calcio S.p.A.",
    "sigla": "CAG",
    "fundacion": "1920",
    "apodo": "I Rossoblù, Gli Isolani, Casteddu",
    "estadio_actual": "Unipol Domus",
    "estadio_apodo": "",
    "estadio_capacidad": 16416,
    "estadio_inauguracion": "10 de septiembre de 2017",
    "estadio_lat": 39.1994,
    "estadio_lng": 9.1408,
    "estadio_direccion": "Via San Bartolomeo, 09126 Cagliari, Cerdeña",
    "socios": 13500,
    "descripcion_corta": "Deporte bandera y selección de todo el fervoroso pueblo de Cerdeña; eterno ejemplo de la rebelión insular del sur italiano contra el opulento norte continental.",
    "paleta": [
      {
        "tag": "Rojo",
        "hex": "#c31326"
      },
      {
        "tag": "Azul",
        "hex": "#112046"
      }
    ],
    "records": {
      "maximo_goleador": "Gigi Riva (208 goles)",
      "mas_presencias": "Daniele Conti (464 partidos)",
      "mayor_goleada": "5-0 vs Sampdoria (1993)"
    },
    "nombre_oficial": "Cagliari Calcio",
    "nombre_corto": "Cagliari"
  },
  'como.json': {
    "nombre_completo": "Como 1907 S.r.l.",
    "sigla": "COM",
    "fundacion": "1907",
    "apodo": "I Lariani, Gli Azzurri, I Voltiani",
    "estadio_actual": "Stadio Giuseppe Sinigaglia",
    "estadio_apodo": "",
    "estadio_capacidad": 13602,
    "estadio_inauguracion": "1927",
    "estadio_lat": 45.8130,
    "estadio_lng": 9.0766,
    "estadio_direccion": "Viale Giuseppe Sinigaglia 2, 22100 Como, Lombardia",
    "socios": 7000,
    "descripcion_corta": "Romántica y pintoresca agrupación arraigada majestuosamente a las gélidas orillas del Lago de Como, resucitada épicamente de las cenizas hacia la máxima élite.",
    "paleta": [
      {
        "tag": "Azul Claro",
        "hex": "#005eaa"
      },
      {
        "tag": "Blanco",
        "hex": "#ffffff"
      }
    ],
    "records": {
      "maximo_goleador": "Antonio Cetti (91 goles)",
      "mas_presencias": "Bruno Ballarini (350 partidos)",
      "mayor_goleada": "5-0 vs Lucchese (1951)"
    },
    "nombre_oficial": "Como 1907",
    "nombre_corto": "Como"
  },
  'cremonese.json': {
    "nombre_completo": "Unione Sportiva Cremonese S.p.A.",
    "sigla": "CRE",
    "fundacion": "1903",
    "apodo": "I Grigiorossi, Le Tigri, I Violini",
    "estadio_actual": "Stadio Giovanni Zini",
    "estadio_apodo": "",
    "estadio_capacidad": 16003,
    "estadio_inauguracion": "2 de noviembre de 1919",
    "estadio_lat": 45.1437,
    "estadio_lng": 10.0345,
    "estadio_direccion": "Via Persico 19, 26100 Cremona, Lombardia",
    "socios": 6500,
    "descripcion_corta": "Histórica entidad polideportiva lombarda portadora de una extrañísima, inconfundible y hermosa camiseta de franjas grises y rojas a lo largo de un silgo entero.",
    "paleta": [
      {
        "tag": "Gris",
        "hex": "#a2a5a4"
      },
      {
        "tag": "Rojo",
        "hex": "#d01931"
      }
    ],
    "records": {
      "maximo_goleador": "Emiliano Mondonico (88 goles)",
      "mas_presencias": "Luciano Cesini (436 partidos)",
      "mayor_goleada": "6-0 vs Varese (1989)"
    },
    "nombre_oficial": "Unione Sportiva Cremonese",
    "nombre_corto": "Cremonese"
  }
};

const basePath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia/';

Object.keys(datosMap).forEach(filename => {
  const filepath = basePath + filename;
  const contentJSON = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  
  contentJSON.datos = datosMap[filename];
  
  fs.writeFileSync(filepath, JSON.stringify(contentJSON, null, 2), 'utf8');
  console.log(`Ficha updated for ${filename}`);
});
