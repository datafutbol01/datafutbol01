import fs from 'fs';

const data = {
  year: 1962,
  host: 'Chile',
  participants: [
    {id: 'urs', name: 'Unión Soviética', flag: 'su', dt: 'Gavril Kachalin', squad: []},
    {id: 'yugoslavia', name: 'Yugoslavia', flag: 'yu', dt: 'Prvoslav Mihajlović', squad: []},
    {id: 'uruguay', name: 'Uruguay', flag: 'uy', dt: 'Juan Carlos Corazzo', squad: []},
    {id: 'colombia', name: 'Colombia', flag: 'co', dt: 'Adolfo Pedernera', squad: []},
    {id: 'alemania_federal', name: 'Alemania Federal', flag: 'de', dt: 'Sepp Herberger', squad: []},
    {id: 'chile', name: 'Chile', flag: 'cl', dt: 'Fernando Riera', squad: []},
    {id: 'italia', name: 'Italia', flag: 'it', dt: 'Paolo Mazza', squad: []},
    {id: 'suiza', name: 'Suiza', flag: 'ch', dt: 'Karl Rappan', squad: []},
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Aymoré Moreira', squad: []},
    {id: 'checoslovaquia', name: 'Checoslovaquia', flag: 'cz', dt: 'Rudolf Vytlačil', squad: []},
    {id: 'mexico', name: 'México', flag: 'mx', dt: 'Ignacio Trelles', squad: []},
    {id: 'espana', name: 'España', flag: 'es', dt: 'Helenio Herrera', squad: []},
    {id: 'hungria', name: 'Hungría', flag: 'hu', dt: 'Lajos Baróti', squad: []},
    {id: 'inglaterra', name: 'Inglaterra', flag: 'gb-eng', dt: 'Walter Winterbottom', squad: []},
    {id: 'argentina', name: 'Argentina', flag: 'ar', dt: 'Juan Carlos Lorenzo', squad: []},
    {id: 'bulgaria', name: 'Bulgaria', flag: 'bg', dt: 'Georgi Pachedzhiev', squad: []}
  ],
  groups: {},
  bracket: {},
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/1962.json', JSON.stringify(data, null, 2));
console.log('1962 initialized');
