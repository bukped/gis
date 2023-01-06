const map = L.map('map').setView([-7.6746436, 110.7915398], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("sukoharjo/sukoharjo.geojson"), {
    onEachFeature: onEachFeature
}).addTo(map);