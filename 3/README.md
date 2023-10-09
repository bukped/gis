# Chapter 3: Cloud Function dan MongoDB
## Cloud Function dan MongoDB
Belajar Membuat backend data geospasial
### Syarat Pembelajaran
Syarat pembelaaran :
1. Punya akun GCP(google cloud platform). Silahkan daftar menggunakan bank digital untuk mencoba trial GCP.
2. Membuat basis data nosql di mongodb.com ambil free tier nya

### Kerjakan
1. Pindahkan geojson file kemaren ke dalam mongodb. Convert satu satu ke dokumen standar geojson.org sehingga total ada 150 dokumen
2. Aktifkan index 2dsphere
3. Gunakan google cloud function dengan bahasa pemrograman golang untuk menampilkan json dari mongodb
4. Setting CORS di cloud function agar bisa diakses dari github pages sendiri
5. Pada github pages, ganti sumber data asalnya dari file ganti jadi get ke URL cloud function yg dibuat

Ref:
https://cloud.google.com/functions/docs/writing/write-http-functions

https://www.mongodb.com/docs/manual/geospatial-queries/#geospatial-indexes