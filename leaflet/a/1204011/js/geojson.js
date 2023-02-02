const map = L.map('map').setView([-0.0353948,109.2615099], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("pontianak/pontianak.json"), {
    onEachFeature: onEachFeature
}).addTo(map);
