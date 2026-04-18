import { DollarSign } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function StaticBanner({ 
  link = "https://example.com/sponsor", 
  title = "Sponsor", 
  bg = "rgba(16, 185, 129, 0.05)",
  border = "#10b981", 
  position = "left" // "left" or "right"
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Esconder en celulares para no romper el layout
    const checkSize = () => setIsVisible(window.innerWidth > 1400);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      [position]: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      zIndex: 5
    }}>
      {/* Rectángulo Superior */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-panel"
        style={{
          width: '160px',
          height: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1rem',
          padding: '1rem',
          borderRadius: '16px',
          textDecoration: 'none',
          color: 'white',
          background: 'rgba(0,0,0,0.6)',
          border: '1px solid rgba(255,255,255,0.05)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
          e.currentTarget.style.background = bg;
          e.currentTarget.style.borderColor = border;
          e.currentTarget.style.boxShadow = `0 10px 20px rgba(0,0,0,0.4), inset 0 0 0 1px ${border}`;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.background = 'rgba(0,0,0,0.6)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <DollarSign size={28} color={border} style={{ opacity: 0.5 }} />
        <span style={{
          fontSize: '0.9rem',
          fontWeight: '900',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          opacity: 0.5,
          color: border
        }}>
          Sponsor
        </span>
      </a>

      {/* Rectángulo Inferior */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-panel"
        style={{
          width: '160px',
          height: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1rem',
          padding: '1rem',
          borderRadius: '16px',
          textDecoration: 'none',
          color: 'white',
          background: 'rgba(0,0,0,0.6)',
          border: '1px solid rgba(255,255,255,0.05)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
          e.currentTarget.style.background = bg;
          e.currentTarget.style.borderColor = border;
          e.currentTarget.style.boxShadow = `0 10px 20px rgba(0,0,0,0.4), inset 0 0 0 1px ${border}`;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.background = 'rgba(0,0,0,0.6)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <DollarSign size={28} color={border} style={{ opacity: 0.5 }} />
        <span style={{
          fontSize: '0.9rem',
          fontWeight: '900',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          opacity: 0.5,
          color: border
        }}>
          Ad Slot
        </span>
      </a>
    </div>
  );
}
