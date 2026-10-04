import ServiceDetail from "../../components/ServiceDetail";

export const metadata = {
  title: "Jasa Pembuatan Website | YourCompany",
  description:
    "Jasa pembuatan website profesional: company profile, toko online, dan aplikasi web. Cepat, responsif, dan mudah dikelola. Konsultasi awal gratis.",
};

export default function WebDevelopmentPage() {
  return (
    <ServiceDetail
      hero={{
        title: "Jasa Pembuatan Website untuk Bisnis Anda",
        text: "Website yang cepat, tampil rapi di semua perangkat, dan mudah Anda kelola sendiri. Dari company profile sampai aplikasi web yang kompleks.",
        cta: "Konsultasi Gratis",
      }}
      featuresTitle="Website yang Dapat Kami Bangun"
      featuresText="Setiap website dirancang sesuai tujuan bisnis Anda, bukan sekadar template yang diganti logo."
      features={[
        { title: "Company Profile", text: "Website resmi perusahaan yang membangun kepercayaan dan memudahkan calon pelanggan menghubungi Anda." },
        { title: "Toko Online", text: "Katalog produk, keranjang, dan alur pemesanan yang memudahkan pelanggan membeli." },
        { title: "Aplikasi Web", text: "Dashboard, sistem pemesanan, portal pelanggan, atau aplikasi internal berbasis browser." },
        { title: "Landing Page", text: "Halaman fokus untuk promosi atau kampanye dengan tujuan jelas, seperti pendaftaran atau penjualan." },
        { title: "Responsif & Cepat", text: "Tampil baik di ponsel, tablet, dan komputer, dengan waktu muat yang dijaga tetap ringan." },
        { title: "SEO & Panel Admin", text: "Struktur ramah mesin pencari, serta panel admin agar konten bisa Anda ubah sendiri." },
      ]}
      stepsTitle="Cara Kerja: 3 Langkah Membangun Website Anda"
      stepsText="Proses yang jelas dari ide sampai website tayang, dengan kesempatan memberi masukan di setiap tahap."
      steps={[
        { title: "Diskusi & Perencanaan", text: "Kami pelajari tujuan bisnis, target pengunjung, dan referensi tampilan, lalu menyusun struktur halaman dan estimasi." },
        { title: "Desain & Pengembangan", text: "Desain disetujui lebih dulu, kemudian dikembangkan menjadi website yang berfungsi penuh dan bisa Anda coba sebelum tayang." },
        { title: "Peluncuran & Dukungan", text: "Website diluncurkan di domain Anda, ditambah panduan penggunaan dan dukungan perbaikan setelahnya." },
      ]}
      checks={[
        "Struktur halaman dan estimasi biaya disepakati di awal",
        "Panduan mengelola konten untuk tim Anda",
        "Perawatan dan pembaruan bulanan bersifat opsional",
      ]}
      cta={{
        title: "Siap membuat website untuk bisnis Anda?",
        text: "Konsultasi awal gratis. Ceritakan kebutuhan Anda dan kami beri gambaran fitur serta estimasi tanpa komitmen.",
      }}
    />
  );
}