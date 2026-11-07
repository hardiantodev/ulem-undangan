# Template Undangan Pernikahan Digital (Bahasa Indonesia)

Template undangan pernikahan berbasis Next.js, React, dan TypeScript. Proyek ini dapat diekspor menjadi website statis dan dipublikasikan melalui GitHub Pages.

## Fitur
- Informasi nama mempelai, tanggal, lokasi, dan kata pengantar
- Galeri foto
- Informasi rekening hadiah dengan tombol salin nomor rekening
- Berbagi undangan melalui WhatsApp
- Salin tautan undangan
- Deployment otomatis melalui GitHub Actions

## Mengubah data undangan
Edit file `src/data.json`. Ganti nama mempelai, tanggal, lokasi, kata pengantar, nama orang tua, dan nomor rekening sesuai kebutuhan. Data di dalam file saat ini hanya contoh.

## Menjalankan di komputer
Pastikan Node.js 20 atau lebih baru sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Publikasi ke GitHub Pages
1. Buat repository GitHub dan unggah seluruh isi folder proyek (bukan folder induknya).
2. Pastikan workflow GitHub Actions di `.github/workflows/build-and-deploy.yml` aktif.
3. Pada pengaturan repository, buka **Settings → Pages** dan pilih deployment dari branch `gh-pages` (folder root), jika workflow sudah berhasil.
4. Setiap push ke branch `master` akan menjalankan build dan deployment.

Catatan: konfigurasi path GitHub Pages untuk repository proyek dapat memerlukan penyesuaian `basePath` di `next.config.mjs`, sesuai nama repository.

## Catatan
- Gambar, video, dan aset desain berada di `public/assets/`. Silakan ganti dengan foto dan video milik sendiri.
- Peta lokasi saat ini masih berupa gambar contoh di `public/assets/LocationMap.png`.
- RSVP/konfirmasi kehadiran dan penyimpanan ucapan tamu belum tersedia; fitur tersebut memerlukan backend atau layanan database tambahan.
