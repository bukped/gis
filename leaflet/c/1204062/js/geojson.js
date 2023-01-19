const map = L.map('map').setView([-7.69147413318637, 108.653498310239], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 11,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("pangandaran/pangandaran.json"), {
    onEachFeature: onEachFeature
}).addTo(map);