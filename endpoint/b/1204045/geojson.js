const map = L.map("map").setView([-6.911, 106.9206], 12);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>',
}).addTo(map);
