CREATE DATABASE IF NOT EXISTS company_db CHARACTER SET utf8mb4;
USE company_db;

-- Proyek yang tampil di halaman /portfolio
CREATE TABLE IF NOT EXISTS portfolio (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(150) NOT NULL,
  kategori VARCHAR(50) NOT NULL,
  deskripsi TEXT,
  gambar VARCHAR(255),              -- path file, contoh: uploads/1730000000-123.jpg
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Pesan dari form di halaman /contact
CREATE TABLE IF NOT EXISTS contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(30),
  service VARCHAR(100),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Jika tabel portfolio versi lama sudah ada (masih punya kolom klien):
-- ALTER TABLE portfolio DROP COLUMN klien;