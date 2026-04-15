const http = require('http');
http.get('http://www.fitbastats.com/dundee/club_records_head_to_head_teams.php', res => {
    let raw = '';
    res.on('data', c => raw+=c);
    res.on('end', () => {
        const rows = raw.split('<tr');
        for (let r of rows) {
            if (r.includes('Rangers') && !r.includes('Cove') && !r.includes('Berwick')) {
                console.log(r.replace(/<[^>]+>/g, '\t').replace(/\s+/g, ' ').trim());
            }
        }
    });
});
