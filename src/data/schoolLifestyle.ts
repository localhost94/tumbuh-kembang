export interface LifestyleBlock {
  id: string
  title: string
  summary: string
  items: string[]
  sourceIds: string[]
}

/**
 * Aktivitas fisik, tidur, waktu layar, dan kesehatan mental.
 * Sumber: WHO (aktivitas fisik & kesehatan mental), 24-Hour Movement Guidelines.
 */
export const LIFESTYLE_BLOCKS: LifestyleBlock[] = [
  {
    id: 'aktivitas',
    title: 'Aktivitas fisik',
    summary: 'Minimal 60 menit aktivitas sedang–berat setiap hari.',
    items: [
      'Lakukan minimal 60 menit aktivitas fisik sedang sampai berat setiap hari (bisa dipecah menjadi beberapa sesi).',
      'Sebagian besar berupa aktivitas aerobik seperti berlari, bersepeda, berenang, atau olahraga permainan.',
      'Sertakan aktivitas yang memperkuat otot dan tulang minimal 3 kali per minggu, misalnya lompat tali, panjat, atau senam.',
      'Kurangi duduk berlama-lama; sempatkan istirahat bergerak di sela belajar.',
      'Contoh mudah: jalan/bersepeda ke sekolah, membantu pekerjaan rumah, dan bermain di luar.',
    ],
    sourceIds: ['who-pa-5-17', 'who-pa-2020'],
  },
  {
    id: 'tidur',
    title: 'Tidur cukup',
    summary: 'Usia 6–13 tahun: 9–11 jam · Usia 14 tahun: 8–10 jam per malam.',
    items: [
      'Tetapkan waktu tidur dan bangun yang konsisten, termasuk akhir pekan.',
      'Jauhkan gawai dari tempat tidur dan hindari layar minimal 1 jam sebelum tidur.',
      'Ciptakan kamar yang gelap, tenang, dan nyaman.',
      'Batasi kafein (kopi, teh, minuman berenergi) terutama pada sore dan malam hari.',
      'Tidur cukup mendukung pertumbuhan, daya ingat, dan suasana hati.',
    ],
    sourceIds: ['movement-24h', 'who-pa-2020'],
  },
  {
    id: 'layar',
    title: 'Waktu layar & media',
    summary: 'Batasi waktu layar hiburan dan dampingi penggunaan media sosial.',
    items: [
      'Batasi waktu layar untuk hiburan; banyak panduan menganjurkan maksimal 2 jam per hari di luar keperluan sekolah.',
      'Dampingi dan ajak anak berdiskusi tentang konten yang ditonton atau dimainkan.',
      'Terapkan aturan keluarga: tidak ada gawai saat makan dan saat belajar.',
      'Waspadai tanda kecanduan gawai: mudah marah bila dijauhkan, lupa waktu, dan mengabaikan tugas.',
      'Isi waktu luang dengan aktivitas fisik, hobi, dan interaksi tatap muka.',
    ],
    sourceIds: ['movement-24h', 'who-mental-health'],
  },
  {
    id: 'mental',
    title: 'Kesehatan mental & sosial',
    summary: 'Dukungan keluarga melindungi kesehatan mental remaja.',
    items: [
      'Jaga komunikasi terbuka dan dengarkan tanpa menghakimi.',
      'Kenali tanda yang perlu diperhatikan: sedih/murung berkepanjangan, menarik diri, perubahan pola makan atau tidur, dan penurunan prestasi.',
      'Dukung anak berteman sehat dan mengikuti kegiatan yang disukai.',
      'Bantu mengelola tekanan sekolah dan tekanan teman sebaya dengan cara yang sehat.',
      'Segera cari bantuan tenaga kesehatan atau psikolog bila keluhan mengganggu aktivitas sehari-hari.',
    ],
    sourceIds: ['who-mental-health', 'who-pa-5-17'],
  },
]

export const HYGIENE_TIPS: string[] = [
  'Cuci tangan pakai sabun sebelum makan dan setelah dari toilet.',
  'Sikat gigi dua kali sehari (pagi setelah sarapan dan sebelum tidur) dengan pasta gigi berfluor.',
  'Periksa gigi rutin setiap 6 bulan ke dokter gigi.',
  'Mandi teratur dan ganti pakaian dalam setiap hari, terutama saat pubertas.',
  'Jaga kebersihan kuku, rambut, dan area kewanitaan.',
]
