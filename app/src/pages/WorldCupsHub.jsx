import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Trophy, Globe2, AlertCircle, ArrowLeft, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const getFlagUrl = (flag, size = 'w20') => {
    if (!flag) return '';
    if (['su', 'yu'].includes(flag)) return `/banderas/${flag}.png`;
    if (flag === 'dd') return `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_East_Germany.svg/20px-Flag_of_East_Germany.svg.png`;
    if (flag === 'zr') return `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_Zaire_%281971%E2%80%931997%29.svg/250px-Flag_of_Zaire_%281971%E2%80%931997%29.svg.png`;
    if (flag === 'cs') return `https://flagcdn.com/${size}/cz.png`;
    if (flag.includes('/')) return flag;
    return `https://flagcdn.com/${size}/${flag}.png`;
};

const renderMatch = (m, isFinal = false, titleOverride = null) => {
    if (!m) return null;
    return (
        <div key={m.team1 + m.team2} style={{ background: isFinal ? 'rgba(251, 191, 36, 0.1)' : 'rgba(0,0,0,0.3)', border: isFinal ? '2px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: isFinal ? '1.2rem' : '0.8rem', boxShadow: isFinal ? '0 0 25px rgba(251, 191, 36, 0.2)' : '0 4px 15px rgba(0,0,0,0.2)', position: 'relative', width: '100%', boxSizing: 'border-box' }}>
            {titleOverride && <div style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '1px' }}>{titleOverride}</div>}
            {isFinal && !titleOverride && <div style={{ textAlign: 'center', fontSize: '1rem', color: 'var(--accent-gold)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '2px' }}>GRAN FINAL</div>}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: isFinal ? '1.1rem' : '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, color: parseInt(m.score.split('-')[0]) > parseInt(m.score.split('-')[1]) || (m.penalties && parseInt(m.penalties.split('-')[0]) > parseInt(m.penalties.split('-')[1])) ? 'white' : 'var(--text-muted)' }}>
                        <img src={`${getFlagUrl(m.flag1, 'w20')}`} alt={m.team1} style={{ width: isFinal ? '20px' : '16px', borderRadius: '2px' }} onError={(e) => e.target.style.display = 'none'} />
                        <span style={{ fontWeight: parseInt(m.score.split('-')[0]) >= parseInt(m.score.split('-')[1]) ? 'bold' : 'normal', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.team1}</span>
                    </div>
                    <div style={{ fontWeight: 'bold', color: 'white', paddingLeft: '0.5rem' }}>{m.score.split('-')[0]}</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: isFinal ? '1.1rem' : '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, color: parseInt(m.score.split('-')[1]) > parseInt(m.score.split('-')[0]) || (m.penalties && parseInt(m.penalties.split('-')[1]) > parseInt(m.penalties.split('-')[0])) ? 'white' : 'var(--text-muted)' }}>
                        <img src={`${getFlagUrl(m.flag2, 'w20')}`} alt={m.team2} style={{ width: isFinal ? '20px' : '16px', borderRadius: '2px' }} onError={(e) => e.target.style.display = 'none'} />
                        <span style={{ fontWeight: parseInt(m.score.split('-')[1]) >= parseInt(m.score.split('-')[0]) ? 'bold' : 'normal', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.team2}</span>
                    </div>
                    <div style={{ fontWeight: 'bold', color: 'white', paddingLeft: '0.5rem' }}>{m.score.split('-')[1]}</div>
                </div>
            </div>

            {m.penalties && (
                <div style={{ textAlign: 'center', fontSize: '0.65rem', color: 'var(--accent-gold)', background: 'rgba(251, 191, 36, 0.1)', borderRadius: '4px', marginTop: '0.6rem', padding: '0.2rem' }}>
                    PENALES: {m.penalties}
                </div>
            )}

            {(m.goals1?.length > 0 || m.goals2?.length > 0) && (
                <div style={{ marginTop: '0.6rem', paddingTop: '0.4rem', borderTop: '1px dotted rgba(255,255,255,0.1)', fontSize: '0.65rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    {m.goals1?.length > 0 && <div style={{ display: 'flex', gap: '0.3rem' }}><span style={{ color: 'rgba(255,255,255,0.6)' }}>▲</span> <span style={{ flex: 1 }}>{m.goals1.join(', ')}</span></div>}
                    {m.goals2?.length > 0 && <div style={{ display: 'flex', gap: '0.3rem' }}><span style={{ color: 'rgba(255,255,255,0.6)' }}>▼</span> <span style={{ flex: 1 }}>{m.goals2.join(', ')}</span></div>}
                </div>
            )}
        </div>
    );
};

export default function WorldCupsHub() {
    const worldCups = [
        { year: 1930, host: 'Uruguay' },
        { year: 1934, host: 'Italia' },
        { year: 1938, host: 'Francia' },
        { year: 1950, host: 'Brasil' },
        { year: 1954, host: 'Suiza' },
        { year: 1958, host: 'Suecia' },
        { year: 1962, host: 'Chile' },
        { year: 1966, host: 'Inglaterra' },
        { year: 1970, host: 'México' },
        { year: 1974, host: 'Alemania Occidental' },
        { year: 1978, host: 'Argentina' },
        { year: 1982, host: 'España' },
        { year: 1986, host: 'México' },
        { year: 1990, host: 'Italia' },
        { year: 1994, host: 'Estados Unidos' },
        { year: 1998, host: 'Francia' },
        { year: 2002, host: 'Corea/Japón' },
        { year: 2006, host: 'Alemania' },
        { year: 2010, host: 'Sudáfrica' },
        { year: 2014, host: 'Brasil' },
        { year: 2018, host: 'Rusia' },
        { year: 2022, host: 'Qatar' }
    ];

    const [selectedYear, setSelectedYear] = useState(null);
    const [activeTab, setActiveTab] = useState('participantes');
    const [wcData, setWcData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [importError, setImportError] = useState(null);

    // Nuevo estado para la sub-solapa de equipo individual
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [hoveredPlayerId, setHoveredPlayerId] = useState(null);

    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            const el = document.getElementById(`wc-year-${selectedYear}`);
            if (el) {
                const container = scrollRef.current;
                const scrollLeft = el.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (el.clientWidth / 2);
                container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'auto' });
            }
        }
    }, []);

    useEffect(() => {
        setIsLoading(true);
        setSelectedTeam(null);
        setImportError(null);

        if (!selectedYear) {
            setWcData(null);
            setIsLoading(false);
            return;
        }

        let importPromise;
        switch (selectedYear) {
            case 1930: importPromise = import('../data/mundiales/1930.json'); break;
            case 1934: importPromise = import('../data/mundiales/1934.json'); break;
            case 1938: importPromise = import('../data/mundiales/1938.json'); break;
            case 1950: importPromise = import('../data/mundiales/1950.json'); break;
            case 1954: importPromise = import('../data/mundiales/1954.json'); break;
            case 1958: importPromise = import('../data/mundiales/1958.json'); break;
            case 1962: importPromise = import('../data/mundiales/1962.json'); break;
            case 1966: importPromise = import('../data/mundiales/1966.json'); break;
            case 1970: importPromise = import('../data/mundiales/1970.json'); break;
            case 1974: importPromise = import('../data/mundiales/1974.json'); break;
            case 1978: importPromise = import('../data/mundiales/1978.json'); break;
            case 1982: importPromise = import('../data/mundiales/1982.json'); break;
            case 1986: importPromise = import('../data/mundiales/1986.json'); break;
            case 1990: importPromise = import('../data/mundiales/1990.json'); break;
            case 1994: importPromise = import('../data/mundiales/1994.json'); break;
            case 1998: importPromise = import('../data/mundiales/1998.json'); break;
            case 2002: importPromise = import('../data/mundiales/2002.json'); break;
            case 2006: importPromise = import('../data/mundiales/2006.json'); break;
            case 2010: importPromise = import('../data/mundiales/2010.json'); break;
            case 2014: importPromise = import('../data/mundiales/2014.json'); break;
            case 2018: importPromise = import('../data/mundiales/2018.json'); break;
            case 2022: importPromise = import('../data/mundiales/2022.json'); break;
            default: importPromise = Promise.reject(new Error('Año no soportado'));
        }

        importPromise
            .then(module => {
                setWcData(module.default || module);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("DEBUG ERROR IMPORTING:", err);
                setImportError(err.message || 'Error desconocido');
                setWcData(null);
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
        setActiveTab('participantes');
        setSelectedTeam(null);
        const el = document.getElementById(`wc-year-${year}`);
        if (el && scrollRef.current) {
            const container = scrollRef.current;
            const scrollLeft = el.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (el.clientWidth / 2);
            container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
        }
    };

    const currentWc = worldCups.find(w => w.year === selectedYear);

    const bgImage = wcData?.coverImage || (selectedYear === null ? 'https://upload.wikimedia.org/wikipedia/commons/a/ae/FIFA_World_Cup_Trophy_at_National_Football_Museum%2C_Manchester_02.jpg' : null);

    return (
        <div style={{ minHeight: '100vh', background: bgImage ? `linear-gradient(to bottom, rgba(2,6,23,0.5), rgba(2,6,23,0.95)), url("${bgImage}")` : 'var(--bg-main)', backgroundSize: 'cover', backgroundPosition: 'top center', backgroundAttachment: 'fixed', paddingTop: '2rem', position: 'relative', transition: 'background 0.5s ease-in-out' }}>

            {/* Botón Volver a la Home */}
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
                    <Globe2 size={40} color="var(--accent-gold)" />
                    HISTORIA DE LOS MUNDIALES
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                    Revive el certamen definitivo. Repasa sedes, selecciones míticas, y la llave paso a paso de cada edición.
                </p>
            </div>

            <div className="glass-panel animate-fade-in" style={{ margin: '0 2rem 3rem', padding: '0', borderRadius: '16px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <button onClick={() => scrollNav('left')} style={{ background: 'rgba(0,0,0,0.4)', border: 'none', color: 'var(--accent-gold)', padding: '1.5rem 1rem', cursor: 'pointer', zIndex: 10 }}>
                    <ChevronLeft size={24} />
                </button>

                <div
                    ref={scrollRef}
                    className="hide-scrollbar"
                    style={{ display: 'flex', overflowX: 'auto', flex: 1, scrollBehavior: 'smooth', padding: '0.5rem' }}
                >
                    {worldCups.map(wc => (
                        <button
                            key={wc.year}
                            id={`wc-year-${wc.year}`}
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
                                ELIGE UNA EDICIÓN
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
                                Explora la cronología completa del torneo más importante del planeta. Desde el histórico certamen de 1930 hasta la consagración moderna, selecciona un año en el carrusel superior para revivir cada partido.
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
                                        <span style={{ color: 'var(--accent-gold)' }}>COPA MUNDIAL</span> {currentWc?.host?.toUpperCase()} {selectedYear}
                                    </h2>
                                </div>
                                {!wcData?.coverImage && (
                                    <div style={{ opacity: 0.1 }}>
                                        <Trophy size={120} color="var(--accent-gold)" />
                                    </div>
                                )}
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 300px) 1fr', gap: '2rem' }}>
                                <div className="glass-panel" style={{ padding: '1rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.5rem', height: 'fit-content' }}>
                                    <div style={{ padding: '1rem', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                                        NAVEGACIÓN DEL TORNEO
                                    </div>

                                    <button
                                        onClick={() => { setActiveTab('participantes'); setSelectedTeam(null); }}
                                        style={{ textAlign: 'left', padding: '1rem', background: activeTab === 'participantes' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255,255,255,0.05)', color: activeTab === 'participantes' ? 'var(--accent-gold)' : 'white', border: `1px solid ${activeTab === 'participantes' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                                    >
                                        1. Países Participantes
                                    </button>

                                    {wcData && wcData.groups && Object.keys(wcData.groups || {}).length > 0 && (
                                        <button
                                            onClick={() => { setActiveTab('grupos'); setSelectedTeam(null); }}
                                            style={{ textAlign: 'left', padding: '1rem', background: activeTab === 'grupos' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255,255,255,0.05)', color: activeTab === 'grupos' ? 'var(--accent-gold)' : 'white', border: `1px solid ${activeTab === 'grupos' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                                        >
                                            2. Fase de Grupos
                                        </button>
                                    )}

                                    {wcData && wcData.secondStageGroups && Object.keys(wcData.secondStageGroups || {}).length > 0 && (
                                        <button
                                            onClick={() => { setActiveTab('segundaFase'); setSelectedTeam(null); }}
                                            style={{ textAlign: 'left', padding: '1rem', background: activeTab === 'segundaFase' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255,255,255,0.05)', color: activeTab === 'segundaFase' ? 'var(--accent-gold)' : 'white', border: `1px solid ${activeTab === 'segundaFase' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                                        >
                                            3. Segunda Fase
                                        </button>
                                    )}

                                    <button
                                        onClick={() => { setActiveTab('final'); setSelectedTeam(null); }}
                                        style={{ textAlign: 'left', padding: '1rem', background: activeTab === 'final' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255,255,255,0.05)', color: activeTab === 'final' ? 'var(--accent-gold)' : 'white', border: `1px solid ${activeTab === 'final' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                                    >
                                        {wcData && wcData.groups && Object.keys(wcData.groups || {}).length === 0 ? '2. ' : (wcData?.secondStageGroups && Object.keys(wcData.secondStageGroups || {}).length > 0 ? '4. ' : '3. ')}
                                        {selectedYear === 1974 || selectedYear === 1978 ? 'Gran Final' : (selectedYear >= 1986 ? 'Llave Eliminatoria' : 'Fase Final')}
                                    </button>

                                    <button
                                        onClick={() => { setActiveTab('estadisticas'); setSelectedTeam(null); }}
                                        style={{ textAlign: 'left', padding: '1rem', background: activeTab === 'estadisticas' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255,255,255,0.05)', color: activeTab === 'estadisticas' ? 'var(--accent-gold)' : 'white', border: `1px solid ${activeTab === 'estadisticas' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                                    >
                                        {wcData && wcData.groups && Object.keys(wcData.groups || {}).length === 0 ? '3. ' : (wcData?.secondStageGroups && Object.keys(wcData.secondStageGroups || {}).length > 0 ? '5. ' : '4. ')}
                                        Estadísticas y Premios
                                    </button>
                                </div>

                                <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', minHeight: '500px', position: 'relative' }}>
                                    {isLoading ? (
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--accent-gold)' }}>Cargando datos...</div>
                                    ) : !wcData ? (
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '100%', borderStyle: 'dashed', borderColor: 'rgba(255,255,255,0.1)' }}>
                                            <AlertCircle size={64} color="rgba(255,255,255,0.2)" style={{ marginBottom: '1rem' }} />
                                            <h3 className="title-font" style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>ARCHIVO NO DISPONIBLE</h3>
                                            <p style={{ color: 'var(--text-muted)', maxWidth: '400px' }}>Aún no se ha inyectado la información para el Mundial de {selectedYear}.</p>
                                        </div>
                                    ) : (
                                        <>
                                            {activeTab === 'participantes' && !selectedTeam && (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                    <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', borderBottom: '2px solid var(--accent-gold)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                                                        Naciones Clasificadas ({wcData.participants?.length})
                                                    </h3>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                                        {(wcData.participants || []).map((team, i) => (
                                                            <div
                                                                key={i}
                                                                onClick={() => {
                                                                    if (team.squad) setSelectedTeam(team);
                                                                }}
                                                                className="glass-card"
                                                                style={{
                                                                    display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', cursor: team.squad ? 'pointer' : 'not-allowed', transition: 'all 0.2s',
                                                                    opacity: team.squad ? 1 : 0.5
                                                                }}
                                                                onMouseOver={(e) => {
                                                                    if (team.squad) {
                                                                        e.currentTarget.style.background = 'rgba(251, 191, 36, 0.1)';
                                                                        e.currentTarget.style.borderColor = 'var(--accent-gold)';
                                                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                                                    }
                                                                }}
                                                                onMouseOut={(e) => {
                                                                    if (team.squad) {
                                                                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                                    }
                                                                }}
                                                            >
                                                                <div style={{ width: '40px', height: '30px', overflow: 'hidden', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
                                                                    <img
                                                                        src={`${getFlagUrl(team.flag, 'w40')}`}
                                                                        alt={team.name}
                                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                                                    />
                                                                    <div style={{ display: 'none', background: 'rgba(255,255,255,0.1)', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.6rem' }}>
                                                                        {team.flag?.toUpperCase()}
                                                                    </div>
                                                                </div>
                                                                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>{team.name}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div style={{ marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                                        *Haz clic sobre una selección habilitada (ej. Argentina) para ver su plantilla oficial.
                                                    </div>
                                                </motion.div>
                                            )}

                                            {activeTab === 'participantes' && selectedTeam && (
                                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                    <button
                                                        onClick={() => setSelectedTeam(null)}
                                                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: 'none', color: 'var(--accent-gold)', fontWeight: 'bold', cursor: 'pointer', marginBottom: '2rem', padding: 0 }}
                                                    >
                                                        <ArrowLeft size={20} /> Volver a Naciones
                                                    </button>

                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                                                        <div style={{ width: '80px', height: '53px', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                                                            <img src={`${getFlagUrl(selectedTeam.flag, 'w80')}`} alt={selectedTeam.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        </div>
                                                        <div>
                                                            <h3 className="title-font" style={{ fontSize: '2.5rem', margin: 0, color: 'white' }}>{selectedTeam.name}</h3>
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                                                                <Users size={16} /> DT: {selectedTeam.dt || 'Desconocido'}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                                                        {selectedTeam.squad?.map((player) => (
                                                            <div
                                                                key={player.no}
                                                                style={{ position: 'relative' }}
                                                                onMouseEnter={() => setHoveredPlayerId(player.no)}
                                                                onMouseLeave={() => setHoveredPlayerId(null)}
                                                            >
                                                                <div style={{
                                                                    display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.2s'
                                                                }}>
                                                                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.8rem 1rem', width: '50px', textAlign: 'center', color: 'var(--accent-gold)', fontWeight: '900', fontSize: '1.2rem', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                                                                        {player.no}
                                                                    </div>

                                                                    <div style={{ padding: '0.8rem 1rem', flex: 1, minWidth: 0 }}>
                                                                        <div className="notranslate" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.05rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{player.name}</div>
                                                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.4rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                                            <span>{player.pos}</span>
                                                                            {player.clubName && (
                                                                                <>
                                                                                    <span style={{ opacity: 0.5 }}>•</span>
                                                                                    <span className="title-font notranslate" style={{ color: 'var(--accent-gold)', letterSpacing: '0.5px' }}>{player.clubName}</span>
                                                                                </>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* VIÑETA INTERACTIVA DE CLUB */}
                                                                <AnimatePresence>
                                                                    {hoveredPlayerId === player.no && player.club && (
                                                                        <motion.div
                                                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                            exit={{ opacity: 0, scale: 0.95 }}
                                                                            transition={{ duration: 0.15 }}
                                                                            style={{
                                                                                position: 'absolute',
                                                                                bottom: 'calc(100% + 10px)',
                                                                                left: '50%',
                                                                                transform: 'translateX(-50%)',
                                                                                background: 'rgba(15, 23, 42, 0.95)',
                                                                                backdropFilter: 'blur(10px)',
                                                                                border: '1px solid var(--accent-gold)',
                                                                                padding: '0.8rem 1rem',
                                                                                borderRadius: '12px',
                                                                                boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                gap: '1rem',
                                                                                zIndex: 100,
                                                                                pointerEvents: 'none',
                                                                                whiteSpace: 'nowrap'
                                                                            }}
                                                                        >
                                                                            {/* Triangle Pointer */}
                                                                            <div style={{ position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: '10px', height: '10px', background: 'rgba(15, 23, 42, 0.95)', borderRight: '1px solid var(--accent-gold)', borderBottom: '1px solid var(--accent-gold)' }}></div>

                                                                            <div style={{ width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                                <img src={`/escudos/${player.club}.png`} alt={player.clubName} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                                                                                <Shield size={24} color="var(--text-muted)" style={{ display: 'none' }} />
                                                                            </div>
                                                                            <div>
                                                                                <div style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Club · {selectedYear}</div>
                                                                                <div className="notranslate" style={{ color: 'white', fontWeight: 'bold', fontSize: '0.95rem' }}>{player.clubName}</div>
                                                                            </div>
                                                                        </motion.div>
                                                                    )}
                                                                </AnimatePresence>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}

                                            {activeTab === 'grupos' && (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                    <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', borderBottom: '2px solid var(--accent-gold)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                                                        Fase de Grupos
                                                    </h3>

                                                    {importError && (
                                                        <div style={{ padding: '2rem', background: 'rgba(255,0,0,0.2)', border: '1px solid red', color: 'white', borderRadius: '8px', marginBottom: '2rem' }}>
                                                            <h4>🚨 Error Técnico Detectado en Vite 🚨</h4>
                                                            <p style={{ fontWeight: 'bold' }}>{importError}</p>
                                                            <p>Este es el clásico error del cache de módulos en desarrollo.</p>
                                                        </div>
                                                    )}

                                                    {!wcData.groups ? (
                                                        <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', borderStyle: 'dashed', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '16px' }}>
                                                            Las tablas inmersivas se inyectarán aquí próximamente para este Mundial.
                                                        </div>
                                                    ) : (
                                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                                                            {Object.entries(wcData.groups).map(([groupName, groupData]) => (
                                                                <div key={groupName} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                                                                    <h4 className="title-font" style={{ fontSize: '1.6rem', color: 'var(--accent-gold)', marginTop: 0, marginBottom: '1rem', borderBottom: '1px solid rgba(251, 191, 36, 0.2)', paddingBottom: '0.5rem' }}>
                                                                        Grupo {groupName}
                                                                    </h4>
                                                                    <div style={{ overflowX: 'auto' }}>
                                                                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                                                                            <thead>
                                                                                <tr style={{ color: 'var(--text-muted)', borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                                                                                    <th style={{ textAlign: 'left', padding: '0.5rem', minWidth: '150px' }}>Selección</th>
                                                                                    <th style={{ textAlign: 'center', padding: '0.5rem' }}>Pts</th>
                                                                                    <th style={{ textAlign: 'center', padding: '0.5rem' }}>PJ</th>
                                                                                    <th style={{ textAlign: 'center', padding: '0.5rem' }}>PG</th>
                                                                                    <th style={{ textAlign: 'center', padding: '0.5rem' }}>PE</th>
                                                                                    <th style={{ textAlign: 'center', padding: '0.5rem' }}>PP</th>
                                                                                    <th style={{ textAlign: 'center', padding: '0.5rem' }}>GF</th>
                                                                                    <th style={{ textAlign: 'center', padding: '0.5rem' }}>GC</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {groupData.standings.map((t, i) => (
                                                                                    <tr key={t.team} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', color: 'white', background: i < 2 ? 'rgba(251, 191, 36, 0.05)' : 'transparent', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} onMouseOut={(e) => e.currentTarget.style.background = i < 2 ? 'rgba(251, 191, 36, 0.05)' : 'transparent'}>
                                                                                        <td style={{ padding: '0.8rem 0.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: i < 2 ? 'bold' : 'normal' }}>
                                                                                            <span style={{ color: 'var(--text-muted)', width: '16px', fontSize: '0.8rem', textAlign: 'center' }}>{i + 1}</span>
                                                                                            <img src={`${getFlagUrl(t.flag, 'w20')}`} alt={t.team} style={{ width: '24px', height: '16px', objectFit: 'cover', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.5)' }} onError={(e) => e.target.style.display = 'none'} />
                                                                                            {t.team}
                                                                                        </td>
                                                                                        <td style={{ textAlign: 'center', fontWeight: '900', color: 'var(--accent-gold)' }}>{t.pts}</td>
                                                                                        <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.pj}</td>
                                                                                        <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.pg}</td>
                                                                                        <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.pe}</td>
                                                                                        <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.pp}</td>
                                                                                        <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.gf}</td>
                                                                                        <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.gc}</td>
                                                                                    </tr>
                                                                                ))}
                                                                            </tbody>
                                                                        </table>
                                                                    </div>

                                                                    {/* MATCHES SECTION */}
                                                                    {groupData.matches && groupData.matches?.length > 0 && (
                                                                        <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.2rem' }}>
                                                                            <h5 style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', textAlign: 'center' }}>Partidos del Grupo</h5>
                                                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                                                {groupData.matches.map((m, idx) => (
                                                                                    <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '0.8rem', fontSize: '0.9rem' }}>
                                                                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: (m.goals1?.length || m.goals2?.length) ? '0.5rem' : '0' }}>
                                                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'flex-end', fontWeight: parseInt(m.score.split('-')[0]) > parseInt(m.score.split('-')[1]) ? 'bold' : 'normal', color: 'white' }}>
                                                                                                {m.team1}
                                                                                                <img src={`${getFlagUrl(m.flag1, 'w20')}`} alt={m.team1} style={{ width: '16px', borderRadius: '2px' }} onError={(e) => e.target.style.display = 'none'} />
                                                                                            </div>
                                                                                            <div style={{ padding: '0 1rem', fontWeight: '900', color: 'var(--accent-gold)', letterSpacing: '1px' }}>{m.score}</div>
                                                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, fontWeight: parseInt(m.score.split('-')[1]) > parseInt(m.score.split('-')[0]) ? 'bold' : 'normal', color: 'white' }}>
                                                                                                <img src={`${getFlagUrl(m.flag2, 'w20')}`} alt={m.team2} style={{ width: '16px', borderRadius: '2px' }} onError={(e) => e.target.style.display = 'none'} />
                                                                                                {m.team2}
                                                                                            </div>
                                                                                        </div>
                                                                                        {(m.goals1?.length > 0 || m.goals2?.length > 0) && (
                                                                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                                                                                <div style={{ flex: 1, textAlign: 'right', paddingRight: '0.5rem' }}>
                                                                                                    {m.goals1?.join(', ')}
                                                                                                </div>
                                                                                                <div style={{ width: '45px' }}></div>
                                                                                                <div style={{ flex: 1, textAlign: 'left', paddingLeft: '0.5rem' }}>
                                                                                                    {m.goals2?.join(', ')}
                                                                                                </div>
                                                                                            </div>
                                                                                        )}
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}


                                                </motion.div>
                                            )}

                                            {activeTab === 'segundaFase' && wcData.secondStageGroups && (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                    <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', borderBottom: '2px solid var(--accent-gold)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                                                        Segunda Fase de Grupos
                                                    </h3>

                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                                                        {Object.entries(wcData.secondStageGroups).map(([groupName, groupData]) => (
                                                            <div key={groupName} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                                                                    <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', fontWeight: '900', margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>
                                                                        Grupo {groupName}
                                                                    </h4>
                                                                </div>

                                                                <div style={{ overflowX: 'auto' }}>
                                                                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                                                                        <thead>
                                                                            <tr style={{ color: 'var(--text-muted)', borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                                                                                <th style={{ textAlign: 'left', padding: '0.5rem', minWidth: '150px' }}>Selección</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>Pts</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>PJ</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>PG</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>PE</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>PP</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>GF</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>GC</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {groupData.standings.map((t, i) => (
                                                                                <tr key={t.team} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', color: 'white', background: i === 0 ? 'rgba(251, 191, 36, 0.1)' : 'transparent', transition: 'background 0.2s' }}>
                                                                                    <td style={{ padding: '0.8rem 0.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: i === 0 ? 'bold' : 'normal' }}>
                                                                                        <span style={{ color: 'var(--text-muted)', width: '16px', fontSize: '0.8rem', textAlign: 'center' }}>{i + 1}</span>
                                                                                        <img src={`${getFlagUrl(t.flag, 'w20')}`} alt={t.team} style={{ width: '24px', height: '16px', objectFit: 'cover', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.5)' }} onError={(e) => e.target.style.display = 'none'} />
                                                                                        {t.team}
                                                                                    </td>
                                                                                    <td style={{ textAlign: 'center', fontWeight: '900', color: 'var(--accent-gold)' }}>{t.pts}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.pj}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.pg}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.pe}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.pp}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.gf}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.gc}</td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                                {groupData.matches && groupData.matches?.length > 0 && (
                                                                    <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.2rem' }}>
                                                                        <h5 style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', textAlign: 'center' }}>Partidos del Grupo</h5>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                                            {groupData.matches.map((m, idx) => (
                                                                                <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '0.8rem', fontSize: '0.9rem' }}>
                                                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'flex-end', fontWeight: parseInt(m.score.split('-')[0]) > parseInt(m.score.split('-')[1]) ? 'bold' : 'normal', color: 'white' }}>
                                                                                            {m.team1}
                                                                                            <img src={`${getFlagUrl(m.flag1, 'w20')}`} alt={m.team1} style={{ width: '16px', borderRadius: '2px' }} onError={(e) => e.target.style.display = 'none'} />
                                                                                        </div>
                                                                                        <div style={{ padding: '0 1rem', fontWeight: '900', color: 'var(--accent-gold)', letterSpacing: '1px' }}>{m.score}</div>
                                                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, fontWeight: parseInt(m.score.split('-')[1]) > parseInt(m.score.split('-')[0]) ? 'bold' : 'normal', color: 'white' }}>
                                                                                            <img src={`${getFlagUrl(m.flag2, 'w20')}`} alt={m.team2} style={{ width: '16px', borderRadius: '2px' }} onError={(e) => e.target.style.display = 'none'} />
                                                                                            {m.team2}
                                                                                        </div>
                                                                                    </div>
                                                                                    {(m.goals1?.length > 0 || m.goals2?.length > 0) && (
                                                                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                                                                            <div style={{ flex: 1, textAlign: 'right', paddingRight: '1rem' }}>
                                                                                                {m.goals1?.map((g, gi) => (
                                                                                                    <div key={`g1-${gi}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.3rem' }}>
                                                                                                        {g} <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'white' }} />
                                                                                                    </div>
                                                                                                ))}
                                                                                            </div>
                                                                                            <div style={{ width: '40px' }} />
                                                                                            <div style={{ flex: 1, textAlign: 'left', paddingLeft: '1rem' }}>
                                                                                                {m.goals2?.map((g, gi) => (
                                                                                                    <div key={`g2-${gi}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '0.3rem' }}>
                                                                                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'white' }} /> {g}
                                                                                                    </div>
                                                                                                ))}
                                                                                            </div>
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}

                                            {activeTab === 'final' && (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                    <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', borderBottom: '2px solid var(--accent-gold)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                                                        {wcData.finalGroup ? 'Liguilla Final' : (selectedYear === 1974 || selectedYear === 1978 ? 'Gran Final' : 'Llave Eliminatoria')}
                                                    </h3>

                                                    {wcData.finalGroup ? (
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                                            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                                                                <div style={{ overflowX: 'auto' }}>
                                                                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                                                                        <thead>
                                                                            <tr style={{ color: 'var(--text-muted)', borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                                                                                <th style={{ textAlign: 'left', padding: '0.5rem', minWidth: '150px' }}>Selección</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>Pts</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>PJ</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>PG</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>PE</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>PP</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>GF</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>GC</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {wcData.finalGroup.standings.map((t, i) => (
                                                                                <tr key={t.team} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', color: 'white', background: i === 0 ? 'rgba(251, 191, 36, 0.1)' : 'transparent', transition: 'background 0.2s' }}>
                                                                                    <td style={{ padding: '0.8rem 0.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: i === 0 ? 'bold' : 'normal' }}>
                                                                                        <span style={{ color: 'var(--text-muted)', width: '16px', fontSize: '0.8rem', textAlign: 'center' }}>{i + 1}</span>
                                                                                        <img src={`${getFlagUrl(t.flag, 'w20')}`} alt={t.team} style={{ width: '24px', height: '16px', objectFit: 'cover', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.5)' }} onError={(e) => e.target.style.display = 'none'} />
                                                                                        {t.team}
                                                                                    </td>
                                                                                    <td style={{ textAlign: 'center', fontWeight: '900', color: 'var(--accent-gold)' }}>{t.pts}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.pj}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.pg}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.pe}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.pp}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.gf}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.gc}</td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                                {wcData.finalGroup.matches && wcData.finalGroup?.matches?.length > 0 && (
                                                                    <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.2rem' }}>
                                                                        <h5 style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', textAlign: 'center' }}>Partidos de la Liguilla</h5>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                                            {wcData.finalGroup.matches.map((m, idx) => (
                                                                                <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '0.8rem', fontSize: '0.9rem' }}>
                                                                                    {m.notes && <div style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--accent-gold)', marginBottom: '0.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{m.notes}</div>}
                                                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'flex-end', fontWeight: parseInt(m.score.split('-')[0]) > parseInt(m.score.split('-')[1]) ? 'bold' : 'normal', color: 'white' }}>
                                                                                            {m.team1}
                                                                                            <img src={`${getFlagUrl(m.flag1, 'w20')}`} alt={m.team1} style={{ width: '16px', borderRadius: '2px' }} onError={(e) => e.target.style.display = 'none'} />
                                                                                        </div>
                                                                                        <div style={{ padding: '0 1rem', fontWeight: '900', color: 'var(--accent-gold)', letterSpacing: '1px' }}>{m.score}</div>
                                                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, fontWeight: parseInt(m.score.split('-')[1]) > parseInt(m.score.split('-')[0]) ? 'bold' : 'normal', color: 'white' }}>
                                                                                            <img src={`${getFlagUrl(m.flag2, 'w20')}`} alt={m.team2} style={{ width: '16px', borderRadius: '2px' }} onError={(e) => e.target.style.display = 'none'} />
                                                                                            {m.team2}
                                                                                        </div>
                                                                                    </div>
                                                                                    {(m.goals1?.length > 0 || m.goals2?.length > 0) && (
                                                                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                                                                            <div style={{ flex: 1, textAlign: 'right', paddingRight: '1rem' }}>
                                                                                                {m.goals1?.map((g, gi) => (
                                                                                                    <div key={`g1-${gi}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.3rem' }}>
                                                                                                        {g} <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'white' }} />
                                                                                                    </div>
                                                                                                ))}
                                                                                            </div>
                                                                                            <div style={{ width: '40px' }} />
                                                                                            <div style={{ flex: 1, textAlign: 'left', paddingLeft: '1rem' }}>
                                                                                                {m.goals2?.map((g, gi) => (
                                                                                                    <div key={`g2-${gi}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '0.3rem' }}>
                                                                                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'white' }} /> {g}
                                                                                                    </div>
                                                                                                ))}
                                                                                            </div>
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ) : !wcData.bracket ? (
                                                        <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', borderStyle: 'dashed', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '16px' }}>
                                                            El árbol gráfico de eliminación se inyectará aquí próximamente para este Mundial.
                                                        </div>
                                                    ) : (
                                                        <div className="glass-panel hide-scrollbar" style={{ padding: '2rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', overflowX: 'auto' }}>
                                                            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '1.5rem', minWidth: '1000px' }}>
                                                                {/* COL 1: Octavos */}
                                                                {wcData.bracket.roundOf16 && wcData.bracket?.roundOf16?.length > 0 && (
                                                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', gap: '1rem', width: '220px', position: 'relative' }}>
                                                                        {wcData.bracket.roundOf16.map((m, i) => <div key={i}>{renderMatch(m)}</div>)}
                                                                    </div>
                                                                )}

                                                                {/* COL 2: Cuartos */}
                                                                {wcData.bracket.quarterFinals && wcData.bracket?.quarterFinals?.length > 0 && (
                                                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '220px', position: 'relative' }}>
                                                                        {wcData.bracket.quarterFinals.map((m, i) => <div key={i}>{renderMatch(m)}</div>)}
                                                                    </div>
                                                                )}

                                                                {/* COL 3: Semis */}
                                                                {wcData.bracket.semiFinals && wcData.bracket?.semiFinals?.length > 0 && (
                                                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '220px', position: 'relative' }}>
                                                                        {wcData.bracket.semiFinals.map((m, i) => <div key={i}>{renderMatch(m)}</div>)}
                                                                    </div>
                                                                )}

                                                                {/* COL 4: FINAL & 3er Puesto */}
                                                                <div style={{ display: 'flex', flexDirection: 'column', width: '320px', position: 'relative' }}>
                                                                    {/* The final takes up the flex space to perfectly center against the semis */}
                                                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                                        {renderMatch(wcData.bracket.final, true)}
                                                                    </div>

                                                                    {/* Third place match pinned at the bottom corresponding to the lower semi */}
                                                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '2.5rem' }}>
                                                                        {renderMatch(wcData.bracket.thirdPlace, false, 'Tercer Puesto')}
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
                                                        Estadísticas y Premios
                                                    </h3>

                                                    {importError && (
                                                        <div style={{ padding: '2rem', background: 'rgba(255,0,0,0.2)', border: '1px solid red', color: 'white', borderRadius: '8px', marginBottom: '2rem' }}>
                                                            <h4>Error Técnico Detectado:</h4>
                                                            <p>{importError}</p>
                                                            <p>Por favor, avísale al asistente de este error para que lo solucione.</p>
                                                        </div>
                                                    )}

                                                    {!wcData.stats ? (
                                                        <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', borderStyle: 'dashed', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '16px' }}>
                                                            Las estadísticas detalladas y premios de este Mundial serán cargadas próximamente.
                                                        </div>
                                                    ) : (
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                                                            {/* Podio de Balones de Oro (Solo de 1982 en adelante generalmente) */}
                                                            {wcData.stats?.awards && Object.keys(wcData.stats?.awards).length > 0 && (
                                                                <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
                                                                    <h4 className="title-font" style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '1.5rem', textAlign: 'center' }}>PODIO DE HONOR (MEJORES JUGADORES)</h4>
                                                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap' }}>

                                                                        {wcData.stats?.awards.silverBall && (
                                                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginTop: '2rem' }}>
                                                                                <div style={{ padding: '0.5rem 1rem', background: 'rgba(192,192,192,0.1)', border: '2px solid silver', borderRadius: '8px', color: 'white', fontWeight: 'bold' }}>🥈 Balón de Plata</div>
                                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                                                                                    <img src={getFlagUrl(wcData.stats?.awards.silverBall.flag)} alt="" style={{ width: '24px', borderRadius: '4px' }} />
                                                                                    <span style={{ fontSize: '1.1rem' }}>{wcData.stats?.awards.silverBall.name}</span>
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                        {wcData.stats?.awards.goldenBall && (
                                                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                                                                <div style={{ padding: '0.75rem 1.5rem', background: 'rgba(251, 191, 36, 0.15)', border: '2px solid var(--accent-gold)', borderRadius: '8px', color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '1.2rem' }}>🥇 Balón de Oro</div>
                                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                                                                                    <img src={getFlagUrl(wcData.stats?.awards.goldenBall.flag)} alt="" style={{ width: '32px', borderRadius: '4px' }} />
                                                                                    <span className="title-font" style={{ fontSize: '1.4rem' }}>{wcData.stats?.awards.goldenBall.name}</span>
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                        {wcData.stats?.awards.bronzeBall && (
                                                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginTop: '2rem' }}>
                                                                                <div style={{ padding: '0.5rem 1rem', background: 'rgba(205, 127, 50, 0.1)', border: '2px solid #cd7f32', borderRadius: '8px', color: 'white', fontWeight: 'bold' }}>🥉 Balón de Bronce</div>
                                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                                                                                    <img src={getFlagUrl(wcData.stats?.awards.bronzeBall.flag)} alt="" style={{ width: '24px', borderRadius: '4px' }} />
                                                                                    <span style={{ fontSize: '1.1rem' }}>{wcData.stats?.awards.bronzeBall.name}</span>
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                    </div>

                                                                    {/* Tercera fila: Guante de Oro y Fair Play */}
                                                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(251, 191, 36, 0.2)' }}>

                                                                        {wcData.stats?.awards.goldenGlove && (
                                                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                                                                <div style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>🧤 Guante de Oro</div>
                                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                                                                                    <img src={getFlagUrl(wcData.stats?.awards.goldenGlove.flag)} alt="" style={{ width: '24px', borderRadius: '4px' }} />
                                                                                    <span style={{ fontSize: '1.1rem' }}>{wcData.stats?.awards.goldenGlove.name}</span>
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                        {wcData.stats?.awards.fairPlay && (
                                                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                                                                <div style={{ padding: '0.5rem 1rem', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid #34d399', borderRadius: '8px', color: '#34d399', fontWeight: 'bold', fontSize: '0.9rem' }}>🤝 Premio Fair Play</div>
                                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                                                                                    <img src={getFlagUrl(wcData.stats?.awards.fairPlay.flag)} alt="" style={{ width: '24px', borderRadius: '4px' }} />
                                                                                    <span style={{ fontSize: '1.1rem', color: 'white' }}>{wcData.stats?.awards.fairPlay.name}</span>
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                    </div>

                                                                    {selectedYear < 1982 && (
                                                                        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                            * Nota histórica: Antes de 1982, los premios al mejor jugador se organizaban mediante votaciones periodísticas sin el nombre comercial o trofeo físico oficial posteriormente adoptado por FIFA. El podio refleja el consenso de la prensa internacional y los registros históricos de la época.
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )}

                                                            {/* Cuadrícula de 4 Tablas */}
                                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

                                                                {/* Goleadores */}
                                                                {wcData.stats.topScorers && wcData.stats?.topScorers?.length > 0 && (
                                                                    <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                                                                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                                                            ⚽ Máximos Goleadores
                                                                        </h4>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                                            {wcData.stats.topScorers.map((s, i) => (
                                                                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                                                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', width: '20px' }}>{i + 1}.</span>
                                                                                        <img src={getFlagUrl(s.flag)} alt="" style={{ width: '20px', borderRadius: '2px' }} />
                                                                                        <span>{s.name}</span>
                                                                                    </div>
                                                                                    <strong style={{ color: 'white' }}>{s.value}</strong>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {/* Asistencias */}
                                                                {wcData.stats.assists && wcData.stats?.assists?.length > 0 && (
                                                                    <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                                                                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                                                            🎯 Asistencias
                                                                        </h4>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                                            {wcData.stats.assists.map((s, i) => (
                                                                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                                                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', width: '20px' }}>{i + 1}.</span>
                                                                                        <img src={getFlagUrl(s.flag)} alt="" style={{ width: '20px', borderRadius: '2px' }} />
                                                                                        <span>{s.name}</span>
                                                                                    </div>
                                                                                    <strong style={{ color: 'white' }}>{s.value}</strong>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {/* Amarillas */}
                                                                {wcData.stats.yellowCards && wcData.stats?.yellowCards?.length > 0 && (
                                                                    <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                                                                        <h4 style={{ color: '#eab308', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                                                            🟨 Más Amonestados
                                                                        </h4>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                                            {wcData.stats.yellowCards.map((s, i) => (
                                                                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                                                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                                                        <img src={getFlagUrl(s.flag)} alt="" style={{ width: '20px', borderRadius: '2px' }} />
                                                                                        <span>{s.name}</span>
                                                                                    </div>
                                                                                    <strong style={{ color: 'white' }}>{s.value}</strong>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {/* Rojas */}
                                                                {wcData.stats.redCards && wcData.stats?.redCards?.length > 0 && (
                                                                    <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                                                                        <h4 style={{ color: '#ef4444', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                                                            🟥 Expulsados (Rojas)
                                                                        </h4>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                                            {wcData.stats.redCards.map((s, i) => (
                                                                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                                                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                                                        <img src={getFlagUrl(s.flag)} alt="" style={{ width: '20px', borderRadius: '2px' }} />
                                                                                        <span>{s.name}</span>
                                                                                    </div>
                                                                                    <strong style={{ color: 'white', fontSize: '0.85rem' }}>{s.value}</strong>
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
    );
}
