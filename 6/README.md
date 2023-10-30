# Chapter 5: API Kordinat Terdekat dan Jalur

## Syarat Pembelajaran
Syarat pembelaaran :
1. Sudah memiliki backend GCF(google cloud function).
2. Sudah terhubung dengan basis data nosql di mongodb.com
3. Sudah membuat package di pkg.go.dev
4. Sudah memahami PASETO dan implementasi user otorisasi melalui header request
5. Memahami dokumentasi API menggunakan swagger
6. Lanjutkan dokumentasi pengerjaan backend yang sudah bisa diakses dari rootdomain/swagger. contoh jscroot.github.io/swagger.
7. Pada endpoint GCF API delete, update dan insert data sudah ditambah pengecekan token pada bagian header request. Pada swagger harus diperhatikan:
   * bisa di set di tombol Authorize  
     ![image](https://github.com/bukped/gis/assets/11188109/5d2e6ef1-eafe-40a9-8a70-6299b76131c3)
   * terdapat icon gembok  
     ![image](https://github.com/bukped/gis/assets/11188109/34716bfe-8918-4a5e-89ba-02cc655f8801)
   * Pada saat executer terdapat header token : -H 'token: asdasdasdad' \  
     ![image](https://github.com/bukped/gis/assets/11188109/dd4b787e-2701-4609-986d-7015213134c2)
8. Seluruh API yang sudah dibuat di dokumentasikan melalui swagger yang bisa di akses di laman rootdomain/swagger dengan menyertakan info :
   * source code swagger yang di publish
   * package yang dipublish dan digunakan di GCF
   * repo source code dari GCF
   * Servers di set sudah link URL GCF  
   ![image](https://github.com/bukped/gis/assets/11188109/8db9052d-3056-48ec-af1f-5b5b1b396ac9)
9. Semua endpoint di swagger berjalan baik ketika di klik Try It Out ![image](https://github.com/bukped/gis/assets/11188109/40c02a80-3fe1-4ebf-aa1c-b9fa05f22bb5)  
   ![image](https://github.com/bukped/gis/assets/11188109/f14aa7e3-10de-4223-a711-1d91e7f68755)

## Kerjakan endpoint backend
1. Buatkan endpoint jalan terdekat dengan inputan kordinat, return berupa struct linestring jalan dan kordinat di dalam line string tersebut yang terdekat dengan titik input
2. Buatkan endpoint jalur dengan inputan jalan/linestring awal dan jalan/linestring akhir, return berupa slice atau array urutan dari linestring jalan yang dilalui.
3. Untuk endpoint jalur, pastikan anda memiliki data geospasial jalan yang cukup banyak. Karena minimal endpoint jalur harus bisa menampung minimal 10 jalan yang dilalui.
4. Dua endpoint ini dokumentasikan pada swagger yang dikerjakan sebelumnya. Dua endpoint ini juga wajib ada inputan token di header nya dan divalidasi tokennya.

### Referensi
1. [Swagger untuk Github Pages](https://jscroot.github.io/examples/api/swagger/)
2. [JSCroot API Example](https://jscroot.github.io/examples/api/)
3. [GCF Example](https://petapedia.github.io/gcf/)
4. [Package Example](https://pkg.go.dev/github.com/petapedia/peda)
