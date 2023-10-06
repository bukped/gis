# Chapter 2 : OpenLayers

Mengenal penggunaan Open Layer dalam menampilkan data

## Chapter 2 : Openlayers
### Syarat Pembelajaran
Sebelum memulai pembelajaran, Peserta harus dahulu memahami :
1. [Javascript ES6 Modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
2. [HTML5 Event](https://www.tutorialspoint.com/html5/html5_events.htm) dan Modern CSS dasar menggunakan Bulma atau Tailwind
3. Memahami cara memanggil ES6 module dan CSS dengan import dari CDN
4. Memahami konsep Serverless Micro-Frontend

### Buat Repositori Praktikum
1. Buat repositori masing-masing untuk mengerjakan Praktikum GIS, Boleh melanjutkan Repo Sebelumnya
2. Aktifkan github pages dari repo tersebut dan coba akses alamat github pages tersebut
3. Start Pomokit dengan link URL github pages yang akan dibuat

### Task
1. Buka [petapedia.github.io](https://petapedia.github.io/) pelajari kode program dan cara implementasi nya dari [source code repo PetaPedia](https://github.com/petapedia/petapedia.github.io).
2. Buatlah pemetaan dari data geospasial Chapter 1(50 Polygon, 50 point, 50 polyline) ke dalam satu halaman yang kemaren di buat
3. Data geospasial harus dalam satu wilayah, misal : satu kecamatan/satu kelurahan/desa atau satu kota
4. Polygon wajib gedung/taman/lokasi spesifik tidak boleh batas daerah/wilayah/kota kabupaten. Harus rapih
5. Satu Polyline adalah satu nama jalan/gang
6. Pastikan data geospasial masih dalam satu wilayah, tidak beda daerah.
7. Ketika di klik polygon, polyline, atau poin muncul pop up nama data tersebut.
8. Peta ditaruh diatas data dengan ukuran yang proporsional.
9. Peta langsung set zoom dan center di titik lokasi dimana data berkumpul
10. Selalu gunakan selalu ES6 module dalam membangun aplikasi task ini, Contoh :
   ```js
   <script type="module" src="./main.js"></script>
   ```
   atau
   ```js
   <script src="https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js"></script>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v8.1.0/ol.css">
   ```
11. Pastikan di github pages mencantumkan nama dan NPM.
12. Pengumpulan otomatis dilakukan oleh pomokit dan iteung, pastikan yang diinputkan adalah URL github pages yang benar.
13. Pengumpulan maksimal jam 17.00 hari ini.
