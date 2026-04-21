const axios = require('axios');

const terms = [
    "Diego Maradona", 
    "Alfredo Di Stéfano", 
    "Pelé", 
    "Estadio Centenario", 
    "Estadio Santiago Bernabéu",
    "Johan Cruyff"
];

async function fetchWikiImage(term) {
    try {
        // La API de Wikipedia en español para traer el resumen de la página, que incluye la foto oficial principal
        const url = `https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`;
        const response = await axios.get(url, { headers: { 'User-Agent': 'DataFutbolApp/1.0' } });
        
        if (response.data && response.data.originalimage && response.data.originalimage.source) {
            return response.data.originalimage.source;
        } else {
            return "❌ No se encontró imagen principal.";
        }
    } catch (error) {
        return `❌ Error buscando: ${error.message}`;
    }
}

async function runTest() {
    console.log("==========================================");
    console.log("🔍 MODO PRUEBA: BUSCANDO 6 FOTOS EN WIKIPEDIA");
    console.log("==========================================\n");

    for (let term of terms) {
        console.log(`Buscando foto oficial para: "${term}"...`);
        const imgUrl = await fetchWikiImage(term);
        console.log(`📸 RESULTADO: ${imgUrl}\n`);
    }
    
    console.log("==========================================");
    console.log("Prueba finalizada. Haz Ctrl+Clic en los enlaces para abrir las imágenes en tu navegador.");
}

runTest();
