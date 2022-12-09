const map = L.map('map').setView([-6.934675502378212, 107.60502422528424], 13);
          
	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
	}).addTo(map);





	L.geoJSON(getGeoJSON("bandung/ulbi.json"), {
		onEachFeature: onEachFeature
	}).addTo(map);

	L.geoJSON(getGeoJSON("bandung/a.json"), {
		onEachFeature: onEachFeature
	}).addTo(map);
