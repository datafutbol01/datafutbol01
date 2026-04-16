// Use Vite's import.meta.glob to dynamically import all json files in the argentina folder
const argentinaModules = import.meta.glob('./clubes/argentina/*.json', { eager: true });
const inglaterraModules = import.meta.glob('./clubes/inglaterra/*.json', { eager: true });
const espaniaModules = import.meta.glob('./clubes/espania/*.json', { eager: true });
const italiaModules = import.meta.glob('./clubes/italia/*.json', { eager: true });
const alemaniaModules = import.meta.glob('./clubes/alemania/*.json', { eager: true });
const franciaModules = import.meta.glob('./clubes/francia/*.json', { eager: true });
const ligasTemporadasModules = import.meta.glob('./ligas/*_temporadas.json', { eager: true });
const ligasEnfrentamientosModules = import.meta.glob('./ligas/*_enfrentamientos.json', { eager: true });
const escociaModules = import.meta.glob('./clubes/escocia/*.json', { eager: true });

export const getLeagues = () => {
  return [
    { id: 'argentina', name: 'Liga Profesional de Fútbol', country: 'Argentina', flag: '', color: '#71bdf2', shield: '/escudos/lpf_logo.png' },
    { id: 'inglaterra', name: 'Premier League', country: 'Inglaterra', flag: '', color: '#3d195b', shield: '/escudos/premier_logo.png' },
    { id: 'espania', name: 'La Liga', country: 'España', flag: '', color: '#ee2413', shield: '/escudos/la_liga_logo.png' },
    { id: 'italia', name: 'Serie A', country: 'Italia', flag: '', color: '#005ba3', shield: '/escudos/serie_a_logo.png' },
    { id: 'alemania', name: 'Bundesliga', country: 'Alemania', flag: '', color: '#d3010c', shield: '/escudos/bundesliga_logo.png' },
    { id: 'francia', name: 'Ligue 1', country: 'Francia', flag: '', color: '#dae025', shield: '/escudos/ligue1_2024.png' },
    { id: 'escocia', name: 'Scottish Premiership', country: 'Escocia', flag: '', color: '#002868', shield: '/escudos/scottish_premiership_logo.png' },
    { id: 'eng_league_one', name: 'EFL League One', country: 'Inglaterra', flag: '', color: '#3d195b', shield: 'https://media.api-sports.io/football/leagues/41.png' },
    { id: 'eng_league_two', name: 'EFL League Two', country: 'Inglaterra', flag: '', color: '#3d195b', shield: 'https://media.api-sports.io/football/leagues/42.png' }
  ];
};

export const getClubsByLeague = (leagueId) => {
  let clubs = [];
  if (leagueId === 'argentina') {
    clubs = Object.values(argentinaModules).map(mod => mod.default || mod);
  } else if (leagueId === 'inglaterra') {
    clubs = Object.values(inglaterraModules).map(mod => mod.default || mod);
  } else if (leagueId === 'espania') {
    clubs = Object.values(espaniaModules).map(mod => mod.default || mod);
  } else if (leagueId === 'italia') {
    clubs = Object.values(italiaModules).map(mod => mod.default || mod);
  } else if (leagueId === 'alemania') {
    clubs = Object.values(alemaniaModules).map(mod => mod.default || mod);
  } else if (leagueId === 'francia') {
    clubs = Object.values(franciaModules).map(mod => mod.default || mod);
  } else if (leagueId === 'escocia') {
    clubs = Object.values(escociaModules).map(mod => mod.default || mod);
  }
  
  return clubs.sort((a, b) => {
    const nameA = a.datos?.nombre_corto || a.datos?.nombre_completo || a.id;
    const nameB = b.datos?.nombre_corto || b.datos?.nombre_completo || b.id;
    return nameA.localeCompare(nameB, 'es');
  });
};

export const getClubById = (leagueId, clubId) => {
  const clubs = getClubsByLeague(leagueId);
  return clubs.find(club => club.id === clubId);
};

export const getLeagueHistory = (leagueId) => {
  const moduleKey = `./ligas/${leagueId}_temporadas.json`;
  if (ligasTemporadasModules[moduleKey]) {
    return ligasTemporadasModules[moduleKey].default || ligasTemporadasModules[moduleKey];
  }
  return [];
};

export const getLeagueMatchups = (leagueId) => {
  const moduleKey = `./ligas/${leagueId}_enfrentamientos.json`;
  if (ligasEnfrentamientosModules[moduleKey]) {
    return ligasEnfrentamientosModules[moduleKey].default || ligasEnfrentamientosModules[moduleKey];
  }
  return [];
};

export const getAllSearchableItems = () => {
  const leagues = getLeagues().map(l => ({
    type: 'league',
    id: l.id,
    name: l.name,
    country: l.country,
    shield: l.shield,
    url: `/liga/${l.id}`
  }));

  const clubs = [];
  getLeagues().forEach(league => {
    const leagueClubs = getClubsByLeague(league.id);
    leagueClubs.forEach(club => {
      clubs.push({
        type: 'club',
        id: club.id,
        name: club.datos?.nombre_corto || club.datos?.nombre_oficial || club.datos?.nombre_completo || club.id,
        leagueId: league.id,
        leagueName: league.name,
        shield: (() => {
          if (club.datos?.escudo_actual) return club.datos.escudo_actual;
          if (club.evolucion_escudos && club.evolucion_escudos.length > 0) {
            const current = club.evolucion_escudos.find(e => e.ano === 'Actualidad' || e.ano === '2024');
            if (current && current.url) return current.url;
          }
          return `/escudos/${club.id}.png`;
        })(),
        url: `/liga/${league.id}/club/${club.id}`
      });
    });
  });

  return [...leagues, ...clubs];
};
