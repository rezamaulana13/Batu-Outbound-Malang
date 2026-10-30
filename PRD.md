# PRD --- Website Batu Outbound Malang

**Versi:** 1.0\
**Tanggal:** 29 Oktober 2026\
**Status:** Draft siap ditinjau\
**Produk:** Website pemasaran dan informasi layanan outbound di
Batu--Malang\
**Teknologi:** Astro, static site, tanpa database

------------------------------------------------------------------------

## 1. Ringkasan Produk

Website Batu Outbound Malang adalah website statis untuk memperkenalkan
layanan wisata aktivitas luar ruang, menampilkan pilihan paket,
menjelaskan profil penyelenggara, mempublikasikan artikel informatif,
dan mengarahkan calon pelanggan untuk berkonsultasi atau meminta
penawaran melalui WhatsApp.

Website dibangun dengan Astro agar halaman dapat dirender menjadi HTML
statis yang ringan dan mudah diindeks mesin pencari. Website tidak
menggunakan database. Data paket dan artikel disimpan sebagai file
Markdown/MDX atau data lokal yang ikut dalam proses build.

**Tujuan utama:** menghasilkan permintaan informasi dan penawaran paket
yang relevan, sekaligus membangun visibilitas organik untuk pencarian
terkait outbound Batu, outbound Malang, gathering, team building, dan
aktivitas outdoor.

> Catatan penamaan: "Batu Outbound Malang" dipakai sebagai nama kerja.
> Pastikan nama merek, domain, alamat, nomor WhatsApp, fasilitas, harga,
> legalitas, pengalaman, dan klaim bisnis dikonfirmasi pemilik sebelum
> dipublikasikan.

## 2. Latar Belakang dan Masalah

Calon pelanggan biasanya ingin mengetahui jenis kegiatan, lokasi,
fasilitas, kisaran harga, kapasitas peserta, durasi, keamanan, dan cara
meminta penawaran. Jika informasi tersebar atau tidak lengkap, pengguna
sulit membandingkan paket dan menghubungi penyedia.

Website harus menjawab pertanyaan tersebut dengan cepat, memberi bukti
kepercayaan yang nyata, dan menyediakan jalur konversi yang jelas.
Konten juga harus membedakan halaman paket komersial dari artikel
informasional agar tidak saling bersaing untuk maksud pencarian yang
sama.

## 3. Tujuan dan Indikator Keberhasilan

### Tujuan bisnis

-   Meningkatkan pertanyaan dan permintaan penawaran melalui WhatsApp.
-   Memperjelas katalog layanan dan perbedaan setiap paket.
-   Membangun kepercayaan melalui profil, dokumentasi kegiatan, FAQ, dan
    informasi operasional yang terverifikasi.
-   Menumbuhkan trafik organik dari pencarian lokal dan informasional.

### Tujuan pengguna

-   Menemukan paket yang sesuai dengan jenis acara dan anggaran.
-   Memahami isi paket, lokasi, durasi, syarat, dan cara pemesanan.
-   Melihat dokumentasi kegiatan nyata.
-   Mendapat jawaban praktis tanpa harus bertanya dari awal.

### KPI yang dipantau

-   Klik tombol WhatsApp per halaman dan per paket.
-   Jumlah pertanyaan/permintaan penawaran yang masuk (dicatat secara
    operasional, bukan di database website).
-   Impresi, klik, CTR, dan posisi query di Google Search Console.
-   Halaman yang memperoleh trafik organik dan konversi.
-   Core Web Vitals, error 404, halaman terindeks, dan validitas
    sitemap/schema.
-   Engagement pada halaman paket dan artikel.

Target angka ditetapkan setelah baseline 30--60 hari tersedia; jangan
mengklaim target ranking atau volume trafik tanpa data.

## 4. Target Audiens

1.  **HR, GA, dan tim perusahaan:** outing, gathering, team building,
    employee engagement.
2.  **Sekolah dan lembaga pendidikan:** outbound pelajar, kegiatan
    pengembangan karakter, field trip.
3.  **Komunitas dan organisasi:** acara kebersamaan, fun games, kegiatan
    kelompok.
4.  **Keluarga dan grup privat:** aktivitas outdoor sesuai umur,
    kemampuan, dan kebutuhan.
5.  **EO, agen perjalanan, dan penyelenggara acara:** mencari mitra
    kegiatan di Batu--Malang.

Setiap segmen memerlukan informasi yang berbeda. Jangan menyatukan semua
kebutuhan ke satu halaman generik jika ada paket dan penawaran khusus
yang benar-benar berbeda.

## 5. Ruang Lingkup

### Termasuk dalam MVP

-   Beranda
-   Profil
-   Wisata / katalog paket
-   Halaman detail tiap paket
-   Artikel / daftar artikel
-   Halaman detail tiap artikel
-   Galeri
-   Navigasi desktop dan mobile
-   CTA WhatsApp dengan pesan awal yang relevan
-   SEO teknis dasar, metadata, canonical, sitemap, robots.txt, Open
    Graph, structured data yang sesuai
-   Breadcrumb, internal linking, halaman 404
-   Data lokal tanpa database
-   Optimasi gambar dan performa dasar
-   Dokumentasi penggunaan konten untuk pemilik/pengelola

### Tidak termasuk dalam MVP

-   Login/admin panel
-   Database, CMS berbasis server, keranjang, pembayaran online, atau
    booking real-time
-   Sistem akun pelanggan
-   Penetapan harga otomatis atau ketersediaan slot real-time
-   Ulasan buatan, rating palsu, atau klaim penghargaan tanpa bukti
-   Pembuatan konten otomatis dalam jumlah besar tanpa penyuntingan
    manusia

## 6. Struktur Navigasi dan Halaman

Navbar utama: - Beranda - Profil - Wisata ▾ - Katalog paket - Detail
paket yang tersedia - Artikel - Daftar artikel - Detail artikel -
Galeri - CTA utama: **Konsultasi WhatsApp**

### Rekomendasi URL

-   `/` --- Beranda
-   `/profil/` --- Profil
-   `/wisata/` --- Katalog paket
-   `/wisata/paket-outbound-reguler/` --- Contoh detail paket
-   `/wisata/paket-gathering-perusahaan/` --- Contoh detail paket
-   `/wisata/paket-outbound-pelajar/` --- Contoh detail paket
-   `/wisata/paket-team-building/` --- Contoh detail paket
-   `/artikel/` --- Daftar artikel
-   `/artikel/panduan-outbound-di-batu-malang/` --- Contoh artikel
-   `/galeri/` --- Galeri
-   `/404.html` atau halaman 404 bawaan Astro yang disesuaikan

Struktur URL yang diminta pengguna adalah `paket/detail-nama-paket` dan
`artikel/detail-nama-artikel`. Untuk navigasi yang lebih konsisten,
dokumen ini merekomendasikan `/wisata/[slug]/` sebagai jalur detail
paket karena menu induknya bernama Wisata. Jika folder fisik harus
bernama `paket`, tetap boleh menggunakan route `/paket/[slug]/`;
tetapkan satu pola dan jangan mengganti URL setelah terindeks tanpa
redirect yang tepat.

## 7. Kebutuhan Konten per Halaman

### 7.1 Beranda

-   Title dan H1 yang menjelaskan layanan dan lokasi secara natural.
-   Hero dengan foto kegiatan autentik, proposisi nilai, CTA WhatsApp,
    dan tautan ke katalog.
-   Ringkasan jenis kegiatan yang benar-benar tersedia.
-   Paket unggulan dengan harga hanya jika masih berlaku dan jelas
    ketentuannya.
-   Alur pemesanan 3--4 langkah.
-   Alasan memilih penyedia yang dapat dibuktikan.
-   Cuplikan galeri dan artikel.
-   Lokasi layanan dan area jangkauan yang terverifikasi.
-   FAQ yang menjawab pertanyaan calon pelanggan.
-   CTA akhir dan informasi kontak.

### 7.2 Profil

-   Nama bisnis dan cerita singkat.
-   Pengalaman, tim, fasilitas, dan metode layanan yang dapat
    diverifikasi.
-   Area layanan dan lokasi operasional.
-   Standar keselamatan, briefing, peralatan, serta kebijakan cuaca
    sesuai praktik nyata.
-   Foto tim/lokasi asli dengan keterangan.
-   Identitas dan kontak bisnis.
-   CTA konsultasi.

### 7.3 Wisata / katalog paket

-   H1 yang menjelaskan pilihan kegiatan.
-   Intro singkat untuk membantu memilih berdasarkan tujuan acara.
-   Kartu paket dengan nama, ringkasan, sasaran peserta, durasi, kisaran
    harga jika tersedia, dan tautan detail.
-   Kategori atau filter sederhana hanya jika jumlah paket
    membutuhkannya.
-   Perbandingan paket yang mudah dipahami.
-   FAQ umum dan CTA.
-   Jangan menampilkan harga, fasilitas, kapasitas, atau diskon yang
    belum dikonfirmasi.

### 7.4 Detail paket

Setiap halaman paket harus memiliki: - Nama paket yang unik dan H1
tunggal. - Ringkasan manfaat dan jenis acara yang sesuai. - Galeri/foto
yang relevan. - Cocok untuk siapa dan tujuan kegiatan. - Rangkaian
aktivitas atau rundown contoh; beri label "contoh" jika bisa berubah. -
Durasi, minimum/maksimum peserta, usia atau kondisi fisik yang relevan,
dan lokasi --- hanya jika telah dikonfirmasi. - Isi paket dan yang tidak
termasuk. - Harga atau mekanisme penawaran, tanggal berlaku harga,
pajak/biaya tambahan jika relevan. - Peralatan, pendamping, prosedur
keselamatan, serta batasan aktivitas. - Opsi tambahan dan kustomisasi. -
FAQ spesifik paket. - Breadcrumb, paket terkait, dan CTA WhatsApp dengan
nama paket sudah terisi pada pesan. - Metadata dan schema
Product/Service yang benar-benar sesuai fakta. Jangan menambahkan
review/rating palsu.

### 7.5 Artikel

-   Daftar artikel dengan judul, ringkasan, kategori, tanggal
    publikasi/pembaruan, gambar, dan tautan.
-   Kategori editorial seperlunya: panduan outbound, ide gathering, tips
    keselamatan, panduan lokasi, aktivitas sekolah/komunitas.
-   Paginasi hanya jika jumlah artikel cukup banyak.
-   Tautan internal ke paket terkait bila relevan, bukan disisipkan
    secara paksa.

### 7.6 Detail artikel

-   Judul yang menjawab maksud pencarian.
-   Penulis atau penanggung jawab editorial yang nyata.
-   Tanggal publikasi dan pembaruan yang jujur.
-   Daftar isi untuk artikel panjang.
-   Isi orisinal, praktis, akurat, dan diperiksa.
-   Sumber rujukan untuk fakta penting, terutama keselamatan, aturan
    lokasi, dan informasi yang bisa berubah.
-   Gambar dengan alt text deskriptif.
-   FAQ hanya bila membantu pembaca.
-   Artikel terkait dan CTA yang relevan.
-   `Article` atau `BlogPosting` structured data dengan properti yang
    sesuai.
-   Hindari mengubah tanggal tanpa pembaruan substansial.

### 7.7 Galeri

-   Foto asli dari kegiatan atau lokasi yang benar-benar pernah
    digunakan.
-   Keterangan singkat yang menjelaskan kegiatan/lokasi dan konteks.
-   Alt text deskriptif; jangan memasukkan keyword berlebihan.
-   Kompresi gambar, ukuran responsif, dan lazy loading untuk gambar di
    bawah fold.
-   Izin penggunaan foto peserta, terutama anak-anak.
-   CTA untuk meminta rekomendasi paket.

### 7.8 Elemen global

-   Header responsif, footer, breadcrumb pada halaman dalam, tombol
    WhatsApp, tautan kontak, metadata, halaman 404, dan halaman
    kebijakan privasi bila memakai analytics/form pihak ketiga.
-   Link harus bisa dipakai dengan keyboard dan memiliki focus state.
-   CTA tidak boleh menutupi konten penting di layar kecil.

## 8. Strategi Riset Keyword

### Prinsip

Belum ada data volume keyword aktual yang dilampirkan. Karena itu,
daftar di bawah adalah **hipotesis keyword untuk diuji**, bukan klaim
volume pencarian. Urutan prioritas ditentukan oleh relevansi bisnis,
maksud pencarian, potensi konversi, dan kemampuan membuat halaman yang
benar-benar bermanfaat --- bukan volume saja.

### 8.1 Kelompok keyword utama dan pendukung

  -----------------------------------------------------------------------
  Kelompok          Keyword utama     Keyword pendukung Jenis halaman
                    kandidat          / long-tail       
  ----------------- ----------------- ----------------- -----------------
  Outbound lokal    outbound Batu     outbound di Batu, Beranda / katalog
                    Malang            outbound Kota     
                                      Batu, tempat      
                                      outbound Batu     
                                      Malang, provider  
                                      outbound Batu     

  Outbound lokal    paket outbound    paket outbound    Katalog / detail
                    Malang            Batu Malang,      paket
                                      harga paket       
                                      outbound Malang,  
                                      paket outbound    
                                      per orang,        
                                      outbound murah    
                                      Batu              

  Perusahaan        gathering Malang  paket gathering   Landing page
                                      perusahaan        khusus bila
                                      Malang, gathering layanannya nyata
                                      kantor Batu,      
                                      corporate outing  
                                      Malang, tempat    
                                      gathering         
                                      perusahaan Batu   

  Team building     team building     paket team        Detail paket
                    Malang            building Batu,    
                                      games team        
                                      building,         
                                      kegiatan team     
                                      building          
                                      perusahaan        

  Pelajar           outbound anak     outbound pelajar  Detail paket
                    Malang            Batu, outbound    
                                      sekolah Malang,   
                                      kegiatan edukasi  
                                      outdoor Batu      

  Aktivitas         paintball Batu    paket paintball   Detail paket bila
                    Malang            Batu, paintball   tersedia
                                      untuk gathering   
                                      Malang            

  Aktivitas         rafting Batu      rafting Malang,   Detail paket bila
                    Malang            paket rafting     tersedia
                                      Batu, outbound    
                                      rafting Malang    

  Aktivitas         offroad Batu      paket offroad     Detail paket bila
                    Malang            Batu, offroad     tersedia
                                      untuk gathering   
                                      Malang            

  Lokasi            tempat outbound   lokasi outbound   Artikel panduan /
                    di Batu           Batu Malang,      halaman lokasi
                                      outbound Coban    yang bermanfaat
                                      Talun, tempat     
                                      gathering outdoor 
                                      Batu              

  Informasional     manfaat outbound  tujuan outbound   Artikel
                    untuk team        perusahaan,       
                    building          contoh games team 
                                      building, manfaat 
                                      gathering kantor  

  Informasional     tips memilih      cara memilih      Artikel
                    paket outbound    provider          
                                      outbound,         
                                      persiapan         
                                      outbound kantor,  
                                      checklist acara   
                                      outbound          

  Informasional     rundown outbound  contoh rundown    Artikel
                                      outbound 1 hari,  
                                      susunan acara     
                                      gathering kantor, 
                                      rundown team      
                                      building          

  Informasional     perlengkapan      perlengkapan      Artikel
                    outbound          outbound sekolah, 
                                      tips keselamatan  
                                      outbound,         
                                      persiapan         
                                      outbound di alam  
                                      terbuka           
  -----------------------------------------------------------------------

**Pilih satu keyword utama per halaman.** Keyword pendukung boleh
dipakai secara natural dalam subjudul, FAQ, teks tautan, dan isi
halaman. Jangan membuat banyak halaman tipis yang hanya mengganti nama
kota atau kata kunci.

### 8.2 Cara memvalidasi volume dan kompetisi

1.  **Google Keyword Planner:** gunakan lokasi Indonesia dan, bila
    relevan, Jawa Timur/Malang; catat rentang volume, tren, dan variasi
    istilah. Data iklan adalah estimasi dan tidak sama dengan trafik
    organik.
2.  **Google Trends:** bandingkan istilah seperti "outbound Batu",
    "outbound Malang", "gathering Malang", dan variasi lain. Trends
    bersifat relatif, bukan volume absolut.
3.  **Google Search Console:** setelah website aktif, temukan query
    aktual yang menghasilkan impresi, klik, CTR, dan posisi.
4.  **SERP manual:** periksa 10 hasil teratas untuk setiap keyword
    penting. Catat apakah hasil didominasi halaman paket, direktori,
    artikel, peta lokal, atau video. Buat tipe halaman yang sesuai
    dengan maksud pencarian.
5.  **Riset pesaing:** pelajari kelengkapan informasi, struktur paket,
    foto, FAQ, tautan internal, dan bukti kepercayaan pesaing. Jangan
    menyalin teks, foto, harga, atau klaim mereka.
6.  **Validasi bisnis:** prioritaskan istilah yang sesuai dengan layanan
    yang benar-benar dapat diberikan dan kapasitas operasional.
7.  **Spreadsheet keyword:** simpan kolom `keyword`, `cluster`,
    `intent`, `volume`, `trend`, `difficulty/competition`, `SERP type`,
    `target URL`, `priority`, `notes`, dan `date checked`.

### 8.3 Penilaian prioritas

Gunakan skor internal 1--5 untuk: - Relevansi dengan layanan. - Potensi
konversi. - Bukti permintaan pencarian. - Kemampuan bersaing dengan
konten dan aset yang tersedia. - Kecocokan maksud pencarian dengan
halaman.

Prioritaskan relevansi dan konversi lebih tinggi daripada volume mentah.
Jangan menyebut keyword "volume besar" sampai angka dan tanggal
pengecekannya dicatat.

### 8.4 Pemetaan keyword ke halaman

-   Beranda: "outbound Batu Malang" atau istilah layanan inti yang
    paling sesuai.
-   Katalog Wisata: "paket outbound Malang" / "paket outbound Batu
    Malang".
-   Detail paket gathering: "paket gathering perusahaan Malang".
-   Detail team building: "team building Malang".
-   Detail pelajar: "outbound pelajar Batu" atau "outbound sekolah
    Malang".
-   Artikel panduan: keyword informasional, bukan keyword transaksi
    utama yang sama dengan katalog.
-   Galeri: fokus pada bukti visual dan pengalaman; jangan memaksakan
    target keyword komersial.

Buat halaman khusus "gathering", "paintball", "rafting", "offroad", atau
lokasi hanya jika ada layanan/penawaran yang nyata dan kontennya cukup
berbeda.

## 9. SEO, AEO, GEO, dan Discoverability

### 9.1 SEO teknis

-   Output utama berupa HTML statis; pastikan konten penting tampil di
    HTML hasil build.
-   Setiap halaman memiliki `<title>` unik, meta description unik, H1
    yang jelas, canonical absolut, dan bahasa `id-ID`.
-   Gunakan URL singkat, deskriptif, huruf kecil, tanda hubung, dan
    konsisten dengan trailing slash.
-   Buat sitemap XML dan `robots.txt`; daftarkan sitemap di Google
    Search Console.
-   Periksa status indexability, canonical, redirect, 404, dan halaman
    duplikat.
-   Terapkan HTTPS, kompresi, cache aset, ukuran gambar yang tepat, dan
    Core Web Vitals.
-   Buat internal linking kontekstual antarartikel dan halaman paket.
-   Gunakan alt text untuk gambar informatif; gambar dekoratif memakai
    alt kosong.
-   Hindari keyword stuffing, hidden text, doorway pages, konten hasil
    salin, dan halaman yang hanya dibuat untuk mesin pencari.

### 9.2 AEO --- Answer Engine Optimization

-   Jawab pertanyaan pengguna dengan ringkas dan jelas di dekat bagian
    yang membahasnya.
-   Gunakan heading berupa pertanyaan jika sesuai, misalnya "Apa saja
    yang termasuk dalam paket?"
-   Cantumkan fakta operasional: durasi, jumlah peserta, lokasi,
    fasilitas, batasan, dan cara mendapatkan harga --- hanya setelah
    diverifikasi.
-   Buat FAQ berdasarkan pertanyaan nyata dari pelanggan dan tim
    penjualan.
-   Tampilkan penulis, sumber, tanggal pembaruan, serta proses editorial
    pada artikel yang membutuhkan kredibilitas.
-   Jangan menjanjikan bahwa schema FAQ akan menghasilkan rich result;
    dukungan fitur hasil pencarian dapat berubah.

### 9.3 GEO --- Generative Engine Optimization

Dalam dokumen ini, GEO berarti membuat informasi mudah dipahami dan
diverifikasi oleh mesin pencari serta sistem jawaban berbasis AI; bukan
jaminan akan dikutip atau direkomendasikan. - Konsisten menyebut nama
bisnis, lokasi, kontak, area layanan, dan layanan di seluruh situs. -
Publikasikan informasi yang spesifik, faktual, orisinal, dan memiliki
sumber atau bukti. - Gunakan struktur semantik, tabel fasilitas yang
mudah dibaca, FAQ yang bermanfaat, dan schema yang cocok dengan konten
terlihat. - Dapatkan penyebutan dan tautan dari mitra, venue,
organisasi, atau direktori tepercaya secara wajar. - Pastikan halaman
dapat di-crawl dan tidak bergantung pada interaksi JavaScript untuk
menampilkan informasi inti. - Jangan membuat halaman massal atau klaim
"AI-friendly" yang tidak menambah nilai bagi pengguna.

### 9.4 Structured data

Pilih sesuai isi nyata: - `Organization` atau `LocalBusiness` hanya
dengan data bisnis yang benar. - `WebSite` untuk identitas situs. -
`BreadcrumbList` pada halaman dalam. - `Article` atau `BlogPosting` pada
artikel. - `Product` atau `Service` untuk paket hanya bila representasi
tersebut tepat dan properti benar. - `ImageObject` bila dibutuhkan dan
datanya tersedia. - `Event` hanya untuk acara tertentu yang benar-benar
dijadwalkan. - `FAQPage` tidak perlu dipasang semata-mata untuk mengejar
rich result; isi FAQ tetap harus terlihat dan berguna.

Validasi dengan Google Rich Results Test dan Schema Markup Validator.
Schema harus sesuai dengan konten yang terlihat, tidak boleh memuat
harga, ulasan, rating, atau lokasi palsu.

### 9.5 Open Graph dan social sharing

Setiap halaman penting mempunyai `og:title`, `og:description`, `og:url`,
`og:type`, `og:image`, serta metadata Twitter/X card bila dibutuhkan.
Gunakan gambar representatif dengan ukuran konsisten, URL absolut, dan
hak penggunaan yang jelas.

### 9.6 Local SEO

-   Buat/optimalkan Google Business Profile hanya jika memenuhi syarat
    dan detail bisnis nyata.
-   Samakan nama, alamat, telepon, jam operasional, dan tautan website
    di berbagai profil resmi.
-   Minta ulasan asli setelah layanan; jangan membeli ulasan atau
    memberi insentif yang melanggar kebijakan.
-   Tambahkan foto lokasi dan kegiatan dengan caption akurat.
-   Buat halaman area/lokasi hanya jika ada pengalaman, informasi, atau
    layanan khusus yang benar-benar relevan di lokasi itu.

## 10. Persyaratan Teknis Astro

### Prinsip arsitektur

-   Astro static output; tidak membutuhkan database atau server runtime
    untuk konten biasa.
-   Gunakan file-based routing dari `src/pages/`.
-   Simpan paket dan artikel sebagai Markdown/MDX di content
    collections, atau data lokal tervalidasi. Content Collections
    membantu konsistensi schema dan type safety.
-   Gunakan `getStaticPaths()` untuk menghasilkan halaman detail statis
    dari slug.
-   Buat komponen bersama: `BaseLayout`, `SiteHeader`, `SiteFooter`,
    `Breadcrumbs`, `WhatsAppCTA`, `PackageCard`, `ArticleCard`,
    `SEOHead`.
-   JavaScript hanya untuk interaksi yang benar-benar diperlukan,
    misalnya menu mobile atau lightbox galeri.
-   Hindari framework client-side besar jika interaksi bisa dibuat
    dengan HTML/CSS dan sedikit JavaScript.
-   Letakkan file publik yang perlu disalin apa adanya di `public/`;
    aset yang ingin diimpor dan dioptimalkan dapat diletakkan di
    `src/assets/`.

### Struktur folder yang direkomendasikan

``` text
batu-outbound/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── images/
│   └── og/
├── src/
│   ├── assets/
│   │   ├── img/
│   │   ├── css/
│   │   └── js/
│   ├── components/
│   │   ├── SiteHeader.astro
│   │   ├── SiteFooter.astro
│   │   ├── SEOHead.astro
│   │   ├── Breadcrumbs.astro
│   │   ├── WhatsAppCTA.astro
│   │   ├── PackageCard.astro
│   │   └── ArticleCard.astro
│   ├── content/
│   │   ├── packages/
│   │   │   ├── outbound-reguler.md
│   │   │   ├── gathering-perusahaan.md
│   │   │   └── outbound-pelajar.md
│   │   └── articles/
│   │       ├── panduan-outbound-batu-malang.md
│   │       └── tips-gathering-kantor.md
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── profil.astro
│   │   ├── galeri.astro
│   │   ├── 404.astro
│   │   ├── wisata/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── artikel/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   └── content.config.ts
├── astro.config.mjs
├── package.json
├── PRD.md
└── design.md
```

`src/content/packages/` dan `src/content/articles/` adalah lokasi data
konten; route yang terlihat pengguna dihasilkan melalui
`src/pages/wisata/[...slug].astro` dan
`src/pages/artikel/[...slug].astro`. Jika ingin folder fisik detail yang
secara eksplisit bernama `src/pages/paket/`, gunakan route
`/paket/[...slug]/` dan sesuaikan seluruh tautan internal. Jangan
mencampur dua pola.

### Contoh frontmatter paket

``` yaml
---
title: "Paket Outbound Reguler Batu Malang"
slug: "paket-outbound-reguler"
description: "Informasi paket outbound untuk kelompok di Batu–Malang."
category: "outbound"
featured: true
priceFrom: null
priceUnit: "peserta"
duration: "Konfirmasi saat konsultasi"
suitableFor:
  - "Komunitas"
  - "Perusahaan"
included:
  - "Isi fasilitas yang sudah diverifikasi"
image: "/images/paket/outbound-reguler.webp"
updatedDate: 2026-10-29
draft: true
---
```

Nilai contoh di atas adalah placeholder. `draft: true` atau mekanisme
serupa disarankan sampai semua detail diverifikasi. Jangan menampilkan
harga nol atau placeholder di website publik.

### Tanpa database: konsekuensi

-   Perubahan konten perlu dilakukan pada file lalu menjalankan
    build/deploy ulang.
-   Formulir tidak bisa menyimpan lead sendiri tanpa layanan eksternal.
    Untuk MVP, arahkan ke WhatsApp atau email.
-   Tidak ada dashboard admin kecuali ditambahkan CMS eksternal.
-   Konten dapat tetap mudah dikelola melalui Markdown dengan schema dan
    panduan penulisan.

## 11. WhatsApp dan Konversi

-   Gunakan link
    `https://wa.me/<NOMOR_INTERNASIONAL>?text=<PESAN_URL_ENCODED>`.
-   Nomor WA harus dikonfirmasi pemilik sebelum produksi; jangan menebak
    nomor.
-   CTA global: "Konsultasi Paket".
-   CTA detail paket: "Tanyakan Paket \[Nama Paket\]".
-   Pesan awal menyertakan nama paket, tanggal rencana, jumlah peserta,
    dan kebutuhan yang bisa dilengkapi calon pelanggan.
-   Buka tab baru bila sesuai dan tambahkan `rel="noopener noreferrer"`
    pada tautan eksternal dengan `target="_blank"`.
-   Lacak klik CTA dengan analytics yang disetujui dan sesuai kebijakan
    privasi.

## 12. Aksesibilitas, Performa, dan Keamanan

-   Kontras teks sesuai WCAG 2.2 AA sebagai target desain.
-   Semua fungsi bisa digunakan dengan keyboard; fokus terlihat; tombol
    punya label yang jelas.
-   Gunakan elemen semantik dan heading berurutan.
-   Gunakan `width`/`height` atau aspect ratio pada gambar untuk
    mengurangi layout shift.
-   Optimalkan WebP/AVIF, `srcset` atau komponen gambar Astro, lazy-load
    gambar non-kritis, dan jangan lazy-load hero utama tanpa alasan.
-   Kurangi JavaScript dan CSS yang tidak dipakai.
-   Gunakan dependensi yang terawat, update berkala, dan jangan
    menyimpan secret di repository.
-   Jika memakai analytics atau layanan pihak ketiga, dokumentasikan
    data yang dikumpulkan dan kebijakan privasi.

## 13. Kriteria Penerimaan

-   Semua item navbar bekerja pada desktop dan mobile.
-   Semua paket dan artikel mempunyai halaman detail dengan URL stabil.
-   Halaman detail dibuat dari data lokal dan tidak membutuhkan
    database.
-   Setiap halaman publik mempunyai title, description, canonical, OG
    metadata, dan satu H1 utama.
-   Sitemap berisi halaman canonical yang memang ingin diindeks.
-   robots.txt tidak memblokir halaman penting.
-   Structured data lolos validasi sintaks dan cocok dengan konten
    terlihat.
-   Tombol WhatsApp membuka nomor dan pesan yang benar.
-   Gambar mempunyai alt text yang tepat dan ukuran responsif.
-   Tidak ada harga, testimoni, sertifikasi, alamat, atau klaim yang
    belum diverifikasi.
-   Halaman 404 dan tautan internal diuji.
-   Build produksi berhasil tanpa error dan situs dapat dirender tanpa
    JavaScript untuk konten inti.
-   Pengujian mobile, keyboard, kontras, dan performa dilakukan sebelum
    rilis.

## 14. Tahapan Implementasi

1.  **Discovery:** konfirmasi merek, layanan, nomor WA, lokasi, harga,
    fasilitas, foto, bukti kredibilitas, dan audiens prioritas.
2.  **Riset keyword:** validasi kandidat keyword melalui Keyword
    Planner, Trends, SERP, dan kompetitor; tetapkan keyword map.
3.  **Fondasi Astro:** konfigurasi proyek, layout, routing, schema
    konten, komponen global, dan style tokens.
4.  **Halaman inti:** beranda, profil, katalog, detail paket, galeri.
5.  **Artikel:** collection, daftar artikel, template detail, internal
    linking.
6.  **SEO teknis:** metadata, canonical, sitemap, robots, schema, OG,
    404.
7.  **QA:** validasi konten, link, mobile, aksesibilitas, build,
    structured data, dan Core Web Vitals.
8.  **Rilis dan pengukuran:** hubungkan Search Console/analytics yang
    disetujui, pantau 30--60 hari, lalu perbarui konten berdasarkan
    query nyata.

## 15. Risiko dan Mitigasi

  -----------------------------------------------------------------------
  Risiko                              Mitigasi
  ----------------------------------- -----------------------------------
  Volume keyword dianggap pasti       Labeli daftar sebagai hipotesis;
  padahal belum diverifikasi          catat sumber dan tanggal validasi

  Harga/fasilitas berubah             Simpan data dalam satu sumber
                                      lokal; tampilkan "minta penawaran"
                                      bila belum pasti

  Konten tipis atau duplikat          Satu intent utama per halaman;
                                      gunakan pengalaman, detail, dan
                                      foto orisinal

  Website tidak mudah diperbarui      Content Collections, schema,
                                      template, dan panduan editorial

  Tanpa database, lead tidak          Gunakan WhatsApp/email atau
  tersimpan di website                integrasi form pihak ketiga dengan
                                      kebijakan privasi

  Klaim keselamatan berlebihan        Verifikasi prosedur, instruktur,
                                      perlengkapan, dan batas aktivitas
                                      dengan operasional

  Foto tidak memiliki izin            Gunakan aset milik sendiri atau
                                      berlisensi dan dapatkan persetujuan
                                      peserta

  URL berubah setelah terindeks       Tetapkan slug sejak awal; siapkan
                                      redirect 301 saat perubahan
  -----------------------------------------------------------------------

## 16. Sumber dan Batasan Riset

-   Situs penyedia lokal dapat membantu memetakan kategori layanan dan
    istilah yang digunakan pasar, tetapi tidak membuktikan volume
    keyword, kualitas layanan, atau harga yang berlaku untuk bisnis ini.
-   Dokumentasi Astro menjelaskan file-based routing dan Content
    Collections untuk konten lokal.
-   Validasi volume, tren, dan persaingan harus dilakukan dengan tool
    riset keyword dan SERP pada tanggal yang dicatat.

Referensi awal: - Astro Content Collections:
https://docs.astro.build/en/guides/content-collections/ - Astro Routing:
https://docs.astro.build/en/guides/routing/ - Astro Configuration /
metadata: https://docs.astro.build/en/guides/configuring-astro/ - Contoh
lanskap layanan lokal (untuk observasi, bukan untuk disalin):
https://batuoutbound.co.id/ dan https://paguponcamp.com/
