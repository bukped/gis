
const map = L.map('map').setView([-7.874361339282246, 110.3277259173113], 12);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("bantul/bantul.json"), {
    onEachFeature: onEachFeature
}).addTo(map);