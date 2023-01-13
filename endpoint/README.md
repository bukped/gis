## Chapter 4 : Geojson Webservice

### Pre-Req

1. buat collection village, masukkan satu doc ke collection tersebut
2. setting index 2dsphere pada field geometry
![image](https://user-images.githubusercontent.com/11188109/212019979-099671be-a143-467d-b7ef-c3682166cae8.png)
3. masukkan semua data village satu kota yang sudah dibuat pada collection tersebut

### Task

1. buat Custom HTTPS Endpoints app services di mongodb.com, kemudian buat fungsi endpoint untuk ambil data.

Klik Create New App
![image](https://user-images.githubusercontent.com/11188109/212017705-4dcc7215-3e4b-4925-a0ee-04ef8634459c.png)

Buat App Service Baru
![image](https://user-images.githubusercontent.com/11188109/212020359-149f3284-c87f-42ee-a7c6-c074c5f86150.png)

Kemudian klik Add An Endpoint
![image](https://user-images.githubusercontent.com/11188109/212020559-a9243082-3c7a-4758-824f-5e5dac1d55be.png)

Isi nama route diawalai tanda / kemudian opsi lainnya dilengkapi
![image](https://user-images.githubusercontent.com/11188109/212020787-8f922076-e8ca-467a-beff-d2cff4661e63.png)

Buat function baru
![image](https://user-images.githubusercontent.com/11188109/212020874-80103a50-503c-471e-ab09-79c6667551a7.png)

![image](https://user-images.githubusercontent.com/11188109/212024173-ebc9b604-d79a-406e-be72-f3677545985c.png)


```js
exports = async function(payload, response) {
  const { long,lat } = JSON.parse(payload.body.text());
  if (!long) {
    response.setStatusCode(400)
    response.setBody(`Could not find "someField" in the endpoint request body.`);
  }

  const cluster = context.services.get('mongodb-atlas');
  const requests = cluster.db("location").collection("villages");
  try {
    const { village } = await requests.findOne({
  "border": {
     $geoIntersects: {
        $geometry: {
           "type": "Point" ,
           "coordinates": [ long,lat ]
        }
     }
  }
});
    response.setStatusCode(200)
    response.setBody(`Anda Berapa di Desa: ${village}.`);
  } catch (err) {
    response.setStatusCode(500)
    response.setBody(`No Whatsauth for the request. ${err}`)
  }
}

```

untuk Melihat fungsi yang berlaku di HTTP Endpoint bisa dilihat di menu HTTP Endpoint
![image](https://user-images.githubusercontent.com/11188109/212018078-641ed6a6-cc98-4c11-83b8-978306340e17.png)
Bisa langsung mengedit fungsi yang sudah di buat masuk ke menu build kemudian pilih function
![image](https://user-images.githubusercontent.com/11188109/212018478-47960571-7cef-4bb9-a03e-61eafbdc9517.png)

2. Buat api-key untuk authentikasi endpoin
![image](https://user-images.githubusercontent.com/11188109/212024889-2580e5cf-9bd2-4113-abb8-ea6e6607d03f.png)
example : paM8dMldmg6vOu5jP4YcuKT1WHAiJZIEB24QRYqTdRtmRFzIR3lX2EvRHmZrV30S

3. Tambahkan akses ke database
![image](https://user-images.githubusercontent.com/11188109/212027270-ec201127-de43-40b2-826e-64eb519dca44.png)
![image](https://user-images.githubusercontent.com/11188109/212027517-f162e1ef-351f-4c68-8757-c9c030f88ef4.png)


4. testing endpoint menggunakan postman
![image](https://user-images.githubusercontent.com/11188109/212024375-dd67594a-ed67-4635-8a59-4bbc5ab4676a.png)
post : https://ap-southeast-1.aws.data.mongodb-api.com/app/geojson-kybzb/endpoint/geojson

```js
{
  "api-key" : "paM8dMldmg6vOu5jP4YcuKT1WHAiJZIEB24QRYqTdRtmRFzIR3lX2EvRHmZrV30S",
  "long" : 107.575902278736,
  "lat":-6.8732786951873255
} 
```
![image](https://user-images.githubusercontent.com/11188109/212027653-da18a45d-0f7f-4e3e-9c88-e125b7803fe3.png)



6. Buat script js untuk akses ke collection tersebut
```js
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
```
7. Buat folder kelas di folder endpoint, kemudian buat folder NPM di dalam folder kelas
8. Buat index.html yang berisi form dan script untuk akses ke endpoint. Balasan langsung innerHTML ke div yang ada di html tersebut
9. Pull request dengan menyertakan skrinsut hasil 2dsphere index, aplikasi yang berhasil terhubung ke endpoint
10. Judul pull request adalah : 11-3A-NPM-NAMA

