# Chapter 3: HTTP POST DATA
## HTTP POST Data
Belajar Membuat backend penerima data geospasial
### Syarat Pembelajaran
Syarat pembelaaran :
1. Punya akun GCP(google cloud platform).
2. Memakai basis data nosql di mongodb.com
3. Sudah membuat package
4. Data yang ditampilkan diambil dari cloud function

### Kerjakan
1. Buat input form berupa pop up di atas peta openlayer ketika di klik terambil kordinatnya tinggal isi parameter featurenya.
   ![image](https://github.com/bukped/gis/assets/11188109/b873f02c-97ef-4f45-a092-a7479f4caf59)
2. Dimulai dari input point dahulu, kemudian input line, polyline dan polygon.
3. Buatlah google cloud function baru untuk menerima data dari HTTP POST frontend github pages.
4. Setting preflight CORS di cloud function agar bisa diakses dari github pages sendiri

### Rerensi
1. [Openlayer Example](https://openlayers.org/en/latest/examples/)
2. [JSCroot Example](https://jscroot.github.io/examples/)
