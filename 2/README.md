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
3. Pastikan data geospasial masih dalam satu wilayah, tidak beda daerah.
4. Peta ditaruh diatas data dengan ukuran yang proporsional.
5. Peta langsung set zoom dan center di titik lokasi dimana data berkumpul
6. Selalu gunakan selalu ES6 module dalam membangun aplikasi task ini, Contoh :
   ```js
   <script type="module" src="./main.js"></script>
   ```
   atau
   ```js
   <script src="https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js"></script>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v8.1.0/ol.css">
   ```
7. Pastikan di github pages mencantumkan nama dan NPM.
8. Pengumpulan otomatis dilakukan oleh pomokit dan iteung, pastikan yang diinputkan adalah URL github pages yang benar.