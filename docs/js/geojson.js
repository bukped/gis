const map = L.map('map').setView([4.694012785431503, 96.7750300832872], 13);

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
	}).addTo(map);


function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}
	const desaLayer = L.geoJSON(desa, {
		onEachFeature: onEachFeature
	}).addTo(map);


