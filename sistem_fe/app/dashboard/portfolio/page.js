"use client";
import CrudTable from "../../components/CrudTable";
import { fileUrl } from "../../lib/api";

const kategori = ["Enterprise", "Healthcare", "Retail", "CRM", "ERP", "Dashboard", "Lainnya"];

export default function PortfolioPage() {
  return (
    <CrudTable
      title="Portfolio"
      endpoint="/api/portfolio"
      columns={[
        { key: "gambar", label: "Foto", render: (r) =>
            r.gambar
              ? <img src={fileUrl(r.gambar)} alt={r.judul} width={72} height={46} style={{ objectFit: "cover", borderRadius: 6 }} />
              : "-" },
        { key: "judul", label: "Judul" },
        { key: "kategori", label: "Kategori" },
        { key: "deskripsi", label: "Deskripsi", render: (r) => r.deskripsi || "-" },
      ]}
      fields={[
        { key: "judul", label: "Judul Proyek", type: "text", required: true },
        { key: "kategori", label: "Kategori", type: "select", options: kategori, required: true },
        { key: "deskripsi", label: "Deskripsi", type: "textarea" },
        { key: "gambar", label: "Foto (maks. 2 MB)", type: "file" },
      ]}
    />
  );
}