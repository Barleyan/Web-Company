const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const db = require("../db");

// Teruskan error async ke penangan error di server.js
const wrap = (fn) => (req, res, next) => fn(req, res, next).catch(next);

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + Math.round(Math.random() * 1e6) + path.extname(file.originalname)),
});
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB
  fileFilter: (req, file, cb) =>
    file.mimetype.startsWith("image/") ? cb(null, true) : cb(new Error("File harus berupa gambar")),
});

const hapusFile = (p) => p && fs.unlink(p, () => {});

// Halaman web & dashboard: daftar proyek
router.get("/", wrap(async (req, res) => {
  const [rows] = await db.query("SELECT * FROM portfolio ORDER BY id DESC");
  res.json(rows);
}));

// Dashboard: tambah proyek (multipart/form-data)
router.post("/", upload.single("gambar"), wrap(async (req, res) => {
  const { judul, kategori, deskripsi } = req.body;
  if (!judul?.trim() || !kategori?.trim()) {
    hapusFile(req.file && "uploads/" + req.file.filename);
    return res.status(400).send("Judul dan kategori wajib diisi");
  }
  const gambar = req.file ? "uploads/" + req.file.filename : null;
  const [r] = await db.query(
    "INSERT INTO portfolio (judul, kategori, deskripsi, gambar) VALUES (?,?,?,?)",
    [judul.trim(), kategori.trim(), deskripsi?.trim() || null, gambar]
  );
  res.status(201).json({ id: r.insertId });
}));

// Dashboard: ubah proyek (foto lama dipertahankan jika tidak upload baru)
router.put("/:id", upload.single("gambar"), wrap(async (req, res) => {
  const [[lama]] = await db.query("SELECT gambar FROM portfolio WHERE id=?", [req.params.id]);
  if (!lama) {
    hapusFile(req.file && "uploads/" + req.file.filename);
    return res.status(404).send("Data tidak ditemukan");
  }
  const { judul, kategori, deskripsi } = req.body;
  if (!judul?.trim() || !kategori?.trim()) {
    hapusFile(req.file && "uploads/" + req.file.filename);
    return res.status(400).send("Judul dan kategori wajib diisi");
  }
  let gambar = lama.gambar;
  if (req.file) { hapusFile(lama.gambar); gambar = "uploads/" + req.file.filename; }
  await db.query(
    "UPDATE portfolio SET judul=?, kategori=?, deskripsi=?, gambar=? WHERE id=?",
    [judul.trim(), kategori.trim(), deskripsi?.trim() || null, gambar, req.params.id]
  );
  res.json({ ok: true });
}));

// Dashboard: hapus proyek beserta file fotonya
router.delete("/:id", wrap(async (req, res) => {
  const [[lama]] = await db.query("SELECT gambar FROM portfolio WHERE id=?", [req.params.id]);
  if (!lama) return res.status(404).send("Data tidak ditemukan");
  await db.query("DELETE FROM portfolio WHERE id=?", [req.params.id]);
  hapusFile(lama.gambar);
  res.json({ ok: true });
}));

module.exports = router;