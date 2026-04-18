import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw } from 'lucide-react';

export default function PullToRefresh({ children }) {
  const [startY, setStartY] = useState(0);
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const maxPull = 120; // max distance visually
  const threshold = 80; // distance required to trigger refresh

  const containerRef = useRef(null);

  useEffect(() => {
    const handleTouchStart = (e) => {
      // Only allow pull if we are exactly at the top of the page
      if (window.scrollY === 0) {
        setStartY(e.touches[0].clientY);
      } else {
        setStartY(0);
      }
    };

    const handleTouchMove = (e) => {
      if (!startY) return;
      const currentY = e.touches[0].clientY;
      const dist = currentY - startY;

      // If pulling down
      if (dist > 0 && window.scrollY === 0) {
        // Option to prevent native browser behavior
        if (e.cancelable) {
           // We don't always preventDefault to avoid breaking normal scroll completely,
           // but we cap the visual pull distance.
        }
        setPullDistance(Math.min(dist, maxPull));
      } else {
        setPullDistance(0);
      }
    };

    const handleTouchEnd = () => {
      if (pullDistance > threshold && !isRefreshing) {
        setIsRefreshing(true);
        setPullDistance(0);
        
        setTimeout(async () => {
          try {
            // Destrucción nuclear de la caché para forzar la actualización de la PWA
            if ('caches' in window) {
              const keys = await caches.keys();
              await Promise.all(keys.map(key => caches.delete(key)));
            }
            if ('serviceWorker' in navigator) {
              const registrations = await navigator.serviceWorker.getRegistrations();
              for (let registration of registrations) {
                await registration.unregister();
              }
            }
          } catch (e) {
            console.error("Error destruyendo cachés:", e);
          }
          // Recarga forzada de fábrica
          window.location.reload(true);
        }, 500);
      } else {
        // Snap back if didn't pull enough
        setPullDistance(0);
      }
      setStartY(0);
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [startY, pullDistance, isRefreshing]);

  // Determine styles for the spinner container
  const isThresholdMet = pullDistance > threshold;
  
  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      
      {/* Indicador visual oculto que baja al tirar */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translateY(${isRefreshing ? 60 : (pullDistance > 0 ? pullDistance : -60)}px)`,
          transition: isRefreshing ? 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : pullDistance === 0 ? 'transform 0.3s ease-out' : 'none',
          opacity: isRefreshing ? 1 : (pullDistance / maxPull),
        }}
      >
        <div style={{
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '0.8rem',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        }}>
          <RefreshCw 
            size={24} 
            color={isThresholdMet || isRefreshing ? '#fbbf24' : '#94a3b8'} 
            style={{ 
              transform: `rotate(${pullDistance * 2}deg)`,
              transition: isRefreshing ? 'all 0.2s' : 'none',
              animation: isRefreshing ? 'spin 1s linear infinite' : 'none'
            }} 
          />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      
      {/* Contenido Completo de la App que se desplaza ligeramente al tirar */}
      <div 
        style={{ 
          transform: `translateY(${pullDistance * 0.3}px)`,
          transition: pullDistance === 0 ? 'transform 0.3s ease-out' : 'none' 
        }}
      >
        {children}
      </div>
    </div>
  );
}
