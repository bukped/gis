const map = L.map('map').setView([-6.917759133004216, 107.6174053489883], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 12,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("bandung/bandung.json"), {
    onEachFeature: onEachFeature
}).addTo(map);