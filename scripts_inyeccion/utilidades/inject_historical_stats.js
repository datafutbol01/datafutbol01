import fs from 'fs';

function inject(year, stats) {
    const file = `c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/${year}.json`;
    if (!fs.existsSync(file)) return;
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    data.stats = stats;
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    console.log(`Stats injected for ${year}`);
}

// 1994
inject(1994, {
  awards: {
    goldenBall: { name: 'Romário', flag: 'br' },
    silverBall: { name: 'Roberto Baggio', flag: 'it' },
    bronzeBall: { name: 'Hristo Stoichkov', flag: 'bg' },
    goldenGlove: { name: "Michel Preud'homme", flag: 'be' },
    fairPlay: { name: 'Brasil', flag: 'br' }
  },
  topScorers: [
    { name: 'Hristo Stoichkov', flag: 'bg', value: '6 goles' },
    { name: 'Oleg Salenko', flag: 'ru', value: '6 goles' },
    { name: 'Romário', flag: 'br', value: '5 goles' },
    { name: 'Roberto Baggio', flag: 'it', value: '5 goles' },
    { name: 'Jürgen Klinsmann', flag: 'de', value: '5 goles' }
  ],
  assists: [
    { name: 'Thomas Häßler', flag: 'de', value: '5 asis.' },
    { name: 'Tomas Brolin', flag: 'se', value: '4 asis.' },
    { name: 'Gheorghe Hagi', flag: 'ro', value: '4 asis.' },
    { name: 'Sergi Barjuán', flag: 'es', value: '3 asis.' }
  ],
  yellowCards: [
    { name: 'Zinho', flag: 'br', value: '2 amarillas' },
    { name: 'Dunga', flag: 'br', value: '2 amarillas' },
    { name: 'Albert Ferrer', flag: 'es', value: '2 amarillas' }
  ],
  redCards: [
    { name: 'Leonardo', flag: 'br', value: 'Roja directa' },
    { name: 'Gianluca Pagliuca', flag: 'it', value: 'Roja directa' },
    { name: 'Marco Etcheverry', flag: 'bo', value: 'Roja directa' },
    { name: 'Rigobert Song', flag: 'cm', value: 'Roja directa' }
  ]
});

// 1990
inject(1990, {
  awards: {
    goldenBall: { name: 'Salvatore Schillaci', flag: 'it' },
    silverBall: { name: 'Lothar Matthäus', flag: 'de' },
    bronzeBall: { name: 'Diego Maradona', flag: 'ar' },
    fairPlay: { name: 'Inglaterra', flag: 'gb-eng' }
  },
  topScorers: [
    { name: 'Salvatore Schillaci', flag: 'it', value: '6 goles' },
    { name: 'Tomáš Skuhravý', flag: 'cs', value: '5 goles' },
    { name: 'Roger Milla', flag: 'cm', value: '4 goles' },
    { name: 'Míchel', flag: 'es', value: '4 goles' },
    { name: 'Gary Lineker', flag: 'gb-eng', value: '4 goles' },
    { name: 'Lothar Matthäus', flag: 'de', value: '4 goles' }
  ],
  assists: [
    { name: 'Andreas Brehme', flag: 'de', value: '3 asis.' },
    { name: 'Jozef Chovanec', flag: 'cs', value: '3 asis.' },
    { name: 'Luboš Kubík', flag: 'cs', value: '3 asis.' },
    { name: 'Diego Maradona', flag: 'ar', value: '2 asis.' }
  ],
  yellowCards: [
    { name: 'José Serrizuela', flag: 'ar', value: '3 amarillas' },
    { name: 'Ricardo Giusti', flag: 'ar', value: '2 amarillas' },
    { name: 'Julio Olarticoechea', flag: 'ar', value: '2 amarillas' }
  ],
  redCards: [
    { name: 'Pedro Monzón', flag: 'ar', value: 'Roja directa (Final)' },
    { name: 'Gustavo Dezotti', flag: 'ar', value: 'Doble amarilla (Final)' },
    { name: 'Frank Rijkaard', flag: 'nl', value: 'Roja directa' },
    { name: 'Rudi Völler', flag: 'de', value: 'Roja directa' },
    { name: 'Ricardo Giusti', flag: 'ar', value: 'Doble amarilla' }
  ]
});

// 1986
inject(1986, {
  awards: {
    goldenBall: { name: 'Diego Maradona', flag: 'ar' },
    silverBall: { name: 'Harald Schumacher', flag: 'de' },
    bronzeBall: { name: 'Preben Elkjær', flag: 'dk' },
    fairPlay: { name: 'Brasil', flag: 'br' }
  },
  topScorers: [
    { name: 'Gary Lineker', flag: 'gb-eng', value: '6 goles' },
    { name: 'Diego Maradona', flag: 'ar', value: '5 goles' },
    { name: 'Careca', flag: 'br', value: '5 goles' },
    { name: 'Emilio Butragueño', flag: 'es', value: '5 goles' },
    { name: 'Jorge Valdano', flag: 'ar', value: '4 goles' },
    { name: 'Preben Elkjær', flag: 'dk', value: '4 goles' }
  ],
  assists: [
    { name: 'Diego Maradona', flag: 'ar', value: '5 asis.' },
    { name: 'Igor Belanov', flag: 'su', value: '4 asis.' },
    { name: 'Michel Platini', flag: 'fr', value: '3 asis.' },
    { name: 'Dominique Rocheteau', flag: 'fr', value: '3 asis.' }
  ],
  yellowCards: [
    { name: 'Julio Olarticoechea', flag: 'ar', value: '2 amarillas' },
    { name: 'Nery Pumpido', flag: 'ar', value: '2 amarillas' }
  ],
  redCards: [
    { name: 'José Batista', flag: 'uy', value: 'Roja directa (56 seg.)' },
    { name: 'Thomas Berthold', flag: 'de', value: 'Roja directa' },
    { name: 'Javier Aguirre', flag: 'mx', value: 'Doble amarilla' },
    { name: 'Mike Sweeney', flag: 'ca', value: 'Roja directa' },
    { name: 'Ray Wilkins', flag: 'gb-eng', value: 'Doble amarilla' }
  ]
});
