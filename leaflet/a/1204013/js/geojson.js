
const map = L.map('map').setView([-7.3724807,108.4950044], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("banjar/banjar.geojson"), {
    onEachFeature: onEachFeature
}).addTo(map);