const map = L.map('map').setView([-6.9806254077894385, 108.4939547564609], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("kuningan/kuningan.json"), {
    onEachFeature: onEachFeature
}).addTo(map);