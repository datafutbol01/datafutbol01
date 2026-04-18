import { Star } from 'lucide-react';

export default function StaticBanner({ 
  link = "https://example.com/sponsor", 
  title = "Sponsor Oficial", 
  bg = "rgba(16, 185, 129, 0.1)", // Verde esmeralda disimulado
  border = "#10b981", 
  icon: Icon = Star 
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
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
        e.currentTarget.style.background = bg;
        e.currentTarget.style.borderColor = border;
        e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.4), inset 0 0 0 1px ${border}`;
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
        <Icon size={32} color={border} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <h2 className="title-font" style={{ fontSize: '1.5rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          {title}
        </h2>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase' }}>
          Espacio Ad
        </span>
      </div>
    </a>
  );
}
