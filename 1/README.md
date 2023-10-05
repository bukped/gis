# Chapter 1 : Data Geospasial

Memahami apa itu GIS dan memahami Kordinat dan Data Geospasial

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