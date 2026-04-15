const fs = require('fs');

const dataMap = {
  'fiorentina.json': {
    "goleadores_historicos": [
      { "nombre": "Kurt Hamrin", "goles": 208, "periodo": "1958-1967", "partidos": 362 },
      { "nombre": "Gabriel Batistuta", "goles": 207, "periodo": "1991-2000", "partidos": 332 },
      { "nombre": "Miguel Montuori", "goles": 84, "periodo": "1955-1961", "partidos": 162 },
      { "nombre": "Giancarlo Antognoni", "goles": 72, "periodo": "1972-1987", "partidos": 429 },
      { "nombre": "Luca Toni", "goles": 57, "periodo": "2005-2007", "partidos": 71 }
    ],
    "presencias_historicas": [
      { "nombre": "Giancarlo Antognoni", "partidos": 429, "periodo": "1972-1987", "goles": 72 },
      { "nombre": "Kurt Hamrin", "partidos": 362, "periodo": "1958-1967", "goles": 208 },
      { "nombre": "Giuseppe Chiappella", "partidos": 357, "periodo": "1939-1949", "goles": 5 },
      { "nombre": "Manuel Pasqual", "partidos": 356, "periodo": "2005-2016", "goles": 10 },
      { "nombre": "Sergio Cervato", "partidos": 340, "periodo": "1948-1959", "goles": 31 }
    ],
    "idolos": [
      {
        "nombre": "Gabriel Batistuta",
        "periodo": "1991-2000",
        "pos": "Delantero",
        "desc": "El inigualable Batigol. Fiel e inamovible incluso bajando y purgando el infierno del descenso, su espectacular disparo mortífero lo erigió en el dios moderno absolutista del Franchi."
      },
      {
        "nombre": "Giancarlo Antognoni",
        "periodo": "1972-1987",
        "pos": "Mediocampista",
        "desc": "El chico hermoso que jugaba mirando al cielo de Florencia. Un diez puro, poético, que dictaba el fútbol en la Toscana como comandante maestro intocable."
      },
      {
        "nombre": "Rui Costa",
        "periodo": "1994-2001",
        "pos": "Mediocampista",
        "desc": "El maestro de la seda lusa, la principal escopeta creadora de los años dorados; abasteció goles inmortales acariciando balones en el balcón del área grande."
      },
      {
        "nombre": "Roberto Baggio",
        "periodo": "1985-1990",
        "pos": "Delantero",
        "desc": "Magia juvenil irreverente destrozando líneas y corazones. Su forzada venta desató estruendosos e incontrolables disturbios sociales urbanos que paralizaron la urbe local."
      },
      {
        "nombre": "Kurt Hamrin",
        "periodo": "1958-1967",
        "pos": "Delantero",
        "desc": "El pajarito veloz escandinavo volador. Artífice letal incontenible en las bandas de ataque del temible y demoledor escuadrón glorioso de la posguerra fiorentina."
      }
    ]
  },
  'genoa.json': {
    "goleadores_historicos": [
      { "nombre": "Edoardo Cavasin", "goles": 97, "periodo": "1920-1925", "partidos": 210 },
      { "nombre": "Virgilio Levratto", "goles": 84, "periodo": "1925-1932", "partidos": 188 },
      { "nombre": "Tomas Skuhravy", "goles": 59, "periodo": "1990-1995", "partidos": 164 },
      { "nombre": "Diego Milito", "goles": 59, "periodo": "2004-2009", "partidos": 94 },
      { "nombre": "Roberto Pruzzo", "goles": 57, "periodo": "1973-1978", "partidos": 143 }
    ],
    "presencias_historicas": [
      { "nombre": "Gennaro Ruotolo", "partidos": 444, "periodo": "1988-2002", "goles": 35 },
      { "nombre": "Fosco Becattini", "partidos": 425, "periodo": "1945-1961", "goles": 0 },
      { "nombre": "Vincenzo Torrente", "partidos": 412, "periodo": "1985-2000", "goles": 5 },
      { "nombre": "Marco Rossi", "partidos": 298, "periodo": "2003-2013", "goles": 24 },
      { "nombre": "Gianluca Signorini", "partidos": 234, "periodo": "1988-1995", "goles": 5 }
    ],
    "idolos": [
      {
        "nombre": "Diego Milito",
        "periodo": "2004-2009",
        "pos": "Delantero",
        "desc": "El majestuoso Príncipe retornó del inframundo forjando la resurrección histórica en el derbi liguero marcando goles de altísima factura artística y técnica."
      },
      {
        "nombre": "Gianluca Signorini",
        "periodo": "1988-1995",
        "pos": "Defensor",
        "desc": "Un gladiador y comandante libre total de defensas fuertes; el gran capitán histórico venerado como tótem perenne amado de la grada férrea norteña rossoblù."
      },
      {
        "nombre": "Tomas Skuhravy",
        "periodo": "1990-1995",
        "pos": "Delantero",
        "desc": "Un imponente saltador goleador tanque corpulento del bloque oriental. Su icónico festejo mortífero asolaba marcadores y enloquecía los estamentos cívicos genoveses."
      },
      {
        "nombre": "Gennaro Ruotolo",
        "periodo": "1988-2002",
        "pos": "Mediocampista",
        "desc": "El pulmón interminable maratoniano de los registros supremos; se entregó exhaustivamente sosteniendo el equilibrio logístico en las peores y mejores tardes locales."
      },
      {
        "nombre": "James Richardson Spensley",
        "periodo": "1897-1906",
        "pos": "Defensor",
        "desc": "El médico fundador inglés y padre ineludible del fútbol metropolitano; su apertura a los ciudadanos locales permitió forjar y estructurar operativamente el club inmortal."
      }
    ]
  },
  'hellas-verona.json': {
    "goleadores_historicos": [
      { "nombre": "Adaílton", "goles": 52, "periodo": "1999-2006", "partidos": 175 },
      { "nombre": "Luca Toni", "goles": 51, "periodo": "2013-2016", "partidos": 100 },
      { "nombre": "Giampaolo Pazzini", "goles": 50, "periodo": "2015-2020", "partidos": 135 },
      { "nombre": "Preben Elkjær Larsen", "goles": 48, "periodo": "1984-1988", "partidos": 130 },
      { "nombre": "Emiliano Mascetti", "goles": 46, "periodo": "1967-1979", "partidos": 330 }
    ],
    "presencias_historicas": [
      { "nombre": "Luigi Bernardi", "partidos": 337, "periodo": "1927-1939", "goles": 0 },
      { "nombre": "Emiliano Mascetti", "partidos": 330, "periodo": "1967-1979", "goles": 46 },
      { "nombre": "Rafael", "partidos": 314, "periodo": "2007-2016", "goles": 0 },
      { "nombre": "Domenico Volpati", "partidos": 258, "periodo": "1982-1989", "goles": 8 },
      { "nombre": "Roberto Tricella", "partidos": 255, "periodo": "1979-1987", "goles": 3 }
    ],
    "idolos": [
      {
        "nombre": "Preben Elkjær Larsen",
        "periodo": "1984-1988",
        "pos": "Delantero",
        "desc": "Rebelde salvaje y bestial artífice de goles históricos y caóticos descalzo; su potencia demencial desató un asombroso campeonato increíble liguero jamás narrado."
      },
      {
        "nombre": "Luca Toni",
        "periodo": "2013-2016",
        "pos": "Delantero",
        "desc": "El gigante viejo ariete letal indudable; desembarcó veterano marcando goles demoledores resucitadores que levantaron de bases amargas agónicas las gradas del véneto."
      },
      {
        "nombre": "Roberto Tricella",
        "periodo": "1979-1987",
        "pos": "Defensor",
        "desc": "Cerebral inmaculado y muralla elegante limpia. Fue el inconfundible y mítico comandante defensivo mariscal del milagroso y sublime y único sorpresivo título nacional."
      },
      {
        "nombre": "Hans-Peter Briegel",
        "periodo": "1984-1986",
        "pos": "Defensor",
        "desc": "La poderosa y temible locomotora blindada germana; su potencia muscular trituradora empujaba los flancos abriendo y machacando rivales atónitos ante él impávidos."
      },
      {
        "nombre": "Emiliano Mascetti",
        "periodo": "1967-1979",
        "pos": "Mediocampista",
        "desc": "Volante llegador elegante organizador total asolando artilleramente arcos contrarios en durísimas batallas ligueras marcando bases récords imbatibles referenciales históricos locales."
      }
    ]
  },
  'inter.json': {
    "goleadores_historicos": [
      { "nombre": "Giuseppe Meazza", "goles": 284, "periodo": "1927-1940", "partidos": 408 },
      { "nombre": "Alessandro Altobelli", "goles": 209, "periodo": "1977-1988", "partidos": 466 },
      { "nombre": "Roberto Boninsegna", "goles": 171, "periodo": "1969-1976", "partidos": 281 },
      { "nombre": "Sandro Mazzola", "goles": 160, "periodo": "1960-1977", "partidos": 565 },
      { "nombre": "Lautaro Martínez", "goles": 129, "periodo": "2018-presente", "partidos": 280 }
    ],
    "presencias_historicas": [
      { "nombre": "Javier Zanetti", "partidos": 858, "periodo": "1995-2014", "goles": 21 },
      { "nombre": "Giuseppe Bergomi", "partidos": 756, "periodo": "1979-1999", "goles": 28 },
      { "nombre": "Giacinto Facchetti", "partidos": 634, "periodo": "1960-1978", "goles": 75 },
      { "nombre": "Sandro Mazzola", "partidos": 565, "periodo": "1960-1977", "goles": 160 },
      { "nombre": "Giuseppe Baresi", "partidos": 559, "periodo": "1976-1992", "goles": 13 }
    ],
    "idolos": [
      {
        "nombre": "Javier Zanetti",
        "periodo": "1995-2014",
        "pos": "Defensor",
        "desc": "El incombustible, implacable eterno tractor humano rioplatense. Su estandarte e irremplazable capitanía forjó dinastías enteras sin descansar un mismísimo día laborable oficial."
      },
      {
        "nombre": "Giuseppe Meazza",
        "periodo": "1927-1940",
        "pos": "Delantero",
        "desc": "El mito de la cuna indiscutible. Definidor artístico galante letal arrollador, a quien las calles veneraron prestando por innegable mérito glorificado el nombre al estadio mismo grande."
      },
      {
        "nombre": "Ronaldo Nazário",
        "periodo": "1997-2002",
        "pos": "Delantero",
        "desc": "El asombroso Fenómeno sobrenatural global inmensurable. Velocidad marciana y rodillas quebradas sacrificadas que deslumbraron por destellos mágicos fulminantes imborrables paralizantes inolvidables mundiales."
      },
      {
        "nombre": "Giacinto Facchetti",
        "periodo": "1960-1978",
        "pos": "Defensor",
        "desc": "El pionero inalcanzable revolucionador lateral ofensivo portentoso majestuoso altivo. El elegante y perfecto e intachable señor absoluto moral estandarte de la mítica dorada era."
      },
      {
        "nombre": "Diego Milito",
        "periodo": "2009-2014",
        "pos": "Delantero",
        "desc": "El helado asesino sigiloso majestuoso artillero magistral letal decisivo finalizador. Dos estocadas finísimas memorables madrileñas coronaron asombrosamente la mítica tripleta gigante eterna inigualada europea."
      }
    ]
  },
  'juventus.json': {
    "goleadores_historicos": [
      { "nombre": "Alessandro Del Piero", "goles": 290, "periodo": "1993-2012", "partidos": 705 },
      { "nombre": "Giampiero Boniperti", "goles": 179, "periodo": "1946-1961", "partidos": 459 },
      { "nombre": "Roberto Bettega", "goles": 178, "periodo": "1970-1983", "partidos": 482 },
      { "nombre": "David Trezeguet", "goles": 171, "periodo": "2000-2010", "partidos": 320 },
      { "nombre": "Omar Sívori", "goles": 167, "periodo": "1957-1965", "partidos": 253 }
    ],
    "presencias_historicas": [
      { "nombre": "Alessandro Del Piero", "partidos": 705, "periodo": "1993-2012", "goles": 290 },
      { "nombre": "Gianluigi Buffon", "partidos": 685, "periodo": "2001-2021", "goles": 0 },
      { "nombre": "Giorgio Chiellini", "partidos": 561, "periodo": "2005-2022", "goles": 36 },
      { "nombre": "Gaetano Scirea", "partidos": 552, "periodo": "1974-1988", "goles": 32 },
      { "nombre": "Giuseppe Furino", "partidos": 528, "periodo": "1969-1984", "goles": 8 }
    ],
    "idolos": [
      {
        "nombre": "Alessandro Del Piero",
        "periodo": "1993-2012",
        "pos": "Delantero",
        "desc": "Pinturicchio inalcanzable eterno genial mágico leal glorioso. Su intachable lealtad extrema blindada en etapas turbias infernales selló amores absolutos marcando destellos irrepetibles inalcanzables imborrables."
      },
      {
        "nombre": "Michel Platini",
        "periodo": "1982-1987",
        "pos": "Mediocampista",
        "desc": "El asombroso monarca galo cerebro sublime dictador visual absoluto pensante. Su precisión asombrosa mortífera orquestó ballets invencibles europeos apabullando defensas aguerridas rígidas asombradas."
      },
      {
        "nombre": "Gianluigi Buffon",
        "periodo": "2001-2021",
        "pos": "Arquero",
        "desc": "Gigi supremo insuperable muralla voladora guardián atajador. El líder vocal motivacional inquebrantable absoluto sostén perenne incombustible en las durísimas y triunfales noches turinesas."
      },
      {
        "nombre": "Gaetano Scirea",
        "periodo": "1974-1988",
        "pos": "Defensor",
        "desc": "La impoluta muralla inteligente asombrosa clase magistral limpia. El líbero exquisito excepcional elegante caballero heroico amado inmortalizado trágicamente eternizado absoluto intachable piamontés."
      },
      {
        "nombre": "Zinedine Zidane",
        "periodo": "1996-2001",
        "pos": "Mediocampista",
        "desc": "El bailarín majestuoso malabarista orquestal mago inmensurable elegante cerebral. Zizou levitó prados rígidos ejecutando controles y ruletas espectaculares hipnotizando masas mundiales expectantes pasmadas."
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
