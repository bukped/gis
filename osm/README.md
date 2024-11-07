# OpenStreetMap data

Kita akan coba mengunduh dan mencoba sendiri data OpenStreetMap. Untuk mengunduh data OSM per wilayah kita bisa mengunjungi situs [GeoFabrik](https://download.geofabrik.de/). 
Jika ingin mengunduh semua data OSM maka kunjungi web [Planet](https://planet.openstreetmap.org/)

## Cara Mengunduh
1. Download [Data OSM Asia](https://download.geofabrik.de/asia.html) atau [pulau Jawa](https://download.geofabrik.de/asia/indonesia/java.html)
2. Masukkan ke dalam RDBMS PostgreSQL menggunakan [OSM2PGSQL](https://osm2pgsql.org/)
3. Filter data ambil saja data nama jalan wilayah Bandung, Cimahi, KBB, Kab. Bandung
4. Coba buat fungsi nearest jalan di golang dari data jalan
5. Implementasikan menjadi Endpoint

## Persiapan Basis Data
1. Unduh [PostgreSQL](https://www.postgresql.org/download/) dan Plugin [PostGIS](https://www.postgresql.org/download/)
2. Buat Database `osm`, user `osmuser`
3. Enable plugin `postgis` pada database yang baru dibuat
4. Opsional enable juga extension `hstore`
    ```sh
    sudo -u postgres createuser osmuser
    sudo -u postgres createdb --encoding=UTF8 --owner=osmuser osm
    sudo -u postgres psql osm --command='CREATE EXTENSION postgis;'
    sudo -u postgres psql osm --command='CREATE EXTENSION hstore;'
    ```
    ![Buat Database Baru](image.png)  
    ![Instalasi PostGIS](image-1.png)  
    ![Ekstensi Enable di Navicat](https://github.com/user-attachments/assets/0a9d7a28-2780-4ced-bb05-9789f9a9421a)
   Lakukan optimasi setting pada file postgresql.conf
   ```conf
   shared_buffers = 1GB
   work_mem = 50MB
   maintenance_work_mem = 10GB
   autovacuum_work_mem = 2GB
   wal_level = minimal
   checkpoint_timeout = 60min
   max_wal_size = 10GB
   checkpoint_completion_target = 0.9
   max_wal_senders = 0
   random_page_cost = 1.0
   ```
   
6. Unduh dan gunakan [OSM2pgsql](https://osm2pgsql.org/doc/manual.html)  
    ![Jalankan Import](https://github.com/user-attachments/assets/e0c3aaf7-50d7-4df2-a8e4-2bd59b6721dc)  
    
    ```sh
    osm2pgsql java-nov24.osm.pbf -d osm -H 127.0.0.1 -U osmuser -W
    ```
    ![image](https://github.com/user-attachments/assets/b451e2a0-d5c6-4545-a139-9f4a87b20a03)  



