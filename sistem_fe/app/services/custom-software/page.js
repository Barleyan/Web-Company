import ServiceDetail from "../../components/ServiceDetail";

export const metadata = {
  title: "Jasa Pembuatan Custom Software | YourCompany",
  description:
    "Jasa pembuatan software custom yang mengikuti proses bisnis Anda. Konsultasi awal gratis.",
};

export default function CustomSoftwarePage() {
  return (
    <ServiceDetail
      hero={{
        title: "Jasa Pembuatan Custom Software untuk Bisnis Anda",
        text: "Software yang dirancang mengikuti alur kerja perusahaan Anda, bukan sebaliknya. Terintegrasi, mudah dikembangkan, dan didampingi tim kami dari awal sampai berjalan.",
        cta: "Konsultasi Gratis",
      }}
      featuresTitle="Kenapa Memilih Custom Software dari Kami"
      featuresText="Bukan aplikasi siap pakai yang dipaksakan ke bisnis Anda. Setiap fitur dibangun sesuai kebutuhan operasional."
      features={[
        { title: "Sesuai Proses Bisnis", text: "Alur, peran pengguna, dan laporan disusun dari cara kerja tim Anda yang sebenarnya." },
        { title: "Modul Terintegrasi", text: "Data dari tiap bagian terhubung dalam satu sistem, sehingga tidak perlu input ulang." },
        { title: "Otomatisasi Workflow", text: "Persetujuan, notifikasi, dan laporan berjalan otomatis untuk mengurangi pekerjaan manual." },
        { title: "Mudah Dikembangkan", text: "Arsitektur dibuat agar fitur baru bisa ditambahkan saat bisnis Anda berkembang." },
        { title: "Data Lebih Aman", text: "Hak akses per pengguna dan pencadangan data untuk melindungi informasi perusahaan." },
        { title: "Dukungan Berkelanjutan", text: "Pendampingan setelah peluncuran, mulai dari perbaikan hingga pengembangan lanjutan." },
      ]}
      stepsTitle="Cara Kerja: 3 Langkah Membangun Software Anda"
      stepsText="Proses yang jelas dari diskusi pertama sampai software dipakai tim Anda."
      steps={[
        { title: "Diskusi & Analisis Kebutuhan", text: "Kami pelajari proses bisnis, kendala, dan target Anda, lalu menyusun rancangan fitur dan estimasi." },
        { title: "Desain & Pengembangan", text: "Tim kami merancang tampilan dan sistem, lalu membangunnya bertahap dengan demo berkala agar Anda bisa memberi masukan." },
        { title: "Uji, Peluncuran & Pendampingan", text: "Software diuji bersama tim Anda, diluncurkan, dan kami dampingi dengan pelatihan serta maintenance." },
      ]}
      checks={[
        "Ruang lingkup dan estimasi biaya disepakati di awal",
        "Dokumentasi dan pelatihan untuk tim Anda",
        "Maintenance bulanan bersifat opsional",
      ]}
      cta={{
        title: "Siap membahas software untuk bisnis Anda?",
        text: "Konsultasi awal gratis. Kami bantu petakan kebutuhan dan beri gambaran estimasi tanpa komitmen.",
      }}
    />
  );
}