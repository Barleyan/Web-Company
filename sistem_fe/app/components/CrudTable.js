"use client";
import { useEffect, useMemo, useState } from "react";
import { api } from "../lib/api";
import s from "../modul_css/dashboard.module.css";

/**
 * props:
 *  title, endpoint ("/api/portfolio")
 *  columns: [{ key, label, render?(row) }]
 *  fields:  [{ key, label, type: text|textarea|select|file, options?, required? }]
 */
export default function CrudTable({ title, endpoint, columns, fields, canAdd = true, canEdit = true, canDelete = true }) {
  const showAksi = canEdit || canDelete;
  const [rows, setRows] = useState([]);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [form, setForm] = useState(null); // null = modal tertutup
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const load = async () => {
    setLoading(true);
    try { setRows(await api.list(endpoint)); setErr(""); }
    catch (e) { setErr("Gagal memuat data. Pastikan server backend berjalan."); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const filtered = useMemo(
    () => rows.filter((r) => JSON.stringify(r).toLowerCase().includes(q.toLowerCase())),
    [rows, q]
  );
  const pages = Math.max(1, Math.ceil(filtered.length / size));
  const view = filtered.slice((page - 1) * size, page * size);

  const submit = async (e) => {
    e.preventDefault();
    const hasFile = fields.some((f) => f.type === "file");
    let body = form;
    if (hasFile) {
      body = new FormData();
      fields.forEach((f) => {
        const v = form[f.key];
        if (v !== undefined && v !== null) body.append(f.key, v);
      });
    }
    try { await api.save(endpoint, form.id, body); setForm(null); load(); }
    catch (e) { alert("Gagal menyimpan: " + e.message); }
  };

  const hapus = async (r) => {
    if (!confirm("Hapus data ini?")) return;
    try { await api.remove(endpoint, r.id); load(); }
    catch (e) { alert("Gagal menghapus: " + e.message); }
  };

  return (
    <div className={s.card}>
      <h2 className={s.cardTitle}>{title}</h2>
      <div className={s.toolbar}>
        <input className={s.input} placeholder="Cari data..." value={q}
          onChange={(e) => { setQ(e.target.value); setPage(1); }} />
        {canAdd && <button className={s.btnPrimary} onClick={() => setForm({})}>+ Tambah</button>}
      </div>

      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>{columns.map((c) => <th key={c.key}>{c.label}</th>)}{showAksi && <th>Aksi</th>}</tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={columns.length + (showAksi ? 1 : 0)}>Memuat...</td></tr>}
            {err && <tr><td colSpan={columns.length + (showAksi ? 1 : 0)} className={s.err}>{err}</td></tr>}
            {!loading && !err && view.length === 0 && (
              <tr><td colSpan={columns.length + (showAksi ? 1 : 0)}>{canAdd ? "Belum ada data. Klik “Tambah” untuk mulai." : "Belum ada data."}</td></tr>
            )}
            {view.map((r) => (
              <tr key={r.id}>
                {columns.map((c) => <td key={c.key}>{c.render ? c.render(r) : r[c.key]}</td>)}
                {showAksi && <td className={s.aksi}>
                  {canEdit && <button className={s.btnEdit} onClick={() => setForm({ ...r })} aria-label="Ubah">✎</button>}
                  {canDelete && <button className={s.btnDel} onClick={() => hapus(r)} aria-label="Hapus">🗑</button>}
                </td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={s.pager}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>‹</button>
        <span className={s.pageNow}>{page}</span>
        <span>/ {pages}</span>
        <button disabled={page === pages} onClick={() => setPage(page + 1)}>›</button>
        <select className={s.input} value={size} onChange={(e) => { setSize(+e.target.value); setPage(1); }}>
          {[10, 20, 50].map((n) => <option key={n}>{n}</option>)}
        </select>
      </div>

      {form && (
        <div className={s.overlay} onClick={() => setForm(null)}>
          <form className={s.modal} onClick={(e) => e.stopPropagation()} onSubmit={submit}>
            <h3>{form.id ? "Ubah" : "Tambah"} {title}</h3>
            {fields.map((f) => (
              <label key={f.key} className={s.field}>
                {f.label}
                {f.type === "textarea" ? (
                  <textarea className={s.input} rows={4} required={f.required}
                    value={form[f.key] || ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} />
                ) : f.type === "select" ? (
                  <select className={s.input} required={f.required}
                    value={form[f.key] || ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}>
                    <option value="">Pilih...</option>
                    {f.options.map((o) => <option key={o}>{o}</option>)}
                  </select>
                ) : f.type === "file" ? (
                  <input className={s.input} type="file" accept="image/*"
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.files[0] })} />
                ) : (
                  <input className={s.input} required={f.required}
                    value={form[f.key] || ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} />
                )}
              </label>
            ))}
            <div className={s.modalAct}>
              <button type="button" className={s.btnDel} onClick={() => setForm(null)}>Batal</button>
              <button className={s.btnPrimary}>Simpan</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}