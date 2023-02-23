var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "api-key": "paM8dMldmg6vOu5jP4YcuKT1WHAiJZIEB24QRYqTdRtmRFzIR3lX2EvRHmZrV30S",
    "long": 107.575902278736,
    "lat": -6.8732786951873255
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("https://ap-southeast-1.aws.data.mongodb-api.com/app/geojson-kybzb/endpoint/geojson", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));