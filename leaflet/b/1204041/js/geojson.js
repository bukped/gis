
const map = L.map('map').setView([-2.590932244840104, 140.6672877648803], 12);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("papua/jayapura-utara.json"), {
    onEachFeature: onEachFeature
}).addTo(map);