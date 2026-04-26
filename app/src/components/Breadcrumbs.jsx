import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';

const Breadcrumbs = ({ paths, onBack, className, style }) => {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0',
      marginBottom: '2rem',
      fontSize: '0.9rem',
      color: 'var(--text-muted)',
      flexWrap: 'wrap',
      ...style
    }} className={`animate-fade-in ${className || ''}`}>
      
      {/* Botón de Volver Tradicional */}
      <button
        onClick={onBack || (() => navigate(-1))}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'white',
          padding: '0.4rem 0.8rem',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.2s',
          marginRight: '0.5rem'
        }}
        onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'var(--accent-gold)'; }}
        onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
      >
        <ArrowLeft size={16} /> Volver
      </button>

      {/* Separador Visual */}
      <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)', marginRight: '0.5rem' }}></div>

      <Link 
        to="/" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.3rem', 
          color: 'var(--text-muted)', 
          textDecoration: 'none',
          transition: 'color 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
        onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
      >
        <Home size={16} />
        <span style={{ fontWeight: '500' }}>Inicio</span>
      </Link>

      {paths.map((path, index) => {
        const isLast = index === paths.length - 1;
        
        return (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ChevronRight size={14} color="rgba(255,255,255,0.2)" />
            
            {path.url && !isLast ? (
              <Link 
                to={path.url}
                style={{ 
                  color: 'var(--text-muted)', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {path.name}
              </Link>
            ) : (
              <span style={{ 
                color: isLast ? 'white' : 'var(--text-muted)', 
                fontWeight: isLast ? '700' : '500'
              }}>
                {path.name}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
