const map = L.map('map').setView([-1.1742562,116.7016594], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("balikpapan/balikpapan.geojson"), {
    onEachFeature: onEachFeature
}).addTo(map);