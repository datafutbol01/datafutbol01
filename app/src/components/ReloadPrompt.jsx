import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, X } from 'lucide-react';

export default function ReloadPrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // Intenta forzar el chequeo si es un navegador compatible
      if (r) {
        setInterval(() => {
            r.update();
        }, 1000 * 60 * 60); // Chequea cada hora
      }
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  return (
    <AnimatePresence>
      {needRefresh && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--accent-gold)',
            color: 'black',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '90vw',
            width: 'max-content'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>Actualización Disponible</span>
            <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>Hay nuevas ligas y datos listos.</span>
          </div>
          
          <button
            onClick={() => updateServiceWorker(true)}
            style={{
              background: 'black',
              color: 'var(--accent-gold)',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <RefreshCw size={16} /> Actualizar
          </button>

          <button
            onClick={() => setNeedRefresh(false)}
            style={{ background: 'transparent', border: 'none', color: 'black', cursor: 'pointer', padding: '0.2rem' }}
          >
            <X size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
