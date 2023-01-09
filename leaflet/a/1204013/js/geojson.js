
const map = L.map('map').setView([-7.3262517,110.4558855], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("salatiga/salatiga.geojson"), {
    onEachFeature: onEachFeature
}).addTo(map);