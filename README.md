# Aplikasi Catatan Pemasukan Keuangan (Express.js & MySQL)

Aplikasi web sederhana berbasis restful api dengan mvc untuk mengelola data pemasukan keuangan (CRUD: Create, Read, Update, Delete) menggunakan **Node.js**, **Express.js**, dan **MySQL** (`mysql2`), dilengkapi antarmuka web statis HTML/JavaScript.

---

## Struktur Proyek

```text
express-keuangan/
├── config/
│   └── db.js                  # Konfigurasi koneksi database MySQL menggunakan connection pool
├── controllers/
│   └── keuanganController.js  # Logika operasi CRUD (GET, POST, PUT, DELETE)
├── public/
│   └── index.html             # Antarmuka pengguna (Front-End) berbasis HTML & Fetch API
├── routes/
│   └── keuanganRoutes.js      # Definisi endpoint routing API
├── .env.example               # Template konfigurasi environment variables
├── .gitignore                 # Daftar file/folder yang diabaikan Git (node_modules, .env)
├── index.js                   # Entry point server Express.js
├── package.json               # Daftar dependensi proyek (express, mysql2, dotenv)
└── tabungan_db.sql            # File dump struktur dan data awal database MySQL

WAHYU ADI NOVRESA - 255150707111003
```

Cara Penggunaan dan Keluaran Aplikasi

Untuk menggunakan aplikasi ini, pengguna terlebih dahulu memastikan server Express.js telah berjalan dengan mengeksekusi perintah node index.js melalui terminal hingga muncul pesan bahwa server aktif pada alamat http://localhost:3000. Setelah server berjalan, pengguna dapat membuka browser dan mengakses alamat utama http://localhost:3000/ untuk berinteraksi langsung melalui antarmuka web. Pada halaman tersebut, seluruh catatan pemasukan yang tersimpan di database MySQL (tabungan_db) akan otomatis dimuat dan ditampilkan dalam bentuk tabel lengkap dengan informasi ID, keterangan transaksi, serta nominal dalam format mata uang Rupiah.

Pengguna dapat menambahkan catatan pemasukan baru dengan mengisi kolom Keterangan dan Jumlah (Rp) pada formulir di bagian atas halaman, lalu menekan tombol Tambah Data. Sistem secara otomatis mengirimkan permintaan post ke server, menyimpan data ke tabel pemasukan, dan langsung memperbarui tampilan tabel tanpa perlu memuat ulang halaman. Apabila pengguna ingin memperbarui data yang sudah ada, pengguna cukup menekan tombol Edit pada baris data yang dipilih sehingga data tersebut muncul kembali di formulir untuk diubah dan disimpan melalui tombol Simpan Perubahan menggunakan metode put. Sementara itu, untuk menghapus catatan tertentu, pengguna dapat menekan tombol Hapus yang akan memicu konfirmasi dan mengirimkan permintaan delete ke server untuk menghapus baris data terkait secara permanen dari database.

Selain melalui antarmuka web, aplikasi ini juga dapat diakses langsung melalui endpoint REST API /api/pemasukan menggunakan aplikasi pengujian api seperti Postman maupun perintah curl. Setiap permintaan yang dikirimkan ke endpoint api akan menghasilkan keluaran berupa data berformat json terstruktur yang memuat status keberhasilan ("success": true), pesan konfirmasi operasi yang dilakukan, serta objek atau daftar array data pemasukan yang diambil atau baru saja diproses dari database.
