
const map = L.map('map').setView([3.623180368974121, 98.49931483149139 ], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("binjai/test2.json"), {
    onEachFeature: onEachFeature
}).addTo(map);