const fs = require('fs');
const path = require('path');
const CryptoJS = require('crypto-js');

const SECRET_KEY = "D4t4Fub0l_N1nj4_P4ss_2026";
const DATA_DIR = path.join(__dirname, '../src/data');

const [,, mode] = process.argv;

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

let count = 0;

walkDir(DATA_DIR, function(filePath) {
    if (filePath.endsWith('.json')) {
        let content = fs.readFileSync(filePath, 'utf8');
        try {
            let json = JSON.parse(content);
            
            if (mode === 'encrypt') {
                if (!json.payload) { // No está encriptado aún
                    let encrypted = CryptoJS.AES.encrypt(JSON.stringify(json), SECRET_KEY).toString();
                    fs.writeFileSync(filePath, JSON.stringify({ payload: encrypted }, null, 2), 'utf8');
                    count++;
                }
            } else if (mode === 'decrypt') {
                if (json.payload) { // Está encriptado
                    let bytes = CryptoJS.AES.decrypt(json.payload, SECRET_KEY);
                    let decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                    fs.writeFileSync(filePath, JSON.stringify(decrypted, null, 2), 'utf8');
                    count++;
                }
            }
        } catch (e) {
            console.error("Error parsed JSON en", filePath);
        }
    }
});

console.log(`[Cipher] ${mode.toUpperCase()} terminado. Archivos procesados: ${count}`);
