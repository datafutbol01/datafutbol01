import React from 'react';

export default function LeagueTabs({ activeTab, setActiveTab, clubsLength }) {
  const btnStyle = (tabId) => ({
    background: activeTab === tabId ? 'rgba(255,255,255,0.1)' : 'transparent',
    color: activeTab === tabId ? 'var(--text-main)' : 'var(--text-muted)',
    border: 'none', 
    padding: '1rem', 
    borderRadius: '12px', 
    fontSize: '0.95rem', 
    fontWeight: 'bold', 
    cursor: 'pointer', 
    flex: 1, 
    transition: 'all 0.3s'
  });

  return (
    <div 
      className="glass-panel animate-fade-in tabs-container" 
      style={{ 
        display: 'flex', 
        margin: '0 auto 3rem',
        maxWidth: '800px',
        borderRadius: '16px', 
        padding: '0.5rem'
      }}
    >
      <button onClick={() => setActiveTab('actualidad')} style={btnStyle('actualidad')}>
        Temporada Actual
      </button>
      {clubsLength > 0 && (
        <>
          <button onClick={() => setActiveTab('clubes')} style={btnStyle('clubes')}>
            Equipos Actuales
          </button>
          <button onClick={() => setActiveTab('temporadas')} style={btnStyle('temporadas')}>
            Campeonatos
          </button>
          <button onClick={() => setActiveTab('enfrentamientos')} style={btnStyle('enfrentamientos')}>
            Historial
          </button>
        </>
      )}
    </div>
  );
}
