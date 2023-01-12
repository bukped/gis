# geojson
Bahan ajar pengenalan geojson
https://bukped.github.io/geojson/

## Chapter 1
### Adding your Desktop SSH Key to Github
1. Make sure you read this section https://github.com/awangga/nopanel/blob/master/git.md
2. Fork this repo
3. Clone into your desktop using git clone ssh
4. Set upstream first
5. Working in your task
6. Pull request after fetch upstream

### Task
1. Select a place in Bandung City (Public Place, Government Place, Edu Place)
2. Create 10 poligon type in that place store in bandung folder, save it ad geojson format and rename it to placename.json
3. Insert it into mongo db provided by lecturer using mongo compass https://www.mongodb.com/products/compass
4. Pull Request Subject : 8-KELAS-NPM-NAMA
5. Go home

## Chapter 2 : Fixing Invalid Geometry Data
### Source Data
1. http://download.geofabrik.de/asia/indonesia.html
2. https://openstreetmap.or.id/en/data-openstreetmap-indonesia/
3. https://www.arrayiterator.com/kodepos-geocoding-json-seluruh-indonesia-sesuai-bps
4. https://ibnux.github.io/data-indonesia/
5. https://github.com/superpikar/indonesia-geojson
6. https://github.com/pararawendy/border-desa-indonesia-geojson use string replace 

For pararawendy/border-desa-indonesia-geojson data, to change into GeoJSON standar format :
```
replace : "border":[[[
with : "border":[[

AND

replace : ]]]}
with : ]]}

THEN

replace : "border":[
with : "border":{"type":"Polygon","coordinates": [[

AND

replace : ]}
with : ]]}}
```

### Mongo basic for Geojson
Query with current coordinat

```json
{
  border: {
     $geoIntersects: {
        $geometry: {
           type: "Point" ,
           coordinates: [ 107.575902278736,-6.8732786951873255 ]
        }
     }
  }
}
```

### Task
1. You might Using google colab to download data and mongo db tools it into your google drive.
```python
import os
from google.colab import drive
drive.mount('/content/drive')
folder = '/content/drive/My Drive/Download/dl' 

savedir=folder
os.chdir(savedir)  #change dir
!pwd
!ls
!pip install pygeos
!pip install pyrosm
!wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu1804-x86_64-100.6.1.deb
!sudo apt install ./mongodb-database-tools-ubuntu1804-x86_64-100.6.1.deb
!curl http://ip-api.com/json
!wget https://github.com/pararawendy/border-desa-indonesia-geojson/raw/master/indonesia_villages_border.geojson.zip
!unzip indonesia_villages_border.geojson.zip
```
to manipulate the data you might use this script 
```
# Read in the file
with open('indonesia_villages_border.geojson', 'r') as file :
  filedata = file.read()

# Replace the target string
filedata = filedata.replace('"border":[[[', '"border":[[')
filedata = filedata.replace(']]]}', ']]}')
filedata = filedata.replace('"border":[', '"border":{"type":"Polygon","coordinates": [[')
filedata = filedata.replace(']}', ']]}}')

# Write the file out again
with open('village.geojson', 'w') as file:
  file.write(filedata)
```
2. Cree free tier database from mongodb.com connect it with your mongo compass. Add query IP Address from step 1. and create db, collection and index with colab.Choose one city/residence, make sure city different from other insert the city data into your mongodb using colab or compass. 
```python
import pymongo

myclient = pymongo.MongoClient("mongodb+srv://user:pass@cluster0.wghp85v.mongodb.net/")
mydb = myclient["location"]
mycol = mydb["villages"]
mycol.drop()
mydb = myclient["location"]
mycol = mydb["villages"]
mycol.create_index( [("border" , pymongo.GEOSPHERE )] )
!mongoimport --uri="mongodb+srv://user:pass@cluster0.wghp85v.mongodb.net/location" --collection=villages desa.json
```
3. Make sure you have set index for border field in 2d geosphere.
4. Solving Edge or geometri invalid format. You might using pygeos, geojson.io or other visualization tools.
5. Export it and convert to geojson format like in https://leafletjs.com/examples/geojson/ put in in data folder with city name.json (example: ulbi.json)
6. Pull Request Subject : 9-KELAS-NPM-NAMA , 
7. Description : please include your screenshoot and mongo access
8. After Approved you might go home


## Chapter 3 : Javascript preparation

[Here](leaflet/README.md)

## Chapter 4 : Geojson Webservice

1. buat Custom HTTPS Endpoints app services di mongodb.com, pilih bahasa yang disukai
![image](https://user-images.githubusercontent.com/11188109/212020359-149f3284-c87f-42ee-a7c6-c074c5f86150.png)
![image](https://user-images.githubusercontent.com/11188109/212020559-a9243082-3c7a-4758-824f-5e5dac1d55be.png)
![image](https://user-images.githubusercontent.com/11188109/212020787-8f922076-e8ca-467a-beff-d2cff4661e63.png)
![image](https://user-images.githubusercontent.com/11188109/212020874-80103a50-503c-471e-ab09-79c6667551a7.png)


![image](https://user-images.githubusercontent.com/11188109/212017705-4dcc7215-3e4b-4925-a0ee-04ef8634459c.png)
![image](https://user-images.githubusercontent.com/11188109/212017789-f673b1ba-c699-48ab-99f9-8a7b99dffb80.png)
![image](https://user-images.githubusercontent.com/11188109/212018078-641ed6a6-cc98-4c11-83b8-978306340e17.png)
![image](https://user-images.githubusercontent.com/11188109/212018478-47960571-7cef-4bb9-a03e-61eafbdc9517.png)
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
2. Buat api-key untuk authentikasi endpoin
![image](https://user-images.githubusercontent.com/11188109/212024889-2580e5cf-9bd2-4113-abb8-ea6e6607d03f.png)
example : paM8dMldmg6vOu5jP4YcuKT1WHAiJZIEB24QRYqTdRtmRFzIR3lX2EvRHmZrV30S

3. testing endpoint menggunakan postman
![image](https://user-images.githubusercontent.com/11188109/212024375-dd67594a-ed67-4635-8a59-4bbc5ab4676a.png)
post : https://ap-southeast-1.aws.data.mongodb-api.com/app/geojson-kybzb/endpoint/geojson

4. buat collection village, masukkan satu doc ke collection tersebut
5. setting index 2dsphere pada field geometry
![image](https://user-images.githubusercontent.com/11188109/212019979-099671be-a143-467d-b7ef-c3682166cae8.png)

5. masukkan semua data village satu kota yang sudah dibuat pada collection tersebut
6. hubungkan app service ke collection tersebut
7. panggil data dari javascript kemaren ke app service tersebut
