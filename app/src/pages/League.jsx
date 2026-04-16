import { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { getClubsByLeague, getLeagueHistory, getLeagueMatchups, getLeagues } from '../data/loader';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

export default function League() {
  const { leagueId } = useParams();
  const navigate = useNavigate();
  const clubs = getClubsByLeague(leagueId);
  const history = getLeagueHistory(leagueId);
  const matchups = getLeagueMatchups(leagueId);
  const allLeagues = getLeagues();
  const currentLeague = allLeagues.find(l => l.id === leagueId) || { name: leagueId };
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.tab || 'clubes');
  const [activeTorneoTab, setActiveTorneoTab] = useState(leagueId === 'inglaterra' ? 'premier' : 'metropolitano');

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
    'conference': 848
  };
  const isCup = ['champions', 'europa_league', 'conference'].includes(leagueId);

  const [standingsData, setStandingsData] = useState(null);
  const [loadingStandings, setLoadingStandings] = useState(false);
  
  // STATS: Goleadores, Asistencias, etc.
  const [statsData, setStatsData] = useState({ scorers: null, assists: null, yellows: null, reds: null });
  const [loadingStats, setLoadingStats] = useState(false);
  
  // FIXTURES: Cuadro de Llaves
  const [knockoutData, setKnockoutData] = useState(null);

  useEffect(() => {
    if (activeTab === 'actualidad' && slugToApi[leagueId] && !standingsData) {
      const fetchStandings = async () => {
         setLoadingStandings(true);
         try {
           const apiId = slugToApi[leagueId];
           const season = leagueId === 'argentina' ? 2026 : 2025; // Europa arranca en el año par.
           const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
           
           const headers = isLocal ? {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": import.meta.env.VITE_API_FOOTBALL_KEY
           } : {};
           
           // Fetch Posiciones
           const endpointStandings = isLocal 
              ? `https://v3.football.api-sports.io/standings?league=${apiId}&season=${season}`
              : `/api/standings?league=${apiId}&season=${season}`;
           const resSt = await fetch(endpointStandings, { headers });
           const dataSt = await resSt.json();
           if (dataSt.response && dataSt.response.length > 0) {
              setStandingsData(dataSt.response[0].league.standings);
           }
           
           // Fetch Cuadro de Llaves (Si es Copa)
           if (isCup) {
               const endpointFix = isLocal 
                 ? `https://v3.football.api-sports.io/fixtures?league=${apiId}&season=${season}`
                 : `/api/knockouts?league=${apiId}&season=${season}`;
               const resFix = await fetch(endpointFix, { headers });
               const dataFix = await resFix.json();
               if (dataFix.response) setKnockoutData(dataFix.response);
           }
           
           // Traemos también las STATS
           setLoadingStats(true);
           if (isLocal) {
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
           
         } catch(e) {
            console.error(e);
            setLoadingStats(false);
         } finally {
            setLoadingStandings(false);
         }
      };
      fetchStandings();
    }
  }, [activeTab, leagueId]);

  
  useEffect(() => {
      if (leagueId === 'inglaterra') setActiveTorneoTab('premier');
      else if (leagueId === 'espania') setActiveTorneoTab('laliga');
      else if (leagueId === 'italia') setActiveTorneoTab('serie_a');
      else if (leagueId === 'alemania') setActiveTorneoTab('bundesliga');
      else if (leagueId === 'francia') setActiveTorneoTab('ligue1');
      else if (leagueId === 'escocia') setActiveTorneoTab('scottish_league');
      else setActiveTorneoTab('metropolitano');
  }, [leagueId]);
  
  
  // Generar años desde 1891 hasta el año actual
  const startYear = 1891;
  const currentYear = new Date().getFullYear();
  const allYears = Array.from({ length: currentYear - startYear + 1 }, (_, i) => (startYear + i).toString());

  // Décadas para salto rápido
  const decadesObj = {};
  for(let y = startYear; y <= currentYear; y++) {
    const dec = Math.floor(y / 10) * 10;
    if (dec >= 1890) decadesObj[dec] = true;
  }
  const decades = Object.keys(decadesObj).map(Number).sort((a,b) => a - b);

  // Default to the most recent tournament
  const INITIAL_TOURNAMENT_ID = history.length > 0 ? history[history.length - 1].id : null;
  const [selectedDecade, setSelectedDecade] = useState(null);
  const [selectedYearStr, setSelectedYearStr] = useState(null);
  const [selectedHistoryId, setSelectedHistoryId] = useState(null); // No renderizar tabla por defecto
  
  const [selectedH2HTeamId, setSelectedH2HTeamId] = useState(null); // Nuevo estado
  
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

  return (
    <div style={{ padding: '4rem 2rem', minHeight: '100vh', maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
      
      <button
        onClick={() => {
          if (clubs.length === 0 || isCup) {
            navigate(-1);
          } else if (activeTab !== 'clubes') {
            setActiveTab('clubes');
          } else {
            navigate('/leagues');
          }
        }}
        className="glass-panel"
        style={{
          position: 'absolute',
          top: '4rem',
          left: '0',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          background: 'rgba(255,255,255,0.05)',
          cursor: 'pointer',
          transition: 'all 0.3s',
          zIndex: 10
        }}
        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
      >
        <ArrowLeft size={24} color="var(--accent-gold)" />
      </button>

      <h1 className="title-font animate-fade-in" style={{ fontSize: '3.5rem', marginBottom: '1rem', textAlign: 'center' }}>
        <span className="notranslate" style={{ color: 'var(--accent-gold)' }}>{currentLeague.name}</span>
      </h1>
      <p className="animate-fade-in" style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.2rem' }}>
        Explora todos los equipos de la élite o repasa el extenso historial de campeonatos.
      </p>

      {/* Tabs System for League Hub */}
      <div 
        className="glass-panel animate-fade-in" 
        style={{ 
          display: 'flex', 
          margin: '0 auto 3rem',
          maxWidth: '800px',
          borderRadius: '16px', 
          padding: '0.5rem'
        }}
      >
        <button
          onClick={() => setActiveTab('actualidad')}
          style={{
            background: activeTab === 'actualidad' ? 'rgba(255,255,255,0.1)' : 'transparent',
            color: activeTab === 'actualidad' ? 'var(--text-main)' : 'var(--text-muted)',
            border: 'none', padding: '1rem', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 'bold', cursor: 'pointer', flex: 1, transition: 'all 0.3s'
          }}
        >
          Temporada Actual
        </button>
        {clubs.length > 0 && (
          <>
            <button
              onClick={() => setActiveTab('clubes')}
              style={{
                background: activeTab === 'clubes' ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: activeTab === 'clubes' ? 'var(--text-main)' : 'var(--text-muted)',
                border: 'none', padding: '1rem', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 'bold', cursor: 'pointer', flex: 1, transition: 'all 0.3s'
              }}
            >
              Equipos Actuales
            </button>
            <button
              onClick={() => setActiveTab('temporadas')}
              style={{
                background: activeTab === 'temporadas' ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: activeTab === 'temporadas' ? 'var(--text-main)' : 'var(--text-muted)',
                border: 'none', padding: '1rem', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 'bold', cursor: 'pointer', flex: 1, transition: 'all 0.3s'
              }}
            >
              Campeonatos
            </button>
            <button
              onClick={() => setActiveTab('enfrentamientos')}
              style={{
                background: activeTab === 'enfrentamientos' ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: activeTab === 'enfrentamientos' ? 'var(--text-main)' : 'var(--text-muted)',
                border: 'none', padding: '1rem', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 'bold', cursor: 'pointer', flex: 1, transition: 'all 0.3s'
              }}
            >
              Historial
            </button>
          </>
        )}
      </div>

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
                              {['Round of 16', 'Quarter-finals', 'Semi-finals', 'Final'].map((roundName, colIndex) => {
                                  const matches = knockoutData.filter(f => f.league.round.includes(roundName));
                                  if (matches.length === 0) return null;
                                  return (
                                      <div key={roundName} style={{ display: 'flex', flexDirection: 'column', width: colIndex === 3 ? '320px' : '260px', gap: '1rem', justifyContent: 'space-around' }}>
                                         <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem', fontSize: '0.9rem', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{roundName.replace('-', ' ')}</h4>
                                         
                                         {matches.map(m => (
                                            <div key={m.fixture.id} style={{ flex: roundName === 'Final' && matches.length === 1 ? 1 : 'none', display: 'flex', flexDirection: 'column', justifyContent: roundName === 'Final' ? 'center' : 'flex-start' }}>
                                               <div style={{ display: 'flex', flexDirection: 'column', background: roundName === 'Final' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: roundName === 'Final' ? '2px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.05)' }}>
                                                  
                                                  <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', marginBottom: '0.6rem', textAlign: 'center', opacity: 0.8, textTransform: 'uppercase' }}>
                                                     {new Date(m.fixture.date).toLocaleDateString()} · {m.fixture.venue?.name || 'A definir'}
                                                  </div>

                                                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                                                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                                        <img src={m.teams.home.logo} style={{ width: '20px' }} alt="" onError={(e) => e.target.style.display = 'none'} />
                                                        <span style={{ color: m.teams.home.winner ? 'white' : 'var(--text-muted)', fontWeight: m.teams.home.winner === true ? 'bold' : 'normal', fontSize: '0.9rem' }}>{m.teams.home.name || 'A definir'}</span>
                                                     </div>
                                                     <span style={{ fontWeight: 'bold', color: 'white', background: m.teams.home.winner ? '#4ade80' : 'rgba(255,255,255,0.1)', padding: '0.1rem 0.5rem', borderRadius: '4px', fontSize: '0.9rem' }}>{m.goals.home ?? '-'}</span>
                                                  </div>

                                                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                                        <img src={m.teams.away.logo} style={{ width: '20px' }} alt="" onError={(e) => e.target.style.display = 'none'} />
                                                        <span style={{ color: m.teams.away.winner ? 'white' : 'var(--text-muted)', fontWeight: m.teams.away.winner === true ? 'bold' : 'normal', fontSize: '0.9rem' }}>{m.teams.away.name || 'A definir'}</span>
                                                     </div>
                                                     <span style={{ fontWeight: 'bold', color: 'white', background: m.teams.away.winner ? '#4ade80' : 'rgba(255,255,255,0.1)', padding: '0.1rem 0.5rem', borderRadius: '4px', fontSize: '0.9rem' }}>{m.goals.away ?? '-'}</span>
                                                  </div>

                                               </div>
                                            </div>
                                         ))}
                                      </div>
                                  )
                              })}
                           </div>
                        </div>
                     </div>
                  )}
                  
                  {/* Columna Grande: Tabla de Clasificación */}
                  <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', gridColumn: '1 / -1' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                         <h3 className="title-font" style={{ fontSize: '1.4rem' }}>⭐ Clasificación General</h3>
                         <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Jornada 27</span>
                      </div>
                      
                      <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', minWidth: '500px' }}>
                           <thead>
                              <tr style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                 <th style={{ textAlign: 'left', padding: '0.5rem' }}>Equipo</th>
                                 <th>PJ</th><th>G</th><th>E</th><th>P</th><th>PTS</th>
                              </tr>
                           </thead>
                           {standingsData ? standingsData.map((group, gIdx) => (
                             <tbody key={gIdx}>
                                {standingsData.length > 1 && group.length > 0 && (
                                   <tr>
                                      <td colSpan="6" style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--accent-gold)', fontWeight: 'bold', padding: '0.6rem', textAlign: 'center', letterSpacing: '1px' }}>
                                         {group[0].group}
                                      </td>
                                   </tr>
                                )}
                                {group.map((t) => (
                                    <tr key={t.team.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: t.rank % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                                       <td style={{ textAlign: 'left', padding: '0.8rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: t.rank <= 4 ? 'bold' : 'normal', color: t.rank <= 4 ? 'white' : 'var(--text-muted)' }}>
                                          <span style={{ color: 'var(--text-muted)', width: '20px' }}>{t.rank}</span> 
                                          <img src={t.team.logo} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.team.name}</span>
                                       </td>
                                       <td>{t.all.played}</td><td>{t.all.win}</td><td>{t.all.draw}</td><td>{t.all.lose}</td>
                                       <td style={{ fontWeight: 'bold', color: 'var(--accent-gold)' }}>{t.points}</td>
                                    </tr>
                                ))}
                             </tbody>
                           )) : (
                             <tbody>
                               <tr>
                                  <td colSpan="6" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                                     {loadingStandings ? 'Conectando túnel oficial y cargando posiciones reales mundiales...' : 'No disponible'}
                                  </td>
                               </tr>
                             </tbody>
                           )}
                        </table>
                      </div>
                  </div>

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
                                <img src={item.player.photo} style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }} alt=""/>
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
                                <img src={item.player.photo} style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }} alt=""/>
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
                                <img src={item.player.photo} style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }} alt=""/>
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
                         🟥 Rojas Negras
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                         {loadingStats && <div style={{ color: 'var(--text-muted)' }}>Cargando expulsados...</div>}
                         {!loadingStats && statsData.reds?.length === 0 && <div style={{ color: 'var(--text-muted)' }}>Sin datos.</div>}
                         {statsData.reds?.slice(0, 10).map((item, idx) => (
                           <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <img src={item.player.photo} style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }} alt=""/>
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
                                        // GER
                                        "bayern munich": "bayern-munich", "borussia dortmund": "borussia-dortmund", "borussia monchengladbach": "borussia-monchengladbach", "borussia mönchengladbach": "borussia-monchengladbach", "werder bremen": "werder-bremen", "hamburger sv": "hamburger-sv", "vfb stuttgart": "vfb-stuttgart", "1. fc koln": "koln", "1. fc köln": "koln", "1. fc kaiserslautern": "kaiserslautern", "1. fc nurnberg": "nurnberg", "1. fc nürnberg": "nurnberg", "eintracht braunschweig": "eintracht-braunschweig", "1860 munich": "1860-munich", "vfl wolfsburg": "wolfsburg", "bayer leverkusen": "bayer-leverkusen", "schalke 04": "schalke-04", "rapid viena": "rapid-viena", "dresdner sc": "dresdner-sc", "first vienna": "first-vienna", "rot-weiss essen": "rot-weiss-essen", "karlsruher sc": "karlsruher-sc", "schwarz-weiß essen": "schwarz-weiss-essen", "kickers offenbach": "kickers-offenbach", "eintracht frankfurt": "eintracht-frankfurt", "fortuna dusseldorf": "fortuna-dusseldorf", "bayer uerdingen": "bayer-uerdingen", "hannover 96": "hannover-96", "rb leipzig": "rb-leipzig", "hertha bsc": "hertha-bsc", "vfb leipzig": "vfb-leipzig",
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

                      <div className="glass-panel" style={{ overflow: 'hidden', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(251, 191, 36, 0.2)', borderRadius: '12px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '0.95rem' }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,0,0,0.5)', borderBottom: '2px solid var(--accent-gold)' }}>
                              <th style={{ padding: '0.8rem', textAlign: 'left', width: '35%', color: 'white' }}>Equipo</th>
                              <th style={{ padding: '0.8rem', color: '#4ade80' }}>G</th>
                              <th style={{ padding: '0.8rem', color: '#94a3b8' }}>E</th>
                              <th style={{ padding: '0.8rem', color: '#ef4444' }}>P</th>
                              <th style={{ padding: '0.8rem', textAlign: 'right', width: '35%', color: 'var(--text-muted)' }}>Rival</th>
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
                                if (match.id) {
                                   const parts = match.id.split('-');
                                   isBaseA = selectedH2HTeamId.includes(parts[0]);
                                } else {
                                   isBaseA = match.equipo_a === baseName;
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
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
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
