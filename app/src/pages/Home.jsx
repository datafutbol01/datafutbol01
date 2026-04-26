import { Link, useNavigate } from 'react-router-dom';
import { Search, Trophy, Shield, Globe2, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [activeLang, setActiveLang] = useState('Español');

  // Search state
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const allItems = useRef([]);

  useEffect(() => {
    import('../data/loader').then(module => {
      allItems.current = module.getAllSearchableItems();
    });
  }, []);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();

    // Diccionario de torneos para mapear nombres de trofeos a sus slugs (URLs)
    const trophyToSlug = {
      'fa cup': 'fa_cup',
      'champions': 'champions',
      'liga de campeones': 'champions',
      'libertadores': 'libertadores',
      'sudamericana': 'sudamericana',
      'europa league': 'europa_league',
      'uefa': 'europa_league',
      'copa del rey': 'copa_del_rey',
      'dfb pokal': 'dfb_pokal',
      'copa de francia': 'copa_francia',
      'coppa italia': 'coppa_italia',
      'copa argentina': 'copa_argentina'
    };

    // Diccionario de atajos para equipos que no tienen JSON pero queremos que dirijan a su liga
    const leagueKeywords = {
      'quilmes': 'arg_nacional_b',
      'colon': 'arg_nacional_b',
      'san martin de san juan': 'arg_nacional_b',
      'san martin sj': 'arg_nacional_b',
      'san martin (sj)': 'arg_nacional_b',
      'aldosivi': 'arg_nacional_b',
      'ferro': 'arg_nacional_b',
      'chicago': 'arg_nacional_b',
      'nueva chicago': 'arg_nacional_b',
      'all boys': 'arg_nacional_b',
      'patronato': 'arg_nacional_b',
      'san miguel': 'arg_nacional_b',
      'moron': 'arg_nacional_b',
      'deportivo moron': 'arg_nacional_b',
      'gimnasia de jujuy': 'arg_nacional_b',
      'gimnasia y tiro': 'arg_nacional_b',
      'los andes': 'arg_b_metro',
      'dock sud': 'arg_b_metro',
      'midland': 'arg_b_metro',
      'excursionistas': 'arg_b_metro',
      'laferrere': 'arg_b_metro',
      'america': 'mex_liga_mx',
      'cruz azul': 'mex_liga_mx',
      'chivas': 'mex_liga_mx',
      'pumas': 'mex_liga_mx',
      'monterrey': 'mex_liga_mx',
      'tigres': 'mex_liga_mx'
    };

    const rawMatches = allItems.current.filter(item => 
      item.name.toLowerCase().includes(q) || 
      (item.leagueName && item.leagueName.toLowerCase().includes(q))
    ).slice(0, 2); // Tomamos 2 clubes para dejar lugar a los atajos de torneos

    let expandedResults = [];
    
    rawMatches.forEach(match => {
       // 1. Agregamos el club como primera opción (La Ficha Histórica)
       expandedResults.push(match);
       
       if (match.type === 'club') {
          let shortcutsAdded = 0;

          // 2. Agregamos su liga doméstica
          if (!expandedResults.find(r => r.id === `shortcut_${match.leagueId}`)) {
             expandedResults.push({
                type: 'shortcut',
                id: `shortcut_${match.leagueId}`,
                name: `🏆 Ir a tabla de ${match.leagueName}`,
                country: 'Torneo Local',
                url: `/liga/${match.leagueId}`,
                shield: null
             });
             shortcutsAdded++;
          }

          // 3. Torneos dinámicos leyendo el JSON (máximo 2 para no romper la pantalla)
          if (match.palmares && match.palmares.length > 0) {
             const addedSlugs = new Set();
             match.palmares.forEach(trophy => {
                if (shortcutsAdded >= 3) return; // Freno: máximo 1 liga y 2 copas extras

                const tName = trophy.torneo.toLowerCase();
                let targetSlug = null;
                for (const [key, slug] of Object.entries(trophyToSlug)) {
                   if (tName.includes(key)) {
                      targetSlug = slug;
                      break;
                   }
                }

                if (targetSlug && !addedSlugs.has(targetSlug) && targetSlug !== match.leagueId) {
                   addedSlugs.add(targetSlug);
                   if (!expandedResults.find(r => r.id === `shortcut_${targetSlug}`)) {
                       expandedResults.push({
                          type: 'shortcut',
                          id: `shortcut_${targetSlug}`,
                          name: `⭐ Ver ${trophy.torneo}`,
                          country: 'Trofeo Ganado',
                          url: `/liga/${targetSlug}`,
                          shield: null
                       });
                       shortcutsAdded++;
                   }
                }
             });
          }
       }
    });

    // 4. Si el usuario buscó un equipo que no tiene JSON, pero está en el diccionario de atajos:
    Object.entries(leagueKeywords).forEach(([keyword, lId]) => {
      if (keyword.includes(q)) {
         const leagueObj = allItems.current.find(i => i.type === 'league' && i.id === lId);
         if (leagueObj && !expandedResults.find(r => r.id === `shortcut_${lId}`)) {
             expandedResults.push({
                type: 'shortcut',
                id: `shortcut_${lId}`,
                name: `🏆 Ir a tabla de ${leagueObj.name} (Torneo Local)`,
                country: leagueObj.country,
                url: `/liga/${lId}`,
                shield: null
             });
         }
      }
    });

    // 4. Búsqueda por "Términos Genéricos" (Historiales, Posiciones)
    if (q.includes('historial') || q.includes('enfrentamiento')) {
       const topLeagues = ['argentina', 'inglaterra', 'espania', 'italia', 'paises_bajos', 'champions'];
       topLeagues.forEach(lId => {
          const leagueObj = allItems.current.find(i => i.type === 'league' && i.id === lId);
          if (leagueObj) {
             expandedResults.push({
                type: 'shortcut',
                id: `historial_${lId}`,
                name: `📊 Historiales de ${leagueObj.name}`,
                country: 'Sección de Liga',
                url: `/liga/${lId}`,
                state: { tab: 'enfrentamientos' },
                shield: null
             });
          }
       });
    }

    if (q.includes('posicion') || q.includes('tabla')) {
       const topLeagues = ['argentina', 'inglaterra', 'espania', 'italia', 'paises_bajos', 'arg_nacional_b'];
       topLeagues.forEach(lId => {
          const leagueObj = allItems.current.find(i => i.type === 'league' && i.id === lId);
          if (leagueObj) {
             expandedResults.push({
                type: 'shortcut',
                id: `tabla_${lId}`,
                name: `📈 Tabla de ${leagueObj.name}`,
                country: 'Sección de Liga',
                url: `/liga/${lId}`,
                state: { tab: 'actualidad' },
                shield: null
             });
          }
       });
    }

    // Filtramos para no mostrar más de 6 u 8 resultados en total para que no quede gigante
    setResults(expandedResults.slice(0, 8));
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (!isFocused || results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      const selectedItem = results[selectedIndex];
      if (selectedItem) {
        navigate(selectedItem.url, selectedItem.state ? { state: selectedItem.state } : undefined);
      }
    } else if (e.key === 'Escape') {
      setIsFocused(false);
      setQuery('');
    }
  };

  const dict = {
    'Español': { title1: 'DATA', title2: 'FÚTBOL', sub: 'El archivo definitivo. Viajá por la historia de los clubes, reviví los mundiales y repasá las grandes batallas intercontinentales.', search: 'Escribe un club o liga...', explore: 'HISTORIA DE LOS CLUBES', wc: 'HISTORIA DE LOS MUNDIALES', cups: 'HISTORIA DE LAS COPAS', live: 'RESULTADOS EN VIVO' },
    'English': { title1: 'FOOTBALL ', title2: 'ENCYCLOPEDIA', sub: 'The definitive archive. Travel through club history, relive World Cups, and review great intercontinental battles.', search: 'Type a club or league...', explore: 'CLUB HISTORY', wc: 'WORLD CUP HISTORY', cups: 'INTERNATIONAL CUPS', live: 'LIVE SCORES' },
    'Italiano': { title1: 'ENCICLOPEDIA DEL ', title2: 'CALCIO', sub: 'L\'archivio definitivo. Viaggia nella storia dei club, rivivi i mondiali e ripassa le grandi battaglie intercontinentali.', search: 'Scrivi un club o lega...', explore: 'STORIA DEI CLUB', wc: 'STORIA DEI MONDIALI', cups: 'STORIA DELLE COPPE', live: 'RISULTATI IN DIRETTA' },
    'Deutsch': { title1: 'FUSSBALL ', title2: 'ENZYKLOPÄDIE', sub: 'Das definitive Archiv. Reise durch die Vereinsgeschichte, erlebe Weltmeisterschaften neu und blicke auf interkontinentale Schlachten zurück.', search: 'Verein oder Liga eingeben...', explore: 'VEREINSGESCHICHTE', wc: 'WM-GESCHICHTE', cups: 'INTERNATIONALE POKALE', live: 'LIVE-ERGEBNISSE' },
    'Français': { title1: 'ENCYCLOPÉDIE DU ', title2: 'FOOTBALL', sub: 'Les archives définitives. Voyagez dans l\'histoire des clubs, revivez les coupes du monde et les grandes batailles intercontinentales.', search: 'Écrire un club ou une ligue...', explore: 'HISTOIRE DES CLUBS', wc: 'HISTOIRE DES COUPES DU MONDE', cups: 'HISTOIRE DES COUPES', live: 'RÉSULTATS EN DIRECT' },
    'Português': { title1: 'ENCICLOPÉDIA DO ', title2: 'FUTEBOL', sub: 'O arquivo definitivo. Viaje pela história dos clubes, reviva mundiais e repasse grandes batalhas intercontinentais.', search: 'Digite um clube ou liga...', explore: 'HISTÓRIA DOS CLUBES', wc: 'HISTÓRIA DOS MUNDIAIS', cups: 'HISTÓRIA DAS COPAS', live: 'RESULTADOS AO VIVO' }
  };
  const t = dict[activeLang] || dict['Español'];

  const handleTranslate = (langName) => {
    setActiveLang(langName);
    const codeMap = {
      'Español': 'es', 'English': 'en', 'Italiano': 'it',
      'Deutsch': 'de', 'Français': 'fr', 'Português': 'pt'
    };
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = codeMap[langName];
      select.dispatchEvent(new Event('change'));
    }
  };

  const pillars = [
    { title: t.explore, icon: Shield, link: '/leagues', bg: 'rgba(251, 191, 36, 0.1)', border: 'var(--accent-gold)' },
    { title: t.wc, icon: Globe2, link: '/mundiales', bg: 'rgba(56, 189, 248, 0.1)', border: '#38bdf8' },
    { title: t.live, icon: Activity, link: '/resultados', bg: 'rgba(239, 68, 68, 0.1)', border: '#ef4444' }
  ];

  if (import.meta.env.DEV) {
    pillars.splice(2, 0, { title: t.cups, icon: Trophy, link: '/champions', bg: 'rgba(167, 139, 250, 0.1)', border: '#a855f7' });
  }

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden', background: '#020617' }}>
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/futbol_1910.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4,
          filter: 'grayscale(30%)'
        }}
      />

      {/* Search Trigger and Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'linear-gradient(to bottom, transparent 0%, rgba(2,6,23,0.8) 100%)'
      }}>
        <h1 className="title-font animate-fade-in" style={{ fontSize: '4.5rem', marginBottom: '1rem', textAlign: 'center', letterSpacing: '-2px' }}>
          {t.title1} <span style={{ color: 'var(--accent-gold)' }}>{t.title2}</span>
        </h1>
        <p className="animate-fade-in" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '800px', textAlign: 'center', fontWeight: '300' }}>
          {t.sub}
        </p>

        {/* Global Search Bar (El 5to elemento) */}
        <div style={{ width: '100%', maxWidth: '700px', marginBottom: '4rem', position: 'relative' }} className="animate-fade-in">
          <div
            className="glass-panel"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.5rem 1.5rem',
              borderRadius: '24px',
              border: isFocused ? '1px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(2, 6, 23, 0.7)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: isFocused ? '0 12px 40px rgba(251, 191, 36, 0.2)' : '0 12px 40px rgba(0,0,0,0.4)',
            }}
          >
            <Search size={26} color={isFocused ? 'var(--accent-gold)' : 'var(--text-muted)'} style={{ transition: 'color 0.3s ease' }} />
            <input
              type="text"
              placeholder={t.search}
              value={query}
              onChange={e => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              onKeyDown={handleKeyDown}
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: '1.4rem',
                color: 'white',
                fontFamily: 'var(--font-secondary)',
                padding: '1.2rem 0'
              }}
            />
          </div>

          {/* Results Dropdown */}
          <AnimatePresence>
            {isFocused && query.trim() !== '' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 15px)',
                  left: 0,
                  width: '100%',
                  background: 'rgba(15, 23, 42, 0.98)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                  overflow: 'hidden',
                  zIndex: 50
                }}
              >
                {results.length > 0 ? (
                  <div style={{ padding: '0.8rem' }}>
                    {results.map((item, idx) => (
                      <div
                        key={item.id || item.url}
                        onClick={() => navigate(item.url, item.state ? { state: item.state } : undefined)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem 1.2rem',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          background: selectedIndex === idx ? 'var(--accent-gold)' : 'transparent',
                          color: selectedIndex === idx ? 'black' : 'white',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {item.shield ? (
                          <img src={item.shield} alt={item.name} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                        ) : (
                          <Trophy size={22} />
                        )}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>
                            {item.type === 'club' ? `⚽ ${item.name}` : item.name}
                          </span>
                          <span style={{ fontSize: '0.75rem', opacity: 0.8, fontWeight: '700', textTransform: 'uppercase', color: selectedIndex === idx ? 'rgba(0,0,0,0.7)' : 'var(--text-muted)' }}>
                            {item.type === 'league' ? item.country : (item.type === 'shortcut' ? item.country : 'Ficha Histórica del Club')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', fontWeight: 'bold' }}>
                    No se encontraron resultados en el archivo.
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 4 GRANDES PILARES DE LA PÁGINA (MATRIX) */}
        <div
          className="animate-fade-in"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            width: '100%',
            maxWidth: '1200px'
          }}
        >
          {pillars.map((pillar, idx) => (
            <Link
              key={idx}
              to={pillar.link}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1.5rem',
                padding: '3rem 2rem',
                borderRadius: '24px',
                textDecoration: 'none',
                color: 'white',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.background = pillar.bg;
                e.currentTarget.style.borderColor = pillar.border;
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.4), inset 0 0 0 1px ${pillar.border}`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid rgba(255,255,255,0.1)`
              }}>
                <pillar.icon size={32} color={pillar.border} />
              </div>
              <h2 className="title-font" style={{ fontSize: '1.5rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                {pillar.title}
              </h2>
            </Link>
          ))}
        </div>

      </div>

      <div
        className="animate-fade-in hide-scrollbar language-footer-container"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          gap: '1.5rem',
          padding: '1rem 2rem',
          background: 'rgba(2, 6, 23, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '50px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          maxWidth: 'calc(100vw - 2rem)',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          justifyContent: 'flex-start'
        }}
      >
        {[
          { lang: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
          { lang: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
          { lang: 'Italiano', flag: 'https://flagcdn.com/w40/it.png' },
          { lang: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
          { lang: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
          { lang: 'Português', flag: 'https://flagcdn.com/w40/pt.png' }
        ].map((item, idx) => (
          <button
            key={idx}
            title={`Explorar en ${item.lang}`}
            onClick={() => handleTranslate(item.lang)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'transparent',
              border: 'none',
              color: activeLang === item.lang ? 'white' : 'var(--text-muted)',
              fontSize: '0.95rem',
              fontWeight: activeLang === item.lang ? '700' : '500',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: activeLang === item.lang ? 1 : 0.6,
              padding: '0.25rem',
              flexShrink: 0,
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--accent-gold)';
              e.currentTarget.style.opacity = 1;
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = item.lang === 'Español' ? 'white' : 'var(--text-muted)';
              e.currentTarget.style.opacity = item.lang === 'Español' ? 1 : 0.6;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <img
              src={item.flag}
              alt={`Bandera de ${item.lang}`}
              style={{
                width: '24px',
                height: '16px',
                objectFit: 'cover',
                borderRadius: '3px',
                filter: item.lang === 'Español' ? 'none' : 'grayscale(40%)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            />
            <span className="lang-text" style={{ letterSpacing: '0.5px' }}>{item.lang}</span>
          </button>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .lang-text {
            display: none;
          }
          .language-footer-container {
            width: calc(100vw - 2rem) !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            justify-content: flex-start !important;
            touch-action: pan-x !important;
            padding: 1rem !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
