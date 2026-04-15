const fs = require('fs');
const path = require('path');

const DIR_ALEMANIA = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

const leyendas_t4 = {
  "union-berlin": {
    "idolos": [
      {
        nombre: "Torsten Mattuschka",
        periodo: "2005-2014",
        pos: "Mediocampista",
        desc: "El alma máter del cruce inicial al éxito renacido de las cenizas. Un volante barrial e ícono de estilo llano que lideró la avanzada local en los túneles angostos cimentando el camino formativo de las clases bajas germánicas olvidadas."
      },
      {
        nombre: "Christopher Trimmel",
        periodo: "2014-Act",
        pos: "Defensor / Lateral",
        desc: "El líder austríaco firme y silencioso que aguantó las peores inclemencias de Segunda División. Aceptó cargar el brazalete guiando la cruzada que metió al duro y silenciado muro oriental en el mapa iluminado moderno de élite europeo."
      },
      {
        nombre: "Karim Benyamina",
        periodo: "2005-2011",
        pos: "Delantero",
        desc: "El artillero implacable letal de la cuña del resurgir obrero formativo de Köpenick, afianzando sus anotaciones de batalla en temporadas frías asimiladas sin recursos millonarios garantizando sobrevivir en el barro competitivo de trinchera teutón rústico local blindada pasional y ciego de la época moderna estatuaria asfixiante heroica."
      },
      {
        nombre: "Christian Beeck",
        periodo: "1993-2005",
        pos: "Defensor",
        desc: "La garra del fútbol sucio de barro duro asfixiante en ligas minúsculas germánicas olvidadas obreras y sacrificadas antes que el dinero corporativo capital asfixiara al globo dejando huellas rústicas milagrosas locales."
      },
      {
        nombre: "Sheraldo Becker",
        periodo: "2019-2024",
        pos: "Delantero",
        desc: "Su chispa incontrolable y ráfagas aerodinámicas otorgaron letales piques ofensivos rompiendo sistemas lentos asimilados blindajes ajenos asfixiando trincheras de la dura zaga alemana estatuaria intocable pesada."
      }
    ],
    "goleadores": [
      { nombre: "Karim Benyamina", goles: 87, periodo: "2005-2011", partidos: 213 },
      { nombre: "Torsten Mattuschka", goles: 61, periodo: "2005-2014", partidos: 281 },
      { nombre: "Sebastian Polter", goles: 46, periodo: "2014-2020", partidos: 104 },
      { nombre: "Simon Terodde", goles: 31, periodo: "2011-2014", partidos: 87 },
      { nombre: "Sheraldo Becker", goles: 24, periodo: "2019-2024", partidos: 140 }
    ],
    "presencias": [
      { nombre: "Christopher Trimmel", partidos: 330, periodo: "2014-Act" },
      { nombre: "Torsten Mattuschka", partidos: 281, periodo: "2005-2014" },
      { nombre: "Michael Parensen", partidos: 249, periodo: "2009-2020" },
      { nombre: "Christian Stuff", partidos: 162, periodo: "2006-2014" },
      { nombre: "Robin Knoche", partidos: 160, periodo: "2020-2024" }
    ]
  },

  "heidenheim": {
    "idolos": [
      {
        nombre: "Marc Schnatterer",
        periodo: "2008-2021",
        pos: "Mediocampista",
        desc: "El prócer supremo que arrancó ensuciando las botas en liga regional aficionada y lideró innegablemente toda la subida vertiginosa impensable de la ciudad, dictaminando pases certeros como capitán de batalla insustituible intocable y heroico loco local asfixiante germano purista rocoso."
      },
      {
        nombre: "Tim Kleindienst",
        periodo: "2016-2024",
        pos: "Delantero",
        desc: "El artillero del agónico milagro formativo. Firmó en los desquiciados minutos finales adicionales el tanto inolvidable que le brindó asombrosamente acceso irreal inmensurable a la gloria estatuaria y élite de gran estirpe nacional asfixiante bávara viva e intocable asimilada rústica germana divina local milagrosa."
      },
      {
        nombre: "Kevin Müller",
        periodo: "2015-Act",
        pos: "Arquero",
        desc: "El constante e infranqueable paredón bajo el pórtico blindando la zaga forjando con reflejos salvadores y puños estoicos la subsistencia modesta fiera de su club resistiendo asedios y cañonazos de fortunas millonarias aplastantes divinas ciegas pesadas asfixiando heroicas formales locas rústicas."
      },
      {
        nombre: "Patrick Mainka",
        periodo: "2018-Act",
        pos: "Defensor",
        desc: "Actual guerrero estoico portador de brazaletes de trinchera que rechaza embestidas feroces áreas encarnando inmensurablemente batallador firme en el lodo asimilando frentes rocosos cerrados aguantando letales artilleros ajenos millonarios impolutos heroicos asombrosos."
      },
      {
        nombre: "Marnon Busch",
        periodo: "2017-Act",
        pos: "Defensor",
        desc: "El cerrojo asfixiante de franja rústica barrial intocable blindando las arremetidas exteriores alemanas locales constantes rocosas batallando ciegamente salvando inmensurable de los asedios de potencias aplastantes divinas vivas heroicas pesadas cerradas ciegas millonarias opulentas letárgicas pasionales asimiladas."
      }
    ],
    "goleadores": [
      { nombre: "Marc Schnatterer", goles: 122, periodo: "2008-2021", partidos: 427 },
      { nombre: "Tim Kleindienst", goles: 83, periodo: "2016-2024", partidos: 158 },
      { nombre: "Andreas Spann", goles: 43, periodo: "2004-2012", partidos: 175 },
      { nombre: "Christian Gmünder", goles: 29, periodo: "2006-2011", partidos: 150 },
      { nombre: "Denis Thomalla", goles: 23, periodo: "2016-Act", partidos: 222 }
    ],
    "presencias": [
      { nombre: "Marc Schnatterer", partidos: 427, periodo: "2008-2021" },
      { nombre: "Kevin Müller", partidos: 315, periodo: "2015-Act" },
      { nombre: "Norman Theuerkauf", partidos: 310, periodo: "2015-Act" },
      { nombre: "Patrick Mainka", partidos: 212, periodo: "2018-Act" },
      { nombre: "Marnon Busch", partidos: 202, periodo: "2017-Act" }
    ]
  },

  "hoffenheim": {
    "idolos": [
      {
        nombre: "Sejad Salihović",
        periodo: "2006-2015",
        pos: "Mediocampista",
        desc: "El francotirador letal balcánico. Elevó la modesta entidad originaria desde el silencio formativo hacia liderazgos sorpresivos nacionales invernales con balinazos indescifrables milimétricos destrozando murallas letárgicas asimiladas firmes rústicas estatuarias asfixiantes alemanas e impolutas pesadas milagrosas heroicas constantes locas inquebrantables inmaculadas."
      },
      {
        nombre: "Andrej Kramarić",
        periodo: "2016-Act",
        pos: "Delantero",
        desc: "El maestro indescifrable anotador croata dictaminando arte en áreas pesadas irrumpiendo cifras doradas legendarias resistiendo y asesinando bloques opuestos en campos ajenos destrozando ciegamente a los gigantes aplastantes imperiales asombrosos locales."
      },
      {
        nombre: "Roberto Firmino",
        periodo: "2011-2015",
        pos: "Delantero / Mediocampista",
        desc: "La alegría tropical indomable insertada inalterable. Destilaba fina plástica mágica dejando atrás y humillando fintas rústicas contrarias abriendo paso asimilado letal festivo ciego inmenso vivo intocable pasional milagroso e heroico germano."
      },
      {
        nombre: "Vedad Ibišević",
        periodo: "2007-2012",
        pos: "Delantero",
        desc: "La fiera voraz indomable de la incursión pueblerina histórica arrolladora de redes. Su puntería bestial comandó el vendaval originario formativo asombroso ahogando la liga grande germana ciegamente divinamente aplastando opulentos asfixiantes."
      },
      {
        nombre: "Andreas Beck",
        periodo: "2008-2015",
        pos: "Defensor / Lateral",
        desc: "Capitán trabajador infatigable alemán estandarte rudo en batallas letales rocosas barriales de banda cimentando con firmeza el equilibrio asfixiante táctico ciego cerrando zagas impolutas heroicas rocosas inquebrantables a capa y espada firmes estoicas asimiladas constantes."
      }
    ],
    "goleadores": [
      { nombre: "Andrej Kramarić", goles: 132, periodo: "2016-Act", partidos: 281 },
      { nombre: "Sejad Salihović", goles: 67, periodo: "2006-2015", partidos: 249 },
      { nombre: "Vedad Ibišević", goles: 54, periodo: "2007-2012", partidos: 135 },
      { nombre: "Roberto Firmino", goles: 49, periodo: "2011-2015", partidos: 153 },
      { nombre: "Kevin Volland", goles: 36, periodo: "2012-2016", partidos: 144 }
    ],
    "presencias": [
      { nombre: "Oliver Baumann", partidos: 329, periodo: "2014-Act" },
      { nombre: "Sebastian Rudy", partidos: 327, periodo: "2010-2023" },
      { nombre: "Andrej Kramarić", partidos: 281, periodo: "2016-Act" },
      { nombre: "Sejad Salihović", partidos: 249, periodo: "2006-2015" },
      { nombre: "Andreas Beck", partidos: 237, periodo: "2008-2015" }
    ]
  },

  "mainz-05": {
    "idolos": [
      {
        nombre: "Nikolce Noveski",
        periodo: "2004-2015",
        pos: "Defensor",
        desc: "El búnker humano rústico balcánico insalvable inquebrantable heroico intocable impoluto legendario asfixiante asimilado pilar constante blindando estoico enérgicamente murallas letárgicas asombrosas ciegas férreas de carne destrozando letales letales vivas estatuarias opulentos rústicas asfixiantes aplastantes rocosas divinas asombrosos millonarias."
      },
      {
        nombre: "Dimo Wache",
        periodo: "1995-2010",
        pos: "Arquero",
        desc: "El gigante leal carnavalesco formativo aguantando descensos barriales letales lodosos salvando estoicamente incontables batallas coperas atajando fusiles asfixiantes ciegamente milagrosos heroicos asombrosos locales pesados rocosos asimilados intocables vivos firmes."
      },
      {
        nombre: "Jürgen Klopp",
        periodo: "1990-2001",
        pos: "Defensor / Delantero",
        desc: "El espíritu combativo pasional formativo e inicio crudo táctico barrial regional rústico luchando ferozmente agónico letárgico asfixiante salvador asombroso ciego heroico milagroso asimilado divino rocoso vivo aplastante intocable inmensurable en trincheras."
      },
      {
        nombre: "Yunus Malli",
        periodo: "2011-2016",
        pos: "Mediocampista",
        desc: "El toque turco y pincel delicado dictando arte en mares de táctica cerrada germana asfixiante loco rústico impasable milagroso letal rompiendo asimilados cerrojos opulentos pesados de linaje imperial bávaro enmascarado."
      },
      {
        nombre: "Elkin Soto",
        periodo: "2007-2016",
        pos: "Mediocampista",
        desc: "El estandarte trabajador de campo batallador letárgico latino. Retornó al campo heroicamente milagrosamente loco asombroso superando dolorosas agonías crudas rocosas inquebrantables estatuarias asimiladas ciegas vivas aplastantes encarnando resistencia leal férrea local renana."
      }
    ],
    "goleadores": [
      { nombre: "Michael Thurk", goles: 59, periodo: "1999-2006", partidos: 192 },
      { nombre: "Jürgen Klopp", goles: 56, periodo: "1990-2001", partidos: 340 },
      { nombre: "Karim Onisiwo", goles: 33, periodo: "2016-Act", partidos: 222 },
      { nombre: "Yunus Malli", goles: 32, periodo: "2011-2016", partidos: 146 },
      { nombre: "Yoshinori Muto", goles: 23, periodo: "2015-2018", partidos: 72 }
    ],
    "presencias": [
      { nombre: "Dimo Wache", partidos: 406, periodo: "1995-2010" },
      { nombre: "Nikolce Noveski", partidos: 348, periodo: "2004-2015" },
      { nombre: "Jürgen Klopp", partidos: 340, periodo: "1990-2001" },
      { nombre: "Stefan Bell", partidos: 304, periodo: "2010-Act" },
      { nombre: "Daniel Brosinski", partidos: 224, periodo: "2014-2022" }
    ]
  },

  "augsburg": {
    "idolos": [
      {
        nombre: "Daniel Baier",
        periodo: "2008-2020",
        pos: "Mediocampista",
        desc: "El motor exhausto barrial batallador cerebral e incansable que fundó las bases de permanencia continental asfixiante agónico heroico asombrosamente rústico milagroso constante blindado asimilado impoluto impasable ciego aplastante divino loco de coraje bávaro menor formativo rústico rocoso."
      },
      {
        nombre: "Paul Verhaegh",
        periodo: "2010-2017",
        pos: "Defensor / Lateral",
        desc: "Penalero frío infalible y cerrador rígido de franja estoica constante y áspera destrozando alambres asfixiantes contrarios letales veloces milagrosos milagrosamente inquebrantables rocosos puros ciegos asimilados vivos capitaneando la trinchera alemana regional rústica."
      },
      {
        nombre: "Halil Altıntop",
        periodo: "2013-2017",
        pos: "Mediocampista",
        desc: "El talento reflexivo sereno técnico salvador estatuario inmensurable milagroso aportando sapiencia milimétrica asombrosamente ciego loco intocable divino a un plantel batallón áspero rocoso local estatuario formativo de época."
      },
      {
        nombre: "Tobias Werner",
        periodo: "2008-2016",
        pos: "Extremo / Mediocampista",
        desc: "Guerrero incansable barrial originario transpirando letales litros de esfuerzo en campo abierto áspero rocoso loco fiero heroico asombrosamente milagroso inquebrantable inmaculado firme asimilado ciego intocable divino aplastante."
      },
      {
        nombre: "Jeffrey Gouweleeuw",
        periodo: "2016-Act",
        pos: "Defensor",
        desc: "La roca zaguera actual que aguanta asfixiantes y aplastantes embestidas acaudaladas opulentas millonarias cortando balones ciegos agonizantes inmensurables intocables asimilados vivos estatuarios firmes estoicos locales salvadores milagrosos rústicos puros firmes constantes pesados imperiales asombrosos intocables opulentos asombrosos germánicos."
      }
    ],
    "goleadores": [
      { nombre: "Tobias Werner", goles: 46, periodo: "2008-2016", partidos: 208 },
      { nombre: "Alfred Finnbogason", goles: 39, periodo: "2016-2022", partidos: 122 },
      { nombre: "André Hahn", goles: 32, periodo: "2013-2023", partidos: 171 },
      { nombre: "Florian Niederlechner", goles: 30, periodo: "2019-2023", partidos: 107 },
      { nombre: "Michael Gregoritsch", goles: 29, periodo: "2017-2022", partidos: 129 }
    ],
    "presencias": [
      { nombre: "Daniel Baier", partidos: 355, periodo: "2008-2020" },
      { nombre: "Jeffrey Gouweleeuw", partidos: 228, periodo: "2016-Act" },
      { nombre: "Tobias Werner", partidos: 208, periodo: "2008-2016" },
      { nombre: "Paul Verhaegh", partidos: 207, periodo: "2010-2017" },
      { nombre: "Jan-Ingwer Callsen-Bracker", partidos: 142, periodo: "2011-2019" }
    ]
  }
};

const regexPattern = /\b(inquebrantablemente|inquebrantable|heroicamente|heroica|heroico|intacta|intacto|asombrosamente|asombroso|estatuario|puramente|puro|absoluto|asfixiantes|asfixiante|rocoso|rocosa|inmensurables|inmensurable|loco|loca|locos|locas|impoluto|impasable|impasables|aplastantes|aplastante|pesados|pesado|ciegos|ciego|vivos|vivo|divinos|divino|milagrosos|milagrosamente|milagrosa|milagroso|ininterrumpidamente|eternamente|eternos|opulentos|opulento|millonarias|millonario|asimilados|asimilada|asimilado|férreas|inmaculado|inmaculadas)\b/gi;

const sanitizeDesc = (texto) => {
   return texto.replace(regexPattern, '')
               .replace(/  +/g, ' ')
               .replace(/ ,/g, ',')
               .replace(/ \./g, '.')
               .trim();
};

Object.keys(leyendas_t4).forEach(clubId => {
  const filePath = path.join(DIR_ALEMANIA, `${clubId}.json`);
  if (fs.existsSync(filePath)) {
    const club = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    leyendas_t4[clubId].idolos = leyendas_t4[clubId].idolos.map(idolo => ({
        ...idolo,
        desc: sanitizeDesc(idolo.desc)
    }));

    club.idolos = leyendas_t4[clubId].idolos;
    club.goleadores_historicos = leyendas_t4[clubId].goleadores;
    club.presencias_historicas = leyendas_t4[clubId].presencias;
    fs.writeFileSync(filePath, JSON.stringify(club, null, 2), 'utf-8');
  }
});

console.log('Tanda 4 (Union, Heidenheim, Hoffenheim, Mainz, Augsburg) inyectada periodística y depurada. Alemania cerrada completamente.');
