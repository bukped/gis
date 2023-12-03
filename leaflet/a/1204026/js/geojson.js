const map = L.map('map').setView([-0.9120703,119.8713537], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("palu/palu.geojson"), {
    onEachFeature: onEachFeature
}).addTo(map);
