const fs = require('fs');

const dataMap = {
  'atalanta.json': {
    "goleadores_historicos": [
      { "nombre": "Cristiano Doni", "goles": 112, "periodo": "1998-2011", "partidos": 323 },
      { "nombre": "Duván Zapata", "goles": 82, "periodo": "2018-2023", "partidos": 191 },
      { "nombre": "Severo Cominelli", "goles": 62, "periodo": "1934-1947", "partidos": 261 },
      { "nombre": "Alejandro 'Papu' Gómez", "goles": 59, "periodo": "2014-2021", "partidos": 252 },
      { "nombre": "Germán Denis", "goles": 56, "periodo": "2011-2016", "partidos": 158 }
    ],
    "presencias_historicas": [
      { "nombre": "Gianpaolo Bellini", "partidos": 435, "periodo": "1998-2016", "goles": 12 },
      { "nombre": "Valter Bonacina", "partidos": 331, "periodo": "1986-1999", "goles": 19 },
      { "nombre": "Stefano Angeleri", "partidos": 324, "periodo": "1949-1960", "goles": 4 },
      { "nombre": "Cristian Raimondi", "partidos": 313, "periodo": "2001-2017", "goles": 5 },
      { "nombre": "Marten de Roon", "partidos": 300, "periodo": "2015-presente", "goles": 16 }
    ],
    "idolos": [
      {
        "nombre": "Glenn Strömberg",
        "periodo": "1984-1992",
        "pos": "Mediocampista",
        "desc": "El sueco gigante que abrazó Bérgamo para siempre. Con su melena inconfundible y un potente despliegue, lideró el renacer europeo de los ochenta."
      },
      {
        "nombre": "Gianpaolo Bellini",
        "periodo": "1998-2016",
        "pos": "Defensor",
        "desc": "El capitán eterno. Surgido de la cantera, le entregó cada día de su extenuante carrera al club de sus amores, ostentando el récord inquebrantable de presencias."
      },
      {
        "nombre": "Alejandro 'Papu' Gómez",
        "periodo": "2014-2021",
        "pos": "Delantero",
        "desc": "Magia pura en tamaño reducido. El enganche argentino bailó frente al poder del norte, asumiendo la capitanía general que catapultó al humilde Atalanta a la élite de la Champions League."
      },
      {
        "nombre": "Cristiano Doni",
        "periodo": "1998-2011",
        "pos": "Mediocampista",
        "desc": "Talentoso e implacable frente a portería. Su asombroso olfato goleador desde el centro del campo lo encumbró como máximo artillero histórico de la Dea."
      },
      {
        "nombre": "Claudio Caniggia",
        "periodo": "1989-1992",
        "pos": "Delantero",
        "desc": "La ráfaga supersónica de los años noventa. El argentino desató pasiones incontrolables en el Stadio Comunale gracias a su velocidad relámpago inalcanzable para las defensas."
      }
    ]
  },
  'bologna.json': {
    "goleadores_historicos": [
      { "nombre": "Angelo Schiavio", "goles": 251, "periodo": "1922-1938", "partidos": 364 },
      { "nombre": "Carlo Reguzzoni", "goles": 168, "periodo": "1930-1946", "partidos": 417 },
      { "nombre": "Ezio Pascutti", "goles": 142, "periodo": "1955-1969", "partidos": 344 },
      { "nombre": "Gino Pivatelli", "goles": 105, "periodo": "1953-1960", "partidos": 198 },
      { "nombre": "Giuseppe Signori", "goles": 84, "periodo": "1998-2004", "partidos": 178 }
    ],
    "presencias_historicas": [
      { "nombre": "Giacomo Bulgarelli", "partidos": 486, "periodo": "1958-1975", "goles": 58 },
      { "nombre": "Tazio Roversi", "partidos": 459, "periodo": "1963-1979", "goles": 2 },
      { "nombre": "Carlo Reguzzoni", "partidos": 417, "periodo": "1930-1946", "goles": 168 },
      { "nombre": "Ivan Zatorri", "partidos": 405, "periodo": "1935-1950", "goles": 0 },
      { "nombre": "Angelo Schiavio", "partidos": 364, "periodo": "1922-1938", "goles": 251 }
    ],
    "idolos": [
      {
        "nombre": "Angelo Schiavio",
        "periodo": "1922-1938",
        "pos": "Delantero",
        "desc": "El monstruo del área boloñesa y el artífice letal que construyó literalmente la leyenda del 'escuadrón que hace temblar al mundo'."
      },
      {
        "nombre": "Giacomo Bulgarelli",
        "periodo": "1958-1975",
        "pos": "Mediocampista",
        "desc": "Patrono intocable, estratega y director de orquesta. Lideró la mágica escuadra que se adjudicó el último e inolvidable Scudetto de 1964."
      },
      {
        "nombre": "Roberto Baggio",
        "periodo": "1997-1998",
        "pos": "Delantero",
        "desc": "Un destello breve pero revivificador. El 'Divino Codino' sanó viejas heridas en el Renato Dall'Ara firmando su temporada más letal y romántica en la Serie A."
      },
      {
        "nombre": "Marco Di Vaio",
        "periodo": "2008-2012",
        "pos": "Delantero",
        "desc": "El capitán salvador de la era moderna. Renunció a lujos mayores, arribó al club en momentos inciertos y lo resguardó con una voracidad goleadora implacable."
      },
      {
        "nombre": "Harald Nielsen",
        "periodo": "1961-1967",
        "pos": "Delantero",
        "desc": "El veloz artillero danés. Sus precisos remates resultaron fundamentales para desarticular al poderoso Inter en los memorables duelos definitivos de los sesenta."
      }
    ]
  },
  'cagliari.json': {
    "goleadores_historicos": [
      { "nombre": "Luigi Riva", "goles": 208, "periodo": "1963-1976", "partidos": 374 },
      { "nombre": "David Suazo", "goles": 102, "periodo": "1999-2007", "partidos": 275 },
      { "nombre": "Luigi Piras", "goles": 104, "periodo": "1973-1987", "partidos": 377 },
      { "nombre": "João Pedro", "goles": 86, "periodo": "2014-2022", "partidos": 271 },
      { "nombre": "Mauro Esposito", "goles": 65, "periodo": "2001-2007", "partidos": 216 }
    ],
    "presencias_historicas": [
      { "nombre": "Daniele Conti", "partidos": 464, "periodo": "1999-2015", "goles": 51 },
      { "nombre": "Mario Brugnera", "partidos": 404, "periodo": "1968-1982", "goles": 40 },
      { "nombre": "Nené", "partidos": 380, "periodo": "1964-1976", "goles": 26 },
      { "nombre": "Luigi Piras", "partidos": 377, "periodo": "1973-1987", "goles": 104 },
      { "nombre": "Luigi Riva", "partidos": 374, "periodo": "1963-1976", "goles": 208 }
    ],
    "idolos": [
      {
        "nombre": "Luigi Riva",
        "periodo": "1963-1976",
        "pos": "Delantero",
        "desc": "'Gigi', el dios indisoluble de Cerdeña. Con un pie izquierdo arrollador, lideró el Scudetto asombroso del 70, optando heroicamente por jurarle amor perpetuo a la isla antes que migrar a los ricos norteños."
      },
      {
        "nombre": "Daniele Conti",
        "periodo": "1999-2015",
        "pos": "Mediocampista",
        "desc": "El pulmón infatigable de los años dos mil. Supo alejarse de la gigante herencia de su padre en la capital romana para asentar un legado de récord y garra pura."
      },
      {
        "nombre": "Gianfranco Zola",
        "periodo": "2003-2005",
        "pos": "Mediocampista",
        "desc": "Mago de toque elegante; regresó de la opulencia de Inglaterra para derramar poesía y obsequiar los últimos y lujosos brillos de su excepcional carrera en su tierra de orígenes."
      },
      {
        "nombre": "David Suazo",
        "periodo": "1999-2007",
        "pos": "Delantero",
        "desc": "Un galgo catracho imparable e implacable. Anotador feroz que aterrorizaba con velocidad sónica cimentando en la isola un fortín hondureño histórico."
      },
      {
        "nombre": "Enzo Francescoli",
        "periodo": "1990-1993",
        "pos": "Delantero",
        "desc": "El príncipe sudamericano del gol elegante. Depositó técnica de alta jerarquía y desfachatez continental elevando drásticamente el nivel de la plantilla."
      }
    ]
  },
  'como.json': {
    "goleadores_historicos": [
      { "nombre": "Antonio Cetti", "goles": 91, "periodo": "1920-1930", "partidos": 278 },
      { "nombre": "Marco Romano", "goles": 71, "periodo": "1931-1936", "partidos": 125 },
      { "nombre": "Giuseppe Baldini", "goles": 59, "periodo": "1940-1944", "partidos": 115 },
      { "nombre": "Vittorio Ghiandi", "goles": 44, "periodo": "1950-1954", "partidos": 140 },
      { "nombre": "Renato Campanini", "goles": 42, "periodo": "1960-1964", "partidos": 133 }
    ],
    "presencias_historicas": [
      { "nombre": "Giancarlo Centi", "partidos": 333, "periodo": "1978-1990", "goles": 3 },
      { "nombre": "Bruno Ciappina", "partidos": 318, "periodo": "1954-1964", "goles": 2 },
      { "nombre": "Antonio Cetti", "partidos": 278, "periodo": "1920-1930", "goles": 91 },
      { "nombre": "Luigi Paleari", "partidos": 266, "periodo": "1950-1960", "goles": 0 },
      { "nombre": "Roberto Galia", "partidos": 249, "periodo": "1980-1988", "goles": 12 }
    ],
    "idolos": [
      {
        "nombre": "Stefano Borgonovo",
        "periodo": "1980-1988",
        "pos": "Delantero",
        "desc": "Delantero sutil y esbelto gestado en la región. Se transformó en el artífice ofensivo del exitoso cuadro de los gloriosos ochenta atrayendo las miradas de los gigantes nacionales."
      },
      {
        "nombre": "Giancarlo Centi",
        "periodo": "1978-1990",
        "pos": "Defensor",
        "desc": "El escudo y estandarte eterno lariense que protegió los prados locales con destreza inalcanzable acumulando los envidiables registros estadísticos principales."
      },
      {
        "nombre": "Gianfranco Matteoli",
        "periodo": "1984-1986",
        "pos": "Mediocampista",
        "desc": "Cerebro creativo innegable que manejó los hilos temporales en las canchas ribereñas con toque exquisito y visión enciclopédica previo a sus grandes saltos en Milán."
      },
      {
        "nombre": "Dan Corneliusson",
        "periodo": "1984-1989",
        "pos": "Delantero",
        "desc": "El tanque sueco corpulento y batallador. Referente total y baluarte en los forcejeos de la dura Serie A atemorizando zagueros rivales."
      },
      {
        "nombre": "Pietro Vierchowod",
        "periodo": "1976-1981",
        "pos": "Defensor",
        "desc": "El futuro Zar imperial del fútbol italiano formó y cinceló su ferocidad áspera y marca mortífera impasable sobre las costas húmedas de Lombardía."
      }
    ]
  },
  'cremonese.json': {
    "goleadores_historicos": [
      { "nombre": "Emiliano Mondonico", "goles": 88, "periodo": "1966-1979", "partidos": 224 },
      { "nombre": "Gustavo Dezotti", "goles": 51, "periodo": "1989-1994", "partidos": 154 },
      { "nombre": "Alviero Chiorri", "goles": 45, "periodo": "1984-1992", "partidos": 210 },
      { "nombre": "Mariano Bresolin", "goles": 40, "periodo": "1960-1965", "partidos": 140 },
      { "nombre": "Gianluca Vialli", "goles": 25, "periodo": "1980-1984", "partidos": 113 }
    ],
    "presencias_historicas": [
      { "nombre": "Luciano Cesini", "partidos": 436, "periodo": "1966-1979", "goles": 1 },
      { "nombre": "Mario Montorfano", "partidos": 399, "periodo": "1978-1992", "goles": 6 },
      { "nombre": "Luigi Gualco", "partidos": 365, "periodo": "1985-1996", "goles": 31 },
      { "nombre": "Felice Garzilli", "partidos": 344, "periodo": "1980-1992", "goles": 0 },
      { "nombre": "Corrado Verdelli", "partidos": 304, "periodo": "1989-1997", "goles": 4 }
    ],
    "idolos": [
      {
        "nombre": "Gianluca Vialli",
        "periodo": "1980-1984",
        "pos": "Delantero",
        "desc": "Surgido radiante desde las raíces de la campiña. Exhibió su naciente e irrefrenable potencia explosiva en los prados del equipo lanzando su mito hacia el asalto continental posterior."
      },
      {
        "nombre": "Alviero Chiorri",
        "periodo": "1984-1992",
        "pos": "Mediocampista",
        "desc": "Temperamental pero deslumbrante jugador orquestal dotado de regates punzantes; el eterno talentoso que regalaba sonrisas en tardes lluviosas emilianas."
      },
      {
        "nombre": "Gustavo Dezotti",
        "periodo": "1989-1994",
        "pos": "Delantero",
        "desc": "Letal artillero apodado 'El Galgo'. De zancada profunda y eficacia probada, atestó el libro de registros siendo el gran goleador clásico sudamericano de la casa."
      },
      {
        "nombre": "Emiliano Mondonico",
        "periodo": "1966-1979",
        "pos": "Delantero",
        "desc": "Icono ofensivo implacable y figura totémica en estatus de mito local, posteriormente erigido como cerebro y líder pensador desde la banda técnica."
      },
      {
        "nombre": "Luigi Gualco",
        "periodo": "1985-1996",
        "pos": "Defensor",
        "desc": "Un fortín humano resguardando la defensa. La gran barrera infranqueable consolidada que garantizó durísimas permanencias heroicas en competiciones supremas Serie A."
      }
    ]
  }
};

Object.keys(dataMap).forEach(filename => {
  const filepath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia/' + filename;
  const contentJSON = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  
  contentJSON.goleadores_historicos = dataMap[filename].goleadores_historicos;
  contentJSON.presencias_historicas = dataMap[filename].presencias_historicas;
  contentJSON.idolos = dataMap[filename].idolos;
  
  fs.writeFileSync(filepath, JSON.stringify(contentJSON, null, 2), 'utf8');
  console.log(`Leyendas procesadas para ${filename}`);
});
