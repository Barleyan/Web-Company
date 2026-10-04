"use client";
import CrudTable from "../components/CrudTable";
import { fileUrl } from "../lib/api";

export default function PortfolioPage() {
  return (
    <CrudTable
      title="Portfolio"
      endpoint="/api/portfolio"
      columns={[
        { key: "gambar", label: "Gambar", render: (r) =>
            r.gambar ? <img src={fileUrl(r.gambar)} alt="" width={64} height={40} style={{ objectFit: "cover", borderRadius: 6 }} /> : "-" },
        { key: "judul", label: "Judul" },
        { key: "kategori", label: "Kategori" },
        { key: "klien", label: "Klien" },
        { key: "deskripsi", label: "Deskripsi" },
      ]}
      fields={[
        { key: "judul", label: "Judul", type: "text", required: true },
        { key: "kategori", label: "Kategori", type: "select", options: ["Website", "Aplikasi Mobile", "Desain", "Lainnya"], required: true },
        { key: "klien", label: "Klien", type: "text" },
        { key: "deskripsi", label: "Deskripsi", type: "textarea" },
        { key: "gambar", label: "Gambar", type: "file" },
      ]}
    />
  );
}