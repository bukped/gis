
const map = L.map('map').setView([-7.326422504071763, 110.50412264282632], 12);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("data/semarang.json"), {
    onEachFeature: onEachFeature
}).addTo(map);