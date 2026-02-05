# Penjelasan Tes Actions

Dokumen ini memberikan penjelasan mendetail tentang rangkaian tes otomatis untuk *server actions* yang terletak di `src/app/actions/`. Tes ini menggunakan **Jest** untuk memastikan keandalan dan kebenaran logika backend.

## Ringkasan
Semua tes terletak di `src/app/actions/__tests__/`. Kami menggunakan teknik **mocking** untuk memisahkan logika bisnis dari dependensi eksternal seperti database dan penyimpanan file.

-   **Database Mock**: `@/lib/db` dimock untuk mensimulasikan rantai query Knex.js (contoh: `.where().select()`).
-   **Storage Mock**: `@/lib/storage` dimock untuk memverifikasi logika unggah file tanpa perlu menulis ke disk fisik.
-   **Session Mock**: `@/lib/session` dimock untuk memverifikasi alur otentikasi.

---

## 1. Auth Actions (`auth.test.ts`)
Menguji logika otentikasi untuk panel Admin.

-   **`login`**:
    -   **Berhasil**: Memverifikasi bahwa kredensial yang valid (dari env vars `ADMIN_EMAIL`/`ADMIN_PASSWORD`) berhasil membuat sesi dan mengarahkan pengguna ke dashboard.
    -   **Gagal**: Memastikan kredensial yang salah mengembalikan pesan error spesifik pada kolom email/password.
    -   **Validasi**: Memastikan format input yang tidak valid (misal: "bukan-email") ditangkap oleh validasi skema Zod sebelum masuk ke logika utama.
-   **`logout`**:
    -   Memverifikasi bahwa sesi dihapus dan pengguna diarahkan kembali ke halaman login.

## 2. Blog Actions (`blog.test.ts`)
Menguji operasi CRUD dan logika pengambilan data untuk fitur Blog.

-   **`getBlogs`**:
    -   **Paginasi**: Memverifikasi perhitungan offset yang benar `(page - 1) * limit`.
    -   **Filtering**: Memeriksa apakah query pencarian `title` diterapkan dengan benar pada query DB.
    -   **Edge Cases**: Memastikan hasil kosong dan nomor halaman negatif ditangani dengan baik (mengembalikan array kosong/nilai default yang aman).
-   **`getBlogById` & `getBlogBySlug`**:
    -   **Presedensi Slug**: Tes mendetail untuk memastikan jika blog memiliki slug numerik seperti "123", itu lebih diprioritaskan daripada blog dengan ID 123.
    -   **Fallback**: Memverifikasi dukungan legacy di mana slug numerik akan mencoba mencari berdasarkan ID jika tidak ditemukan kecocokan slug.
-   **`createBlog` / `updateBlog`**:
    -   **Validasi**: Memeriksa penanganan error database (misal: duplikasi slug).
    -   **Update Parsial**: Memverifikasi `updateBlog` hanya mengubah kolom yang diberikan dalam payload, tanpa menghapus data yang sudah ada.
-   **`getLatestBlogs`**:
    -   Memastikan hanya blog dengan status `published` yang diambil dan diurutkan berdasarkan `created_at` secara menurun (descending).
-   **`getBlogStats`**:
    -   Memverifikasi agregasi jumlah Total, Published (Terbit), dan Draft.

## 3. Schedule Actions (`schedule.test.ts`)
Menguji logika manajemen Acara/Jadwal.

-   **`getSchedules`**:
    -   **Filter**: Memverifikasi penyaringan berdasarkan `type` (Webinar, Workshop), `month` (bulan), dan `year` (tahun).
    -   **Paginasi**: Memeriksa limit default dan logika offset.
-   **`createSchedule`**:
    -   **Harga**: Memastikan `original_price` dan `discounted_price` dimasukkan dengan benar ke dalam database.
    -   **Unggah File**: Menggunakan mock objek `File` untuk memverifikasi bahwa `saveFile` dipanggil untuk gambar pembicara dan gambar unggulan, serta URL hasilnya disimpan ke DB.
    -   **Validasi**: Memastikan kolom wajib yang kosong akan mengembalikan pesan error.
-   **`updateSchedule`**:
    -   **Update Parsial**: Memverifikasi bahwa memperbarui satu kolom saja (seperti `title`) berhasil tanpa memerlukan seluruh objek data.
    -   **Penggantian Gambar**: Memeriksa logika untuk mengunggah gambar baru saat melakukan update.
-   **`getLatestSchedules`**:
    -   Memverifikasi pengurutan berdasarkan `updated_at` untuk menampilkan acara yang paling baru diubah.

## 4. Subscribe Actions (`subscribe.test.ts`)
Menguji logika berlangganan Newsletter.

-   **Berhasil**: Memverifikasi email yang valid berhasil dimasukkan ke tabel `emails`.
-   **Validasi**: Memeriksa format email yang tidak valid (misal: "teks-tidak-valid") ditolak oleh validasi Zod.
-   **Duplikasi**: Skenario di mana email sudah ada di database. Tes memastikan pesan "already subscribed" dikembalikan alih-alih menyebabkan crash pada database.
-   **Penanganan Error**: Memverifikasi bahwa kegagalan koneksi database ditangkap dan mengembalikan pesan error yang ramah pengguna.
