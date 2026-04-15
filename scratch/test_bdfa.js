const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

(async () => {
    console.log("Iniciando navegador fantasma...");
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    // Tratamos de buscar el historial de Riestra vs San Lorenzo en Google limitando a bdfa.com.ar
    console.log("Buscando cruce en BDFA...");
    await page.goto('https://www.google.com/search?q=site:bdfa.com.ar+%22Deportivo+Riestra%22+%22vs%22+%22San+Lorenzo%22');
    
    // Extraemos los titulos de los resultados
    const results = await page.evaluate(() => {
        let items = Array.from(document.querySelectorAll('h3'));
        return items.map(i => i.innerText).slice(0, 3);
    });

    console.log("=== RESULTADOS EN BDFA ===");
    if (results.length === 0) {
        console.log("No se encontraron páginas directas de historiales 1v1 en BDFA para este cruce.");
    } else {
        results.forEach(r => console.log("- " + r));
    }
    
    await browser.close();
    console.log("Proceso finalizado.");
})();
