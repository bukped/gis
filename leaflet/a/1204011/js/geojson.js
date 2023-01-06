
const map = L.map('map').setView([-7.3286487,108.2938724], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("ciamis/ciamis.geojson"), {
    onEachFeature: onEachFeature
}).addTo(map);