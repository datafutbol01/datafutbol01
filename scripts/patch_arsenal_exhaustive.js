const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../app/src/data/clubes/inglaterra/arsenal.json');
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

// 1. Corregir Direcciones de estadios (canchas)
data.canchas[0].estadio_direccion = "Plumstead Common Rd, Plumstead, London";
data.canchas[0].lat = 51.4878;
data.canchas[0].lng = 0.0883;
data.canchas[1].estadio_direccion = "Avenell Rd, Highbury, London N5 1FE, Reino Unido";
data.canchas[1].lat = 51.557722;
data.canchas[1].lng = -0.103028;

// 2. Corregir Evolucion Escudos
data.evolucion_escudos = [
    {
        "ano": "1888",
        "url": "/escudos/arsenal_1888.png",
        "desc": "El primer escudo histórico basado fuertemente en el escudo de armas de la ciudad portuaria armera de Woolwich. Con tres cañones apuntando hacia el cielo en vistas lúgubres."
    },
    {
        "ano": "1925",
        "url": "/escudos/arsenal_1925.png",
        "desc": "Se simplifica a un solo cañón (modelo de asedio) girado hacia la izquierda, acompañado del rústico y naciente título The Gunners."
    },
    {
        "ano": "1949",
        "url": "/escudos/arsenal_1949.png",
        "desc": "Aparece la icónica insignia victoriana del cañón hacia la izquierda bajo el lema en latín 'Victoria Concordia Crescit' (La Victoria nace de la armonía)."
    },
    {
        "ano": "2002-Actualidad",
        "url": "/escudos/arsenal.png",
        "desc": "Se patenta un rediseño moderno brillante debido a derechos de copyright europeos irreversibles; el cañón misteriosamente es invertido logrando que apunte hacia la derecha por primera vez."
    }
];

// 3. Corregir Palmarés detallado
data.titulos = [
    {
        "comp": "Campeonato de Primera División (First Division / Premier League)",
        "n": 13,
        "anios": [1931, 1933, 1934, 1935, 1938, 1948, 1953, 1971, 1989, 1991, 1998, 2002, 2004]
    },
    {
        "comp": "Copa de Inglaterra (FA Cup)",
        "n": 14,
        "anios": [1930, 1936, 1950, 1971, 1979, 1993, 1998, 2002, 2003, 2005, 2014, 2015, 2017, 2020]
    },
    {
        "comp": "Copa de la Liga (League Cup)",
        "n": 2,
        "anios": [1987, 1993]
    },
    {
        "comp": "Supercopa de Inglaterra (Community Shield)",
        "n": 17,
        "anios": [1930, 1931, 1933, 1934, 1938, 1948, 1953, 1991, 1998, 1999, 2002, 2004, 2014, 2015, 2017, 2020, 2023]
    },
    {
        "comp": "Copa de Ferias / Recopa de Europa",
        "n": 2,
        "anios": [1970, 1994]
    }
];

// 4. Corregir Equipacion (Historicas)
data.equipacion = [
    {
        "desde": 1886,
        "hasta": 1895,
        "c1": "#6A1E31",
        "c2": "#6A1E31",
        "sh": "#FFFFFF",
        "me": "#111111",
        "tipo": "liso",
        "desc": "Equipación fundacional en bordó ciruela ('Redcurrant') donada por los pares fundadores del Nottingham Forest F.C."
    },
    {
        "desde": 1933,
        "hasta": null,
        "c1": "#EF0107",
        "c2": "#FFFFFF",
        "sh": "#FFFFFF",
        "me": "#EF0107",
        "tipo": "mangas-distintas",
        "desc": "Piel definitiva escarlata con mangas blancas crudas creada por H. Chapman para la mejor visualización bajo neblina."
    },
    {
        "desde": 1970,
        "hasta": 1971,
        "c1": "#FFD700",
        "c2": "#111111",
        "sh": "#111111",
        "me": "#FFD700",
        "tipo": "liso-con-vivos",
        "desc": "Legendaria indumentaria alternativa Amarilla con gruesos ribetes azul marino oscuro con la cual lograron conquistar la FA Cup rompiendo una sequía maldita ganando el ansiado doblete en el 71."
    },
    {
        "desde": 2005,
        "hasta": 2006,
        "c1": "#6A1E31",
        "c2": "#FFD700",
        "sh": "#6A1E31",
        "me": "#6A1E31",
        "tipo": "liso",
        "desc": "Magistral homenaje al éxodo definitivo del mítico estadio de Highbury vistiendo por única vez el color tinto y letras de imprenta amarillas doradas cerrando la temporada a pura lágrima."
    }
];

// 5. Corregir Goleadores Historicos
data.goleadores_historicos = [
    {
        "pos": 1,
        "nombre": "Thierry Henry",
        "apodo": "Titi",
        "goles": 228,
        "partidos": 377,
        "periodo": "1999-2007; 2012",
        "posicion": "Delantero",
        "obs": "Elegido sistemáticamente como el talento más deslumbrante en tocar los campos de la Premier League británica."
    },
    {
        "pos": 2,
        "nombre": "Ian Wright",
        "apodo": "Wrighty",
        "goles": 185,
        "partidos": 288,
        "periodo": "1991-1998",
        "posicion": "Atacante",
        "obs": "Rompió el récord absoluto anterior logrando un cúlmen idolatrado en Londres antes de la heráldica llegada francesa de Henry."
    },
    {
        "pos": 3,
        "nombre": "Cliff Bastin",
        "apodo": "Boy Bastin",
        "goles": 178,
        "partidos": 396,
        "periodo": "1929-1947",
        "posicion": "Falso Punta",
        "obs": "Leyenda originaria silenciosa de la preguerra bajo el esquema destructivo letal WM del mítico Herbert Chapman."
    }
];

// 6. Corregir Presencias Historicas
data.presencias_historicas = [
    {
      "nombre": "David O'Leary",
      "partidos": 722,
      "periodo": "1975-1993"
    },
    {
      "nombre": "Tony Adams",
      "partidos": 669,
      "periodo": "1983-2002"
    },
    {
      "nombre": "George Armstrong",
      "partidos": 621,
      "periodo": "1961-1977"
    }
];

// 7. Corregir Idolos (Objetos enciclopédicos)
data.idolos = [
    {
        "nombre": "Thierry Henry",
        "pos": "Centrodelantero",
        "apodo": "El Mago de los Guantes",
        "periodo": "1999-2007",
        "desc": "Máximo monarca absoluto artillero del club y líder carismático imparable del inalcanzable hito de 'Los Invencibles' en el 2004 arrasando al país sin caer jamás derrotados."
    },
    {
        "nombre": "Tony Adams",
        "pos": "Defensor",
        "apodo": "Mr. Arsenal",
        "periodo": "1983-2002",
        "desc": "Capitán inquebrantable que superó graves trabas etílicas y personales para levantar trofeos en tres inigualables décadas diferentes operando a vida y muerte en la defensa roja."
    },
    {
        "nombre": "Dennis Bergkamp",
        "pos": "Enganche",
        "apodo": "El Holandés No Volador",
        "periodo": "1995-2006",
        "desc": "Atormentado por un terror irremediable e incurables fobias a volar en los transportes europeos, pintaba obras visuales maestras en el estadio de Highbury siendo el engranaje central de la creación moderna."
    },
    {
        "nombre": "Patrick Vieira",
        "pos": "Pivote",
        "apodo": "El Pulpo",
        "periodo": "1996-2005",
        "desc": "Insuperable capitán senegalés nacionalizado galo, dominó bestialmente al inclemente e industrioso genio rudo inglés batallando históricamente con armas brutales ante capitanes como Roy Keane."
    }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
console.log("Arsenal fixeado de pe a pa.");
