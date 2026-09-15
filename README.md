# Tumbuh Kembang Anak

Website visual interaktif untuk memantau tumbuh kembang anak usia **0–6 tahun**, berdasarkan **Buku Kesehatan Ibu dan Anak (Buku KIA) 2024** terbitan Kementerian Kesehatan Republik Indonesia.

🌐 **Live:** [tumbuh.kusuma.dev](https://tumbuh.kusuma.dev)
🔗 **Sumber data:** [Buku KIA 2024 — Kementerian Kesehatan RI (PDF)](https://kesprimkom.kemkes.go.id/assets/uploads/contents/others/Buku_KIA_2024.pdf)

> Tanpa login. Tanpa backend. Semua konten dan perhitungan berjalan di browser.

---

## Fitur

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

## Sumber Data

| Data | Sumber |
| --- | --- |
| Tahapan usia, penanda perkembangan (SDIDTK), stimulasi, gizi/MPASI, tanda bahaya, perawatan | [Buku KIA 2024](https://kesprimkom.kemkes.go.id/assets/uploads/contents/others/Buku_KIA_2024.pdf), Kementerian Kesehatan RI |
| Tabel pertumbuhan 0–2 tahun (berat & panjang ideal) | Buku KIA 2024, hal. 130–131 |
| Jadwal imunisasi | Buku KIA 2024, hal. 124–125 |
| z-score & kategori status gizi 0–60 bulan | Standar Antropometri Anak — WHO Child Growth Standards (2006) / Permenkes No. 2 Tahun 2020 |

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
src/
├─ data/          # data Buku KIA 2024 & standar WHO (ageSegments, milestones, stimulation,
│                 # dangerSigns, nutrition, immunization, growth, whoGrowth, care, source)
├─ lib/           # logika z-score & kategori status gizi
├─ components/    # komponen UI (timeline usia, checklist, kurva, checker, dll.)
└─ App.tsx
```

## Catatan

Situs ini bersifat **edukatif** dan **bukan pengganti** konsultasi, diagnosis, atau penanganan oleh tenaga kesehatan. Bila anak menunjukkan tanda bahaya atau Anda memiliki kekhawatiran tentang tumbuh kembangnya, segera kunjungi Posyandu, Puskesmas, atau fasilitas kesehatan terdekat.
