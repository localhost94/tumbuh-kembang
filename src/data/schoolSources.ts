export interface Reference {
  id: string
  title: string
  publisher: string
  year: string
  url: string
  note: string
}

/**
 * Daftar referensi halaman usia sekolah (6–14 tahun).
 * Seluruh konten halaman ini dirangkum dari sumber-sumber di bawah.
 */
export const SCHOOL_REFERENCES: Reference[] = [
  {
    id: 'idai-imunisasi-2024',
    title: 'Jadwal Imunisasi Anak Usia 0–18 Tahun, Rekomendasi Ikatan Dokter Anak Indonesia Tahun 2024',
    publisher: 'Ikatan Dokter Anak Indonesia (IDAI)',
    year: '2024',
    url: 'https://www.idai.or.id/professional-resources/rekomendasi/jadwal-imunisasi-anak-usia-0-18-tahun',
    note: 'Jadwal imunisasi lanjutan usia sekolah: Td/Tdap, HPV, MMR, varicella, influenza, dan lainnya.',
  },
  {
    id: 'idai-pubertas',
    title: 'Masalah Pubertas pada Anak dan Remaja',
    publisher: 'Ikatan Dokter Anak Indonesia (IDAI)',
    year: '2023',
    url: 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/masalah-pubertas-pada-anak-dan-remaja',
    note: 'Awitan pubertas normal: perempuan 8–13 tahun, laki-laki 9–14 tahun; batas pubertas prekoks <8 tahun (P) dan <9 tahun (L).',
  },
  {
    id: 'idai-kapan-pubertas',
    title: 'Kapan Anak Dikatakan Mengalami Pubertas?',
    publisher: 'Ikatan Dokter Anak Indonesia (IDAI)',
    year: '2023',
    url: 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/kapan-anak-dikatakan-mengalami-pubertas',
    note: 'Urutan tanda pubertas dan kapan perlu dievaluasi ke dokter.',
  },
  {
    id: 'idai-pedoman-imunisasi',
    title: 'Pedoman Imunisasi di Indonesia Edisi 7 Tahun 2024',
    publisher: 'Ikatan Dokter Anak Indonesia (IDAI)',
    year: '2024',
    url: 'https://www.idai.or.id/publications/buku-idai/pedoman-imunisasi-di-indonesia-edisi-7-tahun-2024',
    note: 'Pedoman lengkap imunisasi, termasuk imunisasi kejar dan suntikan ganda.',
  },
  {
    id: 'kemenkes-bias',
    title: 'Bulan Imunisasi Anak Sekolah (BIAS)',
    publisher: 'Kementerian Kesehatan Republik Indonesia — Ayo Sehat',
    year: '2022',
    url: 'https://ayosehat.kemkes.go.id/bulan-imunisasi-anak-sekolah-bias',
    note: 'Jadwal BIAS: Campak Rubela & DT kelas 1, Td kelas 2, HPV & Td kelas 5, HPV kelas 6.',
  },
  {
    id: 'kemenkes-isi-piringku',
    title: 'Isi Piringku — Panduan Kebutuhan Gizi Seimbang Harian',
    publisher: 'Kementerian Kesehatan Republik Indonesia',
    year: '2024',
    url: 'https://ayosehat.kemkes.go.id/isi-piringku-kebutuhan-gizi-harian-seimbang',
    note: 'Porsi makan: 50% sayur dan buah, 50% makanan pokok dan lauk pauk.',
  },
  {
    id: 'kemenkes-ttd',
    title: 'Pedoman Pemberian Tablet Tambah Darah (TTD) bagi Remaja Putri',
    publisher: 'Kementerian Kesehatan Republik Indonesia',
    year: '2020',
    url: 'https://ayosehat.kemkes.go.id/pub/files/files283TTD_REMATRI_OK2.pdf',
    note: 'Remaja putri usia 12–18 tahun: 1 tablet tambah darah per minggu selama 52 minggu.',
  },
  {
    id: 'unicef-aksi-bergizi',
    title: 'Aksi Bergizi — Gizi Remaja Terintegrasi',
    publisher: 'UNICEF Indonesia bersama Kementerian Kesehatan RI',
    year: '2019',
    url: 'https://www.unicef.org/indonesia/id/laporan/aksi-bergizi',
    note: 'Suplementasi TTD mingguan, edukasi makan sehat, dan aktivitas fisik berbasis sekolah.',
  },
  {
    id: 'who-pa-5-17',
    title: 'Global Recommendations on Physical Activity for Health (5–17 tahun)',
    publisher: 'World Health Organization (WHO)',
    year: '2011',
    url: 'https://www.who.int/publications/i/item/9789241599979',
    note: 'Aktivitas fisik sedang–berat minimal 60 menit per hari; penguatan otot dan tulang minimal 3 kali per minggu.',
  },
  {
    id: 'who-pa-2020',
    title: 'WHO Guidelines on Physical Activity and Sedentary Behaviour',
    publisher: 'World Health Organization (WHO)',
    year: '2020',
    url: 'https://www.who.int/publications/i/item/9789240015128',
    note: 'Rekomendasi aktivitas fisik, perilaku sedentari (termasuk waktu layar), dan jam tidur anak & remaja.',
  },
  {
    id: 'movement-24h',
    title: '24-Hour Movement Guidelines for Children and Young People (5–17 tahun)',
    publisher: 'Australian Government Department of Health, Disability and Ageing',
    year: '2021',
    url: 'https://www.health.gov.au/topics/physical-activity-and-exercise/physical-activity-and-exercise-guidelines-for-all-australians/recommendations-for-children-and-young-people-5-to-17-years',
    note: 'Tidur 9–11 jam (5–13 tahun) dan 8–10 jam (14–17 tahun); batasi waktu layar hiburan maksimal 2 jam per hari.',
  },
  {
    id: 'who-mental-health',
    title: 'Mental Health of Adolescents (Fact Sheet)',
    publisher: 'World Health Organization (WHO)',
    year: '2024',
    url: 'https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health',
    note: 'Faktor yang memengaruhi kesehatan mental remaja dan pentingnya dukungan keluarga serta deteksi dini.',
  },
  {
    id: 'who-growth-5-19',
    title: 'Growth Reference Data for 5–19 Years (WHO Reference 2007)',
    publisher: 'World Health Organization (WHO)',
    year: '2007',
    url: 'https://www.who.int/tools/growth-reference-data-for-5to19-years',
    note: 'Tabel LMS tinggi badan menurut umur, IMT menurut umur (5–19 tahun) dan berat badan menurut umur (5–10 tahun).',
  },
  {
    id: 'permenkes-2-2020',
    title: 'Permenkes No. 2 Tahun 2020 tentang Standar Antropometri Anak',
    publisher: 'Kementerian Kesehatan Republik Indonesia',
    year: '2020',
    url: 'https://peraturan.bpk.go.id/Details/152505/permenkes-no-2-tahun-2020',
    note: 'Kategori dan ambang batas status gizi anak usia 5–18 tahun berdasarkan The WHO Reference 2007.',
  },
  {
    id: 'kia-2024',
    title: 'Buku Kesehatan Ibu dan Anak (Buku KIA) 2024',
    publisher: 'Kementerian Kesehatan Republik Indonesia',
    year: '2024',
    url: 'https://kesprimkom.kemkes.go.id/assets/uploads/contents/others/Buku_KIA_2024.pdf',
    note: 'Rujukan pemantauan tumbuh kembang usia 0–6 tahun dan kebiasaan hidup sehat keluarga.',
  },
]

export function referenceById(id: string): Reference {
  return SCHOOL_REFERENCES.find((r) => r.id === id) ?? SCHOOL_REFERENCES[0]
}
