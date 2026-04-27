import { useState, useEffect } from 'react';
import { ArrowLeft, Activity, Calendar as CalendarIcon, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TARGET_LEAGUES } from '../config/api_leagues';
import Breadcrumbs from '../components/Breadcrumbs';

const groupedSidebarLeagues = {
  "COPAS": [
    { name: 'Champions League', slug: 'champions' },
    { name: 'Europa League', slug: 'europa_league' },
    { name: 'Conference League', slug: 'conference' },
    { name: 'Copa Libertadores', slug: 'libertadores' },
    { name: 'Copa Sudamericana', slug: 'sudamericana' }
  ],
  "ARGENTINA": [
    { name: 'Primera División', slug: 'argentina' },
    { name: 'Copa Argentina', slug: 'copa_argentina' },
    { name: 'Primera Nacional', slug: 'arg_nacional_b' },
    { name: 'Primera B Metro', slug: 'arg_b_metro' },
    { name: 'Primera C', slug: 'arg_primera_c' }
  ],
  "AMÉRICA": [
    { name: 'Brasileirão', slug: 'brasil' },
    { name: 'Campeonato Uruguayo', slug: 'uru_primera' },
    { name: 'Liga MX', slug: 'mex_liga_mx' },
    { name: 'Primera Colombia', slug: 'col_primera' },
    { name: 'Primera Chile', slug: 'chi_primera' },
    { name: 'Primera Perú', slug: 'per_primera' },
    { name: 'MLS', slug: 'usa_mls' }
  ],
  "INGLATERRA": [
    { name: 'Premier League', slug: 'inglaterra' },
    { name: 'Championship', slug: 'eng_championship' },
    { name: 'League One', slug: 'eng_league_one' },
    { name: 'League Two', slug: 'eng_league_two' },
    { name: 'FA Cup', slug: 'fa_cup' },
    { name: 'EFL Cup', slug: 'efl_cup' }
  ],
  "ESPAÑA": [
    { name: 'La Liga', slug: 'espania' },
    { name: 'Segunda División', slug: 'esp_segunda' },
    { name: 'Copa del Rey', slug: 'copa_del_rey' }
  ],
  "ITALIA": [
    { name: 'Serie A', slug: 'italia' },
    { name: 'Serie B', slug: 'ita_serie_b' },
    { name: 'Coppa Italia', slug: 'coppa_italia' }
  ],
  "ALEMANIA": [
    { name: 'Bundesliga', slug: 'alemania' },
    { name: '2. Bundesliga', slug: 'ger_2_bundesliga' },
    { name: 'DFB Pokal', slug: 'dfb_pokal' }
  ],
  "FRANCIA": [
    { name: 'Ligue 1', slug: 'francia' },
    { name: 'Ligue 2', slug: 'fra_ligue_2' },
    { name: 'Copa de Francia', slug: 'copa_francia' }
  ],
  "RESTO DE EUROPA": [
    { name: 'Primeira Liga', slug: 'por_primeira' },
    { name: 'Eredivisie', slug: 'eredivisie' },
    { name: 'Premiership', slug: 'escocia' },
    { name: 'Pro League', slug: 'bel_pro_league' }
  ]
};

export default function LiveScoresHub() {
  const navigate = useNavigate();
  const today = new Date();
  const getFormatted = (d) => {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };
  const [activeDateStr, setActiveDateStr] = useState(getFormatted(today));
  const [collapsedLeagues, setCollapsedLeagues] = useState({});
  const [liveLeagues, setLiveLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedMatchId, setExpandedMatchId] = useState(null);
  const [expandedSidebar, setExpandedSidebar] = useState({});

  const toggleSidebarGroup = (groupName) => {
    setExpandedSidebar(prev => ({
      ...prev,
      [groupName]: !prev[groupName]
    }));
  };

  // Generar tira de 7 días (-3 a +3)
  const slidingDates = [];
  for (let i = -3; i <= 3; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    slidingDates.push(d);
  }

  const getDayLabel = (d) => {
    const todayStr = getFormatted(new Date());
    const dStr = getFormatted(d);

    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);

    if (dStr === todayStr) return t.HOY;
    if (dStr === getFormatted(yesterday)) return t.AYER;
    if (dStr === getFormatted(tomorrow)) return t.MAÑANA;

    const dayNames = userLang === 'en' ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] : ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    return `${dayNames[d.getDay()]} ${d.getDate()}`;
  };

  // Mapeo entre la API y nuestro Frontend para los botones de Clasificación
    const apiToSlug = {
      128: 'argentina',
      39: 'inglaterra',
      140: 'espania',
      135: 'italia',
      78: 'alemania',
      61: 'francia',
      179: 'escocia',
      2: 'champions',
      3: 'europa_league',
      848: 'conference',
      13: 'libertadores',
      11: 'sudamericana',
      71: 'brasil',
      40: 'eng_championship',
      62: 'fra_ligue_2',
      79: 'ger_2_bundesliga',
      94: 'por_primeira',
      136: 'ita_serie_b',
      141: 'esp_segunda',
      239: 'col_primera',
      253: 'usa_mls',
      262: 'mex_liga_mx',
      268: 'uru_primera',
      281: 'per_primera',
      41: 'eng_league_one',
      42: 'eng_league_two',
      45: 'fa_cup',
      129: 'arg_nacional_b',
      131: 'arg_b_metro',
      132: 'arg_primera_c',
      144: 'bel_pro_league',
      265: 'chi_primera',
    66: 'copa_francia',
    81: 'dfb_pokal',
    130: 'copa_argentina',
    88: 'eredivisie',
    137: 'coppa_italia'
  };

  // Diccionario Dinámico de Idioma del Teléfono
  const userLang = navigator.language.startsWith('en') ? 'en' : 'es';
  const t = {
    'AYER': userLang === 'en' ? 'YESTERDAY' : 'AYER',
    'HOY': userLang === 'en' ? 'TODAY' : 'HOY',
    'MAÑANA': userLang === 'en' ? 'TOMORROW' : 'MAÑANA',
    conectando: userLang === 'en' ? 'CONNECTING...' : 'CONECTANDO...',
    en_directo: userLang === 'en' ? 'LIVE SCORES' : 'EN DIRECTO',
    fin: userLang === 'en' ? 'FT' : 'FIN',
    et: userLang === 'en' ? 'HT' : 'ET',
    sin_partidos: userLang === 'en' ? 'No live matches right now worldwide.' : 'No hay partidos en juego ahora mismo en el mundo entero.',
    esperando: userLang === 'en' ? 'API Connected ✓ Waiting for kick-offs...' : 'API Conectada ✓ Esperando silbatos iniciales...',
    info_footer: userLang === 'en' ? '📡 Built on API-Football. Live data refreshed every 60s.' : '📡 Conectado Oficialmente a API-Football. Datos vivos con refresco cada 60s.'
  };

  const toggleLeague = (leagueId) => {
    setCollapsedLeagues(prev => ({
      ...prev,
      [leagueId]: !prev[leagueId]
    }));
  };

  useEffect(() => {
    const fetchLiveScores = async () => {
      setLoading(true);
      try {
        const formattedDate = activeDateStr;

        // Forzamos el timezone de Argentina oficial de la API para que no falle en celulares raros
        const userTimezone = "America/Argentina/Buenos_Aires";

        // Ahora traemos TODO lo de ese día.
        // Medida de Seguridad: Si estamos en modo de desarrollo local usamos conexión directa. 
        // Si estamos en Producción (Vercel), golpeamos contra nuestro Túnel Blindado para ocultar la llave.
        const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

        const endpoint = isLocal
          ? `https://v3.football.api-sports.io/fixtures?date=${formattedDate}&timezone=${userTimezone}`
          : `/api/livescores?date=${formattedDate}&timezone=${userTimezone}`;

        const headers = isLocal ? {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": import.meta.env.VITE_API_FOOTBALL_KEY
        } : {};

        const response = await fetch(endpoint, {
          method: "GET",
          headers: headers
        });
        const data = await response.json();

        const grouped = {};
        const allowedIds = Object.values(TARGET_LEAGUES);
        const matchIdsToFetch = [];

        if (data.response) {
          data.response.forEach(match => {
            const lId = match.league.id;

            // Filtramos estrictamente a nuestras ligas configuradas (Champions, Libertadores, etc)
            if (!allowedIds.includes(lId)) return;

            // Guardamos IDs para pedir Goles (solo partidos en juego o terminados)
            if (match.fixture.status.short !== "NS" && match.fixture.status.short !== "PST" && match.fixture.status.short !== "CANC") {
              matchIdsToFetch.push(match.fixture.id);
            }

            if (!grouped[lId]) {
              let leagueName = match.league.name;
              // Sobrescribir nombre técnico de la API por nombre comercial
              if (lId === 71) leagueName = "Brasileirão";
              if (lId === 143) leagueName = "🏆 Copa del Rey (FINAL)";
              if (lId === 144) leagueName = "Jupiler Pro League";

              grouped[lId] = {
                id: lId,
                name: leagueName,
                country: match.league.country,
                flag: match.league.flag || "https://flagcdn.com/w40/eu.png",
                priority: allowedIds.includes(lId),
                matches: []
              };
            }

            const status = match.fixture.status.short;
            const elapsed = match.fixture.status.elapsed;

            // Formateo Premium de Estados (Hora, Minuto en Vivo, o Traducidos)
            let timeStr = status;
            if (["1H", "2H", "HT", "ET", "P", "LIVE"].includes(status)) {
              timeStr = elapsed ? elapsed + "'" : (status === "HT" ? t.et : status);
            } else if (status === "NS" || status === "TBD") {
              const matchDate = new Date(match.fixture.date);
              timeStr = matchDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
            } else if (["FT", "AET", "PEN"].includes(status)) {
              timeStr = t.fin;
            } else if (["CANC", "SUSP", "PST", "ABD"].includes(status)) {
              timeStr = "SUSP";
            }

            // Está jugando ahora mismo?
            const isLive = ["1H", "2H", "HT", "ET", "P", "LIVE"].includes(status);

            grouped[lId].matches.push({
              id: match.fixture.id,
              d: timeStr,
              isLive: isLive,
              home: match.teams.home.name,
              homeId: match.teams.home.id,
              homeLogo: match.teams.home.logo,
              away: match.teams.away.name,
              awayId: match.teams.away.id,
              awayLogo: match.teams.away.logo,
              score: `${match.goals.home ?? '-'} - ${match.goals.away ?? '-'}`,
              homeGoals: [],
              awayGoals: []
            });
          });
        }

        // --- PROCESAMIENTO SEGURO DE EVENTOS (GOLES) ---
        if (matchIdsToFetch.length > 0) {
          const chunkSize = 20; // 20 IDs máximo por llamado (Regla API Sports)
          for (let i = 0; i < matchIdsToFetch.length; i += chunkSize) {
            const chunk = matchIdsToFetch.slice(i, i + chunkSize);
            const idsString = chunk.join('-');

            const detailEndpoint = isLocal
              ? `https://v3.football.api-sports.io/fixtures?ids=${idsString}`
              : `/api/fixture_details?ids=${idsString}`;

            try {
              const detailRes = await fetch(detailEndpoint, { headers });
              const detailData = await detailRes.json();

              if (detailData.response) {
                detailData.response.forEach(det => {
                  const lId = det.league.id;
                  if (grouped[lId]) {
                    const theMatch = grouped[lId].matches.find(m => m.id === det.fixture.id);
                    if (theMatch) {
                      if (det.events) {
                        det.events.forEach(ev => {
                          if (ev.type === 'Goal' && ev.detail !== 'Missed Penalty') {
                            // Usar partes de nombres largos (apellidos) si es muy extenso
                            const nameParts = ev.player.name.split(' ');
                            const shortName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : ev.player.name;
                            const goalStr = `${shortName} ${ev.time.elapsed}'`;

                            // Evitar duplicados (a veces la API bugea goles repetidos en vivo)
                            if (ev.team.id === theMatch.homeId) {
                              if (!theMatch.homeGoals.includes(goalStr)) theMatch.homeGoals.push(goalStr);
                            } else {
                              if (!theMatch.awayGoals.includes(goalStr)) theMatch.awayGoals.push(goalStr);
                            }
                          }
                        });
                      }
                      if (det.lineups && det.lineups.length > 0) {
                        theMatch.homeLineup = det.lineups.find(l => l.team.id === theMatch.homeId) || det.lineups[0];
                        theMatch.awayLineup = det.lineups.find(l => l.team.id === theMatch.awayId) || det.lineups[1];
                      }
                    }
                  }
                });
              }
            } catch (e) {
              console.error("Error trayendo goleadores de la API (Bóveda):", e);
            }
          }
        }

        // Convertimos el objeto en Array y llevamos "nuestras" ligas prioritarias arriba
        const finalArray = Object.values(grouped).sort((a, b) => (b.priority ? 1 : 0) - (a.priority ? 1 : 0));
        setLiveLeagues(finalArray);

      } catch (error) {
        console.error("Error trayendo resultados vivos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveScores();

    // AUTO-REFRESCO RESTAURADO: 
    // Ahora que tenemos la Bóveda, nos va a consumir sólo 1 crédito por minuto en vez de miles.
    const interval = setInterval(fetchLiveScores, 60000);
    return () => clearInterval(interval);

  }, [activeDateStr]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)', paddingTop: '2rem', position: 'relative', paddingBottom: '4rem' }}>

      <div style={{ position: 'relative', zIndex: 100, marginBottom: '2rem', paddingLeft: '2rem' }}>
        <Breadcrumbs 
            paths={[{ name: 'Resultados en Vivo' }]} 
            onBack={() => { navigate(-1); }} 
        />
      </div>

      <div style={{ padding: '0 2rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="title-font animate-fade-in" style={{ fontSize: '2.5rem', color: 'white', display: 'flex', alignItems: 'center', gap: '0.8rem', margin: 0 }}>
          <Activity size={32} color={loading ? "#aaa" : "#ef4444"} />
          {loading ? t.conectando : t.en_directo}
        </h1>

        <div className="date-scroll-container" style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem', background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '50px', maxWidth: '100%', overflowX: 'auto', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
          {(() => {
            let renderDates = [...slidingDates];
            const isCustom = !renderDates.some(d => getFormatted(d) === activeDateStr);

            if (isCustom) {
              const [y, m, day] = activeDateStr.split('-');
              const customDateObj = new Date(y, m - 1, day);
              if (!isNaN(customDateObj.getTime())) {
                renderDates.unshift(customDateObj);
              }
            }

            return renderDates.map((d, i) => {
              const dStr = getFormatted(d);
              const isSelected = activeDateStr === dStr;
              return (
                <button
                  key={dStr}
                  onClick={() => setActiveDateStr(dStr)}
                  style={{
                    background: isSelected ? '#ef4444' : 'transparent',
                    color: isSelected ? 'white' : 'var(--text-muted)',
                    border: 'none', padding: '0.6rem 1.5rem', borderRadius: '50px',
                    fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '1px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {getDayLabel(d)}
                </button>
              );
            });
          })()}

          <div style={{ position: 'relative', display: 'flex', flexShrink: 0 }}>
            <button style={{ background: 'transparent', color: 'var(--text-muted)', border: 'none', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <CalendarIcon size={18} />
            </button>
            <input
              type="date"
              value={activeDateStr}
              onChange={(e) => {
                if (e.target.value) setActiveDateStr(e.target.value);
              }}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>

      <div className="main-content-wrapper" style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start' }}>

        {/* COLUMNA CENTRAL: PARTIDOS */}
        <div style={{ flex: '1 1 auto', width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {!loading && liveLeagues.length === 0 && (
            <div style={{ textAlign: 'center', marginTop: '3rem', color: 'white', opacity: 0.6 }}>
              <Activity size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <h3>{t.sin_partidos}</h3>
              <p>{t.esperando}</p>
            </div>
          )}

          {liveLeagues.map((liga) => {
            const isClosed = collapsedLeagues[liga.id] !== undefined
              ? collapsedLeagues[liga.id]
              : !liga.priority;

            return (
              <div key={liga.id} className="glass-panel animate-fade-in" style={{ borderRadius: '16px', overflow: 'hidden', padding: 0 }}>

                <div
                  onClick={() => toggleLeague(liga.id)}
                  style={{
                    background: 'rgba(255,255,255,0.05)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem',
                    borderBottom: isClosed ? 'none' : '1px solid rgba(255,255,255,0.05)', cursor: 'pointer', transition: 'background 0.2s'
                  }}
                  onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                  onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                >
                  <img src={liga.flag} alt={liga.country} style={{ width: '24px', borderRadius: '4px' }} onError={(e) => e.target.style.display = 'none'} />
                  <span style={{ color: 'white', fontWeight: 'bold', letterSpacing: '0.5px' }}>{liga.name}</span>
                  {isClosed ? <ChevronDown size={20} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />
                    : <ChevronUp size={20} color="var(--accent-gold)" style={{ marginLeft: 'auto' }} />}
                </div>

                {!isClosed && liga.matches.map((match, idx) => (
                  <div key={match.id}>
                    <div style={{ padding: '0.8rem 0.5rem', display: 'grid', gridTemplateColumns: '45px 1fr 60px 1fr 30px', alignItems: 'center', cursor: 'pointer', transition: 'background 0.2s', opacity: match.isLive ? 1 : 0.6 }}
                      onClick={() => setExpandedMatchId(prev => prev === match.id ? null : match.id)}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                      onMouseOut={e => e.currentTarget.style.background = 'transparent'}>

                      <div style={{ color: match.isLive ? '#ef4444' : 'var(--text-muted)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem' }}>
                        {match.isLive && <span style={{ width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', animation: 'pulse 2s infinite', flexShrink: 0 }}></span>}
                        <span style={{ fontSize: '0.8rem' }}>{match.d}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'flex-end', fontWeight: match.isLive ? 'bold' : 'normal', color: 'white', minWidth: 0 }}>
                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.9rem' }}>{match.home}</span>
                        {match.homeLogo && <img src={match.homeLogo} alt="" style={{ width: '20px', flexShrink: 0 }} onError={(e) => e.target.style.display = 'none'} />}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'center', fontSize: '1.1rem', fontWeight: '900', color: match.isLive ? '#ef4444' : 'white', letterSpacing: '1px', minWidth: 0 }}>
                        {match.score}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'flex-start', color: 'white', fontWeight: match.isLive ? 'bold' : 'normal', minWidth: 0 }}>
                        {match.awayLogo && <img src={match.awayLogo} alt="" style={{ width: '20px', flexShrink: 0 }} onError={(e) => e.target.style.display = 'none'} />}
                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.9rem' }}>{match.away}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {expandedMatchId === match.id ? <ChevronUp size={18} color="var(--accent-gold)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                      </div>
                    </div>

                    {/* Renderizado Subliminal de Goleadores */}
                    {(match.homeGoals?.length > 0 || match.awayGoals?.length > 0) && (
                      <div style={{ display: 'grid', gridTemplateColumns: '45px 1fr 60px 1fr 30px', padding: '0 0.5rem 0.6rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '-0.3rem', alignItems: 'start' }}>
                        <div></div>
                        <div style={{ textAlign: 'right', paddingRight: '0.4rem', lineHeight: '1.2' }}>
                          {match.homeGoals?.map((g, i) => <div key={i}>⚽ {g}</div>)}
                        </div>
                        <div></div>
                        <div style={{ paddingLeft: '0.4rem', lineHeight: '1.2' }}>
                          {match.awayGoals?.map((g, i) => <div key={i}>⚽ {g}</div>)}
                        </div>
                        <div></div>
                      </div>
                    )}

                    {/* Renderizado de Alineaciones (Acordeón) */}
                    {expandedMatchId === match.id && (match.homeLineup || match.awayLineup) && (
                      <div className="animate-fade-in" style={{ padding: '1rem', background: 'rgba(0,0,0,0.4)', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div style={{ flex: 1, minWidth: 0, paddingRight: '0.5rem' }}>
                            <div style={{ color: 'var(--accent-gold)', fontWeight: '900', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                              {match.homeLineup?.formation || 'Titulares'}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                              {match.homeLineup?.startXI?.map((p, i) => (
                                <div key={i} style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                  <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', width: '20px', textAlign: 'right' }}>{p.player.number}</span>
                                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.player.name}</span>
                                </div>
                              ))}
                            </div>
                            {match.homeLineup?.substitutes?.length > 0 && (
                              <>
                                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '0.5rem', borderBottom: '1px dotted rgba(255,255,255,0.1)', paddingBottom: '0.2rem' }}>SUPLENTES</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                  {match.homeLineup.substitutes.map((p, i) => (
                                    <div key={`sub-${i}`} style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', width: '20px', textAlign: 'right' }}>{p.player.number}</span>
                                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.player.name}</span>
                                    </div>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                          <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                          <div style={{ flex: 1, minWidth: 0, paddingLeft: '0.5rem', textAlign: 'right' }}>
                            <div style={{ color: 'var(--accent-gold)', fontWeight: '900', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem' }}>
                              {match.awayLineup?.formation || 'Titulares'}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                              {match.awayLineup?.startXI?.map((p, i) => (
                                <div key={i} style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.player.name}</span>
                                  <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', width: '20px', textAlign: 'left' }}>{p.player.number}</span>
                                </div>
                              ))}
                            </div>
                            {match.awayLineup?.substitutes?.length > 0 && (
                              <>
                                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '0.5rem', borderBottom: '1px dotted rgba(255,255,255,0.1)', paddingBottom: '0.2rem', textAlign: 'right' }}>SUPLENTES</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                  {match.awayLineup.substitutes.map((p, i) => (
                                    <div key={`sub-${i}`} style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.player.name}</span>
                                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', width: '20px', textAlign: 'left' }}>{p.player.number}</span>
                                    </div>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    {expandedMatchId === match.id && !match.homeLineup && !match.awayLineup && (
                      <div className="animate-fade-in" style={{ padding: '1rem', background: 'rgba(0,0,0,0.4)', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                        Alineaciones aún no confirmadas por la liga oficial.
                      </div>
                    )}

                    {idx < liga.matches.length - 1 && <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', width: '90%', margin: '0 auto' }}></div>}
                  </div>
                ))}

                {!isClosed && apiToSlug[liga.id] && (
                  <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center', background: 'rgba(0,0,0,0.2)' }}>
                    <button
                      onClick={() => navigate(`/liga/${apiToSlug[liga.id]}`, { state: { tab: 'actualidad', fromLive: true } })}
                      className="glass-panel"
                      style={{ background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)', color: '#fde68a', padding: '0.6rem 1.5rem', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s', fontSize: '0.9rem' }}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(251, 191, 36, 0.2)'}
                      onMouseOut={e => e.currentTarget.style.background = 'rgba(251, 191, 36, 0.1)'}
                    >
                      🏆 {t.ver_clasificacion || 'Clasificación'}
                    </button>
                  </div>
                )}
              </div>
            )
          })}

        </div>

        {/* COLUMNA DERECHA: SIDEBAR DE TORNEOS */}
        <div className="desktop-sidebar">
          <div className="glass-panel animate-fade-in" style={{ padding: '1.5rem', borderRadius: '16px' }}>
            <h3 style={{ color: 'white', marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
              <Activity size={20} color="var(--accent-gold)" />
              Accesos Rápidos
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {Object.entries(groupedSidebarLeagues).map(([groupName, leagues]) => {
                const isOpen = !!expandedSidebar[groupName];
                return (
                <div key={groupName} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div 
                    onClick={() => toggleSidebarGroup(groupName)}
                    style={{ 
                      color: isOpen ? 'white' : 'rgba(255,255,255,0.6)', 
                      fontSize: '0.8rem', 
                      fontWeight: 'bold', 
                      letterSpacing: '1px', 
                      padding: '1rem 0', 
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'color 0.2s'
                    }}
                    onMouseOver={e => e.currentTarget.style.color = 'white'}
                    onMouseOut={e => e.currentTarget.style.color = isOpen ? 'white' : 'rgba(255,255,255,0.6)'}
                  >
                    {groupName}
                    {isOpen ? <ChevronUp size={16} color="var(--accent-gold)" /> : <ChevronDown size={16} />}
                  </div>
                  
                  {isOpen && (
                    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', paddingBottom: '1rem' }}>
                      {leagues.map(l => (
                        <div
                          key={l.slug}
                          onClick={() => navigate(`/liga/${l.slug}`, { state: { fromLive: true } })}
                          style={{ color: 'var(--text-muted)', fontSize: '0.9rem', padding: '0.4rem 0.5rem', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                          onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'white'; }}
                          onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                        >
                          <ChevronRight size={14} style={{ opacity: 0.5 }} />
                          {l.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )})}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
        .date-scroll-container::-webkit-scrollbar {
          display: none;
        }
        
        .desktop-sidebar {
          width: 100%;
        }
        
        .desktop-sidebar::-webkit-scrollbar {
          display: none;
        }
        
        @media (min-width: 1024px) {
          .desktop-sidebar {
            width: 320px;
            flex-shrink: 0;
            position: sticky;
            top: 2rem;
            max-height: calc(100vh - 4rem);
            overflow-y: auto;
          }
          .main-content-wrapper {
            flex-direction: row !important;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
