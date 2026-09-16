import { referenceById } from './schoolSources'

export type SchoolAgeId = 'y6_9' | 'y10_12' | 'y13_14'

export interface SchoolAgeSegment {
  id: SchoolAgeId
  label: string
  short: string
  /** rentang tahun, inklusif */
  minYear: number
  maxYear: number
  group: string
  experienced: string[]
  toDo: string[]
  why: string[]
  /** id referensi pada schoolSources.ts */
  sourceIds: string[]
}

/**
 * Tahapan usia sekolah & remaja awal (6–14 tahun).
 * Dirangkum dari IDAI, Kemenkes, WHO, dan Permenkes No. 2 Tahun 2020.
 */
export const SCHOOL_AGE_SEGMENTS: SchoolAgeSegment[] = [
  {
    id: 'y6_9',
    label: 'Anak 6–9 tahun · usia sekolah awal',
    short: '6–9 tahun',
    minYear: 6,
    maxYear: 9,
    group: 'sekolah-dasar',
    experienced: [
      'Tinggi badan bertambah relatif stabil, sekitar 5–6 cm per tahun; berat badan naik seiring bertambahnya aktivitas sekolah.',
      'Keterampilan motorik makin terampil: menulis, menggambar, berlari, melompat, dan bermain bola.',
      'Kosakata, membaca, dan berhitung berkembang pesat; anak mulai memahami aturan dan bekerja sama.',
      'Pergaulan meluas — teman sebaya dan guru mulai banyak memengaruhi kebiasaan anak.',
    ],
    toDo: [
      'Ikutkan anak pada penjaringan kesehatan berkala di sekolah/Puskesmas (mata, telinga, gigi, dan status gizi).',
      'Lengkapi imunisasi lanjutan usia sekolah lewat BIAS: Campak Rubela dan DT saat kelas 1, Td saat kelas 2.',
      'Praktikkan gizi seimbang dengan pedoman Isi Piringku dan biasakan sarapan sebelum sekolah.',
      'Dukung aktivitas fisik minimal 60 menit sehari dan batasi waktu layar di luar keperluan sekolah.',
      'Pastikan tidur cukup 9–11 jam setiap malam.',
      'Biasakan sikat gigi dua kali sehari dengan pasta gigi berfluor dan cuci tangan pakai sabun.',
    ],
    why: [
      'Usia sekolah adalah masa membangun kebiasaan sehat dan pondasi kemampuan belajar.',
      'Penjaringan kesehatan sekolah mendeteksi dini gangguan penglihatan, pendengaran, gigi, dan gizi agar segera ditangani.',
      'Aktivitas fisik dan gizi seimbang mendukung pertumbuhan, konsentrasi belajar, dan kesehatan jangka panjang.',
    ],
    sourceIds: ['kemenkes-bias', 'kemenkes-isi-piringku', 'who-pa-5-17', 'who-pa-2020', 'kia-2024'],
  },
  {
    id: 'y10_12',
    label: 'Anak 10–12 tahun · pra-remaja',
    short: '10–12 tahun',
    minYear: 10,
    maxYear: 12,
    group: 'pra-remaja',
    experienced: [
      'Awal masa pubertas. Menurut IDAI, pubertas umumnya dimulai usia 8–13 tahun pada anak perempuan dan 9–14 tahun pada anak laki-laki.',
      'Terjadi percepatan pertumbuhan tinggi badan (growth spurt) dan perubahan bentuk tubuh.',
      'Anak perempuan dapat mengalami menstruasi pertama (menarche), umumnya sekitar usia 12 tahun.',
      'Suasana hati berubah lebih cepat, mulai ingin mandiri, dan teman sebaya makin berpengaruh.',
    ],
    toDo: [
      'Jelaskan perubahan pubertas dengan tenang, positif, dan sesuai usia; jaga komunikasi yang terbuka.',
      'Ajarkan kebersihan diri saat pubertas: mandi teratur, menjaga kebersihan area kewanitaan saat menstruasi, dan deodoran bila perlu.',
      'Lengkapi imunisasi: HPV untuk anak perempuan (kelas 5/6) dan Td (kelas 5) melalui BIAS; cek jadwal IDAI 2024.',
      'Pastikan gizi seimbang dengan cukup protein hewani, zat besi, dan vitamin C.',
      'Dorong aktivitas fisik minimal 60 menit sehari dan batasi waktu layar menjadi maksimal 2 jam hiburan.',
      'Dampingi penggunaan internet dan media sosial, serta perhatikan tanda stres atau gangguan suasana hati.',
    ],
    why: [
      'Informasi pubertas yang benar membantu anak menerima perubahan tubuh dan mengurangi kecemasan.',
      'Gizi dan zat besi yang cukup mencegah anemia yang menurunkan konsentrasi belajar.',
      'Kebiasaan sehat yang dibentuk sekarang menurunkan risiko penyakit tidak menular di kemudian hari.',
    ],
    sourceIds: ['idai-pubertas', 'idai-kapan-pubertas', 'kemenkes-bias', 'kemenkes-ttd', 'who-pa-2020'],
  },
  {
    id: 'y13_14',
    label: 'Remaja awal 13–14 tahun',
    short: '13–14 tahun',
    minYear: 13,
    maxYear: 14,
    group: 'remaja-awal',
    experienced: [
      'Pubertas berlanjut: tanda seks sekunder makin matang, pertumbuhan tinggi badan masih berjalan lalu mulai melambat.',
      'Anak perempuan umumnya sudah menstruasi; anak laki-laki mengalami perubahan suara dan pertambahan massa otot.',
      'Mulai mencari identitas diri, lebih mandiri, dan sensitif terhadap penerimaan kelompok.',
      'Risiko anemia pada remaja putri meningkat karena kehilangan zat besi saat menstruasi.',
    ],
    toDo: [
      'Berikan makanan kaya zat besi (daging, hati, ikan, sayuran hijau) serta buah/sayur kaya vitamin C untuk membantu penyerapan.',
      'Pastikan remaja putri mendapatkan dan meminum Tablet Tambah Darah (TTD) 1 tablet per minggu.',
      'Lengkapi imunisasi lanjutan sesuai rekomendasi IDAI 2024 (mis. Td/Tdap, HPV, influenza tahunan).',
      'Jaga aktivitas fisik minimal 60 menit sehari dan tidur 8–10 jam setiap malam.',
      'Sediakan ruang aman untuk bicara tentang kesehatan reproduksi, kesehatan mental, dan tekanan teman sebaya.',
      'Waspadai tanda gangguan makan (diet berlebihan, takut makan) atau perubahan perilaku yang menetap.',
    ],
    why: [
      'Anemia pada remaja putri menurunkan konsentrasi belajar dan berisiko berlanjut pada kehamilan di kemudian hari.',
      'Dukungan keluarga membantu remaja melalui perubahan fisik dan emosi dengan sehat.',
      'Aktivitas fisik dan tidur yang cukup menjaga kesehatan mental serta prestasi di sekolah.',
    ],
    sourceIds: ['idai-imunisasi-2024', 'idai-pubertas', 'kemenkes-ttd', 'unicef-aksi-bergizi', 'who-pa-5-17'],
  },
]

export function segmentForYear(year: number): SchoolAgeSegment {
  const y = Math.max(6, Math.min(14, Math.floor(year)))
  return SCHOOL_AGE_SEGMENTS.find((s) => y >= s.minYear && y <= s.maxYear) ?? SCHOOL_AGE_SEGMENTS[1]
}

export function sourceList(segment: SchoolAgeSegment) {
  return segment.sourceIds.map(referenceById)
}
