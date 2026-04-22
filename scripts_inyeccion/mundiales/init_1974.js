import fs from 'fs';

const data = {
  year: 1974,
  host: 'Alemania Federal',
  participants: [
    {id: 'alemania_federal', name: 'Alemania Federal', flag: 'de', dt: 'Helmut Schön', squad: []},
    {id: 'alemania_democratica', name: 'Alemania Democrática', flag: 'dd', dt: 'Georg Buschner', squad: []},
    {id: 'australia', name: 'Australia', flag: 'au', dt: 'Rale Rasic', squad: []},
    {id: 'chile', name: 'Chile', flag: 'cl', dt: 'Luis Santibáñez', squad: []},
    {id: 'yugoslavia', name: 'Yugoslavia', flag: 'yu', dt: 'Miljan Miljanić', squad: []},
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Mário Zagallo', squad: []},
    {id: 'escocia', name: 'Escocia', flag: 'gb-sct', dt: 'Willie Ormond', squad: []},
    {id: 'zaire', name: 'Zaire', flag: 'zr', dt: 'Blagoje Vidinić', squad: []},
    {id: 'paises_bajos', name: 'Países Bajos', flag: 'nl', dt: 'Rinus Michels', squad: []},
    {id: 'suecia', name: 'Suecia', flag: 'se', dt: 'Georg Ericson', squad: []},
    {id: 'bulgaria', name: 'Bulgaria', flag: 'bg', dt: 'Hristo Mladenov', squad: []},
    {id: 'uruguay', name: 'Uruguay', flag: 'uy', dt: 'Roberto Porta', squad: []},
    {id: 'polonia', name: 'Polonia', flag: 'pl', dt: 'Kazimierz Górski', squad: []},
    {id: 'italia', name: 'Italia', flag: 'it', dt: 'Ferruccio Valcareggi', squad: []},
    {id: 'argentina', name: 'Argentina', flag: 'ar', dt: 'Vladislao Cap', squad: []},
    {id: 'haiti', name: 'Haití', flag: 'ht', dt: 'Antoine Tassy', squad: []}
  ],
  groups: {},
  secondStageGroups: {},
  bracket: {},
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/1974.json', JSON.stringify(data, null, 2));
console.log('1974 initialized');
