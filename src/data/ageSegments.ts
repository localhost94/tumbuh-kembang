export type AgeId =
  | 'nb'
  | 'm1_3'
  | 'm3_6'
  | 'm6_9'
  | 'm9_12'
  | 'm12_18'
  | 'm18_24'
  | 'y2_3'
  | 'y3_4'
  | 'y4_5'
  | 'y5_6'

export interface AgeSegment {
  id: AgeId
  label: string
  short: string
  /** rentang bulan, [min, max) */
  minMonth: number
  maxMonth: number
  group: 'neonatal' | 'bayi' | 'balita' | 'prasekolah'
  experienced: string[]
  toDo: string[]
  why: string[]
  /** rujukan halaman Buku KIA 2024 */
  pages: string
}

export const AGE_SEGMENTS: AgeSegment[] = [
  {
    id: 'nb',
    label: 'Bayi Baru Lahir (0–28 hari)',
    short: '0–28 hari',
    minMonth: 0,
    maxMonth: 1,
    group: 'neonatal',
    experienced: [
      'Bayi mengalami perubahan cepat dari lingkungan yang terlindungi di dalam rahim ke dunia luar.',
      'Orang tua atau pengasuh berperan penting mendukung tumbuh kembang pada masa awal kehidupan.',
      'Pola tidur bayi sampai dengan 16 jam dalam sehari.',
    ],
    toDo: [
      'Pastikan bayi mendapat pemeriksaan dan pelayanan kesehatan oleh tenaga kesehatan pada 0–6 jam, 6–48 jam, 3–7 hari, dan 8–28 hari setelah lahir.',
      'Susui bayi dengan penuh kasih sayang, dekap hangat, jalin hubungan kasih sayang dengan menatap dan mengajaknya bicara.',
      'Jaga bayi tetap hangat dan jaga kebersihan selama merawat bayi.',
      'Cek kesehatan bayi dan kenali tanda bahaya. Jika ada tanda bahaya, segera ke fasilitas pelayanan kesehatan.',
      'Pastikan imunisasi hepatitis B (HB0) sebelum 24 jam, skrining Hipotiroid Kongenital (SHK) 48–72 jam, dan skrining Penyakit Jantung Bawaan (PJB) kritis 24–48 jam setelah lahir.',
      'Tetap berikan ASI saja selama 6 bulan, dan dilanjutkan hingga bayi berusia 2 tahun.',
      'Tips tidur sehat: sebaiknya bayi tidur terlentang, gunakan alas rata, jauhkan benda yang dapat menutupi kepala, gunakan kelambu.',
    ],
    why: [
      'Dua pertiga kematian balita di Indonesia terjadi di usia 1–28 hari pertama.',
      'Pemeriksaan dan pelayanan kesehatan memantau kesehatan bayi secara menyeluruh agar penanganan dapat segera dilakukan bila ada infeksi atau kondisi membahayakan.',
      'Menjalin kedekatan dengan bayi penting untuk pertumbuhan dan perkembangan terbaik.',
    ],
    pages: 'hal. 40–41, 44–47',
  },
  {
    id: 'm1_3',
    label: 'Bayi 29 hari – 3 bulan',
    short: '1–3 bulan',
    minMonth: 1,
    maxMonth: 3,
    group: 'bayi',
    experienced: [
      'Bayi tumbuh dan berkembang pesat, ditandai penambahan berat dan panjang badan yang cepat.',
      'Mulai mengangkat kepala, menatap wajah, dan mengoceh.',
    ],
    toDo: [
      'Beri hanya ASI saja sampai usia 6 bulan. Jangan tambahkan air putih, makanan, minuman, obat, vitamin atau mineral, kecuali dianjurkan dokter.',
      'Susui semau bayi dan hindari penggunaan botol susu atau dot.',
      'Temui tenaga kesehatan atau konselor menyusui bila ibu mengalami masalah menyusui.',
      'Timbang berat badan, ukur panjang badan, dan cek perkembangan bayi tiap bulan di Posyandu atau fasilitas kesehatan.',
      'Dapatkan imunisasi dasar lengkap sesuai usia.',
      'Sering ajak bayi berkomunikasi dan bermain untuk merangsang perkembangan sesuai usianya.',
      'Pastikan bayi istirahat cukup dan cek kesehatannya secara rutin.',
    ],
    why: [
      'Meningkatkan ikatan antara ibu dan bayi.',
      'Bayi mendapat gizi cukup selama menyusui dan mencegah masalah gizi seperti stunting.',
      'Mendukung perkembangan otak bayi agar terbentuk sempurna dan meningkatkan kemampuan belajarnya.',
      'Imunisasi dasar melindungi bayi dari penyakit yang dapat mengakibatkan kematian.',
    ],
    pages: 'hal. 38–39, 52–53',
  },
  {
    id: 'm3_6',
    label: 'Bayi 3–6 bulan',
    short: '3–6 bulan',
    minMonth: 3,
    maxMonth: 6,
    group: 'bayi',
    experienced: [
      'Bayi belajar berbalik, mengangkat kepala tegak, dan meraih benda.',
      'Mulai mengamati tangan sendiri dan mengeluarkan suara gembira.',
    ],
    toDo: [
      'Lanjutkan ASI saja sampai usia 6 bulan.',
      'Timbang, ukur, dan cek perkembangan bayi tiap bulan di Posyandu.',
      'Lakukan perawatan gigi: bersihkan gusi anak dengan kain atau lap basah yang dilingkarkan pada jari telunjuk ibu.',
      'Sering ajak bermain cilukba, melihat cermin, dan mencari sumber suara.',
      'Dapatkan imunisasi dasar lengkap sesuai usia.',
    ],
    why: [
      'Stimulasi tepat mendukung motorik, penglihatan, dan kemampuan berpikir bayi.',
      'Pemantauan rutin mendeteksi dini penyimpangan pertumbuhan dan perkembangan.',
    ],
    pages: 'hal. 38–39, 54–55',
  },
  {
    id: 'm6_9',
    label: 'Bayi 6–9 bulan',
    short: '6–9 bulan',
    minMonth: 6,
    maxMonth: 9,
    group: 'bayi',
    experienced: [
      'Bayi mendapatkan pengalaman makan pertama kali dan beradaptasi dengan berbagai tekstur makanan.',
      'Bayi mulai tumbuh gigi, disertai diare dan demam.',
      'Bayi mulai berbalik, menjaga kepala tetap tegak, meraih benda, menirukan bunyi, dan tersenyum melihat hal menarik.',
    ],
    toDo: [
      'Berikan MPASI yang kaya protein hewani, mulai tekstur lumat dan kental (disaring).',
      'Latih bayi menyenangi suasana makan dan ibu perlu peka terhadap respons bayi.',
      'Berikan ASI hingga usia 2 tahun atau lebih.',
      'Cek perkembangan bayi tiap bulan di Posyandu atau fasilitas pelayanan kesehatan.',
      'Pastikan bayi mendapat vitamin A kapsul biru 1 kali setahun.',
      'Dapatkan Pemeriksaan Kesehatan Anak Terintegrasi (PKAT) di usia 6–7 bulan.',
      'Dapatkan imunisasi dasar lengkap sesuai usia.',
      'Ajari bayi makan sendiri dengan sendok dan minum sendiri dengan gelas.',
      'Ajak bayi main cilukba dan bicara sesering mungkin.',
      'Cek kesehatan dan kenali tanda bahaya; segera ke fasilitas kesehatan bila sakit.',
    ],
    why: [
      'Mencegah stunting dan penyakit infeksi.',
      'Memastikan anak bisa bicara, bersosialisasi, dan mandiri.',
    ],
    pages: 'hal. 56–57, 62–63',
  },
  {
    id: 'm9_12',
    label: 'Bayi 9–12 bulan',
    short: '9–12 bulan',
    minMonth: 9,
    maxMonth: 12,
    group: 'bayi',
    experienced: [
      'Bayi menjelajah lingkungannya dengan merangkak di usia 8–9 bulan.',
      'Bayi belajar berdiri, berpegangan, dan berjalan dengan dituntun.',
      'Mulai menyebut suku kata dan mengenal anggota keluarga.',
    ],
    toDo: [
      'Berikan MPASI dengan tekstur dicincang dan kaya protein hewani.',
      'Lanjutkan ASI hingga usia 2 tahun atau lebih.',
      'Ajari bayi duduk, memegang benda kecil dengan 2 jari, serta berdiri dan berjalan dengan berpegangan.',
      'Lanjutkan perawatan gigi: pada usia 9 bulan ada gigi seri 8 buah dan geraham 4 buah. Bersihkan dengan kasa dan air hangat plus sedikit pasta gigi anak.',
      'Dapatkan imunisasi dan vitamin A sesuai jadwal.',
      'Pantau tumbuh kembang tiap bulan di Posyandu.',
    ],
    why: [
      'Masa emas perkembangan motorik dan bahasa bayi.',
      'Deteksi dini membantu intervensi cepat bila ada keterlambatan.',
    ],
    pages: 'hal. 56–63',
  },
  {
    id: 'm12_18',
    label: 'Anak 12–18 bulan',
    short: '12–18 bulan',
    minMonth: 12,
    maxMonth: 18,
    group: 'balita',
    experienced: [
      'Anak telah makan makanan keluarga, mulai belajar berjalan dan berkata-kata.',
      '70% kebutuhan gizi anak dipenuhi dari MPASI; ASI menyumbang 30%.',
    ],
    toDo: [
      'Timbang, ukur, dan cek perkembangan anak setiap bulan.',
      'Penuhi kecukupan gizi dengan MPASI kaya protein hewani; berikan makanan beragam dan menarik.',
      'Tetap berikan ASI hingga usia 2 tahun.',
      'Hindari makanan atau jajanan rendah gizi, tinggi gula dan garam, berpengawet, dan berpemanis.',
      'Ajari anak belajar makan sendiri.',
      'Ajari anak berjalan di undakan/tangga, mencoret-coret kertas, menyebut bagian tubuh, dan bergerak bebas dalam pengawasan.',
      'Ajak anak membersihkan meja, menyapu, membereskan mainan, bernyanyi, dan bermain dengan teman.',
      'Bacakan cerita dan bimbing anak mematuhi aturan permainan.',
      'Dapatkan imunisasi lanjutan.',
      'Pastikan vitamin A kapsul merah dan obat cacing 2 kali setahun.',
    ],
    why: [
      'Stunting paling banyak terjadi di kelompok usia ini.',
      'Pemantauan rutin memastikan status gizi dan perkembangan terbaik sesuai usia.',
    ],
    pages: 'hal. 64–69',
  },
  {
    id: 'm18_24',
    label: 'Anak 18–24 bulan',
    short: '18–24 bulan',
    minMonth: 18,
    maxMonth: 24,
    group: 'balita',
    experienced: [
      'Anak berjalan lebih stabil, menumpuk kubus, dan menyebut 3–6 kata bermakna.',
      'Anak mulai menirukan pekerjaan rumah tangga dan makan-minum sendiri.',
    ],
    toDo: [
      'Lanjutkan MPASI bergizi seimbang dan ASI hingga 2 tahun.',
      'Gosok gigi setelah sarapan dan sebelum tidur dengan sikat gigi kecil berbulu lembut dan pasta gigi berfluor selapis tipis (1/2 biji kacang polong).',
      'Batasi gawai: hanya konten berkualitas, maksimal 1 jam per hari, didampingi orang tua.',
      'Ajari anak melepas baju, merapikan mainan, dan makan dengan sendok garpu.',
      'Berikan vitamin A kapsul merah dan obat cacing 2 kali setahun.',
      'Pantau tumbuh kembang tiap bulan di Posyandu.',
    ],
    why: [
      'Mendukung kemandirian dan kesiapan masa pra sekolah.',
      'Melindungi dari keterlambatan bicara akibat paparan gawai berlebih.',
    ],
    pages: 'hal. 64–69',
  },
  {
    id: 'y2_3',
    label: 'Anak 2–3 tahun',
    short: '2–3 tahun',
    minMonth: 24,
    maxMonth: 36,
    group: 'prasekolah',
    experienced: [
      'Anak mulai disapih, lebih banyak beraktivitas, bergaul lebih luas, dan memasuki masa pra sekolah.',
      'Tiga tahun pertama, otak anak berkembang sangat pesat.',
    ],
    toDo: [
      'Penuhi gizi dengan makanan keluarga yang bervariasi dan kaya protein hewani.',
      'Timbang, ukur, dan cek perkembangan anak setiap bulan di Posyandu atau fasilitas kesehatan, serta PAUD.',
      'Ajarkan anak perbedaan jenis kelamin dan menjaga alat kelaminnya.',
      'Kembangkan kreativitas dan kemampuan bergaul anak.',
      'Berikan vitamin A kapsul merah dan obat cacing 2 kali setahun.',
      'Biasakan cuci tangan pakai sabun dan jaga kebersihan.',
    ],
    why: [
      'Memastikan kondisi sehat, status gizi, dan perkembangan terbaik sesuai usia.',
      'Mempersiapkan anak memasuki masa pra sekolah dan sekolah dasar.',
    ],
    pages: 'hal. 70–79',
  },
  {
    id: 'y3_4',
    label: 'Anak 3–4 tahun',
    short: '3–4 tahun',
    minMonth: 36,
    maxMonth: 48,
    group: 'prasekolah',
    experienced: [
      'Anak semakin mandiri, mampu berdiri satu kaki, melompat, dan mengayuh sepeda roda tiga.',
      'Bahasa berkembang: menyebut nama, umur, dan tempat.',
    ],
    toDo: [
      'Ajari anak menyikat gigi di depan cermin secara teratur selama 2 menit; dampingi sampai usia 8 tahun.',
      'Pasta gigi seukuran 1 biji kacang polong untuk usia 2–6 tahun.',
      'Biasakan mencuci tangan dan kaki dengan air bersih dan sabun setiap habis bermain.',
      'Batasi makanan selingan yang terlalu manis, asin, dan berlemak.',
      'Batasi gawai tidak lebih dari 1 jam per hari dan dampingi penggunaannya.',
      'Ajak anak bermain dan beraktivitas fisik setiap hari.',
    ],
    why: [
      'Membentuk kebiasaan hidup bersih dan sehat sejak dini.',
      'Mencegah gigi berlubang dan gangguan tumbuh kembang.',
    ],
    pages: 'hal. 78–81',
  },
  {
    id: 'y4_5',
    label: 'Anak 4–5 tahun',
    short: '4–5 tahun',
    minMonth: 48,
    maxMonth: 60,
    group: 'prasekolah',
    experienced: [
      'Kemampuan fisik, bahasa, dan sosial anak berkembang cepat.',
      'Anak mampu mengancing baju, menyebut nama lengkap, dan gemar bertanya.',
    ],
    toDo: [
      'Beri kesempatan anak mengurus diri sendiri dengan pengawasan.',
      'Ajari anak menjaga bagian pribadinya (alat kelamin, paha, dada, pantat, kaki) untuk menghindari pelecehan.',
      'Latih anak mengikuti aturan permainan dan mengenal nama-nama hari.',
      'Mengajak anak sikat gigi bersama dan melatih sikat gigi sendiri.',
      'Berikan perlindungan dan keamanan dari bahaya kecelakaan serta kekerasan.',
    ],
    why: [
      'Menumbuhkan kepercayaan diri dan kemandirian anak.',
      'Mempersiapkan anak memasuki sekolah dasar.',
    ],
    pages: 'hal. 80–83',
  },
  {
    id: 'y5_6',
    label: 'Anak 5–6 tahun',
    short: '5–6 tahun',
    minMonth: 60,
    maxMonth: 72,
    group: 'prasekolah',
    experienced: [
      'Anak berpakaian sendiri, menangkap bola kecil, dan menggambar orang lengkap.',
      'Anak mengenal angka, warna, serta mengerti lawan kata.',
    ],
    toDo: [
      'Kenalkan nama dan fungsi benda-benda; bacakan buku, tanya jawab, dan bercerita.',
      'Gigi susu sudah tumbuh semua: 20 buah, mulai tumbuh 2 gigi geraham tetap rahang bawah.',
      'Periksakan gigi anak rutin setiap 3–6 bulan ke dokter gigi atau perawat gigi.',
      'Latih anak mengenal angka, huruf, simbol, jam, hari dan tanggal.',
      'Ajak anak membandingkan besar-kecil dan banyak-sedikit.',
    ],
    why: [
      'Menyiapkan kemampuan akademik dan sosial anak memasuki sekolah dasar.',
      'Menjaga kesehatan gigi dan mulut anak secara berkelanjutan.',
    ],
    pages: 'hal. 70–83',
  },
]

export function segmentForMonth(month: number): AgeSegment {
  const m = Math.max(0, Math.min(71, Math.floor(month)))
  return (
    AGE_SEGMENTS.find((s) => m >= s.minMonth && m < s.maxMonth) ??
    AGE_SEGMENTS[AGE_SEGMENTS.length - 1]
  )
}

export function ageText(months: number): string {
  if (months < 1) return '0 bulan'
  if (months < 24) return `${months} bulan`
  const y = Math.floor(months / 12)
  const mo = months % 12
  return mo === 0 ? `${y} tahun` : `${y} tahun ${mo} bulan`
}
