import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando scrollea hacia abajo 400px
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          onClick={scrollToTop}
          className="glass-panel"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(10px)',
            cursor: 'pointer',
            zIndex: 9999,
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            transition: 'background 0.3s, transform 0.2s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(251, 191, 36, 0.2)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          title="Volver Arriba"
        >
          <ArrowUp size={24} color="var(--accent-gold)" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
