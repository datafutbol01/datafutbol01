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
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 150, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'calc(100% - 40px)',
                    maxWidth: '400px',
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--accent-gold)',
                    borderRadius: '16px',
                    padding: '1.2rem',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(251, 191, 36, 0.2)',
                    zIndex: 9999,
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}
            >
                <button 
                    onClick={() => setShowPrompt(false)}
                    style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                >
                    <X size={20} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ padding: '0.8rem', background: 'rgba(251, 191, 36, 0.2)', borderRadius: '12px' }}>
                        <Share size={24} color="var(--accent-gold)" />
                    </div>
                    <div>
                        <h4 className="title-font" style={{ margin: 0, fontSize: '1.2rem', color: 'var(--accent-gold)' }}>Instalar Aplicación</h4>
                        <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.3' }}>
                            Agrega <b>DataFútbol</b> a tu pantalla de inicio para una experiencia completa a pantalla completa.
                        </p>
                    </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <ol style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li>
                            Toca el botón <b>Compartir</b> <Share size={14} style={{ display: 'inline', verticalAlign: 'middle', margin: '0 2px' }}/> en la barra inferior de Safari.
                        </li>
                        <li>
                            Desliza hacia abajo la lista de opciones.
                        </li>
                        <li>
                            Selecciona <b style={{ color: 'white' }}>"Agregar a Inicio"</b> <PlusSquare size={14} style={{ display: 'inline', verticalAlign: 'middle', margin: '0 2px' }}/>.
                        </li>
                    </ol>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
