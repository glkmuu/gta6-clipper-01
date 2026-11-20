// gta6-clipper-01 — entrypoint.
//
// Tugas program ini cuma satu: menyalin VIDEO.json dari root repo ke
// direktori output yang diminta grader. Tidak ada network, tidak ada jam,
// tidak ada file lain yang dibaca atau ditulis, jadi dua run selalu
// menghasilkan byte yang sama persis.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

function fail(message) {
  console.error(`gta6-clipper-01: ${message}`);
  process.exit(1);
}

let raw;
try {
  raw = readFileSync(join(botDir, "VIDEO.json"), "utf8");
} catch {
  fail("VIDEO.json tidak ditemukan di root repo.");
}

let parsed;
try {
  parsed = JSON.parse(raw);
} catch {
  fail("VIDEO.json bukan JSON yang valid.");
}

if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  fail("VIDEO.json harus berisi satu objek JSON.");
}

if (typeof parsed.url !== "string" || parsed.url.length === 0) {
  fail("VIDEO.json harus berisi field url berupa string tak kosong.");
}

// Bentuk alamat yang diterima house: youtube.com/shorts/<id>,
// youtube.com/watch?v=<id>, atau youtu.be/<id>. Placeholder starter
// (<id>) belum lolos gate — itu wajar sebelum video di-upload.
const youtubeShape =
  /^https:\/\/(www\.|m\.)?youtube\.com\/(shorts\/[A-Za-z0-9_-]{11}|watch\?v=[A-Za-z0-9_-]{11})/.test(
    parsed.url
  ) || /^https:\/\/youtu\.be\/[A-Za-z0-9_-]{11}/.test(parsed.url);

if (!youtubeShape) {
  console.error(
    "gta6-clipper-01: peringatan: url VIDEO.json belum berbentuk alamat video YouTube."
  );
}

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
} catch {
  fail("gagal menulis VIDEO.json ke direktori output.");
}
