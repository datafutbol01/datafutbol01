import urllib.request
import re

url = "http://www.fitbastats.com/aberdeen/club_records_head_to_head_teams.php"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8', errors='ignore')
        # find the row for celtic
        # usually <tr><td><a href='team.php?team=X'>Celtic</a></td><td>300</td>...
        for line in html.split('<tr'):
            if 'Celtic' in line and 'Airdrie' not in line:
                # clean tags
                clean = re.sub('<[^<]+?>', ' ', line)
                print(clean.strip())
except Exception as e:
    print(e)
