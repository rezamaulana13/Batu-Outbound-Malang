# Batu Outbound Malang (Astro, static)

Website statis sesuai `PRD.md` dan `design.md`. Tanpa database, tanpa admin panel.

## Menjalankan

```bash
npm install
npm run dev      # pengembangan, http://localhost:4321
npm run build    # hasil di dist/
npm run preview
```

Butuh Node 18.20+ / 20.3+ / 22+. Domain produksi diatur lewat variabel `SITE_URL`
(contoh: `SITE_URL=https://domainanda.id npm run build`) atau di `astro.config.mjs`.
Sitemap (`/sitemap-index.xml`) dan `robots.txt` memakai domain ini.

## Wajib diisi sebelum rilis (PRD bagian 1, 11, 13)

| Yang diisi | Lokasi |
|---|---|
| Nomor WhatsApp (format `62812...`) | `src/data/site.ts` → `whatsappNumber` |
| Email, alamat, jam operasional, media sosial | `src/data/site.ts` (kosong = tidak tampil) |
| Penanggung jawab editorial | `site.editorName` dan `author` di artikel |
| Foto asli (hero, paket, galeri, artikel) | `public/images/`, lalu isi `src`/`image` + alt |
| Harga, durasi, kapasitas, lokasi tiap paket | frontmatter `src/content/packages/*.md` |
| Cerita bisnis dan daftar keselamatan di Profil | `src/pages/profil.astro` (cari `TODO`) |
| Nama merek final | `src/data/site.ts` dan teks judul halaman |

Teks paket dan artikel bawaan sengaja memakai bahasa umum tanpa harga, angka kapasitas,
sertifikasi, atau testimoni, karena belum ada data yang diverifikasi. Slot foto yang
bertuliskan "Foto asli menyusul" tidak boleh tayang di produksi.

## Mengelola konten

- **Paket:** tambah file `.md` di `src/content/packages/`. Nama file = URL (`/wisata/<nama-file>/`).
  `priceFrom: null` menampilkan "Hubungi kami untuk penawaran". Pakai `draft: true` untuk menyembunyikan.
- **Artikel:** tambah file `.md` di `src/content/articles/` (`/artikel/<nama-file>/`).
  Tanggal `updatedDate` hanya diubah bila isi berubah substansial.
- **Galeri:** edit `src/data/gallery.ts`.
- **FAQ umum:** `src/data/faq.ts`.
- Setelah mengubah konten, jalankan `npm run build` dan deploy ulang `dist/`.
- Pola URL dipilih `/wisata/[slug]/`. Jangan diganti setelah terindeks tanpa redirect 301.

## Struktur

```
src/components   SiteHeader, SiteFooter, SEOHead, Breadcrumbs, WhatsAppCTA, PackageCard, ArticleCard, ...
src/content      packages/ dan articles/ (Content Collections, tervalidasi skema)
src/layouts      BaseLayout.astro
src/pages        /, /profil/, /wisata/, /wisata/[slug]/, /artikel/, /artikel/[slug]/, /galeri/, 404
src/styles       global.css (token warna dan tipografi dari design.md)
```

## Catatan teknis

- Structured data: Organization, WebSite, BreadcrumbList, Service (paket), BlogPosting (artikel).
  Harga masuk schema hanya jika `priceFrom` terisi. Tidak ada rating/ulasan.
- JavaScript hanya untuk menu mobile/dropdown dan filter galeri; konten inti tetap tampil tanpa JS.
- Font: `Manrope` dan `Inter` ada di urutan pertama, dengan fallback `system-ui`. Font belum di-self-host;
  bila ingin dipakai, tambahkan file font berlisensi di `public/fonts/` dan `@font-face`.
- Klik WhatsApp diberi atribut `data-wa-source` untuk pelacakan jika analytics sudah disetujui.
- Yang belum dikerjakan: analytics, halaman kebijakan privasi (perlu bila memakai analytics/form pihak ketiga),
  dan lightbox galeri (opsional di design.md).
