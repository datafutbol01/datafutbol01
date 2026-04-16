import { useState, useEffect } from 'react';
import { ArrowLeft, Activity, Calendar as CalendarIcon, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TARGET_LEAGUES } from '../config/api_leagues';

export default function LiveScoresHub() {
  const navigate = useNavigate();
  const [activeDate, setActiveDate] = useState('HOY');
  const [collapsedLeagues, setCollapsedLeagues] = useState({});
  const [liveLeagues, setLiveLeagues] = useState([]);
  const [loading, setLoading] = useState(true);

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
        // Lógica de fechas (AYER, HOY, MAÑANA)
        const dateObj = new Date();
        if (activeDate === 'AYER') dateObj.setDate(dateObj.getDate() - 1);
        if (activeDate === 'MAÑANA') dateObj.setDate(dateObj.getDate() + 1);
        
        // Evitamos toISOString porque usa UTC y en Libertadores las 21:30 es mañana en UTC.
        const yyyy = dateObj.getFullYear();
        const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
        const dd = String(dateObj.getDate()).padStart(2, '0');
        const formattedDate = `${yyyy}-${mm}-${dd}`;
        
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

        if (data.response) {
            data.response.forEach(match => {
                const lId = match.league.id;
                
                // Filtramos estrictamente a nuestras ligas configuradas (Champions, Libertadores, etc)
                if (!allowedIds.includes(lId)) return;
                
                if (!grouped[lId]) {
                    grouped[lId] = {
                        id: lId,
                        name: match.league.name,
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
                    timeStr = matchDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
                    homeLogo: match.teams.home.logo,
                    away: match.teams.away.name,
                    awayLogo: match.teams.away.logo,
                    score: `${match.goals.home ?? '-'} - ${match.goals.away ?? '-'}`
                });
            });
        }
        
        // Convertimos el objeto en Array y llevamos "nuestras" ligas prioritarias arriba
        const finalArray = Object.values(grouped).sort((a,b) => (b.priority ? 1 : 0) - (a.priority ? 1 : 0));
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

  }, [activeDate]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)', paddingTop: '2rem', position: 'relative', paddingBottom: '4rem' }}>
      
      <button
        onClick={() => { navigate(-1); }}
        className="glass-panel"
        style={{
          position: 'absolute', top: '2rem', left: '2rem', width: '50px', height: '50px',
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: 'none', background: 'rgba(255,255,255,0.05)', cursor: 'pointer', transition: 'all 0.3s', zIndex: 100
        }}
        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'}
        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
      >
        <ArrowLeft size={24} color="#ef4444" />
      </button>

      <div style={{ padding: '0 2rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="title-font animate-fade-in" style={{ fontSize: '2.5rem', color: 'white', display: 'flex', alignItems: 'center', gap: '0.8rem', margin: 0 }}>
          <Activity size={32} color={loading ? "#aaa" : "#ef4444"} /> 
          {loading ? t.conectando : t.en_directo}
        </h1>
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '50px' }}>
          {['AYER', 'HOY', 'MAÑANA'].map((dia, i) => (
            <button 
              key={i}
              onClick={() => setActiveDate(dia)}
              style={{
                background: activeDate === dia ? '#ef4444' : 'transparent',
                color: activeDate === dia ? 'white' : 'var(--text-muted)',
                border: 'none', padding: '0.6rem 2rem', borderRadius: '50px',
                fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '1px'
              }}
            >
              {t[dia]}
            </button>
          ))}
          <button style={{ background: 'transparent', color: 'var(--text-muted)', border: 'none', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
             <CalendarIcon size={18} />
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
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
                  <div style={{ padding: '1.2rem', display: 'grid', gridTemplateColumns: '60px 1fr 80px 1fr 40px', alignItems: 'center', cursor: 'pointer', transition: 'background 0.2s', opacity: match.isLive ? 1 : 0.6 }} 
                       onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} 
                       onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                      
                      <div style={{ color: match.isLive ? '#ef4444' : 'var(--text-muted)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem' }}>
                         {match.isLive && <span style={{ width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>}
                         {match.d}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', fontWeight: match.isLive ? 'bold' : 'normal', color: 'white', minWidth: 0 }}>
                         <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{match.home}</span>
                         {match.homeLogo && <img src={match.homeLogo} alt="" style={{ width: '24px', flexShrink: 0 }} onError={(e) => e.target.style.display = 'none'} />}
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'center', fontSize: '1.2rem', fontWeight: '900', color: match.isLive ? '#ef4444' : 'white', letterSpacing: '2px', minWidth: 0 }}>
                         {match.score}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-start', color: 'white', fontWeight: match.isLive ? 'bold' : 'normal', minWidth: 0 }}>
                         {match.awayLogo && <img src={match.awayLogo} alt="" style={{ width: '24px', flexShrink: 0 }} onError={(e) => e.target.style.display = 'none'} />} 
                         <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{match.away}</span>
                      </div>

                      <div style={{ color: 'var(--text-muted)', display: 'flex', justifyContent: 'flex-end' }}>
                         <ChevronRight size={16} />
                      </div>
                  </div>
                  {idx < liga.matches.length - 1 && <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', width: '90%', margin: '0 auto' }}></div>}
                </div>
              ))}
            </div>
          )
        })}

      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
      `}</style>
    </div>
  );
}
