import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Trophy, ArrowLeft, AlertCircle, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllSearchableItems } from '../data/loader';

const allClubs = getAllSearchableItems().filter(c => c.type === 'club');

const getShieldUrl = (clubId) => {
    if (!clubId) return '';
    const dbClub = allClubs.find(c => c.id === clubId);
    if (dbClub && dbClub.shield) return dbClub.shield;
    

    return `/escudos/${clubId}.png`;
};

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
                        <img src={getShieldUrl(m.id1)} alt={m.team1} style={{ width: isFinal ? '24px' : '18px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                        <Shield size={isFinal ? 24 : 18} color="var(--text-muted)" style={{ display: 'none' }} />
                        <span style={{ fontWeight: parseInt(m.score.split('-')[0]) >= parseInt(m.score.split('-')[1]) ? 'bold' : 'normal', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.team1}</span>
                    </div>
                    <div style={{ fontWeight: 'bold', color: 'white', paddingLeft: '0.5rem' }}>{m.score.split('-')[0]}</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: isFinal ? '1.1rem' : '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, color: parseInt(m.score.split('-')[1]) > parseInt(m.score.split('-')[0]) || (m.penalties && parseInt(m.penalties.split('-')[1]) > parseInt(m.penalties.split('-')[0])) ? 'white' : 'var(--text-muted)' }}>
                        <img src={getShieldUrl(m.id2)} alt={m.team2} style={{ width: isFinal ? '24px' : '18px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                        <Shield size={isFinal ? 24 : 18} color="var(--text-muted)" style={{ display: 'none' }} />
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

export default function CupsHub() {
    const cupsList = [
        { id: 'champions', name: 'Champions League', color: '#c084fc' },
        { id: 'libertadores', name: 'Copa Libertadores', color: '#fbbf24' },
        { id: 'mundial_clubes', name: 'Mundial de Clubes', color: '#38bdf8' },
        { id: 'intercontinental', name: 'Copa Intercontinental', color: '#f8fafc' },
        { id: 'europa_league', name: 'Europa League', color: '#f97316' },
        { id: 'sudamericana', name: 'Copa Sudamericana', color: '#94a3b8' },
        { id: 'conference', name: 'Conference League', color: '#2dd4bf' },
        { id: 'supercopa_uefa', name: 'Supercopa de Europa', color: '#e879f9' },
        { id: 'recopa_sudamericana', name: 'Recopa Sudamericana', color: '#fcd34d' },
        { id: 'recopa_europa', name: 'Recopa de Europa', color: '#60a5fa' },
        { id: 'supercopa_sudamericana', name: 'Supercopa Sudamericana', color: '#ef4444' },
        { id: 'conmebol', name: 'Copa Conmebol', color: '#a78bfa' },
        { id: 'mercosur', name: 'Copa Mercosur', color: '#fca5a5' },
        { id: 'merconorte', name: 'Copa Merconorte', color: '#6ee7b7' },
        { id: 'interamericana', name: 'Copa Interamericana', color: '#fde047' },
        { id: 'intertoto', name: 'Copa Intertoto', color: '#9ca3af' }
    ];

    const yearsList = Array.from({ length: 71 }, (_, i) => 1956 + i);

    const [selectedCup, setSelectedCup] = useState('champions');
    const [selectedYear, setSelectedYear] = useState(1994);
    const [activeTab, setActiveTab] = useState('participantes');
    const [activeSubTab, setActiveSubTab] = useState('preliminary');
    const [cupData, setCupData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [importError, setImportError] = useState(null);
    const [selectedTeam, setSelectedTeam] = useState(null);

    const yearsScrollRef = useRef(null);

    useEffect(() => {
        if (yearsScrollRef.current) {
            const el = document.getElementById(`cup-year-${selectedYear}`);
            if (el) {
                const container = yearsScrollRef.current;
                const scrollLeft = el.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (el.clientWidth / 2);
                setTimeout(() => {
                    container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'auto' });
                }, 100);
            }
        }
    }, [selectedCup]);

    useEffect(() => {
        setIsLoading(true);
        setSelectedTeam(null);
        setImportError(null);

        const path = `../data/copas/${selectedCup}/${selectedYear}.json`;

        import(/* @vite-ignore */ path)
            .then(module => {
                console.log(`[CupsHub] Loaded data for ${selectedCup} ${selectedYear}`);
                setCupData(module.default || module);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setImportError("Edición no disponible en la base de datos.");
                setCupData(null);
                setIsLoading(false);
            });
    }, [selectedCup, selectedYear]);

    const scrollNav = (direction) => {
        if (yearsScrollRef.current) {
            yearsScrollRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
        }
    };

    const handleSelectYear = (year) => {
        setSelectedYear(year);
        setActiveTab('participantes');
        setSelectedTeam(null);
        const el = document.getElementById(`cup-year-${year}`);
        if (el && yearsScrollRef.current) {
            const container = yearsScrollRef.current;
            const scrollLeft = el.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (el.clientWidth / 2);
            container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
        }
    };

    const currentCup = cupsList.find(c => c.id === selectedCup);

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-main)', paddingTop: '2rem', position: 'relative' }}>

            <button
                onClick={() => { window.location.href = '/'; }}
                className="glass-panel"
                style={{
                    position: 'absolute', top: '2rem', left: '2rem', width: '50px', height: '50px',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: 'none', background: 'rgba(255,255,255,0.05)', cursor: 'pointer', transition: 'all 0.3s', zIndex: 100
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
                <ArrowLeft size={24} color="var(--accent-gold)" />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '2rem', padding: '0 2rem' }}>
                <h1 className="title-font animate-fade-in" style={{ fontSize: '3.5rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Trophy size={40} color="var(--accent-gold)" />
                    HISTORIA DE LAS COPAS
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', fontWeight: '300', marginBottom: '2rem' }}>
                    La élite del fútbol de clubes. Selecciona una competición y viaja en el tiempo para revisar todos los campeones, llaves y plantillas oficiales.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {cupsList.map(cup => (
                        <button
                            key={cup.id}
                            onClick={() => { setSelectedCup(cup.id); setActiveTab('participantes'); }}
                            className="glass-panel text-white title-font"
                            style={{
                                padding: '1rem 1.5rem',
                                fontSize: '1.2rem',
                                border: selectedCup === cup.id ? `1px solid ${cup.color}` : '1px solid rgba(255,255,255,0.1)',
                                background: selectedCup === cup.id ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.02)',
                                color: selectedCup === cup.id ? cup.color : 'white',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                transform: selectedCup === cup.id ? 'scale(1.05)' : 'scale(1)',
                                boxShadow: selectedCup === cup.id ? `0 10px 20px rgba(0,0,0,0.5), inset 0 0 10px ${cup.color}20` : 'none'
                            }}
                        >
                            {cup.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="glass-panel animate-fade-in" style={{ margin: '0 2rem 3rem', padding: '0', borderRadius: '16px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <button onClick={() => scrollNav('left')} style={{ background: 'rgba(0,0,0,0.4)', border: 'none', color: 'var(--accent-gold)', padding: '1.5rem 1rem', cursor: 'pointer', zIndex: 10 }}>
                    <ChevronLeft size={24} />
                </button>

                <div ref={yearsScrollRef} className="hide-scrollbar" style={{ display: 'flex', overflowX: 'auto', flex: 1, scrollBehavior: 'smooth', padding: '0.5rem' }}>
                    {yearsList.map(year => (
                        <button
                            key={year}
                            id={`cup-year-${year}`}
                            onClick={() => handleSelectYear(year)}
                            style={{
                                flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.2rem',
                                minWidth: '80px', padding: '0.8rem', border: 'none',
                                background: selectedYear === year ? currentCup?.color : 'transparent',
                                color: selectedYear === year ? 'black' : 'white', borderRadius: '12px', cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                opacity: selectedYear === year ? 1 : 0.6, transform: selectedYear === year ? 'scale(1.05)' : 'scale(1)'
                            }}
                        >
                            <span className="title-font" style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '1px' }}>{year}</span>
                        </button>
                    ))}
                </div>

                <button onClick={() => scrollNav('right')} style={{ background: 'rgba(0,0,0,0.4)', border: 'none', color: 'var(--accent-gold)', padding: '1.5rem 1rem', cursor: 'pointer', zIndex: 10 }}>
                    <ChevronRight size={24} />
                </button>
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem 4rem' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${selectedCup}-${selectedYear}`}
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeft: `4px solid ${currentCup?.color}` }}>
                            <div>
                                <h2 className="title-font" style={{ fontSize: '3.5rem', margin: 0, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: currentCup?.color }}>{currentCup?.name}</span> {selectedYear}
                                </h2>
                            </div>
                            <div style={{ opacity: 0.1 }}>
                                <Trophy size={120} color={currentCup?.color} />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 300px) 1fr', gap: '2rem' }}>
                            <div className="glass-panel" style={{ padding: '1rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.5rem', height: 'fit-content' }}>
                                <div style={{ padding: '1rem', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                                    NAVEGACIÓN DEL TORNEO
                                </div>

                                {(() => {
                                    const tabs = [];
                                    tabs.push({ id: 'participantes', label: 'Clubes Participantes' });
                                    if (cupData && cupData.bracket && cupData.bracket.preliminary) tabs.push({ id: 'preliminary', label: 'Ronda Preliminar' });
                                    if (cupData && cupData.bracket && cupData.bracket.firstRound) tabs.push({ id: 'firstRound', label: 'Primera Ronda' });
                                    if (cupData && cupData.bracket && cupData.bracket.secondRound) tabs.push({ id: 'secondRound', label: 'Segunda Ronda' });
                                    if (cupData && cupData.groups && Object.keys(cupData.groups).length > 0) tabs.push({ id: 'grupos', label: 'Fase de Grupos' });
                                    if (!cupData || cupData.bracket) tabs.push({ id: 'final', label: 'Fase Final' });

                                    return tabs.map((tab, index) => (
                                        <button 
                                            key={tab.id} 
                                            onClick={() => { setActiveTab(tab.id); setSelectedTeam(null); }} 
                                            style={{ 
                                                textAlign: 'left', padding: '1rem', 
                                                background: activeTab === tab.id ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)', 
                                                color: activeTab === tab.id ? currentCup?.color : 'white', 
                                                border: `1px solid ${activeTab === tab.id ? currentCup?.color : 'rgba(255,255,255,0.1)'}`, 
                                                borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' 
                                            }}>
                                            {index + 1}. {tab.label}
                                        </button>
                                    ));
                                })()}
                            </div>

                            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', minHeight: '500px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                {isLoading ? (
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: currentCup?.color }}>Cargando datos...</div>
                                ) : importError || !cupData ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '100%', borderStyle: 'dashed', borderColor: 'rgba(255,255,255,0.1)', flex: 1 }}>
                                        <AlertCircle size={64} color="rgba(255,255,255,0.2)" style={{ marginBottom: '1rem' }} />
                                        <h3 className="title-font" style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>ARCHIVO NO DISPONIBLE</h3>
                                        <p style={{ color: 'var(--text-muted)', maxWidth: '500px' }}>
                                            Las plantillas y partidos de la {currentCup?.name} del año {selectedYear} aún no han sido inyectados en la base de datos central.
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        {activeTab === 'participantes' && !selectedTeam && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', borderBottom: `2px solid ${currentCup?.color}`, paddingBottom: '0.5rem', display: 'inline-block' }}>
                                                    Clubes Participantes ({cupData.participants?.length || 0})
                                                </h3>
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                                    {cupData.participants?.map((team, i) => (
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
                                                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                                                    e.currentTarget.style.borderColor = currentCup?.color;
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
                                                            <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                <img
                                                                    src={getShieldUrl(team.id)}
                                                                    alt={team.name}
                                                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                                                                />
                                                                <Shield size={24} color="var(--text-muted)" style={{ display: 'none' }} />
                                                            </div>
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                                                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>{team.name}</span>
                                                                {(team.flag || team.country) && <img src={getFlagUrl(team.flag || team.country)} alt={team.flag || team.country} style={{ width: '20px', borderRadius: '3px', boxShadow: '0 0 5px rgba(0,0,0,0.5)' }} onError={(e) => { e.target.style.display = 'none'; }} />}
                                                            </div>
                                                        </div>

                                                    ))}
                                                </div>
                                                <div style={{ marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                                    *Haz clic sobre un club habilitado para ver su plantilla oficial.
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'participantes' && selectedTeam && (
                                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                <button
                                                    onClick={() => setSelectedTeam(null)}
                                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: 'none', color: currentCup?.color, fontWeight: 'bold', cursor: 'pointer', marginBottom: '2rem', padding: 0 }}
                                                >
                                                    <ArrowLeft size={20} /> Volver a Clubes
                                                </button>

                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                                                    <div style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <img src={getShieldUrl(selectedTeam.id)} alt={selectedTeam.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                                                        <Shield size={60} color="var(--text-muted)" style={{ display: 'none', opacity: 0.3 }} />
                                                    </div>
                                                    <div>
                                                        <h3 className="title-font" style={{ fontSize: '2.5rem', margin: 0, color: 'white', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                                            {selectedTeam.name}
                                                            {(selectedTeam.flag || selectedTeam.country) && <img src={getFlagUrl(selectedTeam.flag || selectedTeam.country)} alt={selectedTeam.flag || selectedTeam.country} style={{ height: '30px', borderRadius: '4px', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }} onError={(e) => { e.target.style.display = 'none'; }} />}
                                                        </h3>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                                                            DT: {selectedTeam.dt || 'Desconocido'}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                                                    {selectedTeam.squad?.map((player) => (
                                                        <div
                                                            key={player.no || player.name}
                                                            style={{
                                                                display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden'
                                                            }}
                                                        >
                                                            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.8rem 1rem', width: '50px', textAlign: 'center', color: currentCup?.color, fontWeight: '900', fontSize: '1.2rem', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                                                                {player.no || '-'}
                                                            </div>
                                                            <div style={{ padding: '0.8rem 1rem', flex: 1, minWidth: 0 }}>
                                                                <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.05rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                                    {player.flag && <img src={getFlagUrl(player.flag)} alt={player.flag} style={{ width: '18px', borderRadius: '2px', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />}
                                                                    <span>{player.name}</span>
                                                                </div>
                                                                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                                    <span>{player.pos}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'final' && cupData.bracket && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', borderBottom: `2px solid ${currentCup?.color}`, paddingBottom: '0.5rem', display: 'inline-block' }}>
                                                    Fase Final
                                                </h3>

                                                <div className="glass-panel hide-scrollbar" style={{ padding: '2rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', overflowX: 'auto' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '1.5rem', minWidth: 'max-content' }}>
                                                        {cupData.bracket.roundOf16 && cupData.bracket.roundOf16.length > 0 && (
                                                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', gap: '1rem', width: '250px', position: 'relative' }}>
                                                                <div style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>Octavos de Final</div>
                                                                {cupData.bracket.roundOf16.map((m, i) => <div key={i}>{renderMatch(m)}</div>)}
                                                            </div>
                                                        )}

                                                        {cupData.bracket.quarterFinals && cupData.bracket.quarterFinals.length > 0 && (
                                                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '250px', position: 'relative' }}>
                                                                <div style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>Cuartos de Final</div>
                                                                {cupData.bracket.quarterFinals.map((m, i) => <div key={i}>{renderMatch(m)}</div>)}
                                                            </div>
                                                        )}

                                                        {cupData.bracket.semiFinals && cupData.bracket.semiFinals.length > 0 && (
                                                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '250px', position: 'relative' }}>
                                                                <div style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>Semifinales</div>
                                                                {cupData.bracket.semiFinals.map((m, i) => <div key={i}>{renderMatch(m)}</div>)}
                                                            </div>
                                                        )}

                                                        <div style={{ display: 'flex', flexDirection: 'column', width: '320px', position: 'relative' }}>
                                                            {cupData.bracket.final && (
                                                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                                    {renderMatch(cupData.bracket.final, true)}
                                                                </div>
                                                            )}
                                                            {cupData.bracket.thirdPlace && (
                                                                <div style={{ marginTop: '2rem' }}>
                                                                    {renderMatch(cupData.bracket.thirdPlace, false, 'Tercer Puesto')}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'preliminary' && cupData.bracket && cupData.bracket.preliminary && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', borderBottom: `2px solid ${currentCup?.color}`, paddingBottom: '0.5rem', display: 'inline-block', textTransform: 'uppercase' }}>
                                                    Ronda Preliminar
                                                </h3>

                                                <div className="glass-panel hide-scrollbar" style={{ padding: '2rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', overflowX: 'auto' }}>
                                                    <div style={{ width: '100%' }}>
                                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                                                            {cupData.bracket.preliminary.map((m, i) => (
                                                                <div key={i} style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                    <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '1rem', fontWeight: 'bold' }}>GLOBAL: {m.agg || m.score}</div>
                                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                                                        {m.details ? m.details.map((leg, idx) => (
                                                                            <div key={idx} style={{ position: 'relative' }}>
                                                                                <div style={{ position: 'absolute', top: '-8px', left: '10px', fontSize: '0.65rem', color: 'var(--text-muted)', background: '#111', padding: '0 8px', zIndex: 1, borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>{leg.leg.toUpperCase()}</div>
                                                                                {renderMatch({ ...m, score: leg.score, goals1: leg.goals })}
                                                                            </div>
                                                                        )) : renderMatch({ ...m, score: m.score || m.agg || '?' })}
                                                                    </div>
                                                                    {m.note && <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', textAlign: 'center', marginTop: '1rem', fontStyle: 'italic' }}>{m.note}</div>}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'firstRound' && cupData.bracket && cupData.bracket.firstRound && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', borderBottom: `2px solid ${currentCup?.color}`, paddingBottom: '0.5rem', display: 'inline-block', textTransform: 'uppercase' }}>
                                                    Primera Ronda
                                                </h3>

                                                <div className="glass-panel hide-scrollbar" style={{ padding: '2rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', overflowX: 'auto' }}>
                                                    <div style={{ width: '100%' }}>
                                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                                                            {cupData.bracket.firstRound.map((m, i) => (
                                                                <div key={i} style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                    <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '1rem', fontWeight: 'bold' }}>GLOBAL: {m.agg || m.score}</div>
                                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                                                        {m.details ? m.details.map((leg, idx) => (
                                                                            <div key={idx} style={{ position: 'relative' }}>
                                                                                <div style={{ position: 'absolute', top: '-8px', left: '10px', fontSize: '0.65rem', color: 'var(--text-muted)', background: '#111', padding: '0 8px', zIndex: 1, borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>{leg.leg.toUpperCase()}</div>
                                                                                {renderMatch({ ...m, score: leg.score, goals1: leg.goals })}
                                                                            </div>
                                                                        )) : renderMatch({ ...m, score: m.score || m.agg || '?' })}
                                                                    </div>
                                                                    {m.note && <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', textAlign: 'center', marginTop: '1rem', fontStyle: 'italic' }}>{m.note}</div>}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'secondRound' && cupData.bracket && cupData.bracket.secondRound && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', borderBottom: `2px solid ${currentCup?.color}`, paddingBottom: '0.5rem', display: 'inline-block', textTransform: 'uppercase' }}>
                                                    Segunda Ronda
                                                </h3>

                                                <div className="glass-panel hide-scrollbar" style={{ padding: '2rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', overflowX: 'auto' }}>
                                                    <div style={{ width: '100%' }}>
                                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                                                            {cupData.bracket.secondRound.map((m, i) => (
                                                                <div key={i} style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                    <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '1rem', fontWeight: 'bold' }}>GLOBAL: {m.agg || m.score}</div>
                                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                                                        {m.details ? m.details.map((leg, idx) => (
                                                                            <div key={idx} style={{ position: 'relative' }}>
                                                                                <div style={{ position: 'absolute', top: '-8px', left: '10px', fontSize: '0.65rem', color: 'var(--text-muted)', background: '#111', padding: '0 8px', zIndex: 1, borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>{leg.leg.toUpperCase()}</div>
                                                                                {renderMatch({ ...m, score: leg.score, goals1: leg.goals })}
                                                                            </div>
                                                                        )) : renderMatch({ ...m, score: m.score || m.agg || '?' })}
                                                                    </div>
                                                                    {m.note && <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', textAlign: 'center', marginTop: '1rem', fontStyle: 'italic' }}>{m.note}</div>}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'grupos' && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', borderBottom: `2px solid ${currentCup?.color}`, paddingBottom: '0.5rem', display: 'inline-block', textTransform: 'uppercase' }}>
                                                    Fase de Grupos
                                                </h3>

                                                {!cupData.groups ? (
                                                    <div style={{ color: 'var(--text-muted)', padding: '2rem', textAlign: 'center', borderStyle: 'dashed', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '16px' }}>
                                                        Motor de grupos en preparación (Mismo formato que Mundiales).
                                                    </div>
                                                ) : (
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                                                        {Object.entries(cupData.groups).map(([groupName, groupData]) => (
                                                            <div key={groupName} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                                                                <h4 className="title-font" style={{ fontSize: '1.6rem', color: currentCup?.color, marginTop: 0, marginBottom: '1rem', borderBottom: `1px solid ${currentCup?.color}40`, paddingBottom: '0.5rem' }}>
                                                                    Grupo {groupName}
                                                                </h4>
                                                                <div style={{ overflowX: 'auto' }}>
                                                                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                                                                        <thead>
                                                                            <tr style={{ color: 'var(--text-muted)', borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                                                                                <th style={{ textAlign: 'left', padding: '0.5rem', minWidth: '150px' }}>Club</th>
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
                                                                                <tr key={t.team} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', color: 'white', background: i < 2 ? `${currentCup?.color}15` : 'transparent', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} onMouseOut={(e) => e.currentTarget.style.background = i < 2 ? `${currentCup?.color}15` : 'transparent'}>
                                                                                    <td style={{ padding: '0.8rem 0.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: i < 2 ? 'bold' : 'normal' }}>
                                                                                        <span style={{ color: 'var(--text-muted)', width: '16px', fontSize: '0.8rem', textAlign: 'center' }}>{i + 1}</span>
                                                                                        <img src={getShieldUrl(t.id)} alt={t.team} style={{ width: '20px', height: '20px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                                                                                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.team}</span>
                                                                                    </td>
                                                                                    <td style={{ textAlign: 'center', fontWeight: '900', color: currentCup?.color }}>{t.pts}</td>
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

                                                                {groupData.matches && groupData.matches.length > 0 && (
                                                                    <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.2rem' }}>
                                                                        <h5 style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', textAlign: 'center' }}>Partidos del Grupo</h5>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                                            {groupData.matches.map((m, idx) => (
                                                                                <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '0.8rem', fontSize: '0.9rem' }}>
                                                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: (m.goals1?.length || m.goals2?.length) ? '0.5rem' : '0' }}>
                                                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'flex-start', fontWeight: parseInt(m.score.split('-')[0]) > parseInt(m.score.split('-')[1]) ? 'bold' : 'normal', color: 'white' }}>
                                                                                            <img src={getShieldUrl(m.id1)} alt={m.team1} style={{ width: '16px', height: '16px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                                                                                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.team1}</span>
                                                                                        </div>
                                                                                        <div style={{ padding: '0 1rem', fontWeight: '900', color: currentCup?.color, letterSpacing: '1px' }}>{m.score}</div>
                                                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'flex-end', fontWeight: parseInt(m.score.split('-')[1]) > parseInt(m.score.split('-')[0]) ? 'bold' : 'normal', color: 'white' }}>
                                                                                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.team2}</span>
                                                                                            <img src={getShieldUrl(m.id2)} alt={m.team2} style={{ width: '16px', height: '16px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                                                                                        </div>
                                                                                    </div>
                                                                                    {(m.goals1?.length > 0 || m.goals2?.length > 0) && (
                                                                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px dotted rgba(255,255,255,0.1)', paddingTop: '0.4rem' }}>
                                                                                            <div style={{ flex: 1, textAlign: 'left' }}>
                                                                                                {m.goals1?.join(', ')}
                                                                                            </div>
                                                                                            <div style={{ width: '30px' }}></div>
                                                                                            <div style={{ flex: 1, textAlign: 'right' }}>
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

                                    </>
                                )}
                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
    );
}
