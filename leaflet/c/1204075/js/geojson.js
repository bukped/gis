const map = L.map('map').setView([-7.715552356376481, 110.3270171433454], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);

L.geoJSON(getGeoJSON("sleman/sleman.json"), {
    onEachFeature: onEachFeature
}).addTo(map);