var Long;
var Lat;

function myFunction() {
    var inputLong = document.querySelector("#long").value;
    var inputLat = document.querySelector("#lat").value;
    console.log(inputLong);
    console.log(inputLat);
    Long = parseFloat(inputLong);
    Lat = parseFloat(inputLat);
    document.getElementById("response").innerHTML = panggil(Long, Lat);
}

function panggil(long, lat) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "api-key": "IrFLLJm3G6Vqcu4IJDoQW0hMMY8TR1FSGAN84nEhPmhM7GGEll8fnfyyjMJFfPGG",
        "long": long,
        "lat": lat
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://asia-south1.gcp.data.mongodb-api.com/app/chapter10-yrgdy/endpoint/chapter10", requestOptions)
        .then(response => response.text())
        .then(result => response(result))
        .catch(error => console.log('error', error));

    fetch("https://asia-south1.gcp.data.mongodb-api.com/app/chapter10-yrgdy/endpoint/leaflet", requestOptions)
        .then(response => response.text())
        .then(result => geo(JSON.parse(result)))
        .catch(error => console.log('error', error));

}

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

function geo(hasil) {
    L.geoJSON(hasil, {
        onEachFeature: onEachFeature
    }).addTo(map);
}

function response(result) {
    document.getElementById("response").innerHTML = result;
    L.marker([Lat, Long]).addTo(map);

    var popup = L.popup([Lat, Long], { content: result })
        .openOn(map);

    map.setView([Lat, Long], 15);
}


