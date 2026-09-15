export interface DangerGroup {
  id: string
  title: string
  note: string
  items: string[]
  appliesTo: string
}

/**
 * Tanda bahaya dari Buku KIA 2024.
 */
export const DANGER_GROUPS: DangerGroup[] = [
  {
    id: 'neonatal',
    title: 'Tanda bahaya bayi 0–28 hari',
    note: 'Jika bayi mengalami tanda bahaya, segera periksa ke bidan/dokter/perawat.',
    appliesTo: 'Bayi baru lahir sampai 28 hari',
    items: [
      'Diare.',
      'Demam/panas tinggi.',
      'Dingin.',
      'Kulit dan mata kuning.',
      'Lemah.',
      'Kejang.',
      'Muntah-muntah.',
      'Sesak napas.',
      'Menangis atau merintih terus menerus.',
      'Tali pusat kemerahan sampai dinding perut, berbau bernanah.',
      'Tinja bayi saat buang air besar berwarna pucat.',
      'Tidak mau menyusu.',
    ],
  },
  {
    id: 'balita',
    title: 'Tanda bahaya balita 29 hari – 5 tahun',
    note: 'Jika bayi/anak mengalami tanda bahaya, segera periksa ke bidan/dokter/perawat.',
    appliesTo: 'Anak usia 29 hari sampai 5 tahun',
    items: [
      'Tidak bisa minum.',
      'Tampak biru (sianosis).',
      'Sesak napas.',
      'Demam/panas tinggi.',
      'Kejang.',
      'Diare.',
      'Pembengkakan yang nyeri di belakang telinga.',
      'Muntah-muntah.',
      'Pendarahan di hidung/kulit/BAB.',
    ],
  },
  {
    id: 'harian',
    title: 'Pemantauan harian/mingguan oleh ibu',
    note: 'Cek kondisi anak secara berkala. Beri tanda centang bila muncul, lalu segera ke Puskesmas untuk diperiksa.',
    appliesTo: 'Checklist pemantauan kondisi anak',
    items: [
      'Sesak napas/napas cepat/dada tertarik ke dalam.',
      'Batuk dengan bunyi grok-grok/mengi.',
      'Suhu tubuh panas > 38,5°C atau ada tanda pendarahan (mimisan, gusi berdarah, muntah kopi, BAB hitam).',
      'BAB lebih sering/lebih encer, mata cekung, haus minum lahap, atau diare disertai darah.',
      'Jumlah air kencing sedikit/tidak kencing selama 6 jam, warna kuning pekat atau kecoklatan.',
      'Warna kulit tampak biru/memar di sekitar mulut/tangan/kaki.',
      'Aktivitas tampak lemah/tidak bergerak/menangis/merintih.',
      'Hisapan lemah, muntah susu/cairan hijau, kencing < 6x/hari.',
      'Tidak mau makan/minum, berat badan tidak naik sesuai pertumbuhan.',
    ],
  },
]
