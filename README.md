# KeRis-Dimas ATAH — Website Resmi
**Advanced Technology for Agriculture and Health**  
Universitas Jember | [kerisatah-unej.github.io](https://kerisatah-unej.github.io)

---

## 🗂️ Struktur File

```
kerisatah-unej.github.io/
├── index.html          → Halaman Beranda (Home)
├── about.html          → Tentang Kami (About)
├── team.html           → Tim Peneliti (Team)
├── research.html       → Penelitian & Roadmap
├── publications.html   → Publikasi Ilmiah
├── products.html       → Produk & Galeri
├── news.html           → Berita & Kegiatan
├── contact.html        → Kontak
├── css/
│   └── style.css       → Semua styling website
├── js/
│   └── main.js         → JavaScript (bahasa, animasi, dll)
└── assets/
    ├── images/         → Foto anggota, produk, berita
    └── videos/         → Video lokal (jika ada)
```

---

## 🚀 Cara Upload ke GitHub Pages (Pertama Kali)

1. Login ke [github.com](https://github.com) dengan akun `kerisatah-unej`
2. Buat repository baru bernama **`kerisatah-unej.github.io`** (harus sama persis)
3. Centang **"Add a README file"** → Create repository
4. Klik tombol **"uploading an existing file"**
5. Drag & drop SEMUA file dan folder dari folder ini
6. Klik **"Commit changes"**
7. Tunggu 1–2 menit → Website aktif di `https://kerisatah-unej.github.io`

---

## ✏️ Cara Update Konten (Untuk Semua Editor)

### 1. Tambah Publikasi Baru (`publications.html`)

Cari baris komentar `<!-- Publication List -->` lalu salin blok ini dan isi datanya:

```html
<div class="pub-card q2" data-tags="scopus q2 namaanggota 2024">
  <div class="pub-meta">
    <span class="pub-badge badge-scopus">Scopus</span>
    <span class="pub-badge badge-q2">Q2</span>
    <span class="pub-year">2024</span>
  </div>
  <h4>JUDUL ARTIKEL DI SINI</h4>
  <div class="pub-journal">Nama Jurnal · Penulis · Jumlah sitasi</div>
</div>
```

**Kelas border warna:**
- `pub-card q1` → border hijau tua (Q1)
- `pub-card q2` → border biru (Q2)
- `pub-card q3` → border merah (Q3)

**data-tags** diisi kata kunci untuk filter: `scopus`, `wos`, `sinta`, `q1`, `q2`, `nama penulis`, `tahun`

---

### 2. Tambah Produk / Prototipe Baru (`products.html`)

Salin blok ini ke dalam `<div id="products-grid">`:

```html
<div class="product-card" data-cat="health">
  <div class="product-img">
    <img src="assets/images/NAMA-FILE-FOTO.jpg" alt="Nama Produk"
         onerror="this.parentElement.innerHTML='🤖';">
  </div>
  <div class="product-body">
    <span class="product-tag pt-health">🏥 Kesehatan</span>
    <h3>NAMA PRODUK</h3>
    <p>Deskripsi singkat produk...</p>
  </div>
</div>
```

**Nilai `data-cat`:** `health` | `agri` | `covid`  
**Kelas tag:** `pt-health` (biru) | `pt-agri` (hijau) | `pt-covid` (merah)

---

### 3. Tambah Video YouTube (`products.html`)

Cari blok `video-placeholder` dan ganti seluruh `<div class="video-placeholder">...</div>` dengan:

```html
<iframe src="https://www.youtube.com/embed/ID_VIDEO_YOUTUBE"
        allowfullscreen allow="autoplay; encrypted-media"></iframe>
```

Cara mendapatkan ID: buka video YouTube → lihat URL → `?v=` **ID_INI**  
Contoh: `https://youtube.com/watch?v=dQw4w9WgXcQ` → ID = `dQw4w9WgXcQ`

---

### 4. Tambah Berita Baru (`news.html`)

Salin blok ini sebelum div `add-news-box`:

```html
<div class="news-small-card">
  <div class="news-small-img">📸</div>
  <div class="news-small-body">
    <div class="cat">🔬 Kategori</div>
    <h3>JUDUL BERITA</h3>
    <p>Deskripsi singkat berita...</p>
    <div class="meta"><i class="fas fa-calendar"></i> Bulan Tahun</div>
    <a href="link-terkait.html" class="read-more">Selengkapnya <i class="fas fa-arrow-right"></i></a>
  </div>
</div>
```

Ganti emoji di `news-small-img` sesuai topik, atau gunakan foto:
```html
<div class="news-small-img">
  <img src="assets/images/nama-foto.jpg" alt="Judul Berita">
</div>
```

---

### 5. Upload Foto Anggota (`team.html`)

1. Simpan foto di `assets/images/` dengan nama sesuai kode di HTML:
   - Koordinator: `khairul-anam.jpg`
   - Wakil: `aris-muttaqin.jpg`
   - Sumardi: `sumardi.jpg`
   - Wahyu Muldayani: `wahyu-muldayani.jpg`
   - Ali Rizal: `ali-rizal.jpg`
   - dll.
2. Ukuran foto ideal: **300×300 px** atau lebih, format JPG/PNG
3. Foto otomatis tampil — jika tidak ditemukan, inisial nama tetap tampil

---

### 6. Ganti Bahasa Toggle

Website sudah bilingual **Indonesia / English**.  
Cara menambah teks dua bahasa di konten baru:

```html
<span class="lang-id">Teks Bahasa Indonesia</span>
<span class="lang-en">English Text</span>
```

Untuk elemen block (div, p, section):
```html
<p class="lang-id-block">Teks Bahasa Indonesia</p>
<p class="lang-en-block">English Text</p>
```

---

## 📁 Cara Upload File ke GitHub (Update Rutin)

**Cara termudah (tanpa Git):**
1. Buka repository di github.com
2. Klik file yang ingin diedit → klik ikon pensil ✏️
3. Edit langsung di browser → klik **"Commit changes"**

**Untuk upload foto/file baru:**
1. Buka folder `assets/images/` di repository
2. Klik **"Add file" → "Upload files"**
3. Drag & drop foto → **"Commit changes"**

---

## 🎨 Warna & Kelas Utama

| Warna | CSS Variable | Kelas Teks | Kelas Background |
|-------|-------------|------------|-----------------|
| Biru | `--blue` | `text-blue` | `bg-blue-pale` |
| Hijau | `--green` | `text-green` | (var green-pale) |
| Merah | `--red` | `text-red` | (var red-pale) |

---

## 📬 Kontak Teknis

Jika ada pertanyaan teknis terkait website:
- **Email:** keristatah@gmail.com
- **GitHub:** [github.com/kerisatah-unej](https://github.com/kerisatah-unej)
- **Koordinator:** Ir. Khairul Anam, Ph.D — [khairul-anam.github.io](https://khairul-anam.github.io)

---

*Website KeRis-Dimas ATAH — Universitas Jember © 2024*
