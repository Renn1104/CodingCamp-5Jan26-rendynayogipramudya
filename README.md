# 📝 Modern Todo List Web App

Aplikasi pengelola tugas (Todo List) modern dengan desain **Glassmorphism**, fitur **Dark/Light Mode**, serta manajemen tugas berbasis waktu menggunakan HTML, Tailwind CSS, dan Vanilla JavaScript.

---

## 🚀 Fitur Utama

### 1. Task Management

* **Input Presisi:** Tambah tugas lengkap dengan judul, tanggal, dan jam.
* **Smart Sorting:** Pengurutan otomatis berdasarkan waktu terdekat.
* **Status Control:** Tandai tugas sebagai *Done* atau *Pending*.
* **Bulk Delete:** Hapus tugas satu per satu atau sekaligus (*Delete All*).

### 2. Filter & Pencarian

* **Quick Filter:** Kategori *All*, *Pending*, dan *Done*.
* **Live Search:** Cari tugas spesifik melalui kolom pencarian secara *real-time*.
* **Dynamic Table:** Tampilan tabel yang responsif mengikuti filter yang dipilih.

### 3. UI/UX & Tema

* **Glassmorphism:** Layout kartu transparan dengan efek *blur* yang estetik.
* **Dark / Light Mode:** Transisi halus antar tema dengan ikon yang menyesuaikan secara otomatis.
* **Fully Responsive:** Tampilan optimal di perangkat Desktop, Tablet, maupun Mobile.

---

## 🛠️ Teknologi yang Digunakan

| Komponen | Teknologi |
| --- | --- |
| **Markup** | HTML5 |
| **Styling** | Tailwind CSS (via CDN) |
| **Logic** | Vanilla JavaScript (ES6+) |
| **Design Style** | CSS Glassmorphism |
| **Storage** | Browser Local Interaction |

---

## 📁 Struktur Project

```text
todo-list/
├── css/
│   └── style.css      # Custom glassmorphism & transitions
├── js/
│   └── script.js      # Logic, filtering, and sorting
├── index.html         # Main structure & Tailwind integration
└── README.md          # Dokumentasi proyek

```

---

## 🎮 Cara Penggunaan

1. **Buka file `index.html**` pada browser favorit Anda.
2. **Input Data:** Masukkan nama tugas, pilih tanggal, dan tentukan jam.
3. **Tambah:** Klik tombol **+** atau tekan Enter untuk menyimpan.
4. **Kelola:**
* Klik ikon **✓** untuk menyelesaikan tugas.
* Klik ikon **✕** untuk menghapus tugas.


5. **Kustomisasi:** Gunakan toggle **Dark / Light** di pojok layar untuk kenyamanan mata.

---

## 📌 Catatan Teknis

* **Sorting:** Menggunakan logika pembanding objek Date JavaScript untuk memastikan urutan kronologis yang akurat.
* **State:** Untuk versi ini, data disimpan dalam memori (reset saat *refresh*).
* **No Backend:** Murni sisi klien (*client-side*), cocok untuk pembelajaran logika DOM Manipulation.

---

## 👤 Author

**Rendy Nayogi Pramudya**
*Sistem Informasi, Universitas Jember*

---
