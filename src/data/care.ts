export interface CareItem {
  id: string
  title: string
  items: string[]
}

/**
 * Perawatan & pola asuh anak dari Buku KIA 2024, dikelompokkan per tema.
 */
export const CARE_GROUPS: CareItem[] = [
  {
    id: 'hangat',
    title: 'Menjaga bayi tetap hangat (0–28 hari)',
    items: [
      'Mandikan bayi dengan air hangat 6 jam setelah lahir dengan syarat kondisi stabil.',
      'Sebelum tali pusat lepas, mandikan bayi dengan dilap.',
      'Setelah tali pusat lepas, bayi dapat dimandikan dengan dimasukkan ke air — hati-hati agar kepala tidak terendam.',
      'Bersihkan kemaluan bayi dari depan ke belakang dengan kapas basah air bersih atau handuk bersih basah.',
      'Beri pakaian dan selimuti setiap saat; pakaikan topi, kaos kaki, dan kaos tangan bila dingin.',
      'Segera ganti baju dan popok jika basah.',
      'Lakukan perawatan metode kanguru jika berat badan bayi < 2.500 gram.',
      'Usahakan lingkungan udara sejuk: arah kipas tidak langsung ke bayi, suhu AC sekitar 25–26°C.',
    ],
  },
  {
    id: 'tali-pusat',
    title: 'Cara merawat tali pusat',
    items: [
      'Cuci tangan dengan sabun dan air mengalir sebelum dan sesudah memegang bayi.',
      'Jangan memberikan apapun pada tali pusat.',
      'Rawat tali pusat terbuka dan kering.',
      'Jika kotor/basah, cuci dengan air bersih dan sabun, lalu keringkan.',
    ],
  },
  {
    id: 'gigi',
    title: 'Perawatan gigi sesuai usia',
    items: [
      '3–6 bulan: bersihkan gusi anak secara perlahan dengan kain atau lap basah yang dilingkarkan pada jari telunjuk ibu.',
      '9 bulan: gigi seri 8 buah dan geraham 4 buah. Bersihkan gigi dengan kasa dan air hangat plus sedikit pasta gigi anak.',
      '18 bulan: gigi susu berjumlah 16 buah.',
      '24 bulan: gigi susu berjumlah 20 buah. Gosok gigi setelah sarapan dan sebelum tidur; pasta gigi berfluor selapis tipis (½ biji kacang polong).',
      '2–6 tahun: dampingi anak menyikat gigi 2 menit sampai usia 8 tahun; pasta gigi seukuran 1 biji kacang polong.',
      '5–6 tahun: mulai tumbuh 2 gigi geraham tetap rahang bawah; periksakan gigi setiap 3–6 bulan.',
      'Hindari kebiasaan minum susu botol sambil tiduran, menghisap ibu jari/dot, dan makanan manis lengket di antara waktu makan.',
    ],
  },
  {
    id: 'tidur',
    title: 'Kebutuhan tidur',
    items: [
      'Bayi 0–28 hari: pola tidur sampai dengan 16 jam sehari; tidur terlentang, alas rata, jauhkan benda yang menutupi kepala, gunakan kelambu.',
      'Bayi 4–12 bulan: perlu tidur 12–16 jam sehari (termasuk tidur siang).',
      'Anak 1–2 tahun: perlu tidur 11–14 jam sehari (termasuk tidur siang).',
      'Anak 3–5 tahun: perlu tidur 10–13 jam sehari (termasuk tidur siang).',
    ],
  },
  {
    id: 'gawai',
    title: 'Aturan gawai (screen time)',
    items: [
      'Bayi/anak < 18 bulan tidak menggunakan gawai kecuali video-chatting dengan pendampingan orang tua.',
      'Anak 18–24 bulan: hanya konten berkualitas, tidak lebih dari 1 jam per hari, didampingi orang tua.',
      'Anak > 24 bulan: batasi tidak lebih dari 1 jam per hari, pilih konten berkualitas, dan dampingi.',
      'Jangan gunakan gawai saat makan dan pada 1 jam sebelum tidur.',
      'Penggunaan gawai berlebih berdampak keterlambatan bicara dan bahasa, kurang interaksi, tantrum, dan gangguan kognitif.',
    ],
  },
  {
    id: 'bersih',
    title: 'Kebersihan & keselamatan (semua usia)',
    items: [
      'Biasakan cuci tangan pakai sabun (setelah BAB, sebelum memegang/menyusui bayi, setelah menceboki, sebelum makan/menyuapi, setelah bersin/batuk, saat tangan kotor).',
      'Cuci tangan dan kaki anak dengan air bersih dan sabun setiap habis bermain.',
      'Gunting kuku tangan dan kaki secara teratur.',
      'Jauhkan anak dari paparan asap rokok.',
      'Lindungan anak dari risiko jatuh, kecelakaan, kekerasan, dan penelantaran.',
      'Anak 3–6 tahun: ajari menjaga bagian pribadinya untuk menghindari pelecehan.',
    ],
  },
  {
    id: 'pengasuhan',
    title: 'Pengasuhan positif',
    items: [
      'Pengasuhan penuh kasih sayang menimbulkan rasa aman, bahagia, dan percaya.',
      'Tangisan bayi berarti butuh bantuan — jangan biarkan menangis lama karena membuat stres.',
      'Ayah dan ibu bekerja sama menerapkan pengasuhan yang tegas dan penuh kasih sayang.',
      'Kenali dan kelola emosi orang tua; atur harapan dan prioritas; tetap lakukan hobi.',
      'Anak 1,5–3 tahun: hargai kemampuannya, dorong bergerak bebas, ajak bicara dengan kalimat pendek bermakna, latih sopan santun dan disiplin sederhana.',
      'Anak 3–6 tahun: beri kepercayaan mandiri, dampingi saat takut, dan ajari konsep perbedaan laki-laki dan perempuan.',
    ],
  },
]
