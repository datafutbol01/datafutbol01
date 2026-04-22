import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Trophy, Globe2, AlertCircle, ArrowLeft } from 'lucide-react';
import CryptoJS from 'crypto-js';

const renderMatch = (m, isFinal = false, titleOverride = null) => {
    if (!m) return null;
    const scoreA = m.scoreA ?? '-';
    const scoreB = m.scoreB ?? '-';
    const scoreStr = `${scoreA}-${scoreB}`;

    return (
        <div key={m.teamA + m.teamB} style={{ background: isFinal ? 'rgba(251, 191, 36, 0.1)' : 'rgba(0,0,0,0.3)', border: isFinal ? '2px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: isFinal ? '1.2rem' : '0.8rem', boxShadow: isFinal ? '0 0 25px rgba(251, 191, 36, 0.2)' : '0 4px 15px rgba(0,0,0,0.2)', position: 'relative', width: '100%', boxSizing: 'border-box' }}>
            {titleOverride && <div style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '1px' }}>{titleOverride}</div>}
            {isFinal && !titleOverride && <div style={{ textAlign: 'center', fontSize: '1rem', color: 'var(--accent-gold)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '2px' }}>GRAN FINAL</div>}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: isFinal ? '1.1rem' : '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, color: parseInt(scoreA) > parseInt(scoreB) || (m.penaltyA && parseInt(m.penaltyA) > parseInt(m.penaltyB)) ? 'white' : 'var(--text-muted)' }}>
                        <img src={m.flagA} alt={m.teamA} style={{ width: isFinal ? '20px' : '16px', borderRadius: '2px' }} onError={(e) => e.target.style.display = 'none'} />
                        <span style={{ fontWeight: parseInt(scoreA) >= parseInt(scoreB) ? 'bold' : 'normal', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.teamA}</span>
                    </div>
                    <div style={{ fontWeight: 'bold', color: 'white', paddingLeft: '0.5rem' }}>{scoreA}</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: isFinal ? '1.1rem' : '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, color: parseInt(scoreB) > parseInt(scoreA) || (m.penaltyB && parseInt(m.penaltyB) > parseInt(m.penaltyA)) ? 'white' : 'var(--text-muted)' }}>
                        <img src={m.flagB} alt={m.teamB} style={{ width: isFinal ? '20px' : '16px', borderRadius: '2px' }} onError={(e) => e.target.style.display = 'none'} />
                        <span style={{ fontWeight: parseInt(scoreB) >= parseInt(scoreA) ? 'bold' : 'normal', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.teamB}</span>
                    </div>
                    <div style={{ fontWeight: 'bold', color: 'white', paddingLeft: '0.5rem' }}>{scoreB}</div>
                </div>
            </div>

            {m.penaltyA !== null && m.penaltyB !== null && (
                <div style={{ textAlign: 'center', fontSize: '0.65rem', color: 'var(--accent-gold)', background: 'rgba(251, 191, 36, 0.1)', borderRadius: '4px', marginTop: '0.6rem', padding: '0.2rem' }}>
                    PENALES: {m.penaltyA} - {m.penaltyB}
                </div>
            )}
        </div>
    );
};

export default function CopaFranciaHub() {
    const seasons = [
        { year: 2026, host: 'Francia' }
    ];

    const [selectedYear, setSelectedYear] = useState(null);
    const [activeTab, setActiveTab] = useState('final');
    const [cupData, setCupData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [importError, setImportError] = useState(null);

    const scrollRef = useRef(null);

    useEffect(() => {
        setIsLoading(true);
        setImportError(null);

        if (!selectedYear) {
            setCupData(null);
            setIsLoading(false);
            return;
        }

        let importPromise;
        switch (selectedYear) {
            case 2026: importPromise = import('../data/copas/francia/2026.json'); break;
            default: importPromise = Promise.reject(new Error('Año no soportado'));
        }

        importPromise
            .then(module => {
                let data = module.default || module;
                if (data && data.payload) {
                    try {
                        const bytes = CryptoJS.AES.decrypt(data.payload, "D4t4Fub0l_N1nj4_P4ss_2026");
                        data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                    } catch (e) {
                        console.error("Error decrypting copa data:", e);
                    }
                }
                setCupData(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("DEBUG ERROR IMPORTING:", err);
                setImportError(err.message || 'Error desconocido');
                setCupData(null);
                setIsLoading(false);
            });
    }, [selectedYear]);

    const scrollNav = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
        }
    };

    const handleSelectYear = (year) => {
        setSelectedYear(year);
        setActiveTab('final');
        const el = document.getElementById(`cup-year-${year}`);
        if (el && scrollRef.current) {
            const container = scrollRef.current;
            const scrollLeft = el.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (el.clientWidth / 2);
            container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
        }
    };

    const currentSeason = seasons.find(w => w.year === selectedYear);
    const bgImage = '/portada_mundiales_ai.png'; // Reutilizamos la portada ai o le ponemos un color solido

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-main)', position: 'relative' }}>

            {bgImage && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    zIndex: 0,
                    pointerEvents: 'none'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        overflow: 'hidden',
                    }}>
                        <motion.img
                            src={bgImage}
                            initial={{ scale: 1, opacity: 0.8 }}
                            animate={{ scale: 1.05, opacity: 1 }}
                            transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center 15%',
                                filter: 'contrast(1.2) saturate(1.3) brightness(0.6) sepia(15%) hue-rotate(200deg)', // Un toque azul francia
                                WebkitMaskImage: 'none',
                                maskImage: 'none'
                            }}
                        />
                    </div>
                </div>
            )}

            <div style={{ 
                position: 'relative', 
                zIndex: 1, 
                width: '100%',
                maxWidth: '1400px', 
                margin: '0 auto',
                minHeight: '100vh',
                background: 'transparent',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ padding: '2rem', flex: 1 }}>

            <button
                onClick={() => { window.location.href = '/'; }}
                className="glass-panel"
                style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '2rem',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    background: 'rgba(255,255,255,0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    zIndex: 100
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
                <ArrowLeft size={24} color="var(--accent-gold)" />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '2rem', padding: '0 2rem' }}>
                <h1 className="title-font animate-fade-in" style={{ fontSize: '3.5rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Trophy size={40} color="var(--accent-gold)" />
                    COPA DE FRANCIA
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                    Revive la mítica Coupe de France. Repasa las llaves eliminatorias y las estadísticas históricas.
                </p>
            </div>

            <div className="glass-panel animate-fade-in" style={{ margin: '0 2rem 3rem', padding: '0', borderRadius: '16px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <button onClick={() => scrollNav('left')} style={{ background: 'rgba(0,0,0,0.4)', border: 'none', color: 'var(--accent-gold)', padding: '1.5rem 1rem', cursor: 'pointer', zIndex: 10 }}>
                    <ChevronLeft size={24} />
                </button>

                <div
                    ref={scrollRef}
                    className="hide-scrollbar"
                    style={{ display: 'flex', overflowX: 'auto', flex: 1, scrollBehavior: 'smooth', padding: '0.5rem', scrollbarWidth: 'none', msOverflowStyle: 'none', justifyContent: 'center' }}
                >
                    {seasons.map(wc => (
                        <button
                            key={wc.year}
                            id={`cup-year-${wc.year}`}
                            onClick={() => handleSelectYear(wc.year)}
                            style={{
                                flex: '0 0 auto',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.2rem',
                                minWidth: '100px',
                                padding: '0.8rem',
                                border: 'none',
                                background: selectedYear === wc.year ? 'var(--accent-gold)' : 'transparent',
                                color: selectedYear === wc.year ? 'black' : 'white',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                opacity: selectedYear === wc.year ? 1 : 0.6,
                                transform: selectedYear === wc.year ? 'scale(1.05)' : 'scale(1)'
                            }}
                        >
                            <span className="title-font" style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '1px' }}>{wc.year}</span>
                            <span style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.8 }}>{wc.host}</span>
                        </button>
                    ))}
                </div>

                <button onClick={() => scrollNav('right')} style={{ background: 'rgba(0,0,0,0.4)', border: 'none', color: 'var(--accent-gold)', padding: '1.5rem 1rem', cursor: 'pointer', zIndex: 10 }}>
                    <ChevronRight size={24} />
                </button>
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem 4rem' }}>
                <AnimatePresence mode="wait">
                    {selectedYear === null ? (
                        <motion.div
                            key="welcome"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '60vh',
                                padding: '4rem 2rem',
                                textAlign: 'center'
                            }}
                        >
                            <Trophy size={80} color="var(--accent-gold)" style={{ marginBottom: '2rem', filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))' }} />
                            <h2 className="title-font" style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1rem', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                                ELIGE UNA TEMPORADA
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
                                Selecciona un año en el carrusel superior para revivir cada partido de la Coupe de France.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={selectedYear}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                        >
                            <div style={{ padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '-1rem' }}>
                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    <h2 className="title-font" style={{ fontSize: '4rem', margin: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', textShadow: '0 4px 15px rgba(0,0,0,0.8)' }}>
                                        <span style={{ color: 'var(--accent-gold)' }}>TEMPORADA</span> {selectedYear}
                                    </h2>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 300px) 1fr', gap: '2rem' }}>
                                <div className="glass-panel" style={{ padding: '1rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', gap: '0.5rem', height: 'fit-content' }}>
                                    <div style={{ padding: '1rem', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', width: 'auto' }}>
                                        NAVEGACIÓN DEL TORNEO
                                    </div>

                                    <button
                                        onClick={() => { setActiveTab('final'); }}
                                        style={{ textAlign: 'left', padding: '1rem', background: activeTab === 'final' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255,255,255,0.05)', color: activeTab === 'final' ? 'var(--accent-gold)' : 'white', border: `1px solid ${activeTab === 'final' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                                    >
                                        1. Llave Eliminatoria
                                    </button>

                                    <button
                                        onClick={() => { setActiveTab('estadisticas'); }}
                                        style={{ textAlign: 'left', padding: '1rem', background: activeTab === 'estadisticas' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255,255,255,0.05)', color: activeTab === 'estadisticas' ? 'var(--accent-gold)' : 'white', border: `1px solid ${activeTab === 'estadisticas' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                                    >
                                        2. Estadísticas
                                    </button>
                                </div>

                                <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', minHeight: '500px', position: 'relative' }}>
                                    {isLoading ? (
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--accent-gold)' }}>Cargando datos...</div>
                                    ) : !cupData ? (
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '100%', borderStyle: 'dashed', borderColor: 'rgba(255,255,255,0.1)' }}>
                                            <AlertCircle size={64} color="rgba(255,255,255,0.2)" style={{ marginBottom: '1rem' }} />
                                            <h3 className="title-font" style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>ARCHIVO NO DISPONIBLE</h3>
                                            <p style={{ color: 'var(--text-muted)', maxWidth: '400px' }}>Aún no se ha inyectado la información para la temporada {selectedYear}.</p>
                                        </div>
                                    ) : (
                                        <>
                                            {activeTab === 'final' && (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                    <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', borderBottom: '2px solid var(--accent-gold)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                                                        Llave Eliminatoria
                                                    </h3>

                                                    {!cupData.knockoutPhase ? (
                                                        <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', borderStyle: 'dashed', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '16px' }}>
                                                            El árbol gráfico de eliminación se inyectará aquí próximamente.
                                                        </div>
                                                    ) : (
                                                        <div className="glass-panel hide-scrollbar" style={{ padding: '2rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                                            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '1.5rem', minWidth: '1000px' }}>
                                                                {/* COL 1: Octavos */}
                                                                {cupData.knockoutPhase.octavos && cupData.knockoutPhase?.octavos?.length > 0 && (
                                                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', gap: '1rem', width: '220px', position: 'relative' }}>
                                                                        {cupData.knockoutPhase.octavos.map((m, i) => <div key={i}>{renderMatch(m)}</div>)}
                                                                    </div>
                                                                )}

                                                                {/* COL 2: Cuartos */}
                                                                {cupData.knockoutPhase.cuartos && cupData.knockoutPhase?.cuartos?.length > 0 && (
                                                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '220px', position: 'relative' }}>
                                                                        {cupData.knockoutPhase.cuartos.map((m, i) => <div key={i}>{renderMatch(m)}</div>)}
                                                                    </div>
                                                                )}

                                                                {/* COL 3: Semis */}
                                                                {cupData.knockoutPhase.semifinal && cupData.knockoutPhase?.semifinal?.length > 0 && (
                                                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '220px', position: 'relative' }}>
                                                                        {cupData.knockoutPhase.semifinal.map((m, i) => <div key={i}>{renderMatch(m)}</div>)}
                                                                    </div>
                                                                )}

                                                                {/* COL 4: FINAL */}
                                                                <div style={{ display: 'flex', flexDirection: 'column', width: '320px', position: 'relative' }}>
                                                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                                        {cupData.knockoutPhase.final && cupData.knockoutPhase.final.length > 0 && renderMatch(cupData.knockoutPhase.final[0], true)}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}

                                            {activeTab === 'estadisticas' && (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                    <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', borderBottom: '2px solid var(--accent-gold)', paddingBottom: '0.5rem' }}>
                                                        Estadísticas
                                                    </h3>

                                                    {!cupData.stats ? (
                                                        <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', borderStyle: 'dashed', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '16px' }}>
                                                            Las estadísticas detalladas y premios serán cargadas próximamente.
                                                        </div>
                                                    ) : (
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                                                            {/* Cuadrícula de 4 Tablas */}
                                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

                                                                {/* Goleadores */}
                                                                {cupData.stats.goleadores && cupData.stats?.goleadores?.length > 0 && (
                                                                    <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                                                                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                                                            ⚽ Máximos Goleadores
                                                                        </h4>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                                            {cupData.stats.goleadores.map((s, i) => (
                                                                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                                                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', width: '20px' }}>{i + 1}.</span>
                                                                                        <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                                                            <span>{s.name}</span>
                                                                                            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{s.team}</span>
                                                                                        </span>
                                                                                    </div>
                                                                                    <strong style={{ color: 'white' }}>{s.goals}</strong>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {/* Asistencias */}
                                                                {cupData.stats.asistencias && cupData.stats?.asistencias?.length > 0 && (
                                                                    <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                                                                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                                                            🎯 Asistencias
                                                                        </h4>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                                            {cupData.stats.asistencias.map((s, i) => (
                                                                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                                                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', width: '20px' }}>{i + 1}.</span>
                                                                                        <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                                                            <span>{s.name}</span>
                                                                                            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{s.team}</span>
                                                                                        </span>
                                                                                    </div>
                                                                                    <strong style={{ color: 'white' }}>{s.assists}</strong>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {/* Amarillas */}
                                                                {cupData.stats.amarillas && cupData.stats?.amarillas?.length > 0 && (
                                                                    <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                                                                        <h4 style={{ color: '#eab308', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                                                            🟨 Más Amonestados
                                                                        </h4>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                                            {cupData.stats.amarillas.map((s, i) => (
                                                                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                                                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                                                        <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                                                            <span>{s.name}</span>
                                                                                            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{s.team}</span>
                                                                                        </span>
                                                                                    </div>
                                                                                    <strong style={{ color: 'white' }}>{s.cards}</strong>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {/* Rojas */}
                                                                {cupData.stats.rojas && cupData.stats?.rojas?.length > 0 && (
                                                                    <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                                                                        <h4 style={{ color: '#ef4444', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                                                            🟥 Expulsados (Rojas)
                                                                        </h4>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                                            {cupData.stats.rojas.map((s, i) => (
                                                                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                                                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                                                        <span style={{ display: 'flex', flexDirection: 'column' }}>
                                                                                            <span>{s.name}</span>
                                                                                            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{s.team}</span>
                                                                                        </span>
                                                                                    </div>
                                                                                    <strong style={{ color: 'white', fontSize: '0.85rem' }}>{s.cards}</strong>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}

                                                            </div>
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            </div>
            </div>
        </div>
    );
}
