const map = L.map('map').setView([-7.796361045226888, 110.37089605144762], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 12,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("jogja/jogja.json"), {
    onEachFeature: onEachFeature
}).addTo(map);