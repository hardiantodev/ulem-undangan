# ULEM — Undangan Pernikahan Digital

Template undangan digital bernuansa **Brown Traditional** dengan bahasa Indonesia, responsif untuk ponsel, dan siap dipublikasikan melalui GitHub Pages.

## Mengubah data undangan

Edit `src/data.json`, lalu sesuaikan:
- Nama dan panggilan kedua mempelai serta nama orang tua.
- Tanggal, waktu akad dan resepsi.
- Nama gedung, alamat, dan tautan Google Maps.
- Nomor rekening dan WhatsApp (format internasional tanpa `+`, contoh `62812...`).

## Mengganti foto

Ganti file berikut dengan foto milik pasangan (gunakan nama file yang sama agar tidak perlu mengubah kode):
- `public/assets/Gallery_Photo_1.png` sampai `Gallery_Photo_6.png`
- Foto cover memakai `public/assets/BackgroundVideo.mp4` sebagai aset lama; untuk hasil terbaik, ganti file video ini dengan video/foto latar milik sendiri.

Foto profil pada bagian mempelai saat ini memakai dua gambar galeri pertama sebagai placeholder.

## Menjalankan lokal

```bash
npm install
npm run dev
```

## GitHub Pages

Repository sudah menggunakan Next.js static export dan workflow GitHub Actions. Setelah perubahan diunggah ke branch `main`, workflow akan membangun folder `out` dan menerbitkannya ke branch `gh-pages`. Pastikan Settings → Pages → Source `Deploy from a branch`, branch `gh-pages`, folder `/ (root)`.

## Catatan fitur

Tombol RSVP dan berbagi menggunakan WhatsApp. Buku tamu/RSVP tersimpan memerlukan backend terpisah seperti Google Sheets melalui Google Apps Script; GitHub Pages sendiri hanya menyajikan file statis.
