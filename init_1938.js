import fs from 'fs';

const data = {
  year: 1938,
  host: 'Francia',
  participants: [
    {id: 'francia', name: 'Francia', flag: 'fr', dt: 'Gaston Barreau', squad: []},
    {id: 'belgica', name: 'Bélgica', flag: 'be', dt: 'Jack Butler', squad: []},
    {id: 'italia', name: 'Italia', flag: 'it', dt: 'Vittorio Pozzo', squad: []},
    {id: 'noruega', name: 'Noruega', flag: 'no', dt: 'Asbjørn Halvorsen', squad: []},
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Adhemar Pimenta', squad: []},
    {id: 'polonia', name: 'Polonia', flag: 'pl', dt: 'Józef Kałuża', squad: []},
    {id: 'checoslovaquia', name: 'Checoslovaquia', flag: 'cz', dt: 'Josef Tesař', squad: []},
    {id: 'paises_bajos', name: 'Países Bajos', flag: 'nl', dt: 'Bob Glendenning', squad: []},
    {id: 'hungria', name: 'Hungría', flag: 'hu', dt: 'Károly Dietz', squad: []},
    {id: 'indias_orientales_neerlandesas', name: 'Indias Orientales Neerlandesas', flag: 'id', dt: 'Johan Mastenbroek', squad: []},
    {id: 'suiza', name: 'Suiza', flag: 'ch', dt: 'Karl Rappan', squad: []},
    {id: 'alemania', name: 'Alemania', flag: 'de', dt: 'Sepp Herberger', squad: []},
    {id: 'suecia', name: 'Suecia', flag: 'se', dt: 'József Nagy', squad: []},
    {id: 'cuba', name: 'Cuba', flag: 'cu', dt: 'José Tapia', squad: []},
    {id: 'rumania', name: 'Rumania', flag: 'ro', dt: 'Săvulescu / Rădulescu', squad: []}
  ],
  groups: {},
  bracket: {},
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/1938.json', JSON.stringify(data, null, 2));
console.log('1938 initialized');
