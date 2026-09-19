import Link from "next/link";

export default function CustomSoftwarePage() {
  return (
    <main>

      <section className="detail-hero">

        <span>CUSTOM SOFTWARE</span>

        <h1>
          Software yang mengikuti
          <br />
          proses bisnis Anda.
        </h1>

        <p>
          Kami membangun aplikasi custom berdasarkan
          kebutuhan, workflow dan struktur bisnis perusahaan.
        </p>

        <Link
          href="/contact"
          className="button-primary"
        >
          Konsultasi Sekarang →
        </Link>

      </section>

      <section className="section">

        <div className="section-heading">

          <span>SOLUSI</span>

          <h2>
            Apa yang dapat kami bangun?
          </h2>

        </div>

        <div className="services-grid">

          <div className="service-card">
            <h3>Business Application</h3>
            <p>
              Aplikasi internal untuk mendukung operasional perusahaan.
            </p>
          </div>

          <div className="service-card">
            <h3>Management System</h3>
            <p>
              Sistem untuk mengelola data, proses dan aktivitas bisnis.
            </p>
          </div>

          <div className="service-card">
            <h3>Workflow Automation</h3>
            <p>
              Mengurangi pekerjaan manual melalui workflow digital.
            </p>
          </div>

        </div>

      </section>

      <section className="dark-section">

        <div className="solutions-container">

          <div>

            <span className="section-label">
              DEVELOPMENT PROCESS
            </span>

            <h2>
              From idea
              <br />
              to production.
            </h2>

          </div>

          <div className="solution-list">

            <div>
              <span>01</span>
              <div>
                <h3>Discovery</h3>
                <p>
                  Memahami kebutuhan dan proses bisnis.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <h3>Design</h3>
                <p>
                  Merancang UI, UX dan arsitektur sistem.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>
              <div>
                <h3>Development</h3>
                <p>
                  Mengembangkan dan menguji aplikasi.
                </p>
              </div>
            </div>

            <div>
              <span>04</span>
              <div>
                <h3>Deployment</h3>
                <p>
                  Deployment dan maintenance sistem.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}