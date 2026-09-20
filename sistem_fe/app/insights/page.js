import Link from "next/link";
import "./insights.css";

const articles = [
  {
    slug: "mengapa-bisnis-membutuhkan-digitalisasi",
    category: "Technology",
    title: "Mengapa Bisnis Membutuhkan Digitalisasi?",
    excerpt:
      "Digitalisasi bukan sekadar mengganti kertas dengan aplikasi. Ini soal merapikan proses, menyatukan data, dan mengambil keputusan lebih cepat.",
    art: "technology",
    color: "#ffd84d",
  },
  {
    slug: "cara-menggunakan-crm-untuk-mengelola-customer",
    category: "CRM",
    title: "Cara Menggunakan CRM untuk Mengelola Customer",
    art: "crm",
    color: "#ffb8d6",
  },
  {
    slug: "mengenal-sistem-erp-untuk-operasional-perusahaan",
    category: "ERP",
    title: "Mengenal Sistem ERP untuk Operasional Perusahaan",
    art: "erp",
    color: "#a6ecc8",
  },
  {
    slug: "ai-dan-automation-untuk-bisnis-modern",
    category: "AI",
    title: "AI dan Automation untuk Bisnis Modern",
    art: "ai",
    color: "#cbbcff",
  },
  {
    slug: "mengapa-business-dashboard-penting",
    category: "Dashboard",
    title: "Mengapa Business Dashboard Penting?",
    art: "dashboard",
    color: "#a5d8ff",
  },
  {
    slug: "membangun-custom-software-untuk-perusahaan",
    category: "Software",
    title: "Membangun Custom Software untuk Perusahaan",
    art: "software",
    color: "#ffab7a",
  },
];

/* Abstract cover art, one per topic. Drawn in the ink color on a flat background. */
function CoverArt({ type }) {
  let shapes = null;

  switch (type) {
    case "technology":
      shapes = (
        <>
          <circle cx="290" cy="130" r="28" />
          <circle cx="290" cy="130" r="58" />
          <circle cx="290" cy="130" r="88" />
          <circle cx="290" cy="130" r="118" opacity="0.35" />
          <circle cx="290" cy="130" r="9" fill="currentColor" stroke="none" />
        </>
      );
      break;

    case "crm":
      shapes = (
        <>
          <path d="M90 70 200 120 310 60M200 120 150 200M200 120 300 190M150 200 300 190" />
          <circle cx="90" cy="70" r="16" fill="var(--cover)" />
          <circle cx="310" cy="60" r="16" fill="var(--cover)" />
          <circle cx="150" cy="200" r="16" fill="var(--cover)" />
          <circle cx="300" cy="190" r="16" fill="var(--cover)" />
          <circle cx="200" cy="120" r="24" fill="currentColor" />
        </>
      );
      break;

    case "erp":
      shapes = (
        <>
          <rect x="70" y="60" width="70" height="70" rx="14" />
          <rect x="170" y="60" width="70" height="70" rx="14" fill="currentColor" />
          <rect x="270" y="60" width="70" height="70" rx="14" />
          <rect x="70" y="150" width="70" height="70" rx="14" />
          <rect x="170" y="150" width="70" height="70" rx="14" />
          <rect x="270" y="150" width="70" height="70" rx="14" fill="currentColor" />
        </>
      );
      break;

    case "ai":
      shapes = (
        <>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const inner = 44;
            const outer = i % 2 ? 84 : 116;
            return (
              <line
                key={i}
                x1={(280 + inner * Math.cos(angle)).toFixed(1)}
                y1={(130 + inner * Math.sin(angle)).toFixed(1)}
                x2={(280 + outer * Math.cos(angle)).toFixed(1)}
                y2={(130 + outer * Math.sin(angle)).toFixed(1)}
              />
            );
          })}
          <circle cx="280" cy="130" r="22" fill="currentColor" />
        </>
      );
      break;

    case "dashboard":
      shapes = (
        <>
          <path d="M55 215H345" />
          <rect x="75" y="155" width="34" height="60" rx="8" />
          <rect x="130" y="115" width="34" height="100" rx="8" />
          <rect x="185" y="135" width="34" height="80" rx="8" />
          <rect x="240" y="75" width="34" height="140" rx="8" fill="currentColor" />
          <rect x="295" y="105" width="34" height="110" rx="8" />
        </>
      );
      break;

    default:
      shapes = (
        <>
          <path d="M150 90 100 130 150 170" />
          <path d="M250 90 300 130 250 170" />
          <path d="M218 78 182 182" />
        </>
      );
  }

  return (
    <svg
      className="insight-art"
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {shapes}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function InsightsPage() {
  return (
    <main className="insights">
      <section className="insights-hero">
        <div className="insights-hero__inner">
          <span className="insights-hero__tag">Insights</span>

          <h1>
            Ideas for digital
            <br />
            business growth.
          </h1>

          <p>
            Tulisan singkat seputar digitalisasi, CRM, ERP, AI, dan software
            untuk bisnis yang ingin berkembang.
          </p>
        </div>
      </section>

      <section className="insights-section">
        <div className="insights-grid">
          {articles.map((article, index) => (
            <article
              key={article.slug}
              className={`insight-card${index === 0 ? " insight-card--featured" : ""}`}
              style={{ "--cover": article.color }}
            >
              <div className="insight-cover">
                <CoverArt type={article.art} />
              </div>

              <div className="insight-content">
                <span className="insight-category">{article.category}</span>

                <h3>
                  <Link
                    className="insight-link"
                    href={`/insights/${article.slug}`}
                  >
                    {article.title}
                  </Link>
                </h3>

                {article.excerpt && (
                  <p className="insight-excerpt">{article.excerpt}</p>
                )}

                <span className="insight-cta">
                  Baca artikel
                  <ArrowIcon />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}