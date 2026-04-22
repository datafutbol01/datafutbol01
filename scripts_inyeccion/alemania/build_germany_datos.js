const fs = require('fs');
const path = require('path');

const clubsData = {
    "augsburg": {
        "sigla": "FCA",
        "apodo": "Fuggerstädter (Los Ciudadanos de Fugger)",
        "socios": 22000,
        "estadio_lat": 48.3225,
        "estadio_lng": 10.8808,
        "descripcion_corta": "Sólido gigante e incansable bastión de la región de Suabia, conocido por su indomable y áspera defensa guerrera en el máximo circuito bávaro.",
        "paleta": [ { "tag": "Rojo", "hex": "#D3081E" }, { "tag": "Verde", "hex": "#007A3B" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
        "records": { "maximo_goleador": "Daniel Baier", "mas_presencias": "Daniel Baier", "mayor_goleada": "6-0 vs Stuttgart (2019)" }
    },
    "bayer-leverkusen": {
        "sigla": "B04",
        "apodo": "Die Werkself (Los Once de la Compañía)",
        "socios": 40000,
        "estadio_lat": 51.0383,
        "estadio_lng": 7.0022,
        "descripcion_corta": "El invencible y heroico monstruo rojo y negro surgido inquebrantablemente de los colosales forjadores de la química e ingeniería corporativa purísima.",
        "paleta": [ { "tag": "Rojo", "hex": "#E32221" }, { "tag": "Negro", "hex": "#000000" } ],
        "records": { "maximo_goleador": "Ulf Kirsten (233)", "mas_presencias": "Rüdiger Vollborn (483)", "mayor_goleada": "9-1 vs Ulm (2000)" }
    },
    "bayern-munich": {
        "sigla": "FCB",
        "apodo": "Die Bayern (Los Bávaros) / Stern des Südens",
        "socios": 316000,
        "estadio_lat": 48.2188,
        "estadio_lng": 11.6247,
        "descripcion_corta": "El titánico, inmenso y gran apisonador tirano del sur. Hegemónico e imbatible destructor que ha monopolizado por colosales décadas las dictaminadas cumbres galácticas y locales germanas purísimas.",
        "paleta": [ { "tag": "Rojo Fuego", "hex": "#DC052D" }, { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Azul", "hex": "#0066B2" } ],
        "records": { "maximo_goleador": "Gerd Müller (568)", "mas_presencias": "Sepp Maier (706)", "mayor_goleada": "11-1 vs Dortmund (1971)" }
    },
    "borussia-dortmund": {
        "sigla": "BVB",
        "apodo": "Die Schwarzgelben (Los Negriamarillos)",
        "socios": 175000,
        "estadio_lat": 51.4925,
        "estadio_lng": 7.4518,
        "descripcion_corta": "Colosal templo del fervor popular e inmenso asombroso rudo histórico escudo obrero y minero inquebrantable de Renania sostenido por el famoso heroico pilar amarillo popular del Muro Amarillo.",
        "paleta": [ { "tag": "Amarillo Dortmund", "hex": "#FDE100" }, { "tag": "Negro", "hex": "#000000" } ],
        "records": { "maximo_goleador": "Alfred Preissler (177)", "mas_presencias": "Michael Zorc (572)", "mayor_goleada": "11-1 vs Bielefeld (1982)" }
    },
    "borussia-monchengladbach": {
        "sigla": "BMG",
        "apodo": "Die Fohlen (Los Potros)",
        "socios": 100000,
        "estadio_lat": 51.1746,
        "estadio_lng": 6.3855,
        "descripcion_corta": "Arrolladores formadores rústicos letales de la dorada dictaminadora época inmensa legendaria de época formadora de los feroces y temibles de oro heroicos potros germánicos puros.",
        "paleta": [ { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Verde", "hex": "#008B45" }, { "tag": "Negro", "hex": "#000000" } ],
        "records": { "maximo_goleador": "Jupp Heynckes (292)", "mas_presencias": "Berti Vogts (526)", "mayor_goleada": "12-0 vs Dortmund (1978)" }
    },
    "eintracht-frankfurt": {
        "sigla": "SGE",
        "apodo": "Die Adler (Las Águilas)",
        "socios": 130000,
        "estadio_lat": 50.0686,
        "estadio_lng": 8.6455,
        "descripcion_corta": "Las heroicas e impredecibles águilas rojas, destructores colosales en noches de purísimo asombro europeo portando glorioso orgullo banquero y fáctico hegemónico férreo capitalino comercial alemán.",
        "paleta": [ { "tag": "Rojo", "hex": "#E1000F" }, { "tag": "Negro", "hex": "#000000" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
        "records": { "maximo_goleador": "Bernd Hölzenbein (201)", "mas_presencias": "Charly Körbel (602)", "mayor_goleada": "9-1 vs Essen (1974)" }
    },
    "freiburg": {
        "sigla": "SCF",
        "apodo": "Breisgau-Brasilianer (Los Brasileños de Breisgau)",
        "socios": 65000,
        "estadio_lat": 48.0211,
        "estadio_lng": 7.8286,
        "descripcion_corta": "El asombroso milagro de formadores inmortales originarios puros orgánicos de Selva Negra. Heroico e inteligente escuadrón conocido puramente por la maestría gloriosa formativa estipulada local.",
        "paleta": [ { "tag": "Rojo", "hex": "#C60C30" }, { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Negro", "hex": "#000000" } ],
        "records": { "maximo_goleador": "Nils Petersen (105)", "mas_presencias": "Andreas Zeyer (441)", "mayor_goleada": "6-0 vs Monchengladbach (2021)" }
    },
    "hamburger-sv": {
        "sigla": "HSV",
        "apodo": "Der Dino (El Dinosaurio) / Rothosen (Pantalones Rojos)",
        "socios": 90000,
        "estadio_lat": 53.5872,
        "estadio_lng": 9.9000,
        "descripcion_corta": "El gigantesco rey dormido portuario puro norteño. Un colosal titán formador de épocas míticas asombrosas aferrado eternamente originario y glorioso rudo inmenso orgullo purista relojero de Hamburgo.",
        "paleta": [ { "tag": "Azul", "hex": "#003A79" }, { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Negro", "hex": "#000000" } ],
        "records": { "maximo_goleador": "Uwe Seeler (507)", "mas_presencias": "Manfred Kaltz (744)", "mayor_goleada": "8-0 vs Kalsruher (1966)" }
    },
    "heidenheim": {
        "sigla": "FCH",
        "apodo": "Ninguno",
        "socios": 15000,
        "estadio_lat": 48.6685,
        "estadio_lng": 10.1394,
        "descripcion_corta": "Héroes del humilde cemento formadores de épicas estelares de trabajo rígido purísimo inquebrantable heroico alcanzando asombrosos purísimos e innegables sueños de ascenso directo élite inmensa teutona.",
        "paleta": [ { "tag": "Rojo", "hex": "#E3001B" }, { "tag": "Azul Profundo", "hex": "#002C5F" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
        "records": { "maximo_goleador": "Marc Schnatterer (122)", "mas_presencias": "Marc Schnatterer (427)", "mayor_goleada": "4-0 vs múltiple" }
    },
    "hoffenheim": {
        "sigla": "TSG",
        "apodo": "Die Kraichgauer (Los de Kraichgau)",
        "socios": 11000,
        "estadio_lat": 49.2386,
        "estadio_lng": 8.8872,
        "descripcion_corta": "Milagro gerencial y gigantesca obra dictaminativa impulsada asombrosa y audazmente puros por magnates escalando asfixiantes barreras para asentar rudos aldeanos fácticos entre imbatibles puristas gigantes puros formales germanos.",
        "paleta": [ { "tag": "Azul Intenso", "hex": "#002D72" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
        "records": { "maximo_goleador": "Andrej Kramaric (132)", "mas_presencias": "Oliver Baumann (350+)", "mayor_goleada": "6-0 vs Colonia (2021)" }
    },
    "koln": {
        "sigla": "KOE",
        "apodo": "Die Geißböcke (Los Machos Cabríos)",
        "socios": 132000,
        "estadio_lat": 50.9335,
        "estadio_lng": 6.8749,
        "descripcion_corta": "Gigante fiero devorador liguero primitivo. Institución emblemática del oeste asombroso férreo amparado siempre rústico purísimo por el histórico carnero vivo dictaminador y de asombrosas locuras fácticas cabrías formadoras puros.",
        "paleta": [ { "tag": "Rojo", "hex": "#ED1C24" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
        "records": { "maximo_goleador": "Hannes Löhr (166)", "mas_presencias": "Toni Schumacher (422)", "mayor_goleada": "8-0 vs Schalke (1969)" }
    },
    "mainz-05": {
        "sigla": "M05",
        "apodo": "Die Nullfünfer (Los del 05) / Karnevalsverein",
        "socios": 14000,
        "estadio_lat": 49.9839,
        "estadio_lng": 8.2241,
        "descripcion_corta": "Festejantes formadores aguerridos inmensos puros carnavaleros. Una asombrosa y férrea máquina letal rústica purísima asombrosa asimiladora de épicos y legendarios fácticos directores inmenso técnicos formales presiones adelantadas letales.",
        "paleta": [ { "tag": "Rojo", "hex": "#D31245" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
        "records": { "maximo_goleador": "Michael Thurk (65)", "mas_presencias": "Nikolče Noveski (348)", "mayor_goleada": "5-0 vs varios" }
    },
    "rb-leipzig": {
        "sigla": "RBL",
        "apodo": "Die Roten Bullen (Los Toros Rojos)",
        "socios": 750, // Realidad asombrosa puramente corporativa, pocos socios votantes
        "estadio_lat": 51.3458,
        "estadio_lng": 12.3483,
        "descripcion_corta": "Máquina moderna corporativa asimiladora. El coloso energético fáctico purísimo del este, veloz devastador forjador implacable y el más férreo controvertido pujante originado gigante heroico contemporáneo letal estricto innegociable fáctico.",
        "paleta": [ { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Rojo", "hex": "#DF0030" }, { "tag": "Azul Profundo", "hex": "#001D4A" } ],
        "records": { "maximo_goleador": "Timo Werner (113)", "mas_presencias": "Yussuf Poulsen (350+)", "mayor_goleada": "8-0 vs Mainz (2019)" }
    },
    "st-pauli": {
        "sigla": "FCSP",
        "apodo": "Die Kiezkicker / Freibeuter der Liga (Piratas de la Liga)",
        "socios": 30000,
        "estadio_lat": 53.5534,
        "estadio_lng": 9.9678,
        "descripcion_corta": "La legendaria inquebrantable heroica y pura tribu rebelde corsaria. El inmenso bastión cultista antifascista popular estipulado estricto con asombrosas y gigantes cráneos de banderas puras temibles puros de fiero origen pirata.",
        "paleta": [ { "tag": "Marrón", "hex": "#533422" }, { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Rojo", "hex": "#D6001C" } ],
        "records": { "maximo_goleador": "André Trulsen (53)", "mas_presencias": "Jürgen Gronau (340)", "mayor_goleada": "8-1 vs Burghausen (2002)" }
    },
    "union-berlin": {
        "sigla": "FCU",
        "apodo": "Die Eisernen (Los de Hierro)",
        "socios": 55000,
        "estadio_lat": 52.4578,
        "estadio_lng": 13.5680,
        "descripcion_corta": "Férreos y asombrosos purísimos de sangre obreros metalúrgicos orientales forjando castillos puros heroicos de cemento cimentando rígidamente puras históricas invencibles fortalezas s puristas heroicas levantadas originarias por sus mismos seguidores.",
        "paleta": [ { "tag": "Rojo Oscuro", "hex": "#D4011D" }, { "tag": "Amarillo Oro", "hex": "#F3B204" } ],
        "records": { "maximo_goleador": "Karim Benyamina (87)", "mas_presencias": "Lutz Hendel (422)", "mayor_goleada": "8-0 vs varios" }
    },
    "vfb-stuttgart": {
        "sigla": "VFB",
        "apodo": "Die Schwaben (Los Suabos)",
        "socios": 80000,
        "estadio_lat": 48.7922,
        "estadio_lng": 9.2320,
        "descripcion_corta": "Pilar fundacional rústico originario inmenso heroico inquebrantable hegemónico del suroeste portando rígidamente e innegablemente pura formal estelar inmensa gloriosa franja roja dictando glorioso poderío rudo formador absoluto motorizado de época.",
        "paleta": [ { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Rojo", "hex": "#E32221" } ],
        "records": { "maximo_goleador": "Karl Allgöwer (164)", "mas_presencias": "Hermann Ohlicher (460)", "mayor_goleada": "7-0 vs Dortmund, Hannover" }
    },
    "werder-bremen": {
        "sigla": "SVW",
        "apodo": "Die Werderaner / Die Grün-Weißen",
        "socios": 40000,
        "estadio_lat": 53.0664,
        "estadio_lng": 8.8376,
        "descripcion_corta": "Espectacular romántico devorador implacable y rey del gran milagro purísimo originario puro norteño teutono. Sano bastión heroico y mítico estipulado de pura táctica milagrosa gigantesca invicta de Weser asombrosos románticos formativos verdes.",
        "paleta": [ { "tag": "Verde", "hex": "#1D9053" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
        "records": { "maximo_goleador": "Claudio Pizarro (153)", "mas_presencias": "Dieter Burdenski (444)", "mayor_goleada": "8-1 vs Varios" }
    },
    "wolfsburg": {
        "sigla": "WOB",
        "apodo": "Die Wölfe (Los Lobos)",
        "socios": 20000,
        "estadio_lat": 52.4300,
        "estadio_lng": 10.8037,
        "descripcion_corta": "Cimentados forjados innegables en puros letales gigantes de ensamblajes obreros e inmensos automotrices absolutos para formar estricto imbatible fiero y asombroso purísimo depredador manada sólida letales feroces héroes modernos de los salvajes lobos del Volkswagen.",
        "paleta": [ { "tag": "Verde Claro", "hex": "#65B32E" }, { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Azul", "hex": "#004787" } ],
        "records": { "maximo_goleador": "Edin Džeko (85)", "mas_presencias": "Diego Benaglio (259)", "mayor_goleada": "8-1 vs Augsburg (2019)" }
    }
};

const clubesDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

for (const [clubId, metadata] of Object.entries(clubsData)) {
    const filePath = path.join(clubesDir, `${clubId}.json`);
    if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        // Asignar nuevas propiedades dentro de data.datos sin reescribir las que esten bien
        data.datos.sigla = metadata.sigla;
        data.datos.apodo = metadata.apodo;
        data.datos.socios = metadata.socios;
        data.datos.estadio_lat = metadata.estadio_lat;
        data.datos.estadio_lng = metadata.estadio_lng;
        data.datos.descripcion_corta = metadata.descripcion_corta;
        data.datos.paleta = metadata.paleta;
        data.datos.records = metadata.records;
        
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`[OK] Ficha principal actualizada para: ${clubId}`);
    } else {
        console.error(`[ERROR] Archivo no encontrado: ${filePath}`);
    }
}

console.log("Completada inyeccion masiva de los metadatos 'fichas' de clubes de Alemania.");
