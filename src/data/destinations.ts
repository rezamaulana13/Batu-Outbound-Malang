export interface Destination {
  id: string;
  name: string;
  shortName: string;
  image: string;
  tagline: string;
  description: string;
  overview: string[];
  location: string;
  capacity: string;
  elevation: string;
  accessBus: string;
  suitableActivities: string[];
  features: string[];
  highlights: string[];
  bestFor: string[];
  suggestedRundown: { time: string; activity: string; desc: string }[];
  faqs: { q: string; a: string }[];
  recommendedPackages: { name: string; slug: string; price: string }[];
}

export const destinations: Destination[] = [
  {
    id: 'coban-talun',
    name: 'Coban Talun Adventure & Camp',
    shortName: 'Coban Talun',
    image: '/destinasi/coban-talun.webp',
    tagline: 'Kawasan hutan pinus alami, air terjun megah 75 meter, dan arena outbound petualangan lereng Arjuno',
    description:
      'Coban Talun terletak di Desa Tulungrejo, Kecamatan Bumiaji, Kota Batu di ketinggian lereng Gunung Arjuno. Dikelilingi hutan pinus yang rindang dan sejuk dengan suhu harian 18–22°C, aliran sungai pegunungan yang jernih, kebun bunga Hortensia warna-warni, serta air terjun megah setinggi 75 meter. Merupakan lokasi favorit untuk fun outbound, simulasi team building, camping ground akbar, serta petualangan offroad jeep.',
    overview: [
      'Coban Talun merupakan destinasi ekowisata terpadu di kawasan lereng Gunung Arjuno yang memadukan keindahan alam hutan pinus, air terjun alami setinggi 75 meter, dan aliran sungai berbatu yang menyegarkan.',
      'Bagi kegiatan outbound dan employee gathering, kawasan ini memiliki beberapa zona lapangan terbuka hijau dengan kontur datar yang mampu menampung rombongan hingga lebih dari 1.000 peserta secara serentak.',
      'Keunggulan utama Coban Talun adalah ragam aktivitas tambahannya: peserta tidak hanya melakukan simulasi team building di lapangan rumput, tetapi juga dapat melanjutkan petualangan offroad jeep menantang di jalur lumpur Arjuno, mengunjungi spot Apache Camp, atau bermalam dengan konsep camping ground berapi unggun.'
    ],
    location: 'Desa Tulungrejo, Kecamatan Bumiaji, Kota Batu',
    capacity: '50 - 1.000+ peserta',
    elevation: '1.300 mdpl (Sejuk 17–22°C)',
    accessBus: 'Dapat diakses bus pariwisata medium hingga besar (dengan shuttle jeep jika rombongan sangat besar)',
    suitableActivities: [
      'Outbound Team Building & Fun Games',
      'Corporate & Family Gathering',
      'Fun Offroad Jeep Adventure 4x4',
      'Paintball Tactical War Simulator',
      'Camping Ground & Api Unggun',
      'Trekking Hutan Pinus & Air Terjun Coban Talun'
    ],
    features: [
      'Lapangan rumput terbuka datar luas (kapasitas 1.000+ peserta)',
      'Area perkemahan (camping ground) di bawah naungan pohon pinus sejuk',
      'Air terjun Coban Talun setinggi 75 meter dengan jalur trekking tertata',
      'Pusat start & finish lintasan Fun Offroad Jeep lereng Arjuno',
      'Fasilitas umum: toilet bersih banyak titik, mushola, pendopo kumpul, dan warung kuliner tradisional',
      'Area parkir kendaraan pribadi dan bus pariwisata yang memadai'
    ],
    highlights: [
      'Udara sejuk pegunungan alami bebas polusi kota',
      'Kombinasi simulasi games, camping, dan petualangan jeep terlengkap',
      'Pemandangan alam dramatis tebing air terjun dan hutan pinus asri',
      'Instruktur lapangan ramah dan bersertifikat BNSP'
    ],
    bestFor: [
      'Corporate Gathering & Outbound Perusahaan',
      'Instansi Pemerintah & BUMN',
      'Komunitas Pecinta Alam & Otomotif',
      'LDKS & Gathering Pelajar/Mahasiswa'
    ],
    suggestedRundown: [
      { time: '08.00 - 08.30', activity: 'Kedatangan & Welcome Drink', desc: 'Peserta tiba di lokasi, welcome tea hangat, dan persiapan di area kumpul utama.' },
      { time: '08.30 - 09.30', activity: 'Ice Breaking & Grouping', desc: 'Pencairan suasana dengan games tawa, pembagian kelompok, yel-yel, dan senam kekompakan.' },
      { time: '09.30 - 11.30', activity: 'Team Building Challenge & Games Pos', desc: 'Simulasi kepemimpinan, komunikasi efektif, dan pemecahan masalah di alam terbuka.' },
      { time: '11.30 - 13.00', activity: 'Ishoma & Makan Siang Tradisional', desc: 'Istirahat sholat dan santap siang prasmanan masakan khas Jawa pedesaan.' },
      { time: '13.00 - 15.00', activity: 'Sesi Petualangan (Jeep Offroad / Air Terjun)', desc: 'Menjelajah air terjun Coban Talun atau fun offroad jeep lereng Gunung Arjuno.' },
      { time: '15.00 - 15.30', activity: 'Debriefing, Awarding & Penutupan', desc: 'Evaluasi hikmah kegiatan, pengumuman tim terkompak, foto bersama, dan persiapan pulang.' }
    ],
    faqs: [
      {
        q: 'Apakah bus pariwisata besar bisa langsung parkir di lokasi Coban Talun?',
        a: 'Ya, bus pariwisata ukuran medium (30–35 seat) dan besar (50 seat) dapat menjangkau area parkir Coban Talun. Untuk kenyamanan rombongan yang sangat besar, kami juga menyediakan layanan shuttle mobil lokal dari kantong parkir utama.'
      },
      {
        q: 'Bagaimana jika saat outbound berlangsung tiba-tiba turun hujan?',
        a: 'Di Coban Talun tersedia beberapa pendopo semi-terbuka dan aula transit. Tim instruktur kami telah menyiapkan modul games adaptif indoor/semi-indoor serta jas hujan darurat sehingga agenda tetap berjalan seru.'
      },
      {
        q: 'Apakah bisa digabungkan dengan paket menginap camping atau glamping?',
        a: 'Bisa sekali! Kami menyediakan paket camping lengkap dengan tenda dome, matras, sleeping bag, api unggun malam, BBQ, hingga opsi menginap unik di Pagupon Camp atau Apache Camp di dalam kawasan yang sama.'
      }
    ],
    recommendedPackages: [
      { name: 'Paket Gathering Perusahaan', slug: 'paket-gathering-perusahaan', price: 'Mulai Rp 175.000 / orang' },
      { name: 'Paket Team Building', slug: 'paket-team-building', price: 'Mulai Rp 195.000 / orang' },
      { name: 'Paket Outbound Reguler', slug: 'paket-outbound-reguler', price: 'Mulai Rp 135.000 / orang' },
    ],
  },
  {
    id: 'coban-rondo',
    name: 'Coban Rondo Outbound & Adventure',
    shortName: 'Coban Rondo',
    image: '/destinasi/coban-rondo.webp',
    tagline: 'Kawasan air terjun legendaris 84 meter, labirin raksasa, dan camping ground hutan pinus sejuk',
    description:
      'Coban Rondo menawarkan panorama hutan pinus lereng Gunung Panderman dengan udara dingin pegunungan (18–20°C) dan hamparan lapangan rumput sangat luas. Berada di jalur utama wisata Batu–Pujon, lokasi ini merupakan pilihan favorit untuk gathering akbar perusahaan, team building, camping ground ribuan peserta, serta wahana paintball war.',
    overview: [
      'Coban Rondo adalah ikon wisata alam legendaris Malang Raya. Memiliki air terjun alami setinggi 84 meter dengan debit air stabil yang dikelilingi vegetasi hutan pinus dan cemara yang sangat asri.',
      'Daya tarik utama untuk kegiatan korporat adalah ketersediaan lapangan rumput datar yang sangat luas (mampu menampung hingga 1.500 peserta) dengan akses logistik yang sangat mudah bagi bus besar.',
      'Selain arena outbound reguler, Coban Rondo memiliki Taman Labirin (Maze) raksasa yang sering kami manfaatkan untuk simulasi orientasi strategi, treasure hunt kelompok, dan shooting target panahan.'
    ],
    location: 'Kecamatan Pujon, Kabupaten Malang (Akses langsung tepi Kota Batu)',
    capacity: '50 - 1.500+ peserta',
    elevation: '1.135 mdpl (Sangat sejuk 18–21°C)',
    accessBus: 'Sangat mudah diakses oleh bus pariwisata besar (50–60 seat), jalan aspal lebar & parkir lega',
    suitableActivities: [
      'Big Corporate Gathering (Hingga 1.500 Peserta)',
      'Fun Outbound & Motivational Training',
      'Treasure Hunt Games di Taman Labirin',
      'Paintball War Simulation (Skenario Eliminasi)',
      'Camping Ground & Malam Keakraban',
      'Wisata Air Terjun Coban Rondo & Satwa Rusa'
    ],
    features: [
      'Lapangan rumput utama seluas 2 hektar dengan kontur datar ramah semua usia',
      'Hutan pinus rimbun dengan kanopi alami yang teduh sepanjang hari',
      'Wahana Taman Labirin hijau raksasa untuk simulasi strategi tim',
      'Arena paintball khusus bertema rimba alami',
      'Pendopo pertemuan luas, food court, toilet bersih tersebar merata, dan mushola representatif',
      'Lahan parkir bus pariwisata yang sangat luas dan aman'
    ],
    highlights: [
      'Akses jalan aspal mulus untuk armada bus pariwisata besar',
      'Fasilitas umum paling lengkap dan siap untuk event ribuan orang',
      'Taman Labirin ikonik yang tidak ditemukan di lokasi lain',
      'Dekat dengan penangkaran rusa dan air terjun spektakuler'
    ],
    bestFor: [
      'Gathering Perusahaan Skala Besar & BUMN',
      'Reuni Akbar, Asosiasi & Komunitas Nasional',
      'Outbound Siswa, Pramuka & Mahasiswa',
      'Family Gathering Multigenerasi'
    ],
    suggestedRundown: [
      { time: '08.00 - 08.30', activity: 'Registrasi & Briefing Tim', desc: 'Rombongan tiba di gerbang Coban Rondo, penyambutan oleh instruktur dan pembagian tanda tim.' },
      { time: '08.30 - 09.30', activity: 'Energizing & Big Ice Breaking', desc: 'Sesi pembuka di lapangan utama: senam ceria, permainan konsentrasi, dan penanaman semangat tim.' },
      { time: '09.30 - 11.30', activity: 'Simulasi Games Pos & Labirin Challenge', desc: 'Kompetisi pos kekompakan tim, dilanjutkan perburuan kode di dalam Taman Labirin.' },
      { time: '11.30 - 13.00', activity: 'Makan Siang & Sholat', desc: 'Menikmati makan siang prasmanan di pendopo dengan sajian kuliner khas pegunungan.' },
      { time: '13.00 - 14.30', activity: 'Paintball Battle / Wisata Air Terjun', desc: 'Sesi simulasi paintball taktis atau jalan santai menikmati kesegaran air terjun Coban Rondo.' },
      { time: '14.30 - 15.00', activity: 'Sesi Refleksi & Penyerahan Penghargaan', desc: 'Debriefing makna kegiatan oleh Master Games, pembagian hadiah, dan penutupan.' }
    ],
    faqs: [
      {
        q: 'Apakah lokasi ini cocok untuk peserta lansia atau balita?',
        a: 'Sangat cocok. Kontur lapangan utama dan area sekitarnya relatif datar dengan jalan setapak berpaving yang ramah untuk lansia maupun anak-anak.'
      },
      {
        q: 'Apakah bisa menyewa sound system dan panggung acara di Coban Rondo?',
        a: 'Bisa. Paket kami sudah mencakup sound system portable/wireless lapangan. Kami juga dapat menyiapkan panggung backdrop custom dan perlengkapan hiburan sesuai permintaan.'
      }
    ],
    recommendedPackages: [
      { name: 'Paket Gathering Perusahaan', slug: 'paket-gathering-perusahaan', price: 'Mulai Rp 175.000 / orang' },
      { name: 'Paket Team Building', slug: 'paket-team-building', price: 'Mulai Rp 195.000 / orang' },
      { name: 'Paket Outbound Reguler', slug: 'paket-outbound-reguler', price: 'Mulai Rp 135.000 / orang' },
    ],
  },
  {
    id: 'kaliwatu-rafting',
    name: 'Kaliwatu Rafting & Outbound',
    shortName: 'Kaliwatu Rafting',
    image: '/destinasi/kaliwatu-rafting.webp',
    tagline: 'Pusat wisata arung jeram hulu Sungai Brantas dan stimulasi kekompakan tim beradrenalin',
    description:
      'Pusat kegiatan arung jeram (rafting) hulu Sungai Brantas di Bumiaji, Kota Batu. Memadukan tantangan jeram alami grade II–III yang aman bagi pemula dengan simulasi kerja sama tim yang intensif. Memberikan pengalaman yang membangun mentalitas pantang menyerah serta soliditas kerja tim tingkat tinggi.',
    overview: [
      'Kaliwatu Rafting merupakan provider arung jeram paling populer dan terpercaya di Kota Batu. Mengarungi hulu Sungai Brantas sejauh 7–9 km dengan durasi pengarungan sekitar 1,5 hingga 2 jam.',
      'Aliran sungainya memiliki kombinasi jeram yang seru namun tetap berstandar keselamatan tinggi, dipandu oleh skipper dan rescue team berlisensi Federasi Arung Jeram Indonesia (FAJI).',
      'Sangat direkomendasikan untuk institusi atau divisi kerja yang ingin mendobrak sekat kebekuan komunikasi, menumbuhkan rasa saling percaya (trust building), dan menguji kecepatan respon tim.'
    ],
    location: 'Jl. Bung Tomo No. 19, Desa Pandanrejo, Kecamatan Bumiaji, Kota Batu',
    capacity: '20 - 400 peserta',
    elevation: '850 mdpl (Sejuk segar)',
    accessBus: 'Akses bus medium dan besar tersedia kantong parkir khusus dengan shuttle lokal cepat',
    suitableActivities: [
      'Arung Jeram (White Water Rafting 7–9 KM)',
      'Water Tubing (Donut Boat Seru)',
      'High Ropes Challenge & Flying Fox Sungai',
      'Team Building & Leadership Simulation',
      'Paintball War Games di Tepi Aliran Sungai'
    ],
    features: [
      'Basecamp tepian sungai yang asri dengan pendopo joglo kayu luas',
      'Peralatan arung jeram standar internasional (perahu karet, helm keselamatan, life jacket pelampung, dayung)',
      'Tim pemandu (skipper) dan rescue bersertifikasi resmi BNSP & FAJI',
      'Fasilitas kamar mandi bilas dan ganti bersih dalam jumlah banyak (20+ bilik)',
      'Sajian makan siang prasmanan masakan tradisional khas pedesaan Jawa (sayur lodeh, ayam laos, sambal terasi)',
      'Layanan dokumentasi foto aksi aksi arung jeram'
    ],
    highlights: [
      'Jeram kelas II–III yang memacu adrenalin namun sangat aman untuk pemula',
      'Simulasi kepemimpinan dan kekompakan tim paling riil di alam',
      'Pemandangan tebing alami dan kebun apel di kanan-kiri sungai',
      'Asuransi kegiatan resmi bagi setiap peserta'
    ],
    bestFor: [
      'Corporate Team Building & Bonding Antar-Divisi',
      'Gathering Karyawan Muda & Startup',
      'Kelompok Pemuda, Komunitas & Alumni',
      'Instansi Pemerintah yang Menginginkan Tantangan Nyata'
    ],
    suggestedRundown: [
      { time: '08.30 - 09.00', activity: 'Kedatangan & Welcome Drink', desc: 'Tiba di Basecamp Kaliwatu, penyambutan dengan teh manis hangat dan jajanan pasar.' },
      { time: '09.00 - 10.15', activity: 'Outbound Team Building di Lapangan', desc: 'Simulasi koordinasi tim, problem solving, dan pemanasan otot sebelum ke air.' },
      { time: '10.15 - 10.45', activity: 'Safety Briefing & Fitting Perlengkapan', desc: 'Pemasangan pelampung, helm, pembagian kelompok perahu, serta simulasi dayung.' },
      { time: '10.45 - 12.45', activity: 'Pengarungan Arung Jeram (Rafting 7-9 KM)', desc: 'Menaklukkan jeram-jeram Sungai Brantas dengan arahan skipper profesional.' },
      { time: '12.45 - 13.30', activity: 'Bilas Bersih & Ganti Pakaian', desc: 'Membersihkan diri di kamar bilas air bersih yang nyaman.' },
      { time: '13.30 - 14.30', activity: 'Santap Siang Prasmanan Ndeso & Penutupan', desc: 'Makan siang prasmanan ayam laos hangat, penyerahan file foto, dan evaluasi penutup.' }
    ],
    faqs: [
      {
        q: 'Apakah peserta yang tidak bisa berenang boleh ikut rafting?',
        a: 'Sangat aman! Seluruh peserta wajib mengenakan life jacket pelampung standar internasional dengan daya apung tinggi, serta didampingi skipper profesional di setiap perahu.'
      },
      {
        q: 'Apa saja yang perlu dibawa oleh peserta?',
        a: 'Disarankan membawa pakaian ganti kering, kantong plastik untuk baju basah, sandal bertali/sepatu air, dan obat-obatan pribadi bila diperlukan.'
      }
    ],
    recommendedPackages: [
      { name: 'Paket Team Building', slug: 'paket-team-building', price: 'Mulai Rp 195.000 / orang' },
      { name: 'Paket Gathering Perusahaan', slug: 'paket-gathering-perusahaan', price: 'Mulai Rp 175.000 / orang' },
    ],
  },
  {
    id: 'selecta-batu',
    name: 'Taman Rekreasi Selecta',
    shortName: 'Selecta',
    image: '/destinasi/selecta-batu.webp',
    tagline: 'Taman bunga legendaris 18 hektar dengan fasilitas rekreasi kolam renang dan lapangan outbound hijau',
    description:
      'Taman wisata bersejarah di Kota Batu yang berdiri sejak tahun 1928 di ketinggian 1.150 mdpl. Menghadirkan hamparan kebun bunga warna-warni seluas belasan hektar, kolam renang air pegunungan dingin tanpa kaporit, wahana bermain modern, dan area lapangan hijau asri yang sangat nyaman untuk rekreasi keluarga, sekolah, dan perusahaan.',
    overview: [
      'Taman Rekreasi Selecta adalah pelopor pariwisata pegunungan di Kota Batu. Terkenal dengan taman bunga ribuan warna yang selalu terawat rapi sepanjang tahun berlatar perbukitan hijau lereng Gunung Anjasmoro.',
      'Memiliki fasilitas publik yang paling mapan di Kota Batu: jalan setapak lebar beraspal/paving, pepohonan peneduh raksasa, wahana sky bike yang mengitari kebun bunga, bianglala, serta kolam renang alami.',
      'Sangat ramah bagi rombongan multi-generasi (anak-anak, dewasa, hingga kakek-nenek), menjadikannya destinasi nomor 1 untuk event Family Gathering perusahaan dan reuni keluarga besar.'
    ],
    location: 'Jl. Raya Selecta No. 1, Desa Tulungrejo, Kecamatan Bumiaji, Kota Batu',
    capacity: '30 - 800 peserta',
    elevation: '1.150 mdpl (Hawa sejuk 18–22°C)',
    accessBus: 'Sangat mudah diakses oleh semua ukuran bus pariwisata (jalan utama kota sangat mulus)',
    suitableActivities: [
      'Family Gathering Kantor Multigenerasi',
      'Fun Games Outbound Ramah Anak & Lansia',
      'Outbound Edukasi Siswa & Pelajar (TK, SD, SMP)',
      'Photo Hunting & Dokumentasi Kebun Bunga',
      'Rekreasi Kolam Renang Air Pegunungan & Sky Bike'
    ],
    features: [
      'Taman bunga tematik 18 hektar dengan ribuan varietas bunga mekar',
      'Lapangan rumput hijau teduh di bawah naungan pohon rindang untuk sesi games',
      'Kolam renang air pegunungan alami yang jernih dan segar',
      'Wahana permainan rekreasi: Sky Bike, Bianglala, Tagada, Flying Fox, Perahu Ayun',
      'Restoran keluarga, food court kuliner khas Batu, dan pasar oleh-oleh buah apel segar',
      'Akses jalan ramah lansia, kursi roda, dan kereta bayi (stroller)'
    ],
    highlights: [
      'Lokasi bersejarah ikonik sejak era kolonial Belanda',
      'Fasilitas umum dan sanitasi paling lengkap dan bersih',
      'Pemandangan kebun bunga spektakuler untuk dokumentasi acara',
      'Lokasi sentral dekat sentra oleh-oleh apel dan penginapan'
    ],
    bestFor: [
      'Family Gathering Perusahaan & Pabrik',
      'Outbound Sekolah TK, SD, hingga SMP',
      'Acara Reuni Akbar & Perkumpulan Paguyuban',
      'Gathering Komunitas yang Mengutamakan Kenyamanan'
    ],
    suggestedRundown: [
      { time: '08.30 - 09.00', activity: 'Kedatangan & Masuk Lokasi', desc: 'Rombongan tiba di gerbang Selecta, pembagian tiket masuk terpadu, dan menuju lapangan hijau.' },
      { time: '09.00 - 10.30', activity: 'Fun Outbound Family Games', desc: 'Permainan kebersamaan yang ceria, interaktif, dan aman untuk seluruh rentang usia keluarga.' },
      { time: '10.30 - 11.30', activity: 'Games Kolaborasi & Awarding', desc: 'Simulasi kekompakan tim, awarding hadiah doorprize, dan foto bersama di taman bunga.' },
      { time: '11.30 - 13.00', activity: 'Makan Siang Prasmanan Resto', desc: 'Santap siang bersama di restoran Selecta dengan menu istimewa pilihan.' },
      { time: '13.00 - 15.00', activity: 'Free Time & Wahana Rekreasi', desc: 'Peserta bebas berenang, mencoba wahana Sky Bike, atau berbelanja apel segar di pasar wisata.' }
    ],
    faqs: [
      {
        q: 'Apakah harga paket sudah termasuk tiket masuk gerbang Selecta?',
        a: 'Ya, semua penawaran paket outbound kami di Selecta sudah bersifat all-in: tiket masuk resmi, reservasi spot lapangan khusus, sound system, fasilitator, dan konsumsi.'
      },
      {
        q: 'Apakah boleh membawa konsumsi sendiri dari luar?',
        a: 'Untuk kenyamanan rombongan, kami menyediakan paket makan siang higienis di lokasi. Namun jika kelompok Anda ingin membawa snack tambahan, hal tersebut tetap diizinkan.'
      }
    ],
    recommendedPackages: [
      { name: 'Paket Outbound Pelajar', slug: 'paket-outbound-pelajar', price: 'Mulai Rp 120.000 / orang' },
      { name: 'Paket Outbound Reguler', slug: 'paket-outbound-reguler', price: 'Mulai Rp 135.000 / orang' },
      { name: 'Paket Gathering Perusahaan', slug: 'paket-gathering-perusahaan', price: 'Mulai Rp 175.000 / orang' },
    ],
  },
  {
    id: 'coban-rais',
    name: 'Coban Rais & Batu Flower Garden',
    shortName: 'Coban Rais',
    image: '/destinasi/coban-rais.webp',
    tagline: 'Wisata petualangan lereng gunung dengan spot foto hits instagramable dan bumi perkemahan alami',
    description:
      'Coban Rais menyajikan kombinasi trek petualangan alam pegunungan, area perkemahan luas di tengah hutan pinus, dan destinasi viral Batu Flower Garden. Sangat pas untuk kelompok kerja muda, tim startup dinamis, dan komunitas kreatif yang menginginkan suasana outbound penuh energi dan spot dokumentasi foto kekinian.',
    overview: [
      'Terletak di lereng Gunung Panderman kawasan Desa Oro-Oro Ombo, Coban Rais menawarkan pemandangan ketinggian yang memperlihatkan lanskap panorama Kota Batu dari atas.',
      'Selain trek alam menuju air terjun setinggi 20 meter, daya tarik utamanya adalah spot foto tematik Batu Flower Garden seperti deck gardu pandang kayu, ayunan di tepi jurang, hingga hammock tower.',
      'Sangat diminati untuk program character building, simulasi tim kreatif, dan paintball war dengan medan alami perbukitan.'
    ],
    location: 'Desa Oro-Oro Ombo, Kecamatan Batu, Kota Batu',
    capacity: '40 - 600 peserta',
    elevation: '1.025 mdpl (Sejuk berangin)',
    accessBus: 'Dapat diakses bus pariwisata medium dan besar ke area transit, dilanjutkan shuttle ramah rombongan',
    suitableActivities: [
      'Adventure & Dynamic Team Building',
      'Fun Games & Creative Outbound',
      'Paintball Tactical War Game di Medan Bukit',
      'Trekking Menuju Air Terjun Coban Rais',
      'Foto Bersama di Spot Hits Batu Flower Garden',
      'Camping Ground & Hammocking Santai'
    ],
    features: [
      'Area Batu Flower Garden dengan puluhan instalasi foto selfie estetik',
      'Bumi perkemahan kontur alami berundak yang luas dan asri',
      'Jalur trekking hutan pinus yang menantang dan memacu stamina',
      'Arena simulasi paintball war bernuansa gerilya hutan alami',
      'Kantin, aula semi-terbuka untuk kumpul peserta, dan mushola'
    ],
    highlights: [
      'Nuansa petualangan dinamis yang sangat disukai generasi muda',
      'Hasil dokumentasi foto dan video acara yang sangat estetik untuk medsos',
      'Pemandangan lanskap Kota Batu dari gardu pandang ketinggian',
      'Trek petualangan ringan yang menyegarkan fisik dan pikiran'
    ],
    bestFor: [
      'Perusahaan Startup, Agensi Kreatif & Tim Milenial',
      'Komunitas Hobi, Fotografi & Pecinta Alam',
      'Gathering Karyawan Divisi IT & Digital Marketing',
      'Outbound Mahasiswa & Organisasi Kepemudaan'
    ],
    suggestedRundown: [
      { time: '08.30 - 09.00', activity: 'Kedatangan di Lokasi', desc: 'Tiba di area parkir Coban Rais, shuttle menuju area kumpul utama, dan persiapan.' },
      { time: '09.00 - 10.30', activity: 'Outbound Creative Team Building', desc: 'Games strategi, komunikasi non-verbal, dan tantangan kreativitas kelompok.' },
      { time: '10.30 - 12.00', activity: 'Paintball Battle / Trekking Alam', desc: 'Simulasi adu strategi paintball di hutan atau trekking sehat ke Coban Rais.' },
      { time: '12.00 - 13.30', activity: 'Ishoma & Makan Siang Prasmanan', desc: 'Istirahat sholat dan makan siang bersama dengan pemandangan pegunungan.' },
      { time: '13.30 - 15.00', activity: 'Explore Batu Flower Garden & Photo Hunt', desc: 'Sesi bebas berfoto di spot-spot hits gardu pandang, ayunan langit, dan hammock.' }
    ],
    faqs: [
      {
        q: 'Apakah medan di Coban Rais cukup menguras tenaga?',
        a: 'Jalur utama dari pos ke spot foto sudah tertata rapi. Jika peserta memilih berjalan santai, medannya sangat menyenangkan. Bagi yang membutuhkan bantuan mobilitas, tersedia jasa ojek lokal resmi.'
      }
    ],
    recommendedPackages: [
      { name: 'Paket Team Building', slug: 'paket-team-building', price: 'Mulai Rp 195.000 / orang' },
      { name: 'Paket Outbound Reguler', slug: 'paket-outbound-reguler', price: 'Mulai Rp 135.000 / orang' },
    ],
  },
  {
    id: 'taman-dolan',
    name: 'Wisata Alam Taman Dolan',
    shortName: 'Taman Dolan',
    image: '/destinasi/taman-dolan.webp',
    tagline: 'Wisata edukasi pedesaan tradisional tempo dulu, fun outbound tepi sungai, dan river tubing seru',
    description:
      'Taman Dolan menghadirkan atmosfer pedesaan tempo dulu yang damai, sejuk, dan asri di Bumiaji, Kota Batu. Dilengkapi dengan kolam renang alami dari sumber mata air pegunungan tanpa kaporit, wahana river tubing melintasi sungai berbatu jernih, lapangan rumput outbound, pendopo joglo kayu antik, dan aneka kuliner tradisional ndeso prasmanan.',
    overview: [
      'Taman Dolan merupakan destinasi pelestarian nilai kearifan lokal pedesaan di Kota Batu. Mengusung konsep kembali ke alam dan budaya tempo dulu, peserta diajak menjauh dari hiruk-pikuk gawai dan kesibukan kantor.',
      'Sangat terkenal dengan wahana river tubing alami yang aman untuk semua umur, kolam renang sumber mata air murni yang segar, serta lapangan rumput yang menyatu dengan suasana persawahan.',
      'Kuliner yang disajikan di pendopo joglo bernuansa kayu klasik menyajikan masakan otentik Jawa pedesaan seperti nasi empok/jagung, lodeh pedas, urap sayur, ikan wader goreng, dan sambal bawang segar.'
    ],
    location: 'Jl. Raya Pandanrejo No. 308, Bumiaji, Kota Batu',
    capacity: '30 - 500 peserta',
    elevation: '800 mdpl (Sejuk nyaman)',
    accessBus: 'Akses bus pariwisata medium dan besar sangat lancar dengan area parkir tepi jalan raya',
    suitableActivities: [
      'Fun Outbound Dolanan Tradisional (Bakiak, Egrang, dsb)',
      'River Tubing Melintasi Aliran Sungai Alami',
      'Edukasi Pertanian & Tangkap Ikan di Lumpur Sawah',
      'Family Gathering Santai di Pendopo Joglo Kayu',
      'Berenang di Kolam Sumber Air Alami Tanpa Kaporit'
    ],
    features: [
      'Kolam renang mata air alami pegunungan yang jernih tanpa kaporit',
      'Pendopo joglo tradisional Jawa dari kayu antik kapasitas 300 orang',
      'Aliran sungai jernih khusus untuk wahana river tubing berpelampung',
      'Resto kuliner prasmanan ndeso tradisional khas Jawa Timur',
      'Fasilitas penginapan homestay arsitektur pedesaan kayu etnik',
      'Toilet bersih, mushola bernuansa alam, dan lapangan rumput hijau'
    ],
    highlights: [
      'Suasana damai pedesaan tempo dulu yang menenangkan pikiran (healing)',
      'Masakan khas pedesaan tradisional yang lezat dan berlimpah',
      'River tubing seru yang sangat digemari anak-anak maupun orang dewasa',
      'Air mata air alami yang sangat menyegarkan dan menyehatkan kulit'
    ],
    bestFor: [
      'Family Gathering Kantor & Reuni Akbar Keluarga',
      'Outbound Edukatif Pelajar, TK, dan SD',
      'Gathering Komunitas yang Mencari Ketenangan Suasana Desa',
      'Arisan dan Pertemuan Paguyuban'
    ],
    suggestedRundown: [
      { time: '08.30 - 09.00', activity: 'Kedatangan & Teh Poci Hangat', desc: 'Penyambutan dengan wedang jahe / teh poci tradisional dan pisang goreng hangat.' },
      { time: '09.00 - 10.30', activity: 'Outbound Dolanan Ndeso', desc: 'Permainan kerja sama khas tradisional tempo dulu yang memancing gelak tawa dan keakraban.' },
      { time: '10.30 - 11.45', activity: 'Serunya River Tubing di Sungai', desc: 'Menyusuri aliran sungai jernih dengan ban pelampung dan pengaman lengkap.' },
      { time: '11.45 - 12.30', activity: 'Berenang di Sumber Air Alami & Bilas', desc: 'Merasakan kesegaran air kolam sumber alami tanpa bahan kimia.' },
      { time: '12.30 - 14.00', activity: 'Santap Siang Prasmanan Ndeso di Joglo', desc: 'Makan siang prasmanan sepuasnya dengan menu khas pedesaan Jawa di pendopo.' }
    ],
    faqs: [
      {
        q: 'Apakah anak-anak aman ikut wahana river tubing di Taman Dolan?',
        a: 'Sangat aman. Aliran airnya tenang dan terkontrol, kedalamannya dangkal, serta seluruh peserta wajib mengenakan pelampung dan helm dengan pendampingan tim rescue.'
      }
    ],
    recommendedPackages: [
      { name: 'Paket Outbound Pelajar', slug: 'paket-outbound-pelajar', price: 'Mulai Rp 120.000 / orang' },
      { name: 'Paket Outbound Reguler', slug: 'paket-outbound-reguler', price: 'Mulai Rp 135.000 / orang' },
      { name: 'Paket Gathering Perusahaan', slug: 'paket-gathering-perusahaan', price: 'Mulai Rp 175.000 / orang' },
    ],
  },
  {
    id: 'tirta-nirwana-songgoriti',
    name: 'Tirta Nirwana Songgoriti',
    shortName: 'Songgoriti',
    image: '/destinasi/tirta-nirwana-songgoriti.webp',
    tagline: 'Taman rekreasi legendaris di lembah sejuk Songgoriti dengan lapangan luas dan danau wisata',
    description:
      'Terletak di lembah barat Kota Batu yang diapit perbukitan hijau dan hawa sejuk alami. Memiliki danau buatan dengan wahana sepeda air, kolam renang air pegunungan, lapangan terbuka berumput hijau yang teduh di bawah naungan pohon rindang, serta kedekatan dengan sentra villa dan pasar wisata Songgoriti.',
    overview: [
      'Songgoriti adalah kawasan peristirahatan tertua di Kota Batu yang terkenal dengan sumber air panas alaminya dan legenda Candi Songgoriti peninggalan era Mataram Kuno.',
      'Taman Rekreasi Tirta Nirwana Songgoriti memiliki lapangan rumput datar yang sangat luas di bawah naungan pohon beringin dan cemara tua yang rindang, menjadikannya sejuk dan tidak panas meski di siang hari.',
      'Sangat strategis bagi kelompok yang mengambil paket menginap 2 Hari 1 Malam (2D1N) karena berada tepat di sentra ratusan villa, homestay, dan hotel terjangkau di kawasan Songgoriti.'
    ],
    location: 'Jl. Songgoriti No. 51, Kelurahan Songgokerto, Kota Batu',
    capacity: '40 - 800 peserta',
    elevation: '950 mdpl (Lembah sejuk berhawa dingin)',
    accessBus: 'Akses bus pariwisata medium dan besar sangat mudah, dekat jalur utama penghubung Batu-Kediri',
    suitableActivities: [
      'Outbound Training & Leadership Games',
      'Gathering Kantor 2 Hari 1 Malam (Include Villa)',
      'LDKS Pelajar, OSIS, & Organisasi Kemahasiswaan',
      'Senam Pagi Massal & Fun Games Kebersamaan',
      'Wisata Danau Sepeda Air & Belanja di Pasar Songgoriti'
    ],
    features: [
      'Lapangan rumput terbuka yang sangat luas dan teduh di bawah pepohonan',
      'Danau wisata buatan dengan wahana perahu kayuh angsa',
      'Kolam renang air sejuk alami Tirta Nirwana',
      'Dekat pemandian air panas alami Songgoriti untuk relaksasi tubuh',
      'Ratusan pilihan villa dan penginapan dalam jarak jalan kaki',
      'Sentra kuliner malam khas sate kelinci dan ketan Songgoriti'
    ],
    highlights: [
      'Pilihan paling ideal untuk gathering menginap (2D1N)',
      'Suasana lembah pegunungan yang sangat dingin dan menenangkan',
      'Area lapangan teduh tidak menyengat matahari',
      'Kemudahan akses wisata belanja oleh-oleh khas Batu'
    ],
    bestFor: [
      'Gathering Perusahaan Menginap (2 Days 1 Night)',
      'LDKS Sekolah, Kampus & Karang Taruna',
      'Kegiatan Komunitas & Paguyuban Pegawai Pensiun',
      'Outbound Instansi Pemerintah'
    ],
    suggestedRundown: [
      { time: '08.30 - 09.00', activity: 'Registrasi di Lapangan Songgoriti', desc: 'Rombongan tiba, penyambutan oleh fasilitator, dan berkumpul di bawah pohon rindang.' },
      { time: '09.00 - 10.30', activity: 'Ice Breaking & Team Synergy Games', desc: 'Membangun sinergi tim, mencairkan kebekuan hubungan kerja lewat simulasi lapangan.' },
      { time: '10.30 - 11.45', activity: 'Competition Pos Games & Leadership', desc: 'Permainan strategi pemecahan masalah dan kepemimpinan di ruang terbuka.' },
      { time: '11.45 - 13.00', activity: 'Ishoma & Makan Siang', desc: 'Makan siang bersama dan istirahat sholat di pendopo transit.' },
      { time: '13.00 - 14.30', activity: 'Wahana Sepeda Air & Wisata Pasar Songgoriti', desc: 'Menikmati danau sepeda air atau jalan santai berbelanja suvenir di pasar wisata.' }
    ],
    faqs: [
      {
        q: 'Apakah bisa diaturkan paket lengkap dengan sewa villa penginapannya?',
        a: 'Tentu bisa! Kami bekerja sama dengan puluhan villa representatif berkolam renang di kawasan Songgoriti untuk kebutuhan menginap 2H1M lengkap dengan makan 3x dan snack.'
      }
    ],
    recommendedPackages: [
      { name: 'Paket Gathering Perusahaan', slug: 'paket-gathering-perusahaan', price: 'Mulai Rp 175.000 / orang' },
      { name: 'Paket Outbound Pelajar', slug: 'paket-outbound-pelajar', price: 'Mulai Rp 120.000 / orang' },
      { name: 'Paket Outbound Reguler', slug: 'paket-outbound-reguler', price: 'Mulai Rp 135.000 / orang' },
    ],
  },
  {
    id: 'apple-sun-learning-center',
    name: 'Apple Sun Learning Center',
    shortName: 'Apple Sun',
    image: '/destinasi/apple-sun-learning-center.webp',
    tagline: 'Pusat outbound edukasi terpadu, instalasi tali tinggi high ropes, flying fox, dan leadership training',
    description:
      'Apple Sun Learning Center adalah pusat kegiatan outbound edukasi dan character building terspesialisasi di kawasan Punten, Bumiaji, Kota Batu. Dilengkapi instalasi high ropes permanen berstandar keselamatan tinggi (flying fox, two line bridge, spider web), arena simulasi team building, river tubing, serta aula training indoor untuk sesi motivasi dan debriefing.',
    overview: [
      'Didesain khusus sebagai sarana pelatihan outdoor modern, Apple Sun Learning Center memiliki fasilitas outbound paling terspesialisasi di Kota Batu.',
      'Keunggulan utamanya adalah ketersediaan fasilitas kombinasi *indoor* dan *outdoor*: lapangan rumput untuk simulasi games fisik, instalasi tali tinggi berstandar petualangan, serta aula indoor berpendingin udara dengan proyektor untuk sesi evaluasi (debriefing) mendalam dan seminar motivasi kerja.',
      'Sangat diminati oleh korporasi yang menginginkan hasil outbound yang berdampak nyata terhadap peningkatan etos kerja, kepemimpinan (leadership), dan komunikasi lintas divisi.'
    ],
    location: 'Jl. Raya Punten, Kecamatan Bumiaji, Kota Batu',
    capacity: '30 - 600 peserta',
    elevation: '900 mdpl (Sejuk segar)',
    accessBus: 'Sangat mudah diakses oleh bus pariwisata medium hingga besar dengan area parkir mandiri',
    suitableActivities: [
      'High Ropes Challenge (Flying Fox, Spider Web, Two Line Bridge)',
      'Corporate Team Building & Leadership Training',
      'Character Building & LDKS Siswa/Mahasiswa',
      'Water River Tubing Seru di Aliran Sungai',
      'Indoor Motivation Training & Sesi Debriefing Mendalam'
    ],
    features: [
      'Instalasi tali tinggi (high ropes) permanen bersertifikasi safety internasional',
      'Flying fox panjang melintasi pepohonan dengan peralatan helm & harness impor',
      'Lapangan rumput datar khusus simulasi games kekompakan',
      '2 Aula indoor berkapasitas besar lengkap dengan sound system dan proyektor presentasi',
      'Instruktur lapangan berlisensi BNSP skema Fasilitator Experiential Learning',
      'Kantin makan siang prasmanan dan area bilas mandi bersih'
    ],
    highlights: [
      'Fasilitas outbound terspesialisasi nomor 1 dengan standar keselamatan tinggi',
      'Dukungan aula indoor untuk sesi motivasi dan evaluasi psikologis tim',
      'Instruktur tersertifikasi BNSP berpengalaman mendampingi ratusan perusahaan besar',
      'Kombinasi games lapangan, tali tinggi, dan river tubing dalam satu tempat'
    ],
    bestFor: [
      'Corporate Training, Management Trainee & Leadership Camp',
      'Team Building Perusahaan yang Berorientasi Hasil Nyata',
      'LDKS Sekolah & Penguatan Karakter Mahasiswa',
      'Training Motivasi Karyawan & Refreshment Tim'
    ],
    suggestedRundown: [
      { time: '08.00 - 08.30', activity: 'Kedatangan & Briefing Instruktur', desc: 'Penyambutan, penitipan barang, pembagian tim, dan pengarahan etika safety.' },
      { time: '08.30 - 10.30', activity: 'Simulasi Team Building & Problem Solving', desc: 'Permainan dinamis mengasah komunikasi efektif, kepercayaan diri, dan kerja tim.' },
      { time: '10.30 - 12.00', activity: 'High Ropes Challenge (Flying Fox & Ropes)', desc: 'Menantang batas keberanian dan kepercayaan diri di atas tali ketinggian.' },
      { time: '12.00 - 13.30', activity: 'Makan Siang Prasmanan & Sholat', desc: 'Istirahat makan siang sehat di kantin dengan menu seimbang.' },
      { time: '13.30 - 15.00', activity: 'Indoor Debriefing & Motivasi di Aula', desc: 'Sesi kupas tuntas hikmah simulasi dipandu Master Fasilitator untuk implementasi di tempat kerja.' }
    ],
    faqs: [
      {
        q: 'Apakah instalasi tali tinggi di Apple Sun aman untuk pemula yang takut ketinggian?',
        a: 'Sangat aman! Seluruh instalasi menggunakan carabiner dan harness bersertifikat safety UIAA/CE, serta didampingi instruktur rescue bersertifikat yang siap memandu secara personal.'
      }
    ],
    recommendedPackages: [
      { name: 'Paket Team Building', slug: 'paket-team-building', price: 'Mulai Rp 195.000 / orang' },
      { name: 'Paket Outbound Pelajar', slug: 'paket-outbound-pelajar', price: 'Mulai Rp 120.000 / orang' },
      { name: 'Paket Outbound Reguler', slug: 'paket-outbound-reguler', price: 'Mulai Rp 135.000 / orang' },
    ],
  },
  {
    id: 'pagupon-camp',
    name: 'Pagupon Camp & Outbound',
    shortName: 'Pagupon Camp',
    image: '/destinasi/pagupon-camp.webp',
    tagline: 'Penginapan unik berbentuk sangkar burung merpati di tengah hutan pinus asri Coban Talun',
    description:
      'Pagupon Camp menyajikan konsep akomodasi dan arena outbound bertema glamping unik di kawasan Coban Talun, Bumiaji, Kota Batu. Memiliki deretan cottage kayu berbentuk rumah burung merpati (pagupon) di tengah hutan pinus yang tenang, dilengkapi area api unggun komunal, lapangan outbound hijau, serta akses langsung ke seluruh wahana Coban Talun.',
    overview: [
      'Pagupon Camp mengambil filosofi sarang burung merpati ("pagupon" dalam bahasa Jawa) yang melambangkan kehangatan rumah, kesetiaan, dan kebersamaan keluarga.',
      'Dikelilingi jajaran pohon pinus tinggi dengan kabut tipis dan hawa dingin yang menyegarkan di malam hari, tempat ini menghadirkan suasana private yang sangat cocok untuk merekatkan keintiman antaranggota tim kerja.',
      'Sangat diminati untuk gathering divisi, tim startup eksekutif, malam keakraban (makrab), pesta barbekyu api unggun, dan kegiatan bonding yang santai namun berkesan mendalam.'
    ],
    location: 'Kawasan Wisata Coban Talun, Desa Tulungrejo, Kecamatan Bumiaji, Kota Batu',
    capacity: '25 - 350 peserta',
    elevation: '1.300 mdpl (Sangat sejuk 16–20°C di malam hari)',
    accessBus: 'Akses bus medium dan besar ke kantong parkir Coban Talun dengan shuttle mobil lokal cepat',
    suitableActivities: [
      'Intimate Corporate Gathering & Glamping Stay',
      'Fun Outbound Games & Team Bonding di Hutan Pinus',
      'Malam Keakraban, Api Unggun & BBQ Night Party',
      'Healing, Mental Refreshment & Sesi Curhat Tim',
      'Jeep Offroad Adventure Menjelajah Coban Talun'
    ],
    features: [
      'Cottage tematik kayu arsitektur sangkar burung merpati unik dan estetik',
      'Area api unggun komunal luas di tengah lapangan rumput hutan pinus',
      'Kamar mandi dan shower bersih dilengkapi water heater air hangat',
      'Cafe resto bernuansa rustic alam dengan kopi khas lereng Arjuno',
      'Akses langsung ke kebun bunga dan air terjun Coban Talun',
      'Instalasi lampu gantung taman yang hangat dan romantis di malam hari'
    ],
    highlights: [
      'Sensasi menginap unik dan sangat instagramable di tengah hutan pinus',
      'Suasana malam hari yang dingin, tenang, dan privat tanpa gangguan',
      'Sangat ideal untuk pesta barbekyu (BBQ) dan bonding malam keakraban',
      'Spot foto estetik yang viral di berbagai media sosial'
    ],
    bestFor: [
      'Gathering Divisi & Tim Inti Perusahaan / Startup',
      'Family Gathering Eksklusif & Reuni Sahabat',
      'Malam Keakraban (Makrab) & Retreat Komunitas',
      'Program Healing & Refreshment Manajemen'
    ],
    suggestedRundown: [
      { time: '14.00 - 15.00', activity: 'Check-in & Welcoming Session', desc: 'Tiba di Pagupon Camp, pembagian kamar cottage kayu, dan menikmati teh hangat selamat datang.' },
      { time: '15.30 - 17.30', activity: 'Fun Outbound Games di Lapangan Pinus', desc: 'Permainan keakraban ringan, games tawa, dan ice breaking di bawah pohon pinus sejuk.' },
      { time: '17.30 - 19.00', activity: 'Istirahat, Mandi Air Hangat & Sholat', desc: 'Mandi air hangat menyegarkan dan persiapan agenda malam.' },
      { time: '19.00 - 21.30', activity: 'Malam Keakraban, BBQ & Api Unggun', desc: 'Makan malam barbekyu di sekitar api unggun, sesi berbagi cerita tim, musik akustik.' },
      { time: '06.00 - 08.00', activity: 'Senam Pagi & Morning Trekking Hutan', desc: 'Menghirup udara segar pagi pegunungan, jalan santai ke air terjun Coban Talun, sarapan pagi.' }
    ],
    faqs: [
      {
        q: 'Apakah di Pagupon Camp udaranya dingin saat malam?',
        a: 'Ya, suhunya bisa mencapai 15–18°C. Kami menyarankan setiap peserta membawa jaket hangat atau sweater untuk kenyamanan saat acara api unggun.'
      },
      {
        q: 'Apakah bisa hanya mengambil paket outbound satu hari (One Day) tanpa menginap?',
        a: 'Bisa sekali! Kami menyediakan paket One Day Fun Outbound di area lapangan Pagupon Camp lengkap dengan sajian makan siang prasmanan dan coffee break.'
      }
    ],
    recommendedPackages: [
      { name: 'Paket Gathering Perusahaan', slug: 'paket-gathering-perusahaan', price: 'Mulai Rp 175.000 / orang' },
      { name: 'Paket Outbound Reguler', slug: 'paket-outbound-reguler', price: 'Mulai Rp 135.000 / orang' },
      { name: 'Paket Team Building', slug: 'paket-team-building', price: 'Mulai Rp 195.000 / orang' },
    ],
  },
];

export function getDestination(id: string): Destination | undefined {
  return destinations.find((d) => d.id === id);
}

export const destinationUrl = (id: string) => `/destinasi/${id}/`;
