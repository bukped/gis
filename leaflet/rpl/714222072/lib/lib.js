
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    } else if(feature.properties && feature.properties.name && !feature.properties.popupContent) {
        layer.bindPopup(feature.properties.name);
    }
  }
  
function getGeoJSON(path){
  var request = new XMLHttpRequest();
  request.open("GET", path, false);
  request.send(null)
  return JSON.parse(request.responseText);
  }
