export interface NutritionStage {
  id: string
  label: string
  ageRange: string
  texture: string
  amount: string
  frequency: string
  energy: string
  fluid: string
  notes: string[]
}

/**
 * Pemenuhan gizi & MPASI dari Buku KIA 2024.
 */
export const NUTRITION_STAGES: NutritionStage[] = [
  {
    id: 'asi',
    label: 'ASI Eksklusif',
    ageRange: '0–6 bulan',
    texture: 'ASI saja',
    amount: 'Susui semau bayi (on demand)',
    frequency: 'Hari 1: 5–12 kali/24 jam · Hari 2–3: 10–12 kali · 1 minggu: ±8 kali · 1 bulan: 8–12 kali',
    energy: 'Tercukupi dari ASI',
    fluid: 'Cukup dari ASI',
    notes: [
      'Jangan tambahkan air putih, makanan, minuman, obat, vitamin atau mineral, kecuali dianjurkan dokter.',
      'Hindari penggunaan botol susu atau dot.',
      'Ukuran lambung: hari 1 sebesar kelereng, hari 2–3 bola pingpong, 1 minggu telur ayam, 1 bulan telur bebek.',
      'Temui tenaga kesehatan atau konselor menyusui bila ada masalah menyusui.',
    ],
  },
  {
    id: 'mpasi-6-8',
    label: 'MPASI 6–8 bulan',
    ageRange: '6–8 bulan',
    texture: 'Disaring — lumat dan kental',
    amount: '2–3 sdm bertahap hingga ½ mangkok ukuran 250 ml (125 ml) setiap kali makan',
    frequency: '2–3 kali makanan utama + 1–2 kali makanan selingan per hari',
    energy: '200 kkal/hari dari MPASI',
    fluid: '800 ml/hari (±3 gelas belimbing)',
    notes: [
      'Perkenalkan makanan satu per satu sambil memperhatikan alergi.',
      'Masak dengan cara direbus atau dikukus; hindari gorengan, pengawet, tinggi gula dan garam.',
      'Contoh: bubur pisang campur apel dan pir, bubur sup daging kacang merah, puding kentang ayam dan telur.',
    ],
  },
  {
    id: 'mpasi-9-11',
    label: 'MPASI 9–11 bulan',
    ageRange: '9–11 bulan',
    texture: 'Dicincang',
    amount: '½ – ¾ mangkok ukuran 250 ml (125–200 ml) setiap kali makan',
    frequency: '3–4 kali makanan utama + 1–2 kali makanan selingan per hari',
    energy: '300 kkal/hari dari MPASI',
    fluid: 'Bagian dari kebutuhan cairan harian',
    notes: [
      'Bahan makanan sama dengan untuk orang dewasa, tekstur dicincang.',
      'Perhatikan respons anak saat makan.',
      'Contoh: sup daging cincang, nasi tim ikan kembung telur puyuh, tim bubur manado daging dan udang.',
    ],
  },
  {
    id: 'mpasi-12-23',
    label: 'MPASI 12–23 bulan',
    ageRange: '12–23 bulan',
    texture: 'Masak biasa — diiris-iris',
    amount: '¾ – 1 mangkok ukuran 250 ml setiap kali makan',
    frequency: '3–4 kali makanan utama + 1–2 kali makanan selingan per hari',
    energy: '550 kkal/hari dari MPASI',
    fluid: '1.300 ml/hari (±5 gelas belimbing)',
    notes: [
      'Lanjutkan ASI hingga 2 tahun atau lebih.',
      'Bahan makanan sama dengan orang dewasa.',
      'Hindari: susu/yoghurt rendah lemak, minuman bersoda, makanan terlalu asam/pedas, tinggi gula/pemanis buatan, banyak MSG dan pengawet.',
    ],
  },
]

export interface NutritionPrinciple {
  title: string
  detail: string
}

export const MPASI_PRINCIPLES: NutritionPrinciple[] = [
  {
    title: '1. Tepat waktu',
    detail: 'MPASI diberikan mulai usia 6 bulan, saat ASI saja sudah tidak dapat memenuhi kebutuhan gizi bayi.',
  },
  {
    title: '2. Cukup sesuai kebutuhan (adekuat)',
    detail:
      'Mempertimbangkan jumlah, frekuensi, konsistensi/tekstur, dan variasi makanan: makanan pokok, protein hewani (diprioritaskan), protein nabati, lemak, serta buah dan sayur kaya vitamin A dan C.',
  },
  {
    title: '3. Aman',
    detail: 'Perhatikan kebersihan makanan dan peralatan; cuci tangan sebelum menyiapkan dan memberikan makanan.',
  },
  {
    title: '4. Diberikan dengan cara yang benar',
    detail:
      'Teratur (pagi, siang, sore/menjelang malam), lama makan maksimal 30 menit, lingkungan netral (tidak sambil bermain/menonton TV), ajari anak makan sendiri.',
  },
]

export interface AgeNutrition {
  ageLabel: string
  items: string[]
}

export const OLDER_CHILD_NUTRITION: AgeNutrition[] = [
  {
    ageLabel: '2–6 tahun',
    items: [
      'Gizi seimbang: makanan pokok, lauk hewani dan nabati, sayur, dan buah-buahan.',
      'Makan 3 kali sehari (pagi, siang, malam) bersama keluarga.',
      'Penuhi protein hewani: ikan, telur, ayam, daging, susu, dan hasil olahannya.',
      'Batasi makanan selingan yang terlalu manis, asin, dan berlemak.',
      'Kebutuhan cairan: usia 2–3 tahun ±1.300 ml/hari (±5 gelas belimbing); di atas 3 tahun 1.700 ml/hari (±7 gelas belimbing). Anak harus minum sedikitnya 5–7 gelas air per hari.',
      'Biasakan bermain dan aktivitas fisik setiap hari.',
    ],
  },
]

export interface Supplement {
  label: string
  age: string
  detail: string
}

export const SUPPLEMENTS: Supplement[] = [
  {
    label: 'Vitamin A kapsul biru',
    age: '6–11 bulan',
    detail: 'Diberikan 1 kali setahun untuk daya tahan tubuh dan kesehatan mata.',
  },
  {
    label: 'Vitamin A kapsul merah + obat cacing',
    age: '12–59 bulan',
    detail: 'Diberikan 2 kali setahun (bulan Februari dan Agustus).',
  },
]
