# Chapter 1 : Data Geospasial

Memahami apa itu GIS dan memahami Kordinat dan Data Geospasial

## Chapter 1: Pengenalan GIS dan Data Geospasial

Pada pertemuan ini, Peserta akan dilakukan pretest pengetahuan tentang pemrograman 3 dan mata perkuliahan pemrograman sebelumnya.

### Teaching Factory
1. Kembangkan real aplikasi yang dipakai di masyarakat untuk membangun portofolio
2. Buat per team kelompok untuk memilih modul dari pilihan aplikasi yang akan di kembangkan
3. Kembangkan dataset batas desa atau keluran dibagi perorang(folder data)
4. Gunakan framework JSCroot dan GoCroot
5. Gunakan Google Cloud Function
6. Gunakan git
7. Gunakan Domyikado per team

Pilihan aplikasi teaching factory:
1. Petapedia(penyedia layanan peta gratis untuk di gunakan di aplikasi lain)
2. Parkir Gratis(lokasi parkir gratis di bandung raya(cimahi,kbb,kab bandung))
3. ID Bisnis(Kembangkan dari Satu data kemenkop)
4. Go Biz(penjualan pedagang keliling/rumahan)

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
