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

## Chapter 2
### Source Data
1. http://download.geofabrik.de/asia/indonesia.html
2. https://openstreetmap.or.id/en/data-openstreetmap-indonesia/
3. https://www.arrayiterator.com/kodepos-geocoding-json-seluruh-indonesia-sesuai-bps
4. https://ibnux.github.io/data-indonesia/
5. https://github.com/superpikar/indonesia-geojson
6. https://github.com/pararawendy/border-desa-indonesia-geojson use string replace 

For number 6, to change into GeoJSON standar format :
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

### Go Lang Tutorial
1. https://www.youtube.com/watch?v=VkZDZeeuIdY
2. https://www.youtube.com/watch?v=WwV3ba5KoG4&t=211s
3. https://www.youtube.com/watch?v=3ZuT48xfbJc

### Task
1. Convert to geojson format
2. You might Using https://github.com/pelias/pbf2json to convert pbf to geojson format
3. Take Data from Source Data Choose your city/residence split into 
3. Make village border in one city put your geojson work in to osm sub region folder
4. Pull Request Subject : 9-KELAS-NPM-NAMA
5. Description : fill with dataset description, jumlah desa dalam json tersebut
6. After Approved you might go home
