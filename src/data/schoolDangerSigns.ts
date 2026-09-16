export interface SchoolAlertGroup {
  id: string
  title: string
  appliesTo: string
  items: string[]
  sourceIds: string[]
}

/**
 * Tanda yang perlu diperiksakan pada anak usia sekolah & remaja awal.
 * Sumber: IDAI, Kemenkes (Aksi Bergizi/anemia), dan WHO (kesehatan mental remaja).
 */
export const SCHOOL_ALERTS: SchoolAlertGroup[] = [
  {
    id: 'tumbuh',
    title: 'Pertumbuhan & pubertas',
    appliesTo: 'Seluruh usia 6–14 tahun',
    items: [
      'Tinggi badan tidak bertambah dalam satu tahun atau pertumbuhan terlihat berhenti.',
      'Berat badan turun drastis tanpa sebab jelas.',
      'Tanda pubertas muncul sebelum usia 8 tahun (perempuan) atau 9 tahun (laki-laki).',
      'Belum ada tanda pubertas sampai usia 13 tahun (perempuan) atau 14 tahun (laki-laki).',
      'Berat badan berlebih atau obesitas yang tidak terkendali.',
    ],
    sourceIds: ['idai-pubertas', 'idai-kapan-pubertas', 'permenkes-2-2020'],
  },
  {
    id: 'gizi',
    title: 'Gizi & anemia',
    appliesTo: 'Terutama remaja putri',
    items: [
      'Tampak pucat pada wajah, kelopak mata, atau bibir.',
      'Mudah lelah, lemas, pusing, dan sulit berkonsentrasi belajar.',
      'Napas cepat atau berdebar saat aktivitas ringan.',
      'Nafsu makan sangat berkurang atau sebaliknya makan berlebihan.',
      'Nyeri hebat saat haid atau perdarahan yang sangat banyak.',
    ],
    sourceIds: ['kemenkes-ttd', 'unicef-aksi-bergizi'],
  },
  {
    id: 'indera',
    title: 'Penglihatan, pendengaran & gigi',
    appliesTo: 'Hasil penjaringan kesehatan sekolah',
    items: [
      'Sering menyipitkan mata, mendekatkan buku, atau mengeluh tidak jelas melihat papan tulis.',
      'Sering minta ulang ucapan, menaikkan volume, atau keluhan nyeri/berdenging di telinga.',
      'Gigi berlubang, gusi berdarah, atau nyeri gigi.',
      'Keluhan mata merah, berair, atau pandangan kabur yang menetap.',
    ],
    sourceIds: ['kemenkes-bias', 'kia-2024'],
  },
  {
    id: 'mental',
    title: 'Kesehatan mental & perilaku',
    appliesTo: 'Seluruh usia 6–14 tahun',
    items: [
      'Sedih atau murung berkepanjangan, mudah marah, atau menarik diri dari keluarga dan teman.',
      'Penurunan prestasi sekolah yang menetap atau tidak mau pergi sekolah.',
      'Tanda gangguan makan: takut makan, diet berlebihan, atau muntah setelah makan.',
      'Gangguan tidur menetap atau kehilangan minat pada hal yang biasanya disukai.',
      'Sering mengeluh sakit (kepala, perut) tanpa sebab medis yang jelas.',
    ],
    sourceIds: ['who-mental-health'],
  },
  {
    id: 'umum',
    title: 'Perlu segera ke fasilitas kesehatan',
    appliesTo: 'Segera',
    items: [
      'Demam tinggi yang tidak membaik atau demam berkepanjangan.',
      'Sakit kepala hebat dan berulang, terutama disertai muntah atau gangguan penglihatan.',
      'Sesak napas atau nyeri dada saat beraktivitas.',
      'Kejang, penurunan kesadaran, atau kelemahan mendadak.',
      'Sesak napas, penurunan kesadaran, pucat sangat berat, atau perdarahan hebat.',
    ],
    sourceIds: ['kia-2024', 'who-mental-health'],
  },
]
