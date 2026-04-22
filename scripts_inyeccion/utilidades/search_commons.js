async function findImages() {
    let url = 'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=Cruyff%201974&utf8=&format=json&srnamespace=6';
    let res = await fetch(url);
    let data = await res.json();
    for (let item of data.query.search.slice(0,5)) {
        let title = item.title;
        let infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
        let infoRes = await fetch(infoUrl);
        let infoData = await infoRes.json();
        let pages = infoData.query.pages;
        let pageId = Object.keys(pages)[0];
        console.log(pages[pageId].imageinfo[0].url);
    }
}
findImages();
