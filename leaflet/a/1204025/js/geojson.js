const map = L.map('map').setView([-4.1105135,104.0872659], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("ogan-komering/ogan-komering-ulu.geojson"), {
    onEachFeature: onEachFeature
}).addTo(map);
