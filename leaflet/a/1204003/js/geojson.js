
const map = L.map('map').setView([-0.22142736614576572, 100.63034846756038], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("kotapayakumbuh/kotapayakumbuh.json"), {
    onEachFeature: onEachFeature
}).addTo(map);