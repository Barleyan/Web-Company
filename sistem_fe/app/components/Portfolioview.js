"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fileUrl } from "../lib/api";

function Thumb({ p, big }) {
  return (
    <div className={big ? "pf-thumb pf-thumb--big" : "pf-thumb"}>
      {p.gambar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={fileUrl(p.gambar)} alt={p.judul} />
      ) : (
        <span className="pf-thumb__empty" aria-hidden="true">{p.judul.charAt(0)}</span>
      )}
    </div>
  );
}

export default function PortfolioView({ projects }) {
  const [filter, setFilter] = useState("Semua");
  const [open, setOpen] = useState(null);

  const kategori = ["Semua", ...new Set(projects.map((p) => p.kategori))];
  const list = filter === "Semua" ? projects : projects.filter((p) => p.kategori === filter);

  // Tutup modal dengan Esc & kunci scroll saat modal terbuka
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (projects.length === 0) return <p className="pf-empty">Belum ada proyek yang ditampilkan.</p>;

  return (
    <>
      <div className="pf-filter" role="group" aria-label="Filter kategori">
        {kategori.map((k) => (
          <button key={k} type="button" aria-pressed={filter === k}
            className={filter === k ? "is-active" : ""} onClick={() => setFilter(k)}>
            {k}
          </button>
        ))}
      </div>

      <div className="pf-grid">
        {list.map((p) => (
          <article className="pf-card" key={p.id}>
            <button type="button" className="pf-thumbbtn" onClick={() => setOpen(p)}
              aria-label={`Lihat detail ${p.judul}`}>
              <Thumb p={p} />
            </button>
            <div className="pf-body">
              <span className="pf-cat">{p.kategori}</span>
              <h3>{p.judul}</h3>
              <p className="pf-desc">{p.deskripsi}</p>
              <button type="button" className="pf-more" onClick={() => setOpen(p)}>
                Lihat detail →
              </button>
            </div>
          </article>
        ))}
      </div>

      {open && (
        <div className="pf-overlay" onClick={() => setOpen(null)}>
          <div className="pf-modal" role="dialog" aria-modal="true" aria-label={open.judul}
            onClick={(e) => e.stopPropagation()}>
            <Thumb p={open} big />
            <div className="pf-modal__info">
              <button type="button" className="pf-close" aria-label="Tutup" onClick={() => setOpen(null)}>×</button>
              <span className="pf-pill">{open.kategori}</span>
              <h2>{open.judul}</h2>
              <p>{open.deskripsi}</p>
              <Link href="/contact" className="pf-cta">Diskusi Project Serupa</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}