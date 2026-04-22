import fs from 'fs';

const data = {
  year: 1966,
  host: 'Inglaterra',
  participants: [
    {id: 'inglaterra', name: 'Inglaterra', flag: 'gb-eng', dt: 'Alf Ramsey', squad: []},
    {id: 'uruguay', name: 'Uruguay', flag: 'uy', dt: 'Ondino Viera', squad: []},
    {id: 'mexico', name: 'México', flag: 'mx', dt: 'Ignacio Trelles', squad: []},
    {id: 'francia', name: 'Francia', flag: 'fr', dt: 'Henri Guérin', squad: []},
    {id: 'alemania_federal', name: 'Alemania Federal', flag: 'de', dt: 'Helmut Schön', squad: []},
    {id: 'argentina', name: 'Argentina', flag: 'ar', dt: 'Juan Carlos Lorenzo', squad: []},
    {id: 'espana', name: 'España', flag: 'es', dt: 'José Villalonga', squad: []},
    {id: 'suiza', name: 'Suiza', flag: 'ch', dt: 'Alfredo Foni', squad: []},
    {id: 'portugal', name: 'Portugal', flag: 'pt', dt: 'Otto Glória', squad: []},
    {id: 'hungria', name: 'Hungría', flag: 'hu', dt: 'Lajos Baróti', squad: []},
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Vicente Feola', squad: []},
    {id: 'bulgaria', name: 'Bulgaria', flag: 'bg', dt: 'Rudolf Vytlačil', squad: []},
    {id: 'urs', name: 'Unión Soviética', flag: 'su', dt: 'Nikolai Morozov', squad: []},
    {id: 'corea_del_norte', name: 'Corea del Norte', flag: 'kp', dt: 'Myung Rye-Hyun', squad: []},
    {id: 'italia', name: 'Italia', flag: 'it', dt: 'Edmondo Fabbri', squad: []},
    {id: 'chile', name: 'Chile', flag: 'cl', dt: 'Luis Santibáñez', squad: []}
  ],
  groups: {},
  bracket: {},
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/1966.json', JSON.stringify(data, null, 2));
console.log('1966 initialized');
