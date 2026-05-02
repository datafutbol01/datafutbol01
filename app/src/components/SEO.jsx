import { useEffect } from 'react';

/**
 * Componente SEO para manejar el título de la página, metadatos básicos 
 * y la inyección de Schema.org (JSON-LD) de forma segura para PWA/SSG.
 */
export default function SEO({ title, description, schemaData }) {
  useEffect(() => {
    // 1. Actualizar el Title
    if (title) {
      document.title = title;
    }

    // 2. Actualizar Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // 3. Inyectar JSON-LD (Schema.org)
    let scriptEl = null;
    if (schemaData) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.id = 'seo-schema';
      scriptEl.text = JSON.stringify(schemaData);
      
      // Remover esquemas viejos para no acumular al navegar
      const oldScript = document.getElementById('seo-schema');
      if (oldScript) {
        document.head.removeChild(oldScript);
      }
      
      document.head.appendChild(scriptEl);
    }

    // Cleanup: Removemos el esquema específico al desmontar para evitar colisiones
    return () => {
      if (scriptEl && document.head.contains(scriptEl)) {
        document.head.removeChild(scriptEl);
      }
    };
  }, [title, description, schemaData]);

  // No renderiza nada visualmente
  return null;
}
