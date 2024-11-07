# PBF ke GeoJSON
Untuk membaca file `.pbf` dan mengekstraksi data jalan (jalan besar, jalan kecil, dan gang), kita bisa menggunakan pustaka **pyrosm** atau **osmnx** di Python. Kedua pustaka ini dapat membaca data dari file `.pbf` dan mengekstrak jalan dengan tipe tertentu berdasarkan atribut `highway` di OSM.

Berikut adalah langkah-langkahnya:

### Instalasi Paket Python

Jika belum terinstall, silakan instal **pyrosm** atau **osmnx**. Kita akan menggunakan **pyrosm** di contoh berikut karena cukup cepat untuk memproses file `.pbf`:

```bash
pip install pyrosm geopandas
```

### Skrip Python untuk Membaca File `.pbf` dan Mengekstrak Data Jalan

Skrip ini akan membaca file `.pbf`, mengekstrak jalan dengan klasifikasi tertentu, dan mengonversinya ke format GeoJSON.

```python
from pyrosm import get_data, OSM
import geopandas as gpd
import json

# Load data OSM dari file .pbf
# Gantilah `file_path` dengan path file .pbf Anda
file_path = "path/to/your_file.pbf"
osm = OSM(file_path)

# Ekstrak data jalan dan filter jenis jalan
# Jenis-jenis jalan besar, kecil, dan gang berdasarkan tag 'highway' di OSM
major_roads = ["motorway", "trunk", "primary", "secondary"]
minor_roads = ["tertiary", "unclassified", "residential"]
alleys = ["service", "living_street", "pedestrian"]

# Ambil jalan besar
major_roads_data = osm.get_network(network_type="driving")
major_roads_data = major_roads_data[major_roads_data["highway"].isin(major_roads)]

# Ambil jalan kecil
minor_roads_data = osm.get_network(network_type="driving")
minor_roads_data = minor_roads_data[minor_roads_data["highway"].isin(minor_roads)]

# Ambil gang
alleys_data = osm.get_network(network_type="walking")
alleys_data = alleys_data[alleys_data["highway"].isin(alleys)]

# Gabungkan semua data jalan menjadi satu GeoDataFrame
all_roads = gpd.GeoDataFrame(pd.concat([major_roads_data, minor_roads_data, alleys_data], ignore_index=True))

# Konversi menjadi GeoJSON
geojson_data = all_roads.to_json()

# Menyimpan data dalam format GeoJSON ke file
output_path = "output/roads_data.geojson"
with open(output_path, "w") as f:
    json.dump(json.loads(geojson_data), f)

print(f"Data jalan berhasil disimpan ke {output_path}")
```

### Penjelasan Skrip

1. **Load File `.pbf`**: Skrip menggunakan **pyrosm** untuk membaca file `.pbf`.
2. **Filter Jalan Berdasarkan Kategori**:
   - **Jalan besar**: Motorway, trunk, primary, secondary.
   - **Jalan kecil**: Tertiary, unclassified, residential.
   - **Gang**: Service, living_street, pedestrian.
3. **Gabung Semua Data Jalan**: Semua data jalan dijadikan satu `GeoDataFrame` agar mudah dikonversi ke GeoJSON.
4. **Simpan dalam Format GeoJSON**: Hasilnya disimpan dalam format GeoJSON yang bisa digunakan untuk visualisasi atau analisis lebih lanjut.

### Output

File `roads_data.geojson` akan berisi data jalan yang sudah difilter sesuai kategori besar, kecil, dan gang dalam format GeoJSON, siap untuk diproses atau dimasukkan ke database seperti MongoDB.