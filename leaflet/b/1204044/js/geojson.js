const map = L.map('map').setView([3.594734611258944, 98.6710254771208], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);



L.geoJSON(getGeoJSON("medan/kotamedan.json"), {
    onEachFeature: onEachFeature
}).addTo(map);