const map = L.map('map').setView([-2.532095,121.1310119], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 9,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("ogan-komering/luwutimur.geojson"), {
    onEachFeature: onEachFeature
}).addTo(map);
