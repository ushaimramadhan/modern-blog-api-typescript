# Modern Blog API (TypeScript Edition)

Repositori ini berisi implementasi Backend API untuk platform Blog sederhana namun robust. Proyek ini bertujuan untuk mendalami konsep pengembangan backend menggunakan Node.js dengan sistem pengetikan ketat (TypeScript).

## Fitur Utama
- **User Authentication:** Registrasi dan login menggunakan JWT (JSON Web Token) & bcrypt hashing.
- **Blog Management:** Operasi CRUD (Create, Read, Update) untuk artikel.
- **Image Upload:** Integrasi pengunggahan gambar menggunakan Multer.
- **API Documentation:** Dokumentasi interaktif menggunakan Swagger UI.
- **Database:** Integrasi dengan MongoDB Atlas melalui Mongoose ODM.
- **Clean Architecture:** Menerapkan pola Model-View-Controller (MVC).

## Tech Stack
- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express.js
- **Database:** MongoDB
- **Security:** JWT & Bcrypt
- **Documentation:** Swagger

## Struktur Folder
```text
src/
├── config/       # Konfigurasi Database & Swagger
├── controllers/  # Logika bisnis utama
├── middleware/   # Pengecekan auth & validasi
├── models/       # Definisi skema database
├── routes/       # Definisi endpoint API
├── utils/        # Fungsi bantuan (Uploader, dll)
└── index.ts      # Entry point aplikasi
```

## Cara Menjalankan Secara Lokal

1. Clone repositori:

```Bash
git clone https://github.com/ushaimramadhan/modern-blog-api-typescript.git
```
2. Install dependensi:
```Bash
npm install
```

3. Konfigurasi Environment: Buat file .env di root folder dan isi:
```Code snippet
PORT=3000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Jalankan dalam mode development:
```Bash
npm run dev
```

5. Akses Dokumentasi:

   Buka http://localhost:3000/docs di browser Anda.
