const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');
if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

const clubes = [
{
  "id": "osasuna",
  "datos": {
    "nombre_oficial": "Club Atlético Osasuna",
    "nombre_completo": "Club Atlético Osasuna",
    "nombre_corto": "Osasuna",
    "apodo": "Rojillos",
    "fundacion": "24 de octubre de 1920",
    "escudo_actual": "/escudos/osasuna.png",
    "estadio": {
      "nombre": "Estadio El Sadar",
      "direccion": "C. Sadar, s/n, 31006 Pamplona, Navarra, España",
      "inauguracion": "2 de septiembre de 1967",
      "mapa_url": "https://maps.app.goo.gl/9m2F1"
    },
    "descripcion_corta": "Entidad pamplonesa y símbolo deportivo integral en la Comunidad Foral de Navarra."
  },
  "historia": [
    {
      "periodo": "1920",
      "descripcion": "Instaurado la noche del 24 de octubre tras convenir estatutos los miembros discrepantes de formaciones civiles locales."
    }
  ],
  "colores_oficiales": ["Rojo", "Azul"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/osasuna.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#DA291C", "c2": "#00205B", "c3": "#00205B" }
  ],
  "idolos": [
    { "nombre": "Patxi Puñal", "periodo": "1997-2014", "descripcion": "Consumó estrictamente 513 representaciones." },
    { "nombre": "Sabino Andonegui", "periodo": "1953-1963", "descripcion": "Estableció 57 aciertos validados internamente en liga élite." },
    { "nombre": "César Cruchaga", "periodo": "1997-2009", "descripcion": "Ofició 386 jornadas reguladas por federación." },
    { "nombre": "Roberto Torres", "periodo": "2011-2022", "descripcion": "Alveoló en 353 actas documentales." },
    { "nombre": "Oier Sanjurjo", "periodo": "2007-2022", "descripcion": "Intervino en 356 lances computables." }
  ],
  "titulos": [],
  "rivalidades": ["Athletic Club", "Real Zaragoza"],
  "enlaces": {
    "sitio_web": "https://www.osasuna.es",
    "wikipedia": "https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_Osasuna"
  }
},
{
  "id": "rayo-vallecano",
  "datos": {
    "nombre_oficial": "Rayo Vallecano de Madrid",
    "nombre_completo": "Rayo Vallecano de Madrid",
    "nombre_corto": "Rayo Vallecano",
    "apodo": "Franjirrojos, Vallecanos",
    "fundacion": "29 de mayo de 1924",
    "escudo_actual": "/escudos/rayo-vallecano.png",
    "estadio": {
      "nombre": "Estadio de Vallecas",
      "direccion": "C. del Payaso Fofó, s/n, Puente de Vallecas, 28018 Madrid, España",
      "inauguracion": "5 de junio de 1976",
      "mapa_url": "https://maps.app.goo.gl/34zC"
    },
    "descripcion_corta": "Sociedad civil afincada en el sector sureste de la capital estatal."
  },
  "historia": [
    {
      "periodo": "1924",
      "descripcion": "Delineado bajo el acta refrendada por Prudencio Priego en orden al registro social del barrio como Agrupación Deportiva El Rayo."
    }
  ],
  "colores_oficiales": ["Blanco", "Rojo"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/rayo-vallecano.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#FFFFFF", "c2": "#FFFFFF", "c3": "#FFFFFF" }
  ],
  "idolos": [
    { "nombre": "Cota", "periodo": "1985-2002", "descripcion": "Acumuló 458 planillas computables formalizadas por la entidad rectriz." },
    { "nombre": "Michel", "periodo": "1993-2012", "descripcion": "Contabilizó 425 encuentros documentales." },
    { "nombre": "Bolo (Jon Andoni Pérez)", "periodo": "1998-2004", "descripcion": "Aproximó 54 dianas efectivas verificadas estadísticamente." },
    { "nombre": "Guilherme de Cássio", "periodo": "1994-1997", "descripcion": "Logró 38 anotaciones refrendadas." },
    { "nombre": "Óscar Trejo", "periodo": "2010-", "descripcion": "Participó en el ordenamiento de 250 citas comprobadas." }
  ],
  "titulos": [],
  "rivalidades": ["Getafe CF"],
  "enlaces": {
    "sitio_web": "https://www.rayovallecano.es",
    "wikipedia": "https://es.wikipedia.org/wiki/Rayo_Vallecano_de_Madrid"
  }
},
{
  "id": "mallorca",
  "datos": {
    "nombre_oficial": "Real Club Deportivo Mallorca",
    "nombre_completo": "Real Club Deportivo Mallorca",
    "nombre_corto": "RCD Mallorca",
    "apodo": "Bermellones",
    "fundacion": "5 de marzo de 1916",
    "escudo_actual": "/escudos/mallorca.png",
    "estadio": {
      "nombre": "Estadi Mallorca Son Moix",
      "direccion": "Camí dels Reis, s/n, 07011 Palma, Illes Balears, España",
      "inauguracion": "3 de julio de 1999",
      "mapa_url": "https://maps.app.goo.gl/35mN"
    },
    "descripcion_corta": "Entidad representativa vinculada a las islas del ente autonómico balear."
  },
  "historia": [
    {
      "periodo": "1916",
      "descripcion": "Constituido socialmente tras gestiones cívicas del grupo de Adolfo Vázquez Humasqué el 5 de marzo certificándose como Alfonso XIII Foot-Ball Club."
    }
  ],
  "colores_oficiales": ["Rojo", "Negro"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/mallorca.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#E30613", "c2": "#000000", "c3": "#000000" }
  ],
  "idolos": [
    { "nombre": "Miguel Ángel Nadal", "periodo": "1986-2005", "descripcion": "Ofició numéricamente en 255 listas activas de la corporación." },
    { "nombre": "Samuel Eto'o", "periodo": "2000-2004", "descripcion": "Materializó 70 resultados medulares en un total del 165 apariciones." },
    { "nombre": "Juan Arango", "periodo": "2004-2009", "descripcion": "Comprobó 49 remates efectivos refrendados por LFP." },
    { "nombre": "Paco Soler", "periodo": "1990-2004", "descripcion": "Refrendó estatutariamente 419 participaciones." },
    { "nombre": "Jovan Stanković", "periodo": "1996-2004", "descripcion": "Cumplimentó asistencias en 198 intervenciones tabuladas." }
  ],
  "titulos": [
    { "nombre": "Copa del Rey", "cantidad": 1, "anios": [2003] },
    { "nombre": "Supercopa de España", "cantidad": 1, "anios": [1998] }
  ],
  "rivalidades": ["CD Atlético Baleares"],
  "enlaces": {
    "sitio_web": "https://www.rcdmallorca.es/",
    "wikipedia": "https://es.wikipedia.org/wiki/Real_Club_Deportivo_Mallorca"
  }
},
{
  "id": "alaves",
  "datos": {
    "nombre_oficial": "Deportivo Alavés",
    "nombre_completo": "Deportivo Alavés",
    "nombre_corto": "Alavés",
    "apodo": "Babazorros, El Glorioso",
    "fundacion": "23 de enero de 1921",
    "escudo_actual": "/escudos/alaves.png",
    "estadio": {
      "nombre": "Estadio Mendizorroza",
      "direccion": "P.º de Cervantes, s/n, 01007 Vitoria-Gasteiz, Álava, España",
      "inauguracion": "27 de abril de 1924",
      "mapa_url": "https://maps.app.goo.gl/35pE"
    },
    "descripcion_corta": "Entidad vitoriana inscrita registralmente como pionera deportiva de la comarca."
  },
  "historia": [
    {
      "periodo": "1921",
      "descripcion": "Firmado legalmente por los ex-componentes de la subdivisión de Sport Friend’s Club modificando nominalmente el archivo en enero."
    }
  ],
  "colores_oficiales": ["Azul", "Blanco"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/alaves.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#005BA6", "c2": "#FFFFFF", "c3": "#005BA6" }
  ],
  "idolos": [
    { "nombre": "Martín Astudillo", "periodo": "1999-2009", "descripcion": "Cumplimentó 346 jornadas formalizadas a su cuenta individual." },
    { "nombre": "Manu García", "periodo": "2012-2021", "descripcion": "Registró 308 comprobaciones de nómina inicial en los escalafones federativos." },
    { "nombre": "Javi Moreno", "periodo": "1998-2001", "descripcion": "Consumó 29 resultados directos validos computados en su temporada final con el club." },
    { "nombre": "Pablo Gómez", "periodo": "1996-2004", "descripcion": "Asignado numéricamente en 295 fechas de competición oficial." },
    { "nombre": "Fernando Pacheco", "periodo": "2015-2022", "descripcion": "Custodió y operó la defensa en 253 participaciones documentales." }
  ],
  "titulos": [],
  "rivalidades": ["CD Mirandés", "Athletic Club"],
  "enlaces": {
    "sitio_web": "https://www.deportivoalaves.com",
    "wikipedia": "https://es.wikipedia.org/wiki/Deportivo_Alav%C3%A9s"
  }
},
{
  "id": "las-palmas",
  "datos": {
    "nombre_oficial": "Unión Deportiva Las Palmas",
    "nombre_completo": "Unión Deportiva Las Palmas",
    "nombre_corto": "Las Palmas",
    "apodo": "Pío-pío, Amarillos",
    "fundacion": "22 de agosto de 1949",
    "escudo_actual": "/escudos/las-palmas.png",
    "estadio": {
      "nombre": "Estadio de Gran Canaria",
      "direccion": "C. Fondos de Segura, s/n, 35019 Las Palmas de Gran Canaria, Las Palmas, España",
      "inauguracion": "8 de mayo de 2003",
      "mapa_url": "https://maps.app.goo.gl/y5hT"
    },
    "descripcion_corta": "Entidad constituida de la asociación reglamentada para consolidación canaria territorial en ligas insulares."
  },
  "historia": [
    {
      "periodo": "1949",
      "descripcion": "Concordada mediante la fusión legal de los elencos Arenas, Marino, Victoria, Atlético y Real Club Victoria dictado en la junta unificadora oficial."
    }
  ],
  "colores_oficiales": ["Amarillo", "Azul"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/las-palmas.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#FFD700", "c2": "#005BA6", "c3": "#005BA6" }
  ],
  "idolos": [
    { "nombre": "Germán Dévora", "periodo": "1962-1978", "descripcion": "Contabilizó 119 aciertos tabulados en LFP en más de 450 lances." },
    { "nombre": "David García", "periodo": "2003-2019", "descripcion": "Instaló su cifra personal en 474 actas consecutivas validadas." },
    { "nombre": "Francisco Guedes", "periodo": "1960-1971", "descripcion": "Asignó 286 constancias antes de su fenecimiento prematuro documentado." },
    { "nombre": "Carlos Morete", "periodo": "1977-1980", "descripcion": "Ofició 99 facturaciones certificadas." },
    { "nombre": "Jonathan Viera", "periodo": "2010-2023", "descripcion": "Refrendó contribuciones en 265 alineaciones." }
  ],
  "titulos": [],
  "rivalidades": ["CD Tenerife"],
  "enlaces": {
    "sitio_web": "https://www.udlaspalmas.es",
    "wikipedia": "https://es.wikipedia.org/wiki/Uni%C3%B3n_Deportivo_Las_Palmas"
  }
},
{
  "id": "getafe",
  "datos": {
    "nombre_oficial": "Getafe Club de Fútbol",
    "nombre_completo": "Getafe Club de Fútbol",
    "nombre_corto": "Getafe",
    "apodo": "Azulones",
    "fundacion": "8 de julio de 1983",
    "escudo_actual": "/escudos/getafe.png",
    "estadio": {
      "nombre": "Estadio Coliseum",
      "direccion": "Av. de Teresa de Calcuta, s/n, 28903 Getafe, Madrid, España",
      "inauguracion": "1 de septiembre de 1998",
      "mapa_url": "https://maps.app.goo.gl/T4fQ"
    },
    "descripcion_corta": "Corporación inserta de la urbe del sur del núcleo residencial de la capital."
  },
  "historia": [
    {
      "periodo": "1983",
      "descripcion": "Firmado su acta re-constitutiva bajo el padrón cívico legal tomando registro federado final tras solventar déficits de asociaciones vecinales precedentes."
    }
  ],
  "colores_oficiales": ["Azul", "Blanco"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/getafe.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#0000FF", "c2": "#0000FF", "c3": "#0000FF" }
  ],
  "idolos": [
    { "nombre": "Damián Suárez", "periodo": "2015-", "descripcion": "Completó 295 actas regladas institucionales." },
    { "nombre": "Javier Casquero", "periodo": "2006-2012", "descripcion": "Constanció en 231 alineaciones y turnos normativos." },
    { "nombre": "Jaime Gavilán", "periodo": "2007-2014", "descripcion": "Integró las listas formales de contienda superando las 180 veces." },
    { "nombre": "Manu del Moral", "periodo": "2006-2011", "descripcion": "Computó 39 anotaciones certificadas formales." },
    { "nombre": "Enes Ünal", "periodo": "2020-", "descripcion": "Reporta 36 unidades estadísticas refrendadas de conversión." }
  ],
  "titulos": [],
  "rivalidades": ["CD Leganés"],
  "enlaces": {
    "sitio_web": "https://www.getafecf.com/",
    "wikipedia": "https://es.wikipedia.org/wiki/Getafe_Club_de_F%C3%BAtbol"
  }
},
{
  "id": "leganes",
  "datos": {
    "nombre_oficial": "Club Deportivo Leganés",
    "nombre_completo": "Club Deportivo Leganés",
    "nombre_corto": "CD Leganés",
    "apodo": "Pepineros",
    "fundacion": "23 de junio de 1928",
    "escudo_actual": "/escudos/leganes.png",
    "estadio": {
      "nombre": "Estadio Municipal Butarque",
      "direccion": "C. de la Arquitectura, s/n, 28914 Leganés, Madrid, España",
      "inauguracion": "14 de febrero de 1998",
      "mapa_url": "https://maps.app.goo.gl/P4mV"
    },
    "descripcion_corta": "Corporación municipal que alcanzó notoriedad ascendiendo a la jerarquía local hacia la modernidad."
  },
  "historia": [
    {
      "periodo": "1928",
      "descripcion": "Establecido y redactado formalmente por Félix Pérez de la Serna documentando su inclusión registral oficial ante instancias del área sureña."
    }
  ],
  "colores_oficiales": ["Blanco", "Azul"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/leganes.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#FFFFFF", "c2": "#FFFFFF", "c3": "#FFFFFF" }
  ],
  "idolos": [
    { "nombre": "Unai Bustinza", "periodo": "2015-2022", "descripcion": "Refrendó 161 documentales tácticos en instancias ligueras." },
    { "nombre": "Alexander Szymanowski", "periodo": "2015-2020", "descripcion": "Totalizó intervenciones claves registrales para ascensión numérica." },
    { "nombre": "Martín Mantovani", "periodo": "2013-2018", "descripcion": "Efectuó validaciones capitanas en 166 comparecencias." },
    { "nombre": "Rubén Pérez", "periodo": "2016-2021", "descripcion": "Participó certificadamente de 160 actas LFP." },
    { "nombre": "Miguel Ángel Guerrero", "periodo": "2016-2020", "descripcion": "Se adjudicó sumas estadísticas ofensivas normadas." }
  ],
  "titulos": [],
  "rivalidades": ["Getafe CF"],
  "enlaces": {
    "sitio_web": "https://www.cdleganes.com/",
    "wikipedia": "https://es.wikipedia.org/wiki/Club_Deportivo_Legan%C3%A9s"
  }
},
{
  "id": "real-valladolid",
  "datos": {
    "nombre_oficial": "Real Valladolid Club de Fútbol",
    "nombre_completo": "Real Valladolid Club de Fútbol",
    "nombre_corto": "Real Valladolid",
    "apodo": "Pucelanos, Blanquivioletas",
    "fundacion": "20 de junio de 1928",
    "escudo_actual": "/escudos/real-valladolid.png",
    "estadio": {
      "nombre": "Estadio José Zorrilla",
      "direccion": "Av. Mundial 82, s/n, 47014 Valladolid, España",
      "inauguracion": "20 de febrero de 1982",
      "mapa_url": "https://maps.app.goo.gl/35bB"
    },
    "descripcion_corta": "Entidad consolidada del núcleo central de la entidad autonómica de Castilla y León."
  },
  "historia": [
    {
      "periodo": "1928",
      "descripcion": "Establecido vía pacto jurídico tras amalgamar al Club Deportivo Español y la agrupación Real Unión Deportiva en actas constitutivas notariales."
    }
  ],
  "colores_oficiales": ["Blanco", "Violeta"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/real-valladolid.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#FFFFFF", "c2": "#FFFFFF", "c3": "#FFFFFF" }
  ],
  "idolos": [
    { "nombre": "Víctor Manuel Fernández", "periodo": "1996-2009", "descripcion": "Materializó 89 resoluciones formales." },
    { "nombre": "Marcos Fernández", "periodo": "1980-1994", "descripcion": "Operó 358 certificaciones documentarias." },
    { "nombre": "Alberto López", "periodo": "1993-2009", "descripcion": "Superpuso la participación continua registralmente 362 veces." },
    { "nombre": "Javi Moyano", "periodo": "2015-2020", "descripcion": "Lideró plantillas bajo firmas verificadas en competiciones foráneas y locales." },
    { "nombre": "Alen Peternac", "periodo": "1995-2000", "descripcion": "Registró 55 constataciones normadas de meta." }
  ],
  "titulos": [
    { "nombre": "Copa de la Liga", "cantidad": 1, "anios": [1984] }
  ],
  "rivalidades": ["Cultural Leonesa"],
  "enlaces": {
    "sitio_web": "https://www.realvalladolid.es",
    "wikipedia": "https://es.wikipedia.org/wiki/Real_Valladolid_Club_de_F%C3%BAtbol"
  }
},
{
  "id": "espanyol",
  "datos": {
    "nombre_oficial": "Real Club Deportivo Espanyol de Barcelona",
    "nombre_completo": "Real Club Deportivo Espanyol de Barcelona",
    "nombre_corto": "RCD Espanyol",
    "apodo": "Pericos",
    "fundacion": "28 de octubre de 1900",
    "escudo_actual": "/escudos/espanyol.png",
    "estadio": {
      "nombre": "Stage Front Stadium",
      "direccion": "Av. del Baix Llobregat, 100, 08940 Cornellà de Llobregat, Barcelona, España",
      "inauguracion": "2 de agosto de 2009",
      "mapa_url": "https://maps.app.goo.gl/P4Zz"
    },
    "descripcion_corta": "Entidad constitutiva y fundadora de la actual liga originada integramente por nativos para diferenciarse documentadamente."
  },
  "historia": [
    {
      "periodo": "1900",
      "descripcion": "Establecido perimetralmente en el recinto barcelonés por Ángel Rodríguez bajo la nomenclatura de Sociedad Española de Foot-ball estipulando en su acta localía absoluta de nacidos ibéricos."
    }
  ],
  "colores_oficiales": ["Blanco", "Azul"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/espanyol.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#FFFFFF", "c2": "#0000FF", "c3": "#0000FF" }
  ],
  "idolos": [
    { "nombre": "Raúl Tamudo", "periodo": "1997-2010", "descripcion": "Constituyó el récord definitivo tasado en 140 aciertos registrados en actas." },
    { "nombre": "Thomas N'Kono", "periodo": "1982-1990", "descripcion": "Conservó su espacio reglamentario superando las 240 incidencias métricas." },
    { "nombre": "Mauricio Pochettino", "periodo": "1994-2006", "descripcion": "Participó acreditadamente 275 turnos institucionales normados." },
    { "nombre": "Dani Jarque", "periodo": "2002-2009", "descripcion": "Inició de formaciones 214 citatorios verificados por jurados LFP." },
    { "nombre": "Rafael Marañón", "periodo": "1974-1983", "descripcion": "Cifró con suficiencia registral y acumuló preseas goleadoras tasadas oficialmente." }
  ],
  "titulos": [
    { "nombre": "Copa del Rey", "cantidad": 4, "anios": [1929, 1940, 2000, 2006] }
  ],
  "rivalidades": ["FC Barcelona"],
  "enlaces": {
    "sitio_web": "https://www.rcdespanyol.com/",
    "wikipedia": "https://es.wikipedia.org/wiki/Real_Club_Deportivo_Espanyol"
  }
},
{
  "id": "girona",
  "datos": {
    "nombre_oficial": "Girona Futbol Club",
    "nombre_completo": "Girona Futbol Club",
    "nombre_corto": "Girona FC",
    "apodo": "Gironins, Blanquivermells",
    "fundacion": "23 de julio de 1930",
    "escudo_actual": "/escudos/girona.png",
    "estadio": {
      "nombre": "Estadi Municipal de Montilivi",
      "direccion": "Av. de Montilivi, 141, 17003 Girona, España",
      "inauguracion": "14 de agosto de 1970",
      "mapa_url": "https://maps.app.goo.gl/35xT"
    },
    "descripcion_corta": "Corporación inserta de la comunidad constitutiva tras disoluciones precursoras registradas en Gerona."
  },
  "historia": [
    {
      "periodo": "1930",
      "descripcion": "Acordado legalmente en la cafetería preexistente firmando el acta para llenar el vacío notarial local luego de que desapareciera el ente UD Gerona prefigurado."
    }
  ],
  "colores_oficiales": ["Rojo", "Blanco"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/girona.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#E30613", "c2": "#FFFFFF", "c3": "#E30613" }
  ],
  "idolos": [
    { "nombre": "Cristhian Stuani", "periodo": "2017-", "descripcion": "Operó superioridad estadística constatable materializando 120 tabulaciones eficientes." },
    { "nombre": "Borja García", "periodo": "2015-", "descripcion": "Refrendó estatutariamente más de 200 formaciones." },
    { "nombre": "Jordi Matamala", "periodo": "2001-2010", "descripcion": "Estableció participación verificada en épocas pre-medulares." },
    { "nombre": "Àlex Granell", "periodo": "2014-2020", "descripcion": "Cifró con suficiencia presencias y capitanías constatables LFP." },
    { "nombre": "Jandro", "periodo": "2010-2015", "descripcion": "Validó con su aporte actas numerales clave institucionales." }
  ],
  "titulos": [],
  "rivalidades": ["RCD Espanyol"],
  "enlaces": {
    "sitio_web": "https://www.gironafc.cat/",
    "wikipedia": "https://es.wikipedia.org/wiki/Girona_Futbol_Club"
  }
}
];

const writeClubs = (clubsArray) => {
    clubsArray.forEach(club => {
        fs.writeFileSync(path.join(DIR, `${club.id}.json`), JSON.stringify(club, null, 2));
    });
};

writeClubs(clubes);
