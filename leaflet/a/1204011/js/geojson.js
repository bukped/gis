
const map = L.map('map').setView([-0.0352231,109.2491468], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("pontianak/pontianak.json"), {
    onEachFeature: onEachFeature
}).addTo(map);