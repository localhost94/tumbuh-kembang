export interface IsiPiringku {
  label: string
  pct: number
  detail: string
}

/**
 * Pedoman "Isi Piringku". Sumber: Kementerian Kesehatan RI — Ayo Sehat.
 */
export const ISI_PIRINGKU: IsiPiringku[] = [
  {
    label: 'Sayur & buah',
    pct: 50,
    detail: 'Setengah piring berisi sayur dan buah, dengan porsi sayur lebih banyak daripada buah.',
  },
  {
    label: 'Makanan pokok & lauk pauk',
    pct: 50,
    detail: 'Setengah piring berisi makanan pokok dan lauk pauk, dengan porsi makanan pokok lebih banyak daripada lauk pauk.',
  },
]

export const ISI_PIRINGKU_TIPS: string[] = [
  'Utamakan protein hewani (ikan, telur, ayam, daging, susu) untuk mendukung pertumbuhan.',
  'Variasikan makanan pokok, lauk, sayur, dan buah agar semua zat gizi terpenuhi.',
  'Batasi gula, garam, dan lemak; kurangi minuman manis dan makanan olahan.',
  'Biasakan sarapan sebelum sekolah agar anak berkonsentrasi dan tidak lemas.',
  'Pilih jajanan sehat di kantin dan cukupi air putih setiap hari.',
]

export const IRON_SOURCES: string[] = [
  'Sumber zat besi hewani: daging merah, hati, ikan, ayam, dan telur.',
  'Sumber zat besi nabati: kacang-kacangan, bayam, dan sayuran hijau.',
  'Penyerap zat besi: buah/sayur kaya vitamin C seperti jeruk, jambu, dan tomat.',
  'Penghambat penyerapan: teh dan kopi yang diminum berdekatan dengan makanan sumber zat besi.',
]

/**
 * Pencegahan anemia pada remaja putri. Sumber: Kemenkes — Pedoman Pemberian TTD bagi Remaja Putri;
 * UNICEF Indonesia — Aksi Bergizi.
 */
export const ANEMIA_FACTS: string[] = [
  'Anemia adalah kadar hemoglobin (Hb) darah di bawah normal sehingga tubuh mudah lemas dan sulit berkonsentrasi.',
  'Remaja putri berisiko tinggi karena kehilangan zat besi setiap kali menstruasi.',
  'Anemia menurunkan konsentrasi belajar, daya ingat, dan prestasi sekolah.',
  'Anemia pada remaja putri berisiko berlanjut dan membahayakan kehamilan di kemudian hari.',
  'Deteksi dini dilakukan melalui pemeriksaan Hb, termasuk skrining di sekolah.',
]

export const ANEMIA_SIGNS: string[] = [
  'Mudah lelah, lemas, dan pusing.',
  'Wajah, kelopak mata, dan bibir tampak pucat.',
  'Sulit berkonsentrasi saat belajar.',
  'Napas cepat saat beraktivitas ringan.',
]

export const TTD_GUIDELINES = {
  target: 'Remaja putri usia 12–18 tahun (kelas 7–12) atau sederajat.',
  dose: '1 tablet tambah darah (60 mg besi elemental + 0,25 mg asam folat) per minggu.',
  duration: 'Diminum rutin selama 52 minggu (satu tahun).',
  howTo: [
    'Minum dengan air putih, sebaiknya setelah makan untuk mengurangi mual.',
    'Hindari minum bersama teh, kopi, atau susu karena menurunkan penyerapan zat besi.',
    'Jika lupa, minum di hari berikutnya dan lanjutkan jadwal mingguan.',
    'Konsultasikan ke tenaga kesehatan bila muncul keluhan.',
  ],
}

export const SUPPLEMENT_NOTES: string[] = [
  'Vitamin A rutin dan obat cacing di Buku KIA ditujukan untuk usia 6–59 bulan.',
  'Anak usia sekolah tetap perlu gizi seimbang; pemberian suplemen lain sesuai anjuran tenaga kesehatan.',
]
