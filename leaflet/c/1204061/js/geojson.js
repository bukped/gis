const map = L.map("map").setView([-7.540233698046076, 112.23210644492644], 10);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>',
}).addTo(map);

L.geoJSON(getGeoJSON("jombang/jombang5.json"), {
  onEachFeature: onEachFeature,
}).addTo(map);
