import { useState } from 'react';
import { ArrowLeft, Activity, Calendar as CalendarIcon, ChevronRight, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LiveScoresHub() {
  const navigate = useNavigate();
  // Estado para la barra de fechas
  const [activeDate, setActiveDate] = useState('HOY');
  
  // Estado para saber qué ligas están contraídas (acordeón). Guardaremos los IDs de las ligas cerradas.
  const [collapsedLeagues, setCollapsedLeagues] = useState({});

  const toggleLeague = (leagueId) => {
    setCollapsedLeagues(prev => ({
      ...prev,
      [leagueId]: !prev[leagueId]
    }));
  };

  // LISTA OFICIAL VIP DE LIGAS (Las que conectaremos a la API)
  const mockLeagues = [
    {
      id: "mundial", name: "COPA DEL MUNDO 2026", country: "Mundial", flag: "https://flagcdn.com/w40/un.png", priority: true,
      matches: [{ d: "15:00", isLive: false, home: "Argentina", homeLogo: "https://flagcdn.com/w40/ar.png", away: "Brasil", awayLogo: "https://flagcdn.com/w40/br.png", score: "- : -" }]
    },
    {
      id: "champions", name: "UEFA CHAMPIONS LEAGUE", country: "Europa", flag: "https://flagcdn.com/w40/eu.png", priority: true,
      matches: [{ d: "60'", isLive: true, home: "Real Madrid", homeLogo: "/escudos/real-madrid.webp", away: "Bayern Munich", awayLogo: "/escudos/bayern-munich.svg", score: "1 - 1" }]
    },
    {
      id: "libertadores", name: "COPA LIBERTADORES", country: "Sudamérica", flag: "https://flagcdn.com/w40/eu.png", priority: true,
      matches: [{ d: "21:30", isLive: false, home: "Boca Juniors", homeLogo: "/escudos/boca-juniors.webp", away: "Flamengo", awayLogo: "", score: "- : -" }]
    },
    {
      id: "premier", name: "PREMIER LEAGUE", country: "Inglaterra", flag: "https://flagcdn.com/w40/gb-eng.png", priority: false,
      matches: [{ d: "FT", isLive: false, home: "Arsenal", homeLogo: "/escudos/arsenal.webp", away: "Manchester City", awayLogo: "/escudos/manchester-city.webp", score: "2 - 1" }]
    },
    {
      id: "laliga", name: "LA LIGA", country: "España", flag: "https://flagcdn.com/w40/es.png", priority: false,
      matches: [{ d: "88'", isLive: true, home: "Barcelona", homeLogo: "/escudos/barcelona.webp", away: "Atlético Madrid", awayLogo: "/escudos/atletico-madrid.webp", score: "2 - 0" }]
    },
    {
      id: "serie_a", name: "SERIE A", country: "Italia", flag: "https://flagcdn.com/w40/it.png", priority: false,
      matches: [{ d: "HT", isLive: true, home: "Juventus", homeLogo: "", away: "Milan", awayLogo: "", score: "0 - 0" }]
    },
    {
      id: "bundesliga", name: "BUNDESLIGA", country: "Alemania", flag: "https://flagcdn.com/w40/de.png", priority: false,
      matches: [{ d: "FT", isLive: false, home: "Borussia Dortmund", homeLogo: "/escudos/borussia-dortmund.webp", away: "Bayer Leverkusen", awayLogo: "/escudos/bayer-leverkusen.webp", score: "3 - 2" }]
    },
    {
      id: "ligue1", name: "LIGUE 1", country: "Francia", flag: "https://flagcdn.com/w40/fr.png", priority: false,
      matches: [{ d: "10'", isLive: true, home: "PSG", homeLogo: "", away: "Marseille", awayLogo: "", score: "1 - 0" }]
    },
    {
      id: "arg", name: "LIGA PROFESIONAL", country: "Argentina", flag: "https://flagcdn.com/w40/ar.png", priority: false,
      matches: [{ d: "19:00", isLive: false, home: "Racing Club", homeLogo: "/escudos/racing-club.webp", away: "Independiente", awayLogo: "/escudos/independiente.webp", score: "- : -" }]
    },
    {
      id: "brasileirao", name: "BRASILEIRÃO SERIES A", country: "Brasil", flag: "https://flagcdn.com/w40/br.png", priority: false,
      matches: [{ d: "FT", isLive: false, home: "Palmeiras", homeLogo: "", away: "Sao Paulo", awayLogo: "", score: "1 - 1" }]
    },
    {
      id: "escocia", name: "SCOTTISH PREMIERSHIP", country: "Escocia", flag: "https://flagcdn.com/w40/gb-sct.png", priority: false,
      matches: [{ d: "FT", isLive: false, home: "Celtic", homeLogo: "/escudos/celtic.webp", away: "Rangers", awayLogo: "/escudos/rangers.webp", score: "3 - 3" }]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)', paddingTop: '2rem', position: 'relative', paddingBottom: '4rem' }}>
      
      {/* Botón Volver */}
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

      {/* Cabecera Tipo Navegador Live */}
      <div style={{ padding: '0 2rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="title-font animate-fade-in" style={{ fontSize: '2.5rem', color: 'white', display: 'flex', alignItems: 'center', gap: '0.8rem', margin: 0 }}>
          <Activity size={32} color="#ef4444" /> EN DIRECTO
        </h1>
        
        {/* Carrusel de Fechas */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '50px' }}>
          {['AYER', 'HOY', 'MAÑANA'].map((dia, i) => (
            <button 
              key={i}
              onClick={() => setActiveDate(dia)}
              style={{
                background: activeDate === dia ? '#ef4444' : 'transparent',
                color: activeDate === dia ? 'white' : 'var(--text-muted)',
                border: 'none',
                padding: '0.6rem 2rem',
                borderRadius: '50px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s',
                letterSpacing: '1px'
              }}
            >
              {dia}
            </button>
          ))}
          <button style={{ background: 'transparent', color: 'var(--text-muted)', border: 'none', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
             <CalendarIcon size={18} />
          </button>
        </div>
      </div>

      {/* Listado Híbrido de Ligas (Acordeón) */}
      <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {mockLeagues.map((liga) => {
          // Si la liga NO tiene prioridad, por defecto está colapsada (a menos que el usuario la abra)
          // La lógica: está CERRADA si está en el estado como true, o si no tiene prioridad y no se ha cambiado su estado a false
          const isClosed = collapsedLeagues[liga.id] !== undefined 
                           ? collapsedLeagues[liga.id] 
                           : !liga.priority;

          return (
            <div key={liga.id} className="glass-panel animate-fade-in" style={{ borderRadius: '16px', overflow: 'hidden', padding: 0 }}>
              
              {/* Header de Liga (Acordeón Clickeable) */}
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

              {/* Partidos (Se ocultan si isClosed es verdadero) */}
              {!isClosed && liga.matches.map((match, idx) => (
                <div key={idx}>
                  <div style={{ padding: '1.2rem', display: 'grid', gridTemplateColumns: '60px 1fr 80px 1fr 40px', alignItems: 'center', cursor: 'pointer', transition: 'background 0.2s', opacity: match.isLive ? 1 : 0.6 }} 
                       onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} 
                       onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                      
                      {/* Minuto / Tanda */}
                      <div style={{ color: match.isLive ? '#ef4444' : 'var(--text-muted)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem' }}>
                         {match.isLive && <span style={{ width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>}
                         {match.d}
                      </div>
                      
                      {/* Local */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', justifyContent: 'flex-end', fontWeight: match.isLive ? 'bold' : 'normal', color: 'white' }}>
                         {match.home} 
                         {match.homeLogo && <img src={match.homeLogo} alt="" style={{ width: '24px' }} onError={(e) => e.target.style.display = 'none'} />}
                      </div>
                      
                      {/* Resultado */}
                      <div style={{ display: 'flex', justifyContent: 'center', fontSize: '1.2rem', fontWeight: '900', color: match.isLive ? '#ef4444' : 'white', letterSpacing: '2px' }}>
                         {match.score}
                      </div>
                      
                      {/* Visitante */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', justifyContent: 'flex-start', color: 'white', fontWeight: match.isLive ? 'bold' : 'normal' }}>
                         {match.awayLogo && <img src={match.awayLogo} alt="" style={{ width: '24px' }} onError={(e) => e.target.style.display = 'none'} />} 
                         {match.away}
                      </div>

                      {/* Flecha Info */}
                      <div style={{ color: 'var(--text-muted)', display: 'flex', justifyContent: 'flex-end' }}>
                         <ChevronRight size={16} />
                      </div>
                  </div>
                  {/* Línea divisoria entre partidos de la misma liga (excepto el último) */}
                  {idx < liga.matches.length - 1 && <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', width: '90%', margin: '0 auto' }}></div>}
                </div>
              ))}
            </div>
          )
        })}

        {/* Mensaje de Info de Desarrollo */}
        <div style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem', border: '1px dashed rgba(255, 255, 255, 0.2)', borderRadius: '16px', color: 'var(--text-muted)' }}>
           <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>👆 Interfaz Acordeón V1.0. Toca las ligas prioritarias y secundarias para cerrarlas/abrirlas.</p>
        </div>

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
