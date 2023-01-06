const map = L.map('map').setView([-6.215558062747675, 107.12331674775365], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("palu/palu.geojson"), {
    onEachFeature: onEachFeature
}).addTo(map);