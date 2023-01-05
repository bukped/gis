const map = L.map('map').setView([-4.606134974406448, 120.2009162888367], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 11,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("bone/bone.json"), {
    onEachFeature: onEachFeature
}).addTo(map);