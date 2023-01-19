
const map = L.map('map').setView([-6.915828434295436, 107.64237297620491], 18);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="facebook.com">facebook</a>'
}).addTo(map);

L.geoJSON(getGeoJSON("cimahi/cimahi.json"), {
    onEachFeature: onEachFeature
}).addTo(map);