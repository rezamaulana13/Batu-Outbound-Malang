# Design System & Design Specification --- Batu Outbound Malang

**Versi:** 1.0\
**Tanggal:** 29 Oktober 2026\
**Platform:** Website responsif berbasis Astro, tanpa database\
**Arah visual:** outdoor adventure yang profesional, hangat, cerah, dan
tepercaya

------------------------------------------------------------------------

## 1. Konsep Desain

### Ide utama

"Petualangan yang terencana, seru, dan membangun kebersamaan."

Identitas visual menggabungkan warna kuning sebagai aksen energi dan
optimisme, warna hijau alam sebagai penyeimbang, serta navy gelap untuk
memberi kesan profesional dan menjaga keterbacaan. Kuning tidak
digunakan sebagai latar luas untuk teks panjang; gunakan untuk CTA,
label, garis aksen, ikon, dan elemen yang perlu menonjol.

### Karakter merek

-   Profesional, bukan kekanak-kanakan.
-   Aktif dan menyenangkan.
-   Dekat dengan alam Batu--Malang.
-   Amanah: klaim harus didukung fakta, foto, dan informasi yang jelas.
-   Mudah digunakan di ponsel.

### Hindari

-   Kuning neon pada area besar.
-   Terlalu banyak gradasi, bayangan berat, ikon campur gaya, dan
    animasi berlebihan.
-   Foto stok yang tidak menggambarkan layanan nyata.
-   Teks putih di atas kuning terang atau teks kuning di atas putih
    tanpa kontras memadai.
-   Klaim seperti "terbaik nomor satu" tanpa bukti.

## 2. Palet Warna

  -------------------------------------------------------------------------
  Token                     Hex                     Penggunaan
  ------------------------- ----------------------- -----------------------
  `--color-primary`         `#F4B400`               CTA utama, aksen
                                                    kuning, highlight

  `--color-primary-hover`   `#D99A00`               Hover CTA dan aksen
                                                    interaktif

  `--color-primary-soft`    `#FFF4CC`               Background badge, panel
                                                    informasi

  `--color-ink`             `#182230`               Heading dan teks utama

  `--color-text`            `#354052`               Body text

  `--color-muted`           `#667085`               Teks sekunder, metadata

  `--color-green`           `#2E6B4F`               Aksen alam, kategori,
                                                    link sekunder

  `--color-green-soft`      `#EAF4ED`               Panel tips atau
                                                    kategori alam

  `--color-surface`         `#FFFFFF`               Card dan konten utama

  `--color-page`            `#FFFDF7`               Latar halaman hangat

  `--color-border`          `#E6E8EC`               Border input, divider,
                                                    card

  `--color-footer`          `#14231D`               Footer gelap

  `--color-danger`          `#B42318`               Error dan status
                                                    berbahaya
  -------------------------------------------------------------------------

**Aturan kontras:** gunakan teks `#182230` di atas kuning `#F4B400`;
jangan memakai teks putih di atas kuning untuk teks penting. Periksa
pasangan warna final dengan contrast checker dan targetkan WCAG 2.2 AA.

## 3. Tipografi

Gunakan font sistem untuk performa awal, atau self-host font sans-serif
yang berlisensi dan memiliki subset Latin yang diperlukan.

-   **Heading:** `Manrope`, fallback `Arial, sans-serif`.
-   **Body/UI:** `Inter`, fallback `system-ui, sans-serif`.
-   Jika tidak ingin mengunduh font eksternal, gunakan `system-ui` untuk
    semua teks.

Skala desktop: - H1: `clamp(2.4rem, 5vw, 4.25rem)`, line-height
1.05--1.15. - H2: `clamp(1.8rem, 3vw, 2.75rem)`, line-height 1.15. - H3:
`1.25rem–1.5rem`. - Body: `1rem–1.125rem`, line-height 1.6--1.75. -
Small/meta: `0.875rem`, line-height 1.5.

Skala mobile: - H1: `2.1rem–2.75rem`. - H2: `1.6rem–2rem`. - Body
minimal sekitar `1rem`. - Jangan membuat paragraf panjang terlalu lebar;
batasi lebar bacaan artikel sekitar 65--75 karakter per baris.

## 4. Layout dan Grid

-   Maksimum lebar konten: `1200px`.
-   Lebar teks artikel: `720px–760px`.
-   Padding container desktop: `32px`.
-   Padding tablet: `24px`.
-   Padding mobile: `18px–20px`.
-   Jarak section desktop: `80px–104px`.
-   Jarak section mobile: `52px–68px`.
-   Grid paket/artikel desktop: 3 kolom; tablet 2 kolom; mobile 1 kolom.
-   Grid galeri dapat memakai masonry visual sederhana atau CSS grid;
    jangan membuat susunan yang mengganggu urutan baca keyboard.
-   Radius card: `18px`; tombol: `12px` atau pill jika konsisten.
-   Shadow: lembut dan jarang; border dan spacing lebih diutamakan
    daripada bayangan.

## 5. Komponen Dasar

### 5.1 Header / Navbar

-   Tinggi desktop sekitar `76px`, mobile `64px`.
-   Logo di kiri; menu di tengah/kanan; CTA kuning di kanan.
-   Menu: Beranda, Profil, Wisata ▾, Artikel, Galeri.
-   Dropdown Wisata dibuka melalui klik/tap dan keyboard, bukan hover
    saja.
-   Header boleh sticky jika tidak mengurangi area baca; berikan offset
    anchor agar heading tidak tertutup.
-   Menu mobile memakai tombol dengan `aria-expanded`, `aria-controls`,
    dan label aksesibel.
-   Tandai halaman aktif dengan garis/warna dan `aria-current="page"`.

### 5.2 Tombol

-   **Primary:** latar kuning, teks ink gelap, bobot 700.
-   **Secondary:** latar putih, border ink/border, teks ink.
-   **Tertiary:** link teks dengan underline atau ikon panah.
-   Tinggi target tombol 48px pada mobile.
-   Hover, active, focus-visible, dan disabled harus berbeda secara
    jelas.
-   Jangan menggunakan emoji sebagai pengganti ikon antarmuka utama.

Contoh label: - "Lihat Paket Wisata" - "Konsultasi via WhatsApp" -
"Lihat Detail Paket" - "Baca Panduan" - "Lihat Galeri"

### 5.3 Card Paket

Urutan isi: 1. Foto paket dengan rasio konsisten. 2. Badge kategori jika
bermanfaat. 3. Judul. 4. Ringkasan satu atau dua kalimat. 5. Detail
singkat yang telah diverifikasi: durasi, sasaran peserta, atau
fasilitas. 6. Harga mulai dari bila valid; jika tidak, gunakan "Hubungi
kami untuk penawaran". 7. Link "Lihat detail" dan/atau CTA.

Jangan menjadikan harga satu-satunya pembeda. Pastikan isi paket,
batasan, dan kecocokan acara dapat ditemukan pada halaman detail.

### 5.4 Card Artikel

-   Thumbnail 16:9.
-   Kategori opsional.
-   Judul 2--3 baris maksimal secara visual.
-   Ringkasan singkat.
-   Tanggal dan waktu baca hanya jika akurat.
-   Link eksplisit "Baca artikel".
-   Seluruh card tidak wajib menjadi satu tombol besar jika dapat
    mengganggu aksesibilitas; pastikan tautan judul tetap jelas.

### 5.5 CTA WhatsApp

-   Warna utama kuning; ikon WhatsApp dapat memakai warna merek resmi
    hanya bila tetap terbaca.
-   Tombol harus menyebut tindakan, bukan sekadar ikon.
-   Pada halaman detail, pesan WhatsApp otomatis menyertakan nama
    paket/artikel yang relevan.
-   Tombol floating hanya digunakan jika tidak menutupi konten, kontrol,
    atau consent banner di layar kecil.
-   Nomor tujuan harus dikonfirmasi pemilik sebelum produksi.

### 5.6 Breadcrumb

Contoh: `Beranda / Wisata / Paket Outbound Reguler`. - Tampilkan pada
halaman detail paket dan artikel. - Gunakan separator sederhana. -
Breadcrumb dapat ditampilkan visual dan direpresentasikan dengan
`BreadcrumbList` structured data yang konsisten.

### 5.7 FAQ

-   Gunakan elemen disclosure/accordion yang bisa dioperasikan keyboard.
-   Pertanyaan harus berasal dari kebutuhan nyata.
-   Jawaban tidak boleh menyembunyikan biaya penting atau syarat paket.
-   FAQ schema hanya bila sesuai kebijakan dan konten terlihat; jangan
    menjanjikan rich result.

### 5.8 Footer

-   Logo dan deskripsi singkat.
-   Tautan navigasi.
-   Daftar layanan utama.
-   Kontak/WhatsApp dan lokasi yang terverifikasi.
-   Jam operasional bila tersedia.
-   Copyright dinamis.
-   Link kebijakan privasi bila menggunakan analytics atau integrasi
    yang relevan.
-   Jangan menampilkan alamat atau social media yang belum dikonfirmasi.

## 6. Wireframe per Halaman

### 6.1 Beranda

``` text
┌────────────────────────────────────────────────────────────┐
│ LOGO      Beranda Profil Wisata⌄ Artikel Galeri  [WhatsApp]│
├────────────────────────────────────────────────────────────┤
│ Breadcrumb tidak diperlukan di beranda                     │
│                                                            │
│ [Label kecil: Outbound & Aktivitas Outdoor Batu–Malang]    │
│ H1: Bangun Kebersamaan Lewat Petualangan di Batu           │
│ Ringkasan layanan yang jelas dan faktual.                  │
│ [Lihat Paket] [Konsultasi WhatsApp]     [Foto hero asli]   │
├────────────────────────────────────────────────────────────┤
│ Keunggulan yang dapat dibuktikan (3–4 item)                │
├────────────────────────────────────────────────────────────┤
│ Pilihan Paket Wisata                 [Lihat semua paket]    │
│ [Card paket]          [Card paket]          [Card paket]   │
├────────────────────────────────────────────────────────────┤
│ Kegiatan yang tersedia: kategori/aktivitas                 │
├────────────────────────────────────────────────────────────┤
│ Cara memesan: 1. Konsultasi 2. Sesuaikan 3. Konfirmasi      │
├────────────────────────────────────────────────────────────┤
│ Galeri foto asli                    [Buka galeri]           │
├────────────────────────────────────────────────────────────┤
│ Artikel panduan                     [Baca semua artikel]    │
├────────────────────────────────────────────────────────────┤
│ FAQ singkat + CTA konsultasi                               │
├────────────────────────────────────────────────────────────┤
│ Footer                                                     │
└────────────────────────────────────────────────────────────┘
```

Hero harus langsung menjawab layanan apa, di mana, untuk siapa, dan
tindakan berikutnya. Hindari klaim generik yang tidak menjelaskan nilai
layanan.

### 6.2 Profil

1.  Hero ringkas dan foto tim/lokasi asli.
2.  Cerita dan fokus layanan.
3.  Tim, fasilitas, metode, dan bukti pengalaman yang valid.
4.  Prosedur keselamatan dan informasi operasional.
5.  Area layanan.
6.  CTA konsultasi.
7.  Footer.

### 6.3 Katalog Wisata

1.  Breadcrumb.
2.  H1 "Pilihan Paket Outbound dan Aktivitas di Batu--Malang" atau copy
    yang sudah disetujui.
3.  Intro dan panduan memilih.
4.  Filter kategori jika jumlah paket memadai.
5.  Grid paket.
6.  Tabel perbandingan sederhana bila membantu.
7.  FAQ umum.
8.  CTA dan footer.

### 6.4 Detail Paket

1.  Breadcrumb.
2.  Hero: judul, ringkasan, foto, CTA.
3.  Ringkasan untuk siapa dan tujuan kegiatan.
4.  Informasi penting: durasi, lokasi, kapasitas, harga --- hanya data
    valid.
5.  Rincian aktivitas dan fasilitas.
6.  Contoh rundown.
7.  Persyaratan, batasan, dan keselamatan.
8.  FAQ paket.
9.  Paket terkait.
10. CTA WhatsApp.
11. Footer.

### 6.5 Daftar Artikel

1.  Breadcrumb.
2.  H1 dan intro.
3.  Artikel unggulan jika ada.
4.  Grid artikel.
5.  Kategori/paginasi jika diperlukan.
6.  CTA yang tidak mengganggu pengalaman membaca.
7.  Footer.

### 6.6 Detail Artikel

1.  Breadcrumb.
2.  Kategori, H1, penulis, tanggal.
3.  Gambar utama dengan caption bila dibutuhkan.
4.  Daftar isi untuk artikel panjang.
5.  Konten dengan subheading, daftar, tabel, dan contoh yang bermanfaat.
6.  Sumber/rujukan jika diperlukan.
7.  Artikel terkait dan CTA kontekstual.
8.  Footer.

### 6.7 Galeri

1.  Breadcrumb dan intro.
2.  Grid foto/video dengan filter kategori jika jumlahnya cukup.
3.  Lightbox opsional yang bisa ditutup dengan Escape dan tetap
    aksesibel.
4.  Caption dan alt text deskriptif.
5.  CTA konsultasi.
6.  Footer.

## 7. Gaya Fotografi dan Media

-   Prioritas pertama: dokumentasi kegiatan asli yang sudah mendapat
    izin.
-   Tampilkan peserta beraktivitas, fasilitator, suasana lokasi, detail
    fasilitas, dan kerja sama tim.
-   Gunakan crop yang konsisten dan hindari memotong wajah atau konteks
    keselamatan.
-   Gunakan gambar hero dengan komposisi yang menyediakan ruang untuk
    teks.
-   Hero desktop: rasio sekitar 16:9 atau layout dua kolom; mobile: crop
    portrait/4:5 yang tetap fokus.
-   Simpan gambar dengan nama deskriptif, misalnya
    `team-building-batu-malang.webp`, tanpa keyword stuffing.
-   Alt text menjelaskan isi foto, bukan daftar keyword.
-   Kompres gambar; gunakan AVIF/WebP bila sesuai; tentukan dimensi;
    lazy-load gambar di bawah fold.
-   Gunakan placeholder hanya saat development dan jangan biarkan
    placeholder masuk produksi.

## 8. Motion dan Interaksi

-   Transisi hover/focus singkat, sekitar 150--220 ms.
-   Animasi masuk section tidak diperlukan secara default.
-   Hormati `prefers-reduced-motion`.
-   Dropdown, menu mobile, FAQ, dan lightbox harus bisa dipakai dengan
    keyboard.
-   Jangan menggunakan autoplay video bersuara.
-   Jangan menunda akses konten utama karena animasi.

## 9. Responsif

### Mobile (\< 640px)

-   Navbar menjadi menu toggle.
-   Hero ditumpuk vertikal, CTA utama tampil jelas.
-   Card satu kolom.
-   Hindari tabel lebar; gunakan kartu/daftar jika tabel sulit dibaca.
-   CTA floating tidak menutupi konten dan mempunyai jarak aman dari
    tepi layar.

### Tablet (640--1023px)

-   Grid dua kolom.
-   Navigasi dapat tetap penuh jika ruang mencukupi, selain itu gunakan
    menu mobile.
-   Kurangi jarak section dan ukuran heading secara proporsional.

### Desktop (≥ 1024px)

-   Grid tiga kolom untuk katalog.
-   Hero dua kolom.
-   Navigasi lengkap dan CTA.
-   Lebar bacaan artikel dibatasi agar tidak terlalu melebar.

## 10. Token CSS Awal

``` css
:root {
  --color-primary: #F4B400;
  --color-primary-hover: #D99A00;
  --color-primary-soft: #FFF4CC;
  --color-ink: #182230;
  --color-text: #354052;
  --color-muted: #667085;
  --color-green: #2E6B4F;
  --color-green-soft: #EAF4ED;
  --color-surface: #FFFFFF;
  --color-page: #FFFDF7;
  --color-border: #E6E8EC;
  --color-footer: #14231D;
  --color-danger: #B42318;

  --font-heading: "Manrope", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;

  --container-width: 1200px;
  --article-width: 740px;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;

  --shadow-card: 0 8px 24px rgb(24 34 48 / 7%);
  --transition-fast: 180ms ease;
}
```

Ini token awal, bukan jaminan kontras otomatis. Uji ulang warna setelah
seluruh komponen dirancang.

## 11. SEO sebagai Bagian dari Desain

-   Satu H1 utama per halaman.
-   Heading mengikuti hierarki logis; jangan memilih heading hanya untuk
    ukuran visual.
-   Judul dan ringkasan kartu harus menjelaskan tujuan halaman.
-   Breadcrumb mudah terlihat pada halaman detail.
-   Tautan internal memakai anchor text deskriptif, bukan "klik di sini"
    berulang.
-   Setiap detail paket/artikel mempunyai gambar sosial yang sesuai.
-   Jangan menyembunyikan informasi penting di gambar; teks penting
    harus berupa HTML.
-   Komponen FAQ, tabel fasilitas, dan ringkasan paket harus tetap
    terbaca tanpa JavaScript.
-   Layout stabil dengan rasio gambar dan ruang yang sudah disiapkan.
-   Gunakan data terstruktur hanya bila konten terlihat cocok dengan
    schema.

## 12. Aksesibilitas

-   Target WCAG 2.2 AA.
-   Kontras teks normal minimal 4.5:1 dan teks besar minimal 3:1.
-   Focus ring terlihat jelas.
-   Semua input/tombol memiliki nama aksesibel.
-   Menu dan lightbox mendukung keyboard.
-   Jangan menyampaikan status hanya melalui warna.
-   Gunakan alt text untuk gambar informatif dan alt kosong untuk
    dekoratif.
-   Pastikan target sentuh nyaman, sekitar 44--48px.
-   Uji zoom 200%, layar kecil, dan reduced motion.

## 13. Checklist QA Visual

-   [ ] Warna kuning terasa premium dan tidak melelahkan mata.
-   [ ] Semua tombol utama jelas dan konsisten.
-   [ ] Navbar dropdown bekerja dengan klik/tap dan keyboard.
-   [ ] Tidak ada teks yang terpotong pada layar 320px.
-   [ ] Card memiliki tinggi dan ritme visual yang konsisten.
-   [ ] Foto tajam, relevan, terkompresi, dan memiliki izin.
-   [ ] Semua state hover/focus/active terlihat.
-   [ ] WhatsApp CTA tidak menutupi konten.
-   [ ] Heading, breadcrumb, dan isi artikel mudah dipindai.
-   [ ] Kontras warna lolos pemeriksaan.
-   [ ] Layout stabil saat gambar dimuat.
-   [ ] Tampilan tetap masuk akal tanpa JavaScript untuk konten inti.

## 14. Arah Desain Final

Hasil akhir harus terlihat seperti penyedia aktivitas outdoor yang
tertata dan dapat dipercaya: kuning dipakai sebagai aksen energi, hijau
memberi asosiasi alam, navy menjaga kesan profesional, foto asli menjadi
bukti utama, dan struktur informasi memudahkan calon pelanggan
membandingkan paket serta berkonsultasi. Desain tidak boleh mengorbankan
aksesibilitas, kecepatan, atau kejelasan informasi demi dekorasi.
