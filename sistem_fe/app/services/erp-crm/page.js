import Link from "next/link";

export default function ErpCrmPage() {
  return (
    <main>

      <section className="detail-hero">

        <span>ERP & CRM</span>

        <h1>
          Integrasikan proses
          <br />
          bisnis dalam satu sistem.
        </h1>

        <p>
          ERP dan CRM membantu perusahaan mengelola
          operasional, pelanggan dan data secara terintegrasi.
        </p>

        <Link
          href="/contact"
          className="button-primary"
        >
          Diskusikan Project →
        </Link>

      </section>

      <section className="section">

        <div className="services-grid">

          <div className="service-card">
            <h3>Finance</h3>
            <p>
              Pengelolaan transaksi dan laporan keuangan.
            </p>
          </div>

          <div className="service-card">
            <h3>Inventory</h3>
            <p>
              Monitoring stok, gudang dan pergerakan barang.
            </p>
          </div>

          <div className="service-card">
            <h3>Sales</h3>
            <p>
              Pengelolaan penjualan dan transaksi pelanggan.
            </p>
          </div>

          <div className="service-card">
            <h3>Customer Management</h3>
            <p>
              Pengelolaan data dan hubungan dengan pelanggan.
            </p>
          </div>

          <div className="service-card">
            <h3>Reporting</h3>
            <p>
              Dashboard dan laporan bisnis berdasarkan data.
            </p>
          </div>

          <div className="service-card">
            <h3>Role Management</h3>
            <p>
              Pengaturan hak akses berdasarkan role pengguna.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}