
const map = L.map('map').setView([-6.731950886729856, 108.55317994306901], 15);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("cirebon/cirebon.json"), {
    onEachFeature: onEachFeature
}).addTo(map);