const map = L.map('map').setView([-6.934675502378212, 107.60502422528424], 13);
          
	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
	}).addTo(map);


	json = getJSONListDir("data")
	for(let i = 0; i < json.length; i++) {
		let obj = json[i];
	
		console.log(obj.path);
		L.geoJSON(getGeoJSON(obj.path), {
			onEachFeature: onEachFeature
		}).addTo(map);
	}


