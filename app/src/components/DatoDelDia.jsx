import React, { useState, useEffect } from 'react';
import rawEfemerides from '../data/efemerides.json';
import { readData } from '../data/loader';

const DatoDelDia = () => {
  const [datoHoy, setDatoHoy] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Obtener la fecha actual en formato MM-DD
    const hoy = new Date();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    const fechaClave = `${mes}-${dia}`;

    // Buscar en el JSON. Si no hay efeméride para hoy, usamos un dato dinámico de la base de datos.
    const efemerides = readData(rawEfemerides);
    
    if (efemerides[fechaClave]) {
      console.log(`[DatoDelDia] Efeméride encontrada para ${fechaClave}`);
      setDatoHoy(efemerides[fechaClave]);
      return;
    }

    console.log(`[DatoDelDia] No hay efeméride para ${fechaClave}, generando dato aleatorio...`);
    import('../data/loader').then(module => {
      const allItems = module.getAllSearchableItems();
      const items = allItems.filter(i => i.type === 'club' || i.type === 'mundial' || (i.type === 'league' && i.country !== 'Torneo Local'));
      
      if (items.length > 0) {
        const item = items[Math.floor(Math.random() * items.length)];
        let dato = '';
        
        if (item.type === 'club') {
          const copas = item.palmares && item.palmares.length > 0 ? `ganó títulos como ${item.palmares[0].torneo}` : 'esconde una historia riquísima';
          dato = `¿Sabías que ${item.name} de ${item.country} ${copas}? Buscá su nombre en la lupa de arriba para repasar toda su ficha técnica y sus historiales.`;
        } else if (item.type === 'mundial') {
          dato = `Archivo Mundialista: Repasá todo el cuadro de eliminación directa y las estadísticas completas de la Copa del Mundo de ${item.country} ${item.year} en nuestra enciclopedia.`;
        } else {
          dato = `¿Te acordás quién se consagró en la edición ${item.year || ''} de la ${item.name}? ¡Buscá el torneo arriba para ver la campaña del campeón!`;
        }
        setDatoHoy(dato);
      } else {
        setDatoHoy('¿Sabías que en DataFútbol podés consultar historiales completos de clubes, campañas y estadísticas desde la era amateur?');
      }
    }).catch(err => {
      console.error('Error cargando loader para dato aleatorio', err);
      setDatoHoy('¿Sabías que en DataFútbol podés consultar historiales completos de clubes, campañas y estadísticas desde la era amateur?');
    });
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'Dato del Día en DataFútbol',
      text: `⚽ Dato del día: ${datoHoy} \n\nMirá más historia en DataFútbol.`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Compartir cancelado o error:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Error al copiar', err);
      }
    }
  };

  if (!datoHoy) return null;

  return (
    <div className="dato-del-dia" style={{
      backgroundColor: 'rgba(30, 41, 59, 0.7)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      padding: '12px 20px',
      margin: '16px auto',
      width: '100%',
      maxWidth: '1000px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5"></path>
          <path d="M9 18h6"></path>
          <path d="M10 22h4"></path>
        </svg>
        <h3 style={{ 
          margin: 0, 
          fontSize: '14px', 
          fontWeight: '700', 
          color: '#facc15',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Un día como hoy...
        </h3>
        </div>
        <button 
          onClick={handleShare}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            padding: '4px 0',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#f8fafc'}
          onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          <span className="hide-on-mobile">{copied ? '¡Copiado!' : 'Compartir'}</span>
        </button>
      </div>
      
      <p style={{ 
        margin: 0, 
        fontSize: '14px', 
        lineHeight: '1.4', 
        color: '#e2e8f0',
        fontWeight: '500'
      }}>
        {datoHoy}
      </p>
    </div>
  );
};

export default DatoDelDia;
