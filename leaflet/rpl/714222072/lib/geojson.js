
const map = L.map('map').setView([-6.87360695863978, 107.5759227360176], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University - 714222072</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("lib/cicaheum.json"), {
    onEachFeature: onEachFeature
}).addTo(map);
