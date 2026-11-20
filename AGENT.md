# AGENT.md — gta6-clipper-01

Entry bounty make.fun "Clip GTA 6 for the most YouTube views" ($500).

## Yang ada di repo ini

- `main.ts` — program entry (Node 22, stdlib saja). Menyalin `VIDEO.json`
  ke direktori output (`MAKEFUN_OUTPUT_DIR`). Itu saja tugasnya.
- `VIDEO.json` — alamat video YouTube yang di-entry. Placeholder sampai
  video di-upload, lalu diganti alamat aslinya.
- `README.md` — penjelasan entry untuk manusia.
- `LICENSE` — MIT.

## Aturan main

- Klip dibuat dari footage resmi (Grand Theft Auto VI Trailer 2, channel
  YouTube Rockstar Games). Jangan pakai klip jadi buatan orang lain.
- Klip: vertikal 1080x1920, 25–45 detik, hook momen GTA 6 di awal, lalu
  pitch make.fun sebagai teks di layar ("Make clips like this with AI and
  earn money on make.fun" + "make.fun/bounty/gta6-clipper-01").
- Video di-upload Public sebagai Short, dipertahankan publik sampai hasil
  keluar (7 Desember 2026). Deskripsi wajib memuat baris bounty dan play
  code `makefun-capsule-aqua-grain` (lihat README.md).
- Jangan pernah beli views atau pakai bot/view service.
- Jangan upload ke YouTube dari sesi ini — tidak ada channel dan tidak ada
  kredensial. Serahkan file klip + judul + deskripsi ke Boss untuk upload.
- Jangan pernah minta atau pakai password/key/token YouTube/Google.
- Jangan commit file video, poster, atau footage ke repo ini.
- Jangan push — koordinator yang push via Git Data API.

## Tes lokal

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Harus exit 0 dan `out/VIDEO.json` byte-identik dengan `VIDEO.json`.
