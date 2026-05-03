import { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { getClubsByLeague, getLeagueHistory, getLeagueMatchups, getLeagues, getAllSearchableItems } from '../data/loader';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import ShareButton from '../components/ShareButton.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import LeagueTabs from '../components/LeagueTabs.jsx';
import SEO from '../components/SEO.jsx';
import { useAppStore } from '../store/useAppStore.js';

export default function League() {
  const { leagueId } = useParams();
  const navigate = useNavigate();
  const clubs = getClubsByLeague(leagueId);
  const history = getLeagueHistory(leagueId);
  const matchups = getLeagueMatchups(leagueId);
  const allLeagues = getLeagues();
  const currentLeague = allLeagues.find(l => l.id === leagueId) || { name: leagueId };
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const h2hParam = searchParams.get('h2h');

  const storeActiveTab = useAppStore(state => state.activeLeagueTab);
  const setStoreActiveTab = useAppStore(state => state.setActiveLeagueTab);

  const [activeTabLocal, setActiveTabLocal] = useState(location.state?.tab || (h2hParam ? 'enfrentamientos' : storeActiveTab));
  const activeTab = activeTabLocal;
  const setActiveTab = (tab) => {
    setActiveTabLocal(tab);
    setStoreActiveTab(tab);
  };
  const getDefaultTab = (id) => {
    switch (id) {
      case 'inglaterra': return 'premier';
      case 'espania': return 'laliga';
      case 'italia': return 'serie_a';
      case 'alemania': return 'bundesliga';
      case 'francia': return 'ligue1';
      case 'escocia': return 'scottish_league';
      case 'uruguay': return 'campeonato_uruguayo';
      case 'brasil': return 'brasileirao';
      case 'mex_liga_mx':
      case 'mexico': return 'liga_mx';
      default: return 'metropolitano';
    }
  };
  const [activeTorneoTab, setActiveTorneoTab] = useState(getDefaultTab(leagueId));

  console.log("LEAGUE RENDER", { leagueId, activeTab, clubsLength: clubs.length, activeTorneoTab });

  // Novedad: Conexión Real con Vercel para la Tabla de Posiciones y Llaves
  const slugToApi = {
    'argentina': 128,
    'inglaterra': 39,
    'espania': 140,
    'italia': 135,
    'alemania': 78,
    'francia': 61,
    'escocia': 179,
    'champions': 2,
    'europa_league': 3,
    'conference': 848,
    'libertadores': 13,
    'sudamericana': 11,
    'brasil': 71,
    'eng_championship': 40,
    'fra_ligue_2': 62,
    'ger_2_bundesliga': 79,
    'por_primeira': 94,
    'ita_serie_b': 136,
    'esp_segunda': 141,
    'col_primera': 239,
    'usa_mls': 253,
    'mex_liga_mx': 262,
    'uru_primera': 268,
    'uruguay': 268,
    'per_primera': 281,
    'eng_league_one': 41,
    'eng_league_two': 42,
    'arg_nacional_b': 129,
    'arg_b_metro': 131,
    'arg_primera_c': 132,
    'bel_pro_league': 144,
    'chi_primera': 265,
    'copa_francia': 66,
    'dfb_pokal': 81,
    'copa_argentina': 130,
    'eredivisie': 88,
    'paises_bajos': 88,
    'coppa_italia': 137,
    'fa_cup': 45
  };
  const isCup = ['champions', 'europa_league', 'conference', 'copa_francia', 'dfb_pokal', 'copa_argentina', 'coppa_italia', 'fa_cup'].includes(leagueId);

  const [standingsData, setStandingsData] = useState(null);
  const [loadingStandings, setLoadingStandings] = useState(false);

  const [statsData, setStatsData] = useState({ scorers: null, assists: null, yellows: null, reds: null });
  const [loadingStats, setLoadingStats] = useState(false);

  const [promediosData, setPromediosData] = useState(null);
  const [loadingPromedios, setLoadingPromedios] = useState(false);

  // FIXTURES: Cuadro de Llaves y Calendario
  const [knockoutData, setKnockoutData] = useState(null);

  const [fixtureData, setFixtureData] = useState(null);
  const [loadingFixtures, setLoadingFixtures] = useState(false);
  const [viewMode, setViewMode] = useState('tabla'); // 'tabla' | 'fixture'
  const [selectedRound, setSelectedRound] = useState('');
  
  const renderStatusBadge = (description, rank) => {
    if (activeTab !== 'temporadas') return null;
    if (!description) return null;
    const desc = description.toLowerCase();
    
    if (desc.includes('relegation') || desc.includes('descenso')) {
      return <span style={{fontSize: '0.65rem', padding: '2px 5px', borderRadius: '4px', background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', marginLeft: '6px', whiteSpace: 'nowrap', border: '1px solid rgba(239, 68, 68, 0.3)'}}>⬇️ Descenso</span>;
    }

    if ((rank === 1) || desc === 'winner' || desc === 'champion' || desc === 'campeón') {
      return <span style={{fontSize: '0.65rem', padding: '2px 5px', borderRadius: '4px', background: 'rgba(234, 179, 8, 0.15)', color: '#facc15', marginLeft: '6px', whiteSpace: 'nowrap', border: '1px solid rgba(234, 179, 8, 0.3)'}}>🏆 Campeón</span>;
    }
    
    const isPrimeraDiv = !['arg_nacional_b', 'arg_b_metro', 'arg_primera_c'].includes(leagueId);

    if ((desc.includes('promotion') || desc.includes('ascenso')) && !desc.includes('play-off') && !desc.includes('playoff') && !desc.includes('champions') && !desc.includes('europa') && !desc.includes('conference')) {
      if (!isPrimeraDiv) {
        return <span style={{fontSize: '0.65rem', padding: '2px 5px', borderRadius: '4px', background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', marginLeft: '6px', whiteSpace: 'nowrap', border: '1px solid rgba(34, 197, 94, 0.3)'}}>⬆️ Ascenso</span>;
      }
    }

    if (desc.includes('play-off') || desc.includes('playoff') || desc.includes('promotion play')) {
      if (!isPrimeraDiv || desc.includes('conference') || desc.includes('europa')) {
        return <span style={{fontSize: '0.65rem', padding: '2px 5px', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', marginLeft: '6px', whiteSpace: 'nowrap', border: '1px solid rgba(59, 130, 246, 0.3)'}}>🔼 Play-off</span>;
      }
    }
    
    return null;
  };

  useEffect(() => {
    if (activeTab === 'actualidad' && slugToApi[leagueId] && !standingsData) {
      const fetchData = async () => {
        setLoadingStandings(true);
        try {
          const apiId = slugToApi[leagueId];
          const season = ['argentina', 'copa_argentina', 'libertadores', 'sudamericana', 'arg_nacional_b', 'arg_b_metro', 'arg_primera_c', 'col_primera', 'usa_mls', 'uruguay', 'uru_primera', 'per_primera', 'chi_primera'].includes(leagueId) ? 2026 : 2025;
          const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
          const headers = isLocal ? { "x-rapidapi-host": "v3.football.api-sports.io", "x-rapidapi-key": import.meta.env.VITE_API_FOOTBALL_KEY } : {};

          let activeSeason = season;

          // Fetch Posiciones
          const endpointStandings = isLocal
            ? `https://v3.football.api-sports.io/standings?league=${apiId}&season=${season}`
            : `/api/standings?league=${apiId}&season=${season}`;
          const resSt = await fetch(endpointStandings, { headers });
          const dataSt = await resSt.json();

          if (dataSt.response && dataSt.response.length > 0) {
            setStandingsData(dataSt.response[0].league.standings);
          } else {
            // Fallback automático al año anterior si la API no generó el año actual (Ej: Primera C)
            const fbSt = isLocal
              ? `https://v3.football.api-sports.io/standings?league=${apiId}&season=${season - 1}`
              : `/api/standings?league=${apiId}&season=${season - 1}`;
            const fbRes = await fetch(fbSt, { headers });
            const fbData = await fbRes.json();
            if (fbData.response && fbData.response.length > 0) {
              setStandingsData(fbData.response[0].league.standings);
              activeSeason = season - 1;
            }
          }

          // Fetch Cuadro de Llaves (Si es Copa) o Fixture de Liga (Si no es copa)
          if (isCup) {
            const endpointFix = isLocal
              ? `https://v3.football.api-sports.io/fixtures?league=${apiId}&season=${activeSeason}`
              : `/api/knockouts?league=${apiId}&season=${activeSeason}`;
            const resFix = await fetch(endpointFix, { headers });
            const dataFix = await resFix.json();
            if (dataFix.response && dataFix.response.length > 0) {
              setKnockoutData(dataFix.response);
            } else {
              const fbFix = isLocal
                ? `https://v3.football.api-sports.io/fixtures?league=${apiId}&season=${activeSeason - 1}`
                : `/api/knockouts?league=${apiId}&season=${activeSeason - 1}`;
              const fbResFix = await fetch(fbFix, { headers });
              const fbDataFix = await fbResFix.json();
              if (fbDataFix.response) setKnockoutData(fbDataFix.response);
              if (fbDataFix.response && fbDataFix.response.length > 0) activeSeason = season - 1;
            }
          } else {
            setLoadingFixtures(true);
            const endpointFix = isLocal
              ? `https://v3.football.api-sports.io/fixtures?league=${apiId}&season=${activeSeason}`
              : `/api/fixtures?league=${apiId}&season=${activeSeason}`;
            const resFix = await fetch(endpointFix, { headers });
            const dataFix = await resFix.json();
            if (dataFix.response && dataFix.response.length > 0) {
              setFixtureData(dataFix.response);
              // Buscar la ronda actual (ordenamos cronológicamente primero)
              const sortedMatches = [...dataFix.response].sort((a, b) => a.fixture.timestamp - b.fixture.timestamp);

              // 1. Buscar si hay algún partido en juego AHORA
              let currentMatch = sortedMatches.find(f => ['1H', '2H', 'HT', 'LIVE', 'ET', 'P', 'PEN'].includes(f.fixture.status.short));

              // 2. Si no hay en juego, buscar el próximo que aún no empezó
              if (!currentMatch) {
                currentMatch = sortedMatches.find(f => ['NS', 'TBD', 'PST'].includes(f.fixture.status.short));
              }

              if (currentMatch) {
                setSelectedRound(currentMatch.league.round);
              } else if (sortedMatches.length > 0) {
                // 3. Si todos terminaron, mostrar la última fecha jugada
                setSelectedRound(sortedMatches[sortedMatches.length - 1].league.round);
              }
            }
            setLoadingFixtures(false);
          }

          // Traemos también las STATS
          setLoadingStats(true);
          if (apiId === 129) {
            const nacionalBScorers = [
              { player: { name: 'Lautaro Gordillo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Gimnasia y Tiro (S)' }, goals: { total: 6 } }] },
              { player: { name: 'Enzo González', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Defensores de Belgrano' }, goals: { total: 5 } }] },
              { player: { name: 'Juan Pablo Gobetto', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Deportivo Maipú' }, goals: { total: 5 } }] },
              { player: { name: 'Cristian Menéndez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Gimnasia y Esgrima (J)' }, goals: { total: 4 } }] },
              { player: { name: 'Sebastián Cocimano', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Nueva Chicago' }, goals: { total: 4 } }] },
              { player: { name: 'Vicente Poggi', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Godoy Cruz' }, goals: { total: 4 } }] },
              { player: { name: 'Agustín Lavezzi', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Quilmes' }, goals: { total: 4 } }] },
              { player: { name: 'Ignacio Lago', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Colón (SF)' }, goals: { total: 4 } }] }
            ];
            const nacionalBAssists = [
              { player: { name: 'Lázaro Romero', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Acassuso' }, goals: { assists: 3 } }] },
              { player: { name: 'Juan Manuel Olivares', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Deportivo Morón' }, goals: { assists: 3 } }] },
              { player: { name: 'Ezequiel Aguirre', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Defensores de Belgrano' }, goals: { assists: 3 } }] },
              { player: { name: 'Lautaro Montoya', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Gimnasia y Tiro (S)' }, goals: { assists: 3 } }] },
              { player: { name: 'Lucas Arce', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Godoy Cruz' }, goals: { assists: 3 } }] },
              { player: { name: 'Facundo Castet', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Colón (SF)' }, goals: { assists: 3 } }] },
              { player: { name: 'Marcelo Eggel', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Deportivo Maipú' }, goals: { assists: 3 } }] }
            ];
            const nacionalBYellows = [
              { player: { name: 'Marcos Echeverría', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Temperley' }, cards: { yellow: 6 } }] },
              { player: { name: 'Bruno Nasta', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'San Miguel' }, cards: { yellow: 5 } }] },
              { player: { name: 'Juan Pablo Gobetto', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Deportivo Maipú' }, cards: { yellow: 5 } }] },
              { player: { name: 'Alejo Rodríguez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'All Boys' }, cards: { yellow: 4 } }] },
              { player: { name: 'Federico Bravo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Patronato' }, cards: { yellow: 4 } }] },
              { player: { name: 'Carlos Auzqui', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Agropecuario' }, cards: { yellow: 4 } }] },
              { player: { name: 'Rafael Melo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Estudiantes (BA)' }, cards: { yellow: 4 } }] }
            ];
            const nacionalBReds = [
              { player: { name: 'Fernando Ponce', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Atlético Rafaela' }, cards: { red: 1 } }] },
              { player: { name: 'Alejo Rodríguez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'All Boys' }, cards: { red: 1 } }] },
              { player: { name: 'Federico Bravo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Patronato' }, cards: { red: 1 } }] },
              { player: { name: 'Alex Ruiz', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Acassuso' }, cards: { red: 1 } }] },
              { player: { name: 'Carlos Auzqui', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Agropecuario' }, cards: { red: 1 } }] },
              { player: { name: 'Elías Contreras', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Deportivo Morón' }, cards: { red: 1 } }] },
              { player: { name: 'Kevin Fernández', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Central Norte' }, cards: { red: 1 } }] }
            ];
            setStatsData({ scorers: nacionalBScorers, assists: nacionalBAssists, yellows: nacionalBYellows, reds: nacionalBReds });
          } else if (apiId === 131) {
            const bMetroScorers = [
              { player: { name: 'Martín Giménez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Defensores Unidos' }, goals: { total: 7 } }] },
              { player: { name: 'Tomás Ponzo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Villa Dálmine' }, goals: { total: 6 } }] },
              { player: { name: 'Matías Sosa', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Arsenal de Sarandí' }, goals: { total: 5 } }] },
              { player: { name: 'Máximo Blanco', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Excursionistas' }, goals: { total: 5 } }] },
              { player: { name: 'Ignacio Serpa', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'San Martín (Burzaco)' }, goals: { total: 5 } }] },
              { player: { name: 'Franco Romero', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Deportivo Laferrere' }, goals: { total: 4 } }] },
              { player: { name: 'Gonzalo Gómez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Dock Sud' }, goals: { total: 4 } }] },
              { player: { name: 'Mathías Crocco', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Real Pilar' }, goals: { total: 4 } }] }
            ];
            const bMetroAssists = [
              { player: { name: 'Franco Costa', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Arsenal de Sarandí' }, goals: { assists: 3 } }] },
              { player: { name: 'Santiago Prim', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Sacachispas' }, goals: { assists: 3 } }] },
              { player: { name: 'Tomás Asprea', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Talleres (RdE)' }, goals: { assists: 2 } }] },
              { player: { name: 'Máximo Blanco', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Excursionistas' }, goals: { assists: 2 } }] },
              { player: { name: 'Ignacio Díaz', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'San Martín (Burzaco)' }, goals: { assists: 2 } }] },
              { player: { name: 'Gonzalo Gómez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Dock Sud' }, goals: { assists: 2 } }] },
              { player: { name: 'Leandro Guzmán', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Argentino de Quilmes' }, goals: { assists: 2 } }] },
              { player: { name: 'Matías Sosa', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Arsenal de Sarandí' }, goals: { assists: 2 } }] }
            ];
            const bMetroYellows = [
              { player: { name: 'Carlos Aguirre', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Brown de Adrogué' }, cards: { yellow: 5 } }] },
              { player: { name: 'Franco Mussis', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Villa San Carlos' }, cards: { yellow: 5 } }] },
              { player: { name: 'Ezequiel Merzario', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Sportivo Italiano' }, cards: { yellow: 4 } }] },
              { player: { name: 'Facundo Fabello', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Comunicaciones' }, cards: { yellow: 4 } }] },
              { player: { name: 'Gian Zoratti', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Excursionistas' }, cards: { yellow: 4 } }] },
              { player: { name: 'Patricio Cortizo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Talleres (RdE)' }, cards: { yellow: 4 } }] },
              { player: { name: 'Martín Giménez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Defensores Unidos' }, cards: { yellow: 4 } }] }
            ];
            const bMetroReds = [
              { player: { name: 'Francisco Mattia', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Comunicaciones' }, cards: { red: 1 } }] },
              { player: { name: 'Franco Camejo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Liniers' }, cards: { red: 1 } }] },
              { player: { name: 'Cristian Gómez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Liniers' }, cards: { red: 1 } }] },
              { player: { name: 'Agustín Prokop', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Flandria' }, cards: { red: 1 } }] },
              { player: { name: 'Alan Sotelo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Ituzaingó' }, cards: { red: 1 } }] },
              { player: { name: 'Alejo Lloyaiy', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Villa San Carlos' }, cards: { red: 1 } }] },
              { player: { name: 'Pablo Despósito', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Dock Sud' }, cards: { red: 1 } }] },
              { player: { name: 'Franco Meza', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Dock Sud' }, cards: { red: 1 } }] }
            ];
            setStatsData({ scorers: bMetroScorers, assists: bMetroAssists, yellows: bMetroYellows, reds: bMetroReds });
          } else if (apiId === 132) {
            const primeraCScorers = [
              { player: { name: 'William Giménez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Centro Español' }, goals: { total: 7 } }] },
              { player: { name: 'Brian Romero', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Central Ballester' }, goals: { total: 4 } }] },
              { player: { name: 'Diego Pertossi', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Leandro N. Alem' }, goals: { total: 4 } }] },
              { player: { name: 'Gabriel Urruchúa', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Lugano' }, goals: { total: 4 } }] },
              { player: { name: 'Ciro Campuzano', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Estrella del Sur' }, goals: { total: 3 } }] },
              { player: { name: 'Darío Nami', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'El Porvenir' }, goals: { total: 3 } }] },
              { player: { name: 'Javier Arias', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Cañuelas F.C.' }, goals: { total: 3 } }] },
              { player: { name: 'Juan Cruz Iglesias', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Lugano' }, goals: { total: 3 } }] },
              { player: { name: 'Luciano Cuella', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Berazategui' }, goals: { total: 3 } }] },
              { player: { name: 'Rodolfo Fernández', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Defensores de Cambaceres' }, goals: { total: 3 } }] }
            ];
            const primeraCAssists = [
              { player: { name: 'Juan Cruz Iglesias', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Lugano' }, goals: { assists: 3 } }] },
              { player: { name: 'Ciro Campuzano', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Estrella del Sur' }, goals: { assists: 2 } }] },
              { player: { name: 'Darío Nami', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'El Porvenir' }, goals: { assists: 2 } }] },
              { player: { name: 'Braian Benítez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Berazategui' }, goals: { assists: 2 } }] },
              { player: { name: 'Gabriel Urruchúa', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Lugano' }, goals: { assists: 2 } }] }
            ];
            const primeraCYellows = [
              { player: { name: 'Wilfran Quinto', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Argentino de Rosario' }, cards: { yellow: 5 } }] },
              { player: { name: 'Manuel Correa Medina', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Argentino de Rosario' }, cards: { yellow: 5 } }] },
              { player: { name: 'Julián Andrada', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Argentino de Rosario' }, cards: { yellow: 4 } }] },
              { player: { name: 'Alexander Meza', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Atlas' }, cards: { yellow: 4 } }] },
              { player: { name: 'Rodrigo Campanelli', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Claypole' }, cards: { yellow: 4 } }] },
              { player: { name: 'Tomás Bernal', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'El Porvenir' }, cards: { yellow: 4 } }] },
              { player: { name: 'Braian Benítez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Berazategui' }, cards: { yellow: 4 } }] }
            ];
            const primeraCReds = [
              { player: { name: 'Enzo Ventecol', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Atlas' }, cards: { red: 1 } }] },
              { player: { name: 'Benjamín Gutiérrez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'General Lamadrid' }, cards: { red: 1 } }] },
              { player: { name: 'Mauro Peiro', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Juventud Unida' }, cards: { red: 1 } }] },
              { player: { name: 'Pablo Saucedo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Atlas' }, cards: { red: 1 } }] },
              { player: { name: 'Ezequiel Moschen', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Sacachispas' }, cards: { red: 1 } }] },
              { player: { name: 'Rodrigo Martínez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Puerto Nuevo' }, cards: { red: 1 } }] },
              { player: { name: 'Jean Rousseau', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Yupanqui' }, cards: { red: 1 } }] },
              { player: { name: 'Leandro Villagra', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'El Porvenir' }, cards: { red: 1 } }] }
            ];
            setStatsData({ scorers: primeraCScorers, assists: primeraCAssists, yellows: primeraCYellows, reds: primeraCReds });
          } else if (apiId === 268) {
            const uruguayScorers = [
              { player: { name: 'Matías Arezo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Peñarol' }, goals: { total: 6 } }] },
              { player: { name: 'Salomón Rodríguez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Montevideo City Torque' }, goals: { total: 6 } }] },
              { player: { name: 'Álvaro López', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Albion' }, goals: { total: 6 } }] },
              { player: { name: 'Maximiliano Noble', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Deportivo Maldonado' }, goals: { total: 6 } }] },
              { player: { name: 'Maximiliano Gómez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Nacional' }, goals: { total: 5 } }] },
              { player: { name: 'Federico Martínez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Liverpool' }, goals: { total: 5 } }] },
              { player: { name: 'Brian Montenegro', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Defensor Sporting' }, goals: { total: 4 } }] },
              { player: { name: 'Luis Angulo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Peñarol' }, goals: { total: 4 } }] }
            ];
            const uruguayAssists = [
              { player: { name: 'Leonardo Fernández', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Peñarol' }, goals: { assists: 5 } }] },
              { player: { name: 'Esteban Obregón', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Montevideo City Torque' }, goals: { assists: 4 } }] },
              { player: { name: 'Jonathan Urretaviscaya', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Wanderers' }, goals: { assists: 3 } }] },
              { player: { name: 'Nahuel López', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Progreso' }, goals: { assists: 3 } }] },
              { player: { name: 'Carlos Airala', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Albion' }, goals: { assists: 3 } }] },
              { player: { name: 'Lucas Agazzi', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Defensor Sporting' }, goals: { assists: 3 } }] },
              { player: { name: 'Christian Oliva', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Nacional' }, goals: { assists: 2 } }] },
              { player: { name: 'Iván Manzur', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Racing' }, goals: { assists: 2 } }] }
            ];
            const uruguayReds = [
              { player: { name: 'Agustín Miranda', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Cerro' }, cards: { red: 2 } }] },
              { player: { name: 'Agustín Pinheiro', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Progreso' }, cards: { red: 2 } }] },
              { player: { name: 'Darlin Mencía', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Montevideo Wanderers' }, cards: { red: 1 } }] },
              { player: { name: 'Eric Remedi', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Peñarol' }, cards: { red: 1 } }] },
              { player: { name: 'Yair González', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Boston River' }, cards: { red: 1 } }] },
              { player: { name: 'Cristian Barros', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Cerro' }, cards: { red: 1 } }] },
              { player: { name: 'Ignacio Mujica', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Danubio' }, cards: { red: 1 } }] }
            ];
            setStatsData({ scorers: uruguayScorers, assists: uruguayAssists, yellows: [], reds: uruguayReds });
          } else if (isLocal) {
            const [scorersRes, assistsRes, yellowRes, redRes] = await Promise.all([
              fetch(`https://v3.football.api-sports.io/players/topscorers?league=${apiId}&season=${season}`, { headers }),
              fetch(`https://v3.football.api-sports.io/players/topassists?league=${apiId}&season=${season}`, { headers }),
              fetch(`https://v3.football.api-sports.io/players/topyellowcards?league=${apiId}&season=${season}`, { headers }),
              fetch(`https://v3.football.api-sports.io/players/topredcards?league=${apiId}&season=${season}`, { headers })
            ]);
            const scorersData = await scorersRes.json();
            const assistsData = await assistsRes.json();
            const yellowData = await yellowRes.json();
            const redData = await redRes.json();
            setStatsData({ scorers: scorersData.response || [], assists: assistsData.response || [], yellows: yellowData.response || [], reds: redData.response || [] });
          } else {
            const statsRes = await fetch(`/api/stats?league=${apiId}&season=${season}`);
            const statsJson = await statsRes.json();
            setStatsData({ scorers: statsJson.scorers || [], assists: statsJson.assists || [], yellows: statsJson.yellows || [], reds: statsJson.reds || [] });
          }
          setLoadingStats(false);

        } catch (e) {
          console.error(e);
          setLoadingStats(false);
        } finally {
          setLoadingStandings(false);
        }
      };
      fetchData();
    }
  }, [activeTab, leagueId]);

  useEffect(() => {
    if (activeTab === 'actualidad' && leagueId === 'argentina' && !promediosData && standingsData) {
      const fetchPromediosBg = async () => {
        setLoadingPromedios(true);
        try {
          const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
          if (!isLocal) {
            const r = await fetch(`/api/promedios?league=128`);
            const d = await r.json();
            if (d.response) setPromediosData([d.response]);
          } else {
            const apiKey = import.meta.env.VITE_API_FOOTBALL_KEY;
            const fetchYear = async (yr) => {
              const r = await fetch(`https://v3.football.api-sports.io/standings?league=128&season=${yr}`, { headers: { "x-rapidapi-host": "v3.football.api-sports.io", "x-rapidapi-key": apiKey } });
              const d = await r.json();
              return (d.response && d.response.length > 0) ? d.response[0].league.standings : [];
            };
            const [st24, st25, st26] = await Promise.all([fetchYear(2024), fetchYear(2025), fetchYear(2026)]);
            const tDict = {};
            const processStandings = (yearStandings, yearLabel) => {
              yearStandings.forEach(group => {
                const gName = group[0].group.toLowerCase();
                if (gName.includes('anual') || gName.includes('relegation') || gName.includes('promedio')) return;
                group.forEach(t => {
                  const tId = t.team.id;
                  if (!tDict[tId]) tDict[tId] = { team: t.team, pts24: 0, pj24: 0, pts25: 0, pj25: 0, pts26: 0, pj26: 0, ptsTotal: 0, pjTotal: 0 };
                  if (yearLabel === 2024) { tDict[tId].pts24 += t.points; tDict[tId].pj24 += t.all.played; }
                  if (yearLabel === 2025) { tDict[tId].pts25 += t.points; tDict[tId].pj25 += t.all.played; }
                  if (yearLabel === 2026) { tDict[tId].pts26 += t.points; tDict[tId].pj26 += t.all.played; }
                  tDict[tId].ptsTotal += t.points; tDict[tId].pjTotal += t.all.played;
                });
              });
            };
            processStandings(st24, 2024); processStandings(st25, 2025); processStandings(st26, 2026);
            const pArr = Object.values(tDict).map(t => ({ ...t, promedioVal: t.pjTotal > 0 ? (t.ptsTotal / t.pjTotal) : 0, promedio: (t.pjTotal > 0 ? (t.ptsTotal / t.pjTotal) : 0).toFixed(3) }));
            pArr.sort((a, b) => b.promedioVal - a.promedioVal);
            pArr.forEach((t, i) => t.rank = i + 1);
            // Wrap inside an array to mimic API-Sports standings response format
            setPromediosData([pArr]);
          }
        } catch (e) { console.error(e); } finally { setLoadingPromedios(false); }
      };
      // Solo dispara si hay un grupo "Promedio" o "Relegation" real a sobreescribir.
      if (standingsData.some(g => g && g[0] && g[0].group && g[0].group.toLowerCase().includes('promedio'))) {
        fetchPromediosBg();
      }
    }
  }, [activeTab, leagueId, promediosData, standingsData]);



  useEffect(() => {
    if (leagueId === 'inglaterra') setActiveTorneoTab('premier');
    else if (leagueId === 'espania') setActiveTorneoTab('laliga');
    else if (leagueId === 'italia') setActiveTorneoTab('serie_a');
    else if (leagueId === 'alemania') setActiveTorneoTab('bundesliga');
    else if (leagueId === 'francia') setActiveTorneoTab('ligue1');
    else if (leagueId === 'escocia') setActiveTorneoTab('scottish_league');
    else if (leagueId === 'uruguay') setActiveTorneoTab('campeonato_uruguayo');
    else if (leagueId === 'brasil') setActiveTorneoTab('brasileirao');
    else if (leagueId === 'por_primeira' || leagueId === 'portugal') setActiveTorneoTab('primeira_liga');
    else if (leagueId === 'paises_bajos') setActiveTorneoTab('eredivisie');
    else setActiveTorneoTab('metropolitano');
  }, [leagueId]);


  // Generar años desde 1891 hasta el año actual
  const startYear = 1891;
  const currentYear = new Date().getFullYear();
  const allYears = Array.from({ length: currentYear - startYear + 1 }, (_, i) => (startYear + i).toString());

  // Décadas para salto rápido
  const decadesObj = {};
  for (let y = startYear; y <= currentYear; y++) {
    const dec = Math.floor(y / 10) * 10;
    if (dec >= 1890) decadesObj[dec] = true;
  }
  const decades = Object.keys(decadesObj).map(Number).sort((a, b) => a - b);

  // Default to the most recent tournament
  const INITIAL_TOURNAMENT_ID = history.length > 0 ? history[history.length - 1].id : null;
  const [selectedDecade, setSelectedDecade] = useState(null);
  const [selectedYearStr, setSelectedYearStr] = useState(null);
  const [selectedHistoryId, setSelectedHistoryId] = useState(null); // No renderizar tabla por defecto

  const [selectedH2HTeamId, setSelectedH2HTeamId] = useState(h2hParam ? h2hParam.split('-vs-')[0] : null); // Nuevo estado
  const [h2hScope, setH2hScope] = useState('local'); // 'local' | 'internacional'

  const yearsScrollRef = useRef(null);

  // Filtrar torneos según la solapa
  let filteredHistory = history.filter(t => {
    const name = (t.torneo || "").toLowerCase();
    if (leagueId === 'inglaterra') {
      if (activeTorneoTab === 'fa_cup') return name.includes('fa cup');
      if (activeTorneoTab === 'league_cup') return name.includes('league cup') || name.includes('efl cup') || name.includes('carabao') || name.includes('milk cup') || name.includes('coca-cola cup');
      if (activeTorneoTab === 'community_shield') return name.includes('community shield') || name.includes('charity shield');
      if (activeTorneoTab === 'full_members') return name.includes('full members');
      if (activeTorneoTab === 'premier') return !name.includes('cup') && !name.includes('shield');
    } else if (leagueId === 'espania') {
      if (activeTorneoTab === 'copadelrey') return name.includes('copa del rey') || name.includes('copa del generalísimo') || name.includes('copa del presidente de la república');
      if (activeTorneoTab === 'supercopa_es') return name.includes('supercopa');
      if (activeTorneoTab === 'eva_duarte') return name.includes('eva duarte');
      if (activeTorneoTab === 'copa_liga') return name.includes('copa de la liga');
      if (activeTorneoTab === 'laliga') return name.includes('la liga') || name.includes('primera división');
    } else if (leagueId === 'alemania') {
      if (activeTorneoTab === 'bundesliga') return name.includes('bundesliga');
      if (activeTorneoTab === 'dfb_pokal') return name.includes('dfb-pokal') || name.includes('pokal');
      if (activeTorneoTab === 'supercopa_de_alemania') return name.includes('supercopa');
      if (activeTorneoTab === 'copa_liga_alemania') return name.includes('copa de la liga');
    } else if (leagueId === 'italia') {
      if (activeTorneoTab === 'serie_a') return name.includes('serie a') || name.includes('prima divisione') || name.includes('campeonato italiano');
      if (activeTorneoTab === 'coppa_italia') return name.includes('coppa italia') || name.includes('copa italia');
      if (activeTorneoTab === 'supercoppa_it') return name.includes('supercoppa') || name.includes('super copa');
    } else if (leagueId === 'francia') {
      if (activeTorneoTab === 'ligue1') return name.includes('ligue 1') || name.includes('division 1') || name.includes('campeonato france') || name.includes('liga francesa');
      if (activeTorneoTab === 'coupe_de_france') return name.includes('coupe de france') || name.includes('copa de francia');
      if (activeTorneoTab === 'coupe_de_la_ligue') return name.includes('coupe de la ligue') || name.includes('copa de la liga');
      if (activeTorneoTab === 'trophee_des_champions') return name.includes('trophée des champions') || name.includes('challenge des champions') || name.includes('supercopa de francia');
    } else if (leagueId === 'escocia') {
      if (activeTorneoTab === 'scottish_league') return name.includes('scottish league championship');
      if (activeTorneoTab === 'scottish_cup') return name.includes('scottish cup');
      if (activeTorneoTab === 'scottish_league_cup') return name.includes('scottish league cup');
      if (activeTorneoTab === 'scottish_challenge_cup') return name.includes('scottish challenge cup') || name.includes('challenge cup');
    } else if (leagueId === 'uruguay') {
      if (activeTorneoTab === 'campeonato_uruguayo') return name.includes('campeonato uruguayo') || name.includes('primera división');
      if (activeTorneoTab === 'torneo_intermedio') return name.includes('torneo intermedio');
      if (activeTorneoTab === 'supercopa_uruguaya') return name.includes('supercopa');
      if (activeTorneoTab === 'copa_auf_uruguay') return name.includes('copa auf') || name.includes('copa uruguay');
    } else if (leagueId === 'brasil') {
      if (activeTorneoTab === 'brasileirao') return name.includes('série a') || name.includes('brasileiro') || name.includes('taça brasil') || name.includes('roberto gomes') || name.includes('nacional de clubes') || name.includes('copa brasil') || name.includes('taça de ouro') || name.includes('joão havelange');
      if (activeTorneoTab === 'copa_do_brasil') return name.includes('copa do brasil');
      if (activeTorneoTab === 'supercopa_do_brasil') return name.includes('supercopa');
    } else if (leagueId === 'por_primeira' || leagueId === 'portugal') {
      if (activeTorneoTab === 'campeonato_de_portugal') return name.includes('campeonato de portugal');
      if (activeTorneoTab === 'primeira_liga') return name.includes('primeira liga') || name.includes('primeira divisão') || name.includes('campeonato da liga');
      if (activeTorneoTab === 'taca_de_portugal') return name.includes('taça de portugal') || name.includes('copa de portugal');
      if (activeTorneoTab === 'supertaca_candido_de_oliveira') return name.includes('supertaça');
      if (activeTorneoTab === 'taca_da_liga') return name.includes('taça da liga') || name.includes('copa de la liga');
    } else if (leagueId === 'paises_bajos') {
      if (activeTorneoTab === 'eredivisie') return name.includes('eredivisie');
      if (activeTorneoTab === 'hoofdklasse') return name.includes('campeonato');
      if (activeTorneoTab === 'knvb_beker') return name.includes('knvb') || name.includes('beker') || name.includes('copa');
      if (activeTorneoTab === 'johan_cruyff') return name.includes('johan cruyff') || name.includes('supercopa');
    } else if (leagueId === 'mex_liga_mx' || leagueId === 'mexico') {
      if (activeTorneoTab === 'liga_mx') return name === 'liga mx';
      if (activeTorneoTab === 'copa_mx') return name === 'copa mx';
      if (activeTorneoTab === 'campeon_de_campeones') return name === 'campeón de campeones';
      if (activeTorneoTab === 'supercopa_mx') return name === 'supercopa mx';
      if (activeTorneoTab === 'supercopa_liga_mx') return name === 'supercopa de la liga mx';
    } else {
      if (activeTorneoTab === 'copas') return name.includes('copa') || name.includes('superfinal') || name.includes('trofeo de campeones') || name.includes('honor');
      if (activeTorneoTab === 'nacional') return name.includes('nacional') && !name.includes('primera división') && !name.includes('internacional');
      if (activeTorneoTab === 'metropolitano') return (!name.includes('copa') && !name.includes('superfinal') && !name.includes('trofeo de campeones') && !name.includes('honor')) && !(name.includes('nacional') && !name.includes('internacional') && !name.includes('primera división'));
    }
    return true;
  });

  const validYears = allYears.filter(y => filteredHistory.some(h => h.anio === y));

  const selectYear = (year) => {
    setSelectedYearStr(year);
    const decadeOfThisYear = Math.floor(parseInt(year) / 10) * 10;
    setSelectedDecade(decadeOfThisYear);

    const tForYear = filteredHistory.filter(h => h.anio === year);
    if (tForYear.length > 0) {
      setSelectedHistoryId(tForYear[0].id);
    } else {
      setSelectedHistoryId(null);
    }

    setTimeout(() => {
      const el = document.getElementById('year-btn-' + year);
      if (el && yearsScrollRef.current) {
        const container = yearsScrollRef.current;
        const scrollLeft = el.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (el.clientWidth / 2);
        container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
      }
    }, 50);
  };

  const navigateYears = (direction) => {
    if (validYears.length === 0) return;
    if (!selectedYearStr) {
      selectYear(direction === 'left' ? validYears[validYears.length - 1] : validYears[0]);
      return;
    }
    const currentIndex = validYears.indexOf(selectedYearStr);
    if (currentIndex === -1) {
      selectYear(validYears[validYears.length - 1]);
      return;
    }

    let nextIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= validYears.length) nextIndex = validYears.length - 1;

    if (nextIndex !== currentIndex) {
      selectYear(validYears[nextIndex]);
    }
  };

  useEffect(() => {
    if (validYears.length > 0) {
      selectYear(validYears[validYears.length - 1]);
    } else {
      setSelectedHistoryId(null);
      setSelectedYearStr(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTorneoTab, leagueId]);

  const selectedTournament = filteredHistory.find(h => h.id === selectedHistoryId) || null;
  const selectedYear = selectedTournament ? selectedTournament.anio : currentYear.toString();

  const [selectedMatchupId, setSelectedMatchupId] = useState(matchups.length > 0 ? matchups[0].id : null);
  const selectedMatchup = matchups.find(m => m.id === selectedMatchupId) || matchups[0];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  // Si no hay clubes cargados (ej. Brasileirao, Mundial), el estado activo siempre se fuerza a 'actualidad' 
  // para que el usuario no vea una pantalla en blanco y solo navegue la API en vivo.
  useEffect(() => {
    if (clubs.length === 0 && activeTab !== 'actualidad') {
      setActiveTab('actualidad');
    }
  }, [clubs.length, activeTab]);

  const isFromLive = location.state?.fromLive;

  const breadcrumbPaths = isFromLive ? [
    { name: 'Resultados en Vivo', url: '/resultados' },
    { name: currentLeague.name, url: `/liga/${leagueId}` }
  ] : [
    { name: 'Clubes del Mundo', url: '/leagues' },
    { name: currentLeague.name, url: `/liga/${leagueId}` }
  ];

  if (activeTab === 'temporadas') breadcrumbPaths.push({ name: 'Campeonatos' });
  else if (activeTab === 'enfrentamientos') {
    if (selectedH2HTeamId) {
      const bClub = clubs.find(c => c.id === selectedH2HTeamId);
      breadcrumbPaths.push({ name: 'Historiales', url: '#' }); // Mantiene en H2H
      breadcrumbPaths.push({ name: bClub ? (bClub.datos?.nombre_corto || bClub.datos?.nombre_completo) : 'Equipo' });
    } else {
      breadcrumbPaths.push({ name: 'Historiales' });
    }
  }
  else if (activeTab === 'actualidad') breadcrumbPaths.push({ name: 'Actualidad' });

  const handleBack = () => {
    if (activeTab === 'enfrentamientos' && selectedH2HTeamId) {
      setSelectedH2HTeamId(null);
    } else if (clubs.length === 0 || isCup || isFromLive) {
      navigate(-1);
    } else if (activeTab !== 'clubes') {
      setActiveTab('clubes');
    } else {
      navigate('/');
    }
  };

  const getZoneStyle = (desc, rank) => {
    if (!desc) return { color: 'transparent', title: '' };
    const d = desc.toLowerCase();

    // Campeón / Primer lugar
    if (rank === 1) return { color: '#fbbf24', title: 'Campeón / Líder' }; // Gold

    // Europa
    if (d.includes('champions league')) return { color: '#3b82f6', title: desc }; // Blue
    if (d.includes('europa league')) return { color: '#f97316', title: desc }; // Orange
    if (d.includes('conference league')) return { color: '#22c55e', title: desc }; // Green

    // Sudamérica
    if (d.includes('libertadores')) return { color: '#3b82f6', title: desc }; // Blue
    if (d.includes('sudamericana')) return { color: '#10b981', title: desc }; // Emerald

    // Liguillas / Playoffs / Ascensos
    if (d.includes('play-off') || d.includes('playoff') || d.includes('promotion') || d.includes('ascenso') || d.includes('liguilla') || d.includes('next round')) {
      return { color: '#a855f7', title: desc }; // Purple
    }

    // Descensos
    if (d.includes('relegation') || d.includes('descenso')) {
      return { color: '#ef4444', title: desc }; // Red
    }

    return { color: 'transparent', title: '' };
  };

  return (
    <div style={{ padding: '2rem', minHeight: '100vh', maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
      <SEO 
        title={`${currentLeague.name} - DataFútbol`}
        description={`Repasá la historia, todos los campeones y la actualidad de ${currentLeague.name}.`}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "SportsEvent",
          "name": currentLeague.name,
          "description": `Historia y actualidad de ${currentLeague.name}`,
          "url": `https://datafutbol.app/liga/${leagueId}`,
          "competitor": clubs.map(c => ({
            "@type": "SportsTeam",
            "name": c.datos?.nombre_completo || c.datos?.nombre_corto || c.id
          }))
        }}
      />

      <Breadcrumbs paths={breadcrumbPaths} onBack={handleBack} />

      <h1 className="title-font animate-fade-in" style={{ fontSize: '3.5rem', marginBottom: '1rem', textAlign: 'center' }}>
        <span className="notranslate" style={{ color: 'var(--accent-gold)' }}>{currentLeague.name}</span>
      </h1>
      <p className="animate-fade-in" style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.2rem' }}>
        Explora todos los equipos de la élite o repasa el extenso historial de campeonatos.
      </p>

      <LeagueTabs activeTab={activeTab} setActiveTab={setActiveTab} clubsLength={clubs.length} />

      <AnimatePresence mode="wait">
        {activeTab === 'actualidad' && (
          <motion.div
            key="actualidad"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.1 } }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div style={{ textAlign: 'center', padding: '2rem', border: '1px dashed rgba(239, 68, 68, 0.5)', borderRadius: '16px', background: 'rgba(239, 68, 68, 0.05)' }}>
              <p style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>EN DIRECTO - TEMPORADA VIGENTE (25/26)</p>
              <p style={{ color: 'var(--text-muted)' }}>Los datos de clasificación y estadísticas se conectarán a la API externa de fútbol en vivo.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: ['champions', 'europa_league', 'conference'].includes(leagueId) ? 'column' : 'column-reverse', gap: '2rem' }}>
              {/* Layout tipo Dashboard */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>

                {/* Cuadro de Llaves (Si es Copa Europea) */}
                {isCup && knockoutData && knockoutData.length > 0 && (
                  <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', gridColumn: '1 / -1', background: 'rgba(30, 41, 59, 0.4)' }}>
                    <h3 className="title-font" style={{ fontSize: '1.4rem', color: '#fde68a', marginBottom: '1.5rem', borderBottom: '1px solid rgba(251, 191, 36, 0.2)', paddingBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      ⚔️ Cuadro de Eliminatorias Finales
                    </h3>
                    <div className="hide-scrollbar" style={{ overflowX: 'auto', paddingBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '2rem', minWidth: '1000px' }}>
                        {['Round of 64', 'Round of 32', 'Round of 16', 'Quarter-finals', 'Semi-finals', 'Final'].map((roundName, colIndex, arr) => {
                          let matches = knockoutData.filter(f => f.league.round.includes(roundName));

                          // PLACHOLDERS SI LA API TODAVÍA NO ARMÓ LAS LLAVES FUTURAS
                          if (matches.length === 0) {
                            if (roundName === 'Semi-finals') {
                              matches = [
                                { fixture: { id: 'sf1', date: 'placeholder', venue: { name: 'A definir' } }, teams: { home: { name: 'Ganador Llave 1' }, away: { name: 'Ganador Llave 2' } }, goals: {}, score: {} },
                                { fixture: { id: 'sf2', date: 'placeholder', venue: { name: 'A definir' } }, teams: { home: { name: 'Ganador Llave 3' }, away: { name: 'Ganador Llave 4' } }, goals: {}, score: {} }
                              ];
                            } else if (roundName === 'Final') {
                              // Estadios Reales de las Finales 2026
                              let finalStadium = 'Estadio a definir';
                              let finalDate = 'placeholder';
                              if (leagueId === 'champions') { finalStadium = 'Puskás Aréna, Budapest'; finalDate = '30/5/2026'; }
                              if (leagueId === 'europa_league') { finalStadium = 'Beşiktaş Park, Istanbul'; finalDate = '20/5/2026'; }
                              if (leagueId === 'conference') { finalStadium = 'Red Bull Arena, Leipzig'; finalDate = '27/5/2026'; }
                              if (leagueId === 'fa_cup') { finalStadium = 'Wembley Stadium, London'; finalDate = '16/5/2026'; }

                              matches = [
                                { fixture: { id: 'fin', date: finalDate, venue: { name: finalStadium } }, teams: { home: { name: 'Ganador Semifinal 1' }, away: { name: 'Ganador Semifinal 2' } }, goals: {}, score: {} }
                              ];
                            }
                          }

                          if (matches.length === 0) return null;

                          return (
                            <div key={roundName} style={{ display: 'flex', flexDirection: 'column', width: colIndex === arr.length - 1 ? '320px' : '260px', gap: '1rem', justifyContent: 'space-around' }}>
                              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem', fontSize: '0.9rem', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{roundName.replace('-', ' ')}</h4>

                              {(() => {
                                const ties = {};
                                matches.forEach(m => {
                                  const homeId = m.teams.home.id || m.teams.home.name;
                                  const awayId = m.teams.away.id || m.teams.away.name;
                                  const key = [String(homeId), String(awayId)].sort().join('-');
                                  if (!ties[key]) ties[key] = [];
                                  ties[key].push(m);
                                });

                                // Sort and map each tie into a single Global Match Component
                                const groupedMatches = Object.values(ties).map(matchList => {
                                  matchList.sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date));
                                  const ida = matchList[0];
                                  const vuelta = matchList.length > 1 ? matchList[1] : null;

                                  const isPlaceholder = ida.fixture.date === 'placeholder' || !ida.fixture.date.includes('-');

                                  if (isPlaceholder) {
                                    return {
                                      id: ida.fixture.id,
                                      home: ida.teams.home, away: ida.teams.away,
                                      homeGoals: '-', awayGoals: '-',
                                      homeWinner: false, awayWinner: false,
                                      subtext: (ida.fixture.date === 'placeholder' ? 'Por definir' : ida.fixture.date) + ' · ' + (ida.fixture.venue?.name || 'A definir')
                                    };
                                  }

                                  const isPlayedIda = ida.fixture.status.short !== 'NS' && ida.fixture.status.short !== 'TBD';
                                  const isPlayedVuelta = vuelta ? (vuelta.fixture.status.short !== 'NS' && vuelta.fixture.status.short !== 'TBD') : false;

                                  let hG = isPlayedIda ? (ida.goals.home ?? 0) : '-';
                                  let aG = isPlayedIda ? (ida.goals.away ?? 0) : '-';

                                  if (vuelta && isPlayedVuelta && hG !== '-') {
                                    hG += (vuelta.goals.away ?? 0);
                                    aG += (vuelta.goals.home ?? 0);
                                  }

                                  let hP = isPlayedIda ? ida.score?.penalty?.home : null;
                                  let aP = isPlayedIda ? ida.score?.penalty?.away : null;
                                  if (vuelta && isPlayedVuelta && vuelta.score?.penalty?.home != null) {
                                    aP = vuelta.score.penalty.home;
                                    hP = vuelta.score.penalty.away;
                                  }

                                  let subtext = '';
                                  if (isPlayedIda && !isPlayedVuelta && vuelta) {
                                    subtext = `Ida: ${ida.goals.home}-${ida.goals.away} | Vta: ${new Date(vuelta.fixture.date).toLocaleDateString()}`;
                                  } else if (isPlayedIda && isPlayedVuelta) {
                                    subtext = `Ida: ${ida.goals.home}-${ida.goals.away} | Vta: ${vuelta.goals.away}-${vuelta.goals.home}`;
                                  } else {
                                    subtext = `${new Date(ida.fixture.date).toLocaleDateString()} · ${ida.fixture.venue?.name || 'A definir'}`;
                                  }

                                  let hW = false; let aW = false;
                                  if (hG !== '-' && aG !== '-') {
                                    if (hG > aG) hW = true;
                                    else if (aG > hG) aW = true;
                                    else if (hP != null && aP != null) {
                                      hW = hP > aP; aW = aP > hP;
                                    } else {
                                      hW = vuelta ? vuelta.teams.away.winner : ida.teams.home.winner;
                                      aW = vuelta ? vuelta.teams.home.winner : ida.teams.away.winner;
                                    }
                                  }

                                  return {
                                    id: ida.fixture.id, home: ida.teams.home, away: ida.teams.away,
                                    homeGoals: hG, awayGoals: aG, homePen: hP, awayPen: aP,
                                    homeWinner: hW === true, awayWinner: aW === true, subtext
                                  };
                                });

                                return groupedMatches.map((gm) => (
                                  <div key={gm.id} style={{ flex: roundName === 'Final' && groupedMatches.length === 1 ? 1 : 'none', display: 'flex', flexDirection: 'column', justifyContent: roundName === 'Final' ? 'center' : 'flex-start' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', background: roundName === 'Final' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: roundName === 'Final' ? '2px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.05)' }}>

                                      <div style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', marginBottom: '0.8rem', textAlign: 'center', opacity: 0.8, textTransform: 'uppercase', fontWeight: groupedMatches.length === 1 ? 'normal' : 'bold' }}>
                                        {gm.subtext}
                                      </div>

                                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                          {gm.home.logo ? <img src={gm.home.logo} style={{ width: '20px' }} alt="" onError={(e) => e.target.style.display = 'none'} /> : <div style={{ width: '20px' }} />}
                                          <span style={{ color: gm.homeWinner ? 'white' : 'var(--text-muted)', fontWeight: gm.homeWinner ? 'bold' : 'normal', fontSize: '0.9rem' }}>{gm.home.name || 'A definir'}</span>
                                        </div>
                                        <span style={{ fontWeight: 'bold', color: 'white', background: gm.homeWinner ? '#4ade80' : 'rgba(255,255,255,0.1)', padding: '0.1rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                                          {gm.homeGoals}
                                          {gm.homePen != null ? ` (p.${gm.homePen})` : ''}
                                        </span>
                                      </div>

                                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                          {gm.away.logo ? <img src={gm.away.logo} style={{ width: '20px' }} alt="" onError={(e) => e.target.style.display = 'none'} /> : <div style={{ width: '20px' }} />}
                                          <span style={{ color: gm.awayWinner ? 'white' : 'var(--text-muted)', fontWeight: gm.awayWinner ? 'bold' : 'normal', fontSize: '0.9rem' }}>{gm.away.name || 'A definir'}</span>
                                        </div>
                                        <span style={{ fontWeight: 'bold', color: 'white', background: gm.awayWinner ? '#4ade80' : 'rgba(255,255,255,0.1)', padding: '0.1rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                                          {gm.awayGoals}
                                          {gm.awayPen != null ? ` (p.${gm.awayPen})` : ''}
                                        </span>
                                      </div>

                                    </div>
                                  </div>
                                ));
                              })()}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )}



                {/* Panel Goleadores */}
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                  <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1.2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    ⚽ Top Goleadores
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {loadingStats && <div style={{ color: 'var(--text-muted)' }}>Cargando cañoneros...</div>}
                    {!loadingStats && statsData.scorers?.length === 0 && <div style={{ color: 'var(--text-muted)' }}>Sin datos.</div>}
                    {statsData.scorers?.slice(0, 10).map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                          <img src={item.player.photo} style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }} alt="" />
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: 'white', fontWeight: idx === 0 ? 'bold' : 'normal' }}>{item.player.name}</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.statistics[0].team.name}</span>
                          </div>
                        </div>
                        <span style={{ fontWeight: 'bold', color: 'var(--accent-gold)', fontSize: '1.2rem' }}>{item.statistics[0].goals.total}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Panel Asistencias */}
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                  <h4 style={{ color: '#4ade80', marginBottom: '1.2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    👟 Asistencias
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {loadingStats && <div style={{ color: 'var(--text-muted)' }}>Cargando genios...</div>}
                    {!loadingStats && statsData.assists?.length === 0 && <div style={{ color: 'var(--text-muted)' }}>Sin datos.</div>}
                    {statsData.assists?.slice(0, 10).map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                          <img src={item.player.photo} style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }} alt="" />
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: 'white', fontWeight: idx === 0 ? 'bold' : 'normal' }}>{item.player.name}</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.statistics[0].team.name}</span>
                          </div>
                        </div>
                        <span style={{ fontWeight: 'bold', color: '#4ade80', fontSize: '1.2rem' }}>{item.statistics[0].goals.assists}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Panel Amarillas */}
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                  <h4 style={{ color: '#facc15', marginBottom: '1.2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    🟨 Amarillas
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {loadingStats && <div style={{ color: 'var(--text-muted)' }}>Cargando amonestados...</div>}
                    {!loadingStats && statsData.yellows?.length === 0 && <div style={{ color: 'var(--text-muted)' }}>Sin datos.</div>}
                    {statsData.yellows?.slice(0, 10).map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                          <img src={item.player.photo} style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }} alt="" />
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: 'white' }}>{item.player.name}</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.statistics[0].team.name}</span>
                          </div>
                        </div>
                        <span style={{ fontWeight: 'bold', color: 'black', background: '#facc15', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '1rem' }}>{item.statistics[0].cards.yellow}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Panel Rojas */}
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                  <h4 style={{ color: '#ef4444', marginBottom: '1.2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    🟥 Rojas
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {loadingStats && <div style={{ color: 'var(--text-muted)' }}>Cargando expulsados...</div>}
                    {!loadingStats && statsData.reds?.length === 0 && <div style={{ color: 'var(--text-muted)' }}>Sin datos.</div>}
                    {statsData.reds?.slice(0, 10).map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                          <img src={item.player.photo} style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }} alt="" />
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: 'white' }}>{item.player.name}</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.statistics[0].team.name}</span>
                          </div>
                        </div>
                        <span style={{ fontWeight: 'bold', color: 'white', background: '#ef4444', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '1rem' }}>{item.statistics[0].cards.red}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Columna Grande: Tabla de Clasificación o Fixture */}
              <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', gridColumn: '1 / -1' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <h3 className="title-font" style={{ fontSize: '1.4rem' }}>{viewMode === 'tabla' ? '⭐ Clasificación' : '📅 Fixture Completo'}</h3>

                  {!isCup && (
                    <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(0,0,0,0.4)', padding: '0.3rem', borderRadius: '8px' }}>
                      <button
                        onClick={() => setViewMode('tabla')}
                        style={{ background: viewMode === 'tabla' ? 'var(--accent-gold)' : 'transparent', color: viewMode === 'tabla' ? 'black' : 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                      >Ver Posiciones</button>
                      <button
                        onClick={() => setViewMode('fixture')}
                        style={{ background: viewMode === 'fixture' ? 'var(--accent-gold)' : 'transparent', color: viewMode === 'fixture' ? 'black' : 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                      >Ver Fixture</button>
                    </div>
                  )}

                  {viewMode === 'fixture' && fixtureData && (
                    <select
                      value={selectedRound}
                      onChange={(e) => setSelectedRound(e.target.value)}
                      style={{ background: 'rgba(0,0,0,0.8)', color: 'white', border: '1px solid var(--accent-gold)', padding: '0.5rem 1rem', borderRadius: '8px', outline: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem' }}
                    >
                      {[...new Set(fixtureData.map(f => f.league.round))].map(round => (
                        <option key={round} value={round}>
                          {String(round).replace(/Regular Season - /i, 'Fecha ').replace(/Apertura - /i, 'Apertura Fecha ').replace(/Clausura - /i, 'Clausura Fecha ')}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                {viewMode === 'tabla' ? (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    {standingsData ? [...standingsData].filter((g, i, arr) => {
                      if (arr.some(og => og[0].group.toLowerCase().includes('championship') || og[0].group.toLowerCase().includes('relegation'))) {
                        return g[0].group.toLowerCase().includes('championship') || g[0].group.toLowerCase().includes('relegation');
                      }
                      return true;
                    }).sort((a, b) => {
                      const rankA = a[0].group.includes('Group A') || a[0].group.includes('Zona A') ? 1 :
                        a[0].group.includes('Group B') || a[0].group.includes('Zona B') ? 2 :
                          a[0].group.includes('Anual') ? 3 :
                            a[0].group.includes('Promedio') ? 4 : 5;
                      const rankB = b[0].group.includes('Group A') || b[0].group.includes('Zona A') ? 1 :
                        b[0].group.includes('Group B') || b[0].group.includes('Zona B') ? 2 :
                          b[0].group.includes('Anual') ? 3 :
                            b[0].group.includes('Promedio') ? 4 : 5;
                      return rankA - rankB;
                    }).map((group, gIdx) => (
                      <div key={gIdx} style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                        {standingsData.length > 1 && (
                          <div style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--accent-gold)', fontWeight: 'bold', padding: '0.8rem', textAlign: 'center', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            {String(group[0].group).replace(/League phase/i, 'Fase de Liga').replace(/Group/gi, 'Grupo')}
                          </div>
                        )}
                        <div style={{ overflowX: 'auto' }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', minWidth: '400px' }}>
                            <thead>
                              <tr style={{ color: 'var(--text-muted)', fontSize: '0.85rem', background: 'rgba(255,255,255,0.02)' }}>
                                <th style={{ textAlign: 'left', padding: '0.8rem' }}>Equipo</th>
                                {String(group[0].group).toLowerCase().includes('promedio') || String(group[0].group).toLowerCase().includes('relegation') ? (
                                  <><th>24</th><th>25</th><th>26</th><th>PTS</th><th>PJ</th><th style={{ color: 'var(--accent-gold)' }}>PROM</th></>
                                ) : (
                                  <><th>PJ</th><th>G</th><th>E</th><th>P</th><th>PTS</th></>
                                )}
                              </tr>
                            </thead>
                            <tbody>
                              {(String(group[0].group).toLowerCase().includes('promedio') || String(group[0].group).toLowerCase().includes('relegation')) && promediosData ? promediosData[0].map((t) => (
                                <tr key={t.team.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: t.rank % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent', borderLeft: t.rank >= promediosData[0].length - 2 ? '4px solid #ef4444' : '4px solid transparent' }}>
                                  <td style={{ textAlign: 'left', padding: '0.8rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: t.rank <= 4 ? 'bold' : 'normal', color: 'white' }}>
                                    <span style={{ color: t.rank >= promediosData[0].length - 2 ? '#ef4444' : 'var(--text-muted)', width: '20px' }}>{t.rank}</span>
                                    <img src={t.team.logo} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: t.rank >= promediosData[0].length - 2 ? '#fca5a5' : 'white' }}>{t.team.name}</span>
                                  </td>
                                  <td style={{ color: 'var(--text-muted)' }}>{t.pts24}</td>
                                  <td style={{ color: 'var(--text-muted)' }}>{t.pts25}</td>
                                  <td style={{ color: 'var(--text-muted)' }}>{t.pts26}</td>
                                  <td style={{ color: 'white', fontWeight: 'bold' }}>{t.ptsTotal}</td>
                                  <td style={{ color: 'var(--text-muted)' }}>{t.pjTotal}</td>
                                  <td style={{ fontWeight: 'bold', color: 'var(--accent-gold)', fontSize: '1.2rem', background: 'rgba(251, 191, 36, 0.1)' }}>{t.promedio}</td>
                                </tr>
                              )) : (String(group[0].group).toLowerCase().includes('promedio') || String(group[0].group).toLowerCase().includes('relegation')) && loadingPromedios ? (
                                <tr><td colSpan="7" style={{ padding: '2rem', color: 'var(--text-muted)' }}>Calculando promedios reales...</td></tr>
                              ) : group.map((t) => {
                                const zone = getZoneStyle(t.description, t.rank);
                                return (
                                  <tr key={t.team.id} title={zone.title} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: t.rank % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent', borderLeft: `4px solid ${zone.color}` }}>
                                    <td style={{ textAlign: 'left', padding: '0.8rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: t.rank <= 4 ? 'bold' : 'normal', color: t.rank <= 4 ? 'white' : 'var(--text-muted)' }}>
                                      <span style={{ color: zone.color !== 'transparent' ? zone.color : 'var(--text-muted)', width: '20px', fontWeight: 'bold' }}>{t.rank}</span>
                                      <img src={t.team.logo} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.team.name}</span>
                                      {renderStatusBadge(t.description, t.rank)}
                                    </td>
                                    <td style={{ color: 'var(--text-muted)' }}>{t.all.played}</td>
                                    <td style={{ color: 'var(--text-muted)' }}>{t.all.win}</td>
                                    <td style={{ color: 'var(--text-muted)' }}>{t.all.draw}</td>
                                    <td style={{ color: 'var(--text-muted)' }}>{t.all.lose}</td>
                                    <td style={{ fontWeight: 'bold', color: 'var(--accent-gold)', fontSize: '1.05rem' }}>{t.points}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )) : (
                      <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', width: '100%' }}>
                        {loadingStandings ? 'Conectando túnel oficial y cargando posiciones reales mundiales...' : 'No disponible'}
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
                    {loadingFixtures ? (
                      <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', width: '100%' }}>
                        Cargando calendario de partidos...
                      </div>
                    ) : fixtureData ? (
                      fixtureData.filter(f => f.league.round === selectedRound).map(m => (
                        <div key={m.fixture.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem 1.5rem', flexWrap: 'wrap', gap: '1rem', transition: 'all 0.2s' }}
                          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(251, 191, 36, 0.05)'}
                          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                        >

                          {/* Fecha y Estado */}
                          <div style={{ flex: '1 1 100%', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem', marginBottom: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                            {new Date(m.fixture.date).toLocaleDateString()} - {new Date(m.fixture.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            {' | '}{m.fixture.status.short === 'FT' ? 'Finalizado' : m.fixture.status.short === 'NS' ? 'Por jugar' : m.fixture.status.short === 'CANC' ? 'Cancelado' : m.fixture.status.short === 'PST' ? 'Postergado' : 'En vivo'}
                          </div>

                          {/* Equipo Local */}
                          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem', textAlign: 'right' }}>
                            <span style={{ fontWeight: m.teams.home.winner ? 'bold' : 'normal', color: m.teams.home.winner ? 'white' : 'var(--text-muted)' }}>{m.teams.home.name}</span>
                            <img src={m.teams.home.logo} alt="" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
                          </div>

                          {/* Resultado */}
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.3)', padding: '0.5rem 1rem', borderRadius: '8px', minWidth: '80px', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--accent-gold)' }}>
                            <span>{m.goals.home ?? '-'}</span>
                            <span style={{ color: 'rgba(255,255,255,0.3)' }}>-</span>
                            <span>{m.goals.away ?? '-'}</span>
                          </div>

                          {/* Equipo Visitante */}
                          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1rem', textAlign: 'left' }}>
                            <img src={m.teams.away.logo} alt="" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
                            <span style={{ fontWeight: m.teams.away.winner ? 'bold' : 'normal', color: m.teams.away.winner ? 'white' : 'var(--text-muted)' }}>{m.teams.away.name}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', width: '100%' }}>
                        No hay fixture disponible.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'clubes' && (
          <motion.div
            key="clubes"
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.1 } }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '2rem'
            }}
          >
            {clubs.map(club => {
              // Fallbacks for colors just in case
              const colors = club.equipacion?.[club.equipacion.length - 1] || {};
              const c1 = colors.c1 || '#334155';
              const c2 = colors.c2 || c1;
              let logoUrl = `/escudos/${club.id}.png`;
              if (club.datos?.escudo_actual) {
                logoUrl = club.datos.escudo_actual;
              } else if (club.evolucion_escudos && club.evolucion_escudos.length > 0) {
                const current = club.evolucion_escudos.find(e => e.ano === 'Actualidad' || e.ano === '2024');
                if (current && current.url) logoUrl = current.url;
              }

              return (
                <motion.div variants={item} key={club.id}>
                  <Link
                    to={`/liga/${leagueId}/club/${club.id}`}
                    className="glass-card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      textDecoration: 'none',
                      color: 'white',
                      height: '100%',
                    }}
                  >
                    {/* Visual Header Representation of the Club */}
                    <div style={{ height: '120px', width: '100%', display: 'flex' }}>
                      <div style={{ flex: 1, background: c1 }}></div>
                      {c2 !== c1 && <div style={{ flex: 1, background: c2 }}></div>}
                    </div>

                    {/* Info Container */}
                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                      {/* Real Shield with Fallback */}
                      <div style={{
                        width: '70px', height: '70px', borderRadius: '50%', background: 'var(--glass-bg)',
                        marginTop: '-45px', border: '3px solid var(--bg-card)', marginBottom: '1rem',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold',
                        overflow: 'hidden', zIndex: 5, backdropFilter: 'blur(4px)', boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                      }}>
                        <img
                          src={logoUrl}
                          alt={`Escudo ${club.id}`}
                          style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback Initials */}
                        <div style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>
                          {club.datos?.nombre_corto?.charAt(0) || club.datos?.nombre_completo?.charAt(0) || club.id.charAt(0).toUpperCase()}
                        </div>
                      </div>

                      <h3 className="title-font notranslate" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                        {club.datos?.nombre_corto || club.datos?.nombre_oficial || club.datos?.nombre_completo}
                      </h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 'auto' }}>
                        Fundado: {club.datos?.fundacion?.match(/\d{4}/)?.[0] || 'Desconocido'}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}


        {activeTab === 'temporadas' && (
          <motion.div
            key="temporadas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="glass-panel"
            style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '85vh', overflow: 'hidden', borderRadius: '24px' }}
          >
            {/* SUB-TABS: CATEGORÍAS DE TORNEOS */}
            <div style={{ background: 'rgba(0,0,0,0.6)', padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {leagueId === 'inglaterra' ? (
                <>
                  <button onClick={() => setActiveTorneoTab('premier')} style={{ background: activeTorneoTab === 'premier' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'premier' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'premier' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Premier League / First Div
                  </button>
                  <button onClick={() => setActiveTorneoTab('fa_cup')} style={{ background: activeTorneoTab === 'fa_cup' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'fa_cup' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'fa_cup' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    FA Cup
                  </button>
                  <button onClick={() => setActiveTorneoTab('league_cup')} style={{ background: activeTorneoTab === 'league_cup' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'league_cup' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'league_cup' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    League Cup / EFL
                  </button>
                  <button onClick={() => setActiveTorneoTab('community_shield')} style={{ background: activeTorneoTab === 'community_shield' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'community_shield' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'community_shield' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Community Shield
                  </button>
                  <button onClick={() => setActiveTorneoTab('full_members')} style={{ background: activeTorneoTab === 'full_members' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'full_members' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'full_members' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Full Members' Cup
                  </button>
                </>
              ) : leagueId === 'espania' ? (
                <>
                  <button onClick={() => setActiveTorneoTab('laliga')} style={{ background: activeTorneoTab === 'laliga' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'laliga' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'laliga' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    La Liga
                  </button>
                  <button onClick={() => setActiveTorneoTab('copadelrey')} style={{ background: activeTorneoTab === 'copadelrey' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'copadelrey' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'copadelrey' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Copa del Rey
                  </button>
                  <button onClick={() => setActiveTorneoTab('supercopa_es')} style={{ background: activeTorneoTab === 'supercopa_es' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'supercopa_es' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'supercopa_es' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Supercopa de España
                  </button>
                  <button onClick={() => setActiveTorneoTab('eva_duarte')} style={{ background: activeTorneoTab === 'eva_duarte' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'eva_duarte' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'eva_duarte' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Copa Eva Duarte
                  </button>
                  <button onClick={() => setActiveTorneoTab('copa_liga')} style={{ background: activeTorneoTab === 'copa_liga' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'copa_liga' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'copa_liga' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Copa de la Liga
                  </button>
                </>
              ) : leagueId === 'italia' ? (
                <>
                  <button onClick={() => setActiveTorneoTab('serie_a')} style={{ background: activeTorneoTab === 'serie_a' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'serie_a' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'serie_a' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Serie A
                  </button>
                  <button onClick={() => setActiveTorneoTab('coppa_italia')} style={{ background: activeTorneoTab === 'coppa_italia' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'coppa_italia' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'coppa_italia' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Coppa Italia
                  </button>
                  <button onClick={() => setActiveTorneoTab('supercoppa_it')} style={{ background: activeTorneoTab === 'supercoppa_it' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'supercoppa_it' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'supercoppa_it' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Supercoppa Italiana
                  </button>
                </>
              ) : leagueId === 'alemania' ? (
                <>
                  <button onClick={() => setActiveTorneoTab('bundesliga')} style={{ background: activeTorneoTab === 'bundesliga' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'bundesliga' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'bundesliga' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Bundesliga
                  </button>
                  <button onClick={() => setActiveTorneoTab('dfb_pokal')} style={{ background: activeTorneoTab === 'dfb_pokal' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'dfb_pokal' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'dfb_pokal' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    DFB-Pokal
                  </button>
                  <button onClick={() => setActiveTorneoTab('supercopa_de_alemania')} style={{ background: activeTorneoTab === 'supercopa_de_alemania' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'supercopa_de_alemania' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'supercopa_de_alemania' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Supercopa
                  </button>
                  <button onClick={() => setActiveTorneoTab('copa_liga_alemania')} style={{ background: activeTorneoTab === 'copa_liga_alemania' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'copa_liga_alemania' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'copa_liga_alemania' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Copa de la Liga
                  </button>
                </>
              ) : leagueId === 'francia' ? (
                <>
                  <button onClick={() => setActiveTorneoTab('ligue1')} style={{ background: activeTorneoTab === 'ligue1' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'ligue1' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'ligue1' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Ligue 1
                  </button>
                  <button onClick={() => setActiveTorneoTab('coupe_de_france')} style={{ background: activeTorneoTab === 'coupe_de_france' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'coupe_de_france' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'coupe_de_france' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Coupe de France
                  </button>
                  <button onClick={() => setActiveTorneoTab('coupe_de_la_ligue')} style={{ background: activeTorneoTab === 'coupe_de_la_ligue' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'coupe_de_la_ligue' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'coupe_de_la_ligue' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Coupe de la Ligue
                  </button>
                  <button onClick={() => setActiveTorneoTab('trophee_des_champions')} style={{ background: activeTorneoTab === 'trophee_des_champions' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'trophee_des_champions' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'trophee_des_champions' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Trophée des Champions
                  </button>
                </>
              ) : leagueId === 'escocia' ? (
                <>
                  <button onClick={() => setActiveTorneoTab('scottish_league')} style={{ background: activeTorneoTab === 'scottish_league' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'scottish_league' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'scottish_league' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Scottish League Championship
                  </button>
                  <button onClick={() => setActiveTorneoTab('scottish_cup')} style={{ background: activeTorneoTab === 'scottish_cup' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'scottish_cup' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'scottish_cup' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Scottish Cup
                  </button>
                  <button onClick={() => setActiveTorneoTab('scottish_league_cup')} style={{ background: activeTorneoTab === 'scottish_league_cup' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'scottish_league_cup' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'scottish_league_cup' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Scottish League Cup
                  </button>
                  <button onClick={() => setActiveTorneoTab('scottish_challenge_cup')} style={{ background: activeTorneoTab === 'scottish_challenge_cup' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'scottish_challenge_cup' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'scottish_challenge_cup' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Scottish Challenge Cup
                  </button>
                </>
              ) : leagueId === 'uruguay' ? (
                <>
                  <button onClick={() => setActiveTorneoTab('campeonato_uruguayo')} style={{ background: activeTorneoTab === 'campeonato_uruguayo' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'campeonato_uruguayo' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'campeonato_uruguayo' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Campeonato Uruguayo
                  </button>
                  <button onClick={() => setActiveTorneoTab('torneo_intermedio')} style={{ background: activeTorneoTab === 'torneo_intermedio' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'torneo_intermedio' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'torneo_intermedio' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Torneo Intermedio
                  </button>
                  <button onClick={() => setActiveTorneoTab('supercopa_uruguaya')} style={{ background: activeTorneoTab === 'supercopa_uruguaya' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'supercopa_uruguaya' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'supercopa_uruguaya' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Supercopa Uruguaya
                  </button>
                  <button onClick={() => setActiveTorneoTab('copa_auf_uruguay')} style={{ background: activeTorneoTab === 'copa_auf_uruguay' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'copa_auf_uruguay' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'copa_auf_uruguay' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Copa AUF Uruguay
                  </button>
                </>
              ) : leagueId === 'brasil' ? (
                <>
                  <button onClick={() => setActiveTorneoTab('brasileirao')} style={{ background: activeTorneoTab === 'brasileirao' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'brasileirao' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'brasileirao' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Brasileirão Serie A
                  </button>
                  <button onClick={() => setActiveTorneoTab('copa_do_brasil')} style={{ background: activeTorneoTab === 'copa_do_brasil' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'copa_do_brasil' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'copa_do_brasil' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Copa do Brasil
                  </button>
                  <button onClick={() => setActiveTorneoTab('supercopa_do_brasil')} style={{ background: activeTorneoTab === 'supercopa_do_brasil' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'supercopa_do_brasil' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'supercopa_do_brasil' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Supercopa
                  </button>
                </>
              ) : leagueId === 'por_primeira' || leagueId === 'portugal' ? (
                <>
                  <button onClick={() => setActiveTorneoTab('campeonato_de_portugal')} style={{ background: activeTorneoTab === 'campeonato_de_portugal' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'campeonato_de_portugal' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'campeonato_de_portugal' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Camp. de Portugal
                  </button>
                  <button onClick={() => setActiveTorneoTab('primeira_liga')} style={{ background: activeTorneoTab === 'primeira_liga' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'primeira_liga' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'primeira_liga' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Primeira Liga
                  </button>
                  <button onClick={() => setActiveTorneoTab('taca_de_portugal')} style={{ background: activeTorneoTab === 'taca_de_portugal' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'taca_de_portugal' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'taca_de_portugal' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Taça de Portugal
                  </button>
                  <button onClick={() => setActiveTorneoTab('supertaca_candido_de_oliveira')} style={{ background: activeTorneoTab === 'supertaca_candido_de_oliveira' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'supertaca_candido_de_oliveira' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'supertaca_candido_de_oliveira' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Supertaça
                  </button>
                  <button onClick={() => setActiveTorneoTab('taca_da_liga')} style={{ background: activeTorneoTab === 'taca_da_liga' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'taca_da_liga' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'taca_da_liga' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Taça da Liga
                  </button>
                </>
              ) : leagueId === 'paises_bajos' ? (
                <>
                  <button onClick={() => setActiveTorneoTab('eredivisie')} style={{ background: activeTorneoTab === 'eredivisie' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'eredivisie' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'eredivisie' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Eredivisie
                  </button>
                  <button onClick={() => setActiveTorneoTab('hoofdklasse')} style={{ background: activeTorneoTab === 'hoofdklasse' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'hoofdklasse' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'hoofdklasse' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Camp. Neerlandés / Hoofdklasse
                  </button>
                  <button onClick={() => setActiveTorneoTab('knvb_beker')} style={{ background: activeTorneoTab === 'knvb_beker' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'knvb_beker' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'knvb_beker' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    KNVB Beker
                  </button>
                  <button onClick={() => setActiveTorneoTab('johan_cruyff')} style={{ background: activeTorneoTab === 'johan_cruyff' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'johan_cruyff' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'johan_cruyff' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Johan Cruyff Schaal
                  </button>
                </>
              ) : leagueId === 'mex_liga_mx' || leagueId === 'mexico' ? (
                <>
                  <button onClick={() => setActiveTorneoTab('liga_mx')} style={{ background: activeTorneoTab === 'liga_mx' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'liga_mx' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'liga_mx' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Liga MX
                  </button>
                  <button onClick={() => setActiveTorneoTab('copa_mx')} style={{ background: activeTorneoTab === 'copa_mx' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'copa_mx' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'copa_mx' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Copa MX
                  </button>
                  <button onClick={() => setActiveTorneoTab('campeon_de_campeones')} style={{ background: activeTorneoTab === 'campeon_de_campeones' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'campeon_de_campeones' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'campeon_de_campeones' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Campeón de Campeones
                  </button>
                  <button onClick={() => setActiveTorneoTab('supercopa_mx')} style={{ background: activeTorneoTab === 'supercopa_mx' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'supercopa_mx' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'supercopa_mx' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Supercopa MX
                  </button>
                  <button onClick={() => setActiveTorneoTab('supercopa_liga_mx')} style={{ background: activeTorneoTab === 'supercopa_liga_mx' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'supercopa_liga_mx' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'supercopa_liga_mx' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Supercopa de la Liga
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => setActiveTorneoTab('metropolitano')} style={{ background: activeTorneoTab === 'metropolitano' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'metropolitano' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'metropolitano' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Metropolitanos
                  </button>
                  <button onClick={() => setActiveTorneoTab('nacional')} style={{ background: activeTorneoTab === 'nacional' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'nacional' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'nacional' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Nacionales
                  </button>
                  <button onClick={() => setActiveTorneoTab('copas')} style={{ background: activeTorneoTab === 'copas' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'copas' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'copas' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Copas Nacionales
                  </button>
                </>
              )}
            </div>

            {/* LISTA VERTICAL DE CAMPEONES - COMPACTA */}
            <div className="hide-scrollbar" style={{ flex: 1, padding: '1rem', overflowY: 'auto', background: 'rgba(0,0,0,0.2)' }}>
              {(() => {
                // Orden 1891 hacia abajo (Ascendente por año)
                let sortedHistory = [...filteredHistory].sort((a, b) => parseInt(a.anio) - parseInt(b.anio));

                if (sortedHistory.length === 0) {
                  return (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                      <p style={{ fontSize: '1rem' }}>No hay registros para esta categoría aún.</p>
                    </div>
                  );
                }

                return (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxWidth: '700px', margin: '0 auto' }}>
                    {sortedHistory.map((t, idx) => {
                      // Buscar escudo del club campeón
                      let logo = '';
                      let shortName = t.campeon;

                      if (t.campeon) {
                        // Si el JSON ya trae el escudo preprocesado (ej. Liga MX), usarlo
                        if (t.escudo_historico) {
                          logo = t.escudo_historico;
                          shortName = t.campeon;
                          // Intentar sacar el nombre corto si el club existe
                          const normalizedName = t.campeon.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                          let aliasId = normalizedName.replace(/ /g, '-');
                          const club = clubs.find(c => c.id === aliasId || c.datos?.nombre_completo?.toLowerCase() === t.campeon.toLowerCase());
                          if (club) {
                            shortName = club.datos?.nombre_corto || club.datos?.nombre_completo || t.campeon;
                          }
                        } else {
                          // Mapeo de Aliases rápido
                          const aliases = {
                            // ARG
                            "velez sarsfield": "velez-sarsfield",
                            "velez": "velez-sarsfield",
                            "huracan": "huracan",
                            "argentinos": "argentinos-jrs",
                            "newells": "newells-old-boys",
                            "newell's": "newells-old-boys",
                            "newell's old boys": "newells-old-boys",
                            "union": "union",
                            "estudiantes": "estudiantes-lp",
                            "estudiantes (lp)": "estudiantes-lp",
                          "estudiantes de la plata": "estudiantes-lp",
                          "gimnasia": "gimnasia-lp",
                          "gimnasia y esgrima (lp)": "gimnasia-lp",
                          "gimnasia y esgrima la plata": "gimnasia-lp",
                          "san lorenzo": "san-lorenzo",
                          "san lorenzo de almagro": "san-lorenzo",
                          "argentinos juniors": "argentinos-jrs",
                          "central cordoba (sde)": "central-cordoba",
                          "central cordoba santiago del estero": "central-cordoba",
                          "lomas athletic club": "lomas-athletic",
                          "lomas athletic": "lomas-athletic",
                          "lomas academy": "lomas-academy",
                          "quilmes": "quilmes",
                          "chacarita": "chacarita-juniors",
                          "chacarita juniors": "chacarita-juniors",
                          "ferro": "ferro-carril-oeste",
                          "ferro carril oeste": "ferro-carril-oeste",
                          "arsenal": "arsenal-sarandi",
                          "arsenal fc": "arsenal-sarandi",
                          "colon": "colon",
                          "patronato": "patronato",
                          "atlanta": "atlanta",
                          "sportivo dock sud": "sportivo-dock-sud",
                          "dock sud": "sportivo-dock-sud",
                          "sportivo barracas": "sportivo-barracas",
                          "estudiantes de buenos aires": "estudiantes-ba",
                          "club atletico san isidro": "casi",
                          "san isidro": "casi",
                          "central cordoba (rosario)": "central-cordoba-rosario",
                          "tiro federal": "tiro-federal",
                          "tiro federal de rosario": "tiro-federal",
                          "tiro federal (rosario)": "tiro-federal",
                          "san martin (t)": "san-martin-t",
                          "san martin (tucuman)": "san-martin-t",
                          "rosario athletic": "rosario-athletic",
                          "sportivo balcarce": "sportivo-balcarce",
                          "nueva chicago": "nueva-chicago",
                          "talleres de cordoba": "talleres-cba",
                          "alumni": "alumni",
                          "english high school ac (alumni)": "alumni",
                          "alumni athletic club": "alumni",
                          "estudiantil porteno": "estudiantil-porteno",
                          "st. andrew's / old caledonians": "st-andrews-old-caledonians",
                          "st. andrews / old caledonians": "st-andrews-old-caledonians",
                          "belgrano athletic club": "belgrano-athletic",
                          "belgrano athletic": "belgrano-athletic",
                          "porteno": "porteno",
                          "racing": "racing-club",
                          "racing club": "racing-club",
                          "independiente": "independiente",
                          "boca jrs.": "boca-juniors",
                          "boca juniors": "boca-juniors",
                          "river": "river-plate",
                          "river plate": "river-plate",
                          "river plate / liga cultural sgo. del estero": "river-plate-liga-cultural-sgo-del-estero",
                          "liga cordobesa": "liga-cordobesa",
                          "liga cultural sgo. del estero": "river-plate-liga-cultural-sgo-del-estero",
                          "rosario central": "rosario-central",
                          "central": "rosario-central",
                          "platense": "platense",
                          "lanus": "lanus",
                          "banfield": "banfield",
                          "atl. tucuman": "atletico-tucuman",
                          "atletico tucuman": "atletico-tucuman",
                          // ENG
                          "manchester united": "manchester-united", "manchester utd.": "manchester-united", "manchester city": "manchester-city", "aston villa": "aston-villa", "newcastle united": "newcastle", "nottingham forest": "nottingham-forest", "leicester city": "leicester", "west ham united": "west-ham", "crystal palace": "crystal-palace", "wolverhampton wanderers": "wolves",
                          "blackburn rovers": "blackburn-rovers", "sheffield wednesday": "sheffield-wednesday", "the wednesday": "sheffield-wednesday", "sheffield united": "sheffield-united", "west bromwich albion": "west-bromwich-albion", "west bromwich": "west-bromwich-albion", "huddersfield town": "huddersfield-town",
                          "sunderland": "sunderland", "burnley": "burnley", "portsmouth": "portsmouth", "preston north end": "preston-north-end", "derby county": "derby-county", "bolton wanderers": "bolton-wanderers", "wimbledon": "wimbledon", "coventry city": "coventry-city", "ipswich town": "ipswich-town", "birmingham city": "birmingham-city", "swansea city": "swansea-city", "middlesbrough": "middlesbrough", "charlton athletic": "charlton-athletic", "wigan athletic": "wigan-athletic", "blackpool": "blackpool", "cardiff city": "cardiff-city",
                          "tottenham hotspur": "tottenham", "luton town": "luton-town", "reading fc": "reading-fc", "oxford united": "oxford-united", "norwich city": "norwich-city", "southampton": "southampton", "stoke city": "stoke-city", "swindon town": "swindon-town", "qpr": "qpr", "queens park rangers": "qpr", "barnsley": "barnsley", "bury": "bury", "blackburn olympic": "blackburn-olympic", "old etonians": "old-etonians", "old carthusians": "old-carthusians", "clapham rovers": "clapham-rovers", "wanderers": "wanderers", "royal engineers": "royal-engineers", "oxford university": "oxford-university",
                          // ESP
                          "real madrid": "real-madrid", "barcelona": "barcelona", "fc barcelona": "barcelona", "atletico de madrid": "atletico-madrid", "atletico madrid": "atletico-madrid", "athletic club": "athletic-club", "athletic bilbao": "athletic-club", "real sociedad": "real-sociedad", "real betis": "real-betis", "betis": "real-betis", "villarreal": "villarreal", "villarreal cf": "villarreal", "valencia": "valencia", "valencia cf": "valencia", "sevilla": "sevilla", "sevilla fc": "sevilla", "osasuna": "osasuna", "ca osasuna": "osasuna", "celta de vigo": "celta-vigo", "celta vigo": "celta-vigo", "rayo vallecano": "rayo-vallecano", "mallorca": "mallorca", "rcd mallorca": "mallorca", "alaves": "alaves", "deportivo alaves": "alaves", "las palmas": "las-palmas", "ud las palmas": "las-palmas", "getafe": "getafe", "getafe cf": "getafe", "leganes": "leganes", "cd leganes": "leganes", "real valladolid": "real-valladolid", "valladolid": "real-valladolid", "espanyol": "espanyol", "rcd espanyol": "espanyol", "girona": "girona", "girona fc": "girona",
                          "deportivo la coruna": "deportivo-la-coruna", "racing de irun": "racing-de-irun", "real union": "real-union", "arenas de getxo": "arenas-de-getxo", "real zaragoza": "real-zaragoza",
                          // ITA
                          "casale": "casale", "novese": "novese", "pro vercelli": "pro-vercelli", "sampdoria": "sampdoria", "vado": "vado", "venezia": "venezia", "vicenza": "vicenza",
                          // GER
                          "bayern munich": "bayern-munich", "borussia dortmund": "borussia-dortmund", "borussia monchengladbach": "borussia-monchengladbach", "borussia mönchengladbach": "borussia-monchengladbach", "werder bremen": "werder-bremen", "hamburger sv": "hamburger-sv", "vfb stuttgart": "vfb-stuttgart", "1. fc koln": "koln", "1. fc köln": "koln", "1. fc kaiserslautern": "kaiserslautern", "1. fc nurnberg": "nurnberg", "1. fc nürnberg": "nurnberg", "eintracht braunschweig": "eintracht-braunschweig", "1860 munich": "1860-munich", "vfl wolfsburg": "wolfsburg", "bayer leverkusen": "bayer-leverkusen", "schalke 04": "schalke-04", "rapid viena": "rapid-viena", "dresdner sc": "dresdner-sc", "first vienna": "first-vienna", "rot-weiss essen": "rot-weiss-essen", "karlsruher sc": "karlsruher-sc", "schwarz-weiß essen": "schwarz-weiss-essen", "kickers offenbach": "kickers-offenbach", "eintracht frankfurt": "eintracht-frankfurt", "fortuna dusseldorf": "fortuna-dusseldorf", "bayer uerdingen": "bayer-uerdingen", "hannover 96": "hannover-96", "rb leipzig": "rb-leipzig", "hertha bsc": "hertha-bsc", "vfb leipzig": "vfb-leipzig",
                          // NED
                          "psv eindhoven": "psv", "ajax amsterdam": "ajax", "feijenoord": "feyenoord", "heracles": "heracles-almelo", "go ahead eagles": "go-ahead-eagles", "twente": "twente", "az alkmaar": "az-alkmaar", "utrecht": "utrecht", "heerenveen": "heerenveen", "pec zwolle": "pec-zwolle", "fortuna sittard": "fortuna-sittard", "sparta rotterdam": "sparta-rotterdam", "nac breda": "nac-breda", "nec nijmegen": "nec-nijmegen", "excelsior": "excelsior", "volendam": "volendam", "groningen": "groningen",
                          // ESC
                          "3rd lanark rv": "third-lanark", "third lanark": "third-lanark",
                          "airdrie united": "airdrieonians", "airdrieonians (1878)": "airdrieonians", "airdrieonians": "airdrieonians",
                          "greenock morton": "morton",
                          "dumbarton": "dumbarton",
                          "vale of leven": "vale-of-leven",
                          "clyde": "clyde",
                          "east fife": "east-fife",
                          "partick thistle": "partick-thistle",
                          "queen's park": "queen-s-park",
                          "queen s park": "queen-s-park",
                          "raith rovers": "raith-rovers",
                          "stenhousemuir": "stenhousemuir",
                          "stranraer": "stranraer",
                          "dunfermline athletic": "dunfermline-athletic",
                          "hamilton academical": "hamilton-academical",
                          "inverness ct": "inverness-ct",
                          "inverness caledonian thistle": "inverness-ct",
                          "queen of the south": "queen-of-the-south",
                          "alloa athletic": "alloa-athletic",
                          "st johnstone": "st-johnstone",
                          "ross county": "ross-county",
                          "falkirk": "falkirk",
                          "livingston": "livingston",
                          "celtic": "celtic",
                          "rangers": "rangers",
                          "aberdeen": "aberdeen",
                          "dundee": "dundee",
                          "hearts": "hearts",
                          "heart of midlothian": "hearts"
                        };
                        const normalizedCampeon = t.campeon.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        const aliasId = aliases[normalizedCampeon];

                        const club = clubs.find(c =>
                          aliasId === c.id ||
                          c.datos?.nombre_corto?.toLowerCase() === t.campeon.toLowerCase() ||
                          c.datos?.nombre_completo?.toLowerCase() === t.campeon.toLowerCase() ||
                          c.id.toLowerCase() === t.campeon.toLowerCase().replace(/[^a-z0-9]/g, '-')
                        );
                        if (t.escudo_historico) {
                          logo = t.escudo_historico;
                        } else if (t.campeon === 'Cup withheld') {
                          logo = '';
                        } else if (club) {
                          logo = (() => {
                            if (club.datos?.escudo_actual) return club.datos.escudo_actual;
                            if (club.evolucion_escudos && club.evolucion_escudos.length > 0) {
                              const current = club.evolucion_escudos.find(e => e.ano === 'Actualidad' || e.ano === '2024');
                              if (current && current.url) return current.url;
                            }
                            return "/escudos/" + club.id + ".png";
                          })();
                          shortName = club.datos?.nombre_corto || club.datos?.nombre_completo || t.campeon;
                        } else if (aliasId) {
                          const extMap = {
                            'lomas-athletic': 'jpg', 'alumni': 'jpg', 'belgrano-athletic': 'jpg', 'porteno': 'jpg', 'sportivo-barracas': 'jpg', 'estudiantil-porteno': 'jpg', 'st-andrews-old-caledonians': 'jpg', 'colon': 'webp', 'arsenal-sarandi': 'svg', 'san-martin-t': 'svg', 'nueva-chicago': 'svg', 'casi': 'jpg', 'central-cordoba-rosario': 'jpg', 'sportivo-balcarce': 'jpg', 'rosario-athletic': 'jpg', 'liga-cordobesa': 'jpg', 'river-plate-liga-cultural-sgo-del-estero': 'jpg',
                            'blackburn-rovers': 'svg', 'sheffield-united': 'svg', 'ipswich-town': 'svg',
                            'derby-county': 'webp', 'huddersfield-town': 'webp', 'leicester': 'webp', 'portsmouth': 'webp', 'preston-north-end': 'webp', 'sheffield-wednesday': 'webp', 'west-bromwich-albion': 'webp', 'barnsley': 'webp', 'blackburn-olympic': 'webp', 'bury': 'webp', 'clapham-rovers': 'png', 'luton-town': 'webp', 'norwich-city': 'webp', 'old-carthusians': 'png', 'old-etonians': 'jpg', 'oxford-united': 'webp', 'oxford-university': 'jpg', 'qpr': 'webp', 'reading-fc': 'webp', 'stoke-city': 'png', 'swindon-town': 'png',
                            'deportivo-la-coruna': 'webp', 'racing-de-irun': 'png', 'real-union': 'jpg', 'arenas-de-getxo': 'jpeg', 'real-zaragoza': 'png',
                            'casale': 'webp', 'novese': 'png', 'pro-vercelli': 'webp', 'sampdoria': 'webp', 'vado': 'png', 'venezia': 'webp', 'vicenza': 'svg',
                            'kaiserslautern': 'webp', 'nurnberg': 'webp', 'eintracht-braunschweig': 'webp', '1860-munich': 'svg', 'schalke-04': 'svg', 'rapid-viena': 'svg', 'first-vienna': 'jpg', 'rot-weiss-essen': 'svg', 'karlsruher-sc': 'webp', 'fortuna-dusseldorf': 'webp', 'hannover-96': 'svg', 'hertha-bsc': 'svg', 'dresdner-sc': 'webp',
                            'ross-county': 'svg', 'st-johnstone': 'svg', 'falkirk': 'svg', 'queen-s-park': 'svg', 'hearts': 'svg',
                            'stranraer': 'webp', 'celtic': 'webp', 'aberdeen': 'webp', 'dundee': 'webp'
                          };
                          logo = `/escudos/${aliasId}.${extMap[aliasId] || 'png'}`;
                        }
                      }
                    }

                      return (
                        <div key={idx} className="glass-panel hover-card" style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px',
                          border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.2s', overflow: 'hidden'
                        }}>
                          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '1.2rem', minWidth: '55px' }}>{t.anio}</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.torneo}</div>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 2, justifyContent: 'flex-end' }}>
                            <div style={{ textAlign: 'right' }}>
                              <div style={{ color: 'white', fontWeight: '900', fontSize: '1.2rem', letterSpacing: '0.5px' }} className="title-font">{shortName || "Desconocido"}</div>
                            </div>
                            <div style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              {logo ? (
                                <img src={logo} alt={shortName} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                              ) : <div style={{ display: 'none' }}></div>}
                              <div style={{ display: logo ? 'none' : 'flex', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: 'white', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
                                {shortName ? shortName.charAt(0) : '?'}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
            </div>
          </motion.div>
        )}
        {activeTab === 'enfrentamientos' && (
          <motion.div
            key="enfrentamientos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {!selectedH2HTeamId ? (
              // PANTALLA 1: Seleccionar el equipo base
              <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px' }}>
                <h2 className="title-font" style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', marginBottom: '1rem', textAlign: 'center' }}>
                  El Gran Tablero
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.2rem' }}>
                  Seleccioná un equipo para desplegar su historial completo de enfrentamientos formales (Head-to-Head) contra los 29 rivales de la liga.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '2rem' }}>
                  {clubs.map(club => {
                    const logoUrl = club.datos?.escudo_actual || (club.evolucion_escudos && club.evolucion_escudos.length > 0 ? club.evolucion_escudos[club.evolucion_escudos.length - 1].url : `/escudos/${club.id}.png`);
                    const nombre = club.datos?.nombre_corto || club.datos?.nombre_completo || club.id;

                    return (
                      <button
                        key={club.id}
                        onClick={() => setSelectedH2HTeamId(club.id)}
                        className="glass-card"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.05)',
                          borderRadius: '16px',
                          padding: '1.5rem 1rem',
                          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div style={{ width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img src={logoUrl} alt={nombre} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'drop-shadow(0 5px 5px rgba(0,0,0,0.5))' }} />
                        </div>
                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '0.9rem', textAlign: 'center' }}>{nombre}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            ) : (
              // PANTALLA 2: Mostrar el equipo base vs sus 29 Rivales
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <button
                  onClick={() => setSelectedH2HTeamId(null)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  <ArrowLeft size={20} /> Volver a Selección de Equipo
                </button>

                {(() => {
                  const baseClub = clubs.find(c => c.id === selectedH2HTeamId);
                  const baseName = baseClub.datos?.nombre_corto || baseClub.datos?.nombre_completo;
                  const baseLogo = (baseClub.evolucion_escudos && baseClub.evolucion_escudos.length > 0) ? baseClub.evolucion_escudos[baseClub.evolucion_escudos.length - 1].url : (baseClub.datos?.escudo_actual || `/escudos/${baseClub.id}.png`);

                  const rivals = clubs.filter(c => c.id !== selectedH2HTeamId);

                  return (
                    <>
                      <div className="glass-panel" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', background: 'linear-gradient(90deg, rgba(251, 191, 36, 0.1) 0%, rgba(0,0,0,0) 100%)', borderLeft: '4px solid var(--accent-gold)' }}>
                        <img src={baseLogo} alt={baseName} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                        <div>
                          <p style={{ color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Historial Completo</p>
                          <h2 className="title-font" style={{ fontSize: '3rem', color: 'white', margin: 0 }}>{baseName}</h2>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button
                          onClick={() => setH2hScope('local')}
                          style={{
                            background: h2hScope === 'local' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                            color: h2hScope === 'local' ? 'black' : 'white',
                            border: '1px solid', borderColor: h2hScope === 'local' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)',
                            padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s'
                          }}>
                          Frente a Frente Nacional
                        </button>
                          {import.meta.env.DEV && (
                            <button
                              onClick={() => setH2hScope('internacional')}
                              style={{
                                background: h2hScope === 'internacional' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                                color: h2hScope === 'internacional' ? 'black' : 'white',
                                border: '1px solid', borderColor: h2hScope === 'internacional' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)',
                                padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s'
                              }}>
                              H2H Internacional
                            </button>
                          )}
                      </div>

                      {h2hScope === 'internacional' ? (
                        (() => {
                          const intlMatches = h2hInternacionalData[selectedH2HTeamId] || {};
                          const allClubsInfo = getAllSearchableItems().filter(i => i.type === 'club');
                          const intlRivals = Object.keys(intlMatches).map(rivalId => {
                            const cInfo = allClubsInfo.find(c => c.id === rivalId);
                            return {
                              id: rivalId,
                              name: cInfo ? cInfo.name : rivalId.replace(/-/g, ' ').toUpperCase(),
                              stats: intlMatches[rivalId]
                            };
                          }).sort((a, b) => b.stats.pj - a.stats.pj); // Ordenar por cantidad de partidos

                          if (intlRivals.length === 0) {
                            return (
                              <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                                <p style={{ fontSize: '1.2rem' }}>Este club aún no registra historial internacional en la base de datos.</p>
                              </div>
                            );
                          }

                          return (
                            <div className="glass-panel" style={{ overflow: 'hidden', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(251, 191, 36, 0.2)', borderRadius: '12px' }}>
                              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '0.95rem' }}>
                                <thead>
                                  <tr style={{ background: 'rgba(0,0,0,0.5)', borderBottom: '2px solid var(--accent-gold)' }}>
                                    <th style={{ padding: '0.8rem', textAlign: 'left', width: '30%', color: 'white' }}>Equipo</th>
                                    <th style={{ padding: '0.8rem', color: '#4ade80' }}>G</th>
                                    <th style={{ padding: '0.8rem', color: '#94a3b8' }}>E</th>
                                    <th style={{ padding: '0.8rem', color: '#ef4444' }}>P</th>
                                    <th style={{ padding: '0.8rem', textAlign: 'right', width: '30%', color: 'var(--text-muted)' }}>Rival Internacional</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {intlRivals.map((rival, index) => (
                                    <tr key={rival.id} style={{
                                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                                      background: index % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                                      transition: 'background 0.2s'
                                    }}
                                      onMouseOver={(e) => e.currentTarget.style.background = 'rgba(251, 191, 36, 0.05)'}
                                      onMouseOut={(e) => e.currentTarget.style.background = index % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)'}
                                    >
                                      <td style={{ padding: '1rem 1.2rem', textAlign: 'left', fontWeight: 'bold', color: 'white' }}>{baseName}</td>
                                      <td style={{ padding: '1rem', fontSize: '1.3rem', fontWeight: 'bold', color: '#4ade80' }}>{rival.stats.pg}</td>
                                      <td style={{ padding: '1rem', fontSize: '1.3rem', fontWeight: 'bold', color: '#94a3b8' }}>{rival.stats.pe}</td>
                                      <td style={{ padding: '1rem', fontSize: '1.3rem', fontWeight: 'bold', color: '#ef4444' }}>{rival.stats.pp}</td>
                                      <td style={{ padding: '1rem 1.2rem', textAlign: 'right', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'capitalize' }}>{rival.name}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          );
                        })()
                      ) : (
                        <div className="glass-panel" style={{ overflow: 'hidden', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(251, 191, 36, 0.2)', borderRadius: '12px' }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '0.95rem' }}>
                            <thead>
                              <tr style={{ background: 'rgba(0,0,0,0.5)', borderBottom: '2px solid var(--accent-gold)' }}>
                                <th style={{ padding: '0.8rem', textAlign: 'left', width: '30%', color: 'white' }}>Equipo</th>
                                <th style={{ padding: '0.8rem', color: '#4ade80' }}>G</th>
                                <th style={{ padding: '0.8rem', color: '#94a3b8' }}>E</th>
                                <th style={{ padding: '0.8rem', color: '#ef4444' }}>P</th>
                                <th style={{ padding: '0.8rem', textAlign: 'right', width: '30%', color: 'var(--text-muted)' }}>Rival</th>
                                <th style={{ padding: '0.8rem', width: '10%' }}></th>
                              </tr>
                            </thead>
                            <tbody>
                              {rivals.map((rival, index) => {
                                const rivalName = rival.datos?.nombre_corto || rival.datos?.nombre_completo;

                                // Búsqueda inteligente e infalible mediante Slugs contra el ID del partido
                                const slug = (text) => text ? text.toString().toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-') : '';

                                const baseSlugs = [
                                  slug(baseClub.id),
                                  slug(baseClub.datos?.nombre_completo),
                                  slug(baseClub.datos?.nombre_corto),
                                  slug(baseClub.datos?.nombre_oficial),
                                  slug(baseName)
                                ].filter(Boolean);

                                const rivalSlugs = [
                                  slug(rival.id),
                                  slug(rival.datos?.nombre_completo),
                                  slug(rival.datos?.nombre_corto),
                                  slug(rival.datos?.nombre_oficial),
                                  slug(rivalName)
                                ].filter(Boolean);

                                const match = matchups.find(m => {
                                  // 1. Buscar en el ID unificado (siempre es "slugA-vs-slugB")
                                  if (m.id && m.id.includes('-vs-')) {
                                    const pts = m.id.split('-vs-');
                                    if (pts.length === 2) {
                                      const matchDirect = baseSlugs.includes(pts[0]) && rivalSlugs.includes(pts[1]);
                                      const matchReverse = rivalSlugs.includes(pts[0]) && baseSlugs.includes(pts[1]);
                                      if (matchDirect || matchReverse) return true;
                                    }
                                  }
                                  // 2. Fallback de seguridad idéntico al equipo original
                                  const fBase = baseClub.datos?.nombre_completo || baseName;
                                  const sBase = baseClub.datos?.nombre_corto || baseName;
                                  const fRival = rival.datos?.nombre_completo || rivalName;
                                  const sRival = rival.datos?.nombre_corto || rivalName;

                                  const fbMatch = (m.equipo_a === fBase || m.equipo_a === sBase) && (m.equipo_b === fRival || m.equipo_b === sRival);
                                  const frMatch = (m.equipo_a === fRival || m.equipo_a === sRival) && (m.equipo_b === fBase || m.equipo_b === sBase);

                                  return fbMatch || frMatch;
                                });

                                let pg = '-', pe = '-', pp = '-';

                                if (match) {
                                  let isBaseA = false;
                                  if (match.id && match.id.includes('-vs-')) {
                                    const pts = match.id.split('-vs-');
                                    isBaseA = baseSlugs.includes(pts[0]);
                                  } else {
                                    const fBase = baseClub.datos?.nombre_completo || baseName;
                                    const sBase = baseClub.datos?.nombre_corto || baseName;
                                    isBaseA = match.equipo_a === fBase || match.equipo_a === sBase;
                                  }
                                  pg = isBaseA ? (match.victorias_a || 0) : (match.victorias_b || 0);
                                  pe = match.empates || 0;
                                  pp = isBaseA ? (match.victorias_b || 0) : (match.victorias_a || 0);
                                }

                                return (
                                  <tr key={rival.id} style={{
                                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                                    background: index % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                                    transition: 'background 0.2s'
                                  }}
                                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(251, 191, 36, 0.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.background = index % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)'}
                                  >
                                    <td style={{ padding: '1rem 1.2rem', textAlign: 'left', fontWeight: 'bold', color: 'white' }}>{baseName}</td>
                                    <td style={{ padding: '1rem', fontSize: '1.3rem', fontWeight: 'bold', color: '#4ade80' }}>{pg}</td>
                                    <td style={{ padding: '1rem', fontSize: '1.3rem', fontWeight: 'bold', color: '#94a3b8' }}>{pe}</td>
                                    <td style={{ padding: '1rem', fontSize: '1.3rem', fontWeight: 'bold', color: '#ef4444' }}>{pp}</td>
                                    <td style={{ padding: '1rem 1.2rem', textAlign: 'right', fontWeight: 'bold', color: 'var(--text-muted)' }}>{rivalName}</td>
                                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                                      <ShareButton
                                        equipoA={baseName}
                                        equipoB={rivalName}
                                        urlShare={`${window.location.origin}${window.location.pathname}?h2h=${baseClub.id}-vs-${rival.id}`}
                                        compact={true}
                                      />
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
