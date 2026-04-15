const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');

function makeG(nombre, goles, periodo, partidos) {
  return {
    nombre, goles, periodo, partidos,
    desc: `Atacante destacado en los registros del club. Convirtió un total de ${goles} goles en competiciones oficiales durante su trayectoria en el equipo entre ${periodo}.`
  };
}

function makeP(nombre, partidos, periodo) {
  return {
    nombre, partidos, periodo,
    desc: `Jugador con alta regularidad en la historia de la entidad. Registró un total de ${partidos} partidos disputados, manteniendo presencia oficial ininterrumpida entre ${periodo}.`
  };
}

const dataMap = {
  "angers": {
    "g": [
      makeG("Jean Deloffre", 53, "1959-1965", 152),
      makeG("Stéphane Bahoken", 28, "2018-2022", 135),
      makeG("Pierrick Capelle", 22, "2015-Act", 330),
      makeG("Karl Toko Ekambi", 17, "2016-2018", 72),
      makeG("Famara Diédhiou", 8, "2016-2017", 31)
    ],
    "p": [
      makeP("Pierre Bourdel", 471, "1963-1975"),
      makeP("Vincent Manceau", 389, "2008-2022"),
      makeP("Pierrick Capelle", 330, "2015-Act"),
      makeP("Romain Thomas", 327, "2013-2022"),
      makeP("Ismaël Traoré", 228, "2015-2022")
    ]
  },
  "auxerre": {
    "g": [
      makeG("Andrzej Szarmach", 100, "1980-1985", 148),
      makeG("Djibril Cissé", 90, "1998-2004", 169),
      makeG("Patrice Garande", 59, "1981-1986", 170),
      makeG("Ireneusz Jeleń", 48, "2006-2011", 164),
      makeG("Eric Cantona", 25, "1983-1988", 82)
    ],
    "p": [
      makeP("Fabien Cool", 467, "1994-2007"),
      makeP("Bruno Martini", 322, "1981-1995"),
      makeP("Stéphane Grichting", 253, "2002-2012"),
      makeP("Jean-Marc Ferreri", 193, "1976-1986"),
      makeP("Philippe Mexès", 167, "1999-2004")
    ]
  },
  "brest": {
    "g": [
      makeG("Gaëtan Charbonnier", 51, "2018-2021", 133),
      makeG("Drago Vabec", 46, "1979-1983", 112),
      makeG("Bruno Grougi", 35, "2009-2018", 288),
      makeG("Nolan Roux", 29, "2009-2012", 84),
      makeG("Roberto Cabañas", 27, "1985-1987", 60)
    ],
    "p": [
      makeP("Bruno Grougi", 288, "2009-2018"),
      makeP("Brendan Chardonnet", 272, "2013-Act"),
      makeP("Maurice Boutet", 210, "1975-1980"),
      makeP("Steeve Elana", 119, "2005-2012"),
      makeP("Hugo Magnetti", 114, "2018-Act")
    ]
  },
  "le-havre": {
    "g": [
      makeG("Jean-Michel Lesage", 73, "1998-2009", 230),
      makeG("Kandia Traoré", 30, "2005-2007", 78),
      makeG("Guillaume Hoarau", 28, "2004-2008", 83),
      makeG("Walid Mesloub", 23, "2010-2014", 125),
      makeG("Tino Kadewere", 20, "2018-2020", 43)
    ],
    "p": [
      makeP("Alexandre Bonnet", 321, "2009-2022"),
      makeP("Victor Lekhal", 231, "2014-2023"),
      makeP("Jean-Michel Lesage", 230, "1998-2009"),
      makeP("Christophe Revault", 187, "2007-2010"),
      makeP("Arouna Sangante", 80, "2021-2024")
    ]
  },
  "lens": {
    "g": [
      makeG("Ahmed Oudjani", 118, "1958-1965", 175),
      makeG("Maryan Wisnieski", 105, "1953-1963", 277),
      makeG("Georges Lech", 78, "1962-1968", 214),
      makeG("Anton Drobnjak", 48, "1997-1998", 68),
      makeG("Tony Vairelles", 44, "1995-1999", 143)
    ],
    "p": [
      makeP("Éric Sikora", 590, "1985-2004"),
      makeP("Guillaume Warmuz", 427, "1992-2002"),
      makeP("Jean-Guy Wallemme", 420, "1986-1998"),
      makeP("Hervé Arsène", 360, "1989-1998"),
      makeP("Walid Mesloub", 165, "2014-2019")
    ]
  },
  "lille": {
    "g": [
      makeG("Jean Baratte", 218, "1944-1953", 268),
      makeG("André Strappe", 112, "1948-1958", 275),
      makeG("Gérard Bourbotte", 92, "1952-1957", 145),
      makeG("Jonathan David", 71, "2020-2024", 145),
      makeG("Eden Hazard", 50, "2007-2012", 194)
    ],
    "p": [
      makeP("Marceau Somerlinck", 433, "1945-1957"),
      makeP("Rio Mavuba", 370, "2008-2017"),
      makeP("Florent Balmont", 323, "2008-2016"),
      makeP("Franck Beria", 317, "2007-2017"),
      makeP("Mathieu Debuchy", 301, "2003-2013")
    ]
  },
  "lorient": {
    "g": [
      makeG("Kévin Gameiro", 56, "2008-2011", 120),
      makeG("Terem Moffi", 35, "2020-2023", 90),
      makeG("Jérémie Aliadière", 26, "2011-2014", 84),
      makeG("Benjamin Moukandjo", 26, "2015-2017", 56),
      makeG("Vincent Aboubakar", 16, "2013-2014", 36)
    ],
    "p": [
      makeP("Fabien Audard", 352, "2003-2014"),
      makeP("Vincent Le Goff", 316, "2014-Act"),
      makeP("Jérémy Morel", 227, "2002-2011"),
      makeP("Sylvain Ripoll", 219, "1995-2003"),
      makeP("Laurent Abergel", 170, "2019-Act")
    ]
  },
  "lyon": {
    "g": [
      makeG("Fleury Di Nallo", 222, "1960-1974", 489),
      makeG("Alexandre Lacazette", 169, "2010-Act", 330),
      makeG("Bernard Lacombe", 149, "1969-1978", 230),
      makeG("Serge Chiesa", 134, "1969-1983", 541),
      makeG("Bafétimbi Gomis", 91, "2009-2014", 244)
    ],
    "p": [
      makeP("Serge Chiesa", 541, "1969-1983"),
      makeP("Grégory Coupet", 518, "1997-2008"),
      makeP("Fleury Di Nallo", 489, "1960-1974"),
      makeP("Anthony Lopes", 477, "2012-Act"),
      makeP("Juninho", 344, "2001-2009")
    ]
  },
  "marseille": {
    "g": [
      makeG("Gunnar Andersson", 194, "1950-1958", 220),
      makeG("Jean-Pierre Papin", 182, "1986-1992", 274),
      makeG("Josip Skoblar", 176, "1966-1974", 211),
      makeG("Emmanuel Aznar", 149, "1936-1952", 204),
      makeG("Mamadou Niang", 100, "2005-2010", 227)
    ],
    "p": [
      makeP("Steve Mandanda", 610, "2007-2022"),
      makeP("Roger Scotti", 452, "1942-1958"),
      makeP("Jean Bastien", 337, "1935-1950"),
      makeP("François Bracci", 342, "1971-1979"),
      makeP("Mathieu Valbuena", 330, "2006-2014")
    ]
  },
  "metz": {
    "g": [
      makeG("Nico Braun", 96, "1973-1978", 170),
      makeG("Carmelo Micciche", 51, "1980-1989", 195),
      makeG("Habib Diallo", 48, "2015-2020", 115),
      makeG("Diafra Sakho", 44, "2009-2014", 119),
      makeG("Papiss Cissé", 36, "2005-2009", 95)
    ],
    "p": [
      makeP("Sylvain Kastendeuch", 524, "1982-2001"),
      makeP("Albert Cartier", 377, "1980-1989"),
      makeP("Carlo Molinari", 358, "1955-1965"),
      makeP("Michel Ettorre", 302, "1979-1990"),
      makeP("Gregory Proment", 279, "1997-2006")
    ]
  },
  "monaco": {
    "g": [
      makeG("Delio Onnis", 223, "1973-1980", 280),
      makeG("Wissam Ben Yedder", 118, "2019-2024", 201),
      makeG("Lucien Cossou", 115, "1959-1965", 161),
      makeG("Christian Dalger", 89, "1971-1980", 333),
      makeG("Radamel Falcao", 83, "2013-2019", 140)
    ],
    "p": [
      makeP("Jean-Luc Ettori", 755, "1975-1994"),
      makeP("Claude Puel", 601, "1979-1996"),
      makeP("Jean Petit", 428, "1969-1982"),
      makeP("Manuel Amoros", 348, "1980-1989"),
      makeP("Danijel Subašić", 292, "2012-2020")
    ]
  },
  "nantes": {
    "g": [
      makeG("Gilles Rampillon", 116, "1970-1982", 400),
      makeG("Bernard Blanchet", 111, "1962-1974", 412),
      makeG("Vahid Halilhodžić", 111, "1981-1986", 192),
      makeG("Philippe Gondet", 98, "1963-1971", 205),
      makeG("Japhet N'Doram", 91, "1990-1997", 225)
    ],
    "p": [
      makeP("Henri Michel", 662, "1966-1982"),
      makeP("Jean-Paul Bertrand-Demanes", 650, "1969-1987"),
      makeP("Loïc Amisse", 602, "1973-1990"),
      makeP("Maxime Bossis", 502, "1973-1985"),
      makeP("Mickaël Landreau", 425, "1996-2006")
    ]
  },
  "nice": {
    "g": [
      makeG("Joaquín Valle", 99, "1937-1948", 120),
      makeG("Charly Loubet", 93, "1963-1969", 256),
      makeG("Nenad Bjeković", 85, "1976-1980", 143),
      makeG("Just Fontaine", 52, "1953-1956", 83),
      makeG("Alassane Pléa", 44, "2014-2018", 135)
    ],
    "p": [
      makeP("Pancho Gonzales", 296, "1951-1961"),
      makeP("Dominique Baratelli", 284, "1971-1978"),
      makeP("Dante", 270, "2016-2024"),
      makeP("Cedric Varrault", 229, "1999-2007"),
      makeP("Walter Benítez", 188, "2016-2022")
    ]
  },
  "paris-fc": {
    "g": [
      makeG("Jean-François Beltramini", 15, "1973-1975", 80),
      makeG("Khalid Boutaïb", 15, "2021-2023", 50),
      makeG("Louis Floch", 12, "1972-1974", 65),
      makeG("Gaëtan Laura", 11, "2020-2022", 45),
      makeG("Ousmane Kanté", 10, "2018-2023", 142)
    ],
    "p": [
      makeP("Vincent Demarconnay", 371, "2008-2023"),
      makeP("Cyril Mandouki", 183, "2017-Act"),
      makeP("Ousmane Kanté", 142, "2018-2023"),
      makeP("Florent Hanin", 88, "2020-2023"),
      makeP("Loup Diwan Gueho", 45, "2022-2024")
    ]
  },
  "psg": {
    "g": [
      makeG("Kylian Mbappé", 256, "2017-2024", 308),
      makeG("Edinson Cavani", 200, "2013-2020", 301),
      makeG("Zlatan Ibrahimović", 156, "2012-2016", 180),
      makeG("Neymar", 118, "2017-2023", 173),
      makeG("Pauleta", 109, "2003-2008", 211)
    ],
    "p": [
      makeP("Jean-Marc Pilorget", 435, "1975-1989"),
      makeP("Marquinhos", 427, "2013-Act"),
      makeP("Marco Verratti", 416, "2012-2023"),
      makeP("Sylvain Armand", 380, "2004-2013"),
      makeP("Safet Sušić", 344, "1982-1991")
    ]
  },
  "rennes": {
    "g": [
      makeG("Jean Grumellon", 107, "1947-1952", 150),
      makeG("Alexander Frei", 52, "2003-2006", 117),
      makeG("Benjamin Bourigeaud", 52, "2017-2024", 311),
      makeG("Martin Terrier", 50, "2020-2024", 120),
      makeG("Jimmy Briand", 43, "2003-2010", 211)
    ],
    "p": [
      makeP("Yves Boutet", 394, "1955-1970"),
      makeP("Romain Danzé", 376, "2006-2019"),
      makeP("René Cédolin", 360, "1948-1959"),
      makeP("Pierrick Hiard", 323, "1978-1989"),
      makeP("Benjamin Bourigeaud", 311, "2017-2024")
    ]
  },
  "strasbourg": {
    "g": [
      makeG("Oskar Rohr", 118, "1934-1939", 136),
      makeG("Albert Gemmrich", 93, "1973-1979", 228),
      makeG("Marc Molitor", 54, "1969-1973", 100),
      makeG("Ludovic Ajorque", 51, "2018-2023", 151),
      makeG("Habib Diallo", 41, "2020-2023", 103)
    ],
    "p": [
      makeP("René Hauss", 515, "1949-1967"),
      makeP("Dominique Dropsy", 406, "1973-1984"),
      makeP("Léonard Specht", 367, "1972-1989"),
      makeP("Dimitri Liénard", 300, "2013-2023"),
      makeP("Guillaume Lacour", 272, "2001-2010")
    ]
  },
  "toulouse": {
    "g": [
      makeG("Pierre Dorsini", 104, "1957-1967", 320),
      makeG("Wissam Ben Yedder", 71, "2010-2016", 174),
      makeG("André-Pierre Gignac", 42, "2007-2010", 119),
      makeG("Beto Márcico", 42, "1985-1992", 220),
      makeG("Johan Elmander", 23, "2006-2008", 71)
    ],
    "p": [
      makeP("Dominique Arribagé", 345, "1992-2004"),
      makeP("Pantxi Sirieix", 261, "2004-2017"),
      makeP("Nicolas Dieuze", 211, "2001-2008"),
      makeP("Étienne Capoue", 196, "2007-2013"),
      makeP("Cheikh M'Bengue", 145, "2007-2013")
    ]
  }
};

const clubesList = Object.keys(dataMap);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  data.goleadores_historicos = dataMap[clubId].g;
  data.presencias_historicas = dataMap[clubId].p;
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Leyendas numéricas inyectadas en Francia: ${clubId}`);
});
