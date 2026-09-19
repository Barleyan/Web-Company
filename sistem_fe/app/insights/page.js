const articles = [
  {
    category: "Technology",
    title: "Mengapa Bisnis Membutuhkan Digitalisasi?",
  },
  {
    category: "CRM",
    title: "Cara Menggunakan CRM untuk Mengelola Customer",
  },
  {
    category: "ERP",
    title: "Mengenal Sistem ERP untuk Operasional Perusahaan",
  },
  {
    category: "AI",
    title: "AI dan Automation untuk Bisnis Modern",
  },
  {
    category: "Dashboard",
    title: "Mengapa Business Dashboard Penting?",
  },
  {
    category: "Software",
    title: "Membangun Custom Software untuk Perusahaan",
  },
];

export default function InsightsPage() {
  return (
    <main>

      <section className="page-hero">

        <span>INSIGHTS</span>

        <h1>
          Ideas for digital
          <br />
          business growth.
        </h1>

      </section>

      <section className="section">

        <div className="insights-grid">

          {articles.map((article, index) => (

            <article
              className="insight-card"
              key={index}
            >

              <div className="insight-image">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="insight-content">

                <small>
                  {article.category}
                </small>

                <h3>
                  {article.title}
                </h3>

                <button>
                  Read Article →
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}