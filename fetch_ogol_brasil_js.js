const fs = require('fs');
const path = require('path');
const https = require('https');

const clubs = [
  "flamengo", "palmeiras", "vasco-da-gama", "fluminense", "botafogo", "corinthians",
  "sao-paulo", "santos", "atletico-mineiro", "cruzeiro", "gremio", "internacional",
  "athletico-paranaense", "coritiba", "bahia", "vitoria", "chapecoense",
  "mirassol", "remo", "red-bull-bragantino"
];

const zZMaps = {
    "flamengo": "2240", "palmeiras": "2248", "vasco-da-gama": "2258", "fluminense": "2245", 
    "botafogo": "2234", "corinthians": "2238", "sao-paulo": "2254", "santos": "2253", 
    "atletico-mineiro": "2229", "cruzeiro": "2239", "gremio": "2246", "internacional": "2247", 
    "athletico-paranaense": "2228", "coritiba": "2244", "bahia": "2233", "vitoria": "2259", 
    "chapecoense": "3195", "mirassol": "3184", "remo": "2252", "red-bull-bragantino": "2235"
};

const exactClassics = {
  "flamengo-fluminense": {"vA": 139, "vB": 120, "e": 123},
  "flamengo-vasco-da-gama": {"vA": 135, "vB": 105, "e": 104},
  "botafogo-flamengo": {"vA": 104, "vB": 128, "e": 108},
  "botafogo-fluminense": {"vA": 112, "vB": 123, "e": 102},
  "botafogo-vasco-da-gama": {"vA": 88, "vB": 133, "e": 94},
  "fluminense-vasco-da-gama": {"vA": 110, "vB": 121, "e": 98},
  "corinthians-palmeiras": {"vA": 113, "vB": 118, "e": 107},
  "corinthians-sao-paulo": {"vA": 114, "vB": 93, "e": 98},
  "corinthians-santos": {"vA": 121, "vB": 95, "e": 87},
  "palmeiras-sao-paulo": {"vA": 96, "vB": 95, "e": 94},
  "palmeiras-santos": {"vA": 139, "vB": 98, "e": 79},
  "santos-sao-paulo": {"vA": 95, "vB": 115, "e": 68},
  "gremio-internacional": {"vA": 124, "vB": 141, "e": 124},
  "atletico-mineiro-cruzeiro": {"vA": 153, "vB": 144, "e": 108},
  "bahia-vitoria": {"vA": 144, "vB": 115, "e": 109},
  "athletico-paranaense-coritiba": {"vA": 114, "vB": 123, "e": 98}
};

const results = {};
const pairsToFetch = [];

for (let i = 0; i < clubs.length; i++) {
  for (let j = i + 1; j < clubs.length; j++) {
    const c1 = clubs[i];
    const c2 = clubs[j];
    const key = `${c1}-${c2}`;
    const altKey = `${c2}-${c1}`;

    if (exactClassics[key]) {
      const { vA, vB, e } = exactClassics[key];
      results[key] = { equipoA: c1, equipoB: c2, victorias_A: vA, victorias_B: vB, empates: e, partidos_totales: vA + vB + e };
      continue;
    }
    if (exactClassics[altKey]) {
      const { vA, vB, e } = exactClassics[altKey];
      results[key] = { equipoA: c1, equipoB: c2, victorias_A: vB, victorias_B: vA, empates: e, partidos_totales: vA + vB + e };
      continue;
    }

    pairsToFetch.push({ c1, c2, key });
  }
}

// Function to fetch from oGol
function fetchOGol(pair) {
    return new Promise((resolve) => {
        const url = `https://www.ogol.com.br/xray.php?equipa_id=${zZMaps[pair.c1]}&equipa_vs_equipa_id=${zZMaps[pair.c2]}`;
        const options = {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        };

        https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                // Parse HTML
                const totalMatch = data.match(/<div class="numbers">\s*<div class="total">(\d+)<\/div>/);
                if (!totalMatch) return resolve(null);
                
                const total = parseInt(totalMatch[1]);
                
                // Usually wins team 1 is the first .wins block if we're on team 1's side (oGol does this naturally based on the order of IDs in the URL)
                const winsMatch = data.match(/<div class="wins".*?>(\d+)<\/div>/);
                const drawsMatch = data.match(/<div class="draws".*?>(\d+)<\/div>/);
                
                const vA = winsMatch ? parseInt(winsMatch[1]) : 0;
                const e = drawsMatch ? parseInt(drawsMatch[1]) : 0;
                const vB = total - vA - e;
                
                if (total > 0) {
                    resolve({
                        equipoA: pair.c1,
                        equipoB: pair.c2,
                        victorias_A: vA,
                        victorias_B: vB,
                        empates: e,
                        partidos_totales: total
                    });
                } else {
                    resolve(null);
                }
            });
        }).on('error', () => {
            resolve(null);
        });
    });
}

async function processAll() {
    process.stdout.write(`Fetching ${pairsToFetch.length} unverified matches from ZeroZero...\n`);
    
    // Process in batches so we don't spam ZeroZero and get banned, 5 at a time
    const batchSize = 3;
    let processed = 0;
    
    for (let i = 0; i < pairsToFetch.length; i += batchSize) {
        const batch = pairsToFetch.slice(i, i + batchSize);
        const batchResults = await Promise.all(batch.map(p => fetchOGol(p)));
        
        batchResults.forEach((res, idx) => {
            if (res) results[batch[idx].key] = res;
        });
        
        processed += batch.length;
        process.stdout.write(`\rProgress: ${processed}/${pairsToFetch.length} matches fetched...`);
        
        // Sleep 500ms
        await new Promise(r => setTimeout(r, 600));
    }
    
    console.log('\n\nFetch complete! Saving database...');
    const outPath = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'brasil_enfrentamientos.json');
    fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
    console.log(`Saved successfully. Total pairs with history: ${Object.keys(results).length}`);
}

processAll();
