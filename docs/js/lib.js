function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  }
}

function getGeoJSON(path){
var request = new XMLHttpRequest();
request.open("GET", path, false);
request.send(null)
return JSON.parse(request.responseText);
}

const apidir = "https://api.github.com/repos/bukped/geojson/contents/"

function getJSONListDir(path){
  var request = new XMLHttpRequest();
  let url=apidir+path
  request.open("GET", url, false);
  request.send(null)
  return JSON.parse(request.responseText);
}