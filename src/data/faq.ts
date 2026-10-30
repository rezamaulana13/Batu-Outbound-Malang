export const generalFaqs = [
  {
    q: 'Berapa biaya paket outbound di Batu Outbound Malang?',
    a: 'Biaya disesuaikan dengan jenis kegiatan, durasi, dan fasilitas yang dipilih. Paket Outbound Reguler mulai dari Rp 85.000/orang, Paket Team Building mulai dari Rp 135.000/orang, Paket Gathering Perusahaan mulai dari Rp 185.000/orang (termasuk konsumsi & instruktur), dan Paket Outbound Pelajar mulai dari Rp 75.000/anak. Kami selalu memberikan rincian harga yang transparan tanpa biaya tersembunyi.',
  },
  {
    q: 'Berapa minimal jumlah peserta untuk mengadakan kegiatan outbound?',
    a: 'Minimal peserta rata-rata adalah 20 hingga 30 orang agar dinamika simulasi kelompok berjalan optimal. Namun untuk rombongan besar (100 hingga 500+ peserta dari korporasi, instansi pemerintah, atau sekolah), kami menyediakan tim fasilitator tambahan dan area venue khusus agar kegiatan tetap teratur, seru, dan kondusif.',
  },
  {
    q: 'Fasilitas apa saja yang sudah termasuk dalam paket outbound?',
    a: 'Secara umum paket kami sudah mencakup tiket masuk lokasi/venue wisata di Batu, fasilitator & master game bersertifikat, perlengkapan simulasi outbound lengkap, sound system lapangan, air mineral selama kegiatan, banner kegiatan, tim P3K siaga, serta dokumentasi foto. Opsi makan siang prasmanan atau coffee break juga dapat disertakan sesuai permintaan.',
  },
  {
    q: 'Di mana saja pilihan lokasi outbound terbaik di kawasan Batu dan Malang?',
    a: 'Kami melayani dan bermitra dengan berbagai lokasi favorit terbaik di Batu–Malang, antara lain Coban Rondo (area hutan pinus & air terjun), Songgoriti, Kusuma Agrowisata, Coban Rais, Taman Rekreasi Selecta, hingga Kaliwatu Rafting. Anda bisa memilih lokasi sendiri atau meminta rekomendasi dari kami sesuai kebutuhan dan tema acara kelompok Anda.',
  },
  {
    q: 'Bagaimana jika saat kegiatan berlangsung cuaca tiba-tiba hujan?',
    a: 'Keselamatan dan kenyamanan peserta selalu menjadi prioritas kami. Tim kami selalu menyiapkan skenario cadangan (Plan B), seperti memindahkan sesi games ke aula/pendopo semi-outdoor yang teduh di lokasi, menyediakan jas hujan darurat, atau menyesuaikan jenis permainan fun building yang aman dan tetap seru.',
  },
  {
    q: 'Bagaimana proses pemesanan dan konsultasi jadwal acara?',
    a: 'Prosesnya sangat mudah dan cepat: cukup klik tombol WhatsApp di website ini. Sampaikan rencana tanggal acara, perkiraan jumlah peserta, dan kebutuhan kegiatan Anda. Tim kami akan segera membuatkan proposal penawaran resmi beserta rekomendasi rundown dan estimasi biaya secara gratis.',
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: generalFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

