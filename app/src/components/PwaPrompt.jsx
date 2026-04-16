import React, { useState, useEffect } from 'react';
import { Share, PlusSquare, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PwaPrompt() {
    const [showIosPrompt, setShowIosPrompt] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        // Detectar si la app YA ESTÁ instalada o corriendo en modo standalone (App)
        const isInStandaloneMode = () => {
            if ('standalone' in window.navigator && window.navigator.standalone) return true;
            if (window.matchMedia('(display-mode: standalone)').matches) return true;
            return false;
        };

        if (isInStandaloneMode()) return;

        // 1. Android / Chrome: Capturar el evento de instalación nativo
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault(); // Evitar que Chrome muestre su mini-banner por defecto
            setDeferredPrompt(e);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        // 2. iOS Safari: Mostrar instrucciones exclusivas
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test(userAgent);
        };

        if (isIos()) {
            const timer = setTimeout(() => {
                setShowIosPrompt(true);
            }, 2500);
            return () => {
                clearTimeout(timer);
                window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            };
        }

        return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }, []);

    const handleChromeInstall = async () => {
        if (!deferredPrompt) return;
        // Mostrar el pop-up nativo de Chrome
        deferredPrompt.prompt();
        // Esperar a que el usuario responda
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setDeferredPrompt(null);
        }
    };

    // Si no es iOS y no hay evento de Chrome, no mostramos nada
    if (!showIosPrompt && !deferredPrompt) return null;

    const isChrome = !!deferredPrompt;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100vw',
                    backgroundColor: 'rgba(2, 6, 23, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(251, 191, 36, 0.3)',
                    padding: '1rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    zIndex: 99999,
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}
            >
                {/* Botón de Cierre Superior */}
                <button 
                    onClick={() => {
                        setShowIosPrompt(false);
                        setDeferredPrompt(null);
                    }}
                    style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '15px', background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', padding: '0.5rem' }}
                >
                    <X size={20} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingRight: '30px' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
                        <img src="/pwa-192x192.png" alt="DataFútbol" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h4 className="title-font" style={{ margin: 0, fontSize: '1.1rem', color: 'white', letterSpacing: '0.5px' }}>DataFútbol App</h4>
                        <p style={{ margin: '0.1rem 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.2' }}>
                            Rápida, sin navegador y a pantalla completa.
                        </p>
                    </div>

                    {isChrome && (
                        <button 
                            onClick={handleChromeInstall}
                            style={{
                                background: 'var(--accent-gold)',
                                color: 'black',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                boxShadow: '0 4px 10px rgba(251, 191, 36, 0.3)'
                            }}
                        >
                            <Download size={16} /> Instalar
                        </button>
                    )}
                </div>

                {/* Si es iOS Safari, mostramos las instrucciones desplegadas */}
                {!isChrome && showIosPrompt && (
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                            <div style={{ background: 'var(--accent-gold)', color: 'black', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.7rem' }}>1</div>
                            <div style={{ color: 'white' }}>Tocá <Share size={14} color="var(--accent-gold)" style={{ display: 'inline', margin: '0 2px' }}/> <b>Compartir</b> abajo</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <div style={{ background: 'var(--accent-gold)', color: 'black', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.7rem' }}>2</div>
                            <div style={{ color: 'white' }}>Buscá <PlusSquare size={14} color="var(--accent-gold)" style={{ display: 'inline', margin: '0 2px' }}/> <b>Agregar a Inicio</b></div>
                        </div>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}

