/**
 * Satu sumber data bisnis. SEMUA nilai bertanda TODO harus dikonfirmasi pemilik
 * sebelum situs dipublikasikan (lihat PRD bagian 1 dan 11).
 */
export const site = {
  name: 'Batu Outbound Malang', // nama kerja, konfirmasi merek final
  shortName: 'Batu Outbound',
  tagline: 'Outbound dan aktivitas outdoor di Batu–Malang',
  description:
    'Paket outbound, gathering, dan team building di Batu–Malang untuk perusahaan, sekolah, komunitas, dan keluarga. Konsultasi paket lewat WhatsApp.',
  lang: 'id-ID',
  // Nomor WhatsApp resmi Batu Outbound Malang
  whatsappNumber: '6282211221909',
  formattedPhone: '+62 822-1122-1909',
  email: '',
  address: 'Kota Wisata Batu, Jawa Timur',
  openingHours: 'Setiap Hari: 07.30 – 21.00 WIB',
  socials: [] as { label: string; href: string }[],
  // TODO: nama penanggung jawab editorial yang nyata.
  editorName: 'Tim Batu Outbound Malang',
  serviceAreas: ['Kota Batu', 'Malang'],
};

export function waLink(message: string): string {
  const num = site.whatsappNumber.replace(/\D/g, '');
  const base = num ? `https://wa.me/${num}` : 'https://wa.me/';
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general:
    'Halo Admin Batu Outbound Malang, saya sedang mencari informasi kegiatan wisata & outbound di Batu Malang.\n\nMohon info rekomendasi paket untuk rencana kegiatan kami:\n- Nama Instansi / Pemesan: \n- Jenis Kegiatan: (Gathering Kantor / Outbound / Camping / Paintball / Rafting)\n- Estimasi Jumlah Peserta: \n- Rencana Tanggal: \n\nBoleh minta katalog penawaran lengkap dan estimasi biayanya? Terima kasih!',

  pkg: (name: string) =>
    `Halo Admin Batu Outbound Malang, saya sedang mencari informasi kegiatan outbound paket ${name}.\n\nMohon info rekomendasi paket untuk rencana kegiatan kami:\n- Nama Instansi / Pemesan: \n- Jenis Kegiatan: ${name}\n- Estimasi Jumlah Peserta: \n- Rencana Tanggal: \n\nBoleh minta katalog penawaran lengkap dan estimasi biayanya? Terima kasih!`,

  dest: (destName: string) =>
    `Halo Admin Batu Outbound Malang, saya sedang mencari informasi kegiatan wisata & outbound di ${destName}.\n\nMohon info rekomendasi paket untuk rencana kegiatan kami:\n- Nama Instansi / Pemesan: \n- Jenis Kegiatan: (Gathering Kantor / Outbound / Camping / Paintball / Rafting)\n- Estimasi Jumlah Peserta: \n- Rencana Tanggal: \n\nBoleh minta katalog penawaran lengkap dan estimasi biayanya? Terima kasih!`,

  article: (title: string) =>
    `Halo Admin Batu Outbound Malang, saya membaca artikel "${title}" dan tertarik berkonsultasi mengenai kegiatan wisata & outbound.\n\nMohon info rekomendasi paket untuk rencana kegiatan kami:\n- Nama Instansi / Pemesan: \n- Jenis Kegiatan: (Gathering Kantor / Outbound / Camping / Paintball / Rafting)\n- Estimasi Jumlah Peserta: \n- Rencana Tanggal: \n\nBoleh minta katalog penawaran lengkap dan estimasi biayanya? Terima kasih!`,
};

export const nav = [
  { label: 'Beranda', href: '/' },
  { label: 'Profil', href: '/profil/' },
  { label: 'Destinasi', href: '/destinasi/', children: true },
  { label: 'Paket', href: '/paket/', children: true },
  { label: 'Galeri', href: '/galeri/' },
  { label: 'Artikel', href: '/artikel/' },
  { label: 'Kontak', href: '/kontak/' },
];
