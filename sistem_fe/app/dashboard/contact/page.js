"use client";
import CrudTable from "../../components/CrudTable";

const tgl = (v) =>
  v ? new Date(v).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" }) : "-";

const pendek = (v) => (!v ? "-" : v.length > 80 ? v.slice(0, 80) + "…" : v);

export default function ContactPage() {
  return (
    <CrudTable
      title="Pesan Kontak"
      endpoint="/api/contact"
      canAdd={false}
      canEdit={false}
      columns={[
        { key: "created_at", label: "Tanggal", render: (r) => tgl(r.created_at) },
        { key: "name", label: "Nama" },
        { key: "email", label: "Email" },
        { key: "phone", label: "WhatsApp", render: (r) => r.phone || "-" },
        { key: "service", label: "Layanan", render: (r) => r.service || "-" },
        { key: "message", label: "Pesan", render: (r) => <span title={r.message}>{pendek(r.message)}</span> },
      ]}
      fields={[]}
    />
  );
}