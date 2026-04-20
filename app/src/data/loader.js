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
const uruguayModules = import.meta.glob('./clubes/uruguay/*.json', { eager: true });
const brasilModules = import.meta.glob('./clubes/brasil/*.json', { eager: true });

export const getLeagues = () => {
  return [
    { id: 'argentina', name: 'Liga Profesional de Fútbol', country: 'Argentina', flag: '', color: '#71bdf2', shield: '/escudos/lpf_logo.png' },
    { id: 'inglaterra', name: 'Premier League', country: 'Inglaterra', flag: '', color: '#3d195b', shield: '/escudos/premier_logo.png' },
    { id: 'espania', name: 'La Liga', country: 'España', flag: '', color: '#ee2413', shield: '/escudos/la_liga_logo.png' },
    { id: 'italia', name: 'Serie A', country: 'Italia', flag: '', color: '#005ba3', shield: '/escudos/serie_a_logo.png' },
    { id: 'alemania', name: 'Bundesliga', country: 'Alemania', flag: '', color: '#d3010c', shield: '/escudos/bundesliga_logo.png' },
    { id: 'francia', name: 'Ligue 1', country: 'Francia', flag: '', color: '#dae025', shield: '/escudos/ligue1_2024.png' },
    { id: 'escocia', name: 'Scottish Premiership', country: 'Escocia', flag: '', color: '#002868', shield: '/escudos/scottish_premiership_logo.png' },
    { id: 'brasil', name: 'Brasileirão', country: 'Brasil', flag: '', color: '#009b3a', shield: 'https://media.api-sports.io/football/leagues/71.png', isHidden: !import.meta.env.DEV },
    { id: 'eng_championship', name: 'EFL Championship', country: 'Inglaterra', flag: '', color: '#3d195b', shield: 'https://media.api-sports.io/football/leagues/40.png', isHidden: true },
    { id: 'fra_ligue_2', name: 'Ligue 2 BKT', country: 'Francia', flag: '', color: '#dae025', shield: 'https://media.api-sports.io/football/leagues/62.png', isHidden: true },
    { id: 'ger_2_bundesliga', name: '2. Bundesliga', country: 'Alemania', flag: '', color: '#d3010c', shield: 'https://media.api-sports.io/football/leagues/79.png', isHidden: true },
    { id: 'por_primeira', name: 'Primeira Liga', country: 'Portugal', flag: '', color: '#002664', shield: 'https://media.api-sports.io/football/leagues/94.png', isHidden: true },
    { id: 'ita_serie_b', name: 'Serie B', country: 'Italia', flag: '', color: '#008f39', shield: 'https://media.api-sports.io/football/leagues/136.png', isHidden: true },
    { id: 'bel_pro_league', name: 'Jupiler Pro League', country: 'Bélgica', flag: '', color: '#ff0000', shield: 'https://media.api-sports.io/football/leagues/144.png', isHidden: true },
    { id: 'esp_segunda', name: 'LaLiga 2', country: 'España', flag: '', color: '#ee2413', shield: 'https://media.api-sports.io/football/leagues/141.png', isHidden: true },
    { id: 'col_primera', name: 'Primera A', country: 'Colombia', flag: '', color: '#fcd116', shield: 'https://media.api-sports.io/football/leagues/239.png', isHidden: true },
    { id: 'usa_mls', name: 'MLS', country: 'Estados Unidos', flag: '', color: '#0d1c31', shield: 'https://media.api-sports.io/football/leagues/253.png', isHidden: true },
    { id: 'mex_liga_mx', name: 'Liga MX', country: 'México', flag: '', color: '#00af45', shield: 'https://media.api-sports.io/football/leagues/262.png', isHidden: true },
    { id: 'uruguay', name: 'Primera División', country: 'Uruguay', flag: '', color: '#0081c6', shield: '/escudos/uruguay_logo.png' },
    { id: 'per_primera', name: 'Liga 1', country: 'Perú', flag: '', color: '#d91023', shield: 'https://media.api-sports.io/football/leagues/281.png', isHidden: true },
    { id: 'eng_league_one', name: 'EFL League One', country: 'Inglaterra', flag: '', color: '#3d195b', shield: 'https://media.api-sports.io/football/leagues/41.png', isHidden: true },
    { id: 'eng_league_two', name: 'EFL League Two', country: 'Inglaterra', flag: '', color: '#3d195b', shield: 'https://media.api-sports.io/football/leagues/42.png', isHidden: true },
    { id: 'arg_nacional_b', name: 'Primera Nacional', country: 'Argentina', flag: '', color: '#71bdf2', shield: 'https://media.api-sports.io/football/leagues/129.png', isHidden: true },
    { id: 'arg_b_metro', name: 'Primera B Metropolitana', country: 'Argentina', flag: '', color: '#71bdf2', shield: 'https://media.api-sports.io/football/leagues/131.png', isHidden: true },
    { id: 'arg_primera_c', name: 'Primera C', country: 'Argentina', flag: '', color: '#71bdf2', shield: 'https://media.api-sports.io/football/leagues/132.png', isHidden: true },
    { id: 'chi_primera', name: 'Primera División', country: 'Chile', flag: '', color: '#d52b1e', shield: 'https://media.api-sports.io/football/leagues/265.png', isHidden: true }
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
  } else if (leagueId === 'uruguay') {
    clubs = Object.values(uruguayModules).map(mod => mod.default || mod);
  } else if (leagueId === 'brasil') {
    clubs = import.meta.env.DEV ? Object.values(brasilModules).map(mod => mod.default || mod) : [];
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
  const leagues = getLeagues()
    .filter(l => !l.isHidden)
    .map(l => ({
      type: 'league',
      id: l.id,
      name: l.name,
      country: l.country,
      shield: l.shield,
      url: `/liga/${l.id}`
    }));

  const clubs = [];
  getLeagues().forEach(league => {
    // No agregamos al buscador clubes incompletos de Brasil (salvo en local).
    if (league.id === 'brasil' && !import.meta.env.DEV) return;

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
