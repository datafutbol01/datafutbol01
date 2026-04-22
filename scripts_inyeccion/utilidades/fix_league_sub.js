const fs = require('fs');
let code = fs.readFileSync('app/src/pages/League.jsx', 'utf8');

// The line is: return name.includes('copa') || name.includes('superfinal') || name.includes('trofeo de campeones');
// Wait, I need to make sure 'superliga' is skipped for copas. If I look at the old code:
// const isCopa = name.includes('copa') || name.includes('superfinal') || name.includes('trofeo de campeones');
// I didn't include `superliga` in copas! I only included `superfinal`. 
// Oh, but earlier when I checked in terminal, `2017/18 - Superliga` was returned because I ran `.includes('super')` in my `node -e` script just to see! 
// Ah, the `League.jsx` filter ONLY has `superfinal`. So `Superliga` is already excluded from Copas!
// But just in case, I will remove the subcampeon UI code since the user said "solo campeon".

code = code.replace(
    "{t.subcampeon && <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Sub: {t.subcampeon}</div>}",
    ""
);

fs.writeFileSync('app/src/pages/League.jsx', code);
console.log("League.jsx patched: removed subcampeon from UI.");
