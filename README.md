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
