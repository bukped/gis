# Chapter 5: Akses Pengguna dan Dokumentasi API

## Syarat Pembelajaran
Syarat pembelaaran :
1. Sudah memiliki backend GCF(google cloud function).
2. Sudah terhubung dengan basis data nosql di mongodb.com
3. Sudah membuat package di pkg.go.dev
4. Sudah memahami PASETO dan implementasi user otorisasi melalui header request
5. Memahami dokumentasi API menggunakan swagger

### Kerjakan
1. Website sudah bisa diakses dari root domain. contoh jscroot.github.io ,tidak lagi akses dengan url panjang (misal: jscroot.github.io/jscroot atau jscroot.github.io/jscroot.github.io)
2. Website sudah menggunakan template dan menu berbasiskan bulma atau tailwind, template harus berbeda dengan peserta lainnya jika sama maka nilai akan dibagi dengan jumlah template yang sama.
3. Ada laman atau modal login, untuk hak akses insert data atau update data. Jika login sukses, akan reply token dan token ini yang digunakan untuk mengakses endpoint API insert, update dan delete.  
   ![image](https://github.com/bukped/gis/assets/11188109/0cac2c84-41da-43d3-be65-3af04a332b3a)
4. Pada endpoint GCF API delete, update dan insert data sudah ditambah pengecekan token pada bagian header request. Pada swagger harus diperhatikan:
   * bisa di set di tombol Authorize  
     ![image](https://github.com/bukped/gis/assets/11188109/5d2e6ef1-eafe-40a9-8a70-6299b76131c3)
   * terdapat icon gembok  
     ![image](https://github.com/bukped/gis/assets/11188109/34716bfe-8918-4a5e-89ba-02cc655f8801)
   * Pada saat executer terdapat header token : -H 'token: asdasdasdad' \  
     ![image](https://github.com/bukped/gis/assets/11188109/dd4b787e-2701-4609-986d-7015213134c2)
5. Seluruh API yang sudah dibuat di dokumentasikan melalui swagger yang bisa di akses di laman rootdomain/swagger dengan menyertakan info :
   * source code swagger yang di publish
   * package yang dipublish dan digunakan di GCF
   * repo source code dari GCF
   * Servers di set sudah link URL GCF  
   ![image](https://github.com/bukped/gis/assets/11188109/8db9052d-3056-48ec-af1f-5b5b1b396ac9)
6. Semua endpoint di swagger berjalan baik ketika di klik Try It Out ![image](https://github.com/bukped/gis/assets/11188109/40c02a80-3fe1-4ebf-aa1c-b9fa05f22bb5)  
   ![image](https://github.com/bukped/gis/assets/11188109/f14aa7e3-10de-4223-a711-1d91e7f68755)
7. Sudah ada minimal 5 API : Auth, GetData, InsertData, UpdateData, DeleteData
8. Semua file HTML **wajib dekralasikan type module** untuk memanggil js.
   ```html
   <script src="./app.js" type="module"></script>
   ```
9. Hindari penggunaan library jquery karena masih menggunakan script lama ES5
10. Tambahkan file 404.html pada root folder repo untuk mempercantik bagi yang salah ketik URL

### Referensi
1. [Swagger untuk Github Pages](https://jscroot.github.io/examples/api/swagger/)
2. [JSCroot API Example](https://jscroot.github.io/examples/api/)
3. [GCF Example](https://petapedia.github.io/gcf/)
4. [Package Example](https://pkg.go.dev/github.com/petapedia/peda)
