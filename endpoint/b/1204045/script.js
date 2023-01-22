var Long;
var Lat;

function myFunction() {
  var inputLong = document.querySelector("#long").value;
  var inputLat = document.querySelector("#lat").value;
  console.log(inputLong);
  console.log(inputLat);
  Long = parseFloat(inputLong);
  Lat = parseFloat(inputLat);
  document.getElementById("hasil").innerHTML = panggil(Long, Lat);
}

function panggil(long, lat) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "api-key":
      "6pwQJeK9VVCvcQ3Gp4SIcRIsvbyKSElAfEKTbSvN6Sqk3ygaE5UGw1aTICHwDQmY",
    long: long,
    lat: lat,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://ap-southeast-1.aws.data.mongodb-api.com/app/application-1-lvcsn/endpoint/sukabumi",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => hasil(result))
    .catch((error) => console.log("error", error));

  fetch(
    "https://ap-southeast-1.aws.data.mongodb-api.com/app/application-1-lvcsn/endpoint/sukabumi2",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => geo(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}

function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent);
  }
}

function geo(hasil) {
  L.geoJSON(hasil, {
    onEachFeature: onEachFeature,
  }).addTo(map);
}

function hasil(result) {
  document.getElementById("hasil").innerHTML = result;
  L.marker([Lat, Long]).addTo(map);

  var popup = L.popup([Lat, Long], { content: result }).openOn(map);

  map.setView([Lat, Long], 13);
}
