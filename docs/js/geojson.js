const map = L.map('map').setView([4.694012785431503, 96.7750300832872], 13);

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukped</a>'
	}).addTo(map);

	const desaLayer = L.geoJSON([desa], {

		style(feature) {
			return feature.properties && feature.properties.style;
		}
	}).addTo(map);


