import React, { useState, useEffect } from 'react';
import { Share, PlusSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PwaPrompt() {
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        // Detectar si es un dispositivo iOS
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test(userAgent);
        };

        // Detectar si la app YA ESTÁ instalada o corriendo en modo standalone (App)
        const isInStandaloneMode = () => {
            // Regla oficial de iOS Safari
            if ('standalone' in window.navigator && window.navigator.standalone) return true;
            // Regla estándar PWA (Chrome/Edge/Modern Safari)
            if (window.matchMedia('(display-mode: standalone)').matches) return true;
            return false;
        };

        // Si es iOS y NO está instalada, mostramos el cartel de ayuda de instalación
        if (isIos() && !isInStandaloneMode()) {
            // Agregar un pequeñísimo delay para que no sea intrusivo nomás abrir
            const timer = setTimeout(() => {
                setShowPrompt(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    if (!showPrompt) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 200, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 200, opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'calc(100% - 32px)',
                    maxWidth: '380px',
                    backgroundColor: 'rgba(2, 6, 23, 0.85)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    borderRadius: '24px',
                    padding: '1.5rem',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8), 0 0 30px rgba(251, 191, 36, 0.15)',
                    zIndex: 9999,
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.2rem'
                }}
            >
                {/* Flecha apuntando abajo al centro */}
                <div style={{ position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: '20px', height: '20px', backgroundColor: 'rgba(2, 6, 23, 0.9)', borderBottom: '1px solid rgba(251, 191, 36, 0.3)', borderRight: '1px solid rgba(251, 191, 36, 0.3)', zIndex: -1 }}></div>

                <button 
                    onClick={() => setShowPrompt(false)}
                    style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.05)', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                >
                    <X size={16} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', border: '2px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
                        <img src="/pwa-192x192.png" alt="DataFútbol" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ paddingRight: '20px' }}>
                        <h4 className="title-font" style={{ margin: 0, fontSize: '1.4rem', color: 'white', letterSpacing: '0.5px' }}>DataFútbol App</h4>
                        <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                            Instalá la aplicación oficial para una experiencia nativa y pantalla completa.
                        </p>
                    </div>
                </div>

                <div style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)', padding: '1.2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                        <div style={{ background: 'var(--accent-gold)', color: 'black', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem' }}>1</div>
                        <div style={{ fontSize: '0.9rem', color: 'white' }}>Tocá <Share size={16} color="var(--accent-gold)" style={{ display: 'inline', verticalAlign: 'text-bottom', margin: '0 2px' }}/> <b>Compartir</b> en Safari</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <div style={{ background: 'var(--accent-gold)', color: 'black', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem' }}>2</div>
                        <div style={{ fontSize: '0.9rem', color: 'white' }}>Buscá <PlusSquare size={16} color="var(--accent-gold)" style={{ display: 'inline', verticalAlign: 'text-bottom', margin: '0 2px' }}/> <b>Agregar a Inicio</b></div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
