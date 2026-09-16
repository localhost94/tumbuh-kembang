export interface PubertyTrack {
  id: 'P' | 'L'
  label: string
  onset: string
  peak: string
  signs: string[]
  note: string
}

/**
 * Pubertas normal. Sumber: IDAI — "Masalah Pubertas pada Anak dan Remaja" dan
 * "Kapan Anak Dikatakan Mengalami Pubertas?".
 */
export const PUBERTY_TRACKS: PubertyTrack[] = [
  {
    id: 'P',
    label: 'Anak perempuan',
    onset: 'Pubertas dimulai pada usia 8–13 tahun',
    peak: 'Percepatan tinggi badan biasanya memuncak sekitar 1–2 tahun setelah payudara mulai tumbuh',
    signs: [
      'Awal: kuncup payudara (biasanya sisi pertama tidak selalu sama).',
      'Tumbuh rambut pubis dan rambut ketiak.',
      'Percepatan pertumbuhan tinggi badan (growth spurt).',
      'Menstruasi pertama (menarche), umumnya setelah pubertas berjalan cukup lanjut, rata-rata sekitar usia 12 tahun.',
      'Kulit dan rambut lebih berminyak, dapat timbul jerawat.',
    ],
    note: 'Siklus haid pada tahun pertama setelah menarche sering belum teratur — hal ini umumnya normal.',
  },
  {
    id: 'L',
    label: 'Anak laki-laki',
    onset: 'Pubertas dimulai pada usia 9–14 tahun',
    peak: 'Percepatan tinggi badan berlangsung lebih lama dan biasanya memuncak lebih lambat daripada anak perempuan',
    signs: [
      'Awal: pembesaran testis (sering tidak disadari), disusul pertumbuhan penis.',
      'Tumbuh rambut pubis, rambut ketiak, dan kemudian rambut wajah.',
      'Percepatan pertumbuhan tinggi badan (growth spurt).',
      'Suara memberat dan tumbuh jakun.',
      'Massa otot bertambah; kulit dan rambut lebih berminyak, dapat timbul jerawat.',
    ],
    note: 'Urutan tanda penting untuk dinilai; bila urutannya tidak wajar, konsultasikan ke dokter.',
  },
]

export const PUBERTY_ALERTS: string[] = [
  'Tanda pubertas muncul sebelum usia 8 tahun (anak perempuan) atau sebelum 9 tahun (anak laki-laki) — kemungkinan pubertas prekoks.',
  'Belum ada tanda pubertas sama sekali sampai usia 13 tahun (perempuan) atau 14 tahun (laki-laki).',
  'Perkembangan pubertas berjalan sangat cepat atau tidak berurutan.',
  'Menstruasi belum pernah terjadi sampai usia 15 tahun, atau haid sangat tidak teratur/berhenti.',
  'Nyeri hebat saat haid, perdarahan sangat banyak, atau keluhan yang mengganggu aktivitas.',
  'Orang tua atau anak merasa cemas dengan perubahan yang terjadi — jangan ragu berkonsultasi.',
]

export const PUBERTY_CARE: string[] = [
  'Mandi teratur, terutama setelah beraktivitas, dan gunakan sabun secukupnya.',
  'Cuci muka lembut dua kali sehari untuk mengurangi minyak dan jerawat; jangan memencet jerawat.',
  'Ajarkan cara membersihkan diri yang benar saat menstruasi dan mengganti pembalut secara teratur.',
  'Gunakan pakaian berbahan menyerap keringat dan ganti pakaian dalam setiap hari.',
  'Hormati privasi anak, dan dampingi dengan komunikasi yang terbuka tanpa menghakimi.',
]
