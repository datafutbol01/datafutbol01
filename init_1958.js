import fs from 'fs';

const data = {
  year: 1958,
  host: 'Suecia',
  participants: [
    {id: 'suecia', name: 'Suecia', flag: 'se', dt: 'George Raynor', squad: []},
    {id: 'alemania_federal', name: 'Alemania Federal', flag: 'de', dt: 'Sepp Herberger', squad: []},
    {id: 'irlanda_del_norte', name: 'Irlanda del Norte', flag: 'gb-nir', dt: 'Peter Doherty', squad: []},
    {id: 'checoslovaquia', name: 'Checoslovaquia', flag: 'cz', dt: 'Karel Kolský', squad: []},
    {id: 'argentina', name: 'Argentina', flag: 'ar', dt: 'Guillermo Stábile', squad: []},
    {id: 'francia', name: 'Francia', flag: 'fr', dt: 'Albert Batteux', squad: []},
    {id: 'yugoslavia', name: 'Yugoslavia', flag: 'yu', dt: 'Aleksandar Tirnanić', squad: []},
    {id: 'paraguay', name: 'Paraguay', flag: 'py', dt: 'Aurelio González', squad: []},
    {id: 'escocia', name: 'Escocia', flag: 'gb-sct', dt: 'Dawson Walker', squad: []},
    {id: 'gales', name: 'Gales', flag: 'gb-wls', dt: 'Jimmy Murphy', squad: []},
    {id: 'hungria', name: 'Hungría', flag: 'hu', dt: 'Lajos Baróti', squad: []},
    {id: 'mexico', name: 'México', flag: 'mx', dt: 'Antonio López Herranz', squad: []},
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Vicente Feola', squad: []},
    {id: 'urs', name: 'Unión Soviética', flag: 'su', dt: 'Gavril Kachalin', squad: []},
    {id: 'inglaterra', name: 'Inglaterra', flag: 'gb-eng', dt: 'Walter Winterbottom', squad: []},
    {id: 'austria', name: 'Austria', flag: 'at', dt: 'Josef Argauer', squad: []}
  ],
  groups: {},
  bracket: {},
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/1958.json', JSON.stringify(data, null, 2));
console.log('1958 initialized');
