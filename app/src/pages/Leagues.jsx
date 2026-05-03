import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { getLeagues } from '../data/loader';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Leagues() {
  const leagues = getLeagues().filter(l => !l.isHidden);
  const [activeLeagueIdx, setActiveLeagueIdx] = useState(null);
  const activeLeague = activeLeagueIdx !== null ? leagues[activeLeagueIdx] : null;
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background Image */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/ingles_1920.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(2,6,23,0.5) 0%, rgba(2,6,23,0.95) 100%)',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, padding: '2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div style={{ alignSelf: 'flex-start', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <Breadcrumbs paths={[{ name: 'Clubes del Mundo' }]} />
        </div>

        <h1 className="title-font animate-fade-in text-white text-5xl md:text-6xl font-black text-center mt-4 mb-10 drop-shadow-2xl px-4 leading-tight">
          Historia de los <span className="text-accent-gold block md:inline mt-2 md:mt-0">Clubes de Fútbol</span>
        </h1>

      {/* Tabs (Solapas) */}
      <div 
        className="glass-panel animate-fade-in hide-scrollbar" 
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '3rem',
          maxWidth: '1200px',
          width: '100%',
          borderRadius: '24px', 
          padding: '1.5rem',
          gap: '1.5rem',
          background: 'rgba(2, 6, 23, 0.4)'
        }}
      >
        {leagues.map((league, idx) => (
          <button
            key={league.id}
            onClick={() => {
              setActiveLeagueIdx(idx);
              navigate(`/liga/${league.id}`, { state: { tab: 'clubes' } });
            }}
            style={{
              background: activeLeagueIdx === idx ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
              color: activeLeagueIdx === idx ? 'black' : 'var(--text-main)',
              border: activeLeagueIdx === idx ? 'none' : '1px solid rgba(255,255,255,0.1)', 
              padding: '1.2rem', 
              borderRadius: '16px', 
              fontSize: '1.1rem', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              flex: '0 0 auto',
              width: '160px',
              height: '140px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: activeLeagueIdx === idx ? '0 10px 30px rgba(251, 191, 36, 0.4)' : 'none',
              transform: activeLeagueIdx === idx ? 'scale(1.05)' : 'scale(1)',
              zIndex: activeLeagueIdx === idx ? 5 : 1
            }}
            onMouseOver={(e) => {
              if (activeLeagueIdx !== idx) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(251,191,36,0.5)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.filter = 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.4)) grayscale(20%)';
              }
            }}
            onMouseOut={(e) => {
              if (activeLeagueIdx !== idx) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.filter = 'grayscale(60%) opacity(80%)';
              }
            }}
          >
            {league.shield && (
              <img 
                src={league.shield} 
                alt={`${league.name} logo`} 
                style={{ 
                  width: '55px', 
                  height: '55px', 
                  objectFit: 'contain',
                  borderRadius: league.id === 'mex_liga_mx' ? '50%' : '0',
                  maxWidth: '100%',
                  filter: activeLeagueIdx === idx ? 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.9)) drop-shadow(0 0 30px rgba(251, 191, 36, 0.6))' : 'grayscale(60%) opacity(80%)',
                  transition: 'all 0.3s'
                }} 
              />
            )}
            <span className="notranslate" style={{ letterSpacing: '0.5px' }}>{league.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeLeague && (
          <motion.div
            key={activeLeague.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-panel"
            style={{ 
              maxWidth: '900px', 
              width: '100%', 
              padding: '4rem', 
              borderRadius: '30px', 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
              borderTop: `4px solid ${activeLeague.color}`
            }}
          >
            <div className="flex flex-col items-center w-full mt-2 md:mt-4">
              {activeLeague.shield && (
                <motion.img 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  src={activeLeague.shield} 
                  alt={`${activeLeague.name} logo`} 
                  className="mb-6 drop-shadow-2xl"
                  style={{
                    height: '140px',
                    objectFit: 'contain',
                    borderRadius: activeLeague.id === 'mex_liga_mx' ? '50%' : '0'
                  }}
                />
              )}
              <h2 className="title-font notranslate text-4xl md:text-5xl font-black mb-2">{activeLeague.name}</h2>
              <p className="text-xl md:text-2xl text-accent-gold mb-8 italic">{activeLeague.country}</p>
              
              <button
                onClick={() => navigate(`/liga/${activeLeague.id}`, { state: { tab: 'clubes' } })}
                className="glass-panel"
                style={{
                  background: 'var(--accent-gold)',
                  color: 'black',
                  border: 'none',
                  padding: '1rem 3rem',
                  borderRadius: '50px',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 10px 30px rgba(251, 191, 36, 0.4)'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Explorar Clubes
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
