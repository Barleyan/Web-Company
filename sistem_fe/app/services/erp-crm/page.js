import ServiceDetail from "../../components/ServiceDetail";

export const metadata = {
  title: "Jasa Pembuatan ERP & CRM | YourCompany",
  description:
    "Jasa pembuatan sistem ERP dan CRM yang mengintegrasikan keuangan, stok, penjualan, dan pelanggan dalam satu sistem. Konsultasi awal gratis.",
};

export default function ErpCrmPage() {
  return (
    <ServiceDetail
      hero={{
        title: "Jasa Pembuatan ERP & CRM untuk Bisnis Anda",
        text: "Integrasikan keuangan, stok, penjualan, dan pelanggan dalam satu sistem. Data tersambung, laporan lebih cepat, dan keputusan bisnis berdasarkan angka.",
        cta: "Diskusikan Project",
      }}
      featuresTitle="Modul yang Dapat Kami Bangun"
      featuresText="Pilih modul sesuai prioritas bisnis Anda. Modul lain bisa ditambahkan bertahap tanpa mengganti sistem."
      features={[
        { title: "Finance", text: "Pengelolaan transaksi, jurnal, dan laporan keuangan dalam satu tempat." },
        { title: "Inventory", text: "Monitoring stok, gudang, dan pergerakan barang secara langsung." },
        { title: "Sales", text: "Pengelolaan penjualan, penawaran, dan transaksi pelanggan." },
        { title: "Customer Management", text: "Data pelanggan, riwayat transaksi, dan hubungan dengan pelanggan yang terpusat." },
        { title: "Reporting", text: "Dashboard dan laporan bisnis yang diambil langsung dari data operasional." },
        { title: "Role Management", text: "Hak akses diatur per peran pengguna agar data hanya dilihat oleh yang berwenang." },
      ]}
      stepsTitle="Cara Kerja: 3 Langkah Membangun ERP & CRM Anda"
      stepsText="Dari pemetaan proses sampai sistem dipakai, dengan peluncuran bertahap agar operasional tidak terganggu."
      steps={[
        { title: "Diskusi & Pemetaan Proses", text: "Kami pelajari alur kerja, kendala, dan laporan yang Anda butuhkan, lalu menentukan modul prioritas." },
        { title: "Rancang & Bangun Modul", text: "Modul dibangun bertahap, dimulai dari yang paling berdampak, dengan demo berkala untuk masukan Anda." },
        { title: "Implementasi, Pelatihan & Dukungan", text: "Sistem diluncurkan bertahap, tim Anda dilatih, dan kami mendampingi dengan maintenance." },
      ]}
      checks={[
        "Modul dan estimasi biaya disepakati di awal",
        "Migrasi data dari sistem atau spreadsheet lama",
        "Pelatihan pengguna dan maintenance opsional",
      ]}
      cta={{
        title: "Siap membahas ERP & CRM untuk bisnis Anda?",
        text: "Konsultasi awal gratis. Kami bantu petakan modul yang dibutuhkan dan beri gambaran estimasi tanpa komitmen.",
      }}
    />
  );
}