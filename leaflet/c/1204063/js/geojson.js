
const map = L.map("map").setView([-7.5298315711709005, 108.17718793304742], 11);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);



L.geoJSON(getGeoJSON("tasikmalaya/kab.tasikmalaya.json"), {
    onEachFeature: onEachFeature
}).addTo(map); 