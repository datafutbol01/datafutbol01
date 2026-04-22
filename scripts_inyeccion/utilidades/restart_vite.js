const { execSync, spawn } = require('child_process');
console.log('Reiniciando servidor de Vite...');
try {
    const netstat = execSync('netstat -ano | findstr :5173').toString();
    const lines = netstat.split('\n').filter(Boolean);
    if (lines.length > 0) {
        const pid = lines[0].trim().split(/\s+/).pop();
        if (pid && pid !== '0') {
            console.log('Matando proceso Vite en puerto 5173 (PID: ' + pid + ')');
            execSync('taskkill /PID ' + pid + ' /F');
        }
    }
} catch (e) {
    console.log('No había servidor corriendo en puerto 5173.');
}

console.log('Iniciando npm run dev...');
const p = spawn('npm', ['run', 'dev'], { cwd: 'c:/Users/gonza/futbolhistoria/clubes/app', stdio: 'inherit', shell: true });
