const fs = require('fs');

const cups = [

    // Copa de Honor Municipalidad de Buenos Aires
    { y: "1905", t: "Copa de Honor", c: "Alumni" },
    { y: "1906", t: "Copa de Honor", c: "Alumni" },
    { y: "1907", t: "Copa de Honor", c: "Belgrano Athletic" },
    { y: "1908", t: "Copa de Honor", c: "Quilmes" },
    { y: "1909", t: "Copa de Honor", c: "San Isidro" },
    { y: "1911", t: "Copa de Honor", c: "Newell's Old Boys" },
    { y: "1912", t: "Copa de Honor", c: "Racing Club" },
    { y: "1913", t: "Copa de Honor", c: "Racing Club" },
    { y: "1915", t: "Copa de Honor", c: "Racing Club" },
    { y: "1916", t: "Copa de Honor", c: "Rosario Central" },
    { y: "1917", t: "Copa de Honor", c: "Racing Club" },
    { y: "1918", t: "Copa de Honor", c: "Independiente" },
    { y: "1920", t: "Copa de Honor", c: "Banfield" },

    // Copa Competencia Jockey Club
    { y: "1907", t: "Copa Competencia Jockey Club", c: "Alumni" },
    { y: "1908", t: "Copa Competencia Jockey Club", c: "Alumni" },
    { y: "1909", t: "Copa Competencia Jockey Club", c: "Alumni" },
    { y: "1910", t: "Copa Competencia Jockey Club", c: "Estudiantes (BA)" },
    { y: "1911", t: "Copa Competencia Jockey Club", c: "San Isidro" },
    { y: "1912", t: "Copa Competencia Jockey Club", c: "San Isidro" },
    { y: "1913", t: "Copa Competencia Jockey Club", c: "San Isidro" },
    { y: "1914", t: "Copa Competencia Jockey Club", c: "River Plate" },
    { y: "1915", t: "Copa Competencia Jockey Club", c: "Porteño" },
    { y: "1916", t: "Copa Competencia Jockey Club", c: "Rosario Central" },
    { y: "1917", t: "Copa Competencia Jockey Club", c: "Independiente" },
    { y: "1918", t: "Copa Competencia Jockey Club", c: "Porteño" },
    { y: "1919", t: "Copa Competencia Jockey Club", c: "Boca Juniors" },
    { y: "1921", t: "Copa Competencia Jockey Club", c: "Sportivo Barracas" },
    { y: "1925", t: "Copa Competencia Jockey Club", c: "Boca Juniors" },
    { y: "1931", t: "Copa Competencia Jockey Club", c: "Sportivo Balcarce" },
    { y: "1933", t: "Copa Competencia Jockey Club", c: "Nueva Chicago" },

    // Copa Competencia (Asociación Amateurs) / Liga
    { y: "1920", t: "Copa Competencia", c: "Rosario Central" },
    { y: "1924", t: "Copa Competencia", c: "Independiente" },
    { y: "1926", t: "Copa Competencia", c: "Independiente" },
    { y: "1932", t: "Copa Competencia", c: "River Plate" },
    { y: "1933", t: "Copa Competencia", c: "Racing Club" },

    // Copa Dr. Carlos Ibarguren
    { y: "1913", t: "Copa Dr. Carlos Ibarguren", c: "Racing Club" },
    { y: "1914", t: "Copa Dr. Carlos Ibarguren", c: "Racing Club" },
    { y: "1915", t: "Copa Dr. Carlos Ibarguren", c: "Rosario Central" },
    { y: "1916", t: "Copa Dr. Carlos Ibarguren", c: "Racing Club" },
    { y: "1917", t: "Copa Dr. Carlos Ibarguren", c: "Racing Club" },
    { y: "1918", t: "Copa Dr. Carlos Ibarguren", c: "Racing Club" },
    { y: "1919", t: "Copa Dr. Carlos Ibarguren", c: "Boca Juniors" },
    { y: "1920", t: "Copa Dr. Carlos Ibarguren", c: "Tiro Federal (Rosario)" },
    { y: "1921", t: "Copa Dr. Carlos Ibarguren", c: "Newell's Old Boys" },
    { y: "1922", t: "Copa Dr. Carlos Ibarguren", c: "Huracán" },
    { y: "1923", t: "Copa Dr. Carlos Ibarguren", c: "Boca Juniors" },
    { y: "1924", t: "Copa Dr. Carlos Ibarguren", c: "Boca Juniors" },
    { y: "1925", t: "Copa Dr. Carlos Ibarguren", c: "Huracán" },
    { y: "1937", t: "Copa Dr. Carlos Ibarguren", c: "River Plate" },
    { y: "1938", t: "Copa Dr. Carlos Ibarguren", c: "Independiente" },
    { y: "1939", t: "Copa Dr. Carlos Ibarguren", c: "Independiente" },
    { y: "1940", t: "Copa Dr. Carlos Ibarguren", c: "Boca Juniors" },
    { y: "1941", t: "Copa Dr. Carlos Ibarguren", c: "River Plate" },
    { y: "1942", t: "Copa Dr. Carlos Ibarguren", c: "River Plate" },
    { y: "1944", t: "Copa Dr. Carlos Ibarguren", c: "Boca Juniors" },
    { y: "1952", t: "Copa Dr. Carlos Ibarguren", c: "River Plate / Liga Cultural Sgo. del Estero" }, // Shared
    { y: "1958", t: "Copa Dr. Carlos Ibarguren", c: "Liga Cordobesa" },

    // Copa Adrián C. Escobar
    { y: "1939", t: "Copa Adrián C. Escobar", c: "Independiente" },
    { y: "1941", t: "Copa Adrián C. Escobar", c: "River Plate" },
    { y: "1942", t: "Copa Adrián C. Escobar", c: "Huracán" },
    { y: "1943", t: "Copa Adrián C. Escobar", c: "Huracán" },
    { y: "1944", t: "Copa Adrián C. Escobar", c: "Estudiantes (LP)" },
    { y: "1949", t: "Copa Adrián C. Escobar", c: "Newell's Old Boys" },

    // Copa de la República (Pedro P. Ramírez)
    { y: "1943", t: "Copa de la República", c: "San Lorenzo" },
    { y: "1944", t: "Copa de la República", c: "San Martín (Tucumán)" },
    { y: "1945", t: "Copa de la República", c: "Estudiantes (LP)" },

    // Copa Competencia Británica George VI
    { y: "1944", t: "Copa Competencia Británica", c: "Huracán" },
    { y: "1945", t: "Copa Competencia Británica", c: "Racing Club" },
    { y: "1946", t: "Copa Competencia Británica", c: "Boca Juniors" },

    // Copa Beccar Varela
    { y: "1932", t: "Copa Beccar Varela", c: "Racing Club" },
    { y: "1933", t: "Copa Beccar Varela", c: "Central Córdoba (Rosario)" },

    // Copa Estímulo
    { y: "1920", t: "Copa Estímulo", c: "Huracán" },
    { y: "1926", t: "Copa Estímulo", c: "Boca Juniors" }
];

const file = 'app/src/data/ligas/argentina_temporadas.json';
let db = JSON.parse(fs.readFileSync(file, 'utf8'));

let before = db.length;
for (let item of cups) {
   let suffix = "-" + item.t.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
   let id = item.y + suffix;
   
   if(!db.find(x => x.id === id)) {
      db.push({
         id: id,
         anio: item.y,
         torneo: item.t,
         campeon: item.c,
         tabla_posiciones: []
      });
   }
}

// Ensure correct chronologic numbering
db.sort((a,b) => {
    let yearStrA = a.anio.toString().substring(0,4);
    let yearStrB = b.anio.toString().substring(0,4);
    let vA = parseInt(yearStrA);
    let vB = parseInt(yearStrB);
    if (isNaN(vA)) vA = 0;
    if (isNaN(vB)) vB = 0;

    if (vA === vB) {
        return a.torneo.localeCompare(b.torneo);
    }
    return vA - vB;
});

fs.writeFileSync(file, JSON.stringify(db, null, 2));

console.log('Total injected: ' + (db.length - before));
console.log('New total size: ' + db.length);
