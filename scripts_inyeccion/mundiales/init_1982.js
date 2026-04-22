import fs from 'fs';

const data = {
  year: 1982,
  host: 'España',
  participants: [
    {id: 'italia', name: 'Italia', flag: 'it', dt: 'Enzo Bearzot', squad: []},
    {id: 'alemania_federal', name: 'Alemania Federal', flag: 'de', dt: 'Jupp Derwall', squad: []},
    {id: 'polonia', name: 'Polonia', flag: 'pl', dt: 'Antoni Piechniczek', squad: []},
    {id: 'francia', name: 'Francia', flag: 'fr', dt: 'Michel Hidalgo', squad: []},
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Telê Santana', squad: []},
    {id: 'inglaterra', name: 'Inglaterra', flag: 'gb-eng', dt: 'Ron Greenwood', squad: []},
    {id: 'urs', name: 'Unión Soviética', flag: 'su', dt: 'Konstantin Beskov', squad: []},
    {id: 'austria', name: 'Austria', flag: 'at', dt: 'Felix Latzke', squad: []},
    {id: 'irlanda_del_norte', name: 'Irlanda del Norte', flag: 'gb-nir', dt: 'Billy Bingham', squad: []},
    {id: 'belgica', name: 'Bélgica', flag: 'be', dt: 'Guy Thys', squad: []},
    {id: 'argentina', name: 'Argentina', flag: 'ar', dt: 'César Luis Menotti', squad: []},
    {id: 'espana', name: 'España', flag: 'es', dt: 'José Santamaría', squad: []},
    {id: 'argelia', name: 'Argelia', flag: 'dz', dt: 'Mahieddine Khalef', squad: []},
    {id: 'hungria', name: 'Hungría', flag: 'hu', dt: 'Kálmán Mészöly', squad: []},
    {id: 'escocia', name: 'Escocia', flag: 'gb-sct', dt: 'Jock Stein', squad: []},
    {id: 'yugoslavia', name: 'Yugoslavia', flag: 'yu', dt: 'Miljan Miljanić', squad: []},
    {id: 'camerun', name: 'Camerún', flag: 'cm', dt: 'Jean Vincent', squad: []},
    {id: 'honduras', name: 'Honduras', flag: 'hn', dt: 'José de la Paz Herrera', squad: []},
    {id: 'checoslovaquia', name: 'Checoslovaquia', flag: 'cz', dt: 'Jozef Vengloš', squad: []},
    {id: 'peru', name: 'Perú', flag: 'pe', dt: 'Tim', squad: []},
    {id: 'kuwait', name: 'Kuwait', flag: 'kw', dt: 'Carlos Alberto Parreira', squad: []},
    {id: 'chile', name: 'Chile', flag: 'cl', dt: 'Luis Santibáñez', squad: []},
    {id: 'nueva_zelanda', name: 'Nueva Zelanda', flag: 'nz', dt: 'John Adshead', squad: []},
    {id: 'el_salvador', name: 'El Salvador', flag: 'sv', dt: 'Pipo Rodríguez', squad: []}
  ],
  groups: {},
  secondStageGroups: {},
  bracket: {},
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/1982.json', JSON.stringify(data, null, 2));
console.log('1982 initialized');
