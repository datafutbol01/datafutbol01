const fs = require('fs');
const path = require('path');

const historicalStadiums = {
  "augsburg": [
    {
      "nombre": "Rosenaustadion",
      "capacidad": "32.354",
      "inauguracion": "1951",
      "direccion": "Stadionstr. 21, 86159 Augsburg, Alemania",
      "descripcion": "El histórico recinto fundacional del FC Augsburg, utilizado sin interrupciones desde la época de posguerra hasta su mudanza en 2009. Fue el estadio atlético de contención para forjar su camino al profesionalismo."
    }
  ],
  "bayer-leverkusen": [
    {
      "nombre": "Ulrich-Haberland-Stadion",
      "capacidad": "22.500",
      "inauguracion": "1958",
      "direccion": "Bismarckstraße 122, 51373 Leverkusen, Alemania",
      "descripcion": "Estadio bautizado en memoria del presidente directivo de la corporación Bayer. Resultó reconstruido sobre su propia ubicación en las décadas recientes para forjar la moderna BayArena a la que rinde cimientos."
    }
  ],
  "bayern-munich": [
    {
      "nombre": "Olympiastadion",
      "capacidad": "69.250",
      "inauguracion": "1972",
      "direccion": "Spiridon-Louis-Ring 27, 80809 München, Alemania",
      "descripcion": "El coloso olímpico de Múnich, hogar formal del gran formato multicampeón bávaro de Europa en los años 70. Identificable a nivel global por sus gigantescas marquesinas tensionadas transparentes en acrílico."
    },
    {
      "nombre": "Grünwalder Stadion",
      "capacidad": "15.000",
      "inauguracion": "1911",
      "direccion": "Grünwalder Str. 4, 81547 München, Alemania",
      "descripcion": "El primer espacio central donde se forjaron los compases del Bayern previo a la era olímpica. Todavía mantenido para las reservas institucionales y afición."
    }
  ],
  "borussia-dortmund": [
    {
      "nombre": "Stadion Rote Erde",
      "capacidad": "25.000",
      "inauguracion": "1926",
      "direccion": "Strobelallee 50, 44139 Dortmund, Alemania",
      "descripcion": "La mítica Tierra Roja de Renania. El emblemático escenario lindante a la actual casa aurinegra en donde el equipo forjó su carácter pionero ganando copas continentales teutonas hasta 1974."
    }
  ],
  "borussia-monchengladbach": [
    {
      "nombre": "Bökelbergstadion",
      "capacidad": "34.500",
      "inauguracion": "1919",
      "direccion": "Bökelstraße 161, 41063 Mönchengladbach, Alemania",
      "descripcion": "Un templo histórico tristemente demolido, hogar definitivo de Los Potros ('Die Fohlen') en su etapa de absoluto dominio formativo teutón nacional e internacional en la prodigiosa década de los 70."
    }
  ],
  "eintracht-frankfurt": [
    {
      "nombre": "Riederwaldstadion",
      "capacidad": "30.000",
      "inauguracion": "1952",
      "direccion": "Richard-Herrmann-Platz 1, 60386 Frankfurt am Main, Alemania",
      "descripcion": "Instalación base ubicada en los vecindarios que dio lugar a las campañas del Eintracht previo a la concentración en el monumental Waldstadion ampliado."
    }
  ],
  "freiburg": [
    {
      "ano": "Dreisamstadion", // correction
      "nombre": "Dreisamstadion / Schwarzwald-Stadion",
      "capacidad": "24.000",
      "inauguracion": "1954",
      "direccion": "Schwarzwaldstraße 193, 79117 Freiburg, Alemania",
      "descripcion": "Estadio enclavado puramente en las orillas ecológicas colindantes del Río Dreisam y alimentado con paneles ambientales solares, sirvió dignamente hasta 2021."
    }
  ],
  "hamburger-sv": [
    {
      "nombre": "Sportplatz am Rothenbaum",
      "capacidad": "27.000",
      "inauguracion": "1910",
      "direccion": "Rothenbaumchaussee 119, Hamburg, Alemania",
      "descripcion": "Mítico polideportivo destruido tras cerca de una centuria activa de partidos e inauguración en céntricas zonas donde el hamburgo generaba su fervor masivo local."
    }
  ],
  "heidenheim": [
    {
      "nombre": "Albstadion",
      "capacidad": "8.000",
      "inauguracion": "1972",
      "direccion": "Schloßhaustraße 162, 89522 Heidenheim, Alemania",
      "descripcion": "Estatus originario y formal nombre previo con instalaciones de pista para lo que gradualmente se reformó, adaptó estructuralmente y cerró dando pie a la poderosa Arena contemporánea."
    }
  ],
  "hoffenheim": [
    {
      "nombre": "Dietmar-Hopp-Stadion",
      "capacidad": "6.350",
      "inauguracion": "1999",
      "direccion": "Silbergasse 45, 74889 Sinsheim, Alemania",
      "descripcion": "Su hogar de nacimiento oficial como bloque inversor, financiado inicialmente en los vecindarios locales previos por Hop, donde iniciaron todo su rápido y milagroso vertiginoso derrotero al profesionalismo."
    }
  ],
  "koln": [
    {
      "nombre": "Radrennbahn Müngersdorf",
      "capacidad": "80.000",
      "inauguracion": "1923",
      "direccion": "Aachener Str., 50933 Köln, Alemania",
      "descripcion": "Monumental terreno y circuito antiguo provisto originalmente de pista de ciclismo de velocidad. Base formal para forjar el estadio final del bloque en Müngersdorf."
    }
  ],
  "mainz-05": [
    {
      "nombre": "Stadion am Bruchweg",
      "capacidad": "18.000",
      "inauguracion": "1929",
      "direccion": "Dr.-Martin-Luther-King-Weg, 55122 Mainz, Alemania",
      "descripcion": "El bastión primario histórico de Maguncia. Fue escenario vital bajo el estratega Klopp durante sus escaladas hasta la muda a la MEWA Arena oficial en el nuevo milenio."
    }
  ],
  "rb-leipzig": [
    {
      "nombre": "Stadion am Bad (Markranstädt)",
      "capacidad": "5.500",
      "inauguracion": "1957",
      "direccion": "Am Stadtbad 30, 04420 Markranstädt, Alemania",
      "descripcion": "Este modesto estadio regional periférico albergó los compases originales corporativos y técnicos de lo que acabaría asumiendo su forma en el Red Bull Leipzig durante sus primerísimas campañas de ascenso amateur."
    }
  ],
  "st-pauli": [
    {
      "nombre": "Sportplatz an der Sternschanze",
      "capacidad": "10.000",
      "inauguracion": "1900",
      "direccion": "Sternschanze, Hamburg, Alemania",
      "descripcion": "El primer recinto oficial a cielo abierto en las periferias del parque Sternschanze donde la franquicia disputaba los combates antes del estallido mundial militar global."
    }
  ],
  "union-berlin": [
    {
      "nombre": "Friedrich-Ludwig-Jahn-Sportpark",
      "capacidad": "19.708",
      "inauguracion": "1952",
      "direccion": "Cantianstraße 24, 10437 Berlin, Alemania",
      "descripcion": "Un refugio secundario fundamental oriental empleado por la fuerza por las regulaciones del torneo o en época constructiva y bloqueada que impedía el uso formal de su estadio capitalino regular."
    }
  ],
  "vfb-stuttgart": [
    {
      "nombre": "Neckarstadion (Diseño Clásico)",
      "capacidad": "73.000",
      "inauguracion": "1933",
      "direccion": "Mercedesstraße 87, 70372 Stuttgart, Alemania",
      "descripcion": "Nombrado popularmente así en alusión al firme río lindante del territorio alemán. Fue escenario histórico del Stuttgart, sede de mundiales teutones antes de ser destechado y reformado de raíz a la estructura autormotriz corporativa de recambio actual."
    }
  ],
  "werder-bremen": [
    {
      "nombre": "Campo deportivo Krähenberg / Kälberwerder",
      "capacidad": "3.000",
      "inauguracion": "1899",
      "direccion": "Kälberwerder, Bremen, Alemania",
      "descripcion": "El predio originariamente liso y rústico frente al río donde un núcleo escolar de estudiantes disputó sus formales orígenes con su primer balón pateado bajo la institución incipiente fundacional de finales del siglo decimonónico."
    }
  ],
  "wolfsburg": [
    {
      "nombre": "VfL-Stadion am Elsterweg",
      "capacidad": "21.600",
      "inauguracion": "1947",
      "direccion": "Elsterweg 5, 38446 Wolfsburg, Alemania",
      "descripcion": "El fortín de atletismo inicial fundacional desde donde ascendieron formal a su cima deportiva y forjaron al 'VfL' logrando subir hasta el debut nacional de los noventa. Hoy hogar de reservas y estamento filial institucional."
    }
  ]
};

const clubsDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

for (const [clubId, estadios] of Object.entries(historicalStadiums)) {
    const clubFile = path.join(clubsDir, `${clubId}.json`);
    if (fs.existsSync(clubFile)) {
        const data = JSON.parse(fs.readFileSync(clubFile, 'utf8'));
        
        if (!data.canchas) data.canchas = [];
        
        estadios.forEach(est => {
            // Generar google maps URL
            const urlMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(est.direccion)}`;
            
            const nuevaCancha = {
                "nombre": est.nombre,
                "capacidad": est.capacidad,
                "inauguracion": est.inauguracion,
                "url": urlMaps,
                "direccion": est.direccion,
                "descripcion": est.descripcion
            };
            // Evitar duplicados si ya corrimos el script
            const exists = data.canchas.find(c => c.nombre === est.nombre);
            if(!exists){
                data.canchas.push(nuevaCancha);
            }
        });

        fs.writeFileSync(clubFile, JSON.stringify(data, null, 2), 'utf8');
        console.log(`[OK] Estadios historicos anexados en: ${clubId}`);
    } else {
        console.error(`[ERROR] Archivo no existe: ${clubFile}`);
    }
}
console.log('Inyeccion masiva de canchas antiguas completada.');
