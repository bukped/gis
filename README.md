# Sistem Informasi Geografis
Bahan ajar Sistem Informasi Geografis menggunakan teknik belajar Pomodoro
Pre-Requisite:
1. Web Service(Javascript ES6 Frontend+ Golang Backend)
2. Git
3. Github Pages
4. Arsitektur Serverless Micro-Frontend
5. MongoDB

Software Pendukung :
1. VSCode
2. MongoCompass
3. Git Bash
4. Pomokit

## Chapter 1: Pengenalan GIS dan Data Geospasial
### Buat Repositori Praktikum
1. Buat repositori masing-masing untuk mengerjakan Praktikum GIS
2. Aktifkan github pages dari repo tersebut dan coba akses alamat github pages tersebut
3. Boleh menggunakan repo pribadi atau organisasi
4. Kumpulkan link URL github pages pada group kelas

### Task
1. Buatlah geojson sebanyak masing-masing 50 dokumen untuk type point, polyline,polygone boleh menggunakan geojson.io
2. Isi properties dari geojson dengan nama data geospasial
  ```json
  "properties": {
  "name": "Gang Senggol Dong"
  },
  ```
3. Simpan file tersebut dalam repository dengan nama data.json
4. Buatlah tampilan HTML untuk menampilkan data geosjon tersebut menggunakan Javascript ES6(file js terpisah dari html) pada github pages. Contoh pemanggilan Javascript ES6 Sebagai berikut:
  ```html
  <script src="./app.js" type="module"></script>
  ```
5. Tampilkan data tersebut dalam bentuk tabel tampilan HTML di github pages per kategori type data geospasial(1 kategori 1 tabel) dengan kolom : No. Nama, Type, Koordinat.
6. Pastikan minimal ada 3 file dalam repo tersebut yaitu : File index.html, data.json, app.js
7. Kumpulkan URL github pages ke Group Kelas

## Chapter 2 : Openlayers
### Syarat Pembelajaran
Sebelum memulai pembelajaran, Peserta harus dahulu memahami :
1. [Javascript ES6 Modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
2. HTML dan CSS dasar menggunakan Bulma atau Tailwind
3. Memahami cara memanggil ES6 module dan CSS dengan import dari CDN
4. Memahami konsep Serverless Micro-Frontend

### Buat Repositori Praktikum
1. Buat repositori masing-masing untuk mengerjakan Praktikum GIS, Boleh melanjutkan Repo Sebelumnya
2. Aktifkan github pages dari repo tersebut dan coba akses alamat github pages tersebut
3. Start Pomokit dengan link URL github pages yang dibuat

### Task
1. Buka [petapedia.github.io](https://petapedia.github.io/) pelajari kode program dan cara implementasi nya dari [source code repo PetaPedia](https://github.com/petapedia/petapedia.github.io).
2. Buatlah pemetaan dari data Chapter1 ke dalam satu halaman yang kemaren di buat
3. Peta ditaruh diatas data dengan ukuran yang proporsional
4. Peta langsung set zoom dan center di titik lokasi dimana data berkumpul
5. Gunakan selalu ES6 module dalam membangun aplikasi task ini, Contoh :
   ```js
   <script type="module" src="./main.js"></script>
   ```
   atau
   ```js
   <script src="https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js"></script>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v8.1.0/ol.css">
   ```
7. Kumpulkan URL github page ke group kelas lampirkan NPM dan NAMA

## Chapter 3 : Fixing Invalid Geometry Data
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
1. Insert it into mongo db provided by lecturer using mongo compass https://www.mongodb.com/products/compass
2. You might Using google colab to download data and mongo db tools it into your google drive.
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
2. Cree free tier database from mongodb.com connect it with your mongo compass. Add query IP Address from step 1. and create db, collection and index with colab.Choose one city/residence, make sure city different from other insert the city data into your mongodb using colab or compass. Import to notvalid collection first.
```python
!mongoimport --uri="mongodb+srv://awangga:rollyganteng@serverlessinstance0.wginu.mongodb.net/location" --collection=notvalid village.geojson --jsonArray
```

3. Make sure you have set index for border field in 2d geosphere.
```python
import pymongo

mongostring="mongodb+srv://user:pass@dbname.host.mongodb.net/"
myclient = pymongo.MongoClient(mongostring)
mydb = myclient["location"]
mycol = mydb["villages"]
mycol.drop()
mydb = myclient["location"]
mycol = mydb["villages"]
mycol.create_index( [("border" , pymongo.GEOSPHERE )] )
!mongoimport --uri="mongodb+srv://user:pass@dbname.host.mongodb.net/location" --collection=villages village.geojson --jsonArray
```

![image](https://user-images.githubusercontent.com/11188109/214292740-a6ca1f4c-2997-4d52-9be3-cfc58dd29fd7.png)

4. Solving Edge or geometri invalid format. You might using pygeos, geojson.io or other visualization tools.
5. Export it and convert to geojson format like in https://leafletjs.com/examples/geojson/ put in in data folder with city name.json (example: ulbi.json)

```json
    {
      "type": "Feature",
      "properties": {
        "name": "ALUE BULOH"
      },
      "province": "ACEH",
      "district": "ACEH TIMUR",
      "sub_district": "BIREM BAYEUN",
      "village": "ALUE BULOH",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              97.9666,
              4.4451
            ],
            [
              97.9665,
              4.4451
            ],
             [
              97.9665,
              4.4451
            ],
            [
              97.9666,
              4.4451
            ]
          ]
        ]
      }
    }


```

6. Pull Request Subject : 9-KELAS-NPM-NAMA , 
7. Description : please include your screenshoot of indexes and mongo compass access
8. After Approved you are done


## Chapter 4 : Javascript preparation

[Here](leaflet/README.md)

## Chapter 5 : Geojson Webservice

[Here](endpoint/README.md)
