export interface SchoolVaccine {
  id: string
  name: string
  age: string
  schedule: string
  protects: string
  source: 'BIAS' | 'IDAI 2024'
  note?: string
}

/**
 * Imunisasi anak usia sekolah.
 * Sumber: Kementerian Kesehatan RI — Bulan Imunisasi Anak Sekolah (BIAS);
 * IDAI — Jadwal Imunisasi Anak Usia 0–18 Tahun, Rekomendasi 2024.
 */
export const SCHOOL_VACCINES: SchoolVaccine[] = [
  {
    id: 'bias-cr',
    name: 'Campak Rubela',
    age: 'Kelas 1 SD (± 7 tahun)',
    schedule: 'Bulan Agustus — 1 kali',
    protects: 'Campak dan rubela (campak Jerman)',
    source: 'BIAS',
  },
  {
    id: 'bias-dt',
    name: 'DT (Difteri–Tetanus)',
    age: 'Kelas 1 SD (± 7 tahun)',
    schedule: 'Bulan November — 1 kali',
    protects: 'Difteri dan tetanus',
    source: 'BIAS',
  },
  {
    id: 'bias-td2',
    name: 'Td (Difteri–Tetanus dosis penguat)',
    age: 'Kelas 2 SD (± 8 tahun)',
    schedule: 'Bulan November — 1 kali',
    protects: 'Difteri dan tetanus',
    source: 'BIAS',
  },
  {
    id: 'idai-tdap',
    name: 'Tdap / Td (dosis penguat remaja)',
    age: 'Sekitar usia 10–12 tahun, lalu diulang setiap 10 tahun',
    schedule: '1 dosis penguat',
    protects: 'Difteri, tetanus, dan pertusis (batuk rejan)',
    source: 'IDAI 2024',
  },
  {
    id: 'bias-hpv1',
    name: 'HPV (dosis 1)',
    age: 'Anak perempuan, kelas 5 SD (± 11 tahun)',
    schedule: 'Bulan Agustus — 1 kali',
    protects: 'Kanker leher rahim (serviks)',
    source: 'BIAS',
  },
  {
    id: 'bias-td5',
    name: 'Td',
    age: 'Kelas 5 SD (± 11 tahun)',
    schedule: 'Bulan November — 1 kali',
    protects: 'Difteri dan tetanus',
    source: 'BIAS',
  },
  {
    id: 'bias-hpv2',
    name: 'HPV (dosis 2)',
    age: 'Anak perempuan, kelas 6 SD (± 12 tahun)',
    schedule: 'Bulan Agustus — 1 kali',
    protects: 'Melengkapi perlindungan terhadap HPV',
    source: 'BIAS',
    note: 'Bila dimulai sebelum usia 15 tahun, HPV cukup 2 dosis dengan interval 6–12 bulan.',
  },
  {
    id: 'idai-mmr',
    name: 'MMR',
    age: 'Bila belum lengkap (6 tahun ke atas)',
    schedule: '2 dosis, interval minimal 1 bulan',
    protects: 'Campak, gondongan, dan rubela',
    source: 'IDAI 2024',
  },
  {
    id: 'idai-varicella',
    name: 'Varicella',
    age: 'Bila belum pernah (6 tahun ke atas)',
    schedule: '2 dosis, interval 1–3 bulan',
    protects: 'Cacar air',
    source: 'IDAI 2024',
  },
  {
    id: 'idai-influenza',
    name: 'Influenza',
    age: '6 bulan ke atas',
    schedule: '1 dosis setiap tahun',
    protects: 'Influenza (flu)',
    source: 'IDAI 2024',
  },
  {
    id: 'idai-tifoid',
    name: 'Tifoid',
    age: '6 tahun ke atas (terutama di daerah berisiko)',
    schedule: '1 dosis, diulang setiap 3 tahun',
    protects: 'Demam tifoid (tipes)',
    source: 'IDAI 2024',
  },
  {
    id: 'idai-hepa',
    name: 'Hepatitis A',
    age: 'Bila belum pernah (6 tahun ke atas)',
    schedule: '2 dosis, interval 6–12 bulan',
    protects: 'Hepatitis A',
    source: 'IDAI 2024',
  },
]

export const BIAS_NOTES: string[] = [
  'BIAS dilaksanakan setiap tahun pada bulan Agustus dan November di sekolah/madrasah.',
  'Anak yang tidak bersekolah tetap dapat memperoleh imunisasi di Puskesmas, Posyandu, atau fasilitas kesehatan.',
  'Bila terlewat, imunisasi dapat dikejar (catch-up) — konsultasikan ke tenaga kesehatan.',
  'Jadwal dapat berbeda di daerah tertentu; ikuti informasi Puskesmas setempat.',
]
