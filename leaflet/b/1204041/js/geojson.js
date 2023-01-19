
const map = L.map('map').setView([-6.966875351200928, 113.86233927271367], 12);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);


L.geoJSON(getGeoJSON("jawa-timur/kota-mojokerto.json"), {
    onEachFeature: onEachFeature
}).addTo(map);