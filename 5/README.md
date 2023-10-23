# Chapter 5: Akses Pengguna dan Dokumentasi API

## Syarat Pembelajaran
Syarat pembelaaran :
1. Sudah memiliki backend GCF(google cloud function).
2. Sudah terhubung dengan basis data nosql di mongodb.com
3. Sudah membuat package di pkg.dev
4. Sudah memahami PASETO dan implementasi user otorisasi

### Kerjakan
1. Website sudah bisa diakses dari root domain. contoh jscroot.github.io ,tidak lagi akses dengan url panjang (misal: jscroot.github.io/jscroot atau jscroot.github.io/jscroot.github.io)
2. Website sudah menggunakan template dan menu berbasiskan bulma atau tailwind, template harus berbeda dengan peserta lainnya jika sama maka nilai akan dibagi dengan jumlah template yang sama.
3. Ada laman atau modal login, untuk hak akses insert data atau update data.
4. API update dan insert data sudah ditambah pengecekan token pada bagian header request.
5. API yang sudah dibuat di dokumentasikan melalui swagger yang bisa di akses di laman rootdomain/swagger dengan menyertakan info :
   * source code swagger yang di publish
   * package yang dipublish dan digunakan di GCF
   * repo source code dari GCF
   * link URL GCF
   ![image](https://github.com/bukped/gis/assets/11188109/8db9052d-3056-48ec-af1f-5b5b1b396ac9)
7. Sudah ada minimal 4 API : Auth, GetData, InsertData, UpdateData

### Referensi
1. [Swagger untuk Github Pages](https://jscroot.github.io/examples/api/swagger/)
2. [JSCroot API Example](https://jscroot.github.io/examples/api/)
3. [GCF Example](https://petapedia.github.io/gcf/)
