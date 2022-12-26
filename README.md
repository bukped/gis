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


### Task
1. Take course from [mygreatlearning](https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-javascript) or from [LinkedIn](https://www.linkedin.com/learning/javascript-for-web-designers-3)
2. Finish the course then create folder inside leaflet/class folder with your npm example : leaflet/b/113040087
3. create index.html try to use leafletjs in [this tutorial](https://leafletjs.com/examples/geojson/)
4. Put your shape in the map from chapter 2. Save your shape inside your NPM folder create data folder, rename to city.json.
5. Call your city.json file from javascript using javascript.
6. Pull Request Subject : 10-KELAS-NPM-NAMA , 
7. Description : please include your screenshoot of your application and attach your javascript certificate.
8. After Approved you might go home
