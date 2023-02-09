function cari() {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "api-key": "Sa9Jtl0xGx9HnXnRV7ispcHOz9JdNEYD2rKVGNGICDRmvZqwX8HArSKO6EkAPlEm",
  "long": document.getElementsByName("long").value,
  "lat": document.getElementsByName("lat").value
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-mfpjl/endpoint/geojson", requestOptions)
  .then(response => response.text())
  .then(result => document.getElementById("result").innerHTML = result)
  .catch(error => console.log('error', error));
  
}
