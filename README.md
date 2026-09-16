# Tumbuh Kembang Anak

Website visual interaktif untuk memantau tumbuh kembang anak:
- **Usia 0–6 tahun** (`index.html`) — berdasarkan **Buku Kesehatan Ibu dan Anak (Buku KIA) 2024** terbitan Kementerian Kesehatan Republik Indonesia.
- **Usia 6–14 tahun** (`anak-sekolah.html`) — anak usia sekolah & remaja awal, bersumber dari **IDAI, Kementerian Kesehatan RI, WHO, dan Permenkes No. 2 Tahun 2020**.

🌐 **Live:** [tumbuh.kusuma.dev](https://tumbuh.kusuma.dev) · [tumbuh.kusuma.dev/anak-sekolah.html](https://tumbuh.kusuma.dev/anak-sekolah.html)
🔗 **Sumber data 0–6 tahun:** [Buku KIA 2024 — Kementerian Kesehatan RI (PDF)](https://kesprimkom.kemkes.go.id/assets/uploads/contents/others/Buku_KIA_2024.pdf)

> Tanpa login. Tanpa backend. Semua konten dan perhitungan berjalan di browser.

---

## Fitur

### Panduan usia 0–6 tahun (`index.html`)

- **Panduan per usia** — 11 rentang usia: 0–28 hari, 1–3, 3–6, 6–9, 9–12, 12–18, 18–24 bulan, 2–3, 3–4, 4–5, dan 5–6 tahun. Geser usia untuk melihat:
  - yang akan dialami, yang harus dilakukan, dan mengapa penting;
  - penanda perkembangan (SDIDTK) dengan checklist interaktif dan progress ring;
  - ide stimulasi sesuai tahapan usia;
  - gizi & MPASI (porsi, tekstur, frekuensi, contoh menu);
  - tanda bahaya dan perawatan harian.
- **Cek pertumbuhan interaktif** — pilih **bulan & tahun lahir** (usia dihitung otomatis), masukkan berat dan panjang/tinggi badan:
  - z-score dan status gizi untuk **BB/U**, **PB/TB-U**, dan **IMT/U**;
  - kurva pertumbuhan 0–60 bulan (median, -2 SD, +2 SD) dan titik hasil ukur anak;
  - kategori status gizi menurut **Permenkes No. 2 Tahun 2020**.
- **Linimasa imunisasi** — 21 jenis imunisasi dasar & lanjutan beserta usia dan manfaatnya.
- **Tanda bahaya** — daftar lengkap per rentang usia.

### Panduan usia 6–14 tahun (`anak-sekolah.html`)

- **Panduan per usia** — 3 tahap: 6–9, 10–12, dan 13–14 tahun (yang dialami, yang perlu dilakukan, mengapa penting), lengkap dengan sumber tiap bagian.
- **Pubertas** — awitan dan urutan tanda pada anak perempuan & laki-laki (IDAI), kapan perlu ke dokter, dan kebersihan diri saat pubertas.
- **Gizi seimbang** — pedoman **Isi Piringku**, pencegahan **anemia** pada remaja putri, sumber zat besi, dan pedoman **Tablet Tambah Darah (TTD)**.
- **Imunisasi anak sekolah** — jadwal **BIAS** (Kemenkes) dan imunisasi lanjutan menurut **IDAI 2024**.
- **Gaya hidup** — aktivitas fisik, tidur, waktu layar, dan kesehatan mental (WHO), serta kebersihan diri.
- **Tanda yang perlu diperiksakan** — pertumbuhan & pubertas, gizi/anemia, penglihatan–pendengaran–gigi, dan kesehatan mental.
- **Cek pertumbuhan 5–19 tahun** — z-score **TB/U**, **IMT/U**, dan **BB/U** (5–10 tahun) dengan kurva 5–19 tahun, berdasarkan **WHO Reference 2007** dan **Permenkes No. 2 Tahun 2020**.
- **Daftar referensi** — seluruh sumber dapat dibuka langsung.

## Sumber Data

| Data | Sumber |
| --- | --- |
| Tahapan usia, penanda perkembangan (SDIDTK), stimulasi, gizi/MPASI, tanda bahaya, perawatan (0–6 th) | [Buku KIA 2024](https://kesprimkom.kemkes.go.id/assets/uploads/contents/others/Buku_KIA_2024.pdf), Kementerian Kesehatan RI |
| Tabel pertumbuhan 0–2 tahun (berat & panjang ideal) | Buku KIA 2024, hal. 130–131 |
| Jadwal imunisasi 0–6 tahun | Buku KIA 2024, hal. 124–125 |
| z-score & kategori status gizi 0–60 bulan | Standar Antropometri Anak — WHO Child Growth Standards (2006) / Permenkes No. 2 Tahun 2020 |
| Pubertas, imunisasi lanjutan usia sekolah | [IDAI](https://www.idai.or.id) — Jadwal Imunisasi 0–18 Tahun (2024), artikel pubertas |
| Jadwal imunisasi anak sekolah (BIAS) | [Kemenkes — Ayo Sehat](https://ayosehat.kemkes.go.id/bulan-imunisasi-anak-sekolah-bias) |
| Gizi seimbang, anemia & TTD remaja putri | Kemenkes (Isi Piringku, Pedoman TTD) & UNICEF (Aksi Bergizi) |
| Aktivitas fisik, tidur, waktu layar, kesehatan mental | [WHO](https://www.who.int) & 24-Hour Movement Guidelines |
| Tabel LMS cek pertumbuhan 5–19 tahun | [WHO Reference 2007](https://www.who.int/tools/growth-reference-data-for-5to19-years) — z-score expanded tables |
| Kategori status gizi 5–18 tahun | Permenkes No. 2 Tahun 2020 tentang Standar Antropometri Anak |


## Menjalankan Secara Lokal

```bash
npm install
npm run dev      # buka http://localhost:5173
```

Perintah lain:

```bash
npm run build      # typecheck + build produksi ke dist/
npm run preview    # pratinjau hasil build
npm run typecheck  # cek tipe TypeScript
```

## Teknologi

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- Grafis 100% SVG (kurva, bentuk geometris, ikon objek) — tanpa gambar foto maupun ilustrasi makhluk hidup
- Progres checklist disimpan di `localStorage` browser (tanpa login)

## Struktur Proyek

```
index.html          # halaman usia 0–6 tahun (Buku KIA 2024)
anak-sekolah.html   # halaman usia 6–14 tahun (IDAI/Kemenkes/WHO)
src/
├─ data/            # data 0–6 th (ageSegments, milestones, stimulation, dangerSigns,
│                   # nutrition, immunization, growth, whoGrowth, care, source)
│                   # + data 6–14 th (schoolAge, puberty, schoolNutrition, schoolImmunization,
│                   #   schoolLifestyle, schoolDangerSigns, schoolSources, whoGrowth5to19)
├─ lib/             # logika z-score & kategori status gizi (0–60 bulan & 5–19 tahun)
├─ components/      # komponen UI (timeline usia, checklist, kurva, checker, dll.)
│  └─ school/       # komponen halaman usia sekolah
├─ App.tsx          # shell halaman 0–6 tahun
└─ SchoolApp.tsx    # shell halaman 6–14 tahun
```

## Catatan

Kedua halaman bersifat **edukatif** dan **bukan pengganti** konsultasi, diagnosis, atau penanganan oleh tenaga kesehatan. Bila anak menunjukkan tanda bahaya atau Anda memiliki kekhawatiran tentang tumbuh kembangnya, segera kunjungi Posyandu, Puskesmas, atau fasilitas kesehatan terdekat.
