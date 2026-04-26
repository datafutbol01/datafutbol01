import React, { useState } from 'react';

const ShareButton = ({ 
  equipoA = "Equipo A", 
  equipoB = "Equipo B", 
  urlShare = window.location.href,
  compact = false
}) => {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `⚔️ Historial Oficial: ${equipoA} vs ${equipoB}`,
      text: `Mirá el historial completo y detallado entre ${equipoA} y ${equipoB} en DataFútbol.`,
      url: urlShare
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch (err) {
        console.log('Error al compartir:', err);
      }
    } else {
      // Fallback para cuando estamos en PC y no hay menú nativo (copia al portapapeles)
      try {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Error al copiar al portapapeles:', err);
      }
    }
  };

  return (
    <button 
      onClick={handleShare}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '10px 16px',
        backgroundColor: '#1E293B', // Fondo oscuro premium
        color: '#FFFFFF',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#334155'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1E293B'}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
      {compact 
        ? (copied ? '¡Copiado!' : (shared ? '¡Compartido!' : null)) 
        : (copied ? '¡Link Copiado!' : (shared ? '¡Compartido!' : 'Compartir Historial'))}
    </button>
  );
};

export default ShareButton;
