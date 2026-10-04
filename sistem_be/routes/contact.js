const router = require("express").Router();
const db = require("../db");

const wrap = (fn) => (req, res, next) => fn(req, res, next).catch(next);
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// Dashboard: daftar pesan masuk
router.get("/", wrap(async (req, res) => {
  const [rows] = await db.query("SELECT * FROM contact ORDER BY id DESC");
  res.json(rows);
}));

// Halaman /contact: kirim pesan
router.post("/", wrap(async (req, res) => {
  const { name, email, phone, service, message } = req.body;
  if (!name?.trim() || !email?.trim() || !message?.trim())
    return res.status(400).send("Nama, email, dan pesan wajib diisi");
  if (!emailOk(email)) return res.status(400).send("Format email tidak valid");
  if (name.length > 100 || email.length > 150 || message.length > 3000)
    return res.status(400).send("Isi form terlalu panjang");

  const [r] = await db.query(
    "INSERT INTO contact (name, email, phone, service, message) VALUES (?,?,?,?,?)",
    [name.trim(), email.trim(), phone?.trim() || null, service || null, message.trim()]
  );
  res.status(201).json({ id: r.insertId });
}));

// Dashboard: hapus pesan
router.delete("/:id", wrap(async (req, res) => {
  const [r] = await db.query("DELETE FROM contact WHERE id=?", [req.params.id]);
  if (!r.affectedRows) return res.status(404).send("Data tidak ditemukan");
  res.json({ ok: true });
}));

module.exports = router;