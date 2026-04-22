import fs from 'fs';

const data = {
  year: 1954,
  host: 'Suiza',
  participants: [
    {id: 'suiza', name: 'Suiza', flag: 'ch', dt: 'Karl Rappan', squad: []},
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Zezé Moreira', squad: []},
    {id: 'yugoslavia', name: 'Yugoslavia', flag: 'yu', dt: 'Aleksandar Tirnanić', squad: []},
    {id: 'francia', name: 'Francia', flag: 'fr', dt: 'Pierre Pibarot', squad: []},
    {id: 'mexico', name: 'México', flag: 'mx', dt: 'Antonio López Herranz', squad: []},
    {id: 'hungria', name: 'Hungría', flag: 'hu', dt: 'Gusztáv Sebes', squad: []},
    {id: 'alemania_federal', name: 'Alemania Federal', flag: 'de', dt: 'Sepp Herberger', squad: []},
    {id: 'turquia', name: 'Turquía', flag: 'tr', dt: 'Sandro Puppo', squad: []},
    {id: 'corea_del_sur', name: 'Corea del Sur', flag: 'kr', dt: 'Kim Yong-Sik', squad: []},
    {id: 'uruguay', name: 'Uruguay', flag: 'uy', dt: 'Juan López', squad: []},
    {id: 'austria', name: 'Austria', flag: 'at', dt: 'Walter Nausch', squad: []},
    {id: 'checoslovaquia', name: 'Checoslovaquia', flag: 'cz', dt: 'Karol Borhy', squad: []},
    {id: 'escocia', name: 'Escocia', flag: 'gb-sct', dt: 'Andy Beattie', squad: []},
    {id: 'inglaterra', name: 'Inglaterra', flag: 'gb-eng', dt: 'Walter Winterbottom', squad: []},
    {id: 'italia', name: 'Italia', flag: 'it', dt: 'Lajos Czeizler', squad: []},
    {id: 'belgica', name: 'Bélgica', flag: 'be', dt: 'Doug Livingstone', squad: []}
  ],
  groups: {},
  bracket: {},
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/1954.json', JSON.stringify(data, null, 2));
console.log('1954 initialized');
