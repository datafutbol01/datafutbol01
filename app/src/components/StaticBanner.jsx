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
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-panel"
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [position]: '2rem',
        width: '160px',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: '2rem',
        padding: '2rem 1rem',
        borderRadius: '24px',
        textDecoration: 'none',
        color: 'white',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        zIndex: 5
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-50%) scale(1.02)';
        e.currentTarget.style.background = bg;
        e.currentTarget.style.borderColor = border;
        e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.4), inset 0 0 0 1px ${border}`;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        letterSpacing: '0.5rem',
        fontSize: '1.5rem',
        fontWeight: '900',
        textTransform: 'uppercase',
        opacity: 0.3,
        color: border
      }}>
        {title}
      </div>
      
      <div style={{
        width: '60px',
        height: '600px',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2rem 0',
        opacity: 0.2
      }}>
        <DollarSign size={24} color={border} />
        <DollarSign size={24} color={border} />
        <DollarSign size={24} color={border} />
      </div>
    </a>
  );
}
