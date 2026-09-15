export interface Vaccine {
  id: string
  name: string
  ageLabel: string
  /** usia dalam bulan; 0 = diberikan pada jam-jam pertama setelah lahir */
  ageMonth: number
  protects: string
  note?: string
}

/**
 * Jadwal imunisasi dasar bayi dan baduta (Buku KIA 2024, hal. 124–125).
 */
export const VACCINES: Vaccine[] = [
  {
    id: 'hb0',
    name: 'Hepatitis B (HB0)',
    ageLabel: '< 24 jam setelah lahir',
    ageMonth: 0,
    protects: 'Hepatitis B dan kanker hati',
    note: 'Diberikan sebelum 24 jam pertama.',
  },
  {
    id: 'bcg',
    name: 'BCG',
    ageLabel: '0–1 bulan',
    ageMonth: 1,
    protects: 'Tuberkulosis (TBC)',
  },
  {
    id: 'opv1',
    name: 'Polio Tetes 1 (OPV1)',
    ageLabel: '1 bulan',
    ageMonth: 1,
    protects: 'Polio (lumpuh layu)',
  },
  {
    id: 'dpt1',
    name: 'DPT-HB-Hib 1',
    ageLabel: '2 bulan',
    ageMonth: 2,
    protects: 'Difteri, pertusis, tetanus, hepatitis B, meningitis, pneumonia',
  },
  {
    id: 'opv2',
    name: 'Polio Tetes 2 (OPV2)',
    ageLabel: '2 bulan',
    ageMonth: 2,
    protects: 'Polio',
  },
  {
    id: 'rv1',
    name: 'Rotavirus (RV) 1',
    ageLabel: '2 bulan',
    ageMonth: 2,
    protects: 'Diare berat yang menyebabkan dehidrasi',
    note: 'Imunisasi RV harus dilengkapi sebelum usia 8 bulan.',
  },
  {
    id: 'pcv1',
    name: 'PCV 1',
    ageLabel: '2 bulan',
    ageMonth: 2,
    protects: 'Pneumonia akibat bakteri pneumokokus',
  },
  {
    id: 'dpt2',
    name: 'DPT-HB-Hib 2',
    ageLabel: '3 bulan',
    ageMonth: 3,
    protects: 'Difteri, pertusis, tetanus, hepatitis B, meningitis, pneumonia',
  },
  {
    id: 'opv3',
    name: 'Polio Tetes 3 (OPV3)',
    ageLabel: '3 bulan',
    ageMonth: 3,
    protects: 'Polio',
  },
  {
    id: 'rv2',
    name: 'Rotavirus (RV) 2',
    ageLabel: '3 bulan',
    ageMonth: 3,
    protects: 'Diare berat',
  },
  {
    id: 'pcv2',
    name: 'PCV 2',
    ageLabel: '3 bulan',
    ageMonth: 3,
    protects: 'Pneumonia',
  },
  {
    id: 'dpt3',
    name: 'DPT-HB-Hib 3',
    ageLabel: '4 bulan',
    ageMonth: 4,
    protects: 'Difteri, pertusis, tetanus, hepatitis B, meningitis, pneumonia',
  },
  {
    id: 'opv4',
    name: 'Polio Tetes 4 (OPV4)',
    ageLabel: '4 bulan',
    ageMonth: 4,
    protects: 'Polio',
  },
  {
    id: 'ipv1',
    name: 'Polio Suntik 1 (IPV1)',
    ageLabel: '4 bulan',
    ageMonth: 4,
    protects: 'Polio',
  },
  {
    id: 'rv3',
    name: 'Rotavirus (RV) 3',
    ageLabel: '4 bulan',
    ageMonth: 4,
    protects: 'Diare berat',
  },
  {
    id: 'mr1',
    name: 'Campak-Rubella (MR) 1',
    ageLabel: '9 bulan',
    ageMonth: 9,
    protects: 'Campak dan rubella (radang paru, radang otak, kebutaan)',
  },
  {
    id: 'ipv2',
    name: 'Polio Suntik 2 (IPV2)',
    ageLabel: '9 bulan',
    ageMonth: 9,
    protects: 'Polio',
  },
  {
    id: 'je',
    name: 'Japanese Encephalitis (JE)',
    ageLabel: '10 bulan',
    ageMonth: 10,
    protects: 'Radang otak (Japanese Encephalitis)',
    note: 'Hanya diberikan di provinsi/kabupaten/kota percontohan (daerah endemis).',
  },
  {
    id: 'pcv3',
    name: 'PCV 3',
    ageLabel: '12 bulan',
    ageMonth: 12,
    protects: 'Pneumonia',
  },
  {
    id: 'dpt4',
    name: 'DPT-HB-Hib Lanjutan (DPT-HB-Hib 4)',
    ageLabel: '18 bulan',
    ageMonth: 18,
    protects: 'Difteri, pertusis, tetanus, hepatitis B, meningitis, pneumonia',
    note: 'Imunisasi lanjutan memperpanjang masa perlindungan.',
  },
  {
    id: 'mr2',
    name: 'Campak-Rubella Lanjutan (MR 2)',
    ageLabel: '18 bulan',
    ageMonth: 18,
    protects: 'Campak dan rubella',
    note: 'Imunisasi lanjutan memperpanjang masa perlindungan.',
  },
]

export const VACCINE_BENEFITS: { name: string; detail: string }[] = [
  { name: 'BCG', detail: 'Mencegah penyakit TBC.' },
  {
    name: 'Polio',
    detail: 'Mencegah polio yang menyebabkan lumpuh layu pada tungkai dan/atau lengan.',
  },
  {
    name: 'DPT-HB-Hib',
    detail:
      'Mencegah difteri (penyumbatan jalan napas), pertusis/batuk rejan (batuk 100 hari), tetanus, hepatitis B, serta pneumonia dan meningitis (radang selaput otak) karena bakteri Hib.',
  },
  { name: 'PCV', detail: 'Mencegah pneumonia akibat bakteri pneumokokus.' },
  { name: 'RV (Rotavirus)', detail: 'Mencegah diare berat yang menyebabkan dehidrasi dan kematian.' },
  {
    name: 'Campak-Rubella',
    detail: 'Mencegah penularan penyakit yang dapat mengakibatkan radang paru, radang otak, dan kebutaan.',
  },
  { name: 'JE', detail: 'Mencegah anak dari penyakit radang otak (di daerah endemis).' },
]
