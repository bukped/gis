
const map = L.map('map').setView([-7.4730525, 110.1825047], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("magelang/magelang.json"), {
    onEachFeature: onEachFeature
}).addTo(map);