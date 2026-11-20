# gta6-clipper-01 — Klip GTA 6 untuk YouTube Shorts

Entry untuk bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01)
($500, 20 tempat berbayar). Skornya = jumlah views video YouTube yang
di-entry saat deadline (23 November 2026, 08:00 WIB).

## Klipnya

Satu momen dari **Grand Theft Auto VI Trailer 2** (resmi, channel YouTube
Rockstar Games, 6 Mei 2025) dipotong jadi Short vertikal 1080x1920
berdurasi 25–45 detik. Detik-detik pertama langsung menampilkan momen GTA 6
itu sebagai hook — langit Vice City di senja hari, Jason dan Lucia — lalu
klip beralih ke pitch make.fun sebagai teks di layar:

> Make clips like this with AI and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

File klip (`gta6-clipper-01.mp4`), poster, dan instruksi upload untuk Boss
ada di luar repo ini, di `clip/` workdir — repo ini hanya berisi program
dan alamat videonya.

## Momen yang dipilih

Pembuka Trailer 2: Jason di atap rumah saat matahari terbenam, langit
Vice City di belakangnya, lalu Lucia keluar dari penjara dan keduanya
bersama. Alasannya: tiga detik pertama sudah memberi tahu penonton ini
GTA 6 — kota, cahaya senja, dan dua tokoh utamanya — tanpa perlu konteks
apa pun, jadi orang yang sedang scroll Shorts langsung berhenti. Momen
ini juga yang paling banyak dibicarakan dari Trailer 2 sejak rilis.

## Spesifikasi klip

- Vertikal 1080x1920 (9:16), H.264 + AAC, MP4
- Durasi 25–45 detik (di bawah 60 detik, jadi Short)
- Audio trailer dipertahankan di bawah hook; bagian pitch boleh fade
- Teks pitch tampil 2–3 detik per baris, di dalam safe area (jauh dari
  tombol bawah/kanan YouTube)

## Cara menjalankan

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, stdlib saja, tanpa network) menyalin `VIDEO.json` dari
root repo ke direktori output. Dua run menulis byte yang identik.

## VIDEO.json

Berisi alamat video YouTube yang di-entry:

```json
{"url": "https://www.youtube.com/shorts/<id>"}
```

Saat ini masih placeholder: video belum di-upload. Setelah Boss meng-upload
klip sebagai Public Short dari channel mereka, alamat aslinya ditulis ke
`VIDEO.json` di follow-up.

## Deskripsi video (wajib, verbatim)

```text
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
Play code: makefun-capsule-aqua-grain
```

Video harus tetap Public sampai hasil keluar (7 Desember 2026). Views
tidak pernah dibeli dan tidak memakai bot — itu diskualifikasi.

## Lisensi

MIT — lihat `LICENSE`.
