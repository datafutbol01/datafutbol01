import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getClubById, getLeagues } from '../data/loader';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';


export default function ClubDetail() {
  const { leagueId, clubId } = useParams();
  const club = getClubById(leagueId, clubId);
  const allLeagues = getLeagues();
  const currentLeague = allLeagues.find(l => l.id === leagueId) || { name: leagueId };
  const [activeTab, setActiveTab] = useState('historia');
  const [zoomedImage, setZoomedImage] = useState(null);
  const navigate = useNavigate();

  // Máscaras SVG Vectoriales Inyectadas en JS
  const shirtMask = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 25 5 Q 35 15 50 15 Q 65 15 75 5 L 95 20 Q 100 25 95 35 L 85 40 L 85 95 Q 85 100 50 100 Q 15 100 15 95 L 15 40 L 5 35 Q 0 25 5 20 Z' fill='black'/%3E%3C/svg%3E\")";
  const shortsMask = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 15 5 L 85 5 Q 90 5 95 10 L 95 55 Q 95 60 85 60 L 55 60 L 55 35 Q 50 30 45 35 L 45 60 L 15 60 Q 5 60 5 55 L 5 10 Q 10 5 15 5 Z' fill='black'/%3E%3C/svg%3E\")";
  const socksMask = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='25' y='5' width='20' height='90' rx='10' fill='black'/%3E%3Crect x='55' y='5' width='20' height='90' rx='10' fill='black'/%3E%3C/svg%3E\")";

  // Helper to render css gradients for kits
  const getKitBackground = (eq) => {
    if (!eq.c2) return eq.c1;
    switch (eq.tipo) {
      case 'franja-horizontal':
        return `linear-gradient(to bottom, ${eq.c1} 35%, ${eq.c2} 35%, ${eq.c2} 65%, ${eq.c1} 65%)`;
      case 'franja-vertical':
        return `linear-gradient(to right, ${eq.c1} 35%, ${eq.c2} 35%, ${eq.c2} 65%, ${eq.c1} 65%)`;
      case 'rayas-verticales':
        return `repeating-linear-gradient(to right, ${eq.c1}, ${eq.c1} 20%, ${eq.c2} 20%, ${eq.c2} 40%)`;
      case 'rayas-horizontales':
        return `repeating-linear-gradient(to bottom, ${eq.c1}, ${eq.c1} 20%, ${eq.c2} 20%, ${eq.c2} 40%)`;
      case 'banda-diagonal':
        return `linear-gradient(135deg, ${eq.c1} 38%, ${eq.c2} 38%, ${eq.c2} 62%, ${eq.c1} 62%)`;
      case 'v-pecho':
        return `
          linear-gradient(to bottom right, transparent 47%, ${eq.c2} 47%, ${eq.c2} 58%, transparent 58%) 0 0 / 51% 100% no-repeat,
          linear-gradient(to bottom left, transparent 47%, ${eq.c2} 47%, ${eq.c2} 58%, transparent 58%) 100% 0 / 51% 100% no-repeat,
          ${eq.c1}
        `;
      case 'mitad-horizontal':
        return `linear-gradient(to bottom, ${eq.c1} 50%, ${eq.c2} 50%)`;
      case 'mitad-diagonal':
        return `linear-gradient(to bottom right, ${eq.c1} 50%, ${eq.c2} 50%)`;
      case 'mitad-vertical':
      default:
        // Half and half vertical (original default)
        return `linear-gradient(to right, ${eq.c1} 50%, ${eq.c2} 50%)`;
    }
  };

  if (!club) {
    return <div className="p-8 text-center text-red-500">Club no encontrado</div>;
  }

  const { datos, historia, canchas, temporadas, equipacion, idolos, goleadores_historicos, presencias_historicas, titulos } = club;

  // Visual Theme Setup from equipacion
  const currentColors = equipacion?.[equipacion.length - 1] || { c1: '#334155', c2: '#0f172a' };
  
  const tabs = [
    { id: 'historia', label: 'Historia' },
    { id: 'escudos', label: 'Escudos' },
    { id: 'canchas', label: 'Estadio' },
    { id: 'palmares', label: 'Palmarés' },
    { id: 'equipacion', label: 'Equipación' },
    { id: 'leyendas', label: 'Leyendas' },
    { id: 'apodos', label: 'Los Apodos' }
  ];

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '3rem' }}>
      {/* Hero Header */}
      <div 
        style={{ 
          height: '280px',
          background: `linear-gradient(135deg, ${currentColors.c1} 0%, ${currentColors.c2 || currentColors.c1} 100%)`,
          position: 'relative',
          padding: '2rem',
          display: 'flex',
          alignItems: 'flex-end',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}
      >
        {/* Dark gradient overlay to make text pop */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,6,23,0.95) 0%, transparent 60%)' }}></div>

        {/* Botones de retroceso */}
        <div style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 10, display: 'flex', gap: '1rem' }}>
          {/* Volver atrás */}
          <button
            onClick={() => navigate(-1)}
            className="glass-panel"
            title="Volver atrás"
            style={{ width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', background: 'rgba(255,255,255,0.05)' }}
            onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          >
            <ArrowLeft size={20} color="var(--accent-gold)" />
          </button>

          {/* Volver a Ligas */}
          <Link
            to="/leagues"
            className="glass-panel"
            style={{ borderRadius: '25px', padding: '0 1.5rem', display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', fontWeight: 'bold', background: 'rgba(255,255,255,0.05)' }}
            onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          >
            Volver a Ligas
          </Link>
        </div>
        
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'flex-end', gap: '2rem', maxWidth: '1100px', margin: '0 auto', width: '100%', paddingBottom: '0.5rem' }}>
          
          {/* Contenedor del Escudo */}
          <div style={{ 
            width: '160px', height: '160px', flexShrink: 0,
            background: 'rgba(0,0,0,0.2)', borderRadius: '50%', padding: '1.5rem', 
            border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', 
            transform: 'translateY(40px)', backdropFilter: 'blur(10px)', boxShadow: '0 15px 35px rgba(0,0,0,0.6)' 
          }}>
            <img 
              src={(() => {
                if (datos?.escudo_actual) return datos.escudo_actual;
                if (club.evolucion_escudos && club.evolucion_escudos.length > 0) {
                  const current = club.evolucion_escudos.find(e => e.ano === 'Actualidad' || e.ano === '2024');
                  if (current && current.url) return current.url;
                }
                return `/escudos/${club.id}.png`;
              })()}
              alt={`Escudo de ${datos.nombre_corto || datos.nombre_completo}`}
              style={{ width: '90%', height: '90%', objectFit: 'contain', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' }}
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback visual cuando no hay imagen png del escudo */}
            <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', color: 'rgba(255,255,255,0.5)' }}>
              <Shield size={64} />
              <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 'bold' }}>{datos.nombre_corto?.charAt(0) || datos.nombre_completo?.charAt(0) || club.id.charAt(0).toUpperCase()}</span>
            </div>
          </div>

          <div style={{ paddingBottom: '0.5rem' }}>
            <h1 className="title-font" style={{ fontSize: '4rem', margin: 0, textShadow: '0 4px 10px rgba(0,0,0,0.8)', lineHeight: 1 }}>
              {datos.nombre_corto || datos.nombre_oficial || datos.nombre_completo}
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--accent-gold)', margin: '0.5rem 0 0 0', fontWeight: 'bold', textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
              {datos.apodos ? datos.apodos.join(' • ') : datos.apodo}
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '5rem auto 2rem', padding: '0 2rem' }}>
        {/* Tabs System */}
        <div className="glass-panel" style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem', borderRadius: '15px', overflowX: 'auto', marginBottom: '2.5rem' }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: '1rem',
                border: 'none',
                background: activeTab === t.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: activeTab === t.id ? 'white' : 'var(--text-muted)',
                borderRadius: '10px',
                fontWeight: 'bold',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
                boxShadow: activeTab === t.id ? 'inset 0 0 10px rgba(255,255,255,0.05)' : 'none',
                minWidth: '120px'
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass-panel"
            style={{ padding: '3rem', minHeight: '500px' }}
          >
            {activeTab === 'historia' && (
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>
                    {historia?.map((p, idx) => (
                      <p key={idx}>
                        {typeof p === 'string' ? p : (
                          <>
                            <strong style={{ color: 'white', display: 'block', marginBottom: '0.2rem' }}>{p.ano} - {p.hito}</strong>
                            {p.desc}
                          </>
                        )}
                      </p>
                    )) || "Información histórica no disponible."}
                  </div>
                </div>
                <div>
                  <div className="glass-card" style={{ padding: '2rem' }}>
                    <h3 className="title-font" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>Ficha del Club</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                      <li><strong style={{ color: 'white' }}>Fundación:</strong> <span className="notranslate">{datos.fundacion}</span></li>
                      {datos.socios && <li><strong style={{ color: 'white' }}>Masa Societaria:</strong> <span className="notranslate">{datos.socios.toLocaleString()} activos</span></li>}
                      {datos.records?.maximo_goleador && <li><strong style={{ color: 'white' }}>Máximo Goleador:</strong> <span className="notranslate">{datos.records.maximo_goleador}</span></li>}
                      {datos.records?.mas_presencias && <li><strong style={{ color: 'white' }}>Más Presencias:</strong> <span className="notranslate">{datos.records.mas_presencias}</span></li>}
                      {datos.records?.mayor_goleada && <li><strong style={{ color: 'white' }}>Mayor Goleada:</strong> <span className="notranslate">{datos.records.mayor_goleada}</span></li>}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'apodos' && (
              <div className="glass-card" style={{ padding: '3rem' }}>
                <h2 className="title-font" style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', marginBottom: '2rem' }}>El Origen de los Apodos</h2>
                
                {club.origen_apodos && club.origen_apodos.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {club.origen_apodos.map((apodo, idx) => (
                      <div key={idx} style={{ 
                        borderLeft: '4px solid var(--accent-gold)',
                        paddingLeft: '2rem',
                        position: 'relative'
                      }}>
                        <h3 className="notranslate title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                          <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginRight: '1rem', opacity: 0.5 }}>#{idx + 1}</span>
                          "{apodo.apodo}"
                        </h3>
                        <p style={{ 
                          fontSize: '1.15rem', 
                          lineHeight: '1.8', 
                          color: 'var(--text-muted)', 
                          textAlign: 'justify' 
                        }}>
                          {apodo.origen}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.02)', borderRadius: '15px' }}>
                    <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
                      Aún no hay crónicas archivadas sobre el origen de los apodos de este club.
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'escudos' && (
              <div>
                <h2 className="title-font" style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', marginBottom: '2rem' }}>Evolución del Escudo</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                  {club.evolucion_escudos?.map((escudo, idx) => {
                    const imgSrc = escudo.escudo || escudo.url;
                    const yearLabel = escudo.desde ? `${escudo.desde} — ${escudo.hasta || 'Presente'}` : escudo.ano;
                    
                    return (
                    <div key={idx} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                      <div style={{ width: '150px', height: '150px', marginBottom: '1.5rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img 
                          src={`${imgSrc}?v=1`} 
                          alt={`Escudo del año ${yearLabel}`} 
                          style={{ 
                            maxWidth: '100%', maxHeight: '100%', 
                            objectFit: 'contain', 
                            filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))', 
                            cursor: 'pointer',
                            transform: escudo.zoom ? `scale(${escudo.zoom})` : 'none'
                          }}
                          onClick={() => setZoomedImage(imgSrc)}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback en caso de que el enlace se rompa */}
                        <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', color: 'rgba(255,255,255,0.2)' }}>
                          <Shield size={64} />
                        </div>
                      </div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>{yearLabel}</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{escudo.desc}</p>
                    </div>
                  )})}
                  
                  {/* Si el club no tiene escudos registrados en el array */}
                  {(!club.evolucion_escudos || club.evolucion_escudos.length === 0) && (
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', gridColumn: '1 / -1' }}>Aún no hay registros de evolución de escudos para este club.</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'canchas' && (() => {
              // Extract active stadiums
              let activeStadiums = [];
              if (canchas && canchas.some(c => c.estado)) {
                activeStadiums = canchas.filter(c => c.estado === 'Activo' || c.estado === 'activo').map(c => ({
                  nombre: c.nombre,
                  apodo: c.apodo,
                  inauguracion: c.desde,
                  direccion: c.direccion,
                  lat: parseFloat(c.lat),
                  lng: parseFloat(c.lng),
                  obs: c.obs
                }));
              } else if (datos.estadios) {
                activeStadiums = datos.estadios.filter(e => e.condicion === 'actual').map(e => ({...e, lat: parseFloat(e.lat), lng: parseFloat(e.lng)}));
              } else if (datos.estadio_actual) {
                activeStadiums = [{
                  nombre: datos.estadio_actual,
                  apodo: datos.estadio_apodo,
                  capacidad: datos.estadio_capacidad,
                  inauguracion: datos.estadio_inauguracion,
                  direccion: datos.estadio_direccion,
                  lat: parseFloat(datos.estadio_lat),
                  lng: parseFloat(datos.estadio_lng)
                }];
              } else if (canchas && canchas.length > 0) {
                 // Fallback to last item in legacy canchas
                 const last = canchas[canchas.length - 1];
                 activeStadiums = [{
                   nombre: last.nombre,
                   apodo: last.apodo,
                   inauguracion: last.desde,
                   direccion: last.direccion,
                   lat: parseFloat(last.lat),
                   lng: parseFloat(last.lng),
                   obs: last.obs
                 }];
              }

              // Extract historic stadiums
              let historicStadiums = [];
              if (canchas && canchas.some(c => c.estado)) {
                historicStadiums = canchas.filter(c => c.estado === 'Histórico' || c.estado === 'historico').map(c => ({
                  nombre: c.nombre,
                  apodo: c.apodo || c.obs,
                  inauguracion: c.desde ? `${c.desde} — ${c.hasta || ''}` : null,
                  direccion: c.direccion,
                  lat: parseFloat(c.lat),
                  lng: parseFloat(c.lng),
                  obs: c.obs
                }));
              } else if (datos.estadios) {
                historicStadiums = datos.estadios.filter(e => e.condicion === 'historico').map(e => ({...e, lat: parseFloat(e.lat), lng: parseFloat(e.lng)}));
              } else if (canchas && canchas.length > 1) {
                // Fallback to legacy canchas (everything except last)
                historicStadiums = canchas.slice(0, canchas.length - 1).reverse().map(c => ({
                  nombre: c.nombre,
                  apodo: c.apodo || c.obs,
                  inauguracion: c.desde ? `${c.desde} — ${c.hasta || ''}` : null,
                  direccion: c.direccion,
                  lat: parseFloat(c.lat),
                  lng: parseFloat(c.lng),
                  obs: c.obs
                }));
              }

              return (
              <div>
                <h2 className="title-font" style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', marginBottom: '2rem' }}>El Estadio</h2>
                
                {/* Estadios Actuales Renderer */}
                {activeStadiums.map((estadio, idx) => (
                  <div key={`actual-${idx}`} className="glass-card" style={{ padding: '2rem', marginBottom: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div>
                      <h3 className="title-font notranslate" style={{ fontSize: '2rem', marginBottom: '1rem' }}>{estadio.nombre}</h3>
                      {estadio.apodo && <p className="notranslate" style={{ fontSize: '1.25rem', color: 'var(--accent-gold)', marginBottom: '1rem' }}>"{estadio.apodo}"</p>}
                      {estadio.capacidad && <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong>Capacidad:</strong> {estadio.capacidad.toLocaleString()} espectadores</p>}
                      {estadio.inauguracion && <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong>Inauguración:</strong> {estadio.inauguracion}</p>}
                      {estadio.direccion && <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong>Dirección:</strong> {estadio.direccion}</p>}
                      {estadio.obs && <p style={{ color: 'var(--text-muted)', marginTop: '1rem', lineHeight: 1.5 }}>{estadio.obs}</p>}
                    </div>
                    <div style={{ height: '300px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                      {(estadio.lat && estadio.lng && !isNaN(estadio.lat)) ? (
                        <MapContainer 
                          center={[estadio.lat, estadio.lng]} 
                          zoom={16} 
                          scrollWheelZoom={false}
                          style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}
                          key={`map-${estadio.lat}-${estadio.lng}`}
                        >
                          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap" />
                          <Marker position={[estadio.lat, estadio.lng]}>
                            <Popup className="notranslate">{estadio.nombre}</Popup>
                          </Marker>
                        </MapContainer>
                      ) : (
                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)' }}>
                          Coordenadas no disponibles
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                <h3 className="title-font" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Estadios Históricos</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  {historicStadiums.map((estadio, idx) => (
                    <div key={`historico-new-${idx}`} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                      <h4 className="notranslate" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{estadio.nombre}</h4>
                      {estadio.inauguracion && <p style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                        {estadio.inauguracion}
                      </p>}
                      {estadio.direccion && <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>📍 {estadio.direccion}</p>}
                      {estadio.apodo && <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.4, flex: 1 }}>{estadio.apodo}</p>}
                      
                      {(estadio.lat && estadio.lng && !isNaN(estadio.lat)) && (
                        <div style={{ height: '180px', borderRadius: '8px', overflow: 'hidden', marginTop: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                          <MapContainer 
                            center={[estadio.lat, estadio.lng]} 
                            zoom={14} 
                            scrollWheelZoom={false}
                            style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}
                            key={`map-hist-${estadio.lat}-${estadio.lng}`}
                          >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap" />
                            <Marker position={[estadio.lat, estadio.lng]}>
                              <Popup className="notranslate">{estadio.nombre}</Popup>
                            </Marker>
                          </MapContainer>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Notice if no historic stadiums */}
                  {historicStadiums.length === 0 && (
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', gridColumn: '1 / -1' }}>No hay registros de estadios históricos documentados en esta biblioteca.</p>
                  )}
                </div>
              </div>
              );
            })()}

            {activeTab === 'palmares' && (
              <div>
                <h2 className="title-font" style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', marginBottom: '1rem' }}>Palmarés Histórico</h2>
                {titulos && titulos.length > 0 && (
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Todos los títulos y trofeos que forjaron la grandeza del club.</p>
                )}
                
                {titulos && titulos.length > 0 ? (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {titulos.map((t, idx) => (
                      <div key={idx} className="glass-card" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ fontSize: '3rem', color: 'var(--accent-gold)', fontWeight: 'bold', marginBottom: '0.5rem', lineHeight: 1 }}>🏆 {t.n || t.cantidad}</div>
                        <h3 className="notranslate" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem', flex: 1 }}>{t.comp || t.nombre}</h3>
                        {(t.anios || t.años) && (
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                            {(t.anios || t.años).join(', ')}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ color: 'var(--text-muted)' }}>No hay datos de títulos registrados.</div>
                )}
              </div>
            )}

            {activeTab === 'equipacion' && (
              <div>
                <h2 className="title-font" style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', marginBottom: '2rem' }}>Los Colores</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                  {equipacion?.map((eq, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        {/* Render de Equipación (Foto Real o Silhouette) */}
                        <div style={{ width: '120px', height: '160px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {eq.foto ? (
                            <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle, #ffffff 0%, #f1f5f9 100%)', borderRadius: '16px', padding: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.5)' }}>
                              <img 
                                src={eq.foto} 
                                alt={`Camiseta ${eq.desde}`} 
                                style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply', cursor: 'zoom-in', transition: 'transform 0.2s' }}
                                onClick={() => setZoomedImage(eq.foto)}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                onError={(e) => {
                                  e.target.parentElement.style.display = 'none';
                                  if (e.target.parentElement.nextSibling) {
                                    e.target.parentElement.nextSibling.style.display = 'flex';
                                  }
                                }}
                              />
                            </div>
                          ) : null}
                          
                          <div style={{ 
                            display: eq.foto ? 'none' : 'flex', 
                            flexDirection: 'column', alignItems: 'center', gap: '3px', 
                            filter: 'drop-shadow(0 6px 8px rgba(0,0,0,0.4))' 
                          }}>
                            {/* Camiseta Shape */}
                            <div style={{ 
                              width: '80px', height: '80px',
                              background: getKitBackground(eq),
                              WebkitMaskImage: shirtMask, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center',
                              maskImage: shirtMask, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center'
                            }}></div>
                            {/* Short Shape */}
                            <div style={{
                              width: '70px', height: '35px',
                              background: eq.sh || '#ffffff',
                              WebkitMaskImage: shortsMask, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center',
                              maskImage: shortsMask, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center'
                            }}></div>
                            {/* Medias Shape */}
                            <div style={{
                              width: '40px', height: '30px',
                              background: eq.me || '#333333',
                              WebkitMaskImage: socksMask, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center',
                              maskImage: socksMask, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center'
                            }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <p style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>{eq.desde} — {eq.hasta || 'Presente'}</p>
                          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{eq.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'leyendas' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                
                {/* Ídolos */}
                <div>
                  <h3 className="title-font" style={{ fontSize: '1.4rem', color: 'var(--accent-gold)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                    Grandes Ídolos
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {idolos?.slice(0, 5).map((jug, idx) => (
                      <div key={idx} className="glass-card" style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                          <h4 className="notranslate" style={{ fontSize: '1rem', fontWeight: 'bold' }}>{jug.nombre}</h4>
                          {jug.pos && <span style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>{jug.pos}</span>}
                        </div>
                        {jug.apodo && <p className="notranslate" style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontStyle: 'italic', marginBottom: '0.25rem' }}>"{jug.apodo}"</p>}
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Época: {jug.periodo || jug.epoca}</p>
                        {jug.desc && <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.3 }}>{jug.desc}</p>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Goleadores */}
                <div>
                  <h3 className="title-font" style={{ fontSize: '1.4rem', color: 'var(--accent-gold)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                    Máximos Goleadores
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {goleadores_historicos?.slice(0, 5).map((jug, idx) => (
                      <div key={idx} className="glass-card" style={{ padding: '1rem', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', right: '-5px', top: '-5px', fontSize: '4rem', opacity: 0.05, fontWeight: '900', fontStyle: 'italic' }}>
                          {idx + 1}
                        </div>
                        <h4 className="notranslate" style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{jug.nombre}</h4>
                        {jug.apodo && <p className="notranslate" style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontStyle: 'italic', marginBottom: '0.25rem' }}>"{jug.apodo}"</p>}
                        <p style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', fontWeight: 'bold', margin: '0.25rem 0' }}>{jug.goles} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>goles</span></p>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Época: {jug.periodo || jug.epoca}</p>
                        {jug.desc && <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.3 }}>{jug.desc}</p>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Presencias */}
                <div>
                  <h3 className="title-font" style={{ fontSize: '1.4rem', color: 'var(--accent-gold)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                    Más Partidos
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {presencias_historicas?.slice(0, 5).map((jug, idx) => (
                      <div key={idx} className="glass-card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                          <span style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--accent-gold)' }}>#{idx + 1}</span>
                          <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold' }}>{jug.nombre}</h4>
                        </div>
                        {jug.apodo && <p className="notranslate" style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontStyle: 'italic' }}>"{jug.apodo}"</p>}
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{jug.partidos ? `${jug.partidos} partidos` : 'Dato no numérico'}</p>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' }}>Época: {jug.periodo || jug.epoca}</p>
                        {jug.desc && <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.3 }}>{jug.desc}</p>}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Modal (Zoom de Imágenes) */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.9)',
              backdropFilter: 'blur(10px)',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-out',
              padding: '2rem'
            }}
          >
            {/* Botón Cerrar X */}
            <div style={{ position: 'absolute', top: '2rem', right: '3rem', color: 'rgba(255,255,255,0.7)', fontSize: '2rem', cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='white'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
              ✕
            </div>
            {/* Imagen Ampliada */}
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={zoomedImage} 
              alt="Zoomed" 
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))',
                borderRadius: '8px'
              }}
              onClick={(e) => e.stopPropagation()} // Click en la imagen no la cierra
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
