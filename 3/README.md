# Chapter 3: Cloud Function dan MongoDB
## Cloud Function dan MongoDB
Belajar Membuat backend data geospasial
### Syarat Pembelajaran
Syarat pembelaaran :
1. Punya akun GCP(google cloud platform). Silahkan daftar menggunakan bank digital untuk mencoba trial GCP.
2. Membuat basis data nosql di mongodb.com ambil free tier nya

### Kerjakan
1. Pindahkan geojson file kemaren ke dalam mongodb. Convert satu satu ke dokumen standar geojson.org sehingga total ada 150 dokumen
   ![image](https://github.com/bukped/gis/assets/11188109/44efbf10-7790-4b0d-b18d-ea2ed8b46128)
2. Aktifkan index 2dsphere
   ![image](https://github.com/bukped/gis/assets/11188109/199aa390-daf8-4878-94d2-59a93049a74a)
3. Gunakan google cloud function dengan bahasa pemrograman golang untuk menampilkan json dari mongodb.
4. Setting CORS di cloud function agar bisa diakses dari github pages sendiri
5. Contoh Google Cloud Function: https://github.com/petapedia/gcf
6. Pada github pages, ganti sumber data asalnya dari file ganti jadi get ke URL cloud function yg dibuat. Hapus file json di repo karena sudah tidak dipakai lagi.
7. Contoh github pages yang mengakses GCF : https://jscroot.github.io/examples/api/get/fromgcf/

### Referensi

Referensi :
1. https://cloud.google.com/functions/docs/writing/write-http-functions
2. https://www.mongodb.com/docs/manual/geospatial-queries/#geospatial-indexes
