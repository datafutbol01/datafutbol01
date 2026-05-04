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

    // 4. Inyectar Etiqueta Canonical (Crucial para Bing/Google)
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    // Asegurar que usamos www en la canonical para evitar duplicados
    let currentUrl = window.location.href;
    if (currentUrl.includes('//datafutbol.app')) {
      currentUrl = currentUrl.replace('//datafutbol.app', '//www.datafutbol.app');
    }
    // Quitar trailing slash si existe y no es root
    if (currentUrl.endsWith('/') && new URL(currentUrl).pathname !== '/') {
        currentUrl = currentUrl.slice(0, -1);
    }
    canonicalEl.setAttribute('href', currentUrl);

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
