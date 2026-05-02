import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Globe2, Swords, Earth, Shield, Star, Sun } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function CopasIndex() {
  const tournaments = [
    { 
      id: 'champions', 
      name: 'Champions League', 
      icon: Trophy, 
      color: 'var(--accent-gold)',
      desc: 'El archivo definitivo del torneo de clubes más importante de Europa.'
    },
    { 
      id: 'libertadores', 
      name: 'Copa Libertadores', 
      icon: Globe2, 
      color: '#38bdf8',
      desc: 'La gloria máxima de Sudamérica, documentada a la perfección.'
    },
    { 
      id: 'intercontinental', 
      name: 'Copa Intercontinental', 
      icon: Swords, 
      color: '#ff4b4b',
      desc: 'El choque de mundos: el campeón de Europa contra el campeón de América.'
    },
    { 
      id: 'mundial-clubes', 
      name: 'Mundial de Clubes', 
      icon: Earth, 
      color: '#fbbf24',
      desc: 'El torneo definitivo de la FIFA que corona al mejor equipo del planeta.'
    },
    { 
      id: 'europa_league', 
      name: 'Europa League', 
      icon: Shield, 
      color: '#f97316',
      desc: 'La mítica Copa de la UEFA y actual Europa League.'
    },
    { 
      id: 'conference_league', 
      name: 'Conference League', 
      icon: Star, 
      color: '#22c55e',
      desc: 'El certamen que coronó a los nuevos campeones europeos.'
    },
    { 
      id: 'intertoto', 
      name: 'Copa Intertoto', 
      icon: Sun, 
      color: '#eab308',
      desc: 'El torneo de verano que clasificaba a las competencias mayores.'
    },
    { 
      id: 'supercopa_sudamericana', 
      name: 'Supercopa Sudamericana', 
      icon: Shield, 
      color: '#3b82f6',
      desc: 'La histórica competición que reunía a todos los campeones de la Libertadores.'
    }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden', background: '#020617' }}>
      <div style={{ position: 'relative', zIndex: 1, padding: '2rem', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <div style={{ position: 'relative', zIndex: 100, marginBottom: '3rem' }}>
          <Breadcrumbs paths={[{ name: 'Historia de las Copas' }]} onBack={() => { window.location.href = '/'; }} />
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="title-font animate-fade-in" style={{ fontSize: '3.5rem', color: 'white', letterSpacing: '-1px' }}>
            HISTORIA DE LAS <span style={{ color: 'var(--accent-gold)' }}>COPAS</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '1rem auto 0', fontWeight: '300' }}>
            Selecciona un torneo para navegar por sus ediciones históricas.
          </p>
        </div>

        <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {tournaments.map(t => (
            <Link
              key={t.id}
              to={`/copas/${t.id}`}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '4rem 2rem',
                borderRadius: '24px',
                textDecoration: 'none',
                background: `linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.01))`,
                border: `1px solid rgba(255,255,255,0.05)`,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                color: 'white'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.borderColor = t.color;
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3), inset 0 0 0 1px ${t.color}`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem', border: `1px solid ${t.color}50`
              }}>
                <t.icon size={40} color={t.color} />
              </div>
              <h2 className="title-font" style={{ fontSize: '2rem', marginBottom: '1rem', color: t.color }}>{t.name}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.5 }}>{t.desc}</p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
